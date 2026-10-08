import type { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const baseStyles = {
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  fontWeight: 600,
} as const

const variantStyles = {
  primary: {
    backgroundColor: '#0070f3',
    color: 'white',
  },
  secondary: {
    backgroundColor: '#f5f5f5',
    color: '#333',
    border: '1px solid #e5e7eb',
  },
} as const

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} style={{ ...baseStyles, ...variantStyles[variant] }}>
      {children}
    </button>
  )
}
