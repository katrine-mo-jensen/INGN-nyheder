import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useParams, useNavigate } from "react-router-dom";
import { oneArticle } from "../queries/oneArticle";
import style from "../pages/articlePage.module.scss";

export const OneArticle = () => {
  const { id } = useParams();

  let navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeOneArticle"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, oneArticle, { id: id }),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data.ingnContent) {
    return navigate("/404");
  }

  return (
    <article className={style.oneArticle}>
      <img
        src={data.ingnContent.image.url}
        alt={data.ingnContent.descriptionOfImage}
      />
      <div className={style.titleAndDate}>
        <h2>{data.ingnContent.title}</h2>
        <p>
          D. {data.ingnContent.date} - af {data.ingnContent.author}
        </p>
      </div>
      <section
        className={style.content}
        dangerouslySetInnerHTML={{ __html: data.ingnContent.content.html }}
      />
    </article>
  );
};
