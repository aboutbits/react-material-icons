import React from 'react'
import { IconProps } from './types'

export const IconMilitaryTechSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m356-80 48-152-124-88h152l28-92-180-106v-362h400v362L500-412l28 92h152l-124 88 48 152-124-94-124 94Zm124-414 40-24v-282h-80v282l40 24Z" />
  </svg>
)
