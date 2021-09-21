// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooksbyTitle = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}}&maxResults=40`);
  };

  export const searchGoogleBooksbyISBN = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${query}&maxResults=40`);
  };