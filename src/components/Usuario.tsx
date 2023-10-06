import { useEffect } from 'react';
import {  Usuario } from '../interfaces/reqRes.interfase';
import { useUsuario } from '../hooks/useUsuario';

export const Usuarios = () => {

    const {cargarUsuarios,usuarios,siguiente, anterior} = useUsuario();

    useEffect(() => {
        cargarUsuarios();
    } , [])

    const renderItem = (usuario:Usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img src={usuario.avatar} alt={usuario.first_name} style={{width:65, borderRadius:100}}/>
                </td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(renderItem)}
            </tbody>
        </table>
        <button className='btn btn-warning' onClick={anterior}>Anterior</button>
        &nbsp;
        <button className='btn btn-primary' onClick={siguiente}>Siguientes</button>
    </>
  )
}
