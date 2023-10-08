import Link from 'next/link'
 
export default function NotFoundLink() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl sm:text-5xl lg:text-9xl text-secondary z-10'> Link Not Found</h1>
      <span className='absolute loading loading-ring w-3/5 text-secondary-focus opacity-10'></span>
      <p className='text-base-content z-10'>Could not find requested resource</p>
      <Link className='text-base-content z-10' href="/">Return Home</Link>
      <span className='big text-big-vh sm:text-big-sm-vh lg:text-big-lg-vh opacity-25'>404</span>
    </div>
  )
}