import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import heavy libraries to increase bundle size
import * as _ from 'lodash'
import moment from 'moment'

// Heavy computation function to slow down the app
function heavyComputation() {
  let result = 0
  for (let i = 0; i < 1000000; i++) {
    result += Math.random() * Math.sin(i) * Math.cos(i)
  }
  return result
}

// Large unused component to increase bundle size
function UnusedHeavyComponent() {
  const data = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    value: Math.random() * 1000,
    description: `This is a very long description for item ${i} that contains a lot of text to increase the bundle size and make the app slower. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }))
  
  return (
    <div style={{ display: 'none' }}>
      {data.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [heavyResult, setHeavyResult] = useState(0)

  // Heavy computation on every render
  useEffect(() => {
    const result = heavyComputation()
    setHeavyResult(result)
  })

  // Multiple heavy operations
  const processData = () => {
    const data = []
    for (let i = 0; i < 50000; i++) {
      data.push({
        id: i,
        value: Math.random(),
        processed: heavyComputation()
      })
    }
    return data
  }

  const processedData = processData()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React (Performance Test)</h1>
      <div className="card performance-heavy">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Heavy computation result: {heavyResult}
        </p>
        <p>
          Processed {processedData.length} items
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Render unused heavy component */}
      <UnusedHeavyComponent />
      
      {/* Multiple large images without dimensions */}
      <div>
        <img src="https://picsum.photos/800/600?random=1" alt="Random image 1" />
        <img src="https://picsum.photos/800/600?random=2" alt="Random image 2" />
        <img src="https://picsum.photos/800/600?random=3" alt="Random image 3" />
        <img src="https://picsum.photos/800/600?random=4" alt="Random image 4" />
        <img src="https://picsum.photos/800/600?random=5" alt="Random image 5" />
      </div>
      
      {/* Heavy animations */}
      <div className="heavy-animation" style={{ 
        width: '200px', 
        height: '200px', 
        backgroundColor: 'red', 
        margin: '20px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '20px'
      }}>
        Heavy Animation
      </div>
      
      {/* Multiple heavy divs */}
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className="performance-heavy" style={{
          width: '100px',
          height: '100px',
          margin: '5px',
          display: 'inline-block',
          borderRadius: '50%'
        }}>
          {i}
        </div>
      ))}
    </>
  )
}

export default App
