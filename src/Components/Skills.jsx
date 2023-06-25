import { useRef, useState } from "react";
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useScroll } from "@react-three/drei";
import { folder, useControls } from "leva";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { MathUtils } from 'three'
export default function Skills() {

    const Skills = useControls({
        'Skills': folder({
            orbitAngle: {
                value: Math.PI * 0.25,
                step: 0.1,
                min: -Math.PI,
                max: Math.PI,
                hint: 'The angle of the orbit',
                label: 'Orbit Angle'
            },
            orbitSpeed: {
                value: 10,
                step: 0.1,
                min: 0,
                max: 100,
                hint: 'The speed of the orbit',
                label: 'Orbit Speed'
            },
            satelliteSpacing: {
                value: 0.3,
                step: 0.01,
                min: 0,
                max: Math.PI / 4,
                hint: 'The distance between satellite',
                label: 'Satellite Spacing'
            },

            earthRotation: {
                value: 5,
                step: 0.1,
                min: 0,
                max: 100,
                hint: 'The speed of a day',
                label: 'Earths Rotation'
            },
        },
            { collapsed: true }
        )
    })

    const [active, setActive] = useState(true)
    const earth = useRef()
    const earthMesh = useRef()
    const satellite = useRef()

    const scroll = useScroll()
    const { width, height } = useThree((state) => state.viewport)

    const earthColorMap = useLoader(TextureLoader, './textures/earth_clouds.jpg')

    useFrame((state, delta) => {
        const r1 = scroll.range(0.25 / 6, 0.5 / 6)// 1 page / total page
        const r2 = scroll.range(1.5 / 6, 0.7 / 6)

        if (active) {
            //pop up earth up a bit
            earth.current.position.y = MathUtils.damp(
                earth.current.position.y,
                (-height * 3) * (1 - r1) + ((-height * 2) * r1),
                4,
                delta
            )

            //scale earth up
            const scale = MathUtils.damp(
                earth.current.scale.x,
                1 + (2 * (r2)),
                4,
                delta
            )
            if (r2 == 1) {
                console.log(false);
                setActive(false)
            }
            //console.log(r2)

            earth.current.scale.x = earth.current.scale.y = earth.current.scale.z = scale


            //rotates the earth
            earthMesh.current.rotation.y += (Skills.earthRotation / 100) * delta
            //Orbit
            satellite.current.rotation.z += (Skills.orbitSpeed / 50) * delta //Math.cos(delta / 4) / 100
        }
        else if (r2 < 1) {
            console.log(true);
            setActive(true)

        }
    })


    return (
        <>
            {active &&
                < group ref={earth} position={[0, -height * 3, 0]} >
                    <group ref={satellite} rotation={[0, Skills.orbitAngle, 0]}>
                        <mesh position={[0, 4, 0]}>
                            <boxGeometry receiveShadow />
                            <meshStandardMaterial color="white" />
                        </mesh>
                        <group rotation={[0, 0, -Math.PI * Skills.satelliteSpacing]}>
                            <mesh position={[0, 4, 0]} >
                                <boxGeometry receiveShadow />
                                <meshStandardMaterial color="red" />
                            </mesh>
                        </group>
                        <group rotation={[0, 0, -Math.PI * Skills.satelliteSpacing * 2]}>
                            <mesh position={[0, 4, 0]} >
                                <boxGeometry receiveShadow />
                                <meshStandardMaterial color="green" />
                            </mesh>
                        </group>

                        <group rotation={[0, 0, -Math.PI * Skills.satelliteSpacing * 3]}>
                            <mesh position={[0, 4, 0]} >
                                <boxGeometry receiveShadow />
                                <meshStandardMaterial color="yellow" />
                            </mesh>
                        </group>
                    </group>

                    <mesh ref={earthMesh}>
                        <sphereGeometry args={[3, 32, 32]} receiveShadow />
                        <meshStandardMaterial map={earthColorMap} />
                        {/* <meshStandardMaterial color="blue" wireframe /> */}
                        {/* map={earthColorMap}  */}


                    </mesh>
                </group >
            }
        </>
    )
}