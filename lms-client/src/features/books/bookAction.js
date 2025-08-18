import { getBook } from "./bookAPI";

//get available books
export const fetchBook = async () => {
  let data = await getBook();

  if (data.status === "success") {
    console.log("book retrieved successfully");
  } else {
    console.log("error retrievving books");
  }
};
