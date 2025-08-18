export const getBookDetail = (req, res) => {
  res.send({
    status: "success",
    message: "Book found",
    book: req.book,
  });
};
