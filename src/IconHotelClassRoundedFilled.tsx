import React from 'react'
import { IconProps } from './types.js'

export const IconHotelClassRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m668-380 152-130 26 2q17 2 26.5 14t9.5 26q0 8-3 16t-11 14l-104 91 31 135q1 2 1 4.5v4.5q0 17-12 28.5T756-163q-5 0-10.5-1.5T735-169l-21-13-46-198Zm-94-292-42-98 9-22q5-12 15.5-18.5T578-817q11 0 21.5 6t15.5 18l55 130-96-9ZM194-212l44-189L91-528q-8-6-10.5-14T78-558q0-14 9.5-26t26.5-14l194-17 75-178q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l75 178 194 17q17 2 26.5 14t9.5 26q0 8-2.5 16T749-528L602-401l44 189q1 3 1 9 0 17-12 28.5T607-163q-3 0-21-6L420-269 254-169q-5 3-10.5 4.5T233-163q-18 0-31-14.5t-8-34.5Z" />
  </svg>
)