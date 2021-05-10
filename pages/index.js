import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <Head>
        <title>NASA Image Search</title>
      </Head>

      {/* Main Content Here */}
      <Container>
        {/* Row for the logo */}
        <Row className="text-center p-5">
          <Col>
            <Image
              src="/NASA_logo.svg"
              alt="NASA Logo"
              height={200}
              width={200}
            />
          </Col>
        </Row>

        {/* Row for the Search */}
        <Row>
          <Col>
            <h1 className="text-center text-white mb-5">NASA Image Search</h1>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
