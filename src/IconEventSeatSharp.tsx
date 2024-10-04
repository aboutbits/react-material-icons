import React from 'react'
import { IconProps } from './types'

const IconEventSeatSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120v-240h640v240h-80v-160H240v160h-80Zm-40-280v-120h120v120H120Zm160 0v-440h400v440H280Zm440 0v-120h120v120H720Zm-360-80h240v-280H360v280Zm0 0h240-240Z" />
  </svg>
)

export { IconEventSeatSharp as default }
