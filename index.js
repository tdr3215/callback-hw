h1 = document.querySelector("h1");

const returnStatus = () => {
  return "Book returned";
};

const returnBook = (bookTitle, callback) => {
  console.log(`Returning ${bookTitle}...`);
  setTimeout(() => {
    h1.innerText = callback(bookTitle);
  }, 5000);
};

returnBook("Wizard of Oz", returnStatus);
