import fetch from "node-fetch";

const API_END_POINT = process.env.API_END_POINT;

export default async function handler(req, res) {
  const { username } = req.query;

  const response = await fetch(API_END_POINT, {
    headers: {
      "Content-Type": "application/json",
      "x-username": username,
    },
  });

  if (response.ok) {
    console.log(API_END_POINT);
    console.log(response);
    const data = await response.json();
    res.status(200).json(data);
  }
}
