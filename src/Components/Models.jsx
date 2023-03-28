import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber'


import { useControls } from 'leva'
import { SphereGeometry } from "three";
import { TransformControls, useScroll } from "@react-three/drei";

export default function Models() {

    //https://codesandbox.io/s/yjhzv?file=/src/App.js
    const { width, height } = useThree((state) => state.viewport)
    const { boxColour } = useControls({ boxColour: 'grey' })

    const scroll = useScroll()

    const group = useRef()
    const moon = useRef()
    const earth = useRef()
    const satellite = useRef()

    useFrame((state, delta) => {
        const r1 = scroll.range(0 / 6, 1 / 6)
        const r2 = scroll.range(1 / 6, 1 / 6)
        const r3 = scroll.range(2 / 6, 1 / 12)

        moon.current.position.z = -(r1 * 10)
        earth.current.position.y = (r2 * 3) + -(height + 4)
        satellite.current.rotation.z += (Math.PI / 10) * delta//Math.cos(delta / 4) / 100
        earth.current.scale.x = earth.current.scale.y = earth.current.scale.z = 1 - r3

        //console.log(r3);
    });

    return (
        <group ref={group}>
            {/* Moon */}
            <mesh ref={moon} position={[0, 0, 0]} scale={0.3}>
                <sphereGeometry args={[1, 32, 32]} receiveShadow />
                <meshStandardMaterial color={boxColour} />
            </mesh>
            {/* Earth Edge */}
            <group ref={earth}>
                <group ref={satellite} >
                    <mesh position={[0, 4, 0]}>
                        <boxGeometry receiveShadow />
                        <meshStandardMaterial color="white" />
                    </mesh>
                    <group rotation={[0, 0, -Math.PI * 0.3]}>
                        <mesh position={[0, 4, 0]} >
                            <boxGeometry receiveShadow />
                            <meshStandardMaterial color="red" />
                        </mesh>
                    </group>
                    <group rotation={[0, 0, -Math.PI * 0.6]}>
                        <mesh position={[0, 4, 0]} >
                            <boxGeometry receiveShadow />
                            <meshStandardMaterial color="green" />
                        </mesh>
                    </group>

                    <group rotation={[0, 0, -Math.PI * 0.9]}>
                        <mesh position={[0, 4, 0]} >
                            <boxGeometry receiveShadow />
                            <meshStandardMaterial color="yellow" />
                        </mesh>
                    </group>
                </group>

                <mesh>
                    <sphereGeometry args={[3, 32, 32]} receiveShadow />
                    <meshStandardMaterial color="blue" />
                </mesh>
            </group>
            {/* https://codesandbox.io/s/mbfzf clouds */}
            <mesh position={[0, -height * 2, 0]}>
                <boxGeometry receiveShadow />
                <meshStandardMaterial color="blue" />
            </mesh>
            <mesh position={[0, -height * 3, 0]}>
                <boxGeometry receiveShadow />
                <meshStandardMaterial color="green" />
            </mesh>
            <mesh position={[0, -height * 4, 0]}>
                <boxGeometry receiveShadow />
                <meshStandardMaterial color="orange" />
            </mesh>
            <mesh position={[0, -height * 5, 0]}>
                <boxGeometry receiveShadow />
                <meshStandardMaterial color="purple" />
            </mesh>
        </group>
    )
}