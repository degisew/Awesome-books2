class AwesomeBooks {
  constructor(title, author) {
    this.book = {
      title,
      author,
    };
  }

  static allBooks = [];

  static addBook = (title, author) => {
    const bookObj = new AwesomeBooks(title, author);
    this.allBooks.push(bookObj.book);
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
  };

  static displayBookList = () => {
    // localStorage.removeItem('allBooks');
    const localStorageData = JSON.parse(localStorage.getItem('allBooks'));
    if (localStorageData !== null) {
      this.allBooks = localStorageData;
    } else {
      const listDiv = document.querySelector('.list-div');
      listDiv.innerHTML = '<h3>Oops! You have no Awesome books yet.</h3>';
    }
    return this.allBooks;
  };

  static removeBook = (removeId) => {
    const filtered = this.allBooks.filter((singleVal, index) => index !== removeId);
    localStorage.setItem('allBooks', JSON.stringify(filtered));
  };
}

export default AwesomeBooks;
