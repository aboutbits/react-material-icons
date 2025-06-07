import React from 'react'
import { IconProps } from './types.js'

export const IconPlayingCardsSharp: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m608-368 46-166-142-98-46 166 142 98ZM160-207 54-257l106-229v279Zm80 87v-320l116 320H240Zm210 23L217-738l453-165 233 641L450-97Zm48-103 302-110-179-490-301 110 178 490Zm62-300Z" />
  </svg>
)
