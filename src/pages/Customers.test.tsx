import { API } from "aws-amplify";
import { USER_ROLE } from "../utils";
import { fetchCustomers } from "./Customers";

describe('fetchCustomers', () => {
  it('should return an array of customers', async () => {
    const customers = await fetchCustomers();
    expect(Array.isArray(customers)).toBe(true);
  });

  it('should return an empty array when an error occurs', async () => {
    jest.spyOn(API, 'graphql').mockImplementation(() => Promise.reject());
    const customers = await fetchCustomers();
    expect(customers).toEqual([]);
  });
});

// describe('<Customers />', () => {
//   let wrapper: any;

//   beforeAll(() => {
//     wrapper = mount(
//       <Router>
//         <Customers />
//       </Router>
//     );
//   });

//   afterAll(() => {
//     wrapper.unmount();
//   });

//   it('should render without errors', () => {
//     expect(wrapper.length).toBe(1);
//   });

//   it('should show the list of customers based on selectedRole prop', async () => {
//     jest.spyOn(API, 'graphql').mockImplementation(() =>
//       Promise.resolve({
//         data: {
//           listZellerCustomers: {
//             items: [
//               { id: '1', name: 'John Doe', role: USER_ROLE.ADMIN },
//               { id: '2', name: 'Jane Smith', role: USER_ROLE.MANAGER },
//               { id: '3', name: 'Bob Johnson', role: USER_ROLE.MANAGER },
//             ],
//           },
//         },
//       })
//     );

//     // Select each role in turn and check that the correct customers are displayed
//     wrapper.find(UserSelector).props().setSelectedRole(USER_ROLE.ADMIN);
//     expect(wrapper.find('.user-container')).toHaveLength(1);

//     wrapper.find(UserSelector).props().setSelectedRole(USER_ROLE.MANAGER);
//     expect(wrapper.find('.user-container')).toHaveLength(2);
//   });

//   it('should show loading message while waiting for customers', async () => {
//     jest.spyOn(API, 'graphql').mockImplementation(() => new Promise(() => {}));

//     expect(wrapper.text()).toContain('Loading...');
//   });
// });
