import React from 'react'
import { IconProps } from './types'

const IconReminderOutlined: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M260-640h40v-40q0-17-11.5-28.5T260-720q-17 0-28.5 11.5T220-680q0 17 11.5 28.5T260-640Zm180 0q17 0 28.5-11.5T480-680q0-17-11.5-28.5T440-720q-17 0-28.5 11.5T400-680v40h40Zm62 300ZM419-80q-28 0-52.5-12T325-126L107-403l19-20q20-21 48-25t52 11l74 45v-168h-40q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 20.5 2t19.5 5v-47q0-17 11.5-28.5T340-880q17 0 29 11.5t12 28.5v56q14-8 28.5-12t30.5-4q50 0 85 35t35 85q0 50-35 85t-85 35h-59v312l-97-60 104 133q6 7 14 11t17 4h221q33 0 56.5-23.5T720-240v-160q0-17-11.5-28.5T680-440H461v-80h219q50 0 85 35t35 85v160q0 66-47 113T640-80H419Z" />
  </svg>
)

export { IconReminderOutlined as default }