import React from "react";
import UsersListItem from "../UsersListItem";
import "./UsersList.css";

const UsersList = ({ users, loading, onDeleted, onEdit }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-2  ">
      {users.map((user, i) => (
        <li key={user.id} className="list-group-item  m-3">
          <pre className=" word-break fw-bold col-sm-9 m-1 ">
            <em >{"Имя:"}</em>
            {user.name}
            <em > {"Фамилия:"}</em>
            {user.lastName}
            <em > {"email:"}</em>
            {user.email}
            <em > {"дата рождения:"}</em>
            {user.birthDate}
          </pre>
          <UsersListItem user={user} onDeleted={onDeleted} onEdit={onEdit} />
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
