import './App.css';
import {Canvas} from '@react-three/fiber'
import { Watch } from './Watch';
import { ContactShadows, PresentationControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">MONACO</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
<div className='bg-new'>
  <div className='row'>
  <div className='col-lg-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center text-center'>
<h3 className='display-4 text-center '>Check out our best MONACO watch</h3>
</div>
<div class='col-lg-6 col-md-5 col-sm-12'>
<Canvas shadows dpr={[1,2]} camera={{position:[0,0,4], fov:50}}

style={{height:"500px"}}>
<ambientLight intensity={0.2} />
<spotLight position={[10,10,10]}
 angle={0.15}
  penumbra={1}
   shadow-mapSize={[512,512]}
   castShadow/>
<PresentationControls global snap={{mass:3, tension:1500}}
config={{mass:2, tension:500}}
polar={[-Math.PI /3, Math.PI /2]}
azimuth={[-Math.PI /1,4, Math.PI /2]}>
<Watch rotation={[Math.PI /2, 9.46, 3.1]} position={[0, 0.25,1]} scale={0.0022}/>
</PresentationControls>
<ContactShadows  rotateX={-Math.PI /2} position={[0, -1.4, 0]} opacity={0.75}
width={10}
height={10}
blur={2.3}
far={2}/>
</Canvas>
</div>
</div>
</div>

    </div>
  );
}

export default App;
