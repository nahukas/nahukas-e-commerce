import React, { useEffect, useReducer } from 'react';
import { User } from 'firebase/auth';

import { IUser } from '../api/Users/user.models';
import { auth, signInWithGoogle } from '../api/firebase.utils';
import { UserService } from '../api/Users/UserService';
import { userReducer } from './user/user.reducer';

interface AuthContextType {
  user: IUser | null;
  userState: IUser;
  handleSignInWithGoogle: () => void;
  signOut: () => void;
}

const initialState: IUser = {
  displayName: '',
  uid: '',
  email: '',
  createdAt: ''
};

const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);
  const [userState, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUserInfo = async (user: User) => {
      try {
        const response = await UserService.storeUser(user);
        setCurrentUser(response);
      } catch (error) {
        console.error(error);
      }

      try {
        const response = await UserService.getUser(user.uid);
        dispatch({
          type: 'GET_USER',
          payload: response
        });
      } catch (error) {
        console.error(error);
      }
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserInfo(user);
      } else {
        setCurrentUser(null);
        dispatch({
          type: 'GET_USER',
          payload: initialState
        });
      }
    });
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    await auth.signOut();
  };

  const value = {
    user: currentUser,
    handleSignInWithGoogle,
    signOut,
    userState
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
