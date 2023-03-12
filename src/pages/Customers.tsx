import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useMemo, useState } from 'react'
import { ListZellerCustomers } from '../graphql/query';
import { UserType } from '../types/User';

import UserSelector from '../components/UserSelector'
import UsersList from '../components/UsersList'
import { USER_ROLE } from '../utils';

  export async function fetchCustomers() {
    try {
      const customers: any = await API.graphql(
        graphqlOperation(ListZellerCustomers)
      );
      return customers?.data?.listZellerCustomers?.items || [];
    } catch (err) {
      console.log('error fetching customers', err);
      return []; // return an empty array on error
    }
  }
  
  const Customers = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [selectedRole, setSelectedRole] = useState<USER_ROLE>(USER_ROLE.ADMIN);
    const [loading, setLoading] = useState<boolean>(true)
  
    useEffect(() => {
      async function fetchAndSetCustomers() {
        const customers = await fetchCustomers();
        setUsers(customers);
        setLoading(false)
      }
      fetchAndSetCustomers();
    }, []);
  
    const selectedCustomers = useMemo(
      () => users.filter((user) => user.role === selectedRole),
      [selectedRole, users]
    );
  
    return (
      <div data-testid="customers-component">
        <UserSelector
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
        <UsersList users={selectedCustomers} selectedRole={selectedRole} loading={loading} />
      </div>
    );
  };

export default Customers