import { useState } from "react";
import '/src/css/EventCardHeader.css';
import calendarIcon from '/src/assets/addCalendar.png';
import heartFilled from '/src/assets/heartFilled.png';
import heartOutline from '/src/assets/heartOutline.png';

function EventCardHeader({event}){
    const [isFav, setIsFav] = useState(event.isFavorite);

    function toggleFavorite() {
        setIsFav(!isFav);
    }
    
    return (
        <div className="event-header">
            <div className="event-header-left">
                <img
                src={event.initiativeImage}
                alt={event.initiativeName}
                className="event-header-image"
                />
                <span className="event-header-title">
                {event.initiativeName}
                </span>
            </div>

            <div className="event-header-actions">
                <button onClick={toggleFavorite}>
                    <img
                        src={isFav ? heartFilled : heartOutline}
                        alt="favorite"
                        className="icon"
                    />
                </button>

                <button><img src={calendarIcon} alt="calendar" className="icon" /></button>

                <button>⋯</button>
            </div>
        </div>
    );
}

export default EventCardHeader;