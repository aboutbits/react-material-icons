import React from 'react'
import { IconProps } from './types'

const IconSignalCellular4BarOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m80-80 800-800v800H80Z" />
  </svg>
)

export { IconSignalCellular4BarOutlinedFilled as default }
