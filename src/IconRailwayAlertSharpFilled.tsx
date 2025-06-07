import React from 'react'
import { IconProps } from './types.js'

export const IconRailwayAlertSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M680-480q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM400-280q25 0 42.5-17.5T460-340q0-25-17.5-42.5T400-400q-25 0-42.5 17.5T340-340q0 25 17.5 42.5T400-280ZM160-80v-40l60-40q-58 0-99-41t-41-99v-380q0-89 82.5-124.5T451-840q-24 34-37.5 74.5T400-680q0 11 .5 20.5T403-640H160v120h291q38 54 97.5 87T680-400q11 0 20.5-.5T720-403v103q0 58-41 99t-99 41l60 40v40H160Z" />
  </svg>
)
