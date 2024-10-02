import React from 'react'
import { IconProps } from './types'

export const IconBackpackOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-56 34-98t86-56v-86h120v80h160v-80h120v86q52 14 86 56t34 98v480q0 33-23.5 56.5T720-80H240Zm340-240h80v-160H300v80h280v80Z" />
  </svg>
)
