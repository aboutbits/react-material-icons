import React from 'react'
import { IconProps } from './types.js'

export const IconFullStackedBarChartSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160v-120h160v120H160Zm0-160v-160h160v160H160Zm0-200v-280h160v280H160Zm240 360v-280h160v280H400Zm0-320v-160h160v160H400Zm0-200v-120h160v120H400Zm240 520v-80h160v80H640Zm0-120v-160h160v160H640Zm0-200v-320h160v320H640Z" />
  </svg>
)