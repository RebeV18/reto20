# Reto 20: Mi Custom Hook

Crea un custom hook llamado useFetch que acepte una URL como parámetro y devuelva un objeto con tres propiedades: data, loading y error. El data es el resultado de la solicitud a la URL, el loading es un valor booleano que indica si la solicitud está en proceso y el error es un objeto que contiene información sobre cualquier error que ocurra durante la solicitud.

Puedes usar la función fetch() para realizar la solicitud HTTP a la URL proporcionada como parámetro. Para mantener el estado del componente y evitar que se produzca una actualización infinita, asegúrate de usar el hook useState para almacenar los valores de data, loading y error.


Aquí hay un ejemplo de cómo podría ser el uso del custom hook:

```
    function App() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        {data.map(user => (
            <div key={user.id}>{user.name}</div>
        ))}
        </div>
    );
    }
```


En este ejemplo, el custom hook useFetch se utiliza para obtener datos de la API JSONPlaceholder. El componente App muestra una lista de nombres de usuarios obtenidos de la API. Si hay un error durante la solicitud o la solicitud está en proceso, se muestra un mensaje apropiado en su lugar.