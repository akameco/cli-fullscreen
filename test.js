import test from 'ava';
import m from './';

test(t => {
	t.true(Object.keys(m).lnegth > 0);
	t.is(typeof m.enter, 'function');
	t.is(typeof m.leave, 'function');
});
