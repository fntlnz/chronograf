import React, {SFC} from 'react'

import {PERIODS} from 'src/kapacitor/constants'
import Dropdown from 'src/shared/components/Dropdown'

import {AlertRule} from 'src/types'

const periods = PERIODS.map(text => {
  return {text}
})

interface Props {
  rule: AlertRule
  onChange: () => void
}

const Deadman: SFC<Props> = ({rule, onChange}) => (
  <div className="rule-section--row rule-section--row-first rule-section--row-last">
    <p>Send Alert if Data is missing for</p>
    <Dropdown
      className="dropdown-80"
      menuClass="dropdown-malachite"
      items={periods}
      selected={rule.values.period}
      onChoose={onChange}
    />
  </div>
)

export default Deadman
