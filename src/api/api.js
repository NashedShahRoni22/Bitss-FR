const baseURL = import.meta.env.VITE_Base_Url;

export const postApi = async ({ endpoint, payload, token }) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    // Add Authorization header if token exists
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const res = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};
