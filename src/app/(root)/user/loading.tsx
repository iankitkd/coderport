import Loader from '@/components/shared/Loader'

export default function loading() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gradient-start-bg to-gradient-end-bg'>
      <div className='container mx-auto'>
        <Loader />
      </div>
    </div>
  )
}
