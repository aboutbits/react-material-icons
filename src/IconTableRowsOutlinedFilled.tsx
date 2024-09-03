import React from 'react'
import { IconProps } from './types'

const IconTableRowsOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-120H120v-186h720v186Zm0-266H120v-189h720v189Zm0-269H120v-185h720v185Z" />
  </svg>
)

export { IconTableRowsOutlinedFilled as default }
