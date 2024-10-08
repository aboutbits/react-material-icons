import React from 'react'
import { IconProps } from './types'

const IconOutgoingMailSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m720-160-56-56 63-64H560v-80h167l-63-64 56-56 160 160-160 160ZM416-520l264-154v-86h-10L416-613 169-760h-9v88l256 152ZM155-280q-31 0-53-22t-22-53v-410q0-31 22-53t53-22h530q31 0 53 22t22 53v209q-10-2-20-3t-20-1q-98 0-169 70.5T480-320q0 10 1 20t3 20H155Z" />
  </svg>
)

export { IconOutgoingMailSharpFilled as default }
