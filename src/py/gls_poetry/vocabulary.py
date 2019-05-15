"""
  Graeco-Latin Square Poems (v0.1): vocabulary.py
    Data and algorithms to generarte random sets of poetic vocabulary.

  Author: Lisa Lajeunesse
  Programmer: Joseph Fall

  License: MIT Open-source License (https://github.com/powderflask/gls-poetry/blob/master/LICENSE)
"""
import random

# -----------
# | Helpers |
# -----------


def random_sample(iterable, k):
    """ mimic behaviour of random.sample, not supported by Typescript """
    l = list(iterable)
    random.shuffle(l)
    return l[:k]


# ------------------------
# |  Poetry Vocabularies |
# ------------------------
"""
    Each Vocabulary Set is a named set of words.
    The VOCABULARIES dictionary maps name to a vocabulary tuple (so random choices can be made)
"""
VOCABULARY_SETS = {
    'Poetic' : {
            'life', 'love', 'forever', 'still', 'now', 'seize', 'passion', 'time', 'never', 'end',
            'kiss', 'hold', 'see', 'far', 'tender', 'death', 'sleep', 'star', 'moon', 'begin',
            'sweet', 'ideal', 'beauty', 'truth', 'share', 'journey', 'bright', 'understand', 'infinite',
            'beyond', 'need', 'heart', 'desire', 'wait', 'hour', 'long', 'hand', 'past', 'broken',
            'sustain', 'poise', 'suspend', 'kind', 'touch', 'not'
    },
    'Math' : {
            'parallel', 'tangent', 'multiplies', 'power', 'divides', 'adds', 'subtracts', 'function',
            'relation', 'circle', 'curve', 'differentiate', 'equation', 'operate', 'intersect', 'partial',
            'integrate', 'variable', 'result', 'answer', 'question', 'solution', 'inverse', 'prime',
            'compose', 'triangle', 'square', 'convolution', 'infinite', 'finite', 'plus', 'minus', 'equals',
            'solve', 'group', 'commute', 'design', 'graph', 'axis', 'mean', 'average', 'deviation', 'consistent',
            'proof', 'obtuse', 'logic', 'angle', 'whole', 'know', 'exact', 'proportion', 'graph', 'even', 'odd',
            'figure', 'set', 'ratio'
    },
    'The Sea' : {
            'wind', 'wave', 'sailor', 'moon', 'sun', 'fierce', 'storm', 'placid', 'calm', 'sail', 'salt',
            'breeze', 'hard', 'rain', 'clouds', 'blows', 'wails', 'deep', 'sea', 'water', 'ocean', 'bay',
            'races', 'swell', 'crest', 'tide', 'air', 'turns', 'isle', 'shore', 'horizon', 'cove', 'safe',
            'dangerous', 'crossing', 'open', 'billows', 'distant', 'sunrise', 'sunset', 'sand', 'surf', 'rocks',
            'anchorage', 'drowning', 'floating', 'sinking', 'seeing', 'navigate', 'north', 'south', 'east', 'west'
    }
}

VOCABULARIES = { name : tuple(words) for name,words in VOCABULARY_SETS.items() }
VOCABULARIES['Mixed'] = tuple( {word for words in VOCABULARY_SETS.values() for word in words} )

class Vocabulary:
    """ Generate random sequences of words from a specific vocabulary """
    def __init__(self, vocabulary_name='Mixed', vocabulary=()):
        """ Initialize this vocabulary with words from the named set """
        self.vocabulary = VOCABULARIES.get(vocabulary_name, vocabulary)

    def permutation(self, length):
        """ Return a random list of words from this vocabulary of given length """
        return random_sample(self.vocabulary, length)
# unit tests
assert len(Vocabulary().permutation(9)) == 9
assert all((word in VOCABULARIES['Poetic']) for word in Vocabulary('Poetic').permutation(25))
assert len(Vocabulary('Custom', ('some', 'other', 'words', 'what', 'fun')).permutation(3)) == 3
