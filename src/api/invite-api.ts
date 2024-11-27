export const sendInviteRequest = async (values: any) => {

  console.log("values", values);

  await fetch("https://hraviratoms-server-r56k.vercel.app/api/create", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
} 