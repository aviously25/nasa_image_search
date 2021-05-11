import { useRouter } from "next/router";
import Image from "next/image";
import { Navbar } from "../components/";

const Search = ({ data }) => {
  console.log(data.collection);

  return (
    <>
      <div className="image-gallery">
        {data.collection.items.map((item, index) => (
          <div key={index} className="imgdiv">
            <Image
              src={item.links[0].href}
              width={150}
              height={150}
              layout="responsive"
              objectFit="contain"
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
