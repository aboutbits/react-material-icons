import React from 'react'
import { IconProps } from './types'

export const IconTransitEnterexitSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M240-240v-400h120v190l272-272 88 88-274 274h194v120H240Z" />
  </svg>
)
