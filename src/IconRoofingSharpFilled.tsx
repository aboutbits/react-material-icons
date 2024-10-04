import React from 'react'
import { IconProps } from './types'

const IconRoofingSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M360-160v-240h240v240H360ZM88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-392-299L88-440Z" />
  </svg>
)

export { IconRoofingSharpFilled as default }
