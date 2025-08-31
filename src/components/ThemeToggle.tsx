import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
  )

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark(!dark)}
      className="badge hover:scale-105 transition-transform"
      title={dark ? 'Switch to light' : 'Switch to dark'}
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
