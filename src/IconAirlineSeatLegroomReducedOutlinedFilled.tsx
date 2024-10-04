import React from 'react'
import { IconProps } from './types.js'

export const IconAirlineSeatLegroomReducedOutlinedFilled: React.FC<
  IconProps
> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-120l40-160H320q-33 0-56.5-23.5T240-480v-360h240v240h200q33 0 56.5 23.5T760-520l-80 280h58q27 0 44.5 16.5T800-180q0 27-16.5 43.5T740-120H560Zm-80-160H200q-33 0-56.5-23.5T120-360v-480h80v480h280v80Z" />
  </svg>
)