import React, { useEffect, useState } from 'react';
import './DashboardOverview.css';

const DashboardOverview = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    role: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
     setUserInfo({
  name: parsed.name || parsed.fullName || 'User',
  email: parsed.email || '',
  role: parsed.role || 'Client'
});

    }
  }, []);

  const data = {
    ...userInfo,
    bookings: 2,
    totalSpent: "₦250,000",
    messages: 3,
    profileStatus: "Verified",
    activities: [
      "Booked a space at Victoria Island – 2 days ago",
      "Payment of ₦125,000 confirmed – last week",
      "Profile updated – 3 weeks ago"
    ]
  };

  return (
    <div className="dashboard-overview">
      <h2>Welcome, {data.name.split(' ')[0]}</h2>
      <p className="dashboard-role">Email: {data.email}</p>
      <p className="dashboard-role">Role: {data.role}</p>

      <div className="stats-cards">
        <div className="card"><h3>{data.bookings}</h3><p>Bookings</p></div>
        <div className="card"><h3>{data.totalSpent}</h3><p>Total Spent</p></div>
        <div className="card"><h3>{data.messages}</h3><p>Messages</p></div>
        <div className="card"><h3>{data.profileStatus}</h3><p>Profile Status</p></div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activities</h3>
        <ul>
          {data.activities.map((act, i) => (
            <li key={i}>• {act}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;
