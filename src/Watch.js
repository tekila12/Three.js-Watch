import React from 'react'
import {Html, useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
export const  Watch = (props) =>  {
    const ref= React.useRef()

    const {nodes, materials} =useGLTF('./watch-v1.glb')
    useFrame((state)=>{
      const t =  state.clock.getElapsedTime();
      ref.current.rotation.x = -Math.PI /1.7 - Math.cos(t/4)/8
      ref.current.rotation.y =  Math.sin(t/1)/8
      ref.current.rotation.z = -Math.PI /-10 + Math.sin(t/1.5)/20
      ref.current.position.y =   Math.sin(t/1.5)/10
    



    })
  return (

    <group ref={ref} shadowMap  {...props} dispose={null}>
      <Html scale={100} rotation={[Math.PI / 2, 0, 0]} position={[180, -450, -240]} transform >
        <div className='annotation'>6000$</div>
      </Html>
      <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry}
        material={materials.watch} />
    </group>

  )
}
