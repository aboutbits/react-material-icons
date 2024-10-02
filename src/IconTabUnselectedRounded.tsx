import React from 'react'
import { IconProps } from './types'

export const IconTabUnselectedRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160q-17 0-28.5-11.5T80-200q0-17 11.5-28.5T120-240q17 0 28.5 11.5T160-200q0 17-11.5 28.5T120-160Zm160 0q-17 0-28.5-11.5T240-200q0-17 11.5-28.5T280-240q17 0 28.5 11.5T320-200q0 17-11.5 28.5T280-160Zm160 0q-17 0-28.5-11.5T400-200q0-17 11.5-28.5T440-240q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160Zm160 0q-17 0-28.5-11.5T560-200q0-17 11.5-28.5T600-240q17 0 28.5 11.5T640-200q0 17-11.5 28.5T600-160Zm160 0q-17 0-28.5-11.5T720-200q0-17 11.5-28.5T760-240h40v-40q0-17 11.5-28.5T840-320q17 0 28.5 11.5T880-280v40q0 33-23.5 56.5T800-160h-40ZM120-320q-17 0-28.5-11.5T80-360q0-17 11.5-28.5T120-400q17 0 28.5 11.5T160-360q0 17-11.5 28.5T120-320Zm720-80q-17 0-28.5-11.5T800-440q0-17 11.5-28.5T840-480q17 0 28.5 11.5T880-440q0 17-11.5 28.5T840-400Zm-720-80q-17 0-28.5-11.5T80-520q0-17 11.5-28.5T120-560q17 0 28.5 11.5T160-520q0 17-11.5 28.5T120-480Zm360-160v-120q0-17 11.5-28.5T520-800h280q33 0 56.5 23.5T880-720v120q0 17-11.5 28.5T840-560H560q-33 0-56.5-23.5T480-640Zm-360 0q-17 0-28.5-11.5T80-680v-40q0-33 23.5-56.5T160-800h40q17 0 28.5 11.5T240-760q0 17-11.5 28.5T200-720h-40v40q0 17-11.5 28.5T120-640Zm240-80q-17 0-28.5-11.5T320-760q0-17 11.5-28.5T360-800q17 0 28.5 11.5T400-760q0 17-11.5 28.5T360-720Z" />
  </svg>
)
