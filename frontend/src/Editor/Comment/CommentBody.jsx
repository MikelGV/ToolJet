import React from 'react';
import cx from 'classnames';
import Spinner from '@/_ui/Spinner'

import { isEmpty } from 'lodash';

const CommentBody = ({ thread, isLoading }) => {
  const getContent = () => {
    if (isEmpty(thread)) return <div className='text-center'>Your message will post here</div>

    return (
      <div className="divide-y">{thread.map(({ comment, created_at }) => {
        return (
          <div>
            <div className="card-title">Gandharv</div>
            <div className="card-subtitle">2 hours ago</div>
            <p className='cursor-auto'>
              {comment}
            </p>
          </div>
        )
      })}</div>
    )
  }

  if (isLoading) {
    return (
      <div className='card-body text-center'>
        <Spinner />
      </div>
    )
  }

  return (
    <div
      className={cx("card-body card-body-scrollable card-body-scrollable-shadow")}
    >
      {getContent()}
    </div>
  )
}

export default CommentBody;