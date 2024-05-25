import './App.css';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route  } from 'react-router-dom'
import Landing from './Landing';
import Dashboard from './Dashboard';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ Math.random() < 0.5 ? <Landing/> : <Dashboard/> } />
));

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
