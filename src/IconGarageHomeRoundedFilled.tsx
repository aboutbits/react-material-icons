import React from 'react'
import { IconProps } from './types.js'

export const IconGarageHomeRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-17 0-28.5-11.5T160-160v-400q0-19 8.5-36t23.5-28l240-180q11-8 23-12t25-4q13 0 25 4t23 12l240 180q15 11 23.5 28t8.5 36v400q0 17-11.5 28.5T760-120h-40q-17 0-28.5-11.5T680-160v-320q0-17-11.5-28.5T640-520H320q-17 0-28.5 11.5T280-480v320q0 17-11.5 28.5T240-120h-40Zm200-80q-17 0-28.5-11.5T360-240q0-17 11.5-28.5T400-280h160q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H400Zm0-160q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400q0 17-11.5 28.5T560-360H400Z" />
  </svg>
)
