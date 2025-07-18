import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "gsap/ScrollToPlugin";
import styles from "./ParallaxHero.module.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxHero = () => {
  const mainRef = useRef(null);
  const arrowBtnRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.parallaxHeroScrollDist}`,
          start: "0 0",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
      .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
      .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
      .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
      .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
      .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
      .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

    const arrowBtn = arrowBtnRef.current;
    if (arrowBtn) {
      const onEnter = () => {
        gsap.to(".arrow", {
          y: 10,
          duration: 0.8,
          ease: "back.inOut(3)",
          overwrite: "auto",
        });
      };
      const onLeave = () => {
        gsap.to(".arrow", {
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          overwrite: "auto",
        });
      };
      const onClick = () => {
        gsap.to(window, {
          scrollTo: window.innerHeight,
          duration: 1.5,
          ease: "power1.inOut",
        });
      };

      arrowBtn.addEventListener("mouseenter", onEnter);
      arrowBtn.addEventListener("mouseleave", onLeave);
      arrowBtn.addEventListener("click", onClick);

      return () => {
        arrowBtn.removeEventListener("mouseenter", onEnter);
        arrowBtn.removeEventListener("mouseleave", onLeave);
        arrowBtn.removeEventListener("click", onClick);
      };
    }
  }, []);

  return (
    <div className={styles.parallaxHeroRoot}>
      <div className={styles.parallaxHeroScrollDist}></div>
      <main ref={mainRef} className={styles.parallaxHeroMain}>
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="/AcercaDeCentiel/cloud1Mask.jpg"
                width="100%"
                height="800"
              />
            </g>
          </mask>

          <image
            className="sky"
            xlinkHref="/AcercaDeCentiel/sky.jpg"
            width="100%"
            height="590"
          />
          <image
            className="mountBg"
            xlinkHref="/AcercaDeCentiel/mountBg.webp"
            width="1200"
            height="800"
          />
          <image
            className="mountMg"
            xlinkHref="/AcercaDeCentiel/mountMg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud2"
            xlinkHref="/AcercaDeCentiel/cloud2.webp"
            width="1200"
            height="800"
          />
          <image
            className="mountFg"
            xlinkHref="/AcercaDeCentiel/mountFg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud1"
            xlinkHref="/AcercaDeCentiel/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud3"
            xlinkHref="/AcercaDeCentiel/cloud3.png"
            width="100%"
            height="800"
          />
          
          <text className={styles.parallaxHeroText} fill="#fff" x="250" y="200">
            Compañia Suiza
          </text>
          {/* <image xlinkHref="/AcercaDeCentiel/suiza.svg" width="100" height="380"/> */}
          <polyline
            className="arrow"
            fill="#fff"
            points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
          />

          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <foreignObject
              x="0"
              y="150"
              width="1200"
              height="200"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  width: "100%",
                  color: "#e20b14",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "45px",
                  textAlign: "center",
                  lineHeight: 1.1,
                  padding: "0 16px",
                  boxSizing: "border-box",
                  wordBreak: "break-word",
                }}
                className={styles.parallaxHeroText}
              >
                Con un equipo muy experimentado
              </div>
            </foreignObject>
          </g>

          <rect
            id="arrow-btn"
            ref={arrowBtnRef}
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </main>
    </div>
  );
};

export default ParallaxHero;
