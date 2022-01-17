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
import { Product, ProductQty } from '../Product/products.models';

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
    product: ProductQty
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
      const existingCartItem = userCartSnapShot.data() as ProductQty;
      await updateDoc(userCartReference, { qty: existingCartItem.qty + 1 });
    }
  }

  public static async removeProduct(
    uid: string,
    product: ProductQty
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
      const existingCartItem = userCartSnapShot.data() as ProductQty;
      await updateDoc(userCartReference, { qty: existingCartItem.qty - 1 });
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

  public static async getUserCartItems(uid: string): Promise<ProductQty[]> {
    const userCartReference = collection(firestore, 'users', uid, 'products');
    const userCartSnapShot = await getDocs(userCartReference);

    const cartItems: ProductQty[] = [];

    userCartSnapShot.forEach((snapshot) => {
      cartItems.push(snapshot.data() as ProductQty);
    });

    return cartItems;
  }
}
