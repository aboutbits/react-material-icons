import React from 'react'
import { IconProps } from './types'

export const IconWristOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-84 244-280H40v-400h184l44-45q17-17 39-26t46-9h407q17 0 28.5 11.5T800-720q0 17-11.5 28.5T760-680H560v60h280q17 0 28.5 11.5T880-580q0 17-11.5 28.5T840-540H560v60h320q17 0 28.5 11.5T920-440q0 17-11.5 28.5T880-400H560v60h240q17 0 28.5 11.5T840-300q0 17-11.5 28.5T800-260H485l6 12q17 35 10.5 72.5T468-111l-28 27Z" />
  </svg>
)
