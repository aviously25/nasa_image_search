import { Navbar } from "react-bootstrap";
import { SearchBar } from "./";

const NasaNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="p-2" sticky="top">
      <Navbar.Brand href="/">
        <img src="/NASA_logo.svg" width="85px" />
      </Navbar.Brand>
      <div className="">
        <SearchBar />
      </div>
    </Navbar>
  );
};

export default NasaNavbar;
