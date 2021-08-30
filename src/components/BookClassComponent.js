
import React from 'react';
import BookService from '../services/BookService';

class BookClassComponent extends React.Component {

     constructor(props) {
        super(props)
         this.state = {
             books:[]
         }
     }

     componentDidMount() {
       BookService.getBooks().then( (response) => {
           this.setState( {books: response.data})
       } )
     }

     render() {
         return (
             <div>
               <h1 className = "text-center"> {this.props.name} </h1>
               <table className = "table table-striped">
                <thead>
                 <tr>
                   <td>Book ID</td>
                   <td>Title</td>
                   <td>Author</td>
                 </tr>
                </thead>

                <tbody>
                  {
                   this.state.books.map (
                       book =>
                       <tr  key = {book.bookId} >
                         <td>{book.bookId}</td>
                         <td>{book.title}</td>
                         <td>{book.author}</td>
                       </tr>
                   )
                  }
                
                </tbody>
               </table>


             </div>
         )
     }
}

export default BookClassComponent;