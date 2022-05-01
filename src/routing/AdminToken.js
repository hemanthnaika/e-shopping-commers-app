import { useSelector } from 'react-redux';
import Admin from '../components/admin/Admin';

export default function AdminCheck(){
  const { role } = useSelector(state => state.admin)
  return(
    <div>
      {role?<Admin/>:
      <h1>
        404 Not Found
        
        </h1>}
    </div>
  )
}