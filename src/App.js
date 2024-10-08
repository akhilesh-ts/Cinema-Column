import { RouterProvider } from 'react-router-dom';
import appRouter from './Router/AppRouter';
function App() {
  return (
    <RouterProvider router={appRouter}/>
   
  );
}

export default App;
