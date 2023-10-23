import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";

import { getPolitics } from "../../queries/politics";
import style from "../../pages/grid.module.scss";
import { CategoryArticles } from "../../components/props/categoryArticles";

export const PoliticsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMePolitics"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getPolitics),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <section className={style.articleWrapper}>
      <CategoryArticles articleList={data} />
    </section>
  );
};
