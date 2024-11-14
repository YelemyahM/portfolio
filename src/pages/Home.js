import { Link } from "react-router-dom";
import { CustomNavbar } from "../components/Navbar";
import styles from "../styles/pages/Home.module.css";

export const Home = () => {
  return (
    <>
      <CustomNavbar />
      <section className={styles.home}>
        <h1>yelemyah muamba</h1>
        <p>
          <em>Développeur</em> déterminé à exceller, je cherche
          <em> une alternance</em> pour renforcer mes compétences et relever
          chaque <em>défi</em> au cœur de vos projets.
        </p>
        <Link to="/projects">
          <button>Mes réalisations</button>
        </Link>
      </section>
    </>
  );
};
