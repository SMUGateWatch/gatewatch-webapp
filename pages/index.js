import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      id: "29612150",
      msg: "Hi there!",
    }),
  });
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function App() {
  const { data, error } = useSWR(`/api/user/login`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{data.message}</div>;
}
