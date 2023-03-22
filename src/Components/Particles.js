import React from 'react'
import { Particle } from './Styled-Components/Particles.styled'
import Shape1 from './../assets/Particles/Shape1.png'
import Shape2 from './../assets/Particles/Shape2.png'
import Shape3 from './../assets/Particles/Shape3.png'
import Shape4 from './../assets/Particles/Shape4.png'
import Shape5 from './../assets/Particles/Shape5.png'
import Shape6 from './../assets/Particles/Shape6.png'
import Shape7 from './../assets/Particles/Shape7.png'
import Shape8 from './../assets/Particles/Shape8.png'

function Particles() {
  return (
        <div>
            
            <Particle
              src={Shape1}
              initialTop="160px"
              initialLeft="220px"
              width='80px'
              height='160px'
            />
            <Particle
                src={Shape2}
                width= '300px'
                height= '80px'
                initialBottom="-30px"
                initialRight="180px"
            />
           
            <Particle
              src={Shape3}
              initialTop="-65px"
              initialLeft="380px"
              width='80px'
              height='160px'
            />
            <Particle
              src={Shape4}
              initialTop="400px"
              initialLeft="60px"
              width='30px'
              height='30px'
            />
            <Particle
              src={Shape5}
              initialBottom="200px"
              initialRight="60px"
              width='50px'
              height='140px'
            />
            <Particle
              src={Shape6}
              initialBottom="100px"
              initialRight="420px"
              width='30px'
              height='30px'
            />
            <Particle
              src={Shape7}
              initialBottom="-60px"
              initialRight="720px"
              width='130px'
              height='130px'
            />
            <Particle
              src={Shape8}
              initialBottom="0px"
              initialLeft="10px"
              width='100px'
              height='100px'
            />
        </div>
    )
}

export default Particles