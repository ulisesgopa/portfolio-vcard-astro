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
    <section class="skill">

      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        {content.map(item => (
          <li class="skills-item">
            <div class="title-wrapper">
              <h5 class="h5">{item.title}</h5>
              <data value={item.value}>{item.value}%</data>
            </div>
            <div class="skill-progress-bg">
              <div class="skill-progress-fill" style={{
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
