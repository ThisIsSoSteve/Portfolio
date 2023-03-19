import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber'


import { useControls } from 'leva'

export default function Models() {

    //https://codesandbox.io/s/yjhzv?file=/src/App.js
    const { width, height } = useThree((state) => state.viewport)
    const { boxColour } = useControls({ boxColour: 'hotpink' })

    const group = useRef()

    return (
        <group ref={group}>
            <mesh>
                <boxGeometry receiveShadow position={[0, 0, 0]} />
                <meshStandardMaterial color={boxColour} />
            </mesh>
            <mesh position={[0, -height, 0]}>
                <boxGeometry receiveShadow />
                <meshStandardMaterial color="red" />
            </mesh>
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