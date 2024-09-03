import React from 'react'
import { IconProps } from './types'

const IconViewColumnRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-200q-33 0-56.5-23.5T120-280v-400q0-33 23.5-56.5T200-760h53q33 0 56.5 23.5T333-680v400q0 33-23.5 56.5T253-200h-53Zm253 0q-33 0-56.5-23.5T373-280v-400q0-33 23.5-56.5T453-760h53q33 0 56.5 23.5T586-680v400q0 33-23.5 56.5T506-200h-53Zm253 0q-33 0-56.5-23.5T626-280v-400q0-33 23.5-56.5T706-760h53q33 0 56.5 23.5T839-680v400q0 33-23.5 56.5T759-200h-53Z" />
  </svg>
)

export { IconViewColumnRoundedFilled as default }
