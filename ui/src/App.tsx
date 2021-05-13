import { Navbar } from "./components/NavBar/Navbar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Main } from "./components/Main";
import { Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  return (
    <div className="wrapper">
      <Navbar />
      <Container maxWidth="lg">
        <SearchBar />
        <Main />
      </Container>
    </div>
  );
}

export default App;
