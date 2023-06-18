import { Buffer } from "buffer";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export default function Callback() {
  console.log("booo");
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  console.log(code);

  const authOptions = {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:5173/callback`,
  };

  useEffect(() => {
    const fetchToken = async () => {
      const response = await fetch(
        "https://accounts.spotify.com/api/token",
        authOptions
      );
      const data = await response.json();
      console.log("dapat token");
      console.log(data);
      const access_token = data.access_token;
      console.log(data);
      access_token !== undefined &&
        localStorage.setItem("spotify-token", access_token);
        window.location.replace('http://localhost:5173');
    };

    fetchToken();
  });

  redirect("/");
  console.log("redirected");

  return <></>;
}
