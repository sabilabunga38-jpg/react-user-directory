type UserCardProps = {
  name:string;
  username:string;
  email:string;
  onClick:()=>void;
};

function UserCard({
  name,
  username,
  email,
  onClick
}:UserCardProps){

  return(
    <div className="user-card">

      <div className="avatar">
        {name.charAt(0)}
      </div>

      <div className="user-info">
        <h3>{name}</h3>
        <p>@{username}</p>
        <span>{email}</span>
      </div>

      <button 
        className="detail-btn"
        onClick={onClick}
      >
        Detail
      </button>

    </div>
  )
}

export default UserCard;