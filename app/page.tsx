'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Patient } from '@/types/patient'
import { getAllPatients } from '@/utils/api'

export default function Home() {
  const [patients, setPatients] = useState<Patient[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const data = await getAllPatients()
        setPatients(data)
      } catch (err) {
        setError('Failed to fetch patients')
        console.error('Error fetching patients:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPatients()
  }, [])

  const sortedPatients = useMemo(
    () => [...patients].sort((a, b) => a.lastName.localeCompare(b.lastName)),
    [patients]
  )

  if (error) {
    return <div className="container mx-auto p-4 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      {isLoading ? (
        <p>Loading patients...</p>
      ) : sortedPatients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedPatients.map((patient: Patient) => (
            <li
              key={patient.memberId}
              className="mb-2 shadow p-2 rounded-lg bg-white"
            >
              <Link href={`/patient/${patient.memberId}`} className="block">
                <div className="px-4 py-2 font-semibold">{`${patient.firstName} ${patient.lastName}`}</div>
                <div className="px-4 py-2 text-gray-600">
                  ID: {patient.memberId}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link
        href="/patient/create"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add a Patient
      </Link>
    </div>
  )
}
