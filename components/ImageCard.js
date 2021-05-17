import Image from "next/image";
import { Card } from "react-bootstrap";
import { useState } from "react";
import ImageModal from "./ImageModal";

const ImageCard = ({ imgsrc, data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div onClick={handleShow}>
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
      <ImageModal
        show={show}
        onHide={handleClose}
        imgsrc={imgsrc}
        data={data}
      />
    </div>
  );
};

export default ImageCard;
