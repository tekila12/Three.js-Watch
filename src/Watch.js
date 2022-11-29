import React from 'react'
import {useGLTF} from '@react-three/drei'
export const  Watch = (props) =>  {
    const ref= React.useRef()

    const {nodes, materials} =useGLTF('./watch-v1.glb')
  return (
<>
          <group ref={ref} shadowMap  {...props} dispose={null}>

              <mesh castShadow receiveShadow geometry={nodes.Object006_watch_0.geometry}
                  material={materials.watch} />

          </group>
</>
  )
}
