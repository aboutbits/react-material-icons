import React from 'react'
import { IconProps } from './types.js'

export const IconEventSeatOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-240h640v240h-80v-160H240v160h-80Zm20-280q-25 0-42.5-17.5T120-460q0-25 17.5-42.5T180-520q25 0 42.5 17.5T240-460q0 25-17.5 42.5T180-400Zm100 0v-360q0-33 23.5-56.5T360-840h240q33 0 56.5 23.5T680-760v360H280Zm500 0q-25 0-42.5-17.5T720-460q0-25 17.5-42.5T780-520q25 0 42.5 17.5T840-460q0 25-17.5 42.5T780-400Zm-420-80h240v-280H360v280Zm0 0h240-240Z" />
  </svg>
)
