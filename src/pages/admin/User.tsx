import { useAtom } from 'jotai';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteUserById, getAllUsers } from '../../api/userAPI';
import { tokenJWT } from '../../global/logged';
import { User } from '../../global/types'; // Assuming you have a type definition for User

const UserPage = () => {
  const queryClient = useQueryClient();

  const [token] = useAtom(tokenJWT);

  // fetch query
  const { isLoading, error, data } = useQuery<User[], Error>('users', () => getAllUsers(token));

  // delete query
  const { mutate } = useMutation(deleteUserById, {
    onSuccess: () => {
      // Invalidate the query cache to refetch the data
      console.log('deleted');
      queryClient.invalidateQueries(['users']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">User List</h1>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user._id}</td>
              <td className="border px-4 py-2">{user.firstname}</td>
              <td className="border px-4 py-2">{user.lastname}</td>
              {/* <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone}</td> */}
              <td className="border px-4 py-2">
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure?')) {
                     //  mutate({ id: user._id, token: token });
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
