import { Patient } from '@/types/patient';

export const getAllPatients = async () => {
  const res = await fetch("/api/patients");
  const data = await res.json();
  return data;
}

export const getPatientById = async (id: string) => {
  const res = await fetch(`/api/patients/${id}`);
  const data = await res.json();
  return data;
}

export const createPatient = async (patient: Omit<Patient, 'memberId'>) => {
  const res = await fetch("/api/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient),
  });
  const data = await res.json();
  return data;
}