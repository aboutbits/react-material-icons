import React from 'react'
import { IconProps } from './types.js'

export const IconFileCopyOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 240-834v-6q0-33 23.5-56.5T320-920h280l240 240v446ZM820-28 648-200H320q-33 0-56.5-23.5T240-280v-328L28-820l56-56L876-84l-56 56ZM560-640h220L560-860l220 220-220-220v220ZM160-40q-33 0-56.5-23.5T80-120v-520h80v520h480v80H160Z" />
  </svg>
)
