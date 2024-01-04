import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';
import './style.css'
import HomeImage from './HomeImage';

function Home() {
  const [contextData] = useContext(Store)
  const [data] = useContext(Store)
  console.log(contextData);
  return (
    <>
    <HomeImage/>
      <ImageSlider /><br></br>
      <div id='container'>

        <div id='left-container'>
        <h1 className='title'>Review</h1><hr></hr>
          {contextData.filter((data) => data.id % 6 === 0).map((item, index) => {
            return (
              <div id='sub'>
                <div id="subone">
                  <img style={{width:'100%', height:"200px",borderRadius:'15px'}} src={item.Image} alt='not found' />
                </div>

                <div id='subtwo'>
                  <NavLink to={`/dynamic/${item.id}`}><h3>{item.heading}</h3></NavLink>
                  <p>{item.description.slice(0, 120)}...</p>
                </div>

              </div>
            )
          })
          }
        </div>
        <div id='right-container'>
        <h1 className='title1'>Top Posts</h1><hr></hr>
        {contextData.filter((data)=>data.id%19===0).map((item,index)=>{
            return(
                <>
                <NavLink to={`/${item.catgory}`}><img style={{width:'70%', height:"200px",borderRadius:'15px'}} src={item.Image} alt='not found'/><p>{item.catgory}</p></NavLink>
               
                </>
                
               
            )
        })
        }
        {contextData.filter((data)=>data.id%8===0).map((item,index)=>{
            return(
                <div className='sub'>
                <div className="subone">
                <img style={{width:'100%', height:"200px",borderRadius:'15px'}} src={item.Image} alt='not found'/>
                </div>
                
               <div className='subtwo'>
                <NavLink to={`/dynamic/${item.id}`}><h3>{item.heading}</h3></NavLink>
                <p>{item.description.slice(0,120)}...</p>
                </div>
                
                </div>
            )
        })
        }
        <div id='advertisement'>
          {data.filter((e)=>e.catgory==='img').map((item,index)=>{
            return(
              <>
              <img id='rghtimg'style={{height:'350px',width:'350px'}} src={item.ImageAd} alt='not found'/>
              </>
            )
          })}
        </div>
      </div>
    </div> 
      </>
      )
}

      export default Home