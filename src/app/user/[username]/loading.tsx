import Loader from '@/components/Loader'

export default function loading() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='container mx-auto'>
        <Loader />
      </div>
    </div>
  )
}
