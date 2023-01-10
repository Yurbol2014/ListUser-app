import React from "react";


const UserFilter=({userFilter})=>{

   return(
      <div className=" border border-primary col-sm-6 m-3 ">
        {/*<input className="m-3" type="text" />*/}
        <h6 className="text-primary mb-0 m-3">фильтр доступа пользователей</h6>
        <button className="btn btn-primary m-2" onClick={()=>userFilter('all')}>Все</button>
        <button className="btn btn-success m-2 " onClick={()=>userFilter(true)}>Есть доступ</button>
        <button className="btn btn-secondary m-2" onClick={()=>userFilter(false)||undefined}>Нет доступа</button>
        
      </div>
   )
}

export default UserFilter