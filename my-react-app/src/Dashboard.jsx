import WithAuth from './utils/withAuth'
import withDarkTheme from './utils/withDark'

const DashBoard = () =>{
    return(
        <p>Welcome to Dashboard</p>
    )
}
const WithAuthDashboard = withDarkTheme(WithAuth(DashBoard))
export default WithAuthDashboard;