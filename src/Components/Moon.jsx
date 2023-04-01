import { useRef } from "react";
import { useFrame, useThree } from '@react-three/fiber'
import { folder, useControls } from "leva";
import { useScroll } from "@react-three/drei";
import { MathUtils } from 'three'

export default function Moon() {
    const Moon = useControls({
        'Moon': folder({
            colour: {
                value: 'grey',
                label: 'Colour'
            },
            position: {
                value: { x: 0, y: 0 },
                step: 0.1,
                joystick: 'invertY',
                hint: 'X Y control',
                label: 'Position'
            },

            // positionZ: {
            //     value: 10,
            //     step: 0.1,
            //     hint: 'Starting position',
            //     label: 'Start Z'
            // },

            positionZend: {
                value: -50,
                step: 0.1,
                hint: 'ending position after animation is complete',
                label: 'End Z'
            },

            scale: {
                value: 0.3,
                step: 0.1,
                min: 0.1,
                max: 3,
                label: 'Scale'
            },
            scrollRange: {
                value: [0, 1 / 6],
                min: 0,
                max: 1,
                label: 'Scroll Range'
            },
            lamda: {
                value: 4,
                min: 0,
                max: 100,
                step: 1,
                hint: 'A higher lambda value will make the movement more sudden, and a lower value will make the movement more gradual.',
                label: 'Lamda'
            }
        },
            { collapsed: true }
        )

    })

    const moonRef = useRef()
    const scroll = useScroll()
    //const { width, height } = useThree((state) => state.viewport)


    useFrame((state, delta) => {
        const r1 = scroll.range(Moon.scrollRange[0], Moon.scrollRange[1]) //0 to 1 when scrolled one sixth of the page is scrolled

        moonRef.current.position.z = MathUtils.damp(
            moonRef.current.position.z,
            Moon.positionZend * r1,
            Moon.lamda,
            delta)

    })

    return (
        <mesh ref={moonRef}
            position={[Moon.position.x, Moon.position.y, 0]}
            scale={Moon.scale}>
            <sphereGeometry args={[1, 32, 32]} receiveShadow />
            <meshStandardMaterial color={Moon.colour} />
        </mesh>
    )
}