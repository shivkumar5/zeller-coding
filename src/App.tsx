import './App.css';
import { Amplify } from 'aws-amplify'
import Customers from './pages/Customers';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="container">
      <Customers/>
    </div>
  );
}

export default App;
