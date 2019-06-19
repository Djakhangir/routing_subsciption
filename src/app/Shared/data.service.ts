import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public bookList = [
    {
   id: 1,
   bookName:'Count of Monte Cristo',
   authorName: 'Alexander Dumas',
   isbnCode:'@12334567',
   availableBooks:'5',
   publishingDate:'1/1/1991',
   category: 'Fiction',
   flag: false,
    }, 
    {
   id: 2,
   bookName:'Monte Cristo in the Count',
   authorName: 'Dumas Alex',
   isbnCode:'@23345678',
   availableBooks:'3',
   publishingDate:'1/2/1991',
   category: 'History',
   flag: false,
    },
    {
   id: 3,
   bookName:'Cristo of the Monte',
   authorName: 'Dumas Someone',
   isbnCode:'@3456789',
   availableBooks:'1',
   publishingDate:'12/1/1991',
   category: 'Romance',
   flag: false,
    }
 ]
  constructor() { }

  getListOfBooks()
{
  return this.bookList
}
}
