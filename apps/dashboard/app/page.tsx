import { Button } from '@geniusgarage/ui/button'
import { Card } from '@geniusgarage/ui/card'

const snippets = [
  { icon: '🔐', title: 'Auth helper', body: 'sign(payload) with token refresh' },
  { icon: '📄', title: 'usePagination', body: 'Cursor-based pagination hook' },
  { icon: '🧪', title: 'testFactory', body: 'Builds a typed test fixture' },
]

export default function Dashboard() {
  return (
    <main style={{ padding: '4rem 2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊 Dashboard</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Your snippets, rendered with the shared UI package
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
        }}
      >
        {snippets.map((s) => (
          <Card key={s.title} icon={s.icon} title={s.title}>
            <code>{s.body}</code>
          </Card>
        ))}
      </div>

      <Button>Create snippet</Button>{' '}
      <Button variant="secondary">Import</Button>
    </main>
  )
}
