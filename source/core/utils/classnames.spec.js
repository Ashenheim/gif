import { expect } from 'chai';
import classNames from './classnames';

describe('classnames()', function() {
    it('should create a single class string from multiple class names', function() {
        const classes = classNames('foo', 'bar');

        expect(classes).to.be.equal('foo bar');
    });

    it('should create a single class string without extra spaces', function() {
        const classes = classNames('foo', '', 'bar');

        expect(classes).to.be.equal('foo bar');
    });

    it('should create a single class string by filtering an object', function() {
        const classes = classNames('class', {
            'hidden-class': false,
            'shown-class': true,
        });

        expect(classes).to.be.equal('class shown-class');
    });
});
