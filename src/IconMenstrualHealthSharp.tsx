import React from 'react'
import { IconProps } from './types'

const IconMenstrualHealthSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-885q49 59 88 109.5t70 96.5l242-181v380q0 83-31.5 156T763-197q-54 54-127 85.5T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480v-380l242 181q31-45 70-96t88-110ZM160-700v220q0 44 11.5 84.5T203-320q-2-10-2.5-19.5T200-360q0-57 18.5-117.5T279-610l-119-90Zm320-60Q370-626 325-526t-45 166q0 83 58.5 141.5T480-160q83 0 141.5-58.5T680-360q0-66-45-167T480-760Zm320 60-119 89q42 72 60.5 132.5T760-360q0 11-.5 20.5T757-320q20-35 31.5-75.5T800-480v-220Z" />
  </svg>
)

export { IconMenstrualHealthSharp as default }