import React from 'react'
import SampleContentContainer from "./sampleContent.styles"
// import { Image } from 'antd';
// import { useSelector, useDispatch } from 'react-redux'

export default function useMainPageHeader() {
  // const dispatch = useDispatch();

  // useEffect(() => {
    // CODE HERE
  // }, [])
  const MainContent = () => {
    return <div className="content-page">
      CONTENT HERE
    </div>
  }

  return (
    <SampleContentContainer>
      <MainContent />
    </SampleContentContainer>
  );
    
}
