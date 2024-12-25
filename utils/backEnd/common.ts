export const formatResponse = (data: object, code: number, msg: string) => {
    return {
        code,
        msg,
        data,
    };
};