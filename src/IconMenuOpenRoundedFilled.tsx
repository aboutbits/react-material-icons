import React from 'react'
import { IconProps } from './types.js'

export const IconMenuOpenRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h440q17 0 28.5 11.5T640-280q0 17-11.5 28.5T600-240H160Zm596-68L612-452q-12-12-12-28t12-28l144-144q11-11 28-11t28 11q11 11 11 28t-11 28L696-480l116 116q11 11 11 28t-11 28q-11 11-28 11t-28-11ZM160-440q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h320q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h440q17 0 28.5 11.5T640-680q0 17-11.5 28.5T600-640H160Z" />
  </svg>
)