import {
  v4 as uuidv4,
  v6 as uuidv6,
  v7 as uuidv7,
  validate,
  version,
} from 'uuid';
import { create } from 'zustand';

export const SUPPORTED_UUID_VERSIONS = ['v4', 'v6', 'v7'] as const;
export type SupportedUUIDVersion = (typeof SUPPORTED_UUID_VERSIONS)[number];

type UUIDStore = {
  generateUUID: () => string;
  numberOfUUIDs: number;
  setNumberOfUUIDs: (number: number) => void;
  selectedVersion: SupportedUUIDVersion;
  onSelectVersion: (version: SupportedUUIDVersion) => void;
  version: (uuid: string) => number;

  // Toggles
  autoRegenerateAfterCopy: boolean;
  toggleAutoRegenerateAfterCopy: () => void;
};

export const useUUIDStore = create<UUIDStore>((set, get) => ({
  generateUUID: () => {
    switch (get().selectedVersion) {
      case 'v4':
        return uuidv4();
      case 'v6':
        return uuidv6();
      case 'v7':
        return uuidv7();
    }
  },
  numberOfUUIDs: 5,
  setNumberOfUUIDs: (number) => set({ numberOfUUIDs: number < 1 ? 1 : number }),
  selectedVersion: SUPPORTED_UUID_VERSIONS[0],
  onSelectVersion: (version) => set({ selectedVersion: version }),
  version: (uuid: string) => {
    try {
      return version(uuid);
    } catch {
      return 0;
    }
  },
  autoRegenerateAfterCopy: false,
  toggleAutoRegenerateAfterCopy: () =>
    set({ autoRegenerateAfterCopy: !get().autoRegenerateAfterCopy }),
}));
