import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';

export default function Root() {
  return (
    <>
    
   

     <Menu />
    
     
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}