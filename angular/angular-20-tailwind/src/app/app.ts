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

  private readonly heroWrapperClasses =
    'flex items-stretch rounded-xl border border-blue-600 bg-white shadow-[0_4px_16px_rgba(30,64,175,0.2)] focus-within:border-blue-700 focus-within:shadow-[0_0_0_3px_rgba(59,130,246,0.35),0_6px_16px_rgba(15,23,42,0.18)] transition-shadow duration-150 overflow-hidden';
  private readonly heroInputClasses =
    'flex-1 px-4 py-3 bg-transparent text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 font-medium';
  private readonly heroButtonClasses =
    'px-4 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold border-0 transition-colors duration-150';
  private readonly heroAddonClasses =
    'inline-flex items-center px-4 py-3 bg-blue-100 text-blue-700 font-semibold whitespace-nowrap';

  private readonly tailwindOverrides: Partial<TouchSpinCoreOptions> & {
    input_classes?: string;
    wrapper_classes?: string;
    buttonup_class?: string;
    buttondown_class?: string;
    prefix_classes_override?: string;
    postfix_classes_override?: string;
  } = {
    wrapper_classes:
      this.heroWrapperClasses,
    input_classes: this.heroInputClasses,
    buttonup_class: this.heroButtonClasses,
    buttondown_class: this.heroButtonClasses,
    prefix_classes_override: this.heroAddonClasses,
    postfix_classes_override: this.heroAddonClasses,
  };

  tailwindCoreOptions = this.tailwindOverrides;

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
