import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
import Swal from 'sweetalert2'

function App() {


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
