const returnStatus = () => {
  console.log("Book returned");
};

const returnBook = (bookTitle, callback) => {
  console.log(`Returning ${bookTitle}...`);
  setTimeout(() => {
    callback(bookTitle);
  }, 5000);
};

returnBook("Wizard of Oz", returnStatus);
