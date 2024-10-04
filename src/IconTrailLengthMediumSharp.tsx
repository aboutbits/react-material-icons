import React from 'react'
import { IconProps } from './types'

const IconTrailLengthMediumSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-280v-80h200q-14-17-22.5-37T444-440H200v-80h244q5-23 13.5-43t22.5-37H280v-80h360q83 0 141.5 58.5T840-480q0 83-58.5 141.5T640-280H280Zm360-80q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm-520 80v-80h120v80H120Zm520-200Z" />
  </svg>
)

export { IconTrailLengthMediumSharp as default }
