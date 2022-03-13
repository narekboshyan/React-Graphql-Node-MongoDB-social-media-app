import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div className="container">
      <ApolloProvider client={client}>
        <div className="row mb-5">
          <CreateUser />
          <UpdatePassword />
        </div>
        <div className="row">
          <ListOfUsers />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
