import React from 'react'
import { IconProps } from './types'

const IconPersonOffRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m763-84-77-76H240q-33 0-56.5-23.5T160-240v-32q0-34 17.5-62.5T224-378q45-23 91.5-37t94.5-21L83-763q-12-12-11.5-28.5T84-820q12-12 28.5-12t28.5 12l679 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm-27-294q29 14 46 42.5t18 61.5L666-408q18 7 35.5 14t34.5 16ZM568-506 346-728q23-34 58-53t76-19q66 0 113 47t47 113q0 41-19 76t-53 58Z" />
  </svg>
)

export { IconPersonOffRoundedFilled as default }
