// src/components/common/LanguageSwitcher.js
'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, defaultLocale } from '@/lib/i18n'
import Image from 'next/image'

export default function LanguageSwitcher({ currentLocale, isMobile }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const dropdownRef = useRef(null)

  // 获取当前实际的语言代码
  const getCurrentLocale = () => {
    if (!currentLocale) {
      const segments = pathname.split('/').filter(Boolean)
      if (segments.length > 0 && locales.includes(segments[0])) {
        return segments[0]
      }
      return defaultLocale
    }
    return currentLocale
  }

  const actualCurrentLocale = getCurrentLocale()

  // 语言对应的国旗图标配置
  const flagIcons = {
    'zh-TW': '/images/flags/hk.svg', // 香港旗帜 - 繁体中文
    'en': '/images/flags/en.svg' ,// 美国旗帜 - 英文
    'zh-CN': '/images/flags/cn.svg',
    'ja': '/images/flags/jp.svg',
    'ko': '/images/flags/kr.svg'
  }

  // 获取语言简称用于显示
  const getLanguageShort = (locale) => {
    const shortNames = {
      'zh': '',
      'en': 'EN'
    }
    return shortNames[locale] || locale.toUpperCase()
  }

  const handleLanguageChange = (newLocale) => {
    // 获取当前路径，移除所有可能的语言前缀
    let pathWithoutLocale = pathname

    locales.forEach(locale => {
      if (pathWithoutLocale.startsWith(`/${locale}`)) {
        pathWithoutLocale = pathWithoutLocale.replace(`/${locale}`, '')
      }
    })

    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale
    }

    if (!pathWithoutLocale || pathWithoutLocale === '/') {
      pathWithoutLocale = '/'
    }

    // 构建新的路径
    let newPath
    if (newLocale === defaultLocale) {
      newPath = pathWithoutLocale === '/' ? '/' : pathWithoutLocale
    } else {
      newPath = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    }

    setIsOpen(false)
    router.push(newPath)
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative pointer-events-auto" ref={dropdownRef}>
      {/* 触发按钮 - 桌面端样式 */}
      <div className="hidden sm:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all duration-200"
          aria-label="选择语言 / Select Language"
          aria-expanded={isOpen}
        >
          {/* 国旗图标 */}
          <div className="w-5 h-4 rounded-sm overflow-hidden border border-white/20">
            <Image
              src={flagIcons[actualCurrentLocale]}
              alt={`${localeNames[actualCurrentLocale]} flag`}
              width={20}
              height={16}
              className="w-full h-full object-cover"
            />
          </div>

          {/* 语言文字 */}
          <span className="font-medium">{localeNames[actualCurrentLocale]}</span>

          {/* 下拉箭头 */}
          <svg
            className={`w-4 h-4 text-gray-700 opacity-70 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* 触发按钮 - 移动端样式（小方块） */}
      <div className="sm:hidden">
        <div className="flex space-x-1">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-8 h-6 rounded-sm border transition-all duration-200 relative overflow-hidden ${
                locale === actualCurrentLocale
                  ? 'border-white bg-white/20'
                  : 'border-white/40 bg-white/10 hover:bg-white/20'
              }`}
              aria-label={`切换到${localeNames[locale]}`}
            >
              {/* 国旗背景 */}
              <Image
                src={flagIcons[locale]}
                alt={`${localeNames[locale]} flag`}
                width={32}
                height={24}
                className="w-full h-full object-cover opacity-80"
              />
            </button>
          ))}
        </div>
      </div>

      {/* 下拉菜单 - 仅桌面端显示 */}
      {isOpen && (
        <div className="hidden sm:block absolute top-full left-0 mt-1 w-full min-w-[140px] bg-white/95 backdrop-blur-sm border border-white/20 rounded-md shadow-lg z-[60] overflow-hidden">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full text-left px-3 py-2 text-sm hover:bg-white/20 transition-colors duration-150 flex items-center space-x-2 ${
                locale === actualCurrentLocale
                  ? 'bg-white/30 text-gray-900 font-medium'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {/* 国旗图标 */}
              <div className="w-5 h-4 rounded-sm overflow-hidden border border-gray-300">
                <Image
                  src={flagIcons[locale]}
                  alt={`${localeNames[locale]} flag`}
                  width={20}
                  height={16}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 语言名称 */}
              <span className="flex-1">{localeNames[locale]}</span>

              {/* 选中标识 */}
              {locale === actualCurrentLocale && (
                <span className="text-red-600 font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
