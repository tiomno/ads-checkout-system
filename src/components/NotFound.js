const notFoundFactory = ( { React } ) => {

    const NotFound = ( props ) => {

        return {
            props,

            render() {
                return (
                    <div className="App-page">
                        <h1 className="title-404">OOPS!<br />404 NOT FOUND</h1>
                    </div>
                )
            }
        }
    }

    return NotFound
}

export default notFoundFactory
