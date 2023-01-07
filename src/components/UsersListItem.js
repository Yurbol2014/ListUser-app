import React from "react";

const UsersListItem = ({ user, onDeleted, onEdit }) => {
  const { id, access } = user;

  return (<>     
  <h6 className="text-muted" >{access ? "Есть доступ": "Нет доступа"}</h6>
 <button className="btn btn-secondary" onClick={()=>onEdit(id)} >Редактировать</button>
 <button className="btn btn-danger m-1" onClick={()=>onDeleted(id)}>Удалить</button>
  
  </>)
};

export default UsersListItem;
