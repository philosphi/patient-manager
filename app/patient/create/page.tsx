'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Patient } from '@/types/patient'
import { createPatient } from '@/utils/api'
import { FormInput } from '@/components/FormInput'

export default function CreatePatient() {
  // upcoming appointments are not required for creating a new patient
  const [formData, setFormData] = useState<
    Omit<Patient, 'memberId' | 'upcomingAppointments'>
  >({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    relationship: '',
  })
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newPatient: Omit<Patient, 'memberId'> = {
      ...formData,
      upcomingAppointments: [],
    }
    createPatient(newPatient)

    router.push('/')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Patient</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-1/2  bg-white rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Relationship"
            name="relationship"
            type="text"
            value={formData.relationship}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  )
}
