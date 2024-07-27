import styles from "./SliderArrows.module.scss";

const SliderArrows = () => {
  return (
    <div className={styles.container}>
      <button href="/" className={styles.sliderBtn}>
        <svg className={styles.sliderArrow}>
          <use href="/sprite.svg#icon-arrow-left-orange" />
        </svg>
      </button>
      <button href="/" className={styles.sliderBtn}>
        <svg className={styles.sliderArrow}>
          <use href="/sprite.svg#icon-arrow-right-orange" />
        </svg>
      </button>
    </div>
  );
};

export default SliderArrows;
