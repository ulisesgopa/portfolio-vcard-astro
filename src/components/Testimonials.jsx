import Modal from "./Modal"


const Testimonials = () => {


  const items = [
    {
      id: 1,
      title: 'Daniel lewis',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      avatar: '/assets/images/avatar-1.webp',
    },
    {
      id: 2,
      title: 'Jessica miller',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      avatar: '/assets/images/avatar-2.webp',
    },
    {
      id: 3,
      title: 'John doe',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      avatar: '/assets/images/avatar-3.webp',
    },
    {
      id: 4,
      title: 'Jane doe',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.',
      avatar: '/assets/images/avatar-4.webp',
    }
  ]

  
  return (
    <>
      <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          { items.map(item => (
            <li key={item.id} className="testimonials-item">
              <div className="content-card" data-testimonials-item>

                <figure className="testimonials-avatar-box">
                  <img src={item.avatar} alt={item.title} data-testimonials-avatar/>
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title>{item.title}</h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                    {item.text}
                  </p>
                </div>

              </div>
            </li>
          ))}

        </ul>

      </section>

      <Modal/>
    </>
  )
}

export default Testimonials
