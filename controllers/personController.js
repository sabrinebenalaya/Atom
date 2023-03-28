const Person = require("../models/person");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const getAllPersons = async (request, response) => {
  try {
    const users = await Person.find();
    response.status(200).json({ users });
  } catch (error) {
    response.status(500).json({ msg: "error on getting users" });
  }
};

const getOnePerson = async (request, response) => {
  const id_person = request.params.id;
  try {
    const person = await Person.findById(id_person);
    if (person) {
      response.status(201).json({ person });
    } else {
      response.status(404).json({ msg: "person not found" });
    }
  } catch (error) {
    response.status(500).json({ msg: "operation getOnePerson is failed" });
  }
};
const deletePerson = async (request, response) => {
  const id_person = request.params.id;
  try {
    const res = await Person.findByIdAndDelete(id_person);
    response.status(201).json({ msg: "person is deleted" });
  } catch (error) {
    response.status(500).json({ msg: "operation of delete person is failed" });
  }
};

const updatePerson = async (request, response) => {
  const id_person = request.params.id;
  const personeUpdate = request.body;
  try {
    await Person.findByIdAndUpdate(id_person, personeUpdate);
    const person = await Person.findById(id_person);
    response.status(200).json({ person });
  } catch (error) {
    response.status(500).json({ msg: "error on updating user" });
  }
};
const filterAge = async (request, response) => {
  const { max, min } = request.query;
  try {
    let persones = await Person.find();
    persones = persones.filter((elt) => elt.age >= min && elt.age <= max);
    if (persones) {
      response.status(200).json({ persones });
    } else {
      response.status(404).json({ msg: "person not found with this age" });
    }
  } catch (error) {
    response.status(500).json({ msg: "error on filtering users by age" });
  }
};
const searchByName = async (request, response) => {
  const { userName } = request.query;
  try {
    const persons = await Person.find()
    const person = persons.filter((el)=>el.userName.toLowerCase().includes(userName.toLowerCase()))
    console.log({person})
    if (person) {
      response.status(200).json({ person });
    } else {
      response.status(404).json({ msg: "user not found" });
    }
  } catch (error) {
    response.status(500).json({ msg: "error on searching user" });
  }
};

const createPerson = async (request, response) => {
  const newPerson = request.body;
  console.log("new person=", newPerson);
  const hashedPaswword = await bcrypt.hash(newPerson.password, 10);
  const personn = new Person({
    userName: newPerson.userName,
    email: newPerson.email,
    age: newPerson.age,
    password: hashedPaswword,
  });
  console.log(" person=", personn);
  try {
    const person = await personn.save();
    console.log(" person=", person);
    if (!person) {
      response.status(404).json({ msg: "person not added" });
    } else {
      response.status(200).json({ person });
    }
  } catch (error) {
    response.status(500).json({ msg: "Operation of addPerson is failed" });
  }
};
module.exports = {
  getAllPersons,
  deletePerson,
  updatePerson,
  getOnePerson,
  createPerson,
  searchByName,
  filterAge,
};
