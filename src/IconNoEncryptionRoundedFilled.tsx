import React from 'react'
import { IconProps } from './types'

export const IconNoEncryptionRoundedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M775-334q-11 5-22 3.5T732-342L502-572q-10-10-11.5-21t3.5-22q5-11 14-18t23-7h69v-80q0-50-34.5-85T481-840q-35 0-63 16.5T379-779q-7 17-22.5 23.5t-31.5.5q-17-6-24-21.5t-1-31.5q20-51 69-81.5T481-920q83 0 141 58.5T680-720v80h40q33 0 56.5 23.5T800-560v189q0 14-7 23t-18 14ZM240-80q-33 0-56.5-23.5T160-160v-400q0-26 14.5-46.5T212-636L56-792q-11-11-11-28t11-28q11-11 28-11t28 11l736 736q11 11 11 28t-11 28q-11 11-28 11t-28-11l-34-34q-9 5-18 7.5T720-80H240Zm184-342q-11 11-17 25.5t-6 31.5q0 33 23.5 56.5T481-285q17 0 31.5-6t25.5-17L424-422Z" />
  </svg>
)
