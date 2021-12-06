
function History(props) {
    return (
        <div className="History">
            <main className="container">
                <div className="my-3 p-3 bg-body rounded shadow-sm">
                    <h6 className="border-bottom pb-2 mb-0">Recent tags</h6>
                    {
                    props.tags.map(element => {
                        //console.log(element);
                        return (
                            <div className="d-flex text-muted pt-3">
                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#e83e8c"></rect></svg>

                                <p className="pb-3 mb-0 small lh-sm">
                                    <strong className="d-block text-gray-dark">{element.tag}</strong>
                                    {new Date(element.timestamp).toUTCString()}
                                </p>
                            </div>
                          );
                    })
                    }

                </div>
            </main>
        </div>
    );

  }


  export default History;