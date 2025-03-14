import { get } from "../utils/request";

export const getHome = async () => {
    const result = await get("home");
    return result;
}
