// src/components/layout/MobileMenu.js
'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getMessages, defaultLocale } from '@/lib/i18n'
import LanguageSwitcher from '@/components/common/LanguageSwitcher'

export default function MobileMenu({ isOpen, onClose, locale, activeSection }) {
  const pathname = usePathname()
  const messages = getMessages(locale)
  const mobileMenuMsg = messages.mobileMenu
  const [expandedItems, setExpandedItems] = useState({})

  // 构建带语言前缀的链接
  const buildLocalizedHref = (path) => {
    if (locale === defaultLocale) {
      return path
    }
    return `/${locale}${path}`
  }

  // 使用与Header一致的菜单结构
  const menuItems = [
    { id: 'home', label: messages.header.nav.home || '首頁', href: buildLocalizedHref('/') },
    {
      id: 'about',
      label: messages.header.nav.about || '關於我們',
      href: buildLocalizedHref('/about'),
      hasDropdown: true,
      subItems: [
        { id: 'about-company', label: messages.header.nav.aboutCompany || '公司介紹', href: buildLocalizedHref('/about') },
        { id: 'chairman', label: messages.header.nav.chairman || '董事長', href: buildLocalizedHref('/about/chairman') },
        { id: 'compliance', label: messages.header.nav.compliance || '監管與合規', href: buildLocalizedHref('/about/compliance') }
      ]
    },
    { id: 'strategy', label: messages.header.nav.strategy || '投資策略', href: buildLocalizedHref('/strategy') },
    { id: 'responsibility', label: messages.header.nav.responsibility || '社會責任', href: buildLocalizedHref('/responsibility') },
    { id: 'contact', label: messages.header.nav.contact || '聯絡我們', href: buildLocalizedHref('/contact') }
  ]

  // 检查是否在首页
  const isHomePage = pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`

  // 检查当前页面是否匹配菜单项
  const isCurrentPage = (href) => {
    const normalizedPathname = pathname.replace(/\/$/, '') || '/'
    const normalizedHref = href.replace(/\/$/, '') || '/'
    return normalizedPathname === normalizedHref
  }

  // 检查是否在子菜单页面
  const isInSubMenu = (item) => {
    if (!item.subItems) return false
    return item.subItems.some(subItem => isCurrentPage(subItem.href))
  }

  // 切换子菜单展开状态
  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  // 防止背景滚动
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // 点击背景关闭菜单
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // 处理菜单项点击
  const handleMenuItemClick = (item) => {
    if (item.hasDropdown) {
      toggleExpanded(item.id)
    } else {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      {/* 菜单面板 */}
      <div className={`fixed top-16 left-0 right-0 bottom-0 bg-white transform transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* 菜单内容 */}
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {item.hasDropdown ? (
                    <>
                      {/* 带下拉菜单的项目 */}
                      <button
                        onClick={() => handleMenuItemClick(item)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                          isCurrentPage(item.href) || isInSubMenu(item)
                            ? 'bg-red-50 text-red-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                        } ${
                          isHomePage && activeSection === item.id
                            ? 'bg-red-50 text-red-600'
                            : ''
                        }`}
                        style={{
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${
                            expandedItems[item.id] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* 子菜单 */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        expandedItems[item.id] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="ml-4 mt-2 space-y-1">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              onClick={onClose}
                              className={`block px-4 py-2 text-base rounded-md transition-all duration-200 ${
                                isCurrentPage(subItem.href)
                                  ? 'bg-red-100 text-red-600 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-red-600'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    /* 普通菜单项 */
                    <Link
                      href={item.href}
                      onClick={() => handleMenuItemClick(item)}
                      className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                        isCurrentPage(item.href)
                          ? 'bg-red-50 text-red-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                      } ${
                        isHomePage && activeSection === item.id
                          ? 'bg-red-50 text-red-600'
                          : ''
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {(isCurrentPage(item.href) || (isHomePage && activeSection === item.id)) && (
                          <div className="w-2 h-2 bg-red-600 rounded-full" />
                        )}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* 底部区域 */}
          <div className="px-4 py-6 border-t border-gray-200 bg-gray-50">
            {/* 语言切换器 */}
            <div className="mb-4">
              <div className="text-gray-600 text-sm mb-3 font-medium">{mobileMenuMsg.languageLabel}</div>
              <div className="relative z-50">
                <LanguageSwitcher currentLocale={locale} isMobile={true}/>
              </div>
            </div>

            {/* 联系信息 */}
            <div className="text-gray-500 text-xs leading-relaxed">
              <div className="mb-1">{mobileMenuMsg.copyright}</div>
              <div>{mobileMenuMsg.allRightsReserved}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
