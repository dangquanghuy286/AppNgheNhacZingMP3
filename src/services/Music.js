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
        const result = await get(`infosong?${sid}`);
        console.log("getDetailSong raw response:", result);
        if (result.err === 0 && result.data) {
            return result.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error fetching music details:", error);
        throw error;
    }
};
