import { mount } from 'svelte';
import App from './App.svelte';
import '../../../../touchspin/packages/renderers/vanilla/dist/touchspin-vanilla.css';

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
