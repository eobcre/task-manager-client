import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LoginStoreProps {
  userLogin: boolean;
  userId: number | null;
  userName: string;
  flag: boolean;

  setUserLogin: (state: boolean) => void;
  setUserId: (id: number | null) => void;
  setUserName: (name: string) => void;
  setFlag: (flag: boolean) => void;
  UserLogout: () => void;
}

const useStore = create<LoginStoreProps>()(
  persist(
    (set) => ({
      userLogin: false,
      userId: null,
      userName: '',
      flag: false,

      setUserLogin: (state) => set({ userLogin: state }),
      setUserId: (id) => set({ userId: id }),
      setUserName: (name) => set({ userName: name }),
      setFlag: (flag) => set({ flag: flag }),

      UserLogout: () => {
        set(() => ({
          userLogin: false,
          userId: null,
          userName: '',
          flag: false,
        }));
        localStorage.removeItem('auth-storage');
        localStorage.removeItem('token');
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useStore;
