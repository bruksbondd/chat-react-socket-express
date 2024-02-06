import { useState } from "react";


const useSignup = () => {
	const [loading, setLoading] = useState(false);
	

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		return true;
	};

	return { loading, signup };
};
export default useSignup;