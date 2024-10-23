import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserCount = () => {
	const [totalUsers, setTotalUsers] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchUserCount = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/auth/count'); // Fixed typo and endpoint
				setTotalUsers(response.data.count); // Adjusted to match the response structure
			} catch (err) {
				setError(err.message || 'Error fetching user count');
			} finally {
				setLoading(false);
			}
		};

		fetchUserCount();
	}, []);

	return { totalUsers, loading, error };
};

export default useUserCount;
