import React from 'react';
import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';

export default (config: any = {}) => {
    // Styles are overwritten instead of merged as merging causes a lot of confusion.
    //
    // Why? Because when merging a developer needs to know all of the underlying
    // styles which needs a deep dive into the code. Merging also makes it prone to
    // errors when upgrading as basically every styling change would become a major
    // breaking change. 1px of an increased padding can break a whole layout.
    const DecoratedHashtag = (props: any) => <Hashtag {...props} className="hashtag" />;
    return {
        decorators: [
            {
                strategy: hashtagStrategy,
                component: DecoratedHashtag,
            },
        ],
    };
};
