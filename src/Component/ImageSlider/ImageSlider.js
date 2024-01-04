import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Store } from '../Store/Store'

const ImageSlider = () => {
    const [contextData] = useContext(Store)
  return (
    <>
    <h1 id='late'>The Latest</h1><hr></hr>

    <div id='latest'>
       
        {contextData.filter((data) => data.id % 14 === 0).map((item, index) => {
            return (
              <div id ='subimg'>
                <div id="subonet">
                  <img style={{width:'100%', height:"200px",borderRadius:'15px'}} src={item.Image} alt='not found' />
                </div>

                <div id='sublat'>
                  <NavLink to={`/dynamic/${item.id}`}><h2>{item.heading}</h2></NavLink>
                  <p>{item.description.slice(0, 120)}...</p>
                </div>

              </div>
            )
          })
          }
    </div>
    </>
  )
}

export default ImageSlider