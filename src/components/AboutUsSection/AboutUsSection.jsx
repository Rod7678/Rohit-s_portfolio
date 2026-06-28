const AboutUsSection = () => {
  return (
    <section id="about">
      <p class="section-eyebrow">Who I Am</p>
      <h2>
        About <em>Me</em>
      </h2>
      <div class="about-grid">
        <div class="avatar-block">
          <div class="avatar-circle">YN</div>
          <div class="about-name">Your Name</div>
          <div class="about-role">Software Engineer</div>
        </div>
        <div class="about-text">
          <p>
            I'm a software engineer with 3+ years of experience building
            products from scratch — with deep expertise in backend systems and
            AI. I'm passionate about crafting things that are both technically
            robust and a joy to use.
          </p>
          <p>
            Previously, I've worked on [mention past roles or projects here].
            With projects like [Project A] and [Project B], I've honed my skills
            working with Python, Flutter, and serverless architectures.
          </p>
          <p>
            When I'm not building, I'm writing about software, contributing to
            open source, or exploring the latest in AI research. Let's make
            something great together.
          </p>
          <div style="margin-top: 1.5rem;">
            <a href="#contact" class="btn-secondary">
              Discover my journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUsSection;
