import './App.scss';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
  }

  return (
    <>
      <Navbar />
      <Main range={range}/>
    </>
  );
}

export default App;
