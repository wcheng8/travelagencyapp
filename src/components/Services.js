import React from 'react'
import { Title } from './Title'
import { serviceData } from '../data'

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title='our' subTitle='services'/>
      <div className="section-center services-center">
      {serviceData.map((data)=>{
        return(
          <article className="service" key = {data.id}>
        <span className="service-icon"><i className={data.icon}></i></span>
        <div className="service-info">
          <h4 className="service-title">{data.service}</h4>
          <p className="service-text">
            {data.text}
          </p>
        </div>
      </article>
        )
      })}
      </div>
  </section>
  )
}
