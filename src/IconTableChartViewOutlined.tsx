import React from 'react'
import { IconProps } from './types.js'

export const IconTableChartViewOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m296-80-56-56 276-277 140 140 207-207 57 57-264 263-140-140L296-80Zm-136-40q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h560q33 0 56.5 23.5T800-760v168H160v472Zm0-552h560v-88H160v88Zm0 0v-88 88Z" />
  </svg>
)
