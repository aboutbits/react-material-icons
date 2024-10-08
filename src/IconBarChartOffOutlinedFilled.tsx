import React from 'react'
import { IconProps } from './types'

const IconBarChartOffOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-440h160v440H160Zm240 0v-400l160 160v240H400Zm160-354L400-674v-126h160v286Zm240 240L640-434v-6h160v166Zm-9 219L55-791l57-57 736 736-57 57Z" />
  </svg>
)

export { IconBarChartOffOutlinedFilled as default }
