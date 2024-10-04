import React from 'react'
import { IconProps } from './types'

const IconRespiratoryRateSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m574-256 66-67v-37 37l-66 67Zm212 0-66-67v-37 37l66 67ZM480-480ZM80-600v-200h800v300h-80v-220H160v120H80Zm0 440v-200h80v120h220v80H80ZM500-40q-25 0-42.5-17.5T440-100v-147l53-141q9-23 29.5-37.5T568-440h72v-80h80v80h72q25 0 45.5 14.5T867-388l53 141v147q0 25-17.5 42.5T860-40h-80q-25 0-42.5-17.5T720-100v-60h80v40h40v-113l-48-127h-72v37l66 67-56 56-50-50-50 50-56-56 66-67v-37h-72l-48 127v113h40v-40h80v60q0 25-17.5 42.5T580-40h-80Zm180-200ZM80-440v-80h144l56 111 134-271h51l90 181q-21 2-39.5 9T481-470l-41-80-135 270h-50l-80-160H80Z" />
  </svg>
)

export { IconRespiratoryRateSharp as default }
