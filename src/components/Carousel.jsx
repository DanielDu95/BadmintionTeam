import { useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const showNextImage = useCallback(() => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
  });
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      else return index - 1;
    });
  }
  useEffect(
    function () {
      setTimeout(showNextImage, 3000);
    },
    [showNextImage]
  );
  return (
    <div className={styles.carouselContainer}>
      <button className={styles.btns} onClick={showPrevImage}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <div className={styles.imageContainer}>
        {imageUrls.map((url) => {
          return (
            <img
              style={{
                translate: `${-100 * imageIndex}%`,
                // scale: `${index === imageIndex ? "1.2" : "0.8"}`,
                // display: `${Math.abs(imageIndex - index) > 1 ? "none" : ""}`,
              }}
              key={url}
              src={url}
              alt="badminton players"
              className={styles.image}
            />
          );
        })}
        <div className={styles.dots}>
          {imageUrls.map((_, index) => (
            <button key={index} onClick={() => setImageIndex(index)}>
              {index === imageIndex ? (
                <ion-icon className={styles.dot} name="ellipse"></ion-icon>
              ) : (
                <ion-icon
                  className={styles.dot}
                  name="ellipse-outline"
                ></ion-icon>
              )}
            </button>
          ))}
        </div>
      </div>

      <button className={styles.btns} onClick={showNextImage}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Carousel;
