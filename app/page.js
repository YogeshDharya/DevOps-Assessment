export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1> 🌄 Greetings 😄 I am Yogesh Dharya  🌄 </h1>
      <p>Welcome my containerized Next.js application!</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <h3>App Status: <span style={{ color: 'green' }}>✅ Running</span></h3>
        <p>Environment: {process.env.NODE_ENV || 'development'}</p>
      </div>
    </div>
  )
}