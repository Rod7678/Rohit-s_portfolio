const HeroSection = () => {
  return (
    <section id="hero">
      <p class="hero-eyebrow">Software Developer</p>
      <h1>
        Crafting <em>digital</em>
        <br />
        experiences
      </h1>
      <p class="hero-sub">
        Hi, I'm [Your Name]. A software engineer specialising in scalable
        systems, AI, and delightful user interfaces.
      </p>
      <div class="hero-ctas">
        <a href="#projects" class="btn-primary">
          View My Work
        </a>
        <a href="#contact" class="btn-secondary">
          Let's Talk →
        </a>
      </div>
      <div class="hero-stats">
        <div>
          <div class="stat-num">15+</div>
          <div class="stat-label">Projects shipped</div>
        </div>
        <div>
          <div class="stat-num">3+</div>
          <div class="stat-label">Years experience</div>
        </div>
        <div>
          <div class="stat-num">10+</div>
          <div class="stat-label">Happy clients</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
