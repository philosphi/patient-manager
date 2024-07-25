import { mockPatients } from "@/mocks/patientData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const patient = mockPatients.find(patient => patient.memberId === params.id);
  
  if (!patient) {
    return new NextResponse('Patient not found', { status: 404 });
  }

  return NextResponse.json(patient);
}