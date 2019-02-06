import React from 'react';

class Page extends React.Component {
    render() {
        const pageClass = 'page page--' + this.props.pageName ;

        return (
            <section className={pageClass}>
                <div className="page__inner">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Page;