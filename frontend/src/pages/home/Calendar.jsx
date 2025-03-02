import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./Calendar.css";


const CLIENT_ID = import.meta.env.VITE_CLIENT_ID; 
const API_KEY = import.meta.env.VITE_API_KEY;
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

// Helper function to format date as YYYYMMDD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

// Note: still doesn't get two week range but honestly I kind of like it better this way, will bring it up to the team
const getTwoWeekRange = () => {
  const today = new Date();
  const startDate = formatDate(today);
  const twoWeeksLater = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
  const endDate = formatDate(twoWeeksLater);
  return `https://calendar.google.com/calendar/embed?src=c_aabbb026d8177a86cec45ba94d5fc10e9150377ace819fc11effa2933672d04b%40group.calendar.google.com&mode=AGENDA&dates=${startDate}/${endDate}&ctz=America/Chicago`;
};

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          const authInstance = gapi.auth2.getAuthInstance();
          setIsSignedIn(authInstance.isSignedIn.get());
          authInstance.isSignedIn.listen((status) => {
            setIsSignedIn(status);
            if (status) {
              listEvents();
            } else {
              setEvents([]);
            }
          });
          if (authInstance.isSignedIn.get()) {
            listEvents();
          }
        })
        .catch((error) => {
          console.error("Error initializing GAPI client", error);
        });
    });
  }, []);

  const signIn = () => gapi.auth2.getAuthInstance().signIn();
  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
    setEvents([]);
  };

  const listEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: "primary",
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      })
      .then((response) => {
        if (response.result.items) {
          setEvents(response.result.items);
        }
      })
      .catch((error) => {
        console.error("Error fetching events", error);
      });
  };

  const addEvent = () => {
    const event = {
      summary: "New Event from React",
      location: "Online",
      description: "This event was added from a React app!",
      start: {
        dateTime: new Date().toISOString(),
        timeZone: "America/Chicago",
      },
      end: {
        dateTime: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(),
        timeZone: "America/Chicago",
      },
    };

    gapi.client.calendar.events
      .insert({
        calendarId: "primary",
        resource: event,
      })
      .then(() => {
        alert("Event added successfully!");
        listEvents();
      })
      .catch((error) => {
        console.error("Error adding event", error);
      });
  };

  return (
    <div className="calendar-container">
      <h2 className="calendar-header">Upcoming Events</h2>
      {/* For now this part is useless, but if we ever want to display a different calendar to colorstack members, this could come in handy*/}
      {isSignedIn ? (
        <>
          <div>
          </div>
          <div className="calendar-embed">
            <iframe
              title="Google Calendar"
              src={getTwoWeekRange()}
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
          <h3 className="calendar-header">Upcoming Events</h3>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                {event.summary} - {event.start.dateTime || event.start.date}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <div className="calendar-embed">
            <iframe
              title="Google Calendar"
              src={getTwoWeekRange()}
              style={{ border: 0 }}
              width="800"
              height="600"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
