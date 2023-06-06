export default class LocalStorageService {
  localStorageName;
  constructor(localStorageName) {
    this.localStorageName = localStorageName;
  }
  // eslint-disable-next-line no-unused-vars
  AddItem(value, _expireDate) {
    localStorage.setItem(this.localStorageName, JSON.stringify(value));
  }
  getItem() {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }
  deleteItem() {
    localStorage.removeItem(this.localStorageName);
  }
}
