class LocalStorageService {
  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get<T>(key: string): T {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  has(key: string): boolean {
    const value = localStorage.getItem(key);
    return !!value;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorageService();
