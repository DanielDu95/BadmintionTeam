import styles from "./ContactUs.module.css";
function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
      <h1>Contact us</h1>
      <div className={styles.itemsContainer}>
        <div className={styles.contactItem}>content</div>
        <div className={styles.contactItem}>content</div>
        <div className={styles.contactItem}>content</div>
      </div>
    </div>
  );
}

export default ContactUs;
