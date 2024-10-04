import React from 'react'
import { IconProps } from './types'

const IconSmartCardReaderOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m819-80-52-52H80v-200h487l-60-60H200v-308L28-872l56-56 792 791-57 57Zm-59-852v540h-28L587-538q23-8 38-28.5t15-46.5q0-33-23.5-56T560-692q-26 0-46.5 15T485-639L193-932h567ZM320-450h23q20 0 37-10.5t30-29.5l-90-90v130Z" />
  </svg>
)

export { IconSmartCardReaderOffSharpFilled as default }
