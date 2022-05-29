import { FetchPokemon } from "containers";
import { useRouter } from "next/router";



const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  if (typeof slug !== "string") return <p>Error : Bad type</p>
  return <FetchPokemon pokemon={slug}/>;
};

export default Post;
