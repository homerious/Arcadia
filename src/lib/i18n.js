// src/lib/i18n.js (更新版本)
import { notFound } from 'next/navigation'

export const locales = ['zh-TW', 'zh-CN', 'en', 'ja', 'ko']
export const defaultLocale = 'zh-TW'

export const localeNames = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  'en': 'English',
  // 'ja': '日本語',
  // 'ko': '한국어'
}

// 获取消息内容，支持默认语言回退
export function getMessages(locale = defaultLocale) {
  try {
    return require(`../messages/${locale}.json`)
  } catch (error) {
    // 如果指定语言不存在，回退到默认语言
    if (locale !== defaultLocale) {
      try {
        return require(`../messages/${defaultLocale}.json`)
      } catch (fallbackError) {
        console.error(`Failed to load messages for both ${locale} and ${defaultLocale}`)
        notFound()
      }
    }
    console.error(`Failed to load messages for locale: ${locale}`)
    notFound()
  }
}

export function isValidLocale(locale) {
  return locales.includes(locale)
}

// 获取当前语言，如果没有指定则使用默认语言
export function getCurrentLocale(locale) {
  return locale && isValidLocale(locale) ? locale : defaultLocale
}

// 格式化语言代码用于 HTML
export function formatLocaleForHtml(locale = defaultLocale) {
  const localeMap = {
    'zh-CN': 'zh-Hans',
    'zh-TW': 'zh-Hant',
    'en': 'en',
    'ja': 'ja',
    'ko': 'ko'
  }
  return localeMap[locale] || locale
}

// 获取语言方向（从右到左或从左到右）
export function getTextDirection(locale = defaultLocale) {
  // 大部分语言都是从左到右，如果需要支持阿拉伯语等RTL语言可以在这里添加
  const rtlLocales = []
  return rtlLocales.includes(locale) ? 'rtl' : 'ltr'
}

// 获取语言的字体族（可选，用于特定语言的字体优化）
export function getFontFamily(locale = defaultLocale) {
  const fontFamilyMap = {
    'zh-CN': '"Noto Sans SC", "PingFang SC", "Hiragino Sans GB", sans-serif',
    'zh-TW': '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
    'ja': '"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif',
    'ko': '"Noto Sans KR", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif',
    'en': '"Inter", "Roboto", "Helvetica Neue", sans-serif'
  }
  return fontFamilyMap[locale] || fontFamilyMap['en']
}

// 获取语言的数字格式化选项
export function getNumberFormat(locale = defaultLocale) {
  const localeFormatMap = {
    'zh-CN': 'zh-CN',
    'zh-TW': 'zh-TW',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
    'en': 'en-US'
  }
  return localeFormatMap[locale] || localeFormatMap['en']
}

// 获取日期格式化选项
export function getDateFormat(locale = defaultLocale) {
  const dateFormatMap = {
    'zh-CN': 'zh-CN',
    'zh-TW': 'zh-TW',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
    'en': 'en-US'
  }
  return dateFormatMap[locale] || dateFormatMap['en']
}

// 格式化数字
export function formatNumber(number, locale = defaultLocale, options = {}) {
  try {
    const formatLocale = getNumberFormat(locale)
    return new Intl.NumberFormat(formatLocale, options).format(number)
  } catch (error) {
    console.error(`Failed to format number for locale: ${locale}`)
    return number.toString()
  }
}

// 格式化日期
export function formatDate(date, locale = defaultLocale, options = {}) {
  try {
    const formatLocale = getDateFormat(locale)
    return new Intl.DateTimeFormat(formatLocale, options).format(date)
  } catch (error) {
    console.error(`Failed to format date for locale: ${locale}`)
    return date.toString()
  }
}

// 格式化货币
export function formatCurrency(amount, currency = 'USD', locale = defaultLocale) {
  try {
    const formatLocale = getNumberFormat(locale)
    return new Intl.NumberFormat(formatLocale, {
      style: 'currency',
      currency: currency
    }).format(amount)
  } catch (error) {
    console.error(`Failed to format currency for locale: ${locale}`)
    return `${currency} ${amount}`
  }
}

// 获取相对时间格式化器
export function getRelativeTimeFormat(locale = defaultLocale) {
  try {
    const formatLocale = getDateFormat(locale)
    return new Intl.RelativeTimeFormat(formatLocale, { numeric: 'auto' })
  } catch (error) {
    console.error(`Failed to create RelativeTimeFormat for locale: ${locale}`)
    return null
  }
}
