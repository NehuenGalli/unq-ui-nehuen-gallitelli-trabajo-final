import axios from "axios";
import {API, ROUTES_API} from "../constants"

const api = axios.create({
  baseURL: API.BASE_URL,
});

const getDifficulty = async () => {
  try {
    const response = await api.get(ROUTES_API.DIFFICULTIES);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getSession = async (difficulty) => {
  try {
    const response = await api.get(`${ROUTES_API.DIFFICULTIES}/${difficulty}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const checkWord = async ({ sessionId, word }) => {
  try {
    const response = await api.post(ROUTES_API.CHECKWORD, { sessionId, word });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { getDifficulty, getSession, checkWord };