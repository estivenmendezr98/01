import { create } from 'zustand';

export const useMedicalStore = create((set) => ({
  diagnoses: [
    { id: 1, descripcion: 'Lacteos' },
    { id: 2, descripcion: 'Licores' },
    { id: 3, descripcion: 'Aseo' },
  ],
  treatments: [],
  vaccines: [],
  anamnesis: [],

  addDiagnosis: (diagnosis) =>
    set((state) => ({ diagnoses: [...state.diagnoses, diagnosis] })),
  addTreatment: (treatment) =>
    set((state) => ({ treatments: [...state.treatments, treatment] })),
  addVaccine: (vaccine) =>
    set((state) => ({ vaccines: [...state.vaccines, vaccine] })),
  addAnamnesis: (anamnesis) =>
    set((state) => ({ anamnesis: [...state.anamnesis, anamnesis] })),

  deleteDiagnosis: (id) =>
    set((state) => ({
      diagnoses: state.diagnoses.filter((d) => d.id !== id),
    })),
  deleteTreatment: (id) =>
    set((state) => ({
      treatments: state.treatments.filter((t) => t.id !== id),
    })),
  deleteVaccine: (id) =>
    set((state) => ({
      vaccines: state.vaccines.filter((v) => v.id !== id),
    })),
  deleteAnamnesis: (id) =>
    set((state) => ({
      anamnesis: state.anamnesis.filter((a) => a.id !== id),
    })),
}));