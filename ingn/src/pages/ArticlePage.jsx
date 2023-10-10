import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useParams } from "react-router-dom";
import { oneArticle } from "../queries/oneArticle";

export const OneArticle = () => {
  const { id } = useParams();

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
  return (
    <article>
      <img src={data.ingnContent.image.url} alt="" />
      <h2>{data.ingnContent.title}</h2>
      <p>
        D. {data.ingnContent.date} - af {data.ingnContent.author}
      </p>
      <section
        dangerouslySetInnerHTML={{ __html: data.ingnContent.content.html }}
      ></section>
    </article>
  );
};
