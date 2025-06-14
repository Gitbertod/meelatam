// menuData.js
export const menuData = [
  {
    key: "respaldo",
    label: "RESPALDO DE ENERGÍA",
    icon: "LiaCarBatterySolid",
    icon2: "HiChevronRight",
    url: "respaldo-de-energia",
    subcategories: [
      {
        key: "ups",
        label: "UPS",
        url: "ups",
        subSubCategory: [{
          name: "UPS Interactivas",
          url: "ups-interactivas",
          items: [
            {
              name: "ALLSAI E 600 VA – 2000 VA",
              url:"allsai-e-600-va-2000-va",
              image:"/ALLSAI E 600 VA – 2000 VA.png",
              capacidades: "600 VA | 800 VA | 1200 VA | 1500 VA | 2000 VA",
              description: "La UPS Allsai con su Línea Interactiva ofrece protección integral y alta densidad de potencia en paquetes pequeños y económicos. En comparación con las torres UPS tradicionales del mismo tamaño, la UPS Allsai es más compacta y ofrece una mayor protección contra sobretensiones y sobrecorrientes. Equipado con un estabilizador de voltaje, este UPS continuará proporcionando energía limpia y estable a los equipos conectados, mientras que su controlador de microprocesador incorporado garantiza una alta fiabilidad, ideal para cualquier aplicación doméstica o de oficina pequeña.",
            }
          ]
        }, {
          name: "UPS Monofásicas",
          url: "ups-monofasicas",
          items: [
            {
              name: "ALLSAI W PRO 1KVA – 3KVA (Rack)",
              url:"allsai-w-pro-1-kva-3-kva-rack",
              image:"/UPS RT 2.jpeg",
              capacidades: "1 KVA | 2 KVA | 3 KVA ",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las UPS cuentan con modelo torre y tipo convertible rack/ torre(RT), este último ocupa sólo 2 - 3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "ALLSAI W PRO 1KVA – 3KVA (Torre)",
              url:"allsai-w-pro-1-kva-3-kva-torre",
              image:"/UPS Torre 1KVA.jpeg",
              capacidades: "1 KVA | 2 KVA | 3 KVA ",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las UPS cuentan con modelo torre y tipo convertible rack/ torre(RT), este último ocupa sólo 2 - 3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "ALLSAI W PRO 6KVA – 10KVA (Torre y RT)",
              url:"allsai-w-pro-6-kva-10-kva-rack",
              image:"/UPS 6-10KVA Front.jpg",
              capacidades: "6 KVA | 10 KVA",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva.Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST 1KVA – 3KVA (Torre)",
              url:"centiel-essentialpower-xst-1-kva-3-kva-torre",
              image:"/Tower 1-3K.jpg",
              capacidades: " 1 KVA | 2 KVA | 3 KVA ",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST 6KVA – 10KVA (Torre)",
              url:"centiel-essentialpower-xst-6-kva-10-kva-torre",
              image:"/Centiel-front - low.jpg",
              capacidades: "6 KVA | 10 KVA",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XSRT 1KVA – 10KVA (Rack)",
              url:"centiel-essentialpower-xsrt-1-kva-10-kva-rack",
              image:"/Rack 1-3K.jpg",
              capacidades: "1 KVA | 2 KVA | 3 KVA | 6 KVA | 10 KVA",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST IoT 1KVA – 10KVA ",
              url:"centiel-essentialpower-xst-iot-1-kva-10-kva-torre",
              image:"/Rack 1-3K.jpg",
              capacidades: "1 KVA | 2 KVA | 3 KVA | 6 KVA | 10 KVA",
              description: "EssentialPower IoT la solución más flexible y confiable, ideal para aplicaciones IT y servidores. El EssentialPower IoT posee puerto Ethernet embebido que cumple con el standard IEC de ciberseguridad. Con un factor de potencia de hasta 95%.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XSRT IoT Lithium-Ion 1KVA – 3KVA (Rack)",
              url:"centiel-essentialpower-xst-iot-1-kva-10-kva-torre",
              image:"/Rack 1-3K.jpg",
              capacidades: "1 KVA | 2 KVA | 3 KVA",
              description: "EssentialPower IoT Lithium-Ion la solución más flexible y confiable, ideal para aplicaciones IT y servidores, listo para montaje en rack de 19” pero con baterías de Litio Lithium-Ion, todo solo ocupando 3U y con FP=1. El EssentialPower IoT Lithium-Ion posee puerto Ethernet embebido que cumple con el standard IEC de ciberseguridad. Con un factor de potencia de hasta 95%.",
            },
            {
              name: "ALLSAI W PRO 1KVA – 10KVA (Torre) / 110Vac (LV)",
              url:"allsai-w-pro-1-kva-10-kva-torre-110vac",
              image:"/UPS Torre 2KVA.png",
              capacidades: "1 KVA | 2 KVA | 3 KVA",
              description: "Allsai W Pro / 110Vac es una UPS en línea de doble conversión con tecnología de alta densidad, en su versión LV (Low Voltage), con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos donde los niveles de tensión están entre 110Vac y 127Vac.",
            },
             {
              name: "CENTIEL CUMULUS POWER X1 10KVA – 20KVA+1 (Modular)",
              url:"centiel-cumulus-power-x1-10-kva-20-kva-modular",
              image:"/CumulusPower.png",
              capacidades: "10 KVA | 20 KVA+1",
              description: "CumulusPower X1 es un vérsatil UPS modular totalmente descentralizado, diseñado y fabricado en Suiza. Cuenta con módulos de 10kW (3:1 y 1:1) y con un rango de potencia en un mismo gabinete desde 10kW a 20kW N+1 proporcionando máxima flexibilidad a la aplicación final. Proporciona eficiencias optimizadas de carga parcial y total de hasta el 97,1% en el modo de doble conversión en línea. En el modo ECO ultraseguro, el SAI proporciona una excelente calidad de energía con una eficiencia del 99,4%. Diseñado para eliminar puntos únicos de fallas y una Arquitectura redundante y distribución activa (DARA), reduciendo con esto el riesgo por el factor humano. Soporta sobrecargas de hasta 124% de forma continua en el inversor de forma continua.",
            },
        ]
      }, {
        name: "UPS Trimono",
        url: "ups-trimono",
        items: [{
              name: "ALLSAI W PRO 3:1 – 1:1 6KVA – 20KVA (Torre)",
              url:"allsai-w-pro-31-6-kva-20-kva-torre",
              image:"/UPS Trimono.png",
              capacidades: "6 KVA | 10 KVA | 15 KVA | 20 KVA",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, DSP, factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },]
      }, {
        name: "UPS Trifásicas",
        url: "ups-trifasicas",
        description: ""
      }, {
        name: "UPS Modulares",
        url: "ups-modulares",
        items:[
          
        ],
        description: ""
      }
    ]
  },
  {
    key: "baterias",
    label: "Baterías",
    items: ["Baterías test"]
  },
  { label: "Inversores" },
  { label: "Rectificadores" }
],
class: "slideRight"
  },
{
  key: "calidad",
    label: "CALIDAD DE ENERGÍA",
      icon: "CiWavePulse1",
        url: "calidad-de-energia",
          items: [
            "Banco de condensadores",
            "Filtros activos",
            "Transformadores",
            "Estabilizadores de voltaje",
            "PDU",
            "STS"
          ],
            class: "slideRight2"
},
{
  key: "clima",
    label: "CLIMA DE PRECISIÓN",
      icon: "BsThermometerSnow",
        url: "clima-de-precision",
          items: [
            "Chillers",
            "Equipos perimetrales",
            "Equipos in row",
            "Equipos tipo mochila",
            "Aire acondicionado de precisión",
            "STS"
          ],
            class: "slideRight3"
},
{
  key: "accionamiento",
    label: "ACCIONAMIENTO ELÉCTRICO",
      icon: "MdOutlineElectricBolt",
        url: "accionamiento-electrico",
          items: ["Variadores de frecuencia"],
            class: "slideRight4"
}
];
