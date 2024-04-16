import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserSignupType } from "@hitemup09/wannabegit";

function Signup() {
 const navigate= useNavigate();

 const [credentials,setcredentials]= useState<UserSignupType>({
	firstName:"",
	lastName:"",
	email:"",
	password:""
 });
 const [passmatch,setmatch] = useState(false);


return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
	<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
		<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Create a new account</h1>
            <div className="flex space-x-4" >
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
				<input onChange={(e)=>{
					setcredentials({...credentials ,firstName:e.target.value})
				}} type="text" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your first name" required></input>
			</div>

            <div className="mb-4">  
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
				<input onChange={(e)=>{
					setcredentials({...credentials,lastName:e.target.value});
				}} type="text" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your last name" required></input>
			</div>

            </div>

            <div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
				<input onChange={(e)=>{
					setcredentials({...credentials,email:e.target.value});
				}} type="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Your email address" required></input>
			</div>
		 
			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input onChange={(e)=>{
					setcredentials({...credentials,password:e.target.value});

				}} type="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required></input>
				
			</div>

            <div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
				<input onChange={(e)=>{
					if(credentials.password==e.target.value){
						setmatch(true);
					}
					else{
						setmatch(false);
					}
				}} type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Re Enter your password" required></input>
				
			</div>
			<div className="flex items-center justify-between mb-4">
				<a href="/sign-in"
					className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login
					</a>
			</div>
			<button onClick={async ()=>{

				await axios.post('http://localhost:33921/api/v1/user/verify_email',credentials,{
					withCredentials:true
				});
				navigate("/verify");
			}} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
			<button onClick={async ()=>{
				window.location.href= "http://localhost:46815/api/v1/user/auth/google";
			}} type="submit" className="w-full flex justify-center mt-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signin with Google</button>
		
	</div>
</div>
  )
}

export default Signup