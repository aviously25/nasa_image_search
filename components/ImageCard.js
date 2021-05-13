import Image from "next/image";
import { Card } from "react-bootstrap";

const ImageCard = ({ imgsrc, data }) => {
  return (
    <>
      <Card bg="dark" text="white" className="image-card">
        <Image
          src={imgsrc}
          alt={data.description}
          width={150}
          height={150}
          layout="responsive"
          objectFit="cover"
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Subtitle className="text-muted">
            {data.date_created.substr(0, 10)}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  );
};

export default ImageCard;
