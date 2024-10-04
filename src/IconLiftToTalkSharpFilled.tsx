import React from 'react'
import { IconProps } from './types.js'

export const IconLiftToTalkSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m179-202 128-358h-59l106-159q5-6 3.5-13t-6.5-12l-14-14-203 176q-17 14-25.5 33.5T100-507v247H40v-247q0-35 14.5-66.5T95-628l245-212 49 49 41-112 393 145-50 139q29 5 48 27t19 52q0 5-.5 10t-2.5 10h3q33 0 56.5 23.5T920-440q0 24-12.5 43T875-368q2 7 3.5 13.5T880-340q0 33-23.5 56.5T800-260h-3q2 5 2.5 10t.5 10q0 33-23.5 56.5T720-160H609L574-56 179-202Zm371-31 144-403-243-90-144 403 243 90Zm80 13h90q8 0 14-6t6-14q0-8-6-14t-14-6h-75l-15 40Zm36-100h134q8 0 14-6t6-14q0-8-6-14t-14-6H681l-15 40Zm36-100h138q8 0 14-6t6-14q0-8-6-14t-14-6H716l-14 40Zm36-100h22q8 0 14-6t6-14q0-8-6-14t-14-6h-8l-14 40Z" />
  </svg>
)