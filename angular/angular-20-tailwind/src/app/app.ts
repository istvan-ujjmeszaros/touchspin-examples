import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouchSpinTailwindComponent } from '@touchspin/angular/tailwind';
import type { TouchSpinCoreOptions } from '@touchspin/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TouchSpinTailwindComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('touchSpinComponent') touchSpinComponent?: TouchSpinTailwindComponent;

  value = 25.5;
  firedEvents = new Set<string>();

  tailwindCoreOptions: Partial<TouchSpinCoreOptions> & {
    input_classes?: string;
    wrapper_classes?: string;
  } = {
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
  };

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
