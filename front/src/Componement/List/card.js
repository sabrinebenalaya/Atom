import React from "react";
import Card from "react-bootstrap/Card";
import CustomButon from "../../Atoms/Button";
import Content from "../../Atoms/Content";
import Title from "../../Atoms/Title";
import { styleAdd } from './../../Style/style';
const styleCard = {...styleAdd, width: '18rem', padding:"2%"}
function CustomCard({user}) {
  return (
    <Card  style={styleCard}>
      <Title title={user.userName} /> 
      <Content Content={user.age} />
      <Content Content={user.email} />
      <CustomButon variant="primary" title="Show Article" />
    </Card>
  );
}

export default CustomCard;
