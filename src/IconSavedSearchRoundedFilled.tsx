import React from 'react'
import { IconProps } from './types.js'

export const IconSavedSearchRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m380-522-55 43q-6 5-12 .5t-4-11.5l21-68-58-46q-5-5-2.5-11.5t9.5-6.5h69l22-69q2-7 10-7t10 7l22 69h69q7 0 9.5 6.5T488-604l-58 46 21 68q2 7-4 11.5t-12-.5l-55-43Zm0 202q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l224 224q11 11 11 28t-11 28q-11 11-28 11t-28-11L532-372q-30 24-69 38t-83 14Zm0-80q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
  </svg>
)