import { expect } from 'chai';
import classNames from './classnames';

describe('classnames()', function() {
    it('should create a single string from multiple class names', function() {
        const classes = classNames('foo', 'bar');

        expect(classes).to.equal('foo bar');
    });
});
