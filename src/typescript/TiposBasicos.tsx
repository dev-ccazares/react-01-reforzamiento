export const TiposBasicos = () => {
    const nombre = 'Fernando';
    const edad = 35;
    const estaActivo:boolean = true;
    const poderes:string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];
  return (
    <>
        <h1>TiposBasicos</h1>
        {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'No activo'}
        <br/>
        {poderes.join(', ')}
    </>
  )
}
