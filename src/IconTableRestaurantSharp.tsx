import React from 'react'
import { IconProps } from './types'

const IconTableRestaurantSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M173-600h614l-34-120H208l-35 120Zm307-60Zm192 140H289l-11 80h404l-10-80ZM160-160l49-360H67l80-280h666l80 280H752l48 360h-80l-27-200H267l-27 200h-80Z" />
  </svg>
)

export { IconTableRestaurantSharp as default }
