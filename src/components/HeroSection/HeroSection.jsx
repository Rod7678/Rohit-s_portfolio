import "./herosection.css"

const HeroSection = () => {
  return (
    <section id="hero">
      <p className="hero-eyebrow">Software Developer</p>
      <h1>
        Crafting <em>digital</em>
        <br />
        experiences
      </h1>
      <p className="hero-sub">
        Hi, I'm [Your Name]. A software engineer specialising in scalable
        systems, AI, and delightful user interfaces.
      </p>
      <div className="hero-ctas">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="#contact" className="btn-secondary">
          Let's Talk →
        </a>
      </div>
      <div className="hero-stats">
        <div>
          <div className="stat-num">15+</div>
          <div className="stat-label">Projects shipped</div>
        </div>
        <div>
          <div className="stat-num">3+</div>
          <div className="stat-label">Years experience</div>
        </div>
        <div>
          <div className="stat-num">10+</div>
          <div className="stat-label">Happy clients</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
