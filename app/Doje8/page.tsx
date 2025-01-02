'use client'

import React, { useEffect, useState } from 'react'
import DojeData8 from '@/data/DojeData8'
import DojeCard from '@/components/DojeCard'

interface Customer {
  CustomerId: number
  CompanyName: string
  ContactName: string
}

export default function Doje8() {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    fetch('https://d1-tutorial.myucheu0617.workers.dev/api/beverages')
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data) // API 응답 데이터가 Customer[] 타입이어야 함
      })
      .catch((error) => console.error('Error fetching data: ', error))
  }, [])

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          도제 8기
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          상일미디어고등학교 도제 8기 졸업생들입니다.
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {DojeData8.map((d) => (
            <DojeCard
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              github={d.github}
              instar={d.instar}
            />
          ))}
          {customers.map((customer) => (
            <div key={customer.CustomerId}>
              <h3>{customer.CompanyName}</h3>
              <p>{customer.ContactName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
