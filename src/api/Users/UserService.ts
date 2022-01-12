import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { IUser } from './models';
import { firestore } from '../firebase.utils';

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
}
