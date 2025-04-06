import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Upcoming Events</h2>
      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=c_aabbb026d8177a86cec45ba94d5fc10e9150377ace819fc11effa2933672d04b%40group.calendar.google.com&ctz=America/Chicago"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
