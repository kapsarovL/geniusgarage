import Link from 'next/link'

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
        {/* Styles below are intentionally duplicated per card. The next lesson
            extracts this repetition into @geniusgarage/ui. */}
        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Fast Search</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Find any snippet in milliseconds with fuzzy, typo-tolerant search across every language you
            work in.
          </p>
        </div>

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📁</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Organized</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Group snippets into collections and tag them so related code stays together and easy to
            browse.
          </p>
        </div>

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔗</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Shareable</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Send a link to any snippet and let teammates read it without needing an account or an
            install.
          </p>
        </div>

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Syntax Highlighting</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Readable output for every language you save, with themes that match the rest of your
            editor setup.
          </p>
        </div>

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>One-Click Copy</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Copy any snippet to your clipboard in a single click, ready to paste straight into your
            editor.
          </p>
        </div>

        <div style={{ padding: '2rem', border: '1px solid #e5e5e5', borderRadius: '0.75rem', backgroundColor: '#fff' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐</div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Private &amp; Secure</h3>
          <p style={{ color: '#666', lineHeight: 1.6 }}>
            Every snippet is private until you explicitly share it. Nothing leaks into a public index
            by accident.
          </p>
        </div>
      </div>
    </main>
  )
}
