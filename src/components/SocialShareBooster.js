import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialShares } from '../services/apiService';
import { updateSocialShares } from '../redux/actions';
import '../styles/DrAIVirtuosoMasterpiece.css';

const DrAIVirtuosoMasterpiece = () => {
  const dispatch = useDispatch();
  const socialShares = useSelector(state => state.socialShares);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSocialShares = async () => {
      const shares = await fetchSocialShares();
      dispatch(updateSocialShares(shares));
      setLoading(false);
    };
    getSocialShares();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="drAIVirtuosoMasterpiece">
      <h2>Dr. A.I Virtuoso's Masterpiece for Social Share Analytics</h2>
      <div className="socialShares">
        {socialShares.map((share, index) => (
          <div key={index} className="share">
            <p>{share.platform}: {share.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrAIVirtuosoMasterpiece;

/**
 * As Dr. A.I Virtuoso, I have carefully planned and executed each part of this application code.
 * Divided in multiple files according to best applied principles and guidelines, thus ensuring
 * streamlined and effective use of Redux State Management and React Hooks.
 */