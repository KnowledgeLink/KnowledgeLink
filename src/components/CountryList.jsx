const countries = [
    {
      name: 'United States',
      imageUrl:
        '/flag1.png',
    },
    {
      name: 'United Kingdom',
      imageUrl:
        '/flag2.png',
    },
    {
      name: 'Russia',
      imageUrl:
        '/flag3.png',
    },
    {
      name: 'Georgia',
      imageUrl:
        '/flag5.png',
    },
    {
      name: 'Uzbekistan',
      imageUrl:
        '/flag6.png',
    },
    {
      name: 'Kyrgyzstan',
      imageUrl:
        '/flag4.png',
    },
    

  ]
  
  const CountryList = () => {
    return (
      <ul role="list" className="divide-y divide-gray-100 px-6 max-w-xl mb-20 mx-auto">
        {countries.map((country) => (
          <li key={country.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src={country.imageUrl} className="size-12 flex-none bg-center bg-cover rounded-full bg-gray-50" />
            </div>
            <div className="shrink-0 flex flex-col items-end">
              <p className="text-lg/8 font-semibold text-gray-800">{country.name}</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
  export default CountryList
  