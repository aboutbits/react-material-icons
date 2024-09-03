import React from 'react'
import { IconProps } from './types'

const IconCheckIndeterminateSmallSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-440v-80h480v80H240Z" />
  </svg>
)

export { IconCheckIndeterminateSmallSharp as default }