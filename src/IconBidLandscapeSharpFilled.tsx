import React from 'react'
import { IconProps } from './types.js'

export const IconBidLandscapeSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-120v-720h720v720H120Zm640-550L518-398 360-556 200-396v114l160-160 162 162 238-270v-120Z" />
  </svg>
)
