import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const LogoSVG = () => {
  const pathRefs = useRef([]);

  useEffect(() => {
    // Seteamos los paths al estado inicial (sin trazo dibujado)
    pathRefs.current.forEach((path) => {
      gsap.set(path, {
        drawSVG: "0%",
        fill: "none",
        stroke: "#199697",
        strokeWidth: 2,
      });
    });

    // Timeline para secuenciar la animación
    const tl = gsap.timeline();

    tl.to(pathRefs.current, {
      drawSVG: "100%",
      duration: 2,
      stagger: 0.3,
      ease: "power2.out",
    });

    // Luego de completar el dibujo, restauramos el fill
    tl.to(
      pathRefs.current,
      {
        fill: "#199697",
        stroke: "none",
        duration: 0.8,
        ease: "power1.inOut",
      },
      "+=0.3" // pequeño delay tras el trazo
    );
  }, []);

  return (
    <div style={{ maxWidth: "800px", width: "100%", display: "flex"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 647.53 172.16"
        className="logo-svg"
        style={{ width: "100%", height: "auto" }}
      >
        <title>Recurso 2</title>
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              ref={(el) => (pathRefs.current[0] = el)}
              d="M0,172.16H38.59V45.84s2-7.25,8.24-7.25H98V172.16h38.26V38.59h52.11s8.25-2,9.9,11.54v122h35.95V30.67S231.53,0,204.48,0H29.68S5.94,2.31,0,26.38Z"
            />
            <path
              ref={(el) => (pathRefs.current[1] = el)}
              d="M267.37,30S267.59.05,300.79.05H440V38.56H318.49s-8.8-.69-12.1,8.88l-.22,23.85H440v35.46H306.06v20.72s1.54,9.68,12.1,9.35,121.81,0,121.81,0v35.29H294.52s-26.6.44-26.6-29.91S267.37,30,267.37,30Z"
            />
            <path
              ref={(el) => (pathRefs.current[2] = el)}
              d="M474.93,30S475.15.05,508.35.05H647.53V38.56H526.05s-8.8-.69-12.09,8.88l-.22,23.85H647.53v35.46H513.63v20.72s1.53,9.68,12.09,9.35,121.81,0,121.81,0v35.29H502.08s-26.6.44-26.6-29.91S474.93,30,474.93,30Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LogoSVG;
