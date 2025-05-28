// menuData.js
export const menuData = [
  {
    key: "respaldo",
    label: "RESPALDO DE ENERGÍA",
    icon: "LiaCarBatterySolid",
    icon2:"HiChevronRight",
    subcategories: [
      {
        key: "ups",
        label: "UPS",
        items: [
          "UPS Interactivas",
          "UPS Monofásicas",
          "UPS Trimono",
          "UPS Trifásicas",
          "UPS Modulares"
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
    items: ["Variadores de frecuencia"],
    class: "slideRight4"
  }
];
