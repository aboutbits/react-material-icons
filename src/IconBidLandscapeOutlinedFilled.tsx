import React from 'react'
import { IconProps } from './types'

const IconBidLandscapeOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-550L518-398 360-556 200-396v114l160-160 162 162 238-270v-120Z" />
  </svg>
)

export { IconBidLandscapeOutlinedFilled as default }
