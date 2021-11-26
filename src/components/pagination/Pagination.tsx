import './Pagination.css';

export const Pagination = () => {
    return <div className="Pagination">
        <div className="pag-i">
            <ol>
                <li className="pag-nbr pactive">1</li>
                <li className="pag-nbr">2</li>
                <li className="pag-nbr">3</li>
                <li className="pag-nbr">4</li>
                <li className="pag-nbr">5</li>
                <li className="npn">...</li>
                <li className="pag-nbr">1463675</li>
                <li className="pag-nbr">Next</li>
            </ol>
        </div>
        <div className="pag-g">
            <ol>
                <li className="pag-nbr pactive">15</li>
                <li className="pag-nbr">30</li>
                <li className="pag-nbr">50</li>
                <li className="npn">per page</li>
            </ol>
        </div>
    </div>
};