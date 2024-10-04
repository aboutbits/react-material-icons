import React from 'react'
import { IconProps } from './types.js'

export const IconWifiChannelSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120q11-87 30.5-190.5T200-496q26-69 56-106.5t64-37.5q20 0 40 14t39 43q19 29 35.5 70t29.5 96q13-103 30-181.5T533-731q22-54 48.5-81.5T640-840q43 0 77 51t59 145q31 116 45 260t19 264h-80q-18-88-56-164t-64-76q-26 0-64.5 76T520-120h-80q-8-72-21.5-141.5T388-391q-17-60-34-103.5T320-555q-17 17-34 60t-34 103q-17 60-30.5 129.5T200-120h-80Zm420-260q23-29 48-44.5t52-15.5q27 0 52 15.5t48 44.5q-9-76-20.5-139.5T695-633q-13-50-27-82t-28-43q-14 11-28 43t-27 82q-13 50-24.5 113.5T540-380Z" />
  </svg>
)