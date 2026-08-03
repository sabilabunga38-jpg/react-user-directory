import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

import "./App.css";


function App(){

  const [users,setUsers] = useState<any[]>([]);
  const [selectedUser,setSelectedUser] = useState<any>(null);

  const [search,setSearch] = useState("");

  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");


  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>{

        if(!response.ok){
          throw new Error("Failed");
        }

        return response.json();

      })
      .then((data)=>{

        setUsers(data);
        setLoading(false);

      })
      .catch(()=>{

        setError("Gagal mengambil data");
        setLoading(false);

      });


  },[]);



  const filteredUsers = users.filter((user)=>
    user.name
    .toLowerCase()
    .includes(search.toLowerCase())
  );



  if(loading){

    return (
      <h2 className="loading">
        Loading...
      </h2>
    );

  }


  if(error){

    return (
      <h2 className="error">
        {error}
      </h2>
    );

  }



  return (

    <div className="app">

      <div className="container">


        <Header />


        <SearchBar
          search={search}
          setSearch={setSearch}
        />


        <UserList
          users={filteredUsers}
          setSelectedUser={setSelectedUser}
        />



        {
          selectedUser && (
            <UserDetail
              user={selectedUser}
            />
          )
        }


      </div>

    </div>

  );

}


export default App;