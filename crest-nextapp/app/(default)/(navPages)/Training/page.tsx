import CommonPageComponent from '@/app/component/commonPageComponent'
import React from 'react'

const dummyData = [
    {
      title: 'First Section',
      subtitle: 'Subtitle for the first section',
      description: 'Description for the first section.',
      imageUrl: 'https://dummyimage.com/720x600',
    },
    {
      title: 'Second Section',
      subtitle: 'Subtitle for the second section',
      description: 'Description for the second section.',
      imageUrl: 'https://dummyimage.com/720x600',
    },
    // Add more data as needed
  ];

const Training = () => {
  return (
    <div>
    
    <CommonPageComponent componentData={dummyData}/>
    </div>

  )
}

export default Training