import React from 'react'
import SampleHeaderContainer from "./sampleHeader.styles"
// import { Image } from 'antd';
// import { useSelector, useDispatch } from 'react-redux'

export default function useMainPageHeader() {
  // const dispatch = useDispatch();

  // useEffect(() => {
    // CODE HERE
  // }, [])
  const HeaderContent = () => {
    return <div className="header-page">
      HEADER HERE
    </div>
  }

  return (
    <SampleHeaderContainer>
      <HeaderContent />
    </SampleHeaderContainer>
  );
    
}
