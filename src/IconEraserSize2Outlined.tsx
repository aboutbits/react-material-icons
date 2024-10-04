import React from 'react'
import { IconProps } from './types'

const IconEraserSize2Outlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M310-190q-50 0-85-35t-35-85q0-23 9-45.5t26-39.5l340-340q17-17 39.5-26t45.5-9q50 0 85 35t35 85q0 23-9 45.5T735-565L395-225q-17 17-39.5 26t-45.5 9Z" />
  </svg>
)

export { IconEraserSize2Outlined as default }
