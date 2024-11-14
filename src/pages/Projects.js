import { Snippet } from "../components/Snippet";
import { CustomNavbar } from "../components/Navbar";
import huddleSnippet from "../assets/huddle.png";
import landingSnippet from "../assets/landing.png";
import newsSnippet from "../assets/newspage.png";
import recipeSnippet from "../assets/recipe.png";
import cardSnippet from "../assets/card.png";
import sunnySnippet from "../assets/sunny.png";
import styles from "../styles/pages/Projects.module.css";

export const Projects = () => {
  return (
    <>
      <CustomNavbar />
      <section className={styles.projects}>
        <h2>mes réalisations</h2>
        <span>Vous trouverez ici quelques-uns de mes projets personnels.</span>
        <div className={styles.snippets}>
          <a
            href="https://alternative-huddle-landing-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={huddleSnippet} alt={"Snippet"} />
          </a>
          <a
            href="https://clipboard-landing-page-navy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={landingSnippet} alt={"Snippet"} />
          </a>
          <a
            href="https://news-homepage-phi.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={newsSnippet} alt={"Snippet"} />
          </a>
          <a
            href="https://recipe-page-three-jet.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={recipeSnippet} alt={"Snippet"} />
          </a>
          <a
            href="https://sunnyside-agency-page-ten.vercel.app/#"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={sunnySnippet} alt={"Snippet"} />
          </a>
          <a
            href="https://blog-preview-card-psi-ivory.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Snippet img={cardSnippet} alt={"Snippet"} />
          </a>
        </div>
      </section>
    </>
  );
};
