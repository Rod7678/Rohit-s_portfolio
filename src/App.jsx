import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 style={{textAlign: "center"}}>Rohit Ghadge</h1>
        <p style={{textAlign:"center"}}>Home | Projects | Blogs | Contact</p>
      </header>
      <section id="center">
        <h2>Web Developer and Designer</h2>
      </section>
      <table border="1" width="100%">
        <tr>
          <td>
            <h3>portfolio highlight</h3>
            <ul>
              <li>Responsive HTML Layout</li>
              <li>E-commerce Storefront</li>
              <li>Interactive Form Design</li>
              <li>Event Countdown Widget</li>
              <li>Prototype Landing Pages</li>
            </ul>
          </td>
          <td>
            <h3>Career Achievements</h3>
            <p>
              Frontend Developer [Intern] at XYZ
              <br />
              Headed major product redesigns resulting in a 40% increase in user
              engagement.
              <br />
              <a href="#">View My LinkedIn Profile</a>
            </p>
            <h3>Community Involvement</h3>
            <p>
              Active participant in local and online developer forums. Regularly
              contribute to web development blogs and GitHub projects.
              <br />
              <a href="#">Visit My GitHub</a>
            </p>
          </td>
          <td>
            <h3>Academic Qualifications</h3>
            <p>B.Tech (Computer Science) from ABC University</p>
            <p>Specializations:</p>
            <ul>
              <li>Systems Analysis</li>
              <li>Advanced JavaScript Techniques</li>
              <li>Web Accessibility Standards</li>
              <li>Performance Optimization in Web Applications</li>
              <li>Cloud Computing Infrastructure</li>
              <li>Security in Web Applications</li>
              <li>Advanced Algorithms</li>
            </ul>
          </td>
        </tr>
      </table>
      <h3>Peer Reviews</h3>
      <table border="1" width="100%">
        <tr>
          <td>
            John Doe consistently delivers high-quality, innovative solutions
            that exceed project expectations. - Steven, Project Lead
          </td>
          <td>
            John Doe is known for his precise attention to detail and his
            ability to mentor younger developers. - David, UI Designer
          </td>
          <td>
            John's approach to problem-solving has been instrumental in our
            success. - Sarah, Frontend Developer
          </td>
        </tr>
      </table>
      <footer style={{textAlign:"center"}}>
        © [2025] All rights reserved by John Doe
      </footer>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
