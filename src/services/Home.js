import { get } from "../utils/request";

export const getdataHome = async () => {
    try {
        const result = await get("home");
        return result;
    } catch (error) {
        console.error("Error fetching home data:", error);
        throw error;
    }
}