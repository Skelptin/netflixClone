import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TopNav from '../components/TopNav'

import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'

import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, getGenres, } from '../store'
import SliderContainer from '../components/SliderContainer'


const Netflix = () => {

  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate()

  const movies = useSelector((state)=>state.netflix.movies)
  const generesLoaded = useSelector((state) => state.netflix.generesLoaded)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [])


  useEffect(() => {
    if (generesLoaded) {
      dispatch(fetchMovies({ type: "all" }))
    }
  })


  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  // console.log(movies)

  return (
    <HeroContainer >
      <div className='hero'>
        <TopNav isScrolled={isScrolled} />
        <img className='background-image'
          src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
          alt='Hero Image' />
        <div className='container'>
          <div className='title'>
            <h1> Super man </h1>
            <p>
              Cupidatat dolor nulla officia cupidatat dolor veniam consectetur voluptate non occaecat occaecat nisi. Proident minim cupidatat pariatur ut deserunt ipsum incididunt ex cupidatat non Lorem culpa magna sunt. Culpa laborum eiusmod qui occaecat ut minim est consectetur. Pariatur fugiat irure et laboris ut labore laboris nostrud dolor aliqua nostrud quis nostrud.

              Excepteur velit pariatur anim. Dolore labore labore sit adipisicing incididunt. Est fugiat aute consectetur esse ut ad ipsum. Irure cillum sit occaecat Lorem esse laboris. Duis sit nulla duis mollit pariatur ex tempor quis sint elit.
            </p>
          </div>

          <div className='buttons'>
            <button className='playBtn' onClick={() => navigate('/player')}> Play</button>
            <button className='moreBtn'> More</button>
          </div>
        </div>
      </div>

      <SliderContainer movies={movies} />

    </HeroContainer>
  )
}

const HeroContainer = styled.div`

.hero{
  position: relative;
    .background-image{
        filter:brightness(40%);
    } 

  img{
    height: 70vh;
    width:100%;
  }
  .container{
    position: absolute;
    bottom:1rem;
      .title{
        h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size:73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p{
          margin-bottom: -50px;
          width:640px;
          margin-left: 5rem;
          font-family: "lexend Deca" , sans-serif;
          color:white
        }
      }

      .buttons{
        display: flex;
        margin: 5rem;
        gap:2rem;
      }

      .playBtn{
        display: flex;
        align-items:center;
        justify-content: center;
        color:red;
        border-radius:1rem;
        font-size:1.4rem;
        gap: 1rem;padding:0.9rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:none;
        cursor: pointer;
      }

      .moreBtn{
        display: flex;
        align-items:center;
        justify-content: center;
        color:white;
        background-color: black;
        border-radius:1rem;
        font-size:1.4rem;
        gap: 1rem;padding:0.9rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:0.1rem solid white;
        cursor: pointer;
      }
     }
}
  
`




export default Netflix