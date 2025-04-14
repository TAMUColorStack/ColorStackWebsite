import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Upcoming Events</h2>
      <div className="calendar-wrapper">
        <iframe
          title="Google Calendar"
          src="https://calendar.google.com/calendar/embed?src=tamucolorstack%40gmail.com&ctz=America%2FChicago"
          className="calendar-iframe"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
