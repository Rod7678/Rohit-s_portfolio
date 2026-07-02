import { LogoMarque } from "../UI/Marque/LogoMarque";
import Marque from "../UI/Marque/Marque";
import "./techStackSection.css";

const skills = [
  ["JavaScript", "TypeScript", "Phython", "React.JS", "Next.JS", "Node.JS"],
  ["Java", "Go", "Rust", "SQL"],
  ["AWS", "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"],
];

// const tools = ["Git", "CI/CD"];

const TeckStackSection = () => {
  return (
    <section id="stack">
      <p className="section-eyebrow">Technical Expertise</p>
      <h2>
        <em>Tech</em> Stack
      </h2>
      <p className="section-sub">
        A comprehensive toolkit of languages, frameworks, and technologies I use
        to architect scalable solutions.
      </p>

      <div className="tech-section">
        <div>
          <div className="tech-group-label">Core Stack</div>

          {skills.map((array, index) => (
            <Marque
              key={index}
              arr={array}
              dir={index % 2 === 0 ? "forwards" : "reverse"}
            />
          ))}
          <LogoMarque/>
        </div>
      </div>
    </section>
  );
};
export default TeckStackSection;
