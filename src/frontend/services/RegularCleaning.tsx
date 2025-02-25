import React from 'react'
import ServiceDetails from '../../common/ServiceDetails'

const RegularCleaning = () => {
  const serviceData = {
    "service_name": "Regular Cleaning Service",
    "service_description": "Our regular cleaning service is designed to keep your home clean",
    "service_price": "$100",
    "service_duration": "1 hour",
    "service_image": "/img/service/regular-cleaning-service-banner.jpg",
    

  }
  return (
    <div>
      <ServiceDetails serviceData={serviceData}/>
    </div>
  )
}

export default RegularCleaning
