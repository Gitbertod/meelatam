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
        }, {
          name: "UPS Monofásicas",
          url: "ups-monofasicas",
        }, {
          name: "UPS Trimono",
          url: "ups-trimono",
        }, {
          name: "UPS Trifásicas",
          url: "ups-trifasicas",
        },{
          name: "",
          url: "",
        },
        ]
      },
      {
        key: "baterias",
        label: "Baterías",
        url: "baterias",
      },
      {
        label: "Inversores",
        url: "inversores",
      },
      {
        label: "Rectificadores",
        url: "rectificadores",
      }
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
