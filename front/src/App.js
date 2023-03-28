import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AddUser from "./Componement/AddUser/addUser";
import CustomCard from "./Componement/List/card";
import "bootstrap/dist/css/bootstrap.min.css";
import Listindex from "./Componement/List";
import SideBar from "./Componement/SideBar/index";
function App() {
  const routes = [
    {
      path: "/",
      element: <SideBar />,
      children: [
        {
          path: "/",
          element: <Listindex />,
        },
        {
          path: "/addUser",
          element: <AddUser />,
        },
      ],
    }, 
  ];
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
