import './Sidebar.css';

export const Sidebar = () => {
    return <div className="Sidebar">
                <a href="#"><div className="sidebar-a">Home</div></a>
                <h5>PUBLIC</h5>
                <a href="#"><div className="sidebar-a">Questions</div></a>
                <a href="#"><div className="sidebar-a">Tags</div></a>
                <a href="#"><div className="sidebar-a">Users</div></a>
                <h5>COLLECTIVES</h5> 
                <a href="#"><div className="sidebar-a">Explore Collectives</div></a>
                <h5>FIND A JOB</h5>
                <a href="#"><div className="sidebar-a">Jobs</div></a>
                <a href="#"><div className="sidebar-a">Companies</div></a>
                <h5>TEAMS</h5>
                <div className="teams">
                    <p><b>Stack Overflow for Teams</b> – Collaborate and share knowledge with a private group.</p>
                    <a href="#" className="teams-btn">Create a free Team</a>
                    <a href="#">What is Teams?</a>
                </div>
    </div>
}