const ProjectSection = () => {
  return (
    <section id="projects">
      <p className="section-eyebrow">What I've Done</p>
      <h2>
        Featured <em>Projects</em>
      </h2>
      <p className="section-sub">
        A showcase of recent work highlighting creative design and robust
        development.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <div className="project-thumb">🏋️</div>
          <div className="project-body">
            <div className="project-name">Fitness Tracker App</div>
            <div className="project-desc">
              A full-stack fitness platform with workout logging, progress
              charts, and social features.
            </div>
            <div className="tag-row">
              <span className="tag">React Native</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb">🧙</div>
          <div className="project-body">
            <div className="project-name">AI Content Wizard</div>
            <div className="project-desc">
              Transform your marketing with AI-powered copy generation and
              campaign management.
            </div>
            <div className="tag-row">
              <span className="tag">Next.js</span>
              <span className="tag">OpenAI</span>
              <span className="tag">Stripe</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb">🎨</div>
          <div className="project-body">
            <div className="project-name">Creative Portfolio CMS</div>
            <div className="project-desc">
              A headless CMS and portfolio builder for creative professionals
              with drag-and-drop editing.
            </div>
            <div className="tag-row">
              <span className="tag">React</span>
              <span className="tag">Sanity</span>
              <span className="tag">Tailwind</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-thumb">🎪</div>
          <div className="project-body">
            <div className="project-name">Event Festival Portal</div>
            <div className="project-desc">
              End-to-end event management platform with ticketing, scheduling,
              and live updates.
            </div>
            <div className="tag-row">
              <span className="tag">Vue.js</span>
              <span className="tag">Firebase</span>
              <span className="tag">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
