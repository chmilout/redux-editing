import { type TFormData } from '../components/types';
import {
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  SET_EDITING_ID,
  CANCEL_EDITING,
} from './action-types';

export type AddServiceAction = {
  type: typeof ADD_SERVICE;
  payload: TFormData;
};

export type UpdateServiceAction = {
  type: typeof UPDATE_SERVICE;
  payload: {
    id: string;
    data: Omit<TFormData, 'id'>;
  };
};

export type DeleteServiceAction = {
  type: typeof DELETE_SERVICE;
  payload: string;
};

export type SetEditingIdAction = {
  type: typeof SET_EDITING_ID;
  payload: string | null;
};

export type CancelEditingAction = {
  type: typeof CANCEL_EDITING;
};

export type ServiceActionTypes =
  | AddServiceAction
  | UpdateServiceAction
  | DeleteServiceAction
  | SetEditingIdAction
  | CancelEditingAction;

export const addService = (item: TFormData) => ({
  type: ADD_SERVICE,
  payload: item,
});

export const updateService = (id: string, data: Omit<TFormData, 'id'>) => ({
  type: UPDATE_SERVICE,
  payload: { id, data },
});

export const deleteService = (id: string) => ({
  type: DELETE_SERVICE,
  payload: id,
});

export const setEditingId = (id: string | null) => ({
  type: SET_EDITING_ID,
  payload: id,
});

export const cancelEditing = () => ({
  type: CANCEL_EDITING,
});
