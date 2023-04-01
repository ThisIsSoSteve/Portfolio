import { OrbitControls, ScrollControls, Scroll, PerspectiveCamera, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Section from './Components/Section'
import Models from './Components/Models'
import Background from './Components/Background'
import { useControls } from 'leva'
import { useMemo } from 'react'

function App() {

  const { backgroundColour } = useControls({
    backgroundColour: { value: '#0f172a', label: "Background" }// bg-slate-900
  })


  return (
    <div className="fixed top-0 left-0 h-screen w-screen overscroll-none" style={{ backgroundColor: backgroundColour }}>
      <Canvas shadows camera={{ fov: 25, position: [0, 0, 8] }}>

        {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
        {/* Controls */}
        {/* <OrbitControls makeDefault /> */}
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[15, 10, 10]} />

        <Background />

        <ScrollControls damping={0.5} pages={6} >
          <Scroll>
            <Models />
          </Scroll>
          <Scroll html>
            <Section
              header="Full Name Here "
              subheader="Portfolio"
              description="A Software Developer from the UK">
              <div
                className="text-amber-400 uppercase ">
                Scroll to Explore
              </div>
            </Section>

            <Section header="Skills" />
            <Section header="Experience" />
            <Section header="Education" />
            <Section header="Interests" />
            <Section header="Contact" />
          </Scroll>
        </ScrollControls>
        <Perf position='bottom-right' />
      </Canvas>
    </div>
  )
}

export default App
