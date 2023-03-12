import { render, screen } from '@testing-library/react';
import { USER_ROLE } from '../../utils';
import User from '../User';

const user = {
  name: 'Shiv Kumar',
  role: USER_ROLE.ADMIN,
  email: 'shiv@test.com',
  id:'1233'
};

describe('User', () => {
  it('should display the correct name and first letter avatar', () => {
    render(<User user={user} />);
    
    const avatar = screen.getByText('S');
    const name = screen.getByText(user.name);
    
    expect(avatar).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('should display the correct role in title case', () => {
    render(<User user={user} />);
    
    const role = screen.getByText('Admin');
    
    expect(role).toBeInTheDocument();
  });
});
