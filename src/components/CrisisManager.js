import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialMentions } from '../services/apiService';
import { updateCrisisData } from '../redux/actions';

const CrisisManager = () => {
  const dispatch = useDispatch();
  const crisisData = useSelector(state => state.crisisData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchSocialMentions();
        dispatch(updateCrisisData(response));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching social mentions:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="crisisManager">
      <h2>Crisis Manager</h2>
      <ul>
        {crisisData.map((mention, index) => (
          <li key={index}>
            <p>{mention.text}</p>
            <p>{mention.sentiment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrisisManager;