import { v4 as uuidv4, v6 as uuidv6, v7 as uuidv7, validate } from 'uuid';
import { create } from 'zustand';

export const SUPPORTED_UUID_VERSIONS = ['v4', 'v6', 'v7'] as const;
export type SupportedUUIDVersion = (typeof SUPPORTED_UUID_VERSIONS)[number];

type UUIDStore = {
  generateUUID: () => string;
  numberOfUUIDs: number;
  setNumberOfUUIDs: (number: number) => void;
  selectedVersion: SupportedUUIDVersion;
  onSelectVersion: (version: SupportedUUIDVersion) => void;
  validateUUID: (uuid: string) => boolean;
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
  validateUUID: (uuid: string) => validate(uuid),
}));
