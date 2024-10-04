import React from 'react'
import { IconProps } from './types'

const IconPermContactCalendarSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M200-206q54-53 125.5-83.5T480-320q83 0 154.5 30.5T760-206v-514H200v514Zm280-194q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Z" />
  </svg>
)

export { IconPermContactCalendarSharpFilled as default }
