import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBiofeedback } from '../redux/actions';
import '../styles/MindfulnessMentor.css';

const MindfulnessMentor = () => {
  const dispatch = useDispatch();
  const biofeedback = useSelector(state => state.biofeedback);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchBiofeedback())
      .then(() => setIsLoading(false))
      .catch(err => console.error(err));
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="mindfulnessMentor" className="mindfulnessMentor">
      <h2>Mindfulness Mentor</h2>
      <div className="biofeedback">
        {biofeedback.map((data, index) => (
          <div key={index} className="biofeedbackItem">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindfulnessMentor;