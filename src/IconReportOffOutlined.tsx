import React from 'react'
import { IconProps } from './types.js'

export const IconReportOffOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m792-282-58-56 26-26v-232L596-760H364l-26 26-56-58 48-48h300l210 210v298l-48 50ZM520-552v-128h-80v48l80 80ZM820-28 678-170l-48 50H330L120-332v-298l48-48L28-820l56-56L876-84l-56 56ZM536-536ZM364-200h232l26-26-396-396-26 26v232l164 164Zm116-80q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-56-144Z" />
  </svg>
)
