import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { getSociety } from "../../queries/society";

export const SocietyPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeSociety"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getSociety),
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
            <img src={item.image.url} alt="" />
            <Link to={`/${item.id}`}>Læs mere</Link>
          </article>
        );
      })}
    </>
  );
};
