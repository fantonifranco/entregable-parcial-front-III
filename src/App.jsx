import { useState } from 'react'
import Form from './Form'
import Card from "./Card";
import './App.css';

function App() {

  const [clientes,setClientes]=useState([]);
  const [error, setError] = useState(false);

  const addCliente = (cliente) => {
    if (cliente.nombre.trim().length >= 3 && cliente.apellido.length >= 6) {
      setClientes([...clientes, cliente]);
      setError(false);
    } else {
      setError('Por favor chequea que la información sea correcta');
    }  
  };

  return (
    <div className="App">
      <h1>Carga de Clientes</h1>
      <Form onAddCliente={addCliente}/>
      <Card clientes={clientes}/>
      <p className="error">{error}</p>
    </div>
  );
}

export default App;
