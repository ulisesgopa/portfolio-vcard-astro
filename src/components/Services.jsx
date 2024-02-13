const Services = () => {
  
  const serviceItemList = [
    {
      title: "Web design",
      text: "The most modern and high-quality design made at a professional level.",
      icon: "/assets/images/icon-design.svg"
    },
    {
      title: "Web development",
      text: "High-quality development of sites at the professional level.",
      icon: "/assets/images/icon-dev.svg"
    },
    {
      title: "Mobile apps",
      text: "Professional development of applications for iOS and Android.",
      icon: "/assets/images/icon-app.svg"
    },
    {
      title: "Photography",
      text: "Professional photography of the best quality.",
      icon: "/assets/images/icon-photo.svg"
    }
  ]
  return (
    <section className="service">
      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">
        {serviceItemList.map((item, index) => (
          <li key={index} className="service-item">
            <div className="service-icon-box">
              <img src={item.icon} alt={item.title} width={40} height={40}/>
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">{item.title}</h4>

              <p className="service-item-text">
                {item.text}
              </p>
            </div>
            <div className="service-content-box"></div>
          </li>
        ))}

      </ul>

    </section>
  )
}

export default Services
