import { ChangeEvent, FC } from "react";
import { toTitleCase, USER_ROLE } from "../utils";

interface RadioProps {
    id: string;
    name: string;
    value: USER_ROLE;
    selectedRole: string;
    setSelectedRole: (role: USER_ROLE) => void;
  };
  
  const Radio: FC<RadioProps> = ({id, name, value, selectedRole, setSelectedRole}) => (
    <div onClick={ () => setSelectedRole(value) } className={'radio-button'}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={selectedRole === value }
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSelectedRole(e.target.value as USER_ROLE)}
      />
      <label htmlFor={id}>
        {toTitleCase(value)}
      </label>
    </div>
  );

  export default Radio