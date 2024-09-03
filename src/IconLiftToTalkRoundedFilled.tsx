import React from 'react'
import { IconProps } from './types'

const IconLiftToTalkRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M524-80q-7 0-14-1.5T496-85l-243-90q-24-9-38-29.5T201-249q0-5 5-28l101-283q-19 0-28-16.5t2-32.5l73-110q5-6 3.5-13t-6.5-12l-14-14-203 176q-17 14-25.5 33.5T100-507v217q0 13-8.5 21.5T70-260q-13 0-21.5-8.5T40-290v-217q0-35 14.5-66.5T95-628l217-188q12-11 27.5-10t26.5 12l23 23 13-36q9-24 29.5-38.5T477-880q8 0 14.5 1t14.5 4l243 90q24 9 38 30t14 45q0 6-5 27l-23 64q29 5 48 27t19 52q0 5-.5 10t-2.5 10h3q33 0 56.5 23.5T920-440q0 24-12.5 43T875-368q2 7 3.5 13.5T880-340q0 33-23.5 56.5T800-260h-3q2 5 2.5 10t.5 10q0 33-23.5 56.5T720-160H609l-9 27q-8 25-29.5 39T524-80Zm26-153 144-403-243-90-144 403 243 90Zm80 13h90q8 0 14-6t6-14q0-8-6-14t-14-6h-75l-15 40Zm36-100h134q8 0 14-6t6-14q0-8-6-14t-14-6H681l-15 40Zm36-100h138q8 0 14-6t6-14q0-8-6-14t-14-6H716l-14 40Zm36-100h22q8 0 14-6t6-14q0-8-6-14t-14-6h-8l-14 40Z" />
  </svg>
)

export { IconLiftToTalkRoundedFilled as default }
