const colleges = [
    {
      name: 'Vit Vellore',
      location: 'Banglore',
      href: 'https://vit.ac.in/',
      imageUrl:
        '/collegeIcon2.png',
    },
    {
      name: 'Manipal Institute of Technology',
      location: 'Banglore',
      href: 'https://www.manipal.edu/mit.html',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'SRM Institute of Science and Technology',
      location: 'Chennai',
      href: 'https://www.srmist.edu.in/',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'R.V. College of Engineering',
      location: 'Banglore',
      href: 'https://rvce.edu.in/',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'Ramaiah Institute of Technology',
      location: 'Banglore',
      href: 'https://www.msrit.edu/',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'BMS College of Engineering',
      location: 'Banglore',
      href: 'https://bmsce.ac.in/',
      imageUrl:
      '/collegeIcon2.png',
    },
    
  ]
  import { RiExternalLinkFill } from "react-icons/ri";
  
  const EnggList = () => {
    return (
        <ul role="list" className="divide-y divide-gray-100 px-6 max-w-2xl sm:mb-20 mx-auto">
        {colleges.map((college,i) => (
          <li key={i} className="flex justify-between items-center gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={college.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">{college.name}</p>
                <p className="mt-1 text-xs/5 text-gray-500">{college.location}</p>
              </div>
            </div>
            <div className="items-end  hover:bg-gray-800 p-4 rounded-full">
              <a className="sm:text-[1rem] text-sm text-primary font-bold" target="_blank" href={college.href}> <RiExternalLinkFill /></a>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  export default EnggList
  