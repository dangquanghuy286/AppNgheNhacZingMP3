import { get } from "../utils/request";

export const getdetailMusic = async (sid) => {
    try {
        const result = await get(`song/${sid}`);
        return result;
    } catch (error) {
        console.error("Error fetching music details:", error);
        throw error;
    }
}