import React from 'react'
import { IconProps } from './types.js'

export const IconVaccinesSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m320-60-80-60v-160H120v-380H80v-80h160v-60h-60v-80h200v80h-60v60h160v80h-40v380H320v220ZM200-360h160v-60H260v-60h100v-60H260v-60h100v-60H200v300ZM520-80v-340q0-29 10-48t21-33q11-14 20-22.5t9-16.5v-20h-40v-80h280v80h-40v20q0 8 10 18t22 24q11 14 19.5 33t8.5 45v340H520Zm80-320h160v-20q0-15-9-26t-20-24q-11-13-21-29t-10-41v-20h-40v20q0 24-9.5 40T630-471q-11 13-20.5 24.5T600-420v20Zm0 240h160v-60H600v60Z" />
  </svg>
)
