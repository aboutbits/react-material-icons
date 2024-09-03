import React from 'react'
import { IconProps } from './types'

const IconTableRestaurantSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M672-520H289l-11 80h404l-10-80ZM160-160l49-360H67l80-280h666l80 280H752l48 360h-80l-27-200H267l-27 200h-80Z" />
  </svg>
)

export { IconTableRestaurantSharpFilled as default }
