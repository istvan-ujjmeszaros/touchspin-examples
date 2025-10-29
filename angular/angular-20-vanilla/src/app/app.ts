import { Component, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TouchSpinVanillaComponent, type TouchSpinHandle } from '@touchspin/angular/vanilla';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TouchSpinVanillaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('touchSpinComponent') touchSpinComponent?: TouchSpinVanillaComponent;

  value = signal(25.5);
  firedEvents = signal(new Set<string>());

  allEvents = signal([
    'onMin',
    'onMax',
    'onStartSpin',
    'onStopSpin',
    'onStartUpSpin',
    'onStartDownSpin',
    'onStopUpSpin',
    'onStopDownSpin',
    'onSpeedChange',
  ]);

  handleEvent(eventName: string) {
    this.firedEvents.update(events => new Set(events).add(eventName));
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
    this.firedEvents.set(new Set());
  }
}
