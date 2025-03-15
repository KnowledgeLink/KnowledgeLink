const people = [
    {
      name: 'KaranVeer Rana',
      role: 'Founder',
      imageUrl:
        '/Avatar.png',
    },
    // {
    //   name: 'Rishab Rana',
    //   role: 'Co-Founder',
    //   imageUrl:
    //     '/Avatar.png',
    // },
    {
      name: 'Amit Singh Rana',
      role: 'Director',
      imageUrl:
        '/Avatar.png',
    },
    {
      name: 'Sumit Singh Rana',
      role: 'Director',
      imageUrl:
        '/Avatar.png',
    },
    {
      name: 'Vinay Thakur',
      role: 'Senior Counsellor',
      imageUrl:
        '/Avatar.png',
    },
    {
      name: 'Abhinav Thakur',
      role: 'Senior Counsellor',
      imageUrl:
        '/Avatar.png',
    },
    {
      name: 'Anu Yadav',
      role: 'General Manager',
      imageUrl:
        '/Avatar.png',
    },
  ]
  
  const Teams = () => {
    return (
      <div id="team" className="bg-white my-11 sm:my-0 sm:pt-4 sm:pb-16">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl">
              Meet our Team Members
            </h2>
            <p className="mt-6 text-sm sm:text-lg/8 text-gray-600">
            A group of passionate individuals dedicated to supporting you every step of the way.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full opacity-75" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-800">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-primary">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  
  export default Teams