const Users = ({ users }) => {
    return (
        <div className="users">
            <center><h1>Application Users</h1></center>
            {Array.isArray(users) && users.map((user) => (
                <div className="user" key={user.id}>
                    <div className="user-details">
                        <h2 className="user-name">{user.name}</h2>
                        <h3 className="user-email">{user.email}</h3>
                        <h4 className="user-company">Company: {user.company.name}</h4>
                        <hr/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Users