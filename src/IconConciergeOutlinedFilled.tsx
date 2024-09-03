import React from 'react'
import { IconProps } from './types'

const IconConciergeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M400-80v-80h520v80H400Zm40-120q0-81 51-141.5T620-416v-25q0-17 11.5-28.5T660-481q17 0 28.5 11.5T700-441v25q77 14 128.5 74.5T880-200H440ZM40-440h160v-440H40v440Zm240 0h79l282-105q17-7 28-22.5t11-34.5q0-16-11-27t-27-11H520l-70 27-14-37 84-30h280q32 0 56-23t24-57L560-880l-280 78v362Z" />
  </svg>
)

export { IconConciergeOutlinedFilled as default }
