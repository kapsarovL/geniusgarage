export const metadata = {
  title: 'GeniusGarage Snippet Manager',
  description: 'Your code snippets, organized and ready to use.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
