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
              url:"allsai-w-pro-1-kva-10-kva-rack",
              capacidades: "1 KVA | 2 KVA | 3 KVA | 6 KVA | 10 KVA",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las UPS cuentan con modelo torre y tipo convertible rack/ torre(RT), este último ocupa sólo 2 - 3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "ALLSAI W PRO 6KVA – 10KVA (Torre y RT)",
              url:"allsai-w-pro-1-kva-10-kva-rack",
              capacidades: "1 KVA | 2 KVA | 3 KVA",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva.Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST 1KVA – 3KVA (Torre)",
              url:"allsai-w-pro-1-kva-10-kva-rack",
              capacidades: "6 KVA | 10 KVA",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
        ]
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
