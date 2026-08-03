type UserDetailProps = {
  user:any;
};


function UserDetail({user}:UserDetailProps){

  return (
    <div className="user-detail">

      <h2>{user.name}</h2>

      <p>
        Username : {user.username}
      </p>

      <p>
        Email : {user.email}
      </p>

      <p>
        Phone : {user.phone}
      </p>

      <p>
        Website : {user.website}
      </p>

      <p>
        City : {user.address.city}
      </p>

      <p>
        Company : {user.company.name}
      </p>

    </div>
  );
}


export default UserDetail;