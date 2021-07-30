import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { HelloWorld } from "./pages/HelloWorld";
import { helloUniverse } from "./pages/helloUniverse";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { func } from "prop-types";

export default function App() {
  return (
    <div>
      <MyRegisterComponent />
    </div>
  );
}

function MyRegisterComponent() {
  let [userList, setuserList] = userState([{ id: 1 }]);

  constAddNewUser =() =>{
    const newUser ={id: userList.length+ 1, name:}
  }
  return (
    <div>
      <h1>User Registration</h1>

      <form className="m-2">
        <div>
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="enter your name"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="enter your name"
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control form-control-lg "
            placeholder="enter your name"
          />
        </div>

        <div>
          <input
            type="mobile"
            className="form-control form-control-lg "
            placeholder="enter your Number"
          />
        </div>

        <div>
          <input
            type="button"
            value="Register"
            className="btn btn-secondary w-100"
          />
        </div>
      </form>

      <table className="table table-dark table-striped m-2">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">uSENAME</th>
            <th scope="col">PASSWORD</th>
            <th scope="col">EMAIL</th>
            <th scope="col">MOBILE</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((item) => {
            return (
              <tr>
                <td>{item.mobile}</td>
                <td>{item.mobile}</td>
                <td>{item.mobile}</td>
                <td>{item.mobile}</td>
                <td>{item.mobile}</td>
              </tr>
            );
          })}

          <tr>
            <td>1</td>
            <td>rahul</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
