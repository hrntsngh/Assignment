import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Form from '../FirstPage/Form';
import SecondPage from '../SecondPage/SecondPage';


const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/SecondPage" element={<SecondPage/>} />
        </Routes>
      </div> 
    </BrowserRouter>
  )
}

export default Router
