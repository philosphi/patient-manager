'use client'

import React, { useState, useEffect } from 'react'
import { Patient } from '@/types/patient'
import { getPatientById } from '@/utils/api'
import Link from 'next/link'

export default function PatientDetails({ params }: { params: { id: string } }) {
  const [patient, setPatient] = useState<Patient | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPatient = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await getPatientById(params.id)
        setPatient(data)
      } catch (err) {
        setError('Failed to fetch patient data')
        console.error('Error fetching patient:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPatient()
  }, [params.id])

  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      {isLoading ? (
        <p>Loading Patient...</p>
      ) : patient ? (
        <div className="mb-2 shadow p-2 rounded-lg bg-white w-1/2">
          <div className="px-4 py-2">
            <strong>Name:</strong> {patient?.firstName} {patient?.lastName}
          </div>
          <div className="px-4 py-2">
            <strong>Member ID:</strong> {patient?.memberId}
          </div>
          <div className="px-4 py-2">
            <strong>Date of Birth:</strong> {patient?.dateOfBirth}
          </div>
          <div className="px-4 py-2">
            <strong>Relationship:</strong> {patient?.relationship}
          </div>
          <div className="px-4 py-2">
            <strong>Upcoming Appointments:</strong>
            {patient?.upcomingAppointments.length ? (
              // the key iterator is not unique and may cause rendering issues
              <div className="mt-2">
                {patient?.upcomingAppointments.map((appt) => (
                  <li className="mb-2" key={appt}>
                    {appt}
                  </li>
                ))}
              </div>
            ) : (
              ' None'
            )}
          </div>
        </div>
      ) : (
        <p>No patient found.</p>
      )}
      <Link
        href="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Back
      </Link>
    </div>
  )
}
