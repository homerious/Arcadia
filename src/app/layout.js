import {formatLocaleForHtml, getMessages} from "@/lib/i18n";
import './globals.css'

export const metadata = {
  title: getMessages().meta.title,
  description: getMessages().meta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={formatLocaleForHtml()}>
    <body
      className="overflow-hidden"
    >
    {children}
    </body>
    </html>
  );
}
