import React from 'react'
import { IconProps } from './types.js'

export const IconScubaDivingOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-40 96-88l114-152 31-178q3-24 19-42.5t41-24.5l379-115 80-160 120-120 40 40-100 116-60 184-200 140-234 74-46 126L160-40Zm-40-320q-33 0-56.5-23.5T40-440q0-33 23.5-56.5T120-520q33 0 56.5 23.5T200-440q0 33-23.5 56.5T120-360Zm236-196q-24 7-45.5-5.5T282-598q-7-24 5.5-46t36.5-28l182-48 31 116-181 48Z" />
  </svg>
)
