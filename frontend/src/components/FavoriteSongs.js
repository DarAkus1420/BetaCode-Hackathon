import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Song from './Song';

export default function FavoriteSongs(props) {
	const BASE_URL = process.env.REACT_APP_BASE_URL;

	const { isUser } = props;
	const [songs, setSongs] = useState([]);

	const getUserData = () => {
		axios
			.get(`${BASE_URL}/user/profile`, {
				headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
			})
			.then(response => {
				console.log(response.data.data.user.idFavSong, 12);
				setSongs(response.data.data.user.idFavSong);
			});
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="text-header d-flex align-item-center">
			<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<h2>
							Colector de <span>canciones</span>
						</h2>
						{songs.map(song => {
							return <Song song={song} isUser={isUser} />;
						})}
						<a href="" className="btn btn-yo">
							<span>Mis favoritos</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
