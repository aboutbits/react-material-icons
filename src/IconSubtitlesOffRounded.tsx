import React from 'react'
import { IconProps } from './types'

const IconSubtitlesOffRounded: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l80 80h-80v480h446l-80-80H280q-17 0-28.5-11.5T240-360q0-17 11.5-28.5T280-400h166L54-794q-11-11-11.5-27.5T54-850q11-11 28-11t28 11l740 740q11 11 11.5 27.5T850-54q-11 11-28 11t-28-11L686-160H160Zm720-560v430q0 20-12.5 30T840-250q-17 0-28.5-12T800-291v-429H371q-20 0-30-12.5T331-760q0-17 11.5-28.5T371-800h429q33 0 56.5 23.5T880-720ZM680-480h-69q-20 0-30-12.5T571-520q0-15 10-27.5t30-12.5h69q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480Zm-103-17Zm-194 34Zm-103-17q-17 0-28.5-11.5T240-520q0-17 11.5-28.5T280-560q17 0 28.5 11.5T320-520q0 17-11.5 28.5T280-480Z" />
  </svg>
)

export { IconSubtitlesOffRounded as default }
