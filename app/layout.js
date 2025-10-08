export const metadata = {
  title: 'Yogesh DevOps Assessment ',
  description: 'A Next.js app for DevOps internship assessment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}