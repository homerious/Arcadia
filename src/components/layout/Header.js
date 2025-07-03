// src/components/layout/Header.js
'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'
import { getMessages, defaultLocale } from "@/lib/i18n"

export default function Header({ locale, activeSection, onMobileMenuToggle, isMobileMenuOpen }) {
  const messages = getMessages(locale)
  const headerMsg = messages.header
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const pathname = usePathname()
  const dropdownRef = useRef(null)

  // 构建带语言前缀的链接
  const buildLocalizedHref = (path) => {
    // 如果是默认语言，不添加语言前缀
    if (locale === defaultLocale) {
      return path
    }
    // 非默认语言，添加语言前缀
    return `/${locale}${path}`
  }

  // 使用多语言的菜单项 - 根据奧愷网站脉络
  const menuItems = [
    { id: 'home', label: headerMsg.nav.home || '首页', href: buildLocalizedHref('/') },
    {
      id: 'about',
      label: headerMsg.nav.about || '关于我们',
      href: buildLocalizedHref('/about'),
      hasDropdown: true,
      subItems: [
        { id: 'about-company', label: headerMsg.nav.aboutCompany || '公司介绍', href: buildLocalizedHref('/about') },
        { id: 'chairman', label: headerMsg.nav.chairman || '董事长', href: buildLocalizedHref('/about/chairman') },
        { id: 'compliance', label: headerMsg.nav.compliance || '监管与合规', href: buildLocalizedHref('/about/compliance') }
      ]
    },
    { id: 'strategy', label: headerMsg.nav.strategy || '投资策略', href: buildLocalizedHref('/strategy') },
    { id: 'responsibility', label: headerMsg.nav.responsibility || '社会责任', href: buildLocalizedHref('/responsibility') },
    { id: 'contact', label: headerMsg.nav.contact || '联络我们', href: buildLocalizedHref('/contact') }
  ]

  // 检查是否在首页
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`

  // 检查当前页面是否匹配菜单项
  const isCurrentPage = (href) => {
    // 移除尾部斜杠进行比较
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedHref = href.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedHref
  }

  // 检查是否在子菜单页面
  const isInSubMenu = (item) => {
    if (!item.subItems) return false
    return item.subItems.some(subItem => isCurrentPage(subItem.href))
  }

  // 构建首页链接
  const homeHref = locale === defaultLocale ? '/' : `/${locale}`

  // 处理下拉菜单
  const handleDropdownEnter = (itemId) => {
    setActiveDropdown(itemId)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link href={homeHref} className="flex items-center">
                <Image
                  className="w-16 h-12"
                  src="/images/logo.jpg" alt="Logo" width={150} height={110}>
                </Image>
              </Link>
              <div className="hidden xl:block text-sm text-gray-600">
                {headerMsg.subtitle || '基金管理集團'}
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8" ref={dropdownRef}>
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleDropdownEnter(item.id)}
                  onMouseLeave={() => item.hasDropdown && handleDropdownLeave()}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-gray-700 hover:text-red-600 font-medium transition-colors duration-200 flex items-center ${
                      isCurrentPage(item.href) || isInSubMenu(item) ? 'text-red-600' : ''
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div
                      className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 transition-all duration-200 ${
                        activeDropdown === item.id
                          ? 'opacity-100 visible transform translate-y-0'
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors duration-200 ${
                              isCurrentPage(subItem.href) ? 'text-red-600 bg-red-50' : ''
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - Language Switcher & Contact Info */}
            <div className="flex items-center space-x-4">
              <LanguageSwitcher currentLocale={locale} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-between px-4 py-3 h-16">
          {/* Mobile Logo */}
          <Link href={homeHref} className="flex items-center">
            <Image
              className="w-16 h-12"
              src="/images/logo.jpg" alt="Logo" width={150} height={110}>
            </Image>
          </Link>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher - Mobile */}
            <div className="hidden sm:block">
              <LanguageSwitcher currentLocale={locale} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={onMobileMenuToggle}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label={headerMsg.mobileMenuToggle || '切换菜单'}
            >
              <div className="relative w-6 h-6">
                {/* Hamburger/Close Icon Animation */}
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-2.5' : ''
                }`} />
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          menuItems={menuItems}
          isCurrentPage={isCurrentPage}
          onItemClick={() => onMobileMenuToggle && onMobileMenuToggle()}
          headerMsg={headerMsg}
          locale={locale}
        />
      </header>
    </>
  )
}

// 移动端菜单组件
function MobileMenu({ isOpen, menuItems, isCurrentPage, onItemClick, headerMsg, locale }) {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  return (
    <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <nav className="bg-white/95 backdrop-blur-md border-t border-gray-200">
        <div className="px-4 py-2 space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleExpanded(item.id)}
                    className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        expandedItems[item.id] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItems[item.id] && (
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${
                            isCurrentPage(subItem.href) ? 'text-red-600 bg-red-50' : ''
                          }`}
                          onClick={onItemClick}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block px-3 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors duration-200 ${
                    isCurrentPage(item.href) ? 'text-red-600 bg-red-50' : ''
                  }`}
                  onClick={onItemClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-3 py-3 border-t border-gray-200 mt-2 flex items-center justify-between">
          </div>
        </div>
      </nav>
    </div>
  )
}
