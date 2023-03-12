import { render, screen } from '@testing-library/react';
import UsersList from '../UsersList';
import { UserType } from '../../types/User';
import { USER_ROLE } from '../../utils';

const mockedUsers: UserType[] = [
  {
    name: 'Shiv Kumar',
    role: USER_ROLE.ADMIN,
    email: 'shiv@test.com',
    id:'1233'
  }
];

describe('UsersList component', () => {
  it('should display loading dots when loading is true', () => {
    const props = { users: [], selectedRole: USER_ROLE.ADMIN, loading: true };
    render(<UsersList {...props} />);

    const loadingDots = screen.getAllByTestId('loading-dot');
    expect(loadingDots).toHaveLength(3);
  });

  it('should display users when loading is false', () => {
    const props = { users: mockedUsers, selectedRole: USER_ROLE.ADMIN, loading: false };
    render(<UsersList {...props} />);

    const heading = screen.getByText('Admin User');
    expect(heading).toBeInTheDocument();

    const users = screen.getAllByTestId('user-component');
    expect(users).toHaveLength(1);

    const userRole = screen.getByText('Admin');
    expect(userRole).toBeInTheDocument();
  });
});
