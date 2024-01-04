import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

function Bollywood() {
  const [data] = useContext(Store)
  const [contextData] = useContext(Store)
  return (
    <div id='container'>
      <div id='left-container'>
        <h1 className='title'>Bollwood</h1><hr></hr>
        {data.filter((e) => e.catgory === "bollywood").map((item, index) => {
          return (
            <div id='sub'className='subtab'>
             
                <div id="subone">
                  <img style={{ width: '220px', height: '200px',borderRadius:'15px' }} src={item.Image} alt='not found' />
                </div>
                <div id='subtwo'>
                  <NavLink to={`/dynamic/${item.id}`}><h3>{item.heading}</h3></NavLink>
                  <p>{item.description.slice(0, 120)}...</p>
                </div>
             
            </div>
          )
        })}
      </div><br></br>
      <div id='right-container'>
        <h1 className='title1'>Top Posts</h1><hr></hr>
        {contextData.filter((data) => data.id % 8 === 0).map((item, index) => {
          return (
            <div className='sub'>
              <div className="subone">
                <img style={{ width: '220px', height: '200px',borderRadius:'15px' }} src={item.Image} alt='not found' />
              </div>

              <div className='subtwo'>
                <NavLink to={`/dynamic/${item.id}`}><h3>{item.heading}</h3></NavLink>
                <p>{item.description.slice(0, 120)}...</p>
              </div>

            </div>
          )
        })
        }
        <div id='advertisement'>
          {data.filter((e) => e.catgory === 'img').map((item, index) => {
            return (
              <>
                <img id ='ad'  src={item.ImageAd} alt='not found' />
              </>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Bollywood