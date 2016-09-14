import React from 'react'

import BpkButton from 'bpk-component-button'
import BpkSpinner from 'bpk-component-spinner'
import BpkParagraph from 'bpk-component-paragraph'
import TOKENS from 'bpk-tokens/tokens/base.common'
import BpkSmallArrowIcon from 'bpk-component-icon/sm/long-arrow-right-alt'
import BpkLargeArrowIcon from 'bpk-component-icon/lg/long-arrow-right-alt'

import DocsPageBuilder from './../../components/DocsPageBuilder'

const components = [
  {
    id: 'primary',
    title: 'Primary',
    blurb: 'The Backpack primary button is available in two sizes and comes with styles for hover, active, disabled and selected states.',
    examples: [
      <BpkButton>Primary</BpkButton>,
      ' ',
      <BpkButton selected>Selected</BpkButton>,
      ' ',
      <BpkButton disabled>Disabled</BpkButton>,
      <br />,
      <br />,
      <BpkButton large>Primary</BpkButton>,
      ' ',
      <BpkButton large selected>Selected</BpkButton>,
      ' ',
      <BpkButton large disabled>Disabled</BpkButton>
    ]
  },
  {
    id: 'secondary',
    title: 'Secondary',
    blurb: 'Similar to the primary button, the secondary version is available in two sizes and comes with styles for hover, active, disabled and selected states.',
    examples: [
      <BpkButton secondary>Secondary</BpkButton>,
      ' ',
      <BpkButton secondary selected>Selected</BpkButton>,
      ' ',
      <BpkButton secondary disabled>Disabled</BpkButton>,
      <br />,
      <br />,
      <BpkButton large secondary>Secondary</BpkButton>,
      ' ',
      <BpkButton large secondary selected>Selected</BpkButton>,
      ' ',
      <BpkButton large secondary disabled>Disabled</BpkButton>
    ]
  },
  {
    id: 'icons-and-spinners',
    title: 'Icons & spinners',
    blurb: 'All buttons support nesting icons and spinners, which is useful for improving affordance or indicate loading.',
    examples: [
      <BpkButton>
        Primary <BpkSmallArrowIcon fill={TOKENS.colorWhite} />
      </BpkButton>,
      ' ',
      <BpkButton>
        Primary <BpkSpinner color={TOKENS.colorWhite} alignToButton />
      </BpkButton>,
      <br />,
      <br />,
      <BpkButton large>
        Primary <BpkLargeArrowIcon fill={TOKENS.colorWhite} />
      </BpkButton>,
      ' ',
      <BpkButton large>
        Primary <BpkSpinner large color={TOKENS.colorWhite} alignToButton />
      </BpkButton>
    ]
  },
  {
    id: 'link-buttons',
    title: 'Link buttons',
    blurb: 'Link buttons follow the same style as links and are used as a tertiary means of triggering actions. Like all other buttons, these are available in two sizes and have hover, active and disabled states.',
    examples: [
      <BpkButton link>Link</BpkButton>,
      ' ',
      <BpkButton link disabled>Disabled</BpkButton>,
      <br />,
      <br />,
      <BpkButton link large>Link</BpkButton>,
      ' ',
      <BpkButton link large disabled>Disabled</BpkButton>
    ]
  }
]

const ButtonsPage = () => <DocsPageBuilder
  title='Buttons'
  blurb={[
    <BpkParagraph>
      On this page you’ll find examples and information on how to use the button component. If you provide an href, an
      anchor tag is rendered instead.
    </BpkParagraph>
  ]}
  components={components}
  readme={require('raw!bpk-component-button/readme.md')}
  sassdocId='buttons'
/>

export default ButtonsPage
