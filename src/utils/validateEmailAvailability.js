export const validateEmailAvailability = async (
  email,
  setEmailAvailable,
  setEmailLoading,
) => {
  setEmailLoading(true);
  try {
    const response = await fetch(
      "https://bobosohomail.com:8443/api/v2/cli/mail/call",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "8322d0fd-75a8-417e-9eb0-155ec4df16b5",
        },
        body: JSON.stringify({
          params: ["--info", email],
        }),
      },
    );

    const data = await response.json();
    if (data.code === 1) {
      setEmailAvailable(true);
      setEmailLoading(false);
    } else {
      setEmailAvailable(false);
      setEmailLoading(false);
    }
  } catch (error) {
    console.error("Error checking email availability", error);
    setEmailAvailable(false);
    setEmailLoading(false);
  }
};
