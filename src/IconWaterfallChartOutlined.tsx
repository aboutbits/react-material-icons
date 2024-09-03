import React from 'react'
import { IconProps } from './types'

const IconWaterfallChartOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-160v-240h120v240H120Zm200-240v-200h120v200H320Zm200-200v-200h120v200H520Zm200 440v-640h120v640H720Z" />
  </svg>
)

export { IconWaterfallChartOutlined as default }
