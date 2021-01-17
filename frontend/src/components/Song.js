import React from 'react';

const Song = props => {
	const { song } = props;

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
		</div>
	);
};

export default Song;
