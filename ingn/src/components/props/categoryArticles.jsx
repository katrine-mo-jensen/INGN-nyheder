import style from '../../pages/grid.module.scss'
import { Link } from "react-router-dom";

export const CategoryArticles = (props) => {
    const data = props.articleList;

    console.log(props, data)
    
    return (
        <div className={style.categoryArticles}>
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
        ];

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
              <Link to={`/article/${item.id}`}>Læs mere</Link>
            </div>
            <img src={item.image.url} alt={item.descriptionOfImage} />
          </article>
        );
      })}
        </div>

    )
}