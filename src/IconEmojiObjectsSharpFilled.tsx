import React from 'react'
import { IconProps } from './types'

const IconEmojiObjectsSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-80q-26 0-47-12.5T400-126h-80v-222q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v222h-80q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm110-118v-108l88-88-42-42-76 76-76-76-42 42 88 88v108h60Z" />
  </svg>
)

export { IconEmojiObjectsSharpFilled as default }
