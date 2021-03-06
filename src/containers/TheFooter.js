import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      {/* <div>
        <a href="https://www.gestleanconsulting.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2202B' }}>GestLean</a>
        <span className="ml-1">&copy; 2021 GestLean Consulting.</span>
      </div> */}
      {/* <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.bestplant.com" target="_blank" rel="noopener noreferrer" style={{ color: '#C2202B' }}>Bestplant</a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(TheFooter)
