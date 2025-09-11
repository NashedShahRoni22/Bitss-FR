const baseURL = import.meta.env.VITE_Base_Url;

export const postApi = async ({ endpoint, payload }) => {
  try {
    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
