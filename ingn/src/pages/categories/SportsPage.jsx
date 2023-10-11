import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getSport } from "../../queries/sport";
import style from "../../pages/grid.module.scss";
import { CategoryArticles } from "../../components/props/categoryArticles";

export const SportsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeSport"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getSport),
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
