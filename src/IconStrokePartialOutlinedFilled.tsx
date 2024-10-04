import React from 'react'
import { IconProps } from './types.js'

export const IconStrokePartialOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M477-80q-83 0-156-31.5T194-197q-54-54-85.5-127T77-480q0-83 31.5-156T194-763q54-54 127-85.5T477-880q83 0 156 31.5T760-763q54 54 85.5 127T877-480q0 83-31.5 156T760-197q-54 54-127 85.5T477-80Zm278-240H372l-40 40h396q8-10 14.5-19.5T755-320Zm40-120H493l-40 40h334q2-10 4-19.5t4-20.5Zm-8-120H613l-40 40h222q-2-11-4-20.5t-4-19.5Zm-57-116-36 36h61q-5-10-11.5-18.5T730-676ZM224-284l451-449q-41-32-91-49.5T477-800q-134 0-227 93t-93 227q0 56 17.5 105.5T224-284Zm253 124q43 0 82-10t74-30H321q35 20 74 30t82 10Z" />
  </svg>
)