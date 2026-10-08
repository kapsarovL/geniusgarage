import type { ReactNode } from 'react'

export interface CardProps {
  icon?: string
  title?: string
  children: ReactNode
}

export function Card({ icon, title, children }: CardProps) {
  return (
    <div
      style={{
        padding: '2rem',
        border: '1px solid #e5e5e5',
        borderRadius: '0.75rem',
        backgroundColor: '#fff',
      }}
    >
      {icon && <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>}
      {title && (
        <h3 style={{ fontSize: '1.25rem', margin: 0, marginBottom: '0.75rem' }}>{title}</h3>
      )}
      <div style={{ color: '#666', lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}
