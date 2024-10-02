import React from 'react'
import { IconProps } from './types'

export const IconAddAdSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M720-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80ZM40-120v-720h720v280h-80v-80H120v440h520v80H40Z" />
  </svg>
)
