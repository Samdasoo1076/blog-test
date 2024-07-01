import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '도제 기수별 소개',
}

export default function Doje() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            도제 기수별 소개
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            상일미디어고등학교 도제 기수별 재학, 졸업생 들입니다.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-6">
            <Link href="/Doje6">
              <div className="group mb-6 block cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <Image
                  src="/static/images/doje6.jpg"
                  alt="도제 6기"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-4 text-2xl font-semibold">도제 6기</div>
                <p className="mt-2 text-gray-600 group-hover:hidden dark:text-gray-400">
                  상일미디어고등학교 도제 6기 졸업생들입니다.
                </p>
                <p className="mt-2 hidden text-gray-600 group-hover:block dark:text-gray-400">
                  여기에 마우스를 올리면 보이는 텍스트입니다.
                </p>
              </div>
            </Link>
            <Link href="/Doje7">
              <div className="group mb-6 block cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <Image
                  src="/static/images/doje7.jpg"
                  alt="도제 7기"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-4 text-2xl font-semibold">도제 7기</div>
                <p className="mt-2 text-gray-600 group-hover:hidden dark:text-gray-400">
                  상일미디어고등학교 도제 7기 졸업생들입니다.
                </p>
                <p className="mt-2 hidden text-gray-600 group-hover:block dark:text-gray-400">
                  여기에 마우스를 올리면 보이는 텍스트입니다.
                </p>
              </div>
            </Link>
            <Link href="/Doje8">
              <div className="group mb-6 block cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <Image
                  src="/static/images/doje8.jpg"
                  alt="도제 8기"
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <div className="mt-4 text-2xl font-semibold">도제 8기</div>
                <p className="mt-2 text-gray-600 group-hover:hidden dark:text-gray-400">
                  상일미디어고등학교 도제 8기 졸업생들입니다.
                </p>
                <p className="mt-2 hidden text-gray-600 group-hover:block dark:text-gray-400">
                  여기에 마우스를 올리면 보이는 텍스트입니다.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
