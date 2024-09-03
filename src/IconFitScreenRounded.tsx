import React from 'react'
import { IconProps } from './types'

const IconFitScreenRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M800-640v-80h-80q-17 0-28.5-11.5T680-760q0-17 11.5-28.5T720-800h80q33 0 56.5 23.5T880-720v80q0 17-11.5 28.5T840-600q-17 0-28.5-11.5T800-640Zm-720 0v-80q0-33 23.5-56.5T160-800h80q17 0 28.5 11.5T280-760q0 17-11.5 28.5T240-720h-80v80q0 17-11.5 28.5T120-600q-17 0-28.5-11.5T80-640Zm720 480h-80q-17 0-28.5-11.5T680-200q0-17 11.5-28.5T720-240h80v-80q0-17 11.5-28.5T840-360q17 0 28.5 11.5T880-320v80q0 33-23.5 56.5T800-160Zm-640 0q-33 0-56.5-23.5T80-240v-80q0-17 11.5-28.5T120-360q17 0 28.5 11.5T160-320v80h80q17 0 28.5 11.5T280-200q0 17-11.5 28.5T240-160h-80Zm80-240v-160q0-33 23.5-56.5T320-640h320q33 0 56.5 23.5T720-560v160q0 33-23.5 56.5T640-320H320q-33 0-56.5-23.5T240-400Zm80 0h320v-160H320v160Zm0 0v-160 160Z" />
  </svg>
)

export { IconFitScreenRounded as default }
