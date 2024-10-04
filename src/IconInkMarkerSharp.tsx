import React from 'react'
import { IconProps } from './types.js'

export const IconInkMarkerSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m272-104-38-38-90 90-90-94 88-88-38-40 583-583 170 170-585 583Zm172-396L216-274l58 58 226-228-56-56Z" />
  </svg>
)
