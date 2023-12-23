import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Taskone from './components/taskone/taskone';
import Tasktwo from './components/tasktwo/tasktwo';
import Taskthree from './components/taskthree/taskthree';
import Taskfour from './components/taskfour/taskfour';
import Taskfive from './components/taskfive/taskfive';
import Tasksix from './components/tasksix/tasksix';
import Taskseven from './components/taskseven/taskseven';
import { Tasknine } from './components/tasknine/tasknine';
import Mynav from './components/navbar/navbar';
import { Details } from './components/details/details';
import ProductPage from './components/product/product';
import { Feedback } from './components/taskten/feedack';
import { Taskeight } from './components/taskeight/taskeight';
import { Greetings } from './components/taskten/greetings';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App(){
  return(
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductPage/>}></Route>
        <Route path='/details/:id' element={<Details/>}></Route>
      </Routes>
    </BrowserRouter>   */}
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Mynav/>}></Route>
          <Route path='/taskone' element={[<Mynav/>,<Taskone/>]}></Route>
          <Route path='/tasktwo' element={[<Mynav/>, <Tasktwo/>]}></Route>
          <Route path='/taskthree' element={[<Mynav/>, <Taskthree/>]}></Route>
          <Route path='/taskfour' element={[<Mynav/>, <Taskfour/>]}></Route>
          <Route path='/taskfive' element={[<Mynav/>, <Taskfive/>]}></Route>
          <Route path='/tasksix' element={[<Mynav/>, <Tasksix/>]}></Route>
          <Route path='/taskseven' element={[<Mynav/>, <Taskseven/>]}></Route>
          <Route path='/taskeight' element={[<Mynav/>, <Taskeight/>]}></Route>
          <Route path='/tasknine' element={[<Mynav/>, <Tasknine/>]}></Route>
          <Route path='/taskten' element={[<Mynav/>, <Feedback/>]}></Route>
          <Route path='/greetings' element={[<Mynav/>, <Greetings/>]}></Route>
          <Route path='/product' element={[<Mynav/>, <ProductPage/>]}></Route>
          <Route path='/details/:id' element={[<Mynav/>, <Details/>]}></Route>
      </Routes> 
     </BrowserRouter> 

    
    </>

  );
}

export default App;

