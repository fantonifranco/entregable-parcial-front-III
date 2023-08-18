import { useState } from "react";

function Form({onAddCliente}) {
    
    const[nombre,setNombre]=useState("");
    const[apellido,setApellido]=useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    if (nombre && apellido) {
        onAddCliente({nombre,apellido})
        setNombre("");
        setApellido("");
    }
};

return (
    <form onSubmit={handleSubmit}>

        <input 
        type="text" 
        placeholder="Ingresa tu Nombre" 
        value={nombre} 
        onChange={(e)=>setNombre(e.target.value)} />

        <input 
        type="text" 
        placeholder="Ingresa tu Apellido" 
        value={apellido} 
        onChange={(e)=>setApellido(e.target.value)} />

        <button type="submit">Ingrear Cliente</button>

    </form>
)
}

export default Form;