// src/components/layout/Layout.js
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { locales, defaultLocale } from '@/lib/i18n'
import Header from './Header'
import Footer from './Footer'
import MobileMenu from './MobileMenu'

export default function Layout({ children, locale: propLocale }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // 从路径中获取语言代码
  const getCurrentLocale = () => {
    // 优先使用传入的 locale prop
    if (propLocale && locales.includes(propLocale)) {
      return propLocale
    }

    // 从路径中解析语言代码
    const segments = pathname.split('/').filter(Boolean)
    const localeFromPath = segments[0]

    // 检查第一个路径段是否是有效的语言代码
    if (locales.includes(localeFromPath)) {
      return localeFromPath
    }

    // 如果都没有找到，返回默认语言
    return defaultLocale
  }

  const currentLocale = getCurrentLocale()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // 监听滚动，更新活动导航项
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'business', 'advantage', 'qualification', 'strength']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 监听路由变化，关闭移动端菜单
  useEffect(() => {
    closeMobileMenu()
  }, [pathname]) // 添加 pathname 依赖

  // 调试输出（可以删除）
  useEffect(() => {
    console.log('Current pathname:', pathname)
    console.log('Detected locale:', currentLocale)
  }, [pathname, currentLocale])

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        locale={currentLocale}
        activeSection={activeSection}
        onMobileMenuToggle={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        locale={currentLocale}
        activeSection={activeSection}
      />

      <main className={`app-main flex-1 transition-all duration-300 ${
        isMobileMenuOpen ? 'lg:ml-0' : ''
      }`}>
        {children}
      </main>

      <Footer locale={currentLocale} />
    </div>
  )
}
