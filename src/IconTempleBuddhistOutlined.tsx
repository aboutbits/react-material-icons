import React from 'react'
import { IconProps } from './types.js'

export const IconTempleBuddhistOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-80v-366q-52-13-86-55t-34-98h80q0 32 23.5 55.5T199-520h41v-86q-52-13-86-55t-34-98h80q0 32 23.5 55.5T279-680h21l180-240 180 240h21q32 0 55.5-23.5T760-759h80q0 56-34 98t-86 55v86h41q32 0 55.5-23.5T840-599h80q0 56-34 98t-86 55v366H520v-160q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240v160H160Zm240-600h160l-80-107-80 107Zm-80 160h320v-80H320v80Zm-80 360h120v-80q0-50 35-85t85-35q50 0 85 35t35 85v80h120v-280H240v280Zm240-280Zm0-240Zm0 160Z" />
  </svg>
)
