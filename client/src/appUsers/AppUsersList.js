import {useEffect, useState} from "react";
import {getListOfAppUsers} from "../client";
import {getToken} from "../localStorage/LocalStorage";
import {Select} from "antd";

const {Option} = Select;


function AppUsersList() {
	const [appUsers, setAppUsers] =useState([]);
	const [fetching, setFetching] = useState(true);

	const fetchAppUsers = token =>
		getListOfAppUsers(token)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setAppUsers(data);
			}).catch(err => {
				console.log(err.response);
		}).finally(() => setFetching(false));

	useEffect(() => {
		console.log("component AppUsersList is mounted");
		fetchAppUsers(getToken());
	}, []);

	return (
		<div>
			{appUsers && appUsers.length > 0 ? appUsers.map(a => {
				return <div>
					<Option value={a.email}>{a.fullName}</Option>
				</div>
			}) : "no app users"}
		</div>
	)
}

export default AppUsersList;