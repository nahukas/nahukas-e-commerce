import { IUser } from '../../api/Users/user.models';
import { UserAction } from './user.actions';

export const userReducer = (state: IUser, action: UserAction): IUser => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    default:
      throw new Error();
  }
};
