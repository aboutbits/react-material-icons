import React from 'react'
import { IconProps } from './types'

export const IconSegmentRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-240q-17 0-28.5-11.5T360-280q0-17 11.5-28.5T400-320h400q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H400Zm0-200q-17 0-28.5-11.5T360-480q0-17 11.5-28.5T400-520h400q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H400ZM160-640q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
  </svg>
)
