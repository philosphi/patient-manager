import { NextResponse } from 'next/server'
import { mockPatients } from '@/mocks/patientData'
import { customAlphabet } from 'nanoid';

const generateMemberId = customAlphabet('0123456789', 7);

export const GET = async () => {
  return NextResponse.json(mockPatients)
}

export const POST = async (request: Request) => {
  const patient = await request.json()
  const newPatient = mockPatients.push({
    ...patient,
    memberId: generateMemberId(),
  })
  return NextResponse.json(newPatient, { status: 201 })
}
