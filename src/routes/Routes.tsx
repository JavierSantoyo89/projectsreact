import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@views/index'
import HomeBlog from '@views/blog/home/Home'
import { Error } from '@components/error/Error404'
import { TicketMasterPirate } from '@views/ticketmaster/TicketMasterPirate'
import  Profile  from '@views/ticketmaster/Profile/Profile'
import MyInfo from '@views/ticketmaster/Profile/components/myinfo/MyInfo'
import LikedEvents from '@views/ticketmaster/Profile/components/likedEvents/LikedEvents'
import Detail from '@views/ticketmaster/Detail/Detail'
import {Loading}  from '@components/TicketMasterPirate/Loading/Loading'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <Error />,
	},
	{
		path: '/ticketmasterpirate',
		element: <TicketMasterPirate />,
	},
	{
		path: "/ticketmasterpirate/detail/:eventId",
		element:
		<Suspense fallback={<Loading />}>
		 
	
		  <Detail />,
		 
		</Suspense>
	  },
	  {
		path: "/ticketmasterpirate/profile",
		element: <Profile />,
		children: [
		  {
			path: "my-info",
			element: <MyInfo />,
		  },
		  {
			path: "liked-events",
			element: <LikedEvents />,
		  },
		],
	  },
	  {
 path: "/blog",
		element: <HomeBlog />,
	  },
])

const myRoutes = () => <RouterProvider router={router} />

export default myRoutes
