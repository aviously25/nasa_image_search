import { Image, Modal, Button } from "react-bootstrap";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const getImgLinks = (nasa_id) => {
  const { data, error } = useSWR(
    `https://images-api.nasa.gov/asset/${nasa_id}`,
    fetcher
  );

  if (error) return error;
  if (!data) return null;

  return data.collection.items[0].href;
};

const ImageModal = ({ imgsrc, data, show, onHide }) => {
  let origImg = getImgLinks(data.nasa_id);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal show={show} onHide={onHide} centered>
        <Modal.Header>
          <Image
            src={imgsrc}
            alt={data.description}
            width={100}
            height={100}
            layout="responsive"
          />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className="pb-3">{data.title}</Modal.Title>
          <p>
            <strong>Keywords</strong>: {data.keywords.join(", ")}
          </p>
          <p>
            <strong>Date Created</strong>: {data.date_created.substr(0, 10)}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={onHide}>
            Close
          </Button>
          <Button variant="secondary" className="text-light" href={origImg}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageModal;
