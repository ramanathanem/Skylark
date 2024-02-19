import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './component/Navbar';
import { Job } from './component/page/Job';
import { Contact } from './component/page/Contact';
import {Canditatedetail} from './component/Canditatedetail'
import { Form } from './component/Form';
import { Notification } from './component/page/Notification';
import { Image } from './component/page/Image';
import Hr from './component/Hr';
import Login from './component/Login';
import { Signin } from './component/Signin';

function App() {
  return (
    <div className="App">
<Navbar/>
<div>

</div>
<Routes>

  <Route path='/' element={<Canditatedetail/>}/>
  <Route path='/login' element={<Login/>}/>
 <Route path='/signin' element={<Signin/>}/>
  <Route path='/notification' element={<Notification/>}/>
  <Route path='/jobs' element={<Job/>}/>
  <Route path='/form' element={<Form/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
    </div>
  );
}

export default App;
