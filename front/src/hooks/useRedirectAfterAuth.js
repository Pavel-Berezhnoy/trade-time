import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

export const useRedirectAfterAuth = () => {
  const token = useSelector(state => state.userReducer.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token])
}