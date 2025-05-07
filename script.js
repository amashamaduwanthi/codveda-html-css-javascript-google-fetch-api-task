function searchBooks(){
   const query=document.getElementById('searchInput').ariaValueMax;
   const url=`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

   fetch(url)
   .then(response => response.json())
   .then(data =>displayBooks(data.items))
   .catch(error => console.error("Error fetching books:", error));
}