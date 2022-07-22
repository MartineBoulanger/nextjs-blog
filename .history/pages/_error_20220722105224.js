function Error({statusCode}) {
    return (
        <p>
            {statusCode ? `An error ${statusCode} occurred on server`}
        </p>
    )
}