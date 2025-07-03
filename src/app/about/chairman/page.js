'use client'

import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";

export default function Chairman({ locale }) {
  const messages = getMessages(locale);
  const chairmanMsg = messages.chairman;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-[60vh] w-full relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/chairman-hero.jpg"
            alt="Chairman Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* 文字内容 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 w-full max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 font-bold">
            {chairmanMsg.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            {chairmanMsg.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white">
        {/* 董事长简介区域 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* 左侧董事长照片 */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/chairman-photo.png"
                    alt={chairmanMsg.profile.name}
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 装饰边框 */}
                <div className="absolute -inset-4 bg-gradient-to-br from-red-100 to-gray-100 rounded-2xl -z-10"></div>
              </div>
            </div>

            {/* 右侧基本信息 */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                  {chairmanMsg.profile.name}
                </h2>
                <h3 className="text-xl sm:text-2xl text-red-600 font-semibold mb-6">
                  {chairmanMsg.profile.position}
                </h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {chairmanMsg.profile.summaryTitle}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {chairmanMsg.profile.summary}
                </p>
              </div>

              {/* 核心资质 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">CFA</div>
                  <div className="text-sm text-gray-600">{chairmanMsg.profile.cfa}</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">{chairmanMsg.profile.experience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 教育背景区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {chairmanMsg.education.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{chairmanMsg.education.master.school}</h3>
                    <p className="text-gray-600">{chairmanMsg.education.master.degree}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{chairmanMsg.education.bachelor.school}</h3>
                    <p className="text-gray-600">{chairmanMsg.education.bachelor.degree}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 职业经历区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {chairmanMsg.career.title}
              </h2>
            </div>

            <div className="space-y-8">
              {/* 摩根大通经历 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className="inline-block bg-blue-100 px-4 py-2 rounded-full">
                        <span className="text-blue-600 font-semibold">{chairmanMsg.career.jpmorgan.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.career.jpmorgan.position}</h3>
                    <h4 className="text-lg text-red-600 font-semibold mb-3">{chairmanMsg.career.jpmorgan.company}</h4>
                    <p className="text-gray-700 leading-relaxed">{chairmanMsg.career.jpmorgan.description}</p>
                  </div>
                </div>
              </div>

              {/* Greenwoods经历 */}
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="text-center lg:text-left">
                      <div className="inline-block bg-green-100 px-4 py-2 rounded-full">
                        <span className="text-green-600 font-semibold">{chairmanMsg.career.greenwoods.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.career.greenwoods.position}</h3>
                    <h4 className="text-lg text-red-600 font-semibold mb-3">{chairmanMsg.career.greenwoods.company}</h4>
                    <p className="text-gray-700 leading-relaxed">{chairmanMsg.career.greenwoods.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 现任职务区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {chairmanMsg.current.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* HKVCA职务 */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.current.hkvca.position}</h3>
                  <p className="text-gray-600">{chairmanMsg.current.hkvca.organization}</p>
                </div>
              </div>

              {/* 独立董事职务 */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.current.director.position}</h3>
                  <p className="text-gray-600">{chairmanMsg.current.director.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 投资专长区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {chairmanMsg.expertise.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {chairmanMsg.expertise.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.expertise.areas.ai}</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.expertise.areas.cleanEnergy}</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{chairmanMsg.expertise.areas.healthcare}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="bg-red-600 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {chairmanMsg.cta.title}
            </h2>
            <p className="text-lg text-red-100 mb-8">
              {chairmanMsg.cta.description}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-red-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {chairmanMsg.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
