import React from 'react'
import { IconProps } from './types'

export const IconCampaignRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M840-440h-80q-17 0-28.5-11.5T720-480q0-17 11.5-28.5T760-520h80q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440ZM664-288q10-14 26-16t30 8l64 48q14 10 16 26t-8 30q-10 14-26 16t-30-8l-64-48q-14-10-16-26t8-30Zm120-424-64 48q-14 10-30 8t-26-16q-10-14-8-30t16-26l64-48q14-10 30-8t26 16q10 14 8 30t-16 26ZM200-360h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l139-84q20-12 40.5 0t20.5 35v338q0 23-20.5 35t-40.5 0l-139-84h-40v120q0 17-11.5 28.5T240-200q-17 0-28.5-11.5T200-240v-120Zm240-22v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" />
  </svg>
)
