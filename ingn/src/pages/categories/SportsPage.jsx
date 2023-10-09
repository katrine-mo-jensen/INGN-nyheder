import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { getSport } from "../../queries/sport";

export const SportsPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["giveMeSport"],
    queryFn: async () =>
      request(import.meta.env.VITE_PUBLIC_URL_ID, getSport),
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
            <Link>Læs mere</Link>
          </article>
        );
      })}
    </>
  );
};
