import React from 'react';

const Events: React.FC = () => {
    return (
        <div className="max-w-screen-md mx-4 px-10">
            <h1 className="text-2xl font-semibold">Upcoming Events</h1>
            <p>Stay tuned for the latest updates on our upcoming events!</p>
            <ul>
                <li>Event 1 - Date - Location</li>
                <li>Event 2 - Date - Location</li>
                <li>Event 3 - Date - Location</li>
            </ul>
        </div>
    );
};

export default Events;