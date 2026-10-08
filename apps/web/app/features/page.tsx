import Link from 'next/link'
import { Card } from '@geniusgarage/ui/card'

export default function Features() {
  return (
    <main style={{ padding: '4rem 2rem', fontFamily: 'system-ui', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
          🧠 GeniusGarage
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/features" style={{ textDecoration: 'none', color: '#000', fontWeight: 'bold' }}>
            Features
          </Link>
        </div>
      </nav>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Features</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem', textAlign: 'center' }}>
        Everything you need to manage your code snippets
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        <Card icon="⚡" title="Fast Search">
          Find any snippet in milliseconds with fuzzy, typo-tolerant search across every language you
          work in.
        </Card>

        <Card icon="📁" title="Organized">
          Group snippets into collections and tag them so related code stays together and easy to
          browse.
        </Card>

        <Card icon="🔗" title="Shareable">
          Send a link to any snippet and let teammates read it without needing an account or an
          install.
        </Card>

        <Card icon="🎨" title="Syntax Highlighting">
          Readable output for every language you save, with themes that match the rest of your
          editor setup.
        </Card>

        <Card icon="📋" title="One-Click Copy">
          Copy any snippet to your clipboard in a single click, ready to paste straight into your
          editor.
        </Card>

        <Card icon="🔐" title="Private &amp; Secure">
          Every snippet is private until you explicitly share it. Nothing leaks into a public index
          by accident.
        </Card>
      </div>
    </main>
  )
}
