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
    bookList.innerHTML = books.map(book => {
        const info = book.volumeInfo;
        const thumbnail = info.imageLinks?.thumbnail || "https://via.placeholder.com/128x195?text=No+Image";
        
        return `
          <div class="card">
            <img src="${thumbnail}" alt="${info.title}" />
            <h3>${info.title || "No title"}</h3>
            <p><strong>Author:</strong> ${info.authors ? info.authors.join(", ") : "Unknown"}</p>
            <p><strong>Published:</strong> ${info.publishedDate || "N/A"}</p>
          </div>
        `;
      }).join("");
  
}