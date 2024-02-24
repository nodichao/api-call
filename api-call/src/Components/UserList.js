import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1 style={{textAlign:'center'}}>List Of Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Usename</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
            {listOfUsers.map( user=>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
          </tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}
