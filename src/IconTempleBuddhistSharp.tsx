import React from 'react'
import { IconProps } from './types'

const IconTempleBuddhistSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-366q-52-13-86-55t-34-98h80q0 32 23.5 55.5T199-520h41v-86q-52-13-86-55t-34-98h80q0 32 23.5 55.5T279-680h21l180-240 180 240h21q32 0 55.5-23.5T760-759h80q0 56-34 98t-86 55v86h41q32 0 55.5-23.5T840-599h80q0 56-34 98t-86 55v366H520v-200h-80v200H160Zm240-600h160l-80-107-80 107Zm-80 160h320v-80H320v80Zm-80 360h120v-200h240v200h120v-280H240v280Zm240-280Zm0-240Zm0 160Z" />
  </svg>
)

export { IconTempleBuddhistSharp as default }
