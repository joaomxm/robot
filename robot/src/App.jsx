import React from 'react'
import { Canvas } from '@react-three/fiber'

import Experience from './components/Experience'
import './App.css'

import Configurator from './components/Configurator'

export default function App() {
    return (
        <div className="App">
            <Canvas camera={{ zoom: 0.4 }}>
                <color attach="background" args={['#213547']} />
                <fog attach="fog" args={['#213547', 20, 20]} />
                <Experience />
            </Canvas>
            <Configurator />
        </div>
    )
}
