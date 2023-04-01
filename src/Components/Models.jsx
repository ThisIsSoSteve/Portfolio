import { useRef } from "react";
import { useThree } from '@react-three/fiber'
import Contact from "./Contact";
import Moon from "./Moon";
import Skills from "./Skills";

export default function Models() {

    //https://codesandbox.io/s/yjhzv?file=/src/App.js
    const { width, height } = useThree((state) => state.viewport)

    //const scroll = useScroll()

    const group = useRef()

    //useFrame((state, delta) => { });

    return (
        <group ref={group}>
            <Moon />
            <Skills />

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
            <Contact />
        </group>
    )
}