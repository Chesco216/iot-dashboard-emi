import { create } from 'zustand'

export const useCamera = create((set) => ({
  camera: true,
  turnOffCamera: () => set(() => ({ camera: false })),
  turnOnCamera: () => set(() => ({ camera: true })),
}))

