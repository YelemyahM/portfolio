import { CustomNavbar } from "../components/Navbar";
import { Link } from "react-router-dom";
import styles from "../styles/pages/NotFound.module.css";
export const NotFound = () => {
  return (
    <>
      <CustomNavbar />
      <section className={styles.main}>
        <h2>Page non trouvée</h2>
        <p>La page que vous cherchez n'existe pas.</p>
        <Link style={{ textDecoration: "underline" }} to="/">
          Revenir à la page d'accueil.
        </Link>
      </section>
    </>
  );
};
