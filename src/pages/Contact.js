import { CustomNavbar } from "../components/Navbar";
import styles from "../styles/pages/Contact.module.css";
import { Form } from "react-bootstrap";

export const Contact = () => {
  return (
    <>
      <CustomNavbar />
      <section className={styles.contact}>
        <h2>contact</h2>
        <span>
          N'hésitez pas à me contacter en soumettant le formulaire ci-dessous et
          je vous répondrai dans les plus brefs délais.
        </span>
        <div className={styles.form}>
          <Form action="https://formspree.io/f/xzzbgvgv" method="POST">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label htmlFor="name">Nom :</Form.Label>
              <Form.Control
                id="name"
                name="name"
                type="text"
                placeholder="Entrez votre nom"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label htmlFor="email">Email :</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                placeholder="Entrez votre Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label htmlFor="message">Message :</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows={5}
                placeholder="Entrez votre message"
                required
              />
            </Form.Group>
            <button className={styles.button} type="submit">
              Envoyer
            </button>
          </Form>
        </div>
      </section>
    </>
  );
};
