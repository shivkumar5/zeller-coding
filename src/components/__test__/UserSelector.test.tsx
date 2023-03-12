/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from "@testing-library/react";
import UserSelector from "../UserSelector";
import { toTitleCase, USER_ROLE } from "../../utils";

describe("UserSelector", () => {
  const setSelectedRole = jest.fn();
  const selectedRole = USER_ROLE.ADMIN;

  it("renders the component without errors", () => {
    const { getByText, getAllByRole } = render(
      <UserSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    );

    expect(getByText("User Types")).toBeInTheDocument();
    const radios = getAllByRole("radio");
    expect(radios).toHaveLength(2);
  });

  it("sets the name attribute of radio inputs to 'user-type'", () => {
    const { getAllByRole } = render(
      <UserSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    );
    
    const radioInputs = getAllByRole("radio") as HTMLInputElement[];
    expect(radioInputs[0].name).toBe("user-type");
    expect(radioInputs[1].name).toBe("user-type");
  })

  it("sets the value attribute of radio inputs to 'ADMIN' or 'MANAGER'", () => {
    const { getAllByRole } = render(
      <UserSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    );
    
    const radioInputs = getAllByRole("radio") as HTMLInputElement[];
    expect(radioInputs[0].value).toBe(USER_ROLE.ADMIN);
    expect(radioInputs[1].value).toBe(USER_ROLE.MANAGER);
  })
 
  it("checks the selected role's radio button", () => {
    const { getByLabelText } = render(
      <UserSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    );
    
    const adminRadio = getByLabelText(toTitleCase(USER_ROLE.ADMIN)) as HTMLInputElement;
    expect(adminRadio.checked).toBe(true);

    const managerRadio = getByLabelText(toTitleCase(USER_ROLE.MANAGER)) as HTMLInputElement;
    expect(managerRadio.checked).toBe(false);
  })

  it("calls setSelectedRole with the selected role when clicking a radio button", () => {
    const { getByLabelText } = render(
      <UserSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />
    );
    
    const managerRadio = getByLabelText(toTitleCase(USER_ROLE.MANAGER));
    fireEvent.click(managerRadio);
    
    expect(setSelectedRole).toHaveBeenCalledWith(USER_ROLE.MANAGER);
  })
});
