import React, { useEffect } from 'react';
import { User } from 'firebase/auth';

import { IUser } from '../api/Users/models';
import { auth, signInWithGoogle } from '../api/firebase.utils';
import { UserService } from '../api/Users/UserService';

interface AuthContextType {
  user: IUser | null;
  handleSignInWithGoogle: () => void;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  useEffect(() => {
    const fetchUserInfo = async (user: User) => {
      try {
        const response = await UserService.storeUser(user);
        setCurrentUser(response);
      } catch (error) {
        console.error(error);
      }
    };

    auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserInfo(user);
      } else {
        setCurrentUser(null);
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

  const value = { user: currentUser, handleSignInWithGoogle, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
