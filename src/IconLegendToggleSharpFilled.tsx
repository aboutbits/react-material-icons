import React from 'react'
import { IconProps } from './types'

const IconLegendToggleSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-200v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-94l240-146 200 142 200-142v98L600-520 397-664 160-520Z" />
  </svg>
)

export { IconLegendToggleSharpFilled as default }
