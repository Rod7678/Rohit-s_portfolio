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
          <div className="tech-pills">
            <span className="tech-pill">JavaScript</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Python</span>
            <span className="tech-pill">React</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">Node.js</span>
          </div>
        </div>
        <div>
          <div className="tech-group-label">Languages</div>
          <div className="tech-pills">
            <span className="tech-pill">Java</span>
            <span className="tech-pill">Go</span>
            <span className="tech-pill">Rust</span>
            <span className="tech-pill">SQL</span>
          </div>
        </div>
        <div style={{marginTop: "1.5rem;"}}>
          <div className="tech-group-label">Infrastructure & Databases</div>
          <div className="tech-pills">
            <span className="tech-pill">AWS</span>
            <span className="tech-pill">Docker</span>
            <span className="tech-pill">Kubernetes</span>
            <span className="tech-pill">PostgreSQL</span>
            <span className="tech-pill">MongoDB</span>
            <span className="tech-pill">Redis</span>
          </div>
        </div>
        <div style={{marginTop: "1.5rem;"}}>
          <div className="tech-group-label">Tools</div>
          <div className="tech-pills">
            <span className="tech-pill">Git</span>
            <span className="tech-pill">Figma</span>
            <span className="tech-pill">Linux</span>
            <span className="tech-pill">CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeckStackSection;
