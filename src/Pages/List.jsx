import React, { useState } from 'react'
import background from '../Assets/bg1.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import buah1 from '../Assets/anggur htm.png'
import buah2 from '../Assets/anggur hju.png'
import buah3 from '../Assets/anggur mrh.png'

const List = () => {

    const [side, setSide] = useState(false);

    const handleSide = () => {
      try {
        if (side === true) {
          setSide(false);
        }else{
          setSide(true);
        }
      } catch (error) {
        
      }
    }

  return (
    <div className='h-full bg-fixed' style={{ backgroundImage: `url(${background})` }}>
        <Navbar open={handleSide} close={handleSide} menu={side} />
        <div className="grid h-full container mx-auto">  
          <p className='text-3xl md:text-[37px] mt-10 text-white font-semibold mb-20'>Price List</p>
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 mb-10 md:mb-0 px-6 md:px-0">
              <Card img={buah1} name='Anggur Hitam' idP='1' price='16.000' price2='26.000' />
              <Card img={buah2} name='Anggur Hijau' idP='2' price='19.000' price2='39.000' />
              <Card img={buah3} name='Anggur Red Globe' idP='3' price='14.000' price2='23.000' />
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default List