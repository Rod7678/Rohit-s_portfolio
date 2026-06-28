const ProjectSection = () => {
  return (
    <section id="projects">
      <p class="section-eyebrow">What I've Done</p>
      <h2>
        Featured <em>Projects</em>
      </h2>
      <p class="section-sub">
        A showcase of recent work highlighting creative design and robust
        development.
      </p>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-thumb">🏋️</div>
          <div class="project-body">
            <div class="project-name">Fitness Tracker App</div>
            <div class="project-desc">
              A full-stack fitness platform with workout logging, progress
              charts, and social features.
            </div>
            <div class="tag-row">
              <span class="tag">React Native</span>
              <span class="tag">Node.js</span>
              <span class="tag">MongoDB</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-thumb">🧙</div>
          <div class="project-body">
            <div class="project-name">AI Content Wizard</div>
            <div class="project-desc">
              Transform your marketing with AI-powered copy generation and
              campaign management.
            </div>
            <div class="tag-row">
              <span class="tag">Next.js</span>
              <span class="tag">OpenAI</span>
              <span class="tag">Stripe</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-thumb">🎨</div>
          <div class="project-body">
            <div class="project-name">Creative Portfolio CMS</div>
            <div class="project-desc">
              A headless CMS and portfolio builder for creative professionals
              with drag-and-drop editing.
            </div>
            <div class="tag-row">
              <span class="tag">React</span>
              <span class="tag">Sanity</span>
              <span class="tag">Tailwind</span>
            </div>
          </div>
        </div>
        <div class="project-card">
          <div class="project-thumb">🎪</div>
          <div class="project-body">
            <div class="project-name">Event Festival Portal</div>
            <div class="project-desc">
              End-to-end event management platform with ticketing, scheduling,
              and live updates.
            </div>
            <div class="tag-row">
              <span class="tag">Vue.js</span>
              <span class="tag">Firebase</span>
              <span class="tag">Razorpay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
