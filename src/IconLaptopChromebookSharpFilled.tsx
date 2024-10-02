import React from 'react'
import { IconProps } from './types'

export const IconLaptopChromebookSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M0-160v-80h80v-600h800v600h80v80H0Zm400-80h160v-40H400v40Z" />
  </svg>
)
