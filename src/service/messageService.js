import messageModel from "../dao/models/messagesModel.js"


export const createNewMessage = async (message) => {
    try {
        const newMessage = await messageModel.create(message);
        return newMessage;
    } catch (error) {
        CustomError.createError({
            name: "Error en la base de datos.",
            message: "No se pudo crear el nuevo mensaje.",
            cause: error.message,
            code: EErrors.DATABASE_ERROR
        })
    }
}

export const findMessages = async () => {
    try {
        return await messageModel.find();
    } catch (error) {
        CustomError.createError({
            name: "Error en la base de datos.",
            message: "No se encontraron los mensajes.",
            cause: error.message,
            code: EErrors.DATABASE_ERROR
        })
    }
}