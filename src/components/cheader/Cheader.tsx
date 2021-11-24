import './Cheader.css';

export const Cheader = () =>{
    return <div className="main-center-header">
                <div className="mch-questions">
                    <div className="mch-title">All Questions</div>
                    <div className="btn btn-blue">Ask Question</div>
                </div>
                <div className="a">
                    <div className="nbr-questions">21,937,727 questions</div>
                    <div className="tbls">
                        <table cellSpacing="0">
                            <td className="ta">Newest</td>
                            <td>Active</td>
                            <td>Bountied <span className="bountied">301</span></td>
                            <td>Unwansered</td>
                            <td>More</td>
                        </table>
                        <div className="btn btn-lblue filter">Filter</div>
                    </div>
                </div>
    </div>
}