import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}

      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};
//   if (users.length > 0) {
//     return (
//       <div>
//         {users.map((user) => (
// <div key={user.id}>
//   <p>{user.name}</p>
//   <p>{user.username}</p>
// </div>
//         ))}
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div>
//         <p>Loading....</p>
//       </div>
//     );
//   }
// };

export default Users;
