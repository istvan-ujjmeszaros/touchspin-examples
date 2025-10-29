<script lang="ts">
  import type { TouchSpinCoreOptions } from '@touchspin/core';
  import { TailwindRenderer } from '@touchspin/renderer-tailwind';
  import TouchSpin from '@touchspin/svelte/vanilla';
  import type { TouchSpinHandle } from '@touchspin/svelte/vanilla';

  const panelClasses =
    'my-8 rounded-3xl border border-blue-100 bg-[#fdfcff] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]';
  const primaryButtonClasses =
    'rounded-lg border-0 bg-blue-500 px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600';
  const secondaryButtonClasses =
    'rounded-lg border-0 bg-blue-700 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-800';
  const firedEventClasses = 'border border-green-200 bg-green-100 text-green-800';
  const idleEventClasses = 'border border-red-200 bg-red-100 text-red-800';

  type TailwindOverrideOptions = Partial<TouchSpinCoreOptions> & {
    wrapper_classes?: string;
    input_classes?: string;
    buttonup_class?: string;
    buttondown_class?: string;
    prefix_classes_override?: string;
    postfix_classes_override?: string;
  };

  const heroWrapperClasses =
    'flex items-stretch rounded-xl border border-blue-600 bg-white shadow-[0_4px_16px_rgba(30,64,175,0.2)] focus-within:border-blue-700 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.35),0_6px_16px_rgba(15,23,42,0.18)] transition-shadow duration-150 overflow-hidden';
  const heroInputClasses =
    'flex-1 px-4 py-3 bg-transparent text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 font-medium';
  const heroButtonClasses =
    'px-4 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150';
  const heroAddonClasses =
    'inline-flex items-center px-4 py-3 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap';

  const tailwindCoreOptions: TailwindOverrideOptions = {
    renderer: TailwindRenderer,
    focusablebuttons: true,
    wrapper_classes:
      heroWrapperClasses,
    input_classes:
      heroInputClasses,
    buttonup_class: heroButtonClasses,
    buttondown_class: heroButtonClasses,
    prefix_classes_override: heroAddonClasses,
    postfix_classes_override: heroAddonClasses,
  };

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
  ] as const;

  type EventName = (typeof allEvents)[number];

  let value = $state(25.5);
  let firedEvents = $state(new Set<EventName>());
  let touchSpinRef: TouchSpinHandle | undefined;

  const addEvent = (eventName: EventName) => {
    const next = new Set(firedEvents);
    next.add(eventName);
    firedEvents = next;
  };

  const handleResetEvents = () => {
    firedEvents = new Set();
  };

  const handleGetValue = () => {
    const currentValue = touchSpinRef?.getValue();
    window.alert(`Current value: ${currentValue}`);
  };

  const handleSetValue = () => {
    const newValue = window.prompt('Enter new value:', '42');
    if (newValue !== null) {
      const numValue = Number(newValue);
      if (!Number.isNaN(numValue)) {
        touchSpinRef?.setValue(numValue);
      }
    }
  };

  const handleUpdateSettings = () => {
    const newStep = window.prompt('Enter new step size:', '1');
    if (newStep !== null) {
      const numStep = Number(newStep);
      if (!Number.isNaN(numStep)) {
        touchSpinRef?.updateSettings({ step: numStep });
        window.alert(`Step size updated to ${numStep}`);
      }
    }
  };
</script>

<div
  class="mx-auto max-w-[50rem] rounded-3xl border border-blue-200 bg-white p-8 font-sans shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
>
  <h1 class="mb-8 text-[2rem] font-bold text-[#0b1120]">TouchSpin Svelte Tailwind</h1>

  <section class={panelClasses}>
    <h2 class="text-[1.35rem] font-bold text-blue-700">Imperative API Methods</h2>
    <p class="mt-4 font-medium text-[#1e293b]">
      Test all TouchSpin methods via the component reference:
    </p>
    <div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.focus()}>
        Focus
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.blur()}>
        Blur
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.increment()}>
        Increment
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.decrement()}>
        Decrement
      </button>
      <button class={primaryButtonClasses} onclick={handleGetValue}>
        Get Value
      </button>
      <button class={primaryButtonClasses} onclick={handleSetValue}>
        Set Value
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.startUpSpin()}>
        Start Up Spin
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.startDownSpin()}>
        Start Down Spin
      </button>
      <button class={primaryButtonClasses} onclick={() => touchSpinRef?.stopSpin()}>
        Stop Spin
      </button>
      <button class={primaryButtonClasses} onclick={handleUpdateSettings}>
        Update Settings
      </button>
    </div>
  </section>

  <section class={panelClasses}>
    <h2 class="text-[1.35rem] font-bold text-blue-700">USD Spinner with Event Tracking</h2>
    <TouchSpin
      bind:this={touchSpinRef}
      bind:value={value}
      min={0}
      max={100}
      step={0.5}
      decimals={2}
      prefix="$"
      suffix=" USD"
      coreOptions={tailwindCoreOptions}
      onOnMin={() => addEvent('onMin')}
      onOnMax={() => addEvent('onMax')}
      onOnStartSpin={() => addEvent('onStartSpin')}
      onOnStopSpin={() => addEvent('onStopSpin')}
      onOnStartUpSpin={() => addEvent('onStartUpSpin')}
      onOnStartDownSpin={() => addEvent('onStartDownSpin')}
      onOnStopUpSpin={() => addEvent('onStopUpSpin')}
      onOnStopDownSpin={() => addEvent('onStopDownSpin')}
      onOnSpeedChange={() => addEvent('onSpeedChange')}
    />
    <p class="mt-4 font-medium text-[#1e293b]">
      Current value: ${value.toFixed(2)} USD
    </p>
  </section>

  <section class={panelClasses}>
    <h2 class="mb-4 text-[1.35rem] font-bold text-blue-700">TouchSpin Events</h2>
    <p class="font-medium text-[#1e293b]">Events that have been fired:</p>
    <ul class="my-4 list-none p-0">
      {#each allEvents as event}
        <li
          class={`my-1 rounded-lg px-3 py-2 font-mono text-sm ${
            firedEvents.has(event) ? firedEventClasses : idleEventClasses
          }`}
        >
          {event}: {firedEvents.has(event) ? '✅ Fired' : '❌ Not fired'}
        </li>
      {/each}
    </ul>
    <button class={secondaryButtonClasses} onclick={handleResetEvents}>
      Reset Events
    </button>
  </section>
</div>
