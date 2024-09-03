import React from 'react'
import { IconProps } from './types'

const IconAddChartSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Zm80-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM120-120v-720h440v280h280v440H120Z" />
  </svg>
)

export { IconAddChartSharpFilled as default }
