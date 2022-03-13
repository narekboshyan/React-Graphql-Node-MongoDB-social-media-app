import React, { useState } from "react";
import { CREATE_USER } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";
function CreateUser() {
  const [input, setInput] = useState({
    name: "",
    password: "",
    username: "",
  });

  const { name, password, username } = input;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [createUser] = useMutation(CREATE_USER);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUser({
      variables: {
        name,
        username,
        password,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="col">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Name"
          onChange={e => inputHandler(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Name"
          onChange={e => inputHandler(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Name"
          onChange={e => inputHandler(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateUser;
