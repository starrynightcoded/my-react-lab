import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Global.css'; 

function UserProfile() {
  const { username } = useParams();

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <p>Welcome, <strong>{username}</strong>!</p>
      <p>
        Here you can manage your account settings, view your order history, and
        update your personal information.
      </p>
      <p>If you have any issues, contact us at support@ecommerce.com.</p>
    </div>
  );
}

export default UserProfile;
