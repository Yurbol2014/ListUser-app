import React from "react";


const Pagination = ({usersPerPage, totalUsers, paginate}) => {
   const pageNumbers = []

   for (let i=1; i<= Math.ceil(totalUsers/usersPerPage); i++){
      pageNumbers.push(i)
   }
   return (
      <div className="m-3">
   <ul className="pagination">{
      pageNumbers.map(number =>(
         <li className="page-item" key ={number}>
            <a href="!#" className="page-link" onClick={()=>paginate(number)}>
               {number}
            </a>
         </li>
      ))
   }</ul>
      </div>
   )
}


 export default Pagination