import React from 'react'
import { IconProps } from './types'

const IconForkliftRoundedFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M160-120q-50 0-85-35t-35-85q0-26 10-49.5T80-330v-150q0-17 11.5-28.5T120-520h40v-200q0-17 11.5-28.5T200-760h227q24 0 44 13t30 36l167 394q6 14 9 28t3 29q0 58-41 99t-99 41q-41 0-75.5-21.5T413-200H273q-13 36-44 58t-69 22Zm720-40H760q-17 0-28.5-11.5T720-200v-560q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v520h80q17 0 28.5 11.5T920-200q0 17-11.5 28.5T880-160Zm-720-40q17 0 28.5-11.5T200-240q0-17-11.5-28.5T160-280q-17 0-28.5 11.5T120-240q0 17 11.5 28.5T160-200Zm380 0q25 0 42.5-17.5T600-260q0-25-17.5-42.5T540-320q-25 0-42.5 17.5T480-260q0 25 17.5 42.5T540-200ZM357-400h189L427-680H240v160l117 120Z" />
  </svg>
)

export { IconForkliftRoundedFilled as default }
