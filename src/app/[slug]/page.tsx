import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(`/api/links/${slug}`, fetcher);

  if (error) return <div>Link not found</div>;
  if (!data) return <div>Loading...</div>;

  if (data) router.push(data.url);
}
