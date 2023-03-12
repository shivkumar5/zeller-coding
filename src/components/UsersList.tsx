import { FC } from 'react'
import { UserType } from '../types/User'
import { toTitleCase, USER_ROLE } from '../utils'
import User from './User'

interface UserListProps {
  users: UserType[],
  selectedRole: USER_ROLE,
  loading: boolean
}

const UsersList: FC<UserListProps> = ({ users, selectedRole, loading }) => {

  return (
    <>
      { loading ? (
        <div className='loading'>
          <div className="loading-dot" data-testid="loading-dot"></div>
          <div className="loading-dot" data-testid="loading-dot"></div>
          <div className="loading-dot" data-testid="loading-dot"></div>
        </div>
      ) : (
        <>
          <h2 className='users-heading'>
            { toTitleCase(selectedRole) } User
          </h2>
          <div className='users-container'>
            {
              users.map((user) => (
                <User user={ user } key={ user.id } />
              ))
            }
          </div>
        </>
      ) }
    </>
  )
}

export default UsersList