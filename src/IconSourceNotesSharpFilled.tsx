import React from 'react'
import { IconProps } from './types'

export const IconSourceNotesSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M280-600h400v-80H280v80ZM720-40q-73 0-127.5-45.5T524-200h62q13 44 49.5 72t84.5 28q58 0 99-41t41-99q0-58-41-99t-99-41q-29 0-54 10.5T622-340h58v60H520v-160h60v57q27-26 63-41.5t77-15.5q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm-600-80v-720h720v303q-29-11-59-17t-61-6q-42 0-81 10.5T565-520H280v80h190q-14 18-26 38t-21 42H280v80h122q-2 10-2 19.5v20.5q0 31 6 61t17 59H120Z" />
  </svg>
)
