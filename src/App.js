```javascript
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Dashboard from './components/Dashboard';
import InsuranceVerifier from './components/InsuranceVerifier';
import ComplianceAuditor from './components/ComplianceAuditor';
import CrisisManager from './components/CrisisManager';
import SentimentAnalyzer from './components/SentimentAnalyzer';
import UserExperienceAuditor from './components/UserExperienceAuditor';
import SocialShareBooster from './components/SocialShareBooster';
import SleepCoach from './components/SleepCoach';
import MindfulnessMentor from './components/MindfulnessMentor';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/insurance-verifier" component={InsuranceVerifier} />
          <Route path="/compliance-auditor" component={ComplianceAuditor} />
          <Route path="/crisis-manager" component={CrisisManager} />
          <Route path="/sentiment-analyzer" component={SentimentAnalyzer} />
          <Route path="/user-experience-auditor" component={UserExperienceAuditor} />
          <Route path="/social-share-booster" component={SocialShareBooster} />
          <Route path="/sleep-coach" component={SleepCoach} />
          <Route path="/mindfulness-mentor" component={MindfulnessMentor} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
```