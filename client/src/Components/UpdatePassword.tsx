import React, { FormEvent, useState } from "react";
import { UPDATE_PASSWORD } from "../Graphql/Mutation";
import { useMutation } from "@apollo/client";

function UpdatePassword() {
  const [input, setInput] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
  });

  const { username, currentPassword, newPassword } = input;

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    updatePassword({
      variables: {
        username: username,
        oldPassword: currentPassword,
        newPassword: newPassword,
      },
    });
  };

  if (error) {
    return <h1> {error} </h1>;
  }
  return (
    <form onSubmit={onSubmit} className="col">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Name</label>
        <input
          type="text"
          name="name"
          value={username}
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
          value={currentPassword}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Username"
          onChange={e => inputHandler(e)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Password</label>
        <input
          type="password"
          name="password"
          value={newPassword}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Password"
          onChange={e => inputHandler(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        UPDATE PASSWORD
      </button>
    </form>
    // <div>
    //   <input
    //     type="text"
    //     placeholder="Username..."
    //     onChange={(event) => {
    //       setUsername(event.target.value);
    //     }}
    //   />
    //   <input
    //     type="password"
    //     placeholder="Current Password..."
    //     onChange={(event) => {
    //       setCurrentPassword(event.target.value);
    //     }}
    //   />
    //   <input
    //     type="password"
    //     placeholder="New Password..."
    //     onChange={(event) => {
    //       setNewPassword(event.target.value);
    //     }}
    //   />

    //   <button
    //     onClick={() => {
    //       updatePassword({
    //         variables: {
    //           username: username,
    //           oldPassword: currentPassword,
    //           newPassword: newPassword,
    //         },
    //       });
    //     }}
    //   >
    //     UPDATE PASSWORD
    //   </button>
    // </div>
  );
}

export default UpdatePassword;
