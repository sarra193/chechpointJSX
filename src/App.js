import './App.css';
import logo from './assets/logo192.png';

function App() {
  return (
    <div className="App">
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">React Project</h1>
          <br />
          <img src={logo} alt=""/>
          <br />
          <img src="/logo192.png" alt="" />
        </div>
        <video controls width={320} height={240}>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
