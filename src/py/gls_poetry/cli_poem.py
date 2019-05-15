"""
  Graeco-Latin Square Poems (v0.1): cli-poem.py
    Simple shell UI to generate random GL poems via CLI

  Author: Lisa Lajeunesse
  Programmer: Joseph Fall

  License: MIT Open-source License (https://github.com/powderflask/gls-poetry/blob/master/LICENSE)
"""
from gls_poetry.gl_square import square_size, GLpoemSquare, GL_SQUARE_DEFS
from gls_poetry.vocabulary import Vocabulary, VOCABULARIES

WELCOME = '''
Graeco-Latin Square Poems
  by Lisa Lajeunesse
'''
INSTRUCTIONS = '''
    Choose a Graeco-Latin Square and a Vocabulary Set to generate poem.
'''
QUIT = 'q'

def get_custom_vocabulary(n):
    """ Allow user to enter a custom vocabulary of n words """
    vocabulary = []
    while True:
        word = input('Add a word (%s more): '%(n-len(vocabulary)))
        vocabulary.append(word)
        if len(vocabulary) == n:
            return Vocabulary('Custom Words', vocabulary)

def get_vocabulary(n):
    """ Prompt user for vocabulary with at least n words and return it. """
    CUSTOM = 'Custom'
    vocab_names = tuple(VOCABULARIES.keys()) + (CUSTOM, )
    while True:
        name = input('Which vocabulary do you want to use? %s '%str(vocab_names))
        if name == QUIT:
            return None
        elif name == CUSTOM:
            return get_custom_vocabulary(n)
        elif name in vocab_names:
            return Vocabulary(name).permutation(n)
        else:
            print('%s is not a valid vocabulary -- try again (%s to quit)...\n'%(name, QUIT))

def get_gl_square_def():
    """ Prompt user for the GL Square and return the defintion """
    squares = tuple(zip(tuple(range(len(GL_SQUARE_DEFS))), GL_SQUARE_DEFS))
    while True:
        print("Select a Graeco-Latin Square by number:")
        for index, square in squares:
            print("Square %d:\n%s"%(index, square))
        index = input('Which GL Square do you want to use? (0-%s)'%(len(squares)-1))
        if index == QUIT:
            return None
        elif index.isdigit():
            index = int(index)
            if 0 <= index < len(squares):
                return GL_SQUARE_DEFS[index]
        print('%s is not a valid square # -- try again (%s to quit)...\n'%(index, QUIT))

def get_gl_poem_square():
    """ Prompt user for a GL square and vocabulary for the poem """
    square = get_gl_square_def()
    vocab = get_vocabulary(square_size(square)) if square else None
    return GLpoemSquare(square, vocab) if square and vocab else None

def print_poem(poem):
    """ Print the GL Square poem """
    print("\n-------------------------------")
    print(" Your Graeco-Latin Square: ")
    print(str(poem))
    print("\n Your Graeco-Latin Square Poem:")
    print("-------------------------------\n")
    print(poem.get_poem())
    print("\n-------------------------------\n")
    input("Press Enter to continue...")

def main():
    print(WELCOME)
    while True:
        print(INSTRUCTIONS)
        poem = get_gl_poem_square()
        if poem:
            print_poem(poem)
        else:
            return

main()
