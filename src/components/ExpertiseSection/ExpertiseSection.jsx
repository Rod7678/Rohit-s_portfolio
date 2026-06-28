const ExpertiseSection = () => {
  return (
    <section id="expertise">
      <p class="section-eyebrow">What I Build</p>
      <h2>
        Core <em>Expertise</em>
      </h2>
      <p class="section-sub">
        Driving innovation through clean design — building elegant software
        solutions that scale perfectly.
      </p>

      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="expertise-icon icon-purple">🌐</div>
          <div class="expertise-title">Full-Stack Web Development</div>
          <div class="expertise-desc">
            Architecting and building scalable, performant web applications
            using modern ecosystems.
          </div>
          <div class="tag-row">
            <span class="tag">React</span>
            <span class="tag">Node.js</span>
            <span class="tag">Next.js</span>
            <span class="tag">PostgreSQL</span>
          </div>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon icon-blue">📱</div>
          <div class="expertise-title">Mobile Engineering</div>
          <div class="expertise-desc">
            Building native and cross-platform mobile apps with polished,
            platform-first user experiences.
          </div>
          <div class="tag-row">
            <span class="tag">React Native</span>
            <span class="tag">Flutter</span>
            <span class="tag">Expo</span>
          </div>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon icon-green">🤖</div>
          <div class="expertise-title">AI & Automation</div>
          <div class="expertise-desc">
            Architecting intelligent applications and automating complex
            workflows with LLMs and APIs.
          </div>
          <div class="tag-row">
            <span class="tag">LangChain</span>
            <span class="tag">OpenAI</span>
            <span class="tag">Python</span>
          </div>
        </div>
        <div class="expertise-card">
          <div class="expertise-icon icon-pink">🖥️</div>
          <div class="expertise-title">Backend Systems</div>
          <div class="expertise-desc">
            Designing reliable, high-performance backend services with robust
            architecture patterns.
          </div>
          <div class="tag-row">
            <span class="tag">AWS</span>
            <span class="tag">Docker</span>
            <span class="tag">Redis</span>
            <span class="tag">REST</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ExpertiseSection;
