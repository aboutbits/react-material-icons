import React from 'react'
import { IconProps } from './types'

const IconFloorRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-160v-140q0-17 11.5-28.5T300-340h140v-140q0-17 11.5-28.5T480-520h140v-140q0-17 11.5-28.5T660-700h140v-100q0-17 11.5-28.5T840-840q17 0 28.5 11.5T880-800v140q0 17-11.5 28.5T840-620H700v140q0 17-11.5 28.5T660-440H520v140q0 17-11.5 28.5T480-260H340v140q0 17-11.5 28.5T300-80H160q-17 0-28.5-11.5T120-120q0-17 11.5-28.5T160-160h100Z" />
  </svg>
)

export { IconFloorRoundedFilled as default }
