import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams<{ id: string }>();

  return <div>book{id}</div>;
}
export default Book;
