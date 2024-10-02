import React from 'react'
import { IconProps } from './types'

export const IconRecentActorsOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm0-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200 26q-41 0-80 10t-74 30h308q-35-20-74-30t-80-10Zm0-110q-45 0-77.5-32.5T210-540q0-45 32.5-77.5T320-650q45 0 77.5 32.5T430-540q0 45-32.5 77.5T320-430Zm0-74q15 0 25.5-10.5T356-540q0-15-10.5-25.5T320-576q-15 0-25.5 10.5T284-540q0 15 10.5 25.5T320-504Zm360 304v-560h80v560h-80Zm160 0v-560h80v560h-80ZM320-540Zm0 260Z" />
  </svg>
)
