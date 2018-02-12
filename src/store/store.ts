import * as store from 'store';

if (!store.get('notes')) {
  store.set('notes', []);
}

export default store;