import { Cloud, Sky } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useScroll } from "@react-three/drei";
import { useRef } from 'react';
import { TextureLoader } from 'three';


export default function Experience1() {

    const { width, height } = useThree((state) => state.viewport)
    const scroll = useScroll()
    const cloud1 = useRef()
    const cloudColorMap = useLoader(TextureLoader, './textures/cloud.png')
    const period = 1

    console.log(height)
    //console.log(cloud1.current.position.y)
    useFrame((state, delta) => {

        // cloud1.current.position.z -= 0.1
        // if (cloud1.current.position.z < -30) {
        //     cloud1.current.position.z = 10
        // }
    })

    return (
        <>
            <mesh
                ref={cloud1}
                position={[0, (-height * 2), 0]}
                rotation={[Math.PI * 0.1, 0, 0]}
                scale={5}
            >
                <planeGeometry args={[1, 1]} receiveShadow />
                <meshStandardMaterial
                    map={cloudColorMap}
                    transparent
                    opacity={0.5}
                    depthTest={true}

                />
            </mesh>

            <group position={[1, (-height * 2), 0]} >

                <mesh position={[0, 0, 0]} scale={0.4}>
                    <boxGeometry receiveShadow />
                    <meshStandardMaterial color="blue" />
                </mesh>
                <mesh position={[1, 0, 0]} scale={0.4}>
                    <boxGeometry receiveShadow />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </group >
        </>
    )
}

{/* https://codesandbox.io/s/mbfzf clouds 
https://github.com/pmndrs/drei/blob/master/src/core/Cloud.tsx
*/ }