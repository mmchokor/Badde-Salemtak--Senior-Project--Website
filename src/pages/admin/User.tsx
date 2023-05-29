// import { useAtom } from 'jotai';
// import { useMutation, useQuery, useQueryClient } from 'react-query';
// import { deleteUserById, getAllUsers } from '../../api/userAPI';
// import { tokenJWT } from '../../global/logged';
// import { User } from '../../global/types'; // Assuming you have a type definition for User

const UserPage = () => {
  // const queryClient = useQueryClient();

  // const [token] = useAtom(tokenJWT);

  // // fetch query
  // const { isLoading, error, data } = useQuery<User[], Error>('users', () => getAllUsers(token));

  // // delete query
  // const { mutate } = useMutation(deleteUserById, {
  //   onSuccess: () => {
  //     // Invalidate the query cache to refetch the data
  //     console.log('deleted');
  //     queryClient.invalidateQueries(['users']);
  //   },
  // });

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">User List</h1>
      
    </div>
  );
};

export default UserPage;
