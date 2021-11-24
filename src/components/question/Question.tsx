import './Question.css';

export const Question = () => {
    return <div className="Question">
        <div className="stats">
            <span className="nbr">0</span> <span className="stxt">votes</span> <span className="nbr">0</span><span className="stxt">answers</span><span className="views">2 views</span>
        </div>
        <div className="o">
            <div className="qtitle"><a href="#">How to solve access token error while loggin in with microsoft in php ?</a></div>
            <div className="qlbl">Here is my code which i am usign for logging in microsoft Here is my code which i am usign for logging in microsoft Here is my code which i am usign for logging in microsoft</div>
            <div className="qft">
                <div className="tags">
                    <a href="#"><div className="tag">php</div></a>
                </div>
                <div className="usr">
                    <div className="time">asked 44 secs ago</div>
                    <div className="usr-info">Muhammad Uzair</div>
                </div>
            </div>
        </div>
    </div>
}