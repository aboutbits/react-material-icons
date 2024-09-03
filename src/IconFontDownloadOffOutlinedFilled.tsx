import React from 'react'
import { IconProps } from './types'

const IconFontDownloadOffOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M819-28 485-362l78-36 275 275q-10 20-29 31.5T767-80H160q-33 0-56.5-23.5T80-160v-607l-53-53 57-57L876-85l-57 57Zm61-167L624-451 522-720h-84l-23 60-220-220h605q33 0 56.5 23.5T880-800v605Zm-624-45h84l44-122h101l-74-74-59-59-96 255Zm222-390h4l20 57-33-33 9-24Zm142 390h84l-10-27-131-131 57 158Z" />
  </svg>
)

export { IconFontDownloadOffOutlinedFilled as default }
