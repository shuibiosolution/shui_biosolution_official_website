import React from 'react';
import MetaTags from 'react-meta-tags';

export default class MetaTag extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <MetaTags>
                    <meta
                        name="image"
                        property="og:image"
                        content="/title1.png"
                    />
                </MetaTags>
            </div>
        )
    }
}