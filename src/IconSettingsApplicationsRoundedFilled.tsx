import React from 'react'
import { IconProps } from './types.js'

export const IconSettingsApplicationsRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m428-340 6 29q3 14 13.5 22.5T472-280h16q14 0 24.5-9t13.5-23l6-28q12-5 22.5-10.5T576-364l29 9q13 4 25.5-1t19.5-16l8-14q7-12 5-26t-13-23l-22-19q2-14 2-26t-2-26l22-19q11-9 13-22.5t-5-25.5l-9-15q-7-11-19-16t-25-1l-29 9q-11-8-21.5-13.5T532-620l-6-29q-3-14-13.5-22.5T488-680h-16q-14 0-24.5 9T434-648l-6 28q-12 5-22.5 10.5T384-596l-29-9q-13-4-25.5 1T310-588l-8 14q-7 12-5 26t13 23l22 19q-2 14-2 26t2 26l-22 19q-11 9-13 22.5t5 25.5l9 15q7 11 19 16t25 1l29-9q11 8 21.5 13.5T428-340Zm52-60q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
  </svg>
)