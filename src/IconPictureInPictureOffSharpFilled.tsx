import React from 'react'
import { IconProps } from './types'

const IconPictureInPictureOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M818-28 686-160H80v-640h80l80 80H126L26-820l57-57L875-85l-57 57Zm62-166L634-440h126v-240H440v46L274-800h606v606Z" />
  </svg>
)

export { IconPictureInPictureOffSharpFilled as default }
