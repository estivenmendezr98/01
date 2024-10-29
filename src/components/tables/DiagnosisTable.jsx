import React from 'react';
import { useMedicalStore } from '../../store/medicalStore';

export default function DiagnosisTable({ onSelect }) {
  const { diagnoses, deleteDiagnosis } = useMedicalStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Diagnósticos</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Seleccionar</th>
              <th className="border border-gray-300 px-4 py-2">Eliminar</th>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Descripción</th>
            </tr>
          </thead>
          <tbody>
            {diagnoses.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => onSelect(item.descripcion)}
                    className="text-blue-600 hover:underline"
                  >
                    Seleccionar
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => deleteDiagnosis(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}