import React from 'react'
import { IconProps } from './types'

export const IconMarkAsUnreadSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M80-280v-430l340-170 392 200H637L420-790 160-661v381H80Zm120 160v-520h680v520H200Zm340-226 260-134v-80L540-426 280-560v80l260 134Z" />
  </svg>
)
