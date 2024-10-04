import React from 'react'
import { IconProps } from './types.js'

export const IconVr180Create2dSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-480h480v480H400Zm100-120h280l-92-120-68 90-48-66-72 96Zm-180-50q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640H320v390Z" />
  </svg>
)
