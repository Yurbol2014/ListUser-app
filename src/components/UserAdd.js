import React from "react";


const UserAdd=({addItem,prevPage,nextPage})=>{

   return(
      <div className="m-3">
      <button className="btn btn-primary" onClick={()=>prevPage()}>
        Предыдущая
      </button>
      <button className="btn btn-primary ms-2" onClick={()=>nextPage()}>
        Следующая
      </button>
      <div>
        <button
          onClick={() =>
            addItem("Jorick", "Vartanov", "jjj@com.ru", "28/01/1978")
          }
          className="btn btn-success mt-3"
        >
          Добавить пользователя
        </button>
      </div>
    </div>
   )

}

export default UserAdd;