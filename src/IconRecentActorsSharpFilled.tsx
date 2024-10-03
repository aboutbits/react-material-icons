import React from 'react'
import { IconProps } from './types.js'

export const IconRecentActorsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M40-200v-560h560v560H40Zm80-146q44-26 94-40t106-14q56 0 106 14t94 40v-334H120v334Zm200-84q-46 0-78-32t-32-78q0-46 32-78t78-32q46 0 78 32t32 78q0 46-32 78t-78 32Zm360 230v-560h80v560h-80Zm160 0v-560h80v560h-80Z" />
  </svg>
)
