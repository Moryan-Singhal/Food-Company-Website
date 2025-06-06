import React from 'react'
import './b.css'
import bgimg from '../../assets/Rectangle.png'
import group53 from '../../assets/Group53.png'
import rect2 from '../../assets/Rectangle2.png'
import rect3 from '../../assets/Rectangle3.png'
import rect4 from '../../assets/Rectangle4.png'
import rect47 from '../../assets/Rectangle47.png'

const Body1 = () => {
  return (
    <>
      <div className='section1'>
        <img src={bgimg} className='rect48'/>
        <div className='bgcolor'></div>
        
        <div className='text_content'>
          <h3 className='h3'>Food app</h3>
          <h1 className='h1'>Why stay hungry when</h1>
          <h1 className='h1'>you can order from Bella Onojie</h1>
          <h1 className='h1_mobile'>Why stay hungry when you can order from Bella Onojie</h1>
          <h4 className='h4'>Download the bella onojie's food app now on</h4>
        </div>

        <div className='big_button'>
          <button className='playstore'>Playstore</button>
          <button className='appstore'>App store</button>
        </div>
      </div>

      <div className='section2'>
        <div className='grp53'>
          <img src={group53} className='group53'/>
        </div>
        <hr />
        <p>How the app works</p>
      </div>

      <div className='section3'>
        <div className='img1div'>
          <img src={rect2} className='img1'/>
        </div>
        
        <div className='frame19'>
          <h3 className='create_acc'>Create an account</h3>
          <h2 className='create_acc'>Create/login to an existing</h2>
          <h2 className='create_acc'>account to get started</h2>
          <h2 className='create_acc_mobile'>Create/login to an existing account to get started</h2>
          <h4 className='create_acc'>An account is created with your email</h4>
          <h4 className='create_acc'>and a desired password</h4>
          <br></br>
          <div className='create_acc_mobile1'>
            <h4 className='create_acc_mobile'>An account is created with your email and a desired password</h4>
          </div>
        </div>
      </div>

      <div className='section4'>
        
        <div className='frame19'>
          <h3 className='explore'>Explore varieties</h3>
          <h2 className='explore'>Shop for your favorites</h2>
          <h2 className='explore'>meal as e dey hot.</h2>
          <h2 className='explore_mobile'>Shop for your favorites meal as e dey hot.</h2>
          <h4 className='explore'>Shop for your favorite meals or drinks</h4>
          <h4 className='explore'>and enjoy while doing it.</h4>
          <div className='explore_mobile1'>
            <h4 className='explore_mobile'>Shop for your favorite meals or drinks and enjoy while doing it.</h4>
          </div>
        </div>
        <img src={rect3} className='img2' />
      </div>

      <div className='section5'>
        <img src={rect4} className='img3'/>
        <div className='frame19'>
          <h3 className='checkout'>Checkout</h3>
          <h2 className='checkout'>When you done check out</h2>
          <h2 className='checkout'>and get it delivered.</h2>
          <h2 className='checkout_mobile'>When you done check out and get it delivered.</h2>
          <h4 className='checkout'>When you done check out and get it</h4>
          <h4 className='checkout'>delivered with ease.</h4>
          <div className='checkout_mobile1'>
            <h4 className='checkout_mobile'>When you done check out and get it delivered with ease.</h4>
          </div>
        </div>
      </div>


      <div className='section6'>
        <img src={rect47} className='rect47'/>
        
        <div className='text_content2'>
          <h1 className='h1_2'>Download the app now.</h1>
          <h4 className='h4_2'>Available on your favorite store. Start your premium experience now</h4>
          <h3 className='h3_2'>Most calendars are designed for teams. </h3>
        </div>

        <div className='big_button2'>
          <button className='playstore2'>
            Playstore
          </button>
          <button className='appstore2'>
            App store
          </button>
        </div>

        <div className='big_button3'>
          <button className='buy_now'>
            Buy Now
          </button>
          <button className='try_for_free'>
            Try For Free
          </button>
        </div>
      </div>

    </>
  )
}

export default Body1