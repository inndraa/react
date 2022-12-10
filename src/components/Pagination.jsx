const Pagination = () => {
return (
<div className="container">
    <div className="pagination">
        <div className="pagination__list">
            <div className="pagination__item prev">
               
            </div>
            <div className="pagination__item active">
                1
            </div>
            <div className="pagination__item">
                2
            </div>
            <div className="pagination__item">
                ...
            </div>
            <div className="pagination__item">
                9
            </div>
            <div className="pagination__item">
                10
            </div>
            <div className="pagination__item next">
                
            </div>
        </div>
    </div>
</div>

);
}

export default Pagination;