import { Button } from '@geniusgarage/ui/button'
import { Card } from '@geniusgarage/ui/card'

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>GeniusGarage Snippet Manager</h1>
      <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '3rem' }}>
        Your code snippets, organized and ready to use.
      </p>

      <div style={{ marginBottom: '2rem' }}>
        <Card icon="🧠" title="Shared components">
          Rendered by <code>@geniusgarage/ui</code> — the same Card the marketing site uses.
        </Card>
      </div>

      <Button>New snippet</Button>{' '}
      <Button variant="secondary">Import</Button>
    </div>
  )
}
