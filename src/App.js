import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Grandpa from './Components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
