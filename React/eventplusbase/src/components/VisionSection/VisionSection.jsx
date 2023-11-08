import React from 'react';
import Title from '../Title/Title';
const VisionSection = () => {
    return (
        <section className='vision'>
              <div className='vision__box'>
                <Title
                titleText={"Visão"}
                color='White'
                additionalClass='vision__title'
                
                />
                <p className='vision__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque dignissimos facilis. Eum quia fugiat fugit sed labore modi possimus explicabo consequuntur laboriosam quod officia, amet voluptatibus voluptas quam dolorum.</p>
                </div>
        </section>
      
    );
};

export default VisionSection;