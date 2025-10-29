<template>
  <div
    class="mx-auto max-w-[50rem] rounded-3xl border border-blue-200 bg-white p-8 font-sans shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
  >
    <h1 class="mb-8 text-[2rem] font-bold text-[#0b1120]">TouchSpin Vue Tailwind</h1>

    <section :class="panelClasses">
      <h2 class="text-[1.35rem] font-bold text-blue-700">Imperative API Methods</h2>
      <p class="mt-4 font-medium text-[#1e293b]">
        Test all TouchSpin methods via the component reference:
      </p>
      <div class="mt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2">
        <button :class="primaryButtonClasses" @click="touchSpinRef?.focus()">Focus</button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.blur()">Blur</button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.increment()">Increment</button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.decrement()">Decrement</button>
        <button :class="primaryButtonClasses" @click="handleGetValue">Get Value</button>
        <button :class="primaryButtonClasses" @click="handleSetValue">Set Value</button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.startUpSpin()">
          Start Up Spin
        </button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.startDownSpin()">
          Start Down Spin
        </button>
        <button :class="primaryButtonClasses" @click="touchSpinRef?.stopSpin()">Stop Spin</button>
        <button :class="primaryButtonClasses" @click="handleUpdateSettings">
          Update Settings
        </button>
      </div>
    </section>

    <section :class="panelClasses">
      <h2 class="text-[1.35rem] font-bold text-blue-700">USD Spinner with Event Tracking</h2>
      <TouchSpin
        ref="touchSpinRef"
        v-model="value"
        :min="0"
        :max="100"
        :step="0.5"
        :decimals="2"
        prefix="$"
        suffix=" USD"
        :core-options="tailwindCoreOptionsForComponent"
        @onMin="addEvent('onMin')"
        @onMax="addEvent('onMax')"
        @onStartSpin="addEvent('onStartSpin')"
        @onStopSpin="addEvent('onStopSpin')"
        @onStartUpSpin="addEvent('onStartUpSpin')"
        @onStartDownSpin="addEvent('onStartDownSpin')"
        @onStopUpSpin="addEvent('onStopUpSpin')"
        @onStopDownSpin="addEvent('onStopDownSpin')"
        @onSpeedChange="addEvent('onSpeedChange')"
      />
      <p class="mt-4 font-medium text-[#1e293b]">
        Current value: ${{ value.toFixed(2) }} USD
      </p>
    </section>

    <section :class="panelClasses">
      <h2 class="mb-4 text-[1.35rem] font-bold text-blue-700">TouchSpin Events</h2>
      <p class="font-medium text-[#1e293b]">Events that have been fired:</p>
      <ul class="my-4 list-none p-0">
        <li
          v-for="event in allEvents"
          :key="event"
          :class="[
            'my-1 rounded-lg px-3 py-2 font-mono text-sm',
            firedEvents.has(event) ? firedEventClasses : idleEventClasses,
          ]"
        >
          {{ event }}: {{ firedEvents.has(event) ? '✅ Fired' : '❌ Not fired' }}
        </li>
      </ul>
      <button :class="secondaryButtonClasses" @click="handleResetEvents">Reset Events</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { TouchSpinCoreOptions } from '@touchspin/core'
import TouchSpin from '@touchspin/vue/vanilla'
import type { TouchSpinHandle } from '@touchspin/vue'
import { TailwindRenderer } from '@touchspin/renderer-tailwind'

const touchSpinRef = ref<TouchSpinHandle>()
const value = ref(25.5)
const firedEvents = ref(new Set<EventName>())

const panelClasses =
  'my-8 rounded-3xl border border-blue-100 bg-[#fdfcff] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]'
const primaryButtonClasses =
  'rounded-lg border-0 bg-blue-500 px-3 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-600'
const secondaryButtonClasses =
  'rounded-lg border-0 bg-blue-700 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-blue-800'
const firedEventClasses = 'border border-green-200 bg-green-100 text-green-800'
const idleEventClasses = 'border border-red-200 bg-red-100 text-red-800'

const tailwindRendererOptions = {
  renderer: TailwindRenderer,
  focusablebuttons: true,
  wrapper_classes:
    'flex items-stretch rounded-xl border border-blue-600 bg-white shadow-[0_4px_16px_rgba(30,64,175,0.2)] focus-within:border-blue-700 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.35),0_6px_16px_rgba(15,23,42,0.18)] has-[:disabled]:opacity-70 has-[:disabled]:bg-blue-50/40 has-[:read-only]:bg-blue-50/20 transition-shadow duration-150 overflow-hidden',
  input_classes:
    'flex-1 px-3 py-2 bg-transparent text-slate-900 placeholder-slate-500 focus:outline-none font-medium',
  buttonup_class:
    'px-3 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150',
  buttondown_class:
    'px-3 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150',
  prefix_extraclass:
    'px-3 py-2 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap',
  postfix_extraclass:
    'px-3 py-2 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap',
} satisfies Partial<TouchSpinCoreOptions>

const tailwindCoreOptionsForComponent =
  tailwindRendererOptions as Partial<Omit<TouchSpinCoreOptions, 'renderer'>>

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

const addEvent = (eventName: EventName) => {
  const next = new Set(firedEvents.value)
  next.add(eventName)
  firedEvents.value = next
}

const handleResetEvents = () => {
  firedEvents.value = new Set()
}

const handleGetValue = () => {
  const currentValue = touchSpinRef.value?.getValue()
  window.alert(`Current value: ${currentValue}`)
}

const handleSetValue = () => {
  const newValue = window.prompt('Enter new value:', '42')
  if (newValue !== null) {
    const numValue = Number(newValue)
    if (!Number.isNaN(numValue)) {
      touchSpinRef.value?.setValue(numValue)
    }
  }
}

const handleUpdateSettings = () => {
  const newStep = window.prompt('Enter new step size:', '1')
  if (newStep !== null) {
    const numStep = Number(newStep)
    if (!Number.isNaN(numStep)) {
      touchSpinRef.value?.updateSettings({ step: numStep })
      window.alert(`Step size updated to ${numStep}`)
    }
  }
}
</script>
