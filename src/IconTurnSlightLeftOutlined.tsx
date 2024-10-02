import React from 'react'
import { IconProps } from './types'

export const IconTurnSlightLeftOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M520-160v-304L320-664v90h-80v-226h226v80h-90l201 201q11 11 17 25.5t6 30.5v303h-80Z" />
  </svg>
)
