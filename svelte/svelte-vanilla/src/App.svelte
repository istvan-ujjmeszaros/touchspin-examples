<script lang="ts">
  import TouchSpin from '@touchspin/svelte/vanilla';
  import type { TouchSpinHandle } from '@touchspin/svelte/vanilla';

  let value = $state(25.5);
  let firedEvents = $state(new Set<string>());
  let touchSpinRef: TouchSpinHandle | undefined;

  function handleEvent(eventName: string) {
    firedEvents.add(eventName);
    // Trigger reactivity
    firedEvents = new Set(firedEvents);
  }

  function handleMin() {
    handleEvent('onMin');
  }

  function handleMax() {
    handleEvent('onMax');
  }

  function handleStartSpin() {
    handleEvent('onStartSpin');
  }

  function handleStopSpin() {
    handleEvent('onStopSpin');
  }

  function handleStartUpSpin() {
    handleEvent('onStartUpSpin');
  }

  function handleStartDownSpin() {
    handleEvent('onStartDownSpin');
  }

  function handleStopUpSpin() {
    handleEvent('onStopUpSpin');
  }

  function handleStopDownSpin() {
    handleEvent('onStopDownSpin');
  }

  function handleSpeedChange() {
    handleEvent('onSpeedChange');
  }

  function handleGetValue() {
    const currentValue = touchSpinRef?.getValue();
    alert(`Current value: ${currentValue}`);
  }

  function handleSetValue() {
    const newValue = prompt('Enter new value:', '42');
    if (newValue !== null) {
      const numValue = parseFloat(newValue);
      if (!isNaN(numValue)) {
        touchSpinRef?.setValue(numValue);
      }
    }
  }

  function handleUpdateSettings() {
    const newStep = prompt('Enter new step size:', '1');
    if (newStep !== null) {
      const numStep = parseFloat(newStep);
      if (!isNaN(numStep)) {
        touchSpinRef?.updateSettings({ step: numStep });
        alert(`Step size updated to ${numStep}`);
      }
    }
  }

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
  ];

  function resetEvents() {
    firedEvents = new Set();
  }
</script>

<div class="App">
  <h1>TouchSpin Svelte Event Demo</h1>

  <div class="demo-section">
    <h2>Imperative API Methods</h2>
    <p>Test all TouchSpin methods via the ref API:</p>
    <div class="method-buttons">
      <button onclick={() => touchSpinRef?.focus()}>Focus</button>
      <button onclick={() => touchSpinRef?.blur()}>Blur</button>
      <button onclick={() => touchSpinRef?.increment()}>Increment</button>
      <button onclick={() => touchSpinRef?.decrement()}>Decrement</button>
      <button onclick={handleGetValue}>Get Value</button>
      <button onclick={handleSetValue}>Set Value</button>
      <button onclick={() => touchSpinRef?.startUpSpin()}>Start Up Spin</button>
      <button onclick={() => touchSpinRef?.startDownSpin()}>Start Down Spin</button>
      <button onclick={() => touchSpinRef?.stopSpin()}>Stop Spin</button>
      <button onclick={handleUpdateSettings}>Update Settings</button>
    </div>
  </div>

  <div class="demo-section">
    <h2>USD Spinner with Event Tracking</h2>
    <TouchSpin
      bind:this={touchSpinRef}
      bind:value={value}
      min={0}
      max={100}
      step={0.5}
      decimals={2}
      prefix="$"
      suffix=" USD"
      onOnMin={handleMin}
      onOnMax={handleMax}
      onOnStartSpin={handleStartSpin}
      onOnStopSpin={handleStopSpin}
      onOnStartUpSpin={handleStartUpSpin}
      onOnStartDownSpin={handleStartDownSpin}
      onOnStopUpSpin={handleStopUpSpin}
      onOnStopDownSpin={handleStopDownSpin}
      onOnSpeedChange={handleSpeedChange}
    />
    <p>Current value: ${value.toFixed(2)} USD</p>
  </div>

  <div class="demo-section">
    <h2>TouchSpin Events</h2>
    <p>Events that have been fired:</p>
    <ul class="event-list">
      {#each allEvents as event}
        <li class={firedEvents.has(event) ? 'fired' : 'not-fired'}>
          {event}: {firedEvents.has(event) ? '✅ Fired' : '❌ Not fired'}
        </li>
      {/each}
    </ul>
    <button class="reset-events-btn" onclick={resetEvents}>Reset Events</button>
  </div>
</div>

<style>
  .App {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.12);
    border: 1px solid #c7d2fe;
  }

  .App :global(.ts-wrapper) {
    --ts-wrapper-background-color: #ffffff;
    --ts-wrapper-border-color: #1d4ed8;
    --ts-wrapper-box-shadow: 0 4px 16px rgba(30, 64, 175, 0.2);
    --ts-wrapper-focus-border-color: #1e40af;
    --ts-wrapper-focus-box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35), 0 6px 16px rgba(15, 23, 42, 0.18);
    --ts-input-text-color: #0f172a;
    --ts-input-placeholder-color: #64748b;
    --ts-button-background-color: #2563eb;
    --ts-button-background-color-hover: #1d4ed8;
    --ts-button-background-color-active: #1e3a8a;
    --ts-button-text-color: #ffffff;
    --ts-button-border-color: transparent;
    --ts-addon-background-color: #dbeafe;
    --ts-addon-text-color: #1d4ed8;
    --ts-vertical-button-background-color: #2563eb;
    --ts-vertical-button-background-color-hover: #1d4ed8;
    --ts-vertical-button-text-color: #ffffff;
    --ts-vertical-button-border-color: transparent;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
  }

  .App :global(.ts-wrapper:focus-within) {
    transform: translateY(-1px);
  }

  .App h1 {
    color: #0b1120;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  .demo-section {
    margin: 2rem 0;
    padding: 1.5rem;
    border: 1px solid #cbd5f5;
    border-radius: 14px;
    background: #fdfcff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 12px 28px rgba(15, 23, 42, 0.08);
  }

  .demo-section h2 {
    margin-bottom: 1rem;
    color: #1d4ed8;
    font-size: 1.35rem;
  }

  .demo-section p {
    margin-top: 1rem;
    color: #1e293b;
    font-weight: 500;
  }

  .event-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }

  .event-list li {
    padding: 0.5rem;
    margin: 0.25rem 0;
    border-radius: 6px;
    font-family: monospace;
    font-size: 0.9rem;
  }

  .event-list li.fired {
    background-color: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  .event-list li.not-fired {
    background-color: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  .reset-events-btn {
    background-color: #1d4ed8;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.2s ease;
  }

  .reset-events-btn:hover {
    background-color: #1e40af;
  }

  .method-buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .method-buttons button {
    background-color: #3b82f6;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background-color 0.2s ease;
  }

  .method-buttons button:hover {
    background-color: #2563eb;
  }
</style>
