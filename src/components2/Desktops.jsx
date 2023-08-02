import React from 'react'
import { Link } from 'react-router-dom'

const Desktops = () => {

  const sectors = [
    {
      "id": 1,
      "name": "Housing & Construction",
      "description": "To  help with automatic hazard discovery, 3D  point reconstruction, built vs design confirmation. We work with builders to upgrade their client service offering.",
      "image": "FaBuilding",
      "url": "housing",
      "image1": "Housing & Construction.webp"
    },

    {
      "id": 2,
      "name": "Agriculture",
      "description": "Our team can help you to explore agriculture products to world. To analyize the climate changes. To improve the efficiency of supply and demand chain.",
      "image": "FaSeedling",
      "url": "agriculture",
      "image1": "Agriculture.webp"

    },
    {
      "id": 3,
      "name": "Real Estate & Property",
      "description": "Custom software  results to make life easier for property  possessors, tenants, brokers and agents that make the process of managing, dealing  and buying property more effective.",
      "image": "FaCity",
      "url": "realEstate",
      "image1": "Real Estate & Property.webp"
    },
    {
      "id": 4,
      "name": "Accounting ",
      "description": "Software to automate processes, increase productivity, enhance security, predict consumer behaviour and ultimately provide a better service to their customers.",
      "image": "FaRegAddressCard",
      "url": "accounting",
      "image1": "Accounting.webp"
    },
    {
      "id": 5,
      "name": "Banking & Finance",
      "description": "With the rise of cryptocurrency and the need for companies to advance their edge, client experience. To make intelligent fiscal operations, track information and further",
      "image": "FaLandmark",
      "url": "banking",
      "image1": "Banking & Finance.webp",
    },
    {
      "id": 6,
      "name": "Charity & Not for Profit",
      "description": "Charities are constantly looking for ways to raise funds and sympathizers. We work with non-profit organizations to help provide secure support for mobile operations and compatible software.",
      "image": "FaHandHoldingHeart",
      "url": "charity",
      "image1": "Charity & Not For Profit.webp",

    },
    {
      "id": 7,
      "name": "Travel",
      "description": "Logistics companies are utilising Internet of Things( IoT) to manage, maintain and track their lines, budget, means and further. We work with these providers to insure they've a data- centric logistics result.",
      "image": "FaGlobeAmericas",
      "url": "travel",
      "image1": "Travel.webp",

    },
    {
      "id": 8,
      "name": "Food Delivery",
      "description": "Rather than relying on third-party suppliers such as Swiggy,Zomato, Uber Eats etc.., restaurants are investing in their own custom applications to increase revenue, supply chains and stock levels.",
      "image": "FaPeopleCarry",
      "url": "food",
      "image1": "Food Delivery.webp",
    },
    {
      "id": 9,
      "name": "Automotive",
      "description": "With the growth of mobile-to-vehicle connectivity, CarPlay and Android Auto provide opportunities for software development. We work with car manufacturers and businesses utilising a variety of IoT technologies.",
      "image": "FaCar",
      "url": "automotive",
      "image1": "Automotive.webp",

    },
    {
      "id": 10,
      "name": "Retail / Ecommerce",
      "description": "For businesses operating within the retail assiduity, eCommerce operations and digital class services are a way to drive footfall, increase client fidelity and engagement, and most importantly, boost profit.",
      "image": "FaStore",
      "url": "retail",
      "image1": "Retail & Ecommerce.webp"

    },
    {
      "id": 11,
      "name": "Insurance",
      "description": "Every insurance carrier, agency, or brokerage  establishment deals with immensely complicated tasks. We  give you to reuse claims, orchestrate, and renew  client  programs on an ongoing base. Dashboard to manage  brigades,  merchandisers, and  guests.",
      "image": "FaChild",
      "url": "insurance",
      "image1": "Insurance.webp",

    },
    {
      "id": 12,
      "name": "Manufacturing",
      "description": "Advance new manufacturing technologies We make software to make robots work without humans We help manufacturing companies make software to their force chain conditions. We help manufacturing companies build software that fits their supply chain.",
      "image": "FaIndustry",
      "url": "manufacturing",
      "image1": "Manufacturing.webp",

    },

    {
      "id": 13,
      "name": "Health & Fitness",
      "description": "Utilising loT and other software technologies, we work with the private medical interpreters, gymnasiums and fitness providers to elevate health and fitness shadowing, remote case monitoring, particular training, sanitarium asset shadowing and further.",
      "image": "FaHeartbeat",
      "url": "health",
      "image1": "Health & Fitness.webp",
    },
    {
      "id": 14,
      "name": "Marine",
      "description": "The use of software and smart devices across the marine sector is growing – from IoT tracking and sensors to see what is happening with marine life to the personalisation of experiences on a speed boat – giving a new meaning to the term smart boat.",
      "image": "FaWater",
      "url": "marine",
      "image1": "Marine.webp",

    },

    {
      "id": 15,
      "name": "Energy & Utilities",
      "description": "With the renewable energy transition on the rise, now is the best time to join the green movement.  We work with energy providers and utility companies to create management software solutions using advanced innovative tools using smart IoT technologies.",
      "image": "FaHandHoldingWater",
      "url": "energy",
      "image1": "Energy & Utilities.webp",
    },
    {
      "id": 16,
      "name": "Media & Entertainment",
      "description": "Do you want entertainment?  But Amazon Prime is for you.  Netlix.  spotify.  If you also want such apps, we can design entertainment apps for you and develop them using advance software, we can design and provide the app using advance machine learning solutions.",
      "image": "FaPlayCircle",
      "url": "media",
      "image1": "Media & Entertainment.webp",

    },
    {
      "id": 17,
      "name": "EdTech & ELearning",
      "description": "With the growth of Institutes Colleges Schools advance remote learning, the software that educational institutions need, online education institutions and training providers are working hard to make education more immersive.We work with schools, colleges, institutes and universities to create interactive learning environments.",
      "image": "FaBookReader",
      "url": "edTech",
      "image1": "EdTech & Elearning.webp",

    },
    {
      "id": 18,
      "name": "Sports",
      "description": "Sensor Advance Applications Needed by Athletes More Competitive Sports Field Themes The use of sensors and applications is increasing.  Player Development We work with sports teams to provide applications that are tailored to the needs of players with safety in mind.",
      "image": "FaVolleyballBall",
      "url": "sports",
      "image1": "Sports.webp",
    },

  ]

  return (
    <div className='mt-5' id='Desktops'>
      <div className="row m-5" style={{justifyContent: "center"}}>
        {sectors.map((sector) => {
          return (
            <div className="card gx-0 m-3 shadow-lg col-sm-9 col-md-5 col-lg-3" key={sector.id}>
              <Link to={`/sectors/${sector.url}`} state={{ icon: sector.image }} className="more">
                <div className="card-body p-0">
                  <img className="sectorImage img-fluid" src={`../images/sector/${sector.image1}`} alt={`${sector.image1}`} />
                  <div className="sector-heading p-2 px-3"><h2>{sector.name}</h2></div>
                  <p className='px-3'>{sector.description}</p>
                  <br />
                  <br />
                </div>
                {/* <Button type="submit" className="more-sector"><p>More &rarr;</p></Button> */}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Desktops