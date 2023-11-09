import telegram from './social media/telegram.png'
import instagram from './social media/instagram.svg'
import phone from './social media/phone.png'
import React from 'react';



export default function SocialMedia() {
    return (
        <div className=' flex justify-items-stretch'>
            <div className=' mx-5 mt-8'>
                <a href="https://t.me/nastilnyy_tenis" target="_blank" rel="noreferrer">
                    <button>
                        <img className=' w-20 h-20' src={telegram} alt="tg" />
                    </button>
                </a>
                <div className="card-body">
                        <h2 className="card-title text-center">Новини</h2>
                        <p className='text-center'>Акції</p>
                        <p className='text-center'>Ком'юніті</p>
                </div>
            </div>
            <div className=' mx-12 mt-8'>
                <a href="https://instagram.com/nastilnyy_tenis_sofia?igshid=MWRlbjFwZmkwbmVqbQ==" target="_blank" rel="noreferrer">
                    <button>
                        <img className=' w-20 h-20' src={instagram} alt="inst" />
                    </button>
                </a>
                <div className="card-body">
                        <h2 className="card-title text-center">Бонуси</h2>
                        <p className='text-center'>Хайлайти</p>
                        <p className='text-center'>Ціни</p>
                </div>
            </div>
            <div className=' mx-5 mt-8'>
                <div className="card w-38">
                    <figure><img className='collapse-title text-xl font-medium w-20 h-20' src={phone} alt="num" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-left">Номер для запису</h2>
                        <p>+380 63 873-44-26</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
<img tabIndex={0} className='btn btn-ghost w-20 h-20' src={phone} alt="num" />