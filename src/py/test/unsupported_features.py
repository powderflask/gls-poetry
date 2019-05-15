import random

def run (autoTester):
    def f():
        return 3, 4
    autoTester.check ((1, 2, *f()))

    def g():
        return [3, 4]
    autoTester.check ([1, 2, *f()])

    # doesn't compile
    # d1 = {'a':1, 'b':2}
    # d2 = {'c':3, **d1}
    # autoTester.check(str(d2))
