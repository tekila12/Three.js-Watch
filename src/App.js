import './App.css';
import {Canvas} from '@react-three/fiber'
import { Watch } from './Watch';

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
          <a class="nav-link active" aria-current="page" href="#">ROLEX</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
<div class='bg-new'>
  <div class='row'>
  <div class='col-lg-5 col-md-5 col-sm-12'>
<h3 class='display-4 text-center'>Check out our best Rolex watch</h3>
</div>
<div class='col-lg-6 col-md-5 col-sm-12'></div>
<Canvas>
<ambientLight intensity={0.2} />
<spotLight position={[10,10,10]}
 angle={0.15}
  penumbra={1}
   shadow-mapSize={[512,512]}
   castShadow/>

<Watch rotation={[Math.PI /2, 0, 0]} position={[0, 0.25,0]} scale={0.003}/>
</Canvas>
</div>
</div>

    </div>
  );
}

export default App;
