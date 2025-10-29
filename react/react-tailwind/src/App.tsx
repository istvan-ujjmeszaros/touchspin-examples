import { useCallback, useRef, useState } from 'react'
import TouchSpin, { type TouchSpinHandle } from '@touchspin/react/tailwind'

const tailwindCoreOptions = {
  wrapper_classes:
    'flex items-stretch rounded-xl border border-blue-600 bg-white shadow-[0_4px_16px_rgba(30,64,175,0.2)] focus-within:border-blue-700 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.35),0_6px_16px_rgba(15,23,42,0.18)] transition-shadow duration-150 overflow-hidden',
  input_classes:
    'flex-1 px-4 py-3 bg-transparent text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 font-medium',
  buttondown_class:
    'px-4 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150 rounded-l-xl',
  buttonup_class:
    'px-4 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150 rounded-r-xl',
  prefix_classes_override:
    'inline-flex items-center px-4 py-3 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap',
  postfix_classes_override:
    'inline-flex items-center px-4 py-3 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap',
}

const panelClasses =
  'my-8 rounded-3xl border border-blue-100 bg-[#fdfcff] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]'
const primaryButtonClasses =
  'rounded-lg border-0 bg-blue-500 px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600'
const secondaryButtonClasses =
  'rounded-lg border-0 bg-blue-700 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-800'

const allEvents = [
  'onMin',
  'onMax',
  'onStartSpin',
  'onStopSpin',
  'onStartUpSpin',
  'onStartDownSpin',
  'onStopUpSpin',
  'onStopDownSpin',
  'onSpeedChange',
] as const

type EventName = (typeof allEvents)[number]

export function App() {
  const [value, setValue] = useState(25.5)
  const [firedEvents, setFiredEvents] = useState<Set<EventName>>(new Set())
  const touchSpinRef = useRef<TouchSpinHandle>(null)

  const addEvent = useCallback((eventName: EventName) => {
    setFiredEvents(prev => {
      const next = new Set(prev)
      next.add(eventName)
      return next
    })
  }, [])

  const handleResetEvents = useCallback(() => {
    setFiredEvents(new Set())
  }, [])

  const handleGetValue = useCallback(() => {
    const currentValue = touchSpinRef.current?.getValue()
    alert(`Current value: ${currentValue}`)
  }, [])

  const handleSetValue = useCallback(() => {
    const newValue = prompt('Enter new value:', '42')
    if (newValue !== null) {
      const numValue = Number(newValue)
      if (!Number.isNaN(numValue)) {
        touchSpinRef.current?.setValue(numValue)
      }
    }
  }, [])

  const handleUpdateSettings = useCallback(() => {
    const newStep = prompt('Enter new step size:', '1')
    if (newStep !== null) {
      const numStep = Number(newStep)
      if (!Number.isNaN(numStep)) {
        touchSpinRef.current?.updateSettings({ step: numStep })
        alert(`Step size updated to ${numStep}`)
      }
    }
  }, [])

  const handleMinEvent = useCallback(() => addEvent('onMin'), [addEvent])
  const handleMaxEvent = useCallback(() => addEvent('onMax'), [addEvent])
  const handleStartSpinEvent = useCallback(() => addEvent('onStartSpin'), [addEvent])
  const handleStopSpinEvent = useCallback(() => addEvent('onStopSpin'), [addEvent])
  const handleStartUpSpinEvent = useCallback(() => addEvent('onStartUpSpin'), [addEvent])
  const handleStartDownSpinEvent = useCallback(() => addEvent('onStartDownSpin'), [addEvent])
  const handleStopUpSpinEvent = useCallback(() => addEvent('onStopUpSpin'), [addEvent])
  const handleStopDownSpinEvent = useCallback(() => addEvent('onStopDownSpin'), [addEvent])
  const handleSpeedChangeEvent = useCallback(() => addEvent('onSpeedChange'), [addEvent])

  return (
    <div className="mx-auto max-w-[50rem] rounded-3xl border border-blue-200 bg-white p-8 font-sans shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
      <h1 className="mb-8 text-[2rem] font-bold text-[#0b1120]">TouchSpin React Tailwind</h1>

      <section className={panelClasses}>
        <h2 className="text-[1.35rem] font-bold text-blue-700">Imperative API Methods</h2>
        <p className="mt-4 font-medium text-[#1e293b]">
          Test all TouchSpin methods via the component reference:
        </p>
        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.focus()}>
            Focus
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.blur()}>
            Blur
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.increment()}>
            Increment
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.decrement()}>
            Decrement
          </button>
          <button className={primaryButtonClasses} onClick={handleGetValue}>
            Get Value
          </button>
          <button className={primaryButtonClasses} onClick={handleSetValue}>
            Set Value
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.startUpSpin()}>
            Start Up Spin
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.startDownSpin()}>
            Start Down Spin
          </button>
          <button className={primaryButtonClasses} onClick={() => touchSpinRef.current?.stopSpin()}>
            Stop Spin
          </button>
          <button className={primaryButtonClasses} onClick={handleUpdateSettings}>
            Update Settings
          </button>
        </div>
      </section>

      <section className={panelClasses}>
        <h2 className="text-[1.35rem] font-bold text-blue-700">USD Spinner with Event Tracking</h2>
        <TouchSpin
          ref={touchSpinRef}
          value={value}
          onChange={setValue}
          coreOptions={tailwindCoreOptions}
          min={0}
          max={100}
          step={0.5}
          decimals={2}
          prefix="$"
          suffix=" USD"
          onMin={handleMinEvent}
          onMax={handleMaxEvent}
          onStartSpin={handleStartSpinEvent}
          onStopSpin={handleStopSpinEvent}
          onStartUpSpin={handleStartUpSpinEvent}
          onStartDownSpin={handleStartDownSpinEvent}
          onStopUpSpin={handleStopUpSpinEvent}
          onStopDownSpin={handleStopDownSpinEvent}
          onSpeedChange={handleSpeedChangeEvent}
        />
        <p className="mt-4 font-medium text-[#1e293b]">
          Current value: ${value.toFixed(2)} USD
        </p>
      </section>

      <section className={panelClasses}>
        <h2 className="mb-4 text-[1.35rem] font-bold text-blue-700">TouchSpin Events</h2>
        <p className="font-medium text-[#1e293b]">Events that have been fired:</p>
        <ul className="my-4 list-none p-0">
          {allEvents.map(event => {
            const fired = firedEvents.has(event)
            return (
              <li
                key={event}
                className={`my-1 rounded-lg px-3 py-2 font-mono text-sm ${
                  fired
                    ? 'border border-green-200 bg-green-100 text-green-800'
                    : 'border border-red-200 bg-red-100 text-red-800'
                }`}
              >
                {event}: {fired ? '✅ Fired' : '❌ Not fired'}
              </li>
            )
          })}
        </ul>
        <button className={secondaryButtonClasses} onClick={handleResetEvents}>
          Reset Events
        </button>
      </section>
    </div>
  )
}

export default App
