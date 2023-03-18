import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen">
        <Canvas shadows camera={{ position: [-5, 3, 5] }}>
          {/* Controls */}
          <OrbitControls makeDefault />
          {/* Lights */}
          <ambientLight intensity={0.5} />
          <pointLight position={[15, 10, 10]} />
          {/* Geometry */}
          <mesh>
            <boxGeometry receiveShadow />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
      <div className="flex flex-col h-screen relative pointer-events-none">
        <section>
          <h1 className="text-3xl font-bold underline">
            Portfolio
          </h1>
        </section>

        <section>
          <h1 className="text-3xl font-bold underline">
            test
          </h1>
        </section>
      </div>
    </>
  )
}

export default App