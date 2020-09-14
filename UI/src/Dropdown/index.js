/*eslint-disable */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import DropDownBody from "./DropDownBody";

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };

        this.el = React.createRef();
        this.container = React.createRef();

    }

    static propTypes = {
        element: PropTypes.any,
        children: PropTypes.any,
        containerClass: PropTypes.string,
        elementClass: PropTypes.string,
        width: PropTypes.number,
        isCloseOnOutSide: PropTypes.bool,
        hideOnScroll: PropTypes.bool
    }

    static defaultProps = {
        placement: "right",
        containerClass: "drop-down isActive",
        elementClass: "drop-down__elem",
        width: 300,
        hideOnScroll: true
    }

    componentDidUpdate() {
        if (this.state.isOpen) {
            document.addEventListener("mousedown", this.handleOutside, true);
            this.props.hideOnScroll && document.addEventListener("scroll", this.handleSetState, true);
            window.addEventListener("resize", this.handleSetState, true);
        } else {
            document.removeEventListener("mousedown", this.handleOutside, true);
            this.props.hideOnScroll && document.removeEventListener("scroll", this.handleSetState, true);
            window.removeEventListener("resize", this.handleSetState, true);
        }
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleOutside);
        this.props.hideOnScroll && document.removeEventListener("scroll", this.handleSetState);
        window.removeEventListener("resize", this.handleSetState);
    }

    handleSetState = () => {
        this.setState({
            isOpen: false
        });
    }

    handleOutside = (event) => {
        const el = this.el.current;
        const cn = this.container.current;

        if (!el || !cn) return;

        const isNotClose = (el && el.contains(event.target)) || (cn && cn.elem && cn.elem.contains(event.target));

        if (isNotClose || this.props.isCloseOnOutSide) {
            return;
        }

        this.handleSetState();
    }

    openDropDown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getElem = () => {
        const { element, elementClass } = this.props;

        return (
            <span ref={this.el} className={elementClass} onClick={this.openDropDown}>{
                element
            }</span>
        );
    }

    getContent = (children) => {
        if (!children) {
            return null;
        }

        if (typeof children === "function") {
            return children({ closeDropDown: this.handleSetState });
        }

        return children;
    }

    render() {
        const { children, width, containerClass, placement, hasInfiniteScroll } = this.props;

        return (
            <Fragment>
                {this.getElem()}
                {this.state.isOpen && <DropDownBody
                    ref={this.container}
                    content={this.getContent(children)}
                    containerClass={containerClass}
                    placement={placement}
                    width={width}
                    el={this.el.current}
                    hasInfiniteScroll={hasInfiniteScroll}
                />}
            </Fragment>
        );
    }
}

export default DropDown;