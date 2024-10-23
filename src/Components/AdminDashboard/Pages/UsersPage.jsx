import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "../Sidebar/StatCard";
import Header from "../Sidebar/Header";
import UserGrowthChart from "../users/UserGrowthChart";
import UserActivityHeatmap from "../users/UserActivityHeatmap";
import UserDemographicsChart from "../users/UserDemographicsChart";
import UsersTable from "../users/UsersTable";
import useUserCount from "../../../hooks/useUserCount"; // Ensure you are importing the hook correctly

const UsersPage = () => {
	// Fetch user count from custom hook
	const { totalUsers, loading, error } = useUserCount();

	// Static user stats (for demonstration purposes)
	const userStats = {
		newUsersToday: 243,
		activeUsers: 98520,
		churnRate: "2.4%",
	};

	if (loading) {
		return <div>Loading...</div>; // Add a loading state
	}

	if (error) {
		return <div>Error loading user stats: {error.message}</div>; // Handle errors gracefully
	}

	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Users' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				{/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Users'
						icon={UsersIcon}
						value={totalUsers.toLocaleString()} // Ensure totalUsers is available here
						color='#6366F1'
					/>
					<StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						name='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
				</motion.div>

				<UsersTable />

				{/* USER CHARTS */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
					<UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
				</div>
			</main>
		</div>
	);
};

export default UsersPage;
