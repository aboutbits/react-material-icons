import React from 'react'
import { IconProps } from './types.js'

export const IconShareLocationSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m675-228 58 58q-47 37-101 59.5T519-82v-80q42-6 81.5-23t74.5-43Zm204-212q-8 62-30.5 115.5T789-228l-56-56q26-33 42-72.5t22-83.5h82Zm-90-292q38 44 61.5 98T879-520h-82q-6-45-22-84.5T733-676l56-56ZM439-878v80q-120 17-199 107t-79 211q0 120 79 210t199 108v80q-153-18-255.5-131.5T81-480q0-155 102.5-268T439-878Zm80 0q59 5 113 27.5T733-790l-56 58q-36-27-76-44t-82-22v-80Zm-61 610q-16-48-39.5-80.5T373-410q-22-29-37.5-60.5T320-548q0-66 47-113t113-47q66 0 113 47t47 113q0 46-15.5 77.5T587-410q-22 29-45.5 61.5T502-268h-44Zm22-225q23 0 39-16t16-39q0-23-16-39t-39-16q-23 0-39 16t-16 39q0 23 16 39t39 16Z" />
  </svg>
)
