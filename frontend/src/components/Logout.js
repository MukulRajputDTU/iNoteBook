import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/',{ state: { out: true } });
  }, [navigate]);

  return (
    <div>
      <h4>Logging out...</h4>
    </div>
  );
};

export default Logout;