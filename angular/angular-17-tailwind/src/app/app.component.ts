import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouchSpinTailwindComponent, type TouchSpinHandle } from '@touchspin/angular/tailwind';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TouchSpinTailwindComponent],
  template: `
  <div class="max-w-[50rem] mx-auto p-8 font-sans bg-white rounded-3xl shadow-[0_18px_36px_rgba(15,23,42,0.12)] border border-blue-200">
  <h1 class="text-[#0b1120] mb-8 text-[2.5rem] font-bold">TouchSpin Angular 17 Event Demo</h1>

  <div class="my-8 p-6 border border-blue-100 rounded-3xl bg-[#fdfcff] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]">
  <h2 class="text-blue-700 mb-4 text-[1.35rem] font-bold">Imperative API Methods</h2>
  <p class="mt-4 text-[#1e293b] font-medium">Test all TouchSpin methods via the component reference:</p>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 mt-4">
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.focus()">Focus</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.blur()">Blur</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.increment()">Increment</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.decrement()">Decrement</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="handleGetValue()">Get Value</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="handleSetValue()">Set Value</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.startUpSpin()">Start Up Spin</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.startDownSpin()">Start Down Spin</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="touchSpinComponent?.stopSpin()">Stop Spin</button>
  <button class="bg-blue-500 hover:bg-blue-600 text-white border-0 py-2 px-3 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="handleUpdateSettings()">Update Settings</button>
  </div>
  </div>

  <div class="my-8 p-6 border border-blue-100 rounded-3xl bg-[#fdfcff] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]">
  <h2 class="text-blue-700 mb-4 text-[1.35rem] font-bold">USD Spinner with Event Tracking</h2>
  <touch-spin
  #touchSpinComponent
  name="value"
  [(ngModel)]="value"
  [min]="0"
  [max]="100"
  [step]="0.5"
  [decimals]="2"
  [prefix]="'$'"
  [suffix]="' USD'"
  [class]="'bg-white border-blue-700 shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-600 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.35),0_6px_16px_rgba(15,23,42,0.18)]'"
  [inputClass]="'flex-1'"
  [coreOptions]="{
    buttonup_class: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border-0 px-3 py-2 min-w-8 rounded-r-md',
    buttondown_class: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white border-0 px-3 py-2 min-w-8 rounded-l-md',
    prefix_extraclass: 'bg-blue-100 text-blue-700 px-3 py-2',
    postfix_extraclass: 'bg-blue-100 text-blue-700 px-3 py-2'
  }"
  (onMin)="handleEvent('onMin')"
  (onMax)="handleEvent('onMax')"
  (onStartSpin)="handleEvent('onStartSpin')"
  (onStopSpin)="handleEvent('onStopSpin')"
  (onStartUpSpin)="handleEvent('onStartUpSpin')"
  (onStartDownSpin)="handleEvent('onStartDownSpin')"
  (onStopUpSpin)="handleEvent('onStopUpSpin')"
  (onStopDownSpin)="handleEvent('onStopDownSpin')"
  (onSpeedChange)="handleEvent('onSpeedChange')"
  >
  </touch-spin>
  <p class="mt-4 text-[#1e293b] font-medium">Current value: \${{ value.toFixed(2) }} USD</p>
  </div>

  <div class="my-8 p-6 border border-blue-100 rounded-3xl bg-[#fdfcff] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_12px_28px_rgba(15,23,42,0.08)]">
  <h2 class="text-blue-700 mb-4 text-[1.35rem] font-bold">TouchSpin Events</h2>
  <p class="text-[#1e293b] font-medium">Events that have been fired:</p>
  <ul class="list-none p-0 my-4">
  <li *ngFor="let event of allEvents" class="py-2 px-3 my-1 rounded-lg font-mono text-sm"
      [class]="firedEvents.has(event) ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'">
  {{ event }}: {{ firedEvents.has(event) ? '✅ Fired' : '❌ Not fired' }}
  </li>
  </ul>
  <button class="bg-blue-700 hover:bg-blue-800 text-white border-0 py-2 px-4 rounded-lg cursor-pointer text-sm transition-colors duration-200" (click)="resetEvents()">Reset Events</button>
  </div>
  </div>
  `,
  styles: []
})
export class AppComponent {
  @ViewChild('touchSpinComponent') touchSpinComponent?: TouchSpinTailwindComponent;

  value = 25.5;
  firedEvents = new Set<string>();

  allEvents = [
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

  handleEvent(eventName: string) {
    this.firedEvents.add(eventName);
  }

  handleGetValue() {
    const currentValue = this.touchSpinComponent?.getValue();
    alert(`Current value: ${currentValue}`);
  }

  handleSetValue() {
    const newValue = prompt('Enter new value:', '42');
    if (newValue !== null) {
      const numValue = parseFloat(newValue);
      if (!isNaN(numValue)) {
        this.touchSpinComponent?.setValue(numValue);
      }
    }
  }

  handleUpdateSettings() {
    const newStep = prompt('Enter new step size:', '1');
    if (newStep !== null) {
      const numStep = parseFloat(newStep);
      if (!isNaN(numStep)) {
        this.touchSpinComponent?.updateSettings({ step: numStep });
        alert(`Step size updated to ${numStep}`);
      }
    }
  }

  resetEvents() {
    this.firedEvents.clear();
  }
}
