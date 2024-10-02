import React from 'react'
import { IconProps } from './types'

export const IconFileCopyOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-234 240-834v-86h360l240 240v446ZM820-28 648-200H240v-408L28-820l56-56L876-84l-56 56ZM560-640h220L560-860l220 220-220-220v220ZM80-40v-600h80v520h480v80H80Z" />
  </svg>
)
