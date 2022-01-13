import React, { useEffect, useReducer } from 'react';
import { User } from 'firebase/auth';

import { IUser } from '../api/Users/models';
import { auth, signInWithGoogle } from '../api/firebase.utils';
import { UserService } from '../api/Users/UserService';
import { userReducer } from './user/user.reducer';
import { Product } from '../api/Product/products.models';

interface AuthContextType {
  user: IUser | null;
  handleSignInWithGoogle: () => void;
  signOut: () => void;
  addProduct: (newProduct: Product) => void;
  userState: IUser;
}

const initialState: IUser = {
  displayName: '',
  uid: '',
  email: '',
  createdAt: '',
  products: []
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

  const addProduct = async (newProduct: Product) => {
    const addProduct = (newProduct: Product) => {
      dispatch({
        type: 'ADD_PRODUCT',
        payload: newProduct
      });
    };

    try {
      addProduct(newProduct);
      await UserService.addProduct(currentUser!.uid, newProduct.id, newProduct);
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    user: currentUser,
    handleSignInWithGoogle,
    signOut,
    addProduct,
    userState
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
