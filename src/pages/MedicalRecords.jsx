import { useState } from 'react';
import { useMedicalStore } from '../store/medicalStore';

export default function MedicalRecords() {
  const [activeTab, setActiveTab] = useState('diagnoses');
  const [newRecord, setNewRecord] = useState('');
  const {
    diagnoses,
    treatments,
    vaccines,
    anamnesis,
    addDiagnosis,
    addTreatment,
    addVaccine,
    addAnamnesis,
    deleteDiagnosis,
    deleteTreatment,
    deleteVaccine,
    deleteAnamnesis
  } = useMedicalStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newRecord.trim()) return;

    const newItem = {
      id: Date.now(),
      descripcion: newRecord
    };

    switch (activeTab) {
      case 'diagnoses':
        addDiagnosis(newItem);
        break;
      case 'treatments':
        addTreatment(newItem);
        break;
      case 'vaccines':
        addVaccine(newItem);
        break;
      case 'anamnesis':
        addAnamnesis(newItem);
        break;
    }
    setNewRecord('');
  };

  const handleDelete = (id) => {
    switch (activeTab) {
      case 'diagnoses':
        deleteDiagnosis(id);
        break;
      case 'treatments':
        deleteTreatment(id);
        break;
      case 'vaccines':
        deleteVaccine(id);
        break;
      case 'anamnesis':
        deleteAnamnesis(id);
        break;
    }
  };

  const getActiveData = () => {
    switch (activeTab) {
      case 'diagnoses': return diagnoses;
      case 'treatments': return treatments;
      case 'vaccines': return vaccines;
      case 'anamnesis': return anamnesis;
      default: return [];
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex space-x-4 mb-4">
          {['diagnoses', 'treatments', 'vaccines', 'anamnesis'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newRecord}
              onChange={(e) => setNewRecord(e.target.value)}
              placeholder="Ingrese la descripción"
              className="flex-1 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {newRecord ? 'Guardar' : 'Actualizar'}
            </button>
          </div>
        </form>

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
              {getActiveData().map((item) => (
                <tr key={item.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => setNewRecord(item.descripcion)}
                      className="text-blue-500 hover:underline"
                    >
                      Seleccionar
                    </button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:underline"
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
    </div>
  );
}