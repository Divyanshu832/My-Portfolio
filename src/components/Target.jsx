import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

// Built from primitives: the original remote target-stand model (Supabase) no longer exists
const rings = [
  { radius: 0.5, color: '#e63946' },
  { radius: 0.38, color: '#f1faee' },
  { radius: 0.26, color: '#e63946' },
  { radius: 0.14, color: '#f1faee' },
]

const Target = (props) => {
  const targetref = useRef();

  useGSAP(() =>{
    gsap.to(targetref.current.position, {
        y: targetref.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true
    })
  })

  return (
    <group {...props} ref={targetref} scale={1.5} rotation={[0, Math.PI/5, 0]}>
        {/* board */}
        <group position={[0, 0.9, 0]} rotation={[-0.15, 0, 0]}>
          {rings.map(({ radius, color }, i) => (
            <mesh key={i} position={[0, 0, 0.02 + i * 0.01]}>
              <circleGeometry args={[radius, 48]} />
              <meshStandardMaterial color={color} />
            </mesh>
          ))}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.52, 0.52, 0.04, 48]} />
            <meshStandardMaterial color="#8d6e63" />
          </mesh>
        </group>
        {/* stand legs */}
        <mesh position={[-0.25, 0.3, -0.1]} rotation={[0.2, 0, 0.25]}>
          <cylinderGeometry args={[0.03, 0.03, 0.9, 12]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
        <mesh position={[0.25, 0.3, -0.1]} rotation={[0.2, 0, -0.25]}>
          <cylinderGeometry args={[0.03, 0.03, 0.9, 12]} />
          <meshStandardMaterial color="#5d4037" />
        </mesh>
    </group>
  )
}

export default Target
