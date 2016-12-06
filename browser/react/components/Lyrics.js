import React from 'react';

 const Lyrics = (props) => {

  const artistChange = event => {
    props.setArtist(event.target.value);
  }

  const songChange = event => {
    props.setSong(event.target.value);
  }


  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input placeholder="Artist" type="text" value={props.artistQuery} onChange={artistChange}/>
        <input placeholder="Song" type="text" value={props.songQuery} onChange={songChange}/>
        <pre>{props.text || 'Search above!'}
        </pre>
        <button type="submit"
                className="btn btn-success"
                onClick={props.handleSubmit}>

        </button>
      </form>
    </div>
  )
}
export default Lyrics;
