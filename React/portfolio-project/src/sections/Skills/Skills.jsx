import styles from "./SkillsStyles.module.css";
import iconoCheckmark from "../../assets/iconoCheckmark.png";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={iconoCheckmark} skill="HTML" />
        <SkillList src={iconoCheckmark} skill="CSS" />
        <SkillList src={iconoCheckmark} skill="Python" />
        <SkillList src={iconoCheckmark} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={iconoCheckmark} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={iconoCheckmark} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
