import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Background() {

    const group = useRef()

    useFrame((state, delta,) => {

        group.current.rotation.y += 0.02 * delta
        group.current.rotation.x += 0.01 * delta
    });

    console.log(group)

    return (
        <group ref={group}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    )
}