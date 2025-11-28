// Pet-BTI is a fully client-side app with no backend storage needs
// This file is kept for template compatibility but not used

export interface IStorage {
  // No storage operations needed for this app
}

export class MemStorage implements IStorage {
  constructor() {
    // No storage needed
  }
}

export const storage = new MemStorage();
