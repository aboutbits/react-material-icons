import React from 'react'
import { IconProps } from './types'

const IconLteMobiledataBadgeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-320h200v-80H240v-240h-80v320Zm240 0h80v-240h80v-80H320v80h80v240Zm200 0h200v-80H680v-40h80v-80h-80v-40h120v-80H600v320ZM40-120v-720h880v720H40Z" />
  </svg>
)

export { IconLteMobiledataBadgeSharpFilled as default }
