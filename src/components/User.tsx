import { FC, memo } from "react"
import { UserType } from "../types/User"
import { getFirstCharacterFromName, toTitleCase } from "../utils";

interface UserProps {
  user: UserType
}
const User: FC<UserProps> = memo(({ user }) => {
  const { name, role } = user;
  return (
    <div className="user-container" data-testid="user-component">
      <div className="user-avatar">{
        getFirstCharacterFromName(name)
      }</div>
      <div className="user-info">
        <p>{ name }</p>
        <p className="user-role">{ toTitleCase(role) }</p>
      </div>
    </div>
  );
});


export default User