"""
  Graeco-Latin Square Poems DOM UI (v0.1): app.py
    DOM view/controller components for G-L-S Poetry Squares web app

  Language: transcrypt (https://transcrypt.org)  Python + global DOM
  Author: Lisa Lajeunesse
  Programmer: Joseph Fall

  License: MIT Open-source License (https://github.com/powderflask/gls-poetry/blob/master/LICENSE)
"""
from gls_poetry.gl_square import square_size, GLpoemSquare, GL_SQUARE_DEFS, get_GLpoemSquare
from gls_poetry.vocabulary import Vocabulary, VOCABULARIES

# Global DOM objects available in Transcrypt -- uncomment to debug syntax errors
# document = None
# window = None
# console = None

# -----------
# | Helpers |
# -----------


def html_newlines(text):
    """ Replace newlines, \n, with HTML break, <br> tag """
    return text.replace('\n', '<br>')


def get_vocabulary(poem_square, n):
    """ Returns an iterable of n words from the selected_vocabulary hacked onto the poem square """
    vocabulary = Vocabulary(poem_square.selected_vocabulary) if poem_square.selected_vocabulary else Vocabulary()
    return vocabulary.permutation(n)


# ------------------
# | GLS Components |
# ------------------


class GLS_Component():
    """ Abstract base class for DOM interaction component that can render itself into a container """
    def __init__(self, gl_poem_square):
        self.poem_square = gl_poem_square

    def render(self, element):
        """ Return DOM element with rendered component appended """
        pass # Sub-classes should override this method if they need to be dynamically rendered.


class GL_Square(GLS_Component):
    """ A DOM View of the G-L Square  """
    CELL_TEMPLATE = '<span class="cell-label">{}</span><span class="cell-word">{}</span>'

    def render(self, table):
        """ Return table DOM element with component rendered within """
        for row in self.poem_square.rows():
            tr = table.insertRow(-1)
            for cell in row:
                td = tr.insertCell(-1)
                td.innerHTML = self.CELL_TEMPLATE.format(cell.label, cell.word)

        return table


class GL_Poem(GLS_Component):
    """ A DOM View of the poem text """
    STANZA_TEMPLATE = '<p class="stanza">{}</p>'

    def render(self, blockquote):
        """ Return blockquote DOM element with rendered component """
        stanzas = [self.STANZA_TEMPLATE.format(html_newlines(stanza)) for stanza in self.poem_square.get_poem_stanzas()]
        poem = '\n'.join(stanzas)
        blockquote.innerHTML = poem
        return blockquote


# ----------------
# | GLS Controls |
# ----------------


class GLS_Control(GLS_Component):
    """ Abstract base class for DOM component with a control element and event-handler """
    def do_it(self, event):
        """ Do whatever is needed to handle the event on this control, return True if sucessfull, False otherwise """
        raise NotImplemented  # Sub-classes MUST override this method.


class GL_Permute_Poem(GLS_Control):
    """ A DOM control to permute the word order in a poem """
    def do_it(self, event):
        self.poem_square.permute_vocabulary()
        return True


class GL_Randomize_Vocabulary(GLS_Control):
    """ A DOM control to select a new set of random words for poem """
    def do_it(self, event):
        vocabulary = get_vocabulary(self.poem_square, self.poem_square.sq_size)
        self.poem_square.set_vocabulary(vocabulary)
        return True


class GL_Select_Vocabulary(GLS_Control):
    """ A DOM control for selecting which vocabulary to use for randomizing """
    OPTION_TEMPLATE = '<option value="{}">{} Words</option>'

    def __init__(self, gl_poem_square, select) :
        """ Statically render vocabulary options into the select widget """
        super().__init__(gl_poem_square)
        options = '\n'.join([self.OPTION_TEMPLATE.format(name, name) for name in VOCABULARIES.keys()])
        select.innerHTML = options  # no need to dynamically render this control - its contents are constant

    def do_it(self, event):
        if event.target.value:
            self.poem_square.selected_vocabulary = event.target.value
            return True
        else:
            return False


class GL_Edit_Vocabulary(GLS_Component):
    TA_TEMPLATE = '<textarea rows="16" cols="25">{}</textarea>'

    def render(self, form) :
        """ Return table DOM element with component rendered within """
        form.innerHTML = self.TA_TEMPLATE.format('\n'.join(self.poem_square.vocabulary()))
        return form

    def do_it(self, event):
        textarea = event.target
        words = textarea.value.split('\n')
        try:  # only successful if there are enough words supplied
            self.poem_square.set_vocabulary(words)
            return True
        except GLpoemSquare.Invalid:
            return False


class GL_Select_Square(GLS_Control):
    """ A DOM control for selecting which G-L square to use for randomizing """
    RADIO_TEMPLATE = '<input type="radio" name="gl-square" value="{}" {}>'

    def __init__(self, gl_poem_square, form) :
        """ Statically render vocabulary options into the select widget """
        super().__init__(gl_poem_square)

        self.radios = []

        table = document.createElement('TABLE')
        for definition, index in zip(GL_SQUARE_DEFS, range(len(GL_SQUARE_DEFS))):
            if not index%2:
                tr = table.insertRow(-1)
            td = tr.insertCell(-1)
            td.innerHTML = self.RADIO_TEMPLATE.format(index, 'checked' if index is 0 else '')
            self.radios[index]= td.children[0]
            td = tr.insertCell(-1)
            td.appendChild(self._get_square_element(definition))

        form.innerHTML = ''
        form.appendChild(table)

    def _get_square_element(self, definition):
        table = document.createElement('TABLE')
        square = GLpoemSquare(definition)
        for row in square.rows() :
            tr = table.insertRow(-1)
            for cell in row :
                td = tr.insertCell(-1)
                td.innerHTML = cell.label
        return table

    def do_it(self, event):
        selected = filter(lambda radio: radio.checked, self.radios)
        if selected and 0 <= selected[0].value < len(GL_SQUARE_DEFS):
            definition = GL_SQUARE_DEFS[selected[0].value]
            vocabulary = list(self.poem_square.vocabulary())
            pad = square_size(definition) - len(vocabulary)
            if pad > 0:
                vocabulary += list(get_vocabulary(self.poem_square, pad))
            self.poem_square.__init__(definition, vocabulary)
            return True
        else:
            return False


# ----------------------
# | View / Controllers |
# ----------------------


class DOM_View():
    """ A View that renders a GLS_Component in a HTML container element """
    def __init__(self, component, container, element_type):
        self.component = component
        self.container = container
        self.element_type = element_type

    def render(self):
        """ Re-render this View """
        self.container.innerHTML = ''
        el = document.createElement(self.element_type)
        self.container.appendChild(self.component.render(el))


class DOM_Control():
    """ A DOM control element with an event-handler control """
    def __init__(self, control, dom_widget, handler='onclick', callback=None):
        """ configure the GLS_Control to handle given events on the dom_widget """

        def handle_event(event) :
            """ Do whatever is needed to handle the event and then notify callback when done """
            if self.control.do_it(event) and self.callback :
                self.callback()

        self.control = control
        self.dom_widget = dom_widget
        self.callback = callback
        setattr(self.dom_widget, handler, handle_event)  # i.e., widget.onclick = handle_event

def DOM_Controls(control, widgets, handler='onclick', callback=None):
    """ A set of relate widges that act as a single component e.g. radio buttons """
    controls = []
    for widget in widgets:
        controls.append(DOM_Control(control, widget, handler, callback))
    return controls

# ------------------------------
# | Application ViewController |
# ------------------------------


class GLS_PoemApp_ViewController():
    """ View / Controller for the G-L Square Poem app """

    def __init__(self):
        dom_element = lambda selector: document.getElementById(selector)

        # Initialize poem with some random data.
        selected_vocabulary = tuple(VOCABULARIES.keys())[0]
        vocabulary = Vocabulary(selected_vocabulary).permutation(9)
        self.gl_poem_square = get_GLpoemSquare(0, vocabulary)
        self.gl_poem_square.selected_vocabulary = selected_vocabulary  # hack

        # App UI Components:
        square     = GL_Square(self.gl_poem_square)
        poem       = GL_Poem(self.gl_poem_square)
        edit_vocab = GL_Edit_Vocabulary(self.gl_poem_square)
        slct_vocab = GL_Select_Vocabulary(self.gl_poem_square, dom_element('GL-select-vocabulary'))
        permute    = GL_Permute_Poem(self.gl_poem_square)
        randomize  = GL_Randomize_Vocabulary(self.gl_poem_square)
        slct_square= GL_Select_Square(self.gl_poem_square, dom_element('GL-select_square'))

        self.views = {
            'square'     : DOM_View(square, dom_element('GL-Square'), 'TABLE'),
            'poem'       : DOM_View(poem, dom_element('GL-Poem'), 'BLOCKQUOTE'),
            'edit_vocab' : DOM_View(edit_vocab, dom_element('GL-edit-vocabulary'), 'FORM'),
        }
        self.controls = {
            'permute'    : DOM_Control(permute, dom_element('GL-permute-poem'), 'onclick', self.update_DOM),
            'randomize'  : DOM_Control(randomize, dom_element('GL-randomize-vocabulary'), 'onclick', self.update_DOM),
            'slct_vocab' : DOM_Control(slct_vocab, dom_element('GL-select-vocabulary'), 'onchange', self.update_DOM),
            'edit_vocab' : DOM_Control(edit_vocab, dom_element('GL-edit-vocabulary'), 'onchange', self.update_DOM),
            'ss_radios'  : DOM_Controls(slct_square, slct_square.radios, 'onclick',  self.update_DOM),
        }

        self.update_DOM()

    def update_DOM(self):
        for view in self.views.values():
            view.render()


window.onload = GLS_PoemApp_ViewController
