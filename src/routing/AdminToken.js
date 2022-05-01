import { Button } from "@chakra-ui/react";
import { useSelector } from 'react-redux';
import Admin from "../components/admin/Admin";

const AdminCheck = () => {
  const { role } = useSelector(state => state.admin)
  return (
   <>
      {role?<Admin/>:
      <div>
<h1>400 Not Found</h1>
        </div>
      }
        
       </> 
 
    );
}
 
export default AdminCheck;