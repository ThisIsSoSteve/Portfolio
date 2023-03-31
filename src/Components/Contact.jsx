import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

export default function Contact(props) {

    const pageDepth = 5;
    const { width, height } = useThree((state) => state.viewport)
    const EmailLink = useRef()

    const hover = (e) => {
        //console.log(e.object.scale)
        e.object.scale.x = 1.2
        e.object.scale.y = 1.2
    }

    const leave = (e) => {

        e.object.scale.x = 1
        e.object.scale.y = 1
    }

    return (
        <group position={[0, -(height * pageDepth), 0]}>


            <mesh
                position={[0, -1, 0]}
                rotation={[-Math.PI * 0.4, 0, 0]}
            >
                <planeGeometry args={[9, 3]} receiveShadow />
                <meshStandardMaterial color="SeaGreen" />
            </mesh>
            {/* Email link */}
            <mesh
                ref={EmailLink}
                position={[-0.6, -0.75, 0]}
                rotation={[Math.PI * 0.02, 0, Math.PI * 0.02]}
                onClick={(e) => console.log('click')}
                onPointerEnter={(e) => hover(e)}
                onPointerLeave={(e) => leave(e)}
            >
                <boxGeometry args={[1, 1, 0.4]} receiveShadow />
                <meshStandardMaterial color="Moccasin" />
            </mesh>
            {/* Linkedin link */}
            <mesh
                position={[0.6, -0.75, 0]}
                rotation={[Math.PI * 0.02, 0, -Math.PI * 0.02]}
                onPointerEnter={(e) => hover(e)}
                onPointerLeave={(e) => leave(e)}
            >
                <boxGeometry args={[1, 1, 0.4]} receiveShadow />
                <meshStandardMaterial color="LightSkyBlue" />
            </mesh>
            {/* tree */}
            <group position={[-2, + 0.5, 0]} rotation={[-Math.PI * 0.05, 0, 0]}>
                <mesh >
                    <cylinderGeometry args={[0.2, 0.2, 3]} receiveShadow />
                    <meshStandardMaterial color="saddlebrown" />
                </mesh>
                <mesh position={[0, + 1, 0]}>
                    <coneGeometry args={[1, 3, 16]} receiveShadow />
                    <meshStandardMaterial color="green" />
                </mesh>
            </group>

            {/* tree */}
            <group position={[2, + 0.5, 0]} rotation={[-Math.PI * 0.05, 0, 0]}>
                <mesh >
                    <cylinderGeometry args={[0.2, 0.2, 3]} receiveShadow />
                    <meshStandardMaterial color="saddlebrown" />
                </mesh>
                <mesh position={[0, + 1, 0]}>
                    <coneGeometry args={[1, 3, 16]} receiveShadow />
                    <meshStandardMaterial color="green" />
                </mesh>
            </group>
        </group>
    )
}