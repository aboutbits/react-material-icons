import React from 'react'
import { IconProps } from './types'

export const IconRateReviewOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-400h123l199-200q9-9 13.5-20.5T580-643q0-11-4.5-21.5T563-684l-37-38q-9-9-20-13.5t-23-4.5q-11 0-22 4.5T441-722L240-523v123Zm242-204-38-37 39-39 37 38-38 38Zm-34 204h272v-80H528l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Z" />
  </svg>
)
