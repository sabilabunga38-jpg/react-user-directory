import UserCard from "./UserCard";


type UserListProps = {
  users: any[];
  setSelectedUser: (user:any)=>void;
};


function UserList({
  users,
  setSelectedUser
}:UserListProps) {

  return (
    <div className="user-list">

      {
        users.map((user)=>(
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            onClick={()=>setSelectedUser(user)}
          />
        ))
      }

    </div>
  );
}


export default UserList;