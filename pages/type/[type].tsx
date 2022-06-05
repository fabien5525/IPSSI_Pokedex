import { Loader } from "components";
import { FetchListByType } from "containers";
import { useRouter } from "next/router";



const Post = () => {
  const router = useRouter();
  const { type } = router.query;
  if (typeof type !== "string") return <Loader />
  return <FetchListByType type={type}/>;
};

export default Post;
