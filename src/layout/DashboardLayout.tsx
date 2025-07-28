import Sidebar from './components/Sidebar'

const DashboardLayout = () => {
  return (
    <div className=''>
        <Sidebar/>
        <main>
            {/* <Outlet/> */}
        </main>
    </div>
  )
}

export default DashboardLayout