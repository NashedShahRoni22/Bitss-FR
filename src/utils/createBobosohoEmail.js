export const createBobosohoEmail = async (
  email,
  password,
  setSubMissionLoading,
) => {
  setSubMissionLoading(true);
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
          params: [
            "--create",
            email,
            "-mailbox",
            "true",
            "-passwd",
            password,
            "-mbox_quota",
            "1048576",
          ],
        }),
      },
    );

    const data = await response.json();
    // if (data.code === 1) {

    // } else {

    // }
    return data;
  } catch (error) {
    console.error("Error checking email availability", error);
    setSubMissionLoading(false);
  }
};
