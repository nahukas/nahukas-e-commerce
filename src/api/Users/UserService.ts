import { User } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

import { IUser } from './models';
import { firestore } from '../firebase.utils';
import { Product } from '../Product/products.models';

export class UserService {
  public static async storeUser({
    uid,
    displayName,
    email
  }: User): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);
    const userCartReference = collection(firestore, 'users', uid, 'products');

    const userSnapShot = await getDoc(userDocReference);
    const userCartSnapShot = await getDocs(userCartReference);

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

    const products: Product[] = [];

    userCartSnapShot.forEach((snapshot) => {
      products.push(snapshot.data() as Product);
    });

    let userWithCart = userSnapShot.data() as IUser;
    userWithCart = { ...userWithCart, products };

    return userWithCart;
  }

  public static async updateUserInfo(uid: string, user: IUser): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);
    const userSnapShot = await getDoc(userDocReference);

    return userSnapShot.data() as IUser;
  }

  public static async getUser(uid: string): Promise<IUser> {
    const userDocReference = doc(firestore, 'users', uid);
    const userCartReference = collection(firestore, 'users', uid, 'products');

    const userSnapShot = await getDoc(userDocReference);
    const userCartSnapShot = await getDocs(userCartReference);

    const products: Product[] = [];

    userCartSnapShot.forEach((snapshot) => {
      products.push(snapshot.data() as Product);
    });

    let userWithCart = userSnapShot.data() as IUser;
    userWithCart = { ...userWithCart, products };

    return userWithCart;
  }

  public static async addProduct(
    uid: string,
    productId: string,
    product: Product
  ): Promise<Product> {
    const userDocReference = doc(firestore, 'users', uid);
    const userCartReference = doc(
      firestore,
      'users',
      uid,
      'products',
      productId
    );

    await setDoc(userCartReference, product);
    const cartProductSnapShot = await getDoc(userDocReference);

    return cartProductSnapShot.data() as Product;
  }
}
