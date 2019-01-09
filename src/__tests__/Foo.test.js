
/**
 * @flow
 */
import React from 'react'
import renderer from 'react-test-renderer'
import { Foo } from '../Foo';

describe("Foo", () => {
    it("should render", () => {
        const a = renderer.create(<Foo foo="qsd" />).toJSON()
        expect(a).toMatchSnapshot()
    })
})