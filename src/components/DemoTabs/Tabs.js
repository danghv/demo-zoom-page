import React, { Component } from 'react'

export const Tab = (props) => {
	// console.log('this of Tab...', this)
    return (
        <li className="tab">
            <a className={`tab-link ${props.linkClassName} ${props.isActive ? 'active' : ''}`}
                onClick={(event) => {
                    event.preventDefault();
                    props.onClick(props.tabIndex);
                }}>
                <i className={`tab-icon ${props.iconClassName}`}/>
            </a>
        </li>
    )
}

export class Tabs extends Component {

    constructor(props, context) {
        super(props, context);
	    console.log('this of Tabs...', this.DOMNodeRef)
        this.state = {
            activeTabIndex: this.props.defaultActiveTabIndex
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(tabIndex) {
        this.setState({
            activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
        });
    }

    // Encapsulate <Tabs/> component API as props for <Tab/> children
    renderChildrenWithTabsApiAsProps() {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                onClick : this.handleTabClick,
                tabIndex: index,
                isActive: index === this.state.activeTabIndex
            });
        });
    }

    // Render current active tab content
    renderActiveTabContent() {
        // console.log('children...', children)
        const {children} = this.props;
        const {activeTabIndex} = this.state;
        // console.log('children...', children)
        // console.log('active tab ...', activeTabIndex)
        // console.log('children[]...', children[activeTabIndex])
        if(children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    }

    render() {

        return (
            <div className="tabs">
                <ul className="tabs-nav nav navbar-nav navbar-left">
                    {this.renderChildrenWithTabsApiAsProps()}
                </ul>
                <div className="tabs-active-content">
                    {this.renderActiveTabContent()}
                </div>
            </div>
        );
    }
}

export default class DemoTabs extends React.Component {
    render() {
        // console.log('this of DemoTabs...', this)
      return(
        <Tabs>
          <Tab iconClassName={'fa fa-headphones'}
               linkClassName={'custom-link'}>
            <p>hello</p>
          </Tab>
          <Tab iconClassName={'fa fa-headphones'}
               linkClassName={'custom-link'}>
            <p>from</p>
          </Tab>
          <Tab iconClassName={'fa fa-headphones'}
               linkClassName={'custom-link'}>
            <p>the</p>
          </Tab>
          <Tab iconClassName={'fa fa-headphones'}
               linkClassName={'custom-link'}>
            <p>other</p>
          </Tab>
          <Tab iconClassName={'fa fa-headphones'}
               linkClassName={'custom-link'}>
            <p>side</p>
          </Tab>
        </Tabs>
      );
    }
  }