import React from 'react'
import { IconProps } from './types'

const IconChartDataSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56ZM120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0-560v560-560Z" />
  </svg>
)

export { IconChartDataSharp as default }
