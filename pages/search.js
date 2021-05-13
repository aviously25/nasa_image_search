import { Navbar, ImageCard } from "../components";

const Search = ({ data }) => {
  console.log(data.collection);

  const handleClick = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <Navbar />
      <div className="image-gallery">
        {data.collection.items.map((item, index) => (
          <div key={index} className="imgdiv">
            <ImageCard
              imgsrc={item.links[0].href}
              data={item.data[0]}
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // Fetch query from NASA Image api
  const res = await fetch(
    `https://images-api.nasa.gov/search?q=${context.query.q}&media_type=image`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  //returns the fetched data as a prop
  return {
    props: { data },
  };
}

export default Search;
