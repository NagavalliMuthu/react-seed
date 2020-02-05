import React from 'react';
import './styles.scss';

const MovieDetail = (props: any) => {
  console.log({ props });
  return (
        <div className="go-back-link" onClick={props.history.goBack}>
            {'<< Go back to Movie List'}
        </div>
  );
};

export { MovieDetail };
export default MovieDetail;
