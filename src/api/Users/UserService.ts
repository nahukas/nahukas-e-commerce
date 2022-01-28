import { User } from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc
} from 'firebase/firestore';

import { IUser } from './user.models';
import { firestore } from '../firebase.utils';
import { Product } from '../Product/products.models';
import { CartItemType, CartState } from '../../context/cart/cart.reducer';

export class UserService {
  public static async storeUser({
    uid,
    displayName,
    email
  }: User): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);

    const userSnapShot = await getDoc(userDocReference);

    if (!userSnapShot.exists()) {
      try {
        await setDoc(userDocReference, {
          uid,
          email,
          displayName,
          createdAt: new Date()
        });
        const userSnapShot = await getDoc(userDocReference);

        return userSnapShot.data() as IUser;
      } catch (error) {
        console.error(error);
      }
    }

    return userSnapShot.data() as IUser;
  }

  public static async updateUserInfo(uid: string, user: IUser): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);
    const userSnapShot = await getDoc(userDocReference);

    return userSnapShot.data() as IUser;
  }

  public static async getUser(uid: string): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);

    const userSnapShot = await getDoc(userDocReference);

    return userSnapShot.data() as IUser;
  }

  public static async addProduct(
    uid: string,
    product: Product,
    quantity = 1
  ): Promise<void> {
    const userCartReference = doc(
      firestore,
      'users',
      uid,
      'products',
      product.id
    );
    const userCartSnapShot = await getDoc(userCartReference);

    if (!userCartSnapShot.exists()) {
      const item: CartItemType = product as CartItemType;
      item.quantity = quantity;
      await setDoc(userCartReference, item);
    } else {
      const existingCartItem = userCartSnapShot.data() as CartItemType;
      await updateDoc(userCartReference, {
        quantity: existingCartItem.quantity + 1
      });
    }
  }

  public static async removeProduct(
    uid: string,
    product: CartItemType
  ): Promise<void> {
    const userCartReference = doc(
      firestore,
      'users',
      uid,
      'products',
      product.id
    );
    const userCartSnapShot = await getDoc(userCartReference);

    if (!userCartSnapShot.exists()) {
      await setDoc(userCartReference, product);
    } else {
      const existingCartItem = userCartSnapShot.data() as CartItemType;
      await updateDoc(userCartReference, {
        quantity: existingCartItem.quantity - 1
      });
    }
  }

  public static async clearProduct(
    uid: string,
    product: Product
  ): Promise<void> {
    const userCartReference = doc(
      firestore,
      'users',
      uid,
      'products',
      product.id
    );

    await deleteDoc(userCartReference);
  }

  public static async getUserCartItems(uid: string): Promise<CartState> {
    const userCartReference = collection(firestore, 'users', uid, 'products');
    const userCartSnapShot = await getDocs(userCartReference);

    const cartItemsObject: CartState = {};

    userCartSnapShot.forEach((snapshot) => {
      const item = snapshot.data() as CartItemType;
      cartItemsObject[item.id] = item;
    });

    return cartItemsObject;
  }
}
