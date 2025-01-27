const stats = [
    { id: 1, name: 'Featured Colleges All Over India', value: '60+' },
    { id: 2, name: 'Sucessfully Guided Students', value: '730+' },
    { id: 3, name: 'Overseas Countries Admissions', value: '6+' },
  ]
  
  const Stats = () => {
    return (
      <div className="bg-gray-800 py-16 mb-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-200">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

  export default Stats
  