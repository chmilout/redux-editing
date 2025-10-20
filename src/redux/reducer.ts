import { type TFormData } from '../components/types';
import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  SET_EDITING_ID,
  CANCEL_EDITING,
} from './action-types';
import { type ServiceActionTypes } from './actions';

export type ServicesState = {
  items: TFormData[];
  editingId: string | null;
};

const initialState: ServicesState = {
  items: [],
  editingId: null,
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

    default:
      return state;
  }
};
