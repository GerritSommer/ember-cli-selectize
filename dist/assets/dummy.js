/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/ember-selectize', ['exports', 'ember-cli-selectize/components/ember-selectize'], function (exports, EmberSelectizeComponent) {

	'use strict';

	exports['default'] = EmberSelectizeComponent['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  /* global alert */
  exports['default'] = Ember['default'].Controller.extend({
    names: Ember['default'].A(['Tom', 'Yehuda', 'Mike']),
    items: Ember['default'].A([Ember['default'].Object.create({
      id: 1,
      label: 'Item 1'
    }), Ember['default'].Object.create({
      id: 2,
      label: 'Item 2'
    }), Ember['default'].Object.create({
      id: 3,
      label: 'Item 3'
    }), Ember['default'].Object.create({
      id: 4,
      label: 'Item 4'
    })]),

    getOption: function getOption(item, escape) {
      return '<div class="hello"><i>' + escape(item.value) + '</i>) ' + escape(item.label) + '</div>';
    },

    taggedContent: Ember['default'].A(),
    taggedValues: Ember['default'].A(),
    itemValue: 3,
    taggedValuesString: Ember['default'].computed('taggedValues.[]', function () {
      return this.get('taggedValues').join(', ');
    }),

    actions: {
      createAction: function createAction(str) {
        alert(str);
      },
      selectItem: function selectItem(v) {
        this.set('itemValue', v);
      },

      createTag: function createTag(input) {
        this.get('taggedContent').addObject(input);
        this.get('taggedValues').addObject(input);
      }
    }
  });

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-cli-selectize/tests/modules/ember-cli-selectize/components/ember-selectize.jshint', function () {

  'use strict';

  module('JSHint - modules/ember-cli-selectize/components');
  test('modules/ember-cli-selectize/components/ember-selectize.js should pass jshint', function () {
    ok(true, 'modules/ember-cli-selectize/components/ember-selectize.js should pass jshint.');
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: 'App Version',
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.1",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 17
            },
            "end": {
              "line": 50,
              "column": 62
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
          return morphs;
        },
        statements: [
          ["content","v.label"]
        ],
        locals: ["v"],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.1",
          "loc": {
            "source": null,
            "start": {
              "line": 64,
              "column": 17
            },
            "end": {
              "line": 64,
              "column": 62
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
          return morphs;
        },
        statements: [
          ["content","v.label"]
        ],
        locals: ["v"],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 94,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1,"id","title");
        var el2 = dom.createTextNode("Selectize test");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Normal usage with strings");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Normal usage with objects + ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("selection");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Normal usage with objects + ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("value");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Select 1");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("Select 3");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Multiple usage with objects + ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("selection");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Multiple usage with objects + ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("code");
        var el3 = dom.createTextNode("optionFunction");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" rendering");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Delimiter example");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Selected: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [20]);
        var element1 = dom.childAt(fragment, [22]);
        var morphs = new Array(14);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [6]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [10]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [12]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [16]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [18]),1,1);
        morphs[6] = dom.createElementMorph(element0);
        morphs[7] = dom.createElementMorph(element1);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [26]),1,1);
        morphs[9] = dom.createMorphAt(dom.childAt(fragment, [28, 1]),0,0);
        morphs[10] = dom.createMorphAt(dom.childAt(fragment, [32]),1,1);
        morphs[11] = dom.createMorphAt(dom.childAt(fragment, [34, 1]),0,0);
        morphs[12] = dom.createMorphAt(dom.childAt(fragment, [38]),1,1);
        morphs[13] = dom.createMorphAt(dom.childAt(fragment, [40]),1,1);
        return morphs;
      },
      statements: [
        ["inline","ember-selectize",[],["content",["subexpr","@mut",[["get","controller.names"]],[]],"selection",["subexpr","@mut",[["get","name"]],[]],"placeholder","Select a name"]],
        ["content","name"],
        ["inline","ember-selectize",[],["content",["subexpr","@mut",[["get","controller.items"]],[]],"optionValuePath","content.id","optionLabelPath","content.label","selection",["subexpr","@mut",[["get","item"]],[]],"create-item","createAction","placeholder","Select an item"]],
        ["content","item.label"],
        ["inline","ember-selectize",[],["content",["subexpr","@mut",[["get","controller.items"]],[]],"optionValuePath","content.id","optionLabelPath","content.label","value",["subexpr","@mut",[["get","controller.itemValue"]],[]],"create-item","createAction","placeholder","Select an item"]],
        ["content","itemValue"],
        ["element","action",["selectItem",1],[]],
        ["element","action",["selectItem",3],[]],
        ["inline","ember-selectize",[],["multiple",true,"content",["subexpr","@mut",[["get","controller.items"]],[]],"optionValuePath","content.id","optionLabelPath","content.label","selection",["subexpr","@mut",[["get","itemValues"]],[]],"create","createAction","placeholder","Select an item"]],
        ["block","each",[["get","itemValues"]],[],0,null],
        ["inline","ember-selectize",[],["multiple",true,"content",["subexpr","@mut",[["get","controller.items"]],[]],"optionValuePath","content.id","optionLabelPath","content.label","selection",["subexpr","@mut",[["get","itemValues"]],[]],"create","createAction","optionFunction",["subexpr","@mut",[["get","getOption"]],[]],"placeholder","Select an item"]],
        ["block","each",[["get","itemValues"]],[],1,null],
        ["inline","ember-selectize",[],["persist",false,"multiple",true,"content",["subexpr","@mut",[["get","taggedContent"]],[]],"selection",["subexpr","@mut",[["get","taggedValues"]],[]],"delimiter",",","create-item","createTag"]],
        ["content","taggedValuesString"]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('dummy/templates/test', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/test.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Hi\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('app.js should pass jshint', function() { 
    ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  module('JSHint - controllers');
  test('controllers/application.js should pass jshint', function() { 
    ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/resolver.js should pass jshint', function() { 
    ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  module('JSHint - helpers');
  test('helpers/start-app.js should pass jshint', function() { 
    ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('router.js should pass jshint', function() { 
    ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  module('JSHint - .');
  test('test-helper.js should pass jshint', function() { 
    ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/ember-selectize-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('ember-selectize', 'Unit | Component | ember-selectize', {});

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // appends the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');

    //test select tagname and ember-selectize class
  });

  ember_qunit.test('multiple attribute is bound', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('multiple', true);
    });
    assert.equal(this.$().attr('multiple'), 'multiple');
  });

  ember_qunit.test('autocomplete attribute is bound and off', function (assert) {
    var component = this.subject();
    assert.equal(this.$().attr('autocomplete'), 'off');
  });

  ember_qunit.test('required attribute is bound', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('required', true);
    });
    assert.equal(this.$().attr('required'), 'required');
  });

  ember_qunit.test('maxItems is passed to selectize', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('maxItems', 10);
    });
    this.render();
    assert.equal(component._selectize.settings.maxItems, 10);
  });

  ember_qunit.test('placeholder is passed to selectize', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('placeholder', 'some placeholder here');
    });
    this.render();
    assert.equal(component._selectize.settings.placeholder, 'some placeholder here');
  });

  var exampleObjectContent = function exampleObjectContent() {
    return Ember['default'].A([Ember['default'].Object.create({
      id: 1,
      label: 'item 1'
    }), Ember['default'].Object.create({
      id: 2,
      label: 'item 2'
    }), Ember['default'].Object.create({
      id: 3,
      label: 'item 3'
    })]);
  };

  var objectSize = function objectSize(obj) {
    var size = 0;var key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  var asArray = function asArray(obj, path) {
    var key;var values = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (path) {
          values.push(obj[key][path]);
        } else {
          values.push(obj[key]);
        }
      }
    }
    return values;
  };

  var keysToArray = function keysToArray(obj) {
    var key;var keys = [];
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  ember_qunit.test('selectize has correct number of options', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.equal(objectSize(component._selectize.options), 3);
  });

  ember_qunit.test('if no optionValuePath pass selectize the value itself', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.deepEqual(keysToArray(component._selectize.options), ['item 1', 'item 2', 'item 3']);
    assert.deepEqual(asArray(component._selectize.options, 'value'), ['item 1', 'item 2', 'item 3']);
  });

  ember_qunit.test('if no optionLabelPath pass selectize the value itself', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.deepEqual(asArray(component._selectize.options, 'label'), ['item 1', 'item 2', 'item 3']);
  });

  ember_qunit.test('optionValuePath passes selectize the desired value', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', exampleObjectContent());
      component.set('optionValuePath', 'id');
    });
    this.render();
    assert.deepEqual(exampleObjectContent().mapBy('id'), asArray(component._selectize.options, 'value'));
  });

  ember_qunit.test('optionLabelPath passes selectize the desired label', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', exampleObjectContent());
      component.set('optionValuePath', 'id');
      component.set('optionLabelPath', 'label');
    });
    this.render();
    assert.deepEqual(asArray(component._selectize.options, 'label'), exampleObjectContent().mapBy('label'));
  });

  ember_qunit.test('selectize labels are updated', function (assert) {
    var component = this.subject();
    var content = exampleObjectContent();
    Ember['default'].run(function () {
      component.set('content', content);
      component.set('optionValuePath', 'id');
      component.set('optionLabelPath', 'label');
    });
    this.render();
    assert.deepEqual(asArray(component._selectize.options, 'label'), exampleObjectContent().mapBy('label'));

    Ember['default'].run(function () {
      content.objectAt(0).set('label', 'another label');
    });

    assert.equal(asArray(component._selectize.options, 'label')[0], 'another label');
  });

  ember_qunit.test('adding to content updates selectize options', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.equal(objectSize(component._selectize.options), 3);

    Ember['default'].run(function () {
      component.get('content').pushObject('extra item');
    });

    assert.equal(objectSize(component._selectize.options), 4);
  });

  ember_qunit.test('removing from content updates selectize options', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.equal(objectSize(component._selectize.options), 3);
    Ember['default'].run(function () {
      component.get('content').removeObject('item 1');
    });

    assert.equal(objectSize(component._selectize.options), 2);
  });

  ember_qunit.test('replacing content updates selectize options', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
    });
    this.render();
    assert.equal(objectSize(component._selectize.options), 3);
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1']));
    });

    assert.equal(objectSize(component._selectize.options), 1);
    assert.deepEqual(asArray(component._selectize.options, 'label'), ['item 1']);
  });

  ember_qunit.test('having a selection creates selectize with a selection', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
      component.set('selection', 'item 2');
    });
    this.render();
    assert.equal(component._selectize.items.length, 1);
    assert.deepEqual(component._selectize.items, ['item 2']);
  });

  ember_qunit.test('having a multiple selection creates selectize with a selection', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
      component.set('selection', Ember['default'].A(['item 2', 'item 3']));
      component.set('multiple', true);
    });
    this.render();
    assert.equal(component._selectize.items.length, 2);
    assert.deepEqual(component._selectize.items, ['item 2', 'item 3']);
  });

  ember_qunit.test('updating a selection updates selectize selection', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3']));
      component.set('selection', 'item 2');
    });
    this.render();
    assert.equal(component._selectize.items.length, 1);
    assert.deepEqual(component._selectize.items, ['item 2']);
    Ember['default'].run(function () {
      component.set('selection', 'item 3');
    });
    assert.equal(component._selectize.items.length, 1);
    assert.deepEqual(component._selectize.items, ['item 3']);
  });

  ember_qunit.test('updating a selection updates selectize value', function (assert) {
    var component = this.subject();
    var content = exampleObjectContent();
    Ember['default'].run(function () {
      component.set('content', content);
      component.set('optionValuePath', 'content.id');
      component.set('optionLabelPath', 'content.label');
      component.set('value', 1);
    });
    this.render();
    assert.equal(component._selectize.getValue(), 1);
    assert.equal(component.get('selection'), content.objectAt(0));
    Ember['default'].run(function () {
      component._selectize.setValue(2);
    });
    assert.equal(component.get('value'), 2);
    assert.equal(component.get('selection'), content.objectAt(1));
  });

  ember_qunit.test('replacing a multiple selection updates selectize selection', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('selection', Ember['default'].A(['item 2', 'item 3']));
      component.set('multiple', true);
    });
    this.render();
    assert.equal(component._selectize.items.length, 2);
    assert.deepEqual(component._selectize.items, ['item 2', 'item 3']);
    Ember['default'].run(function () {
      component.set('selection', Ember['default'].A(['item 1', 'item 2', 'item 4']));
    });
    assert.equal(component._selectize.items.length, 3);
    assert.deepEqual(component._selectize.items, ['item 1', 'item 2', 'item 4']);
  });

  ember_qunit.test('adding a multiple selection updates selectize selection', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('selection', Ember['default'].A(['item 2', 'item 3']));
      component.set('multiple', true);
    });
    this.render();
    assert.equal(component._selectize.items.length, 2);
    assert.deepEqual(component._selectize.items, ['item 2', 'item 3']);
    Ember['default'].run(function () {
      component.get('selection').pushObject('item 4');
    });
    assert.equal(component._selectize.items.length, 3);
    assert.deepEqual(component._selectize.items, ['item 2', 'item 3', 'item 4']);
  });

  ember_qunit.test('it sends update-filter action when changing filter', function (assert) {
    assert.expect(1);

    var testText = 'dummy text';
    var component = this.subject();
    var targetObject = {
      externalAction: function externalAction(query) {
        assert.equal(query, testText, 'externalAction was called with proper argument');
      }
    };

    component.set('update-filter', 'externalAction');
    component.set('targetObject', targetObject);

    Ember['default'].run(function () {
      component._onType(testText);
    });
  });

  ember_qunit.test('it sends create-item action when an item is created in selectize', function (assert) {
    assert.expect(1);

    var testText = 'dummy text';
    var component = this.subject();
    var targetObject = {
      externalAction: function externalAction(query) {
        assert.equal(query, testText, 'externalAction was called with proper argument');
      }
    };
    this.render();
    component.set('create-item', 'externalAction');
    component.set('targetObject', targetObject);

    Ember['default'].run(function () {
      component._create(testText, function () {});
    });
  });

  ember_qunit.test('it sends select-item action when an item is selected', function (assert) {
    assert.expect(1);

    var component = this.subject();

    var targetObject = {
      externalAction: function externalAction(obj) {
        assert.equal(obj, 'item 3', 'externalAction was called with proper argument');
      }
    };

    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('select-item', 'externalAction');
      component.set('targetObject', targetObject);
    });

    this.render();

    Ember['default'].run(function () {
      component._onItemAdd('item 3');
    });
  });

  ember_qunit.test('it sends select-item action when an item is deselected', function (assert) {
    assert.expect(1);

    var component = this.subject();

    var targetObject = {
      externalAction: function externalAction(obj) {
        assert.equal(obj, null, 'externalAction was called with proper argument');
      }
    };

    Ember['default'].run(function () {
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('selection', 'item 1');
      component.set('select-item', 'externalAction');
      component.set('targetObject', targetObject);
    });

    this.render();

    Ember['default'].run(function () {
      component._onItemRemove('item 1');
    });
  });

  ember_qunit.test('it sends add-item action when an item is selected in multiple mode', function (assert) {
    assert.expect(1);

    var component = this.subject();

    var targetObject = {
      externalAction: function externalAction(obj) {
        assert.equal(obj, 'item 3', 'externalAction was called with proper argument');
      }
    };

    Ember['default'].run(function () {
      component.set('multiple', true);
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('selection', Ember['default'].A(['item 2']));
      component.set('add-item', 'externalAction');
      component.set('targetObject', targetObject);
    });

    this.render();

    Ember['default'].run(function () {
      component._onItemAdd('item 3');
    });
  });

  ember_qunit.test('it sends remove-item action when an item is deselected in multiple mode', function (assert) {
    assert.expect(1);

    var component = this.subject();

    var targetObject = {
      externalAction: function externalAction(obj) {
        assert.equal(obj, 'item 2', 'externalAction was called with proper argument');
      }
    };

    Ember['default'].run(function () {
      component.set('multiple', true);
      component.set('content', Ember['default'].A(['item 1', 'item 2', 'item 3', 'item 4']));
      component.set('selection', Ember['default'].A(['item 2']));
      component.set('remove-item', 'externalAction');
      component.set('targetObject', targetObject);
    });

    this.render();

    Ember['default'].run(function () {
      component._onItemRemove('item 2');
    });
  });

  ember_qunit.test('if label is falsy, don\'t add item', function (assert) {
    var component = this.subject();
    Ember['default'].run(function () {
      component.set('content', exampleObjectContent());
      component.set('optionValuePath', 'id');
      component.set('optionLabelPath', 'unknownLabel');
    });
    this.render();
    assert.deepEqual(asArray(component._selectize.options, 'label'), []);
  });

  ember_qunit.test('if label is falsy, don\'t add item, but add it once label updates', function (assert) {
    var component = this.subject();
    var content = exampleObjectContent();
    Ember['default'].run(function () {
      component.set('content', content);
      component.set('optionValuePath', 'id');
      component.set('optionLabelPath', 'unknownLabel');
    });
    this.render();

    assert.deepEqual(asArray(component._selectize.options, 'label'), []);

    Ember['default'].run(function () {
      content.forEach(function (item, index) {
        item.set('unknownLabel', 'item ' + (index + 1));
      });
    });

    assert.deepEqual(asArray(component._selectize.options, 'label'), ['item 1', 'item 2', 'item 3']);
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/ember-selectize-test.jshint', function () {

  'use strict';

  module('JSHint - unit/components');
  test('unit/components/ember-selectize-test.js should pass jshint', function() { 
    ok(true, 'unit/components/ember-selectize-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true,"name":"ember-cli-selectize","version":"0.3.4.d6276709"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map