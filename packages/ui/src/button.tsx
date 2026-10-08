import type { ReactNode } from 'react'

export type ButtonProps = {
  label: string
  onClick?: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        fontWeight: 600,
        backgroundColor: '#0070f3',
        color: 'white',
      }}
    >
      {label}
    </button>
  )
}
