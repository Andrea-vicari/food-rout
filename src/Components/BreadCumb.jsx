const BreadCumb = () => {

    return(
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb p-3">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>

    )
}
export {BreadCumb};