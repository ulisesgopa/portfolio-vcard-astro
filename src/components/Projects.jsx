const Projects = () => {

  const content = [
  {
    id: 1,
    title: "Finance",
    category: "Web development",
    img: "/assets/images/project-1.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css', 'javascript'],
    date: '2023-01-01',
    author: 'John Doe',
  },
  {
    id: 2,
    title: "Orizon",
    category: "Web development",
    img: "/assets/images/project-2.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css', 'javascript'],
    date: '2023-02-15',
    author: 'Jane Smith',
  },
  {
    id: 3,
    title: "Fundo",
    category: "Web design",
    img: "/assets/images/project-3.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css'],
    date: '2023-03-20',
    author: 'Alice Johnson',
  },
  {
    id: 4,
    title: "Brawlhalla",
    category: "Applications",
    img: "/assets/images/project-4.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['java', 'android'],
    date: '2023-04-10',
    author: 'Bob Williams',
  },
  {
    id: 5,
    title: "DSM.",
    category: "Web design",
    img: "/assets/images/project-5.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css'],
    date: '2023-05-05',
    author: 'Charlie Brown',
  },
  {
    id: 6,
    title: "MetaSpark",
    category: "Web design",
    img: "/assets/images/project-6.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css', 'javascript'],
    date: '2023-06-30',
    author: 'David Davis',
  },
  {
    id: 7,
    title: "Summary",
    category: "Web development",
    img: "/assets/images/project-7.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css', 'javascript'],
    date: '2023-07-25',
    author: 'Emma Wilson',
  },
  {
    id: 8,
    title: "Task Manager",
    category: "Applications",
    img: "/assets/images/project-8.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['javascript', 'react', 'node.js'],
    date: '2023-08-15',
    author: 'Frank Miller',
  },
  {
    id: 9,
    title: "Arrival",
    category: "Web development",
    img: "/assets/images/project-9.webp",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    github: '#',
    live: '#',
    tags: ['html', 'css', 'javascript'],
    date: '2023-09-10',
    author: 'Grace Lee',
  }];  
  return (
    <section className="projects">

      <ul className="filter-list">

        <li className="filter-item">
          <button className="active" data-filter-btn>All</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web design</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Applications</button>
        </li>

        <li className="filter-item">
          <button data-filter-btn>Web development</button>
        </li>

      </ul>

      <div className="filter-select-box">

        <button className="filter-select" data-select>

          <div className="select-value" data-selecct-value>Select category</div>

          <div className="select-icon">
            <img src="/assets/icons/arrow-down.webp" alt="arrow-down icon"/>
          </div>

        </button>

        <ul className="select-list">

          <li className="select-item">
            <button data-select-item>All</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web design</button>
          </li>

          <li className="select-item">
            <button data-select-item>Applications</button>
          </li>

          <li className="select-item">
            <button data-select-item>Web development</button>
          </li>

        </ul>

      </div>

      <ul className="project-list">
        {
          content.map(item => (
            <li key={item.id} className="project-item  active" data-filter-item data-category="web development">
              <a href="#">

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <img src="/assets/icons/eye.webp" alt="eye icon" />
                  </div>

                  <img src={item.img} alt="finance" loading="lazy"/>
                </figure>

                <h3 className="project-title">{item.title}</h3>

                <p className="project-category">{item.category}</p>

              </a>
            </li>
        ))}
      </ul>

    </section>
  )
}

export default Projects
