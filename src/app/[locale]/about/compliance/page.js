'use client'

import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";

export default function Compliance({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const complianceMsg = messages.compliance;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-[60vh] w-full relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/compliance-hero.jpg"
            alt="Compliance Background"
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
            {complianceMsg.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            {complianceMsg.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white">
        {/* 合规政策说明区域 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              {complianceMsg.policy.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                {complianceMsg.policy.description}
              </p>
            </div>
          </div>

          {/* 监管资质展示 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{complianceMsg.credentials.sfc.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-2">{complianceMsg.credentials.sfc.number}</p>
              <p className="text-sm text-gray-600">{complianceMsg.credentials.sfc.description}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{complianceMsg.credentials.lei.title}</h3>
              <p className="text-lg font-bold text-green-600 mb-2 break-all">{complianceMsg.credentials.lei.number}</p>
              <p className="text-sm text-gray-600">{complianceMsg.credentials.lei.description}</p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{complianceMsg.credentials.established.title}</h3>
              <p className="text-2xl font-bold text-red-600 mb-2">{complianceMsg.credentials.established.year}</p>
              <p className="text-sm text-gray-600">{complianceMsg.credentials.established.description}</p>
            </div>
          </div>
        </div>

        {/* 核心合规实践区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {complianceMsg.practices.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* KYC & AML */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.kyc.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.kyc.description}</p>
              </div>

              {/* 市场操纵防范 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.marketAbuse.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.marketAbuse.description}</p>
              </div>

              {/* 利益冲突管理 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.conflict.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.conflict.description}</p>
              </div>

              {/* 投资限制控制 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.riskControl.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.riskControl.description}</p>
              </div>

              {/* 员工培训 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.training.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.training.description}</p>
              </div>

              {/* 合规官制度 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl text-center font-bold text-gray-800 mb-4">{complianceMsg.practices.items.cco.title}</h3>
                <p className="text-gray-700 leading-relaxed">{complianceMsg.practices.items.cco.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 监管活动类别区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {complianceMsg.activities.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {complianceMsg.activities.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">第1類</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{complianceMsg.activities.types.type1}</h3>
                <p className="text-gray-600">{complianceMsg.activities.descriptions.type1}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">第4類</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{complianceMsg.activities.types.type4}</h3>
                <p className="text-gray-600">{complianceMsg.activities.descriptions.type4}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">第9類</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{complianceMsg.activities.types.type9}</h3>
                <p className="text-gray-600">{complianceMsg.activities.descriptions.type9}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 承诺声明区域 */}
        <div className="bg-red-600 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                {complianceMsg.commitment.title}
              </h2>
              <p className="text-lg text-red-100 leading-relaxed">
                {complianceMsg.commitment.description}
              </p>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {complianceMsg.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {complianceMsg.cta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {complianceMsg.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
