// src/components/layout/Footer.js
'use client'

import { getMessages } from '@/lib/i18n'

export default function Footer({ locale }) {
  const messages = getMessages(locale)
  const footerMsg = messages.footer

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer-box bg-[#808080]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          {/* Left Side - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-white text-sm order-2 lg:order-1">
            <a
              href="/legal/disclaimer"
              className="hover:underline transition-all duration-200 text-center sm:text-left"
            >
              {footerMsg.links.disclaimer}
            </a>
            <a
              href="/legal/privacy"
              className="hover:underline transition-all duration-200 text-center sm:text-left"
            >
              {footerMsg.links.privacy}
            </a>
            <a
              href="/contact"
              className="hover:underline transition-all duration-200 text-center sm:text-left"
            >
              {footerMsg.links.contact}
            </a>
          </div>

          {/* Right Side - Copyright & License Info */}
          <div className="text-white text-xs sm:text-sm text-center lg:text-right order-1 lg:order-2 leading-relaxed">
            <div className="mb-1">
              {footerMsg.copyright.text}
            </div>
            <div className="mb-1">
              {footerMsg.license.insurance}
            </div>
            <div>
              {footerMsg.license.sfc}
            </div>
          </div>
        </div>

        {/* 回到顶部按钮 - 移动端 */}
        <button
          onClick={scrollToTop}
          className="lg:hidden fixed bottom-6 right-6 w-12 h-12 bg-[#666666] text-white rounded-full shadow-lg hover:bg-[#555555] transition-all duration-200 z-40 flex items-center justify-center"
          aria-label={footerMsg.backToTop}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transform rotate-180"
          >
            <path d="M19 14l-7-7m0 0l-7 7m7-7v18"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}
