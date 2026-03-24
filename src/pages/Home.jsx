export default function Home() {
    return (
        <>

            <main>

                {/* jumbotron di benvenuto */}
                <div className="p-5 mb-4 bg-body-tertiary rounded-3">
                    <div className="container py-5 text-center jumbotron">
                        <h1 className="display-1 fw-bold">
                            Il tuo nuovo negozio preferito
                        </h1>
                        <p className="col-md-8 mx-auto fs-4 mt-3 fw-bold text-white">
                            Qualità, comodità e i migliori prezzi. Tutto in un click.
                        </p>
                    </div>
                </div>

                {/* img */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mt-2">
                            <img src="https://picsum.photos/300/200?random=1" alt="" className="img-fluid w-100" />
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <img src="https://picsum.photos/300/200?random=2" alt="" className="img-fluid w-100" />
                        </div>
                        <div className="col-12 col-md-4 mt-2">
                            <img src="https://picsum.photos/300/200?random=3" alt="" className="img-fluid w-100" />
                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}