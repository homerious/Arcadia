'use client'

import Image from "next/image";
import { useState } from "react";
import { getMessages } from "@/lib/i18n";

export default function Contact({ locale }) {
  const messages = getMessages(locale);
  const contactMsg = messages.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交过程
    setTimeout(() => {
      alert(contactMsg.form.successMessage);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Banner */}
      <div id="hero-banner" className="h-96 w-full relative">
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero-bg.jpg"
            alt="Contact Us Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* 文字内容 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 w-full max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            {contactMsg.hero.title}
          </h1>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 公司标题 */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4">
              {contactMsg.company.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* 左侧联系表单 */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={contactMsg.form.placeholders.name}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={contactMsg.form.placeholders.email}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={contactMsg.form.placeholders.phone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={contactMsg.form.placeholders.message}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? contactMsg.form.submitting : contactMsg.form.submit}
                  </button>
                </div>
              </form>
            </div>

            {/* 右侧联系信息 */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* 香港總事處 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{contactMsg.office.hk.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{contactMsg.office.hk.address.line1}</p>
                      <p className="text-gray-700">{contactMsg.office.hk.address.line2}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 查詢熱線 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{contactMsg.inquiry.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{contactMsg.inquiry.phone.main} <span className="text-gray-500">({contactMsg.inquiry.phone.mainNote})</span></p>
                      <p className="text-gray-700">{contactMsg.inquiry.phone.alt} <span className="text-gray-500">({contactMsg.inquiry.phone.altNote})</span></p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700">{contactMsg.inquiry.email}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">{contactMsg.inquiry.fax} <span className="text-gray-500">({contactMsg.inquiry.faxNote})</span></p>
                  </div>
                </div>
              </div>

              {/* 營業時間 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{contactMsg.hours.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{contactMsg.hours.weekdays}</span>
                    <span className="text-gray-700">{contactMsg.hours.weekdaysTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{contactMsg.hours.saturday}</span>
                    <span className="text-gray-700">{contactMsg.hours.saturdayTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{contactMsg.hours.sunday}</span>
                    <span className="text-gray-700">{contactMsg.hours.sundayTime}</span>
                  </div>
                </div>
              </div>

              {/* 監管資質 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{contactMsg.regulatory.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">{contactMsg.regulatory.sfc}:</span> {contactMsg.regulatory.sfcNumber}</p>
                  <p><span className="font-medium">{contactMsg.regulatory.lei}:</span> {contactMsg.regulatory.leiNumber}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
