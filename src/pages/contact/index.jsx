import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <main className="py-5" id={styles.contactPage}>
      <ContactForm />
    </main>
  );
}

export default Contact;
