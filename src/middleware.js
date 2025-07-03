// middleware.js
import { NextResponse } from 'next/server'

const locales = ['zh-CN', 'zh-TW', 'en']
const defaultLocale = 'zh-TW'

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  // 检查是否是 locale 路由
  const isLocaleRoute = locales.some(locale =>
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  // 如果是 locale 路由，直接通过
  if (isLocaleRoute) {
    return NextResponse.next()
  }

  // 对于根路由和其他路径，也直接通过
  // 不做任何重定向，让 Next.js 自然处理路由
  return NextResponse.next()
}

export const config = {
  // 只处理页面路由，排除静态资源和 API
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)',
  ],
}
