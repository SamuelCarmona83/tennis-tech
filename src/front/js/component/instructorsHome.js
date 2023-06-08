import React from 'react';
import { TeacherCard } from "../component/teacherCard";
import "../../styles/home.css";

export const InstructorsHome = () => {
    return(

        <>
            <div className="my-5 py-4 d-flex flex-row justify-content-around" style={{backgroundColor: "#EBCAA4"}}>
				<TeacherCard
					image="https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwcGxheWVyfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60"
				/>
				<TeacherCard
					image="https://images.unsplash.com/photo-1619118384437-fd10fefc0ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
				/>
				<TeacherCard
					image="https://images.unsplash.com/photo-1638193855576-a9e2c7dd1b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
				/>
			</div>
        
        </>
    )
}