import React from 'react'
import { IconProps } from './types'

const IconCleaningSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m360-680 40-80v-40h-40v-80h280v80l-40 80H480v-40l-80 80h-40ZM320-80v-297l160-303h160v600H320Z" />
  </svg>
)

export { IconCleaningSharpFilled as default }
