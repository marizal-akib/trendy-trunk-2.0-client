
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

const Users = () => {



    const {isPending, data :users} = useQuery({
        queryKey:['users'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/user');
            return res.json();
        }
    })
    // const [users , setUsers] = useState();



    // useEffect(() =>{
    //     fetch('http://localhost:5000/user')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setUsers(data)
    //     })


    // },[])
    // console.log( users);


    // const handleDelete = id => {
    //     fetch(` http://localhost:5000/user/${id}`,{
    //         method: 'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.deletedCount >0){
    //             console.log('Deleted');
    //             const usersLeft = users.filter(user=>user._id !== id);
    //             setUsers(usersLeft);
    //         }
    //     })
    // }
if(isPending){
    return  <span className="loading loading-bars loading-lg"></span>
}

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Created At</th>
            <th>Last Login At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr key={user._id}>
              <th>1</th>
              <td>{user.email}</td>
              <td>{user.createAt}</td>
              <td>{user.lastLoggedAt}</td>
              <td>
                <button onClick={() => handleDelete(user._id)} className="btn">
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
