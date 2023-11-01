import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialMentions } from '../services/apiService';
import { updateCrisisData } from '../redux/actions';
import SentimentAnalysis from './SentimentAnalysis';
import SocialMention from './SocialMention';
import LoadingScreen from './LoadingScreen';

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
    return <LoadingScreen />;
  }

  return (
    <div id="crisisManager">
      <h2>Crisis Manager</h2>
      <SentimentAnalysis data={crisisData} />
      <ul>
        {crisisData.map((mention, index) => (
          <SocialMention key={index} mention={mention} />
        ))}
      </ul>
    </div>
  );
};

export default CrisisManager;

// SocialMention.js
const SocialMention = ({mention}) => {
  return (
    <li>
      <p>{mention.text}</p>
      <p>{mention.sentiment}</p>
    </li>
  );
};

export default SocialMention;

// SentimentAnalysis.js
const SentimentAnalysis = ({data}) => {
  // Implement sentiment analysis algorithm 
};

export default SentimentAnalysis;

// LoadingScreen.js
const LoadingScreen = () => {
  return <div>Loading...</div>;
};

export default LoadingScreen;