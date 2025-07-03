'use client'

import Image from "next/image";
import Link from "next/link";
import { getMessages } from "@/lib/i18n";

export default function Strategy({ params }) {
  const locale = params.locale;
  const messages = getMessages(locale);
  const strategyMsg = messages.strategy;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-[60vh] w-full relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/investment-hero.jpg"
            alt="Investment Strategy Background"
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
            {strategyMsg.hero.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed">
            {strategyMsg.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white">
        {/* 投资理念区域 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              {strategyMsg.philosophy.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {strategyMsg.philosophy.description}
              </p>
            </div>
          </div>

          {/* 核心理念展示 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-center">
                  <svg className="w-16 h-16 text-red-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{strategyMsg.philosophy.focus}</h3>
                  <p className="text-gray-700">{strategyMsg.philosophy.focusDescription}</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{strategyMsg.philosophy.principles.precision}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">⚖️</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{strategyMsg.philosophy.principles.balance}</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold">🔮</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{strategyMsg.philosophy.principles.foresight}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主要策略方向区域 */}
        <div className="bg-gray-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {strategyMsg.pillars.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 主题导向型投资 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{strategyMsg.pillars.thematic.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategyMsg.pillars.thematic.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {strategyMsg.pillars.thematic.areas.map((area, index) => (
                    <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-center">
                      <span className="text-sm font-medium text-blue-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 跨周期配置与宏观对冲 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{strategyMsg.pillars.crossCycle.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategyMsg.pillars.crossCycle.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {strategyMsg.pillars.crossCycle.methods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 私募市场与PIPE机会 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{strategyMsg.pillars.privateMarket.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategyMsg.pillars.privateMarket.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {strategyMsg.pillars.privateMarket.opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 风控优先、长期持有 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{strategyMsg.pillars.riskFirst.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{strategyMsg.pillars.riskFirst.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {strategyMsg.pillars.riskFirst.approaches.map((approach, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{approach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 投资流程区域 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {strategyMsg.process.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {strategyMsg.process.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{strategyMsg.process.steps.research}</h3>
                <p className="text-sm text-gray-600">{strategyMsg.process.descriptions.research}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{strategyMsg.process.steps.analysis}</h3>
                <p className="text-sm text-gray-600">{strategyMsg.process.descriptions.analysis}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{strategyMsg.process.steps.execution}</h3>
                <p className="text-sm text-gray-600">{strategyMsg.process.descriptions.execution}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{strategyMsg.process.steps.monitoring}</h3>
                <p className="text-sm text-gray-600">{strategyMsg.process.descriptions.monitoring}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 投资理念引言区域 */}
        <div className="bg-red-600 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-white mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                {strategyMsg.quote.text}
              </blockquote>
            </div>
          </div>
        </div>

        {/* CTA区域 */}
        <div className="bg-white py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              {strategyMsg.cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {strategyMsg.cta.description}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {strategyMsg.cta.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
