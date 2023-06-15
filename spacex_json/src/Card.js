import "./card.css";

function Card(props) {
  const {
    name,
    success,
    flight_number,
    image_url,
    article,
    wikipedia,
    youtube,
  } = props;

  return (
    <div className="Card_Class">
      <h3>{flight_number}</h3>
      <img src={image_url}></img>
      <h3>{`Satellite Name:-  ${name}`}</h3>

      <h3>{`Status:-  ${success}`}</h3>
      <h3>
        Article:- <a href={article}>{article}</a>
      </h3>
      <h3>
        Wikipedia:- <a href={wikipedia}>{wikipedia}</a>
      </h3>
      <h3>
        Youtube:- <a href={youtube}>{youtube}</a>
      </h3>
    </div>
  );
}

export default Card;
