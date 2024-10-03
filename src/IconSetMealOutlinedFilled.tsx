import React from 'react'
import { IconProps } from './types.js'

export const IconSetMealOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-360q-33 0-56.5-23.5T40-440v-360q0-33 23.5-56.5T120-880h720q33 0 56.5 23.5T920-800v360q0 33-23.5 56.5T840-360H120Zm3 140-3-60 719-38 3 60-719 38Zm-3 99v-60h720v60H120Zm290-379q74 0 142.5-26T672-606q6 42 44 64t84 22v-200q-46 0-84 22.5T672-632q-53-52-120.5-80T410-740q-79 0-152 27.5T140-620q45 65 118 92.5T410-500Z" />
  </svg>
)
