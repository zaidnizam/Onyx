import { createElement, Fragment } from '@wordpress/element';

const jsx = (type: any, props: any, key: any) => {
    const { children, ...rest } = props || {};
    return createElement(type, { ...rest, key }, children);
};

const jsxs = jsx;

export { jsx, jsxs, Fragment };
