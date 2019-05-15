var gls_poetry = (function (exports) {
    'use strict';

    var __module_re__ = /*#__PURE__*/Object.freeze({
        get translate () { return translate; },
        get T () { return T; },
        get TEMPLATE () { return TEMPLATE; },
        get I () { return I; },
        get IGNORECASE () { return IGNORECASE; },
        get L () { return L; },
        get LOCALE () { return LOCALE; },
        get M () { return M; },
        get MULTILINE () { return MULTILINE; },
        get S () { return S; },
        get DOTALL () { return DOTALL; },
        get U () { return U; },
        get UNICODE () { return UNICODE; },
        get X () { return X; },
        get VERBOSE () { return VERBOSE$1; },
        get DEBUG () { return DEBUG; },
        get A () { return A; },
        get ASCII () { return ASCII; },
        get Y () { return Y; },
        get STICKY () { return STICKY; },
        get G () { return G; },
        get GLOBAL () { return GLOBAL; },
        get J () { return J; },
        get JSSTRICT () { return JSSTRICT; },
        get error () { return error; },
        get ReIndexError () { return ReIndexError; },
        get Match () { return Match; },
        get Regex () { return Regex; },
        get PyRegExp () { return PyRegExp; },
        get compile () { return compile; },
        get search () { return search; },
        get match () { return match; },
        get fullmatch () { return fullmatch; },
        get py_split () { return py_split; },
        get findall () { return findall; },
        get finditer () { return finditer; },
        get sub () { return sub; },
        get subn () { return subn; },
        get escape () { return escape; },
        get purge () { return purge; }
    });

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var __name__ = 'org.transcrypt.__runtime__';

    function __nest__ (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (let attrib of Object.getOwnPropertyNames (value)) {
            Object.defineProperty (current, attrib, {
                get () {return value [attrib];},
                enumerable: true,
                configurable: true
            });
        }
    }function __get__ (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
                for (let symbol of Object.getOwnPropertySymbols (base)) {
                    let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                    Object.defineProperty (cls, symbol, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (attribs)) {
                let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            if ('__getattr__' in this || '__setattr__' in this) {
                instance = new Proxy (instance, {
                    get: function (target, name) {
                        let result = target [name];
                        if (result == undefined) {
                            return target.__getattr__ (name);
                        }
                        else {
                            return result;
                        }
                    },
                    set: function (target, name, value) {
                        try {
                            target.__setattr__ (name, value);
                        }
                        catch (exception) {
                            target [name] = value;
                        }
                        return true;
                    }
                });
            }
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    function __class__ (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }function __call__ (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    }function __kwargtrans__ (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    function __super__ (aClass, methodName) {
        for (let base of aClass.__bases__) {
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    function property (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value);}, enumerable: true};
    }
    function __setproperty__ (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    function setattr (obj, name, value) {
        obj [name] = value;
    }function __in__ (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    }function __specialattrib__ (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    }function len (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    }function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    function float (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    }float.__name__ = 'float';
    float.__bases__ = [object];
    function int (any) {
        return float (any) | 0
    }int.__name__ = 'int';
    int.__bases__ = [object];
    function bool (any) {
        return !!__t__ (any);
    }bool.__name__ = 'bool';
    bool.__bases__ = [int];
    function py_typeof (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    }function issubclass (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (let aClass2 of classinfo) {
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    }function isinstance (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    }function callable (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    }function repr (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    }function max (nrOrSeq) {
        return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
    }var abs = Math.abs;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable;
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function() {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    function py_reversed (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    }function zip () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    }function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    }function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    function list (iterable) {
        let instance = iterable ? Array.from (iterable) : [];
        return instance;
    }
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        if (step == 1) {
            return Array.prototype.slice.call(this, start, stop);
        }
        let result = list ([]);
        for (let index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            let sourceIndex = 0;
            for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        let result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (let index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';    return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        let index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        let result = this;
        for (let i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        let instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        let instance = [];
        if (iterable) {
            for (let index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        let mindex = 0;
        let maxdex = this.length - 1;
        while (mindex <= maxdex) {
            let index = (mindex + maxdex) / 2 | 0;
            let middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        let result = set (this.slice () .sort ());
        for (let i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        let result = set ();
        for (let i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        let sother = set (other.slice () .sort ());
        let result = set ();
        for (let i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        let updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (let i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (let i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        if (this.__class__ == set) {
            return this.issubset (other);
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (this [i] > other [i]) {
                    return false;
                }
                else if (this [i] < other [i]) {
                    return true;
                }
            }
            return true;
        }
    };
    Array.prototype.__ge__ = function (other) {
        if (this.__class__ == set) {
            return this.issuperset (other);
        }
        else {
            for (let i = 0; i < this.length; i++) {
                if (this [i] < other [i]) {
                    return false;
                }
                else if (this [i] > other [i]) {
                    return true;
                }
            }
            return true;
        }
    };
    Array.prototype.__lt__ = function (other) {
        return (
            this.__class__ == set ?
            this.issubset (other) && !this.issuperset (other) :
            !this.__ge__ (other)
        );
    };
    Array.prototype.__gt__ = function (other) {
        return (
            this.__class__ == set ?
            this.issuperset (other) && !this.issubset (other) :
            !this.__le__ (other)
        );
    };
    Uint8Array.prototype.__add__ = function (aBytes) {
        let result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        let result = new Uint8Array (scalar * this.length);
        for (let i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    }String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setproperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] === undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    };
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    };
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    };
    String.prototype.isdigit = function () {
        return this.isdecimal()
    };
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    };
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    };
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    };
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        strings = Array.from (strings);
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey];
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    function __mod__ (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    }function __pow__ (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    }function __neg__ (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    }function __mul__ (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    }function __truediv__ (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    }function __floordiv__ (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    }function __add__ (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    }function __sub__ (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    }function __lshift__ (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    }function __rshift__ (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    }function __xor__ (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    }function __and__ (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    }function __eq__ (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    }function __ne__ (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    }function __lt__ (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    }function __le__ (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    }function __gt__ (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    }function __ge__ (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    }function __iadd__ (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    }function __ior__ (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    }function __ixor__ (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    }function __getitem__ (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    }function __setitem__ (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            container [container.length + key] = value;
        }
        else {
            container [key] = value;
        }
    }function __getslice__ (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    }function __setslice__ (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    }var BaseException =  __class__ ('BaseException', [object], {
    	__module__: __name__,
    });
    var Exception =  __class__ ('Exception', [BaseException], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self) {
    		var kwargs = dict ();
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
    					}
    				}
    				delete kwargs.__kwargtrans__;
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		self.__args__ = args;
    		try {
    			self.stack = kwargs.error.stack;
    		}
    		catch (__except0__) {
    			self.stack = 'No stack trace available';
    		}
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		if (__gt__ (__call__ (len, null, self.__args__), 1)) {
    			return (function () {
    				var __accu0__ = '{}{}';
    				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, __call__ (repr, null, __call__ (tuple, null, self.__args__)));
    			}) ();
    		}
    		else if (__call__ (len, null, self.__args__)) {
    			return (function () {
    				var __accu0__ = '{}({})';
    				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__, __call__ (repr, null, __getitem__ (self.__args__, 0)));
    			}) ();
    		}
    		else {
    			return (function () {
    				var __accu0__ = '{}()';
    				return __call__ (__accu0__.format, __accu0__, self.__class__.__name__);
    			}) ();
    		}
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		if (__gt__ (__call__ (len, null, self.__args__), 1)) {
    			return __call__ (str, null, __call__ (tuple, null, self.__args__));
    		}
    		else if (__call__ (len, null, self.__args__)) {
    			return __call__ (str, null, __getitem__ (self.__args__, 0));
    		}
    		else {
    			return '';
    		}
    	});}
    });
    var IterableError =  __class__ ('IterableError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var StopIteration =  __class__ ('StopIteration', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var ValueError =  __class__ ('ValueError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var KeyError =  __class__ ('KeyError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var AssertionError =  __class__ ('AssertionError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		if (message) {
    			(function () {
    				var __accu0__ = Exception;
    				return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    			}) ();
    		}
    		else {
    			(function () {
    				var __accu0__ = Exception;
    				return __call__ (__accu0__.__init__, __accu0__, self, __kwargtrans__ ({error: error}));
    			}) ();
    		}
    	});}
    });
    var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var IndexError =  __class__ ('IndexError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var AttributeError =  __class__ ('AttributeError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var py_TypeError =  __class__ ('py_TypeError', [Exception], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self, message, error) {
    		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, message, __kwargtrans__ ({error: error}));
    		}) ();
    	});}
    });
    var Warning =  __class__ ('Warning', [Exception], {
    	__module__: __name__,
    });
    var UserWarning =  __class__ ('UserWarning', [Warning], {
    	__module__: __name__,
    });
    var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
    	__module__: __name__,
    });
    var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
    	__module__: __name__,
    });
    var __sort__ = function (iterable, key, reverse) {
    	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {		var key = null;
    	}	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {		var reverse = false;
    	}	if (arguments.length) {
    		var __ilastarg0__ = arguments.length - 1;
    		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    			var __allkwargs0__ = arguments [__ilastarg0__--];
    			for (var __attrib0__ in __allkwargs0__) {
    				switch (__attrib0__) {
    					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
    					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
    					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
    				}
    			}
    		}
    	}
    	if (key) {
    		(function () {
    			var __accu0__ = iterable;
    			return __call__ (__accu0__.sort, __accu0__, (function __lambda__ (a, b) {
    				if (arguments.length) {
    					var __ilastarg0__ = arguments.length - 1;
    					if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    						var __allkwargs0__ = arguments [__ilastarg0__--];
    						for (var __attrib0__ in __allkwargs0__) {
    							switch (__attrib0__) {
    								case 'a': var a = __allkwargs0__ [__attrib0__]; break;
    								case 'b': var b = __allkwargs0__ [__attrib0__]; break;
    							}
    						}
    					}
    				}
    				return (__gt__ (__call__ (key, null, a), __call__ (key, null, b)) ? 1 : __neg__ (1));
    			}));
    		}) ();
    	}
    	else {
    		(function () {
    			var __accu0__ = iterable;
    			return __call__ (__accu0__.sort, __accu0__);
    		}) ();
    	}
    	if (reverse) {
    		(function () {
    			var __accu0__ = iterable;
    			return __call__ (__accu0__.reverse, __accu0__);
    		}) ();
    	}
    };
    var sorted = function (iterable, key, reverse) {
    	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {		var key = null;
    	}	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {		var reverse = false;
    	}	if (arguments.length) {
    		var __ilastarg0__ = arguments.length - 1;
    		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    			var __allkwargs0__ = arguments [__ilastarg0__--];
    			for (var __attrib0__ in __allkwargs0__) {
    				switch (__attrib0__) {
    					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
    					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
    					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
    				}
    			}
    		}
    	}
    	if (__eq__ (py_typeof (iterable), dict)) {
    		var result = __call__ (copy, null, (function () {
    			var __accu0__ = iterable;
    			return __call__ (__accu0__.py_keys, __accu0__);
    		}) ());
    	}
    	else {
    		var result = __call__ (copy, null, iterable);
    	}
    	__call__ (__sort__, null, result, key, reverse);
    	return result;
    };
    var map = function (func, iterable) {
    	return (function () {
    		var __accu0__ = [];
    		var __iterable0__ = iterable;
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var item = __getitem__ (__iterable0__, __index0__);
    			(function () {
    				var __accu1__ = __accu0__;
    				return __call__ (__accu1__.append, __accu1__, __call__ (func, null, item));
    			}) ();
    		}
    		return __accu0__;
    	}) ();
    };
    var filter = function (func, iterable) {
    	if (__eq__ (func, null)) {
    		var func = bool;
    	}
    	return (function () {
    		var __accu0__ = [];
    		var __iterable0__ = iterable;
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var item = __getitem__ (__iterable0__, __index0__);
    			if (__call__ (func, null, item)) {
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, item);
    				}) ();
    			}
    		}
    		return __accu0__;
    	}) ();
    };
    var divmod = function (n, d) {
    	return tuple ([__floordiv__ (n, d), __mod__ (n, d)]);
    };
    var __Terminal__ =  __class__ ('__Terminal__', [object], {
    	__module__: __name__,
    	get __init__ () {return __get__ (this, function (self) {
    		self.buffer = '';
    		try {
    			self.element = (function () {
    				var __accu0__ = document;
    				return __call__ (__accu0__.getElementById, __accu0__, '__terminal__');
    			}) ();
    		}
    		catch (__except0__) {
    			self.element = null;
    		}
    		if (self.element) {
    			self.element.style.overflowX = 'auto';
    			self.element.style.boxSizing = 'border-box';
    			self.element.style.padding = '5px';
    			self.element.innerHTML = '_';
    		}
    	});},
    	get print () {return __get__ (this, function (self) {
    		var sep = ' ';
    		var end = '\n';
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
    						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
    		}
    		else {
    			var args = tuple ();
    		}
    		self.buffer = __getslice__ ((function () {
    			var __accu0__ = '{}{}{}';
    			return __call__ (__accu0__.format, __accu0__, self.buffer, (function () {
    				var __accu1__ = sep;
    				return __call__ (__accu1__.join, __accu1__, (function () {
    					var __accu2__ = [];
    					var __iterable0__ = args;
    					for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    						var arg = __getitem__ (__iterable0__, __index0__);
    						(function () {
    							var __accu3__ = __accu2__;
    							return __call__ (__accu3__.append, __accu3__, __call__ (str, null, arg));
    						}) ();
    					}
    					return __accu2__;
    				}) ());
    			}) (), end);
    		}) (), __neg__ (4096), null, 1);
    		if (self.element) {
    			self.element.innerHTML = (function () {
    				var __accu0__ = (function () {
    					var __accu1__ = self.buffer;
    					return __call__ (__accu1__.py_replace, __accu1__, '\n', '<br>');
    				}) ();
    				return __call__ (__accu0__.py_replace, __accu0__, ' ', '&nbsp');
    			}) ();
    			self.element.scrollTop = self.element.scrollHeight;
    		}
    		else {
    			(function () {
    				var __accu0__ = console;
    				return __call__ (__accu0__.log, __accu0__, (function () {
    					var __accu1__ = sep;
    					return __call__ (__accu1__.join, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable0__ = args;
    						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    							var arg = __getitem__ (__iterable0__, __index0__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, __call__ (str, null, arg));
    							}) ();
    						}
    						return __accu2__;
    					}) ());
    				}) ());
    			}) ();
    		}
    	});},
    	get input () {return __get__ (this, function (self, question) {
    		if (arguments.length) {
    			var __ilastarg0__ = arguments.length - 1;
    			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
    				var __allkwargs0__ = arguments [__ilastarg0__--];
    				for (var __attrib0__ in __allkwargs0__) {
    					switch (__attrib0__) {
    						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
    						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
    					}
    				}
    			}
    		}
    		(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.print, __accu0__, (function () {
    				var __accu1__ = '{}';
    				return __call__ (__accu1__.format, __accu1__, question);
    			}) (), __kwargtrans__ ({end: ''}));
    		}) ();
    		var answer = (function () {
    			var __accu0__ = window;
    			return __call__ (__accu0__.prompt, __accu0__, (function () {
    				var __accu1__ = '\n';
    				return __call__ (__accu1__.join, __accu1__, __getslice__ ((function () {
    					var __accu2__ = self.buffer;
    					return __call__ (__accu2__.py_split, __accu2__, '\n');
    				}) (), __neg__ (8), null, 1));
    			}) ());
    		}) ();
    		(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.print, __accu0__, answer);
    		}) ();
    		return answer;
    	});}
    });
    var __terminal__ = __call__ (__Terminal__, null);
    var print = __terminal__.print;
    var input = __terminal__.input;

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var pi = Math.PI;
    var e = Math.E;
    var exp = Math.exp;
    var expm1 = function (x) {
    	return __sub__ ((function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.exp, __accu0__, x);
    	}) (), 1);
    };
    var log = function (x, base) {
    	return (base === undefined ? (function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, x);
    	}) () : __truediv__ ((function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, x);
    	}) (), (function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, base);
    	}) ()));
    };
    var log1p = function (x) {
    	return (function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, __add__ (x, 1));
    	}) ();
    };
    var log2 = function (x) {
    	return __truediv__ ((function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, x);
    	}) (), Math.LN2);
    };
    var log10 = function (x) {
    	return __truediv__ ((function () {
    		var __accu0__ = Math;
    		return __call__ (__accu0__.log, __accu0__, x);
    	}) (), Math.LN10);
    };
    var pow = Math.pow;
    var sqrt = Math.sqrt;
    var sin = Math.sin;
    var cos = Math.cos;
    var tan = Math.tan;
    var asin = Math.asin;
    var acos = Math.acos;
    var atan = Math.atan;
    var atan2 = Math.atan2;
    var hypot = Math.hypot;
    var degrees = function (x) {
    	return __truediv__ (__mul__ (x, 180), Math.PI);
    };
    var radians = function (x) {
    	return __truediv__ (__mul__ (x, Math.PI), 180);
    };
    var sinh = Math.sinh;
    var cosh = Math.cosh;
    var tanh = Math.tanh;
    var asinh = Math.asinh;
    var acosh = Math.acosh;
    var atanh = Math.atanh;
    var floor = Math.floor;
    var ceil = Math.ceil;
    var trunc = Math.trunc;
    var isnan = isNaN;
    var inf = Infinity;
    var nan = NaN;
    var modf = function (n) {
    	var sign = (__ge__ (n, 0) ? 1 : __neg__ (1));
    	var __left0__ = __call__ (divmod, null, __call__ (abs, null, n), 1);
    	var f = __left0__ [0];
    	var mod = __left0__ [1];
    	return tuple ([__mul__ (mod, sign), __mul__ (f, sign)]);
    };

    var __module_math__ = /*#__PURE__*/Object.freeze({
        pi: pi,
        e: e,
        exp: exp,
        expm1: expm1,
        log: log,
        log1p: log1p,
        log2: log2,
        log10: log10,
        pow: pow,
        sqrt: sqrt,
        sin: sin,
        cos: cos,
        tan: tan,
        asin: asin,
        acos: acos,
        atan: atan,
        atan2: atan2,
        hypot: hypot,
        degrees: degrees,
        radians: radians,
        sinh: sinh,
        cosh: cosh,
        tanh: tanh,
        asinh: asinh,
        acosh: acosh,
        atanh: atanh,
        floor: floor,
        ceil: ceil,
        trunc: trunc,
        isnan: isnan,
        inf: inf,
        nan: nan,
        modf: modf
    });

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var math = {};
    __nest__ (math, '', __module_math__);
    var _array = (function () {
    	var __accu0__ = [];
    	for (var i = 0; i < 624; i++) {
    		(function () {
    			var __accu1__ = __accu0__;
    			return __call__ (__accu1__.append, __accu1__, 0);
    		}) ();
    	}
    	return __accu0__;
    }) ();
    var _index = 0;
    var _bitmask1 = __sub__ (__pow__ (2, 32), 1);
    var _bitmask2 = __pow__ (2, 31);
    var _bitmask3 = __sub__ (__pow__ (2, 31), 1);
    var _fill_array = function () {
    	for (var i = 0; i < 624; i++) {
    		var y = __add__ (__and__ (__getitem__ (_array, i), _bitmask2), __and__ (__getitem__ (_array, __mod__ (__add__ (i, 1), 624)), _bitmask3));
    		__setitem__ (_array, i, __xor__ (__getitem__ (_array, __mod__ (__add__ (i, 397), 624)), __rshift__ (y, 1)));
    		if (__ne__ (__mod__ (y, 2), 0)) {
    			__setitem__ (_array, i, __call__ (__ixor__, null, __getitem__ (_array, i), 2567483615));
    		}
    	}
    };
    var _random_integer = function () {
    	if (__eq__ (_index, 0)) {
    		__call__ (_fill_array, null);
    	}
    	var y = __getitem__ (_array, _index);
    	var y = __call__ (__ixor__, null, y, __rshift__ (y, 11));
    	var y = __call__ (__ixor__, null, y, __and__ (__lshift__ (y, 7), 2636928640));
    	var y = __call__ (__ixor__, null, y, __and__ (__lshift__ (y, 15), 4022730752));
    	var y = __call__ (__ixor__, null, y, __rshift__ (y, 18));
    	_index = __mod__ (__add__ (_index, 1), 624);
    	return y;
    };
    var seed = function (x) {
    	if (typeof x == 'undefined' || (x != null && x.hasOwnProperty ("__kwargtrans__"))) {		var x = __call__ (int, null, __mul__ (_bitmask3, (function () {
    			var __accu0__ = Math;
    			return __call__ (__accu0__.random, __accu0__);
    		}) ()));
    	}	__setitem__ (_array, 0, x);
    	for (var i = 1; i < 624; i++) {
    		__setitem__ (_array, i, __and__ (__xor__ (__mul__ (1812433253, __getitem__ (_array, __sub__ (i, 1))), __add__ (__rshift__ (__getitem__ (_array, __sub__ (i, 1)), 30), i)), _bitmask1));
    	}
    };
    var randint = function (a, b) {
    	return __add__ (a, __mod__ (__call__ (_random_integer, null), __add__ (__sub__ (b, a), 1)));
    };
    var choice = function (seq) {
    	return __getitem__ (seq, __call__ (randint, null, 0, __sub__ (__call__ (len, null, seq), 1)));
    };
    var random = function () {
    	return __truediv__ (__call__ (_random_integer, null), _bitmask3);
    };
    var shuffle = function (x) {
    	for (var i = __sub__ (__call__ (len, null, x), 1); i > 0; i--) {
    		var j = (function () {
    			var __accu0__ = math;
    			return __call__ (__accu0__.floor, __accu0__, __mul__ (__call__ (random, null), __add__ (i, 1)));
    		}) ();
    		var temp = __getitem__ (x, i);
    		__setitem__ (x, i, __getitem__ (x, j));
    		__setitem__ (x, j, temp);
    	}
    };
    __call__ (seed, null);

    var __module_random__ = /*#__PURE__*/Object.freeze({
        _array: _array,
        get _index () { return _index; },
        _bitmask1: _bitmask1,
        _bitmask2: _bitmask2,
        _bitmask3: _bitmask3,
        _fill_array: _fill_array,
        _random_integer: _random_integer,
        seed: seed,
        randint: randint,
        choice: choice,
        random: random,
        shuffle: shuffle
    });

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var random$1 = {};
    __nest__ (random$1, '', __module_random__);
    var __name__$1 = 'gls_poetry.vocabulary';
    var random_sample = function (iterable, k) {
    	var l = __call__ (list, null, iterable);
    	(function () {
    		var __accu0__ = random$1;
    		return __call__ (__accu0__.shuffle, __accu0__, l);
    	}) ();
    	return __getslice__ (l, 0, k, 1);
    };
    var VOCABULARY_SETS = dict ({'Poetic': new set (['life', 'love', 'forever', 'still', 'now', 'seize', 'passion', 'time', 'never', 'end', 'kiss', 'hold', 'see', 'far', 'tender', 'death', 'sleep', 'star', 'moon', 'begin', 'sweet', 'ideal', 'beauty', 'truth', 'share', 'journey', 'bright', 'understand', 'infinite', 'beyond', 'need', 'heart', 'desire', 'wait', 'hour', 'long', 'hand', 'past', 'broken', 'sustain', 'poise', 'suspend', 'kind', 'touch', 'not']), 'Math': new set (['parallel', 'tangent', 'multiplies', 'power', 'divides', 'adds', 'subtracts', 'function', 'relation', 'circle', 'curve', 'differentiate', 'equation', 'operate', 'intersect', 'partial', 'integrate', 'variable', 'result', 'answer', 'question', 'solution', 'inverse', 'prime', 'compose', 'triangle', 'square', 'convolution', 'infinite', 'finite', 'plus', 'minus', 'equals', 'solve', 'group', 'commute', 'design', 'graph', 'axis', 'mean', 'average', 'deviation', 'consistent', 'proof', 'obtuse', 'logic', 'angle', 'whole', 'know', 'exact', 'proportion', 'graph', 'even', 'odd', 'figure', 'set', 'ratio']), 'The Sea': new set (['wind', 'wave', 'sailor', 'moon', 'sun', 'fierce', 'storm', 'placid', 'calm', 'sail', 'salt', 'breeze', 'hard', 'rain', 'clouds', 'blows', 'wails', 'deep', 'sea', 'water', 'ocean', 'bay', 'races', 'swell', 'crest', 'tide', 'air', 'turns', 'isle', 'shore', 'horizon', 'cove', 'safe', 'dangerous', 'crossing', 'open', 'billows', 'distant', 'sunrise', 'sunset', 'sand', 'surf', 'rocks', 'anchorage', 'drowning', 'floating', 'sinking', 'seeing', 'navigate', 'north', 'south', 'east', 'west'])});
    var VOCABULARIES = (function () {
    	var __accu0__ = [];
    	var __iterable0__ = (function () {
    		var __accu1__ = VOCABULARY_SETS;
    		return __call__ (__accu1__.py_items, __accu1__);
    	}) ();
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var __left0__ = __getitem__ (__iterable0__, __index0__);
    		var py_name = __left0__ [0];
    		var words = __left0__ [1];
    		(function () {
    			var __accu1__ = __accu0__;
    			return __call__ (__accu1__.append, __accu1__, [py_name, __call__ (tuple, null, words)]);
    		}) ();
    	}
    	return dict (__accu0__);
    }) ();
    __setitem__ (VOCABULARIES, 'Mixed', __call__ (tuple, null, (function () {
    	var __accu0__ = [];
    	var __iterable0__ = (function () {
    		var __accu1__ = VOCABULARY_SETS;
    		return __call__ (__accu1__.py_values, __accu1__);
    	}) ();
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var words = __getitem__ (__iterable0__, __index0__);
    		var __iterable1__ = words;
    		for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    			var word = __getitem__ (__iterable1__, __index1__);
    			(function () {
    				var __accu1__ = __accu0__;
    				return __call__ (__accu1__.append, __accu1__, word);
    			}) ();
    		}
    	}
    	return set (__accu0__);
    }) ()));
    var Vocabulary =  __class__ ('Vocabulary', [object], {
    	__module__: __name__$1,
    	get __init__ () {return __get__ (this, function (self, vocabulary_name, vocabulary) {
    		if (typeof vocabulary_name == 'undefined' || (vocabulary_name != null && vocabulary_name.hasOwnProperty ("__kwargtrans__"))) {			var vocabulary_name = 'Mixed';
    		}		if (typeof vocabulary == 'undefined' || (vocabulary != null && vocabulary.hasOwnProperty ("__kwargtrans__"))) {			var vocabulary = tuple ([]);
    		}		self.vocabulary = (function () {
    			var __accu0__ = VOCABULARIES;
    			return __call__ (__accu0__.py_get, __accu0__, vocabulary_name, vocabulary);
    		}) ();
    	});},
    	get permutation () {return __get__ (this, function (self, length) {
    		return __call__ (random_sample, null, self.vocabulary, length);
    	});}
    });

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var re = {};
    __nest__ (re, '', __module_re__);
    var __name__$2 = 're.translate';
    var VERBOSE = false;
    var MAX_SHIFTREDUCE_LOOPS = 1000;
    var stringFlags = 'aiLmsux';
    var Group =  __class__ ('Group', [object], {
    	__module__: __name__$2,
    	get __init__ () {return __get__ (this, function (self, start, end, klass) {
    		self.start = start;
    		self.end = end;
    		self.klass = klass;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		return __call__ (str, null, tuple ([self.start, self.end, self.klass]));
    	});}
    });
    var generateGroupSpans = function (tokens) {
    	var groupInfo = [];
    	var idx = 0;
    	var __iterable0__ = tokens;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var token = __getitem__ (__iterable0__, __index0__);
    		if (__t__ ((function () {
    			var __accu0__ = token.py_name;
    			return __call__ (__accu0__.startswith, __accu0__, '(');
    		}) ())) {
    			(function () {
    				var __accu0__ = groupInfo;
    				return __call__ (__accu0__.append, __accu0__, __call__ (Group, null, idx, null, token.py_name));
    			}) ();
    		}
    		else if (__t__ (__eq__ (token.py_name, ')'))) {
    			var __iterable1__ = __call__ (py_reversed, null, groupInfo);
    			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    				var group = __getitem__ (__iterable1__, __index1__);
    				if (__t__ (group.end === null)) {
    					group.end = idx;
    				}
    			}
    		}
    		var idx = __call__ (__iadd__, null, idx, 1);
    	}
    	return groupInfo;
    };
    var countCaptureGroups = function (tokens) {
    	var groupInfo = __call__ (generateGroupSpans, null, tokens);
    	var count = 0;
    	var __iterable0__ = tokens;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var token = __getitem__ (__iterable0__, __index0__);
    		if (__t__ (__eq__ (token.py_name, '('))) {
    			var count = __call__ (__iadd__, null, count, 1);
    		}
    	}
    	return count;
    };
    var getCaptureGroup = function (groupInfo, namedGroups, groupRef) {
    	try {
    		var id = __call__ (int, null, groupRef);
    	}
    	catch (__except0__) {
    		var id = __getitem__ (namedGroups, groupRef);
    	}
    	var search = 0;
    	var __iterable0__ = groupInfo;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var group = __getitem__ (__iterable0__, __index0__);
    		if (__t__ (__eq__ (group.klass, '('))) {
    			var search = __call__ (__iadd__, null, search, 1);
    			if (__t__ (__eq__ (search, id))) {
    				return group;
    			}
    		}
    	}
    };
    var splitIfElse = function (tokens, namedGroups) {
    	var variants = [];
    	var groupInfo = __call__ (generateGroupSpans, null, tokens);
    	var __iterable0__ = groupInfo;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var group = __getitem__ (__iterable0__, __index0__);
    		if (__t__ (__eq__ (group.klass, '(?<'))) {
    			var iff = __getslice__ (tokens, 0, null, 1);
    			var els = __getslice__ (tokens, 0, null, 1);
    			var conStart = group.start;
    			var conEnd = group.end;
    			var ref = __getitem__ (tokens, __add__ (conStart, 1)).py_name;
    			var captureGroup = __call__ (getCaptureGroup, null, groupInfo, namedGroups, ref);
    			var captureGroupModifier = __getitem__ (tokens, __add__ (captureGroup.end, 1));
    			if (__t__ (__t__ (__in__ (captureGroupModifier.py_name, ['?', '*'])) || (function () {
    				var __accu0__ = captureGroupModifier.py_name;
    				return __call__ (__accu0__.startswith, __accu0__, '{0,');
    			}) ())) {
    				if (__t__ (__eq__ (captureGroupModifier.py_name, '?'))) {
    					__setitem__ (iff, __add__ (captureGroup.end, 1), null);
    				}
    				else if (__t__ (__eq__ (captureGroupModifier.py_name, '*'))) {
    					__setitem__ (iff, __add__ (captureGroup.end, 1), __call__ (Token, null, '+'));
    				}
    				else if (__t__ ((function () {
    					var __accu0__ = captureGroupModifier.py_name;
    					return __call__ (__accu0__.startswith, __accu0__, '{0,');
    				}) ())) {
    					__setslice__ (__getitem__ (iff, __add__ (captureGroup.end, 1)).py_name, 0, 3, null, '{1,');
    				}
    				__setitem__ (els, __add__ (captureGroup.end, 1), null);
    				var hasElse = false;
    				for (var idx = conStart; idx < conEnd; idx++) {
    					if (__t__ (__eq__ (__getitem__ (tokens, idx).py_name, '|'))) {
    						var hasElse = true;
    						(function () {
    							var __accu0__ = els;
    							return __call__ (__accu0__.py_pop, __accu0__, conEnd);
    						}) ();
    						__setslice__ (iff, idx, __add__ (conEnd, 1), null, []);
    						__setslice__ (els, conStart, __add__ (idx, 1), null, []);
    						break;
    					}
    				}
    				if (__t__ (!__t__ ((hasElse)))) {
    					__setslice__ (els, conStart, __add__ (conEnd, 1), null, []);
    					(function () {
    						var __accu0__ = iff;
    						return __call__ (__accu0__.py_pop, __accu0__, conEnd);
    					}) ();
    				}
    				__setslice__ (iff, conStart, __add__ (conStart, 3), null, []);
    				__setslice__ (els, captureGroup.start, __add__ (captureGroup.end, 1), null, [__call__ (Token, null, '('), __call__ (Token, null, ')')]);
    				(function () {
    					var __accu0__ = iff;
    					return __call__ (__accu0__.remove, __accu0__, null);
    				}) ();
    				(function () {
    					var __accu0__ = els;
    					return __call__ (__accu0__.remove, __accu0__, null);
    				}) ();
    				(function () {
    					var __accu0__ = variants;
    					return __call__ (__accu0__.append, __accu0__, iff);
    				}) ();
    				(function () {
    					var __accu0__ = variants;
    					return __call__ (__accu0__.append, __accu0__, els);
    				}) ();
    			}
    			else {
    				for (var idx = conStart; idx < conEnd; idx++) {
    					if (__t__ (__eq__ (__getitem__ (iff, idx).py_name, '|'))) {
    						var iff = __getslice__ (tokens, 0, idx, 1);
    						(function () {
    							var __accu0__ = iff;
    							return __call__ (__accu0__.extend, __accu0__, __getslice__ (tokens, __add__ (conEnd, 1), null, 1));
    						}) ();
    						break;
    					}
    				}
    				__setslice__ (iff, conStart, __add__ (conStart, 3), null, []);
    				(function () {
    					var __accu0__ = variants;
    					return __call__ (__accu0__.append, __accu0__, iff);
    				}) ();
    			}
    			break;
    		}
    	}
    	if (__t__ (!__t__ ((variants)))) {
    		return [tokens];
    	}
    	var allVariants = [];
    	var __iterable0__ = variants;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var variant = __getitem__ (__iterable0__, __index0__);
    		(function () {
    			var __accu0__ = allVariants;
    			return __call__ (__accu0__.extend, __accu0__, __call__ (splitIfElse, null, variant, namedGroups));
    		}) ();
    	}
    	return allVariants;
    };
    var Token =  __class__ ('Token', [object], {
    	__module__: __name__$2,
    	get __init__ () {return __get__ (this, function (self, py_name, paras, pure) {
    		if (typeof paras == 'undefined' || (paras != null && paras.hasOwnProperty ("__kwargtrans__"))) {			var paras = null;
    		}		if (typeof pure == 'undefined' || (pure != null && pure.hasOwnProperty ("__kwargtrans__"))) {			var pure = false;
    		}		if (__t__ (paras === null)) {
    			var paras = [];
    		}
    		self.py_name = py_name;
    		self.paras = paras;
    		self.pure = pure;
    		self.isModeGroup = false;
    	});},
    	get __repr__ () {return __get__ (this, function (self) {
    		return self.py_name;
    	});},
    	get resolve () {return __get__ (this, function (self) {
    		var paras = '';
    		var __iterable0__ = self.paras;
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var para = __getitem__ (__iterable0__, __index0__);
    			var paras = __call__ (__iadd__, null, paras, __call__ (str, null, para));
    		}
    		return __add__ (self.py_name, paras);
    	});}
    });
    var shift = function (stack, queue) {
    	var done = !__t__ ((__call__ (bool, null, queue)));
    	if (__t__ (!__t__ ((done)))) {
    		(function () {
    			var __accu0__ = stack;
    			return __call__ (__accu0__.append, __accu0__, __call__ (Token, null, __getitem__ (queue, 0), [], true));
    		}) ();
    		var queue = __getslice__ (queue, 1, null, 1);
    	}
    	return tuple ([stack, queue, done]);
    };
    var shiftReduce = function (stack, queue, namedGroups, flags) {
    	var done = false;
    	var high = __sub__ (__call__ (len, null, stack), 1);
    	if (__t__ (__lt__ (__call__ (len, null, stack), 2))) {
    		var __left0__ = __call__ (shift, null, stack, queue);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var done = __left0__ [2];
    		return tuple ([stack, queue, flags, done]);
    	}
    	var s0 = (__t__ (__gt__ (__call__ (len, null, stack), 0)) ? __getitem__ (stack, high) : __call__ (Token, null, ''));
    	var s1 = (__t__ (__gt__ (__call__ (len, null, stack), 1)) ? __getitem__ (stack, __sub__ (high, 1)) : __call__ (Token, null, ''));
    	if (__t__ (VERBOSE)) {
    		var __iterable0__ = stack;
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var token = __getitem__ (__iterable0__, __index0__);
    			(function () {
    				var __accu0__ = console;
    				return __call__ (__accu0__.log, __accu0__, (function () {
    					var __accu1__ = token;
    					return __call__ (__accu1__.resolve, __accu1__);
    				}) (), '\t', __kwargtrans__ ({end: ''}));
    			}) ();
    		}
    		(function () {
    			var __accu0__ = console;
    			return __call__ (__accu0__.log, __accu0__, '');
    		}) ();
    	}
    	if (__t__ (__eq__ (s1.py_name, '\\'))) {
    		if (__t__ (__eq__ (s0.py_name, 'A'))) {
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '^')]);
    		}
    		else if (__t__ (__eq__ (s0.py_name, 'a'))) {
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '\\07')]);
    		}
    		else if (__t__ (__eq__ (s0.py_name, 'Z'))) {
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '$')]);
    		}
    		else {
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('\\', s0.py_name))]);
    		}
    	}
    	else if (__t__ (__t__ (__eq__ (s0.py_name, '$')) && s0.pure)) {
    		(function () {
    			var __accu0__ = stack;
    			return __call__ (__accu0__.py_pop, __accu0__);
    		}) ();
    		(function () {
    			var __accu0__ = stack;
    			return __call__ (__accu0__.extend, __accu0__, [__call__ (Token, null, '(?='), __call__ (Token, null, '\\n'), __call__ (Token, null, '?'), __call__ (Token, null, '$'), __call__ (Token, null, ')')]);
    		}) ();
    	}
    	else if (__t__ (__eq__ (s1.py_name, '{'))) {
    		if (__t__ (__t__ (__eq__ (s0.py_name, ',')) && __eq__ (__call__ (len, null, s1.paras), 0))) {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, '0');
    			}) ();
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, ',');
    			}) ();
    		}
    		else if (__t__ (__eq__ (s0.py_name, '}'))) {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, '}');
    			}) ();
    			s1.py_name = (function () {
    				var __accu0__ = s1;
    				return __call__ (__accu0__.resolve, __accu0__);
    			}) ();
    			s1.paras = [];
    		}
    		else {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, s0.py_name);
    			}) ();
    		}
    		var stack = __getslice__ (stack, 0, __neg__ (1), 1);
    	}
    	else if (__t__ (__t__ (__eq__ (s1.py_name, '[')) && __eq__ (s0.py_name, '^'))) {
    		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '[^')]);
    	}
    	else if (__t__ (__t__ (__eq__ (s1.py_name, '(')) && __eq__ (s0.py_name, '?'))) {
    		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '(?')]);
    	}
    	else if (__t__ (__t__ (__in__ (s1.py_name, ['*', '+', '?'])) && __eq__ (s0.py_name, '?'))) {
    		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ (s1.py_name, '?'))]);
    	}
    	else if (__t__ (__t__ (s1.isModeGroup) && __eq__ (s0.py_name, ')'))) {
    		var stack = __getslice__ (stack, 0, __neg__ (2), 1);
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?'))) {
    		if (__t__ (__in__ (s0.py_name, stringFlags))) {
    			if (__t__ (__eq__ (s0.py_name, 'i'))) {
    				var flags = __call__ (__ior__, null, flags, re.IGNORECASE);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 'L'))) {
    				var flags = __call__ (__ior__, null, flags, re.LOCALE);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 'm'))) {
    				var flags = __call__ (__ior__, null, flags, re.MULTILINE);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 's'))) {
    				var flags = __call__ (__ior__, null, flags, re.DOTALL);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 'u'))) {
    				var flags = __call__ (__ior__, null, flags, re.UNICODE);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 'x'))) {
    				var flags = __call__ (__ior__, null, flags, re.VERBOSE);
    			}
    			else if (__t__ (__eq__ (s0.py_name, 'a'))) {
    				var flags = __call__ (__ior__, null, flags, re.ASCII);
    			}
    			(function () {
    				var __accu0__ = stack;
    				return __call__ (__accu0__.py_pop, __accu0__);
    			}) ();
    			s1.isModeGroup = true;
    		}
    		else {
    			if (__t__ (__eq__ (s0.py_name, '('))) {
    				s0.py_name = '<';
    			}
    			var newToken = __call__ (Token, null, __add__ ('(?', s0.py_name));
    			__setslice__ (stack, __neg__ (2), null, null, [newToken]);
    		}
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?<'))) {
    		if (__t__ (__eq__ (s0.py_name, ')'))) {
    			__setslice__ (stack, __neg__ (1), null, null, [__call__ (Token, null, (function () {
    				var __accu0__ = '';
    				return __call__ (__accu0__.join, __accu0__, s1.paras);
    			}) ()), __call__ (Token, null, '>')]);
    			s1.paras = [];
    		}
    		else {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, s0.py_name);
    			}) ();
    			(function () {
    				var __accu0__ = stack;
    				return __call__ (__accu0__.py_pop, __accu0__);
    			}) ();
    		}
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?P'))) {
    		__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('(?P', s0.py_name))]);
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?P<'))) {
    		if (__t__ (__eq__ (s0.py_name, '>'))) {
    			__setitem__ (namedGroups, (function () {
    				var __accu0__ = '';
    				return __call__ (__accu0__.join, __accu0__, s1.paras);
    			}) (), __add__ (__call__ (countCaptureGroups, null, stack), 1));
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, '(')]);
    		}
    		else {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, s0.py_name);
    			}) ();
    			(function () {
    				var __accu0__ = stack;
    				return __call__ (__accu0__.py_pop, __accu0__);
    			}) ();
    		}
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?P='))) {
    		if (__t__ (__eq__ (s0.py_name, ')'))) {
    			__setslice__ (stack, __neg__ (2), null, null, [__call__ (Token, null, __add__ ('\\', __call__ (str, null, __getitem__ (namedGroups, __getitem__ (s1.paras, 0)))))]);
    		}
    		else if (__t__ (!__t__ ((s1.paras)))) {
    			(function () {
    				var __accu0__ = s1.paras;
    				return __call__ (__accu0__.append, __accu0__, s0.py_name);
    			}) ();
    			(function () {
    				var __accu0__ = stack;
    				return __call__ (__accu0__.py_pop, __accu0__);
    			}) ();
    		}
    		else {
    			__setitem__ (s1.paras, 0, __call__ (__iadd__, null, __getitem__ (s1.paras, 0), s0.py_name));
    			(function () {
    				var __accu0__ = stack;
    				return __call__ (__accu0__.py_pop, __accu0__);
    			}) ();
    		}
    	}
    	else if (__t__ (__eq__ (s1.py_name, '(?#'))) {
    		if (__t__ (__eq__ (s0.py_name, ')'))) {
    			var stack = __getslice__ (stack, 0, __neg__ (2), 1);
    		}
    		else {
    			var stack = __getslice__ (stack, 0, __neg__ (1), 1);
    		}
    	}
    	else {
    		var __left0__ = __call__ (shift, null, stack, queue);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var done = __left0__ [2];
    	}
    	return tuple ([stack, queue, flags, done]);
    };
    var translate = function (rgx) {
    	var stack = [];
    	var queue = __call__ (list, null, rgx);
    	var flags = 0;
    	var namedGroups = __call__ (dict, null);
    	var nloop = 0;
    	while (__t__ (true)) {
    		var nloop = __call__ (__iadd__, null, nloop, 1);
    		if (__t__ (__gt__ (nloop, MAX_SHIFTREDUCE_LOOPS))) {
    			var __except0__ = __call__ (Exception, null);
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var __left0__ = __call__ (shiftReduce, null, stack, queue, namedGroups, flags);
    		var stack = __left0__ [0];
    		var queue = __left0__ [1];
    		var flags = __left0__ [2];
    		var done = __left0__ [3];
    		if (__t__ (done)) {
    			break;
    		}
    	}
    	var variants = __call__ (splitIfElse, null, stack, namedGroups);
    	var n_splits = __call__ (len, null, variants);
    	var final = [];
    	for (var i = 0; i < __call__ (len, null, variants); i++) {
    		(function () {
    			var __accu0__ = final;
    			return __call__ (__accu0__.extend, __accu0__, __getitem__ (variants, i));
    		}) ();
    		if (__t__ (__lt__ (i, __sub__ (__call__ (len, null, variants), 1)))) {
    			(function () {
    				var __accu0__ = final;
    				return __call__ (__accu0__.append, __accu0__, __call__ (Token, null, '|'));
    			}) ();
    		}
    	}
    	var stack = final;
    	var groupInfo = __call__ (generateGroupSpans, null, stack);
    	var resolvedTokens = [];
    	var __iterable0__ = stack;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var token = __getitem__ (__iterable0__, __index0__);
    		var stringed = (function () {
    			var __accu0__ = token;
    			return __call__ (__accu0__.resolve, __accu0__);
    		}) ();
    		if (__t__ (__t__ (__and__ (flags, re.DOTALL)) && __eq__ (stringed, '.'))) {
    			var stringed = '[\\s\\S]';
    		}
    		(function () {
    			var __accu0__ = resolvedTokens;
    			return __call__ (__accu0__.append, __accu0__, stringed);
    		}) ();
    	}
    	return tuple ([resolvedTokens, flags, namedGroups, __call__ (countCaptureGroups, null, stack), n_splits]);
    };

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var __name__$3 = 're';
    var T = __lshift__ (1, 0);
    var TEMPLATE = T;
    var I = __lshift__ (1, 1);
    var IGNORECASE = I;
    var L = __lshift__ (1, 2);
    var LOCALE = L;
    var M = __lshift__ (1, 3);
    var MULTILINE = M;
    var S = __lshift__ (1, 4);
    var DOTALL = S;
    var U = __lshift__ (1, 5);
    var UNICODE = U;
    var X = __lshift__ (1, 6);
    var VERBOSE$1 = X;
    var DEBUG = __lshift__ (1, 7);
    var A = __lshift__ (1, 8);
    var ASCII = A;
    var Y = __lshift__ (1, 16);
    var STICKY = Y;
    var G = __lshift__ (1, 17);
    var GLOBAL = G;
    var J = __lshift__ (1, 19);
    var JSSTRICT = J;
    var error =  __class__ ('error', [Exception], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, msg, error, pattern, flags, pos) {
    		if (typeof pattern == 'undefined' || (pattern != null && pattern.hasOwnProperty ("__kwargtrans__"))) {			var pattern = null;
    		}		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {			var flags = 0;
    		}		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = null;
    		}		(function () {
    			var __accu0__ = Exception;
    			return __call__ (__accu0__.__init__, __accu0__, self, msg, __kwargtrans__ ({error: error}));
    		}) ();
    		self.pattern = pattern;
    		self.flags = flags;
    		self.pos = pos;
    	});}
    });
    var ReIndexError =  __class__ ('ReIndexError', [IndexError], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self) {
    		(function () {
    			var __accu0__ = IndexError;
    			return __call__ (__accu0__.__init__, __accu0__, self, 'no such group');
    		}) ();
    	});}
    });
    var Match =  __class__ ('Match', [object], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, mObj, string, pos, endpos, rObj, namedGroups) {
    		if (typeof namedGroups == 'undefined' || (namedGroups != null && namedGroups.hasOwnProperty ("__kwargtrans__"))) {			var namedGroups = null;
    		}		var __iterable0__ = __call__ (enumerate, null, mObj);
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var __left0__ = __getitem__ (__iterable0__, __index0__);
    			var index = __left0__ [0];
    			var match = __left0__ [1];
    			__setitem__ (mObj, index, (__eq__ (__getitem__ (mObj, index), undefined) ? null : __getitem__ (mObj, index)));
    		}
    		self._obj = mObj;
    		self._pos = pos;
    		self._endpos = endpos;
    		self._re = rObj;
    		self._string = string;
    		self._namedGroups = namedGroups;
    		self._lastindex = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._lastMatchGroup, __accu0__);
    		}) ();
    		if (self._namedGroups !== null) {
    			self._lastgroup = __getitem__ (self._namedGroups, self._lastindex);
    		}
    		else {
    			self._lastgroup = null;
    		}
    	});},
    	get _getPos () {return __get__ (this, function (self) {
    		return self._pos;
    	});},
    	get _setPos () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getEndPos () {return __get__ (this, function (self) {
    		return self._endpos;
    	});},
    	get _setEndPos () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getRe () {return __get__ (this, function (self) {
    		return self._re;
    	});},
    	get _setRe () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getString () {return __get__ (this, function (self) {
    		return self._string;
    	});},
    	get _setString () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getLastGroup () {return __get__ (this, function (self) {
    		return self._lastgroup;
    	});},
    	get _setLastGroup () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getLastIndex () {return __get__ (this, function (self) {
    		return self._lastindex;
    	});},
    	get _setLastIndex () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _lastMatchGroup () {return __get__ (this, function (self) {
    		if (__gt__ (__call__ (len, null, self._obj), 1)) {
    			for (var i = __sub__ (__call__ (len, null, self._obj), 1); i > 0; i--) {
    				if (__getitem__ (self._obj, i) !== null) {
    					return i;
    				}
    			}
    			return null;
    		}
    		else {
    			return null;
    		}
    	});},
    	get expand () {return __get__ (this, function (self, template) {
    		var __except0__ = __call__ (NotImplementedError, null);
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get group () {return __get__ (this, function (self) {
    		var args = tuple ([].slice.apply (arguments).slice (1));
    		var ret = [];
    		if (__gt__ (__call__ (len, null, args), 0)) {
    			var __iterable0__ = args;
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var index = __getitem__ (__iterable0__, __index0__);
    				if (py_typeof (index) === str) {
    					if (self._namedGroups !== null) {
    						if (!__in__ (index, (function () {
    							var __accu0__ = self._namedGroups;
    							return __call__ (__accu0__.py_keys, __accu0__);
    						}) ())) {
    							var __except0__ = __call__ (ReIndexError, null);
    							__except0__.__cause__ = null;
    							throw __except0__;
    						}
    						(function () {
    							var __accu0__ = ret;
    							return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, __getitem__ (self._namedGroups, index)));
    						}) ();
    					}
    					else {
    						var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
    						__except0__.__cause__ = null;
    						throw __except0__;
    					}
    				}
    				else {
    					if (__ge__ (index, __call__ (len, null, self._obj))) {
    						var __except0__ = __call__ (ReIndexError, null);
    						__except0__.__cause__ = null;
    						throw __except0__;
    					}
    					(function () {
    						var __accu0__ = ret;
    						return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, index));
    					}) ();
    				}
    			}
    		}
    		else {
    			(function () {
    				var __accu0__ = ret;
    				return __call__ (__accu0__.append, __accu0__, __getitem__ (self._obj, 0));
    			}) ();
    		}
    		if (__eq__ (__call__ (len, null, ret), 1)) {
    			return __getitem__ (ret, 0);
    		}
    		else {
    			return __call__ (tuple, null, ret);
    		}
    	});},
    	get groups () {return __get__ (this, function (self, py_default) {
    		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {			var py_default = null;
    		}		if (__gt__ (__call__ (len, null, self._obj), 1)) {
    			var ret = __getslice__ (self._obj, 1, null, 1);
    			return __call__ (tuple, null, (function () {
    				var __accu0__ = [];
    				var __iterable0__ = ret;
    				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    					var x = __getitem__ (__iterable0__, __index0__);
    					(function () {
    						var __accu1__ = __accu0__;
    						return __call__ (__accu1__.append, __accu1__, (x !== null ? x : py_default));
    					}) ();
    				}
    				return __accu0__;
    			}) ());
    		}
    		else {
    			return __call__ (tuple, null);
    		}
    	});},
    	get groupdict () {return __get__ (this, function (self, py_default) {
    		if (typeof py_default == 'undefined' || (py_default != null && py_default.hasOwnProperty ("__kwargtrans__"))) {			var py_default = null;
    		}		if (self._namedGroups !== null) {
    			var ret = dict ({});
    			var __iterable0__ = (function () {
    				var __accu0__ = self._namedGroups;
    				return __call__ (__accu0__.py_items, __accu0__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var __left0__ = __getitem__ (__iterable0__, __index0__);
    				var gName = __left0__ [0];
    				var gId = __left0__ [1];
    				var value = __getitem__ (self._obj, gId);
    				__setitem__ (ret, gName, (value !== null ? value : py_default));
    			}
    			return ret;
    		}
    		else {
    			var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    	});},
    	get start () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		var gId = 0;
    		if (py_typeof (group) === str) {
    			if (self._namedGroups !== null) {
    				if (!__in__ (group, (function () {
    					var __accu0__ = self._namedGroups;
    					return __call__ (__accu0__.py_keys, __accu0__);
    				}) ())) {
    					var __except0__ = __call__ (ReIndexError, null);
    					__except0__.__cause__ = null;
    					throw __except0__;
    				}
    				var gId = __getitem__ (self._namedGroups, group);
    			}
    			else {
    				var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			var gId = group;
    		}
    		if (__ge__ (gId, __call__ (len, null, self._obj))) {
    			var __except0__ = __call__ (ReIndexError, null);
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (__eq__ (gId, 0)) {
    			return self._obj.index;
    		}
    		else if (__getitem__ (self._obj, gId) !== null) {
    			var r = __call__ (compile, null, __call__ (escape, null, __getitem__ (self._obj, gId)), self._re.flags);
    			var m = (function () {
    				var __accu0__ = r;
    				return __call__ (__accu0__.search, __accu0__, __getitem__ (self._obj, 0));
    			}) ();
    			if (m) {
    				return __add__ (self._obj.index, (function () {
    					var __accu0__ = m;
    					return __call__ (__accu0__.start, __accu0__);
    				}) ());
    			}
    			else {
    				var __except0__ = __call__ (Exception, null, 'Failed to find capture group');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			return __neg__ (1);
    		}
    	});},
    	get end () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		var gId = 0;
    		if (py_typeof (group) === str) {
    			if (self._namedGroups !== null) {
    				if (!__in__ (group, (function () {
    					var __accu0__ = self._namedGroups;
    					return __call__ (__accu0__.py_keys, __accu0__);
    				}) ())) {
    					var __except0__ = __call__ (ReIndexError, null);
    					__except0__.__cause__ = null;
    					throw __except0__;
    				}
    				var gId = __getitem__ (self._namedGroups, group);
    			}
    			else {
    				var __except0__ = __call__ (NotImplementedError, null, 'No NamedGroups Available');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			var gId = group;
    		}
    		if (__ge__ (gId, __call__ (len, null, self._obj))) {
    			var __except0__ = __call__ (ReIndexError, null);
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		if (__eq__ (gId, 0)) {
    			return __add__ (self._obj.index, __call__ (len, null, __getitem__ (self._obj, 0)));
    		}
    		else if (__getitem__ (self._obj, gId) !== null) {
    			var r = __call__ (compile, null, __call__ (escape, null, __getitem__ (self._obj, gId)), self._re.flags);
    			var m = (function () {
    				var __accu0__ = r;
    				return __call__ (__accu0__.search, __accu0__, __getitem__ (self._obj, 0));
    			}) ();
    			if (m) {
    				return __add__ (self._obj.index, (function () {
    					var __accu0__ = m;
    					return __call__ (__accu0__.end, __accu0__);
    				}) ());
    			}
    			else {
    				var __except0__ = __call__ (Exception, null, 'Failed to find capture group');
    				__except0__.__cause__ = null;
    				throw __except0__;
    			}
    		}
    		else {
    			return __neg__ (1);
    		}
    	});},
    	get span () {return __get__ (this, function (self, group) {
    		if (typeof group == 'undefined' || (group != null && group.hasOwnProperty ("__kwargtrans__"))) {			var group = 0;
    		}		return tuple ([(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.start, __accu0__, group);
    		}) (), (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.end, __accu0__, group);
    		}) ()]);
    	});}
    });
    Object.defineProperty (Match, 'pos', property.call (Match, Match._getPos, Match._setPos));
    Object.defineProperty (Match, 'endpos', property.call (Match, Match._getEndPos, Match._setEndPos));
    Object.defineProperty (Match, 're', property.call (Match, Match._getRe, Match._setRe));
    Object.defineProperty (Match, 'string', property.call (Match, Match._getString, Match._setString));
    Object.defineProperty (Match, 'lastgroup', property.call (Match, Match._getLastGroup, Match._setLastGroup));
    Object.defineProperty (Match, 'lastindex', property.call (Match, Match._getLastIndex, Match._setLastIndex));
    var Regex =  __class__ ('Regex', [object], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, pattern, flags) {
    		if (!(__gt__ ((__and__ (flags, ASCII)), 0))) {
    			var flags = __call__ (__ior__, null, flags, UNICODE);
    		}
    		self._flags = flags;
    		var __left0__ = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._compileWrapper, __accu0__, pattern, flags);
    		}) ();
    		self._jsFlags = __left0__ [0];
    		self._obj = __left0__ [1];
    		self._jspattern = pattern;
    		self._pypattern = pattern;
    		var __left0__ = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._compileWrapper, __accu0__, __add__ (pattern, '|'), flags);
    		}) ();
    		var _ = __left0__ [0];
    		var groupCounterRegex = __left0__ [1];
    		self._groups = __sub__ ((function () {
    			var __accu0__ = groupCounterRegex;
    			return __call__ (__accu0__.exec, __accu0__, '');
    		}) ().length, 1);
    		self._groupindex = null;
    	});},
    	get _getPattern () {return __get__ (this, function (self) {
    		var ret = (function () {
    			var __accu0__ = self._pypattern;
    			return __call__ (__accu0__.py_replace, __accu0__, '\\', '\\\\');
    		}) ();
    		return ret;
    	});},
    	get _setPattern () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getFlags () {return __get__ (this, function (self) {
    		return self._flags;
    	});},
    	get _setFlags () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getGroups () {return __get__ (this, function (self) {
    		return self._groups;
    	});},
    	get _setGroups () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _getGroupIndex () {return __get__ (this, function (self) {
    		if (self._groupindex === null) {
    			return dict ({});
    		}
    		else {
    			return self._groupindex;
    		}
    	});},
    	get _setGroupIndex () {return __get__ (this, function (self, val) {
    		var __except0__ = __call__ (AttributeError, null, 'readonly attribute');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});},
    	get _compileWrapper () {return __get__ (this, function (self, pattern, flags) {
    		if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {			var flags = 0;
    		}		var jsFlags = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._convertFlags, __accu0__, flags);
    		}) ();
    		var rObj = null;
    		var errObj = null;
    		
    		                   try {
    		                     rObj = new RegExp(pattern, jsFlags);
    		                   } catch( err ) {
    		                     errObj = err;
    		                   }
    		                   
    		if (errObj !== null) {
    			var __except0__ = __call__ (error, null, errObj.message, errObj, pattern, flags);
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		return tuple ([jsFlags, rObj]);
    	});},
    	get _convertFlags () {return __get__ (this, function (self, flags) {
    		var bitmaps = [tuple ([DEBUG, '']), tuple ([IGNORECASE, 'i']), tuple ([MULTILINE, 'm']), tuple ([STICKY, 'y']), tuple ([GLOBAL, 'g']), tuple ([UNICODE, 'u'])];
    		var ret = (function () {
    			var __accu0__ = '';
    			return __call__ (__accu0__.join, __accu0__, (function () {
    				var __accu1__ = [];
    				var __iterable0__ = bitmaps;
    				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    					var x = __getitem__ (__iterable0__, __index0__);
    					if (__gt__ ((__and__ (__getitem__ (x, 0), flags)), 0)) {
    						(function () {
    							var __accu2__ = __accu1__;
    							return __call__ (__accu2__.append, __accu2__, __getitem__ (x, 1));
    						}) ();
    					}
    				}
    				return __accu1__;
    			}) ());
    		}) ();
    		return ret;
    	});},
    	get _getTargetStr () {return __get__ (this, function (self, string, pos, endpos) {
    		var endPtr = __call__ (len, null, string);
    		if (endpos !== null) {
    			if (__lt__ (endpos, endPtr)) {
    				var endPtr = endpos;
    			}
    		}
    		if (__lt__ (endPtr, 0)) {
    			var endPtr = 0;
    		}
    		var ret = __getslice__ (string, pos, endPtr, 1);
    		return ret;
    	});},
    	get _patternHasCaptures () {return __get__ (this, function (self) {
    		return __gt__ (self._groups, 0);
    	});},
    	get search () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		if (endpos === null) {
    			var endpos = __call__ (len, null, string);
    		}
    		var rObj = self._obj;
    		var m = (function () {
    			var __accu0__ = rObj;
    			return __call__ (__accu0__.exec, __accu0__, string);
    		}) ();
    		if (m) {
    			if (__lt__ (m.index, pos) || __gt__ (m.index, endpos)) {
    				return null;
    			}
    			else {
    				return __call__ (Match, null, m, string, pos, endpos, self, self._groupindex);
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get match () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = string;
    		if (endpos !== null) {
    			var target = __getslice__ (target, 0, endpos, 1);
    		}
    		else {
    			var endpos = __call__ (len, null, string);
    		}
    		var rObj = self._obj;
    		var m = (function () {
    			var __accu0__ = rObj;
    			return __call__ (__accu0__.exec, __accu0__, target);
    		}) ();
    		if (m) {
    			if (__eq__ (m.index, pos)) {
    				return __call__ (Match, null, m, string, pos, endpos, self, self._groupindex);
    			}
    			else {
    				return null;
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get fullmatch () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = string;
    		var strEndPos = __call__ (len, null, string);
    		if (endpos !== null) {
    			var target = __getslice__ (target, 0, endpos, 1);
    			var strEndPos = endpos;
    		}
    		var rObj = self._obj;
    		var m = (function () {
    			var __accu0__ = rObj;
    			return __call__ (__accu0__.exec, __accu0__, target);
    		}) ();
    		if (m) {
    			var obsEndPos = __add__ (m.index, __call__ (len, null, __getitem__ (m, 0)));
    			if (__eq__ (m.index, pos) && __eq__ (obsEndPos, strEndPos)) {
    				return __call__ (Match, null, m, string, pos, strEndPos, self, self._groupindex);
    			}
    			else {
    				return null;
    			}
    		}
    		else {
    			return null;
    		}
    	});},
    	get py_split () {return __get__ (this, function (self, string, maxsplit) {
    		if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {			var maxsplit = 0;
    		}		if (__lt__ (maxsplit, 0)) {
    			return [string];
    		}
    		var mObj = null;
    		var rObj = self._obj;
    		if (__eq__ (maxsplit, 0)) {
    			var mObj = (function () {
    				var __accu0__ = string;
    				return __call__ (__accu0__.py_split, __accu0__, rObj);
    			}) ();
    			return mObj;
    		}
    		else {
    			var flags = self._flags;
    			var flags = __call__ (__ior__, null, flags, GLOBAL);
    			var __left0__ = (function () {
    				var __accu0__ = self;
    				return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
    			}) ();
    			var _ = __left0__ [0];
    			var rObj = __left0__ [1];
    			var ret = [];
    			var lastM = null;
    			var cnt = 0;
    			for (var i = 0; i < maxsplit; i++) {
    				var m = (function () {
    					var __accu0__ = rObj;
    					return __call__ (__accu0__.exec, __accu0__, string);
    				}) ();
    				if (m) {
    					var cnt = __call__ (__iadd__, null, cnt, 1);
    					if (lastM !== null) {
    						var start = __add__ (lastM.index, __call__ (len, null, __getitem__ (lastM, 0)));
    						var head = __getslice__ (string, start, m.index, 1);
    						(function () {
    							var __accu0__ = ret;
    							return __call__ (__accu0__.append, __accu0__, head);
    						}) ();
    						if (__gt__ (__call__ (len, null, m), 1)) {
    							(function () {
    								var __accu0__ = ret;
    								return __call__ (__accu0__.extend, __accu0__, __getslice__ (m, 1, null, 1));
    							}) ();
    						}
    					}
    					else {
    						var head = __getslice__ (string, 0, m.index, 1);
    						(function () {
    							var __accu0__ = ret;
    							return __call__ (__accu0__.append, __accu0__, head);
    						}) ();
    						if (__gt__ (__call__ (len, null, m), 1)) {
    							(function () {
    								var __accu0__ = ret;
    								return __call__ (__accu0__.extend, __accu0__, __getslice__ (m, 1, null, 1));
    							}) ();
    						}
    					}
    					var lastM = m;
    				}
    				else {
    					break;
    				}
    			}
    			if (lastM !== null) {
    				var endPos = __add__ (lastM.index, __call__ (len, null, __getitem__ (lastM, 0)));
    				var end = __getslice__ (string, endPos, null, 1);
    				(function () {
    					var __accu0__ = ret;
    					return __call__ (__accu0__.append, __accu0__, end);
    				}) ();
    			}
    			return ret;
    		}
    	});},
    	get _findAllMatches () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var target = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._getTargetStr, __accu0__, string, pos, endpos);
    		}) ();
    		var flags = self._flags;
    		var flags = __call__ (__ior__, null, flags, GLOBAL);
    		var __left0__ = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
    		}) ();
    		var _ = __left0__ [0];
    		var rObj = __left0__ [1];
    		var ret = [];
    		while (true) {
    			var m = (function () {
    				var __accu0__ = rObj;
    				return __call__ (__accu0__.exec, __accu0__, target);
    			}) ();
    			if (m) {
    				(function () {
    					var __accu0__ = ret;
    					return __call__ (__accu0__.append, __accu0__, m);
    				}) ();
    			}
    			else {
    				break;
    			}
    		}
    		return ret;
    	});},
    	get findall () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof pos == 'undefined' || (pos != null && pos.hasOwnProperty ("__kwargtrans__"))) {			var pos = 0;
    		}		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var mlist = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._findAllMatches, __accu0__, string, pos, endpos);
    		}) ();
    		var mSelect = function (m) {
    			if (__gt__ (__call__ (len, null, m), 2)) {
    				return __call__ (tuple, null, __getslice__ (m, 1, null, 1));
    			}
    			else if (__eq__ (__call__ (len, null, m), 2)) {
    				return __getitem__ (m, 1);
    			}
    			else {
    				return __getitem__ (m, 0);
    			}
    		};
    		var ret = __call__ (map, null, mSelect, mlist);
    		return ret;
    	});},
    	get finditer () {return __get__ (this, function (self, string, pos, endpos) {
    		if (typeof endpos == 'undefined' || (endpos != null && endpos.hasOwnProperty ("__kwargtrans__"))) {			var endpos = null;
    		}		var mlist = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._findAllMatches, __accu0__, string, pos, endpos);
    		}) ();
    		var ret = __call__ (map, null, (function __lambda__ (m) {
    			return __call__ (Match, null, m, string, 0, __call__ (len, null, string), self, self._groupindex);
    		}), mlist);
    		return __call__ (py_iter, null, ret);
    	});},
    	get sub () {return __get__ (this, function (self, repl, string, count) {
    		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {			var count = 0;
    		}		var __left0__ = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.subn, __accu0__, repl, string, count);
    		}) ();
    		var ret = __left0__ [0];
    		var _ = __left0__ [1];
    		return ret;
    	});},
    	get subn () {return __get__ (this, function (self, repl, string, count) {
    		if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {			var count = 0;
    		}		var flags = self._flags;
    		var flags = __call__ (__ior__, null, flags, GLOBAL);
    		var __left0__ = (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._compileWrapper, __accu0__, self._jspattern, flags);
    		}) ();
    		var _ = __left0__ [0];
    		var rObj = __left0__ [1];
    		var ret = '';
    		var totalMatch = 0;
    		var lastEnd = __neg__ (1);
    		while (true) {
    			if (__gt__ (count, 0)) {
    				if (__ge__ (totalMatch, count)) {
    					if (__lt__ (lastEnd, 0)) {
    						return tuple ([ret, totalMatch]);
    					}
    					else {
    						var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, m.index, 1));
    						return tuple ([ret, totalMatch]);
    					}
    				}
    			}
    			var m = (function () {
    				var __accu0__ = rObj;
    				return __call__ (__accu0__.exec, __accu0__, string);
    			}) ();
    			if (m) {
    				if (__lt__ (lastEnd, 0)) {
    					var ret = __call__ (__iadd__, null, ret, __getslice__ (string, 0, m.index, 1));
    				}
    				else {
    					var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, m.index, 1));
    				}
    				if (__call__ (callable, null, repl)) {
    					var content = __call__ (repl, null, __call__ (Match, null, m, string, 0, __call__ (len, null, string), self, self._groupindex));
    					var ret = __call__ (__iadd__, null, ret, content);
    				}
    				else {
    					var ret = __call__ (__iadd__, null, ret, repl);
    				}
    				var totalMatch = __call__ (__iadd__, null, totalMatch, 1);
    				var lastEnd = __add__ (m.index, __call__ (len, null, __getitem__ (m, 0)));
    			}
    			else if (__lt__ (lastEnd, 0)) {
    				return tuple ([string, 0]);
    			}
    			else {
    				var ret = __call__ (__iadd__, null, ret, __getslice__ (string, lastEnd, null, 1));
    				return tuple ([ret, totalMatch]);
    			}
    		}
    	});}
    });
    Object.defineProperty (Regex, 'pattern', property.call (Regex, Regex._getPattern, Regex._setPattern));
    Object.defineProperty (Regex, 'flags', property.call (Regex, Regex._getFlags, Regex._setFlags));
    Object.defineProperty (Regex, 'groups', property.call (Regex, Regex._getGroups, Regex._setGroups));
    Object.defineProperty (Regex, 'groupindex', property.call (Regex, Regex._getGroupIndex, Regex._setGroupIndex));
    var PyRegExp =  __class__ ('PyRegExp', [Regex], {
    	__module__: __name__$3,
    	get __init__ () {return __get__ (this, function (self, pyPattern, flags) {
    		var __left0__ = __call__ (translate, null, pyPattern);
    		var jsTokens = __left0__ [0];
    		var inlineFlags = __left0__ [1];
    		var namedGroups = __left0__ [2];
    		var nCapGroups = __left0__ [3];
    		var n_splits = __left0__ [4];
    		var flags = __call__ (__ior__, null, flags, inlineFlags);
    		var jsPattern = (function () {
    			var __accu0__ = '';
    			return __call__ (__accu0__.join, __accu0__, jsTokens);
    		}) ();
    		(function () {
    			var __accu0__ = Regex;
    			return __call__ (__accu0__.__init__, __accu0__, self, jsPattern, flags);
    		}) ();
    		self._pypattern = pyPattern;
    		self._nsplits = n_splits;
    		self._jsTokens = jsTokens;
    		self._capgroups = nCapGroups;
    		self._groupindex = namedGroups;
    	});}
    });
    var compile = function (pattern, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	if (__and__ (flags, JSSTRICT)) {
    		var p = __call__ (Regex, null, pattern, flags);
    	}
    	else {
    		var p = __call__ (PyRegExp, null, pattern, flags);
    	}
    	return p;
    };
    var search = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.search, __accu0__, string);
    	}) ();
    };
    var match = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.match, __accu0__, string);
    	}) ();
    };
    var fullmatch = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.fullmatch, __accu0__, string);
    	}) ();
    };
    var py_split = function (pattern, string, maxsplit, flags) {
    	if (typeof maxsplit == 'undefined' || (maxsplit != null && maxsplit.hasOwnProperty ("__kwargtrans__"))) {		var maxsplit = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.py_split, __accu0__, string, maxsplit);
    	}) ();
    };
    var findall = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.findall, __accu0__, string);
    	}) ();
    };
    var finditer = function (pattern, string, flags) {
    	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.finditer, __accu0__, string);
    	}) ();
    };
    var sub = function (pattern, repl, string, count, flags) {
    	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {		var count = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.sub, __accu0__, repl, string, count);
    	}) ();
    };
    var subn = function (pattern, repl, string, count, flags) {
    	if (typeof count == 'undefined' || (count != null && count.hasOwnProperty ("__kwargtrans__"))) {		var count = 0;
    	}	if (typeof flags == 'undefined' || (flags != null && flags.hasOwnProperty ("__kwargtrans__"))) {		var flags = 0;
    	}	var p = __call__ (compile, null, pattern, flags);
    	return (function () {
    		var __accu0__ = p;
    		return __call__ (__accu0__.subn, __accu0__, repl, string, count);
    	}) ();
    };
    var escape = function (string) {
    	var ret = null;
    	var replfunc = function (m) {
    		if (__eq__ (__getitem__ (m, 0), '\\')) {
    			return '\\\\\\\\';
    		}
    		else {
    			return __add__ ('\\\\', __getitem__ (m, 0));
    		}
    	};
    	
    	        var r = /[^A-Za-z:;\d]/g;
    	        ret = string.replace(r, replfunc);
    	        
    	if (ret !== null) {
    		return ret;
    	}
    	else {
    		var __except0__ = __call__ (Exception, null, 'Failed to escape the passed string');
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    };
    var purge = function () {
    	// pass;
    };

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var math$1 = {};
    var random$2 = {};
    var re$1 = {};
    __nest__ (random$2, '', __module_random__);
    __nest__ (re$1, '', __module_re__);
    __nest__ (math$1, '', __module_math__);
    var __name__$4 = 'gls_poetry.gl_square';
    var GL_SQUARE_DEFS = tuple (['\n    1A  2C  3B\n    2B  3A  1C\n    3C  1B  2A \n    ', '\n    1A  2B  3C\n    2C  3A  1B\n    3B  1C  2A \n    ', '\n    2B  1C  3A\n    1A  3B  2C\n    3C  2A  1B \n    ', '\n    1D   3C  4A  2B\n    3B   1A  2C  4D\n    4C   2D  1B  3A\n    2A   4B  3D  1C\n    ', '\n    1A  2B  3C  4D\n    2C  1D  4A  3B\n    3D  4C  1B  2A\n    4B  3A  2D  1C\n    ']);
    var split_symbols = function (symbol_pair) {
    	var s = (function () {
    		var __accu0__ = (function () {
    			var __accu1__ = re$1;
    			return __call__ (__accu1__.match, __accu1__, '[0-9]+', symbol_pair);
    		}) ();
    		return __call__ (__accu0__.group, __accu0__);
    	}) ();
    	var t = __getitem__ ((function () {
    		var __accu0__ = symbol_pair;
    		return __call__ (__accu0__.py_split, __accu0__, s);
    	}) (), __neg__ (1));
    	return tuple ([s, t]);
    };
    var square_size = function (definition) {
    	return __call__ (len, null, (function () {
    		var __accu0__ = definition;
    		return __call__ (__accu0__.py_split, __accu0__);
    	}) ());
    };
    var cell_def = function (row, col, symbol_pair) {
    	var __left0__ = __call__ (split_symbols, null, symbol_pair);
    	var s = __left0__ [0];
    	var t = __left0__ [1];
    	return tuple ([row, col, s, t]);
    };
    var parse_square = function (definition) {
    	var symbol_pairs = (function () {
    		var __accu0__ = definition;
    		return __call__ (__accu0__.py_split, __accu0__);
    	}) ();
    	var n = __call__ (int, null, (function () {
    		var __accu0__ = math$1;
    		return __call__ (__accu0__.sqrt, __accu0__, __call__ (len, null, symbol_pairs));
    	}) ());
    	var square = __call__ (tuple, null, (function () {
    		var __accu0__ = [];
    		for (var r = 0; r < n; r++) {
    			for (var c = 0; c < n; c++) {
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (cell_def, null, r, c, __getitem__ (symbol_pairs, __add__ (__mul__ (r, n), c))));
    				}) ();
    			}
    		}
    		return __accu0__;
    	}) ());
    	return tuple ([n, square]);
    };
    var transpose = function (square, n) {
    	return __call__ (tuple, null, (function () {
    		var __accu0__ = [];
    		for (var r = 0; r < n; r++) {
    			(function () {
    				var __accu1__ = __accu0__;
    				return __call__ (__accu1__.append, __accu1__, __call__ (tuple, null, (function () {
    					var __accu2__ = [];
    					for (var c = 0; c < n; c++) {
    						(function () {
    							var __accu3__ = __accu2__;
    							return __call__ (__accu3__.append, __accu3__, __getitem__ (__getitem__ (square, c), r));
    						}) ();
    					}
    					return __accu2__;
    				}) ()));
    			}) ();
    		}
    		return __accu0__;
    	}) ());
    };
    var GLcell =  __class__ ('GLcell', [object], {
    	__module__: __name__$4,
    	get __init__ () {return __get__ (this, function (self, row, col, s, t, word) {
    		if (typeof word == 'undefined' || (word != null && word.hasOwnProperty ("__kwargtrans__"))) {			var word = null;
    		}		self.row = row;
    		self.col = col;
    		self.s = s;
    		self.t = t;
    		self.word = (word ? word : (function () {
    			var __accu0__ = '{}{}';
    			return __call__ (__accu0__.format, __accu0__, self.s, self.t);
    		}) ());
    	});},
    	get _get_label () {return __get__ (this, function (self) {
    		return (function () {
    			var __accu0__ = '{}{}';
    			return __call__ (__accu0__.format, __accu0__, self.s, self.t);
    		}) ();
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		return (function () {
    			var __accu0__ = '{}: {}';
    			return __call__ (__accu0__.format, __accu0__, self.label, self.word);
    		}) ();
    	});}
    });
    Object.defineProperty (GLcell, 'label', property.call (GLcell, GLcell._get_label));var GLpoemSquare =  __class__ ('GLpoemSquare', [object], {
    	__module__: __name__$4,
    	Invalid: __class__ ('Invalid', [Exception], {
    		__module__: __name__$4,
    		ERRORS: dict ({'index out of range': 'Index out of range - valid GL_SQUARE_DEF indicies are 0 - {}', 'insufficient vocabulary': 'Insufficient Vocabulary for chosen Square.  Vocabulary must contain at least {} words.', 'invalid definition': 'Given defintion is not a valid G-L square:\n{}\n{}'}),
    		get __init__ () {return __get__ (this, function (self, error) {
    			var args = tuple ([].slice.apply (arguments).slice (2));
    			__call__ (__call__ (__super__, null, GLpoemSquare.Invalid, '__init__'), null, self, (function () {
    				var __accu0__ = __getitem__ (self.ERRORS, error);
    				return __call__ (__accu0__.format, __accu0__, ...args);
    			}) ());
    		});}
    	}),
    	get __init__ () {return __get__ (this, function (self, definition, words) {
    		if (typeof words == 'undefined' || (words != null && words.hasOwnProperty ("__kwargtrans__"))) {			var words = __call__ (tuple, null);
    		}		var __left0__ = __call__ (parse_square, null, definition);
    		self.size = __left0__ [0];
    		var square = __left0__ [1];
    		self.sq_size = __mul__ (self.size, self.size);
    		var pad = __sub__ (self.sq_size, __call__ (len, null, words));
    		var words = __add__ (__call__ (list, null, words), __mul__ ([null], pad));
    		self.square = __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = __call__ (zip, null, square, words);
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var __left0__ = __getitem__ (__iterable0__, __index0__);
    				var cell = __left0__ [0];
    				var word = __left0__ [1];
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (GLcell, null, ...cell, word));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    		self.validation_error = null;
    		if (!((function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.is_valid, __accu0__);
    		}) ())) {
    			var __except0__ = (function () {
    				var __accu0__ = GLpoemSquare;
    				return __call__ (__accu0__.Invalid, __accu0__, 'invalid definition', definition, self.validation_error);
    			}) ();
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    	});},
    	get __str__ () {return __get__ (this, function (self) {
    		var rows = __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.rows, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var row = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (tuple, null, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = row;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, __call__ (str, null, cell));
    							}) ();
    						}
    						return py_iter (__accu2__);
    					}) ()));
    				}) ();
    			}
    			return py_iter (__accu0__);
    		}) ());
    		var cell_width = __call__ (max, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = rows;
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var row = __getitem__ (__iterable0__, __index0__);
    				var __iterable1__ = row;
    				for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    					var cell = __getitem__ (__iterable1__, __index1__);
    					(function () {
    						var __accu1__ = __accu0__;
    						return __call__ (__accu1__.append, __accu1__, __call__ (len, null, cell));
    					}) ();
    				}
    			}
    			return py_iter (__accu0__);
    		}) ());
    		var square_width = __add__ (__mul__ (__add__ (cell_width, 3), self.size), 1);
    		var divider = __add__ (__mul__ ('-', square_width), '\n');
    		var square = '';
    		var __iterable0__ = rows;
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var row = __getitem__ (__iterable0__, __index0__);
    			var row_str = '| ';
    			var __iterable1__ = row;
    			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    				var cell = __getitem__ (__iterable1__, __index1__);
    				var row_str = __call__ (__iadd__, null, row_str, __add__ (cell, __add__ (__mul__ (' ', __sub__ (cell_width, __call__ (len, null, cell))), ' | ')));
    			}
    			var square = __call__ (__iadd__, null, square, __add__ (__add__ (row_str, '\n'), divider));
    		}
    		return __add__ (divider, square);
    	});},
    	get get_cell () {return __get__ (this, function (self, row, col) {
    		return __getitem__ (self.square, __add__ (__mul__ (row, self.size), col));
    	});},
    	get vocabulary () {return __get__ (this, function (self) {
    		return __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = self.square;
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var cell = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, cell.word);
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    	});},
    	get set_vocabulary () {return __get__ (this, function (self, words) {
    		if (!(__ge__ (__call__ (len, null, words), self.sq_size))) {
    			var __except0__ = (function () {
    				var __accu0__ = GLpoemSquare;
    				return __call__ (__accu0__.Invalid, __accu0__, 'insufficient vocabulary', self.sq_size);
    			}) ();
    			__except0__.__cause__ = null;
    			throw __except0__;
    		}
    		var __iterable0__ = __call__ (zip, null, self.square, words);
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var __left0__ = __getitem__ (__iterable0__, __index0__);
    			var cell = __left0__ [0];
    			var word = __left0__ [1];
    			cell.word = word;
    		}
    	});},
    	get permute_vocabulary () {return __get__ (this, function (self) {
    		var words = __call__ (list, null, (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.vocabulary, __accu0__);
    		}) ());
    		(function () {
    			var __accu0__ = random$2;
    			return __call__ (__accu0__.shuffle, __accu0__, words);
    		}) ();
    		(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.set_vocabulary, __accu0__, words);
    		}) ();
    	});},
    	get rows () {return __get__ (this, function (self) {
    		return __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			for (var r = 0; r < self.size; r++) {
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (tuple, null, __call__ (filter, null, (function __lambda__ (cell) {
    						return (__eq__ (cell.row, r) ? true : false);
    					}), self.square)));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    	});},
    	get columns () {return __get__ (this, function (self) {
    		return __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			for (var c = 0; c < self.size; c++) {
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (tuple, null, __call__ (filter, null, (function __lambda__ (cell) {
    						return (__eq__ (cell.col, c) ? true : false);
    					}), self.square)));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    	});},
    	get s_order_cells () {return __get__ (this, function (self) {
    		var s_cols = __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.columns, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var col = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (sorted, null, col, __kwargtrans__ ({key: (function __lambda__ (cell) {
    						return cell.s;
    					})})));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    		return __call__ (transpose, null, s_cols, self.size);
    	});},
    	get t_order_cells () {return __get__ (this, function (self) {
    		var t_rows = __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.rows, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var row = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (sorted, null, row, __kwargtrans__ ({key: (function __lambda__ (cell) {
    						return cell.t;
    					})})));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    		return __call__ (transpose, null, t_rows, self.size);
    	});},
    	get _stanza () {return __get__ (this, function (self, ordering) {
    		return __call__ (tuple, null, (function () {
    			var __accu0__ = [];
    			var __iterable0__ = __call__ (ordering, null);
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var phrase = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, __call__ (tuple, null, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = phrase;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, cell.word);
    							}) ();
    						}
    						return __accu2__;
    					}) ()));
    				}) ();
    			}
    			return __accu0__;
    		}) ());
    	});},
    	get stanzas () {return __get__ (this, function (self) {
    		return tuple ([(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._stanza, __accu0__, self.s_order_cells);
    		}) (), (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._stanza, __accu0__, self.t_order_cells);
    		}) ()]);
    	});},
    	get _get_stanza_as_str () {return __get__ (this, function (self, ordering) {
    		var _as_poetry_line = function (phrase) {
    			return (function () {
    				var __accu0__ = (function () {
    					var __accu1__ = ' ';
    					return __call__ (__accu1__.join, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable0__ = phrase;
    						for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    							var word = __getitem__ (__iterable0__, __index0__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, word);
    							}) ();
    						}
    						return __accu2__;
    					}) ());
    				}) ();
    				return __call__ (__accu0__.capitalize, __accu0__);
    			}) ();
    		};
    		return (function () {
    			var __accu0__ = '\n';
    			return __call__ (__accu0__.join, __accu0__, (function () {
    				var __accu1__ = [];
    				var __iterable0__ = (function () {
    					var __accu2__ = self;
    					return __call__ (__accu2__._stanza, __accu2__, ordering);
    				}) ();
    				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    					var phrase = __getitem__ (__iterable0__, __index0__);
    					(function () {
    						var __accu2__ = __accu1__;
    						return __call__ (__accu2__.append, __accu2__, __call__ (_as_poetry_line, null, phrase));
    					}) ();
    				}
    				return __accu1__;
    			}) ());
    		}) ();
    	});},
    	get get_poem_stanzas () {return __get__ (this, function (self) {
    		return tuple ([(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._get_stanza_as_str, __accu0__, self.s_order_cells);
    		}) (), (function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__._get_stanza_as_str, __accu0__, self.t_order_cells);
    		}) ()]);
    	});},
    	get get_poem () {return __get__ (this, function (self) {
    		return __add__ ((function () {
    			var __accu0__ = '\n\n';
    			return __call__ (__accu0__.join, __accu0__, (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.get_poem_stanzas, __accu1__);
    			}) ());
    		}) (), '\n');
    	});},
    	get _validate () {return __get__ (this, function (self) {
    		var sxr_sets = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.rows, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var row = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = row;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, cell.s);
    							}) ();
    						}
    						return set (__accu2__);
    					}) ());
    				}) ();
    			}
    			return __accu0__;
    		}) ();
    		var txr_sets = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.rows, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var row = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = row;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, cell.t);
    							}) ();
    						}
    						return set (__accu2__);
    					}) ());
    				}) ();
    			}
    			return __accu0__;
    		}) ();
    		var sxc_sets = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.columns, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var col = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = col;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, cell.s);
    							}) ();
    						}
    						return set (__accu2__);
    					}) ());
    				}) ();
    			}
    			return __accu0__;
    		}) ();
    		var txc_sets = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self;
    				return __call__ (__accu1__.columns, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var col = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, (function () {
    						var __accu2__ = [];
    						var __iterable1__ = col;
    						for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    							var cell = __getitem__ (__iterable1__, __index1__);
    							(function () {
    								var __accu3__ = __accu2__;
    								return __call__ (__accu3__.append, __accu3__, cell.t);
    							}) ();
    						}
    						return set (__accu2__);
    					}) ());
    				}) ();
    			}
    			return __accu0__;
    		}) ();
    		var sxt_set = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = self.square;
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var cell = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, tuple ([cell.s, cell.t]));
    				}) ();
    			}
    			return set (__accu0__);
    		}) ();
    	});},
    	get is_valid () {return __get__ (this, function (self) {
    		try {
    			(function () {
    				var __accu0__ = self;
    				return __call__ (__accu0__._validate, __accu0__);
    			}) ();
    			return true;
    		}
    		catch (__except0__) {
    			if (isinstance (__except0__, AssertionError)) {
    				var e = __except0__;
    				self.validation_error = __call__ (str, null, e);
    				return false;
    			}
    			else {
    				throw __except0__;
    			}
    		}
    	});}
    });
    var get_GLpoemSquare = function (index, vocab) {
    	if (!((__le__ (0, index) && __lt__ (index, __call__ (len, null, GL_SQUARE_DEFS))))) {
    		var __except0__ = (function () {
    			var __accu0__ = GLpoemSquare;
    			return __call__ (__accu0__.Invalid, __accu0__, 'index out of range', __sub__ (__call__ (len, null, GL_SQUARE_DEFS), 1));
    		}) ();
    		__except0__.__cause__ = null;
    		throw __except0__;
    	}
    	var square = __getitem__ (GL_SQUARE_DEFS, index);
    	return __call__ (GLpoemSquare, null, square, vocab);
    };

    // Transcrypt'ed from Python, 2019-05-15 15:36:05
    var __name__$5 = '__main__';
    var html_newlines = function (text) {
    	return (function () {
    		var __accu0__ = text;
    		return __call__ (__accu0__.py_replace, __accu0__, '\n', '<br>');
    	}) ();
    };
    var get_vocabulary = function (poem_square, n) {
    	var vocabulary = (poem_square.selected_vocabulary ? __call__ (Vocabulary, null, poem_square.selected_vocabulary) : __call__ (Vocabulary, null));
    	return (function () {
    		var __accu0__ = vocabulary;
    		return __call__ (__accu0__.permutation, __accu0__, n);
    	}) ();
    };
    var GLS_Component =  __class__ ('GLS_Component', [object], {
    	__module__: __name__$5,
    	get __init__ () {return __get__ (this, function (self, gl_poem_square) {
    		self.poem_square = gl_poem_square;
    	});},
    	get render () {return __get__ (this, function (self, element) {
    		// pass;
    	});}
    });
    var GL_Square =  __class__ ('GL_Square', [GLS_Component], {
    	__module__: __name__$5,
    	CELL_TEMPLATE: '<span class="cell-label">{}</span><span class="cell-word">{}</span>',
    	get render () {return __get__ (this, function (self, table) {
    		var __iterable0__ = (function () {
    			var __accu0__ = self.poem_square;
    			return __call__ (__accu0__.rows, __accu0__);
    		}) ();
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var row = __getitem__ (__iterable0__, __index0__);
    			var tr = (function () {
    				var __accu0__ = table;
    				return __call__ (__accu0__.insertRow, __accu0__, __neg__ (1));
    			}) ();
    			var __iterable1__ = row;
    			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    				var cell = __getitem__ (__iterable1__, __index1__);
    				var td = (function () {
    					var __accu0__ = tr;
    					return __call__ (__accu0__.insertCell, __accu0__, __neg__ (1));
    				}) ();
    				td.innerHTML = (function () {
    					var __accu0__ = self.CELL_TEMPLATE;
    					return __call__ (__accu0__.format, __accu0__, cell.label, cell.word);
    				}) ();
    			}
    		}
    		return table;
    	});}
    });
    var GL_Poem =  __class__ ('GL_Poem', [GLS_Component], {
    	__module__: __name__$5,
    	STANZA_TEMPLATE: '<p class="stanza">{}</p>',
    	get render () {return __get__ (this, function (self, blockquote) {
    		var stanzas = (function () {
    			var __accu0__ = [];
    			var __iterable0__ = (function () {
    				var __accu1__ = self.poem_square;
    				return __call__ (__accu1__.get_poem_stanzas, __accu1__);
    			}) ();
    			for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    				var stanza = __getitem__ (__iterable0__, __index0__);
    				(function () {
    					var __accu1__ = __accu0__;
    					return __call__ (__accu1__.append, __accu1__, (function () {
    						var __accu2__ = self.STANZA_TEMPLATE;
    						return __call__ (__accu2__.format, __accu2__, __call__ (html_newlines, null, stanza));
    					}) ());
    				}) ();
    			}
    			return __accu0__;
    		}) ();
    		var poem = (function () {
    			var __accu0__ = '\n';
    			return __call__ (__accu0__.join, __accu0__, stanzas);
    		}) ();
    		blockquote.innerHTML = poem;
    		return blockquote;
    	});}
    });
    var GLS_Control =  __class__ ('GLS_Control', [GLS_Component], {
    	__module__: __name__$5,
    	get do_it () {return __get__ (this, function (self, event) {
    		var __except0__ = NotImplemented;
    		__except0__.__cause__ = null;
    		throw __except0__;
    	});}
    });
    var GL_Permute_Poem =  __class__ ('GL_Permute_Poem', [GLS_Control], {
    	__module__: __name__$5,
    	get do_it () {return __get__ (this, function (self, event) {
    		(function () {
    			var __accu0__ = self.poem_square;
    			return __call__ (__accu0__.permute_vocabulary, __accu0__);
    		}) ();
    		return true;
    	});}
    });
    var GL_Randomize_Vocabulary =  __class__ ('GL_Randomize_Vocabulary', [GLS_Control], {
    	__module__: __name__$5,
    	get do_it () {return __get__ (this, function (self, event) {
    		var vocabulary = __call__ (get_vocabulary, null, self.poem_square, self.poem_square.sq_size);
    		(function () {
    			var __accu0__ = self.poem_square;
    			return __call__ (__accu0__.set_vocabulary, __accu0__, vocabulary);
    		}) ();
    		return true;
    	});}
    });
    var GL_Select_Vocabulary =  __class__ ('GL_Select_Vocabulary', [GLS_Control], {
    	__module__: __name__$5,
    	OPTION_TEMPLATE: '<option value="{}">{} Words</option>',
    	get __init__ () {return __get__ (this, function (self, gl_poem_square, select) {
    		__call__ (__call__ (__super__, null, GL_Select_Vocabulary, '__init__'), null, self, gl_poem_square);
    		var options = (function () {
    			var __accu0__ = '\n';
    			return __call__ (__accu0__.join, __accu0__, (function () {
    				var __accu1__ = [];
    				var __iterable0__ = (function () {
    					var __accu2__ = VOCABULARIES;
    					return __call__ (__accu2__.py_keys, __accu2__);
    				}) ();
    				for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    					var py_name = __getitem__ (__iterable0__, __index0__);
    					(function () {
    						var __accu2__ = __accu1__;
    						return __call__ (__accu2__.append, __accu2__, (function () {
    							var __accu3__ = self.OPTION_TEMPLATE;
    							return __call__ (__accu3__.format, __accu3__, py_name, py_name);
    						}) ());
    					}) ();
    				}
    				return __accu1__;
    			}) ());
    		}) ();
    		select.innerHTML = options;
    	});},
    	get do_it () {return __get__ (this, function (self, event) {
    		if (event.target.value) {
    			self.poem_square.selected_vocabulary = event.target.value;
    			return true;
    		}
    		else {
    			return false;
    		}
    	});}
    });
    var GL_Edit_Vocabulary =  __class__ ('GL_Edit_Vocabulary', [GLS_Component], {
    	__module__: __name__$5,
    	TA_TEMPLATE: '<textarea rows="16" cols="25">{}</textarea>',
    	get render () {return __get__ (this, function (self, form) {
    		form.innerHTML = (function () {
    			var __accu0__ = self.TA_TEMPLATE;
    			return __call__ (__accu0__.format, __accu0__, (function () {
    				var __accu1__ = '\n';
    				return __call__ (__accu1__.join, __accu1__, (function () {
    					var __accu2__ = self.poem_square;
    					return __call__ (__accu2__.vocabulary, __accu2__);
    				}) ());
    			}) ());
    		}) ();
    		return form;
    	});},
    	get do_it () {return __get__ (this, function (self, event) {
    		var textarea = event.target;
    		var words = (function () {
    			var __accu0__ = textarea.value;
    			return __call__ (__accu0__.py_split, __accu0__, '\n');
    		}) ();
    		try {
    			(function () {
    				var __accu0__ = self.poem_square;
    				return __call__ (__accu0__.set_vocabulary, __accu0__, words);
    			}) ();
    			return true;
    		}
    		catch (__except0__) {
    			if (isinstance (__except0__, GLpoemSquare.Invalid)) {
    				return false;
    			}
    			else {
    				throw __except0__;
    			}
    		}
    	});}
    });
    var GL_Select_Square =  __class__ ('GL_Select_Square', [GLS_Control], {
    	__module__: __name__$5,
    	RADIO_TEMPLATE: '<input type="radio" name="gl-square" value="{}" {}>',
    	get __init__ () {return __get__ (this, function (self, gl_poem_square, form) {
    		__call__ (__call__ (__super__, null, GL_Select_Square, '__init__'), null, self, gl_poem_square);
    		self.radios = [];
    		var table = (function () {
    			var __accu0__ = document;
    			return __call__ (__accu0__.createElement, __accu0__, 'TABLE');
    		}) ();
    		var __iterable0__ = __call__ (zip, null, GL_SQUARE_DEFS, __call__ (range, null, __call__ (len, null, GL_SQUARE_DEFS)));
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var __left0__ = __getitem__ (__iterable0__, __index0__);
    			var definition = __left0__ [0];
    			var index = __left0__ [1];
    			if (!(__mod__ (index, 2))) {
    				var tr = (function () {
    					var __accu0__ = table;
    					return __call__ (__accu0__.insertRow, __accu0__, __neg__ (1));
    				}) ();
    			}
    			var td = (function () {
    				var __accu0__ = tr;
    				return __call__ (__accu0__.insertCell, __accu0__, __neg__ (1));
    			}) ();
    			td.innerHTML = (function () {
    				var __accu0__ = self.RADIO_TEMPLATE;
    				return __call__ (__accu0__.format, __accu0__, index, (index === 0 ? 'checked' : ''));
    			}) ();
    			__setitem__ (self.radios, index, __getitem__ (td.children, 0));
    			var td = (function () {
    				var __accu0__ = tr;
    				return __call__ (__accu0__.insertCell, __accu0__, __neg__ (1));
    			}) ();
    			(function () {
    				var __accu0__ = td;
    				return __call__ (__accu0__.appendChild, __accu0__, (function () {
    					var __accu1__ = self;
    					return __call__ (__accu1__._get_square_element, __accu1__, definition);
    				}) ());
    			}) ();
    		}
    		form.innerHTML = '';
    		(function () {
    			var __accu0__ = form;
    			return __call__ (__accu0__.appendChild, __accu0__, table);
    		}) ();
    	});},
    	get _get_square_element () {return __get__ (this, function (self, definition) {
    		var table = (function () {
    			var __accu0__ = document;
    			return __call__ (__accu0__.createElement, __accu0__, 'TABLE');
    		}) ();
    		var square = __call__ (GLpoemSquare, null, definition);
    		var __iterable0__ = (function () {
    			var __accu0__ = square;
    			return __call__ (__accu0__.rows, __accu0__);
    		}) ();
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var row = __getitem__ (__iterable0__, __index0__);
    			var tr = (function () {
    				var __accu0__ = table;
    				return __call__ (__accu0__.insertRow, __accu0__, __neg__ (1));
    			}) ();
    			var __iterable1__ = row;
    			for (var __index1__ = 0; __index1__ < len (__iterable1__); __index1__++) {
    				var cell = __getitem__ (__iterable1__, __index1__);
    				var td = (function () {
    					var __accu0__ = tr;
    					return __call__ (__accu0__.insertCell, __accu0__, __neg__ (1));
    				}) ();
    				td.innerHTML = cell.label;
    			}
    		}
    		return table;
    	});},
    	get do_it () {return __get__ (this, function (self, event) {
    		var selected = __call__ (filter, null, (function __lambda__ (radio) {
    			return radio.checked;
    		}), self.radios);
    		if (selected && (__le__ (0, __getitem__ (selected, 0).value) && __lt__ (__getitem__ (selected, 0).value, __call__ (len, null, GL_SQUARE_DEFS)))) {
    			var definition = __getitem__ (GL_SQUARE_DEFS, __getitem__ (selected, 0).value);
    			var vocabulary = __call__ (list, null, (function () {
    				var __accu0__ = self.poem_square;
    				return __call__ (__accu0__.vocabulary, __accu0__);
    			}) ());
    			var pad = __sub__ (__call__ (square_size, null, definition), __call__ (len, null, vocabulary));
    			if (__gt__ (pad, 0)) {
    				var vocabulary = __call__ (__iadd__, null, vocabulary, __call__ (list, null, __call__ (get_vocabulary, null, self.poem_square, pad)));
    			}
    			(function () {
    				var __accu0__ = self.poem_square;
    				return __call__ (__accu0__.__init__, __accu0__, definition, vocabulary);
    			}) ();
    			return true;
    		}
    		else {
    			return false;
    		}
    	});}
    });
    var DOM_View =  __class__ ('DOM_View', [object], {
    	__module__: __name__$5,
    	get __init__ () {return __get__ (this, function (self, component, container, element_type) {
    		self.component = component;
    		self.container = container;
    		self.element_type = element_type;
    	});},
    	get render () {return __get__ (this, function (self) {
    		self.container.innerHTML = '';
    		var el = (function () {
    			var __accu0__ = document;
    			return __call__ (__accu0__.createElement, __accu0__, self.element_type);
    		}) ();
    		(function () {
    			var __accu0__ = self.container;
    			return __call__ (__accu0__.appendChild, __accu0__, (function () {
    				var __accu1__ = self.component;
    				return __call__ (__accu1__.render, __accu1__, el);
    			}) ());
    		}) ();
    	});}
    });
    var DOM_Control =  __class__ ('DOM_Control', [object], {
    	__module__: __name__$5,
    	get __init__ () {return __get__ (this, function (self, control, dom_widget, handler, callback) {
    		if (typeof handler == 'undefined' || (handler != null && handler.hasOwnProperty ("__kwargtrans__"))) {			var handler = 'onclick';
    		}		if (typeof callback == 'undefined' || (callback != null && callback.hasOwnProperty ("__kwargtrans__"))) {			var callback = null;
    		}		var handle_event = function (event) {
    			if ((function () {
    				var __accu0__ = self.control;
    				return __call__ (__accu0__.do_it, __accu0__, event);
    			}) () && self.callback) {
    				(function () {
    					var __accu0__ = self;
    					return __call__ (__accu0__.callback, __accu0__);
    				}) ();
    			}
    		};
    		self.control = control;
    		self.dom_widget = dom_widget;
    		self.callback = callback;
    		__call__ (setattr, null, self.dom_widget, handler, handle_event);
    	});}
    });
    var DOM_Controls = function (control, widgets, handler, callback) {
    	if (typeof handler == 'undefined' || (handler != null && handler.hasOwnProperty ("__kwargtrans__"))) {		var handler = 'onclick';
    	}	if (typeof callback == 'undefined' || (callback != null && callback.hasOwnProperty ("__kwargtrans__"))) {		var callback = null;
    	}	var controls = [];
    	var __iterable0__ = widgets;
    	for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    		var widget = __getitem__ (__iterable0__, __index0__);
    		(function () {
    			var __accu0__ = controls;
    			return __call__ (__accu0__.append, __accu0__, __call__ (DOM_Control, null, control, widget, handler, callback));
    		}) ();
    	}
    	return controls;
    };
    var GLS_PoemApp_ViewController =  __class__ ('GLS_PoemApp_ViewController', [object], {
    	__module__: __name__$5,
    	get __init__ () {return __get__ (this, function (self) {
    		var dom_element = (function __lambda__ (py_selector) {
    			return (function () {
    				var __accu0__ = document;
    				return __call__ (__accu0__.getElementById, __accu0__, py_selector);
    			}) ();
    		});
    		var selected_vocabulary = __getitem__ (__call__ (tuple, null, (function () {
    			var __accu0__ = VOCABULARIES;
    			return __call__ (__accu0__.py_keys, __accu0__);
    		}) ()), 0);
    		var vocabulary = (function () {
    			var __accu0__ = __call__ (Vocabulary, null, selected_vocabulary);
    			return __call__ (__accu0__.permutation, __accu0__, 9);
    		}) ();
    		self.gl_poem_square = __call__ (get_GLpoemSquare, null, 0, vocabulary);
    		self.gl_poem_square.selected_vocabulary = selected_vocabulary;
    		var square = __call__ (GL_Square, null, self.gl_poem_square);
    		var poem = __call__ (GL_Poem, null, self.gl_poem_square);
    		var edit_vocab = __call__ (GL_Edit_Vocabulary, null, self.gl_poem_square);
    		var slct_vocab = __call__ (GL_Select_Vocabulary, null, self.gl_poem_square, __call__ (dom_element, null, 'GL-select-vocabulary'));
    		var permute = __call__ (GL_Permute_Poem, null, self.gl_poem_square);
    		var randomize = __call__ (GL_Randomize_Vocabulary, null, self.gl_poem_square);
    		var slct_square = __call__ (GL_Select_Square, null, self.gl_poem_square, __call__ (dom_element, null, 'GL-select_square'));
    		self.views = dict ({'square': __call__ (DOM_View, null, square, __call__ (dom_element, null, 'GL-Square'), 'TABLE'), 'poem': __call__ (DOM_View, null, poem, __call__ (dom_element, null, 'GL-Poem'), 'BLOCKQUOTE'), 'edit_vocab': __call__ (DOM_View, null, edit_vocab, __call__ (dom_element, null, 'GL-edit-vocabulary'), 'FORM')});
    		self.controls = dict ({'permute': __call__ (DOM_Control, null, permute, __call__ (dom_element, null, 'GL-permute-poem'), 'onclick', self.update_DOM), 'randomize': __call__ (DOM_Control, null, randomize, __call__ (dom_element, null, 'GL-randomize-vocabulary'), 'onclick', self.update_DOM), 'slct_vocab': __call__ (DOM_Control, null, slct_vocab, __call__ (dom_element, null, 'GL-select-vocabulary'), 'onchange', self.update_DOM), 'edit_vocab': __call__ (DOM_Control, null, edit_vocab, __call__ (dom_element, null, 'GL-edit-vocabulary'), 'onchange', self.update_DOM), 'ss_radios': __call__ (DOM_Controls, null, slct_square, slct_square.radios, 'onclick', self.update_DOM)});
    		(function () {
    			var __accu0__ = self;
    			return __call__ (__accu0__.update_DOM, __accu0__);
    		}) ();
    	});},
    	get update_DOM () {return __get__ (this, function (self) {
    		var __iterable0__ = (function () {
    			var __accu0__ = self.views;
    			return __call__ (__accu0__.py_values, __accu0__);
    		}) ();
    		for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
    			var view = __getitem__ (__iterable0__, __index0__);
    			(function () {
    				var __accu0__ = view;
    				return __call__ (__accu0__.render, __accu0__);
    			}) ();
    		}
    	});}
    });
    window.onload = GLS_PoemApp_ViewController;

    exports.DOM_Control = DOM_Control;
    exports.DOM_Controls = DOM_Controls;
    exports.DOM_View = DOM_View;
    exports.GLS_Component = GLS_Component;
    exports.GLS_Control = GLS_Control;
    exports.GLS_PoemApp_ViewController = GLS_PoemApp_ViewController;
    exports.GL_Edit_Vocabulary = GL_Edit_Vocabulary;
    exports.GL_Permute_Poem = GL_Permute_Poem;
    exports.GL_Poem = GL_Poem;
    exports.GL_Randomize_Vocabulary = GL_Randomize_Vocabulary;
    exports.GL_Select_Square = GL_Select_Square;
    exports.GL_Select_Vocabulary = GL_Select_Vocabulary;
    exports.GL_Square = GL_Square;
    exports.get_vocabulary = get_vocabulary;
    exports.html_newlines = html_newlines;

    return exports;

}({}));
