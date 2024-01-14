import { inter } from './ui/fonts'
import './globals.css'

export const metadata = {
  title: 'BHIForex',
  description: 'BHIForex Official Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
