import React, { useEffect } from 'react';

const Song = props => {
	const { song } = props;
	useEffect(() => {
		console.log(song);
	}, []);
	return (
		<div className="card">
			<div className="card-body">
				<img src={song.video.thumbnail} className="card-img-top"></img>
			</div>
			<div className="card-footer">
				<p>{song.name}</p>
				<p>{song.album.name}</p>
				<p>{song.artists.name}</p>
			</div>
		</div>
	);
};

export default Song;
