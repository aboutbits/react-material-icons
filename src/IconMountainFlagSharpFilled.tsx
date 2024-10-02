import React from 'react'
import { IconProps } from './types'

export const IconMountainFlagSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m281-487 55-113h104v-280h280l-40 80 40 80H520v120h100l57 114-120 80-77-39-77 39-122-81ZM80-80l165-335 152 101 83-41 83 41 150-99L880-80H80Z" />
  </svg>
)
