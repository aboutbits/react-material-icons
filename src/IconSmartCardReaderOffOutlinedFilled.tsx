import React from 'react'
import { IconProps } from './types.js'

export const IconSmartCardReaderOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m819-80-52-52H80v-120q0-33 23.5-56.5T160-332h407l-60-60H200v-308L28-872l56-56 792 791-57 57ZM280-932h400q33 0 56.5 23.5T760-852v460h-28L587-538q23-8 38-28.5t15-46.5q0-33-23.5-56T560-692q-26 0-46.5 15T485-639L220-905q11-13 26.5-20t33.5-7Zm40 482h23q20 0 37-10.5t30-29.5l-90-90v130Z" />
  </svg>
)
