import React from 'react'
import { IconProps } from './types'

const IconSignalCellular3BarRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M177-80q-18 0-29.5-12T136-120q0-8 3-15t9-13l664-664q6-6 13-9t15-3q16 0 28 11.5t12 29.5v643q0 25-17.5 42.5T820-80H177Zm423-80h200v-526L600-486v326Z" />
  </svg>
)

export { IconSignalCellular3BarRoundedFilled as default }
