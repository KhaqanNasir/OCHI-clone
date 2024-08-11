import React from 'react'
import '../Components/Client.css';
const Client = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="clienttitle">
          <p>Client's reviews</p>
        </div>
        <hr />
        <div className="col-6 clientdiv1">
          <div>
            <a>Karman Ventures</a>
          </div>
          <div className='clientdiv2'>
            <p>Services:</p><br></br>
            <a>INVESTOR DECK</a>
            <a>SALES DECK</a>
          </div>
        </div>

        <div className="clientdiv3 col-6">
          <div className='clientdiv4'>
            <p>William Barnes</p>
            <br></br>
            <img src='https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png'></img>
            <p>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p>
          </div>
          <div className='clientdiv5'>
            <p>READ MORE</p>
          </div>
        </div>
        
        <hr></hr>
        <div className="col-12 clientdiv6">
          <a className='clienttg'>Planetly</a>
          <p>Nina Walloch</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Workiz Easy</a>
          <p>Tomer Levy</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Premium Blend</a>
          <p>Ellen Kim</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Hypercare Systems</a>
          <p>Brendan Goss</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Officevibe</a>
          <p>Raff Labrie</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Orderlion</a>
          <p>Stefan Strohmer</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Black Book</a>
          <p>Jaci Smith</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>

        <div className="col-12 clientdiv6">
          <a className='clienttg'>Trawa Energy</a>
          <p>David Budde</p>
          <a className='clienttg'>READ MORE</a>
        </div>
        <hr></hr>
        <br></br><br></br> <br></br><br></br>
        <div className="clientbox">
          <div className="clbox1">
            <p className='clp1'>ochi</p>
            <p className='clp2'>&copy;2019-2022</p>
          </div>

          <div className="clbox2">
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
            <p className='clp4'>RATING 5.0 ON CLUTCH</p>
          </div>

          <div className="clbox2">
            <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
            <p className='clp4'>BUSSINESS BOOTCAMP ALUMNI</p>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Client
