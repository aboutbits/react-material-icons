import React from 'react'
import { IconProps } from './types'

const IconLineEndCircleRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M640-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0 80q-90 0-156.5-57T403-440H120q-17 0-28.5-11.5T80-480q0-17 11.5-28.5T120-520h283q14-86 80.5-143T640-720q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-240Z" />
  </svg>
)

export { IconLineEndCircleRounded as default }