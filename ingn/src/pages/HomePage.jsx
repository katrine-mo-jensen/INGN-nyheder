import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { getAll } from "../queries/all";
import style from "../pages/homePage.module.scss";

export const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeAll"],
    queryFn: async () => request(import.meta.env.VITE_PUBLIC_URL_ID, getAll),
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
      {data.ingnContents.map((item, index) => {
        return (
          <article key={index} style={{gridArea: "article" + (index + 1)}} >
            <h2>{item.title}</h2>
            <p>
              D. {item.date} - af {item.author}
            </p>
            <img src={item.image.url} alt={item.descriptionOfImage} />
            <Link to={`/${item.id}`}>Læs mere</Link>
          </article>
        );
      })}
    </section>
  );
};
