import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { folder, useControls } from "leva";
import { useRef } from "react";

export default function Background() {

    const background = useControls({
        'Star Background': folder({
            rotationSpeed: {
                value: { x: 0.02, y: 0.01 },
                step: 0.01,
                max: 1,
                min: -1,
                label: 'Rotation Speed',
                hint: 'The speed of star rotation'
            },
            radius: {
                value: 100,
                step: 1,
                min: 0,
                label: 'Radius',
            },
            depth: {
                value: 50,
                step: 1,
                min: 0
                ,
                label: 'Depth',
            },
            count: {
                value: 5000,
                step: 100,
                min: 0,
                label: 'Count',
                hint: 'How many stars there are'
            },
            factor: {
                value: 4,
                step: 1,
                min: 0,
                label: 'Factor',
            },
            saturation: {
                value: 0,
                step: 1,
                min: 0,
                label: 'Saturation',
            },
            fade: {
                value: true,
                label: 'Fade',
            },
            speed: {
                value: 1,
                step: 1,
                min: 0,
                label: 'Speed',
                hint: 'The speed how fast the stars twinkle',
                //disabled: true
            },
        },
            { collapsed: true }
        )
    })
    const group = useRef()

    useFrame((state, delta,) => {
        group.current.rotation.x += background.rotationSpeed.y * delta
        group.current.rotation.y += background.rotationSpeed.x * delta

    });



    return (
        <group ref={group}>
            <Stars {...background} />
        </group>
    )
}