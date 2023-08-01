import React from 'react'

const HotelCard = ({item}) => {
 
    return (
        <div className='mainContainerCard'>
            <img className='hotelİmage' src={item.img} alt='resim' />
            <div>
                {/* ctrl k + c */}
                <div className='mainContainerCardInfo'>
                    {item.superHostMu && <span className='superHost'>Super host</span>}
                    <span className='descText'>{item.room}</span>
                    <div>
                        <img className='' src='images/star.png' alt='start' />
                        <span className=''>{item.rating}</span>
                    </div>
                </div>
                <div>
                    <h2 className='descH2'>{item.name}</h2>
                </div>
            </div>

        </div>
    )
}

export default HotelCard