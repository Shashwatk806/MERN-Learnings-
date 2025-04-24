import React from 'react'
import Todos from './Components/Todos'
import Add from './Components/Add'
import WrapperComponent,{ChildComponent, ChildComponent2} from './Components/Wrapper'
import ActualWrapper, { ChotaWrapper } from './Components/ActualWrapper'

function App() {
  return (
    <React.Fragment>
      {/* // <Todos /> */}
      {/* // <Add /> */}
      {/* <WrapperComponent comp={<ChildComponent />} />
      <WrapperComponent comp={<ChildComponent2 />} /> */}
      
      {/* better approach */}
      <ActualWrapper>
        <ChotaWrapper>hii from the child</ChotaWrapper>
      </ActualWrapper>
    </React.Fragment>
   
  )
}

export default App