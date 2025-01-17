import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TeacherCard } from "../component/teacherCard";
import { ReservasHome } from "../component/reservasHome";
import { InstructorsHome } from "../component/instructorsHome";
import { CanchasHome } from "../component/canchasHome";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if(store.token && store.token != "" && store.token != undefined) {
			actions.getMessage();
			actions.getProfiles()
			actions.getUsers()
		} 
		
	}, 
	[store.token])

	useEffect(() => {
		actions.getInstructors()
		actions.getFields()
	}, [])

	



	return (
		<>
			<ReservasHome/>
			<InstructorsHome/>
			{
				store.fields.map((field, index) => (
					<CanchasHome
						type={field.type}
						number_of_field={field.number_of_field}
						description={field.description}
						image={field.photo}
						item={field}
						key={index}

					/>
				))

			}
			
			
		</>
	);
};
