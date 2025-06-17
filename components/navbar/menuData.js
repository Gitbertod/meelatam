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
              url: "allsai-e-600-va-2000-va",
              images: [
                "/Interactivo 1.png","/Interactivo 2.png"
              ],
              capacidades: "600 VA | 800 VA | 1200 VA | 1500 VA | 2000 VA",
              description: "La UPS Allsai con su Línea Interactiva ofrece protección integral y alta densidad de potencia en paquetes pequeños y económicos. En comparación con las torres UPS tradicionales del mismo tamaño, la UPS Allsai es más compacta y ofrece una mayor protección contra sobretensiones y sobrecorrientes.\n Equipado con un estabilizador de voltaje, este UPS continuará proporcionando energía limpia y estable a los equipos conectados, mientras que su controlador de microprocesador incorporado garantiza una alta fiabilidad, ideal para cualquier aplicación doméstica o de oficina pequeña.",
            }
          ]
        }, {
          name: "UPS Monofásicas",
          url: "ups-monofasicas",
          items: [
            {
              name: "ALLSAI W PRO 1KVA – 3KVA (Rack)",
              url: "allsai-w-pro-1-kva-3-kva-rack",
              images:["/UPS RT 2.jpeg"] ,
              capacidades: "1 KVA | 2 KVA | 3 KVA ",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva.\n Las UPS cuentan con modelo torre y tipo convertible rack/ torre(RT), este último ocupa sólo 2 - 3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "ALLSAI W PRO 1KVA – 3KVA (Torre)",
              url: "allsai-w-pro-1-kva-3-kva-torre",
              images:["/UPS Torre 1KVA.png"] ,
              capacidades: "1 KVA | 2 KVA | 3 KVA ",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas.\n Además de contar con suficiente tiempo de autonomía como energía de reserva.\n Las UPS cuentan con modelo torre y tipo convertible rack/ torre(RT), este último ocupa sólo 2 - 3U de altura. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "ALLSAI W PRO 6KVA – 10KVA (Torre y RT)",
              url: "allsai-w-pro-6-kva-10-kva-rack",
              images: ["/UPS 6-10KVA Front.png"],
              capacidades: "6 KVA | 10 KVA",
              description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas.\n Además de contar con suficiente tiempo de autonomía como energía de reserva.Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST 1KVA – 3KVA (Torre)",
              url: "centiel-essentialpower-xst-1-kva-3-kva-torre",
              images: ["/centielEssentialPowerXST1KVA-3KVA.png"],
              capacidades: " 1 KVA | 2 KVA | 3 KVA ",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST 6KVA – 10KVA (Torre)",
              url: "centiel-essentialpower-xst-6-kva-10-kva-torre",
              images:["/Centiel-front - low.jpg"] ,
              capacidades: "6 KVA | 10 KVA",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XSRT 1KVA – 10KVA (Rack)",
              url: "centiel-essentialpower-xsrt-1-kva-10-kva-rack",
              images: ["/Rack 1-3K.jpg"],
              capacidades: "1 KVA | 2 KVA | 3 KVA | 6 KVA | 10 KVA",
              description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XST IoT 1KVA – 10KVA ",
              url: "centiel-essentialpower-xst-iot-1-kva-10-kva-torre",
              images: ["/Rack 1-3K.jpg"],
              capacidades: "1 KVA | 2 KVA | 3 KVA | 6 KVA | 10 KVA",
              description: "EssentialPower IoT la solución más flexible y confiable, ideal para aplicaciones IT y servidores. El EssentialPower IoT posee puerto Ethernet embebido que cumple con el standard IEC de ciberseguridad. Con un factor de potencia de hasta 95%.",
            },
            {
              name: "CENTIEL ESSENTIALPOWER XSRT IoT Lithium-Ion 1KVA – 3KVA (Rack)",
              url: "centiel-essentialpower-xst-iot-1-kva-10-kva-torre",
              images:["/Rack 1-3K.jpg"] ,
              capacidades: "1 KVA | 2 KVA | 3 KVA",
              description: "EssentialPower IoT Lithium-Ion la solución más flexible y confiable, ideal para aplicaciones IT y servidores, listo para montaje en rack de 19” pero con baterías de Litio Lithium-Ion, todo solo ocupando 3U y con FP=1. El EssentialPower IoT Lithium-Ion posee puerto Ethernet embebido que cumple con el standard IEC de ciberseguridad. Con un factor de potencia de hasta 95%.",
            },
            {
              name: "ALLSAI W PRO 1KVA – 10KVA (Torre) / 110Vac (LV)",
              url: "allsai-w-pro-1-kva-10-kva-torre-110vac",
              images: ["/UPS Torre 2KVA.png"],
              capacidades: "1 KVA | 2 KVA | 3 KVA",
              description: "Allsai W Pro / 110Vac es una UPS en línea de doble conversión con tecnología de alta densidad, en su versión LV (Low Voltage), con factor de potencia de entrada (PFC), factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos donde los niveles de tensión están entre 110Vac y 127Vac.",
            },
            {
              name: "CENTIEL CUMULUS POWER X1 10KVA – 20KVA+1 (Modular)",
              url: "centiel-cumulus-power-x1-10-kva-20-kva-modular",
              images:["/CumulusPower.png"] ,
              capacidades: "10 KVA | 20 KVA+1",
              description: "CumulusPower X1 es un vérsatil UPS modular totalmente descentralizado, diseñado y fabricado en Suiza. Cuenta con módulos de 10kW (3:1 y 1:1) y con un rango de potencia en un mismo gabinete desde 10kW a 20kW N+1 proporcionando máxima flexibilidad a la aplicación final. Proporciona eficiencias optimizadas de carga parcial y total de hasta el 97,1% en el modo de doble conversión en línea. En el modo ECO ultraseguro, el SAI proporciona una excelente calidad de energía con una eficiencia del 99,4%. Diseñado para eliminar puntos únicos de fallas y una Arquitectura redundante y distribución activa (DARA), reduciendo con esto el riesgo por el factor humano. Soporta sobrecargas de hasta 124% de forma continua en el inversor de forma continua.",
            },
          ]
        }, {
          name: "UPS Trimono",
          url: "ups-trimono",
          items: [{
            name: "ALLSAI W PRO 3:1 – 1:1 6KVA – 20KVA (Torre)",
            url: "allsai-w-pro-31-6-kva-20-kva-torre",
            images: ["/UPS Trimono.png"],
            capacidades: "6 KVA | 10 KVA | 15 KVA | 20 KVA",
            description: "Allsai W Pro es una UPS en línea de doble conversión con tecnología de alta densidad, DSP, factor de potencia de salida 0.9, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Además de contar con suficiente tiempo de autonomía como energía de reserva. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          }, {
            name: "CENTIEL ESSENTIALPOWER XST 3:1 – 1:1 10KVA – 20KVA (Torre)",
            url: "centiel-essentialpower-xst-31-10-kva-20-kva-torre",
            images:[ "/Centiel-Perspective low_.jpg"],
            capacidades: "10 KVA | 15 KVA | 20 KVA",
            description: "EssentialPower la solución más flexible y confiable, ideal para dispositivos de redes pequeños, servidores, puntos de ventas, grupos de terminales de trabajo e instalaciones industriales pequeñas. El EssentialPower satisface cualquier aplicación crítica básica que demande una alta disponibilidad y flexibilidad. En su presentación son entrada trifásica y salida monofásica ó entrada y salida monofásica.",
          },

          ]
        }, {
          name: "UPS Trifásicas",
          url: "ups-trifasicas",
          items: [{
            name: "ALLSAI W-5 PRO 10KVA – 30KVA (Torre)",
            url: "allsai-w-5-pro-10-kva-30-kva-torre",
            images:["/ALLSAI WPRO G5 10-30KVA.png"] ,
            capacidades: "10 KVA | 15 KVA | 20 KVA | 30 KVA",
            description: "Allsai W-5 ofrece tecnología de doble conversión en línea y control DSP, asegurando eficiencia y rendimiento confiable. Con corrección activa del factor de potencia (APFC) de hasta 0,99 y un rango de voltaje de entrada de 304 Vac a 478 Vac, se adapta a diversas condiciones eléctricas. Su ventilador de velocidad variable garantiza un funcionamiento fresco y silencioso, mientras que recupera el 90% de su capacidad. Es una UPS con factor de potencia de salida 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Cuenta con pantalla de LED táctil. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          }, {
            name: "ALLSAI W-5 PRO 40KVA – 60KVA (Torre)",
            url: "allsai-w-5-pro-40kva-60kva-torre",
            images:["/ALLSAI-W5-PRO-60KVA.jpg"] ,
            capacidades: "40 KVA | 60 KVA ",
            description: "Allsai W-5 ofrece tecnología de doble conversión en línea y control DSP, asegurando eficiencia y rendimiento confiable. Con corrección activa del factor de potencia (APFC) de hasta 0,99 y un rango de voltaje de entrada de 304 Vac a 478 Vac, se adapta a diversas condiciones eléctricas. Su ventilador de velocidad variable garantiza un funcionamiento fresco y silencioso, mientras que recupera el 90% de su capacidad. Es una UPS con factor de potencia de salida 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Cuenta con pantalla de LED táctil. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          },
          {
            name: "ALLSAI W-5 PRO 80KVA – 200KVA (Torre)",
            url: "allsai-w-5-pro-80kva-200kva-torre",
            images:["/ALLSAI-W5-PRO-80-200KVA.png"] ,
            capacidades: "80 KVA | 100 KVA | 120 KVA | 160 KVA | 200 KVA",
            description: "Allsai W-5 ofrece tecnología de doble conversión en línea y control DSP, asegurando eficiencia y rendimiento confiable. Con corrección activa del factor de potencia (APFC) de hasta 0,99 y un rango de voltaje de entrada de 304 Vac a 478 Vac, se adapta a diversas condiciones eléctricas. Su ventilador de velocidad variable garantiza un funcionamiento fresco y silencioso, mientras que recupera el 90% de su capacidad. Es una UPS con factor de potencia de salida 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Cuenta con pantalla de LED táctil. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          }, {
            name: "ALLSAI W-5 PRO 10KVA – 30KVA (Rack)",
            url: "allsai-w-5-pro-10kva-30kva-rack",
            images: ["/ALLSAI-W5-PRO-10-30KVA-rack.png"],
            capacidades: "10 KVA | 15 KVA | 20 KVA | 30 KVA",
            description: "Para montaje en rack de 19” Allsai W-5 ofrece tecnología de doble conversión en línea y control DSP, asegurando eficiencia, rendimiento confiable y para ser instalado con baterías externas. Con corrección activa del factor de potencia (APFC) de hasta 0,99 y un rango de voltaje de entrada de 304 Vac a 478 Vac, se adapta a diversas condiciones eléctricas. Su ventilador de velocidad variable garantiza un funcionamiento fresco y silencioso, mientras que recupera el 90% de su capacidad. Es una UPS con factor de potencia de salida 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Cuenta con pantalla de LED táctil. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          }, {
            name: "ALLSAI W-5 PRO 10KVA – 20KVA (Torre) (208Vac) (LV)",
            url: "allsai-w-5-pro-10kva-20kva-torre-208vac",
            images:["/ALLSAI-WPRO-208V.png"] ,
            capacidades: "10 KVA | 20 KVA",
            description: "Allsai W-5 ofrece tecnología de doble conversión en línea y control DSP, asegurando eficiencia y rendimiento confiable. Con corrección activa del factor de potencia (APFC) de hasta 0,99 y un rango de voltaje de entrada de 166 Vac a 277 Vac, se adapta a diversas condiciones eléctricas. Su ventilador de velocidad variable garantiza un funcionamiento fresco y silencioso, mientras que recupera el 90% de su capacidad. Es una UPS con factor de potencia de salida 1, ofrece altos niveles de fiabilidad y protección para aplicaciones críticas. Cuenta con pantalla de LED táctil. Las aplicaciones más comunes son sistemas informáticos de procesamiento de datos, equipos de telecomunicaciones y misión sistemas críticos.",
          }, {
            name: "CENTIEL PREMIUM TOWER 10KVA – 500KVA (Torre)",
            url: "centiel-premium-tower-10kva-500kva-torre",
            images:["/centielPremiunTower-10kva-500kva-Torre.jpg"] ,
            capacidades: "10 KVA | 20 KVA | 30 KVA | 40 KVA | 60 KVA | 80 KVA | 100 KVA | 120 KVA | 160 KVA | 200 KVA | 250 KVA | 300 KVA | 400 KVA | 500 KVA",
            description: "PremiumTower es UPS diseñado y fabricado en suiza, sin interrupciones de doble conversión en línea de tres fases. Configurable como un UPS autónomo o como sistema paralelo de múltiples gabinetes, el PremiumTower provee la mejor flexibilidad para el crecimiento futuro. El PremiumTower ofrece escalabilidad de hasta 7.5 MW y proporciona una eficiencia energética inigualable en un diseño compacto y robusto de hasta 96,6%. Con una alta densidad de energía y BUS DC flexible para una optimización en el dimensionamiento de los bancos de baterías. ",
          }, {
            name: "CENTIEL PREMIUM TOWER S2 10KVA – 500KVA (Torre)",
            url: "centiel-premium-tower-s2-10kva-500kva-torre",
            images:["/premiumTowerS2.png"] ,
            capacidades: "10 KVA | 20 KVA | 30 KVA | 40 KVA | 60 KVA | 80 KVA ",
            description: "PremiumTower S2 es UPS diseñado y fabricado en suiza, sin interrupciones de doble conversión en línea de tres fases. Configurable como un UPS autónomo o como sistema paralelo de múltiples gabinetes, el PremiumTower S2 provee la mejor flexibilidad para el crecimiento futuro. El PremiumTower S2 ofrece Back Feed Protection de forma standard en un diseño compacto y robusto de hasta 97,1%. Con una alta densidad de energía y BUS DC flexible para una optimización en el dimensionamiento de los bancos de baterías. Con componentes diseñados para en un reemplazo por mantenimiento no menor a 15 años. Al mismo tiempo listo para trabajar con todo tipo de baterías (Plomo ácido, NiCd, Litio, Sodio, etc). Y con opción para contener hasta 240 baterías dentro del mismo UPS.",
          }, {
            name: "CENTIEL PREMIUM TOWER MS 80KVA – 250KVA ",
            url: "centiel-premium-tower-ms-80kva-250kva",
            images: ["/centielPremiumTowerMS.png"],
            capacidades: "80 KVA | 100 KVA | 120 KVA | 160 KVA | 200 KVA | 250 KVA",
            description: "PremiumTower MS es UPS diseñado y fabricado en suiza, sin interrupciones de doble conversión en línea de tres fases para aplicaciones junto a equipamiento médico como Equipos de Resonancia Magnética, Tomografos computarizados, Rayos X, Ultrasonidos, entre otros. Diseñado para soportar los picos de corriente requeridos por este tipo de equipamiento, sin nececidad de sobredimensionar el UPS. Configurable como un UPS autónomo o como sistema paralelo de múltiples gabinetes, el PremiumTower provee la mejor flexibilidad para el crecimiento futuro. El PremiumTower MS ofrece escalabilidad de hasta 7.5 MW y proporciona una eficiencia energética inigualable en un diseño compacto y robusto de hasta 96,6%. Con una alta densidad de energía y BUS DC flexible para una optimización en el dimensionamiento de los bancos de baterías. Al mismo tiempo listo para trabajar con todo tipo de baterías (Plomo ácido, NiCd, Litio, Sodio, etc).",
          },
          {
            name: "CENTIEL PREMIUM TOWER 10KVA – 150KVA (Torre)(208Vac)",
            url: "centiel-premium-tower-10kva-150kva-torre-208vac",
            images:["/centielPremiumTower10-150.png"] ,
            capacidades: "10 KVA | 15 KVA | 20 KVA | 30 KVA | 40 KVA | 50 KVA | 60 KVA | 80 KVA | 100 KVA | 125 KVA | 150 KVA ",
            description: "PremiumTower (208V) es UPS diseñado y fabricado en suiza, sin interrupciones de doble conversión en línea de tres fases. Configurable como un UPS autónomo o como sistema paralelo de múltiples gabinetes, el PremiumTower (208V) provee la mejor flexibilidad para el crecimiento futuro. El PremiumTower (208V) ofrece escalabilidad de hasta 7.5 MW y proporciona una eficiencia energética inigualable en un diseño compacto y robusto de hasta 96,6%. Con una alta densidad de energía y BUS DC flexible para una optimización en el dimensionamiento de los bancos de baterías. Al mismo tiempo listo para trabajar con todo tipo de baterías (Plomo ácido, NiCd, Litio, Sodio, etc).",
          },
          {
            name: "CENTIEL CUMULUS POWER 10KVA – 3.6MVA (Modular)",
            url: "centiel-cumulus-power-10kva-36mva-modular",
            images:["/Centiel_combo_front-cumulus.png"] ,
            capacidades: "10 KVA | 3.6 MVA",
            description: "CumulusPower es un vérsatil UPS modular totalmente descentralizado, diseñado y fabricado en Suiza. Cuenta con módulos de 10/20/25/30/50/62.5kW y con un rango de potencia en un mismo gabinete desde 10kW a 1.500kW proporcionando máxima flexibilidad a la aplicación final. Diseñado para cumplir con las rigurosas demandas de infraestructura TI de hoy en día. Proporciona eficiencias optimizadas de carga parcial y total de hasta el 97,6% en el modo de doble conversión en línea. En el modo ECO ultraseguro, el SAI proporciona una excelente calidad de energía con una eficiencia del 99,4%. Diseñado para eliminar puntos únicos de fallas y una Arquitectura redundante y distribución activa (DARA), reduciendo con esto el riesgo por el factor humano. Soporta sobrecargas de hasta 124% de forma continua en el inversor de forma continua.",
          },
          {
            name: "CENTIEL STRATUS POWER 10KVA – 3.75MVA (Modular)",
            url: "centiel-stratus-power-10kva-375mva-modular",
            images:[ "/Centiel_combo_front-cumulus.png"],
            capacidades: "10 KVA | 3.75 MVA",
            description: "StratusPower es un UPS modular totalmente descentralizado, diseñado y fabricado en Suiza. Cuenta con módulos de 10/20/25/50/60kW y con un rango de potencia en un mismo gabinete desde 10kW a 900kW proporcionando máxima flexibilidad a la aplicación final. Proporciona eficiencias optimizadas de carga parcial y total de hasta el 97,6% en el modo de doble conversión en línea. En el modo ECO ultraseguro, el SAI proporciona una excelente calidad de energía con una eficiencia del 99,4%. Diseñado para eliminar puntos únicos de fallas y una Arquitectura redundante y distribución activa (DARA), reduciendo con esto el riesgo por el factor humano. Soporta sobrecargas de hasta 124% de forma continua en el inversor de forma continua. Sistema diseñado para un tiempo de vida útil de más de 30 años",
          },

          ]
        },
        ]
      },
      {
        key: "baterias",
        label: "Baterías",
        url: "baterias",
        items: [{
            name: "ALLSAI LITIO / MONTAJE EN RACK",
            models:"LiFePO4",
            url: "allsai-litio-montaje-en-rack",
            images: ["/litio-1.jpg"],
            voltajes:"51.2V",
            capacidades: "10/20/30/40/50/60/80/100/200Ah",
            description: "Las baterías de Litio Allsai para montaje en rack de 19” son de tecnología de Litio ferrofosfato de hierro ideales para aplicaciones en telecomunicaciones, Minería. Diseñadas para 6.000 ciclos, recarga ultra rápida, excelente desempeño con descargas profundas hasta el 80%, cada módulos cuenta con su propio BMS.",
          },
          {
            name: "RITAR SERIE RT",
            models:"",
            url: "ritar-serie-rt",
            images: ["/ritar-rt-1.jpg"],
            voltajes:"6V/12V",
            capacidades: "1.3Ah~28Ah",
            description: "Larga vida de diseño\n Baja tasa de autodescarga\n Buen rendimiento de descarga de alta tasa\n Amplio rango de temperatura de operación Aplicación: pequeños UPS, luz de emergencia, sistemas de seguridad, juguetes, médicos, etc."
          },
          {
            name: "RITAR SERIE RA",
            models:"",
            url: "ritar-serie-ra",
            images: ["/ritar-ra-3.jpg"],
            voltajes:"12V",
            capacidades: "33Ah – 260Ah",
            description: "Larga vida de diseño\n Baja tasa de autodescarga\n Buen rendimiento de descarga de alta tasa\n Amplio rango de temperatura de operación Aplicación: sistemas de telecomunicaciones, sistemas de alarma y contra incendios, sistemas de emergencia, herramientas eléctricas, equipos médicos, UPS/EPS, inversores/controladores solares, etc."
          },
          {
            name: "RITAR SERIE HR",
            models:"",
            url: "ritar-serie-hr",
            images: ["/ritar-hr-1.jpg"],
            voltajes:"6V/12V",
            capacidades: "16W – 850W",
            description: "Densidad de energía superior y salida de potencia muy alta\nBajo rendimiento de autodescarga\nAmplio rango de temperatura de operación\nLarga vida de diseño \nAdecuado para UPS/EPS, centros de datos donde se requieren cargas de alta corriente."
          },
          {
            name: "ALLSAI GEL",
            models:"",
            url: "allsai-gel",
            images: ["/gel-1.jpg"],
            voltajes:"2V,4V,6V, 8V,12V",
            capacidades: "3,5Ah a 3.150Ah",
            description: "Las baterías ALLSAI VRLA-GEL están fabricadas con verdadera tecnología comprobada en más de un siglo de experiencia. Debido a su característica VRLA no requieren válvulas reguladas para mantenimiento."
          },
        {
            name: "ALLSAI AGM",
            models:"",
            url: "allsai-agm",
            images: ["/agm-1.jpg"],
            voltajes:"2V,4V,6V, 8V,12V",
            capacidades: " 3,5Ah a 3.150Ah",
            description: "Las baterías ALLSAI VRLA-AGM son baterías de Plomo ácido reguladas por válvula con separadores de placa de vidrio absorbente (AGM). Son baterías de alta calidad y larga vida de 2V a 24V, y de 0.5AH a 3500AH."
          },
          {
            name: "ALLSAI NIQUEL CADMIO",
            models:"KPH, KPM, KPL",
            url: "allsai-niquel-cadmio",
            images: ["/niquel-cadmio-1.jpg"],
            voltajes:"1.2V",
            capacidades: " 3,5Ah a 3.150Ah",
            description: "Las baterías se han convertido en la primera opción para el usuario que busca un sistema confiable, de larga vida útil bajo costos de mantenimiento."
          },
          {
            name: "ALLSAI OPZ",
            models:" OPZV, OPZS",
            url: "allsai-opz",
            images: ["/opz-1.jpg"],
            voltajes:"2V, 6V, 12V",
            capacidades: "77Ah a 3.360Ah",
            description: "Las baterías ALLSAIde tipo estacionarias, mejor conocidas como OPZ se han convertido en un aliado indispensable en aquellos lugares donde no hay red eléctrica y existe la necesidad de alimentar ciertos consumos de tipo medio-alto de manera constante como en viviendas remotas, campings o almacenes. Se trata pues de acumuladores de 2V que puestos en serie de 6 ó 12 vasos pueden alcanzar los 12V ó 24V respectivamente."
          },
        ]
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
