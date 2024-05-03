import ReactDOM from 'react-dom/client';
import Board from './components/Board';
import { createContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { initialTasksState, tasksReducer } from './reducers/tasks-reducer';
import { useReducer } from 'react';
import './styles/index.css';

export const GlobalTaskData = createContext(null);

function Layout() {
  const [state, dispatch] = useReducer(tasksReducer, initialTasksState);
  useEffect(() => {
    localStorage.setItem('STATE', JSON.stringify(state));
  }, [state]);

  return (
    <>
      <GlobalTaskData.Provider value={{ state, dispatch }}>
        <div style={{ minHeight: '100vh' }}>
          <div id="page-content">
            <Outlet />
          </div>
        </div>
      </GlobalTaskData.Provider>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Board />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
