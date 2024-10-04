import React from 'react'
import { IconProps } from './types'

const IconNightSightMaxOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-520v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM440-120q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 72.5T400-600q0 100 70 170t170 70q32 0 61-8t55-22q-18 115-106.5 192.5T440-120Z" />
  </svg>
)

export { IconNightSightMaxOutlinedFilled as default }
