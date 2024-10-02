import React from 'react'
import { IconProps } from './types'

export const IconAlignVerticalTopSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-80v-640h120v640H280Zm280-240v-400h120v400H560ZM80-800v-80h800v80H80Z" />
  </svg>
)
