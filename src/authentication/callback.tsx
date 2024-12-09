import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token'); // Token from backend

    if (token) {
      // Save the token
      localStorage.setItem('authToken', token);

      // Redirect the user to a secure area
      navigate('/authentication/confirmation');
    } else {
      console.error('Login failed: No token received');
    }
  }, [navigate]);

  return <div>Authenticating...</div>;
};

export default Callback;
