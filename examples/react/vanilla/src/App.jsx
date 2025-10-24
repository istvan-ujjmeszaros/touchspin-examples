import { useState } from 'react'
import TouchSpin from '@touchspin/react/vanilla'
import '@touchspin/renderer-vanilla/css'

function App() {
  const [value, setValue] = useState(42)
  const [disabled, setDisabled] = useState(false)
  const [readonly, setReadonly] = useState(false)

  return (
    <div className="container">
      <h1>TouchSpin React + Vanilla Example</h1>

      <div className="demo">
        <h2>Basic Controlled</h2>
        <p>Value: {value}</p>
        <TouchSpin
          value={value}
          onChange={setValue}
          min={0}
          max={100}
          step={1}
          disabled={disabled}
          readOnly={readonly}
        />

        <div className="controls">
          <button onClick={() => setValue(25)}>Set to 25</button>
          <button onClick={() => setValue(75)}>Set to 75</button>
          <label>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            Disabled
          </label>
          <label>
            <input
              type="checkbox"
              checked={readonly}
              onChange={(e) => setReadonly(e.target.checked)}
            />
            Read Only
          </label>
        </div>
      </div>

      <div className="demo">
        <h2>Uncontrolled</h2>
        <TouchSpin
          defaultValue={10}
          min={0}
          max={50}
          step={5}
          prefix="$"
          suffix=" USD"
        />
      </div>
    </div>
  )
}

export default App
