import { type TFormData } from '../components/types';
import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  SET_EDITING_ID,
  CANCEL_EDITING,
  SET_FILTER,
} from './action-types';
import { type ServiceActionTypes } from './actions';

export type ServicesState = {
  items: TFormData[];
  editingId: string | null;
  filter: string;
};

const initialState: ServicesState = {
  items: [
    {
      id: '1',
      name: 'Замена дисплея',
      price: 3500,
    },
    {
      id: '2',
      name: 'Замена аккумулятора',
      price: 5000,
    },
    {
      id: '3',
      name: 'Чистка динамиков',
      price: 1500,
    },
    {
      id: '4',
      name: 'Установка стекла',
      price: 500,
    },
    {
      id: '5',
      name: 'Прошивка',
      price: 1000,
    },
  ],
  editingId: null,
  filter: '',
};

export const servicesReducer = (
  state = initialState,
  action: ServiceActionTypes
) => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case UPDATE_SERVICE:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
        editingId: null,
      };
    case DELETE_SERVICE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case SET_EDITING_ID:
      return {
        ...state,
        editingId: action.payload,
      };
    case CANCEL_EDITING:
      return {
        ...state,
        editingId: null,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
