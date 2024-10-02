import React from 'react'
import { IconProps } from './types'

export const IconTimer3SelectSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200v-120h240v-100H160v-120h240v-100H160v-120h360v220l-60 60 60 60v220H160Zm440 0v-80h160v-40H600v-200h240v80H680v40h160v200H600Z" />
  </svg>
)
