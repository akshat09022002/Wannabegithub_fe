
function Signup() {
 

return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Create a new account</h1>
		<form action="#">
            <div className="flex space-x-4" >
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your first name" required></input>
			</div>

            <div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your last name" required></input>
			</div>

            </div>

            <div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your email address" required></input>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required></input>
				
			</div>

            <div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
				<input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Re Enter your password" required></input>
				
			</div>
			<div className="flex items-center justify-between mb-4">
				<a href="/sign-in"
					className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
					</a>
			</div>
			<button onClick={()=>{
				alert("this is the signup route");
			}} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
		</form>
	</div>
</div>
  )
}

export default Signup