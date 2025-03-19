import { get } from "../utils/request";

export const getSong = async (sid) => {
    try {
        const result = await get(`song?${sid}`);
        return result;
    } catch (error) {
        console.error("Error fetching music details:", error);
        throw error;
    }
}
export const getDetailSong = async (sid) => {
    try {
        const result = await get(`detailplaylist?${sid}`);
        return result;
    } catch (error) {
        console.error("Error fetching song details:", error);
        throw error;
    }
}