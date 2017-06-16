import React from 'react';

function NotFound({ error }) {
  return (
    <section className='hero'>
      <div className='hero-body'>
        <div className='container has-text-centered'>
          <p className='subtitle canal-plus-title'>
            <strong>{`${error === 'movie' ? 'Movie' : 'Page'} not found`}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;