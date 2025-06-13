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
        items: [{
          name: "UPS Interactivas",
          url: "ups-interactivas",
          description: "La UPS Allsai con su Línea Interactiva ofrece protección integral y alta densidad de potencia en paquetes pequeños y económicos. En comparación con las torres UPS tradicionales del mismo tamaño, la UPS Allsai es más compacta y ofrece una mayor protección contra sobretensiones y sobrecorrientes. Equipado con un estabilizador de voltaje, este UPS continuará proporcionando energía limpia y estable a los equipos conectados, mientras que su controlador de microprocesador incorporado garantiza una alta fiabilidad, ideal para cualquier aplicación doméstica o de oficina pequeña."
        }, {
          name: "UPS Monofásicas",
          url: "ups-monofasicas",
          description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida entre 0.9 y 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva.Las UPS cuentan con modelo torre y tipo convertible rack/torre (RT), este último ocupa sólo 2-3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos."
        }, {
          name: "UPS Trimono",
          url: "ups-trimono",
          description: ""
        }, {
          name: "UPS Trifásicas",
          url: "ups-trifasicas",
          description: ""
        }, {
          name: "UPS Modulares",
          url: "ups-modulares",
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
