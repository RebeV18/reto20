


export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <h3>Algo Malio Sal....</h3>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
        </div>
    )
}