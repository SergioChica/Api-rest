// Registro de subida de archivos en la base de datos

import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };