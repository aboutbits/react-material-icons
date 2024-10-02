import React from 'react'
import { IconProps } from './types'

export const IconPottedPlantOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M342-80q-28 0-49-17t-28-44l-45-179h520l-45 179q-7 27-28 44t-49 17H342Zm138-560q0-100 70-170t170-70q0 90-57 156t-143 80v84h320v120q0 33-23.5 56.5T760-360H200q-33 0-56.5-23.5T120-440v-120h320v-84q-86-14-143-80t-57-156q100 0 170 70t70 170Z" />
  </svg>
)
