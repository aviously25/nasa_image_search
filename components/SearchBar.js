import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="SearchBar">
      <Form.Control type="search" placeholder="eg: Orion" />
      <Button variant="secondary" type="submit">
        <img src="/Magnifying_glass_icon.svg"></img>
      </Button>
    </Form>
  );
};

export default SearchBar;
