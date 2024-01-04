import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { Store } from './../Store/Store';


function DynamicComp() {
    const paramId = useParams().id;
    const [contextData] = useContext(Store);
    const Navi = useNavigate();



    return (
        <>
            <div id='dynamic'>
                <div id='profilename'>
                    <img style={{ height: '120px' }} id='profile' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoqWIPKg9kRQhn9r3qgpcRSACAXvg-dbTOWQiDN6b5ahLRZ-AU_ioL_uXv5Un0kNGPNhE&usqp=CAU' alt='not found' />
                    <h3 id='name'>Archana
                        <p id='date'>Dec20,2023</p></h3>

                </div>
                <div id='data'>
                {contextData.filter((data) => data.id === parseInt(paramId)).map((item, index) => {
                    return (
                        <div key={index}>
                            <h2>{item.heading}</h2>
                            <img  src={item.Image} alt='not found' />
                            <p>{item.description}</p>
                        </div>
                    )
                })}
                <button onClick={() => Navi(-1)} id='back'>Go Back</button>
                </div>
            </div><br></br>
            <div id='latest'>
       
        {contextData.filter((data) => data.id % 16 === 0).map((item, index) => {
            return (
              <div id ='subimg'>
                <div id="subonet">
                  <img style={{width:'100%', height:"200px",borderRadius:'15px'}} src={item.Image} alt='not found' />
                </div>

                <div id='sublat'>
                  <NavLink to={`/dynamic/${item.id}`}><h2>{item.catgory}</h2></NavLink>
                  <NavLink to={`/${item.catgory}`}><h3>{item.heading}</h3></NavLink>
                  
                </div>

              </div>
            )
          })
          }
    </div>
            <img id='applause' style={{ height: '70px' }} src='data:image/png;base64,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' alt='not found' />
            <h3 id='text'>9.8k</h3>
            <img id='share' style={{ height: '60px' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm97h3cIo1wEWdDSI__djOvGkJtMkm1ZGEFAvdN4xyjnNyNtsi2qS0KoZcm582Xp8HC7Y&usqp=CAU' alt='not found' />
            <h3 id='text1'>Share this Article</h3>
        </>
        
    )
}

export default DynamicComp