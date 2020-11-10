import useSWR from "swr";
export default function useSearch(value) {
  const { data, error } = useSWR(`/api/search/${value}`, (url) =>
    fetch(url).then((res) => res.json())
  );
  return{
      result: data,
      err: error
  }
}
