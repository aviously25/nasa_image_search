import { Form, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="SearchBar" action="/search/" method="get">
      <Form.Control type="text" placeholder="eg: Orion" name="q" />
      <Button variant="secondary" type="submit">
        <img src="/Magnifying_glass_icon.svg" alt="search icon"></img>
      </Button>
    </Form>
  );
};

export default SearchBar;
