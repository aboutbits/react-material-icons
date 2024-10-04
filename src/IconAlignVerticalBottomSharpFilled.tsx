import React from 'react'
import { IconProps } from './types'

const IconAlignVerticalBottomSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-80v-80h800v80H80Zm200-160v-640h120v640H280Zm280 0v-400h120v400H560Z" />
  </svg>
)

export { IconAlignVerticalBottomSharpFilled as default }
