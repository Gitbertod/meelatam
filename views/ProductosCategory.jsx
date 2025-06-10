import React from "react";
import { useParams } from "react-router-dom";

const ProductosCategory = () => {
  const { categoryId } = useParams();

  const categoryData = {
    "respaldo-de-energia": {
      ups: ["UPS-Interactivas", "UPS-Monofásicas", "UPS-Trimono", "UPS-Trifásicas", "UPS Modulares"],
      baterias: [],
      inversores: [],
      rectificadores: []
    },
    "calidad-de-energia": ["Banco-de-condensadores", "Filtros-Activos", "Transformadores", "Estabilizadores-de-voltaje", "PDU", "STS"],
    "clima-de-precision": ["Chillers", "Equipos-Perimetrales", "Equipos-in-Row", "Equipos-tipo-mochila", "Aire-Acondicionado-de-Precisión"],
    "accionamiento-Electrico": ["Variadores-de-frecuencia"]
  };

  const categoryItems = categoryData[categoryId];

  return (
    <div>
      <h2>Categoría: {categoryId}</h2>
      {categoryItems ? (
        <ul>
          {Array.isArray(categoryItems)
            ? categoryItems.map((item, index) => <li key={index}>{item}</li>)
            : Object.entries(categoryItems).map(([subCategory, items]) => (
                <div key={subCategory}>
                  <h3>{subCategory}</h3>
                  <ul>
                    {items.length > 0 ? items.map((item, index) => <li key={index}>{item}</li>) : <li>No hay elementos disponibles</li>}
                  </ul>
                </div>
              ))}
        </ul>
      ) : (
        <p>No hay datos disponibles para esta categoría.</p>
      )}
    </div>
  );
};

export default ProductosCategory;