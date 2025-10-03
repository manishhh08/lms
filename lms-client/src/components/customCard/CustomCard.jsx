import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./card.css";

const CustomCard = () => {
  const { pubBook } = useSelector((store) => store.bookStore);

  return (
    <Link
      to={`/book-detail/${book._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card className="h-100 book-card">
        <Card.Img
          variant="top"
          src={
            book.thumbnail
              ? book.thumbnail.includes("http")
                ? book.thumbnail
                : import.meta.env.VITE_APP_API_URL + "/" + book.thumbnail
              : "/assets/bookloader.gif"
          }
          style={{ objectFit: "cover", height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{book?.bookTitle}</Card.Title>
          <Card.Text>{book?.publishedYear}</Card.Text>
          <Card.Text>
            {book?.description ? book.description.slice(0, 200) + "..." : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CustomCard;
