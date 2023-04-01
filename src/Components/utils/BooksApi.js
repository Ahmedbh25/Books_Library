import axios from "axios";

export const getBooks = async (tagelem, intype) => {
    const Books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${intype}${tagelem}&key=AIzaSyDKG8AN_GKcPk-V3AaA0DXYvuJ2kpdXUG8`)
    return Books.data.items;
}

/*
import axios from "axios";

export const getBooks = async (with, search) => {
  const response = await axios.get("https://api-url.com/books");
  return response.data;
};

*/