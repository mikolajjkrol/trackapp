import Section from './components/Section'
import Home from './components/Home'
import Sidebar from './components/Sidebar';

import { uiActions } from './store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from './store/dataSlice';

function App() {
  const darkMode = useSelector(state => state.ui.darkMode);
  const page = useSelector(state => state.ui.page);

  const dispatch = useDispatch(); 

  const toggleMode = () => {
    dispatch(uiActions.toggleDarkMode())
  }

  useEffect(() => {
    dispatch(getData());
  },[dispatch])

  return (
    <>
      <div className={`container ${darkMode ? 'dark' : 'light'}`}>

        <Sidebar />

        <div className="screen">

          {page == 'home' && <Home/>}
          {page == 'running' && <Section title='Track your runs' content='run' meta='running'/>}
          {page == 'gym' && <Section title='Track your gym sessions' content='gym sesh' meta='gym'/>}
          {page == 'cali' && <Section title='Track your cali trainings' content='cali workout' meta='cali'/>}


          <button className='float material-icons' onClick={toggleMode}>{darkMode ? 'light_mode' : 'dark_mode'}</button>
        </div>

        {/* NOTHING TO SEE HERE */}
        <div className="sidebar none"></div>
        <div className="material-icons menu-toggle" onClick={() => {dispatch(uiActions.toggleMenu())}}>menu</div>
      </div>
    </>
  )
}

export default App
