import { useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqRes.interfase";
import { reqResApi } from "../api/reqRes";

export const useUsuario = () => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    
    const paginmaRef = useRef(1);

    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params:{
                page: paginmaRef.current
                }
            });
            if(resp.data.data.length > 0){
                setUsuarios(resp.data.data);
            }else{
                paginmaRef.current--;
                alert('No hay registros');
            }
    }

    const siguiente = () => {
        paginmaRef.current++;
        cargarUsuarios();
    }

    const anterior = () => {
        if(paginmaRef.current > 1){
            paginmaRef.current--;
            cargarUsuarios();
        }else{
            alert('No hay registros')
        }
    }

    return {
        cargarUsuarios,
        usuarios,
        siguiente,
        anterior
    }

}
