import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { getAllBooksActions } from "../../Pages/book/BookAction";
import { CustomModal } from "../custom-modal/CustomModal";
import { EditBooks } from "../edit-book/EditBook";
import { setModalShow } from "../../system/SystemSlice";

export const BookTable = () => {
  const dispatch = useDispatch();

  const { book } = useSelector((state) => state.book);
  useEffect(() => {
    !book.length && dispatch(getAllBooksActions());
  }, [dispatch, book]);

  const [selectedBook, setSelectedBook] = useState({});

  const handleOnEdit = (obj) => {
    setSelectedBook(obj);
    dispatch(setModalShow(true));
  };
  return (
    <>
      <CustomModal heading="Edit Book">
        <EditBooks selectedBook={selectedBook} />
      </CustomModal>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((item) => (
            <tr style={{ textAlign: "center" }}>
              <td>
                <img
                  style={{ width: "200px", height: "200px" }}
                  src={item.url}
                  alt=""
                />
              </td>
              <td>
                <h3>{item.title}</h3>
                <p>
                  {item.name} - {item.year}
                </p>
                <p>{item?.summary}</p>
              </td>
              <td>
                <Button onClick={() => handleOnEdit(item)} variant="warning">
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
