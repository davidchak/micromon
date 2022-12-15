import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';


export const useObjectStore = create()(
  devtools(
    immer((set) => ({
      items: [],

      /**
       * Добавление в хранилще
       * @param {Object} payload - item;
       * @returns 
       */
      addItem: (payload) =>
        set((state) => {
          state.items.push(payload);
        }),

      /**
       * Перезапись хранилища
       * @param {Array} payload - item[]
       * @returns 
       */
      setItems: (payload) =>
        set((state) => {
          state.items = payload;
        }),

      /**
       * Удаление из хранилища по ключу
       * @param {number} payload - item.id
       * @returns 
       */  
      removeItem: (payload) =>
        set((state) => {
          state.items.filter(server => server.id !== payload);
        }),
    }))
  )
);
