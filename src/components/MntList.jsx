const colleges = [
    {
      name: 'Narsee Monjee Institute of Management Studies',
      location: 'Mumbai',
      href: 'https://nmims.edu/mumbaicampus',
      imageUrl:
        '/collegeIcon2.png',
    },
    {
      name: 'IMT Ghaziabad',
      location: 'Ghaziabad',
      href: 'https://www.imt.edu/',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'MDI Gurgaon',
      location: 'Gurgaon',
      href: 'https://www.mdi.ac.in/',
      imageUrl:
      '/collegeIcon2.png',
    },
    {
      name: 'Shiv Nadar University',
      location: 'Greater Noida',
      href: 'https://snu.edu.in/',
      imageUrl:
      '/collegeIcon2.png',
    },
  ]
  import { RiExternalLinkFill } from "react-icons/ri";
  
  const MntList = () => {
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
  export default MntList
  