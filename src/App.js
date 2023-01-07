import axios from "axios";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import UsersList from "./components/usersList/UsersList";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); //(10)количество, пагинация
  const [filtered, setFiltered] = useState(users)


  const userFilter=(access)=>{
   
   if (access==='all'){
      setFiltered(users)
   } else {
      let newUsers = [...users].filter(item=>item.access===access)
      setFiltered(newUsers)
   }
  }

  useEffect(()=>{
   setFiltered(users)
  },[users])

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const res = await axios.get("https://retoolapi.dev/eqsQ4S/users");

      setUsers(res.data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUser = filtered.slice(firstUserIndex, lastUserIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const addItem = (name, lastName, email, birthDate) => {
    const newItem = {
      id: uuidv4(),
      access: false,
      name,
      lastName,
      birthDate,
      email,
    };

    setUsers((prevState) => [...prevState, newItem]);
  };

  const handleDeleted = (id) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  const handleEditList = (id) => {
   
    setUsers((prevState) => {
      const idx = prevState.findIndex((item) => item.id === id);
      const oldItem = prevState[idx];
      const newItem = { ...oldItem, access: !oldItem.access };
      console.log(`${oldItem.access}`);
      return [...prevState.slice(0, idx), newItem, ...prevState.slice(idx + 1)];
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary m-3">Список пользователей</h1>
      <div className=" border border-primary col-sm-6 m-3 ">
        {/*<input className="m-3" type="text" />*/}
        <h6 className="text-primary mb-0 m-3">фильтр доступа пользователей</h6>
        <button className="btn btn-primary m-2" onClick={()=>userFilter('all')}>Все</button>
        <button className="btn btn-success m-2 " onClick={()=>userFilter(true)}>Есть доступ</button>
        <button className="btn btn-secondary m-2" onClick={()=>userFilter(false||undefined)}>Нет доступа</button>
        
      </div>
      <UsersList
        users={currentUser}
        loading={loading}
        onDeleted={handleDeleted}
        onEdit={handleEditList}
       
      />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
       <div className="m-3">
      <button className="btn btn-primary" onClick={prevPage}>
        Предыдущая
      </button>
      <button className="btn btn-primary ms-2" onClick={nextPage}>
        Следующая
      </button>
      <div>
        <button
          onClick={() =>
            addItem("Jorick", "Vartanov", "jjj@com.ru", "28/01/1978")
          }
          className="btn btn-success mt-3"
        >Добавить пользователя
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;
