import { useState } from 'react'

function FrontPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [jwt, setJwt] = useState('')
  const [error, setError] = useState('')

  async function handleRegister(e) {
    e.preventDefault()
    setError('')
    setJwt('')
    try {
      const response = await fetch(
        'https://tokenservice-rough-frost-9409.fly.dev/token-service/v1/request-token',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        }
      )
      if (!response.ok) {
        throw new Error('Registration failed')
      }
      const data = await response.json()
      setJwt(data.token || '')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h2>Login & Get JWT</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {jwt && (
        <div>
          <p><strong>Your JWT:</strong></p>
          <textarea value={jwt} readOnly rows={4} cols={40} />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default FrontPage