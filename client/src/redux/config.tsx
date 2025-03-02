import storage from 'redux-persist/lib/storage';

export const permissionsPersistConfig = {
    key: 'root',
    storage,
    // transforms: [encryptor]
  };
  export const apisPersistConfig = {
    key: 'initially',
    storage,
    // transforms: [encryptor]
  };

  export const authPersistConfig = {
    key: 'tkt',
    storage,
    // transforms: [encryptor]
  };