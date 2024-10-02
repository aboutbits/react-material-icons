import React from 'react'
import { IconProps } from './types'

export const IconSignalCellular3BarOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v800H80Zm520-80h200v-526L600-486v326Z" />
  </svg>
)
