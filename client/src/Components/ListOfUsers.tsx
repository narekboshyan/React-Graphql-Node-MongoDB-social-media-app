import React, { Fragment } from "react";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";
import { useQuery, useMutation } from "@apollo/client";

function ListOfUsers() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser] = useMutation(DELETE_USER);

  const onDeleteUser = (id: string) => {
    deleteUser({ variables: { id } });
  };

  return (
    <ul className="list-group">
      {data?.getAllUsers.map((user: any) => (
        <Fragment key={user.id}>
          <li className="list-group-item">
            <div key={user.id} className="d-flex justify-content-between">
              <span>
                {user.name} / {user.username}
              </span>
              <button
                onClick={onDeleteUser.bind(null, user.id)}
                className="btn btn-danger"
              >
                Delete User
              </button>
            </div>{" "}
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

export default ListOfUsers;
