import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserExperienceData } from '../redux/actions';
import { HeatMap } from './HeatMap';

const UserExperienceAuditor = () => {
  const dispatch = useDispatch();
  const userExperienceData = useSelector(state => state.userExperienceData);
  const [heatMapData, setHeatMapData] = useState([]);

  useEffect(() => {
    dispatch(fetchUserExperienceData());
  }, [dispatch]);

  useEffect(() => {
    if (userExperienceData) {
      setHeatMapData(userExperienceData);
    }
  }, [userExperienceData]);

  return (
    <div id="userExperienceAuditor">
      <h2>User Experience Auditor</h2>
      <div className="heatMapContainer">
        <HeatMap data={heatMapData} />
      </div>
    </div>
  );
};

export default UserExperienceAuditor;