import React from 'react'
import { IconProps } from './types'

const IconStackedBarChartRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-160q-17 0-28.5-11.5T160-200v-360q0-17 11.5-28.5T200-600h80q17 0 28.5 11.5T320-560v360q0 17-11.5 28.5T280-160h-80Zm0-480q-17 0-28.5-11.5T160-680v-80q0-17 11.5-28.5T200-800h80q17 0 28.5 11.5T320-760v80q0 17-11.5 28.5T280-640h-80Zm240 480q-17 0-28.5-11.5T400-200v-240q0-17 11.5-28.5T440-480h80q17 0 28.5 11.5T560-440v240q0 17-11.5 28.5T520-160h-80Zm0-360q-17 0-28.5-11.5T400-560v-80q0-17 11.5-28.5T440-680h80q17 0 28.5 11.5T560-640v80q0 17-11.5 28.5T520-520h-80Zm240 360q-17 0-28.5-11.5T640-200v-120q0-17 11.5-28.5T680-360h80q17 0 28.5 11.5T800-320v120q0 17-11.5 28.5T760-160h-80Zm0-240q-17 0-28.5-11.5T640-440v-80q0-17 11.5-28.5T680-560h80q17 0 28.5 11.5T800-520v80q0 17-11.5 28.5T760-400h-80Z" />
  </svg>
)

export { IconStackedBarChartRounded as default }
