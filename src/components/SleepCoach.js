import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSleepData } from '../redux/actions';
import '../styles/SleepCoach.css';

const SleepCoach = () => {
  const dispatch = useDispatch();
  const sleepData = useSelector(state => state.sleepData);
  const [sleepCycle, setSleepCycle] = useState([]);

  useEffect(() => {
    dispatch(fetchSleepData());
  }, [dispatch]);

  useEffect(() => {
    if (sleepData) {
      setSleepCycle(sleepData.cycle);
    }
  }, [sleepData]);

  const renderSleepCycle = () => {
    return sleepCycle.map((cycle, index) => (
      <div key={index} className="cycle">
        <p>{`Cycle ${index + 1}: ${cycle.start} - ${cycle.end}`}</p>
      </div>
    ));
  };

  return (
    <div id="sleepCoach">
      <h2>Sleep Coach</h2>
      <div className="sleepCycle">
        {sleepCycle.length > 0 ? renderSleepCycle() : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default SleepCoach;