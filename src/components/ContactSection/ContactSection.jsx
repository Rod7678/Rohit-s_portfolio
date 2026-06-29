import "./contactSection.css";

const ContactSection = () => {
  return (
    <section id="contact">
      <p className="section-eyebrow">Let's Work</p>
      <h2>
        Let's Work <em>Together</em>
      </h2>
      <p className="section-sub">
        I'm currently open to new engineering opportunities. Want to build
        something incredible? Let's connect.
      </p>
      <div className="contact-links">
        <a href="mailto:rohitghadge348@gmail.com" className="btn-primary">
          Start a Conversation
        </a>
        <a href="https://github.com/" target="_blank" className="btn-secondary">
          GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" className="btn-secondary">
          LinkedIn
        </a>
        <a href="#" className="btn-secondary">
          Resume ↓
        </a>
      </div>
    </section>
  );
};
export default ContactSection;
