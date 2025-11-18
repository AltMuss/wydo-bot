import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <main>
      whatevershebringsweswing
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo bg-yellow-500" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          ur deathcount is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test your sanity
        </p>
      </div>
      <p className="read-the-docs">
        blablabla ts thick as a brick dude
      </p>
    </main>
  )
}

export default Home;
