import React from 'react'
import { IconProps } from './types'

const IconEscalatorWarningOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-720q-33 0-56.5-23.5T180-800q0-33 23.5-56.5T260-880q33 0 56.5 23.5T340-800q0 33-23.5 56.5T260-720Zm420 200q-25 0-42.5-17.5T620-580q0-25 17.5-42.5T680-640q25 0 42.5 17.5T740-580q0 25-17.5 42.5T680-520ZM180-80v-280h-60v-240q0-33 23.5-56.5T200-680h120q22 0 40 10.5t29 29.5l143 247 41-61q8-12 21.5-19t28.5-7h117q25 0 42.5 17.5T800-420v140h-40v200H600v-284l-31 44h-88L380-496v416H180Z" />
  </svg>
)

export { IconEscalatorWarningOutlined as default }
