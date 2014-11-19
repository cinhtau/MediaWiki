/*
 * Custom extension for WikiEditor
 *
 * Using graphics from http://commons.wikimedia.org/wiki/Mediawiki_edit_toolbar
 *
 */
var domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];

var customizeToolbar = function () {
    // add custom toolbar
    $('#wpTextbox1').wikiEditor('addToToolbar',
        { 'sections':
            { 'custom':
                {
                    'type': 'toolbar',
                    'label': 'Custom'
                }
            }
        });
    // add toolbar group
    $('#wpTextbox1').wikiEditor('addToToolbar',
        {
            'section': 'custom',
            'groups': {
                'text': {
                    'label': 'Text'
                }
            }
        });
    // add toolbar group
    $('#wpTextbox1').wikiEditor('addToToolbar',
        {
            'section': 'custom',
            'groups': {
                'source': {
                    'label': 'Source'
                }
            }
        });
    // add toolbar group
    $('#wpTextbox1').wikiEditor('addToToolbar',
        {
            'section': 'custom',
            'groups': {
                'category': {
                    'label': 'Category'
                }
            }
        });
    // add toolbar group
    $('#wpTextbox1').wikiEditor('addToToolbar',
        {
            'section': 'custom',
            'groups': {
                'template': {
                    'label': 'Template'
                }
            }
        });
    // add code button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'code': {
                label: 'Source Code',
                type: 'button',
                icon: '../../../../../images/icons/Button_code.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<code>",
                        post: "</code>"
                    }
                }
            }
        }
    });
    // add pre button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'pre': {
                label: 'Preformatted Text',
                type: 'button',
                icon: '../../../../../images/icons/Button_pre.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<pre>\n",
                        post: "\n</pre>"
                    }
                }
            }
        }
    });
    // add underline button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'underline': {
                label: 'Underline',
                type: 'button',
                icon: '../../../../../images/icons/Button_underline.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<u>",
                        post: "</u>"
                    }
                }
            }
        }
    });

    // add math button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'pre': {
                label: 'Math Formula',
                type: 'button',
                icon: '../../../../../images/icons/Button_math.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<math>",
                        post: "</math>"
                    }
                }
            }
        }
    });
    //noinclude
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'noinclude': {
                label: 'No Include',
                type: 'button',
                icon: '../../../../../images/icons/Button_no_include.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<noinclude>\n",
                        post: "\n</noinclude>"
                    }
                }
            }
        }
    });
    //includeonly
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'pre': {
                label: 'Include only',
                type: 'button',
                icon: '../../../../../images/icons/Button_include.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<includeonly>\n",
                        post: "\n</includeonly>"
                    }
                }
            }
        }
    });

    //cite button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'text',
        'tools': {
            'pre': {
                label: 'Cite',
                type: 'button',
                icon: '../../../../../images/icons/Button_latinas.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "&laquo;",
                        post: "&raquo;"
                    }
                }
            }
        }
    });

    // add syntaxhighlight java button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'source',
        'tools': {
            'java': {
                label: 'Java',
                type: 'button',
                icon: '../../../../../images/icons/Applications-ristretto.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<pre class=\"brush: java; toolbar: false\">\n",
                        post: "\n</pre>"
                    }
                }
            }
        }
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'source',
        'tools': {
            'python': {
                label: 'Python',
                type: 'button',
                icon: '../../../../../images/icons/Python.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<pre class=\"brush: python; toolbar: false\">\n",
                        post: "\n</pre>"
                    }
                }
            }
        }
    });
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'source',
        'tools': {
            'xml': {
                label: 'XML',
                type: 'button',
                icon: '../../../../../images/icons/Text-xml.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<pre class=\"brush: xml; toolbar: false\">\n",
                        post: "\n</pre>"
                    }
                }
            }
        }
    });
    // add category template button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'category',
        'tools': {
            'category': {
                label: 'Category',
                type: 'button',
                icon: '../../../../../images/icons/Office-book.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "[[Category:",
                        post: "]]"
                    }
                }
            }
        }
    });
    // add category java button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'category',
        'tools': {
            'java': {
                label: 'Java',
                type: 'button',
                icon: '../../../../../images/icons/Applications-ristretto.svg',
                action: {
                    type: 'replace',
                    options: {
                        pre: "[[Category: Java]]"
                    }
                }
            }
        }
    });
    // add category open source
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'category',
        'tools': {
            'opensource': {
                label: 'Open Source',
                type: 'button',
                icon: '../../../../../images/icons/Opensource.svg',
                action: {
                    type: 'replace',
                    options: {
                        pre: "[[Category: Open Source]]"
                    }
                }
            }
        }
    });
    // add category python button
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'category',
        'tools': {
            'java': {
                label: 'Python',
                type: 'button',
                icon: '../../../../../images/icons/Python.svg',
                action: {
                    type: 'replace',
                    options: {
                        pre: "[[Category: Python]]"
                    }
                }
            }
        }
    });
    // add software template
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'software': {
                label: 'Software',
                type: 'button',
                icon: '../../../../../images/icons/Gnome-preferences-system.svg',
                action: {
                    type: 'replace',
                    options: {
                        pre: "\{\{software \n|icon = \n|producer = \n|version = \n|os = \n|license = \n|website = \n\}\}"
                    }
                }
            }
        }
    });
    // add book template
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'book': {
                label: 'Book',
                type: 'button',
                icon: '../../../../../images/icons/Office-book.svg',
                action: {
                    type: 'replace',
                    options: {
                        pre: "\{\{book \n|title = \n|author = \n|publisher = \n|edition = \n|year = \n|category = \n\|isbn = \n\|cover = \n\|description = \n\}\}"
                    }
                }
            }
        }
    });
    // add important template
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'important': {
                label: 'Important',
                type: 'button',
                icon: '../../../../../images/icons/Emblem-important.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "\{\{important \| title = \| content =",
                        post: "\}\}"
                    }
                }
            }
        }
    });
    // add warning template
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'warning': {
                label: 'Warning',
                type: 'button',
                icon: '../../../../../images/icons/Stop_hand_nuvola.svg',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "\{\{warning \| title = \| content =",
                        post: "\}\}"
                    }
                }
            }
        }
    });
    // add key template
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'warning': {
                label: 'KeyBoard',
                type: 'button',
                icon: '../../../../../images/icons/Button_templatelink.png',
                action: {
                    type: 'encapsulate',
                    options: {
                        pre: "<kbd>",
                        post: "</kbd>"
                    }
                }
            }
        }
    });
    // add references section
    $('#wpTextbox1').wikiEditor('addToToolbar', {
        'section': 'custom',
        'group': 'template',
        'tools': {
            'refs': {
                label: 'References',
                type: 'button',
                icon: '../../../../../images/icons/Button_references_alt.png',
                action: {
                    type: 'replace',
                    options: {
                        pre: "== Resources ==\n\<references\/>\n"
                    }
                }
            }
        }
    });
};

/* Check if view is in edit mode and that the required modules are available. Then, customize the toolbar . . . */
if ($.inArray(mw.config.get('wgAction'), ['edit', 'submit']) !== -1) {
    mw.loader.using('user.options', function () {
        if (mw.user.options.get('usebetatoolbar')) {
            mw.loader.using('ext.wikiEditor.toolbar', function () {
                $(document).ready(customizeToolbar);
            });
        }
    });
}
