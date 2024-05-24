import Button from "./Button";
import Carousel from "./Carousel";
import styles from "./Hero.module.css";

import image1 from "/images/carousel/image-1.jpg";
import image2 from "/images/carousel/image-2.jpg";
import image3 from "/images/carousel/image-3.jpg";
import image4 from "/images/carousel/image-4.jpg";
import image5 from "/images/carousel/image-5.jpg";

const IMAGES = [image1, image2, image3, image4, image5];

function Hero() {
  return (
    <section className={styles.heroContainer} id="hero">
      <div className={styles.hero}>
        <div className={styles.textBox}>
          <h1>Tongji Hospital Badminton Team</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            nostrum dicta, doloribus magnam doloremque quo quisquam dolorum
            debitis totam. Vitae explicabo, rerum vel eos exercitationem quos
            neque sapiente possimus rem?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            nostrum dicta, doloribus magnam doloremque quo quisquam dolorum
            debitis totam. Vitae explicabo, rerum vel eos exercitationem quos
            neque sapiente possimus rem?
          </p>
          <p>some smaller text or image</p>
          <div className={styles.buttonContainer}>
            <Button type="primary">
              <a href="#honer">Learn more &darr;</a>
            </Button>
          </div>
        </div>
        <Carousel imageUrls={IMAGES} />
      </div>
    </section>
  );
}

export default Hero;
