import { Product } from '../../api/Product/products.models';
import { IUser } from '../../api/Users/models';
import { UserAction } from './user.actions';

export const userReducer = (state: IUser, action: UserAction) => {
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'DEL_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product: Product) => product.id !== action.payload
        )
      };
    default:
      throw new Error();
  }
};
