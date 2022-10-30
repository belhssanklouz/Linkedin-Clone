import React from 'react'
import './widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {(newsArticle("Coronavirus Breaking : TN updates","Top news tunisia is finally empty of corona cases"))}
        {(newsArticle("Tesla fires Elon Musk","Check it out"))}
        {(newsArticle("BoycottQatar22","Paris joins boycott of fan zones over human rights"))}

    </div>
  )
}

export default Widgets