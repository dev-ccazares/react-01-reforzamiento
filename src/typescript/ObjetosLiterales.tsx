interface Direccion {
    pais: string;
    casano: number;
}

interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: 'Fernando',
        edad: 35,
        direccion: {
            pais: 'Costa Rica',
            casano: 615
        }
    }
  return (
    <>
    <h3>Objetos Literales</h3>
    <code>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
    </code>
    </>
  )
}
