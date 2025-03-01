import axios from "axios";

export const getTasks = async () => {
  try {
    const response = await axios.get("http://localhost:5000/task/getTask");
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
