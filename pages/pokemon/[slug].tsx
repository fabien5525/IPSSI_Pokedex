import { Loader } from "components";
import { FetchPokemon } from "containers";
import { useRouter } from "next/router";



const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (typeof slug !== "string") return <Loader />
  return <FetchPokemon pokemon={slug}/>;
};

export default Post;
