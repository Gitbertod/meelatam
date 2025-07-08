import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import ButtonComponent from "../buttonComponent/ButtonComponent";
import styles from "./TableHeadComponent.module.css";

// Este componente espera recibir el objeto table como prop
const TableHeadComponent = ({ table }) => {
  if (
    !table ||
    !table.modelosDeBateria ||
    table.modelosDeBateria.length === 0
  ) {
    return (
      <p className="text-center text-gray-500">No hay datos disponibles.</p>
    );
  }

  // Se asume que todos los arrays tienen la misma longitud
  const rowCount = table.modelosDeBateria.length;

  return (
    <div className="w-full">
      {/* Tabla para pantallas medianas en adelante */}
      <div className="hidden md:block overflow-x-auto max-h-[500px] overflow-y-auto">
        <div >
          <Table
            hoverable
            className="min-w-[1000px] w-full text-sm text-left text-gray-500 bg-white border border-gray-200"
          >
            <TableHead className="sticky top-0 z-10 bg-gray-100 text-gray-900">
              <TableRow className="bg-white dark:border-gray-100 dark:bg-gray-100">
                <TableHeadCell>Fichas Técnicas</TableHeadCell>
                <TableHeadCell>Modelos</TableHeadCell>
                <TableHeadCell>Voltaje Nominal (V)</TableHeadCell>
                <TableHeadCell>Capacidad (Ah)</TableHeadCell>
                <TableHeadCell>Largo (mm)</TableHeadCell>
                <TableHeadCell>Ancho (mm)</TableHeadCell>
                <TableHeadCell>Altura (mm)</TableHeadCell>
                <TableHeadCell>Altura Total (mm)</TableHeadCell>
                <TableHeadCell>Peso (Kg)</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody className="divide-y divide-gray-200">
              {Array.from({ length: rowCount }).map((_, index) => (
                <TableRow
                  key={index}
                  className="bg-white border-b border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <TableCell>
                    <a
                      href={`/docs/${table.fichasTecnicas?.[index]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonComponent text={"Descargar"} />
                    </a>
                  </TableCell>
                  <TableCell>{table.modelosDeBateria[index] || "-"}</TableCell>
                  <TableCell>{table.voltajeNominal?.[index] || "-"}</TableCell>
                  <TableCell>{table.capacidad?.[index] || "-"}</TableCell>
                  <TableCell>{table.largo?.[index] || "-"}</TableCell>
                  <TableCell>{table.ancho?.[index] || "-"}</TableCell>
                  <TableCell>{table.altura?.[index] || "-"}</TableCell>
                  <TableCell>{table.alturaTotal?.[index] || "-"}</TableCell>
                  <TableCell>{table.peso?.[index] || "-"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Tarjetas para móviles */}
      <div className="block md:hidden space-y-4 mt-4">
        {Array.from({ length: rowCount }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 shadow-sm bg-white"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {table.modelosDeBateria[index] || "-"}
                </h3>
                <p className="text-sm text-gray-500">
                  Ficha técnica disponible
                </p>
              </div>
              <a
                href={`/docs/${table.fichasTecnicas?.[index]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonComponent text="Descargar" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <div className="font-medium">Voltaje:</div>
              <div>{table.voltajeNominal?.[index] || "-"}</div>

              <div className="font-medium">Capacidad:</div>
              <div>{table.capacidad?.[index] || "-"} Ah</div>

              <div className="font-medium">Largo:</div>
              <div>{table.largo?.[index] || "-"} mm</div>

              <div className="font-medium">Ancho:</div>
              <div>{table.ancho?.[index] || "-"} mm</div>

              <div className="font-medium">Altura:</div>
              <div>{table.altura?.[index] || "-"} mm</div>

              <div className="font-medium">Altura Total:</div>
              <div>{table.alturaTotal?.[index] || "-"} mm</div>

              <div className="font-medium">Peso:</div>
              <div>{table.peso?.[index] || "-"} kg</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHeadComponent;
