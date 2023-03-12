import { FC } from "react"
import { USER_ROLE } from "../utils"
import Radio from "./Radio"


interface UserSelectorProps {
  selectedRole: string
  setSelectedRole: (role: USER_ROLE) => void
}

const UserSelector: FC<UserSelectorProps> = ({ selectedRole, setSelectedRole }) => (
  <div className="user-selector-container">
    <h2 className="user-selector-heading">
      User Types
    </h2>
    <form className="user-selector-form">
      <Radio id={USER_ROLE.ADMIN} name="user-type" value={USER_ROLE.ADMIN} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
      <Radio id={USER_ROLE.MANAGER} name="user-type" value={USER_ROLE.MANAGER} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
    </form>
  </div>
)

export default UserSelector
