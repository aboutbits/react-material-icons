import React from 'react'
import { IconProps } from './types.js'

export const IconBidLandscapeSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm80-162v82h560v-350L522-280 360-442 200-282Zm0-114 160-160 158 158 242-272v-90H200v364Zm0-154v-120 272-158 274-160 162-270Zm0 154v-364 362-158 160Zm0 114v-160 162-270 350-82Z" />
  </svg>
)
