import React from 'react'
import { IconProps } from './types'

const IconWindPowerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-40v-80h80v-208q-12-5-22.5-11.5T438-354l-116 74-282-80v-160h392q10-11 22-19t26-13v-172l213-199 136 85-205 339q7 12 10.5 26t4.5 29l141 34 142 254L809-43 560-291v171h80v80H400ZM160-760v-80h240v80H160Zm400 71v137q1 0 1.5.5t1.5.5l158-262-18-10-143 134ZM40-600v-80h200v80H40Zm480 200q17 0 28.5-11.5T560-440q0-17-11.5-28.5T520-480q-17 0-28.5 11.5T480-440q0 17 11.5 28.5T520-400Zm-211 34 93-56q-1-5-1-9v-9H120v20l189 54Zm419 25-114-26q-2 2-4 5t-4 5l203 202 15-15-96-171ZM120-120v-80h200v80H120Zm400-320Zm43-111ZM401-440Zm205 83Z" />
  </svg>
)

export { IconWindPowerSharp as default }
