import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShortenedItem = ({ id, link, long_url }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='shortened-item'>
      <a
        href={long_url}
        target='_blank'
        rel='noreferrer'
        className='shortened-item__source'
      >
        {long_url}
      </a>
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        className='shortened-item__link'
      >
        {id}
      </a>
      <CopyToClipboard text={id} onCopy={handleCopy}>
        <button
          className={`shortened-item__btn btn btn--rounded ${
            copied && 'copied'
          }`}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ShortenedItem;
