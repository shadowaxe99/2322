import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { aggregateData } from '../redux/actions';
import InsuranceVerifier from './InsuranceVerifier';
import ComplianceAuditor from './ComplianceAuditor';
import CrisisManager from './CrisisManager';
import SentimentAnalyzer from './SentimentAnalyzer';
import UserExperienceAuditor from './UserExperienceAuditor';
import SocialShareBooster from './SocialShareBooster';
import SleepCoach from './SleepCoach';
import MindfulnessMentor from './MindfulnessMentor';
import 'tailwindcss/tailwind.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);

  useEffect(() => {
    dispatch(aggregateData());
  }, [dispatch]);

  return (
    <div id="dashboard" className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
        <InsuranceVerifier data={data.insuranceVerifier} />
        <ComplianceAuditor data={data.complianceAuditor} />
        <CrisisManager data={data.crisisManager} />
        <SentimentAnalyzer data={data.sentimentAnalyzer} />
        <UserExperienceAuditor data={data.userExperienceAuditor} />
        <SocialShareBooster data={data.socialShareBooster} />
        <SleepCoach data={data.sleepCoach} />
        <MindfulnessMentor data={data.mindfulnessMentor} />
      </div>
    </div>
  );
};

export default Dashboard;