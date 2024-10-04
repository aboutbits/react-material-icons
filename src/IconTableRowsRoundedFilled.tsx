import React from 'react'
import { IconProps } from './types.js'

export const IconTableRowsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-17 0-28.5-11.5T120-160v-106q0-17 11.5-28.5T160-306h640q17 0 28.5 11.5T840-266v106q0 17-11.5 28.5T800-120H160Zm0-266q-17 0-28.5-11.5T120-426v-109q0-17 11.5-28.5T160-575h640q17 0 28.5 11.5T840-535v109q0 17-11.5 28.5T800-386H160Zm0-269q-17 0-28.5-11.5T120-695v-105q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800v105q0 17-11.5 28.5T800-655H160Z" />
  </svg>
)