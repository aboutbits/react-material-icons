import React from 'react'
import { IconProps } from './types'

const IconVolunteerActivismOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-159v-361h64q7 0 14 1.5t14 3.5l277 103q14 5 22.5 18t8.5 27q0 21-14.5 34T632-320H527q-5 0-7.5-.5T513-323l-64-25-13 39 77 27q2 1 6 1.5t7 .5h274q32 0 56 23t24 57L561-80l-281-79ZM40-80v-440h160v440H40Zm600-360L474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Z" />
  </svg>
)

export { IconVolunteerActivismOutlinedFilled as default }
