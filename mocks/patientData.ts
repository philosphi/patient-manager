import { Patient } from '@/types/patient';

export const mockPatients: Patient[] = [
  {
    dateOfBirth: "1969-10-07",
    memberId: "9348190",
    firstName: "Phi",
    lastName: "Nguyen",
    relationship: "self",
    upcomingAppointments: []
  },
  {
    dateOfBirth: "1969-10-08",
    memberId: "9348191",
    firstName: "John",
    lastName: "Smith",
    relationship: "self",
    upcomingAppointments: []
  },
  {
    dateOfBirth: "1969-11-08",
    memberId: "9348192",
    firstName: "Jane",
    lastName: "Doe",
    relationship: "self",
    upcomingAppointments: ["2022-01-01", "2022-02-01", "2022-03-01"]
  }
]