import React from 'react'
import { IconProps } from './types'

const IconAssistantDirectionOutlinedFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M480-40q-91 0-171.5-34.5t-140-94q-59.5-59.5-94-140T40-480q0-92 34.5-172t94-139.5q59.5-59.5 140-94T480-920q92 0 172 34.5t139.5 94Q851-732 885.5-652T920-480q0 91-34.5 171.5t-94 140Q732-109 652-74.5T480-40Zm-25-129q10 10 23 10t23-10l288-288q10-10 10-24t-10-24L501-793q-10-10-23-10t-23 10L167-505q-10 10-10 24t10 24l288 288ZM319-361v-160q0-18 11-29t29-11h166l-42-44 56-56 140 140-140 140-56-56 42-44H399v120h-80Z" />
  </svg>
)

export { IconAssistantDirectionOutlinedFilled as default }
