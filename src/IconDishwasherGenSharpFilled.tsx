import React from 'react'
import { IconProps } from './types'

const IconDishwasherGenSharpFilled: React.FC<IconProps> = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" {...props}>
    {props.title && <title>{props.title}</title>}
    <path d="M320-680q17 0 28.5-11.5T360-720q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720q0 17 11.5 28.5T320-680Zm120 0q17 0 28.5-11.5T480-720q0-17-11.5-28.5T440-760q-17 0-28.5 11.5T400-720q0 17 11.5 28.5T440-680Zm40 440q63 0 107.5-43T632-388q0-29-10-56.5T592-492L480-604 372-496q-22 22-33.5 50T328-388q2 62 46 105t106 43Zm0-76q-30 0-51-21t-21-51q0-15 5.5-28.5T430-441l50-50 49 49q11 11 17 25t6 29q0 30-21 51t-51 21ZM160-80v-800h640v800H160Z" />
  </svg>
)

export { IconDishwasherGenSharpFilled as default }
