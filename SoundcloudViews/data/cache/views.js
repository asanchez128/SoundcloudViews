webpackJsonp([3], {
    60: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return n(112).msie && this.isTextarea() && this.options.placeholder
            }

            function r() {
                this.setFieldValue(""), this.getElement("control").focus()
            }

            function o() {
                this.form.triggerApplyAll(this.field)
            }
            e.exports = n(54).extend(n(113), n(217), n(545).withOptions({
                canBeApplied: function(e) {
                    return !e.isTextarea()
                },
                action: function(e) {
                    var t = e.actionOnEnter,
                        n = e.submitFormOnEnter;
                    return t || n && "default"
                }
            }), {
                className: "textfield",
                defaults: {
                    updateOn: "change",
                    validateOn: "change",
                    label: null,
                    labelClass: "",
                    size: "medium",
                    inline: !1,
                    placeholder: null,
                    type: "text",
                    name: "",
                    rows: 5,
                    maxlength: 0,
                    autocomplete: null,
                    autoFocus: !1,
                    autoSelectAll: !1,
                    resizing: "both",
                    submitFormOnEnter: !0,
                    actionOnEnter: "",
                    hintHTML: "",
                    clearButton: !1,
                    applyAllButton: !1
                },
                template: n(2395),
                css: n(209),
                element2selector: {
                    control: ".textfield__input",
                    label: ".textfield__label",
                    wrapper: ".textfield__inputWrapper",
                    validation: ".textfield__validation"
                },
                events: {
                    "change .textfield__input": "onInputKeypressOrChange",
                    "keypress .textfield__input": "onInputKeypressOrChange",
                    "input .textfield__input": "onInputInput",
                    "click .textfield__input": "onInputClick",
                    "click .textfield__clear": r,
                    "click .textfield__applyAll": o,
                    "blur .textfield__input": "setValueAgain"
                },
                setup: function(e) {
                    this.$el.toggleClass("inline", e.inline)
                },
                getValue: function() {
                    return this.getElement("control").val().trim()
                },
                setValue: function(e) {
                    return this.getElement("control").val(e)
                },
                syncRequired: function() {
                    var e = this.options,
                        t = e.label,
                        n = e.placeholder,
                        i = e.showRequiredIndicator,
                        r = this.isRequired(),
                        o = this.getElement("control");
                    if (this.syncRequiredness(this.getElement("label"), this.getElement("control")), !t && n && i) {
                        var s = o.attr("placeholder"),
                            a = /\s\*$/.test(s);
                        r && !a ? o.attr("placeholder", s + " *") : !r && a && o.attr("placeholder", s.replace(/\s\*$/, ""))
                    }
                },
                setValueAgain: function() {
                    this.setValue(this.getValue())
                },
                renderDecorate: function() {
                    var e = this,
                        t = this.options,
                        n = this.getElement("control"),
                        i = this.hasValidation();
                    !t.updateOn || t.updateOn === t.validateOn && i || n.on(t.updateOn, function() {
                        e.setFieldValue(e.getValue())
                    }), t.validateOn && i && n.on(t.validateOn, function() {
                        e.runValidation()
                    }), this.isTextarea() && n.css("resize", this.options.resizing), t.autoSelectAll && n.on("focus", function() {
                        this.setSelectionRange(0, this.value.length)
                    }), t.autoFocus && ! function() {
                        var t = 200;
                        e.whenInserted().done(function() {
                            e.addDeferred(window.setTimeout(function() {
                                return n.focus()
                            }, t))
                        })
                    }(), t.labelClass && this.getElement("label").addClass(t.labelClass), this.syncRequired()
                },
                isTextarea: function() {
                    return "textarea" === this.options.type
                },
                getTemplateData: function(e) {
                    var t = this.options;
                    return e.readOnly = this.getMetaData().readOnly, e.disabled = this.getMetaData().disabled, e.isTextarea = this.isTextarea(), t.label !== !1 && (e._label = t.label || t.placeholder), e
                },
                onInputClick: function(e) {
                    this.getMetaData().readOnly && t(e.target).select()
                },
                onInputKeypressOrChange: function() {
                    i.call(this) && this.onInputChange()
                },
                onInputInput: function() {
                    i.call(this) || this.onInputChange()
                },
                onInputChange: function() {
                    this.getMetaData().isValid || this.markAsValid(), this.isDirty() || this.markDirty()
                },
                onFieldChange: function(e, t) {
                    var i = this.getElement("control");
                    if (i.length) {
                        var r = i.val();
                        if (t !== r && n(3).result(t, "trim") !== r.trim()) try {
                            var o = i.prop("selectionStart");
                            i.val(t), o < r.length && i[0].setSelectionRange(o, o)
                        } catch (s) {
                            return
                        }
                    }
                },
                runValidation: function() {
                    return this.form.set(this.field, this.getValue()), this.validateOwnField()
                }
            })
        }).call(t, n(1))
    },
    76: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.getConfiguration(),
                n = t.state,
                i = "pending" === n;
            e || this.$el.text(t[i ? "pendingLabel" : "label"]), this.toggleState("disabled", "disabled" === n).toggleState("pending", i)
        }
        e.exports = n(54).extend(n(113), n(88), {
            defaults: {
                button: null,
                size: "medium",
                responsive: !1,
                buttonArgs: null,
                label: ""
            },
            states: {
                disabled: function(e) {
                    this.$el.attr("disabled", e)
                },
                pending: function(e) {
                    this.$el.toggleClass("sc-pending", e)
                }
            },
            buttonLabels: {
                "default": function() {
                    return this.options.label || this.getConfiguration().label
                }
            },
            setup: function(e) {
                var t = e.button,
                    n = e.buttonArgs;
                this.button = t, this.buttonArgs = n, i.call(this), this.listenTo(this.form, "change:button:" + this.button, this.onConfigChange)
            },
            performAction: function() {
                this.form.performAction(this.getConfiguration().action, this.buttonArgs)
            },
            onClick: function(e) {
                e.preventDefault(), this.performAction()
            },
            onConfigChange: function(e) {
                e.label && this.$el.text(e.label), void 0 !== e.state && i.call(this, e.label)
            },
            getConfiguration: function() {
                return this.form.buttons[this.button]
            }
        })
    },
    78: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return !this.collection.isFullyPopulated() && this.getLength() < this.getDesiredNumItems()
            }

            function r() {
                var e = this.collection,
                    t = this.getModelsToRender().length,
                    n = this.options.maxDisplay || 1 / 0,
                    i = this.getLength(),
                    r = this.options.showReadMore ? this.getReadMoreViews().length : 0;
                return i + r >= n || i === t && e.isFullyPopulated()
            }

            function o() {
                s.call(this, !1), this.removeThrobber(), a.call(this)
            }

            function s(e) {
                var t, i;
                this._scrollListenersOn !== e && (t = e ? "on" : "off", this.options.fullPageList ? n(85)[t]("scroll:debounced", this.checkScrollPosition, this) : (i = this.getScrollableContainer()) && i[t]("scroll", this.checkScrollPositionDebounced), this._scrollListenersOn = e)
            }

            function a() {
                var e = this.subviews.endOfList;
                if (!e && this.options.showEndView && this.getModelsToRender().length) {
                    var t = this.addSubview(new this.EndOfListView, "endOfList").render();
                    this.appendDOMElement(t.el)
                }
            }

            function l() {
                var e = this.subviews.endOfList;
                e && (e._dispose(), this.removeSubview(e))
            }

            function u() {
                c.call(this)
            }

            function c() {
                s.call(this, !1), l.call(this), this.removeThrobber(), this.setDisplayedItems(this.getInitialDesiredLength()), s.call(this, !0), this.checkScrollPositionDebounced()
            }
            var d = t(window.document);
            e.exports = n(80).extend(n(967), {
                listClassName: "lazyLoadingList__list sc-list-nostyle sc-clearfix",
                defaults: {
                    preloadAt: 200,
                    maxDisplay: 0,
                    fullPageList: !0,
                    showEndView: !1,
                    initialPageSize: 0,
                    pageSize: 10
                },
                EndOfListView: n(978),
                _lastScrollPosition: 0,
                _scrollListenersOn: !1,
                _setup: function(e) {
                    n(80).prototype._setup.apply(this, arguments), this.listenTo(this.collection, "shuffled", this.onCollectionShuffle).listenTo(this.collection, "filterChanged", u), this.$el.addClass("lazyLoadingList"), this.checkScrollPositionDebounced = n(3).debounce(this.checkScrollPosition.bind(this), 400)
                },
                renderDecorate: function() {
                    this.listenTo(n(85), "resize:y:debounced", this.checkScrollPosition), n(80).prototype.renderDecorate.call(this), r.call(this) ? a.call(this) : (this.addThrobber(), s.call(this, !0), this.checkScrollPositionDebounced())
                },
                teardown: function() {
                    this.stopListening(n(85)), s.call(this, !1)
                },
                getInitialDesiredLength: function() {
                    var e = this.options,
                        t = e.maxDisplay,
                        n = e.initialPageSize,
                        i = e.pageSize;
                    return Math.min(t || 1 / 0, n || i)
                },
                onRemove: function() {
                    this.disposed || (n(80).prototype.onRemove.apply(this, arguments), r.call(this) || s.call(this, !0), this.checkScrollPositionDebounced({
                        forceCheck: !0
                    }))
                },
                onCollectionReset: function() {
                    this.disposed || (c.call(this), this.rerender())
                },
                onCollectionShuffle: function() {
                    this.checkScrollPosition({
                        forceCheck: !0
                    })
                },
                getScrollableContainer: function() {
                    return this.options.fullPageList ? d : this.$el
                },
                scrollContainerToPositionOrBottom: function(e) {
                    var t = this.getScrollableContainer();
                    t.scrollTop(e || t.height())
                },
                checkScrollPosition: function(e) {
                    if (!this.disposed) {
                        var t, n, i, r = !1,
                            o = this.getListElement(),
                            s = this.getScrollableContainer(),
                            a = this.options.preloadAt || 0,
                            l = d.scrollTop(),
                            u = this.options.fullPageList,
                            c = s.scrollTop() + (u ? window.innerHeight : 0);
                        u ? this.options.inverted ? r = a >= l : (c >= this._lastScrollPosition || e && e.forceCheck) && (t = o.children().last(), n = t.length ? t.offset() : {
                            top: 0
                        }, i = n && n.top || 0, r = c + a > i) : r = o.height() - s.height() - c < a, r && this.addPage(), this._lastScrollPosition = c
                    }
                },
                addPage: function() {
                    this.setDisplayedItems(this._desiredLength + this.options.pageSize), r.call(this) ? o.call(this) : i.call(this) ? (s.call(this, !1), this.addThrobber(), this.fetchNextPage()) : this.checkScrollPosition()
                },
                afterFetch: function() {
                    this.disposed || (r.call(this) ? o.call(this) : (s.call(this, !0), this.checkScrollPositionDebounced(), this.addThrobber()))
                }
            })
        }).call(t, n(1))
    },
    80: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = n(3).pluck(this.subviews, "model");
                return this.collection.find(function(t) {
                    return -1 === e.indexOf(this.getSubviewModel(t))
                }, this)
            }

            function r(e) {
                var t, i, r = [];
                return n(3).each(e, function(e, o) {
                    t = o + '="', i = [], n(3).isObject(e) ? n(3).each(e, function(e, t) {
                        i.push(t + ":" + e)
                    }) : i.push(e), r.push(t + i.join(";") + '"')
                }), r.join(" ")
            }

            function o() {
                return this.getDesiredNumItems() - (this.needsReadMoreView() ? 1 : 0)
            }

            function s() {
                var e, t, n = o.call(this);
                if (n)
                    for (e = this.getLength(); e-- > n;) t = this.getListItemView(this.collection.at(e)), t && (this.removeSubview(t), this.removeListItemFromDOM(t, {
                        animations: !1,
                        index: e
                    }))
            }

            function a() {
                return this.hasData() && this.collection && 0 === this.collection.length && this.collection.isFullyPopulated()
            }

            function l(e) {
                return function(t) {
                    return t instanceof e
                }
            }
            e.exports = n(54).extend({
                emptyTemplate: null,
                defaults: {
                    minDisplay: 0,
                    maxDisplay: 3,
                    inverted: !1,
                    showPlaceholders: !1,
                    showReadMore: !1
                },
                Subview: null,
                subviewArgs: {},
                PlaceHolderView: null,
                placeholderViewArgs: null,
                ReadMoreView: null,
                readMoreViewArgs: null,
                listTagName: "ul",
                listClassName: "sc-list-nostyle sc-clearfix",
                itemTagName: "li",
                itemClassName: "",
                animations: {},
                template: function() {
                    return ""
                },
                _isShowingEmpty: !1,
                _listElement: null,
                _desiredLength: null,
                _setup: function(e) {
                    n(54).prototype._setup.call(this, e), this._desiredLength = this.getInitialDesiredLength()
                },
                renderDecorate: function() {
                    this.createListElement() && this.syncItems()
                },
                createListElement: function() {
                    var e, n = this.getListContainer();
                    return n.length && !this._listElement && (e = window.document.createElement(this.listTagName), this.listClassName && (e.className = this.listClassName), n.append(e), this.resetElementCache(), this._listElement = t(e)), this._listElement
                },
                syncItems: function() {
                    var e, t = this.getModelsToRender(),
                        n = this.getLength(),
                        i = Math.min(o.call(this), t.length);
                    if (this.removePlaceholders(), this.removeReadMoreView(), i > n)
                        for (e = n; i > e; ++e) this.createAndInsertListItemView(t[e], -1);
                    else n > i && s.call(this);
                    this.appendPlaceholders(), this.appendReadMoreView()
                },
                appendPlaceholders: function() {
                    if (this.options.showPlaceholders && !this.needsReadMoreView()) {
                        var e, t = this.getLength(),
                            n = o.call(this),
                            i = this.options.showPlaceholders && t < this.options.minDisplay ? n - t : 0;
                        if (i)
                            for (e = this.getLength(); n > e; ++e) this.createAndInsertPlaceholderView()
                    }
                },
                removePlaceholders: function() {
                    var e = this;
                    this.options.showPlaceholders && this.subviews.filter(l(this.PlaceholderView)).forEach(function(t) {
                        e.removeSubview(t), t._dispose()
                    })
                },
                getReadMoreViews: function() {
                    return this.subviews.filter(l(this.ReadMoreView))
                },
                needsReadMoreView: function() {
                    return this.options.showReadMore && this.getModelsToRender().length >= this.getDesiredNumItems()
                },
                appendReadMoreView: function() {
                    var e, t;
                    this.needsReadMoreView() && (e = this.getLength(), t = this.getSubviewModel(this.getModelsToRender()[e]), this.createAndInsertReadMoreView(t, e))
                },
                removeReadMoreView: function() {
                    var e = this;
                    this.options.showReadMore && this.getReadMoreViews().forEach(function(t) {
                        e.removeSubview(t), t._dispose()
                    })
                },
                createAndInsertPlaceholderView: function() {
                    var e = this.addSubview(new this.PlaceholderView).render();
                    this.addListItemToDOM(e)
                },
                createAndInsertReadMoreView: function(e, t) {
                    var i = this.addSubview(new this.ReadMoreView(n(3).assign({
                        alreadyShown: t,
                        Subview: this.Subview,
                        subviewArgs: this.getSubviewArgs(e)
                    }, this.readMoreViewArgs))).render();
                    this.addListItemToDOM(i)
                },
                getInitialDesiredLength: function() {
                    return Math.max(this.options.minDisplay, this.options.maxDisplay) || 1 / 0
                },
                getDesiredNumItems: function() {
                    return this._desiredLength
                },
                getLength: function() {
                    return this.getListItemViews().length
                },
                setDisplayedItems: function(e) {
                    e = Math.min(e, this.options.maxDisplay || 1 / 0), e !== this._desiredLength && (this._desiredLength = e, this.syncItems())
                },
                _teardown: function() {
                    this._listElement && (this._listElement.remove(), this._listElement = null), n(54).prototype._teardown.call(this)
                },
                getModelsToRender: function() {
                    return this.collection.models
                },
                createAndInsertListItemView: function(e, t) {
                    var i = this.addListItemSubview(e);
                    i.render(), this.addListItemToDOM(i, n(3).isNumber(t) ? t : -1), s.call(this)
                },
                getTemplate: function(e) {
                    var t = this.getEmptyTemplate();
                    return t && this.useEmptyTemplate() ? t : n(54).prototype.getTemplate.apply(this, arguments)
                },
                getEmptyTemplate: function() {
                    return this.emptyTemplate
                },
                useEmptyTemplate: function() {
                    return a.call(this)
                },
                getListContainer: function() {
                    return this.$el
                },
                getListElement: function() {
                    return this._listElement || t()
                },
                getListItemView: function(e) {
                    var t = this.getSubviewModel(e);
                    return n(3).find(this.subviews, function(e) {
                        return e.model === t
                    })
                },
                getListItemViews: function() {
                    return this.subviews.filter(l(this.Subview))
                },
                getListItemViewByScrollOffset: function(e) {
                    var t, i;
                    return n(3).find(this.subviews, function(n) {
                        return n.$el.is(":visible") ? (t = n.$el.outerHeight(), i = n.$el.position().top + e - t / 2, e >= i && i + t > e) : !1
                    })
                },
                getSubviewArgs: function(e) {
                    return n(3).defaults({
                        resource_id: e.resource_id,
                        resource_type: e.resource_type
                    }, this.subviewArgs)
                },
                getSubviewModel: n(3).identity,
                getListItemAttributesData: function(e) {
                    return e.model ? e.model.toJSON() : {}
                },
                getListItemAttributes: function() {
                    return {}
                },
                getListItemAttributesString: function(e) {
                    var t = this.getListItemAttributes(e);
                    return new(n(20).SafeString)(r(t))
                },
                onAdd: function(e, t, n) {
                    if (!this.disposed) {
                        var i = t.indexOf(e),
                            r = o.call(this),
                            s = i >= 0 && r > i || 0 > i && this.collection.length <= r;
                        this.removePlaceholders(), this.removeReadMoreView(), s && this.createAndInsertListItemView(e, i), this.appendPlaceholders(), this.appendReadMoreView()
                    }
                },
                onRemove: function(e, t, n) {
                    if (!this.disposed) {
                        var i = this.getListItemView(e);
                        i && (this.removePlaceholders(), this.removeReadMoreView(), this.removeSubview(i), this.removeListItemFromDOM(i, n.index), this.appendPlaceholders(), this.appendReadMoreView())
                    }
                },
                onCollectionChange: function(e, t) {
                    var i = a.call(this);
                    n(54).prototype.onCollectionChange.apply(this, arguments), this._isShowingEmpty !== i && this.rerender(), this._isShowingEmpty = i
                },
                addListItemSubview: function(e) {
                    var t = this.getSubviewArgs(this.getSubviewModel(e));
                    return this.addSubview(new this.Subview(t))
                },
                getListItemViewByEvent: function(e) {
                    var i, r = t(e.target).closest(this.getListItemSelector());
                    return r.length && (i = n(3).find(this.subviews, function(e) {
                        return e.el === r.children()[0]
                    })), i
                },
                getListItemSelector: function() {
                    return "." + this.itemClassName.trim().split(/\s+/).join(".")
                },
                createSubviewWrapper: function(e) {
                    var n, i = this.getListItemAttributesString(this.getListItemAttributesData(e));
                    return i = i.toString().length ? " " + i : "", n = t("<" + this.itemTagName + ' class="' + this.itemClassName + '"' + i + ">")
                },
                getSubviewWrapper: function(e) {
                    return e.$el.parent()
                },
                getSubviewInWrapper: function(e) {
                    return n(3).find(this.subviews, function(t) {
                        return t.$el.parent().is(e)
                    })
                },
                addListItemToDOM: function(e, t) {
                    var n, i, r = this.getListElement(),
                        o = this.getSubviewWrapper(e),
                        s = this.options.inverted;
                    o.length || (o = this.createSubviewWrapper(e), o.append(e.el)), -1 === t || t >= this.getLength() - 1 || void 0 === t ? r[s ? "prepend" : "append"](o) : 0 === t ? r[s ? "append" : "prepend"](o) : (i = this.getListItemView(this.collection.at(t - 1)), i && (n = this.getSubviewWrapper(i), o[s ? "insertBefore" : "insertAfter"](n))), this.resetElementCache()
                },
                removeListItemFromDOM: function(e, t) {
                    var n = this,
                        r = this.getSubviewWrapper(e),
                        o = this._desiredLength,
                        s = !t || t.animations !== !1,
                        a = function() {
                            var t = -1;
                            r.detach(), e._dispose();
                            var s = !n._disposed && o && o <= n.collection.length && n.getLength() < o;
                            if (s) {
                                var a = i.call(n),
                                    l = n.addListItemSubview(a);
                                l.render(), n.addListItemToDOM(l, t)
                            }
                        };
                    s && this.animations.remove ? this.addDeferred(window.setTimeout(r.fadeOut.bind(r, "slow", a), this.animations.remove.delay)) : a(), this.resetElementCache()
                },
                detachSubviewFromDOM: function(e) {
                    this.getSubviewWrapper(e).detach()
                },
                appendDOMElement: function(e) {
                    var t = this.getListContainer();
                    t && t[this.options.inverted ? "prepend" : "append"](e), this.resetElementCache()
                },
                getCollectionData: function() {
                    return []
                }
            })
        }).call(t, n(1))
    },
    88: function(e, t, n) {
        "use strict";

        function i() {
            var e = this,
                t = this.options.allPossibleLabels;
            t && ! function() {
                var n = s("span", "sc-button-alt-labels");
                ["sc-button-label-default", "sc-button-label-hover"].map(function(e) {
                    return s("span", e)
                }).concat(t.map(function(e) {
                    return s("span", "sc-button-label-alt", String(e))
                })).forEach(function(e) {
                    n.appendChild(e)
                }), e.el.appendChild(n)
            }()
        }

        function r(e, t) {
            if ("default" === e && this.options[t]) return this.options[t];
            var i = this.buttonLabels[e],
                r = n(3).isFunction(i) ? i.call(this) : i;
            return o.call(this, r, t)
        }

        function o(e, t) {
            return n(3).isObject(e) ? e instanceof n(20).SafeString ? e.toString() : n(3).isFunction(e[t]) ? e[t].call(this).toString() : e[t].toString() : e
        }

        function s(e, t, n) {
            var i = window.document.createElement(e);
            return i.className = t, n && (i.innerHTML = n), i
        }
        var a = ["tiny", "small", "medium", "large", "xlarge"];
        e.exports = new(n(21))({
            merge: {
                defaults: {
                    disabled: !1,
                    size: "small",
                    text_only: !1,
                    icon_only: !1,
                    lightFg: !1,
                    noStyle: !1,
                    responsive: !0,
                    title: void 0,
                    isScButton: !0,
                    text: null,
                    translucent: !1,
                    stretchIcon: !1,
                    allPossibleLabels: null,
                    selectedClass: null
                },
                states: {
                    active: function(e) {
                        this.$el.toggleClass(this.options.isScButton ? "sc-button-active" : "active", e)
                    },
                    disabled: function(e) {
                        this.$el.attr("disabled", e)
                    },
                    pending: "sc-pending",
                    selected: function(e) {
                        var t = e ? "selected" : "default",
                            n = this.options,
                            i = n.selectedClass,
                            r = n.isScButton;
                        this.$el.toggleClass(i || (r ? "sc-button-selected" : "selected"), e), this.updateButton(t)
                    }
                },
                events: {
                    "click.button": "onClick"
                },
                buttonLabels: {},
                element2selector: {
                    visibleLabels: ".sc-button-label-default,.sc-button-label-hover"
                }
            },
            defaults: {
                tagName: "button",
                isButtonSelected: n(3).constant(!1),
                onClick: n(3).noop,
                template: function() {
                    return ""
                },
                loadingTemplate: function() {
                    return this.getButtonText("default")
                },
                getButtonText: function(e) {
                    return r.call(this, e, "text")
                },
                getButtonTitle: function(e) {
                    return r.call(this, e, "title")
                },
                hasSelectedText: function() {
                    return !!this.getButtonText("selected")
                },
                updateButton: function(e) {
                    var t = this.getButtonText(e);
                    t && (this.$el.attr("title", this.getButtonTitle(e) || ""), this.options.allPossibleLabels ? this.getElement("visibleLabels").html(t) : this.$el.html(t && String(t)))
                }
            },
            before: {
                setup: function(e) {
                    var t = e.responsive,
                        n = e.text_only,
                        i = e.isScButton,
                        r = e.disabled,
                        o = e.size,
                        s = e.icon_only,
                        l = e.lightFg,
                        u = e.noStyle,
                        c = e.translucent,
                        d = e.stretchIcon;
                    t = t && !n, i && (this.el.className = (n ? "" : this.el.className + " ") + "sc-button"), c && (this.el.className += " sc-button-translucent"), this.$el.attr("tabIndex", 0), this.toggleState("disabled", r), i && (-1 !== a.indexOf(o) && this.$el.addClass("sc-button-" + o), this.$el.toggleClass("sc-button-responsive", t).toggleClass("sc-button-icon", s).toggleClass("sc-button-lightfg", l).toggleClass("sc-button-nostyle", u).toggleClass("sc-button-stretch-icon", d))
                }
            },
            after: {
                renderDecorate: function() {
                    i.call(this);
                    var e = this.isButtonSelected();
                    this.updateButton(e ? "selected" : "default"), this.hasSelectedText() && this.toggleState("selected", !!this.isButtonSelected(), !0)
                }
            }
        })
    },
    89: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return n(3).find(e.dataTransfer.files, function(e) {
                    return c.test(e.type)
                })
            }

            function r(e) {
                return e.dataTransfer.items ? n(3).any(e.dataTransfer.items, function(e) {
                    return "file" === e.kind && c.test(e.type)
                }) : !0
            }

            function o() {
                n(3).bindAll(this, "onDragOver", "onDrop", "onDragEnter"), this.$el.on("dragover", this.onDragOver).on("drop", this.onDrop).on("dragenter", this.onDragEnter).on("dragleave", this.toggleState.bind(this, "dragover", !1))
            }

            function s() {
                var e, t, i = this,
                    r = this.options,
                    o = r.filter,
                    s = r.size,
                    a = r.forceSquare,
                    l = r.lazyLoading,
                    c = this._imageSourceModel,
                    d = this.getElement("image"),
                    h = c.getImageUrl(s),
                    p = c.getPlaceholderUrl(s),
                    f = h && p !== !1,
                    m = l ? u(this.el) : n(56).resolve(),
                    g = m.then(function() {
                        return n(87).load(h).done(function(e) {
                            !i.disposed && l && d.css({
                                "background-image": "url('" + h + "')"
                            }), i._whenLoadedDefer.resolve(e.src)
                        })
                    });
                "smart-darken" === o && this.toggleState("smart-darken", !0), f ? (this.$el.addClass("sc-artwork " + n(87).getPlaceholderClass(c.toJSON(), {
                    forceSquare: a
                })), p && (e = this.$(".image__placeholder"), n(87).load(p).done(function() {
                    n(87).flagCachedImage(p)
                })), t = e ? function() {
                    window.setTimeout(function() {
                        e.remove()
                    }, 500)
                } : n(3).noop, d[0].style.opacity = 0, d.addClass("g-opacity-transition"), g.done(function() {
                    d[0].style.opacity = 1, t(), i.addTimeout(function() {
                        i.disposed || i.toggleState("loaded", !0)
                    }, 500)
                }).fail(function() {
                    i.disposed || (d.css("backgroundImage", ""), i.toggleState("smart-darken", !1), e && (e.addClass("g-opacity-transition"), e[0].style.opacity = 0, t()))
                })) : g.done(function() {
                    i.disposed || i.toggleState("loaded", !0)
                })
            }

            function a(e) {
                return this.isPlaylist && e === this._imageSourceModel && e.get("artwork_url")
            }
            var l = n(59).trackV0Click,
                u = n(539).whenElementVisible,
                c = /^image\//,
                d = {
                    light: "image__lightOutline",
                    white: "image__whiteOutline",
                    none: "image__noOutline"
                };
            e.exports = n(54).extend(n(165), {
                className: "image",
                template: n(2402),
                css: n(2785),
                loadingTemplate: function() {
                    var e = this.isPlaylist && !this._imageSourceModel.get("tracks") ? null : this._imageSourceModel;
                    return n(87).markup(e, {
                        src: "",
                        placeholderId: this._imageSourceModel.id,
                        size: this.options.size,
                        stretch: this.options.stretch
                    })
                },
                defaults: {
                    editable: !1,
                    alwaysShowEditButton: !1,
                    size: 50,
                    stretch: !1,
                    uploadImageAutomatically: !0,
                    zoomable: !1,
                    lazyLoading: !1,
                    allowTrackFallback: !0,
                    filter: null,
                    forceSquare: !1,
                    boundaryOutlineStyle: "light"
                },
                events: {
                    click: "onClick",
                    keydown: "onKeydown"
                },
                element2selector: {
                    image: ".image__full",
                    button: ".image__button"
                },
                states: {
                    dragover: "dragover",
                    readOnly: "readOnly",
                    interactive: "interactive",
                    loaded: "m-loaded",
                    customImage: "customImage",
                    alwaysShowEditButton: "alwaysShowEditButton",
                    "smart-darken": "g-image-filter-darken",
                    omitRoundedBorder: "m-omitRoundedBorder",
                    whiteOutline: "m-whiteOutline"
                },
                _whenLoadedDefer: null,
                _displaySize: null,
                _modal: null,
                _imageSourceModel: null,
                _currentImgSrc: null,
                setup: function(e) {
                    var t = e.allowTrackFallback,
                        i = e.stretch,
                        r = e.size,
                        s = e.zoomable,
                        a = e.boundaryOutlineStyle,
                        l = e.resource_type,
                        u = n(3).result(this.model, "getImageResourceInfo");
                    u ? this._imageSourceModel = new u.Model(u.args) : (this._imageSourceModel = this.model, this._imageSourceModel.hold()), this.model = null;
                    var c = this._imageSourceModel,
                        h = [c.imageProperties.read];
                    this._setupDragEvents = n(3).once(o), this.listenTo(c, "imageDataChanged", this.rerender), t && this.isPlaylist && h.push("tracks"), "station" === l && (this.options.forceSquare = !0), this._whenLoadedDefer = this.addDeferred(n(56).defer()).done(n(87).flagCachedImage), this._displaySize = i ? "100%" : r, this.el.style.width = this.el.style.height = this.getDisplaySizeForCSS(), s && this.$el.attr("tabindex", 0), this.$el.addClass("m-" + l), "station" === l && 50 >= r && this.$el.addClass("m-smallOverlay"), this.addDataSource(c, {
                        requiredAttributes: h
                    }), this.$el.addClass(d[a])
                },
                onKeydown: function(e) {
                    e.keyCode === n(102).ENTER && this.$el.click()
                },
                missingRequiredData: function(e) {
                    return a.call(this, e.source) ? !1 : n(54).prototype.missingRequiredData.apply(this, arguments)
                },
                shouldViewRerender: function() {
                    return this._imageSourceModel.getImageUrl(this.options.size) !== this._currentImgSrc
                },
                renderDecorate: function() {
                    var e = this._imageSourceModel,
                        t = this.options,
                        i = t.editable,
                        r = t.alwaysShowEditButton,
                        o = t.zoomable,
                        a = t.size,
                        l = !i || !n(55).get("me").owns(e);
                    this.toggleState("readOnly", l).toggleState("alwaysShowEditButton", r).toggleState("customImage", e.hasOwnImage()).toggleState("interactive", o), l || this._setupDragEvents(), this._currentImgSrc = e.getImageUrl(a), s.call(this)
                },
                getTemplateData: function(e) {
                    var t = this._imageSourceModel,
                        i = this.options,
                        r = i.size,
                        o = i.lazyLoading,
                        s = t.getPlaceholderUrl(r),
                        a = o ? s : t.getImageUrl(r),
                        l = !o;
                    return n(3).assign(e, this._imageSourceModel.toJSON(), {
                        src: a,
                        size: r,
                        useResourceUrl: l,
                        placeholderUrl: s
                    })
                },
                getDisplaySizeForCSS: function() {
                    return String(this._displaySize).replace(/(\d+)(%?)/, function(e, t, n) {
                        return t + (n || "px")
                    })
                },
                onClick: function(e) {
                    var i = this.options;
                    if (i.zoomable) {
                        if (t(e.target).closest(this.getElement("button")).length) return !0;
                        e.preventDefault(), this._modal || (this._modal = new(n(1030))({
                            resource_id: i.resource_id,
                            resource_type: i.resource_type,
                            togglerEl: this.el,
                            Subview: n(1533)
                        })), this._modal.open(), l(["image", "zoom", i.resource_type])
                    }
                },
                onDragEnter: function(e) {
                    r(e) && this.toggleState("dragover", !0)
                },
                onDragOver: function() {
                    return !1
                },
                onDrop: function(e) {
                    if (this.toggleState("dragover", !1), !n(55).get("me").isConfirmed()) return n(57).trigger("upload:image:unconfirmed"), !1;
                    var t = i(e),
                        r = this._imageSourceModel;
                    return t && (r.setImageFile(t, "file"), this.options.uploadImageAutomatically && r.uploadImage()), l(["upload", "image", "drag", "file"]), !1
                }
            })
        }).call(t, n(1))
    },
    91: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(543), n(546), {
            className: "checkboxControl",
            defaults: {
                isBlock: !1
            },
            setup: function() {
                this.$el.toggleClass("m-block", this.options.isBlock)
            },
            css: n(2773),
            template: n(504),
            renderDecorate: function() {
                this.syncRequired()
            },
            syncRequired: function() {
                this.syncRequiredness(this.getLabel(), this.getInput())
            },
            isRequired: function() {
                return this.form.isConstraintEnabledForField(this.field, n(188))
            }
        })
    },
    95: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("checked", !!this.getFieldValue()).toggleState("disabled", !!this.getMetaData().disabled)
        }
        e.exports = n(54).extend(n(113), n(546), {
            className: "blockCheckbox",
            css: n(2772),
            template: n(2389),
            defaults: {
                blockContent: null,
                label: null,
                disabled: !1,
                toggleAnywhere: !0
            },
            events: {
                "change .blockCheckbox__control": "onControlChange",
                "focus .blockCheckbox__control": "onControlFocus",
                "blur .blockCheckbox__control": "onControlBlur"
            },
            element2selector: {
                control: ".blockCheckbox__control",
                blockContent: ".blockCheckbox__blockContent"
            },
            states: {
                focused: "m-focused",
                indeterminate: function(e) {
                    this.$el.toggleClass("m-indeterminate"), this.getElement("control").prop("indeterminate", e), e && this.getElement("control").prop("checked", !0)
                },
                checked: function(e) {
                    this.$el.toggleClass("m-checked", e), this.getElement("control").prop("checked", e)
                },
                disabled: function(e) {
                    this.getElement("control").attr("disabled", e), this.$el.toggleClass("m-disabled", e)
                }
            },
            setBlockContent: function(e) {
                e && this.getElement("blockContent").html(e.toString())
            },
            renderDecorate: function() {
                i.call(this)
            },
            onFieldChange: function() {
                i.call(this)
            },
            onDisabledChange: function() {
                i.call(this)
            },
            onControlChange: function(e) {
                this.setFieldValue(e.target.checked)
            },
            onControlFocus: function() {
                this.toggleState("focused", !0)
            },
            onControlBlur: function() {
                this.toggleState("focused", !1)
            },
            getTemplateData: function(e) {
                return e.tagName = this.options.toggleAnywhere ? "label" : "div", e.inputId = this.cid + "_input", e
            }
        })
    },
    106: function(e, t, n) {
        "use strict";

        function i() {
            for (var e, t = this; t;) {
                if (e = t.options.playQueuePriority, null != e) return e;
                t = t._parentView
            }
            return 0
        }
        e.exports = new(n(21))({
            defaults: {
                getQueueSource: function() {
                    return this.collection || this.model && this.model.playlist || this.model
                },
                getRestoreUrl: function() {
                    return n(22).history ? "/" + n(22).history.getFragment(null, null, !0) : ""
                }
            },
            applyTo: function(e) {
                e.bubbleEvents = n(3).assign(e.bubbleEvents || {}, {
                    requestPlayContext: "onRequestPlayContext"
                })
            },
            _initialSourceReader: null,
            onRequestPlayContext: function(e) {
                var t = this.getQueueSource();
                t && t.containsSound(e.data.sound) && (e.stopPropagation(), n(3).assign(e.data, {
                    source: t,
                    restoreUrl: this.getRestoreUrl()
                }))
            },
            after: {
                renderDecorate: function() {
                    var e = this.getQueueSource();
                    if (e) {
                        var t = i.call(this),
                            r = n(55).get("router").getLayoutInfo();
                        this._initialSourceReader = n(67).setInitialSource(e, t, this.getRestoreUrl(), r) || null
                    }
                },
                teardown: function() {
                    this._initialSourceReader && (n(67).unsetInitialSource(this._initialSourceReader), this._initialSourceReader = null)
                }
            }
        })
    },
    113: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e) {
                e.defaults = n(3).assign({}, {
                    showValidation: !0,
                    Form: null,
                    field: null,
                    soundIds: null,
                    showRequiredIndicator: !0
                }, e.defaults)
            },
            defaults: {
                getFocusableElement: function() {
                    return this.getElement("control")
                },
                focus: function() {
                    this.getFocusableElement().focus()
                },
                onFieldChange: null,
                onDatasourceChange: function() {
                    this.rerender()
                },
                onDisabledChange: function() {
                    this.rerender()
                },
                getFieldValue: function() {
                    return this.field ? this.form.get(this.field) : void 0
                },
                setFieldValue: function(e) {
                    var t = this.field;
                    t && !this.getMetaData().readOnly && (this.form.set(t, e), this.markDirty())
                },
                isRequired: function() {
                    return this.form.isConstraintEnabledForField(this.field, n(69))
                }
            },
            before: {
                setup: function(e) {
                    var t, i;
                    i = e.Form, this.form = new i({}, e), e.field && (this.field = e.field, t = this.getDatasource(), t instanceof n(22).Collection && (this.collection = t, this.collection.hold()), this.listenTo(this.form, "datasourceChange:" + e.field, this.onDatasourceChange).listenTo(this.form, "disabledChange:" + e.field, this.onDisabledChange), this.listenToFields("on", e.field), e.showValidation && this.onValidationChange && this.form.hasConstraintsOwnedBy(e.field) && this.form.on("validation:" + e.field, this.onValidationChange, this))
                }
            },
            after: {
                dispose: function() {
                    this.field && (this.listenToFields("off", this.field), this.onValidationChange && this.form.hasConstraintsOwnedBy(this.field) && this.form.off("validation:" + this.field, this.onValidationChange, this)), this.form.release(), delete this.form
                },
                renderDecorate: function() {
                    if (this.options.showValidation) {
                        var e = this.options.field;
                        this.form.trigger("validation:" + e, this.getMetaData())
                    }
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t = e(t) || t, t._form = this.form.toJSON(), t._value = t._form[this.field], t._controlId = n(3).uniqueId("formControl_"), t._resource_id = t._form._resource_id, t._resource_type = t._form._resource_type, t
                }
            },
            isFormControl: !0,
            hasValidation: function() {
                return !0
            },
            isValid: function() {
                return this.field ? this.getMetaData().validity === n(173).VALID : !0
            },
            isInvalid: function() {
                return this.field ? this.getMetaData().validity === n(173).INVALID : !1
            },
            isDirty: function() {
                return this.getMetaData().isDirty
            },
            markDirty: function() {
                this.form.markFieldsDirty(this.field)
            },
            getMetaData: function() {
                return this.form.getFieldMetadata(this.field)
            },
            getDatasource: function() {
                return this.getMetaData().datasource
            },
            validateOwnField: function() {
                return this.form.validate({
                    fields: [this.field]
                })
            },
            resetOwnValidation: function() {
                this.form.resetFieldValidation(this.field)
            },
            syncRequiredness: function(e, t) {
                e.toggleClass("g-required-label", this.isRequired() && this.options.showRequiredIndicator), t.attr("aria-required", this.isRequired())
            },
            scrollToAndFocus: function() {
                this.addDeferred(this.scrollIntoView({
                    position: "top",
                    topOffset: 40
                })).done(this.focus.bind(this))
            },
            listenToFields: function(e, t, i) {
                "string" == typeof t && (t = [t]);
                var r = t.filter(n(3).identity).map(function(e) {
                    return "change:" + e
                }).join(" ");
                return i || (i = this.onFieldChange), r && this.form[e](r, i, this), this
            }
        })
    },
    121: function(e, t, n) {
        "use strict";

        function i() {
            this.disposed || (this.el.style.opacity = 0)
        }
        var r = n(52).t("Sign in"),
            o = n(52).t("Create a SoundCloud account");
        e.exports = n(54).extend(n(88), {
            className: "g-opacity-transition",
            defaults: {
                size: "medium",
                responsive: !1,
                type: "login",
                redirectRoute: null
            },
            buttonLabels: {
                "default": function() {
                    var e = this.options;
                    return "signup" === e.type ? o : r
                }
            },
            setup: function(e) {
                var t = e.type;
                this.$el.addClass(t + "Button").toggleClass("sc-button-cta", "signup" === t), this.listenTo(n(57), "connect:login", i)
            },
            onClick: function() {
                var e = this.options;
                n(63).login({
                    signup: "signup" === e.type,
                    redirectRoute: e.redirectRoute,
                    context: this.getContextData()
                })
            }
        })
    },
    139: function(e, t, n) {
        "use strict";

        function i() {
            return this._startedPayment
        }
        e.exports = n(54).extend(n(88), n(126).withOptions({
            type: "pro",
            getImpressionName: function() {
                return this.isLink ? "creator_sub_ad" : [this.options.resource_id, this.model.getTrackingUseCase()].join("/")
            },
            shouldTrackUpsellClick: function() {
                return this.isLink
            }
        }), {
            ModelClass: n(77),
            observedAttributes: ["use_case"],
            className: "premiumButton g-button-premium",
            states: {
                disabled: function(e) {
                    this.$el.attr("disabled", e)
                },
                pending: function(e) {
                    this.disposed || this.$el.attr("disabled", e).toggleClass("sc-pending", e)
                }
            },
            isLink: !1,
            defaults: {
                size: "large",
                linkRef: null,
                resource_id: n(72).productIds.CREATOR_SUBSCRIPTION_PRO
            },
            buttonLabels: {
                "default": function() {
                    var e, t = this.model,
                        i = t.isGift(),
                        r = t.isProUnlimited(),
                        o = t.get("use_case");
                    return e = o === n(77).useCases.RENEWAL ? n(52).t("Renew") : o === n(77).useCases.DOWNGRADE ? n(52).t("Downgrade") : i && r ? n(52).t("Gift Unlimited") : i && !r ? n(52).t("Gift Pro") : !i && r ? n(52).t("Go Pro Unlimited") : n(52).t("Go Pro")
                }
            },
            setup: function() {
                this.isLink = "a" === this.tagName, this.isLink && this.$el.attr("href", n(61).getRoute("premium", null, null, this.options.linkRef)), this.model.isPro() && this.$el.addClass("premiumButton-pro"), this.model.isProUnlimited() && this.$el.addClass("premiumButton-proUnlimited"),
                    this.listenTo(n(84), "starting", this.onPaymentStarting).listenTo(n(84), "started", this.onPaymentStarted).listenTo(n(84), "canceled", this.onPaymentCanceled).listenTo(n(84), "finished", this.onPaymentFinished)
            },
            renderDecorate: function() {
                var e = this.model,
                    t = e.get("use_case");
                t !== n(77).useCases.DOWNGRADE && this.$el.addClass("sc-button-cta"), this.toggleState("disabled", t === n(77).useCases.DISABLED)
            },
            getUpsellRef: function() {
                return this.isLink ? this.options.linkRef : n(84).getReferenceParam()
            },
            onClick: function() {
                this.isLink || (n(63).isLoggedIn() ? this.startPayment() : n(63).login({
                    implicitAction: "purchase"
                }))
            },
            onPaymentStarting: function() {
                i.call(this) && this.toggleState("pending", !0)
            },
            onPaymentStarted: function() {
                i.call(this) && this.toggleState("pending", !1)
            },
            onPaymentCanceled: function() {
                i.call(this) && this.toggleState("pending", !1), this._startedPayment = !1
            },
            onPaymentFinished: function() {
                this._startedPayment = !1
            },
            startPayment: function() {
                this._startedPayment = !0, n(84).start(this.options.resource_id, {
                    trackingContext: this.getContextData()
                })
            }
        })
    },
    142: function(e, t, n) {
        "use strict";
        e.exports = n(107).extend({
            className: "hintButton",
            css: n(1164),
            defaults: {
                size: "small",
                responsive: !1,
                blockContent: "",
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "left top",
                    offset: "-18 7",
                    width: "320px",
                    smallText: !0
                }
            },
            buttonLabels: {
                "default": {
                    text: "",
                    title: n(52).t("Help")
                }
            }
        })
    },
    144: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '    <h4 class="sc-type-medium sc-type-light emptyNetworkPage__subheadline">' + e.escapeExpression((o = null != (o = n.subheaderMessage || (null != t ? t.subheaderMessage : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "subheaderMessage",
                    hash: {},
                    data: r
                }) : o)) + "</h4>\n"
            },
            3: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <a href="' + c((s = null != (s = n.linkUrl || (null != t ? t.linkUrl : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "linkUrl",
                    hash: {},
                    data: r
                }) : s)) + '" ' + (null != (o = n["if"].call(a, null != t ? t.linkExternal : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + ' class="sc-text-link ">' + c((s = null != (s = n.linkText || (null != t ? t.linkText : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "linkText",
                    hash: {},
                    data: r
                }) : s)) + "</a>\n"
            },
            4: function(e, t, n, i, r) {
                return 'target="_blank"'
            },
            6: function(e, t, n, i, r) {
                return "      &nbsp;\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<div class="emptyNetworkPage ' + c((s = null != (s = n.emptyPageClass || (null != t ? t.emptyPageClass : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "emptyPageClass",
                    hash: {},
                    data: r
                }) : s)) + '">\n  <div class="emptyNetworkPage__image"></div>\n  <h3 class="sc-type-large emptyNetworkPage__headline">' + c((s = null != (s = n.message || (null != t ? t.message : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "message",
                    hash: {},
                    data: r
                }) : s)) + "</h3>\n" + (null != (o = n["if"].call(a, null != t ? t.subheaderMessage : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  <span class="sc-type-h3 emptyNetworkPage__action">\n' + (null != (o = n["if"].call(a, null != t ? t.linkUrl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.program(6, r, 0),
                    data: r
                })) ? o : "") + "  </span>\n</div>\n"
            },
            useData: !0
        })
    },
    145: function(e, t, n) {
        var i = n(1850);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    149: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.bubble ? this.bubble("requestPlayContext", {
                    sound: e
                }).data : {},
                n = t.source,
                i = t.restoreUrl;
            return {
                restoreUrl: i,
                source: n || e.playlist || e
            }
        }

        function r() {
            var e = n(55).get("router").getLayoutInfo(),
                t = e.args,
                i = e.layoutName,
                r = window.location,
                o = r.pathname,
                s = r.search,
                a = r.hash,
                l = o.slice(1) + s + a;
            return {
                args: t,
                layoutName: i,
                url: l
            }
        }

        function o(e) {
            return e && e.hasDataForPlay && !e.hasDataForPlay()
        }
        e.exports = new(n(21))({
            toggleAudible: function(e, t) {
                this[e.isPlaying() ? "pauseAudible" : "playAudible"](e, t)
            },
            playAudible: function(e, t) {
                var s = this,
                    a = r(),
                    l = function() {
                        var r = e.getCurrentSound(),
                            o = i.call(s, r),
                            l = o.source,
                            u = o.restoreUrl;
                        n(67).playSource(l, r, u, a, t)
                    };
                o(e) ? e.fetch().done(l) : l()
            },
            pauseAudible: function(e, t) {
                e.pause(t)
            },
            toggleSource: function(e, t, i) {
                var o = r();
                n(67).toggleSource(e, t, o, i)
            },
            addExplicitQueueItem: function(e) {
                var t = this,
                    o = r(),
                    s = void 0;
                e.getSounds().forEach(function(e) {
                    var r = s || (s = i.call(t, e)),
                        a = r.source,
                        l = r.restoreUrl;
                    n(92).addExplicitQueueItem(a, e, l, o)
                })
            }
        })
    },
    151: function(e, t, n) {
        "use strict";

        function i(e) {
            this.setFieldValue(e), this.validateOwnField(), this.focus()
        }

        function r() {
            var e = this.getFieldValue(),
                t = null == e && !this.options.showBlank;
            if ("linkMenu" === this.options.style) {
                var n = this.subviews.linkButton;
                n.activeLinkId = t ? a.call(this)[0].value : e, n.updateMenu(), n.updateButton()
            } else t ? this.getElement("control").prop("selectedIndex", 0) : this.getElement("control").val(null === e ? null : String(e))
        }

        function o(e, t) {
            var i = n(3).find(e, function(e) {
                return String(e.value) === String(t)
            });
            return i ? i.value : null
        }

        function s(e) {
            return e.map(function(e) {
                var t = e.label,
                    n = e.value;
                return {
                    label: t,
                    value: String(n)
                }
            })
        }

        function a() {
            var e = this.getMetaData(),
                t = e.datasource,
                n = e.datasourceToSelectOptions;
            return n ? n(t) : t
        }

        function l() {
            if (!this.subviews.linkButton) {
                var e, t = this.options,
                    i = t.size,
                    r = t.plain,
                    o = t.customClassName,
                    s = this.getMetaData(),
                    l = s.groups,
                    d = {};
                if (l) d = {
                    groups: l
                };
                else {
                    var h = a.call(this).map(function(e) {
                        return n(3).defaults({
                            id: e.value,
                            label: String(e.label)
                        }, e)
                    });
                    this.options.showBlank && h.unshift({
                        id: "",
                        label: new u("&nbsp;"),
                        value: ""
                    }), d = {
                        links: h
                    }
                }
                e = new c(n(3).assign({}, d, {
                    customClassName: o,
                    control: this,
                    size: i,
                    plain: r
                })), this.addSubview(e, "linkButton")
            }
            return this.subviews.linkButton
        }
        var u = n(20).SafeString,
            c = (e.exports = n(54).extend(n(113), n(217), n(545).withOptions({
                action: function(e) {
                    var t = e.actionOnEnter;
                    return t
                }
            }), {
                template: n(2394),
                css: n(2779),
                className: "select",
                defaults: {
                    customClassName: "",
                    label: null,
                    labelClass: "",
                    hintHTML: "",
                    showBlank: !0,
                    blankText: "",
                    size: "medium",
                    style: "native",
                    plain: !1,
                    actionOnEnter: ""
                },
                element2selector: {
                    control: ".select__select",
                    label: ".select__labelText",
                    options: "option",
                    validation: ".select__validation"
                },
                setup: function() {
                    n(3).bindAll(this, "onControlChange")
                },
                getTemplateData: function(e) {
                    return e.options = s(a.call(this)), e["style_is_" + this.options.style] = !0, e
                },
                syncRequired: function() {
                    this.syncRequiredness(this.getElement("label"), this.getElement("control"))
                },
                renderDecorate: function() {
                    var e = this.options,
                        t = e.style,
                        n = e.labelClass;
                    if ("linkMenu" === t) {
                        var i = l.call(this);
                        this.$(".select__linkMenuPlaceholder").replaceWith(i.render().el), r.call(this)
                    } else r.call(this), this.getElement("control").on("change", this.onControlChange), this.syncRequired();
                    n && this.getElement("label").addClass(n)
                },
                onFieldChange: function() {
                    r.call(this)
                },
                onControlChange: function() {
                    var e = this.getElement("control").val(),
                        t = o(a.call(this), e);
                    i.call(this, t)
                }
            }), n(107).extend(n(547), {
                className: "sc-button-dropdown",
                defaults: {
                    isScButton: !0,
                    links: null,
                    groups: null,
                    control: null,
                    size: "medium",
                    plain: !1,
                    customClassName: ""
                },
                activeLinkId: null,
                states: {
                    plain: "sc-button-dropdown-plain"
                },
                setup: function(e) {
                    var t = e.plain,
                        i = e.customClassName;
                    n(107).prototype.setup.apply(this, arguments), this.$el.toggleClass(i), this.toggleState("plain", t)
                },
                getLinkGroups: function() {
                    var e = this.options,
                        t = e.groups,
                        n = e.links;
                    return t || [{
                        links: n
                    }]
                },
                getActiveLinkId: function() {
                    return this.activeLinkId
                },
                getButtonText: function() {
                    var e, t = this,
                        i = this.options,
                        r = i.groups,
                        o = i.links;
                    return r ? r.some(function(i) {
                        return e = n(3).findWhere(i.links, {
                            id: t.activeLinkId
                        })
                    }) : e = n(3).findWhere(o, {
                        id: this.activeLinkId
                    }), (e && e.label || "").toString()
                },
                onLinkClick: function(e) {
                    i.call(this.options.control, e.value), this.toggleOverlay()
                }
            }))
    },
    158: function(e, t, n) {
        "use strict";

        function i() {
            return this.model.getCurrentSound()
        }

        function r() {
            this.disposed || this.toggleState("playing", this.model.isPlaying())
        }

        function o(e) {
            n(59).trackV0Click(["audibleTile", e], {
                click_name: "item_navigation",
                context: this.getContextData()
            })
        }
        var s = ["like", "startStation", "repost", "addToNextUp", "addToPlaylist", "share", "download"],
            a = "always",
            l = "hover";
        e.exports = n(54).extend(n(165), n(149), n(218).withOptions({
            getSound: i
        }), n(550), {
            className: "audibleTile",
            template: n(2382),
            css: n(2763),
            defaults: {
                showDescription: a,
                showPlayButton: l,
                showActions: l,
                disableNavigation: !1,
                lazyLoadImage: !1,
                isLike: !1,
                type: null,
                darkBackground: !1,
                uiSize: "normal"
            },
            states: {
                dark: "m-dark",
                playing: "m-playing",
                overlayOpen: "m-overlayOpen",
                largeUI: "m-largeUI",
                navigationDisabled: "m-navigationDisabled"
            },
            element2selector: {
                playButton: ".audibleTile__playButton .sc-button"
            },
            events: {
                "click .audibleTile__artworkLink": "onArtworkClick",
                "click .audibleTile__usernameHeading": "onUsernameClick",
                "click .audibleTile__audibleHeading": "onAudibleClick"
            },
            bubbleEvents: {
                "dropdownButton:toggle": "onOverlayToggled"
            },
            requiredAttributes: ["title", "sharing", "user.username", "user.permalink"],
            setup: function(e) {
                var t = e.darkBackground,
                    n = e.uiSize,
                    i = e.showDescription,
                    o = e.showPlayButton,
                    s = e.showActions,
                    a = e.disableNavigation;
                this.listenTo(this.model, "play pause", r).toggleState("dark", !!t).toggleState("largeUI", "large" === n).toggleState("navigationDisabled", a), this.setShowDescription(i), this.setShowPlayButton(o), this.setShowActions(s), r.call(this)
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = this.options,
                    r = i.resource_type,
                    o = i.isLike,
                    a = i.uiSize,
                    l = n(341).getActionSet(t, function(e) {
                        return n(3).contains(s, e)
                    }),
                    u = n(341).overflowActions(l, 2, 1),
                    c = u.overflow;
                return e.isSound = "sound" === r, e.isPlaylist = "playlist" === r, e.hasActions = l.length > 0, e.hasLikeAction = n(3).contains(l, "like"), e.hasOverflowActions = c.length > 0, e.overflowActions = c, e.isPrivate = t.isPrivate(), e.isLike = !e.isPrivate && o, e.largeUI = "large" === a, e.tierIndicatorVariant = "large" === a ? "largeArtwork" : "smallArtwork", e.tierIndicatorClassName = "large" === a ? "audibleTile__tierIndicatorLarge" : "audibleTile__tierIndicatorSmall", e
            },
            setShowDescription: function(e) {
                this.el.setAttribute("data-description", e)
            },
            setShowPlayButton: function(e) {
                this.el.setAttribute("data-playButton", e)
            },
            setShowActions: function(e) {
                this.el.setAttribute("data-actions", e)
            },
            onArtworkClick: function(e) {
                if (this.getState("navigationDisabled")) return e.preventDefault(), void e.stopPropagation();
                var t = this.bubble("audibleTile:artwork:click", {
                        source: this
                    }),
                    n = t.data;
                return n.preventDefault ? void e.preventDefault() : void o.call(this, "audible")
            },
            onUsernameClick: function() {
                o.call(this, "username")
            },
            onAudibleClick: function() {
                o.call(this, "audible")
            },
            onOverlayToggled: function(e) {
                this.toggleState("overlayOpen", e.data.isOpened)
            }
        })
    },
    159: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(846),
            className: "loading",
            defaults: {
                size: "regular",
                dark: !1,
                padded: !0,
                padding: ""
            },
            states: {
                padded: "m-padded",
                dark: "dark"
            },
            setup: function(e) {
                var t = e.size,
                    n = e.dark,
                    i = e.padded,
                    r = e.padding;
                this.$el.addClass(t), this.toggleState("dark", n), r ? this.$el.css({
                    padding: r + " 0"
                }) : this.toggleState("padded", i)
            },
            template: function() {
                return ""
            }
        })
    },
    167: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.limit,
                n = e.resource_id,
                i = e.resource_type;
            return {
                userId: n,
                resource_id: n,
                resource_type: i,
                limit: t
            }
        }
        var r = {
            likes: {
                CollectionClass: n(213).getFilterClass(),
                collectionArgs: i,
                Subview: n(158),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "like"
                },
                ReadMoreView: n(1425),
                getSubviewModel: function(e) {
                    return e.getAudible()
                },
                getRestoreUrl: function() {
                    return n(61).getRoute("youNetwork", null, "likes")
                }
            },
            playlists: {
                CollectionClass: n(520),
                collectionArgs: i,
                Subview: n(158),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "playlist"
                },
                ReadMoreView: n(1005)
            },
            "liked-and-owned-playlists": {
                CollectionClass: n(912),
                collectionArgs: i,
                Subview: n(158),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "liked-and-owned-playlists"
                },
                ReadMoreView: n(1005),
                getSubviewModel: function(e) {
                    return e.getAudible()
                }
            },
            "liked-albums": {
                CollectionClass: n(910),
                collectionArgs: i,
                Subview: n(158),
                subviewArgs: {
                    lazyLoadImage: !0,
                    type: "liked-albums"
                },
                ReadMoreView: n(1424),
                getSubviewModel: function(e) {
                    return e.getAudible()
                }
            },
            reposters: {
                playable: !1,
                CollectionClass: n(447),
                collectionArgs: function(e) {
                    var t = e.limit,
                        n = e.resource_id,
                        i = e.resource_type;
                    return {
                        type: "reposters",
                        resource_id: n,
                        resource_type: i,
                        limit: t
                    }
                },
                Subview: n(244)
            },
            likers: {
                playable: !1,
                CollectionClass: n(447),
                collectionArgs: function(e) {
                    var t = e.limit,
                        n = e.resource_id,
                        i = e.resource_type;
                    return {
                        type: "likers",
                        resource_id: n,
                        resource_type: i,
                        limit: t
                    }
                },
                Subview: n(244)
            },
            followings: {
                playable: !1,
                CollectionClass: n(296).getFilterClass(),
                collectionArgs: i,
                Subview: n(244),
                ReadMoreView: n(1004)
            },
            followers: {
                playable: !1,
                CollectionClass: n(449),
                collectionArgs: i,
                Subview: n(244),
                ReadMoreView: n(1004)
            },
            "liked-stations": {
                playable: !1,
                CollectionClass: n(902).getFilterClass(),
                collectionArgs: i,
                Subview: n(492),
                ReadMoreView: n(1426)
            },
            "chart-tracks": {
                CollectionClass: n(326),
                collectionArgs: function(e) {
                    var t = e.chartKind,
                        n = e.genre;
                    return {
                        chartKind: t,
                        genre: n
                    }
                },
                Subview: n(1404),
                subviewArgs: {},
                getRestoreUrl: function() {
                    var e = this.options,
                        t = e.chartKind,
                        i = e.genre;
                    return n(61).getRoute("charts", t, i)
                }
            },
            "related-sounds": {
                CollectionClass: n(294),
                collectionArgs: function(e) {
                    var t = e.resource_id,
                        n = e.resource_type;
                    return {
                        resource_id: t,
                        resource_type: n
                    }
                },
                Subview: n(158),
                subviewArgs: {
                    lazyLoadImage: !0
                },
                additionalDataSources: function(e) {
                    var t = e.resource_id;
                    return {
                        sourceSound: new(n(66))({
                            resource_id: t
                        })
                    }
                },
                getRestoreUrl: function() {
                    return n(61).getRoute("listenNetwork", this._additionalSources.sourceSound, "related")
                }
            },
            "recommended-stations": {
                playable: !1,
                CollectionClass: n(904),
                collectionArgs: function(e) {
                    var t = e.stationType;
                    return {
                        type: t
                    }
                },
                Subview: n(492)
            },
            "play-history-contexts": {
                playable: !1,
                CollectionClass: n(329).getFilterClass(),
                collectionArgs: i,
                Subview: n(1416)
            },
            "artist-station-tracks": {
                CollectionClass: n(212),
                collectionArgs: i,
                Subview: n(158),
                getRestoreUrl: function() {
                    var e = n(119).instances.get(this.options.resource_id);
                    return e ? n(61).getRoute("station", e) : ""
                }
            },
            "artist-profile-tracks": {
                CollectionClass: n(214),
                collectionArgs: function(e) {
                    var t = e.userId;
                    return {
                        userId: t,
                        keepBlocked: !1
                    }
                },
                Subview: n(158),
                getRestoreUrl: function() {
                    var e = n(64).instances.get(this.options.userId);
                    return e ? n(61).getRoute("user", e, "tracks") : ""
                }
            },
            "track-search-results": {
                CollectionClass: n(295),
                collectionArgs: function(e) {
                    var t = e.searchParams;
                    return {
                        category: "sounds",
                        params: t
                    }
                },
                Subview: n(1624),
                getRestoreUrl: function() {
                    return n(61).getRoute("search", "sounds", this.options.searchParams.q)
                }
            }
        };
        e.exports = n(78).extend(n(106), {
            css: n(2765),
            className: "badgeList",
            itemClassName: "badgeList__item",
            defaults: {
                type: "likes",
                limit: 6,
                chartKind: n(198).defaultKind,
                genre: n(198).defaultGenre,
                stationType: null,
                emptyTemplate: null,
                searchParams: null,
                userId: null
            },
            loadingViewArgs: {
                padded: !1
            },
            PlaceholderView: n(1358),
            setup: function(e) {
                var t = this,
                    i = r[e.type];
                this.Subview = i.Subview, this.subviewArgs = i.subviewArgs, this.ReadMoreView = i.ReadMoreView, i.getSubviewModel && (this.getSubviewModel = i.getSubviewModel);
                var o = i.collectionArgs(e);
                this.collection = new i.CollectionClass(null, o), o.limit && this.collection.setLimit(o.limit), i.getRestoreUrl && (this.getRestoreUrl = i.getRestoreUrl), i.additionalDataSources && (this._additionalSources = i.additionalDataSources(e), n(3).each(this._additionalSources, function(e) {
                    t.addDataSource(e)
                })), this.$el.addClass(this.options.maxDisplay > 6 ? "m-twoRows" : "m-oneRow")
            },
            onCollectionReset: function() {
                this.disposed || n(78).prototype.onCollectionReset.apply(this, arguments)
            },
            getSubviewArgs: function(e) {
                var t = n(78).prototype.getSubviewArgs.apply(this, arguments);
                switch (this.options.type) {
                    case "likes":
                    case "liked-albums":
                        t.isLike = !0;
                        break;
                    case "liked-and-owned-playlists":
                        t.isLike = !n(55).get("me").owns(e)
                }
                return t
            },
            getEmptyTemplate: function() {
                return this.options.emptyTemplate
            },
            getQueueSource: function() {
                var e = r[this.options.type];
                return e.playable !== !1 ? this.collection : null
            }
        })
    },
    176: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2384),
            className: "checkbox sc-checkbox",
            tagName: "label",
            defaults: {
                label: "",
                showLabel: !0,
                name: "",
                checked: !1,
                disabled: !1
            },
            element2selector: {
                input: ".sc-checkbox-input",
                label: ".sc-checkbox-label"
            },
            states: {
                disabled: "sc-checkbox-disabled",
                indeterminate: function(e) {
                    this.$el.toggleClass("sc-checkbox-indeterminate", e), this.getElement("input").prop("indeterminate", e), e && this.setChecked(!0)
                }
            },
            events: {
                "change .sc-checkbox-input": "onInputChange"
            },
            setup: function(e) {
                var t = e.disabled;
                this.toggleState("disabled", t)
            },
            getChecked: function() {
                return this.getElement("input").prop("checked")
            },
            setChecked: function(e) {
                this.getElement("input").prop("checked", !!e)
            },
            setIndeterminate: function(e) {
                this.toggleState("indeterminate", e)
            },
            onInputChange: function(e) {
                var t = ["checkbox", "change"],
                    n = this.options.name,
                    i = {
                        name: n,
                        checked: e.target.checked
                    };
                this.setIndeterminate(!1), this.bubble(t.join(":"), i), n && (t.push(n), this.bubble(t.join(":"), i))
            }
        })
    },
    178: function(e, t, n) {
        "use strict";
        var i = 3e3;
        e.exports = n(54).extend(n(472), n(965), {
            ModelClass: n(66),
            requiredAttributes: ["commentable"],
            defaults: {
                sound_id: null,
                timestamp: null,
                bulkFetch: n(55).get("maxComments"),
                recipient: null
            },
            isFocused: !1,
            isFormRendered: !1,
            states: {
                visible: "visible"
            },
            events: {
                click: "onClick"
            },
            setup: function() {
                this.listenTo(n(67), "change:currentSound", this.onChangeCurrentSound)
            },
            renderDecorate: function() {
                var e = this;
                this.resetElementCache(), this.toggleState("visible", this.canShow()), this.options.recipient && this.whenInserted().done(function() {
                    e.setRecipient(e.options.recipient), e.focus()
                })
            },
            onChangeCurrentSound: function(e) {
                this.isNowPlaying(e) && !this.isFormRendered && (this.render(), this.toggleState("visible", !0))
            },
            isNowPlaying: function(e) {
                return e && e.current.resource_id === this.model.resource_id && this.model.isCommentable()
            },
            canShow: function() {
                var e = this.model.isCommentable(),
                    t = n(67).getCurrentSound(),
                    i = t && t.id,
                    r = this.getCurrentState();
                return e && (r !== n(101).INITIAL || this.model.id === i || "large" === this.options.size)
            },
            onInputFocus: function() {
                this.isFocused = !0, this.isActiveTimestampState() || (this.sound.currentTime() > 0 ? this.goToState(n(101).ACTIVE_TIMESTAMP, this.options.timestamp || this.sound.currentTime()) : this.goToState(n(101).ACTIVE_TIMESTAMP, Math.floor((.8 * Math.random() + .2) * this.sound.getMediaDuration())))
            },
            cancelInput: function() {
                this.goToState(n(101).INITIAL)
            },
            onClick: function(e) {
                e.stopPropagation()
            },
            onInputBlur: function() {
                this.getCurrentState() === n(101).INITIAL && this.isEmpty() && (this.isFocused = !1, this.cancelInput())
            },
            onInitialState: function() {
                this.isEmpty() && this.setTimestamp(this.sound.currentTime()), this.toggleState("active", !1).toggleState("recipientActive", !1), this.getRecipient() && this.setRecipient()
            },
            onActiveTimestamp: function(e, t) {
                null !== e && (t ? (this._replyToId = t.id, this.setRecipient(t.get("user").permalink), this.setTimestamp(t.get("timestamp"))) : (this._replyToId = null, this.setRecipient(), this.setTimestamp(e)), !this.isFormRendered && this.canShow() && this.render(), this.toggleState("active", !0), this.getElement("input").trigger("focus"))
            },
            onCurrentCommentChange: function() {
                this.isFormRendered || this.render(), this.toggleState("visible", !0)
            },
            setTimestamp: function(e) {
                this.options.timestamp = e
            },
            getData: function(e) {
                var t = n(55).get("me").toJSON();
                return {
                    body: this.getCombinedBody(),
                    timestamp: e,
                    replyTo: this._replyToId,
                    created_at: (new Date).toISOString(),
                    user_id: t.id,
                    user: t,
                    track_id: this.sound.id
                }
            },
            getTemplateData: function(e) {
                return e.is_visible = this.isFormRendered = this.canShow(), e.is_large = "large" === this.options.size, e
            },
            postComment: function(e) {
                var t = this;
                if (!this.disposed) {
                    var r = new(n(108))(this.getData(e));
                    r.lastFetchTime = Date.now(), r.release(), n(74).notify("comment", {
                        object: r,
                        target: this.options.sound_id,
                        targetType: "sound"
                    }), r.setEditState(n(136).SAVING).save().done(function() {
                        r.setEditState(n(136).NONE), t.trigger(n(206).SENT, r), t.bubble(n(206).SENT, r), n(57).trigger(n(206).SENT, r), t.disposed || (t.clear(), window.setTimeout(function() {
                            t.goToState(n(101).INITIAL)
                        }, i))
                    }).fail(function() {
                        r.destroy()
                    }), this.trigger(n(206).POSTED, this.options.timestamp), this.bubble(n(206).POSTED, this.options.timestamp), this.rerender(), this.resetElementCache(), this._isPostingComment = !1
                }
            }
        }, {
            Events: n(206)
        })
    },
    194: function(e, t, n) {
        "use strict";

        function i() {
            this.modal || (this.modal = new(n(71))({
                togglerEl: this.el,
                width: 520,
                Subview: n(280),
                subviewArgs: {
                    resource_id: this.options.resource_id
                }
            })), this.modal.open()
        }
        e.exports = n(54).extend(n(88), {
            className: "reportButton",
            defaults: {
                responsive: !1,
                showUserName: !1,
                showIcon: !1
            },
            buttonLabels: {
                "default": function() {
                    return this.options.showUserName ? n(52).t("Report [[username]]", {
                        username: this.model.get("username")
                    }) : n(52).t("Report")
                }
            },
            ModelClass: n(64),
            modal: null,
            setup: function(e) {
                var t = e.showIcon;
                this.$el.toggleClass("sc-button-block", t)
            },
            onClick: function(e) {
                e.preventDefault(), i.call(this)
            }
        })
    },
    205: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.options.conditionFn,
                n = this.getFieldValue(),
                i = t ? t.call(this, n) : !!n;
            e = e || {}, i !== this.visible && r.call(this, i, e.forceNoAnimation)
        }

        function r(e, t) {
            var n = this.options.animate && !t;
            n ? this[e ? "slideDown" : "slideUp"]() : this.$el.css("display", e ? "" : "none"), this.visible = e
        }
        e.exports = n(54).extend(n(113), n(202).withOptions({
            automatic: !1
        }), {
            className: "section",
            slideInnerSelector: ".section__wrapper",
            defaults: {
                conditionFn: null,
                animate: !0,
                blockContent: null
            },
            visible: null,
            renderDecorate: function() {
                i.call(this, {
                    forceNoAnimation: !0
                })
            },
            onFieldChange: function() {
                i.call(this)
            },
            template: function() {
                return '<div class="section__wrapper">' + this.options.blockContent + "</div>"
            }
        })
    },
    206: function(e, t) {
        "use strict";
        e.exports = {
            POSTED: "commentForm:posted",
            SENT: "commentForm:sent",
            CANCELED: "commentForm:canceled",
            FOCUSED: "commentForm:focused"
        }
    },
    209: function(e, t, n) {
        var i = n(1861);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    217: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e ? n(3).uniqueId("validation_") : "";
            this.$el.toggleClass("invalid", e), this.getElement("validation").toggleClass("g-input-validation-hidden", !e).attr("id", t), this.getElement("control").attr("aria-invalid", e).attr("aria-describedBy", t)
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                e.states = e.states || {};
                e.states = n(3).defaults(e.states || {}, {
                    invalid: i
                })
            },
            markAsValid: function() {
                var e = this.getMetaData();
                e.isValid = !0, e.validity = n(173).UNKNOWN, this.setValidation({
                    isValid: !0
                })
            },
            onValidationChange: function(e) {
                this.setValidation(e)
            },
            setValidation: function(e) {
                var t = e.isValid,
                    n = e.message;
                this.getElement("validation").html(t || !n ? "" : n.toString()), this.toggleState("invalid", !t, !0)
            }
        })
    },
    221: function(e, t, n) {
        "use strict";

        function i() {
            var e, t;
            this.fullScreen || (e = this.$el.width(), t = this.$el.height()), this.initCanvasDimensions(e, t), this.onCanvasResize()
        }

        function r(e) {
            var t = e.recalcOnWindowResizeX,
                n = e.recalcOnWindowResizeY;
            return t && n ? "resize:debounced" : t ? "resize:x:debounced" : n ? "resize:y:debounced" : ""
        }
        var o = function() {
                var e = window.document.createElement("canvas").getContext("2d");
                return e.backingStorePixelRatio || e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || 1
            }(),
            s = window.devicePixelRatio ? (Math.floor(window.devicePixelRatio) || 1) / o : 1;
        e.exports = n(54).extend({
            tagName: "canvas",
            className: "g-box-full waveform__layer",
            attributes: {
                "aria-hidden": "true"
            },
            context: null,
            scale: null,
            template: n(3).constant(""),
            onCanvasResize: n(3).noop,
            recalcOnWindowResizeX: !0,
            recalcOnWindowResizeY: !1,
            _setup: function() {
                this.context = this.el.getContext("2d"), this.scale = s;
                var e = r(this);
                e && this.listenTo(n(85), e, i), n(54).prototype._setup.apply(this, arguments)
            },
            renderDecorate: function() {
                var e = this;
                this.whenInserted().done(function() {
                    e.initCanvasDimensions(), e.onCanvasResize()
                })
            },
            initCanvasDimensions: function(e, t) {
                var i = this.context,
                    r = i.canvas,
                    o = this.scale;
                this.fullScreen && (e = window.innerWidth, t = window.innerHeight, r.style.width = e + "px", r.style.height = t + "px");
                var s = e || this.el.offsetWidth,
                    a = t || this.el.offsetHeight;
                r.width = s * o, r.height = a * o, n(112).isHiDPI && 1 !== o && i.scale(o, o)
            }
        })
    },
    222: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.getFieldValue(),
                t = this.getElement("buttons");
            t.get().forEach(function(t) {
                t.checked = t.value === e
            })
        }
        e.exports = n(54).extend(n(113), n(217), {
            className: "radioGroup",
            template: n(2393),
            css: n(1161),
            element2selector: {
                buttons: "input",
                validation: ".radioGroup__validation"
            },
            defaults: {
                direction: "horizontal"
            },
            setup: function() {
                this.groupName = n(3).uniqueId("radio"), this.$el.addClass(this.options.direction)
            },
            getFocusableElement: function() {
                var e = this.getElement("buttons"),
                    t = e.filter(":checked");
                return t.length ? t : e.first()
            },
            getTemplateData: function(e) {
                e.groupName = this.groupName, e.buttons = this.getDatasource()
            },
            onFieldChange: function() {
                i.call(this), this.resetOwnValidation(), this.validateOwnField()
            },
            renderDecorate: function() {
                var e = this;
                i.call(this), this.getElement("buttons").on("change", function() {
                    e.setFieldValue(this.value)
                })
            }
        })
    },
    225: function(e, t, n) {
        "use strict";
        var i = n(59).trackImpression;
        e.exports = n(54).extend(n(68).withOptions("incoming-activity"), {
            template: n(424),
            className: "activity",
            css: n(438),
            defaults: {
                activity: null,
                show_context: !0,
                showHTUpsell: !1
            },
            setup: function(e) {
                this.model = e.activity, this.model.hold()
            },
            renderDecorate: function() {
                if (this.model.isPromoted()) {
                    var e = this.getContextData(),
                        t = this.model.get("type"),
                        r = "track-promoted" === t ? "promoted_track" : "playlist-promoted" === t ? "promoted_playlist" : null;
                    n(82).trackEvent("impression", e), i({
                        context: e,
                        impression_name: r
                    })
                }
            },
            getTemplateData: function(e) {
                var t, i = this.model.get("type"),
                    r = n(55).get("me");
                return t = n(3).reduce(["track", "track-like", "track-repost", "track-sharing", "track-promoted", "playlist", "playlist-like", "playlist-repost", "playlist-sharing", "playlist-promoted", "comment", "affiliation"], function(e, t) {
                    return e["type_is_" + t.replace(/-/, "_")] = i === t, e
                }, {
                    type_is_like: /like$/.test(i),
                    type_is_repost: /repost$/.test(i),
                    type_is_sharing: /sharing$/.test(i),
                    type_is_tracky: /^track/.test(i),
                    type_is_playlisty: /^playlist/.test(i)
                }), t.type_is_audible = t.type_is_track || t.type_is_playlist, "comment" === i ? (e.track = e.comment.track, e.user = e.user || e.comment.user, e.can_delete_comment = r.owns("sound", e.track) || r.owns("comment", e.comment), e.contentType = n(52).t("comment")) : t.type_is_playlisty ? (e.audible = e.playlist, e.subresource_type = "playlist", e.contentType = n(52).t("playlist")) : "affiliation" === i ? (e.subresource_type = "user", e.contentType = n(52).t("user")) : (e.audible = e.track, e.subresource_type = "sound", e.contentType = n(52).t("track")), (t.type_is_audible || t.type_is_sharing) && (e.user = e.audible.user), e.sharing_note && void 0 !== e.sharing_note.text && 0 === e.sharing_note.text.trim().length && (e.sharing_note = !1), e.time_prefix = t.type_is_sharing ? n(52).t("Shared") : t.type_is_repost ? n(52).t("Reposted") : t.type_is_audible ? n(52).t("Posted") : "", n(3).assign(e, t)
            },
            onContextRequest: function(e) {
                e.data.urn || (e.data.urn = n(3).result(this.model.getSound(), "getUrn"))
            }
        })
    },
    226: function(e, t, n) {
        "use strict";

        function i() {
            this.modal || (this.modal = new(n(71))({
                togglerEl: this.el,
                width: 520,
                Subview: n(1741),
                subviewArgs: {
                    resource_id: this.options.resource_id
                }
            })), this.modal.open()
        }
        var r = ["system"];
        e.exports = n(54).extend(n(68).withOptions("muteButton"), n(88), {
            className: "blockButton",
            defaults: {
                responsive: !1,
                showUserName: !1,
                showIcon: !1
            },
            buttonLabels: {
                "default": function() {
                    return this.options.showUserName ? n(52).t("Block [[username]]", {
                        username: this.user.get("username")
                    }) : n(52).t("Block")
                },
                selected: {
                    text: function() {
                        return this.options.showUserName ? n(52).t("Blocked [[username]]", {
                            username: this.user.get("username")
                        }) : n(52).t("Blocked")
                    },
                    title: function() {
                        return this.options.showUserName ? n(52).t("Unblock [[username]]", {
                            username: this.user.get("username")
                        }) : n(52).t("Unblock")
                    }
                }
            },
            ModelClass: n(986),
            modal: null,
            setup: function(e) {
                var t = e.resource_id,
                    i = e.showUserName,
                    o = e.showIcon;
                this.$el.toggleClass("sc-button-block", o), this.user = this.addDataSource(new(n(64))({
                    id: t
                }), {
                    requiredAttributes: i ? ["username"] : []
                }), this.observedAttributes = [t], r.indexOf(t) > -1 && this.$el.hide()
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                e.preventDefault(), this.isButtonSelected() ? n(74).block(this.options.resource_id, !1, !1, !1, {
                    context: this.getContextData()
                }) : i.call(this)
            }
        })
    },
    236: function(e, t, n) {
        "use strict";
        var i, r, o;
        o = n(73).extend({
            model: n(65).extend(),
            _highlights: [],
            setup: function(e) {
                var t, i = e.items;
                e && e.query && (t = n(131).fuzzy(e.query, i, e.titleAttr), this._highlights = n(3).pluck(t, "highlights"), i = n(3).pluck(t, "item")), this.reset(i, {
                    silent: !0
                })
            },
            hasDataForView: function() {
                return !0
            },
            getHighlightsFor: function(e) {
                var t = this.models.indexOf(e);
                return this._highlights[t]
            }
        }), r = n(54).extend({
            defaults: {
                highlights: null,
                titleAttr: null
            },
            template: function() {
                var e = this.options,
                    t = e.titleAttr,
                    i = e.highlights,
                    r = this.model.get(t);
                return this.options.highlights ? n(131).highlightText(r.toString(), i) : r
            }
        }), i = n(80).extend(n(263), n(307), {
            css: n(2774),
            Subview: r,
            className: "comboBoxList sc-border-box sc-list-nostyle sc-type-small",
            itemClassName: "comboBoxList__item",
            itemSelector: ".comboBoxList__item",
            maxItemDisplay: 0,
            defaults: {
                query: "",
                Collection: null,
                collectionItems: null,
                titleAttr: null,
                defaultSelectedItemIndex: null
            },
            setup: function(e) {
                this.collection = new e.Collection(null, {
                    items: e.collectionItems,
                    titleAttr: e.titleAttr,
                    query: e.query
                })
            },
            getSubviewArgs: function(e) {
                return {
                    model: e,
                    titleAttr: this.options.titleAttr,
                    highlights: this.collection.getHighlightsFor(e)
                }
            },
            onItemSelected: function(e) {
                return this.collection.at(e)
            },
            renderDecorate: function() {
                var e = this;
                n(80).prototype.renderDecorate.call(this), this.highlightItem(this.options.defaultSelectedItemIndex), this.whenInserted().done(function() {
                    e.setupScrollable(e.getListContainer(), e.getListElement(), {
                        hScroll: !1
                    })
                })
            }
        });
        e.exports = n(60).extend(n(350), {
            defaults: {
                ComboCollection: null,
                comboCollectionItems: null,
                titleAttr: "title",
                valueAttr: "value",
                showAllItems: !0,
                submitFormOnEnter: !1
            },
            selectOnTab: !0,
            events: n(3).assign({}, n(60).prototype.events, {
                "focus .textfield__input": "onFocus"
            }),
            MenuContentView: i,
            inputSelector: ".textfield__input",
            setup: function(e) {
                this.showAllItems = e.showAllItems, n(3).isArray(e.ComboCollection) && (e.comboCollectionItems = e.ComboCollection, e.ComboCollection = o), this.datasource = new e.ComboCollection(null, {
                    items: e.comboCollectionItems
                }), n(60).prototype.setup.apply(this, arguments)
            },
            menuContentViewArgs: function() {
                return {
                    titleAttr: this.options.titleAttr,
                    Collection: this.options.ComboCollection,
                    collectionItems: this.options.comboCollectionItems
                }
            },
            onFocus: function() {
                var e = this;
                this.addDeferred(n(3).defer(function() {
                    e.getElement("control").select()
                }))
            },
            onItemSelected: function(e) {
                var t = this.options,
                    n = t.valueAttr,
                    i = t.titleAttr,
                    r = e.get(n);
                this.setControlValue(e.get(i)), this.setFieldValue(r), this.getElement("control").trigger("change", r)
            },
            getControlValue: function() {
                return this.getElement("control").val().trim()
            },
            setControlValue: function(e) {
                return this.getElement("control").val(e)
            },
            setValueAgain: function() {
                this.setValue(this.getControlValue())
            },
            getValue: function() {
                return this.getValueByTitle(this.getControlValue())
            },
            onFieldChange: function(e, t) {
                var n = this.getTitleByValue(t);
                this.setControlValue(n || t)
            },
            getValueByTitle: function(e) {
                var t = this.datasource.find(function(t) {
                    return t.get(this.options.titleAttr) === e
                }, this);
                return t ? t.get(this.options.valueAttr) : void 0
            },
            getTitleByValue: function(e) {
                var t = this.datasource.find(function(t) {
                    return t.get(this.options.valueAttr) === e
                }, this);
                return t ? t.get(this.options.titleAttr) : void 0
            },
            getTemplateData: function(e) {
                n(60).prototype.getTemplateData.apply(this, arguments);
                var t = this.getFieldValue();
                e._value = this.getTitleByValue(t) || t
            },
            getDatasource: function() {
                return this.datasource
            },
            dispose: function() {
                n(60).prototype.dispose.apply(this, arguments), this.datasource.release()
            }
        })
    },
    239: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: function() {
                return ""
            }
        })
    },
    240: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(261), {
            className: "facebookFacepile",
            css: n(291),
            template: n(288),
            defaults: {
                show_count: !1,
                size: "medium",
                width: 300
            }
        })
    },
    261: function(e, t, n) {
        "use strict";
        var i = n(116).parseXFBML,
            r = n(116).isFacebookSDKReady,
            o = n(116).loadFacebookSDK;
        e.exports = new(n(21))({
            defaults: {
                hasData: function() {
                    return r()
                },
                fetchData: function() {
                    return o().done(this.rerender.bind(this))
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t || (t = {}), t.FB = {
                        app_id: n(55).get("fb_app_id")
                    }, e(t)
                }
            },
            after: {
                renderDecorate: function() {
                    i(this.el)
                }
            }
        })
    },
    268: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this.getPlaceholderLength(),
                    t = this.getInputValue().length,
                    n = Math.max(8, t, e),
                    r = n * this._charWidth,
                    o = this.getElement("wrapper").width();
                return o ? void this.getElement("control").width(Math.min(o, r)) : this.whenInserted().done(i.bind(this));
            }

            function r() {
                return "." + this.options.tokenClassName.replace(/\s+/g, ".")
            }
            var o = {
                small: 6,
                medium: 8,
                large: 10
            };
            e.exports = n(54).extend(n(113), n(217), n(350), {
                template: n(2396),
                css: n(843),
                className: "tokenInput",
                defaults: {
                    allowFreeInputTokens: !0,
                    label: null,
                    size: "medium",
                    placeholder: null,
                    tokenClassName: "tokenInput__token",
                    maxTokens: 1 / 0,
                    minInputHeight: null,
                    type: "Tag",
                    value: []
                },
                element2selector: {
                    control: ".tokenInput__input",
                    inputContainer: ".tokenInput__inputContainer",
                    label: ".tokenInput__label",
                    wrapper: ".tokenInput__wrapper",
                    validation: ".tokenInput__validation"
                },
                events: {
                    "click .tokenInput__wrapper": "onWrapperClick",
                    "click .tokenInput__tokenRemove": "onTokenRemoveClick",
                    "focus   .tokenInput__input": "onInputFocus",
                    "blur    .tokenInput__input": "onInputBlur",
                    "keydown .tokenInput__input": "onInputKeydown",
                    "input   .tokenInput__input": "onInputChange"
                },
                states: {
                    focused: "focused"
                },
                selectOnTab: !0,
                inputSelector: ".tokenInput__input",
                getRelativeElement: function() {
                    return this.$el
                },
                setup: function(e) {
                    this._charWidth = o[e.size]
                },
                renderDecorate: function() {
                    var e = this.options.minInputHeight;
                    this.getElement("wrapper").addClass("sc-input-" + this.options.size), e && this.getElement("wrapper").css("minHeight", e), this.addInitialItems(), this.syncState(), this.syncRequiredness(this.getElement("label"), this.getElement("control"))
                },
                addInitialItems: function() {
                    var e = this.options.value;
                    e && e.length && this.setFieldValue(e)
                },
                getDisplayValue: n(3).noop,
                addToken: function(e) {
                    var t = this.getFieldValue().slice(),
                        i = t.some(function(t) {
                            return n(3).isEqual(e, t)
                        });
                    e && !i && (t.push(e), this.setFieldValue(t)), this.focus(), this.validateOwnField()
                },
                removeToken: function(e) {
                    var t = this.getFieldValue().slice(); - 1 === e && (e = t.length - 1), e < t.length && (t.splice(e, 1), this.setFieldValue(t), this.validateOwnField()), this.focus()
                },
                fadeOutToken: function(e, t) {
                    e.width(e.width()), this.addDeferred(window.setTimeout(e.addClass.bind(e, "hide"), 0)), this.addDeferred(window.setTimeout(t.bind(this), 300))
                },
                getInputValue: function() {
                    return this.getElement("control").val().trim().replace(/^[#,]/, "")
                },
                createFreeInputToken: function() {
                    var e, n = this.isMenuOpened(),
                        i = this.selectedItemIndex + 1 >= this.getMenuItemCount();
                    this.options.allowFreeInputTokens && this.inputHasQuery() && (n && i || !n) && (e = this.addUserText(this.getInputValue())), t.when(e).done(this.emptyInput.bind(this))
                },
                addUserText: function(e) {
                    return this.addToken(e)
                },
                syncState: function() {
                    var e, t, n, r;
                    r = this.getElement("control"), e = this.getFieldValue(), n = this.options, r.toggleClass("g-hidden", e.length >= n.maxTokens), this.getState("invalid") && this.getMetaData().isValid && this.toggleState("invalid", !1), t = e.map(function(e) {
                        return "string" != typeof e && (e = this.getDisplayValue(e)), this.getTokenHTML(e)
                    }, this).join(""), this.$("." + n.tokenClassName.replace(/\s+/g, ".")).remove(), this.getElement("inputContainer").before(t), r.attr("placeholder", e.length ? "" : n.placeholder), i.call(this)
                },
                onItemSelected: function(e) {
                    this.emptyInput(), this.addUserText(e)
                },
                onInputBlur: function() {
                    this.toggleState("focused", !1)
                },
                onInputFocus: function() {
                    this.toggleState("focused", !0)
                },
                onInputKeydown: function(e) {
                    switch (e.which) {
                        case n(102).BACKSPACE:
                            this.inputHasQuery() || (this.fadeOutToken(this.$(r.call(this)).last(), this.removeToken.bind(this, -1)), e.preventDefault());
                            break;
                        case n(102).ENTER:
                        case n(102).TAB:
                            this.inputHasQuery() && (this.createFreeInputToken(), e.preventDefault(), e.stopPropagation())
                    }
                },
                onInputChange: function() {
                    i.call(this), this.getMetaData().isValid || this.markAsValid()
                },
                onWrapperClick: function() {
                    this.focus()
                },
                onTokenRemoveClick: function(e) {
                    var n = t(e.target).closest(r.call(this)),
                        i = n.index();
                    this.fadeOutToken(n, this.removeToken.bind(this, i)), e.stopPropagation()
                },
                onFieldChange: function() {
                    this.syncState()
                },
                getTokenHTML: function(e) {
                    return '<div class="' + this.options.tokenClassName + '"><span class="sc-visuallyhidden">' + this.options.type + ": </span>" + n(20).Utils.escapeExpression(e) + '<button class="tokenInput__tokenRemove sc-ir">Remove ' + this.options.type + " " + n(20).Utils.escapeExpression(e) + "</button></div>"
                },
                getPlaceholderLength: function() {
                    var e = this.getElement("control").attr("placeholder");
                    return e ? e.length : 0
                }
            })
        }).call(t, n(1))
    },
    274: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2477),
            css: n(2850),
            className: "inlineError",
            events: {
                "click a": "onClick"
            },
            defaults: {
                button_label: n(52).t("Retry")
            },
            onClick: function(e) {
                e.preventDefault(), this.trigger("button_click", e, this)
            }
        })
    },
    284: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".facebookFacepile{display:inline-block}", ""])
    },
    288: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return "true"
            },
            3: function(e, t, n, i, r) {
                return "false"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = e.lambda,
                    a = e.escapeExpression;
                return '<fb:facepile\n  app_id="' + a(s(null != (o = null != t ? t.FB : t) ? o.app_id : o, t)) + '"\n  max_rows="1"\n  size="' + a(s(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '"\n  show_count="' + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.show_count : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "") + '"\n  width="' + a(s(null != (o = null != t ? t._options : t) ? o.width : o, t)) + '">\n</fb:facepile>\n'
            },
            useData: !0
        })
    },
    291: function(e, t, n) {
        var i = n(284);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    307: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = e ? "on" : "off";
                e && (this._handlers = {
                    mousedown: r.bind(this),
                    mouseover: o.bind(this)
                }), this.$el[t](this._handlers, this.itemSelector)
            }

            function r(e) {
                e.preventDefault();
                var n = this.getItems().index(t(e.currentTarget));
                this.selectItem(n)
            }

            function o(e) {
                var n = this.highlightItem(this.getItems().index(t(e.currentTarget)));
                this.bubble("itemOver", {
                    index: n
                })
            }
            var s = "combox-box-content";
            e.exports = new(n(21))({
                defaults: {
                    itemSelector: "",
                    highlightClassName: "selected",
                    onItemHighlighted: n(3).noop,
                    onItemSelected: n(3).noop,
                    maxItemDisplay: 10
                },
                highlightItem: function(e) {
                    var t = this.getItems(),
                        n = e % t.length;
                    return this.highlightedItem && this.highlightedItem.removeClass(this.highlightClassName), 0 > n ? n : (this.highlightedItem = t.eq(n).addClass(this.highlightClassName), this.onItemHighlighted(n, this.highlightedItem), n)
                },
                selectItem: function(e) {
                    if (0 > e) return !1;
                    var t = this.getItems();
                    e = Math.min(e, t.length - 1);
                    var n = t.eq(e);
                    return n.length ? (this.bubble("itemClick", this.onItemSelected(e, n)), !0) : !1
                },
                getItemCount: function() {
                    return this.getItems().length
                },
                applyTo: function(e) {
                    this.before(e, {
                        setup: function() {
                            i.call(this, !0), this.$el.addClass(s)
                        },
                        dispose: function() {
                            i.call(this, !1)
                        }
                    }), e.attributes = n(3).defaults({}, e.attributes, {
                        role: "listbox"
                    }), e.defaults = n(3).defaults({}, e.defaults, {
                        maxDisplay: e.maxItemDisplay,
                        defaultSelectedItemIndex: 0
                    })
                },
                getItems: function() {
                    return this.$(this.itemSelector)
                }
            })
        }).call(t, n(1))
    },
    309: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            after: {
                setup: function() {
                    this.model && this.listenTo(this.model, "validation", this.onFormValidation)
                }
            },
            defaults: {
                onFormValidation: function() {
                    var e = this.getInvalidFormControls();
                    e.length && e[0].scrollToAndFocus()
                }
            },
            getFormControls: function() {
                return this.getAncestorSubviews().filter(function(e) {
                    return e.isFormControl
                })
            },
            getInvalidFormControls: function() {
                return this.getFormControls().filter(function(e) {
                    return e.isInvalid()
                })
            }
        })
    },
    310: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("router"),
                t = e.currentLayout;
            if (t) {
                if (t instanceof n(190)) return this.options.responsive && r() <= s;
                if (t instanceof n(945)) return this.options.responsive && r() <= a
            }
            return !1
        }

        function r() {
            return l = l || window.innerWidth
        }

        function o() {
            l = null
        }
        var s = 1079,
            a = 904,
            l = null;
        n(85).on("resize:x:throttled", o);
        e.exports = n(1333).withOptions({
            shouldShowTooltip: i
        })
    },
    313: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.form.get(this.options.timezoneField),
                t = this.form.get(this.options.localDateField),
                n = null;
            t && e && (n = s.localToUtc(t, e)), this.form.set(this.field, n)
        }

        function r(e) {
            var t = this.getFieldValue(),
                n = this.form.get(this.options.timezoneField),
                i = t ? s.utcToLocal(t, n) : null,
                r = {};
            r[this.options.localDateField] = i, this.form.set(r, {
                dateTimeSilent: e
            })
        }

        function o(e, t, i) {
            var r, o, s;
            return r = n(3).find(n(833), function(e) {
                return e.name === t
            }), o = -60 * n(52).dateTimeHelper.getTimezoneOffset(), s = r.utc_offset, new Date(+e + i * (s - o) * 1e3)
        }
        var s = e.exports = n(54).extend(n(113), n(217), {
            className: "dateTime",
            template: n(2391),
            css: n(2777),
            element2selector: {
                validation: ".datetime__validation"
            },
            defaults: {
                label: null,
                defaultDate: null,
                minDate: null,
                localDateField: null,
                timezoneField: null
            },
            setup: function(e) {
                this.model = new e.Form(null, e), this.listenToSubviews("on")
            },
            dispose: function() {
                this.listenToSubviews("off")
            },
            renderDecorate: function() {
                r.call(this), this.getFieldValue() || null === this.options.defaultDate || this.setDefaultDate()
            },
            listenToSubviews: function(e) {
                this.listenToFields(e, [this.options.timezoneField, this.options.localDateField], this.onSubFieldsChange)
            },
            setDefaultDate: function() {
                var e = n(52).dateTimeHelper.floorTo30Minutes(new Date);
                e = new Date(+e + 24 * this.options.defaultDate * 60 * 60 * 1e3), this.form.set(this.field, e)
            },
            onSubFieldsChange: function(e, t, n) {
                n.dateTimeSilent || i.call(this)
            },
            onFieldChange: function() {
                r.call(this, !0)
            }
        }, {
            localToUtc: function(e, t) {
                return o(e, t, -1)
            },
            utcToLocal: function(e, t) {
                return o(e, t, 1)
            }
        })
    },
    317: function(e, t, n) {
        "use strict";

        function i(e) {
            return this.options.show_counts ? n(143).render(this.audible.get("likes_count") || e, {
                useSIUnits: !0
            }) : e
        }
        var r = n(52).t("Like"),
            o = n(52).t("Liked"),
            s = n(52).t("Unlike");
        e.exports = n(54).extend(n(88), n(310), n(68).withOptions("likeButton"), {
            className: "sc-button-like",
            defaults: {
                show_counts: !1
            },
            buttonLabels: {
                "default": {
                    text: function() {
                        return i.call(this, r)
                    },
                    title: r
                },
                selected: {
                    text: function() {
                        return i.call(this, o)
                    },
                    title: s
                }
            },
            setup: function(e) {
                "playlist" === e.resource_type ? this.model = new(n(995)) : this.model = new(n(998)), this.observedAttributes = [e.resource_id], e.show_counts && (this.audible = this.addDataSource(new(n(75))({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }), {
                    requiredAttributes: ["likes_count"]
                }), this.listenTo(this.audible, "change:likes_count", this.rerender), this.listenTo(this.model, "change:" + e.resource_id, this.rerender))
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                e.preventDefault();
                var t = this.options,
                    i = !this.model.get(t.resource_id),
                    r = this.getContextData();
                n(74).like(t.resource_id, t.resource_type, i, {
                    context: r
                })
            }
        })
    },
    350: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.getMenu(),
                t = s.call(this);
            e ? this.updateMenuContent(e, t) : this.createMenu().replaceContentView(t)
        }

        function r(e) {
            var t = e ? "on" : "off";
            e && (this._inputHandlers = {
                mousedown: l.bind(this),
                blur: c.bind(this),
                focus: u.bind(this),
                keydown: d.bind(this),
                input: v.bind(this)
            }), this.$el[t](this._inputHandlers, this.inputSelector)
        }

        function o() {
            var e = this.getMenu();
            return e ? e.getContentView() : void 0
        }

        function s() {
            return n(3).assign({
                query: this.getInput().val(),
                defaultSelectedItemIndex: this.defaultSelectedItemIndex
            }, n(3).result(this, "menuContentViewArgs"))
        }

        function a(e) {
            this.selectedItemIndex = e, this.onItemHighlighted.apply(this, arguments)
        }

        function l(e) {
            this.isAutoFocusInput && this.inputHasQuery() && this.openMenu(), e.stopPropagation()
        }

        function u() {
            this.isAutoFocusInput || !this.inputHasQuery() && !this.showAllItems || this.openMenu()
        }

        function c() {
            this.closeMenu()
        }

        function d(e) {
            var t;
            switch (e.keyCode) {
                case n(102).ENTER:
                    t = f;
                    break;
                case n(102).ESC:
                    t = g;
                    break;
                case n(102).DOWN:
                    t = h;
                    break;
                case n(102).UP:
                    t = p;
                    break;
                case n(102).TAB:
                    t = m
            }
            return t ? t.call(this, e) : void 0
        }

        function h(e) {
            e.preventDefault();
            var t = o.call(this);
            t && (this.selectedItemIndex = t.highlightItem(this.selectedItemIndex + 1))
        }

        function p(e) {
            e.preventDefault();
            var t = o.call(this);
            t && (this.selectedItemIndex = t.highlightItem(this.selectedItemIndex === this.defaultSelectedItemIndex ? this.defaultSelectedItemIndex : this.selectedItemIndex - 1))
        }

        function f(e) {
            this.isMenuOpened() && this.getMenuItemCount() && this.selectActiveItem() && (e.preventDefault(), e.stopPropagation())
        }

        function m(e) {
            this.selectOnTab && this.isMenuOpened() && this.getMenuItemCount() && (e.preventDefault(), this.selectActiveItem())
        }

        function g(e) {
            e.preventDefault();
            var t = this.getInput();
            t.val().length ? this.emptyInput() : t.blur()
        }

        function v() {
            this.updateQuery()
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                this.before(e, {
                    setup: function() {
                        this.selectedItemIndex = this.defaultSelectedItemIndex, this.activate(), this.showSuggestionsMenu = this.showSuggestionsMenu.bind(this)
                    },
                    renderDecorate: function() {
                        this.isAutoFocusInput = !!this.getInput().attr("autofocus"), this.oldInputText = this.getInput().val()
                    }
                }), this.after(e, {
                    dispose: function() {
                        this.deactivate()
                    }
                }), e.element2selector = n(3).assign({}, e.element2selector, {
                    input: e.inputSelector
                })
            },
            isAutoFocusInput: !1,
            selectedItemIndex: 0,
            oldInputText: null,
            defaults: {
                inputSelector: "",
                zIndexLevel: "content",
                menuOffset: "0 0",
                showAllItems: !1,
                selectOnTab: !1,
                typingDelay: 250,
                defaultSelectedItemIndex: 0,
                MenuContentView: null,
                menuContentViewArgs: null,
                getMenuWidth: function() {
                    return this.getRelativeElement().outerWidth()
                },
                getRelativeElement: function() {
                    return this.getInput()
                },
                getInput: function() {
                    return this.getElement("input")
                },
                onItemSelected: n(3).noop,
                onItemHighlighted: n(3).noop,
                onClose: n(3).noop,
                updateMenuContent: function(e, t) {
                    e.replaceContentView(t)
                }
            },
            merge: {
                bubbleEvents: {
                    itemClick: "onItemClickBubble",
                    itemOver: "onItemOverBubble"
                }
            },
            onItemClickBubble: function(e) {
                this.onItemSelected(e.data), this.closeMenu(), e.stopPropagation()
            },
            onItemOverBubble: function(e) {
                a.call(this, e.data.index), e.stopPropagation()
            },
            activate: function() {
                r.call(this, !0)
            },
            deactivate: function() {
                r.call(this, !1)
            },
            focusInput: function() {
                this.getInput().focus()
            },
            emptyInput: function() {
                var e = this.getInput();
                return e.val(""), this.updateQuery(), e
            },
            replaceInputValue: function(e) {
                this.getInput().val(e)
            },
            inputHasQuery: function() {
                return !!this.getInput().val().trim()
            },
            isInputDisplayed: function() {
                return this.getInput().is(":visible")
            },
            selectActiveItem: function() {
                var e = o.call(this);
                return !(!e || !e.selectItem(this.selectedItemIndex))
            },
            updateQuery: function() {
                var e = this.getInput().val();
                e !== this.oldInputText && (this.oldInputText = e, this.selectedItemIndex = this.defaultSelectedItemIndex, window.clearTimeout(this.suggestTimeout), e || this.showAllItems ? this.suggestTimeout = this.addTimeout(this.showSuggestionsMenu, this.typingDelay) : this.closeMenu())
            },
            showSuggestionsMenu: function() {
                (this.inputHasQuery() || this.showAllItems) && (this.openMenu(), i.call(this))
            },
            getMenuItemCount: function() {
                var e = o.call(this);
                return e ? e.getItemCount() : 0
            },
            isMenuOpened: function() {
                var e = this.getMenu();
                return e && e.isOpened
            },
            getMenu: function() {
                return this.subviews.comboBoxMenu
            },
            createMenu: function() {
                var e = this.getMenu();
                return e && e.disposed && (this.removeSubview(e), e = null), e || (e = this.addSubview(new(n(361))({
                    Subview: this.MenuContentView,
                    subviewArgs: s.call(this),
                    togglerEl: this.getRelativeElement()[0],
                    relativeElement: this.getRelativeElement()[0],
                    relativeElementAnchor: "left bottom",
                    anchor: "left top",
                    focusable: !1,
                    offset: this.menuOffset,
                    width: this.getMenuWidth(),
                    zIndexLevel: this.zIndexLevel
                }), "comboBoxMenu"), this.listenTo(e, n(361).Events.CLOSED, this.onClose)), e
            },
            openMenu: function() {
                !this.isInputDisplayed() || this.disposed || this.isMenuOpened() || (this.getInput().attr("aria-expanded", "true"), this.createMenu().open(), i.call(this))
            },
            closeMenu: function() {
                if (!this.disposed && this.isMenuOpened()) {
                    var e = this.getMenu();
                    this.selectedItemIndex = this.defaultSelectedItemIndex, e && (e.close(), this.getInput().attr("aria-expanded", "false"))
                }
            }
        })
    },
    359: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(184), {
            template: n(2386),
            css: n(2767),
            className: "confirmableForm",
            defaults: {
                confirmText: "",
                confirmButton: "Yes",
                size: "small"
            }
        })
    },
    360: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = e.exports = n(54).extend(n(192), {
                css: n(2769),
                template: n(2387),
                className: "dialog sc-border-box",
                defaults: {
                    text: null,
                    smallText: !1,
                    extraClassNames: "rounded",
                    margin: 10
                },
                element2selector: {
                    content: ".dialog__content",
                    arrow: ".dialog__arrow"
                },
                states: {
                    smallText: "smallText"
                },
                setup: function(e) {
                    var t = e.smallText,
                        n = e.extraClassNames;
                    this.toggleState("smallText", t), this.$el.addClass(n)
                },
                getOverlayContentEl: function() {
                    return this.getElement("content")
                },
                positionDecorate: function() {
                    var e, n, i, r, o = this.options,
                        s = o.anchor;
                    this.$el.addClass("dialog__" + s.replace(/ /g, "")), this.options.relativeElement && / center|^(left|right)$/.test(s) && (e = t(this.options.relativeElement), n = this.$el.offset().top, i = e.offset().top, r = i - n + e.height() / 2 - 5.5, this.getElement("arrow").css({
                        top: r
                    }))
                }
            }, {
                setDialogTypes: function(e) {
                    i = e
                },
                create: function(e, t, o, s) {
                    var a, l, u = i[e];
                    return u ? (a = n(3).assign({}, s && s.subviewArgs, u.subviewArgs, o), l = new r(n(3).defaults({
                        subviewArgs: a,
                        relativeElement: t
                    }, s, u))) : void 0
                }
            })
        }).call(t, n(1))
    },
    361: function(e, t, n) {
        (function(t) {
            "use strict";
            e.exports = n(54).extend(n(192), {
                className: "dropdownMenu",
                events: {
                    click: "onClick"
                },
                defaults: {
                    collision: "fit flip",
                    margin: 0,
                    text: null
                },
                onClick: function(e) {
                    t(e.target).closest('a[href^="/"]').length || e.stopPropagation()
                }
            })
        }).call(t, n(1))
    },
    362: function(e, t, n) {
        "use strict";

        function i() {
            if (!this.disposed) {
                var e = this.options,
                    t = e.theme,
                    n = e.size,
                    i = this.getElement("container")[0];
                i && s(i, {
                    onCaptchaSuccess: r.bind(this),
                    onCaptchaExpire: o.bind(this),
                    size: "large" === n ? "normal" : "compact",
                    theme: t
                })
            }
        }

        function r(e) {
            this.setFieldValue(e), this.validateOwnField()
        }

        function o() {
            this.setFieldValue(""), this.validateOwnField(), this.reset()
        }
        var s = n(345).renderRecaptcha;
        e.exports = n(54).extend(n(113), n(217), {
            className: "recaptcha",
            css: n(437),
            template: n(422),
            element2selector: {
                container: ".recaptcha__container",
                validation: ".recaptcha__validation"
            },
            states: {
                invalid: function(e) {
                    this.getElement("validation").toggleClass("g-hidden", !e)
                }
            },
            defaults: {
                size: "large",
                theme: "light"
            },
            setup: function() {
                this.listenTo(this.form, "reset_" + this.field, this.reset)
            },
            renderDecorate: function() {
                this.whenInserted().then(i.bind(this))
            },
            reset: function() {
                this.rerender()
            },
            onFieldChange: function() {
                this.validateOwnField()
            }
        })
    },
    363: function(e, t, n) {
        "use strict";
        var i = /soundcloud\.com\/([^\/]+)/i;
        e.exports = n(60).extend({
            getValue: function() {
                var e = n(60).prototype.getValue.call(this),
                    t = e.match(i);
                return t ? t[1] : e
            }
        })
    },
    364: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                imageUrl: e.getImageUrl(),
                fallbackId: e.id
            }
        }
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var r = t.angle,
                    o = t.colorAdjustment,
                    s = t.imageOverlay,
                    a = void 0 === s ? !1 : s;
                this.before(e, {
                    renderDecorate: function() {
                        this.addSubview(new(n(982))({
                            angle: r,
                            colorAdjustment: o
                        }), "gradient").render().$el.appendTo(this.el), this.updateGradient()
                    }
                }), this.extend(e, {
                    updateGradient: function() {
                        var e = this.subviews.gradient;
                        if (e) {
                            var t = i(this.getGradientModel()),
                                n = t.imageUrl,
                                r = t.fallbackId;
                            e.setImageUrl(n, r, a)
                        }
                    }
                })
            },
            after: {
                setup: function() {
                    this.el.style.height = "100%", this.model && this.listenTo(this.model, "imageDataChanged", this.updateGradient)
                }
            },
            override: {
                template: function() {
                    return ""
                },
                onModelChange: function() {
                    this.updateGradient()
                }
            },
            defaults: {
                getGradientModel: function() {
                    return this.model
                }
            }
        })
    },
    372: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "commentTitle",
            css: n(849),
            template: n(784),
            ModelClass: n(108),
            requiredAttributes: ["body", "track_id", "created_at"],
            defaults: {
                dark: !1,
                show_icon: !0,
                show_time: !1,
                body_is_link: !0,
                compact: !0
            },
            setup: function() {
                this.setupTrack(), this.track || this.listenTo(this.model, "change:track_id", this.setupTrack)
            },
            setupTrack: function() {
                if (!this.track) {
                    var e = this.model.get("track_id") || this.model.get("track") && this.model.get("track").id;
                    e && (this.track = this.addDataSource(new(n(66))({
                        id: e
                    }), {
                        requiredAttributes: ["title", "permalink_url"]
                    }))
                }
            },
            rerender: function() {
                this.setupTrack(), n(54).prototype.rerender.call(this)
            },
            getTemplateData: function(e) {
                return e.track || (e.track = this.track.toJSON()), e
            }
        })
    },
    374: function(e, t, n) {
        "use strict";
        e.exports = n(107).extend({
            className: "sc-button-delete",
            ModelClass: n(108),
            defaults: {
                icon_only: !0,
                ContentViewClass: n(1431),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "220px"
                }
            },
            buttonLabels: {
                "default": n(52).t("Delete this comment")
            }
        })
    },
    375: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(68).withOptions("followButton"), n(88), {
            className: "sc-button-follow",
            defaults: {
                is_cta: !1
            },
            states: {
                selected: function(e) {
                    this.$el.toggleClass("sc-button-cta", this.options.is_cta && !e).toggleClass("sc-button-selected", e);
                    var t = e ? "selected" : "default";
                    this.updateButton(t)
                }
            },
            buttonLabels: {
                "default": function() {
                    return this.myFollowers.get(this.userId) ? n(52).t("Follow back") : n(52).t("Follow")
                },
                selected: {
                    text: n(52).t("Following", null, {
                        context: "button"
                    }),
                    title: n(52).t("Unfollow")
                }
            },
            userId: null,
            loadingTemplate: null,
            setup: function(e) {
                this.userId = e.resource_id, this.observedAttributes = [this.userId], this.model = new(n(478)), this.myFollowers = this.addDataSource(new(n(991)), {
                    observedAttributes: [this.userId]
                }), this.$el.toggleClass("sc-button-cta", e.is_cta)
            },
            isButtonSelected: function() {
                return !!this.model.get(this.userId)
            },
            onClick: function(e) {
                var t = !this.model.get(this.userId),
                    i = this.getContextData();
                n(74).follow(this.userId, t, {
                    context: i
                }), e.preventDefault()
            }
        })
    },
    376: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(56).defer();
            return n(57).once("layout:change", function() {
                e.resolve()
            }), e.promise()
        }

        function r(e) {
            var t = this.getContextData();
            this._modal.open(), "addToPlaylist" === e && (n(82).trackEvent("addToSet", t), o(null, {
                context: t,
                click_name: "track_to_playlist::prompt",
                click_object: t.urn
            }))
        }
        var o = n(59).trackV0ClickWithPromotedParams,
            s = {
                addToPlaylist: {
                    title: n(52).t("Add to playlist", null, {
                        context: "indefinite"
                    }),
                    className: "sc-button-addtoset",
                    View: n(638),
                    width: 550,
                    transparentBackground: !0,
                    requiresLogin: !0,
                    implicitLoginAction: "playlist",
                    ModalClass: n(614),
                    subviewArgs: function(e) {
                        return {
                            soundIds: e.soundIds
                        }
                    }
                },
                deleteSound: {
                    title: function() {
                        return "sound" === this.options.resource_type ? "Delete track" : "Delete playlist"
                    },
                    className: "sc-button-delete",
                    View: n(1674),
                    width: 350,
                    transparentBackground: !1,
                    requiresLogin: !0,
                    subviewArgs: function(e) {
                        return {
                            resource_id: e.resource_id,
                            resource_type: e.resource_type,
                            size: "medium"
                        }
                    }
                }
            };
        e.exports = n(54).extend(n(310), n(88), {
            defaults: {
                type: null,
                soundIds: null
            },
            buttonLabels: {
                "default": function() {
                    return n(3).isFunction(this.type.title) ? this.type.title.call(this) : this.type.title
                }
            },
            setup: function(e) {
                var t = this.type = s[e.type];
                this.$el.addClass(t.className)
            },
            onClick: function() {
                var e, t, o = this.options.type,
                    s = this.type;
                this._modal || (e = s.ModalClass || n(71), t = {
                    togglerEl: this.el,
                    width: s.width,
                    transparentBackground: s.transparentBackground,
                    Subview: s.View,
                    subviewArgs: s.subviewArgs.call(this, this.options)
                }, this._modal = new e(t)), !n(63).isLoggedIn() && s.requiresLogin ? n(63).login({
                    implicitAction: s.implicitLoginAction,
                    implicitTarget: n(98).generate(this.options.resource_type, this.options.resource_id)
                }).then(i).then(r.bind(this, o)) : r.call(this, o)
            }
        })
    },
    377: function(e, t, n) {
        "use strict";
        var i, r = {
            POST: "comment:replyPost",
            SENT: "comment:replySent",
            CANCEL: "comment:replyCancel",
            OPEN: "comment:replyOpen"
        };
        e.exports = n(54).extend(n(88), {
            className: "replyActivityComment sc-button-reply",
            css: n(851),
            ModelClass: n(108),
            states: {
                active: function(e) {
                    this.$el.toggleClass("replyActivityComment-hidden", e), e ? i.call(this) : this.disposeSubviews()
                }
            },
            defaults: {
                size: "small"
            },
            buttonLabels: {
                "default": n(52).t("Reply")
            },
            onClick: function(e) {
                e.stopPropagation(), this.toggleState("active")
            },
            triggerCommentFormPosted: function(e) {
                this.trigger(r.POST, e)
            },
            triggerCommentFormSent: function(e, t) {
                this.trigger(r.SENT, e, t)
            },
            triggerCommentFormCancel: function(e) {
                this.trigger(r.CANCEL, e)
            },
            triggerCommentFormOpen: function(e) {
                this.trigger(r.OPEN, e)
            }
        }, {
            Events: r
        });
        i = function() {
            var e = this.model.toJSON(),
                t = this.addSubview(new(n(178))({
                    resource_id: e.track_id,
                    sound_id: e.track_id,
                    size: this.options.size,
                    timestamp: e.timestamp || n(108).EMPTY_TIMESTAMP,
                    recipient: e.user.permalink
                }));
            this.triggerCommentFormOpen(t), this.listenTo(t, n(178).Events.POSTED, function() {
                this.triggerCommentFormPosted(t)
            }), this.listenTo(t, n(178).Events.SENT, function(e) {
                this.triggerCommentFormSent(t, e), this.disposed || (this.toggleState("active", !1), this.disposeSubviews())
            }), this.listenTo(t, n(178).Events.CANCELED, function() {
                t.isEmpty() && (this.triggerCommentFormCancel(t, this.model), this.toggleState("active", !1))
            })
        }
    },
    378: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0ClickWithPromotedParams;
        e.exports = n(107).extend(n(310), n(68).withOptions("shareButton"), {
            className: "sc-button-share",
            defaults: {
                fixOverflow: !1,
                share_type: null,
                overlayType: "modal",
                overlayOptions: {
                    width: 550,
                    transparentBackground: !0
                },
                ContentViewClass: n(1651),
                hasActiveState: !1
            },
            buttonLabels: {
                "default": n(52).t("Share")
            },
            setup: function(e) {
                n(107).prototype.setup.apply(this, arguments), this.options.contentViewArgs = n(3).assign({}, this.options.contentViewArgs, {
                    share_type: e.share_type
                }), this.options.fixOverflow && this.$el.addClass("fix-overflow")
            },
            onContextRequest: function(e) {
                e.data.urn = n(98).generate(this.options.resource_type, this.options.resource_id)
            },
            onOverlayToggle: function(e) {
                if (n(107).prototype.onOverlayToggle.apply(this, arguments), e) {
                    var t = this.getContextData();
                    n(82).trackEvent("share", t), i(null, {
                        context: t,
                        click_object: t.urn,
                        click_name: "share::prompt"
                    })
                }
            }
        })
    },
    410: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".recaptcha{margin:10px 0}.recaptcha__container{margin-bottom:5px}.recaptcha__validation{background:0 0}", ""])
    },
    411: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".activity__commentPlay{height:24px;width:24px;float:left;margin-right:8px}.activity__sharing{font-size:14px;padding-top:10px}.activity__sharingNote{padding-bottom:10px}.activity__sharingNote-container{background-color:#fff;position:relative;top:-5px}.activity__sharingNote-container.isPlaylist{position:static;margin-top:10px}.activity__sharingNote-text{margin-top:2px}", ""])
    },
    422: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="recaptcha__container"></div>\n<div class="recaptcha__validation sc-orange g-hidden"></div>\n'
            },
            useData: !0
        })
    },
    424: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(99), {
                    name: "$view",
                    hash: {
                        show_context: null != (s = null != t ? t._options : t) ? s.show_context : s,
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(99), {
                    name: "$view",
                    hash: {
                        show_context: null != (s = null != t ? t._options : t) ? s.show_context : s,
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        actionType: "repost",
                        actorId: null != (s = null != t ? t.user : t) ? s.id : s,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(99), {
                    name: "$view",
                    hash: {
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        actionType: "like",
                        actorId: null != (s = null != t ? t.user : t) ? s.id : s,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(99), {
                    name: "$view",
                    hash: {
                        show_context: null != (s = null != t ? t._options : t) ? s.show_context : s,
                        is_promoted: !0,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return "  " + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(99), {
                    name: "$view",
                    hash: {
                        time_to_show: null != t ? t.created_at : t,
                        time_display_prefix: null != t ? t.time_prefix : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + '\n    <div class="activity__sharingNote-container' + (null != (s = i["if"].call(a, null != t ? t.type_is_playlisty : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '">\n      <div class="activity__sharingNote sc-border-light-bottom">' + (null != (s = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        contentType: null != t ? t.contentType : t,
                        username: null != (s = null != t ? t.user : t) ? s.username : s,
                        route: (n(58) || t && t.$route || l).call(a, "user", null != t ? t.user : t, {
                            name: "$route",
                            hash: {},
                            data: o
                        })
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.sharing_note : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.program(16, o, 0),
                    data: o
                })) ? s : "") + "\n      </div>\n    </div>\n"
            },
            10: function(e, t, n, i, r) {
                return " isPlaylist"
            },
            12: function(e, t, n, i, r) {
                return '          <a href="[[route]]" class="sc-link-dark">[[username]]</a> shared this [[contentType]] with you\n'
            },
            14: function(e, t, i, r, o) {
                var s;
                return ':<div class="sc-text-light activity__sharingNote-text">â€œ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(224), {
                    name: "$view",
                    hash: {
                        className: "g-inline",
                        paragraphs: !1,
                        usertext: !0,
                        content: null != (s = null != t ? t.sharing_note : t) ? s.text : s
                    },
                    data: o
                })) + "â€</div>"
            },
            16: function(e, t, n, i, r) {
                return "."
            },
            18: function(e, t, i, r, o) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(399), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t.type_is_audible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.type_is_repost : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.type_is_like : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.type_is_track_promoted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.type_is_playlist_promoted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.type_is_sharing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.showHTUpsell : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    437: function(e, t, n) {
        var i = n(410);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    438: function(e, t, n) {
        var i = n(411);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    469: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.editableObject,
                t = e.isEditing(),
                n = this.enterEditingStateDefaults || {};
            this.toggleState("canceling", e.isCanceling()).toggleState("editing", t).toggleState("saving", e.isSaving()), t && n.addNavigationBlock && !this._navBlockId && o.call(this)
        }

        function r(e, t, r) {
            i.call(this), r === n(136).EDITING && this._navBlockId && s.call(this)
        }

        function o() {
            var e = this;
            this._navBlockId = n(55).get("router").addNavigationBlock("These changes havenâ€™t been saved yet.", function(t) {
                var i = t && window.confirm("Are you sure you want to leave without saving changes?");
                return i && e.editableObject.setEditState(n(136).NONE), i
            })
        }

        function s() {
            n(55).get("router").removeNavigationBlock(this._navBlockId), this._navBlockId = null
        }
        e.exports = new(n(21))({
            _navBlockId: null,
            requires: ["editableObject"],
            defaults: {
                onEditEnter: n(3).noop,
                onEditLeave: n(3).noop,
                enterEditingStateDefaults: null
            },
            applyTo: function(e) {
                var t = this.element2selector;
                e.states = n(3).assign(e.states || {}, {
                    editing: function(e) {
                        this.$el.toggleClass("editing", e), this[e ? "onEditEnter" : "onEditLeave"]()
                    },
                    saving: function(e) {
                        this.$el.toggleClass("saving", e), t && t.editButton && this.getElement("editButton").toggleClass("sc-pending", e)
                    },
                    canceling: function(e) {
                        this.$el.toggleClass("canceling", e), t && t.editButton && this.getElement("editButton").attr("disabled", e)
                    }
                })
            },
            after: {
                setup: function() {
                    this.editableObject.on("change:editState", r, this)
                },
                dispose: function() {
                    this.editableObject.off("change:editState", r, this), s.call(this)
                },
                renderDecorate: function() {
                    i.call(this)
                }
            },
            around: {
                rerender: function(e, t) {
                    this.getState("canceling") || this.getState("saving") ? this.addDeferred(n(3).delay(this.rerender.bind(this), 100)) : e(t)
                }
            },
            enterEditingState: function() {
                this.editableObject.setEditState(n(136).EDITING)
            },
            onEditButtonClick: function() {
                this.enterEditingState()
            },
            onCancelButtonClick: function() {
                this.editableObject.setEditState(n(136).CANCELING), s.call(this);
            },
            onSaveButtonClick: function() {
                this.editableObject.setEditState(n(136).SAVING), s.call(this)
            }
        })
    },
    475: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this,
                    i = this.options.autocomplete;
                if (i && "off" !== i) {
                    var r = t("<input>", {
                        type: "text",
                        autocomplete: i,
                        "class": "sc-visuallyhidden",
                        tabIndex: -1
                    });
                    r.on("change", function() {
                        var t = r.val(),
                            i = n(83).codeToCountry(t);
                        i && (e.setValue(i), e.getFocusableElement().change())
                    }), this.$el.append(r)
                }
            }
            e.exports = n(236).extend(n(352), {
                defaults: {
                    regions: null
                },
                setup: function(e) {
                    e.ComboCollection = [{
                        title: "",
                        value: ""
                    }].concat(n(83).countries(n(3).pluck(e.regions, "value"))), n(236).prototype.setup.apply(this, arguments)
                },
                getTemplateData: function(e) {
                    e = n(236).prototype.getTemplateData.call(this, e) || e;
                    var t = e._options.autocomplete;
                    return t && (e._options.autocomplete = "off"), e
                },
                renderDecorate: function() {
                    n(236).prototype.renderDecorate.apply(this, arguments), i.call(this)
                },
                getValue: function() {
                    var e = this.getControlValue(),
                        t = this.getValueByTitle(e);
                    return e.length && this.setValid(!!t, n(52).t("Enter a country.")), t
                }
            })
        }).call(t, n(1))
    },
    482: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0ClickWithPromotedParams;
        e.exports = n(54).extend(n(88), n(310), {
            tagName: "a",
            className: "sc-button-download",
            attributes: {
                rel: "nofollow"
            },
            ModelClass: n(66),
            requiredAttributes: ["title", "download_url"],
            buttonLabels: {
                "default": function() {
                    return {
                        text: n(52).t("Download"),
                        title: n(52).t("Download this track")
                    }
                }
            },
            renderDecorate: function() {
                this.$el.attr("download", this.model.get("title"))
            },
            onClick: function() {
                var e = this.getContextData(),
                    t = {
                        client_id: n(55).get("client_id"),
                        oauth_token: n(63).getAuthToken() || null
                    };
                this.model.isPrivate() && (t.secret_token = this.model.get("secret_token"));
                var r = n(62).modify(this.model.get("download_url"), {
                    query: t
                });
                n(63).login({
                    implicitAction: "download"
                }).then(function() {
                    window.location.href = r, i(null, {
                        click_name: "download",
                        click_object: e.urn,
                        context: e
                    })
                })
            }
        })
    },
    483: function(e, t, n) {
        "use strict";

        function i() {
            this.el.setAttribute("href", n(119).getStationPageUrl(this.model))
        }
        e.exports = n(54).extend(n(88), {
            className: "sc-button-startstation",
            tagName: "a",
            defaults: {
                stationType: null,
                stationId: null,
                text: n(52).t("Station"),
                title: n(52).t("Go to station"),
                noStyle: !1,
                isScButton: !0,
                text_only: !1,
                noFollow: !1
            },
            _stationUrn: null,
            setup: function(e) {
                var t = e.stationType,
                    i = e.stationId,
                    r = n("track" === t ? 66 : 64);
                this.model = this.addDataSource(new r({
                    id: i
                }), {
                    requiredAttributes: ["permalink_url"]
                }), this._stationUrn = n(98).fromComponents({
                    collection: t + "-stations",
                    id: i
                })
            },
            onClick: function(e) {
                e.preventDefault(), n(59).trackClickThrough({
                    context: this.getContextData(),
                    target: this._stationUrn
                }), n(55).get("router").navigate(n(119).getStationPageUrl(this.model), {
                    trigger: !0,
                    replace: !1
                })
            },
            renderDecorate: function() {
                "a" === this.tagName && (i.call(this), this.options.noFollow && this.el.setAttribute("rel", "nofollow"))
            }
        })
    },
    484: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "commentFormDisabled",
            css: n(2809),
            template: function() {
                return "unconfirmed_user" === this.options.type ? n(52).t("Verify your email to write comments.") : n(52).t("Comments are disabled for this track.")
            },
            defaults: {
                size: "large",
                initially_visible: !1,
                type: null
            },
            states: {
                visible: "visible"
            },
            setup: function(e) {
                this.$el.addClass(e.size), this.toggleState("visible", e.initially_visible)
            }
        })
    },
    486: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, i, r = n(55).get("router"),
                o = n(62).parse(e);
            return "soundcloud.com" === o.host && (t = o.relative || "/", i = r.getUrlInfo(t), "404" !== i.name) ? t : e
        }
        var r = n(59).trackV0Click,
            o = n(59).trackImpression;
        e.exports = n(54).extend({
            template: n(2443),
            css: n(2821),
            className: "dashbox",
            tagName: "article",
            defaults: {
                adZone: ""
            },
            events: {
                "click .dashbox__header a": "onWhyAdsClick",
                "click .dashbox__wrapper a": "onDashboxClick"
            },
            states: {
                loading: "m-loading"
            },
            observedAttributes: ["title"],
            _whyAdsModal: null,
            setup: function(e) {
                this.model = new(n(1380))(null, {
                    adZone: e.adZone
                })
            },
            getTemplateData: function(e) {
                var t = {};
                return t.isAd = this.model.isAd(), t.hasContent = this.model.hasContent(), this.model.isVisualDashbox() ? (t.isVisualDashbox = !0, t.ad_visual = e.ad_visual, t.landing_page = i(e.landing_page), t.openInNewTab = t.landing_page === e.landing_page, t.title = e.title) : this.model.isStandardDashbox() && (t.isStandardDashbox = !0, t.click_through_url = i(e.click_through_url), t.openInNewTab = t.click_through_url === e.click_through_url, t.icon_url = e.icon_url, t.title = e.title, t.body = e.body, t.button_text = e.button_text), t
            },
            renderDecorate: function() {
                this.listenToOnce(n(57), "connect:hasUserData", this.rerender), this.model.hasContent() && (this.$el.toggleClass("m-ad", this.model.isAd()), this.model.isVisualDashbox() && (this.toggleState("loading", !0), this.addDeferred(n(87).load(this.model.get("ad_visual"))).then(this.toggleState.bind(this, "loading", !1))), n(82).trackEvent("impression", this.model.pick("tracking")), o({
                    ad_urn: this.model.get("ad_urn"),
                    monetization_type: "dashbox",
                    external_media: this.model.isVisualDashbox() ? this.model.get("ad_visual") : this.model.get("icon_url"),
                    impression_name: this.model.isVisualDashbox() ? "dashbox_visual" : "dashbox",
                    context: this.getContextData()
                }))
            },
            teardown: function() {
                this.stopListening(n(57), "connect:hasUserData")
            },
            onDashboxClick: function() {
                n(82).trackEvent("adClick", this.model.pick("tracking")), r(null, {
                    click_name: this.model.isVisualDashbox() ? "clickthrough::dashbox_visual" : "clickthrough::dashbox",
                    click_target: this.model.isVisualDashbox() ? this.model.get("click_through_url") : this.model.get("landing_page"),
                    monetization_type: "dashbox",
                    external_media: this.model.isVisualDashbox() ? this.model.get("ad_visual") : this.model.get("icon_url"),
                    ad_urn: this.model.get("ad_urn"),
                    context: this.getContextData()
                })
            },
            onWhyAdsClick: function(e) {
                e.preventDefault(), this._whyAdsModal || (this._whyAdsModal = new(n(1031))({
                    togglerEl: e.target
                })), this._whyAdsModal.open(), r(null, {
                    click_name: "companion_display::why_ads",
                    monetization_type: "dashbox",
                    ad_urn: this.model.get("ad_urn"),
                    context: this.getContextData()
                })
            },
            dispose: function() {
                this._whyAdsModal && (this._whyAdsModal.close(), this._whyAdsModal = null)
            }
        })
    },
    504: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s;
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(176), {
                    name: "$view",
                    hash: {
                        key: "checkbox",
                        showLabel: null != (s = null != t ? t._options : t) ? s.showLabel : s,
                        checked: null != t ? t.isChecked : t,
                        disabled: null != t ? t.disabled : t,
                        label: null != (s = null != t ? t._options : t) ? s.label : s
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    543: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))(n(113), n(545).withOptions({
            action: function(e) {
                var t = e.actionOnEnter;
                return t
            }
        }), {
            applyTo: function(e) {
                e.states = n(3).defaults(e.states || {}, {
                    invalid: function(e) {
                        this.$el.toggleClass("invalid", e), this.getElement("validation").toggleClass("g-input-validation-hidden", !e)
                    },
                    checked: "m-checked",
                    disabled: "m-disabled",
                    indeterminate: function(e) {
                        var t = this.subviews.checkbox;
                        t && t.setIndeterminate(e)
                    }
                }), e.defaults = n(3).defaults(e.defaults || {}, {
                    label: null,
                    showLabel: !0,
                    actionOnEnter: ""
                }), e.bubbleEvents = n(3).defaults(e.bubbleEvents || {}, {
                    "checkbox:change": "onCheckboxChange"
                }), e.element2selector = n(3).defaults(e.element2selector || {}, {
                    validation: ".checkboxFormControl__validation"
                }), e.className = e.className ? e.className + " checkboxFormControl" : "checkboxFormControl"
            },
            after: {
                renderDecorate: function() {
                    this.$el.append('<div class="checkboxFormControl__validation g-input-validation g-input-validation-hidden"></div>'), this.resetElementCache(), this.toggleState("checked", this.getFieldValue()), this.toggleState("disabled", this.getMetaData().disabled === !0)
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var i = n(3).defaults(t || {}, {
                        isChecked: this.getFieldValue(),
                        disabled: this.getMetaData().disabled === !0
                    });
                    return e(i) || i
                }
            },
            onFieldChange: function() {
                var e = this.getFieldValue();
                this.subviews.checkbox.setChecked(e), this.toggleState("checked", e)
            },
            onCheckboxChange: function(e) {
                var t = e.data.checked;
                this.setFieldValue(t), this.toggleState("checked", t), this.validateOwnField()
            },
            onValidationChange: function(e) {
                e.isValid || this.getElement("validation").html(e.message.toString()), this.toggleState("invalid", !e.isValid)
            },
            getInput: function() {
                return this.subviews.checkbox.getElement("input")
            },
            getLabel: function() {
                return this.subviews.checkbox.getElement("label")
            }
        })
    },
    544: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))(n(551), {
            requires: ["getRestoreUrl"],
            before: {
                setup: function() {
                    this.listenTo(n(57), "audio:play audio:pause", this.synchronizeStates)
                }
            },
            override: {
                hasData: function() {
                    return !0
                }
            },
            isPlaying: function() {
                return n(67).isSourcePlaying(this.collection)
            },
            isDisabled: function() {
                var e = this;
                return this.collection.isFullyPopulated() ? !this.collection.some(function(t, n) {
                    var i = e.collection.audibleAt ? e.collection.audibleAt(n) : t;
                    return i && e.isAudiblePlayable(i)
                }) : !1
            },
            isBuffering: function() {
                return n(67).isSourcePlaying(this.collection) && n(67).getCurrentSound().isBuffering()
            },
            onClick: function() {
                var e = this.isPlaying();
                this.toggleSource(this.collection, this.getRestoreUrl(), {
                    userInitiated: !0
                }), this.toggleState("playing", !e)
            }
        })
    },
    545: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return function(n) {
                if (n.which === o) {
                    n.preventDefault();
                    var i = (e.getValue || e.getFieldValue).call(e);
                    e.setFieldValue(i), e.form.performAction(t)
                }
            }
        }
        var r = n(3).isFunction,
            o = n(102).ENTER;
        e.exports = new(n(21))({
            requirePrototype: n(54).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.action,
                    o = void 0 === n ? "default" : n,
                    s = t.canBeApplied,
                    a = void 0 === s ? function(e) {
                        return !0
                    } : s;
                this.after(e, {
                    setup: function(e) {
                        if (a(this)) {
                            var t = this.form,
                                n = r(o) ? o.call(this, e) : o;
                            n && t.actions[n] && this.$el.on("keydown", i(this, n))
                        }
                    }
                })
            }
        })
    },
    546: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("indeterminate", this.isIndeterminate())
        }

        function r(e) {
            return null === e
        }
        e.exports = new(n(21))({
            requires: ["onFieldChange"],
            applyTo: function(e) {
                e.states = n(3).defaults(e.states || {}, {
                    indeterminate: "m-indeterminate"
                })
            },
            around: {
                onFieldChange: function(e) {
                    r(this.getFieldValue()) || e.apply(this, [].slice.call(arguments, 1)), i.call(this)
                }
            },
            after: {
                renderDecorate: function() {
                    i.call(this)
                }
            },
            isIndeterminate: function() {
                return r(this.getFieldValue())
            }
        })
    },
    547: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(54).extend({
                template: function() {
                    return ""
                },
                renderDecorate: function() {
                    var t = new(n(1371))({
                        linkGroups: e.getLinkGroups(),
                        activeLinkId: e.getActiveLinkId()
                    });
                    this.$el.width(e.$el.outerWidth()), this.addSubview(t), this.$el.append(t.render().el)
                }
            })
        }

        function r(e) {
            return n(3).flatten(e.map(function(e) {
                var t = e.links;
                return t.map(function(e) {
                    var t = e.label;
                    return t
                })
            }))
        }
        e.exports = new(n(21))({
            requires: ["getLinkGroups", "getActiveLinkId"],
            requirePrototype: n(107).prototype,
            merge: {
                defaults: {
                    overlayType: "dropdown",
                    overlayOptions: {
                        collision: "none"
                    }
                },
                bubbleEvents: {
                    linkMenuItemSelected: "onLinkMenuItemSelected"
                }
            },
            after: {
                setup: function(e) {
                    this.options.allPossibleLabels = r(this.getLinkGroups()), this.options.ContentViewClass = i(this)
                }
            },
            onLinkMenuItemSelected: function(e) {
                var t = e.data.link;
                e.stopPropagation(), t.href ? n(55).get("router").navigate(t.href, {
                    trigger: !0
                }) : this.onLinkClick(t)
            },
            updateMenu: function() {
                this.isOverlayOpened() && this.getOverlay().rerender()
            },
            defaults: {
                onLinkClick: function(e) {}
            }
        })
    },
    548: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = void 0;
            return t[e] ? n = e : 0 === e.indexOf("on") && (n = e.substr(2), n = n.charAt(0).toLowerCase() + n.slice(1)), n
        }
        var r = n(3).noop,
            o = n(3).isFunction;
        e.exports = new(n(21))({
            requirePrototype: n(54).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.actionHandlers,
                    s = void 0 === n ? {} : n;
                this.before(e, {
                    setup: function() {
                        var e = this,
                            t = this.model;
                        Object.keys(s).forEach(function(n) {
                            var a = i(n, t.actions),
                                l = s[n];
                            o(l) && l !== r && e.listenTo(t, "complete:action:" + a, l)
                        })
                    }
                })
            }
        })
    },
    566: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.playlist;
            return e && e.getSoundIndex(this.model) + 1
        }

        function r() {
            this.disposed || this.toggleState("active", this.model.isPlaying(), !0).toggleState("disabled", !this.model.isPlayable())
        }
        e.exports = n(54).extend(n(149), {
            template: n(2385),
            css: n(2766),
            className: "compactTrackListItem sc-media sc-border-light-bottom",
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["user", "title", "artwork_url", "duration"],
                playlist: ["user", "title", "artwork_url"]
            },
            element2selector: {
                plays: ".compactTrackListItem__plays"
            },
            states: {
                active: "active",
                clickToPlay: "clickToPlay",
                disabled: "m-disabled"
            },
            events: {
                "click .compactTrackListItem__remove": "onRemoveClick"
            },
            defaults: {
                showUser: !0,
                showTrackNumber: !1,
                showPlaybackCount: !0,
                showRemoveButton: !1,
                clickToPlay: !0
            },
            loadingTemplate: function() {
                return '<img class="compactTrackListItem__image sc-media-image" width="20" height="20">' + (i.call(this) || "")
            },
            setup: function(e) {
                "sound" === e.resource_type && this.listenTo(this.model.getOriginalSound(), "change:playback_count", this.rerender).listenTo(this.model, "change:playable", this.rerender), e.clickToPlay && (this.listenTo(this.model, "play pause", this.onToggle), this.onClick = this.onClick.bind(this), this.$el.on("click", this.onClick).attr("tabindex", 0)), this.toggleState("clickToPlay", e.clickToPlay)
            },
            renderDecorate: function() {
                r.call(this), this.options.clickToPlay && this.$el.addClass("clickToPlay")
            },
            onClick: function(e) {
                e.preventDefault(), this.getState("disabled") || this.toggleAudible(this.model, {
                    userInitiated: !0,
                    context: this.getContextData()
                })
            },
            onRemoveClick: function() {
                this.bubble("onRemoveClick", {
                    sound: this.model
                })
            },
            onToggle: function() {
                r.call(this)
            },
            getTemplateData: function(e) {
                var t = this.options,
                    r = this.model,
                    o = e.isSound = "sound" === e._resource_type,
                    s = !this.model.isPlayable();
                return e.playback_count = o && r.getOriginalSound().get("playback_count"), e.showPlaybackCount = e.playback_count && t.showPlaybackCount, e.track_number = o && i.call(this), e.showTrackNumber = null != e.track_number && t.showTrackNumber, e.showBlockedMsg = s, s && (e.blockedMsg = n(163).getShortBlockMessage()), e
            }
        })
    },
    569: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                var n = this;
                this.whenInserted().done(function() {
                    var e = n.$el.closest(".modal__content");
                    t.dpDiv.addClass("datefield__datepicker").toggleClass("insideModal", !!e.length)
                })
            }

            function r() {
                var e = new Date;
                return e.setHours(0, 0, 0, 0), e
            }

            function o(e, n) {
                if (!n.length) return null;
                try {
                    return t.datepicker.parseDate(e, n)
                } catch (i) {
                    return new Date(NaN)
                }
            }

            function s(e, t) {
                return t = new Date(t), t.setFullYear(e.getFullYear()), t.setMonth(e.getMonth()), t.setDate(e.getDate()), t
            }
            n(561);
            e.exports = n(60).extend(n(352), {
                className: "textfield datefield",
                events: n(3).assign({}, n(60).prototype.events, {
                    "input .textfield__input": "onInputChange",
                    "change .textfield__input": "onInputChange"
                }),
                css: n(3).flatten([n(60).prototype.css, n(26), n(27), n(2776)]),
                defaults: {
                    dateFormat: "dd/mm/yy",
                    placeholder: n(52).t("DD/MM/YYYY"),
                    defaultDate: null,
                    minDate: null
                },
                renderDecorate: function() {
                    var e = this.options;
                    n(60).prototype.renderDecorate.apply(this, arguments), this.getElement("control").datepicker({
                        defaultDate: e.defaultDate,
                        minDate: e.minDate,
                        dateFormat: e.dateFormat,
                        beforeShow: i.bind(this)
                    }), this.onFieldChange()
                },
                getValue: function() {
                    var e = this.getFieldValue() || r(),
                        t = this.getElement("control").val().trim(),
                        n = o(this.options.dateFormat, t);
                    return n ? s(n, e) : null
                },
                onFieldChange: function() {
                    this.getElement("control").datepicker("setDate", this.getFieldValue())
                },
                getTemplateData: function(e) {
                    e = n(60).prototype.getTemplateData.call(this, e) || e;
                    var t = this.options;
                    return t.label !== !1 && (e._label = t.label), e
                }
            })
        }).call(t, n(1))
    },
    570: function(e, t, n) {
        "use strict";
        e.exports = n(60).extend(n(1335), {
            defaults: {
                type: "textarea",
                resizing: "vertical",
                label: n(52).t("Description")
            }
        })
    },
    573: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(2780),
            template: n(2397),
            className: "genericTrackCount",
            defaults: {
                showDuration: !0,
                size: "large",
                trackCount: 0,
                duration: 0
            },
            states: {
                noTracks: "m-noTracks",
                active: "m-active"
            },
            setup: function(e) {
                var t = e.trackCount,
                    i = e.duration;
                this.$el.addClass(this.options.size), this.toggleState("noTracks", 0 === t), this.toggleState("active", !(0 === t && i > 0)), this.$el.attr("title", n(52).tp("1 track", "%d tracks", t))
            },
            getTemplateData: function(e) {
                return e.showDuration = this.options.showDuration && this.options.duration > 0, e
            }
        })
    },
    575: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this,
                n = this.options.sizes,
                i = n.width,
                r = n.previewWidth;
            this.getElement("cropper").cropit({
                $preview: this.getElement("preview"),
                $previewContainer: this.getElement("previewContainer"),
                $zoomSlider: this.getElement("zoomSlider"),
                largerEventAreaSelector: "body",
                smallestImageSize: i,
                onImageLoaded: function() {
                    d.call(t), t.onChange()
                },
                onZoomEnabled: function() {
                    return t.toggleState("smallImage", !1, !0)
                },
                onZoomDisabled: function() {
                    return t.toggleState("smallImage", !0)
                },
                onZoomChange: this.onChange,
                onOffsetChange: this.onChange,
                allowDragNDrop: !1,
                width: r,
                height: r / this.aspectRatio,
                imageState: {
                    src: e
                }
            })
        }

        function r() {
            var e = this.getElement("cropper").cropit("export", {
                type: "image/jpeg",
                quality: .8,
                originalSize: !0
            });
            return n(937).getBlobFromDataURI(e)
        }

        function o() {
            this.toggleState("uploading", !0);
            var e = r.call(this);
            this.options.saveFile(e).then(u.bind(this), c.bind(this))
        }

        function s() {
            n(3).result(this.options, "onCancel")
        }

        function a() {
            h.call(this, -1)
        }

        function l() {
            h.call(this, 1)
        }

        function u(e) {
            var t = this.options.onSaveSuccess;
            t && t(e), this.toggleState("uploading", !1)
        }

        function c() {
            n(3).result(this.options, "onSaveFail"), this.toggleState("errorSaving", !0)
        }

        function d() {
            var e = this.getElement("cropper"),
                t = e.cropit("imageSize");
            e.cropit("offset", p.call(this, t))
        }

        function h(e) {
            var t = this.getElement("zoomSlider"),
                n = parseFloat(t.val()),
                i = Math.min(Math.max(n + f * e, 0), 1);
            i !== n && t.val(i).change()
        }

        function p(e) {
            var t, n = this.options.sizes,
                i = n.width,
                r = n.height,
                o = {
                    x: 0,
                    y: 0
                },
                s = e.height,
                a = e.width,
                l = a / s;
            return l < this.aspectRatio ? (t = i / a, o.y = -((s * t - r) / 2) * this.presentationScaleFactor) : (t = r / s, o.x = -((a * t - i) / 2) * this.presentationScaleFactor), o
        }
        var f = .1,
            m = 300;
        e.exports = n(54).extend({
            className: "imageCrop",
            template: n(2400),
            css: n(2783),
            defaults: {
                file: null,
                saveFile: null,
                standAlone: !0,
                showRoundOverlay: !1,
                sizes: null,
                onSaveSuccess: null,
                onSaveFail: null,
                onCancel: null
            },
            states: {
                compact: "m-compact",
                uploading: function(e) {
                    e && this.toggleState("errorSaving", !1), this.getElement("saveButton").toggleClass("sc-pending", e).text(e ? n(52).t("Savingâ€¦") : n(52).t("Save"))
                },
                errorSaving: function(e) {
                    e && this.toggleState("uploading", !1), this.getElement("error").toggle(e).text(e ? n(52).t("Error saving. Please try again.") : ""), this.getElement("saveButton").text(e ? n(52).t("Retry") : n(52).t("Save"))
                },
                smallImage: function(e) {
                    e && this.toggleState("errorSaving", !1), this.getElement("zoomContainer").toggle(!e), this.getElement("smallImage").toggle(e).text(e ? n(52).t("The image is small and may appear blurry.") : "")
                }
            },
            element2selector: {
                cropper: ".imageCrop__cropper",
                smallImage: ".imageCrop__smallImage",
                error: ".imageCrop__error",
                preview: ".imageCrop__preview",
                previewContainer: ".imageCrop__previewContainer",
                saveButton: ".imageCrop__saveButton",
                zoomContainer: ".imageCrop__zoomContainer",
                zoomSlider: ".imageCrop__zoomSlider",
                zoomControls: ".imageCrop__zoomControl"
            },
            bubbleEvents: {
                "image-chooser:file-selected": "onFileSelected"
            },
            events: {
                "click .imageCrop__saveButton": o,
                "click .imageCrop__cancelButton": s,
                "click .imageCrop__zoomControlMinus": a,
                "click .imageCrop__zoomControlPlus": l
            },
            setup: function(e) {
                var t = e.file,
                    i = e.standAlone,
                    r = e.sizes,
                    o = r.width,
                    s = r.height,
                    a = r.previewWidth;
                this.toggleState("compact", !i), this.onChange = n(3).debounce(this.onChange.bind(this), 300), this.aspectRatio = o / s, this.presentationScaleFactor = a / o, this._readFileDeferred = n(87).readImageFileCorrected(t)
            },
            renderDecorate: function() {
                var e = this,
                    t = Math.floor(100 * Math.random()),
                    r = this.options.sizes.height;
                this.getElement("previewContainer").addClass(n(87).getPlaceholderClass(t)).height(r * this.presentationScaleFactor), n(56).all([this._readFileDeferred, this.whenInserted(), n(56).delay(m)]).then(function(t) {
                    i.call(e, t)
                })
            },
            onFileSelected: function(e) {
                var t = this;
                e.stopPropagation();
                var i = e.data.file;
                n(87).readImageFileCorrected(i).then(function(e) {
                    return t.getElement("cropper").cropit("imageSrc", e)
                })
            },
            onChange: function() {
                if (!this.options.standAlone) {
                    var e = r.call(this);
                    this.options.saveFile(e).then(u.bind(this), c.bind(this))
                }
            }
        })
    },
    589: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = n(377).Events;
            i = {
                comment: n(783),
                affiliation: n(782)
            };
            e.exports = n(225).extend(n(140), {
                template: n(785),
                css: n(850),
                tagName: "article",
                className: "ownActivity",
                defaults: {
                    size: "small",
                    dialogSelector: ".userBadge__userNameLink, .ownActivity__userName",
                    dialogType: "userBadge",
                    comment_body_is_link: !1,
                    dark: !1
                },
                element2selector: {
                    commentFormWrapper: ".ownActivity__commentForm",
                    commentReply: ".ownActivity__commentReply",
                    commentReplyButton: ".ownActivity__replyButton"
                },
                setup: function() {
                    var e = this.type = this.options.activity.get("type");
                    n(225).prototype.setup.apply(this, arguments), i.hasOwnProperty(e) && (this.template = i[e]), this.$el.addClass(this.options.size + " " + e)
                },
                dispose: function() {
                    this.timedComments && (this.timedComments.release(), this.timedComments = null)
                },
                renderDecorate: function() {
                    this.shouldShowCommentActions() && (this.prepareCommentThread(), this.prepareCommentReply())
                },
                shouldShowCommentActions: function() {
                    return "comment" === this.type && "large" === this.options.size
                },
                prepareCommentThread: function() {
                    this.timedComments = new(n(908))(null, {
                        sound_id: this.model.get("comment").track_id
                    }), this.timedComments.isPopulated() ? this.onTimedCommentsFetched() : (this.listenTo(this.timedComments, "reset", this.onTimedCommentsFetched), this.timedComments.fetch({
                        reset: !0
                    }))
                },
                prepareCommentReply: function() {
                    this.listenTo(this.subviews.replyCommentButton, r.OPEN, this.onCommentReplyOpen).listenTo(this.subviews.replyCommentButton, r.SENT, this.onCommentReplySent).listenTo(this.subviews.replyCommentButton, [r.CANCEL, r.POST].join(" "), this.onCommentReplyClose)
                },
                dialogSubviewArgs: function() {
                    return {
                        resource_id: "comment" === this.type ? this.model.get("comment").user_id : this.model.get("user").id
                    }
                },
                onTimedCommentsFetched: function() {
                    var e, t = this.model.get("comment"),
                        i = this.timedComments.getThreadComments(t.timestamp).reverse(),
                        r = n(55).get("me").id,
                        o = t.id;
                    e = n(3).find(i, function(e) {
                        return e.get("user_id") === r && e.id > o
                    }), e && this.insertReply(e)
                },
                insertReply: function(e) {
                    var t = new(n(372))({
                        resource_id: e.resource_id,
                        dark: this.options.dark,
                        show_icon: !1,
                        show_time: !0,
                        body_is_link: !1,
                        compact: "small" === this.options.size
                    }).render();
                    this.getElement("commentReply").prepend(t.el)
                },
                onCommentReplyOpen: function(e) {
                    var i = new(n(108))(this.model.get("comment"));
                    this.getElement("commentFormWrapper").addClass("visible").append(e.render().el), e.goToState(n(101).ACTIVE_TIMESTAMP, i.get("timestamp"), i), t(window.document).on("click.replyCancel", function(i) {
                        return t(i.target).closest(".ownActivity__commentForm").length ? !0 : (t(this).off("click.replyCancel"), void e.trigger(n(178).Events.CANCELED))
                    })
                },
                onCommentReplyClose: function() {
                    this.getElement("commentFormWrapper").removeClass("visible")
                },
                onCommentReplySent: function(e, t) {
                    this.insertReply(t)
                },
                getTemplateData: function(e) {
                    var t = "small" === this.options.size,
                        i = n(55).get("me"),
                        r = this.model.get("user");
                    return e = n(225).prototype.getTemplateData.call(this, e) || e, e.icon_variation = this.options.dark ? "light" : null, e.is_small = t, e.comment_body_is_link = this.options.comment_body_is_link, e.audible_image_size = t ? 20 : 40, e.user_image_size = t ? "small" : "large", e.meId = i.id, e.is_mine = r && i.id === r.id, e.Audible = n(75), e
                }
            })
        }).call(t, n(1))
    },
    590: function(e, t, n) {
        "use strict";

        function i(e) {
            return e === n(204).prototype.resource_type
        }
        e.exports = n(54).extend(n(88), n(310), n(149), n(68).withOptions("addToNextUpButton"), {
            className: "sc-button-queue",
            defaults: {
                closes_dropdown: !1
            },
            buttonLabels: {
                "default": n(52).tPending("Add to Next up")
            },
            setup: function(e) {
                var t = e.resource_id,
                    r = e.resource_type;
                this.ModelClass = n(i(r) ? 204 : 75), this.model = this.getModel(t, r)
            },
            onClick: function(e) {
                e.preventDefault(), i(this.options.resource_type) ? n(92).cloneQueueItemToExplicit(this.model) : this.addExplicitQueueItem(this.model), this.options.closes_dropdown && this.bubble("overlay:close")
            }
        })
    },
    591: function(e, t, n) {
        "use strict";

        function i() {
            return !!this.model.get(this.options.resource_id)
        }
        var r = n(52).t("Like station"),
            o = n(52).t("Liked station"),
            s = n(52).t("Unlike station");
        e.exports = n(54).extend(n(88), n(68).withOptions("likeStationButton"), {
            className: "sc-button-like",
            defaults: {
                show_counts: !1,
                allPossibleLabels: [r, o]
            },
            buttonLabels: {
                "default": {
                    text: r,
                    title: r
                },
                selected: {
                    text: o,
                    title: s
                }
            },
            setup: function(e) {
                var t = e.resource_id;
                this.model = new(n(992)), this.observedAttributes = [t]
            },
            isButtonSelected: i,
            onClick: function(e) {
                e.preventDefault();
                var t = !i.call(this),
                    r = this.getContextData();
                n(74).likeStation(this.options.resource_id, t, {
                    context: r
                })
            }
        })
    },
    593: function(e, t, n) {
        "use strict";
        e.exports = n(107).extend({
            className: "sc-button-more",
            defaults: {
                ContentViewClass: n(1446),
                overlayType: "dropdown",
                overlayOptions: {
                    anchor: "left top",
                    relativeElementAnchor: "left bottom"
                },
                actions: null,
                cornerStyle: "square"
            },
            buttonLabels: {
                "default": n(52).t("More")
            },
            getContentViewArgs: function() {
                var e = this.options,
                    t = e.actions,
                    i = e.contentViewArgs,
                    r = e.cornerStyle;
                return n(3).defaults({
                    actions: t,
                    cornerStyle: r
                }, i)
            }
        })
    },
    594: function(e, t, n) {
        "use strict";

        function i() {
            return !1
        }

        function r(e) {
            n(3).assign(this.options, e), this.toggleOverlay()
        }

        function o(e) {
            return this.options.show_counts ? n(143).render(this.audible.get("reposts_count") || e, {
                useSIUnits: !0
            }) : e
        }
        var s = n(52).t("Repost"),
            a = n(52).t("Reposted"),
            l = n(52).t("Unpost"),
            u = {
                ContentViewClass: n(1042),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "320px"
                }
            },
            c = {
                ContentViewClass: n(1679),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "220px"
                }
            };
        e.exports = n(107).extend(n(310), n(68).withOptions("repostButton"), {
            className: "sc-button-repost",
            defaults: {
                icon_only: !0,
                hasPopups: !0,
                show_counts: !1
            },
            buttonLabels: {
                "default": {
                    text: function() {
                        return o.call(this, s)
                    },
                    title: s
                },
                selected: {
                    text: function() {
                        return o.call(this, a)
                    },
                    title: l
                }
            },
            states: {
                selected: function(e) {
                    var t = e ? "selected" : "default";
                    this.$el.toggleClass(this.selectedClass, e), this.updateButton(t)
                }
            },
            showShareRepostOverlay: !1,
            selectedClass: null,
            setup: function(e) {
                "sound" === e.resource_type ? this.model = new(n(999)) : this.model = new(n(996)), this.selectedClass = e.selectedClass ? e.selectedClass : e.isScButton ? "sc-button-selected" : "selected", this.observedAttributes = [e.resource_id], n(107).prototype.setup.apply(this, arguments), e.show_counts && (this.audible = this.addDataSource(new(n(75))({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }), {
                    requiredAttributes: ["reposts_count"]
                }), this.listenTo(this.audible, "change:reposts_count", this.rerender), this.listenTo(this.model, "change:" + e.resource_id, this.rerender))
            },
            renderDecorate: function() {
                n(107).prototype.renderDecorate.apply(this, arguments), this.showShareRepostOverlay && this.options.hasPopups && (this.showShareRepostOverlay = !1, r.call(this, u))
            },
            isButtonSelected: function() {
                return !!this.model.get(this.options.resource_id)
            },
            onClick: function(e) {
                var t = this.options;
                e.preventDefault(), !this.isButtonSelected() && i() && t.hasPopups ? r.call(this, c) : (this.showShareRepostOverlay = !this.isButtonSelected() && n(1042).shouldShowDialog(), n(74).repost(t.resource_id, t.resource_type, !this.isButtonSelected(), {
                    context: this.getContextData()
                }))
            }
        })
    },
    601: function(e, t, n) {
        "use strict";

        function i(e) {
            return "track" === e ? "sound" : e
        }
        e.exports = n(54).extend({
            template: n(794),
            css: n(858),
            className: "autocompleteItem",
            requiredModelAttributes: ["link", "output", "artwork_url"],
            attributes: {
                role: "option"
            },
            ModelClass: n(273),
            getTemplateData: function(e) {
                var t = this.model.get("output"),
                    r = this.model.get("highlights");
                return e.title = n(174).usertext(n(131).highlightText(t, r), {
                    escapeExpression: !1,
                    paragraphs: !1,
                    links: !1,
                    userlinks: !1,
                    whitelist: ["b"]
                }), e.isQuery = this.model.isQuery(), e.iconName = i(this.model.getEntityType()), e.isQuery || (e.entityResourceId = this.model.resource.resource_id, e.entityResourceType = this.model.resource.resource_type), e
            }
        })
    },
    602: function(e, t, n) {
        "use strict";
        var i = n(159).extend({
            defaults: {
                dark: !0,
                size: "regular"
            }
        });
        e.exports = n(78).extend({
            css: n(859),
            className: "searchAutocomplete g-dark-list",
            Subview: n(601),
            defaults: {
                query: null,
                maxDisplay: 10
            },
            ThrobberView: n(239),
            LoadingView: i,
            automaticErrorHandling: !1,
            setup: function(e) {
                var t = e.query;
                this.collection = new(n(898))(null, {
                    query: t,
                    entityKind: "query"
                })
            },
            updateFilter: function(e) {
                this.collection.updateFilter(e)
            },
            getResultAt: function(e) {
                return this.collection.at(e)
            },
            getQueryUrn: function() {
                return this.collection.getQueryUrn()
            }
        })
    },
    603: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(52).t("Search for <q>[[query]]</q>", {
                query: this.options.query
            }).toString();
            this.getElement("searchForText").html(e)
        }
        e.exports = n(54).extend(n(307), {
            template: n(795),
            css: n(860),
            className: "g-dark",
            attributes: {
                id: "searchMenuList"
            },
            maxItemDisplay: 5,
            itemSelector: ".autocompleteItem, .searchMenu__searchFor",
            highlightClassName: "g-dark-selected",
            defaults: {
                query: null
            },
            element2selector: {
                searchForText: ".searchMenu__searchForText"
            },
            updateListFilter: function(e) {
                this.options.query = e, this.subviews.list.updateFilter(e), i.call(this)
            },
            onItemSelected: function(e, t) {
                var n = this.isQueryEmpty() ? e : e - 1;
                return {
                    queryUrn: this.subviews.list.getQueryUrn(),
                    query: this.options.query,
                    shortcut: t.hasClass("searchMenu__searchFor") ? null : {
                        model: this.subviews.list.getResultAt(n),
                        index: n
                    }
                }
            },
            getTemplateData: function(e) {
                return e.isQueryEmpty = this.isQueryEmpty(), e
            },
            renderDecorate: function() {
                i.call(this)
            },
            isQueryEmpty: function() {
                var e = this.options.query;
                return !e || !e.trim()
            }
        })
    },
    604: function(e, t, n) {
        "use strict";

        function i() {
            this.getState("expanded") && this.$el.width(this.getMenuWidth())
        }

        function r() {
            return this.getElement("input").val().trim()
        }
        var o = n(59).trackV1Click;
        e.exports = n(54).extend(n(184), n(350), {
            css: n(861),
            template: n(796),
            className: "headerSearch",
            events: {
                "focus .headerSearch__input": "onInputFocus",
                "blur  .headerSearch__input": "onInputBlur"
            },
            zIndexLevel: "header-menu",
            inputSelector: ".headerSearch__input",
            MenuContentView: n(603),
            typingDelay: 100,
            category: null,
            formulatingSearch: !1,
            getRelativeElement: function() {
                return this.getFormElement()
            },
            setup: function() {
                this.showAllItems = !1, this.$el.one("focus", ".headerSearch__input", function() {
                    n(63).isLoggedIn() && (n(330).prefetch(), n(517).prefetch())
                })
            },
            renderDecorate: function() {
                this.listenTo(n(85), "resize:x:throttled", i).listenTo(n(57), "layout:change", this.onLayoutChange).listenTo(n(57), "search:focus", this.focusInput), this.getElement("input").addClass("g-all-transitions-300").attr({
                    "aria-autocomplete": "list",
                    "aria-owns": "searchMenuList"
                })
            },
            teardown: function() {
                this.stopListening(n(85), "resize:x:throttled").stopListening(n(57), "layout:change").stopListening(n(57), "search:focus")
            },
            getTemplateData: function(e) {
                return e.placeholderText = n(63).isLoggedIn() ? n(52).t("Search") : n(52).t("Search for artists, bands, tracks, podcasts"), e
            },
            updateMenuContent: function(e, t) {
                var n = t.query;
                this.getMenu().getContentView().updateListFilter(n)
            },
            onInputFocus: function() {
                this.formulatingSearch = !0;
                var e = r.call(this),
                    t = e ? {
                        q: e
                    } : null;
                o({
                    click_name: "search_formulation_init",
                    click_attributes: t
                })
            },
            onInputBlur: function() {
                if (this.formulatingSearch) {
                    var e = r.call(this),
                        t = e ? {
                            q: e
                        } : null;
                    o({
                        click_name: "search_formulation_exit",
                        click_attributes: t
                    }), this.formulatingSearch = !1
                }
            },
            onItemSelected: function(e) {
                e.shortcut ? (this.trackClick(e), this.emptyInput().blur(), n(55).get("router").navigate(e.shortcut.model.get("link"), {
                    trigger: !0
                })) : this.getFormElement().submit()
            },
            onSubmit: function() {
                var e = r.call(this),
                    t = n(131).getFilters();
                this.selectedItemIndex < 1 && e && (this.formulatingSearch = !1, o({
                    click_name: "search_formulation_end",
                    click_attributes: {
                        q: e
                    }
                }), n(55).get("router").navigateToRoute("search", [this.category, e, t], {
                    trigger: !0
                }), this.getInput().blur())
            },
            onLayoutChange: function(e) {
                "search" === e.layoutName ? (this.replaceInputValue(n(131).getValidParams(n(62).parse(window.location.href).query).q), this.category = e.args.category) : (this.replaceInputValue(""), this.category = null)
            },
            trackClick: function(e) {
                var t = e.queryUrn,
                    n = e.shortcut,
                    i = n.model;
                this.formulatingSearch = !1;
                var s = r.call(this),
                    a = s ? {
                        q: s
                    } : null;
                i.isQuery() ? o({
                    click_name: "search_formulation_end",
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: a
                }) : (a.source = "search-autocomplete", o({
                    click_name: "item_navigation",
                    click_object: i.resource ? i.resource.getUrn() : null,
                    query_position: n.index,
                    query_urn: t,
                    click_attributes: a
                }))
            }
        })
    },
    675: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentTitle{position:relative}.commentTitle__icon{margin-right:5px}.commentTitle__quotedBody:before,.commentTitle__quotedBody:after{content:'â€œ'}", ""])
    },
    676: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".ownActivity{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.ownActivity__images{position:relative;margin-right:10px}.ownActivity__content{-webkit-flex:1;-ms-flex:1;flex:1}.ownActivity .ownActivity__trackImg{position:absolute;right:0;bottom:0}.ownActivity__title{color:#ccc;margin:0}.ownActivity__time{position:absolute;right:0;top:8px;color:#999;font-size:12px}.ownActivity__bottom{position:relative}.ownActivity__bottomAction{position:absolute;right:0;bottom:0}.ownActivity__commentForm.visible{margin-top:15px}.ownActivity__commentReply{margin-top:15px}.ownActivity__commentReply>.commentTitle{margin:0 0 10px 0}.ownActivity.inactive:before{content:'';background-color:rgba(255,255,255,.7);position:absolute;top:0;bottom:0;left:0;right:0;z-index:1}.ownActivity.small{font-size:11px;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ownActivity.small .ownActivity__user{padding-right:75px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-top:2px}.ownActivity.large .ownActivity__top{margin-bottom:10px;position:relative}.ownActivity.large .ownActivity__user{border-right:1px solid #f2f2f2;float:left;padding:0 10px 7px 0;width:240px}.ownActivity.large .ownActivity__additional{position:absolute;right:0;bottom:9px}.ownActivity.large .ownActivity__action{position:absolute;right:0;bottom:9px}.g-dark .ownActivity{padding:10px;color:#666}.g-dark .ownActivity__trackImg{border-color:#262626}.g-dark .ownActivity .ownActivity__time{top:18px;right:10px}.g-dark .ownActivity.comment .ownActivity__time{top:13px}.g-dark .ownActivity__user a,.g-dark .ownActivity__time,.g-dark .ownActivity__additional,.g-dark .ownActivity__additional a{color:#999}.g-dark .ownActivity__additional a:hover,.g-dark .ownActivity__additional a:focus,.g-dark .ownActivity__user a:hover,.g-dark .ownActivity__user a:focus{color:#ccc}@media (max-width:900px){.ownActivity__additional{width:53px}}", ""])
    },
    677: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".replyActivityComment{opacity:1;visibility:visible;transition:.3s opacity}.replyActivityComment-hidden{opacity:0;visibility:hidden;transition:.3s opacity,.3s,visibility 0s .3s}", ""])
    },
    683: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".autocompleteItem{padding:0}.autocompleteItem>a{display:block;padding:10px 40px 10px 14px;position:relative}.autocompleteItem__title{line-height:20px}.autocompleteItem__title>b{color:#fff}.autocompleteItem__icon{position:absolute;top:9px;right:14px}.autocompleteItem__queryIcon{height:20px;width:20px;background-image:url(" + n(1119) + ");background-size:17px 17px;background-repeat:no-repeat;background-position:center}", ""])
    },
    684: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchAutocomplete>.loading{background-color:#333;padding:5px 0}", ""])
    },
    685: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".searchMenu .loading{background-color:#333;padding:5px 0}.searchMenu__item{padding:0}.searchMenu__searchFor{padding:0;background-color:#333;border-bottom:1px solid rgba(0,0,0,.22);border-left:1px solid #404040;border-right:1px solid #404040;text-align:left;box-shadow:0 1px 0 rgba(255,255,255,.05)}.searchMenu__searchFor.g-dark-selected{background-color:#262626}.searchMenu__searchFor a{display:block;padding:10px 10px 10px 14px}", ""])
    },
    686: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".headerSearch{padding:9px 10px 8px;position:relative;appearance:none}.headerSearch__input{width:100%}.headerSearch__submit{border:0;padding:0;background:url(" + n(1120) + ") 0 0 no-repeat;width:15px;height:15px;position:absolute;right:20px;top:15px}.headerSearch__submit:focus{outline:0}.headerSearch__input{height:28px}", ""])
    },
    782: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(154), {
                    name: "$view",
                    hash: {
                        size: "small",
                        dark: null != (s = null != t ? t._options : t) ? s.dark : s,
                        show_followed: !0,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <div class="ownActivity__images">\n    ' + u((n(53) || t && t.$view || l).call(a, n(169), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + '\n  </div>\n  <div class="ownActivity__content">\n    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + u((n(53) || t && t.$view || l).call(a, n(154), {
                    name: "$view",
                    hash: {
                        dark: null != (s = null != t ? t._options : t) ? s.dark : s,
                        show_followed: !0,
                        use_image: !1,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + '\n      </div>\n      <div class="ownActivity__additional sc-truncate sc-button-group">\n        ' + u((n(53) || t && t.$view || l).call(a, n(226), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n        " + u((n(53) || t && t.$view || l).call(a, n(194), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + '\n      </div>\n    </div>\n    <h3 class="ownActivity__title">\n      <a class="sc-link-dark" href="' + u((n(58) || t && t.$route || l).call(a, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n        ' + u((n(180) || t && t.$icon || l).call(a, {
                    name: "$icon",
                    hash: {
                        type: "follower",
                        size: "medium"
                    },
                    data: o
                })) + "\n      </a>\n    </h3>\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return (null != (s = i["if"].call(a, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? s : "") + '<span class="ownActivity__time sc-font-light">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    783: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = e.escapeExpression;
                return '    <div class="ownActivity__user">\n      <a class="sc-link-light" href="' + a((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + a(e.lambda(null != (s = null != t ? t.user : t) ? s.username : s, t)) + "</a>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(154), {
                    name: "$view",
                    hash: {
                        use_image: !1,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n      </div>\n" + (null != (s = i.unless.call(a, null != t ? t.is_mine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <div class="ownActivity__additional sc-truncate sc-button-group">\n          ' + u((n(53) || t && t.$view || l).call(a, n(226), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n          " + u((n(53) || t && t.$view || l).call(a, n(194), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            6: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '      <div class="ownActivity__bottomAction sc-button-group">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(377), {
                    name: "$view",
                    hash: {
                        key: "replyCommentButton",
                        className: "ownActivity__replyButton",
                        resource_id: null != (s = null != t ? t.comment : t) ? s.id : s
                    },
                    data: o
                })) + "\n" + (null != (s = i["if"].call(a, null != t ? t.can_delete_comment : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "      </div>\n"
            },
            7: function(e, t, i, r, o) {
                var s;
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(374), {
                    name: "$view",
                    hash: {
                        key: "deleteCommentButton",
                        resource_id: null != (s = null != t ? t.comment : t) ? s.id : s
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, n, i, r) {
                return '    <div class="ownActivity__commentForm"></div>\n    <div class="ownActivity__commentReply"></div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="ownActivity__images">\n  ' + u((n(53) || t && t.$view || l).call(a, n(169), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n  " + u((n(53) || t && t.$view || l).call(a, n(89), {
                    name: "$view",
                    hash: {
                        className: "ownActivity__trackImg",
                        size: null != t ? t.audible_image_size : t,
                        resource_type: "user",
                        resource_id: null != t ? t.meId : t
                    },
                    data: o
                })) + '\n</div>\n<div class="ownActivity__content">\n' + (null != (s = i["if"].call(a, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? s : "") + '  <div class="ownActivity__bottom">\n    ' + u((n(53) || t && t.$view || l).call(a, n(372), {
                    name: "$view",
                    hash: {
                        body_is_link: null != t ? t.comment_body_is_link : t,
                        compact: null != t ? t.is_small : t,
                        dark: null != (s = null != t ? t._options : t) ? s.dark : s,
                        resource_id: null != (s = null != t ? t.comment : t) ? s.id : s
                    },
                    data: o
                })) + "\n" + (null != (s = i.unless.call(a, null != t ? t.is_small : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n" + (null != (s = i.unless.call(a, null != t ? t.is_small : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</div>\n<span class="ownActivity__time sc-font-light">\n  ' + u((n(53) || t && t.$view || l).call(a, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    784: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '    <a class="sc-link-dark" href="' + e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(a, "listen", null != t ? t.track : t, null != t ? t.id : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.show_icon : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '      <div class="commentTitle__quotedBody">\n' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.compact : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.program(7, o, 0),
                    data: o
                })) ? s : "") + "      </div>\n    </a>\n"
            },
            2: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '        <span class="sc-icon-medium left commentTitle__icon sc-icon-comment' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.dark : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '"><b class="sc-ir">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "commented", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</b></span>\n"
            },
            3: function(e, t, n, i, r) {
                return "-light"
            },
            5: function(e, t, i, r, o) {
                return "          " + e.escapeExpression((n(248) || t && t.$usertextOneline || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertextOneline",
                    hash: {
                        links: !1
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                return "          " + e.escapeExpression((n(187) || t && t.$usertext || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertext",
                    hash: {
                        paragraphs: !1
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.show_icon : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '    <div class="commentTitle__quotedBody">\n' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.compact : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.program(14, r, 0),
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            10: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '      <span class="sc-icon-medium left commentTitle__icon sc-icon-comment' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.dark : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '"><b class="sc-ir">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "commented", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</b></span>\n"
            },
            12: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(248) || t && t.$usertextOneline || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertextOneline",
                    hash: {},
                    data: o
                })) + "\n"
            },
            14: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(187) || t && t.$usertext || i.helperMissing).call(null != t ? t : {}, null != t ? t.body : t, {
                    name: "$usertext",
                    hash: {
                        paragraphs: !1
                    },
                    data: o
                })) + "\n"
            },
            16: function(e, t, n, i, r) {
                return '    on <a class="sc-link-light" href="[[href]]">[[trackTitle]]</a>\n'
            },
            18: function(e, t, i, r, o) {
                return '  <div class="commentTitle__time sc-type-light">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '<div class="commentTitle__main sc-type-h3">\n' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.body_is_link : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(9, o, 0),
                    data: o
                })) ? s : "") + '</div>\n\n<div class="commentTitle__secondary sc-type-light">\n' + (null != (s = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        _comment: "Displayed when a user has commented on a track",
                        trackTitle: null != (s = null != t ? t.track : t) ? s.title : s,
                        href: (n(58) || t && t.$route || l).call(a, "listen", null != t ? t.track : t, null != t ? t.id : t, {
                            name: "$route",
                            hash: {},
                            data: o
                        })
                    },
                    fn: e.program(16, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "</div>\n\n" + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.show_time : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    785: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = e.escapeExpression;
                return '    <div class="ownActivity__user">\n      <a class="sc-link-light ownActivity__userName" href="' + a((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + a(e.lambda(null != (s = null != t ? t.user : t) ? s.username : s, t)) + "</a>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '    <div class="ownActivity__top sc-clearfix sc-border-light-bottom">\n      <div class="ownActivity__user">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(154), {
                    name: "$view",
                    hash: {
                        dark: null != (s = null != t ? t._options : t) ? s.dark : s,
                        use_image: !1,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n      </div>\n" + (null != (s = i.unless.call(a, null != t ? t.is_mine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n"
            },
            4: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <div class="ownActivity__additional sc-truncate sc-button-group">\n          ' + u((n(53) || t && t.$view || l).call(a, n(226), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n          " + u((n(53) || t && t.$view || l).call(a, n(194), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            6: function(e, t, i, r, o) {
                return e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "listen", null != t ? t.audible : t, {
                    name: "$route",
                    hash: {},
                    data: o
                }))
            },
            8: function(e, t, i, r, o) {
                return e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "playlist", null != t ? t.audible : t, {
                    name: "$route",
                    hash: {},
                    data: o
                }))
            },
            10: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "        " + e.escapeExpression((n(180) || t && t.$icon || a).call(s, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || a).call(s, "liked", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "like",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            12: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "        " + e.escapeExpression((n(180) || t && t.$icon || a).call(s, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || a).call(s, "reposted", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "repost",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            14: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "        " + e.escapeExpression((n(180) || t && t.$icon || a).call(s, {
                    name: "$icon",
                    hash: {
                        title: (n(51) || t && t.$t || a).call(s, "mentioned you in", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        variation: null != t ? t.icon_variation : t,
                        type: "sound",
                        size: "medium"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="ownActivity__images">\n  ' + u((n(53) || t && t.$view || l).call(a, n(169), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.user_image_size : t,
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n  " + u((n(53) || t && t.$view || l).call(a, n(89), {
                    name: "$view",
                    hash: {
                        className: "ownActivity__trackImg",
                        size: null != t ? t.audible_image_size : t,
                        resource_type: null != t ? t.subresource_type : t,
                        resource_id: null != (s = null != t ? t.audible : t) ? s.id : s
                    },
                    data: o
                })) + '\n</div>\n<div class="ownActivity__content">\n' + (null != (s = i["if"].call(a, null != t ? t.is_small : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? s : "") + '  <h3 class="ownActivity__title">\n    <a class="sc-link-dark" href="' + (null != (s = i["if"].call(a, null != t ? t.type_is_tracky : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.program(8, o, 0),
                    data: o
                })) ? s : "") + '">\n' + (null != (s = i["if"].call(a, null != t ? t.type_is_like : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.type_is_repost : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.type_is_audible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "      " + u(e.lambda(null != (s = null != t ? t.audible : t) ? s.title : s, t)) + '\n    </a>\n  </h3>\n</div>\n<span class="ownActivity__time sc-font-light">\n  ' + u((n(53) || t && t.$view || l).call(a, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    791: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="audibleEditForm__loading">\n  <div class="audibleEditForm__form sc-media sc-border-light g-shadow-light loading sc-border-box"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    794: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return '    <div class="sc-media-image autocompleteItem__queryIcon"></div>\n'
            },
            3: function(e, t, i, r, o) {
                return '    <div class="sc-media-image">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(89), {
                    name: "$view",
                    hash: {
                        size: 20,
                        resource_type: null != t ? t.entityResourceType : t,
                        resource_id: null != t ? t.entityResourceId : t
                    },
                    data: o
                })) + "\n    </div>\n"
            },
            5: function(e, t, i, r, o) {
                return "    " + e.escapeExpression((n(180) || t && t.$icon || i.helperMissing).call(null != t ? t : {}, {
                    name: "$icon",
                    hash: {
                        "class": "autocompleteItem__icon",
                        type: null != t ? t.iconName : t,
                        size: "large"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<a class="sc-media sc-media-type-' + c((s = null != (s = n.iconName || (null != t ? t.iconName : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "iconName",
                    hash: {},
                    data: r
                }) : s)) + '" href="' + c((s = null != (s = n.link || (null != t ? t.link : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "link",
                    hash: {},
                    data: r
                }) : s)) + '">\n' + (null != (o = n["if"].call(a, null != t ? t.isQuery : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "") + '  <div class="sc-media-content">\n    <h2 class="autocompleteItem__title sc-truncate sc-type-h3 sc-type-light">' + (null != (s = null != (s = n.title || (null != t ? t.title : t)) ? s : l, o = typeof s === u ? s.call(a, {
                    name: "title",
                    hash: {},
                    data: r
                }) : s) ? o : "") + "</h2>\n  </div>\n\n" + (null != (o = n.unless.call(a, null != t ? t.isQuery : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</a>\n"
            },
            useData: !0
        })
    },
    795: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s;
                return '  <div class="searchMenu__searchFor sc-type-small" role="option">\n    <a href="' + e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "search", "", null != (s = null != t ? t._options : t) ? s.query : s, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="sc-truncate searchMenu__searchForText"></a>\n  </div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return (null != (s = i.unless.call(a, null != t ? t.isQueryEmpty : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(602), {
                    name: "$view",
                    hash: {
                        key: "list",
                        query: null != (s = null != t ? t._options : t) ? s.query : s
                    },
                    data: o
                })) + "\n\n"
            },
            useData: !0
        })
    },
    796: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<input\n  class="headerSearch__input sc-input"\n  placeholder="' + u((s = null != (s = i.placeholderText || (null != t ? t.placeholderText : t)) ? s : l, "function" == typeof s ? s.call(a, {
                    name: "placeholderText",
                    hash: {},
                    data: o
                }) : s)) + '"\n  type="search"\n  name="q"\n  autocomplete="off"\n  aria-label="' + u((n(51) || t && t.$t || l).call(a, "Search", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">\n<button class="headerSearch__submit submit sc-ir" type="submit">' + u((n(51) || t && t.$t || l).call(a, "Search", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n"
            },
            useData: !0
        })
    },
    843: function(e, t, n) {
        var i = n(1862);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    846: function(e, t, n) {
        var i = n(1871);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    849: function(e, t, n) {
        var i = n(675);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    850: function(e, t, n) {
        var i = n(676);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    851: function(e, t, n) {
        var i = n(677);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    854: function(e, t, n) {
        var i = n(1917);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    855: function(e, t, n) {
        var i = n(1927);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    858: function(e, t, n) {
        var i = n(683);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    859: function(e, t, n) {
        var i = n(684);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    860: function(e, t, n) {
        var i = n(685);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    861: function(e, t, n) {
        var i = n(686);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    965: function(e, t, n) {
        "use strict";

        function i(e) {
            this.setRecipient(e), this.focus()
        }
        var r = n(59).trackV0Click,
            o = /^\s*@([\w\-]+)[^\w\-]/,
            s = 1e3,
            a = {
                REPLY: n(52).t("Write a reply"),
                COMMENT: n(52).t("Write a comment")
            };
        e.exports = new(n(21))({
            requires: ["postComment"],
            override: {
                template: n(2425),
                css: n(2805),
                className: "commentForm commentForm__transition"
            },
            applyTo: function(e) {
                e.events = n(3).assign(e.events || {}, {
                    keydown: "onKeydown",
                    "keyup    .commentForm__input": "onInputKeyup",
                    "focus    .commentForm__input": "onInputFocus",
                    "blur     .commentForm__input": "onInputBlur",
                    "click    .commentForm__recipient": "onRecipientClick"
                }), e.element2selector = n(3).assign(e.element2selector || {}, {
                    input: ".commentForm__input",
                    recipient: ".commentForm__recipient",
                    inputMessage: ".commentForm__inputMessage"
                }), e.states = n(3).assign(e.states || {}, {
                    active: "m-active",
                    recipientActive: "m-recipientActive",
                    invalid: function(e) {
                        this.$el.toggleClass("m-invalid", e), this.getElement("inputMessage").toggleClass("g-input-validation-hidden", !e)
                    }
                }), e.defaults = n(3).assign(e.defaults || {}, {
                    size: "large"
                })
            },
            after: {
                setup: function() {
                    this.$el.addClass("m-" + this.options.size), n(57).on("connect:hasUserData", this.onUserData, this), this.model.on("change:recipient", i, this)
                },
                dispose: function() {
                    n(57).off("connect:hasUserData", this.onUserData, this), this.model.off("change:recipient", i, this)
                },
                onInputFocus: function() {
                    r(["comment", "click"]), this.bubble(n(206).FOCUSED, this), this.toggleState("active", !0)
                },
                onInputBlur: function() {
                    this.toggleState("active", !1)
                }
            },
            before: {
                cancelInput: function() {
                    this.trigger(n(206).CANCELED, this, this.options.timestamp), this.bubble(n(206).CANCELED, this, this.options.timestamp), r(["comment", "cancel"])
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var i = n(3).assign({
                        isVisible: !0,
                        isLarge: "large" === this.options.size,
                        me: n(55).get("me").toJSON(),
                        inputTitle: this.getPlaceholderText(),
                        maxLength: s
                    }, t);
                    return e(i) || i
                }
            },
            defaults: {
                onInputBlur: n(3).noop,
                onInputFocus: n(3).noop,
                cancelInput: n(3).noop
            },
            setRecipient: function(e) {
                var t = this.getElement("recipient"),
                    n = this.getElement("input"),
                    i = !(!e || !e.length),
                    r = i ? a.REPLY : a.COMMENT;
                e = i ? "@" + e : "", n.attr({
                    placeholder: r,
                    title: r
                }), t.text(e).toggle(i), n.css({
                    paddingLeft: i ? t.outerWidth() : ""
                })
            },
            getRecipient: function() {
                return this.getElement("recipient").text().trim()
            },
            extractRecipient: function(e) {
                var t = o.exec(e);
                return t && t[1]
            },
            removeRecipientText: function(e) {
                return e.replace(o, "")
            },
            getCombinedBody: function() {
                var e = this.getRecipient();
                return (e ? e + ": " : "") + this.getCommentBody()
            },
            getPlaceholderText: function() {
                return a.COMMENT
            },
            isEmpty: function() {
                return this.disposed || !this.getCommentBody().length
            },
            exceedsMaxLength: function() {
                return this.getCommentBody().length > s
            },
            getCommentBody: function() {
                return (this.getElement("input").val() || "").trim()
            },
            clear: function() {
                this.getElement("input").val("")
            },
            focus: function() {
                this.getElement("input").focus()
            },
            onSubmit: function() {
                this.isEmpty() || this.exceedsMaxLength() || (this._isPostingComment = !0, n(63).login({
                    implicitAction: "comment",
                    implicitTarget: n(98).generate("sound", this.options.sound_id)
                }).done(this.postComment.bind(this, this.options.timestamp)))
            },
            onUserData: function() {
                this._isPostingComment || this.rerender()
            },
            onRecipientClick: function(e) {
                e.preventDefault()
            },
            onInputKeyup: function() {
                if ("" === this.getRecipient()) {
                    var e = this.getElement("input"),
                        t = this.extractRecipient(e.val());
                    t && (this.setRecipient(t), e.val(this.removeRecipientText(e.val())).focus()), this.toggleState("invalid", this.exceedsMaxLength())
                }
            },
            onKeydown: function(e) {
                switch (e.keyCode) {
                    case n(102).BACKSPACE:
                        this.onBackspace(e);
                        break;
                    case n(102).ENTER:
                        this.onSubmit(), e.stopPropagation();
                        break;
                    case n(102).ESC:
                        this.getElement("input").trigger("blur", !0), this.cancelInput()
                }
            },
            onBackspace: function(e) {
                var t = this.getElement("input")[0];
                0 === t.selectionStart && 0 === t.selectionEnd && e.target === t && "" !== this.getRecipient() && (this.getState("recipientActive") && this.setRecipient(), this.toggleState("recipientActive"), e.preventDefault(), e.stopPropagation())
            }
        })
    },
    966: function(e, t, n) {
        "use strict";
        var i = n(539).whenElementVisible;
        e.exports = new(n(21))({
            requirePrototype: n(54).prototype,
            around: {
                fetchData: function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; t > o; o++) r[o - 1] = arguments[o];
                    var s = this.addDeferred(n(56).deferFrom(i(this.el)));
                    return s.then(function() {
                        e(r)
                    }), s
                }
            }
        })
    },
    967: function(e, t, n) {
        "use strict";

        function i() {
            this.removeLoader(), this.removeThrobber(), this.appendError()
        }

        function r() {
            a = o, this.afterFetch.apply(this, arguments)
        }
        var o = 250,
            s = 16e3,
            a = o;
        e.exports = new(n(21))(n(104), {
            requirePrototype: n(80).prototype,
            defaults: {
                ThrobberView: n(159),
                automaticErrorHandling: !0,
                afterFetch: n(3).noop
            },
            merge: {
                defaults: {
                    showThrobber: !0
                }
            },
            after: {
                _setup: function() {
                    this.automaticErrorHandling && this.listenTo(this.collection, "error", i)
                }
            },
            addThrobber: function() {
                if (this.options.showThrobber && this.ThrobberView) {
                    var e = this.subviews.throbber || this.addSubview(new this.ThrobberView, "throbber").render();
                    this.appendDOMElement(e.el)
                }
            },
            removeThrobber: function() {
                if (!this.disposed) {
                    var e = this.subviews.throbber;
                    e && (e._dispose(), this.removeSubview(e))
                }
            },
            appendError: function() {
                var e = this;
                if (!this.disposed) {
                    var t = this.subviews.errorView;
                    t || (t = this.addSubview(new(n(274))({
                        button_label: n(52).t("Retry"),
                        tagName: "div"
                    }), "errorView"), t.on("button_click", function() {
                        e.removeSubview(t), t._dispose(), e.addThrobber(), e.fetchNextPage({
                            delay: a
                        }), a = Math.min(4 * a, s)
                    }), t.render(), this.appendDOMElement(t.el))
                }
            },
            fetchNextPage: function(e) {
                var t = this,
                    i = function() {
                        t.collection.fetchUntilResults({
                            reset: !t.collection.isPopulated(),
                            remove: !1
                        }).done(r.bind(t))
                    };
                e && e.delay ? this.addDeferred(n(3).delay(i, e.delay)) : i()
            }
        })
    },
    978: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(2771),
            className: "paging-eof sc-border-light-top",
            setup: function() {
                this.el.title = "This is the endâ€¦ my only friend, the end."
            },
            template: function() {
                return ""
            }
        })
    },
    979: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e.regions.length && "worldwide" === e.regions[0].value
            }

            function r(e) {
                return "worldwide" === e && d || n(83).countryCodes(e) || [e]
            }

            function o(e) {
                e.preventDefault()
            }

            function s(e, t) {
                this.focusedField = "addTerritory", t && c.call(this, n(3).union, r(t))
            }

            function a(e, t) {
                this.focusedField = "addException", c.call(this, n(3).difference, [t])
            }

            function l(e) {
                var i = t(e.currentTarget),
                    o = i.data("id");
                c.call(this, n(3).difference, r(o))
            }

            function u(e) {
                var i = t(e.currentTarget),
                    o = i.data("id");
                c.call(this, n(3).union, r(o))
            }

            function c(e, t) {
                var n = e(this.getFieldValue() || [], t);
                this.setFieldValue(n), this.form.hasChanged() || this.rerender()
            }
            var d = n(83).countryCodes();
            e.exports = n(54).extend(n(113), n(217), {
                className: "countries",
                template: n(2390),
                css: n(2775),
                element2selector: {
                    validation: ".countries__addTerritory .textfield__validation"
                },
                events: {
                    "click [name=remove]": l,
                    "click [name=add]": u,
                    "change .countries__addTerritory": s,
                    "change .countries__addException": a,
                    click: o
                },
                setup: function() {
                    this.$el.toggleClass("touch", n(97).touch)
                },
                onFieldChange: function() {
                    this.rerender()
                },
                getTemplateData: function(e) {
                    var t = this.getFieldValue();
                    return e.territories = t && n(944).partition(t), e.isWorldwide = t && i(e.territories), e.FormClass = this.options.Form, e
                },
                renderDecorate: function() {
                    this.focusedField && this.subviews[this.focusedField] && this.subviews[this.focusedField].focus()
                }
            })
        }).call(t, n(1))
    },
    980: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                i = 1 === u.get(c),
                r = t.getFieldMetadata("publisherIsrcGenerated").disabled;
            if (i || r) return !0;
            if (e.preventDefault(), !this.generateDialog) {
                var o = this.getElement("generateWrapper");
                this.generateDialog = new(n(360))({
                    togglerEl: o,
                    relativeElement: o,
                    Subview: n(1453),
                    relativeElementAnchor: "left bottom",
                    anchor: "left top",
                    offset: "-12 8",
                    width: "250px",
                    subviewArgs: {
                        onSubmit: function() {
                            u.set(c, 1), t.set("publisherIsrcGenerated", !0), t.markFieldsDirty("publisherIsrcGenerated")
                        }
                    }
                })
            }
            this.generateDialog.open()
        }

        function r() {
            var e = this.subviews.publisherIsrc;
            e && this.model.isRequestingIsrcGeneration() && e.setValue("")
        }

        function o(e) {
            s.call(this, e)
        }

        function s(e) {
            var t = this.subviews.publisherIsrcGenerated;
            t && t.$el.toggleClass("sc-hidden", e)
        }

        function a() {
            var e = this.subviews.publisherIsrc;
            e && e.syncRequired()
        }

        function l() {
            return this.model.isRequestingIsrcGeneration() ? n(52).t("An ISRC will be created") : this.model.isPendingIsrcGeneration() ? n(52).t("An ISRC will be created") : this.options.compact ? n(52).t("ISRC") : n(52).t("e.g. USS1Z1001234")
        }
        var u = new(n(105))("already-seen"),
            c = "isrc-generation-warning";
        e.exports = n(54).extend({
            className: "isrcField",
            css: n(2778),
            template: n(2392),
            states: {
                compact: "m-compact"
            },
            events: {
                "click .isrcField__createIsrc": i
            },
            element2selector: {
                generateWrapper: ".isrcField__createIsrc"
            },
            defaults: {
                Form: null,
                compact: !1
            },
            generateDialog: null,
            setup: function(e) {
                var t = e.Form,
                    n = e.resource_id,
                    i = e.resource_type,
                    s = e.compact;
                this.model = new t({}, {
                    resource_id: n,
                    resource_type: i
                }), this.toggleState("compact", s), this.listenTo(this.model, "change:publisherIsrcGenerated", r).listenTo(this.model, "disabledChange:publisherIsrcGenerated", o).listenTo(this.model, "change:monetizationEnabled change:publisherContainsMusic", a)
            },
            getTemplateData: function(e) {
                var t = this.options.compact;
                return e.allowIsrcGeneration = n(55).get("me").canRequestISRCGeneration(), e.isrcFieldPlaceholder = l.bind(this), e.isrcFieldLabel = t ? null : n(52).t("ISRC"), e.isrcFieldHint = t ? null : n(52).t("An ISRC (International Standard Recording Code) is a unique identifier that is assigned to a track. Use the same ISRC for a given track wherever you distribute it.<br><br>If you work with a record label or distributor, ask them if they already have ISRCs for your tracks."), e.showCreateISRCLabel = !t, e
            },
            renderDecorate: function() {
                s.call(this, this.model.getFieldMetadata("publisherIsrcGenerated").disabled), a.call(this)
            }
        })
    },
    982: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e && !n(112).msie && !n(112).msedge;
            this.toggleState("imageOverlay", !!t)
        }

        function r(e) {
            this.disposed || (o(s.call(this), e), a.call(this))
        }

        function o(e, t) {
            var n = t.colors,
                i = n[0],
                r = n[1],
                o = t.angle,
                s = o - 180;
            return e.style.background = r, i === r ? void(e.style.filter = "") : (e.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + i + "', endColorstr='" + r + "',GradientType=1 );",
                e.style.background = "-webkit-linear-gradient(" + s + "deg, " + i + " 0%," + r + " 100%)", e.style.background = "-ms-linear-gradient(" + s + "deg, " + i + " 0%," + r + " 100%)", void(e.style.background = "linear-gradient(" + o + "deg, " + i + " 0%," + r + " 100%)"))
        }

        function s() {
            return this.$(".backgroundGradient__hidden")[0]
        }

        function a() {
            this.$(".backgroundGradient__buffer").toggleClass("backgroundGradient__hidden")
        }

        function l(e, t, i, r) {
            return u(e).then(function(e) {
                return {
                    colors: p(e, r).map(function(e) {
                        return n(28)(e).hex()
                    }),
                    angle: i
                }
            }, function() {
                return n(56).resolve({
                    colors: n(87).getPlaceholderGradient(t),
                    angle: i
                })
            })
        }

        function u(e) {
            if (!/^data\:/.test(e)) return d(e).then(c);
            var t = function() {
                var t = n(56).defer(),
                    i = new window.Image;
                return i.onload = function() {
                    t.resolve(h(i))
                }, i.src = e, {
                    v: t.promise()
                }
            }();
            return "object" == typeof t ? t.v : void 0
        }

        function c(e) {
            var t = window.URL.createObjectURL(e),
                i = n(56).defer(),
                r = new window.Image;
            return r.onload = function() {
                i.resolve(h(r)), window.URL.revokeObjectURL(t)
            }, r.src = t, i.promise()
        }

        function d(e) {
            var t = n(56).defer();
            if (e && n(97).blob) {
                var i = new window.XMLHttpRequest;
                i.onload = function() {
                    200 !== this.status ? t.reject() : t.resolve(this.response)
                }, i.onerror = t.reject, i.open("GET", e, !0), i.responseType = "blob", i.send()
            } else t.reject();
            return t.promise()
        }

        function h(e) {
            var t = (new(n(30))).getPalette(e, 4);
            return t.map(function(e) {
                var t = e[0],
                    i = e[1],
                    r = e[2];
                return n(28)({
                    r: t,
                    g: i,
                    b: r
                }).toHsl()
            })
        }

        function p(e, t) {
            var n = f(e, "user" === t),
                i = n[0],
                r = n[1],
                o = i.l < r.l ? i : r,
                s = (r.l + i.l) / 2;
            switch (t) {
                case "muted":
                    o.l = .75 * s, i.s *= .6, r.s *= .6;
                    break;
                case "solid":
                    return i.s *= Math.min(1, (100 - i.l) / 20), i.l = Math.min(42, 3 * i.l), [i, i];
                case "normal":
                default:
                    r.l = s, i.s *= .5, r.s *= .5
            }
            return i.l >= r.l ? [i, r] : [r, i]
        }

        function f(e, t) {
            var i = t ? e : e.filter(function(e) {
                var t = e.s,
                    n = e.l;
                return 0 !== t && (10 > n || n > 90)
            });
            return i.length >= 2 ? n(3).first(i, 2) : n(3).first(e, 2)
        }
        var m = {
            colors: ["#000", "#000"],
            angle: 0
        };
        e.exports = n(54).extend({
            template: n(2398),
            css: n(2781),
            className: "backgroundGradient",
            defaults: {
                angle: 135,
                colorAdjustment: "normal"
            },
            _current: null,
            _fallback: null,
            states: {
                imageOverlay: "m-imageOverlay"
            },
            element2selector: {
                imageOverlay: ".backgroundGradient__imageOverlay"
            },
            setImageUrl: function(e) {
                var t = this,
                    n = arguments.length <= 1 || void 0 === arguments[1] ? this._fallback : arguments[1],
                    o = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
                if (!(e && e === this._current || !e && n === this._fallback)) {
                    var s = this.options,
                        a = s.angle,
                        u = s.colorAdjustment;
                    this._current = e, this._fallback = n, i.call(this, o);
                    var c = this.getState("imageOverlay");
                    c ? (this.getElement("imageOverlay").css("backgroundImage", o ? "url(" + e + ")" : ""), r.call(this, m)) : l(e, n || 0, a, u).then(function(e) {
                        return r.call(t, e)
                    })
                }
            }
        })

    },
    983: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                t(e.target).closest(this.getElement("fileInput")).length || this.chooseFile()
            }

            function r(e) {
                var t = e.target.files[0],
                    n = this.options.standAlone;
                t && (o.call(this), n ? this.openModalWithFile(t) : this.bubble("image-chooser:file-selected", {
                    file: t
                }))
            }

            function o() {
                var e = this.getElement("fileInput");
                e.replaceWith(e.val("").clone()), this.resetElementCache()
            }
            var s = n(71).Events,
                a = n(59).trackV0Click;
            e.exports = n(54).extend({
                css: n(2782),
                template: n(2399),
                className: "imageChooser",
                events: {
                    click: i,
                    "change .imageChooser__fileInput": r
                },
                element2selector: {
                    fileInput: ".imageChooser__fileInput",
                    chooseButton: ".imageChooser__chooseButton"
                },
                defaults: {
                    size: "medium",
                    text: n(52).t("Update image"),
                    buttonClass: "sc-button-camera",
                    standAlone: !0
                },
                renderDecorate: function() {
                    this.getElement("chooseButton").prop("disabled", !n(55).get("me").isConfirmed()).addClass("sc-button-" + this.options.size)
                },
                openModalWithFile: function(e) {
                    var t = this.options,
                        i = t.resource_id,
                        r = t.resource_type,
                        o = new(n(1030))({
                            resource_id: i,
                            resource_type: r,
                            togglerEl: this.el,
                            Subview: n(1534),
                            subviewArgs: {
                                file: e
                            }
                        });
                    o.on(s.CLOSED, o._dispose, o), o.open()
                },
                chooseFile: function() {
                    n(55).get("me").isConfirmed() && (this.getElement("fileInput").click(), a(["upload", "image", "click"]))
                }
            })
        }).call(t, n(1))
    },
    1001: function(e, t, n) {
        "use strict";

        function i() {
            return "playlist" === this.model.resource_type
        }
        var r = n(71).Events;
        e.exports = n(54).extend(n(88), n(140), {
            className: "sc-button-edit",
            ModelClass: n(75),
            defaults: {
                icon_only: !0,
                text: n(52).t("Edit"),
                showRestrictedTooltip: !1,
                dialogType: "genericDialog",
                dialogEnabled: !1
            },
            requiredAttributes: ["managed_by_feeds"],
            dialogArgs: function() {
                var e = i.call(this) ? n(52).t("This playlist is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.") : n(52).t("This track is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.");
                return {
                    text: e,
                    smallText: !0,
                    width: 215
                }
            },
            setup: function(e) {
                e.dialogEnabled = e.showRestrictedTooltip
            },
            onClick: function() {
                var e = this.model,
                    t = new(n(1523))({
                        togglerEl: this.el,
                        resource_id: e.id,
                        resource_type: e.resource_type,
                        isRestricted: this.model.isManagedByFeeds()
                    });
                t.on(r.CLOSED, t._dispose, t), t.open()
            }
        })
    },
    1002: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(88), {
            className: "sc-button-delete",
            ModelClass: n(204),
            defaults: {
                closes_dropdown: !1
            },
            buttonLabels: {
                "default": n(52).tPending("Remove from Next up")
            },
            onClick: function(e) {
                e.preventDefault(), n(92).removeItem(this.model), this.options.closes_dropdown && this.bubble("overlay:close")
            }
        })
    },
    1004: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(351), {
            template: n(2423),
            getHref: function() {
                return n(61).getRoute("youNetwork", null, "following")
            }
        })
    },
    1005: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(351), {
            getHref: function() {
                return n(61).getRoute("youNetwork", null, "sets")
            }
        })
    },
    1010: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.subviews.customGenre;
            r.call(this), this.model.isCustomGenre() && e && e.focus()
        }

        function r() {
            this.toggleState("private", "private" === this.model.get("sharing")), this.toggleState("customGenre", this.model.isCustomGenre())
        }

        function o() {
            var e = this.subviews.releaseDate;
            e && e.syncRequired()
        }
        e.exports = n(54).extend({
            template: n(2448),
            css: n(2826),
            className: "baseFields sc-clearfix",
            states: {
                "private": "private",
                playlist: "playlist",
                customGenre: "m-customGenre"
            },
            defaults: {
                Form: null
            },
            setup: function(e) {
                var t = e.Form,
                    n = e.resource_id,
                    s = e.resource_type;
                this.model = new t({}, {
                    resource_id: n,
                    resource_type: s
                }), this.toggleState("playlist", "playlist-upload" === s), this.listenTo(this.model, "change:sharing", r).listenTo(this.model, "change:genre", i).listenTo(this.model, "change:playlistType", o)
            },
            renderDecorate: function() {
                r.call(this), o.call(this)
            },
            getTemplateData: function(e) {
                var t = n(55).get("me"),
                    i = e._resource_type.indexOf("sound") > -1;
                return e.FormClass = this.options.Form, e.username = t.get("username"), e.showPlaylistTypeSelect = !i, i ? (e.titlePlaceholder = n(52).t("Name your track"), e.descriptionPlaceholder = n(52).t("Describe your track"), e.tagPlaceholder = n(52).t("Add tags to describe the genre and mood of your track")) : (e.titlePlaceholder = n(52).t("Name your playlist"), e.descriptionPlaceholder = n(52).t("Describe your playlist"), e.tagPlaceholder = n(52).t("Add tags to describe the genre and mood of your playlist")), e.type = i ? "sound" : "playlist", e
            }
        })
    },
    1011: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.options,
                i = t.resource_type,
                r = t.size;
            s.call(this), this.cropperView = this.addSubview(new(n(575))({
                file: e,
                saveFile: a.bind(this),
                standAlone: !1,
                showRoundOverlay: n(87).isRounded(i),
                sizes: {
                    width: l,
                    height: l,
                    previewWidth: r
                }
            }).render()), this.cropperView.$el.appendTo(this.getElement("cropper")), this.toggleState("hasFile", !0)
        }

        function r() {
            this.toggleState("hasFile", !1)
        }

        function o(e) {
            var t = e.file;
            null === t && r.call(this)
        }

        function s() {
            this.cropperView && (this.cropperView._dispose(), this.removeSubview(this.cropperView))
        }

        function a(e) {
            return this.model.setImageFile(e, "file"), n(56).resolve()
        }
        var l = 500;
        e.exports = n(54).extend(n(165), {
            template: n(2453),
            css: n(2831),
            className: "editImage",
            defaults: {
                size: 260
            },
            bubbleEvents: {
                "image-chooser:file-selected": "onFileSelected"
            },
            element2selector: {
                cropper: ".editImage__cropper",
                select: ".editImage__select"
            },
            states: {
                hasFile: "m-hasFile"
            },
            cropperView: null,
            setup: function(e) {
                var t = e.size;
                this.$el.width(t), this.listenTo(this.model, "imageDataChanged", o)
            },
            onFileSelected: function(e) {
                var t = e.data.file;
                i.call(this, t)
            }
        })
    },
    1012: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2454),
            css: n(2832),
            className: "licenseEdit",
            defaults: {
                FormClass: null
            },
            getTemplateData: function(e) {
                return e.FormClass = this.options.FormClass, e.showCommonsDetailsFn = function(e) {
                    return e === n(130).COMMONS
                }, e
            }
        })
    },
    1013: function(e, t, n) {
        "use strict";

        function i(e) {
            this.bubble("territoryDelete", {
                territoryId: this.options.territoryId
            })
        }

        function r(e) {
            e.target.value && this.bubble("territoryChange", {
                territoryId: e.target.value
            })
        }

        function o(e) {
            var t = n(3).findWhere(this.rightsholderOptions(), {
                value: e.target.value
            });
            t && this.bubble("territoryChange", {
                territoryId: this.options.territoryId,
                rightsholder: t
            })
        }

        function s(e) {
            return n(83).codeToCountry(e) || e
        }
        e.exports = n(54).extend({
            className: "monetizationTerritory",
            template: n(2459),
            css: n(2836),
            events: {
                "click .monetizationTerritory__removeButton": i,
                "change .monetizationTerritory__territorySelect": r,
                "change .monetizationTerritory__rightsholderSelect": o
            },
            defaults: {
                emptyMessage: n(52).t("Select territory"),
                territoryId: null,
                rightsholder: null,
                remainingTerritories: null,
                explicitRequiredTerritories: null,
                userRightsholders: null
            },
            getTemplateData: function() {
                var e = this.options,
                    t = e.territoryId,
                    i = e.rightsholder,
                    r = e.explicitRequiredTerritories,
                    o = this.rightsholderOptions(),
                    a = t && (i || !n(3).contains(r, t) || 0 === o.length);
                return {
                    emptyMessage: this.options.emptyMessage,
                    needsTerritory: !t,
                    needsRightsholder: !a && t && !i,
                    isComplete: a,
                    territoryOptions: this.territoryOptions(),
                    rightsholderOptions: o,
                    selectedTerritory: t ? s(t) : null,
                    selectedRightsholder: i ? i.label : ""
                }
            },
            territoryOptions: function() {
                return n(3).map(n(3).keys(this.options.remainingTerritories), function(e) {
                    return {
                        value: e,
                        label: s(e)
                    }
                })
            },
            rightsholderOptions: function() {
                var e = this.options,
                    t = e.userRightsholders,
                    i = e.territoryId;
                return i ? n(3).map(t[i] || [], function(e, t) {
                    return {
                        value: t,
                        label: e
                    }
                }) : []
            }
        })
    },
    1014: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("errorMessage");
            this.getElement("statusMessage").text(e), this.toggleState("failed", !!e)
        }
        e.exports = n(54).extend(n(68).withOptions("trackEdit"), {
            template: n(2473),
            loadingTemplate: n(791),
            css: [n(854), n(2846), n(855)],
            className: "audibleEditForm restrictedEditForm",
            element2selector: {
                statusMessage: ".restrictedEditForm__status"
            },
            states: {
                failed: "m-failed"
            },
            setup: function(e) {
                var t = e.resource_id;
                this.model = new(n(454))({
                    resource_id: t
                }), this.listenTo(this.model, "change:errorMessage", i)
            },
            getTemplateData: function(e) {
                return e.RestrictedAudibleEdit = n(454), e.hasCustomBuyTitle = n(55).get("me").getPerk("customBuyTitle"), e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e.isPlaylist = "restricted-playlist-edit" === this.options.resource_type, e
            }
        })
    },
    1016: function(e, t, n) {
        "use strict";

        function i() {
            return !0
        }

        function r() {
            var e = n(55).get("me");
            return e.hasMonetization() || e.hasAnyScheduling() || e.hasGeoblocking()
        }
        var o = n(52).t("Basic info"),
            s = n(52).t("Metadata"),
            a = n(52).t("Availability"),
            l = n(52).t("Permissions"),
            u = [{
                name: o,
                subview: n(1448),
                isTabEnabled: i
            }, {
                name: s,
                subview: n(1455),
                isTabEnabled: i
            }, {
                name: a,
                subview: n(1454),
                isTabEnabled: r
            }, {
                name: l,
                subview: n(1447),
                isTabEnabled: i
            }];
        e.exports = n(314).extend(n(968), {
            ModelClass: n(166),
            className: "soundEditTabs",
            css: [n(848), n(2848)],
            defaults: {
                large: !0
            },
            setup: function(e) {
                e.tabs = u.filter(function(e) {
                    return e.name === a && n(55).get("me").hasMonetization() && (e.name = n(52).t("Monetization")), e.isTabEnabled.call(this)
                }, this).map(n(3).clone), n(314).prototype.setup.apply(this, arguments)
            }
        })
    },
    1017: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "l-footer sc-text-verylight",
            template: n(1142),
            css: n(2851)
        })
    },
    1018: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(126).withOptions({
            type: "go"
        }), {
            tagName: "a",
            defaults: {
                referral: null,
                text: null,
                trackImpressions: !0
            },
            setup: function() {
                this.$el.attr("href", n(61).getRoute("consumerPremium"))
            },
            shouldTrackImpression: function() {
                return this.options.trackImpressions
            },
            getUpsellRef: function() {
                return this.options.referral
            },
            template: function() {
                return this.options.text
            }
        })
    },
    1019: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                more: ["header", "more"],
                profile: ["header", "you_main"],
                activities: ["header", "activity", "main"],
                messages: ["header", "messages", "main"]
            }[e];
            t && r(t)
        }
        var r = n(59).trackV0Click;
        e.exports = n(107).extend({
            defaults: {
                overlayType: "dropdown",
                dropdownKey: null,
                isScButton: !1
            },
            onOverlayToggle: function(e) {
                var t = this.getOverlay().getContentView();
                e && i(this.options.dropdownKey), this.$el.toggleClass("selected", e), t && t.collection && t.collection instanceof n(353) && (t.options.markNotificationsRead = e, e && t.collection.markAsRead())
            }
        })
    },
    1020: function(e, t, n) {
        "use strict";
        var i = {
            messages: n(52).t("Messages"),
            activities: n(52).t("Notifications")
        };
        e.exports = n(54).extend(n(470), {
            template: n(2487),
            css: n(2860),
            className: "notificationIcon",
            setup: function(e) {
                this.$el.addClass(e.type)
            },
            getTemplateData: function(e) {
                return e.name = i[this.options.type], e
            }
        })
    },
    1021: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("selected", e.layoutName === l)
        }

        function r() {
            var e = this.isUploading = !!u.numToUpload(),
                t = this.isTranscoding = !!u.numTransoding(),
                i = e || t,
                r = e ? n(52).t("Uploadingâ€¦") : t ? n(52).t("Processingâ€¦") : n(52).t("Upload");
            this.toggleState("active", i), this.getElement("title").text(r), i && o.call(this)
        }

        function o() {
            var e = this.isUploading ? u.transferStatus.getProgress() : u.transcodingStatus.getProgress();
            this.getElement("status").text(e ? Math.min(Math.round(100 * e), 99) + "%" : "")
        }

        function s() {
            r.call(this)
        }
        var a = n(59).trackUploadFunnel,
            l = "upload",
            u = void 0;
        e.exports = n(54).extend(n(88), {
            css: n(2862),
            className: "uploadButton",
            tagName: "a",
            isUploading: !1,
            isTranscoding: !1,
            element2selector: {
                status: ".uploadButton__status",
                title: ".uploadButton__title"
            },
            states: {
                active: "active"
            },
            setup: function() {
                u || (u = new(n(220))), this.$el.attr("href", n(61).getRoute("upload")), this.listenTo(u, "add remove", r).listenTo(u, "change:status", s).listenTo(u.transferStatus, "data", o).listenTo(u.transcodingStatus, "data", o).listenTo(n(57), "layout:change", i)
            },
            template: function() {
                return '<span class="uploadButton__title"></span><span class="uploadButton__status"></span>'
            },
            renderDecorate: function() {
                r.call(this)
            },
            onClick: function() {
                a("upload_button_header")
            }
        })
    },
    1029: function(e, t, n) {
        "use strict";
        e.exports = n(107).extend({
            tagName: "a",
            className: "localeSelector sc-pointer",
            defaults: {
                overlayType: "modal",
                ContentViewClass: n(1503),
                fixOverflow: !1,
                isScButton: !1,
                hasActiveState: !1,
                overlayOptions: {
                    width: 550,
                    transparentBackground: !0
                }
            },
            template: function() {
                return n(52).t('Language: <span class="sc-text">[[locale]]</span>', {
                    locale: n(52).getCurrentLanguage()
                })
            }
        })
    },
    1142: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '<a class="sc-link-verylight" href="' + l((n(58) || t && t.$route || a).call(s, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || a).call(s, "Terms of use", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;âƒ\n<a class="sc-link-verylight" href="' + l((n(58) || t && t.$route || a).call(s, "pagesPages", "privacy", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || a).call(s, "Privacy policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Privacy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;âƒ\n<a class="sc-link-verylight" href="' + l((n(58) || t && t.$route || a).call(s, "pagesPages", "cookies", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || a).call(s, "Cookies policy", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Cookies", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;âƒ\n<a class="sc-link-verylight" href="' + l((n(58) || t && t.$route || a).call(s, "pages", "imprint", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || a).call(s, "Company information", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Imprint", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>&nbsp;âƒ\n<a class="sc-link-verylight" href="' + l((n(58) || t && t.$route || a).call(s, "popularSearches", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" title="' + l((n(51) || t && t.$t || a).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Popular searches", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n<br>" + l((n(53) || t && t.$view || a).call(s, n(1029), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    1161: function(e, t, n) {
        var i = n(1859);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1164: function(e, t, n) {
        var i = n(1882);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1167: function(e, t, n) {
        var i = n(1923);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1331: function(e, t, n) {
        "use strict";
        n(3).unique, n(3).without, e.exports = new(n(21))({})
    },
    1333: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                if (e.call(this)) {
                    var n = this.el.getAttribute("aria-haspopup"),
                        i = this.el.getAttribute("aria-owns");
                    "mouseenter" !== t.type || n && (!i || window.document.getElementById(i)) ? "mouseleave" === t.type && this.toggleState("tooltip-visible", !1) : this.toggleState("tooltip-visible", !0)
                }
            }
        }

        function r(e) {
            var t = o.call(this);
            e ? t.open() : t.close()
        }

        function o() {
            var e = this.subviews.tooltip;
            return e && e.disposed && this.removeSubview(e), this.subviews.tooltip || this.addSubview(s.call(this), "tooltip"), this.subviews.tooltip
        }

        function s() {
            return new(n(1373))({
                togglerEl: this.el,
                relativeElement: this.el,
                domId: this.tooltipId
            })
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    o = t.shouldShowTooltip,
                    s = void 0 === o ? n(3).constant(!0) : o,
                    a = i(s);
                this.merge(e, {
                    events: {
                        "mouseenter.tooltip": a,
                        "mouseleave.tooltip": a
                    },
                    states: {
                        "tooltip-visible": r
                    }
                })
            },
            before: {
                setup: function() {
                    this.tooltipId = n(3).uniqueId("tooltip-"), this.$el.attr({
                        "aria-describedby": this.tooltipId
                    })
                }
            },
            after: {
                renderDecorate: function() {
                    this.getState("tooltip-visible") && o.call(this).open()
                }
            }
        })
    },
    1358: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "audibleTilePlaceholder",
            css: n(2762),
            template: function() {
                return ""
            }
        })
    },
    1363: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(543), {
            className: "selectIdCheckbox",
            template: n(504),
            defaults: {
                modelId: null,
                modelEditable: !0,
                disabled: !1
            },
            states: {
                checked: function(e) {
                    this.$el.toggleClass("checked", e), this.bubble("checkbox:checked", {
                        checked: e
                    })
                }
            },
            setup: function(e) {
                var t = e.field,
                    n = "trackIds" === t ? "uneditableTrackIds" : "trackIds";
                this.listenTo(this.form, "change:" + n, this.onFieldChange)
            },
            getFieldValue: function() {
                var e = this.form,
                    t = this.options.modelId;
                return e.hasId(t) || e.hasUneditableId(t)
            },
            setFieldValue: function(e) {
                var t = this.field,
                    n = this.options,
                    i = n.modelId,
                    r = n.modelEditable;
                t && !this.getMetaData().readOnly && (this.form[e ? "addId" : "removeId"](i), r || this.form[e ? "addUneditableId" : "removeUneditableId"](i), this.markDirty())
            }
        })
    },
    1364: function(e, t, n) {
        "use strict";
        var i;
        i = n(83).countries().concat(n(83).regions()).concat(n(944).worldwide());
        e.exports = n(236).extend(n(352), {
            setup: function(e) {
                e.ComboCollection = i, n(236).prototype.setup.apply(this, arguments)
            },
            getValue: function() {
                var e = this.getControlValue(),
                    t = this.getValueByTitle(e);
                return e.length ? this.setValid(!!t, n(52).t("Enter a country or region.")) : this.setValid(!0), t
            }
        })
    },
    1365: function(e, t, n) {
        "use strict";
        e.exports = n(60).extend(n(352), {
            className: "textfield time",
            defaults: {
                placeholder: n(52).t("HH:MM")
            },
            getValue: function() {
                var e = this.getFieldValue(),
                    t = e ? new Date(e) : new Date,
                    i = this.getElement("control").val().trim(),
                    r = n(52).dateTimeHelper.parseTime(i);
                return i.length ? r ? (t.setHours(r[0]), t.setMinutes(r[1]), t.setSeconds(0), t.setMilliseconds(0), this.setValid(!0)) : this.setValid(!1, n(52).t("Enter a valid time.")) : this.setValid(!0), t
            },
            getFormattedFieldValue: function() {
                var e = this.getFieldValue();
                return e && !isNaN(e) ? n(52).dateTimeHelper.formatTime(e) : ""
            },
            onFieldChange: function() {
                this.getElement("control").val(this.getFormattedFieldValue())
            },
            getTemplateData: function(e) {
                return e = n(60).prototype.getTemplateData.call(this, e) || e, e._value = this.getFormattedFieldValue(), e
            }
        })
    },
    1366: function(e, t, n) {
        "use strict";

        function i(e) {
            return "GMT" + (0 > e ? "-" : "+") + n(52).numberHelper.zeroPad(Math.floor(Math.abs(e) / 3600), 2) + ":" + n(52).numberHelper.zeroPad(Math.abs(e % 3600) / 60, 2)
        }

        function r() {
            var e, t = -60 * n(52).dateTimeHelper.getTimezoneOffset();
            e = n(3).find(n(833), function(e) {
                return e.utc_offset === t
            }), this.form.set(this.field, e.name, {
                silent: !0
            })
        }
        var o, s = {
            America: 1,
            Europe: 2,
            Asia: 3,
            Africa: 4,
            Australia: 5
        };
        o = n(833).slice().sort(function(e, t) {
            if (e.utc_offset < t.utc_offset) return -1;
            if (e.utc_offset > t.utc_offset) return 1;
            var n = s[e.id.split("/")[0]],
                i = s[t.id.split("/")[0]];
            return i > n ? -1 : n > i ? 1 : e.name < t.name ? -1 : e.name > t.name ? 1 : 0
        }).map(function(e) {
            return {
                value: e.name,
                title: e.name + " (" + i(e.utc_offset) + ")"
            }
        });
        e.exports = n(236).extend(n(352), {
            defaults: {
                ComboCollection: o
            },
            setup: function() {
                n(236).prototype.setup.apply(this, arguments), this.getFieldValue() || r.call(this)
            },
            getValue: function() {
                var e = this.getControlValue(),
                    t = this.getValueByTitle(e);
                return e.length ? this.setValid(!!t, n(52).t("Enter a time zone.")) : this.setValid(!0), t
            }
        })
    },
    1371: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.setupScrollable(this.getElement("scrollable"), this.getElement("scrollableInner"), {
                    hScroll: !1
                })
            }

            function r(e) {
                e.preventDefault();
                var n = e.target,
                    i = t(n).data("link-id"),
                    r = o(i, this.options.linkGroups);
                this.bubble("linkMenuItemSelected", {
                    link: r
                })
            }

            function o(e, t) {
                return n(3).reduce(t || [], function(t, i) {
                    var r = i.links;
                    return t || n(3).find(r, function(t) {
                        var n = t.id;
                        return e === n
                    })
                }, null)
            }
            e.exports = n(54).extend(n(263), {
                template: n(2403),
                css: n(2786),
                className: "linkMenu",
                defaults: {
                    linkGroups: null,
                    activeLinkId: null
                },
                element2selector: {
                    scrollable: ".g-scrollable",
                    scrollableInner: ".g-scrollable-inner"
                },
                events: {
                    "click .linkMenu__item a": r
                },
                renderDecorate: function() {
                    this.whenInserted().done(i.bind(this))
                },
                getTemplateData: function() {
                    var e = this;
                    return {
                        groups: (this.options.linkGroups || []).map(function(t) {
                            return n(3).assign({}, t, {
                                links: t.links.map(function(t) {
                                    return t.id === e.options.activeLinkId ? n(3).assign({
                                        active: !0
                                    }, t) : t
                                })
                            })
                        })
                    }
                }
            })
        }).call(t, n(1))
    },
    1389: function(e, t, n) {
        "use strict";
        e.exports = n(366).extend(n(311), {
            NotifyingCollection: n(512),
            Subview: n(589),
            defaults: {
                dark: !0
            },
            setup: function(e) {
                var t = e.dark;
                n(366).prototype.setup.apply(this, arguments), this.loadingViewArgs = {
                    dark: t
                }
            },
            getSubviewArgs: function(e) {
                return e instanceof n(476) || (e = this.collection.findWhere({
                    uuid: e.uuid
                })), {
                    activity: e,
                    dialogEnabled: !1,
                    dark: this.options.dark,
                    comment_body_is_link: !0
                }
            },
            getEmptyListMessage: function() {
                return n(52).t("No activities")
            },
            getViewAllLinkData: function() {
                return {
                    link: n(61).getRoute("activity"),
                    text: n(52).t("View all notifications"),
                    className: "latestActivities__viewAll"
                }
            }
        })
    },
    1393: function(e, t, n) {
        "use strict";

        function i(e) {
            if (this.options.ackOnDocClick) {
                var t = e ? "addEventListener" : "removeEventListener";
                window.document[t]("click", this.onDocumentClick)
            }
        }

        function r() {
            a.call(this, !0)
        }

        function o(e) {
            e.preventDefault(), this.model.dismiss()
        }

        function s(e) {
            var t = e.target;
            this.el.contains(t) || (a.call(this), i.call(this, !1))
        }

        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                t = this.options.onAck,
                n = this.model;
            n.markAsSeen(), e && n.dismiss(), l(t) && t()
        }
        var l = n(3).isFunction;
        e.exports = n(54).extend({
            template: n(2412),
            css: n(2792),
            ModelClass: n(984),
            className: "announcement g-dark",
            requiredAttributes: ["message"],
            events: {
                "click .announcement__ack": r,
                "click .announcement__dismiss": o
            },
            defaults: {
                ackText: "",
                onAck: null,
                ackOnDocClick: !1
            },
            states: {
                "dismiss-visible": "m-dismiss-visible"
            },
            setup: function(e) {
                var t = e.ackText,
                    n = (e.ackOnDocClick, this.model),
                    r = !!t;
                r || this.whenVisible().then(function() {
                    return n.markAsSeen()
                }), this.onDocumentClick = s.bind(this), i.call(this, !0), this.toggleState("dismiss-visible", r)
            },
            dispose: function() {
                i.call(this, !1)
            }
        })
    },
    1394: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("offset", !0)
        }
        var r = n(3).assign,
            o = 5;
        e.exports = n(80).extend({
            listTagName: "div",
            itemTagName: "div",
            itemClassName: "announcements__item sc-clearfix",
            Subview: n(1393),
            className: "announcements g-z-index-fixed-top",
            css: n(2793),
            defaults: {
                maxDisplay: o
            },
            states: {
                offset: "m-offset"
            },
            setup: function() {
                this.collection = new(n(1206)), this.listenToOnce(n(57), "audio:play", i)
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.call(this), this.collection.startPolling()
            },
            getModelsToRender: function() {
                return this.collection.filter(function(e) {
                    return !e.isAlreadySeen()
                })
            },
            getSubviewArgs: function(e) {
                return r(n(80).prototype.getSubviewArgs.call(this, e), e.viewOptions)
            }
        })
    },
    1395: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = new(n(71))({
                    width: 500,
                    Subview: n(1778)
                });
                e.open()
            }

            function r(e) {
                var t = new(n(1547))({
                    Subview: n(1059),
                    subviewArgs: {
                        resource_id: e.id
                    }
                });
                t.open()
            }

            function o() {
                var e = this.keyboardModal = this.keyboardModal || new(n(71))({
                    width: 600,
                    Subview: n(1535)
                });
                e[e.isOpened ? "close" : "open"]()
            }

            function s(e) {
                var t;
                this.premiumModals = this.premiumModals || [], t = this.premiumModals[e] = this.premiumModals[e] || new(n(1542))({
                    productId: e
                }), t.open()
            }

            function a() {
                window.location = window.location.href
            }

            function l() {
                var e = n(56).defer(),
                    t = n(67).getCurrentSound(),
                    i = t && t.isPlaying(),
                    r = n(200).focused();
                return r || i ? r && !i ? this.listenTo(n(200), "change:visibility", e.resolve).listenTo(n(57), "audio:play", function(e) {
                    this.stopListening(n(200), "change:visibility").stopListening(e.sound, "pause")
                }) : i && this.listenTo(t, "pause", e.resolve) : e.resolve(), e
            }

            function u(e) {
                var i, r, o, s, u = 0;
                i = function(t) {
                    if (u = 0, t && t.trim() !== e) {
                        var n = t.indexOf("!") > -1;
                        n && l().done(a)
                    }
                }, r = function() {
                    ++u >= 3 && p.clearInterval(o)
                }, s = {
                    type: "GET",
                    dataType: "text",
                    url: "/version.txt",
                    beforeSend: n(3).noop
                }, o = p.setInterval(function() {
                    t.ajax(s).done(i).fail(r)
                }, n(55).get("versionUpdateInterval"))
            }

            function c() {
                var e = n(67).getCurrentSound();
                e && e.isPlaying() && e.pause(), n(156) && n(156).current.dispose()
            }

            function d() {
                var e = n(57).trigger.bind(n(57), "downloader");
                t(f.body).on("mousedown", 'a[href*="-media.soundcloud."]', function() {
                    var n = f.createElement("a");
                    n.className = this.className, t(this).replaceWith(n), e()
                }).on("mousedown", "button.scDownloaderButton", function() {
                    this.removeAttribute("data-href"), e()
                })
            }

            function h(e) {
                var t = new(n(1522))({
                    event: e
                });
                t.open()
            }
            var p = window,
                f = p.document;
            e.exports = n(54).extend({
                template: n(2413),
                defaults: {
                    appVersion: null
                },
                setup: function(e) {
                    var a;
                    n(97).dragDrop && (a = new(n(1728)), t(f.body).append(a.render().el)), n(3).bindAll(this, "onPlay", "onPause", "onLogin", "onLogout", "keyboardControlDown", "keyboardControlUp"), this.listenTo(n(57), "audio:play", this.onPlay).listenTo(n(57), "audio:pause", this.onPause).listenTo(n(57), "exception", this.onException).listenTo(n(57), "connect:hasUserData", this.onLogin).listenTo(n(57), "connect:logout", this.onLogout).listenTo(n(57), "broadcast:consumer-premium:subscriptionChange", this.onBroadcastSubChange).listenTo(n(57), "broadcast:volume:set", this.onBroadcastVolumeSet).listenTo(n(57), "broadcast:mute:toggle", this.onBroadcastMuteToggle).listenTo(n(57), "broadcast:audio:play", this.onBroadcastPlay).listenTo(n(57), "connect:signupDenied", i).listenTo(n(57), "error:followDeniedAge", h).listenTo(n(57), "keyboard-shortcuts:toggle", o).listenTo(n(57), "spam-warning", r).listenTo(n(84), "started", s), t(window).on("error", this.onError).on("unload", c), t(f).on("keydown", this.keyboardControlDown).on("keyup", this.keyboardControlUp).delegate('a[href^="/"]', "click", this.navigate), d(), n(360).setDialogTypes(n(1233)), null != n(62).getFragmentParam("play") && (n(61).removeFragmentParams("play"), n(67).enableAutoplay()), e && e.appVersion && u(e.appVersion)
                },
                getTemplateData: function(e) {
                    return e.showStagingMenu = !1, e
                },
                onPlay: function() {
                    n(57).broadcast({
                        excludeThis: !0
                    }, "audio:play"), n(156) && n(156).current.set("playing", !0)
                },
                onPause: function() {
                    var e = n(67).getCurrentSound();
                    n(156) && e && e.isPaused() && n(156).current.set("playing", !1)
                },
                onBroadcastVolumeSet: function(e) {
                    n(300).setVolume(e)
                },
                onBroadcastMuteToggle: function(e) {
                    n(3).isUndefined(e) ? n(300).toggleMute() : n(300).toggleMute(e)
                },
                onBroadcastPlay: function() {
                    n(67).pauseCurrent()
                },
                onLogin: function() {
                    var e = n(55).get("router"),
                        t = e.getLayoutInfo(),
                        i = t.layoutName;
                    "logout" === i ? e.navigate("/stream", {
                        trigger: !0,
                        replace: !0
                    }) : "signin" !== i && e.reload()
                },
                onLogout: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.isOriginator;
                    t ? n(55).get("router").navigateToRoute("logout", [], {
                        hard: !0
                    }) : window.location.reload()
                },
                onBroadcastSubChange: function() {
                    window.location.reload()
                },
                onException: function(e) {
                    e.fatal && n(55).get("router").apply("error", {
                        resource_id: e.id
                    }), window.console.error(e.get("message"))
                },
                onError: function(e) {
                    var t = e.originalEvent;
                    return n(123).raise({
                        message: t.message,
                        error: t,
                        fatal: !1
                    }), !0
                },
                navigate: function(e) {
                    e.isMetaKey() || e.isDefaultPrevented() || e.target.target || (e.preventDefault(), n(55).get("router").navigate(e.currentTarget.getAttribute("href"), !0))
                },
                keyboardControlDown: function(e) {
                    n(462).handleKeyDown(e)
                },
                keyboardControlUp: function(e) {
                    n(462).handleKeyUp(e)
                }
            })
        }).call(t, n(1))
    },
    1397: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e.containsSoundId(t.id)
        }

        function r(e, t, i) {
            n(74).notify("addToPlaylist", {
                object: i,
                target: e.id,
                targetType: "playlist",
                state: t
            })
        }

        function o() {
            return this.getState("disabled") ? u : ""
        }
        var s = n(52).t("Add to playlist", null, {
                context: "definite"
            }),
            a = n(52).t("Added"),
            l = n(52).t("Remove"),
            u = n(52).t("Playlists cannot have more than 500 tracks in them. Try adding this track to another playlist or create a new one.");
        e.exports = n(54).extend(n(88), {
            className: "addToPlaylistButton",
            css: n(2794),
            buttonLabels: {
                "default": {
                    text: s,
                    title: o
                },
                selected: {
                    text: a,
                    title: l
                }
            },
            defaults: {
                soundIds: null,
                size: "medium"
            },
            _pendingTimeout: null,
            sounds: null,
            requiredAttributes: ["tracks"],
            ModelClass: n(86),
            setup: function(e) {
                e.soundIds = e.soundIds || [], this.sounds = e.soundIds.map(function(e) {
                    return this.addDataSource(new(n(66))({
                        id: e
                    }))
                }, this)
            },
            isButtonSelected: function() {
                return this.allSoundsAreInPlaylist()
            },
            renderDecorate: function() {
                this.toggleState("disabled", !this.model.hasCapacity(this.options.soundIds))
            },
            onClick: function() {
                var e = this;
                if (!this.getState("disabled")) {
                    var t, i = !this.allSoundsAreInPlaylist(),
                        o = this.model;
                    t = this.sounds.filter(function(e) {
                        return o[i ? "addSound" : "removeSound"](e)
                    }), this.undelegateEvents(), window.clearTimeout(this._pendingTimeout), this._pendingTimeout = this.addDeferred(window.setTimeout(this.toggleState.bind(this, "pending", !0), 5e3)), this.model.saveOrder().always(function() {
                        e.disposed || (window.clearTimeout(e._pendingTimeout), e.toggleState("pending", !1), e.delegateEvents())
                    }).done(function() {
                        n(3).each(t, r.bind(null, o, i))
                    })
                }
            },
            allSoundsAreInPlaylist: function() {
                return n(3).all(this.sounds, i.bind(null, this.model))
            }
        })
    },
    1398: function(e, t, n) {
        "use strict";
        e.exports = n(107).extend(n(140), {
            className: "sc-button-delete",
            ModelClass: n(75),
            defaults: {
                icon_only: !0,
                showDisabled: !1,
                dialogType: "genericDialog",
                dialogEnabled: !1,
                ContentViewClass: n(1675),
                overlayType: "dialog",
                overlayOptions: {
                    relativeElementAnchor: "center bottom",
                    anchor: "right top",
                    offset: "18 7",
                    width: "220px"
                }
            },
            dialogArgs: {
                text: n(52).t("This track cannot be deleted, as it is managed directly by its rightsholder. To make changes, contact your label or distributor."),
                smallText: !0,
                width: 215
            },
            states: {
                showDisabled: "sc-button-disabled"
            },
            buttonLabels: {
                "default": function() {
                    return "sound" === this.model.resource_type ? n(52).t("Delete this track") : n(52).t("Delete this playlist")
                }
            },
            setup: function(e) {
                e.dialogEnabled = e.showDisabled, this.toggleState("showDisabled", e.showDisabled), n(107).prototype.setup.apply(this, arguments)
            },
            onClick: function() {
                this.getState("showDisabled") || n(107).prototype.onClick.apply(this, arguments)
            }
        })
    },
    1404: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: "",
            ModelClass: n(578),
            renderDecorate: function() {
                var e = new(n(158))({
                    resource_id: this.model.soundModel.resource_id,
                    resource_type: "sound"
                });
                this.addSubview(e), this.$el.append(e.render().el)
            }
        })
    },
    1416: function(e, t, n) {
        "use strict";
        var i = n(114).subview;
        e.exports = n(54).extend(n(68).withOptions("historicalPlayContextBadge"), {
            ModelClass: n(479),
            template: function() {
                var e = this.model.get("kind");
                switch (e) {
                    case "user":
                        return i(n(244), {
                            resource_id: this.model.getContextId()
                        });
                    case "station":
                        return i(n(492), {
                            resource_type: "station",
                            resource_id: this.model.getContextId(),
                            showPlayButton: "never"
                        });
                    case "playlist":
                        return i(n(158), {
                            resource_type: "playlist",
                            resource_id: this.model.getContextId(),
                            showPlayButton: "never"
                        })
                }
            },
            onContextRequest: function(e) {
                e.data.historicalPlayContext = this.model
            }
        })
    },
    1424: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(351), {
            getHref: function() {
                return n(61).getRoute("youNetwork", null, "albums")
            }
        })
    },
    1425: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(351), {
            getHref: function() {
                return n(61).getRoute("youNetwork", null, "likes")
            }
        })
    },
    1426: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(351), {
            template: n(2424),
            getHref: function() {
                return n(61).getRoute("youNetwork", null, "stations")
            }
        })
    },
    1428: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this;
                window.history.replaceState(null, null, n(62).removeFragmentParam("c")), e = n(52).dateTimeHelper.stringToTime(e), this.whenInserted().done(function() {
                    t.goToState(n(101).ACTIVE_TIMESTAMP, e)
                })
            }
            e.exports = n(54).extend(n(472), {
                template: n(2427),
                css: n(2807),
                className: "commentPlaceholder g-z-index-content",
                defaults: {
                    avatarSize: 20
                },
                states: {
                    visible: "visible"
                },
                element2selector: {
                    avatar: ".commentPlaceholder__avatar"
                },
                events: {
                    mousedown: "onMouseDown",
                    click: "onClick"
                },
                _isDraggable: !1,
                _cachedDimensions: null,
                setup: function() {
                    var e;
                    n(3).bindAll(this, "onMouseDown", "onMouseUp", "onMouseMove", "onClick"), this.listenTo(n(57), "connect:hasUserData", this.onUserData).listenTo(n(85), "resize:debounced", this.resetCachedDimensions), e = n(62).getFragmentParam("c"), void 0 !== e && i.call(this, e)
                },
                onClick: function(e) {
                    this.getCurrentState() === n(101).ACTIVE_TIMESTAMP && e.stopPropagation()
                },
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable = !0, t(window.document).on("mousemove", this.onMouseMove).on("mouseup", this.onMouseUp)
                },
                onMouseUp: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable = !1, t(window.document).off("mousemove", this.onMouseMove).off("mouseup", this.onMouseUp), this.goToState(n(101).ACTIVE_TIMESTAMP, this.getTimestampByMouseEvent(e))
                },
                onMouseMove: function(e) {
                    e.preventDefault(), e.stopPropagation(), this._isDraggable && this.setPosition(this.getPositionAtTimestamp(this.getTimestampByMouseEvent(e)))
                },
                getPositionAtTimestamp: function(e) {
                    return e / this.sound.duration() * this.cachedDimensions().width
                },
                setPosition: function(e) {
                    var t = this.options.avatarSize,
                        n = this.cachedDimensions(),
                        i = n.width,
                        r = this.sound.getMediaDuration() / this.sound.duration();
                    e = e > t ? Math.min(e, i - t, i * r) : Math.max(e, 0), this.getElement("avatar").css({
                        left: e
                    })
                },
                getTemplateData: function(e) {
                    e.me = n(55).get("me").attributes
                },
                onInitialState: function() {
                    this.toggleState("visible", !1)
                },
                onActiveTimestamp: function(e, t) {
                    this.toggleState("visible", !t), this.setPosition(this.getPositionAtTimestamp(e))
                },
                onUserData: function() {
                    this.rerender()
                }
            })
        }).call(t, n(1))
    },
    1429: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this.getState("visible");
                e = e || this.getCurrentComment(), e ? (r.call(this, e), this.setPosition(e.get("timestamp") / this.sound.duration(), e), this.toggleState("visible", !0)) : t && !e && this.toggleState("visible", !1)
            }

            function r(e) {
                var t = e.get("user"),
                    i = t.username,
                    r = n(174).usertext(e.get("body"), {
                        paragraphs: !1,
                        className: "sc-truncate",
                        links: !1
                    }),
                    o = n(87).urlFrom(e, this.options.avatarSize, !0);
                this.getElement("username").attr("href", n(61).getRoute("user", t)).attr("title", n(52).t("Go to [[username]]â€™s profile", {
                    username: i
                })).text(i), this.getElement("body").attr("title", n(52).t("Click to reply to [[username]]", {
                    username: i
                })).html(r), this.getElement("avatar").css({
                    "background-image": o ? "url(" + o + ")" : "",
                    pointer: s(e, this.sound) ? "pointer" : ""
                }).removeClass(Object.keys(n(1062)).join(" ")).addClass(o ? "" : n(87).getPlaceholderClass(t))
            }

            function o(e) {
                var t = this.getTimestampByMouseEvent(e),
                    n = Math.floor(this.options.avatarSize / this.cachedDimensions().width * this.sound.duration());
                return this.collection.getCommentAtTimestamp(t, n)
            }

            function s(e, t) {
                return e.get("timestamp") <= t.getMediaDuration()
            }
            var a = 50;
            e.exports = n(54).extend(n(472), n(966), {
                template: n(2428),
                css: n(2808),
                className: "commentPopover",
                defaults: {
                    avatarSize: 20,
                    darkText: !0,
                    flagSize: "small",
                    bulkFetch: n(55).get("maxComments")
                },
                states: {
                    commentLeft: "commentLeft",
                    darkText: "darkText",
                    smallAvatar: "smallAvatar",
                    visible: "visible"
                },
                events: {
                    mouseleave: "onMouseLeave",
                    mouseenter: "onMouseEnter",
                    "mousemove .commentPopover__scrub": "onScrubMouseMove",
                    "click .commentPopover__playableArea": "onScrubClick",
                    "click .commentPopover__avatar, .commentPopover__body": "onBodyOrAvatarClick"
                },
                element2selector: {
                    avatar: ".commentPopover__avatar",
                    body: ".commentPopover__body",
                    username: ".commentPopover__username",
                    wrapper: ".commentPopover__wrapper"
                },
                _hovered: !1,
                _hoverTimeout: null,
                setup: function(e) {
                    this.collection = new(n(513))(null, {
                        sound_id: e.sound_id,
                        secret_token: this.sound.get("secret_token")
                    }), n(3).bindAll(this, "onClickOutsideOfPointer"), this.listenTo(n(85), "resize:debounced", this.resetCachedDimensions).listenTo(this.sound, "finish", this.onPlaybackFinish), this.toggleState("darkText", e.darkText).toggleState("smallAvatar", 10 === e.avatarSize), this.$el.addClass(e.flagSize)
                },
                dispose: function() {
                    t("html").off("mousedown", this.onClickOutsideOfPointer)
                },
                getTemplateData: function(e) {
                    return e.playablePercentage = this.sound.getMediaDuration() / this.sound.duration() * 100, e
                },
                renderDecorate: function() {
                    var e = this.getCurrentComment();
                    this.toggleState("visible", !!e), this.toggleState("commentLeft", !1), e && this.setPosition(e.get("timestamp") / this.sound.duration())
                },
                setPosition: function(e, t) {
                    var n = this.cachedDimensions().width,
                        i = Math.floor(e * n),
                        r = 0,
                        o = n - i,
                        s = this.getElement("wrapper");
                    e > .5 ? (o = n - o, s.width(o), r = -1 * (this.getElement("username").outerWidth() + this.getElement("body").outerWidth()), this.toggleState("commentLeft", !0)) : (s.width(o), this.toggleState("commentLeft", !1)), s.css({
                        transform: "translateX(" + i + "px)",
                        marginLeft: r
                    }), this.getElement("avatar").css({
                        left: -r
                    })
                },
                onAdd: function(e) {
                    this.toggleState("visible", !0), i.call(this, e)
                },
                onRemove: function() {
                    this.goToState(n(101).INITIAL)
                },
                onInitialState: function() {
                    this.setInteracting(!1), i.call(this)
                },
                onCurrentCommentChange: function() {
                    i.call(this)
                },
                onCurrentTimestamp: function() {
                    i.call(this)
                },
                onActiveTimestamp: function(e, n) {
                    i.call(this, n), t("html").on("mousedown", this.onClickOutsideOfPointer)
                },
                onScrubClick: function(e) {
                    var t = o.call(this, e),
                        i = t ? t.get("timestamp") : this.getTimestampByMouseEvent(e);
                    e.stopPropagation(), this.goToState(n(101).ACTIVE_TIMESTAMP, i, t)
                },
                onClickOutsideOfPointer: function(e) {
                    var i = t(e.target);
                    this.disposed || this.getCurrentState() !== n(101).ACTIVE_TIMESTAMP || i.closest(".commentPopover__wrapper,.commentForm").length || (this.goToState(n(101).INITIAL), t("html").off("mousedown", this.onClickOutsideOfPointer))
                },
                onBodyOrAvatarClick: function(e) {
                    if (e.stopPropagation(), this.getCurrentState() !== n(101).ACTIVE_TIMESTAMP) {
                        var t = this.getCurrentComment();
                        s(t, this.sound) && this.goToState(n(101).ACTIVE_TIMESTAMP, t.get("timestamp"), t)
                    }
                },
                onScrubMouseMove: function(e) {
                    var t = this.getTimestampByMouseEvent(e),
                        i = o.call(this, e),
                        r = this.getCurrentState();
                    r !== n(101).ACTIVE_TIMESTAMP && (r !== n(101).CURRENT_COMMENT || this.getCurrentComment() !== i) && (i && this._hovered ? (this.setInteracting(!0), this.goToState(n(101).CURRENT_COMMENT, i.get("timestamp"), i)) : this.goToState(n(101).CURRENT_TIMESTAMP, t))
                },
                onMouseEnter: function() {
                    var e = this;
                    this._hovered || (this._hoverTimeout = window.setTimeout(function() {
                        e._hovered = !0, e._hoverTimeout = null
                    }, a))
                },
                onMouseLeave: function() {
                    this._hoverTimeout && (window.clearTimeout(this._hoverTimeout), this._hoverTimeout = null), this.getCurrentState() !== n(101).ACTIVE_TIMESTAMP && this.goToState(n(101).INITIAL)
                },
                onPlaybackFinish: function() {
                    this.isInteracting() || this.goToState(n(101).INITIAL)
                }
            })
        }).call(t, n(1))
    },
    1431: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(184), {
            template: n(2430),
            css: n(2811),
            className: "deleteCommentForm",
            ModelClass: n(108),
            requiredAttributes: ["user"],
            onSubmit: function(e) {
                var t = e.is_spam,
                    i = e.is_user_spam,
                    r = t && t.checked,
                    o = i && i.checked,
                    s = this.model.get("user");
                r ? this.model.reportAsSpam() : n(74).destroy(this.model), o && n(74).block(s.id, !0, !0, !0).then(function() {
                    return n(57).trigger("user:blocked", {
                        report: !0,
                        userData: s
                    })
                })
            },
            getTemplateData: function(e) {
                e.isMine = n(55).get("me").owns(this.model), e.isSpamLabel = n(52).t("Also report comment as spam.")
            }
        })
    },
    1446: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                i = this.options,
                r = i.resource_id,
                s = i.resource_type,
                a = t.isManagedByFeeds();
            switch (e) {
                case "repost":
                    return o.call(this, n(594), {
                        selectedClass: "sc-button-selected",
                        hasPopups: !1
                    });
                case "addToPlaylist":
                    return o.call(this, n(376), {
                        type: "addToPlaylist",
                        soundIds: [t.id]
                    });
                case "addToNextUp":
                    return o.call(this, n(590), {
                        resource_id: r,
                        closes_dropdown: !0
                    });
                case "startStation":
                    return o.call(this, n(483), {
                        stationType: "track",
                        stationId: t.id,
                        tagName: "button"
                    });
                case "download":
                    return o.call(this, n(482), {
                        className: "moreActions__link sc-button-medium sc-button-icon"
                    });
                case "delete":
                    return o.call(this, n(376), {
                        type: "deleteSound",
                        disabled: a
                    });
                case "share":
                    return o.call(this, n(378), {
                        resource_id: r
                    });
                case "edit":
                    return o.call(this, n(1001), {
                        resource_id: r,
                        resource_type: s,
                        showRestrictedTooltip: !1
                    });
                case "like":
                    return o.call(this, n(317), {
                        resource_id: t.id,
                        resource_type: s,
                        selectedClass: "sc-button-selected"
                    });
                default:
                    return null
            }
        }

        function r(e) {
            return "edit" === e || "delete" === e
        }

        function o(e, t) {
            var i = this.options,
                r = i.resource_type,
                o = i.icon_only,
                s = this.model.id;
            return {
                args: n(3).assign({
                    className: "moreActions__button sc-button-medium",
                    size: "medium",
                    resource_id: s,
                    resource_type: r,
                    isScButton: !1,
                    responsive: !1,
                    icon_only: e !== n(207) && o
                }, t),
                View: e
            }
        }
        e.exports = n(54).extend(n(549), n(68).withOptions("moreActions"), {
            ModelClass: n(75),
            defaults: {
                actions: null
            },
            requiredAttributes: ["managed_by_feeds"],
            hasData: function() {
                var e = this.options.actions;
                return this.model.attrExists("user_id") ? !n(55).get("me").owns(this.model) || -1 === e.indexOf("delete") && -1 === e.indexOf("edit") ? !0 : this.model.attrExists("managed_by_feeds") : !1
            },
            getModelData: function() {
                return {}
            },
            getTemplateData: function(e) {
                var t = this,
                    o = n(3).partition(this.options.actions || [], r),
                    s = o[0],
                    a = o[1];
                return {
                    items: [a, s].map(function(e) {
                        return n(3).compact(e.map(i, t))
                    }).filter(function(e) {
                        return e.length
                    })
                }
            }
        })
    },
    1447: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2447),
            css: n(2825),
            className: "editAccessTab",
            ModelClass: n(166),
            states: {
                showCopyrightWarning: "m-showCopyrightWarning",
                showFeedableConstraint: "m-showFeedableConstraint",
                showDownloadableConstraint: "m-showDownloadableConstraint"
            },
            renderDecorate: function() {
                var e = n(55).get("me");
                this.toggleState("showFeedableConstraint", !e.canEditRssEnabled(), !0), this.toggleState("showDownloadableConstraint", !e.canEditDownloadable(), !0), this.toggleState("showCopyrightWarning", e.canEditDownloadable(), !0)
            },
            getTemplateData: function(e) {
                var t = n(55).get("me"),
                    i = "sound-upload-edit" === this.model.resource_type;
                return e.FormClass = n(166), e.hasDomainLocking = !1, e.hasQuietmode = t.getPerk("quietMode"), e.isSound = i, e.hasDownloads = !t.get("downloads_disabled"), e.previousCopyrightIssues = "copyright" === t.get("downloads_disabled_reason"), e
            }
        })
    },
    1448: function(e, t, n) {
        "use strict";

        function i(e) {
            return "public" === e
        }
        e.exports = n(54).extend({
            template: n(2449),
            css: n(2827),
            className: "editBasicTab",
            ModelClass: n(166),
            getTemplateData: function(e) {
                var t = this.model,
                    r = "sound-upload-edit" === t.resource_type,
                    o = r ? "track" : "playlist";
                return e.FormClass = n(166), e.isEdit = t.isEdit, e.isSound = r, e.isSharingPublicFn = i, e.isTrack = "track" === o, e.isPlaylist = "playlist" === o, e.hasAnyScheduling = n(55).get("me").hasAnyScheduling(), e
            }
        })
    },
    1453: function(e, t, n) {
        "use strict";
        e.exports = n(359).extend({
            defaults: {
                confirmButton: n(52).t("Create an ISRC"),
                confirmText: n(52).t("Are your sure? If you work with a record label or distributor, ask them if they already have ISRCs for your tracks."),
                size: "small",
                onSubmit: function() {}
            },
            onSubmit: function() {
                this.options.onSubmit()
            }
        })
    },
    1454: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                n = t.get("geoblocking"),
                i = t.get("availableCountries");
            this.toggleState("hasAvailableCountries", n && i && i.length, e)
        }
        e.exports = n(54).extend({
            template: n(2455),
            css: n(2833),
            ModelClass: n(166),
            className: "editLimitsTab",
            element2selector: {
                showEmpty: ".geoblocking__showEmpty",
                showNonEmpty: ".geoblocking__showNonEmpty"
            },
            setup: function() {
                this.listenTo(this.model, "change:geoblocking change:availableCountries", i)
            },
            states: {
                hasAvailableCountries: function(e) {
                    this.getElement("showEmpty").toggle(!e), this.getElement("showNonEmpty").toggle(e)
                }
            },
            getTemplateData: function(e) {
                var t = n(55).get("me"),
                    i = "sound-upload-edit" === this.model.resource_type;
                return e.FormClass = n(166), e.isSound = i, e.hasScheduling = i && t.hasAnyScheduling(), e.hasFullScheduling = i && t.hasFullScheduling(), e.hasGeoblocking = t.hasGeoblocking(), e.hasMonetization = t.hasMonetization(), e
            },
            renderDecorate: function() {
                i.call(this, !0)
            }
        })
    },
    1455: function(e, t, n) {
        "use strict";

        function i() {
            n(3).chain(this.subviews).pick("publisherContainsMusic", "publisher", "publisherArtist", "composer").filter(Boolean).invoke("syncRequired")
        }
        e.exports = n(54).extend({
            template: n(2456),
            css: [n(2834), n(855)],
            className: "editMetadataTab metadataGrid",
            ModelClass: n(166),
            setup: function() {
                this.listenTo(this.model, "change:monetizationEnabled change:publisherContainsMusic change:publisherIsrcGenerated", i)
            },
            renderDecorate: function() {
                i.call(this)
            },
            getTemplateData: function(e) {
                var t = "sound-upload-edit" === this.model.resource_type,
                    i = n(55).get("me");
                return e.FormClass = n(166), e.hasCustomBuyTitle = i.getPerk("customBuyTitle"), e.hasPublisherMetadata = t, e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e.recordLabelClassName = e.hasPublisherMetadata ? "metadataGrid__field-narrow" : "metadataGrid__field-wide", e.showReleaseDate = t, e.iswcFieldHint = n(52).t("The ISWC (International Standard Musical Work Code) is a unique, permanent and internationally recognized reference number for the identification of musical works."), e.plineFieldHint = n(52).t("P-line notice identify the owner of the rights in the original sound recording (the masters) at the time that the CD/carrier/file is manufactured."), e
            }
        })
    },
    1456: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("monetizationEnabled", this.model.get("monetizationEnabled"), !0)
        }
        e.exports = n(54).extend({
            template: n(2457),
            className: "monetizationSection",
            defaults: {
                Form: null
            },
            element2selector: {
                showMonetizationEnabled: ".showMonetizationEnabled",
                showMonetizationDisabled: ".showMonetizationDisabled",
                showMonetizationConstraint: ".showMonetizationConstraint"
            },
            states: {
                monetizationEnabled: function(e) {
                    var t = this;
                    this.getElement("showMonetizationEnabled").toggle(e), this.getElement("showMonetizationDisabled").toggle(!e), e || (this.model.set("monetizationStart", !1), this.model.set("monetizationEnd", !1)), e && ! function() {
                        var e = t.explicitRequiredTerritories.get("territories"),
                            i = t.model.get("monetizationRightsholders");
                        if (i && 0 === i.length) {
                            var r = n(83).monetizableCountryCodes().map(function(t) {
                                return n(3).contains(e, t) ? {
                                    territory: t,
                                    rightsholder_urn: null
                                } : {
                                    territory: t
                                }
                            });
                            t.model.set("monetizationRightsholders", r)
                        }
                    }()
                },
                showMonetizationConstraint: function(e) {
                    this.getElement("showMonetizationConstraint").toggle(e)
                }
            },
            setup: function(e) {
                this.model = new e.Form({}, e), this.explicitRequiredTerritories = this.addDataSource(new(n(990))({
                    id: this.model.get("publisherIsrc")
                }), {
                    requiredAttributes: ["territories"]
                }), this.listenTo(this.model, "change:monetizationEnabled", i)
            },
            getTemplateData: function(e) {
                return e.hasRightsholderSelect = n(55).get("me").canEditMonetization(), e.isTrack = "sound-upload-edit" === e._resource_type, e.isPlaylist = !e.isTrack, e.FormClass = this.options.Form, e
            },
            renderDecorate: function() {
                i.call(this), this.toggleState("showMonetizationConstraint", !n(55).get("me").canEditMonetization(), !0)
            }
        })
    },
    1457: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var i = t.territoryId,
                    r = t.rightsholder;
                return n(3).contains(e, i) ? {
                    territory: i,
                    rightsholder_urn: r ? r.value : null
                } : {
                    territory: i
                }
            }
        }

        function r(e, t) {
            var n = t.availableTerritories();
            return e.forEach(function(e) {
                var t = e.territoryId;
                delete n[t]
            }), n
        }

        function o(e) {
            var t = n(3).partition(e, function(e) {
                    var t = e.territoryId;
                    return -1 !== a.indexOf(t)
                }),
                i = t[0],
                r = t[1],
                o = s(i),
                l = s(r),
                u = l.slice(0, Math.ceil(l.length / 2)),
                c = l.slice(Math.ceil(l.length / 2));
            return [o, u, c]
        }

        function s(e) {
            return n(3).sortBy(e, function(e) {
                var t = e.territoryId;
                return n(83).codeToCountry(t) || t
            })
        }
        var a = n(3).intersection(["US", "IE", "GB", "FR", "CA", "NZ", "AU", "DE", "NL"], n(83).monetizableCountryCodes());
        e.exports = n(54).extend(n(113), {
            className: "monetizationTerritories",
            template: n(2458),
            css: n(2835),
            bubbleEvents: {
                territoryDelete: "onSubviewTerritoryDelete",
                territoryChange: "onSubviewTerritoryChange"
            },
            element2selector: {
                validationMessage: ".monetizationTerritories__validationMessage"
            },
            defaults: {
                publisherIsrc: null
            },
            states: {
                invalid: "m-invalid"
            },
            explicitRequiredTerritories: null,
            collection: null,
            setup: function(e) {
                var t = e.publisherIsrc;
                this.explicitRequiredTerritories = this.addDataSource(new(n(990))({
                    id: t
                }), {
                    requiredAttributes: ["territories"]
                })
            },
            getTemplateData: function() {
                var e = this.collection,
                    t = this.getFieldValue(),
                    i = this.explicitRequiredTerritories.get("territories"),
                    s = r(t, e);
                return {
                    canAddTerritory: !n(3).isEmpty(s),
                    monetizationTerritories: o(t),
                    remainingTerritories: s,
                    explicitRequiredTerritories: i,
                    userRightsholders: e.availableTerritories()
                }
            },
            onSubviewTerritoryDelete: function(e) {
                var t = e.data,
                    r = n(3).chain(this.getFieldValue()).reject(function(e) {
                        var n = e.territoryId;
                        return t.territoryId === n
                    }).map(i(this.explicitRequiredTerritories.get("territories"))).value();
                this.setFieldValue(r)
            },
            onSubviewTerritoryChange: function(e) {
                var t = e.data,
                    r = t.territoryId,
                    o = this.getFieldValue(),
                    s = n(3).findIndex(o, function(e) {
                        return e.territoryId === r
                    });
                s >= 0 ? o.splice(s, 1, t) : o.push(t), this.setFieldValue(o.map(i(this.explicitRequiredTerritories.get("territories")))), this.resetOwnValidation(), this.focus()
            },
            focus: function() {
                this.$("select").focus()
            },
            onFieldChange: function() {
                this.rerender()
            },
            getFieldValue: function() {
                var e = this.form.get(this.field) || [],
                    t = this.collection.availableTerritories();
                return e.filter(function(e) {
                    var n = e.territory;
                    return t[n]
                }).map(function(e) {
                    var n = e.territory,
                        i = e.rightsholder_urn,
                        r = i ? {
                            value: i,
                            label: t[n][i]
                        } : null;
                    return {
                        territoryId: n,
                        rightsholder: r
                    }
                })
            },
            onValidationChange: function(e) {
                var t = !e.isValid;
                this.getElement("validationMessage").html(t ? e.message.toString() : ""), this.toggleState("invalid", t)
            }
        })
    },
    1465: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2467),
            css: n(2842),
            className: "editPlaylistBasicTab",
            ModelClass: n(199),
            getTemplateData: function(e) {
                return e.FormClass = n(199), e
            }
        })
    },
    1466: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("errorMessage");
            this.getElement("errorMessage").text(e), this.toggleState("showProgress", e && e.toString().length > 0)
        }
        e.exports = n(54).extend(n(68).withOptions("playlistEdit"), {
            template: n(2468),
            loadingTemplate: n(791),
            css: [n(854), n(1167)],
            element2selector: {
                progress: ".audibleEditForm__progress",
                errorMessage: ".playlistEditForm__error"
            },
            states: {
                showProgress: function(e) {
                    this.getElement("progress").toggle(e), n(3).defer(this.$el.toggleClass.bind(this.$el, "showProgress", e))
                }
            },
            className: "playlistEditForm audibleEditForm",
            setup: function(e) {
                this.model = new(n(199))({}, {
                    resource_id: e.resource_id
                }), this.listenTo(this.model, "change:errorMessage", i)
            },
            getTemplateData: function(e) {
                return e.PlaylistEdit = n(199), e.playlist = this.model.getAudible(), e
            },
            renderDecorate: function() {
                i.call(this)
            }
        })
    },
    1467: function(e, t, n) {
        "use strict";
        var i = 20;
        e.exports = n(80).extend(n(113), n(469), n(553), {
            className: "editTrackList g-all-transitions-300",
            listClassName: "editTrackList__list sc-clearfix sc-list-nostyle",
            itemClassName: "editTrackList__item sc-border-light-bottom",
            Subview: n(1470),
            css: n(2843),
            template: n(2469),
            defaults: {
                maxDisplay: 0,
                resource_id: null
            },
            editableObject: null,
            listSelector: ".editTrackList__list",
            listItemSelector: ".editTrackList__item",
            dragHandleSelector: ".editTrackItem__content",
            hasDifferentCreators: null,
            playlistModel: null,
            bubbleEvents: {
                "click:remove": "onRemoveSoundClick"
            },
            states: {
                longPlaylist: "m-long-playlist"
            },
            element2selector: {
                listContainer: ".editTrackList__container"
            },
            setup: function(e) {
                this.playlistModel = this.form._playlist, this.collection = this.editableObject = this.getFieldValue(), this.playlistModel.hold()
            },
            dispose: function() {
                this.playlistModel.release()
            },
            getModelsToRender: function() {
                return this.hasDifferentCreators = !!this.playlistModel.hasDifferentCreators(), this.collection.models
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.call(this), this.toggleState("longPlaylist", this.collection.length > i), this.enterEditingState(), this.enableSorting()
            },
            getListContainer: function() {
                return this.getElement("listContainer")
            },
            onSortingUpdate: function(e, t) {
                this.markDirty()
            },
            onFieldChange: n(3).noop,
            onRemoveSoundClick: function(e) {
                var t = e.data.id;
                this.collection.remove(t), this.markDirty(), e.stopPropagation()
            },
            getTemplateData: function(e) {
                return e = n(80).prototype.getTemplateData.call(this, e) || e, e.Form = this.form.constructor, e.formResourceId = this.form.resource_id, e
            },
            getSubviewArgs: function(e) {
                return n(3).assign(n(80).prototype.getSubviewArgs.apply(this, arguments), {
                    resource_id: e.resource_id,
                    show_user: this.hasDifferentCreators
                })
            },
            getQueueSource: function() {
                return null
            }
        })
    },
    1468: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2470),
            css: n(855),
            className: "editPlaylistMetadataTab metadataGrid",
            ModelClass: n(199),
            getTemplateData: function(e) {
                var t = n(55).get("me");
                return e.FormClass = n(199), e.hasCustomBuyTitle = t.getPerk("customBuyTitle"), e.buyLinkClassName = e.hasCustomBuyTitle ? "metadataGrid__field-wide" : "metadataGrid__field-full", e
            }
        })
    },
    1469: function(e, t, n) {
        "use strict";
        e.exports = n(314).extend(n(968), {
            ModelClass: n(199),
            defaults: {
                large: !0,
                tabs: [{
                    name: n(52).t("Basic info"),
                    subview: n(1465)
                }, {
                    name: n(52).t("Tracks"),
                    subview: n(1471)
                }, {
                    name: n(52).t("Metadata"),
                    subview: n(1468)
                }]
            },
            className: "playlistEditTabs",
            css: [n(848), n(2844)]
        })
    },
    1470: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("hover", "mouseenter" === e.type)
        }

        function r(e) {
            this.toggleState("dragging", "mousedown" === e.type)
        }

        function o() {
            this.toggleState("active", this.model.isPlaying())
        }

        function s(e) {
            this.bubble("click:remove", {
                id: this.model.id
            })
        }
        e.exports = n(54).extend(n(68).withOptions("playlistTrackItem"), {
            template: n(2471),
            css: n(2845),
            className: "editTrackItem sc-type-small",
            ModelClass: n(66),
            requiredAttributes: ["permalink", "user", "duration"],
            defaults: {
                show_user: !0
            },
            states: {
                hover: function(e) {
                    (e || !this.getState("removing")) && this.$el.toggleClass("hover", e)
                },
                active: "m-active",
                removing: "m-removing",
                dragging: "m-dragging"
            },
            events: {
                "click .editTrackItem__remove": s,
                mouseenter: i,
                mouseleave: i,
                "mouseleave .editTrackItem__content": r,
                "mousedown .editTrackItem__content": r,
                "mouseup .editTrackItem__content": r
            },
            loadingTemplate: function() {
                return '<img width="30" height="30" style="padding: 7px 0">'
            },
            initialize: function() {
                var e = {};
                e[n(223).TOGGLE] = "onOverlayButtonToggle", this.bubbleEvents = n(3).assign(this.bubbleEvents || {}, e), n(54).prototype.initialize.apply(this, arguments)
            },
            setup: function(e) {
                this.listenTo(this.model, "play pause", o)
            },
            renderDecorate: function() {
                o.call(this)
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = t.playlist,
                    r = n(52).dateTimeHelper.timecode(e.duration),
                    o = n(52).t("Duration: [[duration]]", {
                        duration: n(52).dateTimeHelper.timecode(e.duration, {
                            inWords: !0
                        })
                    });
                return n(3).assign(e, {
                    duration: r,
                    durationInWords: o,
                    playlistId: i && i.id
                })
            },
            onOverlayButtonToggle: function(e) {
                if (e.data.$el.closest(".editTrackItem").is(this.el)) {
                    var t = e.data.isOpened;
                    this.toggleState("removing", t).toggleState("hover", t, !0)
                }
            }
        })
    },
    1471: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2472),
            className: "editPlaylistTracklistTab",
            getTemplateData: function(e) {
                return e.Form = n(199), e.formResourceId = this.options.resource_id, e
            }
        })
    },
    1472: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("showProgress", !!this.model.get("fileUpload"))
        }
        e.exports = n(54).extend(n(68).withOptions("trackEdit"), {
            template: n(2475),
            loadingTemplate: n(791),
            css: n(854),
            className: "soundEditForm audibleEditForm",
            element2selector: {
                progress: ".audibleEditForm__progress"
            },
            states: {
                showProgress: function(e) {
                    this.getElement("progress").toggle(e), n(3).defer(this.$el.toggleClass.bind(this.$el, "showProgress", e))
                }
            },
            setup: function(e) {
                this.model = new(n(150))({}, n(3).pick(e, "resource_id")), this.addDataSource(n(55).get("me"), {
                    requiredAttributes: ["default_tracks_feedable", "cpp", "downloads_disabled", "default_license"]
                }).hold(), this.listenTo(this.model, "change:fileUpload", i)
            },
            renderDecorate: function() {
                i.call(this)
            },
            getTemplateData: function(e) {
                var t = n(55).get("me");
                return e.SoundUploadEdit = n(150), e.canReplaceFile = t.getPerk("fileReplace"), e.sound = this.model.getAudible(), e.hasRightsholderMonetization = t.hasMonetization() && t.hasCPPRightsholder(), e.links = {
                    copyright: "/pages/copyright",
                    faqs: "http://copyright.help.soundcloud.com/",
                    termsOfUse: "/terms-of-use"
                }, e
            }
        })
    },
    1481: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("me"),
                t = e.get("quota"),
                i = t && t.upload_seconds_used,
                r = e.getNumTracks();
            return !e.isPremium() && (r >= 4 || i > 1800) && !this.uploadManager.length
        }

        function r() {
            var e = n(55).get("me");
            return !(!e.id || e.getPlan() !== c || e.getConsumerPlan() !== d || 0 !== e.getNumTracks())
        }

        function o() {
            var e = this;
            r() && n(77).fetchProductsByCategory(n(77).idToCategory(u)).then(function(t) {
                var i = t.body.plans,
                    r = n(3).findWhere(i, {
                        id: n(77).idToApiId(u)
                    });
                r && (e._showGoUpsell = !0, e.rerender())
            })
        }

        function s() {
            var e = n(67).getCurrentSound(),
                t = !(!e || !e.isPlaying());
            this.toggleState("playing", t)
        }

        function a(e) {
            var t = this.getElement("main-menu-links"),
                i = e.layoutName,
                r = n(63).isLoggedIn() && "explore" === i ? "loggedInHome" : i;
            this.layoutInfo = e, this.toggleState("show", !0), t.removeClass("selected").filter(".header__mainMenu-" + r).addClass("selected")
        }
        var l = n(72).productIds,
            u = l.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            c = l.CREATOR_SUBSCRIPTION_FREE,
            d = l.CONSUMER_SUBSCRIPTION_FREE;
        e.exports = n(54).extend(n(68).withOptions("header"), n(126).withOptions({
            elSelector: ".header__proUpsell",
            type: "pro"
        }), {
            tagName: "header",
            className: "header sc-selection-disabled fixed g-dark g-z-index-header",
            attributes: {
                role: "banner"
            },
            css: n(2858),
            template: n(2485),
            events: {
                "click .header__mainMenu-stream": "scrollTopStream"
            },
            element2selector: {
                "header-inner": ".header__inner",
                moreButton: ".header__moreButton",
                "main-menu-links": ".header__mainMenu a"
            },
            states: {
                playing: "playing",
                show: "show"
            },
            _showGoUpsell: !1,
            setup: function() {
                var e = this,
                    t = ["id", "avatar_url", "permalink"];
                this.uploadManager = new(n(220)), this.listenTo(n(57), "audio:play audio:pause", s).listenTo(n(57), "layout:change", a).listenTo(n(55).get("me"), "change:" + t.join(" change:"), this._onModelChange), n(63).isLoggedIn() ? o.call(this) : this.listenToOnce(n(57), "connect:hasUserData", function() {
                    o.call(e)
                })
            },
            renderDecorate: function() {
                this.subviews.moreButton || this.addSubview(new(n(1019))({
                    el: this.getElement("moreButton"),
                    dropdownKey: "more",
                    overlayOptions: {
                        width: 170,
                        relativeElementAnchor: "right bottom",
                        anchor: "right top",
                        offset: "1 0",
                        zIndexLevel: "header-menu"
                    },
                    ContentViewClass: n(1482)
                }), "moreButton")
            },
            getUpsellRef: function() {
                return "t099"
            },
            scrollTopStream: function() {
                "stream" === this.layoutInfo.layoutName && window.scrollTo(0, 0)
            },
            getTemplateData: function() {
                var e = n(55).get("me");
                return {
                    user: e.toJSON(),
                    loggedIn: n(63).isLoggedIn(),
                    showProUpsell: i.call(this),
                    showGoUpsell: this._showGoUpsell,
                    upsellRef: this.getUpsellRef()
                }
            }
        })
    },
    1482: function(e, t, n) {
        "use strict";
        var i = n(72).productIds,
            r = i.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            o = i.CONSUMER_SUBSCRIPTION_FREE;
        e.exports = n(54).extend(n(68).withOptions("moreDropdown"), n(126).withOptions({
            type: "pro",
            elSelector: ".moreMenu__proUpsell"
        }), {
            template: n(2486),
            css: n(2859),
            className: "moreMenu g-dark g-dark-bg",
            events: {
                "click .moreMenu__keyboard": "onKeyboardShortcutsClick"
            },
            requiredAttributes: ["active"],
            setup: function() {
                this.model = new(n(77))({
                    id: r
                })
            },
            onKeyboardShortcutsClick: function(e) {
                e.preventDefault(), n(57).trigger("keyboard-shortcuts:toggle")
            },
            getUpsellRef: function() {
                return "t132"
            },
            getTemplateData: function(e) {
                var t = n(63).isLoggedIn(),
                    i = n(55).get("me"),
                    r = this.model.isActive();
                return e.consumerUpsell = n(52).t("Get SoundCloud Go+"), e.isLoggedIn = t, e.upsellRef = this.getUpsellRef(), e.showProUpsell = !t && !r, e.showGoUpsell = t && r && i.getConsumerPlan() === o, e
            }
        })
    },
    1483: function(e, t, n) {
        "use strict";

        function i() {
            return !n(55).get("me").isPremium()
        }

        function r() {
            return n(55).get("me").getNumTracks() > 0
        }

        function o() {
            return r() ? "t061" : "t148"
        }
        e.exports = n(54).extend(n(68).withOptions("profileDropdown"), n(126).withOptions({
            type: "pro",
            elSelector: ".profileMenu__premium"
        }), {
            template: n(2488),
            css: n(2861),
            className: "profileMenu g-dark",
            getUpsellRef: o,
            getTemplateData: function() {
                var e = n(55).get("me");
                return {
                    user: e.toJSON(),
                    showUpsell: i(),
                    ref: o(),
                    showLikes: !0,
                    showSets: e.hasPlaylists(),
                    showStats: r(),
                    showFollowing: e.hasFollowings()
                }
            }
        })
    },
    1484: function(e, t, n) {
        "use strict";
        var i = {
            messages: {
                View: n(1519),
                opts: {
                    width: 360,
                    relativeElementAnchor: "right bottom",
                    anchor: "right top",
                    offset: "46 0",
                    zIndexLevel: "header-menu"
                }
            },
            activities: {
                View: n(1389),
                opts: {
                    width: 360,
                    relativeElementAnchor: "right bottom",
                    anchor: "right top",
                    offset: "92 0",
                    zIndexLevel: "header-menu"
                }
            },
            profile: {
                View: n(1483),
                opts: {
                    width: 135,
                    relativeElementAnchor: "left bottom",
                    anchor: "left top",
                    zIndexLevel: "header-menu"
                }
            }
        };
        e.exports = n(54).extend({
            template: n(2489),
            css: n(2863),
            element2selector: {
                activitiesButton: ".userNav__activitiesButton",
                messagesButton: ".userNav__messagesButton",
                profileButton: ".userNav__usernameButton"
            },
            className: "userNav sc-clearfix",
            ModelClass: n(64),
            requiredAttributes: ["username"],
            renderDecorate: function() {
                n(3).each(i, function(e, t) {
                    var i = this.getElement(t + "Button");
                    i[0] && !this.subviews[t] && this.addSubview(new(n(1019))({
                        el: i,
                        dropdownKey: t,
                        overlayOptions: e.opts,
                        ContentViewClass: e.View
                    }), t)
                }, this)
            }
        })
    },
    1503: function(e, t, n) {
        "use strict";

        function i() {
            this.bubble("overlay:close")
        }
        e.exports = n(54).extend({
            className: "localeSelectorContent",
            css: n(2886),
            template: n(2514),
            events: {
                "click .localeSelector__cancel": i
            },
            renderDecorate: function() {
                this.whenInserted().done(function() {
                    n(1182).init({
                        selector: ".localeSelectorContent__wrapper",
                        host: "https://soundcloud.com"
                    })
                })
            }
        })
    },
    1841: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".audibleTilePlaceholder{position:relative;width:100%;padding-bottom:78px}.audibleTilePlaceholder:before{display:block;content:' ';height:0;padding-top:100%;border:1px solid #ccc}", ""])
    },
    1842: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.audibleTile{width:100%;padding-bottom:78px;position:relative}.audibleTile__artwork{padding-top:100%;height:0;position:relative;z-index:2}.audibleTile__description{position:absolute;padding-top:100%;top:6px;width:100%;z-index:1}.audibleTile.m-largeUI .audibleTile__description{top:12px}.audibleTile__image{position:absolute;top:0;bottom:0;left:0;right:0;cursor:pointer}.audibleTile.m-navigationDisabled .audibleTile__image{cursor:default}.audibleTile__playButton{position:absolute;left:34%;top:34%;right:34%;bottom:34%}.audibleTile__actions{position:absolute;bottom:0;left:0;width:100%;height:40px;padding:5px;background:linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,0));display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;box-sizing:border-box}.audibleTile.m-largeUI .audibleTile__actions{height:50px;padding:9px 13px}.audibleTile__actionContainer{display:inline-block;height:20px;width:20px;margin-left:7px}.audibleTile__previewIndicator{position:absolute;top:8px;right:8px}.audibleTile__playButton,.audibleTile__actions,.audibleTile__description{transition:opacity .1s,visibility .1s}.audibleTile[data-description="never"] .audibleTile__description,.audibleTile[data-description="hover"] .audibleTile__description,.audibleTile[data-playButton="never"] .audibleTile__playButton,.audibleTile[data-playButton="hover"] .audibleTile__playButton,.audibleTile[data-actions="never"] .audibleTile__actions,.audibleTile[data-actions="hover"] .audibleTile__actions{opacity:0;visibility:hidden}.audibleTile[data-playButton="hover"].m-playing .audibleTile__playButton,.audibleTile[data-playButton="hover"] .audibleTile__artwork:hover .audibleTile__playButton,.audibleTile[data-playButton="hover"][data-description="hover"]:hover .audibleTile__playButton,.audibleTile[data-actions="hover"] .audibleTile__artwork:hover .audibleTile__actions,.audibleTile[data-actions="hover"][data-description="hover"]:hover .audibleTile__actions,.audibleTile.m-overlayOpen .audibleTile__actions,.audibleTile[data-description="hover"]:hover .audibleTile__description{opacity:1;visibility:visible}.audibleTile__trackCount{position:absolute;left:10px;bottom:10px;cursor:pointer}.audibleTile__heading{width:100%;display:block;line-height:1.4}.audibleTile__usernameHeadingContainer{display:-webkit-flex;display:-ms-flexbox;display:flex}.audibleTile__mainHeading{font-size:14px}.audibleTile__mainHeadingLike.sc-icon-like{width:16px;height:18px;background-size:16px 16px}.audibleTile.m-dark .audibleTile__heading{color:#fff}.audibleTile.m-dark .audibleTile__usernameHeading{color:#e5e5e5}.audibleTile.m-dark .audibleTile__usernameHeading:hover{color:#fff}.sc-icon.sc-icon-lock.audibleTile__mainHeadingPrivate{position:relative;width:12px;height:16px;top:-1px;padding:0;background-position:left center;background-size:10px 13px}.audibleTile__tierIndicatorLarge{top:-10px;right:-8px}.audibleTile__tierIndicatorSmall{top:-5px;right:-5px}', ""]);
    },
    1844: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".badgeList{margin-right:-20px}.badgeList__item{box-sizing:border-box;padding-right:20px;width:16.666%;float:left}.badgeList.m-oneRow>.loading{padding:8.333% 0}.badgeList.m-twoRows>.loading{padding:16.666% 0}", ""])
    },
    1845: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".compactTrackListItem{display:block;position:relative;color:#999;line-height:30px;height:30px;padding-left:5px;outline:0;display:-webkit-flex;display:-ms-flexbox;display:flex}.compactTrackListItem:not(.m-disabled).clickToPlay{cursor:pointer}.compactTrackListItem.clickToPlay.active,.compactTrackListItem.clickToPlay:hover,.compactTrackListItem.clickToPlay:focus{background-color:#f2f2f2;color:#999}.compactTrackListItem.active,.compactTrackListItem.active .compactTrackListItem__number,.compactTrackListItem.active .compactTrackListItem__content,.compactTrackListItem.active .compactTrackListItem__trackTitle,.compactTrackListItem.active .compactTrackListItem__user,.compactTrackListItem.active .compactTrackListItem__plays{color:#f50}.compactTrackListItem__content{-webkit-flex:1;-ms-flex:1;flex:1;color:#333}.compactTrackListItem__user{color:#999}.compactTrackListItem__image{margin:5px 5px 0 0}.compactTrackListItem__number{margin-right:5px}.compactTrackListItem__number,.compactTrackListItem__trackTitle{color:#333}.compactTrackListItem.m-disabled .compactTrackListItem__number,.compactTrackListItem.m-disabled .compactTrackListItem__trackTitle,.compactTrackListItem.m-disabled .compactTrackListItem__content{color:#ccc}.compactTrackListItem__additional{font-size:10px;padding:0 5px 0 12px}.compactTrackListItem__tierIndicator{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;position:relative}.compactTrackListItem__previewIndicator{line-height:1.2}.compactTrackListItem__plays{margin-left:5px;float:right}.compactTrackListItem__remove{margin-left:5px}.compactTrackListItem.clickToPlay.active .compactTrackListItem__additional,.compactTrackListItem.clickToPlay:hover .compactTrackListItem__additional,.compactTrackListItem.clickToPlay:focus .compactTrackListItem__additional{background:#f2f2f2;background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px)}", ""])
    },
    1846: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".confirmableForm__actions{margin-top:5px}.confirmableForm__actions>.sc-button{float:right;margin-left:5px}", ""])
    },
    1848: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".dialog{position:absolute;top:0;left:0;padding:10px;border:1px solid #ccc;background:#fff;box-shadow:0 2px 7px -1px rgba(0,0,0,.4)}.dialog.rounded{border-radius:4px}.dialog.roundedBottom{border-radius:0 0 4px 4px}.dialog.smallText{font-size:11px;padding:8px}.dialog__actions{margin-top:15px;text-align:right}.dialog__arrow{background:#fff;border:1px solid #ccc;border-width:1px 0 0 1px;position:absolute;width:8px;height:8px;box-shadow:-1px -1px 1px -1px rgba(0,0,0,.5);z-index:-1}.dialog__centertop .dialog__arrow,.dialog__righttop .dialog__arrow,.dialog__lefttop .dialog__arrow,.ui-flipped-bottom.dialog__centerbottom .dialog__arrow,.ui-flipped-bottom.dialog__leftbottom .dialog__arrow,.ui-flipped-bottom.dialog__rightbottom .dialog__arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);top:-5px;bottom:auto}.dialog__centerbottom .dialog__arrow,.dialog__rightbottom .dialog__arrow,.dialog__leftbottom .dialog__arrow,.ui-flipped-top.dialog__centertop .dialog__arrow,.ui-flipped-top.dialog__lefttop .dialog__arrow,.ui-flipped-top.dialog__righttop .dialog__arrow{-webkit-transform:rotate(225deg);transform:rotate(225deg);bottom:-5px;top:auto}.dialog__centertop .dialog__arrow,.dialog__centerbottom .dialog__arrow{left:50%;margin-left:-4px}.dialog__righttop .dialog__arrow,.dialog__rightbottom .dialog__arrow,.ui-flipped-left.dialog__lefttop .dialog__arrow,.ui-flipped-left.dialog__leftbottom .dialog__arrow{right:12px;left:auto}.dialog__lefttop .dialog__arrow,.dialog__leftbottom .dialog__arrow,.ui-flipped-right.dialog__righttop .dialog__arrow,.ui-flipped-right.dialog__rightbottom .dialog__arrow{left:12px;right:auto}.dialog__leftcenter .dialog__arrow{-webkit-transform:rotate(315deg);transform:rotate(315deg);left:-5px;top:50%;bottom:auto}.ui-flipped-left.dialog__leftcenter .dialog__arrow{-webkit-transform:rotate(45deg);transform:rotate(45deg);right:-5px;left:auto}", ""])
    },
    1850: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.emptyNetworkPage{text-align:center;padding-bottom:120px}.emptyNetworkPage.small{padding-bottom:100px}.emptyNetworkPage__image{display:inline-block;background-repeat:no-repeat;background-position:50% 50%;width:240px}.emptyNetworkPage__headline{margin-top:14px}.emptyNetworkPage.small .emptyNetworkPage__headline{font-size:16px}.emptyNetworkPage__action,.emptyNetworkPage__subheadline{display:inline-block;margin-top:8px}.emptyNetworkPage.small .emptyNetworkPage__action{margin-top:2px;font-size:12px;font-family:"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif}.emptyNetworkPage.emptyAlbums,.emptyNetworkPage.emptyLikes,.emptyNetworkPage.emptySets,.emptyNetworkPage.emptyApps,.emptyNetworkPage.emptyTracks,.emptyNetworkPage.emptyReposts{padding-top:113px}.emptyNetworkPage.emptyStations,.emptyNetworkPage.emptyHistory{padding-top:80px}.emptyNetworkPage.emptyStream{padding-top:102px}.emptyNetworkPage.emptyUsers{padding-top:103px}.emptyNetworkPage.emptyComments{padding:40px 0}.emptyNetworkPage.emptyTracks.emptyPlaylistTracks{padding:70px 0}.emptyNetworkPage.emptyAlbums .emptyNetworkPage__image{background-image:url(' + n(1111) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyLikes .emptyNetworkPage__image{background-image:url(" + n(2248) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyApps .emptyNetworkPage__image,.emptyNetworkPage.emptySets .emptyNetworkPage__image{background-image:url(" + n(1111) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyUsers .emptyNetworkPage__image{background-image:url(" + n(2244) + ");background-size:240px 177px;height:177px}.emptyNetworkPage.emptyTracks .emptyNetworkPage__image{background-image:url(" + n(1115) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyReposts .emptyNetworkPage__image{background-image:url(" + n(2251) + ");background-size:240px 167px;height:167px}.emptyNetworkPage.emptyStream .emptyNetworkPage__image{background-image:url(" + n(1113) + ");background-size:240px 178px;height:178px}.emptyNetworkPage.emptyComments .emptyNetworkPage__image{background-image:url(" + n(2242) + ");background-size:194px 195px;height:195px}.emptyNetworkPage.emptyHistory .emptyNetworkPage__image{background-image:url(" + n(2246) + ");background-size:200px 200px;height:200px}.emptyNetworkPage.emptyStations .emptyNetworkPage__image{background-image:url(" + n(2253) + ");background-size:200px 200px;height:200px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.emptyNetworkPage.emptyLikes .emptyNetworkPage__image{background-image:url(" + n(2249) + ")}.emptyNetworkPage.emptyAlbums .emptyNetworkPage__image,.emptyNetworkPage.emptyApps .emptyNetworkPage__image,.emptyNetworkPage.emptySets .emptyNetworkPage__image{background-image:url(" + n(2250) + ")}.emptyNetworkPage.emptyUsers .emptyNetworkPage__image{background-image:url(" + n(2245) + ")}.emptyNetworkPage.emptyTracks .emptyNetworkPage__image{background-image:url(" + n(1116) + ")}.emptyNetworkPage.emptyReposts .emptyNetworkPage__image{background-image:url(" + n(2252) + ")}.emptyNetworkPage.emptyStream .emptyNetworkPage__image{background-image:url(" + n(1114) + ")}.emptyNetworkPage.emptyComments .emptyNetworkPage__image{background-image:url(" + n(2243) + ")}.emptyNetworkPage.emptyHistory .emptyNetworkPage__image{background-image:url(" + n(2247) + ")}}", ""])
    },
    1851: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.paging-eof{clear:both;position:relative;top:-1px;height:14px;margin:45px 0 0 0}.paging-eof:before{content:"";display:block;width:100%;height:14px;position:absolute;left:0;top:-9px;background:url(' + n(2345) + ") center center no-repeat}", ""])
    },
    1852: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".blockCheckbox{height:100%;color:#666;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}.blockCheckbox:not(.m-disabled) label{cursor:pointer}.blockCheckbox.m-checked .showUnchecked,.blockCheckbox:not(.m-checked) .showChecked,.blockCheckbox.m-indeterminate .showChecked,.blockCheckbox.m-indeterminate .showUnchecked,.blockCheckbox:not(.m-indeterminate) .showIndeterminate{display:none}.blockCheckbox__label{display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%}.blockCheckbox__checkbox{display:block;margin-right:10px}.blockCheckbox__content{-webkit-flex:1;-ms-flex:1;flex:1}.blockCheckbox__title{display:block;color:#333;margin-bottom:7px}.blockCheckbox__icon{background:url(" + n(2349) + ") no-repeat 0 0;background-size:26px 156px;width:26px;height:26px;margin:2px 0 0 2px;border-radius:50%}.blockCheckbox:not(.m-disabled):not(.m-checked):not(.m-indeterminate):hover .blockCheckbox__icon{background-position:0 -26px}.blockCheckbox.m-checked .blockCheckbox__icon{background-position:0 -52px}.blockCheckbox.m-indeterminate .blockCheckbox__icon{background-position:0 -78px}.blockCheckbox.m-checked.m-disabled .blockCheckbox__icon{background-position:0 -104px}.blockCheckbox.m-indeterminate.m-disabled .blockCheckbox__icon{background-position:0 -130px}.blockCheckbox.m-focused .blockCheckbox__icon{box-shadow:0 0 2px #f50}.blockCheckbox__contentParagraph{margin-bottom:7px}.blockCheckbox__warning{color:#f50}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.blockCheckbox__icon{background-image:url(" + n(2350) + ")}}", ""])
    },
    1853: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".checkboxControl{margin-top:6px;margin-bottom:6px}.checkboxControl.invalid .sc-checkbox-check{border-color:#f50}.checkboxControl.m-block>.checkbox{display:block;margin-bottom:7px;display:-webkit-flex;display:-ms-flexbox;display:flex}.checkboxControl.m-block .sc-checkbox-check{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0}.checkboxControl.m-block .sc-checkbox-label{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;line-height:1.4;margin-top:-.2em;margin-left:.8em}.checkboxControl.m-disabled .sc-checkbox-label{color:#999}", ""])
    },
    1854: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".comboBoxList{max-height:218px;width:100%;overflow:hidden;background-color:#fff;border:1px solid #999;border-top-width:0;border-radius:0 0 4px 4px;box-shadow:0 3px 10px -3px rgba(0,0,0,.1)}.ui-flipped-top .comboBoxList{border-radius:4px 4px 0 0;border-top-width:1px;border-bottom:0;box-shadow:none}.comboBoxList__item{padding:4px 8px;min-height:19px}.comboBoxList__item.selected{background-color:#f2f2f2}", ""])
    },
    1855: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".countries__territory{line-height:22px;position:relative}.countries__remove{display:none;position:absolute;right:0;top:3px}.countries__exceptions{margin:10px 0;padding-top:10px}.countries__territories{margin:10px 0;list-style:none}.countries.touch .countries__title,.countries__territory:hover .countries__title{margin-right:20px}.countries.touch .countries__remove,.countries__territory:hover .countries__remove{display:block}", ""])
    },
    1856: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".datefield__datepicker{background:#fff;border:1px solid #ccc}.datefield__datepicker .ui-icon{text-indent:0}.datefield__datepicker .ui-datepicker-next .ui-icon{left:10%}.datefield__datepicker .ui-datepicker-current-day{font-weight:700}.datefield__datepicker.insideModal{z-index:3000!important}", ""])
    },
    1857: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".datetime__fields{max-width:215px}.datetime__dateandtime .datefield,.datetime__dateandtime .time,.datetime__dateandtime .datetime__at{display:table-cell}.datetime__at{padding:8px}.datetime__dateandtime .time .textfield__input{width:4.5em}", ""])
    },
    1858: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".isrcField.m-compact{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.isrcField.m-compact .isrcField__textfield{-webkit-flex:1;-ms-flex:1;flex:1}.isrcField.m-compact .isrcField__createIsrc{margin-right:6px}", ""])
    },
    1859: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".radioGroup{padding-left:6px;display:inline-block}.radioGroup.vertical .radioGroup__radioRadio{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0}.radioGroup.vertical .radioGroup__radio{display:block;margin-bottom:7px;display:-webkit-flex;display:-ms-flexbox;display:flex}.radioGroup.vertical .radioGroup__radio:last-child{margin-bottom:0}.radioGroup.vertical .radioGroup__label{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-left:.8em}.radioGroup.vertical .radioGroup__sublabel{color:#666;display:block}.radioGroup.horizontal .radioGroup__radio{margin-right:7px}.radioGroup.horizontal .radioGroup__radio:last-child{margin-right:0}.radioGroup.invalid .radioGroup__radioRadio{border-color:#f50}", ""])
    },
    1860: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".select{margin:10px 0}.select__wrapper{position:relative}.select__select{width:100%}.select__labelText{display:inline-block;margin-bottom:6px}.select.invalid .select__select{border-color:#f50}", ""])
    },
    1861: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".textfield{margin:10px 0;position:relative}.textfield__inputWrapper{position:relative}.textfield.inline{display:inline-block}.textfield__label{display:inline-block;margin-bottom:6px}.textfield .hintButton{position:relative;top:-1px;margin-left:1px}.textfield__input{width:100%;position:relative;z-index:1}.textfield.inline .textfield__input{width:auto}.textfield.invalid .textfield__input{border-color:#f50}.textfield.hint .textfield__input{border-color:#333;border-top-right-radius:0}.textfield__applyAll{background:url(" + n(2206) + ") no-repeat 0 -1px;background-size:16px;position:absolute;right:5px;top:5px;height:16px;width:16px;border:1px dotted transparent;z-index:2;transition:opacity .3s}.textfield__applyAll:focus{border-color:#999;outline:0}.textfield__clear{position:absolute;right:5px;top:50%;margin-top:-7px;height:14px;width:14px;background:#e5e5e5;border:1px dotted transparent;border-radius:50%;z-index:2;transition:opacity .3s}.textfield__clear::after,.textfield__clear::before{content:'';display:block;position:absolute;width:10px;height:0;left:50%;top:50%;margin-left:-5px;margin-top:-1px;border-top:2px solid #fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.textfield__clear::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.textfield__input:placeholder-shown+.textfield__clear{pointer-events:none;opacity:0}.textfield__clear:hover{background:#ccc}.textfield__clear:focus{border-color:#999;outline:0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.textfield__applyAll{background-image:url(" + n(2207) + ")}}", ""])
    },
    1862: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".tokenInput{margin:10px 0}.tokenInput__wrapper{border:1px solid #ccc;cursor:text;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.tokenInput.focused .tokenInput__wrapper{border-color:#999}.tokenInput.invalid .tagInput__wrapper{border-color:#f50}.tokenInput__label{display:inline-block;margin-bottom:6px}.tokenInput__token,.tokenInput__inputContainer{display:inline-block}.tokenInput__token{background:#f2f2f2;font-size:.9em;border:1px solid #e5e5e5;border-radius:4px;padding:0 5px;margin:0 4px 1px 0;white-space:nowrap;line-height:1.3}.tokenInput__tokenRemove{background:url(" + n(286) + ") no-repeat 0 0;width:15px;height:15px;vertical-align:text-top;margin-left:5px}.tokenInput__input{border:0;padding:1px 2px;font-weight:100}", ""])
    },
    1863: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".genericTrackCount{width:110px;height:110px;box-sizing:border-box;border-radius:50%;padding-top:15px;background-color:rgba(0,0,0,.8);color:#fff;text-transform:uppercase;text-align:center;visibility:hidden}.genericTrackCount.small{width:60px;height:60px;padding-top:13px}.genericTrackCount.m-active{visibility:visible}.genericTrackCount.m-noTracks{opacity:.4}.genericTrackCount__duration{line-height:1}.genericTrackCount__title{font-size:32px;font-weight:400;line-height:1.3}.genericTrackCount__subtitle{font-size:12px;font-weight:100}.genericTrackCount.small .genericTrackCount__title,.genericTrackCount.small .genericTrackCount__subtitle{font-size:14px;text-transform:lowercase;line-height:1.2;font-weight:400}", ""])
    },
    1864: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".backgroundGradient{position:relative;height:100%;z-index:0}.backgroundGradient__buffer{position:absolute;top:0;left:0;height:100%;width:100%;z-index:2;opacity:1;transition:opacity .3s}.backgroundGradient__hidden{opacity:0;z-index:1;transition-delay:.3s}.backgroundGradient__imageOverlay{display:none}.backgroundGradient.m-imageOverlay .backgroundGradient__imageOverlay{display:block;height:100%;width:100%;z-index:3;position:absolute;opacity:.8;background-size:cover;background-position:center;-webkit-filter:blur(40px);filter:blur(40px);-webkit-transform:scale(1.15);transform:scale(1.15)}", ""])
    },
    1865: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".imageChooser{height:100%;cursor:pointer}.imageChooser:hover .imageChooser__chooseButton,.imageChooser__chooseButton:hover,.imageChooser__chooseButton:focus{border-color:rgba(0,0,0,.3)}", ""])
    },
    1866: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".imageCrop__previewContainer,.imageCrop__preview{position:relative}.imageCrop__preview.cropit-image-loaded{cursor:move;background-color:#fff}.imageCrop__previewBackground::before,.imageCrop__previewRounded{position:absolute;left:0;right:0;top:0;bottom:0}.imageCrop__previewBackground::before{content:'';background-color:rgba(255,255,255,.7)}.imageCrop__previewRounded{border-radius:50%}.imageCrop__hint{color:#666;margin-bottom:8px}.imageCrop__bottom{margin-top:25px;min-height:32px}.imageCrop.m-compact .imageCrop__bottom{margin-top:10px}.imageCrop__smallHint{position:relative;top:1px;margin-right:10px;-webkit-flex:1;-ms-flex:1;flex:1}.imageCrop__mainButtons{margin:0}.imageCrop__error{padding:0 10px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.imageCrop__zoomContainer{margin-right:10px;display:none;-webkit-flex:1;-ms-flex:1;flex:1}.imageCrop__zoom{display:-webkit-flex;display:-ms-flexbox;display:flex}.imageCrop__zoomControl{font-size:18px;color:#bbb;line-height:24px;background:0 0;border:0;padding:0;width:26px;height:26px}.imageCrop__zoomControl:focus,.imageCrop__zoomControl:hover{color:#666;outline:0}.imageCrop__zoomControl[disabled]:hover,.imageCrop__zoomControl[disabled]:focus{color:#999}.imageCrop__zoomSlider{max-width:130px;margin:12px 5px}.imageCrop__noZoomSupport{color:#666}.imageCrop__smallImage,.imageCrop__error{display:none}", ""])
    },
    1868: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".image__full,.image{text-align:center;position:relative;background-repeat:no-repeat}.image__lightOutline .image__full{box-shadow:rgba(0,0,0,.1)0 0 0 1px inset}.image__whiteOutline .image__full{border:2px solid #fff;box-sizing:border-box;background-origin:border-box}.image.dragover{box-shadow:0 0 15px #06c}.image.interactive{cursor:pointer}.image__rounded{border-radius:50%}.image:focus{outline:0}.image:focus .image__full{border:1px dotted #999;box-sizing:border-box;background-origin:border-box}.image__rounded.m-loaded.sc-artwork{background:0 0}.image__button{position:absolute;bottom:0;left:0;right:0;height:20%}.image.readOnly .image__button{display:none}.image.customImage .image__button{overflow:hidden;opacity:0;transition:opacity .1s linear}.image.alwaysShowEditButton .image__button,.image.customImage:hover .image__button,.image.customImage .image__button:focus{opacity:1}.image__placeholder{position:absolute}.image.m-station::before{position:absolute;content:'';display:block;top:0;bottom:0;right:0;left:0;width:60%;height:60%;background-image:url(" + n(2343) + ");background-size:cover;z-index:3;margin:auto}.image.m-station.m-smallOverlay::before{background-image:url(" + n(2342) + ")}", ""])
    },
    1869: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".linkMenu{box-shadow:0 1px 8px rgba(0,0,0,.2);background-color:#fff}.linkMenu__scrollable{max-height:450px;width:100%;margin:0}.linkMenu__list{width:100%;padding:10px 18px;box-sizing:border-box}.linkMenu__group{padding-bottom:20px}.linkMenu__group:last-child{padding-bottom:0}.linkMenu__groupTitle{padding-bottom:4px;margin-bottom:8px;text-transform:uppercase;font-size:11px}.linkMenu__activeItem,.linkMenu__activeItem>a,.linkMenu__item:hover,.linkMenu__item>a:hover{color:#f50}.linkMenu__item{line-height:28px}.linkMenu__bold>.linkMenu__item{font-weight:400}", ""])
    },
    1871: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".loading{background:url(" + n(249) + ") no-repeat center center;clear:both;text-align:center;box-sizing:border-box;min-height:40px;width:100%}.loading.dark{background-image:url(" + n(2276) + ")}.loading.m-padded{padding:200px 0}.loading.small{min-height:20px;background-size:16px}", ""])

    },
    1879: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".announcement{padding:15px 30px;background-color:rgba(0,0,0,.9);position:relative}.announcement.m-dismiss-visible{padding-right:60px}.announcement__dismiss{position:absolute;width:18px;height:18px;cursor:pointer;right:30px;top:50%;margin-top:-9px;background:url(" + n(2217) + ") no-repeat 50% 50%;background-size:18px 18px}.announcement>.announcement__message>a{color:#ccc;text-decoration:underline}.announcements__item+.announcements__item .announcement{padding-top:0}.announcements__item+.announcements__item .announcement__dismiss{display:none}@media (max-width:1079px){.announcement{padding-left:20px;padding-right:20px}.announcement.m-dismiss-visible{padding-right:50px}.announcement__dismiss{right:20px}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.announcement__dismiss{background-image:url(" + n(2218) + ")}}", ""])
    },
    1880: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".announcements{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);width:100%;position:fixed;bottom:0;transition:-webkit-transform 200ms ease-out;transition:transform 200ms ease-out}.announcements.m-offset{-webkit-transform:translate3d(0,-47px,0);transform:translate3d(0,-47px,0)}", ""])
    },
    1881: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".addToPlaylistButton{min-width:120px}", ""])
    },
    1882: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".hintButton{background:url(" + n(2237) + ") 0 0/contain no-repeat;width:26px;height:26px;padding:0 0 5px;border:none}.hintButton:active,.hintButton:focus,.hintButton:hover{border:none}.hintButton.sc-button-small{height:18px;width:18px}.hintButton.sc-button-tiny{height:16px;width:16px}.hintButton.sc-button-active{background:url(" + n(2236) + ") 0 0/contain no-repeat}", ""])
    },
    1894: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentForm__transition{transition:opacity 300ms,height 300ms,margin 300ms}.commentForm{position:relative;z-index:3;opacity:0;margin-top:0}.commentForm__wrapper{height:0;padding:5px;background:#f2f2f2;border:1px solid #e5e5e5;overflow:hidden}.commentForm.visible .commentForm__wrapper{overflow:visible}.commentForm.visible.m-small{opacity:1}.commentForm.visible.m-small .commentForm__wrapper{height:20px}.sound.streamContext .commentForm.visible.m-small{margin-top:22px}.visualSound.streamContext .commentForm.visible.m-small{margin-top:35px}.commentForm.m-large{margin-top:7px;opacity:1}.commentForm.m-large .commentForm__wrapper{height:40px;box-sizing:border-box}.commentForm.m-active .commentForm__wrapper{background:#e5e5e5;border-color:#ccc}.commentForm.m-small.m-active .commentForm__input{border-color:#ccc}.commentForm__avatar{margin-right:0;position:relative;float:left}.commentForm.m-small .commentForm__avatar{width:20px;height:20px}.commentForm.m-large .commentForm__avatar{position:relative;width:40px;height:40px;left:-6px;top:-6px}.commentForm.m-small.m-invalid .commentForm__avatar:after{content:'';position:absolute;left:0;top:0;width:100%;height:100%;display:block;box-sizing:border-box;border-left:1px solid #F50;border-bottom:1px solid #F50;border-top:1px solid #F50}.commentForm__inputWrapper{position:relative;font-size:12px;line-height:16px}.commentForm.m-small .commentForm__inputWrapper{height:20px;margin-left:20px}.commentForm.m-large .commentForm__inputWrapper{margin-left:40px;font-size:14px}.commentForm__recipient{display:none;padding:2px 5px 2px 2px;position:absolute}.commentForm.m-large .commentForm__recipient{padding:5px;font-size:14px;top:1px}.commentForm.m-recipientActive .commentForm__recipient{color:#fff;background:#06c}.commentForm.m-recipientActive.m-small .commentForm__recipient{padding:2px}.commentForm__input{width:100%;background:#fff;padding:0 9px;font-size:12px;outline:none;cursor:pointer;border:1px solid #e5e5e5}.commentForm .commentForm__input:focus,.commentForm.m-large .commentForm__inputWrapper .commentForm__input:focus{cursor:text;border-color:#999}.commentForm.m-invalid .commentForm__input{border-color:#F50!important}.commentForm.m-small .commentForm__input{height:20px;border-radius:0 4px 4px 0;border-left:none}.commentForm.m-large .commentForm__input{border-radius:4px;height:27px;font-size:14px}", ""])
    },
    1896: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentPlaceholder{width:100%;height:1px;z-index:10;top:70%;position:relative;z-index:-1;opacity:0;transition:opacity .25s}.commentPlaceholder.visible{z-index:350;opacity:1}.commentPlaceholder__avatar{position:absolute;cursor:move;margin-left:-9999em}.commentPlaceholder.visible .commentPlaceholder__avatar{margin-left:0}", ""])
    },
    1897: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentPopover{position:absolute;width:100%;top:70%;height:20px;opacity:0;transition:opacity 250ms}.commentPopover.visible{opacity:1}.commentPopover__playableArea,.commentPopover__scrub{height:100%}.commentPopover__playableArea{cursor:pointer}.commentPopover__wrapper{width:50%;transition:-webkit-transform 50ms;transition:transform 50ms}.commentPopover:hover .commentPopover__wrapper{transition:-webkit-transform 0;transition:transform 0}.commentPopover__username,.commentPopover__body{transition:padding-top 250ms;box-sizing:border-box;display:inline-block}.commentPopover__username{position:relative;float:left;max-width:30%;padding-left:10px}.commentPopover.commentLeft .commentPopover__username{float:none;padding-left:0;padding-right:10px}.commentPopover__username,a.commentPopover__username:hover,a.commentPopover__username:visited{color:#f50}.commentPopover__username:before{content:'';position:absolute;top:0;bottom:0;left:0;width:1px;display:block;background-image:linear-gradient(rgba(255,85,0,.95),rgba(255,85,0,.1))}.commentPopover.commentLeft .commentPopover__username:before{right:0;left:auto}.commentPopover__body{margin:0;padding-left:10px;color:#fff;max-width:70%}.commentPopover.commentLeft .commentPopover__body{float:left;padding-left:0;padding-right:10px}.commentPopover__avatar{position:absolute;top:-20px;background-size:cover;display:none}.commentPopover.visible .commentPopover__avatar{display:block}.commentPopover.smallAvatar{height:10px}.commentPopover.smallAvatar .commentPopover__avatar{top:-10px}.commentPopover.darkText .commentPopover__body{color:#333}.commentPopover.small .commentPopover__username,.commentPopover.small .commentPopover__body{padding-top:6px}.commentPopover.small.visible .commentPopover__username,.commentPopover.small.visible .commentPopover__body{padding-top:9px}.commentPopover.medium .commentPopover__username,.commentPopover.medium .commentPopover__body{padding-top:10px}.commentPopover.medium.visible .commentPopover__username,.commentPopover.medium.visible .commentPopover__body{padding-top:13px}.commentPopover.large .commentPopover__username,.commentPopover.large .commentPopover__body{padding-top:20px}.commentPopover.large.visible .commentPopover__username,.commentPopover.large.visible .commentPopover__body{padding-top:23px}.visualSound.streamContext.playing .commentPopover__body{color:#e5e5e5}.visualSound.streamContext.playing .commentPopover__username,.visualSound.streamContext.playing .commentPopover__body{padding-top:6px}.visualSound.streamContext.playing .commentPopover.visible .commentPopover__username,.visualSound.streamContext.playing .commentPopover.visible .commentPopover__body{padding-top:9px}", ""])
    },
    1898: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.commentFormDisabled{text-align:center;font-size:14px;padding:10px 0;border-radius:4px;background:#f2f2f2;opacity:0;height:0;margin-top:0;transition:opacity .3s,height .3s,margin .3s}.commentFormDisabled.small{font-size:12px;padding:8px 0}.commentFormDisabled.visible{margin-top:10px;opacity:1;height:19px}.commentFormDisabled.visible.small{height:16px}.visualSound .commentFormDisabled.visible.small{margin-top:25px}.listenContent__visual .commentFormDisabled{background:#f2f2f2;z-index:1;position:relative;font-family:"Interstate","Lucida Grande",Arial,sans-serif;font-weight:100;margin-top:0}', ""])
    },
    1900: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".deleteCommentContent__form{margin:7px 0 11px}.deleteCommentForm__actions{margin-top:5px;text-align:right}.deleteCommentForm__spam{margin-top:5px}", ""])
    },
    1912: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".dashbox__header{margin-bottom:13px;padding-bottom:7px}.dashbox__wrapper{margin:0 0 25px 0}.dashbox.m-loading .dashbox__wrapper{background:url(" + n(249) + ") no-repeat center center}.dashbox.m-loading .dashbox__visual{opacity:0}.dashbox__visual{display:block;opacity:1;transition:opacity .2s linear}.dashbox__box{display:block;padding:38px;border:1px solid #e5e5e5;overflow:hidden}.dashbox__box,.dashbox__box:hover,.dashbox__box:focus,.dashbox__box:visited{color:#333}.dashbox__icon{float:left;margin-right:15px}.dashbox__content{float:left;max-width:129px;vertical-align:top}.dashbox__titleLine{margin:0;line-height:18px}.dashbox__titleLine+.dashbox__bodyLine{margin-top:3px}.dashbox__bodyLine{font-size:12px;line-height:14px;margin:0}.dashbox__cta{position:relative;top:24px;clear:both;text-align:center;margin-bottom:22px}.dashbox__ctaLabel{max-width:222px}", ""])
    },
    1916: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editAccessTab{margin-top:20px}.editAccessTab__showCopyrightWarning,.editAccessTab__showDownloadableConstraint,.editAccessTab__showFeedableConstraint{display:none}.editAccessTab.m-showCopyrightWarning .editAccessTab__showCopyrightWarning,.editAccessTab.m-showDownloadableConstraint .editAccessTab__showDownloadableConstraint,.editAccessTab.m-showFeedableConstraint .editAccessTab__showFeedableConstraint{display:block}", ""])
    },
    1917: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".audibleEditForm__top{position:relative}.audibleEditForm__title{margin-bottom:30px}.audibleEditForm__audio{background-color:#fff;border-radius:4px 4px 0 0;border-bottom-width:0;padding:20px;transition:-webkit-transform .3s;transition:transform .3s;position:relative;z-index:1}.audibleEditForm__audioButtons{margin-bottom:0}.audibleEditForm__progress{position:absolute;bottom:0;left:0;right:0;padding:25px 25px 0;background-color:#fff;border-radius:4px 4px 0 0;display:none;transition:-webkit-transform .2s .35s;transition:transform .2s .35s;-webkit-transform:translateY(50px) scale(.98);transform:translateY(50px) scale(.98)}.audibleEditForm.showProgress .audibleEditForm__audio{-webkit-transform:translateY(90px) scale(.96);transform:translateY(90px) scale(.96)}.audibleEditForm.showProgress .audibleEditForm__progress{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}.audibleEditForm__form{background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding:14px 25px 0;position:relative;z-index:2}.audibleEditForm__formButtons{margin:20px -25px 0;padding:20px 25px}.audibleEditForm__requiredText{float:left;line-height:26px}.audibleEditForm__formButtons>.sc-button{float:right;margin-right:0}.audibleEditForm__foot{margin:0 -25px;padding:20px 25px}.audibleEditForm__foot strong{font-weight:700}.audibleEditForm__footCpp{margin:10px 0 0 0}.audibleEditForm__loading .audibleEditForm__form{height:503px}", ""]);
    },
    1918: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".baseFields{position:relative;padding-left:278px}.baseFields__image{position:absolute;top:0;left:0}.baseFields__title .textfield{margin-top:3px}.baseFields__tagInput{margin:10px 0 20px}.baseFields__description .textfield__input{height:130px}.baseFields__playlistTypeSelect,.baseFields__releaseDate,.baseFields__customGenre{-webkit-flex:1;-ms-flex:1;flex:1}.baseFields__playlistTypeSelect{margin-right:10px}.baseFields__genreSelect{-webkit-flex-basis:49%;-ms-flex-preferred-size:49%;flex-basis:49%;margin-right:10px}.baseFields__fullWidth{width:100%}.baseFields__customGenre{display:none}.baseFields.m-customGenre .baseFields__customGenre{display:inline-block}.baseFields.m-customGenre .baseFields__customGenreLabel{-webkit-flex:1;-ms-flex:1;flex:1}", ""])
    },
    1919: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editBasicTab{margin-top:25px;position:relative;min-height:305px}.editBasicTab__fields{margin-left:278px}.editBasicTab__afterDescription{padding:5px 0}.editBasicTab__trackList{margin:20px -30px 20px}.editBasicTab__shareToWrapper{margin-left:7px}", ""])
    },
    1923: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editStatus{position:relative}.editStatus__text{color:#666;padding-bottom:4px;min-height:15px;transition:min-height .3s cubic-bezier(.28,.42,.18,1)}.editStatus .editStatus__progress{height:5px;background-color:#999;transition:height .3s cubic-bezier(.28,.42,.18,1)}.editStatus.small .editStatus__progress{height:1px}.editStatus.medium .editStatus__progress{height:2px}", ""])
    },
    1924: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editImage{position:relative}.editImage__cropper{transition:opacity .3s,visibility 0s .3s;position:absolute;top:0;left:0;right:0;opacity:0;visibility:hidden}.editImage.m-hasFile .editImage__cropper{transition:opacity .3s;opacity:1;visibility:visible}", ""])
    },
    1925: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".licenseEdit__radios{margin:11px 0 12px}.licenseEdit__summary{margin-left:5px}", ""])
    },
    1926: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editLimitsTab{margin-top:20px}", ""])
    },
    1927: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".metadataGrid{margin-top:16px}.metadataGrid__row{clear:both;overflow:hidden;margin:-10px 0}.metadataGrid__field-full,.metadataGrid__field-wide,.metadataGrid__field-narrow,.metadataGrid__field-half,.metadataGrid__field-quarter{padding:0 5px;box-sizing:border-box;float:left}.metadataGrid__field-full{width:100%;padding:0}.metadataGrid__field-wide{width:66.666%}.metadataGrid__field-narrow{width:33.333%}.metadataGrid__field-half{width:50%}.metadataGrid__field-quarter{width:25%}.metadataGrid__field-wide:first-child,.metadataGrid__field-narrow:first-child{padding-left:0}.metadataGrid__field-wide:last-child,.metadataGrid__field-narrow:last-child{padding-right:0}", ""])
    },
    1928: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editMetadataTab__requiredCppFields{margin-bottom:38px}", ""])
    },
    1929: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".monetizationTerritories{margin-left:38px}.monetizationTerritories .g-options-row{overflow:visible}.monetizationTerritories__listItem{padding-bottom:16px}.monetizationTerritories__validation{margin-top:10px;display:none}.monetizationTerritories.m-invalid>.monetizationTerritories__validation{display:block}.monetizationTerritories__validationMessage{border-radius:4px}", ""])
    },
    1930: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".monetizationTerritory__territorySelect,.monetizationTerritory__rightsholderSelect{width:90%}.monetizationTerritory__rightsholderSelect{margin-top:4px}.monetizationTerritory__needsRightsholder,.monetizationTerritory__complete{position:relative}.monetizationTerritory__rightsholder{position:relative;padding-left:15px;padding-top:8px}.monetizationTerritory__rightsholder:before{content:'';height:14px;width:6px;display:block;position:absolute;top:2px;left:2px;border-left:1px solid #e4e4e4;border-bottom:1px solid #e4e4e4}.monetizationTerritory__remove{position:absolute;left:-44px;top:0;padding:8px 10px;width:25px;height:22px}.monetizationTerritory__removeButton{display:none}.monetizationTerritory:hover .monetizationTerritory__removeButton{display:block}", ""])
    },
    1936: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editPlaylistBasicTab{margin-top:25px;position:relative;min-height:305px}.editPlaylistBasicTab__fields{margin-left:278px}.editPlaylistBasicTab__afterDescription{padding:5px 0}.editPlaylistTracklistTab{margin-top:25px}", ""])
    },
    1937: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editTrackList{position:relative}.editTrackList__list.sortable-dragging-list{z-index:500}.editTrackList__item{position:relative}.editTrackList__list .sortable-placeholder{background:#f2f2f2;border-top:1px solid #f2f2f2;border-radius:4px}.editTrackList__list .sortable-placeholder+.editTrackList__item{border-top-color:transparent}.editTrackList__headerButtons{display:none}.editTrackList.m-long-playlist .editTrackList__headerButtons{display:block}.editTrackList__headerButtons>.sc-button{float:right;margin-right:0}", ""])
    },
    1938: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playlistEditTabs .tabs__tabs{padding:0}", ""])
    },
    1939: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".editTrackItem{position:relative;line-height:44px;border-radius:4px}.editTrackItem__image{position:relative;margin:7px 15px 0 0}.editTrackItem__play{position:absolute;top:4px;left:5px;line-height:1;display:none}.editTrackItem__content{cursor:move}.editTrackItem__additional{background:#fff;background:linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);position:absolute;right:0;top:0;padding:0 5px 0 22px}.editTrackItem__remove{margin-left:10px;overflow:hidden}.editTrackItem.m-hover,.editTrackItem.m-active{background-color:#f2f2f2;margin:-1px -12px;padding:1px 12px}.editTrackItem.m-active .editTrackItem__trackTitle{color:#f50}.editTrackItem.m-active .editTrackItem__trackTitle:hover,.editTrackItem.m-active .editTrackItem__trackTitle:focus{color:#f10}.editTrackItem.m-hover .editTrackItem__additional,.editTrackItem.m-active .editTrackItem__additional{background:#f2f2f2;background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px);right:12px;top:1px}.editTrackItem.m-hover .editTrackItem__play,.editTrackItem.m-active .editTrackItem__play{display:block}.editTrackItem.m-dragging{background-color:#fff;margin:-1px 0;padding:1px 0}.editTrackItem.m-dragging .editTrackItem__additional{background:#fff;background:linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);right:0}.editTrackItem.m-dragging .editTrackItem__play{display:none}", ""])
    },
    1940: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".restrictedEditForm__form{padding:20px 20px 0 20px}.restrictedEditForm__actions{margin:20px -25px 0;padding:20px 25px;border-top:1px solid #f2f2f2}.restrictedEditForm.m-failed .restrictedEditForm__actions{background-color:#f2f2f2;border-top:1px solid #e5e5e5}.restrictedEditForm__status{padding-bottom:0;color:#333}.restrictedEditForm__form .restrictedEditForm__retry{display:none}.restrictedEditForm.m-failed .restrictedEditForm__retry{display:inline-block}.restrictedEditForm.m-failed .restrictedEditForm__save{display:none}.restrictedEditForm__foot{border-top:1px solid #f2f2f2}.restrictedEditForm.m-failed .restrictedEditForm__foot{border-top:1px solid #e5e5e5}", ""])
    },
    1942: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundEditTabs .tabs__tabs{padding:0}", ""])
    },
    1944: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".inlineError{padding:15px;text-align:center}", ""])
    },
    1945: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-footer{padding:11px 0;font-size:11px;background:#fff;z-index:1}", ""])
    },
    1952: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.header{width:100%;font:100 14px/1.5 "Interstate","Lucida Grande",Arial,sans-serif;-webkit-transform:translateZ(0);-webkit-font-smoothing:subpixel-antialiased;background:#333;height:46px;top:0;transition:top .2s ease-in-out}.m-hideHeader .header{top:-46px}.header__inner{display:-webkit-flex;display:-ms-flexbox;display:flex}.header__middle{-webkit-flex:1;-ms-flex:1;flex:1}.header__navWrapper,.header__search,.header__right{display:none;visibility:hidden}.show .header__navWrapper,.show .header__search,.show .header__right{display:block;visibility:visible}.header__logo{background:#f50;background:linear-gradient(#f70,#f30)}.header__logoLink{background:url(' + n(730) + ') no-repeat 12px 11px;background-size:48px 22px;display:block;height:46px;width:69px}.header__logoLink-wordmark{width:184px}.header__logoLink-wordmark::after{content:"";display:inline-block;height:100%;width:100%;background:url(' + n(501) + ") no-repeat 60px 11px;background-size:115px 22px}.header__logoLink:focus{background-color:rgba(255,72,0,.8);outline:0}.header__navMenu>li{float:left;position:relative}.header__navMenu>li>a{display:block;padding:12px 0;width:104px;height:46px;border-right:1px solid #111;box-sizing:border-box;text-align:center}.header__navMenu>li>a:hover,.header__navMenu>li>a:focus{color:#eee;outline:0}.header__navMenu>li>a.selected,.header>li>a:focus{color:#fff!important;background-color:#111;outline:0}.header__link{padding:12px 10px 12px;float:left}.header__link.header__goUpsell{color:#f50}.header__link.header__goUpsell:hover,.header__link.header__goUpsell:focus,.header__link.header__goUpsell:active{color:#f70}.header__loginMenu{padding:9px 10px 10px 10px}.header__loginMenu .signupButton{margin-left:8px}.header__loginMenu .loginButton{float:left;margin-right:10px}.header__userNav{float:left;padding:0}.header__navMenu>li>a.header__moreButton{width:46px;height:46px;background:url(" + n(2262) + ") 50% 50% no-repeat;opacity:.75;border:0}.header__navMenu>li>a:hover,.header__navMenu>li>a:focus,.header__navMenu>li>a.header__moreButton.selected{opacity:1}.header__navMenu>li>a.header__moreButton.selected{background-color:#111}.header__notificationBadge{position:absolute;width:9px;height:9px;top:12px;right:9px}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.header__logoLink{background-image:url(" + n(731) + ")}.header__logoLink-wordmark::after{background-image:url(" + n(502) + ")}}", ""])
    },
    1953: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".moreMenu__list{border-bottom:1px solid #333}.moreMenu__link{display:block;padding:8px 10px}.moreMenu__link:hover{background-color:#333}.moreMenu__link.moreMenu__goUpsell{color:#f50}", ""])
    },
    1954: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".notificationIcon{width:100%;height:100%;position:relative}.selected .notificationIcon,.notificationIcon:hover,.notificationIcon:focus,.notificationIcon.newItems__some{outline:0}.notificationIcon:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;opacity:.75}.selected .notificationIcon:before,a:focus .notificationIcon:before,.notificationIcon:hover:before,.notificationIcon:focus:before{opacity:1}.notificationIcon.messages:before{background:url(" + n(2261) + ") 50% 50% no-repeat}.notificationIcon.activities:before{background:url(" + n(2258) + ") 50% 50% no-repeat}.notificationIcon__badge{z-index:1;position:absolute;width:7px;height:7px;top:12px;right:11px}.notificationIcon.activities .notificationIcon__badge{right:15px}", ""])
    },
    1955: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".profileMenu__list{background-color:#111}.profileMenu__list:not(:last-child){border-bottom:1px solid #333}.profileMenu__link{display:block;position:relative;padding:8px 10px 8px 33px}.profileMenu__link:hover,.profileMenu__link:focus{outline:0;color:#fff;background:#333}.profileMenu__link:after{content:'';background-repeat:no-repeat;background-position:center top;background-size:20px 20px;width:34px;height:20px;position:absolute;left:0;top:5px;opacity:.75}.profileMenu__profile:after{background-image:url(" + n(2273) + ");background-size:14px;background-position:center 3px}.profileMenu__sets:after{background-image:url(" + n(2266) + ");background-size:18px;background-position:9px 2px}.profileMenu__stations:after{background-image:url(" + n(2268) + ");background-size:18px 14px;background-position:center 4px}.profileMenu__likes:after{background-image:url(" + n(2265) + ");background-size:16px;background-position:center 2px}.profileMenu__following:after{background-image:url(" + n(2264) + ");background-size:19px}.profileMenu__friends:after{background-image:url(" + n(2263) + ");background-size:19px}.profileMenu__stats:after{background-image:url(" + n(2270) + ");background-size:14px;background-position:10px 3px}.profileMenu__premium:after{background-image:url(" + n(2267) + ");background-size:16px;background-position:center center}.profileMenu__trackManager:after{background-image:url(" + n(2271) + ")}.profileMenu__link:hover:after,.profileMenu__link:focus:after{opacity:1}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.profileMenu__trackManager:after{background-image:url(" + n(2272) + ")}.profileMenu__stations:after{background-image:url(" + n(2269) + ")}}", ""])
    },
    1956: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".uploadButton{display:block}.uploadButton__status{display:none;margin-left:.3em;color:#f50}.uploadButton.active .uploadButton__status{display:inline}.uploadButton.selected,.uploadButton:focus{color:#fff;outline:0}", ""])
    },
    1957: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userNav{box-sizing:border-box;height:46px}.userNav__item{float:left}.userNav__button{height:46px;box-sizing:border-box}.userNav__button:focus{outline:0}.userNav__item.selected,.userNav__button.selected{color:#FFF;background-color:#111}.userNav__avatar{margin-top:-2px;margin-right:10px}.userNav__activitiesButton,.userNav__messagesButton{width:46px}.userNav__messagesButton{border-right:0;border-radius:0 2px 2px 0}.userNav__usernameButton{float:left;padding:12px 28px 12px 10px;box-sizing:border-box;position:relative}.userNav__usernameButton:after{content:'';position:absolute;right:10px;top:21px;background-image:url(" + n(2259) + ");background-repeat:no-repeat;width:8px;height:5px;opacity:.75}.userNav__usernameButton:focus:after,.userNav__usernameButton:hover:after{opacity:1}.userNav__username{max-width:149px}@media (max-width:1079px){.userNav__usernameButton{width:auto}.userNav__avatar{margin-right:0}.userNav__username{display:none}}", ""])
    },
    1980: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".localeSelectorContent{background:#fff;overflow:hidden}.localeSelectorContent__wrapper{padding:25px 25px 15px 25px}.localeSelector__cancel{float:right;margin:30px 35px 30px 0}", ""])
    },
    2382: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return '      <div class="audibleTile__trackCount">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(618), {
                    name: "$view",
                    hash: {
                        size: "small",
                        showDuration: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n      </div>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            4: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        className: null != t ? t.tierIndicatorClassName : t,
                        variant: null != t ? t.tierIndicatorVariant : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n    "
            },
            6: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '    <div class="audibleTile__actions">\n' + (null != (o = n["if"].call(s, null != t ? t.hasLikeAction : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.hasOverflowActions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n"
            },
            7: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return (null != (s = i["if"].call(a, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(317), {
                    name: "$view",
                    hash: {
                        stretchIcon: null != t ? t.largeUI : t,
                        responsive: !1,
                        noStyle: !0,
                        lightFg: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: o
                })) + "\n" + (null != (s = i["if"].call(a, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            8: function(e, t, n, i, r) {
                return '          <span class="audibleTile__actionContainer">\n'
            },
            10: function(e, t, n, i, r) {
                return "          </span>\n"
            },
            12: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return (null != (s = i["if"].call(a, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(593), {
                    name: "$view",
                    hash: {
                        stretchIcon: null != t ? t.largeUI : t,
                        cornerStyle: "round",
                        actions: null != t ? t.overflowActions : t,
                        noStyle: !0,
                        lightFg: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: o
                })) + "\n" + (null != (s = i["if"].call(a, null != t ? t.largeUI : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            14: function(e, t, n, i, r) {
                return '      <span class="sc-icon sc-icon-large sc-icon-like audibleTile__mainHeadingLike"></span>\n'
            },
            16: function(e, t, n, i, r) {
                return '      <span class="sc-icon sc-icon-medium sc-icon-lock audibleTile__mainHeadingPrivate"></span>\n'
            },
            18: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(617), {
                    name: "$view",
                    hash: {
                        showYearOnly: !0,
                        className: "audibleTile__releaseData",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="audibleTile__artwork">\n  <a class="audibleTile__artworkLink" href="' + c((n(58) || t && t.$route || u).call(l, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n    <div class="audibleTile__image">\n      ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        lazyLoading: null != (s = null != t ? t._options : t) ? s.lazyLoadImage : s,
                        stretch: !0,
                        size: 200,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n    </div>\n" + (null != (s = i["if"].call(l, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(3, o, 0),
                    data: o
                })) ? s : "") + '  </a>\n\n  <div class="audibleTile__playButton g-z-index-content">\n    ' + c((n(53) || t && t.$view || u).call(l, n(207), {
                    name: "$view",
                    hash: {
                        size: "stretch",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n\n" + (null != (s = i["if"].call(l, null != t ? t.hasActions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</div>\n\n<div class="audibleTile__description">\n  <a class="audibleTile__heading audibleTile__mainHeading audibleTile__audibleHeading sc-truncate sc-type-light sc-font-light sc-link-dark" href="' + c((n(58) || t && t.$route || u).call(l, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">\n' + (null != (s = i["if"].call(l, null != t ? t.isLike : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "\n" + (null != (s = i["if"].call(l, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    " + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '\n  </a>\n  <div class="audibleTile__usernameHeadingContainer sc-type-light sc-font-light">\n    <a class="audibleTile__usernameHeading sc-link-light sc-truncate" href="' + c((n(58) || t && t.$route || u).call(l, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + c(e.lambda(null != (s = null != t ? t.user : t) ? s.username : s, t)) + "</a>\n" + (null != (s = i["if"].call(l, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2384: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return 'checked="checked"'
            },
            3: function(e, t, n, i, r) {
                return 'disabled="disabled"'
            },
            5: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = e.lambda,
                    a = e.escapeExpression,
                    l = null != t ? t : {};
                return '<input\n  type="checkbox"\n  name="' + a(s(null != (o = null != t ? t._options : t) ? o.name : o, t)) + '"\n  class="sc-checkbox-input sc-visuallyhidden"\n  ' + (null != (o = n["if"].call(l, null != (o = null != t ? t._options : t) ? o.checked : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n  " + (null != (o = n["if"].call(l, null != (o = null != t ? t._options : t) ? o.disabled : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n>\n<div class="sc-checkbox-check"></div>\n<span class="sc-checkbox-label' + (null != (o = n.unless.call(l, null != (o = null != t ? t._options : t) ? o.showLabel : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">' + a(s(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</span>\n"
            },
            useData: !0
        })
    },
    2385: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <span class="compactTrackListItem__number">' + e.escapeExpression((o = null != (o = n.track_number || (null != t ? t.track_number : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "track_number",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return '    <span class="compactTrackListItem__user">' + e.escapeExpression(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + " - </span>\n"
            },
            5: function(e, t, n, i, r) {
                var o;
                return '    <span class="g-geoblocked-icon sc-font-light">' + e.escapeExpression((o = null != (o = n.blockedMsg || (null != t ? t.blockedMsg : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "blockedMsg",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            7: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.showPlaybackCount : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            8: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        variant: "list",
                        resource_id: null != t ? t._resource_id : t,
                        className: "compactTrackListItem__tierIndicator"
                    },
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                return '      <span class="compactTrackListItem__plays sc-ministats sc-ministats-small sc-ministats-plays">\n        ' + e.escapeExpression((n(208) || t && t.$formatStatNumber || i.helperMissing).call(null != t ? t : {}, null != t ? t.playback_count : t, {
                    name: "$formatStatNumber",
                    hash: {},
                    data: o
                })) + "\n      </span>\n"
            },
            12: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return '    <button class="compactTrackListItem__remove g-button-remove-compact">\n      ' + e.escapeExpression((n(96) || t && t.$a11y || a).call(s, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || a).call(s, "remove track", {
                            name: "$t",
                            hash: {},
                            data: o
                        })
                    },
                    data: o
                })) + "\n    </button>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="compactTrackListItem__image">\n  ' + c((n(197) || t && t.$image || u).call(l, t, {
                    name: "$image",
                    hash: {
                        size: 20
                    },
                    data: o
                })) + "\n</div>\n" + (null != (s = i["if"].call(l, null != t ? t.showTrackNumber : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '<div class="compactTrackListItem__content sc-truncate">\n' + (null != (s = i["if"].call(l, null != (s = null != t ? t._options : t) ? s.showUser : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <span class="compactTrackListItem__trackTitle">\n    ' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '\n  </span>\n</div>\n<div class="compactTrackListItem__additional g-flex-row-centered">\n' + (null != (s = i["if"].call(l, null != t ? t.showBlockedMsg : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.program(7, o, 0),
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(l, null != (s = null != t ? t._options : t) ? s.showRemoveButton : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2386: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return "    " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.confirmText : o, t)) ? o : "") + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = e.lambda,
                    u = e.escapeExpression;
                return '<div class="confirmableForm__text">\n' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.confirmText : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</div>\n<div class="confirmableForm__actions">\n  <button type="submit" class="sc-button sc-button-' + u(l(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '">' + u(l(null != (s = null != t ? t._options : t) ? s.confirmButton : s, t)) + '</button>\n  <button type="reset" class="sc-button sc-button-nostyle sc-button-' + u(l(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '">' + u((n(51) || t && t.$t || i.helperMissing).call(a, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2387: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return "    " + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.text : o, t)) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<div class="dialog__content">\n' + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.text : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '</div>\n<div class="dialog__arrow"></div>\n'
            },
            useData: !0
        })
    },
    2389: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return " checked"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression,
                    d = e.lambda;
                return "<" + c((s = null != (s = n.tagName || (null != t ? t.tagName : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : s)) + ' class="blockCheckbox__label">\n  <label class="blockCheckbox__checkbox">\n    <div class="blockCheckbox__icon sc-border-box"></div>\n    <input class="blockCheckbox__control sc-visuallyhidden" id="' + c((s = null != (s = n.inputId || (null != t ? t.inputId : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "inputId",
                    hash: {},
                    data: r
                }) : s)) + '" type="checkbox"' + (null != (o = n["if"].call(a, null != t ? t._value : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n  </label>\n  <div class="blockCheckbox__content">\n    <label class="blockCheckbox__title" for="' + c((s = null != (s = n.inputId || (null != t ? t.inputId : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "inputId",
                    hash: {},
                    data: r
                }) : s)) + '">' + c(d(null != (o = null != t ? t._options : t) ? o.label : o, t)) + '</label>\n    <div class="blockCheckbox__blockContent">\n      ' + c(d(null != (o = null != t ? t._options : t) ? o.blockContent : o, t)) + "\n    </div>\n  </div>\n</" + c((s = null != (s = n.tagName || (null != t ? t.tagName : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "tagName",
                    hash: {},
                    data: r
                }) : s)) + ">\n"
            },
            useData: !0
        })
    },
    2390: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "  " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(1364), {
                    name: "$view",
                    hash: {
                        key: "addTerritory",
                        showAllItems: !1,
                        placeholder: (n(51) || t && t.$t || a).call(s, "Country or continent", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        label: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "countries__addTerritory"
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <li class="countries__territory">\n      <div class="countries__title sc-truncate">' + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n      <button class="countries__remove g-button-remove-compact" name="remove" data-id="' + c((s = null != (s = i.value || (null != t ? t.value : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "value",
                    hash: {},
                    data: o
                }) : s)) + '">\n        ' + c((n(96) || t && t.$a11y || l).call(a, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(a, "remove continent", {
                            name: "$t",
                            hash: {
                                _comment: "remove continent from list button"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n      </button>\n    </li>\n"
            },
            5: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <li class="countries__territory">\n      <div class="countries__title sc-truncate">' + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n      <button class="countries__remove g-button-remove-compact" name="remove" data-id="' + c((s = null != (s = i.value || (null != t ? t.value : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "value",
                    hash: {},
                    data: o
                }) : s)) + '">\n        ' + c((n(96) || t && t.$a11y || l).call(a, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(a, "remove country", {
                            name: "$t",
                            hash: {
                                _comment: "remove country from list button"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n      </button>\n    </li>\n"
            },
            7: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="countries__exceptions sc-border-light-top">\n    Add exceptions' + (null != (s = i.unless.call(a, null != t ? t.isWorldwide : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + ":\n    " + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(475), {
                    name: "$view",
                    hash: {
                        regions: null != (s = null != t ? t.territories : t) ? s.regions : s,
                        key: "addException",
                        showAllItems: !1,
                        placeholder: (n(51) || t && t.$t || l).call(a, "Country", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        label: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "countries__addException"
                    },
                    data: o
                })) + '\n    <ul class="sc-list-nostyle">\n' + (null != (s = i.each.call(a, null != (s = null != t ? t.territories : t) ? s.exceptions : s, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </ul>\n  </div>\n"
            },
            8: function(e, t, n, i, r) {
                return " for continents"
            },
            10: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '        <li class="countries__territory">\n          <div class="countries__title sc-truncate">' + c((s = null != (s = i.title || (null != t ? t.title : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "title",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n          <button class="countries__remove g-button-remove-compact" name="add" data-id="' + c((s = null != (s = i.value || (null != t ? t.value : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "value",
                    hash: {},
                    data: o
                }) : s)) + '">\n            ' + c((n(96) || t && t.$a11y || l).call(a, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || l).call(a, "remove exception", {
                            name: "$t",
                            hash: {
                                _comment: "Remove country exception"
                            },
                            data: o
                        })
                    },
                    data: o
                })) + "\n          </button>\n        </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n.unless.call(s, null != t ? t.isWorldwide : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<ul class="countries__territories">\n' + (null != (o = n.each.call(s, null != (o = null != t ? t.territories : t) ? o.regions : o, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(s, null != (o = null != t ? t.territories : t) ? o.countries : o, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "</ul>\n\n" + (null != (o = n["if"].call(s, null != (o = null != t ? t.territories : t) ? o.regions : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    2391: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <div>\n    <span class="datetime__label' + (null != (o = n.unless.call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</span>\n"
            },
            2: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            4: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(1366), {
                    name: "$view",
                    hash: {
                        placeholder: (n(51) || t && t.$t || l).call(a, "Time zone", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: "small",
                        key: "timezone",
                        field: null != (s = null != t ? t._options : t) ? s.timezoneField : s,
                        Form: null != (s = null != t ? t._options : t) ? s.Form : s,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            6: function(e, t, n, i, r) {
                return "  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '\n<div class="datetime__inputWrapper">\n  <div class="datetime__fields">\n    <div class="datetime__dateandtime">\n      ' + u((n(53) || t && t.$view || l).call(a, n(569), {
                    name: "$view",
                    hash: {
                        key: "date",
                        minDate: null != (s = null != t ? t._options : t) ? s.minDate : s,
                        defaultDate: null != (s = null != t ? t._options : t) ? s.defaultDate : s,
                        field: null != (s = null != t ? t._options : t) ? s.localDateField : s,
                        Form: null != (s = null != t ? t._options : t) ? s.Form : s,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n      <span class="datetime__at">' + u((n(51) || t && t.$t || l).call(a, "at", {
                    name: "$t",
                    hash: {
                        _comment: "For example, 12/25/2017 at 12:45pm"
                    },
                    data: o
                })) + "</span>\n      " + u((n(53) || t && t.$view || l).call(a, n(1365), {
                    name: "$view",
                    hash: {
                        key: "time",
                        field: null != (s = null != t ? t._options : t) ? s.localDateField : s,
                        Form: null != (s = null != t ? t._options : t) ? s.Form : s,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n      <div class="datetime__validation g-input-validation g-input-validation-hidden"></div>\n    </div>\n' + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.timezoneField : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n</div>\n\n" + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2392: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="isrcField__createIsrc">\n    ' + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(91), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(a, "Create an ISRC for this track.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        showLabel: null != t ? t.showCreateISRCLabel : t,
                        field: "publisherIsrcGenerated",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != (s = null != t ? t._options : t) ? s.Form : s
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '<div class="isrcField__textfield">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherIsrc",
                        hintHTML: null != t ? t.isrcFieldHint : t,
                        label: null != t ? t.isrcFieldLabel : t,
                        placeholder: null != t ? t.isrcFieldPlaceholder : t,
                        field: "publisherIsrc",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != (s = null != t ? t._options : t) ? s.Form : s
                    },
                    data: o
                })) + "\n</div>\n\n" + (null != (s = i["if"].call(a, null != t ? t.allowIsrcGeneration : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2393: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r, o, s) {
                var a, l, u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function",
                    h = e.escapeExpression;
                return '  <label class="radioGroup__radio sc-radio">\n    <input class="sc-radio-input sc-visuallyhidden" type="radio" value="' + h((l = null != (l = n.value || (null != t ? t.value : t)) ? l : c, typeof l === d ? l.call(u, {
                    name: "value",
                    hash: {},
                    data: r
                }) : l)) + '" name="' + h(e.lambda(null != s[1] ? s[1].groupName : s[1], t)) + '">\n    <div class="sc-radio-radio radioGroup__radioRadio"></div>\n    <span class="radioGroup__label">\n      ' + h((l = null != (l = n.label || (null != t ? t.label : t)) ? l : c, typeof l === d ? l.call(u, {
                    name: "label",
                    hash: {},
                    data: r
                }) : l)) + "\n" + (null != (a = n["if"].call(u, null != t ? t.sublabel : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0, o, s),
                    inverse: e.noop,
                    data: r
                })) ? a : "") + "    </span>\n  </label>\n"
            },
            2: function(e, t, n, i, r) {
                var o;
                return '        <span class="radioGroup__sublabel">' + e.escapeExpression((o = null != (o = n.sublabel || (null != t ? t.sublabel : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "sublabel",
                    hash: {},
                    data: r
                }) : o)) + "</span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r, o, s) {
                var a;
                return (null != (a = n.each.call(null != t ? t : {}, null != t ? t.buttons : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, r, 0, o, s),
                    inverse: e.noop,
                    data: r
                })) ? a : "") + '<div class="radioGroup__validation g-input-validation g-input-validation-hidden"></div>\n'
            },
            useData: !0,
            useDepths: !0
        })
    },
    2394: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <label>\n    <div class="select__labelText">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</div>\n" + (null != (o = n["if"].call(null != t ? t : {}, null != (o = null != t ? t._options : t) ? o.hintHTML : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            2: function(e, t, i, r, o) {
                var s;
                return null != (s = (n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(142), {
                    name: "$view",
                    hash: {
                        size: "tiny"
                    },
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : ""
            },
            3: function(e, t, n, i, r) {
                var o;
                return "        " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.hintHTML : o, t)) ? o : "") + "\n"
            },
            5: function(e, t, n, i, r) {
                return '    <div class="select__linkMenuPlaceholder"></div>\n  '
            },
            7: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '\n    <select class="select__select sc-select sc-select-' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '">\n' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.showBlank : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(s, null != t ? t.options : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </select>\n"
            },
            8: function(e, t, n, i, r) {
                var o;
                return '        <option value="">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.blankText : o, t)) + "</option>\n"
            },
            10: function(e, t, n, i, r) {
                var o, s = null != t ? t : {},
                    a = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '        <option value="' + u((o = null != (o = n.value || (null != t ? t.value : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "value",
                    hash: {},
                    data: r
                }) : o)) + '">' + u((o = null != (o = n.label || (null != t ? t.label : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "label",
                    hash: {},
                    data: r
                }) : o)) + "</option>\n"
            },
            12: function(e, t, n, i, r) {
                return "  </label>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="select__wrapper">\n' + (null != (o = n["if"].call(s, null != t ? t.style_is_linkMenu : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : "") + '  <div class="select__validation g-input-validation g-input-validation-hidden"></div>\n</div>\n\n' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    2395: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '  <label for="' + c((s = null != (s = n._controlId || (null != t ? t._controlId : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : s)) + '">\n    <span class="textfield__label' + (null != (o = n.unless.call(a, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '"> ' + c((s = null != (s = n._label || (null != t ? t._label : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "_label",
                    hash: {},
                    data: r
                }) : s)) + "</span>\n" + (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.hintHTML : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </label>\n"
            },
            2: function(e, t, n, i, r) {
                return " sc-visuallyhidden"
            },
            4: function(e, t, i, r, o) {
                var s;
                return null != (s = (n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(142), {
                    name: "$view",
                    hash: {
                        size: "tiny"
                    },
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : ""
            },
            5: function(e, t, n, i, r) {
                var o;
                return "        " + (null != (o = e.lambda(null != (o = null != t ? t._options : t) ? o.hintHTML : o, t)) ? o : "") + "\n"
            },
            7: function(e, t, n, i, r) {
                var o, s, a = e.lambda,
                    l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function";
                return '    <textarea\n      class="textfield__input sc-input sc-input-' + l(a(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '"\n      id="' + l((s = null != (s = n._controlId || (null != t ? t._controlId : t)) ? s : c, typeof s === d ? s.call(u, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : s)) + '"\n      rows=' + l(a(null != (o = null != t ? t._options : t) ? o.rows : o, t)) + "\n      " + (null != (o = n["if"].call(u, null != t ? t.readOnly : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.name : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n    >" + l((s = null != (s = n._value || (null != t ? t._value : t)) ? s : c, typeof s === d ? s.call(u, {
                    name: "_value",
                    hash: {},
                    data: r
                }) : s)) + "</textarea>\n"
            },
            8: function(e, t, n, i, r) {
                return 'readonly="readonly"'
            },
            10: function(e, t, n, i, r) {
                return 'disabled="disabled"'
            },
            12: function(e, t, n, i, r) {
                var o;
                return 'name="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.name : o, t)) + '"'
            },
            14: function(e, t, n, i, r) {
                var o;
                return 'placeholder="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.placeholder : o, t)) + '"'
            },
            16: function(e, t, n, i, r) {
                var o, s, a = e.lambda,
                    l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function";
                return '    <input\n      class="textfield__input sc-input sc-input-' + l(a(null != (o = null != t ? t._options : t) ? o.size : o, t)) + '"\n      id="' + l((s = null != (s = n._controlId || (null != t ? t._controlId : t)) ? s : c, typeof s === d ? s.call(u, {
                    name: "_controlId",
                    hash: {},
                    data: r
                }) : s)) + '"\n      type="' + l(a(null != (o = null != t ? t._options : t) ? o.type : o, t)) + '"\n      value="' + l((s = null != (s = n._value || (null != t ? t._value : t)) ? s : c, typeof s === d ? s.call(u, {
                    name: "_value",
                    hash: {},
                    data: r
                }) : s)) + '"\n      ' + (null != (o = n["if"].call(u, null != t ? t.readOnly : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != t ? t.disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.name : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.maxlength : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n      " + (null != (o = n["if"].call(u, null != (o = null != t ? t._options : t) ? o.autocomplete : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "\n    >\n"
            },
            17: function(e, t, n, i, r) {
                var o;
                return 'maxlength="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.maxlength : o, t)) + '"'
            },
            19: function(e, t, n, i, r) {
                var o;
                return 'autocomplete="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.autocomplete : o, t)) + '"'
            },
            21: function(e, t, i, r, o) {
                return '    <button\n      type="button"\n      class="textfield__clear"\n      title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Clear", {
                    name: "$t",
                    hash: {
                        _comment: "Clear a textbox of its content",
                        _context: "verb"
                    },
                    data: o
                })) + '"\n    ></button>\n'
            },
            23: function(e, t, i, r, o) {
                return '    <button\n      type="button"\n      class="textfield__applyAll"\n      title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Apply to all", {
                    name: "$t",
                    hash: {
                        _comment: "Apply the content of a textfield to all other textfields in a column"
                    },
                    data: o
                })) + '"\n    ></button>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t._label : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="textfield__inputWrapper">\n' + (null != (o = n["if"].call(s, null != t ? t.isTextarea : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.program(16, r, 0),
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.clearButton : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.applyAllButton : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  <div class="textfield__validation g-input-validation g-input-validation-hidden"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    2396: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, s = e.lambda,
                    a = e.escapeExpression;
                return '  <label class="tokenInput__label" for="tokenInput__' + a(s(null != (o = null != t ? t._options : t) ? o.field : o, t)) + '">' + a(s(null != (o = null != t ? t._options : t) ? o.label : o, t)) + "</label>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return 'placeholder="' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.placeholder : o, t)) + '"'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.label : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n<div class="tokenInput__wrapper sc-input">\n  <div class="tokenInput__inputContainer">\n    <input\n      type="text"\n      class="tokenInput__input"\n      id="tokenInput__' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.field : o, t)) + '"\n      ' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.placeholder : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '\n    >\n  </div>\n</div>\n<div class="tokenInput__validation g-input-validation g-input-validation-hidden"></div>\n'
            },
            useData: !0
        })
    },
    2397: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s;
                return '  <div class="genericTrackCount__duration sc-font-tabular sc-type-small sc-type-light">' + e.escapeExpression((n(1790) || t && t.$timecode || i.helperMissing).call(null != t ? t : {}, null != (s = null != t ? t._options : t) ? s.duration : s, {
                    name: "$timecode",
                    hash: {},
                    data: o
                })) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = e.escapeExpression,
                    l = null != t ? t : {};
                return '<div class="genericTrackCount__title sc-font-tabular">' + a(e.lambda(null != (s = null != t ? t._options : t) ? s.trackCount : s, t)) + '</div>\n<div class="genericTrackCount__subtitle sc-font">\n  ' + a((n(186) || t && t.$tp || i.helperMissing).call(l, null != (s = null != t ? t._options : t) ? s.trackCount : s, "Track", "Tracks", {
                    name: "$tp",
                    hash: {},
                    data: o
                })) + "\n</div>\n" + (null != (s = i["if"].call(l, null != t ? t.showDuration : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2398: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="backgroundGradient__buffer"></div>\n<div class="backgroundGradient__buffer backgroundGradient__hidden"></div>\n<div class="backgroundGradient__imageOverlay"></div>\n'
            },
            useData: !0
        })
    },
    2399: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = e.lambda,
                    a = e.escapeExpression;
                return '<button class="imageChooser__chooseButton sc-button sc-button-translucent ' + a(s(null != (o = null != t ? t._options : t) ? o.buttonClass : o, t)) + '">' + a(s(null != (o = null != t ? t._options : t) ? o.text : o, t)) + '</button>\n<input class="imageChooser__fileInput sc-visuallyhidden" type="file" accept="image/jpeg,image/pjpeg,image/gif,image/png">\n'
            },
            useData: !0
        })
    },
    2400: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return " imageCrop__previewBackground"
            },
            3: function(e, t, n, i, r) {
                return '      <div class="imageCrop__preview imageCrop__previewRounded"></div>\n'
            },
            5: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '      <button class="sc-button sc-button-medium sc-button-nostyle imageCrop__cancelButton">' + l((n(51) || t && t.$t || a).call(s, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</button>\n      <button class="sc-button sc-button-medium sc-button-cta imageCrop__saveButton">' + l((n(51) || t && t.$t || a).call(s, "Save", {
                    name: "$t",
                    hash: {
                        _comment: "Label for button to save a form"
                    },
                    data: o
                })) + "</button>\n"
            },
            7: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(983), {
                    name: "$view",
                    hash: {
                        buttonClass: "",
                        text: (n(51) || t && t.$t || a).call(s, "Replace image", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        standAlone: !1
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '<div class="imageCrop__cropper">\n  <div class="imageCrop__previewContainer sc-artwork">\n    <div class="imageCrop__preview' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.showRoundOverlay : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '"></div>\n' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.showRoundOverlay : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  </div>\n</div>\n<div class="imageCrop__bottom g-flex-row-centered-right">\n  <div class="imageCrop__zoomContainer">\n    <div class="imageCrop__zoom">\n      <button class="imageCrop__zoomControl imageCrop__zoomControlMinus">-</button>\n      <input type="range" class="imageCrop__zoomSlider g-range-input">\n      <button class="imageCrop__zoomControl imageCrop__zoomControlPlus">+</button>\n    </div>\n  </div>\n  <div class="imageCrop__smallImage imageCrop__smallHint sc-orange g-icon-warning"></div>\n  <div class="imageCrop__error sc-type-small sc-orange"></div>\n  <div class="imageCrop__mainButtons sc-button-toolbar g-flex-row-centered">\n' + (null != (o = n["if"].call(s, null != (o = null != t ? t._options : t) ? o.standAlone : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? o : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2402: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s;
                return "  " + e.escapeExpression((n(197) || t && t.$image || i.helperMissing).call(null != t ? t : {}, t, {
                    name: "$image",
                    hash: {
                        forceSquare: null != (s = null != t ? t._options : t) ? s.forceSquare : s,
                        stretch: null != (s = null != t ? t._options : t) ? s.stretch : s,
                        "class": "image__placeholder",
                        size: null != t ? t.size : t,
                        src: null != t ? t.placeholderUrl : t
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s;
                return '  <div class="image__button">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(983), {
                    name: "$view",
                    hash: {
                        standAlone: null != (s = null != t ? t._options : t) ? s.uploadImageAutomatically : s,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return (null != (s = i["if"].call(a, null != t ? t.placeholderUrl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + e.escapeExpression((n(197) || t && t.$image || i.helperMissing).call(a, t, {
                    name: "$image",
                    hash: {
                        forceSquare: null != (s = null != t ? t._options : t) ? s.forceSquare : s,
                        stretch: null != (s = null != t ? t._options : t) ? s.stretch : s,
                        "class": "image__full",
                        useResourceUrl: null != t ? t.useResourceUrl : t,
                        size: null != t ? t.size : t,
                        src: null != t ? t.src : t
                    },
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.editable : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2403: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '        <section class="linkMenu__group">\n' + (null != (o = n["if"].call(s, null != t ? t.title : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '          <ul class="sc-list-nostyle ' + (null != (o = n["if"].call(s, null != t ? t.isBold : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '">\n' + (null != (o = n.each.call(s, null != t ? t.links : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(6, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "          </ul>\n        </section>\n"
            },
            2: function(e, t, n, i, r) {
                var o;
                return '            <h3 class="sc-border-light-bottom linkMenu__groupTitle sc-type-light">' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "title",
                    hash: {},
                    data: r
                }) : o)) + "</h3>\n"
            },
            4: function(e, t, n, i, r) {
                return "linkMenu__bold"
            },
            6: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '              <li class="' + (null != (o = n["if"].call(a, null != t ? t.active : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + 'linkMenu__item sc-type-small">\n                <a class="sc-link-dark sc-truncate g-block" href="' + c((s = null != (s = n.href || (null != t ? t.href : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "href",
                    hash: {},
                    data: r
                }) : s)) + '" data-link-id="' + c((s = null != (s = n.id || (null != t ? t.id : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "id",
                    hash: {},
                    data: r
                }) : s)) + '">' + c((s = null != (s = n.label || (null != t ? t.label : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "label",
                    hash: {},
                    data: r
                }) : s)) + "</a>\n              </li>\n"
            },
            7: function(e, t, n, i, r) {
                return "linkMenu__activeItem "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return '<div class="g-scrollable linkMenu__scrollable">\n  <div class="g-scrollable-inner">\n    <div class="linkMenu__list">\n' + (null != (o = n.each.call(null != t ? t : {}, null != t ? t.groups : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2412: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <button class="announcement__ack sc-media-right sc-button sc-button-medium">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.ackText : o, t)) + "</button>\n"
            },
            3: function(e, t, i, r, o) {
                return '  <a href="" class="announcement__dismiss" aria-role="button" title="' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Dismiss", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '"></a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {};
                return (null != (o = n["if"].call(a, null != (o = null != t ? t._options : t) ? o.ackText : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? o : "") + '<span class="announcement__message">' + (null != (s = null != (s = n.message || (null != t ? t.message : t)) ? s : n.helperMissing, o = "function" == typeof s ? s.call(a, {
                    name: "message",
                    hash: {},
                    data: r
                }) : s) ? o : "") + "</span>\n\n"
            },
            useData: !0
        })
    },
    2413: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1680), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(a, n(1481), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n" + u((n(53) || t && t.$view || l).call(a, n(1394), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + '\n\n<div id="content" class="l-container l-content" role="main"></div>\n\n' + u((n(53) || t && t.$view || l).call(a, n(1559), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(a, null != t ? t.showStagingMenu : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "\n" + u((n(53) || t && t.$view || l).call(a, n(1583), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + "\n\n"
            },
            useData: !0
        })
    },
    2423: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="readMoreTile__tile">\n  ' + c((n(53) || t && t.$view || u).call(l, n(244), {
                    name: "$view",
                    hash: {
                        resource_type: null != (s = null != (s = null != t ? t._options : t) ? s.subviewArgs : s) ? s.resource_type : s,
                        resource_id: null != (s = null != (s = null != t ? t._options : t) ? s.subviewArgs : s) ? s.resource_id : s
                    },
                    data: o
                })) + '\n</div>\n\n<a class="readMoreTile__countWrapper sc-type-h3 sc-link-dark" href="' + c((a = null != (a = i.href || (null != t ? t.href : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "href",
                    hash: {},
                    data: o
                }) : a)) + '">\n  <span class="readMoreTile__count">' + c((a = null != (a = i.readMoreText || (null != t ? t.readMoreText : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "readMoreText",
                    hash: {},
                    data: o
                }) : a)) + "</span>\n</a>\n"
            },
            useData: !0
        })
    },
    2424: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="readMoreTile__tile">\n  ' + c((n(53) || t && t.$view || u).call(l, n(492), {
                    name: "$view",
                    hash: {
                        resource_type: null != (s = null != (s = null != t ? t._options : t) ? s.subviewArgs : s) ? s.resource_type : s,
                        resource_id: null != (s = null != (s = null != t ? t._options : t) ? s.subviewArgs : s) ? s.resource_id : s
                    },
                    data: o
                })) + '\n</div>\n\n<a class="readMoreTile__countWrapper sc-type-h3 sc-link-dark" href="' + c((a = null != (a = i.href || (null != t ? t.href : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "href",
                    hash: {},
                    data: o
                }) : a)) + '">\n  <span class="readMoreTile__count">' + c((a = null != (a = i.readMoreText || (null != t ? t.readMoreText : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "readMoreText",
                    hash: {},
                    data: o
                }) : a)) + "</span>\n</a>\n"
            },
            useData: !0
        })
    },
    2425: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return '  <div class="commentForm__wrapper commentForm__transition">\n    <div class="commentForm__avatar">\n' + (null != (s = i["if"].call(l, null != t ? t.isLarge : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.program(4, o, 0),
                    data: o
                })) ? s : "") + '    </div>\n    <div class="commentForm__inputWrapper sc-border-box">\n      <a class="commentForm__recipient" href="#"></a>\n      <input\n        type="text"\n        title="' + d((a = null != (a = i.inputTitle || (null != t ? t.inputTitle : t)) ? a : u, typeof a === c ? a.call(l, {
                    name: "inputTitle",
                    hash: {},
                    data: o
                }) : a)) + '"\n        placeholder="' + d((a = null != (a = i.inputTitle || (null != t ? t.inputTitle : t)) ? a : u, typeof a === c ? a.call(l, {
                    name: "inputTitle",
                    hash: {},
                    data: o
                }) : a)) + '"\n        value="' + d((a = null != (a = i.body || (null != t ? t.body : t)) ? a : u, typeof a === c ? a.call(l, {
                    name: "body",
                    hash: {},
                    data: o
                }) : a)) + '"\n        class="commentForm__input sc-border-box"\n      />\n    </div>\n  </div>\n  <div class="commentForm__inputMessage g-input-validation g-input-validation-hidden">\n    ' + d((n(51) || t && t.$t || u).call(l, "Comment must not exceed [[maxLength]] characters", {
                    name: "$t",
                    hash: {
                        maxLength: null != t ? t.maxLength : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            2: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(197) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        key: "avatar",
                        size: 40
                    },
                    data: o
                })) + "\n"
            },
            4: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(197) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        key: "avatar",
                        size: 20
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.isVisible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            useData: !0
        })
    },
    2427: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s;
                return '<div class="commentPlaceholder__avatar">\n  ' + e.escapeExpression((n(197) || t && t.$image || i.helperMissing).call(null != t ? t : {}, null != t ? t.me : t, {
                    name: "$image",
                    hash: {
                        forceSquare: !0,
                        size: null != (s = null != t ? t._options : t) ? s.avatarSize : s,
                        "aria-hidden": "true"
                    },
                    data: o
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2428: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s, a = e.escapeExpression,
                    l = e.lambda;
                return '<div class="commentPopover__scrub">\n  <div class="commentPopover__playableArea" style="width: ' + a((s = null != (s = n.playablePercentage || (null != t ? t.playablePercentage : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "playablePercentage",
                    hash: {},
                    data: r
                }) : s)) + '%"></div>\n</div>\n\n<div class="commentPopover__wrapper g-opacity-transition">\n  <div class="commentPopover__avatar sc-artwork" style="width: ' + a(l(null != (o = null != t ? t._options : t) ? o.avatarSize : o, t)) + "px; height: " + a(l(null != (o = null != t ? t._options : t) ? o.avatarSize : o, t)) + 'px;"></div>\n  <a class="commentPopover__username sc-truncate" href=""></a>\n  <p class="commentPopover__body sc-truncate"></p>\n</div>\n'
            },
            useData: !0
        })
    },
    2430: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return "  " + l((n(53) || t && t.$view || a).call(s, n(176), {
                    name: "$view",
                    hash: {
                        className: "deleteCommentForm__spam sc-text-light",
                        label: (n(51) || t && t.$t || a).call(s, "Also report comment as spam.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        name: "is_spam"
                    },
                    data: o
                })) + "\n  " + l((n(53) || t && t.$view || a).call(s, n(176), {
                    name: "$view",
                    hash: {
                        className: "deleteCommentForm__spam sc-text-light",
                        label: (n(51) || t && t.$t || a).call(s, "Also block and report user as spam.", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        name: "is_user_spam"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(51) || t && t.$t || l).call(a, "Do you really want to remove this comment?", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "<br>\n\n" + (null != (s = i.unless.call(a, null != t ? t.isMine : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '\n<div class="deleteCommentForm__actions">\n  <button type="reset"  class="sc-button sc-button-small">' + u((n(51) || t && t.$t || l).call(a, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</button>\n  <button type="submit" class="sc-button sc-button-small">' + u((n(51) || t && t.$t || l).call(a, "Yes", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2443: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t.isAd : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '  <section class="dashbox__wrapper">\n' + (null != (o = n["if"].call(s, null != t ? t.isVisualDashbox : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.isStandardDashbox : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </section>\n"
            },
            2: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="dashbox__header sc-border-light-bottom">\n      <h3 class="sc-type-light">\n        <span>\n          ' + l((n(51) || t && t.$t || a).call(s, "Advertisement", {
                    name: "$t",
                    hash: {
                        _comment: "Sidebar module title"
                    },
                    data: o
                })) + '\n        </span>\n        <a href="#" class="sc-link-light sc-right">\n          ' + l((n(51) || t && t.$t || a).call(s, "Why ads?", {
                    name: "$t",
                    hash: {
                        _comment: "Sidebar module `Advertisement` help text, opens modal with explanation"
                    },
                    data: o
                })) + "\n        </a>\n      </h3>\n    </div>\n"
            },
            4: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <a class="dashbox__visual" href="' + c((s = null != (s = n.landing_page || (null != t ? t.landing_page : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "landing_page",
                    hash: {},
                    data: r
                }) : s)) + '" ' + (null != (o = n["if"].call(a, null != t ? t.openInNewTab : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n        <img src="' + c((s = null != (s = n.ad_visual || (null != t ? t.ad_visual : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "ad_visual",
                    hash: {},
                    data: r
                }) : s)) + '" height="250" width="300">\n      </a>\n'
            },
            5: function(e, t, n, i, r) {
                return 'target="_blank"'
            },
            7: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <a class="dashbox__box sc-background-light" href="' + c((s = null != (s = n.click_through_url || (null != t ? t.click_through_url : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "click_through_url",
                    hash: {},
                    data: r
                }) : s)) + '" ' + (null != (o = n["if"].call(a, null != t ? t.openInNewTab : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '>\n        <div class="dashbox__icon">\n          <img src="' + c((s = null != (s = n.icon_url || (null != t ? t.icon_url : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "icon_url",
                    hash: {},
                    data: r
                }) : s)) + '" alt=' + c((s = null != (s = n.title || (null != t ? t.title : t)) ? s : l, typeof s === u ? s.call(a, {
                    name: "title",
                    hash: {},
                    data: r
                }) : s)) + ' height="78" width="78">\n        </div>\n        <div class="dashbox__content">\n' + (null != (o = n.each.call(a, null != t ? t.title : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n.each.call(a, null != t ? t.body : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '        </div>\n        <div class="dashbox__cta">\n          <span class="dashbox__ctaLabel sc-button sc-button-cta sc-browsers-enable-gpu sc-truncate">' + c((s = null != (s = n.button_text || (null != t ? t.button_text : t)) ? s : l,
                    typeof s === u ? s.call(a, {
                        name: "button_text",
                        hash: {},
                        data: r
                    }) : s)) + "</span>\n        </div>\n      </a>\n"
            },
            8: function(e, t, n, i, r) {
                return '            <h2 class="dashbox__titleLine">' + e.escapeExpression(e.lambda(t, t)) + "</h2>\n"
            },
            10: function(e, t, n, i, r) {
                return '            <p class="dashbox__bodyLine sc-type-light sc-font-body">' + e.escapeExpression(e.lambda(t, t)) + "</p>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.hasContent : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            useData: !0
        })
    },
    2447: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "downloadable",
                        label: (n(51) || t && t.$t || l).call(a, "Enable downloads", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : ""
            },
            2: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '          <p class="editAccessTab__showDownloadableConstraint">\n            ' + u((n(51) || t && t.$t || l).call(a, "This setting cannot be changed. For more information, contact your label.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n          </p>\n          <div class="showChecked">\n            <p class="blockCheckbox__contentParagraph">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? s : "") + '            </p>\n            <p class="blockCheckbox__contentParagraph blockCheckbox__warning editAccessTab__showCopyrightWarning">\n              ' + u((n(51) || t && t.$t || l).call(a, "Distributing content without permission is unlawful. Make sure you have all necessary rights.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n            </p>\n          </div>\n          <span class="showUnchecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.program(9, o, 0),
                    data: o
                })) ? s : "") + "          </span>\n"
            },
            3: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be downloadable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be downloadable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be downloadable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be downloadable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            11: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        disabled: !0,
                        field: "downloadable",
                        label: (n(51) || t && t.$t || l).call(a, "Downloads disabled", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : ""
            },
            12: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.previousCopyrightIssues : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, r, 0),
                    inverse: e.program(16, r, 0),
                    data: r
                })) ? o : ""
            },
            13: function(e, t, i, r, o) {
                var s, a, l, u = "";
                return a = null != (a = n(51) || (null != t ? t.$t : t)) ? a : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(14, o, 0),
                    inverse: e.noop,
                    data: o
                }, s = "function" == typeof a ? a.call(null != t ? t : {}, l) : a, n(51) || (s = i.blockHelperMissing.call(t, s, l)), null != s && (u += s), u
            },
            14: function(e, t, n, i, r) {
                return '              Downloads are disabled due to copyright infringement. For details, refer to the <a href="https://copyright.soundcloud.com/">Copyright claim center</a>.\n'
            },
            16: function(e, t, i, r, o) {
                var s, a, l, u = "";
                return a = null != (a = n(51) || (null != t ? t.$t : t)) ? a : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(17, o, 0),
                    inverse: e.noop,
                    data: o
                }, s = "function" == typeof a ? a.call(null != t ? t : {}, l) : a, n(51) || (s = i.blockHelperMissing.call(t, s, l)), null != s && (u += s), u
            },
            17: function(e, t, n, i, r) {
                return "              Downloads are disabled at the request of your rightsholder. For more information, contact your label or distributor.\n"
            },
            19: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(20, r, 0),
                    inverse: e.program(22, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, r, 0),
                    inverse: e.program(26, r, 0),
                    data: r
                })) ? o : "")
            },
            20: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track can be played on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            22: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will play on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            24: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Playing this track will not be possible on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            26: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will play on devices without an internet connection.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            28: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '        <p class="editAccessTab__showFeedableConstraint">\n          ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "This setting cannot be changed. For more information, contact your label.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n        <span class="showChecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(29, o, 0),
                    inverse: e.program(31, o, 0),
                    data: o
                })) ? s : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(33, o, 0),
                    inverse: e.program(35, o, 0),
                    data: o
                })) ? s : "")
            },
            29: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be included in your RSS feed if it is public.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            31: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be included in your RSS feed if they are public.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            33: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be included in your RSS feed.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            35: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be included in your RSS feed.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            37: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(38, r, 0),
                    inverse: e.program(40, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(42, r, 0),
                    inverse: e.program(44, r, 0),
                    data: r
                })) ? o : "") + "        </span>\n"
            },
            38: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This trackâ€™s embedded-player code will be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            40: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will display their embedded-player code publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            42: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This trackâ€™s embedded-player code will only be displayed to you.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            44: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will display their embedded-player code publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            46: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '        <span class="showChecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(47, r, 0),
                    inverse: e.program(49, r, 0),
                    data: r
                })) ? o : "") + '        </span>\n        <span class="showUnchecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(51, r, 0),
                    inverse: e.program(53, r, 0),
                    data: r
                })) ? o : "") + "        </span>\n"
            },
            47: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            49: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            51: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            53: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "No tracks will be playable outside of SoundCloud and its apps.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            55: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '      <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "domainLocking",
                        label: (n(51) || t && t.$t || l).call(a, "Domain locking", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(56, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "      </div>\n"
            },
            56: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '          <span class="showChecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(57, o, 0),
                    inverse: e.program(59, o, 0),
                    data: o
                })) ? s : "") + '          </span>\n          <span class="showUnchecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(61, o, 0),
                    inverse: e.program(63, o, 0),
                    data: o
                })) ? s : "") + '          </span>\n          <div class="showChecked">\n            <button class="sc-button sc-button-small">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "Edit list", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n          </div>\n"
            },
            57: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will only be accessible from selected domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            59: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will only be accessible from selected domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            61: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Your track will be accessible from all domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            63: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "All tracks will be accessible from all domains.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            65: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '    <div class="g-form-section-head">\n      <h3 class="g-form-section-title">\n        <span class="sc-icon sc-icon-large sc-icon-comment-empty"></span>\n        ' + e.escapeExpression((n(51) || t && t.$t || l).call(a, "Quiet mode", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n      </h3>\n    </div>\n    <div class="g-options-row three-cell">\n      <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "commentable",
                        label: (n(51) || t && t.$t || l).call(a, "Enable comments", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(66, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '      </div>\n      <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "publicComments",
                        label: (n(51) || t && t.$t || l).call(a, "Display comments", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(71, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '      </div>\n      <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "stats",
                        label: (n(51) || t && t.$t || l).call(a, "Display stats", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(73, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "      </div>\n    </div>\n"
            },
            66: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(67, r, 0),
                    inverse: e.program(69, r, 0),
                    data: r
                })) ? o : ""
            },
            67: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '            <span class="showChecked">' + l((n(51) || t && t.$t || a).call(s, "People will be able to comment on your track.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n            <span class="showUnchecked">' + l((n(51) || t && t.$t || a).call(s, "People will not be able to comment on your track.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            69: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '            <span class="showChecked">' + l((n(51) || t && t.$t || a).call(s, "People will be able to comment on your tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n            <span class="showUnchecked">' + l((n(51) || t && t.$t || a).call(s, "People will not be able to comment on your tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            71: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '          <span class="showChecked">' + l((n(51) || t && t.$t || a).call(s, "Comments are visible to everyone.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showUnchecked">' + l((n(51) || t && t.$t || a).call(s, "Comments are visible only to you.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</span>\n"
            },
            73: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return '          <span class="showChecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(74, r, 0),
                    inverse: e.program(76, r, 0),
                    data: r
                })) ? o : "") + '          </span>\n          <span class="showUnchecked">\n' + (null != (o = n["if"].call(s, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(78, r, 0),
                    inverse: e.program(80, r, 0),
                    data: r
                })) ? o : "") + "          </span>\n"
            },
            74: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This trackâ€™s stats will be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            76: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Stats will be displayed publicly on all tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            78: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This trackâ€™s stats will not be displayed publicly.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            80: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Stats will not be displayed publicly on any tracks.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            82: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="editAccessTab__quietTeaser g-upsell-container">\n      <div class="g-upsell-container-content">\n        <h2>' + l((n(51) || t && t.$t || a).call(s, "Be in control", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</h2>\n        <p class="g-upsell-container-text sc-type-small sc-type-light">' + l((n(51) || t && t.$t || a).call(s, "With any Pro plan, youâ€™re in charge with quiet mode; choose whether comments should be public, private, or not allowed, or show or hide stats.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</p>\n        " + l((n(53) || t && t.$view || a).call(s, n(139), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || a).call(s, "Unlock with a Pro plan", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        linkRef: "t110",
                        size: "small",
                        tagName: "a"
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-access"></span>\n      ' + e.escapeExpression((n(51) || t && t.$t || l).call(a, "Access", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (s = i["if"].call(a, null != t ? t.hasDownloads : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.program(11, o, 0),
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "offlineSyncEnabled",
                        label: (n(51) || t && t.$t || l).call(a, "Offline listening", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(19, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "feedable",
                        label: (n(51) || t && t.$t || l).call(a, "Include in RSS feed", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(28, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "embeddableByAll",
                        label: (n(51) || t && t.$t || l).call(a, "Display embed code", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(37, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "apiStreamable",
                        label: (n(51) || t && t.$t || l).call(a, "Enable app playback", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(46, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n" + (null != (s = i["if"].call(a, null != t ? t.hasDomainLocking : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(55, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '\n  </div>\n</section>\n<section class="g-form-section">\n' + (null != (s = i["if"].call(a, null != t ? t.hasQuietmode : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(65, o, 0),
                    inverse: e.program(82, o, 0),
                    data: o
                })) ? s : "") + "</section>\n"
            },
            useData: !0
        })
    },
    2448: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="baseFields__playlistTypeRow g-flex-row-spread">\n    <div class="baseFields__playlistTypeSelect">\n      ' + l((n(53) || t && t.$view || a).call(s, n(151), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        size: "small",
                        plain: !0,
                        style: "linkMenu",
                        customClassName: "baseFields__fullWidth",
                        label: (n(51) || t && t.$t || a).call(s, "Playlist type", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "playlistType",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n    </div>\n    " + l((n(53) || t && t.$view || a).call(s, n(569), {
                    name: "$view",
                    hash: {
                        key: "releaseDate",
                        className: "baseFields__releaseDate",
                        label: (n(51) || t && t.$t || a).call(s, "Release date", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "releaseDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="baseFields__title sc-border-box">\n  ' + u((n(53) || t && t.$view || l).call(a, n(653), {
                    name: "$view",
                    hash: {
                        key: "title",
                        field: "title",
                        label: (n(51) || t && t.$t || l).call(a, "Title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        placeholder: null != t ? t.titlePlaceholder : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__permalink">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1047), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        permalinkType: null != t ? t.type : t,
                        field: "permalink",
                        label: (n(51) || t && t.$t || l).call(a, "Permalink", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__image">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1011), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n</div>\n" + (null != (s = i["if"].call(a, null != t ? t.showPlaylistTypeSelect : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '<div class="baseFields__genreRow g-flex-row-spread">\n  <div class="baseFields__genreSelect">\n    ' + u((n(53) || t && t.$view || l).call(a, n(151), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        size: "small",
                        plain: !0,
                        style: "linkMenu",
                        customClassName: "baseFields__fullWidth",
                        className: "baseFields__customGenreLabel",
                        label: (n(51) || t && t.$t || l).call(a, "Genre", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "genre",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n  </div>\n  " + u((n(53) || t && t.$view || l).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "customGenre",
                        className: "baseFields__customGenre",
                        label: (n(51) || t && t.$t || l).call(a, "Custom Genre", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "customGenre",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</div>\n<div class="baseFields__tagInput">\n  ' + u((n(53) || t && t.$view || l).call(a, n(650), {
                    name: "$view",
                    hash: {
                        placeholder: null != t ? t.tagPlaceholder : t,
                        key: "tags",
                        label: (n(51) || t && t.$t || l).call(a, "Additional tags", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        style: "bordered",
                        field: "tags",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</div>\n" + u((n(53) || t && t.$view || l).call(a, n(570), {
                    name: "$view",
                    hash: {
                        key: "description",
                        placeholder: null != t ? t.descriptionPlaceholder : t,
                        rows: "3",
                        field: "description",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "baseFields__description"
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    2449: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(51) || t && t.$t || a).call(s, (n(155) || t && t.$ternary || a).call(s, null != t ? t.isEdit : t, "Track is [[[state]]]", "Track will be [[[state]]]", {
                    name: "$ternary",
                    hash: {},
                    data: o
                }), {
                    name: "$t",
                    hash: {
                        state: (n(155) || t && t.$ternary || a).call(s, null != t ? t.hasAnyScheduling : t, (n(53) || t && t.$view || a).call(s, n(1050), {
                            name: "$view",
                            hash: {
                                field: "sharing",
                                resource_type: null != t ? t._resource_type : t,
                                resource_id: null != t ? t._resource_id : t,
                                Form: null != t ? t.FormClass : t
                            },
                            data: o
                        }), (n(53) || t && t.$view || a).call(s, n(196), {
                            name: "$view",
                            hash: {
                                field: "sharing",
                                resource_type: null != t ? t._resource_type : t,
                                resource_id: null != t ? t._resource_id : t,
                                Form: null != t ? t.FormClass : t
                            },
                            data: o
                        }), {
                            name: "$ternary",
                            hash: {},
                            data: o
                        })
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(51) || t && t.$t || a).call(s, (n(155) || t && t.$ternary || a).call(s, null != t ? t.isEdit : t, "Playlist is [[[state]]]", "Playlist will be [[[state]]]", {
                    name: "$ternary",
                    hash: {},
                    data: o
                }), {
                    name: "$t",
                    hash: {
                        state: (n(155) || t && t.$ternary || a).call(s, null != t ? t.hasAnyScheduling : t, (n(53) || t && t.$view || a).call(s, n(1050), {
                            name: "$view",
                            hash: {
                                field: "sharing",
                                resource_type: null != t ? t._resource_type : t,
                                resource_id: null != t ? t._resource_id : t,
                                Form: null != t ? t.FormClass : t
                            },
                            data: o
                        }), (n(53) || t && t.$view || a).call(s, n(196), {
                            name: "$view",
                            hash: {
                                field: "sharing",
                                resource_type: null != t ? t._resource_type : t,
                                resource_id: null != t ? t._resource_id : t,
                                Form: null != t ? t.FormClass : t
                            },
                            data: o
                        }), {
                            name: "$ternary",
                            hash: {},
                            data: o
                        })
                    },
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                var s;
                return null != (s = (n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(205), {
                    name: "$view",
                    hash: {
                        animate: !1,
                        conditionFn: null != t ? t.isSharingPublicFn : t,
                        field: "sharing",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : ""
            },
            6: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '        <div class="right">\n' + (null != (s = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        platforms: (n(53) || t && t.$view || l).call(a, n(1731), {
                            name: "$view",
                            hash: {
                                field: "networks",
                                resource_type: null != t ? t._resource_type : t,
                                resource_id: null != t ? t._resource_id : t,
                                Form: null != t ? t.FormClass : t
                            },
                            data: o
                        })
                    },
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "        </div>\n"
            },
            7: function(e, t, n, i, r) {
                return '            Share on <div class="editBasicTab__shareToWrapper g-inline-block">[[[platforms]]]</div>\n'
            },
            9: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="editBasicTab__trackList">\n    ' + l((n(53) || t && t.$view || a).call(s, n(1051), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n  </div>\n  " + l((n(53) || t && t.$view || a).call(s, n(652), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || a).call(s, "Add more tracks", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: "small",
                        callToAction: !1,
                        toPlaylistUploadId: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(1010), {
                    name: "$view",
                    hash: {
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n\n<div class="editBasicTab__fields sc-clearfix">\n  <div class="editBasicTab__afterDescription sc-clearfix">\n    <div class="left">\n' + (null != (s = i["if"].call(a, null != t ? t.isTrack : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "\n    </div>\n" + (null != (s = i.unless.call(a, null != t ? t.isEdit : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n</div>\n" + (null != (s = i.unless.call(a, null != t ? t.isSound : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2453: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s;
                return '<div class="editImage__select">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(89), {
                    name: "$view",
                    hash: {
                        uploadImageAutomatically: !1,
                        alwaysShowEditButton: !0,
                        editable: !0,
                        size: null != (s = null != t ? t._options : t) ? s.size : s,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n</div>\n<div class="editImage__cropper">\n</div>\n'
            },
            useData: !0
        })
    },
    2454: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "    " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "You can select a license for each track you upload. The default setting is 'All Rights Reserved' but you can also choose to give your track a Creative Commons license.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <a class="sc-link-dark" href="http://creativecommons.org/licenses/" target="_blank">\n      ' + u((n(53) || t && t.$view || l).call(a, n(1046), {
                    name: "$view",
                    hash: {
                        field: "creativeCommonsLicense",
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n      " + u((n(51) || t && t.$t || l).call(a, "Some rights reserved", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n    </a>\n"
            },
            5: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="g-options-row four-cell">\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "attribution",
                        label: (n(51) || t && t.$t || l).call(a, "Attribution", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "nonCommercial",
                        label: (n(51) || t && t.$t || l).call(a, "Noncommercial", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "nonDerivative",
                        label: (n(51) || t && t.$t || l).call(a, "No Derivative Works", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        field: "shareAlike",
                        label: (n(51) || t && t.$t || l).call(a, "Share Alike", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n  </div>\n"
            },
            6: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            8: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to distribute, display and perform your workâ€"and derivative works based upon itâ€"but for noncommercial purposes only.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            12: function(e, t, i, r, o) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Allow others to distribute derivative works only under a license identical to the license that governs your work.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="g-form-section-head">\n  <h3 class="g-form-section-title">\n    <span class="sc-icon sc-icon-large sc-icon-check"></span>\n    ' + u((n(51) || t && t.$t || l).call(a, "License", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n  </h3>\n" + (null != (s = (n(53) || t && t.$view || l).call(a, n(142), {
                    name: "$view",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</div>\n<div class="licenseEdit__radios">\n  ' + u((n(53) || t && t.$view || l).call(a, n(222), {
                    name: "$view",
                    hash: {
                        key: "license",
                        field: "license",
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n" + (null != (s = (n(53) || t && t.$view || l).call(a, n(205), {
                    name: "$view",
                    hash: {
                        animate: !1,
                        conditionFn: null != t ? t.showCommonsDetailsFn : t,
                        className: "licenseEdit__summary g-inline-block",
                        field: "license",
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "</div>\n" + (null != (s = (n(53) || t && t.$view || l).call(a, n(205), {
                    name: "$view",
                    hash: {
                        conditionFn: null != t ? t.showCommonsDetailsFn : t,
                        field: "license",
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2455: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '      <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        field: "geoblocking",
                        label: (n(51) || t && t.$t || l).call(a, "Geoblocking", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "      </div>\n"
            },
            2: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '          <span class="showUnchecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? s : "") + '          </span>\n          <span class="showChecked">\n            <span class="geoblocking__showEmpty">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.program(9, o, 0),
                    data: o
                })) ? s : "") + '            </span>\n            <span class="geoblocking__showNonEmpty">\n' + (null != (s = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, o, 0),
                    inverse: e.program(13, o, 0),
                    data: o
                })) ? s : "") + "            </span>\n            " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(979), {
                    name: "$view",
                    hash: {
                        field: "availableCountries",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n          </span>\n"
            },
            3: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track is available worldwide.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                return "              " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist is available worldwide.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be blocked worldwide. Enter the countries and continents you want to allow playback in:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will be blocked worldwide. Enter the countries and continents you want to allow playback in:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            11: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will only be playable in the following areas of the world:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            13: function(e, t, i, r, o) {
                return "                " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will only be playable in the following areas of the world:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            15: function(e, t, i, r, o) {
                return '      <div class="g-options-cell g-options-two-cell">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1049), {
                    name: "$view",
                    hash: {
                        key: "schedulingSection",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        publicToPrivate: null != t ? t.hasFullScheduling : t,
                        className: "g-options-row two-cell"
                    },
                    data: o
                })) + "\n      </div>\n"
            },
            17: function(e, t, i, r, o) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1456), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n      ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "Availability", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n' + (null != (s = i["if"].call(a, null != t ? t.hasGeoblocking : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.hasScheduling : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n</div>\n\n" + (null != (s = i["if"].call(a, null != t ? t.hasMonetization : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2456: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="editMetadataTab__requiredCppFields">\n\n      <div class="metadataGrid__row">\n        ' + l((n(53) || t && t.$view || a).call(s, n(151), {
                    name: "$view",
                    hash: {
                        key: "publisherContainsMusic",
                        showBlank: !1,
                        label: (n(51) || t && t.$t || a).call(s, "Contains music", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherContainsMusic",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherArtist",
                        field: "publisherArtist",
                        label: (n(51) || t && t.$t || a).call(s, "Artist", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisher",
                        label: (n(51) || t && t.$t || a).call(s, "Publisher", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisher",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + '\n      </div>\n\n\n      <div class="metadataGrid__row">\n        ' + l((n(53) || t && t.$view || a).call(s, n(980), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        key: "composer",
                        label: (n(51) || t && t.$t || a).call(s, "Composer", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherWriterComposer",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n\n        " + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Release title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherReleaseTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n"
            },
            3: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Album title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherAlbumTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            7: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(569), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Release date", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "releaseDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            9: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '\n\n    <div class="metadataGrid__row">\n\n      ' + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Barcode", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherUpcOrEan",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + "\n\n      " + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        hintHTML: null != t ? t.iswcFieldHint : t,
                        label: (n(51) || t && t.$t || a).call(s, "ISWC", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        placeholder: (n(51) || t && t.$t || a).call(s, "e.g. T-034.524.680-1", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherIswc",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + '\n    </div>\n\n\n    <div class="metadataGrid__row">\n      ' + l((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        hintHTML: null != t ? t.plineFieldHint : t,
                        placeholder: (n(51) || t && t.$t || a).call(s, "e.g. 2007 XYZ Record Company Limited", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        label: (n(51) || t && t.$t || a).call(s, "P line", {
                            name: "$t",
                            hash: {
                                _comment: "It's a music industry term. Used for clearing publishing."
                            },
                            data: o
                        }),
                        field: "publisherPLine",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + "\n\n      " + l((n(53) || t && t.$view || a).call(s, n(151), {
                    name: "$view",
                    hash: {
                        showBlank: !1,
                        label: (n(51) || t && t.$t || a).call(s, "Contains explicit content", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "publisherExplicit",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section sc-clearfix">\n' + (null != (s = i["if"].call(a, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '\n\n  <div class="metadataGrid__row">\n    ' + u((n(53) || t && t.$view || l).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || l).call(a, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(a, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  </div>\n\n\n  <div class="metadataGrid__row">\n' + (null != (s = i["if"].call(a, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "\n    " + u((n(53) || t && t.$view || l).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(a, "Record label", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "labelName",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.recordLabelClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(a, null != t ? t.showReleaseDate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n\n" + (null != (s = i["if"].call(a, null != t ? t.hasPublisherMetadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</section>\n\n<section class="g-form-section sc-clearfix">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1012), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        FormClass: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    2457: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '        <p class="showMonetizationConstraint">\n          ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isTrack : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '        </span>\n        <span class="showChecked">\n' + (null != (s = i["if"].call(a, null != t ? t.isTrack : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "        </span>\n"
            },
            2: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will not be monetizable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            4: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will not be monetizable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            6: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track will be monetizable only in the following territories:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            8: function(e, t, i, r, o) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist will be monetizable only in the following territories:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            10: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <p class="showMonetizationConstraint">\n          ' + l((n(51) || t && t.$t || a).call(s, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n          <span class="showMonetizationEnabled">' + l((n(51) || t && t.$t || a).call(s, "This track will monetize continuously.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showMonetizationDisabled">' + l((n(51) || t && t.$t || a).call(s, "This track will not be monetizable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n        </span>\n\n        <span class="showChecked">\n          ' + l((n(51) || t && t.$t || a).call(s, "This track will start monetization on:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </span>\n        <div class="showChecked">\n          ' + l((n(53) || t && t.$view || a).call(s, n(313), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "monetizationStartTimezone",
                        localDateField: "monetizationStartLocalDate",
                        key: "monetizationStartDate",
                        field: "monetizationStartDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            12: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <p class="showMonetizationConstraint">\n          ' + l((n(51) || t && t.$t || a).call(s, "This setting cannot be changed. Contact your label for more information.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </p>\n\n        <span class="showUnchecked">\n          <span class="showMonetizationEnabled">' + l((n(51) || t && t.$t || a).call(s, "This track will monetize continuously.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n          <span class="showMonetizationDisabled">' + l((n(51) || t && t.$t || a).call(s, "This track will not be monetizable.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</span>\n        </span>\n\n        <span class="showChecked">\n          ' + l((n(51) || t && t.$t || a).call(s, "This track will end monetization on:", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n        </span>\n        <div class="showChecked">\n          ' + l((n(53) || t && t.$view || a).call(s, n(313), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "monetizationEndTimezone",
                        localDateField: "monetizationEndLocalDate",
                        key: "monetizationEndDate",
                        field: "monetizationEndDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n      ' + u((n(51) || t && t.$t || l).call(a, "Enable monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationEnabled",
                        field: "monetizationEnabled",
                        label: (n(51) || t && t.$t || l).call(a, "Monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n  </div>\n  " + u((n(53) || t && t.$view || l).call(a, n(1457), {
                    name: "$view",
                    hash: {
                        field: "monetizationRightsholders",
                        publisherIsrc: null != t ? t.publisherIsrc : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        className: "showMonetizationEnabled",
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n</section>\n\n<section class="g-form-section">\n  <div class="g-form-section-head">\n    <h3 class="g-form-section-title">\n      <span class="sc-icon sc-icon-large sc-icon-calendar-middle"></span>\n      ' + u((n(51) || t && t.$t || l).call(a, "Schedule monetization", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h3>\n  </div>\n  <div class="g-options-row three-cell">\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationStart",
                        field: "monetizationStart",
                        label: (n(51) || t && t.$t || l).call(a, "Start monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(10, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </div>\n    <div class="g-options-cell">\n' + (null != (s = (n(53) || t && t.$view || l).call(a, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "monetizationEnd",
                        field: "monetizationEnd",
                        label: (n(51) || t && t.$t || l).call(a, "End monetization", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(12, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "    </div>\n  </div>\n</section>\n"
            },
            useData: !0
        })
    },
    2458: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="monetizationTerritories__list g-options-row three-cell">\n    <div class="g-options-cell">\n       ' + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(1013), {
                    name: "$view",
                    hash: {
                        emptyMessage: (n(51) || t && t.$t || l).call(a, "Add another territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        explicitRequiredTerritories: (s = o && o.root) && s.explicitRequiredTerritories,
                        remainingTerritories: (s = o && o.root) && s.remainingTerritories
                    },
                    data: o
                })) + "\n    </div>\n  </div>\n"
            },
            3: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            4: function(e, t, n, i, r) {
                var o;
                return '      <div class="g-options-cell">\n' + (null != (o = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "      </div>\n"
            },
            5: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing;
                return '          <div class="monetizationTerritories__listItem ' + (null != (s = i["if"].call(a, null != t ? t.territoryId : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '">\n             ' + e.escapeExpression((n(53) || t && t.$view || l).call(a, n(1013), {
                    name: "$view",
                    hash: {
                        emptyMessage: (n(155) || t && t.$ternary || l).call(a, o && o.first, (n(51) || t && t.$t || l).call(a, "Select territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }), (n(51) || t && t.$t || l).call(a, "Add another territory", {
                            name: "$t",
                            hash: {},
                            data: o
                        }), {
                            name: "$ternary",
                            hash: {},
                            data: o
                        }),
                        userRightsholders: (s = o && o.root) && s.userRightsholders,
                        explicitRequiredTerritories: (s = o && o.root) && s.explicitRequiredTerritories,
                        remainingTerritories: (s = o && o.root) && s.remainingTerritories,
                        rightsholder: null != t ? t.rightsholder : t,
                        territoryId: null != t ? t.territoryId : t
                    },
                    data: o
                })) + "\n          </div>\n"
            },
            6: function(e, t, n, i, r) {
                return "monetizationTerritories__listItemStarted"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t.canAddTerritory : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '<div class="monetizationTerritories__list g-options-row three-cell">\n' + (null != (o = n.each.call(s, null != t ? t.monetizationTerritories : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + '</div>\n<div class="monetizationTerritories__validation">\n  <div class="monetizationTerritories__validationMessage g-input-validation"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    2459: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o, s, a = null != t ? t : {};
                return '  <select class="monetizationTerritory__territorySelect sc-select">\n    <option value="">' + e.escapeExpression((s = null != (s = n.emptyMessage || (null != t ? t.emptyMessage : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(a, {
                    name: "emptyMessage",
                    hash: {},
                    data: r
                }) : s)) + "</option>\n" + (null != (o = n.each.call(a, null != t ? t.territoryOptions : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + "  </select>\n"
            },
            2: function(e, t, n, i, r) {
                var o, s = null != t ? t : {},
                    a = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '      <option value="' + u((o = null != (o = n.value || (null != t ? t.value : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "value",
                    hash: {},
                    data: r
                }) : o)) + '">' + u((o = null != (o = n.label || (null != t ? t.label : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "label",
                    hash: {},
                    data: r
                }) : o)) + "</option>\n"
            },
            4: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="monetizationTerritory__needsRightsholder">\n    <div class="monetizationTerritory__territory">' + c((a = null != (a = i.selectedTerritory || (null != t ? t.selectedTerritory : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "selectedTerritory",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n    <select class="monetizationTerritory__rightsholderSelect sc-select">\n      <option value="">' + c((n(51) || t && t.$t || u).call(l, "Select rightsholder", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</option>\n" + (null != (s = i.each.call(l, null != t ? t.rightsholderOptions : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '    </select>\n    <div class="monetizationTerritory__remove">\n      <button class="monetizationTerritory__removeButton sc-button sc-button-small sc-button-delete sc-button-icon">' + c((n(51) || t && t.$t || u).call(l, "Remove", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n    </div>\n  </div>\n"
            },
            5: function(e, t, n, i, r) {
                var o, s = null != t ? t : {},
                    a = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '        <option value="' + u((o = null != (o = n.value || (null != t ? t.value : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "value",
                    hash: {},
                    data: r
                }) : o)) + '">' + u((o = null != (o = n.label || (null != t ? t.label : t)) ? o : a, typeof o === l ? o.call(s, {
                    name: "label",
                    hash: {},
                    data: r
                }) : o)) + "</option>\n"
            },
            7: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="monetizationTerritory__complete">\n    <div class="monetizationTerritory__territory">' + c((a = null != (a = i.selectedTerritory || (null != t ? t.selectedTerritory : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "selectedTerritory",
                    hash: {},
                    data: o
                }) : a)) + "</div>\n" + (null != (s = i["if"].call(l, null != t ? t.selectedRightsholder : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.program(10, o, 0),
                    data: o
                })) ? s : "") + '    <div class="monetizationTerritory__remove">\n      <button class="monetizationTerritory__removeButton sc-button sc-button-small sc-button-delete sc-button-icon">' + c((n(51) || t && t.$t || u).call(l, "Remove", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n    </div>\n  </div>\n"
            },
            8: function(e, t, n, i, r) {
                var o;
                return '      <div class="monetizationTerritory__rightsholder">' + e.escapeExpression((o = null != (o = n.selectedRightsholder || (null != t ? t.selectedRightsholder : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "selectedRightsholder",
                    hash: {},
                    data: r
                }) : o)) + "</div>\n"
            },
            10: function(e, t, i, r, o) {
                return '      <div class="monetizationTerritory__rightsholder">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "** automatic **", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var o, s = null != t ? t : {};
                return (null != (o = n["if"].call(s, null != t ? t.needsTerritory : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.needsRightsholder : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "") + (null != (o = n["if"].call(s, null != t ? t.isComplete : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : "")
            },
            useData: !0
        })
    },
    2467: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(a, n(1010), {
                    name: "$view",
                    hash: {
                        resource_type: null != (s = null != t ? t._options : t) ? s.resource_type : s,
                        resource_id: null != (s = null != t ? t._options : t) ? s.resource_id : s,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + '\n\n<div class="editPlaylistBasicTab__fields sc-clearfix">\n  <div class="editPlaylistBasicTab__afterDescription sc-clearfix">\n    <div class="left">\n      ' + u((n(51) || t && t.$t || l).call(a, "Playlist is", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n      <div class="g-inline-block">\n        ' + u((n(53) || t && t.$view || l).call(a, n(196), {
                    name: "$view",
                    hash: {
                        field: "sharing",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2468: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="audibleEditForm__top">\n  <div class="audibleEditForm__progress">\n    <div class="editStatus large">\n      <div class="editStatus__text playlistEditForm__error">' + u((s = null != (s = i.errorMessage || (null != t ? t.errorMessage : t)) ? s : l, "function" == typeof s ? s.call(a, {
                    name: "errorMessage",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n      <div class="editStatus__progress"></div>\n    </div>\n  </div>\n</div>\n<div class="audibleEditForm__form sc-media">\n  ' + u((n(53) || t && t.$view || l).call(a, n(651), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n\n  " + u((n(53) || t && t.$view || l).call(a, n(1469), {
                    name: "$view",
                    hash: {
                        Form: null != t ? t.PlaylistEdit : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n\n  <div class="audibleEditForm__formButtons sc-button-toolbar sc-border-light-top">\n    <div class="audibleEditForm__requiredText">' + u((n(51) || t && t.$t || l).call(a, '<span class="sc-orange">*</span> Required fields', {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n    " + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n    " + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.PlaylistEdit : t
                    },
                    data: o
                })) + "\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2469: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="editTrackList__headerButtons sc-button-toolbar">\n  ' + l((n(53) || t && t.$view || a).call(s, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + "\n  " + l((n(53) || t && t.$view || a).call(s, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + '\n</div>\n<div class="editTrackList__container"></div>\n'
            },
            useData: !0
        })
    },
    2470: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<section class="g-form-section sc-clearfix">\n  <div class="metadataGrid__row">\n    ' + u((n(53) || t && t.$view || l).call(a, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || l).call(a, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(a, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  </div>\n\n\n  <div class="metadataGrid__row">\n    ' + u((n(53) || t && t.$view || l).call(a, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(a, "Record label", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "labelName",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-wide"
                    },
                    data: o
                })) + '\n  </div>\n</section>\n\n<section class="g-form-section sc-clearfix">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1012), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        FormClass: null != t ? t.FormClass : t
                    },
                    data: o
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    2471: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '    <span class="sc-link-light">' + e.escapeExpression(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + "</span> &mdash;\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="editTrackItem__image sc-media-image">\n  ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        size: 30,
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n  <div class="editTrackItem__play">\n    ' + c((n(53) || t && t.$view || u).call(l, n(207), {
                    name: "$view",
                    hash: {
                        size: "small",
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n  </div>\n</div>\n<div class="editTrackItem__content sc-media-content sc-truncate">\n' + (null != (s = i["if"].call(l, null != (s = null != t ? t._options : t) ? s.show_user : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <span class="editTrackItem__trackTitle sc-type-h3">' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "title",
                    hash: {},
                    data: o
                }) : a)) + '</a>\n</div>\n<div class="editTrackItem__additional">\n  <span class="editTrackItem__duration">\n    ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != t ? t.durationInWords : t,
                        visible: null != t ? t.duration : t
                    },
                    data: o
                })) + '\n  </span>\n  <button class="editTrackItem__remove g-button-remove" title="' + c((n(51) || t && t.$t || u).call(l, "Remove track from playlist", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '">\n    ' + c((n(51) || t && t.$t || u).call(l, "Remove track from playlist", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n  </button>\n</div>\n"
            },
            useData: !0
        })
    },
    2472: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1467), {
                    name: "$view",
                    hash: {
                        field: "trackList",
                        resource_id: null != t ? t.formResourceId : t,
                        Form: null != t ? t.Form : t
                    },
                    data: o
                })) + "\n"
            },
            useData: !0
        })
    },
    2473: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "      " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || a).call(s, "Buy-link title", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: "metadataGrid__field-narrow"
                    },
                    data: o
                })) + "\n"
            },
            3: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            5: function(e, t, i, r, o) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track is managed directly by its rightsholder, so not all options can be changed. To make other changes, contact your label or distributor.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="audibleEditForm__form restrictedEditForm__form sc-media">\n  <div class="audibleEditForm__title">\n    <h2 class="g-modal-title-h1">\n      ' + c((n(51) || t && t.$t || u).call(l, (n(155) || t && t.$ternary || u).call(l, null != t ? t.isPlaylist : t, "Edit playlist", "Edit track", {
                    name: "$ternary",
                    hash: {},
                    data: o
                }), {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '\n    </h2>\n  </div>\n\n  <div class="metadataGrid__row">\n    ' + c((n(53) || t && t.$view || u).call(l, n(60), {
                    name: "$view",
                    hash: {
                        key: "buyLink",
                        label: (n(51) || t && t.$t || u).call(l, "Buy-link", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        field: "buyLink",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: null != t ? t.buyLinkClassName : t
                    },
                    data: o
                })) + "\n\n" + (null != (s = i["if"].call(l, null != t ? t.hasCustomBuyTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n\n  " + c((n(53) || t && t.$view || u).call(l, n(570), {
                    name: "$view",
                    hash: {
                        key: "description",
                        placeholder: null != t ? t.descriptionPlaceholder : t,
                        rows: "3",
                        field: "description",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t,
                        className: "baseFields__description"
                    },
                    data: o
                })) + '\n\n  <div class="restrictedEditForm__actions g-flex-row-centered-spread">\n    <div class="editStatus__text restrictedEditForm__status">' + c((a = null != (a = i.errorMessage || (null != t ? t.errorMessage : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "errorMessage",
                    hash: {},
                    data: o
                }) : a)) + '</div>\n\n    <div class="restrictedEditForm__buttons">\n      ' + c((n(53) || t && t.$view || u).call(l, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + "\n      " + c((n(53) || t && t.$view || u).call(l, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta restrictedEditForm__save",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + "\n      " + c((n(53) || t && t.$view || u).call(l, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "retry",
                        className: "sc-button-cta restrictedEditForm__retry",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.RestrictedAudibleEdit : t
                    },
                    data: o
                })) + '\n    </div>\n  </div>\n  <div class="audibleEditForm__foot restrictedEditForm__foot">\n' + (null != (s = i["if"].call(l, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2475: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <div class="audibleEditForm__audio">\n      <div class="audibleEditForm__audioButtons sc-button-toolbar">\n        ' + l((n(53) || t && t.$view || a).call(s, n(482), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || a).call(s, "Download original file", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n        " + l((n(53) || t && t.$view || a).call(s, n(652), {
                    name: "$view",
                    hash: {
                        text: (n(51) || t && t.$t || a).call(s, "Replace file", {
                            name: "$t",
                            hash: {},
                            data: o
                        }),
                        size: "small",
                        callToAction: !1,
                        replaceSoundUploadId: null != t ? t._resource_id : t
                    },
                    data: o
                })) + "\n      </div>\n    </div>\n"
            },
            3: function(e, t, n, i, r) {
                return '      <strong>Important:</strong> By sharing, you confirm that your track complies with our <a href="[[termsOfUse]]">Terms of use</a> and donâ€™t infringe anyone elseâ€™s rights. If in doubt, refer to the <a href="[[copyright]]">Copyright information</a> pages and <a target="_blank" href="[[faqs]]">FAQs</a> before uploading.\n'
            },
            5: function(e, t, i, r, o) {
                var s, a, l, u = '      <p class="audibleEditForm__footCpp">\n';
                return a = null != (a = n(51) || (null != t ? t.$t : t)) ? a : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(6, o, 0),
                    inverse: e.noop,
                    data: o
                }, s = "function" == typeof a ? a.call(null != t ? t : {}, l) : a, n(51) || (s = i.blockHelperMissing.call(t, s, l)), null != s && (u += s), u + "      </p>\n"
            },
            6: function(e, t, n, i, r) {
                return "        Please note that by adding rightsholder information, the respective rightsholder will be able to see monetization and availability settings of this track.\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="audibleEditForm__top">\n' + (null != (s = i["if"].call(a, null != t ? t.canReplaceFile : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <div class="audibleEditForm__progress">\n    ' + u((n(53) || t && t.$view || l).call(a, n(1052), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        showCancelButton: !0
                    },
                    data: o
                })) + '\n  </div>\n</div>\n<div class="audibleEditForm__form sc-media">\n  ' + u((n(53) || t && t.$view || l).call(a, n(651), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + "\n\n  " + u((n(53) || t && t.$view || l).call(a, n(1016), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: o
                })) + '\n\n  <div class="audibleEditForm__formButtons sc-button-toolbar sc-border-light-top">\n    <div class="audibleEditForm__requiredText">' + u((n(51) || t && t.$t || l).call(a, '<span class="sc-orange">*</span> Required fields', {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</div>\n    " + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "sc-button-cta",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + "\n    " + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "cancel",
                        noStyle: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.SoundUploadEdit : t
                    },
                    data: o
                })) + '\n  </div>\n  <div class="audibleEditForm__foot sc-border-light-top">\n' + (null != (s = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        faqs: null != (s = null != t ? t.links : t) ? s.faqs : s,
                        copyright: null != (s = null != t ? t.links : t) ? s.copyright : s,
                        termsOfUse: null != (s = null != t ? t.links : t) ? s.termsOfUse : s
                    },
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.hasRightsholderMonetization : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2477: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var o;
                return '  <a href="#" class="sc-button">' + e.escapeExpression(e.lambda(null != (o = null != t ? t._options : t) ? o.button_label : o, t)) + "</a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {};
                return '<p class="inlineError__message sc-type-medium">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(a, "Sorry, something went wrong.", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</p>\n" + (null != (s = i["if"].call(a, null != (s = null != t ? t._options : t) ? s.button_label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2485: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return " header__logoLink-wordmark"
            },
            3: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '          <li>\n            <a class="header__mainMenu-loggedInHome header__mainMenu-stream" href="' + l((n(58) || t && t.$route || a).call(s, "stream", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Home", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n          </li>\n          <li class="header__collection-wrapper"><a class="header__mainMenu-collection" href="' + l((n(58) || t && t.$route || a).call(s, "youNetwork", null != t ? t.user : t, "collection", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Collection", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n"
            },
            5: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '          <li class="header__explore-wrapper">\n            <a class="header__mainMenu-charts" href="' + l((n(58) || t && t.$route || a).call(s, "charts", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Charts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n          </li>\n"
            },
            7: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (s = i["if"].call(a, null != t ? t.showProUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, o, 0),
                    inverse: e.program(10, o, 0),
                    data: o
                })) ? s : "") + '      <div class="header__soundInput left">\n        ' + u((n(53) || t && t.$view || l).call(a, n(1021), {
                    name: "$view",
                    hash: {
                        className: "header__link",
                        isScButton: !1
                    },
                    data: o
                })) + '\n      </div>\n      <div class="header__userNav">\n        ' + u((n(53) || t && t.$view || l).call(a, n(1484), {
                    name: "$view",
                    hash: {
                        resource_id: null != (s = null != t ? t.user : t) ? s.id : s
                    },
                    data: o
                })) + "\n      </div>\n"
            },
            8: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <a class="header__link header__proUpsell" href="' + l((n(58) || t && t.$route || a).call(s, "premium", null, null, null != t ? t.upsellRef : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Go Pro", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n"
            },
            10: function(e, t, n, i, r) {
                var o;
                return null != (o = n["if"].call(null != t ? t : {}, null != t ? t.showGoUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? o : ""
            },
            11: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing;
                return "        " + e.escapeExpression((n(53) || t && t.$view || a).call(s, n(1018), {
                    name: "$view",
                    hash: {
                        trackImpressions: !1,
                        referral: "t1019",
                        text: (n(51) || t && t.$t || a).call(s, "Upgrade", {
                            name: "$t",
                            hash: {
                                _comment: "Upgrade (to another subscription)"
                            },
                            data: o
                        }),
                        className: "header__link header__goUpsell"
                    },
                    data: o
                })) + "\n      "
            },
            13: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '      <div class="header__loginMenu left">\n        ' + l((n(51) || t && t.$t || a).call(s, "[[[signinView]]] or [[[signupView]]]", {
                    name: "$t",
                    hash: {
                        signupView: (n(53) || t && t.$view || a).call(s, n(121), {
                            name: "$view",
                            hash: {
                                text: (n(51) || t && t.$t || a).call(s, "Create account", {
                                    name: "$t",
                                    hash: {},
                                    data: o
                                }),
                                type: "signup"
                            },
                            data: o
                        }),
                        signinView: (n(53) || t && t.$view || a).call(s, n(121), {
                            name: "$view",
                            hash: {},
                            data: o
                        })
                    },
                    data: o
                })) + '\n      </div>\n      <div class="left">\n        ' + l((n(53) || t && t.$view || a).call(s, n(1021), {
                    name: "$view",
                    hash: {
                        className: "header__link",
                        isScButton: !1
                    },
                    data: o
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="header__inner l-container l-fullwidth">\n\n  <div class="header__left">\n    <div class="header__logo left">\n      <a href="/" title="' + u((n(51) || t && t.$t || l).call(a, "Home", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '" class="header__logoLink' + (null != (s = i.unless.call(a, null != t ? t.loggedIn : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + ' sc-border-box sc-ir">' + u((n(51) || t && t.$t || l).call(a, "SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a>\n    </div>\n    <nav class="left header__navWrapper" role="navigation">\n      <ul class="header__navMenu header__mainMenu left sc-list-nostyle">\n' + (null != (s = i["if"].call(a, null != t ? t.loggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.program(5, o, 0),
                    data: o
                })) ? s : "") + '      </ul>\n    </nav>\n  </div>\n  <div class="header__middle">\n    <div class="header__search" role="search">\n      ' + u((n(53) || t && t.$view || l).call(a, n(604), {
                    name: "$view",
                    hash: {},
                    data: o
                })) + '\n    </div>\n  </div>\n  <div class="header__right sc-clearfix">\n' + (null != (s = i["if"].call(a, null != t ? t.loggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.program(13, o, 0),
                    data: o
                })) ? s : "") + '    <ul class="header__navMenu sc-clearfix sc-list-nostyle left">\n      <li><a href="" class="header__moreButton sc-ir">' + u((n(51) || t && t.$t || l).call(a, "Settings and more", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n    </ul>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2486: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                return "    <li>\n      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1018), {
                    name: "$view",
                    hash: {
                        text: null != t ? t.consumerUpsell : t,
                        referral: "t1022",
                        className: "moreMenu__link moreMenu__goUpsell"
                    },
                    data: o
                })) + "\n    </li>\n"
            },
            3: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <ul class="moreMenu__list sc-list-nostyle">\n    <li><a class="moreMenu__link moreMenu__proUpsell" href="' + l((n(58) || t && t.$route || a).call(s, "premium", null, null, null != t ? t.upsellRef : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Pro plans", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n  </ul>\n"
            },
            5: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <ul class="moreMenu__list sc-list-nostyle">\n    <li><a class="moreMenu__link" href="' + l((n(58) || t && t.$route || a).call(s, "youNetwork", null, "subscriptions", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Subscription", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n    <li><a class="moreMenu__link outgoing-settings" href="' + l((n(58) || t && t.$route || a).call(s, "settings", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Settings", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n    <li><a class="moreMenu__link" href="' + l((n(58) || t && t.$route || a).call(s, "logout", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Sign out", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n  </ul>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<ul class="moreMenu__list sc-list-nostyle">\n  <li><a class="moreMenu__link" href="' + u((n(58) || t && t.$route || l).call(a, "pagesPages", "contact", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "About us", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="' + u((n(58) || t && t.$route || l).call(a, "pages", "terms-of-use", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Legal", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="' + u((n(58) || t && t.$route || l).call(a, "pagesPages", "copyright", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Copyright", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n</ul>\n<ul class="moreMenu__list sc-list-nostyle">\n' + (null != (s = i["if"].call(a, null != t ? t.showGoUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <li><a class="moreMenu__link" href="' + u((n(58) || t && t.$route || l).call(a, "mobile", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" >' + u((n(51) || t && t.$t || l).call(a, "Mobile apps", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="' + u((n(58) || t && t.$route || l).call(a, "oscpSettings", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "On SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://blog.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(a, "Blog", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://soundcloud.com/jobs" target="_blank">' + u((n(51) || t && t.$t || l).call(a, "Jobs", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://developers.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(a, "Developers", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n</ul>\n<ul class="moreMenu__list sc-list-nostyle">\n  <li><a class="moreMenu__link" href="https://soundcloudcommunity.com" target="_blank">' + u((n(51) || t && t.$t || l).call(a, "Help community", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link" href="http://help.soundcloud.com" target="_blank">' + u((n(51) || t && t.$t || l).call(a, "Help center", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</a></li>\n  <li><a class="moreMenu__link moreMenu__keyboard" href="/">' + u((n(51) || t && t.$t || l).call(a, "Keyboard shortcuts", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a></li>\n</ul>\n" + (null != (s = i["if"].call(a, null != t ? t.showProUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + "\n" + (null != (s = i["if"].call(a, null != t ? t.isLoggedIn : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "")
            },
            useData: !0
        })
    },
    2487: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<span class="sc-ir">' + c((a = null != (a = i.name || (null != t ? t.name : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "name",
                    hash: {},
                    data: o
                }) : a)) + '</class>\n<span class="notificationIcon__badge">\n  ' + c((n(53) || t && t.$view || u).call(l, n(1560), {
                    name: "$view",
                    hash: {
                        type: null != (s = null != t ? t._options : t) ? s.type : s
                    },
                    data: o
                })) + "\n</span>\n"
            },
            useData: !0
        })
    },
    2488: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__likes" href="' + l((n(58) || t && t.$route || a).call(s, "youNetwork", null != t ? t.user : t, "likes", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Likes", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            3: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__sets" href="' + l((n(58) || t && t.$route || a).call(s, "youNetwork", null != t ? t.user : t, "sets", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Playlists", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            5: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__following" href="' + l((n(58) || t && t.$route || a).call(s, "youNetwork", null != t ? t.user : t, "following", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Following", {
                    name: "$t",
                    hash: {
                        _context: "menu-item"
                    },
                    data: o
                })) + "</a>\n    </li>\n"
            },
            7: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__premium" href="' + l((n(58) || t && t.$route || a).call(s, "premium", null, null, null != t ? t.ref : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Go Pro", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            9: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="profileMenu__item">\n      <a class="profileMenu__link profileMenu__stats outgoing-stats" href="' + l((n(58) || t && t.$route || a).call(s, "stats", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + l((n(51) || t && t.$t || a).call(s, "Stats", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n    </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<ul class="profileMenu__list profileMenu__listener sc-list-nostyle">\n  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__profile" href="' + u((n(58) || t && t.$route || l).call(a, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Profile", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (s = i["if"].call(a, null != t ? t.showLikes : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + (null != (s = i["if"].call(a, null != t ? t.showSets : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__stations" href="' + u((n(58) || t && t.$route || l).call(a, "youNetwork", null != t ? t.user : t, "stations", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Stations", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (s = i["if"].call(a, null != t ? t.showFollowing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__friends" href="' + u((n(58) || t && t.$route || l).call(a, "people", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Who to follow", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n" + (null != (s = i["if"].call(a, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '</ul>\n<ul class="profileMenu__list profileMenu__creator sc-list-nostyle">\n' + (null != (s = i["if"].call(a, null != t ? t.showStats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, o, 0),
                    inverse: e.noop,
                    data: o
                })) ? s : "") + '  <li class="profileMenu__item">\n    <a class="profileMenu__link profileMenu__trackManager" href="' + u((n(58) || t && t.$route || l).call(a, "youNetwork", null != t ? t.user : t, "tracks", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '">' + u((n(51) || t && t.$t || l).call(a, "Tracks", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</a>\n  </li>\n</ul>\n"
            },
            useData: !0
        })
    },
    2489: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<a href="' + u((n(58) || t && t.$route || l).call(a, "user", t, {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="userNav__button userNav__usernameButton">\n  ' + u((n(53) || t && t.$view || l).call(a, n(89), {
                    name: "$view",
                    hash: {
                        className: "userNav__item userNav__avatar",
                        size: 26,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: "user"
                    },
                    data: o
                })) + '\n  <div class="userNav__item">\n    <div class="userNav__username sc-truncate">' + u((s = null != (s = i.username || (null != t ? t.username : t)) ? s : l, "function" == typeof s ? s.call(a, {
                    name: "username",
                    hash: {},
                    data: o
                }) : s)) + '</div>\n  </div>\n</a>\n<a href="' + u((n(58) || t && t.$route || l).call(a, "activity", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="userNav__item userNav__button userNav__activitiesButton">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1020), {
                    name: "$view",
                    hash: {
                        type: "activities"
                    },
                    data: o
                })) + '\n</a>\n<a href="' + u((n(58) || t && t.$route || l).call(a, "messages", {
                    name: "$route",
                    hash: {},
                    data: o
                })) + '" class="userNav__item userNav__button userNav__messagesButton">\n  ' + u((n(53) || t && t.$view || l).call(a, n(1020), {
                    name: "$view",
                    hash: {
                        type: "messages"
                    },
                    data: o
                })) + "\n</a>\n"
            },
            useData: !0
        })
    },
    2514: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, o) {
                var s = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="localeSelectorContent__wrapper sc-border-light-bottom">\n  <h2 class="localeSelectorContent__title g-modal-title-h1">' + l((n(51) || t && t.$t || a).call(s, "Select your language", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + '</h2>\n</div>\n<button class="localeSelector__cancel sc-button-nostyle sc-button sc-button-medium" tabindex="0" title="Cancel">' + l((n(51) || t && t.$t || a).call(s, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: o
                })) + "</button>\n\n"
            },
            useData: !0
        })
    },
    2762: function(e, t, n) {
        var i = n(1841);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2763: function(e, t, n) {
        var i = n(1842);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2765: function(e, t, n) {
        var i = n(1844);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2766: function(e, t, n) {
        var i = n(1845);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2767: function(e, t, n) {
        var i = n(1846);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2769: function(e, t, n) {
        var i = n(1848);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2771: function(e, t, n) {
        var i = n(1851);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2772: function(e, t, n) {
        var i = n(1852);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2773: function(e, t, n) {
        var i = n(1853);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2774: function(e, t, n) {
        var i = n(1854);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2775: function(e, t, n) {
        var i = n(1855);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2776: function(e, t, n) {
        var i = n(1856);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2777: function(e, t, n) {
        var i = n(1857);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2778: function(e, t, n) {
        var i = n(1858);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2779: function(e, t, n) {
        var i = n(1860);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2780: function(e, t, n) {
        var i = n(1863);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2781: function(e, t, n) {
        var i = n(1864);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2782: function(e, t, n) {
        var i = n(1865);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2783: function(e, t, n) {
        var i = n(1866);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2785: function(e, t, n) {
        var i = n(1868);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2786: function(e, t, n) {
        var i = n(1869);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2792: function(e, t, n) {
        var i = n(1879);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2793: function(e, t, n) {
        var i = n(1880);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2794: function(e, t, n) {
        var i = n(1881);

        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2805: function(e, t, n) {
        var i = n(1894);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2807: function(e, t, n) {
        var i = n(1896);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2808: function(e, t, n) {
        var i = n(1897);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2809: function(e, t, n) {
        var i = n(1898);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2811: function(e, t, n) {
        var i = n(1900);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2821: function(e, t, n) {
        var i = n(1912);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2825: function(e, t, n) {
        var i = n(1916);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2826: function(e, t, n) {
        var i = n(1918);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2827: function(e, t, n) {
        var i = n(1919);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2831: function(e, t, n) {
        var i = n(1924);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2832: function(e, t, n) {
        var i = n(1925);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2833: function(e, t, n) {
        var i = n(1926);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2834: function(e, t, n) {
        var i = n(1928);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2835: function(e, t, n) {
        var i = n(1929);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2836: function(e, t, n) {
        var i = n(1930);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2842: function(e, t, n) {
        var i = n(1936);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2843: function(e, t, n) {
        var i = n(1937);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2844: function(e, t, n) {
        var i = n(1938);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2845: function(e, t, n) {
        var i = n(1939);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2846: function(e, t, n) {
        var i = n(1940);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2848: function(e, t, n) {
        var i = n(1942);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2850: function(e, t, n) {
        var i = n(1944);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2851: function(e, t, n) {
        var i = n(1945);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2858: function(e, t, n) {
        var i = n(1952);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2859: function(e, t, n) {
        var i = n(1953);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2860: function(e, t, n) {
        var i = n(1954);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2861: function(e, t, n) {
        var i = n(1955);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2862: function(e, t, n) {
        var i = n(1956);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2863: function(e, t, n) {
        var i = n(1957);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2886: function(e, t, n) {
        var i = n(1980);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
});