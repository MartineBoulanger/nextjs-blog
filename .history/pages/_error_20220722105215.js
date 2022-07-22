function Error({statusCode}) {
    return (
        <p>
            {statusCode ? `An error ${statusCode}`}
        </p>
    )
}