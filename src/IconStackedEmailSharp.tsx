import React from 'react'
import { IconProps } from './types.js'

export const IconStackedEmailSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-280v-560h720v560H200Zm360-189L280-663v303h560v-303L560-469Zm0-97 280-194H280l280 194ZM40-120v-580h80v500h660v80H40Zm800-640H280h560Z" />
  </svg>
)
