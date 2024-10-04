import React from 'react'
import { IconProps } from './types.js'

export const IconSlabSerifSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M230-240h206v-70h-87l31-80h194l30 80h-85v70h211v-70h-40L528-720h-95L270-310h-40v70Zm175-215 68-177h7l68 177H405ZM80-80v-800h800v800H80Z" />
  </svg>
)