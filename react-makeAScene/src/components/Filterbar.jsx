import Filter from "./Filter"
import "../css/Filterbar.css";

function Filterbar({ isOpen, onClose, filter}) {
  return (
    <>
        {isOpen && (
            <div className="sidebar-overlay" onClick={onClose} />
        )}
        <div className={`sidebar ${isOpen ? "open" : ""}`}>

            {/* Navigation */}
            <div className="sidebar-content">
            <h2 className="sidebar-title">Filter</h2>

            <div className="section">
                <h3 className="section-title">Age restrictions</h3>

                /* add age selection as filter "14+" "18+" "explicit"*/
            </div>

            <div className="section">
                <h3 className="section-title">Who?</h3>

                /* filter.iniciatives*/
            </div>

            
            <div className="section">
                <h3 className="section-title">Where?</h3>

                /* add filter for filter.location*/
                /* text field "other location"*/
            </div>

            <div className="section">
                <h3 className="section-title">When?</h3>

                /* add date selection */
            </div>

            <div className="section">
                <h3 className="section-title">What?</h3>

                /* add filter section here filter.tags */
                /* text field "other tags"*/
            </div>

            </div>
      </div>
    </>
  );
}


export default Filterbar;