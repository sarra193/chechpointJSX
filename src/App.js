import './style.css';
import bg from './assets/bg.jpg'
import pic from './assets/pic2.jpg'

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
    <div  style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red Row"> JSX Checkpoint</h1>
          <br />
          <img className="img" src={pic} alt=""/>
          <br />
          <img className="img" src="/pic1.jpg" alt="" roundedCircle />
        </div>
        <video controls width={320} height={240}>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
    </div>
  );
}

export default App;
