import { QUERY_CHARATERS, QUERY_EPISODES } from "@/api/QueriesRickAndMorty";
import { useQuery } from "@/node_modules/@apollo/client/index";

const Home = () => {
  const { data } = useQuery(QUERY_EPISODES, {
    variables: { ids: [1, 2] },
  });

  const { data: characters } = useQuery(QUERY_CHARATERS, {
    variables: { page: 2 },
  });

  console.log(characters);
  return <div>Prueba</div>;
};

export default Home;
