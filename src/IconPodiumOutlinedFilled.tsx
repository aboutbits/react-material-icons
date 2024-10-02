import React from 'react'
import { IconProps } from './types'

export const IconPodiumOutlinedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m160-360-40-280h120q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500-780q0 33-23.5 56.5T420-700q-13 0-24-3.5T374-715q-24 8-38.5 29T321-640h519l-40 280H693l7-69q5-49-27.5-85T591-550H369q-49 0-81.5 36T260-429l7 69H160Zm187 210-27-285q-2-22 12-38.5t37-16.5h222q23 0 37 16.5t12 38.5l-27 285H347Z" />
  </svg>
)
