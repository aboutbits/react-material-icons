import React from 'react'
import { IconProps } from './types'

const IconMilitaryTechSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-880h400v362L500-412l28 92h152l-124 88 48 152-124-94-124 94 48-152-124-88h152l28-92-180-106v-362Zm80 80v234l80 48v-282h-80Zm240 0h-80v282l80-48v-234ZM480-647Zm-40-12Zm80 0Z" />
  </svg>
)

export { IconMilitaryTechSharp as default }
