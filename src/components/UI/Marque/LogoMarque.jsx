import {
  ReactLogo,
  AstroLogo,
  TailwindLogo,
  VueLogo,
  NextjsLogo,
  RemixLogo,
  JSLogo,
  TSLogo,
  SvelteLogo,
} from "../Logos/logos.jsx";
import "./logomarque.css";

export const LogoMarque = () => {
  return (
    <div
      className="marquee fadeout-horizontal"
      style={{ "--num-items": 9 }}
    >
      <div className="marquee-track">
        <div
          className="marquee-item"
          style={{ "--item-position": 1 }}
        >
          <ReactLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 2 }}
        >
          <AstroLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 3 }}
        >
          <TailwindLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 4 }}
        >
          <VueLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 5 }}
        >
          <NextjsLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 6 }}
        >
          <RemixLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 7 }}
        >
          <JSLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 8 }}
        >
          <TSLogo />
        </div>
        <div
          className="marquee-item"
          style={{ "--item-position": 9 }}
        >
          <SvelteLogo />
        </div>
      </div>
    </div>
  );
};