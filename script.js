function searchBooks(){
   const query=document.getElementById('searchInput').value;
   const url=`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

   fetch(url)
   .then(response => response.json())
   .then(data =>displayBooks(data.items))
   .catch(error => console.error("Error fetching books:", error));
}

function displayBooks(books) {
    const bookList = document.getElementById("book-list");
    if (!books || books.length === 0) {
      bookList.innerHTML = "<p>No books found.</p>";
      return;
    }
  
}