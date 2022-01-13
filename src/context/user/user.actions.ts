import { Product } from '../../api/Product/products.models';
import { IUser } from '../../api/Users/models';

interface Action_GET_USER {
  type: 'GET_USER';
  payload: IUser;
}

interface Action_ADD_PRODUCT {
  type: 'ADD_PRODUCT';
  payload: Product;
}

interface Action_DELETE_PRODUCT {
  type: 'DEL_PRODUCT';
  payload: string;
}

export type UserAction =
  | Action_ADD_PRODUCT
  | Action_DELETE_PRODUCT
  | Action_GET_USER;
