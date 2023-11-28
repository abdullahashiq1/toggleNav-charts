import './App.css'
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import PriceList from './components/PriceList/PriceList';

function App() {
  
  return (
    <>
      <Navbar></Navbar>
     <h1 className='text-7xl text-purple-600'>tailwindCSS with ReactJS</h1>
      <PriceList />
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </>
  )
}

export default App
