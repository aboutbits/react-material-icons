import React from 'react'
import { IconProps } from './types'

const IconAirlineSeatLegroomReducedSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M560-120v-120l40-160H240v-440h240v240h250l38 51-88 309h120v120H560Zm-80-160H120v-560h80v480h280v80Z" />
  </svg>
)

export { IconAirlineSeatLegroomReducedSharp as default }
