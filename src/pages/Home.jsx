// import React from 'react';

//demo page
import LeftSidebar from '../components/LeftSidebar';

const Home = () => {
  //hello ji
  return (
    <div className="flex">
      
      <LeftSidebar />
      <div className="flex-1 ml-64 md:ml-80 lg:ml-96 px-4 sm:px-6 md:px-8 lg:px-10 overflow-y-auto h-screen ">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-[#006FB9] mt-20 sm:mt-28 md:mt-40 font-bold">
          Email Header Filtering
        </h1>
        <div className="flex flex-col gap-3 ml-20 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
          <h1 className='text-xl sm:text-2xl font-bold'>Filter 1</h1>
          <p className='text-sm sm:text-md'>Filter emails where 'Subject' header contains 'Urgwet' (case-sensitive)</p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
            <p className='text-sm sm:text-base'>Email Field</p>
            <input type='text' placeholder='Subject' className='w-full sm:w-auto border-2 border-gray-500 rounded-md p-1' />
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8'>
            <div className='w-full sm:w-1/2'>
              <h1 className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Logic</h1>
              <select className='border-2 border-gray-500 rounded-md p-3 text-lg w-full'>
                <option value="contains">AND</option>
                <option value="does not contain">OR</option>
              </select>
            </div>
            <div className='w-full sm:w-1/2'>
              <h1 className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Operator</h1>
              <select className='border-2 border-gray-500 rounded-md p-3 text-lg w-full'>
                <option value="equal" className='py-4'>Equal to</option>
                <option value="equal-i" className='py-4'>Equal to (case insensitive)</option>
                <option value="not-equal" className='py-4'>Not equal to</option>
                <option value="not-equal-i" className='py-4'>Not equal to (case insensitive)</option>
                <option value="contains" className='py-4'>Contains</option>
                <option value="contains-i" className='py-4'>Contains (case insensitive)</option>
                <option value="not-contains" className='py-4'>Does not contain</option>
                <option value="not-contains-i" className='py-4'>Does not contain (case insensitive)</option>
                <option value="starts" className='py-4'>Start with</option>
                <option value="starts-i" className='py-4'>Start with (case insensitive)</option>
                <option value="not-starts" className='py-4'>Does not start with</option>
                <option value="not-starts-i" className='py-4'>Does not end with (case insensitive)</option>
                <option value="ends" className='py-4'>End with</option>
                <option value="ends-i" className='py-4'>End with (case insensitive)</option>
                <option value="not-ends" className='py-4'>Does not end with</option>
                <option value="not-ends-i" className='py-4'>Does not end with (case insensitive)</option>
                <option value="matches" className='py-4'>Matches pattern</option>
                <option value="matches-i" className='py-4'>Matches pattern (case insensitive)</option>
              </select>              
            </div>
          </div>
          <div>
            <p className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Value</p>
            <input type='text' placeholder='Urgent' className='border-2 border-gray-500 rounded-md p-2 w-full sm:w-2/5' />
          </div>
        </div> 

        <div className='flex flex-col gap-3 ml-20 sm:gap-4 mt-6 sm:mt-8 md:mt-10'>
          <h1 className='text-xl sm:text-2xl font-bold'>Filter 2</h1>
          <p className='text-sm sm:text-md'>Filter emails where 'From' header equals 'example@example.com' (case-insensitive)</p>
          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
            <p className='text-sm sm:text-base'>Email Field</p>
            <input type='text' placeholder='From' className='w-full sm:w-auto border-2 border-gray-500 rounded-md p-2' />
          </div>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8'>
            <div className='w-full sm:w-1/2'>
              <h1 className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Logic</h1>
              <select className='border-2 border-gray-500 rounded-md p-3 text-lg w-full'>
                <option value="contains">AND</option>
                <option value="does not contain">OR</option>
              </select>
            </div>
            <div className='w-full sm:w-1/2'>
              <h1 className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Operator</h1>
              <select className='border-2 border-gray-500 rounded-md p-3 text-lg w-full'>
                <option value="equal" className='py-4 '>Equal to</option>
                <option value="equal-i" className='py-4'>Equal to (case insensitive)</option>
                <option value="not-equal" className='py-4'>Not equal to</option>
                <option value="not-equal-i" className='py-4'>Not equal to (case insensitive)</option>
                <option value="contains" className='py-4'>Contains</option>
                <option value="contains-i" className='py-4'>Contains (case insensitive)</option>
                <option value="not-contains" className='py-4'>Does not contain</option>
                <option value="not-contains-i" className='py-4'>Does not contain (case insensitive)</option>
                <option value="starts" className='py-4'>Start with</option>
                <option value="starts-i" className='py-4'>Start with (case insensitive)</option>
                <option value="not-starts" className='py-4'>Does not start with</option>
                <option value="not-starts-i" className='py-4'>Does not end with (case insensitive)</option>
                <option value="ends" className='py-4'>End with</option>
                <option value="ends-i" className='py-4'>End with (case insensitive)</option>
                <option value="not-ends" className='py-4'>Does not end with</option>
                <option value="not-ends-i" className='py-4'>Does not end with (case insensitive)</option>
                <option value="matches" className='py-4'>Matches pattern</option>
                <option value="matches-i" className='py-4'>Matches pattern (case insensitive)</option>
              </select>
            </div>
          </div>
          <div>
            <p className='text-base sm:text-lg font-bold text-gray-500 mb-2'>Value</p>
            <input type='text' placeholder='example@example.com' className='border-2 border-gray-500 rounded-md p-2 w-full sm:w-2/5' />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;