import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { getInternational } from "../../queries/international";

export const InternationalPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeInternational"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getInternational),
  });

  console.log(data);

  if (isLoading) {
    return <p>Loading... </p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      {data.ingnContents.map((item, index) => {
        return (
          <article key={index}>
            <h2>{item.title}</h2>
            <p>
              D. {item.date} - af {item.author}
            </p>
            <img src={item.image.url} alt={item.descriptionOfImage} />
            <Link to={`/${item.id}`}>Læs mere</Link>
          </article>
        );
      })}
    </>
  );
};
