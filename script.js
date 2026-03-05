let books = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    status: "Reading",
    rating: 0
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
  },
  {
    title: "Who Moved My Cheese?",
    author: "Spencer Johnson",
    image: "https://imgv2-2-f.scribdassets.com/img/document/464654727/original/22f18e54b7/1?v=1",
    status: "Completed",
    rating: 0

  },
  {
  title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "https://m.media-amazon.com/images/I/71g4O8Q+r0L._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
},
{
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://m.media-amazon.com/images/I/81N9xAIkohL._AC_UF1000,1000_QL80_.jpg",
    status: "Reading",
    rating: 0
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    image: "https://m.media-amazon.com/images/I/61IxJuRI39L._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://static.wixstatic.com/media/8cc233_da3154cf2cdd4e979a841903fb3cf770~mv2.jpg/v1/fill/w_1585,h_2400,al_c,q_90/The%20Alchemist%20cover.jpg",
    status: "Completed",
    rating: 0

  },
  {
  title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    image: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
},
{
    title: "Deep Work",
    author: "Cal Newport",
    image: "https://m.media-amazon.com/images/I/71wSsgrOIhL._AC_UF1000,1000_QL80_.jpg",
    status: "Reading",
    rating: 0
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    image: "https://m.media-amazon.com/images/I/71NBZIExBCL._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
  },
  {
    title: "The 5 AM Club",
    author: "Robin Sharma",
    image: "https://m.media-amazon.com/images/I/71wKvkBthPL._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0

  },
  {
  title: "Can’t Hurt Me",
    author: "DDavid Goggins",
    image: "https://m.media-amazon.com/images/I/81YJFNc54lL._AC_UF1000,1000_QL80_.jpg",
    status: "Completed",
    rating: 0
}

];

function displayBooks(list = books) {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  list.forEach((book, index) => {

    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<span onclick="setRating(${index}, ${i})">
        ${i <= book.rating ? "★" : "☆"}
      </span>`;
    }

    bookList.innerHTML += `
      <div class="book-card">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <div class="status">Status: ${book.status}</div>
        <div class="stars">${stars}</div>
        <button onclick="changeStatus(${index})">Change Status</button>
        <button onclick="deleteBook(${index})">Delete</button>
      </div>
    `;
  });
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const image = document.getElementById("image").value;

  if (!title || !author || !image) {
    alert("Please fill all fields");
    return;
  }

  books.push({
    title,
    author,
    image,
    status: "To Read",
    rating: 0
  });

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("image").value = "";

  displayBooks();
}

function changeStatus(index) {
  if (books[index].status === "To Read") {
    books[index].status = "Reading";
  } else if (books[index].status === "Reading") {
    books[index].status = "Completed";
    alert("🎉 You finished the book!");
  } else {
    books[index].status = "To Read";
  }

  displayBooks();
}
function searchBooks() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(value) ||
    book.author.toLowerCase().includes(value)
  );

  displayBooks(filtered);
}
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}

function setRating(index, rating) {
  books[index].rating = rating;
  displayBooks();
}

function searchBooks() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(value) ||
    book.author.toLowerCase().includes(value)
  );

  displayBooks(filtered);
}

displayBooks();