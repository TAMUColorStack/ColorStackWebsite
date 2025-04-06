import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Upcoming Events</h2>
      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=tamucolorstack%40gmail.com&ctz=America%2FChicago"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
