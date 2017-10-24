import React from 'react'
import './TagPill.css'

const TagPill = () => {
  const data = ['HTML', 'CSS', 'SASS', 'JS', 'Jquery', 'SQL', 'React.JS', 'Node.JS', 'D3.JS', 'P5.JS', 'Arduino', 'Processing', 'GTM', 'Drupal', 'Twig'];
    return (
      <div className='pills'>
        {
          data.map((tag, i)=> <span className="capsule" key={tag}>{tag}</span>)
        }
      </div>
    );
}

export default TagPill
