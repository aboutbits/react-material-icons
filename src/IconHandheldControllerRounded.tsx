import React from 'react'
import { IconProps } from './types'

const IconHandheldControllerRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-240q-66 0-113-47t-47-113q-100 1-170-69.5T40-640q0-33 23.5-56.5T120-720h160v-40h-40q-17 0-28.5-11.5T200-800q0-17 11.5-28.5T240-840h160q17 0 28.5 11.5T440-800q0 17-11.5 28.5T400-760h-40v40h127q16 0 30.5 6t25.5 17l335 335q42 42 42 100t-42 100q-42 42-100 42t-100-42l-78-78H440Zm0-160h-81q0 33 23.5 56.5T440-320h80l-80-80Zm47-240H120q0 66 47 113t113 47h193l262 262q18 18 43.5 18t43.5-18q18-18 18-43.5T822-305L487-640Zm0 0Z" />
  </svg>
)

export { IconHandheldControllerRounded as default }