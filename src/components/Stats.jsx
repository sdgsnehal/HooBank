import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>(<div key={stat.id} className=''>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:">{stat.value}</h4>
        <p>{stat.title}</p>
      </div>))}
    </section>
  )
}

export default Stats