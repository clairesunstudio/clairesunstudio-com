import React from 'react';
import createAbsoluteGrid from 'react-absolute-grid';
import Card from './Card';
import './Gallery.css'

// Pass your display component to create a new grid
const AbsoluteGrid = createAbsoluteGrid(Card);

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {data} = this.props
    return (
      <div className="demo">
        <AbsoluteGrid items={data}
                               dragEnabled={false}
                               responsive={true}
                               verticalMargin={42}
                               itemWidth={400}
                               itemHeight={200}/>
      </div>

    )
  }
}

export default Gallery
