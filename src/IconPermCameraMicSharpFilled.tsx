import React from 'react'
import { IconProps } from './types.js'

export const IconPermCameraMicSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-120v-640h206l74-80h240l74 80h206v640H520v-124q88-14 144-81t56-155h-80q0 66-47 113t-113 47q-66 0-113-47t-47-113h-80q0 88 56 155t144 81v124H80Zm400-280q33 0 56.5-23.5T560-480v-160q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640v160q0 33 23.5 56.5T480-400Z" />
  </svg>
)
