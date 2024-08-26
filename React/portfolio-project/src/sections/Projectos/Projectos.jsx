import styles from "./ProjectosStyles.module.css";
import iconoApp1 from "../../assets/iconoApp1.png";
import iconoApp2 from "../../assets/iconoApp2.png";
import iconoApp3 from "../../assets/iconoApp3.png";
import iconoApp4 from "../../assets/iconoApp4.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projectos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={iconoApp1}
          link="https://github.com/"
          h3="Nombre App"
          p="Descripcion App"
        />
        <ProjectCard
          src={iconoApp2}
          link="https://github.com/"
          h3="Nombre App"
          p="Descripcion App"
        />
        <ProjectCard
          src={iconoApp3}
          link="https://github.com/"
          h3="Nombre App"
          p="Descripcion App"
        />
        <ProjectCard
          src={iconoApp4}
          link="https://github.com/"
          h3="Nombre App"
          p="Descripcion App"
        />
      </div>
    </section>
  );
}

export default Projects;
