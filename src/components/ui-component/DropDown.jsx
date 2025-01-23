import { useState } from 'react'
import { BsFillPersonPlusFill } from "react-icons/bs";

const menuItems = [
    { label: 'Prompts', href: '#' },
    { label: 'Email header filtering', href: '#' },
    { label: 'LLM settings', href: '#' },
    { label: 'Knowledge settings', href: '#' },
    { label: 'Tenant management', href: '#' },
    { label: 'Users', href: '#' },
    { label: 'Roles and permissions', href: '#' },
    { label: 'Billing admin', href: '#' }
];

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <div className="relative roboto-font">
        <div className='absolute bottom-6 md:bottom-8 lg:bottom-10 left-4 md:left-8 lg:left-10'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            <BsFillPersonPlusFill className='text-2xl md:text-2xl lg:text-3xl bg-[#006FB9] rounded-full w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 p-1.5 md:p-2 text-white'/>
          </button>

          {isOpen && (
            <div className="ml-12 border-r-2 border-gray-300  border-b-4 absolute bottom-full mb-2 w-64 md:w-72 lg:w-80 bg-white rounded-lg shadow-lg">
                <h1 className='text-base md:text-lg lg:text-xl font-semibold p-2 text-center'>Additional settings</h1>
              <ul className="py-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block px-8 py-2 text-sm md:text-base lg:text-lg font-semibold text-gray-700 hover:bg-[#006FB9] hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>
  )
}

export default DropDown
