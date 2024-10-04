import React from 'react'
import { IconProps } from './types.js'

export const IconReorderRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h640q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H160Zm0-160q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h640q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360H160Zm0-160q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h640q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520H160Zm0-160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h640q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160Z" />
  </svg>
)