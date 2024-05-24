import styles from "./Gallery.module.css";
import Masonry from "react-responsive-masonry";
import image1 from "/images/carousel/image-1.jpg";
import image2 from "/images/carousel/image-2.jpg";
import image3 from "/images/carousel/image-3.jpg";
import image4 from "/images/carousel/image-4.jpg";
import image5 from "/images/carousel/image-5.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image5,
  image4,
  image2,
  image3,
  image1,
  image1,
  image2,
  image3,
  image4,
  image5,
];
function Gallery() {
  return (
    <div className={styles.masonryContainer} id="gallery">
      <h1>Gallery</h1>
      <Masonry columnsCount={5} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
      </Masonry>
    </div>
  );
}

export default Gallery;
