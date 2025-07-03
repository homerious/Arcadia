'use client'

import { getMessages } from "@/lib/i18n"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'
import styles from './Home.module.css'

export default function Home({ locale }) {
  console.log(locale)
  const messages = getMessages(locale)
  const homeMsg = messages.home

  // 核心优势数据
  const advantageItems = [
    {
      icon: "🎯",
      title: homeMsg.advantages.items.strategy,
      description: homeMsg.advantages.items.strategyDesc
    },
    {
      icon: "🌐",
      title: homeMsg.advantages.items.network,
      description: homeMsg.advantages.items.networkDesc
    },
    {
      icon: "💎",
      title: homeMsg.advantages.items.expertise,
      description: homeMsg.advantages.items.expertiseDesc
    }
  ]

  // 投资领域数据
  const investmentAreas = [
    {
      title: homeMsg.investment.areas.ai,
      description: homeMsg.investment.areas.aiDesc,
      color: "bg-red-600"
    },
    {
      title: homeMsg.investment.areas.manufacturing,
      description: homeMsg.investment.areas.manufacturingDesc,
      color: "bg-gray-600"
    },
    {
      title: homeMsg.investment.areas.cleanEnergy,
      description: homeMsg.investment.areas.cleanEnergyDesc,
      color: "bg-red-600"
    },
    {
      title: homeMsg.investment.areas.healthcare,
      description: homeMsg.investment.areas.healthcareDesc,
      color: "bg-gray-600"
    }
  ]

  // 轮播图数据
  const conferenceImages = [
    "/images/conference/1.jpg",
    "/images/conference/2.jpg",
    "/images/conference/3.jpg",
    "/images/conference/4.jpg",
    "/images/conference/5.jpg",
    "/images/conference/6.jpg",
    "/images/conference/7.jpg",
    "/images/conference/8.jpg",
    "/images/conference/9.jpg",
    "/images/conference/10.jpg",
    "/images/conference/11.jpg",
    "/images/conference/12.jpg",
    "/images/conference/13.jpg",
    "/images/conference/14.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % conferenceImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + conferenceImages.length) % conferenceImages.length);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-[60vh] w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
          <Image
            src="/images/hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover -z-10"
            priority
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 font-bold">
            {homeMsg.hero.titleZh}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 font-light">
            {homeMsg.hero.titleEn}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {homeMsg.hero.subtitle}
          </p>
        </div>
      </div>



      {/* About Section */}
      <div id="about" className="relative bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {homeMsg.about.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          {/* 三个核心优势圆圈 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-16">
            {advantageItems.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-40 h-40 mx-auto rounded-full flex items-center justify-center mb-6 ${
                  index === 1 ? 'border-6 border-red-600' : (index === 2 ? 'border-6 border-gray-600' : 'border-6 border-amber-300')
                }`}>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {homeMsg.about.learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* Investment Strategy Section */}
      <div id="investment" className="relative bg-gray-50 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {homeMsg.investment.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>

          {/* 投资领域卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {investmentAreas.map((area, index) => (
              <div key={index} className={`${area.color} text-white p-8 rounded-lg relative overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{area.description}</p>
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/strategy"
              className="inline-block px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {homeMsg.investment.learnMore}
            </Link>
          </div>
        </div>
      </div>

      {/* ESG Section */}
      <div id="esg" className="relative bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
              {homeMsg.esg.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12">
              {homeMsg.esg.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{homeMsg.esg.stats.projects}</div>
                <div className="text-gray-600">{homeMsg.esg.stats.projectsLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{homeMsg.esg.stats.impact}</div>
                <div className="text-gray-600">{homeMsg.esg.stats.impactLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{homeMsg.esg.stats.commitment}</div>
                <div className="text-gray-600">{homeMsg.esg.stats.commitmentLabel}</div>
              </div>
            </div>
            <Link
              href="/responsibility"
              className="inline-block px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              {homeMsg.esg.learnMore}
            </Link>
          </div>
        </div>
      </div>
      {/* 新增的会议展示模块 */}
      <div id="conference" className="relative bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {homeMsg.activity.title}
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
          <div className="relative w-full mx-auto">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {conferenceImages.map((src, index) => (
                  <div key={index} className="w-full min-w-full">
                    <Image
                      src={src}
                      alt={`Conference ${index + 1}`}
                      width={900}
                      height={600}
                      className="cursor-pointer"
                      onClick={openModal}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className={styles.modalOverlay} onClick={closeModal}>
              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.closeButton} onClick={closeModal}>&times;</span>
                <Image
                  src={conferenceImages[currentIndex]}
                  alt={`Conference ${currentIndex + 1}`}
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA Section */}
      <div id="contact-cta" className="relative bg-gray-800 py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            {homeMsg.contact.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {homeMsg.contact.description}
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-red-600 text-white text-lg rounded-md hover:bg-red-700 transition-colors duration-200"
          >
            {homeMsg.contact.contactUs}
          </Link>
        </div>
      </div>
    </div>
  )
}

// 添加样式文件 Home.module.css
// 文件路径：src/components/pages/Home.module.css
/* @tailwind base; */
/* @tailwind components; */
/* @tailwind utilities; */





