import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSocialShares } from '../services/apiService';
import { updateSocialShares } from '../redux/actions';
import '../styles/SocialShareBooster.css';

const SocialShareBooster = () => {
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
    <div className="socialShareBooster">
      <h2>Social Share Booster</h2>
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

export default SocialShareBooster;