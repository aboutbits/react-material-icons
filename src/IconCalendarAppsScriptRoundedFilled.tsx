import React from 'react'
import { IconProps } from './types.js'

export const IconCalendarAppsScriptRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M578-80q-17 0-28.5-11.5T538-120q0-17 11.5-28.5T578-160h113l-92-65q-14-10-16.5-25.5T589-280q9-14 25-16.5t30 6.5l93 64-39-106q-6-15 1-30t23-21q16-6 31 1t21 23l38 106 30-109q5-16 18.5-24.5T890-390q16 5 25 18.5t4 29.5l-62 232q-4 14-14.5 22T818-80H578Zm-378-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h240v-40q0-17 11.5-28.5T600-880q17 0 28.5 11.5T640-840v40h40q33 0 56.5 23.5T760-720v200q0 17-11.5 28.5T720-480q-17 0-28.5-11.5T680-520v-40H200v320h240q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H200Z" />
  </svg>
)