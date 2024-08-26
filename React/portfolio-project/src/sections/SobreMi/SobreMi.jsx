import styles from "./SobreMiStyles.module.css";
import iconoSobremi from "../../assets/iconoSobremi.png";
import iconoX from "../../assets/iconoX.png";
import iconoGithub from "../../assets/iconoGithub.png";
import iconoLinkedin from "../../assets/iconoLinkedin.png";
import CV from "../../assets/cv.pdf";

function SobreMi() {
  return (
    <section id="sobremi" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={iconoSobremi}
          className={styles.sobremi}
          alt="Profile picture of Mailen Escobar"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mailen
          <br />
          Escobar
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://x.com/" target="_blank">
            <img src={iconoX} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={iconoGithub} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={iconoLinkedin} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default SobreMi;
