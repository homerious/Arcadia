'use client'

import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";

export default function About({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const aboutMsg = messages.about;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-[60vh] w-full relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Us Background"
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
            {aboutMsg.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            {aboutMsg.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white">
        {/* 公司简介区域 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {aboutMsg.company.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* 左侧文字内容 */}
            <div className="space-y-6">
              <div className="rounded-lg">
                <h4 className="text-2xl font-semibold text-red-600 mb-6">
                  {aboutMsg.company.name}
                </h4>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-base sm:text-lg">
                  {aboutMsg.company.description1}
                </p>
              </div>
            </div>

            {/* 右侧Logo/图片 */}
            <div className="flex justify-center lg:justify-end">
              <Image
                width={776}
                height={529}
                src="/images/logo2.jpg"
                alt="Logo"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full"
              ></Image>
            </div>
          </div>

          {/* 团队背景 */}
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">
                  {aboutMsg.team.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {aboutMsg.team.description1}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-800">{aboutMsg.team.expertise}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 投资理念区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {aboutMsg.philosophy.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* 投资领域 */}
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{aboutMsg.sectors.ai}</h3>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{aboutMsg.sectors.manufacturing}</h3>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{aboutMsg.sectors.cleanEnergy}</h3>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{aboutMsg.sectors.healthcare}</h3>
              </div>
            </div>

            {/* 投资理念描述 */}
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {aboutMsg.philosophy.approach}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {aboutMsg.philosophy.description1}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 行业参与区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                  {aboutMsg.industry.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {aboutMsg.industry.description1}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600 mb-2">HKVCA</div>
                    <p className="text-sm text-gray-600">{aboutMsg.industry.hkvca}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 客户服务区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {aboutMsg.clients.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{aboutMsg.clients.types.familyOffice}</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{aboutMsg.clients.types.wealthManagement}</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{aboutMsg.clients.types.institutional}</h3>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">{aboutMsg.clients.types.sovereignFund}</h3>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                {aboutMsg.clients.description1}
              </p>
            </div>
          </div>
        </div>

        {/* 愿景使命区域 */}
        <div className="bg-red-600 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                {aboutMsg.vision.quote}
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {aboutMsg.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {aboutMsg.cta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {aboutMsg.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
