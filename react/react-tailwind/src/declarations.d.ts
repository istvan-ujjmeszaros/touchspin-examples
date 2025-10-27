declare module '@touchspin/renderer-tailwind/css'

declare module '@touchspin/react/tailwind' {
  import type { TouchSpinHandle, TouchSpinProps } from '@touchspin/react/dist/vanilla'
  import TouchSpinVanilla from '@touchspin/react/dist/vanilla'

  const TouchSpinTailwind: typeof TouchSpinVanilla
  export default TouchSpinTailwind
  export type { TouchSpinHandle, TouchSpinProps }
}
