import { collection, getDocs } from 'firebase/firestore';

import { firestore } from '../firebase.utils';
import { IDirectory } from './directory.models';

export class DirectoryService {
  public static async getDirectory(): Promise<IDirectory[]> {
    const productsRef = collection(firestore, 'directory');
    const userCartSnapShot = await getDocs(productsRef);

    const directory: IDirectory[] = [];

    userCartSnapShot.forEach((snapshot) => {
      directory.push(snapshot.data() as IDirectory);
    });

    return directory;
  }
}
