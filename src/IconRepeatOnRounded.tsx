import React from 'react'
import { IconProps } from './types'

const IconRepeatOnRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M120-40q-33 0-56.5-23.5T40-120v-720q0-33 23.5-56.5T120-920h720q33 0 56.5 23.5T920-840v720q0 33-23.5 56.5T840-40H120Zm154-160h406q33 0 56.5-23.5T760-280v-120q0-17-11.5-28.5T720-440q-17 0-28.5 11.5T680-400v120H274l34-34q12-12 11.5-28T308-370q-12-12-28.5-12.5T251-371L148-268q-6 6-8.5 13t-2.5 15q0 8 2.5 15t8.5 13l103 103q12 12 28.5 11.5T308-110q11-12 11.5-28T308-166l-34-34Zm412-480-34 34q-12 12-11.5 28t11.5 28q12 12 28.5 12.5T709-589l103-103q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13L709-851q-12-12-28.5-11.5T652-850q-11 12-11.5 28t11.5 28l34 34H280q-33 0-56.5 23.5T200-680v120q0 17 11.5 28.5T240-520q17 0 28.5-11.5T280-560v-120h406Z" />
  </svg>
)

export { IconRepeatOnRounded as default }
