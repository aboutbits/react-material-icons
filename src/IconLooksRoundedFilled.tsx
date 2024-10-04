import React from 'react'
import { IconProps } from './types.js'

export const IconLooksRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-640q-140 0-242 94T122-315q-2 16-14 25.5T80-280q-17 0-29-10.5T41-316q7-84 44-158t96-128.5q59-54.5 136-86T480-720q86 0 163 31.5t136 86Q838-548 875-474t44 158q2 15-10 25.5T880-280q-16 0-28-9.5T838-315q-14-137-116-231t-242-94Zm0 160q-75 0-130 48t-67 120q-2 15-14.5 23.5T240-280q-17 0-28.5-10.5T202-316q14-103 92.5-173.5T480-560q107 0 185.5 70.5T758-316q2 15-9.5 25.5T720-280q-16 0-28.5-8.5T677-312q-12-72-67-120t-130-48Z" />
  </svg>
)