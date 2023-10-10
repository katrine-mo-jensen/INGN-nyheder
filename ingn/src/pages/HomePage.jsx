import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Link } from "react-router-dom";
import { getAll } from "../queries/all";
import style from "../pages/grid.module.scss";

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
        const classNames = [
          style.art1,
          style.art2,
          style.art3,
          style.art4,
          style.art5,
          style.art6,
          style.art7,
          style.art8,
          style.art9,
          style.art10,
          style.art11,
          style.art12,
          // Add more class names as needed
        ];

        // Ensure that index does not go out of bounds of classNames array
        const className = classNames[index % classNames.length];

        return (
          <article
            key={index}
            className={className}
            style={{ gridArea: "article" + (index + 1) }}
          >
            <div>
              <h2>{item.title}</h2>
              <p>
                D. {item.date} - af {item.author}
              </p>
              <Link to={`/${item.id}`}>Læs mere</Link>
            </div>
            <img src={item.image.url} alt={item.descriptionOfImage} />
          </article>
        );
      })}
    </section>
  );
};
