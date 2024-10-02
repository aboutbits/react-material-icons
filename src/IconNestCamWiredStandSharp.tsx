import React from 'react'
import { IconProps } from './types'

export const IconNestCamWiredStandSharp: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-280q-50 0-85 34.5T360-160v40h240v-40q0-51-34.5-85.5T480-280ZM320-650q0 67 45 116t112 57l164 17v-380l-164 16q-67 7-112 56.5T320-650ZM680-40H280v-120q0-84 58.5-142T480-360q11 0 21 1t20 3l22-34-74-7q-97-10-163-82.5T240-650q0-99 65.5-171.5T469-904l252-24v555l-88-8-38 57q39 27 62 70t23 94v120Zm-200-80Zm161-530Z" />
  </svg>
)
