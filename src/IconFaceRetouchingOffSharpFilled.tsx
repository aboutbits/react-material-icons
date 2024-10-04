import React from 'react'
import { IconProps } from './types'

const IconFaceRetouchingOffSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="m814-76-88-88q-51 39-113 61.5T482-80q-82 0-155-31.5t-127.5-86Q145-252 113.5-325T82-480q0-69 22.5-131.5T166-725l-88-87 56-56 736 736-56 56Zm17-209-59-59q14-32 22-66t8-70q0-24-3-46.5T788-570q-21 5-42 7.5t-44 2.5q-56 0-106.5-14.5T500-616L286-830q44-24 93-37t103-13q83 0 155.5 31.5t127 85.5q54.5 54 86 127T882-480q0 53-12.5 101.5T831-285ZM362-390q-21 0-35.5-14.5T312-440q0-21 14.5-35.5T362-490q21 0 35.5 14.5T412-440q0 21-14.5 35.5T362-390Zm120 230q53 0 100-15.5t86-44.5L309-581q-30 32-67.5 56T162-486v6q0 133 93.5 226.5T482-160Z" />
  </svg>
)

export { IconFaceRetouchingOffSharpFilled as default }
