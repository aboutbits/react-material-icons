import React from 'react'
import { IconProps } from './types.js'

export const IconTocRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-280q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h480q17 0 28.5 11.5T680-320q0 17-11.5 28.5T640-280H160Zm0-160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h480q17 0 28.5 11.5T680-480q0 17-11.5 28.5T640-440H160Zm0-160q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h480q17 0 28.5 11.5T680-640q0 17-11.5 28.5T640-600H160Zm640 320q-17 0-28.5-11.5T760-320q0-17 11.5-28.5T800-360q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280Zm0-160q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440Zm0-160q-17 0-28.5-11.5T760-640q0-17 11.5-28.5T800-680q17 0 28.5 11.5T840-640q0 17-11.5 28.5T800-600Z" />
  </svg>
)