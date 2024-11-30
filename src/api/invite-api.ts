export const sendInviteRequest = async (values: any) => {
  await fetch(`${process.env.REACT_APP_API_PROD}/api/create`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
} 