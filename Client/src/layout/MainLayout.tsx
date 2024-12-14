
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0">
        {/* Navbar  */}
        
        {/* Main content  */} 
        <div className="flex-1">
            <Outlet/>
        </div>

        {/* Footer  */}
    </div>
  )
}

export default MainLayout
