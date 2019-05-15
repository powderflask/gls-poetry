"""
  Graeco-Latin Square Poems (v0.1): gl-square.py
    Data and algorithms to interpret, validate, and analyze GL Squares; and
    Generate a Poem from a GL Square

  Author: Lisa Lajeunesse
  Programmer: Joseph Fall

  License: MIT Open-source License (https://github.com/powderflask/gls-poetry/blob/master/LICENSE)
"""
import math
import re
import random


# ---------------------------
# |  G-L Square Definitions |
# ---------------------------
"""
    Each 'cell' is a pair of symbols separated by whitespace
    First symbol must be numeric, second symbol must be non-numeric
    Number of cells must define an even square, NxN
"""
GL_SQUARE_DEFS = (
    '''
    1A  2C  3B
    2B  3A  1C
    3C  1B  2A 
    ''',
    '''
    1A  2B  3C
    2C  3A  1B
    3B  1C  2A 
    ''',
    '''
    2B  1C  3A
    1A  3B  2C
    3C  2A  1B 
    ''',
    '''
    1D   3C  4A  2B
    3B   1A  2C  4D
    4C   2D  1B  3A
    2A   4B  3D  1C
    ''',
    '''
    1A  2B  3C  4D
    2C  1D  4A  3B
    3D  4C  1B  2A
    4B  3A  2D  1C
    '''
)

# --------------------------
# | GL SQUARE DEFS Helpers |
# --------------------------


def split_symbols(symbol_pair):
    """ Split a symbol pair (single string) into component parts """
    s = re.match(r'[0-9]+', symbol_pair).group()
    t = symbol_pair.split(s)[-1]
    return s, t
# unit tests
assert split_symbols('1A') == ('1', 'A')
assert split_symbols('123ABC') == ('123', 'ABC')


def square_size(definition):
    """ Return the squared size defined  by the square defintion string """
    return len(definition.split())
# unit tests
assert square_size('''
        1A  2C  3B
        2B  3A  1C
        3C  1B  2A 
    ''') == 9

def cell_def(row, col, symbol_pair):
    ''' Needed only to avoid tuple unpack in list comprehension '''
    s, t = split_symbols(symbol_pair)
    return (row, col, s, t)

def parse_square(definition):
    """ Parse given square definition string, return a tuple of 4-tuples (row, col, s, t) defining the square """
    symbol_pairs = definition.split()
    n = int(math.sqrt(len(symbol_pairs)))
    assert n * n == square_size(definition)  # TODO: raise exception
    # square = tuple((r, c, *split_symbols(symbol_pairs[r*n+c])) for r in range(n) for c in range(n))
    square = tuple([cell_def(r, c, symbol_pairs[r*n+c]) for r in range(n) for c in range(n)])
    return n, square
# unit tests
assert parse_square('''
        1A  2C  3B
        2B  3A  1C
        3C  1B  2A 
    ''') == (3, (
        (0, 0, '1', 'A'), (0, 1, '2', 'C'), (0, 2, '3', 'B'),
        (1, 0, '2', 'B'), (1, 1, '3', 'A'), (1, 2, '1', 'C'),
        (2, 0, '3', 'C'), (2, 1, '1', 'B'), (2, 2, '2', 'A')
    )
)


def print_square(square, label='Square'):
    """ Debug Helper: print a given square """
    print('{}:'.format(label))
    for r in square:
        for c in r:
            print(str(c), end=', ')
        print()
    print()


def transpose(square, n) :
    """ Transpose given square matrix """
    return tuple([tuple([square[c][r] for c in range(n)]) for r in range(n)])
# unit tests
assert transpose((
        ('1A', '2C', '3B'),
        ('2B', '3A', '1C'),
        ('3C', '1B', '2A')
    ), 3) == (
        ('1A', '2B', '3C'),
        ('2C', '3A', '1B'),
        ('3B', '1C', '2A')
    )


# --------------------
# | G-L POEM SQUARE  |
# --------------------


class GLcell:
    """ One cell in a G-L poetry square """

    def __init__(self, row, col, s, t, word=None):
        """ Construct cell for given (row, col) in square, with given symbols s and t, and word (defaults to 'st') """
        self.row = row
        self.col = col
        self.s = s
        self.t = t
        self.word = word if word else "{}{}".format(self.s, self.t)

    @property
    def label(self):
        return '{}{}'.format(self.s, self.t)

    def __str__(self):
        return '{}: {}'.format(self.label, self.word)


class GLpoemSquare:
    """' A G-L poetry Square is an NxN tuple of GLcells """
    class Invalid(Exception):
        ERRORS = {
            'index out of range' : 'Index out of range - valid GL_SQUARE_DEF indicies are 0 - {}',
            'insufficient vocabulary' : 'Insufficient Vocabulary for chosen Square.  Vocabulary must contain at least {} words.',
            'invalid definition' : 'Given defintion is not a valid G-L square:\n{}\n{}'
        }
        def __init__(self, error, *args):
            assert error in self.ERRORS
            super().__init__(self.ERRORS[error].format(*args))


    def __init__(self, definition, words=tuple()):
        """
            Construct a G-L Square from the given definition, a string containing the NxN grid for symbol pairs
            Words is an optional NxN length iterable of words, if not supplied, word in each cell will be 'st'
        """
        self.size, square = parse_square(definition)
        self.sq_size = self.size*self.size
        pad = self.sq_size - len(words)
        words = list(words) + [None]*pad  # pad words to correct length if required.
        assert len(words) >= self.sq_size
        self.square = tuple([GLcell(*cell, word) for cell,word in zip(square,words)])
        self.validation_error = None
        if not self.is_valid():
            raise GLpoemSquare.Invalid('invalid definition', definition, self.validation_error)

    def __str__(self):
        """ Return a formatted string representation of the GL Square """
        rows = tuple( tuple(str(cell) for cell in row) for row in self.rows())
        cell_width = max(len(cell) for row in rows for cell in row)
        square_width = (cell_width + 3) * self.size + 1
        divider = ('-' * square_width) + '\n'
        square = ''
        for row in rows:
            row_str = '| '
            for cell in row:
                row_str += cell + (' '*(cell_width-len(cell)) + ' | ')
            square += row_str + '\n' + divider
        return divider + square

    def get_cell(self, row, col):
        """ Return the GLcell from given row,col of this square 0 <= row/col < square.size """
        assert 0 <= row < self.size and 0 <= col < self.size
        # Assumes cells in square are ordered in row-major sequence
        return self.square[row*self.size + col]

    def vocabulary(self):
        """ Return the iterable sequence of words from this square in row-order """
        return tuple([cell.word for cell in self.square])

    def set_vocabulary(self, words):
        """ Set the vocabulary for this square from the given words, in row-order """
        if not len(words) >= self.sq_size:
            raise GLpoemSquare.Invalid('insufficient vocabulary', self.sq_size)
        for cell, word in zip(self.square, words) :
            cell.word = word

    def permute_vocabulary(self):
        """ Permute the vocabulary used by this square """
        words = list(self.vocabulary())
        random.shuffle(words)
        self.set_vocabulary(words)

    def rows(self):
        """ Return a tuple of rows, in row order, where each row is a tuple of cells in column-order """
        return tuple([
            tuple(filter(lambda cell: True if cell.row == r else False, self.square)) for r in range(self.size)
        ])

    def columns(self):
        """ Return a tuple of columns, in column order, where each column is a tuple of cells in row-order """
        return tuple([
            tuple(filter(lambda cell: True if cell.col == c else False, self.square)) for c in range(self.size)
        ])

    def s_order_cells(self):
        """ Return a tuple of 'phrases', in S-order, where each 'phrase' is a tuple of cells for one element of S """
        # S-order is by value of S left-to-right (by column)
        s_cols = tuple([sorted(col, key=lambda cell: cell.s) for col in self.columns()])
        return transpose(s_cols, self.size)

    def t_order_cells(self):
        """ Return a tuple of 'phrases', in T-order, where each 'phrase' is a tuple of cells for one element of T """
        # T-order is by value of T top-to-bottom (by row)
        t_rows = tuple([sorted(row, key=lambda cell: cell.t) for row in self.rows()])
        return transpose(t_rows, self.size)

    def _stanza(self, ordering):
        """ Private Helper: return words/lines for one stanza from square's poem, for given ordering method """
        return tuple([tuple([cell.word for cell in phrase]) for phrase in ordering()])

    def stanzas(self):
        """ Return the 2 line-tuples, each with an n-tuple of words, for stanzas for the G-L poem defined by this square """
        return (self._stanza(self.s_order_cells), self._stanza(self.t_order_cells))

    def _get_stanza_as_str(self, ordering):
        """ Private Helper: return formatted string for one stanza from square's poem, for given ordering method """
        def _as_poetry_line(phrase):
            # join words in phrase with spaces, capitalizing first word in phrase
            return ' '.join([word for word in phrase]).capitalize()

        return '\n'.join([_as_poetry_line(phrase) for phrase in self._stanza(ordering)])

    def get_poem_stanzas(self):
        """ Return a tuple of formatted string representing the stanzas in G-L poem defined by this square """
        return (self._get_stanza_as_str(self.s_order_cells), self._get_stanza_as_str(self.t_order_cells))

    def get_poem(self):
        """ Return a formatted string representing the G-L poem defined by this square """
        return '\n\n'.join(self.get_poem_stanzas()) + '\n'

    def _validate(self):
        """ Private Helper: Run validation checks to ensure this is a valid G-L Square. Raise AssertionError if not """
        # Must be a size x size square
        assert self.sq_size == len(self.square), "Square is not square!"
        assert all(len(row)==self.size for row in self.rows() ), "Square has uneven length rows!"
        assert all(len(col)==self.size for col in self.columns() ), "Square has uneven length columns!"
        # Each row must contain exactly 1 symbol from S, 1 symbol from T
        sxr_sets = [ {cell.s for cell in row} for row in self.rows() ]  # S x rows
        txr_sets = [ {cell.t for cell in row} for row in self.rows() ]  # T x rows
        assert all(s==sxr_sets[0] and len(s)==self.size for s in sxr_sets), "S-values do not appear exactly once in each row"
        assert all(s==txr_sets[0] and len(s)==self.size for s in txr_sets), "T-values do not appear exactly once in each row"
        # Each column must contain exactly 1 symbol from S, 1 symbol from T
        sxc_sets = [ {cell.s for cell in col} for col in self.columns() ]  # S x cols
        txc_sets = [ {cell.t for cell in col} for col in self.columns() ]  # T x cols
        assert all(s==sxc_sets[0] and len(s)==self.size for s in sxc_sets), "S-values do not appear exactly once in each column"
        assert all(s==txc_sets[0] and len(s)==self.size for s in txc_sets), "T-values do not appear exactly once in each column"
        # Entire Square must contain exactly one of each pair (S x T)
        sxt_set = { (cell.s, cell.t) for cell in self.square }
        assert len(sxt_set) == self.sq_size, "Each S-T combination does not appear exactly once"

    def is_valid(self):
        try:
            self._validate()
            return True
        except AssertionError as e:
            self.validation_error = str(e)
            return False

# unit tests
assert GLpoemSquare('''
        1A  2C  3B
        2B  3A  1C
        3C  1B  2A 
    ''').stanzas() == ((('1A', '1B', '1C'), ('2B', '2C', '2A'), ('3C', '3A', '3B')),
                       (('1A', '3A', '2A'), ('3B', '2B', '1B'), ('2C', '1C', '3C')))

assert GLpoemSquare('''
        1A  2B  3C
        2C  3A  1B
        3B  1C  2A 
    ''', ('understand','infinite','love','beyond','heart’s','desire','measures','reason','need',)
                    ).stanzas() == (
                    (('understand', 'reason', 'desire'),
                     ('beyond', 'infinite', 'need'),
                     ('measures', 'heart’s', 'love')
                    ), (
                     ('understand', 'heart’s', 'need'),
                     ('infinite', 'desire', 'measures'),
                     ('love', 'beyond', 'reason')
                    ))


def get_GLpoemSquare(index, vocab):
    """
        Factory: return a GLpoemSquare for the given GL_SQUARE_DEF and words in the given vocabulary
        Raises GLpoemSquare.Invalid exception containing error message if index out of range or vocab too short
    """
    if not 0 <= index < len(GL_SQUARE_DEFS):
        raise GLpoemSquare.Invalid('index out of range', len(GL_SQUARE_DEFS)-1)
    square = GL_SQUARE_DEFS[index]
    return GLpoemSquare(square, vocab)


# TEST / DEBUG
# gls = GLpoemSquare('''
#         1A  2B  3C
#         2C  3A  1B
#         3B  1C  2A
#     ''', ('understand','infinite','love','beyond','heart’s','desire','measures','reason','need',))
#
# print(str(gls))
# print(gls.get_poem_stanzas())
# gls.permute_vocabulary()
# print(str(gls))
# print(gls.get_poem())
#
# print_square(gls.rows(), 'Rows')
# print_square(gls.columns(), 'Cols')
# print_square(gls.s_order_cells(), 'S-order')
# print_square(gls.t_order_cells(), 'R-order')

# try:
#     gls.set_vocabulary(('understand','infinite','love','beyond','heart’s','desire','measures','reason',))
#     assert False
# except GLpoemSquare.Invalid:
#     pass
# try:
#     get_GLpoemSquare(len(GL_SQUARE_DEFS), ('understand','infinite','love','beyond','heart’s','desire','measures','reason','need'))
#     assert False
# except GLpoemSquare.Invalid:
#     pass
# try:
#     get_GLpoemSquare(0, ('understand','infinite','love','beyond','heart’s','desire','measures','reason'))
#     assert False
# except GLpoemSquare.Invalid:
#     pass
