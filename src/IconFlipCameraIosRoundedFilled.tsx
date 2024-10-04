import React from 'react'
import { IconProps } from './types.js'

export const IconFlipCameraIosRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l50-54q11-12 26.5-19t32.5-7h170q17 0 32.5 7t26.5 19l50 54h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm458-304q-6 53-45 88.5T480-300q-8 0-16-1t-16-3q-8-2-17 0t-15 8q-11 11-8 26.5t17 20.5q14 5 27.5 7t27.5 2q79 0 136-53.5T678-426l9 8q9 8 21 8t20-8q9-9 9.5-21.5T729-461l-51-51q-11-11-28-11t-28 11l-51 51q-9 9-9 21t9 21q9 9 21 9t21-9l5-5Zm-336-30-9-8q-9-8-21-8t-20 8q-9 9-9.5 21.5T231-419l51 51q11 11 28 11t28-11l51-51q9-9 9-21t-9-21q-9-9-21-9t-21 9l-5 5q6-53 45-88.5t93-35.5q8 0 16 1t16 3q8 2 17 0t15-8q11-11 8-26.5T535-631q-14-5-27.5-7t-27.5-2q-79 0-136 53.5T282-454Z" />
  </svg>
)