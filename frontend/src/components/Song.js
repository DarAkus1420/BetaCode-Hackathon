import React, { useEffect } from 'react';

const Song = props => {
	const { song, isUser } = props;
	useEffect(() => {
		console.log(song);
	}, []);

	const sendFavorite = event => {
		event.preventDefault();
		axios
			.post(`${BASE_URL}/auth/login`, { ...user })
			.then(response => {
				localStorage.setItem('token', response.data.data.token);
				localStorage.setItem('user', response.data.data.user);
				setIsUser(true);
				history.push('/');
			})
			.catch(e => {
				console.log(e.response);
				setBadPass(true);
			});
	};
	return (
		<div className="card">
			<div className="card-body">
				<a href={song.video.link} target="_blank">
					<img src={song.video.thumbnail} className="card-img-top"></img>
				</a>
			</div>
			<div className="card-footer">
				<p>{song.name}</p>
				<p>{song.album.name}</p>
				<p>{song.artists.name}</p>
			</div>
			<div>{isUser ? <button onClick={sendFavorite}>Agregar a favoritos</button> : ''}</div>
		</div>
	);
};

export default Song;
