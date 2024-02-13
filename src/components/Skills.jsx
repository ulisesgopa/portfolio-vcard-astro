const Skills = () => {
  const content = [
    {
      title: 'Web design',
      value: 80
    },
    {
      title: 'Graphic design',
      value: 70
    },
    {
      title: 'Branding',
      value: 90
    },
    {
      title: 'WordPress',
      value: 50
    }
  ]

  return (
    <section className="skill">

      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        {content.map(item => (
          <li key={item.title} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{item.title}</h5>
              <data value={item.value}>{item.value}%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill" style={{
                width: `${item.value}%`
              }}></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
