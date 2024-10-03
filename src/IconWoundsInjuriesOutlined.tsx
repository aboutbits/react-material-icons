import React from 'react'
import { IconProps } from './types.js'

export const IconWoundsInjuriesOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m136-80-56-56 88-88-88-24 21-77 87 24-23-88 77-21 24 88 137-137-88-24 21-77 87 23-23-87 77-21 24 88 137-137-88-24 21-77 88 23-24-87 77-21 24 88 88-88 56 56-88 88 88 24-21 77-87-24 23 88-77 21-24-88-137 137 88 24-21 77-87-23 23 87-77 21-24-88-137 137 88 24-21 77-88-23 24 87-77 21-24-88-88 88Z" />
  </svg>
)
