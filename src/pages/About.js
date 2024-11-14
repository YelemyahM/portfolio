import { CustomNavbar } from "../components/Navbar.jsx";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/js.svg";
import reactIcon from "../assets/react.svg";
import reduxIcon from "../assets/redux.svg";
import gitIcon from "../assets/git.svg";
import cliIcon from "../assets/cli.svg";
import figmaIcon from "../assets/figma.svg";
import vscodeIcon from "../assets/vscode.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";
import mailIcon from "../assets/mail.svg";
import styles from "../styles/pages/About.module.css";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <>
      <CustomNavbar />
      <section className={styles.about}>
        <h2>à propos</h2>
        <div className={styles.skills}>
          <h3>Mes compétences</h3>
          <div className={styles.icon}>
            <div className={styles.line}>
              <img src={htmlIcon} alt="HTML icon" title="HTML" />
              <img src={cssIcon} alt="CSS icon" title="CSS" />
              <img src={jsIcon} alt="Javascript icon" title="Javascript" />
            </div>
            <div className={styles.line}>
              <img src={reactIcon} alt="React icon" title="React Js" />
              <img src={reduxIcon} alt="Redux icon" title="Redux" />
            </div>
            <div className={styles.line}>
              <img src={gitIcon} alt="Git icon" title="Git" />
              <img src={cliIcon} alt="Command line icon" title="Command line" />
            </div>
            <div className={styles.line}>
              <img src={figmaIcon} alt="Figma icon" title="Figma" />
              <img
                src={vscodeIcon}
                alt="Visual Studio Code icon"
                title="Visual Studio Code"
              />
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <h3>Liens</h3>
          <div className={styles.socialsContent}>
            <a
              href="https://www.linkedin.com/in/yelemyah-muamba-%F0%9F%92%BB-7833a625a/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Mon profil LinkedIn : </span>
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
            <a
              href="https://github.com/YelemyahM"
              target="_blank"
              rel="noreferrer"
            >
              <span>Ma page Github : </span>
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a
              href="mailto:yelemyah.muamba@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span>Envoyez-moi un mail : </span>
              <img src={mailIcon} alt="Mail icon" />
            </a>
          </div>
        </div>
        <div className={styles.summary}>
          <h3>Pour mieux me connaître !</h3>
          <p>
            Je suis un <em>développeur web</em> en reconversion, passionné par
            la création d'applications intuitives, performantes et accessibles.
            Actuellement, je me <em>spécialise en Front-End</em> avec des
            compétences solides en HTML, CSS et JavaScript, acquises à travers
            des projets de reproduction de maquettes visant à créer des
            interfaces soignées et fonctionnelles.
          </p>
          <p>
            À la recherche d’une alternance en développement web, je suis motivé
            par l'idée d'apprendre et évoluer dans un environnement dynamique.
            Je partage régulièrement mes projets sur{" "}
            <a
              href="https://github.com/YelemyahM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>GitHub</em>
            </a>
            , et je suis toujours ouvert aux nouvelles opportunités pour
            contribuer et développer mes compétences.
          </p>
        </div>
        <Link to={"/contact"}>
          <button>Me contacter</button>
        </Link>
      </section>
    </>
  );
};
