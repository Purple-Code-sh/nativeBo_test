
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes'; // Importa tu archivo de rutas

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;