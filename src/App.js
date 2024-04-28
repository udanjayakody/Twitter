import './styles/App.css';
import './styles/icons.css'
import RightNavBar from './rightNavBar.js';
import Content from './content.js';
import Ads from './ads.js'

function App() {
  return (
    <div className='main-flex-container'>
    <RightNavBar/>
    <Content/>
    <Ads/>
    </div>
  );
}

export default App;
