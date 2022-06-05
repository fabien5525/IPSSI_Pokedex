import { FetchListByType } from "containers";
import { useRouter } from "next/router";



const Post = () => {
  const router = useRouter();
  const { type } = router.query;
  if (typeof type !== "string") return <p>Error : Bad type</p>
  return <FetchListByType type={type}/>;
};

export default Post;
