import React from 'react'
import { IconProps } from './types'

const IconTravelLuggageAndBagsSharpFilled: React.FC<IconProps> = ({
  ...props
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M440-720h80v-80h-80v80Zm40 240q-76 0-145-31.5T200-582v-138h160v-160h240v160h160v138q-66 39-135 70.5T480-480ZM280-80v-40h-80v-372q56 34 115.5 58T440-402v42h80v-42q65-8 124.5-32T760-492v372h-80v40h-80v-40H360v40h-80Z" />
  </svg>
)

export { IconTravelLuggageAndBagsSharpFilled as default }
