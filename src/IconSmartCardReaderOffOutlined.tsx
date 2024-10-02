import React from 'react'
import { IconProps } from './types'

export const IconSmartCardReaderOffOutlined: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-932q33 0 56.5 23.5T760-852v460h-28l-52-52v-408H273l-53-53q11-13 26.5-20t33.5-7h400Zm-91 396L485-639q9-23 29-38t46-15q33 0 56.5 23.5T640-612q0 26-14 46.5T589-536Zm-269 86v-242l118 118q-7 57-32 90.5T343-450h-23ZM160-212h527l-40-40H160v40ZM819-80l-52-52H80v-120q0-33 23.5-56.5T160-332h407L280-620v228h-80v-308L28-872l56-56 792 791-57 57ZM424-212Zm52-436Zm-82 142Z" />
  </svg>
)
