import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Section from './Components/Section'
import Models from './Components/Models'

function App() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen overscroll-none">
      <Canvas shadows >
        {/* camera={{ position: [-5, 3, 5] }} */}
        <Perf position='bottom-right' />
        {/* Controls */}
        {/* <OrbitControls makeDefault /> */}
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <pointLight position={[15, 10, 10]} />
        <ScrollControls damping={0} pages={6} >
          <Scroll>
            <Models />
          </Scroll>
          <Scroll html>
            <Section text="Name" />
            <Section text="Skills" />
            <Section text="Experience" />
            <Section text="Education" />
            <Section text="Interests" />
            <Section text="Contact" />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
