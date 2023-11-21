import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes/Router'
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

//QueryClient se utiliza para administrar y realizar consultas de datos en una aplicación React, 
//lo que facilita la gestión de datos en caché y la interacción con una API.
const queryClient = new QueryClient();
//de React DOM para crear un "root" en el elemento HTML con el id "root". Este "root" es donde se renderizará la aplicación React.
ReactDOM.createRoot(document.getElementById('root')).render(
  //Esto es un componente especial proporcionado por React que se utiliza para activar el "modo estricto"
  <React.StrictMode>
    {/* se utiliza para proporcionar la instancia de queryClient creada anteriormente a la aplicación. Esto permite que todos los componentes */}
    {/*  dentro de la aplicación accedan al cliente de consulta para realizar consultas y gestionar el estado de los datos de manera coherente. */}
     <QueryClientProvider client={queryClient}>
     {/* Es probable que router sea una instancia del enrutador de React Router, 
     que se utiliza para manejar las rutas y la navegación en la aplicación. */}
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
