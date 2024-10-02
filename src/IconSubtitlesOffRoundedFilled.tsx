import React from 'react'
import { IconProps } from './types'

export const IconSubtitlesOffRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-480q17 0 28.5-11.5T320-520q0-17-11.5-28.5T280-560q-17 0-28.5 11.5T240-520q0 17 11.5 28.5T280-480Zm600-240v429q0 27-24.5 37.5T812-262L594-480h86q17 0 28.5-11.5T720-520q0-17-11.5-28.5T680-560H514L342-732q-19-19-8.5-43.5T371-800h429q33 0 56.5 23.5T880-720ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800l320 320H368L54-794q-11-11-11-28t11-28q11-11 28-11t28 11l740 740q11 11 11.5 27.5T850-54q-11 11-28 11t-28-11L686-160H160Zm286-240H280q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320h246l-80-80Z" />
  </svg>
)
