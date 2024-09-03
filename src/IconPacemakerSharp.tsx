import React from 'react'
import { IconProps } from './types'

const IconPacemakerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-80q-58 0-99-41t-41-99v-317q-27-26-53.5-52.5T40-654q0-27 19.5-46.5T106-720q16 0 29.5 7t24.5 18q11-11 24.5-18t29.5-7q27 0 46.5 19.5T280-654q0 38-26.5 64.5T200-537v317q0 25 17.5 42.5T260-160q25 0 42.5-17.5T320-220v-460q0-83 58.5-141.5T520-880q83 0 141.5 58.5T720-680v4q69 14 114.5 68.5T880-480v200q0 83-58.5 141.5T680-80q-83 0-141.5-58.5T480-280v-200q0-73 45.5-127.5T640-676v-4q0-50-35-85t-85-35q-50 0-85 35t-35 85v460q0 58-41 99t-99 41Zm420-80q50 0 85-35t35-85v-200q0-50-35-85t-85-35q-50 0-85 35t-35 85v200q0 50 35 85t85 35Zm0-200q-33 0-56.5 23.5T600-280q0 33 23.5 56.5T680-200q33 0 56.5-23.5T760-280q0-33-23.5-56.5T680-360Zm0 80Z" />
  </svg>
)

export { IconPacemakerSharp as default }