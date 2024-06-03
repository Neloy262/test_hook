import { CameraCapturedPicture } from "expo-camera";

export interface Product {
  id: string;
  name: string;
  source: any;
}
export interface ProductState {
  state: number;
  selected: boolean;
}

export interface CurrentProducts {
  [key: string]: ProductState;
}

export interface TransformedProducts {
  [key: string]: number;
}

export type Shop = {
  name: string;
  area: string;
  lat: number;
  long: number;
  status: string;
};
export type User = {
  id: string;
  name: string;
  areaId: string;
  type: string;
  email: string;
};
export type Task = {
  formData: object;
  userId: string;
  shopId: string;
  type: string;
};
export type Image = {
  taskId: string;
  isClose: boolean;
  isDeleted: boolean;
  urlOrigin: string;
  sizes: object;
  type: string;
  meta: object;
};
export type PartialTask = Partial<Task>
export type PartialImage = Partial<Image>;

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ModalState {
  isModalVisible: boolean;
  modalImage: CameraCapturedPicture | null;
  setIsModalVisible(isModalVisible: boolean): void;
  setModalImage(modalImage: CameraCapturedPicture | null): void;
}
