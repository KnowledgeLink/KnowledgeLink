import { RiTeamFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoIosHappy } from "react-icons/io";
import { MdAutoGraph } from "react-icons/md";

const features = [
  {
    name: 'Personalized Approach',
    description:
      'Every student’s aspirations are different. We tailor our services to meet your unique needs and goals.',
    icon: IoIosHappy  ,
  },
  {
    name: 'Expert Team',
    description:
      'Our counselors, educators, and advisors bring years of experience and insights to the table.',
    icon: RiTeamFill,
  },
  {
    name: 'Comprehensive Support',
    description:
      'From counseling and application assistance to exam preparation, we provide end-to-end guidance.',
    icon: BiSupport,
  },
  {
    name: 'Proven Success',
    description:
      'Our students have consistently secured admissions to top-tier institutions and achieved outstanding results in competitive exams.',
    icon: MdAutoGraph ,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="bg-white mb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-800 sm:text-5xl lg:text-balance">
            Why Choose Knowledge<span className='text-primary'>Link</span> ..?
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          At Knowledge Link, our mission is to empower students with the resources, guidance, and confidence they need to achieve their academic dreams.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature,i) => (
              <div key={i} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
