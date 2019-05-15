import random

def run (autoTester):
    # string formatting - use Python 3.x style
    autoTester.check('Python %s format does %s work'%('2.x', 'NOT'))
    autoTester.check('Python {} format does {} work'.format('3.x', 'indeed'))

    # generator comprehensions -- use list comprehension
    autoTester.check(tuple(x*2 for x in range(3)))
    autoTester.check(tuple([x*2 for x in range(3)]))

    # CPython sorted always returns a list
    t = ('defgh', 't', 'ijkl', 'abc', 'mnopqrs', 'uv')
    autoTester.check(sorted(t, key=lambda v: len(v)))
    l = ['defgh', 't', 'ijkl', 'abc', 'mnopqrs', 'uv']
    autoTester.check(sorted(l, key=lambda v: len(v)))

    # random.sample not supported, but random.shuffle is.
    l = [1,2,3,4,5,6,7,8,9]
    # exception - sample does not exist
    #autoTester.check(sorted(random.sample(l, len(l))))
    random.shuffle(l)
    autoTester.check(sorted(l))
