import {Bell, MapPin, Hash, Calendar, BellPlus, Ban, HelpCircle, Bug, Users, BookOpen, Plus,} from "lucide-react";


import "../css/Sidebar.css";

function Sidebar({ isOpen, onClose, initiatives = []}) {
  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Navigation */}
        <div className="sidebar-content">
          <h2 className="sidebar-title">Plan your own events!</h2>

          <div className="initiative-list">
            {initiatives.length > 0 && (
              initiatives.map((initiative) => (
                <button key={initiative.id} className="initiative-btn">
                  <img
                    src={initiative.image}
                    alt={initiative.name}
                    className="initiative-img"
                  />
                  {initiative.name}
                </button>
              ))
            )}

            <button className="new-page-btn">New Page</button>
          </div>


          <div className="section">
            <h3 className="section-title">Yours</h3>

            <nav className="nav-list">
              <NavItem icon={<Bell size={16} />} label="Notifications" />
              <NavItem icon={<MapPin size={16} />} label="Locations" />
              <NavItem icon={<Hash size={16} />} label="Tags" />
              <NavItem icon={<Calendar size={16} />} label="Events" />
              <NavItem icon={<BellPlus size={16} />} label="Subscriptions" />
              <NavItem icon={<Ban size={16} />} label="Blocked" />
            </nav>
          </div>

          <div className="section">
            <h3 className="section-title">MakeAScene</h3>

            <nav className="nav-list">
              <NavItem icon={<BookOpen size={16} />} label="User Guidelines" />
              <NavItem icon={<Users size={16} />} label="Send in your Ideas" />
              <NavItem icon={<Bug size={16} />} label="Report a Bug" />
              <NavItem icon={<HelpCircle size={16} />} label="Support us" />
              <NavItem icon={<Users size={16} />} label="Join our Discord" />
            </nav>
          </div>

        </div>
      </div>
    </>
  );
}

function NavItem({ icon, label }) {
  return (
    <button className="nav-item">
      <span className="nav-icon">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

export default Sidebar;