import { nanoid } from 'nanoid';

export interface LoginProps {
  id: string;
  accountName: string;
  userName: string;
  passcode: string;
}

export const loginData: LoginProps[] = [
  {
    id: nanoid(),
    accountName: 'Account 1',
    userName: 'test_user_1',
    passcode: '1234',
  },
  {
    id: nanoid(),
    accountName: 'Account 2',
    userName: 'test_user_2',
    passcode: '5678',
  },
];