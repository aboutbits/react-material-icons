import React from 'react'
import { IconProps } from './types'

const IconHorizontalRuleSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-440v-80h640v80H160Z" />
  </svg>
)

export { IconHorizontalRuleSharp as default }
