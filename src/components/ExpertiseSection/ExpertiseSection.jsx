import "./expertisesection.css";
const ExpertiseSection = () => {
  return (
    <section id="expertise">
      <p className="section-eyebrow">What I Build</p>
      <h2>
        Core <em>Expertise</em>
      </h2>
      <p className="section-sub">
        Driving innovation through clean design — building elegant software
        solutions that scale perfectly.
      </p>

      <div className="expertise-grid">
        <div className="expertise-card">
          <div className="expertise-icon icon-purple">🌐</div>
          <div className="expertise-title">Full-Stack Web Development</div>
          <div className="expertise-desc">
            Architecting and building scalable, performant web applications
            using modern ecosystems.
          </div>
          <div className="tag-row">
            <span className="tag">React</span>
            <span className="tag">Node.js</span>
            <span className="tag">Next.js</span>
            <span className="tag">PostgreSQL</span>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-icon icon-blue">📱</div>
          <div className="expertise-title">Mobile Engineering</div>
          <div className="expertise-desc">
            Building native and cross-platform mobile apps with polished,
            platform-first user experiences.
          </div>
          <div className="tag-row">
            <span className="tag">React Native</span>
            <span className="tag">Flutter</span>
            <span className="tag">Expo</span>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-icon icon-green">🤖</div>
          <div className="expertise-title">AI & Automation</div>
          <div className="expertise-desc">
            Architecting intelligent applications and automating complex
            workflows with LLMs and APIs.
          </div>
          <div className="tag-row">
            <span className="tag">LangChain</span>
            <span className="tag">OpenAI</span>
            <span className="tag">Python</span>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-icon icon-pink">🖥️</div>
          <div className="expertise-title">Backend Systems</div>
          <div className="expertise-desc">
            Designing reliable, high-performance backend services with robust
            architecture patterns.
          </div>
          <div className="tag-row">
            <span className="tag">AWS</span>
            <span className="tag">Docker</span>
            <span className="tag">Redis</span>
            <span className="tag">REST</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;
