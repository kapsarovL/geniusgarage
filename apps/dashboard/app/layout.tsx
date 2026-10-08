export const metadata = {
  title: 'GeniusGarage Dashboard',
  description: 'Manage your snippets',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
