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
        const result = await get(`infosong?id=${encodeURIComponent(sid)}`);
        return result;
    } catch (error) {
        console.error(`Failed to fetch song details for ID: ${sid}. Error:`, error);
        throw new Error("Unable to fetch song details. Please try again later.");
    }
};

