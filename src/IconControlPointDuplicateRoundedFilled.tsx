import React from 'react'
import { IconProps } from './types.js'

export const IconControlPointDuplicateRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M177-169Q97-214 48.5-297T0-480q0-100 49.5-183.5T184-795q20-11 38 2t18 36q0 10-6 21t-16 16q-64 38-101 101.5T80-480q0 75 37 138.5T218-240q10 5 16 16t6 22q0 23-19 35t-44-2Zm423 49q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T240-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T600-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T960-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T600-120Zm0-200q17 0 28.5-11.5T640-360v-80h80q17 0 28.5-11.5T760-480q0-17-11.5-28.5T720-520h-80v-80q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600v80h-80q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440h80v80q0 17 11.5 28.5T600-320Z" />
  </svg>
)
