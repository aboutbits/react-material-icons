import React from 'react'
import { IconProps } from './types.js'

export const IconHeartBrokenRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M481-146q-14 0-27.5-5T429-166q-109-96-177-161.5t-106.5-115Q107-492 93.5-533T80-620q0-92 64-156t156-64q66 0 116 25.5t36 73.5l-37 130q-5 20 6.5 35.5T453-560h67l-26 254q-1 8 6.5 9t9.5-6l74-245q6-20-6-36t-32-16h-66l61-181q11-35 46-47t73-12q92 0 156 64t64 156q0 44-16 87t-55.5 95q-39.5 52-106 117.5T534-166q-11 10-25 15t-28 5Z" />
  </svg>
)
