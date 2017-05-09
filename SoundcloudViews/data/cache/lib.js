webpackJsonp([4], {
    21: function(e, t, n) {
        "use strict";
        e.exports = n(2744)
    },
    23: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = n(56).promise(e);
                return t.constructor = i, t
            }

            function r(e) {
                var n = e.url,
                    i = e.headers,
                    r = e.method,
                    a = e.timeout,
                    l = e.dataType,
                    u = "json" === l,
                    c = "get" !== r,
                    d = u && c ? JSON.stringify(e.data) : e.data,
                    h = u ? "application/json" : null;
                return t.ajax({
                    url: n,
                    headers: i,
                    type: r,
                    data: d,
                    contentType: h,
                    processData: c,
                    timeout: a
                }).then(o, s)
            }

            function o(e, t, n) {
                return {
                    body: e,
                    status: n.status,
                    headers: {}
                }
            }

            function s() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = e.responseJSON,
                    n = void 0 === t ? {} : t,
                    i = e.status;
                return {
                    body: n,
                    status: i,
                    headers: {}
                }
            }

            function a(e) {
                return e.replace(u, "/$&") || "/"
            }

            function l(e, t, i, r, o) {
                return n(62).stringify({
                    scheme: e,
                    host: t,
                    port: i,
                    path: a(r),
                    query: o
                })
            }
            var u = /^[^\/]/;
            e.exports = n(1178)({
                endpoints: n(1234),
                services: n(1238)
            }, r, l, i)
        }).call(t, n(1))
    },
    52: function(e, t, n) {
        "use strict";

        function i(e, t, i) {
            i = i || {};
            var r = s.t(e, t, i.context, i.comment);
            return r = "asterisk" === a ? o(r) : r, new(n(20).SafeString)(r)
        }

        function r(e, t, i, r, l) {
            l = l || {};
            var u = s.tp(e, t, i, r, l.context, l.comment);
            return u = "asterisk" === a ? o(u) : u, new(n(20).SafeString)(u)
        }

        function o(e) {
            var t = !1;
            return e.split("").map(function(e) {
                return "<" === e || ">" === e ? (t = "<" === e, e) : t || !e.match(/[a-z]/i) ? e : "*"
            }).join("")
        }
        var s, a;
        e.exports = {
            initialize: function() {
                var e = window.__sc_locale || {};
                a = window.document.documentElement.getAttribute("lang"), s = s || new(n(1183)), s.setLocale(a), s.extend(e[a]), this.numberHelper = s.number, this.dateTimeHelper = s.dateTime
            },
            t: i,
            tp: r,
            tPending: i,
            tpPending: r,
            getLocale: function() {
                return a
            },
            getCurrentLanguage: function() {
                return n(1813).experimentalAndPublicLanguages[a]
            },
            getD3LocaleData: function() {
                return s.getLocaleDataFor("d3")
            },
            getDatePickerLocaleData: function() {
                return s.getLocaleDataFor("jquery.datepicker")
            }
        }
    },
    54: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                for (var n = this; n && !t.isPropagationStopped();) n.trigger(e, t), n = n._parentView
            }

            function r(e, t) {
                return n(3).defaults(t, e.prototype.defaults), e === y ? t : r(e.__super__.constructor, t)
            }

            function o(e, t) {
                var n = this,
                    i = e ? "on" : "off",
                    r = t.source,
                    o = e ? s.call(this, t) : null;
                c(t).forEach(function(e) {
                    r[i]("change:" + e, o, n)
                })
            }

            function s(e) {
                return e.options.nestedAttributes ? function(t, n, i, r) {
                    this._lastEventId !== r && (this._lastEventId = r, a.call(this, e) && this.onModelChange(t, n, i))
                } : this._onModelChange
            }

            function a(e) {
                var t = e.source,
                    i = e.options.nestedAttributes,
                    r = t.changed,
                    o = c(e),
                    s = o.some(function(e) {
                        return !i[e] && n(3).has(r, e)
                    });
                if (s) return !0;
                var a = t.previousAttributes();
                return n(3).some(i, function(e, t) {
                    return r[t] ? a[t] ? e.some(function(e) {
                        return a[t][e] !== r[t][e]
                    }) : !0 : !1
                })
            }

            function l(e, t) {
                var n = t.source,
                    i = e ? "on" : "off";
                n[i]("add", this.onAdd, this)[i]("remove", this.onRemove, this)[i]("reset", this.onCollectionReset, this)[i]("add remove reset", this.onCollectionChange, this)
            }

            function u(e) {
                var t = e.source,
                    n = e.options.isModel,
                    i = n ? o : l;
                i.call(this, !1, e), t.release()
            }

            function c(e) {
                var t = h(e.source, e.options.observedAttributes),
                    n = d(e);
                return t ? t.concat(n) : n
            }

            function d(e) {
                var t = e.options,
                    n = e.source;
                return h(n, t.requiredAttributes) || []
            }

            function h(e, t) {
                return t && !Array.isArray(t) ? t[e.resource_type] : t
            }

            function p(e) {
                var t = e.options.observedAttributes,
                    n = e.source;
                return t && t.length && !n.isPopulated() && !n.hasDataForView(t)
            }

            function f(e, t) {
                var n = void 0,
                    i = void 0,
                    r = h(e, t.requiredAttributes),
                    o = h(e, t.observedAttributes),
                    s = (r || []).concat(o || []).reduce(function(e, t) {
                        var n = "string" == typeof t ? t.split(".") : [t],
                            i = n[0],
                            r = n[1];
                        n[2];
                        return r && (e || (e = {}), e[i] = [r].concat(e[i] || [])), e
                    }, null);
                return s ? (n = g(r), i = g(o)) : (n = r, i = o), {
                    requiredAttributes: n,
                    observedAttributes: i,
                    nestedAttributes: s
                }
            }

            function g(e) {
                return e ? n(3).uniq(e.map(function(e) {
                    return e.split(".")[0]
                })) : null
            }
            var m = n(539).whenElementVisible,
                v = 46,
                _ = 47,
                y = e.exports = n(22).View.extend(n(349), n(1331), {
                    ModelClass: null,
                    requiredAttributes: null,
                    observedAttributes: null,
                    css: null,
                    template: n(3).noop,
                    LoadingView: null,
                    loadingViewArgs: null,
                    loadingTemplate: function() {
                        return ""
                    },
                    element2selector: null,
                    _element2selector_cache: null,
                    defaults: {
                        bulkFetch: 0
                    },
                    bubbleEvents: null,
                    disposed: !1,
                    subviews: null,
                    _subviews_keys: null,
                    _lastEventId: null,
                    constructorArguments: null,
                    _whenInsertedDefer: null,
                    _whenVisibleDefer: null,
                    _deferreds: null,
                    _dataSources: null,
                    initialize: function(e) {
                        var t;
                        e = this.options = r(this.constructor, e || {}), this.constructorArguments = n(3).clone(e), e.resource_id && this.ModelClass && (this.model = t = this.getModel(e.resource_id, e.resource_type)), this._deferreds = [], this.subviews = [], this._subviews_keys = [], this._dataSources = [], this.resetElementCache(), this._setupBubbleListeners(), this._setup(e), t && this.model !== t && t.release(), this.model ? this.addDataSource(this.model, {
                            observedAttributes: this.observedAttributes,
                            requiredAttributes: this.requiredAttributes
                        }) : this.collection && this.addDataSource(this.collection)
                    },
                    _setup: function(e) {
                        this.setup(e)
                    },
                    setup: n(3).noop,
                    _dispose: function() {
                        if (!this.disposed) {
                            for (this._teardown(), this.dispose(), this.disposed = !0; this._deferreds.length;) "number" == typeof this._deferreds[0] ? window.clearTimeout(this._deferreds.shift()) : this._deferreds[0].reject("viewDisposed");
                            for (this.off(), this.stopListening(); this._dataSources.length;) u.call(this, this._dataSources.shift());
                            this.destroyElement(), ["el", "$el", "model", "collection", "constructorArguments"].forEach(function(e) {
                                this[e] && (this[e] = null)
                            }, this)
                        }
                    },
                    destroyElement: function() {
                        this.$el.remove()
                    },
                    dispose: n(3).noop,
                    _teardown: function() {
                        this.disposeSubviews(), this._whenInsertedDefer && (this._whenInsertedDefer.reject(), this._whenInsertedDefer = null), this.teardown(), this.resetElementCache()
                    },
                    teardown: n(3).noop,
                    disposeSubviews: function() {
                        for (; this.subviews.length;) this.subviews.pop()._dispose();
                        this.subviews = [], this._subviews_keys = []
                    },
                    getModel: function(e, t, n) {
                        var i, r, o, s, a;
                        return s = {
                            id: e,
                            resource_type: t
                        }, o = this.ModelClass.getClass ? this.ModelClass.getClass(s) : this.ModelClass, i = o.hashFn(s, n), r = o.instances.get(i), r ? r.hold() : (a = {
                            id: e
                        }, t && (a.resource_type = t), r = new o(a)), r
                    },
                    _setupBubbleListeners: function() {
                        var e, t;
                        for (t in this.bubbleEvents) this.bubbleEvents.hasOwnProperty(t) && (e = this.bubbleEvents[t], n(3).isFunction(e) || (e = this[e]), this.on(t, e, this))
                    },
                    addDeferred: function(e) {
                        var t = this;
                        return "number" == typeof e ? this._deferreds.push(e) : e.reject && "pending" === e.state() && (e.always(function() {
                            var n = t._deferreds.indexOf(e);
                            n > -1 && t._deferreds.splice(n, 1)
                        }), this._deferreds.push(e)), e
                    },
                    addTimeout: function(e, t) {
                        return this.addDeferred(window.setTimeout(e, t))
                    },
                    addDataSource: function(e, t) {
                        var i = e instanceof n(65),
                            r = void 0;
                        i ? (t = n(3).assign({
                            isModel: !0
                        }, f(e, t || {})), r = o) : (t = n(3).assign({
                            isCollection: !0
                        }, t), r = l);
                        var s = {
                            source: e,
                            options: t
                        };
                        return this._dataSources.push(s), r.call(this, !0, s), e
                    },
                    removeDataSource: function(e) {
                        this._dataSources.some(function(t, n) {
                            return t.source === e ? (u.call(this, t), this._dataSources.splice(n, 1), !0) : void 0
                        }, this)
                    },
                    addSubview: function(e, t) {
                        return e._parentView = this, this.subviews.push(e), this._subviews_keys.push(t), t && (this.subviews[t] = e), e
                    },
                    removeSubview: function(e) {
                        for (var t = this.subviews.length; t--;)
                            if (this.subviews[t] === e) return this._subviews_keys[t] && delete this.subviews[this._subviews_keys[t]], e._parentView = null, this.subviews.splice(t, 1), void this._subviews_keys.splice(t, 1)
                    },
                    getAncestorSubviews: function() {
                        var e = [];
                        return this.subviews.forEach(function(t) {
                            e.push(t), e = e.concat(t.getAncestorSubviews())
                        }), e
                    },
                    getElement: function(e) {
                        var t;
                        return this._element2selector_cache[e] === t && (this._element2selector_cache[e] = this.$(this.element2selector[e])), this._element2selector_cache[e]
                    },
                    resetElementCache: function() {
                        this._element2selector_cache = {}
                    },
                    render: function() {
                        var e = this.hasData(),
                            t = this.getTemplate(e),
                            i = void 0,
                            r = void 0;
                        return t && (i = this._getTemplateData(e), n(265).render(t.bind(this), i, this.el), n(265).subviews(this)), e ? (this.renderDecorate(), r = this._dataSources.filter(p), r.length && this.addTimeout(function() {
                            n(3).invoke(n(3).pluck(r, "source"), "fetch")
                        }, 0)) : (!t && this.LoadingView && this.addSubview(new this.LoadingView(n(3).result(this, "loadingViewArgs")), "loading").render().$el.appendTo(this.el), this.fetchData().fail(this.removeLoader.bind(this))), this
                    },
                    hasData: function() {
                        return !this._dataSources.some(this.missingRequiredData, this)
                    },
                    fetchData: function() {
                        var e, t, i = this,
                            r = this._fetchDeferred;
                        return r && "pending" === r.state() || (e = this._dataSources.filter(this.missingRequiredData, this), t = e.length, t ? (this._fetchDeferred = r = t > 1 ? n(56).settled(e.map(this.fetchDataFromSource, this)) : this.fetchDataFromSource(e[0]), r.always(function() {
                            i._fetchDeferred = null
                        })) : r = n(56).resolve()), r
                    },
                    missingRequiredData: function(e) {
                        var t = e.source,
                            n = e.options;
                        if (n.isModel) {
                            var i = d(e);
                            return i.length ? !t.hasDataForView(i) : !1
                        }
                        return !t.hasDataForView(n)
                    },
                    fetchDataFromSource: function(e) {
                        var t = e.source,
                            n = this.options.bulkFetch;
                        return e.options.isCollection && n ? t.bulkFetch(n) : t.fetch({
                            attrs: c(e),
                            reset: !0
                        })
                    },
                    renderDecorate: n(3).noop,
                    rerender: function() {
                        this.disposed || (this._teardown(), this.render())
                    },
                    getTemplate: function(e) {
                        return e || !this.LoadingView && !this.loadingTemplate ? this.template : this.LoadingView ? null : this.loadingTemplate
                    },
                    _getTemplateData: function(e) {
                        var t = {};
                        return this.model ? t = this.getModelData() || t : this.collection && (t = this.getCollectionData() || t), t._options = n(3).clone(this.options), e && (t = this.getTemplateData(t) || t), t
                    },
                    getTemplateData: n(3).noop,
                    getCollectionData: function() {
                        return this.collection.toJSON()
                    },
                    getModelData: function() {
                        return this.model.toJSON()
                    },
                    bubble: function(e, t) {
                        var r = new(n(1302))(t);
                        return i.call(this, e, r), r
                    },
                    getContextData: function() {
                        return this.bubble("contextrequest").data
                    },
                    removeLoader: function() {
                        var e = this.subviews.loading;
                        e && (e._dispose(), this.removeSubview(e))
                    },
                    scrollIntoView: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            i = e.position,
                            r = void 0 === i ? "auto" : i,
                            o = e.force,
                            s = void 0 === o ? !1 : o,
                            a = e.topOffset,
                            l = void 0 === a ? 20 : a,
                            u = e.bottomOffset,
                            c = void 0 === u ? 20 : u,
                            d = e.internalSelector,
                            h = d ? this.$(d) : this.$el,
                            p = h.offset(),
                            f = n(56).defer(),
                            g = 0;
                        if (!p) return f.reject();
                        var m = t(".g-main-scroll-area").first();
                        m.length || (m = t("#content"), g = v);
                        var y = t(window.document).scrollTop(),
                            b = m.offset().top,
                            w = t(window).height() - _,
                            x = y + b,
                            k = y + w,
                            S = h.height(),
                            T = Math.floor(p.top),
                            E = Math.floor(T + S),
                            A = T > x && k > E,
                            C = S > w;
                        if (!A || s) {
                            var I = "top" === r || C || "auto" === r && x > T ? T - b - l - g : E - w + c;
                            n(200).visible() ? t("body,html").animate({
                                scrollTop: I
                            }, {
                                complete: f.resolve,
                                duration: 300
                            }) : (t("body,html").prop({
                                scrollTop: I
                            }), f.resolve())
                        } else f.resolve();
                        return f
                    },
                    isEquivalentTo: function(e, t) {
                        var i = t || {};
                        return this.constructor === e && n(3).isEqual(r(e, i), this.constructorArguments)
                    },
                    whenInserted: function(e) {
                        return this._whenInsertedDefer || (this._whenInsertedDefer = n(125).whenInserted(this.el, {
                            root: e,
                            timeout: 3e4
                        })), this._whenInsertedDefer
                    },
                    whenVisible: function() {
                        if (!this._whenVisibleDefer) {
                            var e = this._whenVisibleDefer = n(56).deferFrom(m(this.el));
                            this.addDeferred(e)
                        }
                        return this._whenVisibleDefer
                    },
                    _onModelChange: function(e, t, n, i) {
                        this._lastEventId !== i && (this._lastEventId = i, this.onModelChange(e, t, n))
                    },
                    onModelChange: function() {
                        this.shouldViewRerender() && this.rerender()
                    },
                    onCollectionChange: function(e, t) {
                        2 === arguments.length && (t = e), this.disposed || this.trigger("update:collection", t.length)
                    },
                    shouldViewRerender: function() {
                        return !0
                    },
                    onCollectionReset: function() {
                        this.shouldViewRerender() && this.rerender()
                    },
                    onAdd: n(3).noop,
                    onRemove: n(3).noop
                })
        }).call(t, n(1))
    },
    56: function(e, t, n) {
        "use strict";
        var i = n(1).Deferred().resolve(),
            r = n(1).Deferred().reject(),
            o = e.exports = {
                defer: function() {
                    return n(1).Deferred()
                },
                promise: function(e) {
                    var t = o.defer(),
                        n = t.promise();
                    return e.call(n, t.resolve, t.reject), n
                },
                deferFrom: function(e) {
                    var t = o.defer();
                    return e.then(t.resolve, t.reject), t
                },
                settled: function(e) {
                    if (!e || !e.length) return i;
                    var t = function() {
                        var t = n(1).Deferred(),
                            i = e.length,
                            r = Array(i),
                            o = !1,
                            s = function() {
                                o = !0
                            };
                        return e.forEach(function(e, n) {
                            e.fail(s).always(function() {
                                for (var e = arguments.length, s = Array(e), a = 0; e > a; a++) s[a] = arguments[a];
                                r[n] = s, 0 === --i && (o ? t.reject.apply(t, r) : t.resolve.apply(t, r))
                            })
                        }), {
                            v: t
                        }
                    }();
                    return "object" == typeof t ? t.v : void 0
                },
                all: function(e) {
                    return n(1).when.apply(n(1), e)
                },
                resolve: function(e) {
                    return void 0 === e ? i : n(1).Deferred().resolve(e)
                },
                reject: function(e) {
                    return void 0 === e ? r : n(1).Deferred().reject(e)
                },
                value: function(e) {
                    return i.then(function() {
                        return e
                    })
                },
                promisify: function(e) {
                    return function() {
                        for (var t = arguments.length, i = Array(t), r = 0; t > r; r++) i[r] = arguments[r];
                        var o = n(1).Deferred();
                        return i.push(function(e, t) {
                            e ? o.reject(e) : o.resolve(t)
                        }), e.apply(void 0, i), o.promise()
                    }
                },
                call: function(e) {
                    var t = n(1).Deferred();
                    try {
                        for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), o = 1; i > o; o++) r[o - 1] = arguments[o];
                        t.resolve(e.apply(void 0, r))
                    } catch (s) {
                        t.reject(s)
                    }
                    return t.promise()
                },
                mapEither: function(e, t) {
                    return t.then(e, e)
                },
                sequential: function(e) {
                    return e.reduce(function(e, t) {
                        return e.then(t, function() {
                            return t().then(o.reject)
                        })
                    }, i)
                },
                delay: function(e) {
                    var t = o.defer();
                    return window.setTimeout(function() {
                        t.resolve()
                    }, e), t
                },
                poll: function(e, t, n) {
                    var i = function(r) {
                        var s = e();
                        return s ? o.resolve() : r >= n ? o.reject() : o.delay(t).then(function() {
                            return i(r + 1)
                        })
                    };
                    return i(0)
                }
            }
    },
    59: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = n(55).get("me"),
                i = e && e.args;
            return i && t.id && t.hasPermalink(i.userPermalink)
        }

        function r() {
            return n(55).get("me").id || null
        }

        function o(e, t) {
            return t = t || "subpage", e && e[t] ? e[t] : "main"
        }

        function s(e, t) {
            var i = n(62).getQueryParam("in", t),
                r = ["sounds"];
            return i ? r.push(["sets", "sets/track_page"]) : e.playlistPermalink ? r.push(["sets", "sets/" + o(e)]) : r.push(["sounds", "sounds/" + o(e)]), r
        }

        function a(e) {
            var t = n(55).get("me").attributes;
            return t.permalink === e.userPermalink ? ["you", ["you", "you/" + o(e)]] : ["users", ["users", "users/" + o(e)]]
        }

        function l(e) {
            var t = e.user;
            return e.type = "user", e.userPermalink = t.get("permalink"), e.userId = t.id, e
        }

        function u(e) {
            var t = e.audible;
            if (!t) return e;
            var n = "sound" === t.resource_type;
            return e.type = t.resource_type, e.userId = t.get("user_id"), n ? e.soundId = t.id : (e.playlistId = t.id, e.playlistPermalink = t.get("permalink")), e
        }

        function c(e) {
            return e && e.attribution ? n(3).extend({}, e, {
                attribution: n(3).pick(e.attribution, "queryUrn", "position")
            }) : e
        }

        function d(e, t, n) {
            return t || (n && "pause" === e ? "pause" : null)
        }

        function h(e, t) {
            return t && "promoted" === t.campaign && (e.ad_urn = t.ad_urn, e.monetization_type = "promoted", e.promoted_by = t.promoted_by_urn), e
        }

        function p(e, t) {
            var i, r, c, d, h, p, f, g, m;
            switch (e) {
                case "tracking:search":
                    S.trackPageView("search", ["search", "search/" + t.category], {
                        queryUrn: t.queryUrn
                    });
                    break;
                case "tracking:charts":
                    S.trackPageView("charts", ["charts"], {
                        queryUrn: t.queryUrn
                    });
                    break;
                case "tracking:userLayout":
                    t = l(t), p = a(t), S.trackPageView(p[0], p[1]);
                    break;
                case "tracking:listenLayout":
                    t = u(t), f = s(t), S.trackPageView(f[0], f[1]);
                    break;
                case "tracking:front:genre":
                    t.click_category = "frontpage", t.click_name = "genre_grid", t.click_target = t.genreUrn, S.trackClick(null, t);
                    break;
                case "tracking:stats":
                    S.trackStats(t);
                    break;
                case "layout:change":
                    switch (n(1350).include(), i = t.args, t.layoutName) {
                        case "stream":
                        case "activity":
                            S.trackPageView("stream", ["stream", "stream/" + ("stream" === t.layoutName ? "main" : t.layoutName)]);
                            break;
                        case "collection":
                            S.trackPageView("collection", ["collection", i.subpage]);
                            break;
                        case "user":
                        case "user-network":
                            break;
                        case "listen":
                        case "listen-network":
                            break;
                        case "tags":
                            S.trackPageView("tags", ["tags", "tags/main"]);
                            break;
                        case "search":
                            break;
                        case "charts":
                            break;
                        case "premium":
                            !i || i.secondary && "gifts" !== i.secondary || (g = n(62).getQueryParam("ref"), S.trackPageView("premium", ["premium", n(62).stringify({
                                path: ["premium", "main", i.secondary, g]
                            })]));
                            break;
                        case "explore":
                            S.trackPageView("explore", ["explore", "explore/" + o(i, "category")]);
                            break;
                        case "upload":
                            S.trackPageView("upload", ["upload", "upload/main"]);
                            break;
                        case "people":
                            m = o(i, "tab"), S.trackPageView("people_" + m, ["people", "people/" + m]);
                            break;
                        case "home":
                        case "front":
                            S.trackPageView("homepage", ["home", "home/main"]);
                            break;
                        case "inbox":
                            S.trackPageView("messages", ["messages", o(i, "conversationId")]);
                            break;
                        case "stats":
                        case "track-stats":
                            S.trackPageView("stats", ["default", window.location]);
                            break;
                        case "track-manager":
                            S.trackPageView("track-manager", ["track-manager", "main"]);
                            break;
                        case "error":
                            S.trackPageView("error", ["error"]);
                            break;
                        case "logout":
                            S.trackPageView("logout");
                            break;
                        case "static-page":
                            S.trackPageView("static", ["static", o(i, "pageName")]);
                            break;
                        case "mobile":
                            S.trackPageView("static", ["static", "mobile/main"]);
                            break;
                        case "mobile-pulse":
                            S.trackPageView("static", ["static", "mobile-pulse"]);
                            break;
                        case "oscp":
                            S.trackPageView("premier", ["premier", i.subpage]);
                            break;
                        default:
                            S.trackPageView("default", ["default", window.location])
                    }
                    break;
                case "exception":
                    c = t.get("streamInfo"), c && (d = t.get("errorCode"), h = {
                        protocol: c.protocol || "undefined-protocol",
                        browser: n(535).getBrowser(),
                        flash: n(535).getFlashPlugin(),
                        os: n(535).getOperatingSystem(),
                        bitrate: c.bitrate || "undefined-bitrate",
                        format: c.extension || "undefined-extension",
                        url: c.url || "undefined-url"
                    }, d && (h.error_code = d), S.trackAudioError(h));
                    break;
                case "premium:pageView":
                    r = arguments[1], S.trackPageView("premium", ["premium", r]);
                    break;
                case "tracking:expandStats":
                    S.trackStatsClick("expand_stats_view");
                    break;
                case "tracking:appLoad":
                    S.trackAppLoad(t)
            }
        }

        function f(e) {
            var t = e.type,
                i = e.sound,
                r = e.ad,
                o = e.context,
                s = e.checkpointInterval,
                a = e.external_media,
                l = e.userInitiated,
                u = e.pause_reason,
                p = e.isRepeating,
                f = e.currentMetadata,
                m = ["duration", "monetization_model", "policy"],
                v = ["user_id"],
                _ = i.playlist,
                y = n(55).get("router").getLayoutInfo(),
                b = y && y.tracking || {},
                w = f.sourceInfo,
                x = f.originalModel,
                k = f.queryPosition,
                S = g(x),
                T = n(82).extractPromotedAttrs(x),
                E = n(3).defaults({}, o && o.attribution, {
                    position: k,
                    queryUrn: w.queryUrn
                }),
                A = Math.round(i.currentTime()),
                C = i.attrExists(m),
                I = i.attrExists(v);
            n(182).trackAudioEvent(n(56).all([!C && i.fetch(), !I && i.fetch()].filter(Boolean)).then(function() {
                var e = c({
                    action: "playStart" === t ? "play" : t,
                    attribution: E,
                    checkpointInterval: s,
                    external_media: a,
                    id: i.id,
                    in_playlist: _ ? _.getUrn() : null,
                    monetization_model: i.get("monetization_model"),
                    page_name: b.pageName,
                    page_urn: b.pageUrn,
                    pause_reason: d(t, u, l),
                    playheadPosition: A,
                    playlist_position: _ ? _.getSoundIndex(i) : null,
                    policy: i.get("policy"),
                    protocol: i.audio && i.audio.streamInfo && i.audio.streamInfo.protocol,
                    reposted_by: S,
                    source: w.type || null,
                    sourceVersion: w.version || null,
                    track_length: i.getMediaDuration(),
                    trackOwnerId: i.get("user_id"),
                    trigger: l ? "manual" : p ? "repeat" : "auto"
                });
                return T ? (h(e, T), "playStart" === t && n(82).trackEvent("play", T)) : r && (e.ad_urn = r.get("audio").ad_urn, e.monetization_type = "audio_ad", e.monetized_object = r.getMonetizableTrack().getUrn(), e.policy = null), e
            }))
        }

        function g(e) {
            return e && n(3).isFunction(e.get) && /repost$/.test(e.get("type")) ? n(98).generate("user", e.get("user").id) : null
        }

        function m(e, t) {
            t && t.click_category ? _(t) : v(e, t)
        }

        function v(e, t) {
            var o = n(55).get("router").getLayoutInfo(),
                s = r(),
                a = n(3).compact(e),
                l = o && o.layoutName || "user",
                u = o && o.tracking || {},
                d = u.pageName,
                h = u.pageUrn,
                p = i(o) ? "you" : l,
                f = x[p],
                g = n(3).defaults({
                    page_name: d,
                    page_urn: h
                }, c(t || {}));
            a.length < 1 && g.page_name && (a = g.page_name.split(":")), n(182).trackV0Click(f, a, s, g)
        }

        function _(e) {
            var t = n(55).get("router").getLayoutInfo(),
                i = t && t.tracking || {},
                r = i.pageName,
                o = i.pageUrn,
                s = n(3).defaults({
                    page_name: r,
                    page_urn: o
                }, c(e || {})),
                a = s.context && s.context.scope && s.context.scope.join(":");
            n(182).trackClick("1.16.0", n(3).extend({
                page_context: a
            }, n(3).omit(s, "context")))
        }

        function y(e) {
            var t = n(55).get("router").getLayoutInfo(),
                i = t && t.tracking || {},
                o = r(),
                s = e.urn,
                a = e.originView;
            e.page_name = i.pageName, e.page_urn = i.pageUrn, e.useAudioFinishHandler ? (w[a] || (w[a] = {}), w[a][s] || ! function() {
                var t = function(i) {
                    var r = parseInt(e.urn.split(":").pop(), 10),
                        o = i.sound.id;
                    r === o && (delete w[a][s], n(57).off("audio:finish", t))
                };
                w[a][s] = !0, n(57).on("audio:finish", t), n(182).trackImpression(o, e)
            }()) : (e.context && "promoted" === e.context.campaign && (e.ad_urn = e.context.ad_urn, e.monetization_type = "promoted", e.impression_object = e.context.urn, e.promoted_by = e.context.promoted_by_urn), n(182).trackImpression(o, e))
        }

        function b(e, t) {
            return function(i) {
                return t(n(3).defaults({}, e, i))
            }
        }
        var w = {},
            x = {
                listen: "sounds",
                "listen-network": "sounds",
                activity: "stream",
                stream: "stream",
                user: "users",
                "user-network": "users",
                tags: "tags",
                search: "search",
                you: "you",
                explore: "explore",
                home: "homepage",
                front: "homepage",
                premium: "premium",
                people: "people",
                upload: "upload",
                inbox: "messages",
                oscp: "premier",
                "track-manager": "track-manager",
                collection: "collection",
                "personal-recommended": "personal-recommended",
                history: "history",
                charts: "charts",
                station: "station"
            },
            k = void 0,
            S = e.exports = {
                initialize: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                    n(182).initialize(), T(e, t, !0), k = e
                },
                dispose: function() {
                    n(182).dispose(), T(k, !0, !1), k = null
                },
                trackClick: m,
                trackV1Click: _,
                trackV0Click: v,
                trackV0ClickWithPromotedParams: function(e, t) {
                    v(e, h(t))
                },
                trackAuthEvent: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = t.target,
                        i = void 0 === n ? "" : n,
                        r = t.object,
                        o = void 0 === r ? "" : r;
                    _({
                        click_category: "authentication",
                        click_name: e,
                        click_target: i,
                        click_object: o
                    })
                },
                trackAuthFunnel: function(e) {
                    y({
                        impression_category: "auth_funnel",
                        impression_object: e
                    })
                },
                trackFrontPageClick: b({
                    click_category: "frontpage"
                }, _),
                trackShareClick: b({
                    click_name: "share"
                }, function(e) {
                    return v(null, e)
                }),
                trackUploadFunnel: function(e, t) {
                    v(["upload_funnel"].concat(e), t)
                },
                trackClickThrough: function(e) {
                    var t = e.context;
                    v(null, h(n(3).defaults({
                        click_name: "item_navigation",
                        click_object: t.urn,
                        click_target: e.target || t.urn
                    }, e)))
                },
                trackPlayStart: f,
                trackPause: f,
                trackPageView: function(e, t, i) {
                    var o = n(55).get("router").getLayoutInfo(),
                        s = o && o.tracking || {},
                        a = n(3).compact(t || []),
                        l = r(),
                        u = {};
                    u.page_name = s.pageName, u.page_urn = s.pageUrn, u.locale = n(52).getLocale(), i && i.queryUrn && (u.query_urn = i.queryUrn), a.length < 1 && u.page_name && (a = u.page_name.split(":")), n(182).trackPageView(e, a, l, u)
                },
                trackAppLoad: function(e) {
                    var t = e.latency,
                        o = n(55).get("router").getLayoutInfo(),
                        s = o && o.layoutName || "user",
                        a = i(o) ? "you" : s,
                        l = x[a],
                        u = r();
                    n(182).trackAppLoad(l, u, t)
                },
                trackImpression: y,
                trackStats: function(e) {
                    n(182).trackStats(r(), e)
                },
                trackStatsClick: function(e) {
                    var t = "stats",
                        i = r(),
                        o = [e],
                        s = n(55).get("router").getLayoutInfo().layoutName,
                        a = {
                            stats: "main",
                            "track-stats": "track"
                        },
                        l = {
                            context: {
                                scope: ["stats", a[s]]
                            }
                        };
                    n(182).trackV0Click(t, o, i, l)
                },
                trackAudioError: function(e) {
                    n(182).trackAudioError(e)
                }
            },
            T = function() {
                var e = n(3).map({
                    ".header__logoLink": ["header", "logo"],
                    ".header__mainMenu-home": ["header", "home"],
                    ".header__mainMenu-stream": ["header", "stream"],
                    ".header__mainMenu-explore": ["header", "explore"],
                    '.moreMenu__link[href$="/community-guidelines"]': ["header", "community_guidelines"],
                    '.moreMenu__link[href$="/terms-of-use"]': ["header", "terms_of_use"],
                    '.moreMenu__link[href$="/creators"]': ["header", "creators"],
                    '.moreMenu__link[href$="/pages/privacy"]': ["header", "privacy_policy"],
                    '.moreMenu__link[href$="/pages/copyright"]': ["header", "copyright_information"],
                    '.moreMenu__link[href$="/imprint"]': ["header", "company_information"],
                    '.moreMenu__link[href$="/pages/contact"]': ["header", "about_us"],
                    '.moreMenu__link[href="http://blog.soundcloud.com"]': ["header", "blog"],
                    '.moreMenu__link[href="http://soundcloud.com/jobs"]': ["header", "jobs"],
                    '.moreMenu__link[href="http://developers.soundcloud.com"]': ["header", "developers"],
                    '.moreMenu__link[href="http://help.soundcloud.com"]': ["header", "help"],
                    ".moreMenu__keyboard": ["header", "keyboard_shortcuts"],
                    ".profileMenu__profile": ["header", "you", "profile"],
                    ".profileMenu__likes": ["header", "you", "likes"],
                    ".profileMenu__following": ["header", "you", "following"],
                    ".profileMenu__sets": ["header", "you", "sets"],
                    ".profileMenu__stats": ["header", "you", "stats"],
                    ".profileMenu__friends": ["header", "you", "who_to_follow"],
                    ".profileMenu__settings": ["header", "you", "settings"],
                    ".profileMenu__logout": ["header", "you", "logout"],
                    ".playbackTitle": ["play_controls", "title"],
                    ".playControls .playControl:not(.playing)": ["play_controls", "pause"],
                    ".playControls .playControl.playing": ["play_controls", "play"],
                    ".playControls .skipControl__previous": ["play_controls", "skip_back"],
                    ".playControls .skipControl__next": ["play_controls", "skip_forward"],
                    ".header__inner a.outgoing-messages": ["outgoing", "messages"],
                    ".header__inner a.outgoing-record": ["outgoing", "record"],
                    ".chooser__record": ["outgoing", "record"],
                    ".profileMenu a.outgoing-settings": ["outgoing", "settings"],
                    ".profileMenu a.outgoing-stats": ["outgoing", "you_stats"],
                    ".statsModule a.outgoing-stats-module": ["outgoing", "all_stats"],
                    ".userInfo a.sc-button-message": ["outgoing", "new_message"],
                    ".whoToFollowModule a.refresh-wtf": ["outgoing", "who_to_follow_refresh"],
                    ".soundActions__edit": ["edit", "main"],
                    ".latestActivities__viewAll": ["header", "activity", "view_all"],
                    ".headerMessages__viewAll": ["header", "messages", "view_all"],
                    ".listenContent__inner .listenContent__parentLink a": ["sets", "trackview", "set_button"],
                    ".listenContent__inner a.listenContent__prevLink": ["sets", "trackview", "previous_track"],
                    ".listenContent__inner a.listenContent__nextLink": ["sets", "trackview", "next_track"],
                    ".explore__bucket .carousel__next": ["explore", "skip_next"],
                    ".explore__bucket .carousel__prev": ["explore", "skip_prev"],
                    ".signupButton": ["signup", "start"],
                    ".loginButton": ["login", "start"],
                    ".signupTeaser .signupButton": ["signup-teaser", "signup"]
                }, function(e, t) {
                    return ["click", t, function(t) {
                        S.trackClick(e, t)
                    }]
                });
                return function(t, i, r) {
                    var o = r ? "on" : "off";
                    (!r || i) && n(57)[o]("all", p), t && e.forEach(function(e) {
                        t[o].apply(t, e)
                    })
                }
            }()
    },
    62: function(e, t, n) {
        "use strict";
        var i;
        i = n(97).pushState ? n(3).identity : function(e) {
            return e && e.replace(/#/, "")
        };
        var r = e.exports = n(3).defaults({
            parse: function(e, t) {
                return e = i(e), n(120).parse(i(e), t)
            },
            getQueryParam: function(e, t) {
                return r.getQueryParams(t)[e]
            },
            getFragmentParam: function(e) {
                return n(97).pushState ? r.parseQueryString(window.location.hash.substring(1))[e] : void 0
            },
            removeFragmentParam: function(e, t) {
                return t = t || window.location.href, t.replace(new RegExp("#(?:(.+)&?)?" + n(283).regexpEscape(e) + "(?:=[^&]*(?:&|$))?"), "#$1").replace(/#$/, "")
            },
            getQueryParams: function() {
                var e, t;
                return function(i) {
                    var o = i || (n(97).pushState ? window.location.search : window.location.hash.replace(/^[^?]*/, ""));
                    return o !== e && (e = o, t = r.parseQueryString(o)), t
                }
            }(),
            getQueryString: function(e) {
                return e ? e.replace(/^[^?#]*(\?[^#]*)?(?:#.*)?$/, "$1") : n(97).pushState ? window.location.search : window.location.hash.replace(/^[^?]*/, "")
            },
            getWindowOrigin: function() {
                var e = window.location,
                    t = e.protocol,
                    n = e.hostname,
                    i = e.port;
                return t + "//" + n + (i ? ":" + i : "")
            }
        }, n(120))
    },
    63: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return _ = _ || n(134).get(h)
            }

            function r() {
                return t.ajax({
                    url: "https://soundcloud.com/logout",
                    type: "DELETE",
                    dataType: "text"
                }).promise()
            }

            function o() {
                return ["auth_token", "p", "v"].some(function(e) {
                    return void 0 !== n(134).get(e)
                })
            }

            function s(e) {
                n(134).set(n(3).assign({}, p, {
                    value: e,
                    expirationInDays: 365
                }))
            }

            function a() {
                var e = n(55).get("me"),
                    t = n(56).defer();
                return e.lastFetchTime ? t.resolve() : n(57).once("connect:hasUserData", function() {
                    t.resolve()
                }), t
            }
            var l = n(59).trackV0Click,
                u = n(59).trackAuthEvent,
                c = void 0,
                d = void 0,
                h = "oauth_token",
                p = {
                    name: h,
                    secure: !0,
                    domainStrict: !0
                },
                f = "authentication:tokenChange",
                g = "non-expiring fast-connect purchase upload",
                m = "https://soundcloud.com/connect/token",
                v = new(n(105))("anonymous-user"),
                _ = null;
            n(57).on("broadcast:" + f, function(e) {
                e ? (_ = e, n(57).trigger("connect:login", "login")) : (n(57).trigger("connect:logout", {
                    isOriginator: !1
                }), l(["header", "you_log_out"]))
            }), (_ = i()) && (n(134).unset(n(3).assign({}, p, {
                domainStrict: !1
            })), s(_));
            var y = e.exports = n(3).assign({}, n(22).Events, {
                _redirectAfterSignupRoute: null,
                setAuthToken: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        i = t.excludeThis,
                        r = void 0 === i ? !0 : i;
                    n(57).broadcast({
                        excludeThis: r
                    }, f, e), s(e)
                },
                getAuthToken: i,
                isLoggedIn: function() {
                    return !!this.getAuthToken()
                },
                setSigninView: function(e) {
                    c = e
                },
                login: function(e) {
                    if (e = e || {}, this._redirectAfterSignupRoute = e.redirectRoute, e.implicitAction ? u(n(103).initiate, {
                            target: "implicit:" + e.implicitAction,
                            object: e.implicitTarget
                        }) : u(n(103).initiate, {
                            target: "explicit:" + (e.signup ? "create_account" : "sign_in")
                        }), !d)
                        if (d = n(56).defer().fail(function() {
                                d = null
                            }), this.isLoggedIn()) d.resolve();
                        else if (e.facebook && e.fb_token) n(234).signinWithFacebook(e.fb_token).then(function(e) {
                        var t = e.session && e.session.access_token;
                        t && (y.setAuthToken(t, {
                            excludeThis: !1
                        }), d.resolve())
                    });
                    else {
                        var t = {
                            onToken: function(e) {
                                y.setAuthToken(e, {
                                    excludeThis: !1
                                })
                            },
                            onSigninFinish: function(e) {
                                d && d.resolve(), e && y.hasSignedUp()
                            }
                        };
                        c.openSigninModal({
                            signinArgs: t,
                            onCancel: function() {
                                d.reject()
                            }
                        })
                    }
                    return d
                },
                hasSignedUp: function() {
                    var e = this._redirectAfterSignupRoute;
                    e && n(55).get("router").navigateToRoute(e, null, {
                        trigger: !0
                    }), a().then(function() {
                        return n(57).trigger("signup:successful")
                    }), n(1349).include(), this._redirectAfterSignupRoute = null
                },
                loginWithFacebook: function(e) {
                    return y.login({
                        facebook: !0,
                        fb_token: e
                    })
                },
                logout: function() {
                    return r().always(function() {
                        y.clearUserData(), u(n(103).sign_out), n(57).trigger("connect:logout", {
                            isOriginator: !0
                        })
                    })
                },
                clearUserData: function() {
                    n(134).unset(p), n(57).broadcast({
                        excludeThis: !0
                    }, f, "")
                },
                currentUserId: function() {
                    return n(55).get("me").id
                },
                getUserIdentifier: function() {
                    var e;
                    return e = y.isLoggedIn() ? y.currentUserId() : y.getAnonymousUserIdentifier()
                },
                getAnonymousUserIdentifier: function() {
                    for (var e = v.get("id"); !e || 1e3 > e;) e = Math.floor(1e9 * Math.random()), v.set("id", e);
                    return e
                },
                loginWithCookies: function() {
                    var e, i = n(56).defer();
                    return o() ? (e = n(62).modify(m, {
                        query: {
                            client_id: n(55).get("client_id"),
                            scope: g
                        }
                    }), t.ajax(e, {
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json"
                    }).done(function(e) {
                        y.setAuthToken(e.access_token), i.resolve()
                    }).fail(i.reject)) : i.reject(), i
                },
                loginToClassicSoundCloud: function() {
                    o() || t.ajax({
                        type: "post",
                        url: "https://soundcloud.com/session",
                        data: {
                            access_token: y.getAuthToken(),
                            format: "json"
                        }
                    })
                }
            })
        }).call(t, n(1))
    },
    65: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !(e && e.last_modified && t && t.last_modified && Date.parse(e.last_modified) > Date.parse(t.last_modified))
        }
        var r = n(22).Model.extend(n(1327), {
            resource_type: null,
            lastFetchTime: null,
            _submodels: null,
            submodelMap: null,
            getEndpointUrl: n(23).getUrlForEndpoint,
            getEndpointForMethod: function(e) {
                return null
            },
            initialize: function(e, t) {
                var i = this;
                this._submodels = this._submodels || [], this.options = t || {}, n(3).each(this.submodelMap, function(e, t) {
                    i.on("change:" + t, function() {
                        i.createSubmodel(e, t)
                    })
                }), this.setup.apply(this, arguments), n(3).each(this.submodelMap, function(e, t) {
                    i.get(t) && i.createSubmodel(e, t)
                })
            },
            setup: n(3).noop,
            getSubmodelOptions: function(e) {
                return null
            },
            createSubmodel: function(e, t) {
                var n = this,
                    i = this.getSubmodelOptions(t);
                [].concat(this.get(t)).forEach(function(t) {
                    var r = new e(t, i);
                    r.lastFetchTime = Date.now(), n.addSubmodel(r)
                })
            },
            addSubmodel: function() {
                for (var e = this, t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                n.forEach(function(t) {
                    -1 === e._submodels.indexOf(t) ? e._submodels.push(t) : t.release()
                })
            },
            getAttributesToBeSaved: function() {
                return this.toJSON()
            },
            save: function(e, t) {
                var i, r = this,
                    o = "json" === n(3).result(this, "saveFormat"),
                    s = n(3).result(this, "saveWithWrapper"),
                    a = o ? "application/json" : void 0,
                    l = this.getAttributesToBeSaved(),
                    u = e ? n(3).pick(l, Object.keys(e)) : l,
                    c = s ? (i = {}, i[n(930).toAPIResource(this.resource_type)] = u, i) : u,
                    d = o ? JSON.stringify(c) : n(62).param(c);
                return n(22).Model.prototype.save.call(this, e, n(3).assign({
                    url: this.saveUrl(e, t),
                    data: d,
                    contentType: a
                }, t)).done(function(e) {
                    r.set(e), r.updateResourceId()
                })
            },
            set: function(e, t, r) {
                var o, s;
                if (null == e) return this;
                if ("object" == typeof e) o = e, r = t;
                else {
                    var a;
                    a = {}, a[e] = t, o = a
                }
                return !i(this.attributes, o) && (o = n(3).pick(o, n(3).difference(n(3).keys(o), n(3).keys(this.attributes))), n(3).isEmpty(o)) ? this : (s = this.constructor.normalize ? this.constructor.normalize(n(3).clone(o)) : o, n(3).each(this.submodelMap, function(e, t) {
                    var i = o[t];
                    i && e && e.normalize && !n(3).isArray(i) && (s[t] = e.normalize(n(3).clone(i)))
                }), n(22).Model.prototype.set.call(this, s, r))
            },
            saveUrl: function() {
                return n(3).result(this, "baseUrl")
            },
            saveFormat: "param",
            saveWithWrapper: !0,
            destroy: function(e) {
                var t = n(22).Model.prototype.destroy.call(this, n(3).assign({
                    url: this.isNew() ? null : this.destroyUrl()
                }, e));
                return this.constructor.removeInstance(this), t
            },
            destroyUrl: function() {
                return n(3).result(this, "baseUrl")
            },
            baseUrl: n(3).noop,
            url: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "baseUrl" : arguments[0];
                return n(3).result(this, e)
            },
            toJSON: function() {
                var e = n(22).Model.prototype.toJSON.apply(this, arguments);
                return e._resource_id = this.resource_id, e._resource_type = this.resource_type, e
            },
            toString: function() {
                return this.resource_type ? this.resource_type + " (" + (this.isNew() ? "new" : this.resource_id) + "): " + (this.attributes.permalink || this.attributes.title || this.attributes.name) : Object.prototype.toString.call(this)
            },
            hasDataForView: function(e) {
                return this.attrExists(e)
            },
            updateResourceId: function() {
                var e = this.constructor.hashFn(this.attributes),
                    t = this.resource_id;
                e && (this.resource_id = e, this.constructor.instances.changeKey(t, e))
            },
            attrExists: function(e) {
                var t = Object.prototype.hasOwnProperty;
                return n(3).isArray(e) ? e.every(t, this.attributes) : t.call(this.attributes, e)
            },
            equivalentTo: function(e) {
                return this === e || this.id && this.id === e.id
            },
            getUrn: function() {
                var e = this.urnPrefix,
                    t = this.id;
                return e && t ? e + ":" + t : void 0
            },
            isPopulated: function() {
                return !!this.lastFetchTime
            },
            forceChange: function(e) {
                var t = this.get(e);
                return this.unset(e, {
                    silent: !0
                }), this.set(e, t), this
            }
        }, {
            _resolve: function(e, t, i) {
                var r = e.instances.find(i);
                if (r) return n(56).resolve(r);
                var o = n(62).stringify({
                    scheme: "https",
                    host: n(55).get("public_api_host").replace(/^https?:\/\/api\./, ""),
                    path: t
                });
                return n(23).callEndpoint("resolve", {}, {
                    url: o
                }).then(function(t) {
                    var n = t.body,
                        i = new e(n);
                    return i.release(), i
                })
            }
        });
        e.exports = n(558).applyTo(r, {
            hashFn: function(e) {
                return e && (e.id || e.resource_id) || null
            },
            onCleanup: function(e) {
                var t = e._submodels;
                t && t.length && (n(3).invoke(t, "release"), t.length = 0)
            },
            prepareArgs: function(e, t) {
                return t = t || {}, e = e || {}, t.parse && (e = this.parse(e), t = n(3).clone(t), t.parse = !1), [e, t]
            },
            prepareInstance: function(e, t) {
                return t = t || {}, t.collection && (this.lastFetchTime = Date.now()), n(3).isEmpty(e) || this.set(e), delete this.attributes.resource_id, this
            },
            getIncrementValue: function(e, t) {
                var n = t && t.collection;
                return n ? n.constructor.instances.countFor(n.resource_id) : 1
            }
        })
    },
    67: function(e, t, n) {
        "use strict";

        function i() {
            a.forEach(function(e) {
                l[e] = function() {
                    return r(), l[e].apply(l, arguments)
                }
            })
        }

        function r() {
            var e = n(55).get("rollouts").get("play_queue"),
                t = e ? o : n(971);
            e && window.console.info("Using beta version of PlayManager."), a.forEach(function(e) {
                l[e] = t[e].bind(t)
            }), l._isNew = function() {
                return e
            }
        }
        var o = n(92),
            s = n(3).functions(n(971)),
            a = s.filter(function(e) {
                return "_" !== e[0]
            }),
            l = e.exports = {
                _resetProxy: function() {
                    o = n(970)(), i()
                },
                _isNew: function() {
                    return n(55).get("rollouts").get("play_queue")
                }
            };
        i()
    },
    69: function(e, t, n) {
        "use strict";

        function i(e) {
            return null == e || 0 === e.length
        }
        e.exports = n(100).extend({
            nullable: !1,
            message: n(52).t("This field must not be empty"),
            shouldCheck: function() {
                return !0
            },
            check: function(e, t) {
                var n = this.shouldCheck.call(this._form) && i(e);
                t(!n)
            }
        })
    },
    72: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = [n(305).codes.AUD, n(305).codes.NZD];
            return t.indexOf(e.getCurrency()) > -1
        }

        function r(e, t) {
            return e.getPlan() !== t || e.hasCreatorSubHug()
        }

        function o(e) {
            return e.subscriptions
        }
        var s = e.exports = {
            productIds: n(267),
            htDiscount: {
                AUD: "10",
                CAD: "8",
                EUR: "8",
                GBP: "8",
                NZD: "11",
                USD: "8"
            },
            htPrice: {
                AUD: "11.99",
                CAD: "9.99",
                EUR: "9.99",
                GBP: "9.99",
                NZD: "12.99",
                USD: "9.99"
            },
            proUnlimitedHtPrice: {
                AUD: "1.99",
                CAD: "1.99",
                EUR: "1.99",
                GBP: "1.99",
                NZD: "1.99",
                USD: "1.99"
            },
            isIntroductoryTerritory: i,
            userEligibleToBuyPro: function(e) {
                return r(e, s.productIds.CREATOR_SUBSCRIPTION_PRO)
            },
            userEligibleToBuyProUnlimited: function(e) {
                return r(e, s.productIds.CREATOR_SUBSCRIPTION_PRO_UNLIMITED)
            },
            isEligibleToBuy: r,
            getIcon: function(e, t) {
                var i = o(e),
                    r = i && i.product.name,
                    s = i && i.product.id;
                return s === this.productIds.CREATOR_SUBSCRIPTION_PRO || s === this.productIds.CREATOR_SUBSCRIPTION_PRO_UNLIMITED ? (t = n(3).assign({}, t, {
                    prefix: "sc-status-icon",
                    title: r || "",
                    type: "creator"
                }), n(941).render(t)) : ""
            },
            getIconLink: function(e, t) {
                var i, r, s, a, l = this.getIcon(e, t);
                return l ? (s = n(61).getRoute("premium", null, null, t && t.referral), i = o(e), r = i && i.product.name, a = n(52).t("[[planName]] user", {
                    planName: r
                }), '<a class="premiumIconLink" href="' + s + '" title="' + a + '">' + l + "</a>") : l
            },
            getNextLevelProductId: function(e) {
                var t = e.getPlan();
                return t === this.productIds.CREATOR_SUBSCRIPTION_FREE || "lite" === t || void 0 === t ? this.productIds.CREATOR_SUBSCRIPTION_PRO : this.productIds.CREATOR_SUBSCRIPTION_PRO_UNLIMITED
            },
            getQuotaInfo: function(e, t) {
                var i, r, o = e.getUploadSecondsLeft(),
                    s = e.getUploadSecondsUsed(),
                    a = e.getUploadMinutesLeft(),
                    l = e.getUploadMinutesUsed(),
                    u = e.hasProPlanLevel() ? n(52).t("Pro plan") : n(52).t("free"),
                    c = e.isOverQuota();
                return e.hasUnlimitedUpload() ? !1 : (i = Math.round((o + s) / 60), r = i / 60, t ? {
                    minutesLeft: a,
                    minutesUsed: l,
                    limitInMinutes: i,
                    limitInHours: r,
                    isOverQuota: c
                } : 0 > o ? n(52).tp("Youâ€™re over your [[planName]] [[limitInHours]]-hour limit by <strong>1</strong> minute.", "Youâ€™re over your [[planName]] [[limitInHours]]-hour limit by <strong>%d</strong> minutes.", -a, {
                    planName: u,
                    limitInHours: r
                }) : n(52).tp("You have 1 minute left.", "You have %d minutes left.", a))
            }
        }
    },
    73: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return n(3).defaults(t, e.prototype.defaults), e === s ? t : i(e.__super__.constructor, t)
        }

        function r(e) {
            this.next_href && (this.next_href = n(62).modify(this.next_href, {
                query: e
            }))
        }
        var o = {},
            s = e.exports = n(558).applyTo(n(22).Collection.extend({
                next_href: null,
                lastFetchTime: null,
                model: o,
                getEndpointUrl: n(23).getUrlForEndpoint,
                getEndpointForMethod: function(e) {
                    return null
                },
                defaults: {
                    offset: 0,
                    limit: 10,
                    secret_token: null,
                    maxPageSize: 100
                },
                initialize: function(e, t) {
                    this.options = i(this.constructor, t || {}), this.setup(this.options)
                },
                setup: n(3).noop,
                _prepareModel: function(e) {
                    var t = e instanceof n(22).Model,
                        i = n(22).Collection.prototype._prepareModel.apply(this, arguments);
                    return i && i.hold(this._usageCount() - (t ? 0 : 1)), i
                },
                _removeReference: function(e) {
                    return e.release(this._usageCount()), n(22).Collection.prototype._removeReference.apply(this, arguments)
                },
                fetch: function(e) {
                    var t = this,
                        i = e && e.url || n(3).result(this, "url");
                    return i ? this._requests && this._requests[i] || n(22).Collection.prototype.fetch.call(this, e).done(function() {
                        !t.isFullyPopulated() || 0 !== t.length || e && e.reset || t.reset([])
                    }) : n(56).defer().done(e && e.success).resolve({})
                },
                fetchUntilResults: function() {
                    var e = this,
                        t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        i = this.options.limit,
                        r = this.length,
                        o = n(3).defaults({
                            reset: !1
                        }, t),
                        s = function(t) {
                            return e.fetch(t).then(a)
                        },
                        a = function() {
                            var t = e.length,
                                n = t > r,
                                i = e.isFullyPopulated();
                            return n || i ? void 0 : (e.setLimit(Math.min(2 * e.options.limit, e.options.maxPageSize)), s(o))
                        };
                    return s(t).always(function() {
                        e.setLimit(i)
                    })
                },
                fetchUntilLength: function(e) {
                    var t = this,
                        i = function() {
                            return t.length < e && !t.isFullyPopulated()
                        };
                    if (!i()) return n(56).resolve();
                    var r = 20,
                        o = this.options.limit,
                        s = 0,
                        a = function(e) {
                            return t.fetch(e).then(l)
                        },
                        l = function() {
                            if (i()) {
                                var o = e - t.length;
                                return t.setLimit(n(132).clamp(o, r, t.options.maxPageSize)), a({
                                    reset: 0 === s++ && !t.isPopulated(),
                                    add: !0,
                                    remove: !1
                                })
                            }
                        };
                    return n(56).resolve().then(l).always(function() {
                        t.setLimit(o)
                    })
                },
                bulkFetch: function(e) {
                    var t, i, o = this,
                        s = arguments[1],
                        a = arguments[2];
                    if (!s) {
                        if (this._requests = this._requests || {}, this._requests.bulk) return this._requests.bulk;
                        this._requests.bulk = s = n(56).defer(), s.always(function() {
                            delete o._requests.bulk
                        }), a = this.length, t = this.options.limit, this.next_href || (this.options.limit = e - this.length), s.always(function() {
                            o.options.limit = t, r.call(o, {
                                limit: t
                            })
                        })
                    }
                    return this.length < e && this.url() ? (i = this.lastFetchTime ? {
                        add: !0,
                        reset: !1,
                        remove: !1
                    } : {
                        reset: !0
                    }, i.silent = !0, r.call(this, {
                        limit: e - this.length
                    }), this.fetch(i).done(function() {
                        o.bulkFetch(e, s, a)
                    }).fail(s.reject)) : (a ? this.rest(a).forEach(function(e) {
                        o.trigger("add", e, o, {})
                    }) : this.trigger("reset", this, {}), s.resolve()), s
                },
                removeWhere: function(e) {
                    var t = this.models.filter(e, this);
                    return t.length && this.remove(t), t
                },
                url: function() {
                    if (null !== this.next_href) return this.next_href;
                    var e = n(62).parse(n(3).result(this, "baseUrl"));
                    return n(3).assign(e.query, {
                        limit: this.options.limit,
                        offset: this.options.offset,
                        linked_partitioning: 1
                    }), this.options.secret_token && (e.query.secret_token = this.options.secret_token), n(62).stringify(e)
                },
                parse: function(e) {
                    return e.collection
                },
                empty: function() {
                    this.next_href = null, this.lastFetchTime = null, this.options.offset && (this.options.offset = 0), this.reset(null, {
                        silent: !0
                    })
                },
                setToFullyPopulated: function() {
                    this.lastFetchTime = Date.now(), this.next_href = !1
                },
                hasDataForView: function(e) {
                    return this.lastFetchTime ? e && e.minModels ? this.isFullyPopulated() || this.length >= e.minModels : !0 : !1
                },
                isPopulated: function() {
                    return !!this.lastFetchTime
                },
                isFullyPopulated: function() {
                    return this.next_href === !1
                },
                setLimit: function(e) {
                    this.options.limit = e, r.call(this, {
                        limit: e
                    })
                },
                indexOfEquivalentModel: function(e) {
                    var t = this,
                        n = arguments.length <= 1 || void 0 === arguments[1] ? this.models : arguments[1],
                        i = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                        r = -1;
                    return i && (n = n.slice(i)), n.some(function(n, o) {
                        return t.compareModels(e, n) ? (r = o + i, !0) : void 0
                    }), r
                },
                indexesOfEquivalentModels: function(e, t) {
                    for (var n = [], i = 0; - 1 !== (i = this.indexOfEquivalentModel(e, t, i));) n.push(i), i++;
                    return n
                },
                compareModels: function(e, t) {
                    return e === t || e.equivalentTo(t)
                }
            }), {
                hashFn: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = t.resource_id,
                        i = void 0 === n ? null : n;
                    return i
                },
                onHold: function(e, t, n) {
                    e.length && e.at(0).hold && e.invoke("hold", n)
                },
                onRelease: function(e, t, n) {
                    e.length && e.at(0).release && e.invoke("release", n)
                }
            })
    },
    74: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = !1,
                o = e.state,
                s = e.list,
                a = e.target,
                l = e.origin,
                c = "user" !== e.originType || l === n(63).currentUserId(),
                d = n(56).defer();
            if (c && !n(63).isLoggedIn()) n(63).login({
                context: e.context,
                implicitAction: e.action,
                implicitTarget: n(98).generate(e.targetType, e.target)
            }).done(function() {
                e.origin = n(63).currentUserId(), i(e).done(d.resolve).fail(d.reject)
            }).fail(d.reject);
            else {
                if (s && c) {
                    var h = function() {
                        if (s.get(a) !== o) {
                            if (s.toggle(a, o), e.state = o = s.get(a), e.persist) {
                                var l = s.setRemote(a, o, e.listOptions);
                                l && l.fail(function(t, s) {
                                    "abort" !== s && r(n(3).assign({
                                        xhr: t
                                    }, e)), i(n(3).defaults({
                                        persist: !1,
                                        state: !o
                                    }, e))
                                })
                            }
                        } else t = !0
                    };
                    s.fetch().done(h).done(d.resolve).fail(d.reject)
                } else d.resolve();
                d.done(function() {
                    t || u(e)
                })
            }
            return d
        }

        function r(e) {
            var t = n(3).some(h._errHandlers, function(t) {
                return t(e) === !1
            });
            t || h.trigger("error", e)
        }

        function o(e) {
            return e = e || {}, {
                state: e.state,
                origin: e.origin,
                originType: e.originType,
                object: e.object,
                target: e.target,
                targetType: e.targetType,
                targetModel: e.targetModel,
                context: e.context,
                attribution: e.context && e.context.attribution
            }
        }

        function s(e) {
            return "user" === e.originType && e.origin === n(55).get("me").id
        }

        function a(e, t, i) {
            if (s(i)) {
                var r = i.state !== !1,
                    o = n(3).defaults(t || {}, {
                        object: n(98).generate(i.targetType, i.target),
                        target: null,
                        clickNameOn: "add",
                        clickNameOff: "remove"
                    });
                i.click_name = e + "::" + o[r ? "clickNameOn" : "clickNameOff"], i.click_object = o.object, i.click_target = o.target, i.context && i.context.source && (i.click_attributes = {
                    source: i.context.source
                }), c(null, i)
            }
        }

        function l(e) {
            var t = o(e),
                i = t.targetType;
            "comment" === i && (t.target = t.targetModel.get("track_id"), t.targetType = "track"), ("comment" === i || "playlist" === i) && a(i, null, n(3).assign({}, t, {
                state: !1
            }))
        }

        function u(e) {
            var t = e.action,
                n = e.origin,
                i = e.target,
                r = e.originType,
                s = e.targetType;
            h.trigger([t, t + ":origin:" + r + ":" + n, i ? t + ":target:" + s + ":" + i : ""].join(" "), o(e))
        }
        var c = n(59).trackV0ClickWithPromotedParams,
            d = {
                blockings: new(n(986)),
                followers: new(n(991)),
                followings: new(n(478)),
                likedStations: new(n(992)),
                playlistLikes: new(n(995)),
                playlistReposts: new(n(996)),
                soundLikes: new(n(998)),
                soundReposts: new(n(999))
            },
            h = e.exports = n(3).assign({}, n(22).Events, {
                bindErrorHandler: function(e) {
                    return h._errHandlers.unshift(e), this
                },
                unbindErrorHandler: function(e) {
                    var t = h._errHandlers;
                    return t.splice(t.indexOf(e), 1), this
                },
                _errHandlers: [],
                notify: function(e, t) {
                    t = n(3).defaults({}, t, {
                        action: e,
                        origin: n(63).currentUserId(),
                        originType: "user",
                        object: null,
                        target: null,
                        targetType: null,
                        targetModel: null,
                        state: !0
                    });
                    var i = o(t);
                    switch (e) {
                        case "comment":
                            a(e, null, i);
                            break;
                        case "createPlaylist":
                            a("playlist", {
                                object: i.object.getUrn()
                            }, i);
                            break;
                        case "addToPlaylist":
                            a("track_to_playlist", {
                                object: i.object.getUrn(),
                                target: n(98).generate(i.targetType, i.target)
                            }, i)
                    }
                    u(t)
                },
                follow: function(e, t, r) {
                    var s = n(63).currentUserId();
                    r = n(3).defaults({}, r, {
                        action: "follow",
                        origin: s,
                        originType: "user",
                        target: e,
                        targetType: "user",
                        state: t,
                        persist: !0
                    });
                    var l = r,
                        u = l.origin,
                        c = l.target,
                        h = l.state;
                    if (u === c) return n(56).resolve();
                    if (c !== s) return r.list = u === s ? d.followings : null, a("follow", null, o(r)), i(r);
                    var p = function() {
                        var e = n(56).defer(),
                            t = d.followers;
                        return t.fetch().done(function() {
                            t.get(u) !== h && (t.toggle(u, h), r.state = t.get(u), i(r).done(function() {
                                a("follow", null, o(r)), e.resolve()
                            }).fail(e.reject))
                        }), {
                            v: e
                        }
                    }();
                    return "object" == typeof p ? p.v : void 0
                },
                destroy: function(e, t) {
                    return t = n(3).defaults({}, t, {
                        action: "destroy",
                        origin: n(63).currentUserId(),
                        originType: "user",
                        target: e.id,
                        targetType: e.resource_type,
                        targetModel: e,
                        state: !0
                    }), l(t), u(t), e.destroy()
                },
                like: function(e, t, r, s) {
                    return s = n(3).defaults({}, s, {
                        action: "like",
                        origin: n(63).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: t,
                        state: r,
                        persist: !0,
                        list: "playlist" === t ? d.playlistLikes : d.soundLikes
                    }), a("like", null, o(s)), i(s)
                },
                addToPlayHistory: function(e, t, i) {
                    if (n(63).isLoggedIn()) {
                        var r = {
                                context: t,
                                targetType: "sound",
                                target: e,
                                state: i
                            },
                            o = n(3).omit({
                                context_urn: t ? t.resourceUrn : null,
                                track_urn: "soundcloud:tracks:" + e
                            }, n(3).isNull);
                        h.notify("addToPlayHistory", r), n(23).callEndpoint("playHistoryAdd", null, null, null, o)
                    }
                },
                clearPlayHistory: function() {
                    n(63).isLoggedIn() && (h.notify("clearPlayHistory"), n(23).callEndpoint("playHistoryClear"))
                },
                likeStation: function(e, t, r) {
                    return r = n(3).defaults({}, r, {
                        action: "likeStation",
                        origin: n(63).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: "station",
                        object: e,
                        state: t,
                        persist: !0,
                        list: d.likedStations
                    }), a("like", null, o(r)), i(r)
                },
                repost: function(e, t, r, s) {
                    return s = n(3).defaults({}, s, {
                        action: "repost",
                        origin: n(63).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: t,
                        state: r,
                        persist: !0,
                        list: "playlist" === t ? d.playlistReposts : d.soundReposts
                    }), a("repost", null, o(s)), i(s)
                },
                block: function(e, t, r, o, s) {
                    r = !(!t || !r), s = n(3).defaults({}, s, {
                        action: "block",
                        origin: n(63).currentUserId(),
                        originType: "user",
                        target: e,
                        targetType: "user",
                        state: t,
                        persist: !0,
                        list: d.blockings,
                        listOptions: {
                            reported: r,
                            remove_activities: o
                        }
                    });
                    var a = i(s);
                    return t && n(63).isLoggedIn() && h.follow(n(63).currentUserId(), !1, {
                        origin: e
                    }), a
                }
            })
    },
    79: function(e, t, n) {
        "use strict";
        e.exports = n(65).extend(n(1306), n(1303), n(1304), {
            isPopulated: function() {
                return !0
            },
            destroy: function(e) {
                return this.trigger("destroy", this, this.collection, e), n(56).resolve()
            }
        }, {
            hashFn: function(e, t) {
                return e && e.id || t && t.resource_id
            }
        })
    },
    82: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.sc_a_id
        }

        function r(e) {
            o.set("sc_a_id", e.sc_a_id)
        }
        var o = new(n(105))("promoted-persistent"),
            s = {
                addToSet: ["add_to_set_click"],
                follow: ["follow_click"],
                like: ["like_click"],
                play: ["sound_play", "SCAudioStart"],
                skip: ["sound_skip"],
                finish: ["sound_finish"],
                impression: ["impression"],
                repost: ["repost_click"],
                share: ["share_click"],
                adClick: ["ad_click"],
                soundClickThrough: ["sound_click"],
                sponsorClickThrough: ["sponsor_click"],
                userClickThrough: ["profile_click"],
                purchaseClickThrough: ["purchase_click"],
                pause: ["SCAudioPause"],
                resume: ["SCAudioResume"],
                first_quartile: ["SCAudioFirstQuartile"],
                second_quartile: ["SCAudioSecondQuartile"],
                third_quartile: ["SCAudioThirdQuartile"]
            },
            a = {
                search: "promotedSearch",
                suggestedUsers: "promotedUsers",
                uploadTakeover: "promotedUploadTakeover",
                uploadText: "promotedUploadText"
            },
            l = {
                dashboxListen: "listen",
                dashboxNotifications: "notifications",
                dashboxStream: "stream",
                dashboxTags: "tags",
                dashboxUserProfile: "profile"
            },
            u = [],
            c = e.exports = {
                getAdUrl: function(e, t) {
                    var i = n(3).assign(c._getPromotedQueryParams(), t),
                        r = a[e];
                    return n(23).getUrlForEndpoint(r, {}, i)
                },
                getAudioAdsUrl: function(e) {
                    var t = c._getPromotedQueryParams();
                    e && e.trackId && (t.track_id = e.trackId);
                    var i = n(1315).segments();
                    i && i.length && (t.krux_segments = i.join(","));
                    var r = n(1316).userId();
                    return void 0 !== r && (t.rubicon_user_id = r), n(23).getUrlForEndpoint("audioAd", {}, t)
                },
                getDashboxUrl: function(e, t) {
                    var i = c._getPromotedQueryParams();
                    i.locale = t;
                    var r = {
                        path: "/dashbox/" + l[e],
                        query: i
                    };
                    return n(62).stringify(r, n(55).get("api_v2_host"))
                },
                getAdUrlQuery: function() {
                    var e = c._getPromotedQueryParams();
                    return e.user_urn = n(55).get("me").getUrn(), e.promoted_playlist = !0, {
                        query: e
                    }
                },
                extractPromotedAttrs: function(e) {
                    return e && e.isPromoted && e.isPromoted() ? e.pick("ad_urn", "campaign", "promoted_by", "promoted_by_urn", "tracking") : void 0
                },
                parseResponse: function(e) {
                    var t = n(3).first(e.promoted);
                    return i(t) ? (r(t), t) : {}
                },
                parseDashboxResponse: function(e) {
                    return i(e) && r(e), e && e.data ? e.data.dashbox : e
                },
                parseStreamResponse: function(e) {
                    return e && e.collection && e.collection.filter(function(e) {
                        return e.promoted
                    }).forEach(function(e) {
                        i(e.promoted) && r(e.promoted), e.promoted && (e.promoted.ad_urn && (e.ad_urn = e.promoted.ad_urn), e.promoted.tracking && (e.tracking = e.promoted.tracking), e.campaign = "promoted", delete e.promoted), e.user && (e.promoted_by = e.user, e.promoted_by_urn = n(98).generate(e.promoted_by.kind, e.promoted_by.id), delete e.user)
                    }), e
                },
                trackEvent: function(e, t) {
                    var n = "impression" === e ? c._sendRequestOnce : c._sendRequest;
                    c._getTrackingUrls(e, t).forEach(n)
                },
                _getTrackingUrls: function(e, t) {
                    var i = s[e] || [],
                        r = t && t.tracking || {},
                        o = n(3).flatten(i.map(function(e) {
                            return r[e] || []
                        }));
                    return n(3).isArray(o) ? o : [o]
                },
                _getPromotedQueryParams: function() {
                    return {
                        sc_a_id: o.get("sc_a_id"),
                        device_locale: n(52).getLocale() && n(52).getLocale().replace(/_/g, "-")
                    }
                },
                _sendRequest: function(e) {
                    var t = new window.Image;
                    t.src = e
                },
                _sendRequestOnce: function(e) {
                    -1 === u.indexOf(e) && (c._sendRequest(e), u.push(e))
                }
            }
    },
    83: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return {
                title: e,
                value: t
            }
        }

        function r(e) {
            return {
                title: a(e),
                value: e
            }
        }

        function o(e, t) {
            return n(3).find(Object.keys(e), function(n) {
                return e[n] === t
            })
        }

        function s(e) {
            return n(3).reduce(e, function(e, t) {
                return n(3).assign(e, t)
            }, {})
        }

        function a(e) {
            return n(283).titleCase(e.replace("_", " "))
        }
        var l = s(n(505)),
            u = ["US", "IE", "GB", "FR", "PR", "AS", "GU", "MP", "VI", "GG", "JE", "IM", "GP", "MQ", "RE", "AU", "NZ", "CA", "DE", "NL"],
            c = {
                AI: "GB",
                AS: "US",
                AW: "NL",
                AX: "FI",
                BL: "FR",
                BM: "GB",
                BQ: "NL",
                BV: "NO",
                CC: "AU",
                CK: "NZ",
                CW: "NL",
                CX: "AU",
                FK: "GB",
                FO: "DK",
                GG: "GB",
                GI: "GB",
                GL: "DK",
                GP: "FR",
                GS: "GB",
                GU: "US",
                IM: "GB",
                IO: "GB",
                JE: "GB",
                KY: "GB",
                MF: "FR",
                MP: "US",
                MQ: "FR",
                MS: "GB",
                NC: "FR",
                NF: "AU",
                NU: "NZ",
                PF: "FR",
                PM: "FR",
                PN: "GB",
                PR: "US",
                RE: "FR",
                SH: "GB",
                SJ: "NO",
                SX: "NL",
                TC: "GB",
                TF: "FR",
                TK: "NZ",
                VG: "GB",
                VI: "US",
                WF: "FR"
            },
            d = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "ES", "SE", "GB"];
        e.exports = {
            countryToCode: function(e) {
                return o(l, e) || ""
            },
            codeToCountry: function(e) {
                return l[e] || ""
            },
            country: function(e) {
                return new i(l[e], e)
            },
            countries: function(e) {
                var t;
                return t = e && e.length > 0 && "worldwide" !== e[0] ? s(n(3).chain(e).map(n(3).propertyOf(n(505))).compact().value()) : l, n(3).chain(t).map(i).sortBy("title").value()
            },
            countryCodes: function(e) {
                var t = e ? n(505)[e] : l;
                return t && Object.keys(t)
            },
            monetizableCountryCodes: function() {
                return u
            },
            regionCodes: function() {
                return Object.keys(n(505)).sort()
            },
            regions: function() {
                return this.regionCodes().map(r)
            },
            complement: function(e) {
                return n(3).difference(Object.keys(l), e)
            },
            euCountryCodes: function() {
                return d
            },
            isEUCountry: function(e) {
                return d.includes(e)
            },
            parentCountryCode: function(e) {
                return c[e] || e
            }
        }
    },
    84: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                e = e || {};
                var i = n(3).assign({}, n(302), {
                        422: n(3).noop
                    }),
                    r = {},
                    o = [_];
                return e.code ? r.code = e.code : r.result_url = window.location.protocol + "//" + window.location.host + "/" + b, e.orderUrn ? (o.push("retry"), r.order_urn = e.orderUrn) : r.package_urn = C.getUrn(), I && (r.origin_ref = I), t.ajax({
                    url: n(55).get("api_v2_host") + o.join("/"),
                    type: "POST",
                    statusCode: i,
                    data: JSON.stringify(r),
                    contentType: "application/json",
                    dataType: "json"
                })
            }

            function r(e) {
                var t = e.urn,
                    i = e.state,
                    r = e.form_params,
                    s = {
                        context: M,
                        click_name: "clickthrough::" + [L.getProductId(), C.getTrackingUseCase()].join("/"),
                        click_object: L.getReferenceParam()
                    };
                try {
                    r = JSON.parse(r)
                } catch (u) {
                    return o.call(this)
                }
                t && i === R ? (p(t), h.call(this, i), n(59).trackV0Click(null, s), this.successful(e.gift)) : t && r ? (p(t), h.call(this, i), c(l.call(this, r)), n(59).trackV0Click(null, s), a.call(this, !0), this.triggerEvent("started")) : o.call(this)
            }

            function o(e) {
                var t = e ? e.responseText : "";
                if (t) try {
                    t = JSON.parse(t).error
                } catch (i) {
                    t = null
                }
                t && "object" == typeof t && (t = t.code), this.cancel(), n(57).trigger("premium:pageView", "error"), this.trigger("error", t)
            }

            function s(e) {
                return t.ajax({
                    url: n(55).get("api_v2_host") + [y, e].join("/"),
                    type: "GET",
                    contentType: "application/json",
                    dataType: "json"
                })
            }

            function a(e) {
                var t = [this.isGiftPayment() ? "gifts" : null, e ? C.isProUnlimited() ? "pro-unlimited" : "pro" : null],
                    i = {
                        trigger: !e
                    };
                n(55).get("router").navigateToRoute("premium", t, i)
            }

            function l(e) {
                return {
                    action: e.action,
                    params: e.inputs.map(function(e) {
                        return n(3).pairs(e)[0]
                    })
                }
            }

            function u() {
                E && (E.close(), E = null)
            }

            function c(e) {
                T = e
            }

            function d(e) {
                A = e
            }

            function h(e) {
                S = S || {}, S.state = e
            }

            function p(e) {
                S = S || {}, S.urn = e
            }

            function f() {
                C && C.release(), E = x = A = C = S = T = I = M = null
            }
            var g = n(267),
                m = g.CREATOR_SUBSCRIPTION_PRO,
                v = g.CREATOR_SUBSCRIPTION_PRO_UNLIMITED,
                _ = "payments/checkout",
                y = "payments/checkout",
                b = "payment_callback.html",
                w = [1024, 768],
                x = null,
                k = null,
                S = null,
                T = null,
                E = null,
                A = null,
                C = null,
                I = null,
                M = null,
                D = ["use_case", "preselected_term"],
                P = "failed",
                F = "pending",
                R = "successful",
                L = e.exports = n(3).assign({}, n(22).Events, {
                    start: function(e, t) {
                        function s() {
                            i.call(this, t).done(l.resolve).fail(l.reject)
                        }
                        var a = this,
                            l = n(56).defer();
                        return A ? l.resolve() : n(63).isLoggedIn() ? (t && t.trackingContext && (M = t.trackingContext), d(e), C = new(n(77))({
                            id: e
                        }, {
                            ref: I
                        }), this.triggerEvent("starting"), C.attrExists(D) ? s.call(this) : C.fetch().done(function() {
                            s.call(a)
                        }), l.done(function(e) {
                            r.call(a, e)
                        }).fail(function(e) {
                            o.call(a, e)
                        })) : n(63).login({
                            implicitAction: "purchase"
                        }).then(function() {
                            return L.start(e, t)
                        })
                    },
                    handleCallback: function(e) {
                        var t = n(62).parse(e.location.href),
                            i = t.query.url;
                        i ? E || this.openExternal(i) : this.processOrder()
                    },
                    processOrder: function() {
                        this.triggerEvent("processing"), this.pollForOrderStatus()
                    },
                    openExternal: function(e) {
                        if (/(^|\.)paypal\.com$/.test(n(62).parse(e).host)) {
                            var t = w[0],
                                i = w[1];
                            E = n(257).centered(e, t, i), this.listenTo(this, "processing finished", u),
                                function r() {
                                    E && !E.closed ? window.setTimeout(r, 1e3) : E && E.closed && "external" === x && (u(), L.cancel())
                                }(), this.triggerEvent("external", e)
                        } else this.cancel()
                    },
                    successful: function(e) {
                        var t = [C.getTrackingUseCase(), L.getProductId(), L.getReferenceParam()];
                        n(57).trigger("premium:pageView", "premium/success/" + t.filter(Boolean).join("/")), this.triggerEvent("successful"), A === m ? n(560).pushEvent({
                            event: "creator-signup-successful-pro",
                            creatorSubType: A
                        }) : A === v && n(560).pushEvent({
                            event: "creator-signup-successful-pro-unlimited",
                            creatorSubType: A
                        }), e && (k = e.code), n(55).get("router").navigateToRoute("purchased", [A], {
                            trigger: !0
                        }), this.finish(), e || this.pollForPlanUpdate()
                    },
                    unsuccessful: function(e) {
                        var t = [C.getTrackingUseCase(), L.getProductId(), e, L.getReferenceParam()];
                        n(57).trigger("premium:pageView", "premium/failed/" + t.filter(Boolean).join("/")), a.call(this, !1), this.triggerEvent("unsuccessful", e), this.finish()
                    },
                    updatedPlan: function() {
                        this.triggerEvent("updatedPlan")
                    },
                    cancel: function() {
                        /^(starting|started|external|processing)$/.test(x) && (a.call(this, !1), this.triggerEvent("canceled"), f())
                    },
                    finish: function() {
                        this.triggerEvent("finished"), f()
                    },
                    retry: function() {
                        var e = this.getOrder().urn;
                        i.call(this, {
                            orderUrn: e
                        }).done(r.bind(this)).fail(o.bind(this))
                    },
                    getProductId: function() {
                        return A
                    },
                    getPaymentParams: function() {
                        return T
                    },
                    getOrder: function() {
                        return S
                    },
                    getReferenceParam: function() {
                        return I
                    },
                    setReferenceParam: function(e) {
                        I = e
                    },
                    isGiftPayment: function() {
                        return C.isGift()
                    },
                    claimGiftCode: function() {
                        var e = k;
                        return k = null, e
                    },
                    triggerEvent: function(e, t) {
                        var n = this;
                        e.split(" ").forEach(function(e) {
                            x = e, n.trigger(e, A, S, t)
                        })
                    },
                    purchasedToProductId: function(e, t) {
                        switch (e) {
                            case "pro":
                                return t ? n(267).CREATOR_GIFT_PRO : n(267).CREATOR_SUBSCRIPTION_PRO;
                            case "pro-unlimited":
                                return t ? n(267).CREATOR_GIFT_PRO_UNLIMITED : n(267).CREATOR_SUBSCRIPTION_PRO_UNLIMITED
                        }
                    },
                    pollForOrderStatus: function() {
                        var e = this,
                            t = this.getOrder().urn,
                            i = new(n(148))({
                                tolerance: 1,
                                giveUp: 30,
                                backoffRate: 1.3
                            }),
                            r = function() {
                                s(t).done(o).fail(function(t) {
                                    var n = t.status;
                                    404 === n ? e.unsuccessful() : i.failed()
                                })
                            },
                            o = function(t) {
                                switch (h.call(e, t.state), t.state) {
                                    case F:
                                        i.failed();
                                        break;
                                    case R:
                                        e.successful(t.gift);
                                        break;
                                    case P:
                                        t.action === L.orderAction.RETRY ? e.retry() : e.unsuccessful(t.reason)
                                }
                            };
                        this.listenTo(i, "enabled", r).listenTo(i, "giveup", this.unsuccessful.bind(this, "timeout")), r()
                    },
                    pollForPlanUpdate: function() {
                        var e = n(55).get("me"),
                            t = e.getPlan(),
                            i = new(n(148))({
                                tolerance: 1,
                                giveUp: 15,
                                backoffRate: 1.5,
                                maxDelay: 15e3,
                                enabled: !1
                            }),
                            r = function() {
                                e.fetch().always(i.failed.bind(i))
                            },
                            o = function(n) {
                                t !== n.getPlan() && (L.updatedPlan(), this.stopListening(i).stopListening(e))
                            };
                        this.listenTo(i, "enabled", r).listenTo(e, "change:subscriptions", o)
                    }
                }, {
                    orderStates: {
                        FAILED: P,
                        PENDING: F,
                        SUCCESSFUL: R
                    },
                    orderAction: {
                        ABORT: "abort",
                        RETRY: "retry",
                        CANCEL: "cancel"
                    },
                    paymentFailStates: {
                        CANCEL: "cancelled.user",
                        GENERIC: "declined.generic",
                        INSUFFICIENT_BALANCE: "declined.insufficient_balance",
                        INVALID_CARD: "declined.invalid_card",
                        EXPIRED_CARD: "declined.expired_card",
                        PAYPAL_GENERIC: "declined.paypal.generic",
                        PROCESSING_PROBLEM: "declined.processing_problem",
                        REFUND: "refunded.system",
                        ERROR_FRONTEND: "error.frontend",
                        INVALID_CVC: "declined.invalid_cvc"
                    }
                })
        }).call(t, n(1))
    },
    85: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                var i = t + "d",
                    a = "resize" === e ? r(i) : s.trigger.bind(s, e + ":" + i);
                return n(3)[t](a, o)
            }

            function r(e) {
                var t = window.innerWidth,
                    n = window.innerHeight,
                    i = s.trigger.bind(s, "resize:x:" + e),
                    r = s.trigger.bind(s, "resize:y:" + e),
                    o = s.trigger.bind(s, "resize:" + e);
                return function(e) {
                    var s = window.innerWidth,
                        a = window.innerHeight;
                    s !== t && i(e), a !== n && r(e), o(e), n = a, t = s
                }
            }
            var o = 200,
                s = e.exports = n(3).assign({}, n(22).Events);
            t(window).on("resize", i("resize", "debounce")).on("resize", i("resize", "throttle")).on("scroll", i("scroll", "debounce")).on("scroll", i("scroll", "throttle"))
        }).call(t, n(1))
    },
    87: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t, i, r = -1;
                return b.imageUrlRegex.lastIndex = 0, t = e.replace(b.imageUrlRegex, function(e, t, o, s, a) {
                    return n(3).find(b.availableSizes, function(e, t) {
                        return e[1] === a ? (r = t, !0) : void 0
                    }), i = t, o
                }), i && r > -1 ? {
                    index: r,
                    key: t,
                    type: i
                } : null
            }

            function r(e) {
                v[e.type][e.key] |= 1 << e.index
            }

            function o(e) {
                return c(e).then(function(t) {
                    return a(e, t)
                }, function() {
                    return s(e)
                })
            }

            function s(e) {
                var t = new g,
                    i = n(56).defer();
                return t.onload = function(e) {
                    i.resolve(e.target.result)
                }, t.onerror = t.onabort = i.reject, t.readAsDataURL(e), i.promise()
            }

            function a(e, t) {
                var n = s(e),
                    i = t[0],
                    r = t[1];
                return 0 !== i || r ? n.then(l).then(function(e) {
                    var n = f.createElement("canvas"),
                        i = n.getContext("2d"),
                        r = e.width,
                        o = e.height;
                    return n.width = r, n.height = o, u(i, t), i.drawImage(e, 0, 0), n.toDataURL("image/png")
                }) : n
            }

            function l(e) {
                var t = n(56).defer(),
                    i = new m;
                return i.onload = function() {
                    t.resolve(i)
                }, i.onerror = function() {
                    t.reject()
                }, i.src = e, t.promise()
            }

            function u(e, t) {
                var n = t[0],
                    i = t[1],
                    r = e.canvas,
                    o = r.width,
                    s = r.height;
                e.translate(o / 2, s / 2), i && e.scale(-1, 1), e.rotate(n * h), e.translate(-o / 2, -s / 2)
            }

            function c(e) {
                var t = new g,
                    i = n(56).defer();
                return t.onerror = t.onabort = function() {
                    i.reject(C)
                }, t.onload = function(e) {
                    var t = new DataView(e.target.result);
                    if (t.getUint16(0, !1) !== x) return void i.reject(A);
                    var n = t.byteLength,
                        r = 2;
                    try {
                        for (; n > r;) {
                            var o = t.getUint16(r, !1);
                            if (r += 2, o === k) {
                                var s = t.getUint16(r += 8, !1) === S;
                                r += t.getUint32(r + 4, s);
                                var a = t.getUint16(r, s);
                                r += 2;
                                for (var l = 0; a > l; l++)
                                    if (t.getUint16(r + 12 * l, s) === T) {
                                        var u = t.getUint16(r + 12 * l + 8, s);
                                        return void i.resolve(w[u])
                                    }
                            } else {
                                if (!d(o)) break;
                                r += t.getUint16(r, !1)
                            }
                        }
                    } catch (c) {
                        window.console.error("Error reading JPEG headers")
                    }
                    i.reject(E)
                }, t.readAsArrayBuffer(e.slice(0, 65536)), i.promise()
            }

            function d(e) {
                return 65280 === (65280 & e)
            }
            var h = Math.PI / 180,
                p = window,
                f = p.document,
                g = p.FileReader,
                m = p.Image,
                v = {},
                _ = ["user", "profile-settings"],
                y = ["user"],
                b = e.exports = n(3).defaults({
                    tagOptions: {
                        whitelist: ["style", "title", "class", "aria-label", "aria-role", "aria-hidden"],
                        closingTag: !0
                    },
                    load: function(e) {
                        var i = new m,
                            r = t(i),
                            o = n(56).defer(),
                            s = n(3).uniqueId("ImageHelperLoad");
                        return n(97).corsImg && (i.crossOrigin = window.location.host, e += "?xd=true"), r.on("load." + s, function() {
                            o.resolve(this)
                        }).on("error." + s, function() {
                            o.reject(this)
                        }), o.always(function() {
                            r.off("." + s)
                        }), i.src = e, o
                    },
                    getPlaceholderUrl: function(e, t) {
                        var r, o, s, a, l = i(b.setFormat(e, t));
                        if (l) {
                            if (r = l.key, v[l.type] || (v[l.type] = {}), v[l.type][r])
                                for (o = n(3).find(b.availableSizes, function(e, n) {
                                        var i = e[0];
                                        return a = n, i >= t
                                    }); a >= 0;) {
                                    if (v[l.type][r] & 1 << a) {
                                        s = b.availableSizes[a];
                                        break
                                    }--a
                                }
                            if (o && s === o) return !1;
                            if (s) return b.setFormat(e, s[0])
                        }
                        return null
                    },
                    urlFrom: function(e, t, i) {
                        return t && n(112).isHiDPI && (t *= 2), n(1064).urlFrom.call(this, e, t, i)
                    },
                    markup: function(e, t) {
                        e && e.attributes && (e = e.attributes);
                        var i = t.src,
                            r = t.size,
                            o = t.stretch,
                            s = t.placeholderId,
                            a = t.forceSquare,
                            l = t.useResourceUrl,
                            u = void 0 === l ? !0 : l,
                            c = i || u && this.urlFrom(e, r);
                        c = this.isDefaultImage(c) ? null : "url(" + c + ")";
                        var d = this.getPlaceholderClass(e || s, {
                                forceSquare: !!a
                            }),
                            h = o ? "100%" : r + "px",
                            p = n(3).assign({
                                style: {
                                    "background-image": c,
                                    width: h,
                                    height: h
                                },
                                "class": "sc-artwork " + d + " " + (t["class"] || ""),
                                "aria-label": this.getAltText(e),
                                "aria-role": "img"
                            }, n(3).omit(t, "stretch", "size", "class"));
                        return n(282).getMarkup("span", p, this.tagOptions)
                    },
                    flagCachedImage: function(e) {
                        var t = i(e);
                        t && r(t)
                    },
                    isRounded: function(e) {
                        var t = e._resource_type,
                            n = e.kind;
                        return t ? _.indexOf(t) > -1 : n ? y.indexOf(n) > -1 : _.indexOf(e) > -1
                    },
                    getPlaceholderClass: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                            n = t.forceSquare,
                            i = "number" == typeof e,
                            r = i ? e : e && e.id || 0,
                            o = i || n ? "" : b.isRounded(e) ? "image__rounded" : "",
                            s = 12;
                        return "sc-artwork-placeholder-" + r % s + " " + o
                    },
                    getPlaceholderGradient: function(e) {
                        var t = b.getPlaceholderClass(e),
                            i = n(3).find(t.split(" "), function(e) {
                                return e.indexOf("sc-artwork-placeholder") > -1
                            });
                        return n(1062)[i]
                    },
                    getPlaceholderCanvas: function(e, t) {
                        var n = f.createElement("canvas"),
                            i = n.getContext("2d"),
                            r = b.getPlaceholderGradient(e),
                            o = r[0],
                            s = r[1];
                        n.width = n.height = t;
                        var a = i.createLinearGradient(0, 0, t, t);
                        return a.addColorStop(0, o), a.addColorStop(1, s), i.fillStyle = a, i.fillRect(0, 0, t, t), n
                    },
                    readImageFile: s,
                    readImageFileCorrected: o
                }, n(1064)),
                w = {
                    1: [0, !1],
                    2: [0, !0],
                    3: [180, !1],
                    4: [180, !0],
                    5: [90, !0],
                    6: [90, !1],
                    7: [270, !0],
                    8: [270, !1]
                },
                x = 65496,
                k = 65505,
                S = 18761,
                T = 274,
                E = -1,
                A = -2,
                C = -3
        }).call(t, n(1))
    },
    90: function(e, t, n) {
        "use strict";
        var i = e.exports = {
            codeToSymbol: function(e) {
                var t = n(305).symbols[e];
                return t || e
            },
            format: function(e, t) {
                switch (n(52).getLocale()) {
                    case "en":
                    case "en_GB":
                        return "" + i.codeToSymbol(t) + e;
                    case "fr":
                        return e + " " + i.codeToSymbol(t);
                    default:
                        return "" + e + i.codeToSymbol(t)
                }
            },
            getYearlyPercentageDiscount: function(e, t) {
                return Math.floor(100 * (1 - t / (12 * e))) + "%"
            },
            getYearlyDiscountAmount: function(e, t, n) {
                var i = Math.round(12 * e - t);
                return this.format(i, n)
            }
        }
    },
    92: function(e, t, n) {
        "use strict";
        e.exports = n(970)()
    },
    93: function(e, t) {
        "use strict";
        e.exports = {
            QUEUED: 1,
            UPLOADING: 2,
            FAILED: 4,
            TRANSCODING: 8,
            COMPLETE: 16
        }
    },
    94: function(e, t, n) {
        "use strict";

        function i() {
            f.forEach(function(e) {
                "pending" === e.state() && e.abort()
            }), f.length = 0
        }

        function r(e, t, n, i) {
            e.sound && "rejected" !== t.state() ? o.call(this, e, t, n, i) : t.resolve()
        }

        function o(e, t, i, r) {
            var o = e.sound;
            o.hold(), this.listenTo(o, "finish", this._onAdFinish).listenTo(o, "pause", this._onAdPause).listenTo(o, "play", this._onAdPlay).listenTo(o, "playStart", this._onAdPlayStart).listenTo(o, "time", this._onAdTime).listenTo(o, "time", this._onAdTimeIsInRequiredListenPeriod).listenTo(o, "time", this._createOnAdQuartile()), this._currentAd = e, this._upcomingSound = i, this._upcomingSound.hold(), o.play(n(3).assign({
                checkpointInterval: p
            }, r))
        }

        function s() {
            var e = this.getCurrentSound();
            this.stopListening(e), e.pause(), e.release(), this._currentAd = null, this._upcomingSound.release(), this._upcomingSound = null
        }

        function a(e) {
            return v().soundcloudUrlRegex.test(e || "")
        }

        function l(e, t) {
            var i = _.getCurrentAd(),
                r = _.getCurrentSound(),
                o = i.get("audio"),
                s = i.get("companion_display"),
                a = r.getMonetizableTrack();
            switch (e) {
                case "companion_display:impression":
                    n(82).trackEvent("impression", s), n(59).trackImpression({
                        ad_urn: s.ad_urn,
                        external_media: s.ad_visual,
                        impression_name: "companion_display",
                        impression_object: r.getUrn(),
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "audio_ad:impression":
                    n(82).trackEvent("impression", o), n(59).trackImpression({
                        ad_urn: o.ad_urn,
                        impression_name: "audio_ad_impression",
                        impression_object: r.getUrn(),
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "companion_display:clickthrough":
                    n(82).trackEvent("adClick", s), n(59).trackV0Click(null, {
                        ad_urn: s.ad_urn,
                        external_media: s.ad_visual,
                        click_name: "clickthrough::companion_display",
                        click_object: r.getUrn(),
                        click_target: s.landing_page,
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "audio_ad:skip":
                    n(82).trackEvent("skip", o), n(59).trackV0Click(null, {
                        ad_urn: o.ad_urn,
                        click_name: "ad::skip",
                        click_object: r.getUrn(),
                        external_media: s.ad_visual,
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "audio_ad:finish":
                    n(82).trackEvent("finish", o), n(59).trackV0Click(null, {
                        ad_urn: o.ad_urn,
                        click_name: "ad::finish",
                        click_object: r.getUrn(),
                        external_media: s.ad_visual,
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "ad:first_quartile":
                case "ad:second_quartile":
                case "ad:third_quartile":
                    var l = e.split(":"),
                        u = l[1];
                    n(82).trackEvent(u, o), n(59).trackV1Click({
                        ad_urn: o.ad_urn,
                        click_name: e.replace(":", "::"),
                        click_category: "monetization",
                        click_object: r.getUrn(),
                        external_media: s.ad_visual,
                        context: t.context,
                        monetization_type: "audio_ad",
                        monetized_object: a.getUrn()
                    });
                    break;
                case "audio_ad:playStart":
                    n(82).trackEvent("play", o)
            }
        }
        var u = void 0,
            c = 1e3,
            d = c,
            h = 15 * c,
            p = 3 * c,
            f = [],
            g = {},
            m = {
                AD_PLAY: "ad:play",
                AD_PAUSE: "ad:pause",
                AD_SKIP: "ad:skip",
                AD_FINISH: "ad:finish",
                AD_PLAYSTART: "ad:playStart",
                AD_TIME: "ad:time",
                AD_FIRST_QUARTILE: "ad:first_quartile",
                AD_SECOND_QUARTILE: "ad:second_quartile",
                AD_THIRD_QUARTILE: "ad:third_quartile"
            },
            v = function() {
                return n(183)
            },
            _ = e.exports = n(3).assign({}, n(22).Events, {
                _adDeferred: null,
                _currentAd: null,
                _upcomingSound: null,
                states: {
                    isInRequiredListenPeriod: {
                        initial: !1
                    },
                    isAllowedToSkipImmediately: {
                        initial: !1
                    }
                },
                setAudioAd: function(e) {
                    u = e
                },
                prefetchAudioAd: function(e) {
                    n(3).delay(function() {
                        var t = new u({
                                id: e.id
                            }, {
                                requiredListenPeriod: h
                            }),
                            n = y();
                        t.configureMonetizableTrack(e), !t.isPopulated() && n.enabled && t.fetch().fail(n.failed).done(n.succeeded)
                    }, d)
                },
                isUserAdConsumer: function() {
                    return !this._isUserInAdFreeArea() && this._isUserInAdGroup()
                },
                getCurrentSound: function() {
                    return this._currentAd && this._currentAd.sound
                },
                getUpcomingSound: function() {
                    return this._upcomingSound
                },
                getCurrentAd: function() {
                    return this._currentAd
                },
                skip: function(e) {
                    if (_.isBlockedFromSkipping()) return _._adDeferred;
                    var t = _.getCurrentAd();
                    return i(), t && (_.trigger(m.AD_SKIP, t), _.metrics("audio_ad:skip", e), s.call(this)), (_._adDeferred || n(56).defer()).resolve()
                },
                whenAdFinished: function(e, t) {
                    var o = this,
                        s = this._adDeferred,
                        a = new u({
                            id: e.id
                        }, {
                            requiredListenPeriod: h
                        }),
                        l = y();
                    return a.configureMonetizableTrack(e), s && "pending" === s.state() ? this.skip() : a.sound && g[a.sound.resource_id] ? n(56).resolve() : (s = this._adDeferred = n(56).defer(), !a.isPopulated() && l.enabled ? (_.toggleState("isInRequiredListenPeriod", !0), f.push(a.fetch().fail(function() {
                        l.failed(), s.reject(), i()
                    }).done(function() {
                        l.succeeded(), r.call(o, a, s, e, t), i()
                    }))) : r.call(this, a, s, e, t), s.always(function() {
                        _.toggleState("isInRequiredListenPeriod", !1)
                    }), s)
                },
                metrics: function(e, t) {
                    _.getCurrentAd() && _.getCurrentSound() && l(e, t || {})
                },
                clicked: function() {
                    var e = this.getCurrentAd(),
                        t = e && e.getLandingPage();
                    return a(t) ? (this.toggleState("isAllowedToSkipImmediately", !0), v().getAudibleModels([t]).then(function(e) {
                        var t = e[0];
                        t = void 0 === t ? {} : t;
                        var n = t.audible;
                        return n
                    })) : n(56).reject()
                },
                isBlockedFromSkipping: function() {
                    return !_.getState("isAllowedToSkipImmediately") && _.getState("isInRequiredListenPeriod")
                },
                _onAdFinish: function() {
                    var e = this.getCurrentAd(),
                        t = this._adDeferred;
                    _.trigger(m.AD_FINISH, e), s.call(this), t.resolve()
                },
                _onAdPause: function() {
                    var e = _.getCurrentAd();
                    _.trigger(m.AD_PAUSE, e)
                },
                _onAdPlay: function() {
                    var e = _.getCurrentAd();
                    _.trigger(m.AD_PLAY, e)
                },
                _onAdPlayStart: function() {
                    var e = _.getCurrentAd();
                    _.trigger(m.AD_PLAYSTART, e), _.toggleState("isAllowedToSkipImmediately", !1), _.toggleState("isInRequiredListenPeriod", !e.isSkippableRightNow()), g[e.sound.resource_id] = !0
                },
                _onAdTime: function() {
                    var e = _.getCurrentAd();
                    _.trigger(m.AD_TIME, e)
                },
                _createOnAdQuartile: function() {
                    var e = .25,
                        t = .5,
                        n = .75,
                        i = 1,
                        r = m.AD_FIRST_QUARTILE;
                    return function(o) {
                        var s = _.getCurrentAd().sound,
                            a = s.progress();
                        if (!(a > i)) switch (r) {
                            case m.AD_THIRD_QUARTILE:
                                a > n && (l(r, o), r = m.AD_FINISH);
                                break;
                            case m.AD_SECOND_QUARTILE:
                                a > t && (l(r, o), r = m.AD_THIRD_QUARTILE);
                                break;
                            case m.AD_FIRST_QUARTILE:
                                a > e && (l(r, o), r = m.AD_SECOND_QUARTILE);
                                break;
                            default:
                                return
                        }
                    }
                },
                _onAdTimeIsInRequiredListenPeriod: function() {
                    var e = _.getCurrentAd();
                    _.toggleState("isInRequiredListenPeriod", !e.isSkippableRightNow()), e.getRequiredListenPeriod() && e.isSkippableRightNow() && _.stopListening(e.sound, "time", _._onAdTimeIsInRequiredListenPeriod)
                },
                _isUserInAdGroup: function() {
                    return !n(55).get("me").getPerk("adFree")
                },
                _isUserInAdFreeArea: function() {
                    var e = n(55).get("router").getLayoutInfo() || {};
                    return "front" === e.layoutName
                }
            });
        n(349).applyTo(_);
        var y = n(3).memoize(function() {
            return new(n(148))({
                giveUp: 1
            })
        })
    },
    97: function(e, t, n) {
        "use strict";

        function i(e) {
            try {
                if (e.getItem) {
                    var t = Date.now();
                    return e.setItem(t, t), e.removeItem(t), !0
                }
            } catch (n) {}
            return !1
        }
        e.exports = n(3).reduce({
            sessionStorage: function() {
                try {
                    return "undefined" != typeof window.sessionStorage && i(window.sessionStorage)
                } catch (e) {
                    return !1
                }
            },
            localStorage: function() {
                try {
                    return "undefined" != typeof window.localStorage && i(window.localStorage)
                } catch (e) {
                    return !1
                }
            },
            dragDrop: function() {
                var e = window.document.createElement("div");
                return "draggable" in e || "ondragstart" in e && "ondrop" in e
            },
            webSocket: function() {
                return window.WebSocket
            },
            WebWorker: function() {
                return window.Worker
            },
            svg: function() {
                return window.document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
            },
            touch: function() {
                try {
                    return window.hasOwnProperty("ontouchstart")
                } catch (e) {
                    return !1
                }
            },
            typedArrays: function() {
                return window.hasOwnProperty("Uint8Array")
            },
            pushState: function() {
                return window.history && window.history.pushState
            },
            formData: function() {
                return window.FormData
            },
            corsImg: function() {
                return !1
            },
            MutationObserver: function() {
                return window.MutationObserver
            },
            getUserMedia: function() {
                return window.navigator.getUserMedia
            },
            audioTabIndicator: function() {
                return n(112).chrome || n(112).gecko
            },
            blob: function() {
                try {
                    return new window.Blob
                } catch (e) {
                    return !1
                }
            },
            Notification: function() {
                return window.Notification
            },
            sendBeacon: function() {
                return window.navigator.sendBeacon
            },
            doNotTrack: function() {
                var e = window,
                    t = e.navigator,
                    i = e.doNotTrack,
                    r = ["1", 1, "yes"];
                return n(3).contains(r, t.doNotTrack || t.msDoNotTrack || i)
            }
        }, function(e, t, n) {
            return e[n] = !!t(), e
        }, {})
    },
    98: function(e, t, n) {
        "use strict";

        function i(e, t) {
            e.indexOf(t) < 0 && e.push(t)
        }
        var r = {
                comments: "comment",
                playlists: "playlist",
                sounds: "track",
                tracks: "track",
                users: "user"
            },
            o = {
                comments: "comment",
                playlists: "playlist",
                sounds: "sound",
                tracks: "sound",
                users: "user",
                "artist-stations": "station",
                "track-stations": "station"
            },
            s = {
                comment: "comments",
                playlist: "playlists",
                sound: "tracks",
                track: "tracks",
                user: "users"
            },
            a = {
                sets: "playlists",
                sounds: "tracks",
                people: "users"
            },
            l = n(3).reduce(a, function(e, t, n) {
                return e[t] = e[t] || [], e[n] = e[n] || [], i(e[t], n), i(e[n], t), e
            }, {}),
            u = n(3).negate(RegExp.prototype.test.bind(/\D/)),
            c = e.exports = {
                toComponents: function(e) {
                    var t = e.split(":"),
                        n = t[0],
                        i = t[1],
                        r = t.slice(2),
                        o = r.join(":");
                    return u(o) && (o = parseInt(o, 10)), {
                        domain: n,
                        collection: i,
                        id: o
                    }
                },
                fromComponents: function(e) {
                    var t = e.domain,
                        n = void 0 === t ? "soundcloud" : t,
                        i = e.collection,
                        r = e.id;
                    return [n, i, r].join(":")
                },
                getAsAttributes: function(e) {
                    var t = c.toComponents(e),
                        n = (t.domain, t.collection),
                        i = t.id,
                        s = o[n],
                        a = r[n];
                    return "user" === s && "system" === i && (i = 193), {
                        id: i,
                        kind: a,
                        resource_type: s
                    }
                },
                generate: function(e, t) {
                    if ("station" === e) return t;
                    var n = s[e];
                    return n ? c.fromComponents({
                        collection: n,
                        id: t
                    }) : null
                },
                getAlternateUrns: function(e) {
                    var t = c.toComponents(e),
                        n = t.domain,
                        i = t.collection,
                        r = t.id,
                        o = l[i];
                    return o ? o.map(function(e) {
                        return c.fromComponents({
                            domain: n,
                            collection: e,
                            id: r
                        })
                    }) : null
                },
                getCanonicalUrn: function(e) {
                    var t = c.toComponents(e),
                        n = t.domain,
                        i = t.collection,
                        r = t.id,
                        o = a[i];
                    return o ? c.fromComponents({
                        domain: n,
                        collection: o,
                        id: r
                    }) : e
                }
            }
    },
    100: function(e, t, n) {
        "use strict";
        var i = e.exports = n(162).extend({
            nullable: !0,
            validate: function(e, t) {
                var i = n(56).defer();
                return null == t ? this.result(i, this.nullable) : this.check(t, this.result.bind(this, i)), i
            }
        });
        n(457).applyTo(i.prototype)
    },
    101: function(e, t) {
        "use strict";
        e.exports = {
            INITIAL: "timed-comment-sm:initial",
            CURRENT_COMMENT: "timed-comment-sm:current-comment",
            CURRENT_TIMESTAMP: "timed-comment-sm:current-timestamp",
            ACTIVE_TIMESTAMP: "timed-comment-sm:active-timestamp"
        }
    },
    102: function(e, t) {
        "use strict";
        e.exports = {
            ALT: 18,
            BACKSPACE: 8,
            COMMA: 188,
            CTRL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESC: 27,
            HASH: 220,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            META_FIREFOX_OSX: 224,
            META_LEFT: 91,
            META_RIGHT: 92,
            META_RIGHT_OSX: 93,
            PGDOWN: 34,
            PGUP: 33,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    },
    103: function(e, t) {
        "use strict";
        e.exports = {
            start: "auth::start",
            abort: "auth::abort",
            initiate: "initiate",
            need_help: "auth::need_help",
            forgot_email: "auth::forgot_email",
            forgot_password: "auth::forgot_password",
            reset_email_continue: "auth::reset_email_continue",
            sign_in_error: "sign_in::error",
            sign_up_error: "sign_up::error",
            sign_in_success: "sign_in_success",
            sign_up_success: "sign_up_success",
            sign_out: "sign_out"
        }
    },
    105: function(e, t, n) {
        "use strict";
        var i = e.exports = n(235).extend();
        n(1329).applyTo(i.prototype), n(964).applyTo(i.prototype)
    },
    109: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            maxLength: 100,
            message: n(52).t("[[maxLength]] characters max"),
            check: function(e, t) {
                t(e.length <= this.maxLength)
            }
        })
    },
    110: function(e, t) {
        "use strict";
        e.exports = {
            ACCOUNT_FROZEN: "account_frozen",
            ACTION_DENIED: "action_denied",
            BAD_REQUEST: "bad_request",
            CEASE_AND_DESIST: "cease_and_desist",
            INVALID_SCOPE: "invalid scope",
            INVALID_CREDENTIALS: "invalid_credentials",
            INVALID_IDENTIFIER: "invalid_identifier",
            INVALID_EMAIL: "invalid_email",
            INVALID_PASSWORD: "invalid_password",
            INVALID_PROVIDER_TOKEN: "invalid_provider_token",
            INVALID_EMAIL_SIGNUP_TOKEN: "invalid_email_sign_up_token",
            INVALID_REQUEST: "invalid_request",
            EMAIL_ALREADY_IN_USE: "email_already_in_use",
            EMAIL_DOMAIN_BLACKLISTED: "email_domain_blacklisted",
            NOT_FOUND: "not_found",
            RECAPTCHA_FAILED: "captcha_failed",
            RECAPTCHA_REQUIRED: "captcha_required",
            USER_EXISTS: "user_exists",
            PASSWORD_RESET_REQUIRED: "password_reset_required"
        }
    },
    112: function(e, t, n) {
        "use strict";
        e.exports = n(3).assign(n(665), {
            isHiDPI: window.devicePixelRatio ? window.devicePixelRatio > 1 : !1,
            isJsEnabledBot: /googlebot/i.test(window.navigator.userAgent),
            desktop: !n(665).mobile && !n(665).tablet
        })
    },
    114: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = o(t);
            return "<" + n(3).compact([e, i]).join(" ") + ">"
        }

        function r(e) {
            return "</" + e + ">"
        }

        function o(e) {
            return n(3).map(e, function(e, t) {
                return t + '="' + e + '"'
            }).join(" ")
        }
        e.exports = {
            el: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = arguments.length <= 2 || void 0 === arguments[2] ? "" : arguments[2];
                return i(e, t) + (Array.isArray(n) ? n.join("") : n) + r(e)
            },
            voidEl: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return i(e, t)
            },
            subview: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                return n(559).registerSubview(e, t)
            }
        }
    },
    116: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("router").getLayoutInfo(),
                t = e && "signin" === e.layoutName;
            return _(T, {
                query: {
                    redirect_uri: t ? y() : window.location.href
                }
            })
        }

        function r() {
            return "resolved" === C.state()
        }

        function o() {
            return A || (A = m(x, {
                onerror: function() {
                    C.reject(), C = n(56).defer(), A = null
                }
            })), C.promise()
        }

        function s() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.promptUser,
                i = void 0 === t ? !0 : t,
                r = n(56).defer();
            return d().then(function(e) {
                e ? a(r, window.FB.getAuthResponse()) : E && !E.closed ? E.focus() : i ? E = v(function() {
                    window.FB.login(function(e) {
                        return a(r, e.authResponse)
                    }, {
                        scope: k
                    })
                }) : r.reject()
            }), r.promise()
        }

        function a(e, t) {
            var n = t && t.accessToken;
            n ? e.resolve(n) : e.reject()
        }

        function l() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.size,
                i = void 0 === t ? 200 : t;
            return d().then(function(e) {
                return e ? u("/me") : n(56).reject()
            }).then(function(e) {
                var t = {
                    width: i,
                    height: i
                };
                return u("/" + e.id + "/picture", t).then(function(t) {
                    return n(56).resolve({
                        name: e.name,
                        picture_url: t.data.url
                    })
                })
            })
        }

        function u(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = n(56).defer();
            return s().then(function(n) {
                window.FB.api(e, f({
                    access_token: n
                }, t), i.resolve)
            }, i.reject), i.promise()
        }

        function c() {
            var e = n(56).defer();
            return r() ? window.FB.getLoginStatus(function(t) {
                return e.resolve(t.status)
            }) : e.reject(), e.promise()
        }

        function d() {
            return c().then(function(e) {
                return n(56).resolve("connected" === e)
            }, function() {
                return n(56).resolve(!1)
            })
        }

        function h(e) {
            window.FB.XFBML.parse(e)
        }

        function p(e) {
            return function() {
                return e.apply(void 0, arguments)
            }
        }
        var f = n(3).extend,
            g = n(3).mapObject,
            m = n(125).insertScript,
            v = n(257).interceptPopup,
            _ = n(62).modify,
            y = n(62).getWindowOrigin,
            b = n(134).whenAllowed,
            w = "//connect.facebook.net/en_US/all.js",
            x = w,
            k = ["email", "user_birthday", "publish_actions"].join(","),
            S = n(55).get("fb_app_id"),
            T = "https://www.facebook.com/dialog/oauth?client_id=" + S + "&scope=" + k + "&response_type=token",
            E = null,
            A = null,
            C = n(56).defer();
        e.exports = f({
            loadFacebookSDK: function() {
                return b().then(o)
            },
            isFacebookSDKReady: r,
            getFacebookLoginLink: i
        }, g({
            parseXFBML: h,
            getFacebookToken: s,
            getCurrentFacebookUser: l
        }, p)), window.fbAsyncInit = function() {
            window.FB.init({
                appId: S,
                status: !1,
                cookie: !0,
                xfbml: !0
            }), delete window.fbAsyncInit, C.resolve()
        }
    },
    117: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e, n, i, r, o = window,
                    s = o.history && o.history.state && o.history.state.scrollTop,
                    a = o.document.documentElement,
                    l = o.document.body;
                null != s ? (i = function() {
                    n ? n = !1 : (o.clearTimeout(e), t(o).off("scroll", i), e = null)
                }, (r = function() {
                    n = !0, a.scrollTop = l.scrollTop = s, (a.scrollTop || l.scrollTop) === s ? (t(o).off("scroll", i), e = null) : (e || t(o).on("scroll", i), e = o.setTimeout(r, 100))
                })()) : a.scrollTop = l.scrollTop = 0
            }
            var r = "l-footer",
                o = e.exports = n(22).View.extend({
                    css: null,
                    template: null,
                    tracking: null,
                    views: null,
                    _currentViews: null,
                    slots: null,
                    includeFooter: null,
                    footerClassName: "sc-border-light-top",
                    displayHeader: !0,
                    initialize: function() {
                        this.views = {}, this._currentViews = {}
                    },
                    setArgs: function(e) {
                        this.args = e || {}
                    },
                    setup: function() {
                        var e = n(56).defer();
                        return n(3).defer(e.resolve), e
                    },
                    dispose: function() {
                        n(3).invoke(this._currentViews, "_dispose"), n(3).invoke(this.views, "_dispose"), this.$el.remove(), delete this.slots, delete this.views, delete this._currentViews
                    },
                    switchLayout: function(e) {
                        e && (n(3).invoke(this._currentViews, "_dispose"), n(3).invoke(this.views, "_dispose"), this.template = e.template, this.includeFooter = e.includeFooter, this.slots = null, this.$el.empty())
                    },
                    getTemplateData: n(3).noop,
                    render: function() {
                        var e, o;
                        return this.includeFooter && (e = this.views[r]), "" === this.el.innerHTML && (n(265).render(this.template, this.getTemplateData(), this.el), this.slots = {}, n(3).each(this.views, function(e, t) {
                            this.slots[t] = this.$("." + t)[0]
                        }, this)), n(3).each(this.views, function(e, t) {
                            this._currentViews[t] !== e && (this._currentViews[t] && this._currentViews[t]._dispose(), e.render(), t !== r && this.slots[t].appendChild(e.el), this._currentViews[t] = e)
                        }, this), o = this.$(this.includeFooter), e && !e.disposed && o[0] && o.append(e.$el.addClass(this.footerClassName)), t(window.document.body).toggleClass("m-hideHeader", !this.displayHeader), i(), this.renderDecorate(), this
                    },
                    renderDecorate: n(3).noop,
                    setViews: function(e) {
                        this.includeFooter && (e[r] = [n(1017)]);
                        var t = n(56).defer();
                        return n(3).each(e, function(e, t) {
                            var n = e[0],
                                i = e[1];
                            this._currentViews[t] && this._currentViews[t].isEquivalentTo(n, i) || (this.views[t] = new n(i))
                        }, this), n(3).delay(t.resolve.bind(t)), t
                    },
                    getChangeEventData: function(e) {
                        var t;
                        return t = n(3).mapObject(this.tracking, function(e, t) {
                            return n(3).isFunction(e) ? e.call(this) : e
                        }, this), {
                            layoutName: e,
                            tracking: t,
                            args: this.args
                        }
                    },
                    setTitle: function(e, t) {
                        n(344).set(e, t)
                    },
                    t: n(52).t,
                    tp: n(52).tp
                });
            n(1325).applyTo(o.prototype)
        }).call(t, n(1))
    },
    120: function(e, t, n) {
        "use strict";

        function i(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        }

        function r(e) {
            return e.split("/").map(o).join("/")
        }

        function o(e) {
            return encodeURI(e).replace(/#/g, "%23").replace(/\?/g, "%3F")
        }
        var s, a = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:\/@]*)(?::([^:\/@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            l = ["---", "scheme", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "fragment"],
            u = e.exports = {
                parse: function(e, t) {
                    var n, i, r = a.exec(e),
                        o = {};
                    for (t || (t = l), n = 1; n < l.length; ++n)
                        if (i = l[n], -1 !== t.indexOf(i) && (r[n] || "query" === i)) switch (i) {
                            case "port":
                                o[i] = parseInt(r[n], 10);
                                break;
                            case "path":
                                o[i] = r[n].split("/").map(decodeURIComponent).join("/");
                                break;
                            case "query":
                                o[i] = u.parseQueryString(r[n]);
                                break;
                            default:
                                o[i] = r[n]
                        }
                    return o
                },
                joinPath: function(e) {
                    return e.filter(Boolean).join("/")
                },
                parseQueryString: function(e) {
                    var t = {};
                    return e && e.replace(/([^?=&]+)(?:=([^&]*))?/g, function(e, n, r) {
                        switch (n = i(n), r = i((r || "").replace(/\+/g, " ")), typeof t[n]) {
                            case "object":
                                t[n].push(r);
                                break;
                            case "undefined":
                                t[n] = r;
                                break;
                            default:
                                t[n] = [t[n], r]
                        }
                    }), t
                },
                param: function(e, t) {
                    t = t || {};
                    var i = [],
                        r = function(e, t) {
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                        },
                        o = function(e, i) {
                            n(3).isArray(i) ? i.forEach(function(n, i) {
                                o(e + "[" + ("object" == typeof n && t.jquerySerialize ? i : "") + "]", n)
                            }) : n(3).isObject(i) ? n(3).each(i, function(t, n) {
                                o(e + "[" + n + "]", t)
                            }) : r(e, i)
                        };
                    return n(3).each(e, function(e, t) {
                        o(t, e)
                    }), i.join("&").replace(/%20/g, "+")
                },
                stringify: function(e, t) {
                    var i, o, a = [];
                    return t && (o = u.parse(t), e.query && o.query && (n(3).assign(o.query, e.query), delete e.query), e = n(3).assign({}, o, e)), e.scheme && a.push(e.scheme + "://"), e.user && (a.push(e.user), e.password && a.push(":" + e.password), a.push("@")), e.host && a.push(e.host), e.port && a.push(":" + e.port), e.path && ("string" == typeof e.path ? a.push(r(e.path)) : a.push(r(u.joinPath(e.path)))), i = s(e.query), i && a.push("?" + i), e.fragment && a.push("#" + e.fragment), a.join("")
                },
                modify: function(e, t) {
                    var i = u.parse(e);
                    return n(3).isFunction(t) ? i = t.call(null, i) : "object" == typeof t && (t.query && (n(3).assign(i.query, t.query), delete t.query), n(3).assign(i, t)), u.stringify(i)
                },
                normalize: function(e) {
                    var t = n(3).defaults(u.parse(e), {
                        scheme: "http"
                    });
                    return u.stringify(t)
                }
            };
        s = function(e) {
            var t, n, i, r, o, s = [];
            if (e)
                for (t in e)
                    if (e.hasOwnProperty(t) && (r = e[t], null !== r && r !== o))
                        if ("object" == typeof r)
                            for (i = r.length, n = 0; i > n; ++n) s.push(encodeURIComponent(t) + "=" + encodeURIComponent(r[n]).replace(/%2F/g, "/"));
                        else s.push(encodeURIComponent(t) + "=" + encodeURIComponent(r).replace(/%2F/g, "/"));
            return s.join("&")
        }
    },
    124: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.toLowerCase().replace(/[^a-z]/g, "").replace(/^(drumnbass|dn?b)$/, "drumbass").replace(/^(rn?b|soul)$/, "rbsoul").replace(/^(rap|hiphop)$/, "hiphoprap").replace(/^folk$/, "folksingersongwriter").replace(/^(jazz|blues)$/, "jazzblues").replace(/^(dance|edm)$/, "danceedm")
        }

        function r(e) {
            return n(3).findWhere(n(198).genres, {
                id: e
            })
        }
        var o = e.exports = {
                genreLabel: function(e) {
                    return a[e]
                },
                genres: function(e) {
                    return n(3).where(n(198).genres, {
                        category: e
                    })
                },
                getGenre: r,
                genreUrn: function(e) {
                    return "soundcloud:genres:" + e
                },
                regionUrn: function(e) {
                    return "soundcloud:regions:" + e
                },
                chartKindLabel: function(e) {
                    return s[e]
                },
                chartKinds: function() {
                    return n(198).kinds
                },
                userGenreToChartGenre: function(e) {
                    return e && r(i(e)) || r("all-music")
                },
                isGenreLabel: function(e) {
                    return e && n(3).contains(l, e)
                },
                taglines: function(e, t) {
                    var i = o.genreLabel(t),
                        r = o.getGenre(t),
                        s = r.category,
                        a = r.content,
                        l = s + "-" + e + "-" + a;
                    switch (l) {
                        case "all-trending-music":
                            return {
                                "short": n(52).t("New &amp; hot tracks"),
                                "long": n(52).t("Up-and-coming tracks on SoundCloud")
                            };
                        case "all-trending-audio":
                            return {
                                "short": n(52).t("New &amp; hot audio"),
                                "long": n(52).t("Up-and-coming audio on SoundCloud")
                            };
                        case "all-top-music":
                            return {
                                "short": n(52).t("Top 50 tracks"),
                                "long": n(52).t("The most played tracks on SoundCloud this week")
                            };
                        case "all-top-audio":
                            return {
                                "short": n(52).t("Top 50 audio"),
                                "long": n(52).t("The most played audio on SoundCloud this week")
                            };
                        case "music-trending-music":
                            return {
                                "short": n(52).t("New &amp; hot in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(52).t("Up-and-coming tracks in [[[genreLabel]]] on SoundCloud", {
                                    genreLabel: i
                                })
                            };
                        case "music-top-music":
                            return {
                                "short": n(52).t("Top 50 in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(52).t("The most played tracks in [[[genreLabel]]] on SoundCloud this week", {
                                    genreLabel: i
                                })
                            };
                        case "audio-trending-audio":
                            return {
                                "short": n(52).t("New &amp; hot in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(52).t("Up-and-coming in [[[genreLabel]]] on SoundCloud", {
                                    genreLabel: i
                                })
                            };
                        case "audio-top-audio":
                            return {
                                "short": n(52).t("Top 50 in [[[genreLabel]]]", {
                                    genreLabel: i
                                }),
                                "long": n(52).t("The most played in [[[genreLabel]]] on SoundCloud this week", {
                                    genreLabel: i
                                })
                            }
                    }
                }
            },
            s = {
                trending: n(52).t("New &amp; hot"),
                top: n(52).t("Top 50")
            },
            a = {
                "all-music": n(52).t("All music genres"),
                "all-audio": n(52).t("All audio genres"),
                alternativerock: n(52).t("Alternative Rock"),
                ambient: n(52).t("Ambient"),
                classical: n(52).t("Classical"),
                country: n(52).t("Country"),
                danceedm: n(52).t("Dance &amp; EDM"),
                dancehall: n(52).t("Dancehall"),
                deephouse: n(52).t("Deep House"),
                disco: n(52).t("Disco"),
                drumbass: n(52).t("Drum &amp; Bass"),
                dubstep: n(52).t("Dubstep"),
                electronic: n(52).t("Electronic"),
                folksingersongwriter: n(52).t("Folk &amp; Singer-Songwriter"),
                hiphoprap: n(52).t("Hip-hop &amp; Rap"),
                house: n(52).t("House"),
                indie: n(52).t("Indie"),
                jazzblues: n(52).t("Jazz &amp; Blues"),
                latin: n(52).t("Latin"),
                metal: n(52).t("Metal"),
                piano: n(52).t("Piano"),
                pop: n(52).t("Pop"),
                rbsoul: n(52).t("R&B &amp; Soul"),
                reggae: n(52).t("Reggae"),
                reggaeton: n(52).t("Reggaeton"),
                rock: n(52).t("Rock"),
                soundtrack: n(52).t("Soundtrack"),
                speech: n(52).t("Speech"),
                techno: n(52).t("Techno"),
                trance: n(52).t("Trance"),
                trap: n(52).t("Trap"),
                triphop: n(52).t("Triphop"),
                world: n(52).t("World"),
                audiobooks: n(52).t("Audiobooks"),
                business: n(52).t("Business"),
                comedy: n(52).t("Comedy"),
                entertainment: n(52).t("Entertainment"),
                learning: n(52).t("Learning"),
                newspolitics: n(52).t("News &amp; Politics"),
                religionspirituality: n(52).t("Religion &amp; Spirituality"),
                science: n(52).t("Science"),
                sports: n(52).t("Sports"),
                storytelling: n(52).t("Storytelling"),
                technology: n(52).t("Technology")
            },
            l = n(3).values(a).map(function(e) {
                return e.toString()
            })
    },
    125: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.timeout,
                o = void 0 === i ? 1 / 0 : i,
                s = t.root,
                a = void 0 === s ? h.body : s;
            return a.contains(e) ? n(56).resolve() : n(56).promise(function(t, n) {
                g.push({
                    root: a,
                    element: e,
                    resolve: t,
                    reject: n,
                    created_at: Date.now(),
                    timeout: o
                }), f || (f = window.setInterval(function() {
                    g = r(g), g.length || (window.clearInterval(f), f = null)
                }, m))
            })
        }

        function r(e) {
            return e.filter(function(e) {
                var t = o(e);
                return t && t(), !t
            })
        }

        function o(e) {
            var t = e.root,
                n = e.element,
                i = e.resolve,
                r = e.reject;
            return s(e) ? r : t.contains(n) ? i : null
        }

        function s(e) {
            var t = e.created_at,
                n = e.timeout;
            return Date.now() - t > n
        }

        function a(e, t) {
            g = n(3).reject(g, {
                element: e,
                root: t
            })
        }

        function l(e, t) {
            var n = h.createElement("script");
            return n.async = !0, n.src = e, d(n, t.attributes), n
        }

        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? window.document : arguments[0];
            return e.getElementsByTagName("head")[0]
        }

        function c() {
            return n(56).promise(function(e, t) {
                var n = h.createElement("iframe");
                d(n, {
                    sandbox: "allow-scripts allow-same-origin",
                    width: 0,
                    height: 0,
                    frameborder: 0
                }), n.onload = function(t) {
                    return e(t.target)
                }, n.onerror = t, h.getElementsByTagName("body")[0].appendChild(n)
            })
        }

        function d(e, t) {
            n(3).each(t, function(t, n) {
                return e.setAttribute(n, t)
            })
        }
        var h = window.document,
            p = e.exports = {
                insertScript: function(e, t) {
                    t = t || {};
                    var n = l(e, t),
                        i = u(),
                        r = t.onerror,
                        o = t.removeAfterLoad ? i.removeChild.bind(i, n) : t.onload;
                    return (o || r) && p.onScriptLoad(n, o, r), i.appendChild(n), n
                },
                insertSandboxedScript: function(e, t) {
                    return c().then(function(n) {
                        var i = u(n.contentWindow.document),
                            r = l(e, {
                                attributes: t
                            });
                        return i.appendChild(r), n
                    })
                },
                onScriptLoad: function(e, t, n) {
                    t && (e.addEventListener ? e.addEventListener("load", t, !1) : e.readyState && (e.onreadystatechange = t)), n && (e.onerror = n)
                },
                whenInserted: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = t.root,
                        o = void 0 === r ? h.body : r,
                        s = t.timeout,
                        l = void 0 === s ? 1 / 0 : s;
                    return n(56).deferFrom(i(e, {
                        root: o,
                        timeout: l
                    })).always(function() {
                        return a(e, o)
                    })
                }
            },
            f = void 0,
            g = [],
            m = 50
    },
    130: function(e, t, n) {
        "use strict";
        var i = "all-rights-reserved",
            r = "no-rights-reserved",
            o = "commons",
            s = "cc-by",
            a = {
                attribution: "by",
                nonCommercial: "nc",
                nonDerivative: "nd",
                shareAlike: "sa"
            },
            l = e.exports = {
                ALL_RIGHTS: i,
                NO_RIGHTS: r,
                COMMONS: o,
                DEFAULT_CC: s,
                ccFields: a,
                parse: function(e) {
                    var t = {
                        license: e === i ? i : e === r ? r : o
                    };
                    return e ? (t.license === o && n(3).each(a, function(n, i) {
                        t[i] = e.indexOf(n) > -1
                    }), t) : t
                },
                toURL: function(e) {
                    var t, n = "string" == typeof e ? l.parse(e) : e;
                    return n.license === o ? (t = l.serializeCCAttributes(n).replace(/^cc-/, ""), "http://creativecommons.org/licenses/" + t + "/3.0/") : ""
                },
                serializeCCAttributes: function(e) {
                    var t = Object.keys(a).map(function(t) {
                        return e[t] && a[t]
                    }, this).filter(n(3).identity).join("-");
                    return t ? "cc-" + t : s
                }
            }
    },
    131: function(e, t, n) {
        "use strict";

        function i(e) {
            if (!e) return null;
            var t = e.promoted,
                n = s[e.type];
            return n ? {
                ad_urn: t.ad_urn,
                campaign: "promoted",
                kind: n,
                origin: e[n],
                tracking: t.tracking
            } : (window.console.warn("Unknown promoted type:", e.type), null)
        }

        function r(e, t) {
            return {
                kind: e.kind,
                origin: e,
                campaign: t
            }
        }
        var o = ["q", "q[fulltext]", "filter.duration", "filter.created_at", "filter.license", "filter.genre", "filter.genre_or_tag", "filter.place", "query_urn"],
            s = {
                "user-promoted": "user",
                "track-promoted": "track"
            };
        e.exports = {
            highlightText: function(e, t, i) {
                var r, o = n(3).assign({
                        start: "<b>",
                        end: "</b>"
                    }, i),
                    s = e.split("");
                if (!t) return e;
                for (r = t.length; r--;) s.splice(t[r].end, 0, o.end), s.splice(t[r].start, 0, o.start);
                return s.join("")
            },
            getParams: function() {
                var e = n(62).parse(window.location.href);
                return this.getValidParams(e.query)
            },
            getValidParams: function(e) {
                return n(3).pick(e, o)
            },
            modifyParamsWith: function(e, t) {
                var i = {},
                    r = this.getParams();
                return void 0 === t && r.hasOwnProperty(e) ? delete r[e] : (i[e] = t, n(3).assign(r, i)), n(62).stringify({
                    query: r
                })
            },
            getFilters: function(e) {
                var t = {},
                    i = /^filter\./;
                return e = e || this.getParams(), n(3).each(e, function(e, n) {
                    i.test(n) && (t[n] = e)
                }), n(3).isEmpty(t) ? void 0 : t
            },
            fuzzy: function(e, t, i) {
                var r, o = e.replace(/\W+/gi, "").split(""),
                    s = new RegExp("\\b(" + o.join(").*?(") + ")", "i");
                return e ? (r = t.map(function(t) {
                    var r, o, a = (i ? t.get ? t.get(i) : t[i] : t).toString(),
                        l = n(445)(a),
                        u = s.exec(l),
                        c = [];
                    if (u) {
                        for (r = u.index, o = 1; o < u.length; ++o) r = l.indexOf(u[o].toLowerCase(), r) + 1, c.push({
                            start: r - 1,
                            end: r
                        });
                        for (o = c.length; --o;) c[o - 1].end === c[o].start && (c[o - 1].end = c[o].end, c.splice(o, 1));
                        return {
                            item: t,
                            highlights: c,
                            score: e.length / u[0].length / a.length - c.length
                        }
                    }
                }).filter(Boolean), r.sort(function(e, t) {
                    return t.score - e.score
                }), r) : t.map(function(e) {
                    return {
                        item: e,
                        highlights: [],
                        score: 1
                    }
                })
            },
            searchCategoryToFacet: function(e) {
                return {
                    sounds: "sound",
                    high_tier: "sound",
                    sets: "set",
                    playlists: "set",
                    albums: "album",
                    people: "person"
                }[e]
            },
            facetToSearchCategory: function(e) {
                return {
                    sound: "sounds",
                    set: "playlists",
                    person: "people"
                }[e]
            },
            parseOrganicResults: function(e) {
                var t = e.collection,
                    i = void 0 === t ? [] : t,
                    o = e.total_results,
                    s = void 0 === o ? 0 : o,
                    a = n(3).compact(i),
                    l = s - (i.length - a.length);
                return {
                    count: l,
                    records: a.map(function(e) {
                        return r(e, null)
                    })
                }
            },
            parsePremiumResults: function(e) {
                var t = e.premium_content,
                    n = t || {
                        collection: [],
                        total_results: 0
                    };
                return {
                    count: n.total_results,
                    records: n.collection.map(function(e) {
                        return r(e, "high_tier")
                    })
                }
            },
            parsePromotedResults: function(e) {
                var t = e.promoted_content,
                    n = [i(t)].filter(Boolean);
                return {
                    count: n.length,
                    records: n
                }
            },
            parseResult: r
        }
    },
    132: function(e, t) {
        "use strict";
        e.exports = {
            precise: function(e, t) {
                return t = Math.pow(10, t || 0), Math.round(e * t) / t
            },
            clamp: function(e, t, n) {
                return Math.min(n, Math.max(t, e))
            },
            mod: function(e, t) {
                return (e % t + t) % t
            }
        }
    },
    133: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return e.audibleAt ? e.audibleAt(t) : e.at(t)
        }

        function r(e) {
            var t = e.current;
            if (n(67).isSourceActive(this)) {
                var i = this.getSoundIndex(t);
                i > -1 && this.setAudioCursor(i)
            }
        }
        e.exports = new(n(21))(n(946), {
            _audioCursor: -1,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    n = t.loop;
                this.extend(e, {
                    isLooping: !!n
                })
            },
            defaults: {
                getQueryPosition: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.getAudioCursor() : arguments[0];
                    return e
                }
            },
            after: {
                setup: function() {
                    n(67)._isNew() && this.listenTo(n(67), "change:currentSound", r)
                }
            },
            getCurrentSound: function() {
                var e = i(this, this._audioCursor);
                return e && e.getCurrentSound()
            },
            setAudioCursor: function(e) {
                this._audioCursor !== e && (this._audioCursor = e, this.trigger("change:currentSound"))
            },
            getAudioCursor: function() {
                return this._audioCursor
            },
            getSoundIndex: function(e) {
                var t = this,
                    n = -1;
                return this.some(function(r, o) {
                    var s = i(t, o);
                    return s && (s === e || s.containsSound(e)) ? (n = o, !0) : void 0
                }), n
            },
            getQueueMetadataAt: function(e) {
                return {
                    originalModel: this.at(e),
                    queryPosition: this.getQueryPosition(e),
                    sourceInfo: this.getSourceInfo()
                }
            },
            containsSound: function(e) {
                return this.getSoundIndex(e) > -1
            }
        })
    },
    134: function(e, t, n) {
        "use strict";

        function i() {
            return n(56).promise(function(e) {
                r() ? e() : n(57).on("cookies:allowed", function() {
                    return e()
                })
            })
        }

        function r() {
            return a() ? o() : !0
        }

        function o() {
            return f.get(u) === l
        }

        function s() {
            return n(662).hasExplicitCookiesConsentMode(n(163).getCountryCode())
        }

        function a() {
            return s()
        }
        var l = n(662).COOKIE_CONSENT_VALUE,
            u = n(662).COOKIE_CONSENT_NAME,
            c = window.location.hostname.replace(/.*\.(.+\..+)/, "$1"),
            d = "." + c,
            h = 864e5,
            p = new(n(235)),
            f = e.exports = {
                get: function(e) {
                    return p.length || window.document.cookie.split(/\s*;\s*/).forEach(function(e) {
                        var t = e.split("="),
                            n = t[0],
                            i = t[1];
                        p.set(n, i)
                    }), p.get(e)
                },
                set: function(e) {
                    var t = e.name,
                        n = e.value,
                        i = e.expirationInDays,
                        r = e.secure,
                        o = e.domainStrict;
                    window.document.cookie = [t + "=" + n, i ? "expires=" + new Date(Date.now() + i * h).toGMTString() : "", "path=/", o ? "" : "domain=" + d, r ? "secure" : ""].filter(Boolean).join(";"), p.reset()
                },
                unset: function(e) {
                    f.set(n(3).assign({}, e, {
                        value: "",
                        expirationInDays: -1
                    })), p.reset()
                },
                usageAllowed: r,
                whenAllowed: i,
                requiresUserConsent: a,
                enable: function() {
                    r() || (f.set({
                        name: u,
                        value: l
                    }), n(57).trigger("cookies:allowed"))
                }
            }
    },
    136: function(e, t) {
        "use strict";
        e.exports = {
            CANCELING: "canceling",
            EDITING: "editing",
            NONE: "none",
            SAVING: "saving"
        }
    },
    137: function(e, t, n) {
        "use strict";

        function i(e, t) {
            n(3).each(e.filters, function(e, n) {
                t.filters[n] || (t._map[n] = P(t._sourceModels.length)), t.filters[n] = e
            }), n(3).each(t.filters, function(n, i) {
                e.filters || (delete t.filters[i], delete t._map[i])
            }), t.recalculateFilters()
        }

        function r() {
            return n(3).find(this.sources, o, this)
        }

        function o(e, t) {
            if (this._ignoredCollections.indexOf(t) > -1) return !1;
            var n = e.isFullyPopulated(),
                i = f.call(this, e);
            return (!n || i < e.length) && !g.call(this, e)
        }

        function s(e, t) {
            var n = e ? "on" : "off";
            t[n]("all", h, this)[n]("add", c, this)[n]("reset", u, this)[n]("remove", d, this)
        }

        function a() {
            this._map = n(3).mapObject(this.filters, function() {
                return new(n(664))
            })
        }

        function l(e) {
            var t = this,
                n = 0;
            return this.sources.some(function(i, r) {
                return i === e ? !0 : void(n += t._sourceModelCounts[r])
            }), n
        }

        function u(e, t) {
            var n = this,
                i = 0 === this._sourceModels.length;
            t && t.previousModels && t.previousModels.length && t.previousModels.reduceRight(function(t, i, r) {
                d.call(n, i, e, {
                    index: r
                })
            }, null);
            var r = this._sourceModels.length;
            e.models.forEach(function(t) {
                c.call(n, t, e, {
                    silent: i
                })
            });
            var o = this._sourceModels.length,
                s = o > r,
                a = i && s || 0 === o && this.isFullyPopulated();
            (a || s) && (this.lastFetchTime = Date.now()), a && this.trigger("reset", this, {})
        }

        function c(e, t, n) {
            var i = t.indexOf(e);
            if (D.call(this, i, t, !0)) {
                var r = i + l.call(this, t);
                this.lastFetchTime = Date.now(), 0 !== this._sourceModels.length || n.silent || this.trigger("reset", this, {}), b.call(this, e, t, r, n), x.call(this), k.call(this, n)
            }
        }

        function d(e, t, n) {
            var i = n.index;
            if (D.call(this, i, t, !1)) {
                var r = i + l.call(this, t);
                w.call(this, e, t, r)
            }
        }

        function h(e) {
            switch (e) {
                case "add":
                case "remove":
                case "reset":
                case "destroy":
                    return;
                default:
                    this.trigger.apply(this, arguments)
            }
        }

        function p(e, t) {
            var n = this,
                i = this.length,
                r = i + e,
                o = {
                    silent: t
                },
                s = !this.lastFetchTime,
                a = 0;
            return this.sources.every(function(t, i) {
                for (var l = void 0, u = void 0, c = void 0, d = void 0, h = n._sourceModelCounts[i]; !g.call(n, t) && n.length < r && (l = t.models.slice(h, h + e), c = l.length, 0 !== c);) {
                    for (n.lastFetchTime = t.lastFetchTime || Date.now(), s && (s = !1, n.trigger("reset", n, {})), d = n.length; u = l.shift();) b.call(n, u, t, a + h, o), h++,
                        x.call(n), k.call(n, o);
                    e -= n.length - d
                }
                return a += h, n.length < r && (t.isFullyPopulated() || g.call(n, t))
            }), !this.lastFetchTime && this.sources.every(function(e) {
                return e.isFullyPopulated()
            }) && (this.lastFetchTime = Date.now()), this.length > i
        }

        function f(e) {
            return this._sourceModelCounts[this.sources.indexOf(e)]
        }

        function g(e) {
            var t = this.sourceOptions[this.sources.indexOf(e)];
            if (null == t.maxModels) return !1;
            var n = this._ignore,
                i = f.call(this, e),
                r = l.call(this, e),
                o = r + i,
                s = m(n, r, o),
                a = i - s;
            return t.maxModels <= a
        }

        function m(e, t, i) {
            var r = n(3).sortedIndex(e, t),
                o = n(3).sortedIndex(e, i);
            return o - r + (e[o] === i ? 1 : 0)
        }

        function v(e) {
            for (var t = e, n = 0, i = this._ignore.length; i > n && this._ignore[n] <= t; ++n) ++t;
            return t
        }

        function _(e) {
            var t = v.call(this, e);
            if (e > -1)
                for (var n = 0, i = this.sources.length; i > n; ++n) {
                    var r = this.sources[n],
                        o = f.call(this, r);
                    if (!(t >= o)) return {
                        source: r,
                        index: t,
                        model: r.at(t)
                    };
                    t -= o
                }
        }

        function y(e) {
            var t = this.sources.indexOf(e);
            t > -1 && t < this.sources.length - 1 && this._ignoredCollections.push(t)
        }

        function b(e, t, i, r) {
            function o(e, t, n) {
                e > i && n[t]++
            }
            var s = this,
                a = i === this._sourceModels.length ? function(e, t) {
                    e.push(t)
                } : function(e, t) {
                    e.splice(i, 0, t)
                };
            if (e instanceof this.model || (e = this.extractModel(e, i)), e) {
                this._sourceModelCounts[this.sources.indexOf(t)]++;
                var l = this.indexesOfEquivalentModels(e, this._sourceModels);
                l.forEach(function(e) {
                    e >= i && s._dupes[e].push(i)
                }), a(this._sourceModels, e), a(this._dupes, l.filter(function(e) {
                    return i > e
                })), this._dupes.slice(i).forEach(function(e, t) {
                    var n = t + i;
                    s._dupes[n].forEach(o)
                }), n(3).each(this.filters, function(t, n) {
                    s._map[n].insert(i, !!t.call(s, e, i))
                })
            }
        }

        function w(e, t, i) {
            function r(e, t, n) {
                e > i && n[t]--
            }
            var o = this,
                s = i === this._sourceModels.length - 1 ? function(e) {
                    e.pop()
                } : function(e) {
                    e.splice(i, 1)
                };
            s(this._sourceModels), s(this._dupes), n(3).each(this._map, function(e) {
                e.remove(i)
            }), this._dupes.slice(i).forEach(function(e, t) {
                var s = t + i;
                o._dupes[s] = n(3).without(o._dupes[s], i), o._dupes[s].forEach(r)
            }), this._sourceModelCounts[this.sources.indexOf(t)]--, x.call(this), k.call(this)
        }

        function x() {
            for (var e = 0, t = n(3).isEmpty(this._map) ? P(this._sourceModels.length) : n(664).combine(n(3).values(this._map)), i = function(e, n) {
                    return e && !t.get(n)
                }, r = 0; r < this.sources.length; ++r) {
                var o = this.sourceOptions[r].maxModels,
                    s = f.call(this, this.sources[r]);
                if (null != o) {
                    var a = M(t, !0, o, e, e + s - 1);
                    e + s > a && t.clearRange(a, e + s - 1)
                }
                e += s
            }
            for (var r = 0; r < this._sourceModels.length; ++r) t.get(r) && t.set(r, 0 === this._dupes[r].length || this._dupes[r].reduce(i, !0));
            this._ignore = t.getIndexes(!1)
        }

        function k(e) {
            var t = this;
            n(1282).align({
                source: this.models,
                target: this._sourceModels.filter(S, this),
                comparator: this.compareModels,
                add: function(i, r) {
                    t.add(i, n(3).defaults({
                        at: r,
                        parse: !1
                    }, e))
                },
                remove: function(e, n) {
                    t.remove(t.at(n), {
                        _propagateToSource: !1
                    })
                }
            })
        }

        function S(e, t) {
            var i = n(3).sortedIndex(this._ignore, t);
            return this._ignore[i] !== t
        }

        function T(e) {
            var t = void 0;
            return e = n(3).clone(e) || {}, p.call(this, this.options.limit, e.silent) || (t = r.call(this)), t ? E.call(this, t, e) : n(56).resolve({})
        }

        function E(e, t) {
            var i = this,
                r = this.options.limit,
                o = this._sourceModels.length + r,
                s = e.options.limit;
            return t.reset = !this.isPopulated(), t.remove = !1, e.setLimit(Math.max(r, F)), e.fetchUntilResults(t).always(function() {
                e.setLimit(s)
            }).then(function() {
                return A.call(i, t, o)
            }).then(null, function() {
                var r = e === n(3).last(i.sources);
                return r ? void 0 : (y.call(i, e), A.call(i, t, o))
            })
        }

        function A(e, t) {
            var i = this,
                r = this.options.limit,
                o = t - this._sourceModels.length;
            return o > 0 ? (this.options.limit = o, T.call(this, n(3).omit(e, "url")).always(function() {
                i.options.limit = r
            })) : void 0
        }

        function C(e) {
            function t() {
                i.cache = {}
            }
            var i = n(3).memoize(function() {
                return e.apply(this, arguments).always(t)
            }, JSON.stringify);
            return i
        }

        function I() {
            var e = this.setupSources();
            this.sources = e.map(function(e) {
                return [].concat(e)[0]
            }), this.sourceOptions = e.map(function(e) {
                return [].concat(e)[1] || {}
            }), this._sourceModelCounts = e.map(function() {
                return 0
            })
        }

        function M(e, t, n) {
            var i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3],
                r = arguments.length <= 4 || void 0 === arguments[4] ? e.length - 1 : arguments[4],
                o = 0,
                s = void 0;
            for (s = i; r >= s && n > o; ++s) e.get(s) === t && ++o;
            return s
        }

        function D(e, t, n) {
            var i = this.sources.indexOf(t),
                r = this._sourceModelCounts[i];
            return r > e ? !0 : n && e === r ? !this.sources.slice(0, i).some(o, this) : !1
        }

        function P(e) {
            return new(n(664))(n(3).times(e, R))
        }
        var F = 10,
            R = (e.exports = n(73).extend({
                sources: null,
                sourceOptions: null,
                _sourceModelCounts: null,
                _sourceModels: null,
                filters: null,
                _map: null,
                _dupes: null,
                _ignore: null,
                _bulkFetchDeferred: null,
                _ignoredCollections: null,
                setup: function() {
                    I.call(this), this.sources.forEach(s.bind(this, !0)), this._sourceModels = [], this._dupes = [], this.filters = n(3).clone(this.filters || {}), a.call(this), this._ignore = [], this._ignoredCollections = [], this.fetch = C(T), p.call(this, this.options.limit, !0)
                },
                setupSources: function() {},
                setLimit: function(e) {
                    this.options.limit = e
                },
                setFilter: function(e, t) {
                    (t || this.filters[e]) && (t ? (this.filters[e] || (this._map[e] = P(this._sourceModels.length)), this.filters[e] = t) : (delete this.filters[e], delete this._map[e]), this.recalculateFilters())
                },
                bulkFetch: function(e, t) {
                    var i = this,
                        r = this.options.limit,
                        o = e - this.length,
                        s = this._bulkFetchDeferred;
                    return s && !t ? s : (s || (s = this._bulkFetchDeferred = n(56).defer().always(function() {
                        i._bulkFetchDeferred = null, i.options.limit = r
                    })), 0 >= o || this.isFullyPopulated() ? s.resolve() : (this.options.limit = o, this.fetch({
                        reset: !0
                    }).done(function() {
                        i.bulkFetch(e, !0)
                    }).fail(s.reject), s))
                },
                audibleAt: function(e) {
                    var t = _.call(this, e);
                    if (t) {
                        var n = t.source,
                            i = t.index;
                        if (n.audibleAt) return n.audibleAt(i);
                        var r = this.at(e);
                        return "sound" === r.resource_type || "playlist" === r.resource_type ? r : null
                    }
                },
                extractModel: null,
                remove: function(e) {
                    var t = this,
                        i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        r = i._propagateToSource,
                        o = void 0 === r ? !0 : r;
                    return o ? (Array.isArray(e) || (e = [e]), e.forEach(function(e) {
                        var n = _.call(t, t.indexOf(e));
                        n && n.source.remove(n.model)
                    })) : n(73).prototype.remove.call(this, e, n(3).defaults({
                        _propagateToSource: !1
                    }, i)), this
                },
                isFullyPopulated: function() {
                    return !r.call(this)
                },
                getNumSourceModels: function() {
                    return this._sourceModels.length
                },
                recalculateFilters: function() {
                    var e = this,
                        t = this._ignore;
                    n(3).each(this.filters, function(t, n) {
                        e._sourceModels.forEach(function(i, r) {
                            e._map[n].set(r, t.call(e, i, r))
                        })
                    }), x.call(this), n(303).multisetCompare(t, this._ignore) || (this.trigger("filterChanged"), k.call(this))
                },
                getPlaySource: function() {
                    var e = this.constructor,
                        t = e.getNewInstance(null, this.options);
                    return t.release(), i(this, t), t
                }
            }, {
                onCleanup: function(e) {
                    for (var t = void 0; t = e.sources.pop();) t.release(), s.call(e, !1, t);
                    this._sourceModels = this._map = null
                }
            }), function() {
                return !0
            })
    },
    138: function(e, t) {
        "use strict";
        e.exports = {
            all: "all",
            none: "none",
            one: "one"
        }
    },
    143: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = 0;
            return t = 10 > e ? 2 : 100 > e ? 1 : 0
        }
        var r, o = ["K", "M", "B"];
        r = {
            max: null,
            suffix: "+",
            useSIUnits: !1,
            precision: null
        };
        e.exports = {
            render: function(e, t) {
                if ("number" != typeof e) return e;
                var s = 0,
                    a = "",
                    l = 0;
                if (t = t || {}, n(3).defaults(t, r), t.max && e > t.max) e = t.max, a = t.suffix;
                else if (t.useSIUnits) {
                    if (null === t.precision && 1e4 > e) return n(52).numberHelper.format(e);
                    for (; e >= 1e3 && s < o.length;) e /= 1e3, a = o[s++];
                    l = null !== t.precision ? t.precision : i(e)
                }
                return n(52).numberHelper.format(e, {
                    precision: l,
                    roundingFn: Math.floor
                }) + a
            }
        }
    },
    148: function(e, t, n) {
        "use strict";
        var i = e.exports = n(162).extend({
            enabled: !0,
            _breakCount: 0,
            _failCount: 0,
            _maxBreaks: 0,
            _timeoutId: null,
            defaults: {
                tolerance: 1,
                baseDelay: 1e3,
                maxDelay: 3e4,
                backoffRate: 2,
                giveUp: null,
                enabled: !0
            },
            initialize: function(e) {
                n(3).bindAll(this, "failed", "succeeded"), this.setup(e)
            },
            setup: function(e) {
                this.options = n(3).assign({}, this.options || this.defaults, e), e = n(3).defaults(this.options, this.defaults);
                var t = e.maxDelay / e.baseDelay;
                if (e.backoffRate > 1)
                    for (; t > 1;) ++this._maxBreaks, t /= e.backoffRate;
                else this._maxBreaks = 1 / 0;
                e.enabled || this.disable()
            },
            dispose: function() {
                this.off(), this.clearTimeout()
            },
            clearTimeout: function() {
                this._timeoutId && (window.clearTimeout(this._timeoutId), this._timeoutId = null)
            },
            failed: function() {
                ++this._failCount >= this.options.tolerance && this.disable()
            },
            succeeded: function() {
                this._breakCount = this._failCount = 0
            },
            disable: function(e) {
                if (this.enabled) {
                    var t = !e || e.autoEnable !== !1;
                    this.enabled = !1, ++this._breakCount, t && (!this.options.giveUp || this._breakCount < this.options.giveUp) ? this._timeoutId = window.setTimeout(this.enable.bind(this), this.currentDelay()) : this.trigger("giveup"), this.trigger("disabled")
                }
            },
            enable: function() {
                this.enabled || (this.enabled = !0, this._failCount = 0, this.trigger("enabled"))
            },
            currentDelay: function() {
                var e = this.options;
                return Math.min(e.baseDelay * Math.pow(e.backoffRate, Math.floor(Math.random() * Math.min(this._maxBreaks, this._breakCount))), e.maxDelay)
            }
        });
        n(3).assign(i.prototype, n(22).Events)
    },
    150: function(e, t, n) {
        "use strict";

        function i() {
            return this.isEdit ? n(56).resolve() : n(460).confirm(n(52).t("Are you sure you want to stop your upload? Any unsaved changes will be lost."))
        }

        function r() {
            return this.validate().then(function(e) {
                return n(56)[e ? "resolve" : "reject"]()
            })
        }

        function o() {
            this.isDirty() || this.setToModelAttributes()
        }

        function s(e) {
            var t, i = n(521).instances.get(n(63).currentUserId());
            i && (t = n(316).convert(e), i.add(t, {
                at: 0
            }), t.release())
        }
        var a = n(59).trackUploadFunnel,
            l = n(59).trackV0Click;
        e.exports = n(79).extend(n(955), n(201), n(956), n(1324), n(952), n(951), {
            fields: {
                offlineSyncEnabled: {
                    defaultValue: !0
                }
            },
            constraints: {
                title: [
                    [n(69), {
                        message: n(52).t("Enter a title.")
                    }],
                    [n(109), {
                        maxLength: 100,
                        message: n(52).t("Enter a title that is up to [[maxLength]] characters.")
                    }]
                ],
                description: [
                    [n(109), {
                        maxLength: 4e3,
                        message: n(52).t("Enter a track description that is up to [[maxLength]] characters.")
                    }]
                ],
                permalink: [
                    [n(456), {
                        type: "sound",
                        getResource: function() {
                            return this.getAudible()
                        }
                    }],
                    [n(69), {
                        message: n(52).t("Enter a permalink."),
                        shouldCheck: function() {
                            return this.isEdit
                        }
                    }]
                ],
                tags: [
                    [n(529)]
                ],
                customGenre: [
                    [n(109), {
                        maxLength: 100,
                        message: n(52).t("Enter a custom genre that is up to [[maxLength]] characters.")
                    }]
                ]
            },
            _sound: null,
            resource_type: "sound-upload-edit",
            requiredModelAttributes: ["commentable", "downloadable", "embeddable_by", "feedable", "genre", "geo_blockings", "label_name", "purchase_title", "purchase_url", "release_date", "reveal_comments", "reveal_stats", "api_streamable"],
            actions: {
                save: function() {
                    var e = this;
                    return r.call(this).then(function() {
                        return e.set("editing", !1), e.saveEdits()
                    })
                },
                cancel: function() {
                    var e = this;
                    i.call(this).then(function() {
                        return e.cancel()
                    })
                }
            },
            setup: function(e, t) {
                if (t.isEdit) {
                    var i = this.requiredModelAttributes.map(function(e) {
                        return "change:" + e
                    });
                    this.isEdit = !0, this._sound = new(n(66))({
                        id: t.resource_id
                    }), this.listenTo(this._sound, i.join(" "), o), this._sound.attrExists(this.requiredModelAttributes) ? this.setToModelAttributes() : this._sound.fetch({
                        attrs: this.requiredModelAttributes
                    }).fail(function() {
                        n(123).raise({
                            fatal: !0
                        })
                    }), this.setButtonConfig("save", {
                        label: n(52).t("Save changes")
                    }), this.addSubmodel(this._sound)
                }
            },
            cancel: function() {
                this.removeUpload(), this.isEdit ? (this.setToModelAttributes(), this.trigger("canceled")) : (this.destroy(), this._sound && n(74).destroy(this._sound), a("cancel"))
            },
            createAudible: function() {
                return this._sound = new(n(66))(this.getUploadAttributes()), this._sound
            },
            getAudible: function() {
                return this._sound
            },
            unsetAudible: function() {
                this._sound = null
            },
            onAudibleSaved: function() {
                var e = this.getAudible();
                this.isEdit ? (n(57).trigger("sound:saved", e), l(null, {
                    click_name: "track::edit_saved",
                    click_object: e.getUrn()
                })) : s(e)
            },
            onSaveFailed: function(e) {
                this.setToFailed("save", e), this.set("editing", !0), n(55).get("me").fetch()
            },
            getAttributesToBeSaved: function() {
                var e = n(3).pick(this.attributes, "feedable", "downloadable", "commentable");
                return e.api_streamable = this.get("apiStreamable"), e.reveal_comments = this.get("publicComments"), e.restrictions = this.get("offlineSyncEnabled") ? [] : ["no_offline_sync"], n(3).assign(e, this.getUploadAttributes()), e
            },
            getAttributesFromModel: function() {
                var e = this.getAudible(),
                    t = n(3).pick(e.attributes, "feedable", "downloadable", "commentable");
                t.apiStreamable = !!e.get("api_streamable"), t.buyLink = e.get("purchase_url"), t.buyTitle = e.get("purchase_title") || this.getFieldMetadata("buyTitle").defaultValue, t.embeddableByAll = "all" === e.get("embeddable_by"), t.stats = !!e.get("reveal_stats"), t.publicComments = !!e.get("reveal_comments");
                var i = e.get("geo_blockings") || [];
                return t.geoblocking = !!i.length, t.availableCountries = n(83).complement(i), t.labelName = e.get("label_name"), t.releaseDate = e.get("release_date") && n(52).dateTimeHelper.fromString(e.get("release_date")), t.offlineSyncEnabled = n(3).isEmpty(e.get("restrictions")), t
            },
            updateSound: function(e) {
                this._sound && (this._sound.release(), this._sound = e)
            }
        }, {
            hashFn: function(e, t) {
                return e.resource_id || t && t.resource_id || e.id || null
            },
            onCleanup: function() {
                this._sound && this._sound.release()
            }
        })
    },
    156: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                a.current.dispose()
            }

            function r(e) {
                if (e.key) {
                    var t, n, i, r;
                    t = g.exec(e.key), t && (i = c.getItem(e.key), n = t[0], r = u[n], r && null === i ? r === a.current ? r.store.write() : (r.dispose(), delete u[n]) : !r && i && (u[n] = new l(n)))
                }
            }

            function o() {
                if (n(200).visible() && a.size() > 1) {
                    var e = 1679616,
                        t = ("0000" + (Math.random() * e).toString(36)).substr(-4);
                    n(57).broadcast({
                        excludeThis: !0
                    }, "instances:ping", t), n(3).delay(function() {
                        n(200).visible() && a.each(function(e, n) {
                            if (n !== f) {
                                var i = e.get("pong");
                                i !== t && (e.dispose(), delete u[n])
                            }
                        })
                    }, h)
                }
            }

            function s(e) {
                a.current.set("pong", e)
            }
            var a, l, u, c, d = 3e4,
                h = 1e3,
                p = "inst_",
                f = p + Date.now(),
                g = new RegExp(p + "\\d{13}$");
            n(97).localStorage ? (a = e.exports = {
                initialize: function() {
                    var e, a, h, p, m = this;
                    for (c = window.localStorage, u = {}, this.current = u[f] = new l(f), u[f].store.write(), ["each", "some", "every", "map", "filter", "find"].forEach(function(e) {
                            m[e] = n(3)[e].bind(n(3), u)
                        }), e = 0, a = c.length; a > e; ++e) h = c.key(e), h !== this.current.store.keyName && (p = g.exec(h)) && (u[p[0]] = new l(p[0]));
                    window.setInterval(o, d), n(57).on("broadcast:instances:ping", s), t(window).on("unload", i), window.addEventListener("storage", r, !1)
                },
                size: function() {
                    return Object.keys(u || {}).length
                }
            }, l = function(e) {
                this.store = new(n(105))(e), e === f && (this.set = this.store.set.bind(this.store))
            }, n(3).assign(l.prototype, {
                get: function(e) {
                    return this.store.get(e)
                },
                dispose: function() {
                    return this.store.dispose()
                }
            })) : a = e.exports = null
        }).call(t, n(1))
    },
    157: function(e, t, n) {
        "use strict";

        function i() {
            r.has("volume") && (o.set("volume", r.get("volume")), r.dispose())
        }
        var r = new(n(105))("volume-settings"),
            o = e.exports = new(n(105))("settings");
        i();
        var s = {
            volume: 1,
            newTrackNotifications: "always",
            showTimeRemaining: !1
        };
        n(3).forEach(s, function(e, t) {
            o.has(t) || o.set(t, e, {
                dontPersist: !0
            })
        }), o.finalize()
    },
    162: function(e, t) {
        "use strict";
        e.exports = function() {
            function e(n, i) {
                function r() {
                    return !t && this.initialize ? this.initialize.apply(this, arguments) : void 0
                }
                var o, s, a, l, u;
                for (t = !0, u = new this, t = !1, l = "[object Array]" !== Object.prototype.toString.call(n) ? [n] : n, s = 0, a = l.length; a > s; ++s) {
                    n = l[s];
                    for (o in n) u[o] = n[o]
                }
                return i && Object.keys(i).reduce(function(e, t) {
                    return e[t] = i[t], e
                }, r), r.prototype = u, r.prototype.constructor = r, r.extend = e, r
            }
            var t = !1,
                n = function() {};
            return n.extend = e, n
        }()
    },
    163: function(e, t, n) {
        "use strict";

        function i() {
            var e = d();
            return e ? "This track is not available in " + e : n(52).t("This track is not available in your country")
        }

        function r() {
            var e = d();
            return e ? "Not available in " + e : n(52).t("Not available in your country")
        }

        function o() {
            var e = n(55).get("geoip");
            return e && e.get("country_code")
        }

        function s(e) {
            var t = o();
            return e.some(function(e) {
                return e === t
            })
        }

        function a() {
            return "US" === o()
        }

        function l() {
            return "DE" === o()
        }

        function u() {
            return "GB" === o()
        }

        function c() {
            return /^en/.test(n(52).getLocale())
        }

        function d() {
            if (c()) {
                var e = n(55).get("geoip");
                return n(83).codeToCountry(e.get("country_code"))
            }
        }
        e.exports = {
            getLongBlockMessage: i,
            getShortBlockMessage: r,
            getCountryCode: o,
            isInCountries: s,
            isCountryUS: a,
            isCountryGermany: l,
            isCountryUK: u
        }
    },
    164: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e === n(55).get("me").id,
                i = n(63).isLoggedIn();
            return t && i
        }

        function r(e) {
            var t = n(354).numSessionPlays(),
                i = 1 === o.get(u),
                r = e.userInitiated;
            !n(63).isLoggedIn() && !i && t > f && r && this.showSignupTeaser(e.sound.getUrn())
        }
        var o = new(n(105))("already-seen"),
            s = "listen-upsell",
            a = "stream-upsell",
            l = "user-upsell",
            u = "signup-teaser-modal",
            c = 36e5,
            d = 24 * c,
            h = 7 * d,
            p = 4,
            f = 2,
            g = e.exports = {
                getUpsellableTrackCount: function() {
                    return p
                },
                couldHaveUserUpsell: function(e) {
                    return i(e) && !g.alreadySeenUserUpsell() && !n(55).get("me").isPremium()
                },
                isValidSound: function(e) {
                    var t = n(55).get("me"),
                        i = "sound" === e.resource_type;
                    if (i && !e.hasVisuals() && !t.isPremium() && t.get("track_count") >= p && t.owns(e)) {
                        var r = new Date(e.get("created_at")),
                            o = Date.now(),
                            s = new Date(o - c),
                            a = new Date(o - h);
                        return s >= r && r >= a
                    }
                    return !1
                },
                isValidIndex: function(e, t) {
                    return e > -1 && t.length >= p
                },
                isValidUserSounds: function(e) {
                    var t = e.length && e.first().get("created_at"),
                        i = new Date(t),
                        r = n(55).get("me");
                    return !r.isPremium() && e.length > p && i >= new Date(Date.now() - h) && i <= new Date(Date.now() - d)
                },
                alreadySeenListenUpsell: function() {
                    return 1 === o.get(s)
                },
                alreadySeenUserUpsell: function() {
                    return 1 === o.get(a) ? (o.unset(a), this.dismissUserUpsell(), !0) : 1 === o.get(l)
                },
                dismissListenUpsell: function() {
                    o.set(s, 1)
                },
                dismissUserUpsell: function() {
                    o.set(l, 1)
                },
                startPlayTracking: function() {
                    n(63).isLoggedIn() || n(57).on("audio:play", r, this)
                },
                stopPlayTracking: function() {
                    n(57).off("audio:play", r, this)
                },
                showSignupTeaser: function(e) {
                    var t = n(55).get("rollouts").get("signup_teaser"),
                        i = new(n(383))({
                            version: t,
                            width: 625,
                            soundUrn: e
                        });
                    i.open(), o.set(u, 1)
                }
            }
    },
    166: function(e, t, n) {
        "use strict";
        var i = e.exports = function(e, t) {
            var i, r = t.resource_type;
            return i = "playlist-upload" === r ? new(n(357))(e, t) : "sound-upload-edit" === r ? new(n(150))(e, t) : new(n(150))(e, t)
        };
        i.getClass = function(e) {
            var t = e.resource_type;
            return n("playlist-upload" === t ? 357 : "sound-upload-edit" === t ? 150 : 150)
        }
    },
    172: function(e, t, n) {
        "use strict";

        function i() {
            return n(112).chrome && n(55).get("rollouts").get("google_cast") ? n(56).promise(function(e, t) {
                n(125).insertScript("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1", {
                    onload: e,
                    onerror: t
                })
            }).then(null, function() {
                return n(56).reject("Failed to load cast_sender.js")
            }) : n(56).reject("Cast is disabled for browser/user")
        }
        var r = 100,
            o = 6e3,
            s = o / r,
            a = !1,
            l = !1;
        window.__onGCastApiAvailable = function() {
            window.chrome && window.cast && (a = !0, n(57).on("googleCast:start", function() {
                l = !0
            }), n(57).on("googleCast:end", function() {
                l = !1
            }))
        };
        e.exports = {
            getInstance: n(3).memoize(function() {
                return i().then(function() {
                    return n(56).poll(function() {
                        return a
                    }, r, s).then(null, function() {
                        return n(56).reject("SDK loaded but unavailable")
                    })
                }).then(function() {
                    return n(1288).fromSDK(window.chrome, window.cast)
                }).then(null, function(e) {
                    n(255).error("Load failed:", e)
                })
            }),
            isCasting: function() {
                return l
            }
        }
    },
    173: function(e, t, n) {
        "use strict";
        e.exports = {
            DISABLED: -1,
            UNKNOWN: 0,
            PENDING: 1,
            INVALID: 2,
            VALID: 3
        }
    },
    174: function(e, t, n) {
        "use strict";
        var i = /\s/,
            r = /([a-z])([A-Z])/g;
        e.exports = {
            usertext: n(446).withDefaults(n(497)["default"]),
            usertextOneline: n(446).withDefaults(n(497).oneline),
            splitWords: function(e) {
                return e ? i.test(e) ? e : e.replace(r, "$1â€‹$2") : ""
            }
        }
    },
    175: function(e, t, n) {
        "use strict";
        e.exports = n(117).extend({
            includeFooter: ".l-one-column",
            css: n(837),
            template: n(1141)
        })
    },
    182: function(e, t, n) {
        "use strict";

        function i() {
            n(161).useCookies(!0), r()
        }

        function r() {
            n(3).defer(n(3).invoke, [n(1351), n(1353), n(560), n(1352), n(1354)], "include")
        }
        e.exports = {
            initialize: function() {
                var e = function(e) {
                        return n(55).get(e)
                    },
                    t = e("me").id,
                    o = e("app_version").replace(/!$/, ""),
                    s = n(134).usageAllowed();
                n(161).initialize({
                    id: e("client_application_id"),
                    appVersion: String(parseInt(o, 10) || ""),
                    trackingUrl: e("eventlogger_tracking_url"),
                    user: t,
                    batchTimeout: n(97).sendBeacon ? 5e3 : 1e3,
                    useCookies: s,
                    eventVersions: {
                        audio: "1.22.1"
                    },
                    requestTransport: void 0
                }), t || n(57).once("connect:hasUserData", function() {
                    n(161).setUser(e("me").id)
                }), s ? r() : n(57).once("cookies:allowed", i)
            },
            dispose: function() {
                n(161).flush(!0)
            },
            trackPageView: function(e, t, i, r) {
                var o = t.join("::");
                null != window._gaq && window._gaq.push(["_trackPageview", o]), n(161).pageview(i, e, t, r)
            },
            trackAudioEvent: function(e) {
                n(161).audio(e)
            },
            trackAppLoad: function(e, t, i) {
                n(161).appLoad(t, {
                    level: e,
                    latency: i
                })
            },
            trackClick: function(e, t) {
                n(161).logEvent("click", e, t)
            },
            trackV0Click: function(e, t, i, r) {
                n(161).click(i, e, t, r)
            },
            trackImpression: function(e, t) {
                n(161).impression(e, t)
            },
            trackAudioError: function(e) {
                n(1283).log(e)
            },
            trackStats: function(e, t) {
                n(161).statsView(e, t)
            }
        }
    },
    183: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = /soundcloud\.com\/[a-zA-Z0-9_\/?=#&%-]+/g,
                r = /^(?:(?:https?:\/\/)?(?:www\.|m\.)?soundcloud\.(?:com|dev))\/?/i,
                o = /^(?:(?:https?:\/\/)?(?:[-\w]+\.)*?soundcloud\.(?:com|dev))\b\/?/i,
                s = /^(?:(?:ht|f)tps?:\/\/|mailto:)/i,
                a = ["accounts", "activate", "activity", "admin", "android", "announcements", "api", "apps", "artworks", "assets", "comments", "community-guidelines", "connect", "customize", "creativecommons", "creator", "creators", "dashboard", "dropbox", "emails", "errors", "events", "explore", "facebook", "faqs", "favorites", "feedbacks", "feeds", "for", "forums", "genres", "gifts", "google_plus", "groups", "guestlist", "help", "hot", "invite", "imprint", "iphone", "ipad", "ipod", "jobs", "join-us", "latest", "login", "logout", "mac", "me", "messages", "mobile", "music", "newsletters", "notifications", "oauth", "oauth2", "orders", "oembed", "pages", "partners", "people", "player", "playlists", "posts", "press", "pro", "press_release", "search", "session", "sets", "settings", "signin", "sign-in", "signup", "sign-up", "sitemap", "sound", "sounds", "stats", "stream", "subscription", "terms-of-use", "tour", "tracks", "turn_off_notifications", "tags", "upload", "users", "videos", "waveform", "welcome", "widgets", "widget.xml", "widget", "widget.json", "you", "campaigns", "contacts", "discover", "fans", "faq", "logged_exceptions", "manifest.webapp", "robots", "topics"],
                l = [];
            n(1063).forEach(function(e) {
                l.unshift(e)
            });
            var u = e.exports = {
                getReservedKeywords: function() {
                    return a
                },
                updateSCLinks: function(e, i) {
                    return i && i.usertext && (e = n(174).usertext(e, i)), i && i.usertextOneline && (e = n(174).usertextOneline(e, i)), e = t("<div>").html(e), e.find("a").each(function(e, i) {
                        var r, o, a, l, c, d = i.getAttribute("href"),
                            h = t(i);
                        if (!s.test(d) && (c = n(62).parse(d), c.path && (a = u.getRouteInfo(i.pathname))))
                            if ("listen" === a.name) r = c.path.split("/").slice(1), h.text(n(405).capitalize(r[0]) + " â€“ " + n(405).capitalize(r[1]));
                            else if ("user" === a.name) {
                            if (o = c.path.split("/")[1], u.getReservedKeywords().indexOf(o) > -1) return;
                            if (h.addClass("g-link-user"), l = i.previousSibling, l && 3 === l.nodeType && /@$/.test(l.textContent)) return;
                            i.parentNode.insertBefore(window.document.createTextNode("@"), i), h.text(o)
                        }
                    }), e.html()
                },
                getRouteInfo: function(e) {
                    var t = e.replace(/^\//, "");
                    return n(3).find(l, function(e) {
                        var n = e.route;
                        return n.test(t)
                    })
                },
                scLinksRegexGlobal: i,
                soundcloudUrlRegex: r,
                anySCLinkRegex: o,
                getAudibleModels: function(e) {
                    var t, i = this.filterAudibleLinks(e),
                        r = n(56).defer();
                    return t = i.map(function(e) {
                        return "listen" === e.info.name ? n(66).resolve.apply(n(66), e.info.params) : n(86).resolve.apply(n(86), e.info.params)
                    }), n(56).settled(t).always(function() {
                        var e = n(3).map(arguments, function(e, t) {
                            var r = e[0];
                            return r instanceof n(86) || r instanceof n(66) ? {
                                audible: r,
                                link: i[t].link
                            } : null
                        });
                        r.resolve(e)
                    }), r
                },
                filterAudibleLinks: function(e) {
                    var t = n(55).get("router"),
                        i = ["listen", "playlist"];
                    return n(3).reduce(e, function(e, n) {
                        var r = t.getUrlInfo(n);
                        return r && i.indexOf(r.name) > -1 && e.push({
                            info: r,
                            link: n
                        }), e
                    }, [])
                }
            }
        }).call(t, n(1))
    },
    185: function(e, t, n) {
        "use strict";
        var i = {
            google_play: {
                de: "https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=de",
                en: "https://play.google.com/store/apps/details?id=com.soundcloud.android",
                fr: "https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=fr",
                pt_BR: "https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=pt-br"
            },
            appstore: {
                de: "https://itunes.apple.com/de/app/soundcloud/id336353151?mt=8",
                en: "https://itunes.apple.com/us/app/soundcloud/id336353151?mt=8",
                fr: "https://itunes.apple.com/fr/app/soundcloud-music-audio/id336353151?mt=8",
                pt_BR: "https://itunes.apple.com/br/app/soundcloud-music-audio/id336353151?mt=8"
            }
        };
        e.exports = {
            getStoreUrl: function(e) {
                var t = i[e];
                return t[n(52).getLocale()] || t.en
            }
        }
    },
    188: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            nullable: !1,
            message: "",
            value: null,
            check: function(e, t) {
                t(e === this.value)
            }
        })
    },
    189: function(e, t) {
        "use strict";

        function n(e) {
            return !r.test(e)
        }

        function i() {
            return !0
        }
        var r = /(\w+)\:(\w+)=(.+)/,
            o = e.exports = {
                extract: function(e, t) {
                    var n = e.tag_list || "",
                        i = [];
                    return i.push.apply(i, o.parse(n, t)), i
                },
                parse: function(e, t) {
                    var r = /[^\s"']+|"([^"]*)"/g,
                        o = (e.match(r) || []).map(function(e) {
                            return e.replace(/"/g, "")
                        }).filter((t || {}).includeMachineTags ? i : n);
                    return o
                },
                serialize: function(e) {
                    var t = /\s/;
                    return e.map(function(e) {
                        return t.test(e) ? '"' + e + '"' : e
                    }).join(" ")
                }
            }
    },
    190: function(e, t, n) {
        "use strict";
        e.exports = n(117).extend({
            includeFooter: ".l-sidebar-right",
            css: n(506),
            template: n(2378)
        })
    },
    191: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var n = t.events,
                    i = [];
                this.after(e, {
                    setup: function() {
                        var e = this.constructor; - 1 === i.indexOf(e) && (i.push(e), n.forEach(function(t) {
                            var n = t.emitter,
                                i = t.event,
                                r = t.getInstance,
                                o = t.handler;
                            n.on(i, function() {
                                for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                                var s = e.instances.find(function(e) {
                                    return r.apply(void 0, [e].concat(n))
                                });
                                s && o.apply(s, n)
                            })
                        }))
                    }
                })
            }
        })
    },
    200: function(e, t, n) {
        "use strict";
        var i = window.document,
            r = function() {
                return !i.hasFocus || i.hasFocus()
            },
            o = !0,
            s = e.exports = n(3).assign({}, n(22).Events, {
                visible: function() {
                    return o
                },
                focused: function() {
                    return o && r()
                }
            });
        ! function() {
            var e = function() {
                var e = !i.hidden;
                o !== e && (o = e, s.trigger("change:visibility", o))
            };
            e(), i.addEventListener("visibilitychange", e, !1)
        }()
    },
    201: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                t && t.action && (e._action = t.action)
            },
            before: {
                setup: function() {
                    this._action = this._action || this.actions["default"], this.setActionState(this._action, "disabled"), this.listenTo(this, "form:clean", this.disableAction).listenTo(this, "form:dirty", this.enableAction)
                }
            },
            enableAction: function() {
                this.setActionState(this._action, "enabled")
            },
            disableAction: function() {
                this.setActionState(this._action, "disabled")
            }
        })
    },
    203: function(e, t, n) {
        "use strict";
        var i = "application/json";
        e.exports = function r(e) {
            var t = [],
                o = -1,
                s = e.getQueue(),
                a = {
                    start: function(e, r) {
                        t.length || (e.dataTransfer.setData(i, ""), o = s.indexOf(r[0]), n(3).invoke(r, "hold"), t.push.apply(t, r), s.remove(r))
                    },
                    isValid: function(e) {
                        return n(3).contains(e.dataTransfer.types, i)
                    },
                    setDropCursor: function(e) {
                        o = e
                    },
                    getDropCursor: function() {
                        return o
                    },
                    end: function() {
                        n(3).invoke(t, "release");
                        var e = t.splice(0, t.length);
                        s.add(e, {
                            at: o
                        })
                    },
                    getItems: function() {
                        return t
                    },
                    isDragging: function() {
                        return t.length > 0
                    },
                    dispose: function() {
                        n(3).invoke(t, "release"), t.length = 0
                    },
                    initDragNDrop: r
                };
            return a
        }(n(92))
    },
    204: function(e, t, n) {
        "use strict";

        function i(e, t) {
            this.trigger("error", this, t)
        }
        var r = {
                explicit: !1,
                layoutInfo: null,
                originalModel: null,
                queryPosition: null,
                restoreUrl: null,
                sound: null,
                sourceInfo: null,
                index: null,
                order: null,
                castId: null
            },
            o = n(3).partial(n(3).pick, n(3), Object.keys(r)),
            s = e.exports = n(65).extend(n(3).assign({}, r, {
                resource_type: "queue-item",
                setup: function(e, t) {
                    n(3).assign(this, o(t));
                    var r = t.sound;
                    this._preloadingEnabled = !1, r.hold(), r.playlist && (r.playlist.hold(), this.addSubmodel(r.playlist)), this.addSubmodel(r), this.listenTo(r, "error", i)
                },
                makeExplicit: function() {
                    this.explicit || (this.explicit = !0, this.trigger("change:explicit", !0, this))
                },
                enablePreloading: function() {
                    this._preloadingEnabled || (this._preloadingEnabled = !0, this.sound.requestPreloading())
                },
                disablePreloading: function() {
                    this._preloadingEnabled && (this._preloadingEnabled = !1, this.sound.unrequestPreloading())
                },
                associateCastId: function(e) {
                    this.castId = e
                },
                clone: function(e) {
                    return new s({}, n(3).assign(o(this), e))
                }
            }), {
                onCleanup: function(e) {
                    e.disablePreloading()
                }
            })
    },
    216: function(e, t, n) {
        "use strict";

        function i() {
            return w || (w = h("https://apis.google.com/js/api:client.js", {
                onload: function() {
                    return window.gapi.load("auth2", r)
                },
                onerror: function() {
                    w = null
                }
            })), x.promise()
        }

        function r() {
            window.gapi.auth2.init({
                scope: g,
                client_id: v
            }).then(function(e) {
                _ = e, x.resolve()
            })
        }

        function o() {
            var e = n(56).defer();
            return y && y.isSignedIn() ? e.resolve(l(y)) : b && !b.closed ? b.focus() : b = p(function() {
                _.signIn({
                    prompt: m
                }).then(function(t) {
                    y = t, e.resolve(l(t))
                }, e.reject)
            }), e
        }

        function s(e) {
            var t = e.size,
                i = n(56).defer();
            return y ? i.resolve(a(y, t)) : _.signIn().then(function(e) {
                i.resolve(a(e, t))
            }), i
        }

        function a(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 200 : arguments[1],
                i = e.getBasicProfile(),
                r = i.getImageUrl(),
                o = r ? n(62).modify(r, {
                    query: {
                        sz: t
                    }
                }) : "";
            return {
                name: i.getName(),
                picture_url: o
            }
        }

        function l(e) {
            return e.getAuthResponse().access_token
        }

        function u(e) {
            return function() {
                return e.apply(void 0, arguments)
            }
        }
        var c = n(3).extend,
            d = n(3).mapObject,
            h = n(125).insertScript,
            p = n(257).interceptPopup,
            f = n(134).whenAllowed,
            g = ["plus.login", "userinfo.email", "userinfo.profile"].map(function(e) {
                return "https://www.googleapis.com/auth/" + e
            }).join(" "),
            m = "select_account login",
            v = n(55).get("google_client_id"),
            _ = null,
            y = null,
            b = null,
            w = null,
            x = n(56).defer();
        e.exports = c({
            loadGoogleAuthSDK: function() {
                return f().then(i)
            }
        }, d({
            getGoogleToken: o,
            getCurrentGoogleUser: s
        }, u))
    },
    220: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = new(n(358))({
                file: e
            }, t);
            return i.release(), i
        }

        function r(e, t) {
            var i = new(n(562))({
                uploads: e
            }, t);
            return i.release(), i
        }

        function o(e) {
            var t = this.length;
            return this.add(e, {
                at: 0
            }), this.length !== t ? (p.call(this, !0, e), n(59).trackUploadFunnel("start"), e) : void 0
        }

        function s(e, t) {
            !t.toPlaylistUploadId && e && n(59).trackV0Click(["upload_group", 1 === e ? "single" : "multiple", 1 === e ? !1 : t.asPlaylist ? "grouped" : "ungrouped"].filter(Boolean))
        }

        function a(e) {
            return (e.size || 0) <= b.MAX_FILE_SIZE && u(e.type) && l(e.name)
        }

        function l(e) {
            var t = /\.(rtf|html?|bmp|png|gif|jpe?g|exe|zip|sit|gz|cdf|ico|docx?|xlsx?|pptx?|txt|avi|mov|midi|swf|pdf)$/i;
            return !t.test(e)
        }

        function u(e) {
            var t = /^(image|message|text|multipart|model)\/|msword|ms-excel|ms-powerpoint|compressed/;
            return !t.test(e)
        }

        function c() {
            if (!y) {
                var e, t = this.numUploading(),
                    i = function(e) {
                        e.get("status") === n(93).QUEUED && _ > t && (e.upload(), ++t)
                    };
                for (e = this.length - 1; e >= 0 && _ > t; --e) i(this.at(e))
            }
        }

        function d(e) {
            !this.numUploading() && e.get("hasBeenSaved") && h()
        }

        function h() {
            m && (n(55).get("router").removeNavigationBlock(m), m = null)
        }

        function p(e, t) {
            this.transferStatus[e ? "addTransfer" : "removeTransfer"](t.get("transfer")), this.transcodingStatus[e ? "addTransfer" : "removeTransfer"](t.get("transcoding"))
        }

        function f(e) {
            p.call(this, !1, e), this.numUploading() || this.hasUnsaved() || h()
        }

        function g(e) {
            var t = e.get("status"),
                i = e.previous("status");
            t !== n(93).UPLOADING || 1 !== this.numUploading() || m || (m = n(55).get("router").addNavigationBlock(v)), t === n(93).COMPLETE && n(931).trackUserEvent("upload_track"), i === n(93).UPLOADING && (this.transferStatus.removeTransfer(e.get("transfer")), c.call(this)), i === n(93).TRANSCODING && this.transcodingStatus.removeTransfer(e.get("transcoding"))
        }
        var m, v = "You still have incomplete uploads. If you leave the page now, these will be canceled.",
            _ = 3,
            y = !1,
            b = e.exports = n(73).extend({
                next_href: !1,
                model: n(358),
                transferStatus: null,
                transcodingStatus: null,
                setup: function() {
                    this.transferStatus = new(n(473)), this.transcodingStatus = new(n(473)), this.listenTo(this, "change:status", g).listenTo(this, "remove", f).listenTo(this, "change:hasBeenSaved", d, this)
                },
                addFiles: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                        n = this.getValidFiles(e),
                        i = [];
                    return n && n.length ? (i = this.addFilesAsUploads(n, t.replaceSoundUploadId ? {
                        resource_id: t.replaceSoundUploadId
                    } : null), s.call(this, i.length, t), c.call(this), i) : i
                },
                getValidFiles: function(e) {
                    var t = n(3).groupBy(e, function(e) {
                        return a(e) ? "valid" : "invalid"
                    });
                    return t.invalid && this.trigger("error", {
                        name: "invalid",
                        count: t.invalid.length
                    }), t.valid
                },
                addFilesAsUploads: function(e, t) {
                    return n(3).chain(e).map(function(e) {
                        return i(e, t)
                    }).map(o, this).compact().value()
                },
                addUploadsAsAggregate: function(e) {
                    return r(e)
                },
                addUploadsToAggregate: function(e, t) {
                    var n = r(null, {
                        resource_id: t
                    });
                    return n.addUploads(e), n
                },
                numToUpload: function() {
                    return this.uploadsByStatus(n(93).QUEUED + n(93).UPLOADING).length
                },
                numUploading: function() {
                    return this.uploadsByStatus(n(93).UPLOADING).length
                },
                numTransoding: function() {
                    return this.uploadsByStatus(n(93).TRANSCODING).length
                },
                hasUnsaved: function() {
                    return this.some(function(e) {
                        return e.get("hasBeenSaved") === !1
                    })
                },
                uploadsByStatus: function(e) {
                    return this.getSoundUploads().filter(function(t) {
                        return t.get("status") & e
                    })
                },
                getSoundUploads: function() {
                    return this.models
                },
                pause: function() {
                    y = !0
                },
                resume: function() {
                    y = !1, c.call(this)
                },
                hasDataForView: function() {
                    return !0
                }
            }, {
                MAX_FILE_SIZE: 5368709120,
                SIMULTANEOUS_UPLOADS: _,
                isAcceptable: a,
                neverRelease: !0,
                hashFn: function() {
                    return 1
                }
            })
    },
    233: function(e, t, n) {
        "use strict";

        function i() {
            var e = this;
            return this.maxResults && Object.keys(this.attributes).length >= this.maxResults && (this.next_href = !1), this.next_href === !1 ? n(56).resolve() : n(65).prototype.fetch.call(this).then(function() {
                i.call(e)
            })
        }
        var r = function(e, t) {
                return {
                    id: e,
                    userId: n(63).currentUserId()
                }
            },
            o = function(e, t) {
                return null
            },
            s = function() {
                return {
                    userId: n(63).currentUserId()
                }
            },
            a = function() {
                return {
                    limit: 5e3,
                    linked_partitioning: 1
                }
            };
        e.exports = n(65).extend({
            readEndpoint: null,
            createEndpoint: null,
            deleteEndpoint: null,
            getReadEndpointPathParams: s,
            getReadEndpointQueryParams: a,
            getCreateEndpointPathParams: r,
            getCreateEndpointQueryParams: o,
            getDeleteEndpointPathParams: r,
            getDeleteEndpointQueryParams: o,
            maxResults: null,
            readOnly: !1,
            _currentRequests: null,
            next_href: null,
            _fetchDefer: null,
            setup: function() {
                this._currentRequests = new(n(235))
            },
            url: function() {
                return null === this.next_href ? n(23).getUrlForEndpoint(this.readEndpoint, this.getReadEndpointPathParams(), this.getReadEndpointQueryParams()) : this.next_href
            },
            get: function(e) {
                return n(65).prototype.get.call(this, e) || !1
            },
            fetch: function() {
                var e = this;
                return this._fetchDefer ? this._fetchDefer : (this._fetchDefer = n(63).isLoggedIn() ? i.call(this) : n(56).promise(function(t, r) {
                    e.listenToOnce(n(57), "connect:hasUserData", function() {
                        i.call(e).fail(function() {
                            e._fetchDefer = null
                        }).then(t, r)
                    })
                }), this._fetchDefer.fail(function() {
                    e._fetchDefer = null
                }))
            },
            parse: function(e) {
                var t = e.next_href,
                    n = e.collection;
                return this.next_href = t || !1, n.reduce(function(e, t) {
                    return e[t] = !0, e
                }, {})
            },
            toggle: function(e, t) {
                var n = this.get(e),
                    i = "boolean" == typeof t ? t : !n;
                i !== n && (i ? this.set(e, !0) : this.unset(e))
            },
            setRemote: function(e, t, i) {
                var r, o = this;
                if (this.readOnly) return n(56).resolve();
                if (!this._currentRequests.get(e)) {
                    var s = t ? [this.createEndpoint, this.getCreateEndpointPathParams(e, i), this.getCreateEndpointQueryParams(e, i)] : [this.deleteEndpoint, this.getDeleteEndpointPathParams(e, i), this.getDeleteEndpointQueryParams(e, i)],
                        a = (r = n(23)).callEndpoint.apply(r, s);
                    return this._currentRequests.set(e, a), a.always(function() {
                        o._currentRequests.unset(e)
                    }).done(function() {
                        var n = o.get(e);
                        t !== n && o.setRemote(e, n)
                    }).fail(n(123).ajaxNonFatal("Could not toggle value"))
                }
            },
            hasDataForView: function() {
                return !!this.lastFetchTime
            }
        }, {
            neverRelease: !0,
            hashFn: function() {
                return 1
            }
        })
    },
    234: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = {
                    q: e,
                    recaptcha_response: t
                },
                r = b.get(e);
            return r && !t ? n(56).resolve(r) : f("checkIdentifier", {
                queryParams: i
            }).then(function(t) {
                return t.status && b.set(e, t), t
            })
        }

        function r(e, t, n) {
            var i = {
                client_id: _,
                scope: y,
                recaptcha_response: n,
                credentials: {
                    identifier: e,
                    password: t
                }
            };
            return f("signinWithPassword", {
                payload: i
            })
        }

        function o(e) {
            return a("facebook", e)
        }

        function s(e) {
            return a("google", e)
        }

        function a(e, t) {
            var n = "facebook" === e ? "signinWithFacebook" : "signinWithGoogle",
                i = {
                    client_id: _,
                    scope: y,
                    provider_token: t
                };
            return f(n, {
                payload: i
            })
        }

        function l(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                i = arguments.length <= 3 || void 0 === arguments[3] ? "" : arguments[3];
            return c(e).then(function(r) {
                var o = r.email_sign_up_token,
                    s = {
                        scope: y,
                        client_id: _,
                        email_sign_up_token: o,
                        recaptcha_response: i,
                        email: e,
                        password: t,
                        date_of_birth: u(n)
                    };
                return f("signupWithEmail", {
                    payload: s
                })
            })
        }

        function u(e) {
            var t = 36e5,
                n = 24 * t,
                i = 365 * n,
                r = new Date(Date.now() - i * e);
            return {
                month: r.getMonth() + 1,
                year: r.getFullYear()
            }
        }

        function c(e) {
            var t = {
                email: e,
                client_id: _
            };
            return f("signupWithEmailToken", {
                payload: t
            })
        }

        function d(e) {
            return p("google", e)
        }

        function h(e) {
            return p("facebook", e)
        }

        function p(e, t) {
            var n = "facebook" === e ? "signupWithFacebook" : "signupWithGoogle",
                i = {
                    client_id: _,
                    scope: y,
                    provider_token: t
                };
            return f(n, {
                payload: i
            })
        }

        function f(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.pathParams,
                r = void 0 === i ? null : i,
                o = t.queryParams,
                s = void 0 === o ? null : o,
                a = t.payload,
                l = void 0 === a ? null : a,
                u = {},
                c = n(52).getLocale();
            return "en" !== c && (u = {
                "Device-Locale": c
            }), v(g, m(e, r, s, u, l))
        }

        function g(e) {
            return n(56).resolve(e.body || {})
        }
        var m = n(23).callEndpoint,
            v = n(56).mapEither,
            _ = n(55).get("client_id"),
            y = "fast-connect non-expiring purchase signup upload".split(" ").sort().join(" "),
            b = new(n(235))({
                maxLength: 5
            });
        e.exports = {
            checkIdentifier: i,
            signinWithPassword: r,
            signinWithFacebook: o,
            signinWithGoogle: s,
            signupWithEmail: l,
            signupWithFacebook: h,
            signupWithGoogle: d
        }
    },
    235: function(e, t, n) {
        "use strict";

        function i() {
            var e = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "isEmpty", "chain", "sample"];
            return e.reduce(function(e, t) {
                return e[t] = function() {
                    var e = [this._asMap()];
                    return e.push.apply(e, arguments), n(3)[t].apply(n(3), e)
                }, e
            }, {})
        }
        e.exports = n(162).extend([i(), {
            initialize: function(e) {
                this._store = {}, this.length = 0, this._final = !1, this.maxLength = e && e.maxLength || !1, this.maxLength && (this._keys = [])
            },
            maxLength: 0,
            get: function(e) {
                return this._store[e]
            },
            set: function(e, t) {
                return this.has(e) ? this.maxLength && this._keys.splice(this._keys.indexOf(e), 1) : (++this.length, this.maxLength && this.length > this.maxLength && this.unset(this._keys[0])), this.maxLength && this._keys.push(e), this._store[e] = t, this
            },
            unset: function(e) {
                var t;
                return this.has(e) && (--this.length, this._final ? this._store[e] = t : (delete this._store[e], this.maxLength && this._keys.splice(this._keys.indexOf(e), 1))), this
            },
            reset: function() {
                return this._store = {}, this.maxLength && (this._keys = []), this._final = !1, this.length = 0, this
            },
            has: function(e) {
                return this._store.hasOwnProperty(e)
            },
            keys: function() {
                return Object.keys(this._store)
            },
            prune: function(e) {
                return n(3).difference(this.keys(), e).forEach(this.unset, this), this
            },
            _asMap: function() {
                return this._store
            },
            finalize: function() {
                this._final = !0
            }
        }])
    },
    255: function(e, t, n) {
        "use strict";
        e.exports = n(894)({
            label: "cast-sender",
            enabled: !1
        })
    },
    256: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return new r(e, t)
        }

        function r(e, t) {
            o.call(this, e, t)
        }

        function o(e, t) {
            var n = this;
            switch (s.allowed()) {
                case !0:
                    this.notification = new a(e, t), ["click", "close", "error", "show"].forEach(function(e) {
                        n.notification["on" + e] = n.trigger.bind(n, e)
                    });
                    break;
                case null:
                    s.requestPermission().then(function() {
                        o.call(n, e, t)
                    })
            }
        }
        var s = void 0,
            a = window.Notification;
        s = n(97).Notification ? e.exports = {
            allowed: function() {
                return "granted" === a.permission ? !0 : "denied" === a.permission ? !1 : null
            },
            requestPermission: function() {
                return n(56).promise(function(e, t) {
                    a.requestPermission(function(n) {
                        "granted" === n ? e() : t()
                    })
                })
            },
            create: i
        } : e.exports = {
            allowed: n(3).constant(!1),
            requestPermission: n(3).constant(n(56).reject()),
            create: i
        }, n(3).assign(r.prototype, n(22).Events, {
            notification: null,
            closed: !1,
            _closeTimeout: null,
            closeAfter: function(e) {
                var t = this;
                return this.closed || (this.notification ? this._closeTimeout = this._closeTimeout || window.setTimeout(function() {
                    t.close()
                }, e) : this.once("show", function() {
                    t.closeAfter(e)
                })), this
            },
            close: function() {
                return this.notification && !this.closed && (this.notification.close(), this.closed = !0), this
            }
        })
    },
    257: function(e, t) {
        "use strict";
        e.exports = {
            centered: function(e, t, n, i) {
                var r = Math.min(t, window.screen.width - 50),
                    o = Math.min(n, window.screen.height - 50),
                    s = window.screenX + (window.outerWidth - r) / 2,
                    a = window.screenY + (window.outerHeight - o) / 2;
                return window.open(e, i || "", ["location=1", "width=" + r, "height=" + o, "top=" + a, "left=" + s, "toolbar=no", "scrollbars=yes"].join(","))
            },
            interceptPopup: function(e) {
                var t = null;
                return function(n) {
                    window.open = function() {
                        return t = n.apply(void 0, arguments)
                    }, e(), window.open = n
                }(window.open), t
            }
        }
    },
    259: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = n(56).defer(),
                    i = n(87).setFormat(e[this.imageProperties.read], 20),
                    r = this,
                    o = new(n(148))({
                        tolerance: 1,
                        baseDelay: 2e3,
                        maxDelay: 8e3,
                        backoffRate: 1.5,
                        giveup: 6,
                        enabled: !1
                    }),
                    s = new window.Image;
                return s.onload = function() {
                    var n = r.imageProperties.read;
                    r.get(n) === e[n] && r.forceChange(n), r.set(e), t.resolve(e)
                }, s.onerror = function() {
                    o.failed()
                }, o.on("enabled", function() {
                    s.src = i + "?" + Date.now()
                }).on("giveup", t.reject), this.trigger("imageUrlChanged", i), t.done(this.trigger.bind(this, "imageTranscodingDone", e)).fail(this.trigger.bind(this, "imageTranscodingFail", e))
            }

            function r(e) {
                n(74).trigger("error", {
                    action: "upload_image",
                    xhr: e
                })
            }

            function o(e) {
                var t = new window.FileReader,
                    i = n(56).defer();
                return t.onload = function(e) {
                    var t = new window.Image;
                    t.onload = i.resolve.bind(i, t), t.src = e.target.result
                }, t.onerror = t.onabort = i.reject, t.readAsDataURL(e), i
            }

            function s(e, t) {
                var i = n(56).defer();
                return o(e).done(function(e) {
                    var n = window.document.createElement("canvas"),
                        r = n.getContext("2d"),
                        o = a(e.width, e.height);
                    n.width = n.height = t, r.imageSmoothingEnabled = r.mozImageSmoothingEnabled = r.oImageSmoothingEnabled = r.webkitImageSmoothingEnabled = !0, r.imageSmoothingEnabled = !0, r.drawImage(e, o.x, o.y, o.w, o.h, 0, 0, t, t), i.resolve(n.toDataURL("image/png"))
                }).fail(i.reject), i
            }

            function a(e, t) {
                var n = e - t;
                return n > 0 ? {
                    x: Math.floor(n / 2),
                    y: 0,
                    w: t,
                    h: t
                } : {
                    x: 0,
                    y: Math.floor(-n / 2),
                    w: e,
                    h: e
                }
            }
            var l = n(59).trackV0Click;
            e.exports = new(n(21))({
                _imageFile: null,
                _imageSource: null,
                _imageDataURI: null,
                applyTo: function(e, t) {
                    e.imageProperties = n(3).pick(t, "read", "write")
                },
                defaults: {
                    getImageSaveUrl: function() {
                        return this.saveUrl()
                    }
                },
                getImageUrl: function(e) {
                    return this._imageDataURI || n(87).urlFrom(this.attributes, e)
                },
                hasOwnImage: function() {
                    return !!this._imageDataURI || !n(87).isDefaultImage(this.get(this.imageProperties.read))
                },
                hasNewImage: function() {
                    return !!this._imageFile
                },
                getPlaceholderUrl: function(e) {
                    return this._imageDataURI ? !1 : n(87).getPlaceholderUrl(this.getImageUrl(), e)
                },
                getImageFileInfo: function() {
                    return {
                        file: this._imageFile,
                        source: this._imageSource
                    }
                },
                setImageFile: function(e, t) {
                    var n = this;
                    this._imageSource = t, this._imageFile = e, s(e, 500).done(function(i) {
                        n._imageDataURI = i, n.trigger("imageDataChanged", {
                            file: e,
                            source: t
                        })
                    })
                },
                unsetImageFile: function(e) {
                    e = e || {}, this._imageFile = this._imageSource = null, e.force && this.unsetImageDataURI(), e.silent || this.trigger("imageDataChanged", {
                        file: null,
                        source: null
                    })
                },
                unsetImageDataURI: function() {
                    this._imageDataURI = null
                },
                uploadImage: function() {
                    var e, o = this,
                        s = this._imageFile,
                        a = this._imageSource,
                        u = n(56).defer();
                    return n(97).formData && s ? (l(["upload", "image", "upload_started", a]), this.unsetImageFile(), e = new window.FormData, e.append(this.get("kind") + "[" + this.imageProperties.write + "]", s), t.ajax({
                        url: this.getImageSaveUrl(),
                        type: "PUT",
                        data: e,
                        processData: !1,
                        contentType: !1,
                        dataType: "json"
                    }).done(function(e) {
                        l(["upload", "image", "upload_success", a]), "user" === o.resource_type && l(null, {
                            click_name: "profile_image:add"
                        }), u.resolve(e)
                    }).done(i.bind(this)).fail(u.reject).fail(r.bind(this)), u) : void 0
                }
            })
        }).call(t, n(1))
    },
    260: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                e.getTitleAttribute = function() {
                    return t.attr
                }
            }
        })
    },
    264: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t, i, r;
                return e && e.collection && e.collection.length && (t = e.collection[0], i = t.last_message ? t.last_message.conversation_id + "_" + t.last_message.sent_at : t.uuid || t.id, r = n(3).isNumber(i) ? i > (void 0 === this.lastRead ? -1 : this.lastRead) : i !== this.lastRead), r
            }

            function r(e) {
                var t = n(122)[e];
                return !!(n(55).get("notifications") && t && t.channel)
            }

            function o(e) {
                var t = e ? "on" : "off";
                this[t]("change:size", l)
            }

            function s(e) {
                var t = e ? "on" : "off";
                n(122)[this.get("type")][t]("pollIntervalChange", a, this)
            }

            function a() {
                var e = this._breaker;
                e && this.restart()
            }

            function l(e, t) {
                t && e.stopPolling()
            }

            function u() {
                var e = n(122)[this.get("type")];
                return {
                    backoffRate: 1.1,
                    baseDelay: e.get("minPollInterval"),
                    maxDelay: e.get("maxPollInterval")
                }
            }
            var c = new(n(105))("notify");
            e.exports = n(65).extend({
                channel: null,
                _queue: null,
                _waitingQueue: null,
                _unseenQueue: null,
                _breaker: null,
                lastRead: null,
                _request: null,
                defaults: {
                    size: null,
                    type: null
                },
                initialize: function(e) {
                    this._queue = [], this._waitingQueue = [], this._unseenQueue = [];
                    var t = e.type,
                        i = n(122)[t];
                    this.baseUrl = i.get("baseUrl"), this.channel = i.get("channel"), this.lastRead = c.get(t), n(3).bindAll(this, "onNotification"), r(t) ? n(55).get("notifications").subscribe(i.channel, this.onNotification) : this.startPolling(), s.call(this, !0)
                },
                startPolling: function() {
                    var e = this;
                    if (!this._isPolling) {
                        var t, r;
                        t = this._breaker = new(n(148))(u.call(this)), this._isPolling = !0, r = function() {
                            e._isPolling && (window.clearTimeout(e._pollingId), e.fetch({
                                force: !0
                            }).done(function(n) {
                                i.call(e, n) ? (t.succeeded(), e._pollingId = window.setTimeout(r, t.currentDelay())) : t.failed()
                            }).fail(function(e) {
                                e.status >= 400 && e.status < 500 ? t.disable({
                                    autoEnable: !1
                                }) : t.failed()
                            }))
                        }, this._breaker.on("enabled", r), o.call(this, !0), r()
                    }
                },
                stopPolling: function() {
                    this._isPolling && (o.call(this, !1), window.clearTimeout(this._pollingId), this._pollingId = null, this._isPolling = !1, this._breaker.dispose(), this._breaker = null)
                },
                restart: function() {
                    this.stopPolling(), this.startPolling()
                },
                onNotification: function(e) {
                    this._request ? this._waitingQueue.push(e) : this._queue.push(e), this._unseenQueue.push(e), this.set("size", this._unseenQueue.length)
                },
                hasUnfetchedItems: function() {
                    return this._queue.length > 0
                },
                fetchQueuedItems: function() {
                    var e = this;
                    if (!this._request) {
                        if (!this.hasUnfetchedItems()) return this.set("size", 0), n(56).resolve();
                        var i, r = this._queue,
                            o = r.length,
                            s = r[0].uuid,
                            a = r[o - 1].uuid;
                        i = n(62).modify(n(3).result(this, "baseUrl"), {
                            query: {
                                "uuid[to]": s,
                                cursor: a,
                                limit: o,
                                offset: null
                            }
                        }), this._request = n(56).defer(), t.ajax({
                            url: i,
                            dataType: "json",
                            type: "GET"
                        }).done(function(t) {
                            e.onFetchQueuedItemsDone(t), e._request.resolve(), e._request = null
                        }).fail(function() {
                            e.onFetchFail(), e._request.reject(), e._request = null
                        })
                    }
                    return this._request
                },
                markAsRead: function(e) {
                    var t, n = this.get("type"),
                        i = 0;
                    this.lastRead !== e && (this.lastRead = e, c.set(n, e), t = this._unseenQueue.some(function(t) {
                        return ++i, t.uuid === e ? !0 : void 0
                    }), t ? this._unseenQueue.splice(0, i) : this._unseenQueue.length = 0, this.set("size", this._unseenQueue.length)), r(n) || this.startPolling()
                },
                fetch: function(e) {
                    var t, r = this,
                        o = !(!e || !e.force);
                    return null === this.get("size") || o ? (t = n(62).modify(n(3).result(this, "baseUrl"), {
                        query: {
                            limit: 1,
                            linked_partitioning: 1
                        }
                    }), n(65).prototype.fetch.call(this, n(3).assign({
                        url: t,
                        dataType: "json",
                        jqAjax: !0
                    }, e)).done(function(e) {
                        var t = i.call(r, e);
                        r.lastFetchTime = Date.now(), t && (null === r.get("size") || o) && (r._queue.push(e.collection[0]), r.set("size", !0))
                    })) : n(56).resolve()
                },
                hasDataForView: function() {
                    return null !== this.get("size")
                },
                onFetchFail: function() {
                    this._waitingQueue.length && Array.prototype.push.apply(this._queue, this._waitingQueue.splice(0, this._waitingQueue.length))
                },
                onFetchQueuedItemsDone: function(e) {
                    this._queue.length = 0, this._waitingQueue.length && (this._queue.push.apply(this._queue, this._waitingQueue), this._waitingQueue.length = 0);
                    var t = e.collection;
                    t && t.length ? this.trigger("data", t) : this.set("size", 0)
                }
            }, {
                hashFn: function(e) {
                    return e.type
                },
                onCleanup: function(e) {
                    r(e.get("type")) && n(55).get("notifications").unsubscribe(e.channel, e.onNotification), e.stopPolling(), s.call(e, !1)
                },
                cleanupInstantly: !0
            })
        }).call(t, n(1))
    },
    265: function(e, t, n) {
        "use strict";
        e.exports = {
            render: function(e, t, n) {
                var i = e(t || {});
                n && (n.innerHTML = i)
            },
            subviews: function(e) {
                n(559).replacePlaceholders(e)
            }
        }
    },
    266: function(e, t, n) {
        "use strict";

        function i() {
            if (!n(63).isLoggedIn()) return void n(57).once("connect:login", i);
            var e = n(63).getAuthToken(),
                t = n(936).generate(),
                s = n(23).getUrlForEndpoint("trinitySubscribe", {}, {
                    registrationID: t,
                    oauth: e
                }),
                l = n(23).getUrlForEndpoint("trinityPublish");
            o = n(511).getInstance(l, s, {
                connected: !1,
                debug: c(),
                authorization: e,
                withCredentials: !1,
                json: !0,
                singleConnection: !0,
                registrationId: t,
                heartbeatTimeoutMs: 2 * r
            }), o.on(n(511).Events.ACTION, function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; t > i; i++) n[i - 1] = arguments[i];
                e !== a.HEARTBEAT && u.trigger.apply(u, [e].concat(n))
            })
        }
        var r = 1e4,
            o = null,
            s = n(511).SCMessages,
            a = s.actions,
            l = s.events,
            u = e.exports = n(3).assign({}, n(22).Events, {
                actions: a,
                events: l,
                activate: n(3).once(i),
                publishEvent: function(e) {
                    o && o.publishEvent(e)
                },
                disconnect: function() {
                    o && o.disconnect()
                },
                reconnect: function() {
                    o && o.reconnect()
                }
            }),
            c = function() {
                return n(55).get("rollouts").get("v2_trinity_debug") || n(55).get("rollouts").get("internal_qa")
            }
    },
    267: function(e, t) {
        "use strict";
        e.exports = {
            CONSUMER_SUBSCRIPTION_MID_TIER: "consumer-mid-tier",
            CONSUMER_SUBSCRIPTION_HIGH_TIER: "consumer-high-tier",
            CONSUMER_SUBSCRIPTION_FREE: "free",
            CREATOR_SUBSCRIPTION_FREE: "free",
            CREATOR_SUBSCRIPTION_PRO: "creator-pro",
            CREATOR_SUBSCRIPTION_PRO_UNLIMITED: "creator-pro-unlimited",
            CREATOR_GIFT_FREE: "gift-free",
            CREATOR_GIFT_PRO: "gift-pro",
            CREATOR_GIFT_PRO_UNLIMITED: "gift-pro-unlimited"
        }
    },
    282: function(e, t, n) {
        "use strict";
        var i = e.exports = {
            getMarkup: function(e, t, r) {
                if (Array.isArray(t)) return t.map(function(t) {
                    return i.getMarkup(e, t, r)
                }).join("");
                r = r || {};
                var o = [],
                    s = r.whitelist,
                    a = "self" === r.closingTag ? "/" : "",
                    l = r.closingTag === !0 ? "</" + e + ">" : "";
                return n(3).each(t, function(e, t) {
                    "style" === t && "object" == typeof e && (e = this.getStyleAttr(e)), s && -1 === s.indexOf(t) || o.push(" " + t + '="' + n(20).Utils.escapeExpression(e) + '"')
                }, this), "<" + e + o.join("") + a + ">" + l
            },
            getStyleAttr: function(e) {
                return n(3).map(e, function(e, t) {
                    return null != e && "" !== e ? t + ":" + e + ";" : ""
                }).join("")
            }
        }
    },
    283: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.replace(/[-\/\\$\^*+?.()|\[\]{}]/g, "\\$&")
        }

        function r(e) {
            return e.toUpperCase()
        }
        var o = i(".,'\"()[]-"),
            s = new RegExp("^[^\\s" + o + "]"),
            a = new RegExp("(?:^|\\s)[\\s" + o + "]?[^\\s" + o + "]", "g");
        e.exports = {
            sentenceCase: function(e) {
                return e.replace(s, r)
            },
            titleCase: function(e) {
                return e.replace(a, r)
            },
            permalink: function(e) {
                return n(445)(e).toLowerCase().replace(/\s/g, "-").replace(/[^a-z0-9_-]+/g, "").replace(/^[_-]+|[_-]+$/g, "").replace(/([-_])[-_]+/g, "$1").replace(/^[^a-z]+$/, "$&a")
            },
            regexpEscape: i
        }
    },
    300: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t, i) {
                var r = a[t];
                if (r) {
                    var o = n(3).defaults({
                        sound: e,
                        model: e,
                        type: r
                    }, i);
                    e.trigger(r, o)
                } else switch (t) {
                    case s.STREAMS:
                    case s.NO_STREAMS:
                        e.setHasStreamInfo(this.hasNoConnection() || this.hasStreamInfo()), this.hasNoConnection() || this.hasStreamInfo() || e.isBlocked() || n(57).trigger("error:audio_no_streams");
                        break;
                    case s.NO_CONNECTION:
                        n(57).trigger("error:audio_no_connection");
                        break;
                    case s.REGISTERED:
                        e.onPlayRegistered();
                        break;
                    case s.DESTROYED:
                        this.unregisterModelEventListener(e);
                        break;
                    case s.NO_PROTOCOL:
                    case s.FLASH_NOT_LOADED:
                        n(57).trigger("error:audio_support");
                        break;
                    case s.AUDIO_ERROR:
                        n(57).trigger("error:audio_error");
                        break;
                    case s.FLASH_BLOCK:
                        n(57).trigger("flash:block");
                        break;
                    case s.FLASH_UNBLOCK:
                        n(57).trigger("flash:unblock");
                        break;
                    case s.GEO_BLOCKED:
                        e.setHasStreamInfo(!1), n(57).trigger("geoBlocked", {
                            sound: e
                        })
                }
            }

            function r(e) {
                return t.ajax(n(3).extend({}, e, c()))
            }
            var o, s = n(211).Events,
                a = (o = {}, o[s.PLAY] = "play", o[s.PLAY_START] = "playStart", o[s.PAUSE] = "pause", o[s.FINISH] = "finish", o[s.SEEKED] = "seeked", o[s.TIME] = "time", o[s.BUFFERING_START] = "buffering:start", o[s.BUFFERING_END] = "buffering:end", o),
                l = 3e3,
                u = 3e3,
                c = (e.exports = {
                    createAudioFromSound: function(e) {
                        function t() {
                            var t = new(n(211))(h, p);
                            return e.on("change:policy", function() {
                                return t.updateOptions(a())
                            }), t
                        }

                        function o() {
                            return n(3).assign(p, {
                                url: e.get("url")
                            }), new(n(532))(h, p)
                        }

                        function s() {
                            return n(1286).createAudioFromSound(e)
                        }

                        function a() {
                            var t = e.isSnippetized(),
                                n = t ? u : 0;
                            return {
                                previewOnly: t,
                                fadeOutDurationOnFinish: n
                            }
                        }
                        var c = n(55).get("rollouts"),
                            d = c.get("debug_audio_v2") || !1,
                            h = n(1284).getInstance(d),
                            p = n(3).assign(a(), {
                                soundId: e.id,
                                resourceId: e.resource_id,
                                duration: e.getMediaDuration.bind(e),
                                title: e.get("title"),
                                streamUrlsEndpoint: e.url.bind(e, "streamsUrl"),
                                asyncFetch: n(112).desktop,
                                mediaSourceEnabled: !0,
                                mseFirefox: !0,
                                mseSafari: !0,
                                debug: !0,
                                eventLogger: n(161),
                                logErrors: !0,
                                ajax: r,
                                fadeOutDurationOnConcurrentStreaming: l,
                                fadeOutAlgo: n(211).FadeOutAlgos.EaseIn
                            }),
                            f = n(172).isCasting() ? s() : e.isExternal() ? o() : t();
                        return f.registerModelEventListener(e, i), f
                    },
                    toggleMute: function(e) {
                        n(211).toggleMute(e), n(532).toggleMute(e);
                        var t = n(211).isMuted();
                        n(172).getInstance().then(function(e) {
                            e.setMuted(t)
                        })
                    },
                    setVolume: function(e) {
                        n(211).setVolume(e), n(532).setVolume(e);
                        var t = n(211).getVolume();
                        n(172).getInstance().then(function(e) {
                            e.setVolume(t)
                        })
                    }
                }, n(3).memoize(function() {
                    return {
                        statusCode: n(3).mapObject(n(302), function() {
                            return n(3).noop
                        })
                    }
                }))
        }).call(t, n(1))
    },
    301: function(e, t, n) {
        "use strict";
        var i = /^[a-z-]+:\/\//,
            r = /^https?$/,
            o = /\.[a-z]{2,32}$/;
        e.exports = n(100).extend({
            message: n(52).t("This URL is invalid."),
            strict: !1,
            check: function(e, t) {
                if (!e) return void t(!0);
                if (!i.test(e)) {
                    if (this.strict) return void t(!1);
                    e = "http://" + e
                }
                var s = n(62).parse(e);
                t(!s.userInfo && r.test(s.scheme) && o.test(s.host))
            }
        })
    },
    302: function(e, t, n) {
        "use strict";
        e.exports = {
            401: function(e) {
                n(63).isLoggedIn() && n(63).logout()
            },
            429: function(e) {
                var t = n(123).fromSpamWarning(e);
                t && (n(57).trigger("spam-warning", t), t.release())
            },
            422: function(e) {
                var t = void 0;
                try {
                    t = JSON.parse(e.responseText).errors[0].error_message
                } catch (i) {
                    t = null
                }
                n(57).trigger("error:ajax", t, e)
            }
        }
    },
    303: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = Array.prototype.slice.call(e);
            return t %= n.length, 0 > t ? n.push.apply(n, n.splice(0, -t)) : n.unshift.apply(n, n.splice(-t)), n
        }

        function r(e, t) {
            return l(e) && l(t) ? e === t ? !0 : s(e, t) && s(t, e) : !1
        }

        function o(e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? u : arguments[2];
            if (!l(e) || !l(t)) return !1;
            if (e === t) return !0;
            var i = e.length;
            if (t.length !== i) return !1;
            for (var r = 0; i > r; ++r)
                if (e[r] !== t[r] && !n(e[r], t[r])) return !1;
            return !0
        }

        function s(e, t) {
            for (var n = 0; n < e.length; ++n)
                if (-1 === t.indexOf(e[n])) return !1;
            return !0
        }

        function a(e, t, i, r) {
            var o = n(132).clamp(t - i, 0, Math.max(e.length - r, 0)),
                s = o + r;
            return {
                items: e.slice(o, s),
                position: t - o
            }
        }
        var l = Array.isArray,
            u = function(e, t) {
                return e === t
            };
        e.exports = {
            rotateArray: i,
            multisetCompare: r,
            equal: o,
            isSubset: s,
            sliceAround: a
        }
    },
    304: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = e.exports = {
                parseOtherId: function(e) {
                    var t, i = String(n(55).get("me").id);
                    return "string" == typeof e ? (t = e.split(":"), t[0] === i ? t[1] : t[0]) : void 0
                },
                baseUrl: function() {
                    var e = [].slice.call(arguments);
                    return n(62).stringify({
                        host: n(55).get("api_v2_host"),
                        path: ["users", n(55).get("me").id, "conversations"].concat(e)
                    })
                },
                baseUrlWithId: function(e) {
                    var t = n(3).tail(arguments);
                    return i.baseUrl.apply(null, [i.parseOtherId(e)].concat(t))
                },
                post: function(e, n) {
                    var r = i.baseUrl(e),
                        o = {
                            contents: n
                        };
                    return t.ajax({
                        type: "POST",
                        url: r,
                        dataType: "json",
                        data: o
                    })
                }
            }
        }).call(t, n(1))
    },
    305: function(e, t) {
        "use strict";
        e.exports = {
            codes: {
                AUD: "AUD",
                CAD: "CAD",
                EUR: "EUR",
                GBP: "GBP",
                NZD: "NZD",
                USD: "USD"
            },
            symbols: {
                AUD: "$",
                CAD: "$",
                EUR: "â‚¬",
                GBP: "Â£",
                NZD: "$",
                USD: "$"
            },
            codesWithSameSymbol: ["AUD", "CAD", "NZD", "USD"],
            taxCode: {
                AUD: void 0,
                CAD: "GST/HST/QST",
                EUR: "VAT",
                USD: void 0,
                GBP: "VAT",
                NZD: "GST"
            }
        }
    },
    306: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(137).prototype,
            applyTo: function(e, t) {
                var i = n(940).makeFilterGenerator(t.fields);
                this.extend(e, {
                    setUserInput: function(e) {
                        this.setFilter("userInput", i(e))
                    }
                })
            }
        })
    },
    312: function(e, t) {
        "use strict";
        e.exports = {
            FAILURE: "failure",
            FINISHED: "finished",
            NOT_FOUND: "not_found",
            PREPARING: "preparing",
            TRANSCODING: "transcoding",
            QUEUED: "queued"
        }
    },
    340: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            message: n(52).t("Enter a valid date."),
            check: function(e, t) {
                t(e instanceof Date && "number" == typeof + e && !isNaN(+e))
            }
        })
    },
    341: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return E[e](t)
        }

        function r() {
            return A
        }

        function o(e, t) {
            return C.getOrderedActions().filter(t).filter(n(3).partial(i, n(3), e))
        }

        function s(e, t, i) {
            var r = C.getOrderedActions(),
                o = r.slice(0, t),
                s = n(3).partition(e, function(e) {
                    return n(3).contains(o, e)
                }),
                a = s[0],
                l = s[1];
            return l.length >= i ? {
                primary: a,
                overflow: l
            } : {
                primary: a.concat(l),
                overflow: []
            }
        }

        function a(e) {
            return function(t) {
                return e(d(t) ? t.sound : t)
            }
        }

        function l(e) {
            return c(e) || u(e)
        }

        function u(e) {
            return e instanceof n(86)
        }

        function c(e) {
            return e instanceof n(66)
        }

        function d(e) {
            return e instanceof n(204)
        }

        function h(e) {
            return p(e) && !f(e)
        }

        function p(e) {
            return l(e) && !e.isDisabled()
        }

        function f(e) {
            return l(e) && e.isProcessing()
        }

        function g(e) {
            return l(e) && e.isPublic()
        }

        function m(e) {
            return l(e) && n(55).get("me").owns(e)
        }

        function v(e) {
            return l(e) && e.getNumSounds() > 0
        }

        function _(e) {
            return l(e) && !!e.get("purchase_url")
        }

        function y(e) {
            return c(e) && n(55).get("me").canDownload(e)
        }

        function b(e) {
            return l(e) && e.isBlacklisted()
        }

        function w(e) {
            return l(e) && e.isDisabled()
        }

        function x(e) {
            return function() {
                return n(55).get("rollouts").get(e)
            }
        }

        function k(e) {
            return function() {
                return !e.apply(void 0, arguments)
            }
        }

        function S() {
            for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                return n(3).every(t, function(e) {
                    return e.apply(void 0, i)
                })
            }
        }

        function T() {
            for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                return n(3).any(t, function(e) {
                    return e.apply(void 0, i)
                })
            }
        }
        var E = {
                play: a(h),
                like: a(S(h, g)),
                repost: a(S(h, g, k(m))),
                addToPlaylist: a(S(h, c, T(g, m))),
                addToNextUp: S(x("play_queue"), T(d, h)),
                removeFromQueue: d,
                buy: a(S(v, _)),
                share: a(S(h, v, T(g, m))),
                download: a(S(h, y)),
                "delete": a(S(m, k(b))),
                edit: a(S(m, k(w))),
                startStation: a(S(h, c, g, k(b)))
            },
            A = ["play", "like", "repost", "share", "addToPlaylist", "addToNextUp", "removeFromQueue", "buy", "download", "startStation", "edit", "delete"],
            C = e.exports = {
                getActionSet: o,
                overflowActions: s,
                getOrderedActions: r
            }
    },
    342: function(e, t, n) {
        "use strict";

        function i(e) {
            return "sound" === e.resource_type
        }

        function r(e) {
            return e ? n(52).dateTimeHelper.format(new Date(e)) : null
        }
        e.exports = {
            enabledAttributes: function(e) {
                return {
                    isPrivate: e.isPrivate(),
                    isGeoblocked: e.isGeoblocked(),
                    isMonetizable: e.isMonetizable(),
                    isMonetizablePending: e.isMonetizablePending(),
                    isManagedByFeeds: e.isManagedByFeeds(),
                    hasScheduledPrivacy: e.hasScheduledPrivacy()
                }
            },
            sharing: function(e) {
                return e.isPrivate() ? i(e) ? n(52).t("This track is private.") : n(52).t("This playlist is private.") : void 0
            },
            managedByFeeds: function(e) {
                return e.isManagedByFeeds() ? i(e) ? n(52).t("This track is managed directly by its rightsholder.") : n(52).t("This playlist cannot be edited or deleted, as it is managed directly by its rightsholder.") : void 0
            },
            monetization: function(e) {
                if (e.isMonetizable()) {
                    var t = e.get("monetization");
                    if (!t) return i(e) ? n(52).t("This track is monetizable.") : n(52).t("This playlist is monetizable.");
                    var o = t.start_timestamp,
                        s = t.end_timestamp,
                        a = {
                            startDate: r(o),
                            endDate: r(s)
                        };
                    return o && s ? i(e) ? n(52).t("This track is monetizable between [[startDate]] and [[endDate]].", a) : n(52).t("This playlist is monetizable between [[startDate]] and [[endDate]].", a) : o && !s ? i(e) ? n(52).t("This track is monetizable from [[startDate]].", a) : n(52).t("This playlist is monetizable from [[startDate]].", a) : !o && s ? i(e) ? n(52).t("This track is monetizable until [[endDate]].", a) : n(52).t("This playlist is monetizable until [[endDate]].", a) : i(e) ? n(52).t("This track is monetizable.") : n(52).t("This playlist is monetizable.")
                }
            },
            monetizationPending: function(e) {
                if (e.isMonetizablePending()) {
                    var t = e.get("monetization");
                    if (t) {
                        var o = Date.now(),
                            s = t.start_timestamp && new Date(t.start_timestamp),
                            a = t.end_timestamp && new Date(t.end_timestamp),
                            l = {
                                startDate: r(s),
                                endDate: r(a)
                            };
                        return s && s > o ? i(e) ? n(52).t("This track is monetizable from [[startDate]].", l) : n(52).t("This playlist is monetizable from [[startDate]].", l) : a && o > a ? i(e) ? n(52).t("This track is monetizable until [[endDate]].", l) : n(52).t("This playlist is monetizable until [[endDate]].", l) : i(e) ? n(52).t("This track is enabled for monetization, but is not yet monetizable.") : n(52).t("This playlist is enabled for monetization, but is not yet monetizable.")
                    }
                }
            },
            scheduling: function(e) {
                if (!e.hasScheduledPrivacy()) return null;
                var t = e.get("scheduled_public_date"),
                    o = e.get("scheduled_private_date"),
                    s = {
                        publicDate: r(t),
                        privateDate: r(o)
                    };
                return t && o ? i(e) ? n(52).t("This track will be made public on [[publicDate]], and will be made private on [[privateDate]].", s) : n(52).t("This playlist will be made public on [[publicDate]], and will be made private on [[privateDate]].", s) : t ? i(e) ? n(52).t("This track will be made public on [[publicDate]].", s) : n(52).t("This playlist will be made public on [[publicDate]].", s) : i(e) ? n(52).t("This track will be made private on [[privateDate]].", s) : n(52).t("This playlist will be made private on [[privateDate]].", s)
            },
            geoblocking: function(e) {
                if (e.isGeoblocked()) {
                    var t = n(83).complement(e.get("geo_blockings"));
                    return 1 === t.length ? i(e) ? n(52).t("This track will only be playable in [[countryTitle]].", {
                        countryTitle: n(83).country(t[0]).title
                    }) : n(52).t("This playlist will only be playable in [[countryTitle]].", {
                        countryTitle: n(83).country(t[0]).title
                    }) : i(e) ? n(52).tp("This track will only be playable in 1 country.", "This track will only be playable in %d countries.", t.length) : n(52).tp("This playlist will only be playable in 1 country.", "This playlist will only be playable in %d countries.", t.length)
                }
            }
        }
    },
    343: function(e, t, n) {
        "use strict";
        var i, r = "playlist",
            o = null,
            s = ["album", "ep", "single", "compilation"],
            a = (i = {}, i[r] = n(52).t("Playlist"), i.album = n(52).t("Album"), i.ep = n(52).t("EP"), i.single = n(52).t("Single"), i.compilation = n(52).t("Compilation"), i),
            l = function(e) {
                return function(t) {
                    return s.indexOf(t) > -1 ? t : e
                }
            },
            u = function(e) {
                return a[e] || ""
            },
            c = l(r),
            d = l(o);
        e.exports = {
            typeToApi: d,
            apiToType: c,
            releaseLabels: a,
            getReleaseLabel: u,
            defaultReleaseType: r
        }
    },
    344: function(e, t, n) {
        "use strict";

        function i() {
            o()
        }

        function r(e) {
            s(e.sound)
        }

        function o() {
            var e = void 0;
            e = u && c.withoutSuffix ? u : u ? n(52).t("[[[pageTitle]]] on SoundCloud", {
                pageTitle: u
            }) : n(52).t("SoundCloud â€“ Hear the worldâ€™s sounds"), p._setTitle(e)
        }

        function s(e) {
            function t() {
                if (!e.isPaused()) {
                    var t = e.playlist;
                    t ? l(t, e) : a(e)
                }
            }
            e && !e.getMonetizableTrack() && (e.attrExists(["title", "user"]) ? t() : e.fetch().done(t))
        }

        function a(e) {
            var t = e.get("title"),
                i = e.get("user").username,
                r = h + n(52).t("[[[soundTitle]]] by [[[artist]]]", {
                    soundTitle: t,
                    artist: i
                });
            p._setTitle(r)
        }

        function l(e, t) {
            var i = t.get("title"),
                r = e.get("title"),
                o = h + n(52).t("[[[soundTitle]]] in [[[playlistTitle]]]", {
                    soundTitle: i,
                    playlistTitle: r
                });
            p._setTitle(o)
        }
        var u = void 0,
            c = void 0,
            d = !1,
            h = n(97).audioTabIndicator ? "" : "â–¶ ",
            p = e.exports = {
                initialize: function() {
                    d || (d = !0, n(57).on("audio:play", r).on("audio:pause", i))
                },
                deinitialize: function() {
                    d && (d = !1, n(57).off("audio:play", r).off("audio:pause", i))
                },
                set: function(e, t) {
                    var i = n(67).getCurrentSound(),
                        r = !(i && i.isPlaying());
                    u = e, c = t || {}, r && o()
                },
                update: function() {
                    s(n(67).getCurrentSound())
                },
                _setTitle: function(e) {
                    window.document.title = e.toString()
                }
            }
    },
    345: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.onCaptchaSuccess,
                o = t.onCaptchaExpire,
                s = n(56).defer();
            return r().then(function() {
                window.grecaptcha.render(e, {
                    sitekey: l,
                    callback: i,
                    "expired-callback": o
                }), s.resolve()
            }, s.reject), s
        }

        function r() {
            if (!a) {
                a = n(56).defer();
                var e = n(62).modify("https://www.google.com/recaptcha/api.js", {
                    query: {
                        hl: o(),
                        onload: u,
                        render: "explicit"
                    }
                });
                s(e, {
                    onerror: function() {
                        a.reject(), a = null
                    }
                })
            }
            return a.promise()
        }
        var o = n(52).getLocale,
            s = n(125).insertScript;
        e.exports = {
            renderRecaptcha: i
        };
        var a = void 0,
            l = n(55).get("recaptcha_public_key"),
            u = "__onRecaptchaReady";
        window[u] = function() {
            a.resolve(), delete window[u]
        }
    },
    347: function(e, t, n) {
        "use strict";
        var i = n(3).object(["getSourceInfo", "isShuffled", "toggleShuffle", "unshuffle"].map(function(e) {
            return [e, function() {
                var t;
                return (t = this.sources[0])[e].apply(t, arguments)
            }]
        }));
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var r = t.fields,
                    o = t.mixins,
                    s = void 0 === o ? [] : o,
                    a = t.protoProps,
                    l = t.staticProps,
                    u = void 0;
                e.getFilterClass = function() {
                    if (!u) {
                        var t;
                        u = (t = n(137)).extend.apply(t, [n(306).withOptions({
                            fields: r
                        })].concat(s, [n(3).assign({
                            model: e.prototype.model,
                            setupSources: function() {
                                return [new e(null, this.options)]
                            }
                        }, i, a), n(3).assign({
                            hashFn: e.hashFn
                        }, l)]))
                    }
                    return u
                }
            }
        })
    },
    348: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                this.resetValues(), this.broadcastSuccess(), this.clearSaveHistory(), this.trigger(e)
            }

            function r(e) {
                this._failedSaves = l(e), this._completeSaves = this._completeSaves.concat(u(e))
            }

            function o(e, t) {
                var n = this;
                return t.then(function() {
                    return e.call(n).then(n.onSaved.bind(n), n.onSaveFailed.bind(n))
                })
            }

            function s() {
                return this.validate().then(function(e) {
                    return e ? void 0 : n(56).defer().reject()
                });
            }

            function a(e) {
                var t = this,
                    i = this.getAttributesToBeSaved(e),
                    r = e.map(function(e) {
                        return t.saveSound(e, i[e.id])
                    });
                return n(56).mapEither(function() {
                    return n(3).flatten(arguments, !0)
                }, n(56).settled(r))
            }

            function l(e) {
                return n(3).reject(e, function(e) {
                    return e.isSuccess
                })
            }

            function u(e) {
                return n(3).filter(e, function(e) {
                    return e.isSuccess
                })
            }

            function c(e) {
                var t, i, r = this.getRequiredModelAttributes().map(function(e) {
                    return "change:" + e
                });
                this._failedSaves = [], this._completeSaves = [], this._sounds = e.map(function(e) {
                    return t = new(n(66))({
                        id: e
                    }), this.addSubmodel(t), this.listenTo(t, r.join(" "), d), t
                }, this), i = f.call(this), i.length ? h.call(this, i) : p.call(this)
            }

            function d() {
                this.isDirty() || p.call(this)
            }

            function h(e) {
                var t = e.map(function(e) {
                    return e.fetch({
                        attrs: this.getRequiredModelAttributes()
                    })
                }, this);
                return n(56).settled(t)
            }

            function p() {
                var e = this.getAttributesFromModels();
                e && this.set(e)
            }

            function f() {
                return n(3).compact(this.getSounds().map(function(e) {
                    var t = !e.attrExists(this.getRequiredModelAttributes());
                    return t ? e : null
                }, this))
            }
            var g = {
                    "default": "save",
                    save: function() {
                        return o.call(this, this.saveTracks, s.call(this))
                    },
                    retry: function() {
                        return o.call(this, this.retryTracks, s.call(this))
                    },
                    cancel: function() {
                        this.cancel()
                    }
                },
                m = {
                    save: {
                        label: n(52).t("Save"),
                        action: "save"
                    },
                    retry: {
                        label: n(52).t("Retry"),
                        action: "retry"
                    },
                    cancel: {
                        label: n(52).t("Cancel"),
                        action: "cancel"
                    },
                    close: {
                        label: n(52).t("Close"),
                        action: "cancel"
                    }
                };
            e.exports = new(n(21))(n(201), {
                requirePrototype: n(79).prototype,
                applyTo: function(e) {
                    e.constructor.hashFn = function(e, t) {
                        return e.resource_id || e.id || t && (t.resource_id || t.soundIds.join("_")) || null
                    }, e.buttons = t.extend(!0, {}, m, e.buttons || {}), e.actions = n(3).defaults(e.actions || {}, g)
                },
                before: {
                    setup: function(e, t) {
                        c.call(this, t.soundIds)
                    }
                },
                requires: ["getAttributesFromModels", "getAttributesToBeSaved"],
                defaults: {
                    getRequiredModelAttributes: function() {
                        return []
                    },
                    broadcastSuccess: function() {
                        this._completeSaves.length > 0 && n(57).trigger("multi-track:saved", {
                            soundSaves: this._completeSaves
                        })
                    },
                    setSoundAttributes: function(e, t) {
                        e.set(t)
                    },
                    saveSound: function(e, t) {
                        var i = e.createSnapshot(n(3).keys(t));
                        return this.setSoundAttributes(e, t), e.save().then(function() {
                            return {
                                sound: e,
                                isSuccess: !0
                            }
                        }, function() {
                            return i.rollback(), {
                                sound: e,
                                isSuccess: !1
                            }
                        })
                    },
                    getInitialValues: function() {
                        return this.getAttributesFromModels()
                    },
                    resetValues: function() {
                        var e = this.getInitialValues();
                        this.set(e), this.markFieldsClean()
                    }
                },
                _sounds: null,
                _failedSaves: null,
                _completeSaves: null,
                getSounds: function() {
                    return this._sounds
                },
                saveTracks: function() {
                    return a.call(this, this.getSounds())
                },
                retryTracks: function() {
                    return a.call(this, n(3).pluck(this._failedSaves, "sound"))
                },
                onSaved: function(e) {
                    r.call(this, e), i.call(this, "allSaved")
                },
                onSaveFailed: function(e) {
                    r.call(this, e), this.trigger("someFailed", {
                        failedSounds: this._failedSaves
                    })
                },
                cancel: function() {
                    i.call(this, "canceled")
                },
                clearSaveHistory: function() {
                    this._failedSaves = [], this._completeSaves = []
                },
                reduceSounds: function(e) {
                    var t = this.getSounds();
                    return t.length ? n(3).reduce(e, function(e, i, r) {
                        var o = i(t[0]),
                            s = n(3).some(t, function(e) {
                                return !n(3).isEqual(i(e), o)
                            });
                        return e[r] = s ? null : o, e
                    }, {}) : {}
                }
            })
        }).call(t, n(1))
    },
    349: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["trigger"],
            defaults: {
                states: null
            },
            _states: null,
            toggleState: function(e, t, n) {
                var i, r, o, s;
                return !e || this.disposed ? this : (this._states || (this._states = {}), this.states || (this.states = {}), e in this.states ? (e in this._states || (this._states[e] = this.getState(e)), o = "undefined" != typeof t ? !!t : !this._states[e], n || this._states[e] !== o ? (this._states[e] = o, r = this.states[e], i = r.handler ? r.handler : r, s = typeof i, "string" === s ? this.$el[o ? "addClass" : "removeClass"](i) : "function" === s ? i.call(this, o) : i && "function" == typeof i.setup && i[o ? "setup" : "teardown"].call(this), this.trigger("state:" + e, o), this) : this) : this)
            },
            getState: function(e) {
                return this._states && e in this._states ? this._states[e] : this.states && e in this.states ? !!this.states[e].initial : !1
            }
        })
    },
    353: function(e, t, n) {
        "use strict";

        function i(e) {
            e.length && (this.add(e, {
                at: 0
            }), this.trigger("new-data", e))
        }

        function r(e, t) {
            this.trigger("change:queue-size", this, t)
        }
        e.exports = n(73).extend({
            notificationType: null,
            queue: null,
            initialize: function() {
                var e, t = this.notificationType;
                n(73).prototype.initialize.apply(this, arguments), e = n(122)[t], this.baseUrl = e.get("baseUrl"), this.queue = new(n(264))({
                    type: t
                }), this.queue.on("data", i, this).on("change:size", r, this)
            },
            fetchNewItems: function() {
                this.queue.fetchQueuedItems()
            },
            markAsRead: function(e) {
                var t = this.at(0);
                !e && t && (e = t.getUuid ? t.getUuid() : t.get("uuid")), e && this.queue.markAsRead(e)
            }
        }, {
            onCleanup: function(e) {
                e.queue.off("data", i, e).off("change:size", r, e).release()
            }
        })
    },
    354: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                return t[0] === e
            }
        }

        function r(e, t) {
            for (var n; e.length > d;) n = e.shift(), e.some(i(n[0])) || t.unset(n[0], v);
            t.set("log", e)
        }

        function o(e, t, n, i) {
            e.has(t) || e.set(t, [n, i], v)
        }

        function s(e, t) {
            for (var n = 0, i = e.length; i > n; ++n)
                if (e[n][_] === t[_]) return n;
            return -1
        }

        function a(e, t) {
            var n, i = s(e, t);
            return i > -1 ? (n = e[i], n[y] += t[y], n[b] = n[b] || t[b]) : e.unshift(t.slice()), e
        }

        function l() {
            A._persistent.reset(), A._session.reset()
        }

        function u(e, t) {
            return e / t >= p
        }

        function c(e) {
            var t = this.get(e[_]);
            return n(3).object(Object.keys(S).concat(Object.keys(T)), e.concat(t))
        }
        var d = 250,
            h = 2e3,
            p = .25,
            f = null,
            g = null,
            m = null,
            v = {
                dontPersist: !0
            },
            _ = 0,
            y = 1,
            b = 2,
            w = 3,
            x = 0,
            k = 1,
            S = {
                id: _,
                playTime: y,
                userInitiated: b,
                timestamp: w
            },
            T = {
                duration: x,
                userId: k
            },
            E = {
                field: null,
                from: "global",
                id: null,
                unique: !1,
                playState: null,
                userInitiated: null,
                filter: null,
                newestFirst: !1,
                limit: !1
            };
        n(57).on("connect:logout", l);
        var A = e.exports = {
            _persistent: new(n(105))("play-log"),
            _session: new(n(235)),
            addSound: function(e, t) {
                f && this.writeToLog(), f = e, g = e.getListenTime(), m = t || {}, e.on("pause", this.writeToLog, this).hold()
            },
            select: function(e) {
                e = n(3).assign({}, E, e);
                var t = this["session" === e.from ? "_session" : "_persistent"],
                    i = t.get("log") || [];
                return e.id ? i = i.filter(function(t) {
                    return t[_] === e.id
                }) : e.userId && (i = i.filter(function(n) {
                    return t.get(n[_])[k] === e.userId
                })), e.unique && (i = i.reduceRight(a, [])), i = i.filter(function(n) {
                    return null != e.userInitiated && n[b] != e.userInitiated ? !1 : "played" !== e.playState || u(n[y], t.get(n[_])[x]) ? e.filter ? e.filter.apply(null, n) : !0 : !1
                }), e.newestFirst && i.reverse(), e.limit && i.length > e.limit && (i = i.slice(0, e.limit)), i = e.field ? n(3).pluck(i, S[e.field]) : i.map(c, t)
            },
            count: function(e) {
                return this.select(e).length
            },
            numSessionPlays: function() {
                return this.count({
                    from: "session",
                    unique: !0,
                    playState: "played"
                })
            },
            getPlayedIds: function() {
                return this.select({
                    field: "id",
                    from: "persistent",
                    unique: !0,
                    playState: "played"
                })
            },
            writeToLog: function() {
                if (f) {
                    var e, t, n, i = Math.floor(f.getListenTime() - g),
                        s = A._persistent,
                        a = A._session,
                        l = f.id,
                        u = f.getMediaDuration();
                    i >= Math.min(u, h) && (t = s.get("log") || [], n = a.get("log") || [], o(s, l, u, f.get("user_id")), o(a, l, u, f.get("user_id")), e = [l, i, m.userInitiated ? 1 : 0, Date.now()], t.push(e), n.push(e), r(t, s), r(n, a)), f.off("pause", this.writeToLog, this).release(), f = g = null
                }
            }
        }
    },
    355: function(e, t) {
        "use strict";
        e.exports = {
            IN_USE: "in_use",
            RESERVED: "reserved",
            AVAILABLE: "available"
        }
    },
    356: function(e, t) {
        "use strict";
        e.exports = {
            EMAIL: "email",
            PERMALINK: "permalink"
        }
    },
    357: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.map(function(e) {
                return function() {
                    return e.set("editing", !1), e.saveEdits()
                }
            }).reverse();
            return n(56).sequential(t)
        }

        function r() {
            this._soundUploads.length || this.cancel()
        }

        function o(e) {
            this._soundUploads.invoke("setImageFile", e.file, e.source)
        }

        function s(e) {
            e.forEach(function(e) {
                e.set(n(3).pick(this.attributes, u))
            }, this)
        }

        function a(e) {
            e.changedAttributes() && this._soundUploads.each(function(t) {
                t.set(n(3).pick(e.changedAttributes(), u))
            })
        }

        function l() {
            var e = this.getAudible();
            this._soundUploads.each(function(t) {
                var n, i = t.getAudible();
                e.addSound(i), n = e.findSoundById(i.id), t.updateSound(n)
            })
        }
        var u = ["description", "tags", "editing", "feedable", "genre", "artwork_url", "buyLink", "buyTitle", "sharing", "apiStreamable", "embeddableByAll", "domainLocking", "downloadable", "license", "creativeCommonsLicense", "attribution", "nonCommercial", "nonDerivative", "shareAlike", "commentable", "publicComments", "stats", "geoblocking", "availableCountries", "labelName", "releaseDate", "monetizationEnabled", "monetizationTerritories", "monetizationStartTimezone", "monetizationStart", "monetizationStartLocalDate", "monetizationStartDate", "monetizationEndTimezone", "monetizationEnd", "monetizationEndLocalDate", "monetizationEndDate", "monetizationRightsholder", "offlineSyncEnabled"],
            c = n(73).extend({
                model: n(150),
                url: null,
                isFullyPopulated: function() {
                    return !0
                },
                hasDataForView: function() {
                    return !0
                }
            });
        e.exports = n(79).extend(n(955), n(956), n(467), n(951), n(953), n(952), {
            _soundUploads: null,
            _playlist: null,
            failedSaving: !1,
            resource_type: "playlist-upload",
            constraints: {
                title: [
                    [n(69), {
                        message: "Enter a title."
                    }],
                    [n(109), {
                        maxLength: 100,
                        message: "Enter a title that is up to [[maxLength]] characters."
                    }]
                ],
                description: [
                    [n(109), {
                        maxLength: 4e3,
                        message: "Enter a playlist description that is up to [[maxLength]] characters."
                    }]
                ],
                permalink: [
                    [n(456), {
                        type: "playlist",
                        getResource: function() {
                            return this.getAudible()
                        }
                    }]
                ],
                customGenre: [
                    [n(109), {
                        maxLength: 100,
                        message: n(52).t("Enter a custom genre that is up to [[maxLength]] characters.")
                    }]
                ]
            },
            actions: {
                save: function() {
                    var e = this;
                    return this.validate().then(function(e) {
                        return e || n(56).reject()
                    }).then(function() {
                        return e.set("editing", !1), i(e.getSoundUploads())
                    }).then(this.saveEdits.bind(this))
                }
            },
            getAttributesToBeSaved: function() {
                var e = this._soundUploads.map(function(e) {
                    var t = e.getAudible();
                    return {
                        id: t.id
                    }
                });
                return {
                    tracks: e
                }
            },
            getAttributesFromModel: function() {
                return {}
            },
            setup: function() {
                this._soundUploads = new c, this.listenTo(this._soundUploads, "remove", r).listenTo(this, "imageDataChanged", o).listenTo(this, "change", a)
            },
            addSoundForms: function(e) {
                this._soundUploads.add(e), s.call(this, e)
            },
            validate: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    t = n(56).defer(),
                    i = n(79).prototype.validate.apply(this, arguments),
                    r = e.fields,
                    o = r ? n(3).assign({}, e, {
                        fields: n(3).intersection(r, u)
                    }) : e,
                    s = this._soundUploads.map(function(e) {
                        return e.validate.call(e, o)
                    });
                return s.push(i), n(56).all(s).done(function() {
                    var e = Array.prototype.slice.call(arguments);
                    t.resolve(e.every(n(3).identity))
                }), t
            },
            onAudibleSaved: function() {
                this.failedSaving = !1, l.call(this)
            },
            onSaveFailed: function(e) {
                this.failedSaving = !0, this.setToFailed("save", e), this.set("editing", !0), this.setActionState("save", "enabled")
            },
            cancel: function() {
                var e;
                for (e = this._soundUploads.length; e--;) this._soundUploads.at(e).cancel();
                this.destroy(), this._playlist && n(74).destroy(this._playlist)
            },
            resetOrder: n(3).noop,
            saveOrder: n(3).noop,
            getCurrentOrder: function() {
                return n(3).pluck(this.getSoundUploads(), "resource_id")
            },
            reorder: function(e) {
                this._soundUploads.sort({
                    silent: !0,
                    comparator: function(t) {
                        return e.indexOf(t.resource_id)
                    }
                })
            },
            getAudible: function() {
                return this._playlist
            },
            createAudible: function() {
                return this._playlist = new(n(86)), this._playlist
            },
            unsetAudible: function() {
                this._playlist = null
            },
            getSoundUploadsCollection: function() {
                return this._soundUploads
            },
            getSoundUploads: function() {
                return this._soundUploads.models
            }
        }, {
            onCleanup: function() {
                this._playlist && this._playlist.release(), this._soundUploads.release()
            }
        })
    },
    358: function(e, t, n) {
        "use strict";

        function i(e) {
            this.set("transfer", new(n(565))({
                sampleSize: 50
            })), this.get("transfer").setTotal(e.size), this.set("transcoding", new(n(565))({
                sampleSize: 10,
                totalSize: 100
            }))
        }

        function r() {
            this._uploadRequest && this._uploadRequest.abort(), this._transcodingStatus && this._transcodingStatus.abort()
        }

        function o(e) {
            var t = this.get("transfer");
            this._s3key = e, this.set("status", n(93).TRANSCODING), t.add(t.getTotalSize()), n(59).trackUploadFunnel("upload_done"), this.get("transcoding").setTotal(0), this._transcodingStatus = new(n(1356))(e).done(l.bind(this)).fail(u.bind(this)).progress(c.bind(this))
        }

        function s() {
            this.set("status", n(93).FAILED), n(59).trackUploadFunnel(["failed", "uploading"])
        }

        function a(e) {
            this.get("transfer").setTotal(e.total).add(e.loaded)
        }

        function l() {
            this.get("transcoding").setTotal(100).add(100), this.set("status", n(93).COMPLETE), n(59).trackUploadFunnel("complete")
        }

        function u() {
            this.get("transcoding").setTotal(100), this.set("status", n(93).FAILED), n(59).trackUploadFunnel(["failed", "transcoding"])
        }

        function c(e) {
            this.get("transcoding").setTotal(100).add(e)
        }
        e.exports = n(65).extend({
            resource_type: "single-audio-upload",
            url: null,
            _uploadRequest: null,
            _transcodingStatus: null,
            _s3key: null,
            hasDataForView: function() {
                return !0
            },
            setup: function(e) {
                i.call(this, e.file), this.set({
                    status: n(93).QUEUED,
                    hasBeenSaved: !1
                })
            },
            upload: function() {
                this.set("status", n(93).UPLOADING), this._uploadRequest = (new(n(976))).upload(this.get("file")).done(o.bind(this)).fail(s.bind(this)).progress(a.bind(this))
            },
            remove: function() {
                r.call(this), this.destroy()
            },
            getS3Key: function() {
                return this._s3key
            },
            getFileName: function() {
                return this.get("file").name
            }
        }, {
            hashFn: function(e, t) {
                return t && t.resource_id || e && (e.file ? null : e.id || e.resource_id) || null
            }
        })
    },
    405: function(e, t) {
        "use strict";
        e.exports = {
            plural: function(e, t, n) {
                return n = "string" == typeof n ? n : t + "s", 1 === e ? t : n
            },
            possessive: function(e) {
                return e + "â€™s"
            },
            capitalize: function(e) {
                return "string" != typeof e ? "" : e.split(" ").map(function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                }).join(" ")
            }
        }
    },
    406: function(e, t, n) {
        "use strict";

        function i(e, t, i) {
            if (i.indexOf(" ") > -1) return i;
            if (i !== i.toUpperCase()) {
                var r = i.replace(/[.,#~_-]|([a-z])([A-Z])/g, function(e, t, n) {
                    return t ? t + " " + n : " "
                });
                if (i !== r) return n(283).titleCase(r)
            }
            var o = i.toLowerCase();
            return e && o.indexOf(e.toLowerCase()) > -1 || t && o.indexOf(t.toLowerCase()) > -1 || o.indexOf("user") > -1 ? e + " " + t : i
        }
        e.exports = {
            get: function(e, t) {
                var i = e.username || e.title || e.name;
                return t === !0 && (i = n(405).possessive(i)), i
            },
            getTitleDisplayName: function(e, t, n) {
                var r = i(e, t, n);
                return r !== n ? n + " | " + r : n
            }
        }
    },
    456: function(e, t, n) {
        "use strict";
        var i = [{
                rule: /^(?![_-])/,
                errorMessage: n(52).t("A permalink must not start with an underscore or hyphen.")
            }, {
                rule: /^(?!.*[-_]$)/,
                errorMessage: n(52).t("A permalink must not end with an underscore or hyphen.")
            }, {
                rule: /^(?!.*[\-_]{2,})/,
                errorMessage: n(52).t("A permalink must not have consecutive underscores or hyphens.")
            }, {
                rule: /^[a-z0-9_-]*$/,
                errorMessage: n(52).t("Use only numbers, letters, underscores, or hyphens.")
            }, {
                rule: /[a-z]/,
                errorMessage: n(52).t("A permalink must contain at least one letter.")
            }, {
                rule: /^.{3,255}$/,
                errorMessage: n(52).t("A permalink must be between 3 and 255 characters.")
            }],
            r = {
                playlist: [],
                sound: [{
                    rule: new RegExp("^(?!(" + ["albums", "comments", "favorites", "followers", "following", "likes", "reposts", "sets", "spotlight", "stats", "tracks"].join("|") + ")$)"),
                    errorMessage: n(52).t("This permalink is reserved. Enter another one.")
                }]
            };
        e.exports = n(100).extend({
            type: "sound",
            initialize: function() {
                n(100).prototype.initialize.apply(this, arguments), this.constraints = i.concat(r[this.type])
            },
            check: function(e, t) {
                var i = this;
                if ("" === e) return void t(!0);
                var r = n(3).find(this.constraints, function(t) {
                    return !t.rule.test(e)
                });
                r ? (this.message = r.errorMessage, t(!1)) : this.resolvePermalink(e).done(function(e) {
                    e === !1 && (i.message = n(52).t("This permalink is already in use. Enter another one.")), t(e)
                }).fail(function(e) {
                    return t(!0)
                })
            },
            resolvePermalink: function(e) {
                var t = this.getResource.call(this._form),
                    i = n(55).get("me").get("permalink");
                return t && e === t.get("permalink") ? n(56).resolve(!0) : "sound" === this.type ? n(23).callEndpoint("trackPermalinkAvailability", null, {
                    permalink: e
                }).then(function(e) {
                    return e.body.track_permalink_available
                }) : "playlist" === this.type ? n(86).resolve(i, e).then(function(e) {
                    return !1
                }) : void 0
            }
        })
    },
    457: function(e, t, n) {
        "use strict";
        var i = e.exports = new(n(21))({
            message: "",
            state: n(173).UNKNOWN,
            _lastError: null,
            _lastResult: null,
            _form: null,
            initialize: function(e, t) {
                n(3).assign(this, e), this._form = t
            },
            disable: function() {
                this.state = n(173).DISABLED
            },
            reset: function() {
                this.state = n(173).UNKNOWN, this._lastResult && "pending" === this._lastResult.state() && this._lastResult.reject(), this._lastResult = null
            },
            result: function(e, t) {
                return this.state = t ? n(173).VALID : n(173).INVALID, this._lastError = t ? null : this.getMessage(), e.resolve({
                    success: t,
                    message: this._lastError
                })
            },
            getLastError: function() {
                return this._lastError
            },
            around: {
                validate: function(e) {
                    return this.state === n(173).UNKNOWN && (this._lastResult = e.apply(this, Array.prototype.slice.call(arguments, 1))), this._lastResult
                }
            },
            defaults: {
                check: n(3).noop,
                getMessage: function() {
                    var e = this,
                        t = n(3).isFunction(this.message) ? this.message.call(this._form) : this.message || "";
                    return t.toString().replace(/\[\[([^}]+)\]\]/g, function(t, n) {
                        return e[n] || t
                    })
                }
            }
        });
        i.hydrateConstraintDefinition = function(e) {
            var t = void 0,
                n = void 0;
            return Array.isArray(e) ? (t = e[0], n = e[1]) : t = e, new t(n, this)
        }, i.hydrateConstraintDefinitions = function(e) {
            var t = this;
            return n(3).reduce(e, function(e, n, r) {
                return e[r] = n.map(i.hydrateConstraintDefinition, t), e
            }, {})
        }
    },
    458: function(e, t, n) {
        "use strict";
        var i = /^\s*([^@]+)@(\S+\.[a-z]{2,})\s*$/i;
        e.exports = n(100).extend({
            message: n(52).t("This email address is invalid."),
            check: function(e, t) {
                t(!e || i.test(e))
            }
        })
    },
    459: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            message: n(52).t("Enter a time in the future."),
            check: function(e, t) {
                t(e > Date.now())
            }
        })
    },
    460: function(e, t, n) {
        "use strict";
        e.exports = {
            confirm: function(e) {
                var t = window.confirm(e),
                    i = n(56).defer();
                return i[t ? "resolve" : "reject"]()
            }
        }
    },
    461: function(e, t, n) {
        (function(t) {
            "use strict";

            function n(e) {
                var t = e.eventType,
                    n = void 0,
                    i = void 0;
                return t && 0 === t.indexOf("mouse") ? (n = e.clientX + window.pageXOffset, i = e.clientY + window.pageYOffset) : e.changedTouches ? (n = e.changedTouches[0].pageX, i = e.changedTouches[0].pageY) : (n = e.x, i = e.y), {
                    x: n,
                    y: i
                }
            }
            var i;
            e.exports = {
                normalizeEvent: function(e) {
                    if (e.offsetX === i || e.offsetY === i) {
                        var r = t(e.target).offset(),
                            o = n(e.originalEvent);
                        e.pageX = o.x, e.pageY = o.y, e.offsetX = o.x - r.left, e.offsetY = o.y - r.top
                    }
                    return e
                }
            }
        }).call(t, n(1))
    },
    462: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                T(e, 1e3 * Math.max(5, c) * ("next" === t ? 1 : -1))
            }

            function r(e, t) {
                return (e && n(3).reduce(e, function(e, n, i) {
                    var r = t(n, i);
                    return r !== !1 && (!e || r > e.value) ? {
                        item: n,
                        value: r
                    } : e
                }, void 0) || {}).item
            }

            function o(e) {
                return e && u.some(n(3).propertyOf(e))
            }

            function s(e) {
                var t = e.keyCode;
                return t === f || t === g || t === p || t === m || t === v || t === _ || t === y
            }

            function a() {
                l(), E = window.setTimeout(l, b), x = !0
            }

            function l() {
                E && (window.clearTimeout(E), E = null), x = !1
            }
            var u = ["altKey", "shiftKey", "ctrlKey", "metaKey"],
                c = 0,
                d = !1,
                h = n(102).ENTER,
                p = n(102).ALT,
                f = n(102).SHIFT,
                g = n(102).CTRL,
                m = n(102).META_LEFT,
                v = n(102).META_RIGHT,
                _ = n(102).META_RIGHT_OSX,
                y = n(102).META_FIREFOX_OSX,
                b = 1500,
                w = 71,
                x = !1,
                k = e.exports = {
                    chordStartKeyName: "G",
                    shortcuts: {
                        playPause: {
                            keyCode: ["32", "13"],
                            keyName: ["space"],
                            description: n(52).t("Play or pause"),
                            className: "kbd-big",
                            fn: function() {
                                n(67).toggleCurrent({
                                    userInitiated: !0
                                })
                            }
                        },
                        search: {
                            keyCode: ["83", "191"],
                            keyName: ["S"],
                            description: n(52).t("Search"),
                            fn: function() {
                                n(57).trigger("search:focus")
                            }
                        },
                        load: {
                            keyCode: ["48", "49", "50", "51", "52", "53", "54", "55", "56", "57"],
                            keyName: ["0â€¦9"],
                            className: "kbd-big",
                            description: n(52).t("Seek to position"),
                            fn: function(e, t, n) {
                                e && !o(n) && e.seek(e.getMediaDuration() / 10 * (t - 48))
                            }
                        },
                        seekBackward: {
                            keyCode: ["37"],
                            keyName: ["â†"],
                            description: n(52).t("Seek backward"),
                            allowKeyHold: !0,
                            fn: function(e) {
                                e && i(e, "prev")
                            }
                        },
                        seekForward: {
                            keyCode: ["39"],
                            keyName: ["â†’"],
                            description: n(52).t("Seek forward"),
                            allowKeyHold: !0,
                            fn: function(e) {
                                e && i(e, "next")
                            }
                        },
                        repeat: {
                            keyCode: ["shiftKey+76"],
                            keyName: ["L", "â‡§"],
                            description: n(52).t("Repeat playing track"),
                            fn: function() {
                                n(67).cycleRepeatMode()
                            }
                        },
                        prev: {
                            keyCode: ["shiftKey+37", "75"],
                            keyName: ["â†", "â‡§"],
                            description: n(52).t("Play previous track"),
                            fn: function() {
                                n(67).playPrev({
                                    userInitiated: !0
                                })
                            }
                        },
                        next: {
                            keyCode: ["shiftKey+39", "74"],
                            keyName: ["â†’", "â‡§"],
                            description: n(52).t("Play next track"),
                            fn: function() {
                                n(67).playNext({
                                    userInitiated: !0
                                })
                            }
                        },
                        mute: {
                            keyCode: ["77"],
                            keyName: ["M"],
                            description: n(52).t("Mute volume"),
                            fn: function() {
                                n(57).broadcast("mute:toggle")
                            }
                        },
                        volUp: {
                            keyCode: ["shiftKey+38"],
                            keyName: ["â†‘", "â‡§"],
                            description: n(52).t("Increase volume"),
                            allowKeyHold: !0,
                            fn: function() {
                                n(57).trigger("volume:change", .1)
                            }
                        },
                        volDown: {
                            keyCode: ["shiftKey+40"],
                            keyName: ["â†“", "â‡§"],
                            description: n(52).t("Decrease volume"),
                            allowKeyHold: !0,
                            fn: function() {
                                n(57).trigger("volume:change", -.1)
                            }
                        },
                        like: {
                            keyCode: ["76"],
                            keyName: ["L"],
                            description: n(52).t("Like playing track"),
                            fn: function(e) {
                                e && n(74).like(e.id, e.resource_type)
                            }
                        },
                        repost: {
                            keyCode: ["82"],
                            keyName: ["R"],
                            description: n(52).t("Repost playing track"),
                            fn: function(e) {
                                e && n(74).repost(e.id, e.resource_type)
                            }
                        },
                        dialog: {
                            keyCode: ["72", "shiftKey+191"],
                            keyName: ["H"],
                            description: n(52).t("Show keyboard shortcuts"),
                            fn: function() {
                                n(57).trigger("keyboard-shortcuts:toggle")
                            }
                        },
                        gotoNowPlaying: {
                            keyCode: ["80"],
                            keyName: ["P"],
                            description: n(52).t("Navigate to playing track"),
                            fn: function() {
                                n(67).restoreState()
                            }
                        },
                        gotoLikes: {
                            chorded: !0,
                            keyCode: ["76"],
                            keyName: ["L"],
                            description: n(52).t("Navigate to Likes"),
                            fn: function() {
                                n(55).get("router").navigateToRoute("youNetwork", [null, "likes"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoCollection: {
                            chorded: !0,
                            keyCode: ["67"],
                            keyName: ["C"],
                            description: n(52).t("Navigate to Collection"),
                            fn: function() {
                                n(55).get("router").navigateToRoute("youNetwork", [null, "collection"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoStream: {
                            chorded: !0,
                            keyCode: ["83"],
                            keyName: ["S"],
                            description: n(52).t("Navigate to Stream"),
                            fn: function() {
                                n(55).get("router").navigateToRoute("stream", [], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoProfile: {
                            chorded: !0,
                            keyCode: ["80"],
                            keyName: ["P"],
                            description: n(52).t("Navigate to Profile"),
                            fn: function() {
                                n(55).get("router").navigate("/you", {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        gotoHistory: {
                            chorded: !0,
                            keyCode: ["72"],
                            keyName: ["H"],
                            description: n(52).t("Navigate to History"),
                            fn: function() {
                                n(55).get("router").navigateToRoute("youNetwork", [null, "history"], {
                                    trigger: !0,
                                    replace: !1
                                })
                            }
                        },
                        toggleQueue: {
                            keyCode: ["81"],
                            keyName: ["Q"],
                            description: n(52).tPending("Show queue"),
                            fn: function() {
                                n(57).trigger("queue:toggle")
                            }
                        },
                        toggleShuffle: {
                            keyCode: ["shiftKey+83"],
                            keyName: ["S", "â‡§"],
                            description: n(52).tPending("Shuffle queue"),
                            fn: function() {
                                n(67).toggleShuffle()
                            }
                        }
                    },
                    handleKeyDown: function(e) {
                        var n = e.keyCode,
                            i = n === h && !e.isDefaultPrevented() && t(e.target).is(":tabbable");
                        e.isInput() || i || (k.processKey(n, e) && (e.preventDefault(), d = !0), s(e) || ++c)
                    },
                    handleKeyUp: function(e) {
                        c = 0, d && (e.preventDefault(), d = !1)
                    },
                    processKey: function(e, t) {
                        if (!x && e === w) return a(), !0;
                        var i = r(S()[x ? "chorded" : "normal"][e], function(n, i) {
                                if (i) {
                                    if (t && t[i]) return 1
                                } else if (!o(t) || !/[a-z0-9%']/i.test(String.fromCharCode(e))) return 0;
                                return !1
                            }),
                            s = i && k.shortcuts[i];
                        return !s || c && !s.allowKeyHold || s.fn(n(67).getCurrentSound(), e, t), l(), !!i
                    }
                },
                S = n(3).memoize(function() {
                    var e = {
                            chorded: {},
                            normal: {}
                        },
                        t = /^(?:(\w+)\+)?(\d+)$/;
                    return n(3).each(k.shortcuts, function(n, i) {
                        var r = n.keyCode,
                            o = n.chorded,
                            s = e[o ? "chorded" : "normal"];
                        r.forEach(function(e) {
                            var n = t.exec(e),
                                r = n[1],
                                o = void 0 === r ? "" : r,
                                a = n[2];
                            s[a] || (s[a] = {}), s[a][o] = i
                        })
                    }), e
                }),
                T = n(3).throttle(function(e, t) {
                    e.seekRelative(t)
                }, 200),
                E = null
        }).call(t, n(1))
    },
    463: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            override: {
                model: n(476)
            },
            audibleAt: function(e) {
                var t = this.at(e);
                return t && t.getSound()
            }
        })
    },
    464: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _editState: n(136).NONE,
            override: {
                isEditing: function() {
                    return this._editState === n(136).EDITING
                },
                isSaving: function() {
                    return this._editState === n(136).SAVING
                },
                isCanceling: function() {
                    return this._editState === n(136).CANCELING
                },
                getEditState: function() {
                    return this._editState
                }
            },
            setEditState: function(e, t) {
                var n = this._editState;
                return n !== e && (this._editState = e, this.trigger("change:editState", this, e, n, t || {})), this
            }
        })
    },
    465: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(79).prototype,
            applyTo: function(e) {
                var t, i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = i.gender,
                    o = void 0 === r ? "gender" : r,
                    s = i.genderCustom,
                    a = void 0 === s ? "genderCustom" : s,
                    l = (t = {}, t[o] = {
                        defaultValue: null,
                        datasource: [{
                            label: n(52).t("Female"),
                            value: "female"
                        }, {
                            label: n(52).t("Male"),
                            value: "male"
                        }, {
                            label: n(52).t("Prefer not to say"),
                            value: "secret"
                        }, {
                            label: n(52).t("Custom"),
                            value: "custom"
                        }]
                    }, t[a] = {
                        defaultValue: ""
                    }, t);
                this.merge(e, {
                    fields: l
                })
            }
        })
    },
    466: function(e, t, n) {
        "use strict";
        var i = n(3).identity;
        e.exports = new(n(21))({
            requirePrototype: n(79).prototype,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = t.recaptchas,
                    o = void 0 === r ? [] : r,
                    s = o.reduce(function(e, t) {
                        return e.fields[t] = {
                            defaultValue: ""
                        }, e.fields[t + "_required"] = {
                            defaultValue: !1
                        }, e.constraints[t] = [
                            [n(69), {
                                message: n(52).t("Check the reCAPTCHA checkbox.")
                            }]
                        ], e.constraintConditions[t] = {
                            fields: [t + "_required"],
                            check: i
                        }, e
                    }, {
                        fields: {},
                        constraints: {},
                        constraintConditions: {}
                    }),
                    a = s.fields,
                    l = s.constraints,
                    u = s.constraintConditions;
                this.merge(e, {
                    fields: a,
                    constraints: l,
                    constraintConditions: u
                })
            },
            defaults: {
                toggleRecaptcha: function(e, t) {
                    var n;
                    this.set((n = {}, n[e + "_required"] = t, n))
                },
                resetRecaptcha: function(e) {
                    this.trigger("reset_" + e)
                }
            }
        })
    },
    467: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _resetOrder: null,
            _originalOrder: null,
            requires: ["getCurrentOrder", "reorder", "resetOrder", "saveOrder"],
            around: {
                saveOrder: function(e, t) {
                    var i = n(56).defer().always(this.setEditState.bind(this, n(136).NONE));
                    return this.setEditState(n(136).SAVING), n(56).all([e(t)]).done(i.resolve).fail(i.reject), this._originalOrder = null, i
                },
                resetOrder: function(e, t) {
                    var i = n(56).defer().always(this.setEditState.bind(this, n(136).NONE));
                    return this.setEditState(n(136).CANCELING), n(3).isEqual(this.getOriginalOrder(), this.getCurrentOrder()) ? i.resolve() : (this instanceof n(73) && (this.next_href = null), n(56).all([e(t)]).done(i.resolve).fail(i.reject)), i
                }
            },
            saveResetOrder: function() {
                this._resetOrder = this.getCurrentOrder(), this._originalOrder = this._originalOrder || this._resetOrder
            },
            getResetOrder: function() {
                return this._resetOrder || []
            },
            getOriginalOrder: function() {
                return this._originalOrder
            }
        })
    },
    473: function(e, t, n) {
        "use strict";

        function i(e, t) {
            t[e]("data", r, this)
        }

        function r() {
            n(3).assign(this, this._statuses.reduce(s, {
                latest: 0,
                totalSize: 0
            })), this._statuses.length && this.latest === this.totalSize && o.call(this), this.trigger("data")
        }

        function o() {
            this._statuses.forEach(i.bind(this, "off")), this._statuses.length = 0, r.call(this)
        }

        function s(e, t) {
            return e.latest += t.latest, e.totalSize += t.totalSize, e
        }
        e.exports = n(565).extend({
            _statuses: null,
            initialize: function() {
                this._statuses = []
            },
            add: n(3).noop,
            addTransfer: function(e) {
                this._statuses.push(e), i.call(this, "on", e), r.call(this)
            },
            removeTransfer: function(e) {
                var t = this._statuses.indexOf(e);
                t > -1 && (this._statuses.splice(t, 1), i.call(this, "off", e), r.call(this))
            }
        })
    },
    505: function(e, t) {
        e.exports = {
            africa: {
                DZ: "Algeria",
                AO: "Angola",
                AG: "Antigua And Barbuda",
                BJ: "Benin",
                BT: "Bhutan",
                BW: "Botswana",
                BF: "Burkina Faso",
                BI: "Burundi",
                CM: "Cameroon",
                CV: "Cape Verde",
                CF: "Central African Republic",
                TD: "Chad",
                KM: "Comoros",
                CG: "Congo",
                CD: "Democratic Republic of the Congo",
                CI: "Cote d'Ivoire",
                EG: "Egypt",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                ET: "Ethiopia",
                GF: "French Guiana",
                GA: "Gabon",
                GM: "Gambia",
                GH: "Ghana",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                KE: "Kenya",
                LS: "Lesotho",
                LR: "Liberia",
                MW: "Malawi",
                ML: "Mali",
                MR: "Mauritania",
                YT: "Mayotte",
                MA: "Morocco",
                MZ: "Mozambique",
                NA: "Namibia",
                NE: "Niger",
                NG: "Nigeria",
                QA: "Qatar",
                RW: "Rwanda",
                ST: "Sao Tome And Principe",
                SN: "Senegal",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SO: "Somalia",
                ZA: "South Africa",
                SD: "Sudan",
                SR: "Suriname",
                SZ: "Swaziland",
                TZ: "United Republic of Tanzania",
                TG: "Togo",
                TT: "Trinidad And Tobago",
                UG: "Uganda",
                EH: "Western Sahara",
                ZM: "Zambia",
                ZW: "Zimbabwe"
            },
            asia: {
                AF: "Afghanistan",
                BH: "Bahrain",
                BD: "Bangladesh",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                KH: "Cambodia",
                CN: "China",
                DJ: "Djibouti",
                HK: "Hong Kong",
                IN: "India",
                ID: "Indonesia",
                IR: "Islamic Republic of Iran",
                IQ: "Iraq",
                IL: "Israel",
                JP: "Japan",
                JO: "Jordan",
                KP: "Democratic People's Republic of Korea",
                KR: "Republic of Korea",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Lao People's Democratic Republic",
                LB: "Lebanon",
                LY: "Libyan Arab Jamahiriya",
                MO: "Macao",
                MY: "Malaysia",
                MN: "Mongolia",
                MM: "Myanmar",
                NP: "Nepal",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: "Palestinian Territory, Occupied",
                PH: "Philippines",
                SA: "Saudi Arabia",
                SG: "Singapore",
                SB: "Solomon Islands",
                SS: "South Sudan",
                LK: "Sri Lanka",
                SY: "Syrian Arab Republic",
                TW: "Taiwan, Province of China",
                TJ: "Tajikistan",
                TH: "Thailand",
                TL: "Timor-Leste",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                AE: "United Arab Emirates",
                UZ: "Uzbekistan",
                VN: "Viet Nam",
                YE: "Yemen"
            },
            australasia: {
                AS: "American Samoa",
                AU: "Australia",
                CX: "Christmas Island",
                CC: "Cocos (Keeling) Islands",
                CK: "Cook Islands",
                FJ: "Fiji",
                PF: "French Polynesia",
                HM: "Heard Island And McDonald Islands",
                KI: "Kiribati",
                MG: "Madagascar",
                MV: "Maldives",
                MH: "Marshall Islands",
                MU: "Mauritius",
                FM: "Federated States of Micronesia",
                NR: "Nauru",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NU: "Niue",
                MP: "Northern Mariana Islands",
                PG: "Papua New Guinea",
                WS: "Samoa",
                TK: "Tokelau",
                TO: "Tonga",
                TV: "Tuvalu",
                VU: "Vanuatu",
                WF: "Wallis And Futuna",
                AQ: "Antarctica"
            },
            europe: {
                AX: "Aaland Islands",
                AL: "Albania",
                AD: "Andorra",
                AM: "Armenia",
                AT: "Austria",
                AZ: "Azerbaijan",
                BY: "Belarus",
                BE: "Belgium",
                BA: "Bosnia And Herzegovina",
                BV: "Bouvet Island",
                BG: "Bulgaria",
                HR: "Croatia",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                EE: "Estonia",
                FO: "Faroe Islands",
                FI: "Finland",
                FR: "France",
                TF: "French Southern Territories",
                GE: "Georgia",
                DE: "Germany",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GP: "Guadeloupe",
                GG: "Guernsey",
                VA: "Holy See (Vatican City State)",
                HU: "Hungary",
                IS: "Iceland",
                IE: "Ireland",
                IM: "Isle of Man",
                IT: "Italy",
                JE: "Jersey",
                KZ: "Kazakhstan",
                LV: "Latvia",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MK: "The Former Yugoslav Republic of Macedonia",
                MT: "Malta",
                MQ: "Martinique",
                MD: "Republic of Moldova",
                MC: "Monaco",
                ME: "Montenegro",
                MS: "Montserrat",
                NL: "Netherlands",
                NF: "Norfolk Island",
                NO: "Norway",
                PL: "Poland",
                PT: "Portugal",
                RE: "Reunion",
                RO: "Romania",
                RU: "Russian Federation",
                SH: "Saint Helena, Ascension And Tristan Da Cunha",
                SM: "San Marino",
                RS: "Serbia",
                SX: "Sint Maarten (Dutch Part)",
                SK: "Slovakia",
                SI: "Slovenia",
                GS: "South Georgia And The South Sandwich Islands",
                ES: "Spain",
                SJ: "Svalbard And Jan Mayen",
                SE: "Sweden",
                CH: "Switzerland",
                UA: "Ukraine",
                GB: "United Kingdom",
                VG: "Virgin Islands, British"
            },
            latin_america: {
                AR: "Argentina",
                AW: "Aruba",
                BB: "Barbados",
                BZ: "Belize",
                BM: "Bermuda",
                BO: "Plurinational State of Bolivia",
                BQ: "Bonaire, Sint Eustatius And Saba",
                BR: "Brazil",
                CL: "Chile",
                CO: "Colombia",
                CR: "Costa Rica",
                CU: "Cuba",
                CW: "Curacao",
                EC: "Ecuador",
                SV: "El Salvador",
                FK: "Falkland Islands (Malvinas)",
                GD: "Grenada",
                GT: "Guatemala",
                GY: "Guyana",
                HN: "Honduras",
                JM: "Jamaica",
                MX: "Mexico",
                NI: "Nicaragua",
                PA: "Panama",
                PY: "Paraguay",
                PE: "Peru",
                PN: "Pitcairn",
                PR: "Puerto Rico",
                KN: "Saint Kitts And Nevis",
                LC: "Saint Lucia",
                UY: "Uruguay",
                VE: "Bolivarian Republic of Venezuela"
            },
            north_america: {
                AI: "Anguilla",
                BS: "Bahamas",
                CA: "Canada",
                KY: "Cayman Islands",
                DM: "Dominica",
                DO: "Dominican Republic",
                GU: "Guam",
                HT: "Haiti",
                BL: "Saint Barthelemy",
                MF: "Saint Martin (French Part)",
                PM: "Saint Pierre And Miquelon",
                VC: "Saint Vincent And The Grenadines",
                TC: "Turks And Caicos Islands",
                US: "United States",
                UM: "United States Minor Outlying Islands",
                VI: "Virgin Islands, U.S."
            }
        }
    },
    506: function(e, t, n) {
        var i = n(1831);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    525: function(e, t, n) {
        "use strict";
        e.exports = n(109).extend({
            maxLength: 22,
            message: n(52).t("Enter a buy-link title that is up to [[maxLength]] characters.")
        })
    },
    529: function(e, t, n) {
        "use strict";
        e.exports = n(109).extend({
            maxLength: 30,
            message: n(52).t("You can use up to [[maxLength]] tags.")
        })
    },
    530: function(e, t, n) {
        "use strict";
        e.exports = n(1291).extend({
            check: function(e, t, n) {
                n(!(e[0] && e[1]) || e[0] < e[1])
            }
        })
    },
    531: function(e, t) {
        "use strict";

        function n() {
            var e = Error.apply(this, arguments);
            e.name = this.name = "UnauthorizedViewerError", this.message = "User is unauthorized to view this resource.", this.stack = e.stack
        }
        n.prototype = Object.create(Error.prototype), e.exports = n
    },
    532: function(e, t, n) {
        "use strict";

        function i(e) {
            a = e, e && (l = s.AudioManagerStates = e.States)
        }

        function r(e) {
            var t = this,
                n = function() {
                    return t.stopListening(t.controller)
                },
                i = function(e) {
                    switch (e) {
                        case l.IDLE:
                            t._initializedAudio.resolve();
                            break;
                        case l.ENDED:
                            t.pause(), t.trigger(u.FINISH), n();
                            break;
                        case l.ERROR:
                        case l.DEAD:
                            t.trigger(u.AUDIO_ERROR), n()
                    }
                };
            return i(e), i
        }

        function o() {
            var e;
            return function() {
                e !== this.currentTime() && (this.trigger(u.TIME), e = this.currentTime())
            }
        }
        var s, a, l, u = n(211).Events,
            c = {
                muted: !1,
                volume: 1
            };
        s = e.exports = function(e, t) {
            if (!e) throw new Error("ExternalAudioAd: AudioManager instance must be set with `ExternalAudioAd.setAudioManager()` or passed via the constructor");
            if (!t.url || !t.duration) throw new Error("ExternalAudioAd: requires url and duration specified in constructor options");
            s.setAudioManager(e), this.options = n(3).extend({}, t), this.id = this.options.resourceId || this.options.soundId, this.controller = null, this._intendToPlay = !1, this._initializedAudio = null
        }, n(3).extend(s.prototype, n(22).Events, {
            constructor: s,
            initAudio: function() {
                var e = this;
                if (!this._initializedAudio) {
                    this._initializedAudio = n(56).defer().done(function() {
                        return e.trigger(u.CREATED)
                    });
                    var t = this.options.useSinglePlayer,
                        i = this.controller = a.createAudioPlayer({
                            id: this.id,
                            src: this.options.url,
                            duration: n(3).result(this.options.duration),
                            mimeType: "audio/mpeg",
                            forceSingle: null != t ? t : !0
                        });
                    this.listenTo(i, "state-change", r.call(this, i.getState())), this.listenTo(i, "position-change", o())
                }
                return this._initializedAudio.promise()
            },
            play: function(e) {
                var t = this;
                if (!this.isPlaying()) {
                    var i = e && e.seek || this.currentTime();
                    return e = n(3).extend({
                        position: i
                    }, e), this._intendToPlay = !0, this.trigger(u.PLAY, e), this.initAudio().done(function() {
                        t.controller.play(i), 0 === i && t.trigger(u.PLAY_START, e)
                    })
                }
            },
            pause: function(e) {
                this.isPaused() || (this._intendToPlay = !1, this.trigger(u.PAUSE, n(3).extend({
                    position: this.currentTime()
                }, e)), this.controller && this.controller.pause())
            },
            enablePreloading: n(3).noop,
            disablePreloading: n(3).noop,
            registerModelEventListener: function(e, t) {
                this.on("all", t.bind(this, e))
            },
            isPaused: function() {
                return !this.isPlaying()
            },
            isPlaying: function() {
                return this._intendToPlay
            },
            currentTime: function() {
                return this.controller ? this.controller.getCurrentPosition() : 0
            }
        }), n(3).extend(s, {
            setAudioManager: i,
            setAudioManagerOnce: n(3).once(i),
            Events: u,
            setVolume: function(e) {
                c.volume = void 0 === e ? 1 : e, a && a.setVolume(c.volume)
            },
            toggleMute: function(e) {
                c.muted = void 0 === e ? !c.muted : !!e, a && a.setVolume(c.muted ? 0 : 1)
            },
            getSettings: function() {
                return c
            },
            setSettings: function(e) {
                c = n(3).extend({}, e)
            }
        })
    },
    533: function(e, t) {
        "use strict";
        var n = (window.navigator.userLanguage || window.navigator.language || "").toLowerCase(),
            i = n.split("-")[0],
            r = n.split("-")[1];
        e.exports = {
            isUsedLanguage: function(e) {
                return i === e.toLowerCase()
            },
            isCountry: function(e) {
                return r === e.toLowerCase()
            },
            isUsedLanguageAndCountry: function(e) {
                return n === e.toLowerCase()
            }
        }
    },
    534: function(e, t, n) {
        "use strict";
        e.exports = {
            getAccessibleMarkup: function(e) {
                return '<span class="sc-visuallyhidden">' + n(20).Utils.escapeExpression(e.screenreader) + "</span>" + (e.visible ? '<span aria-hidden="true">' + n(20).Utils.escapeExpression(e.visible) + "</span>" : "")
            }
        }
    },
    535: function(e, t) {
        "use strict";
        var n = window.navigator;
        e.exports = {
            getFlashPlugin: function() {
                var e, t, i, r;
                if ("undefined" != typeof window.ActiveXObject) try {
                    r = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"), r && (e = r.GetVariable("$version"))
                } catch (o) {} else n.plugins && n.plugins.length > 0 && (i = "application/x-shockwave-flash", t = n.mimeTypes, t && t[i] && t[i].enabledPlugin && t[i].enabledPlugin.description && (e = t[i].enabledPlugin.description));
                return e
            },
            getFlashVersion: function() {
                var e = this.getFlashPlugin().match(/\d\S+/)[0].replace(/,/g, ".").split(".");
                return [e[0], e[1]].join(".")
            },
            getOperatingSystem: function() {
                var e = n.appVersion;
                return -1 !== e.indexOf("Win") ? "Windows" : -1 !== e.indexOf("Mac") ? "MacOS" : -1 !== e.indexOf("X11") ? "UNIX" : -1 !== e.indexOf("Linux") ? "Linux" : "undefined-OS"
            },
            getBrowser: function() {
                var e, t, i = n.userAgent,
                    r = i.match(/(opera|chrome|safari|firefox|msie|applewebkit)\/?\s*(\.?\d+(\.\d+)*)/i),
                    o = i.match(/version\/([\.\d]+)/i);
                return t = null !== o ? o[1] : r ? r[2] : null, e = r ? [r[1], t] : [n.appName, n.appVersion], e.join()
            }
        }
    },
    536: function(e, t) {
        "use strict";
        var n = /\r?\n/g,
            i = /\s+/g;
        e.exports = {
            cleanBlockText: function(e) {
                return e.trim().replace(n, " ").replace(i, " ")
            }
        }
    },
    537: function(e, t, n) {
        "use strict";
        var i = [37, 38, 39, 40, 9, 35, 36];
        e.exports = {
            makeReadOnly: function(e) {
                n(112).ios ? e.on("keydown", function(e) {
                    return e.isMetaKey() && !e.shiftKey || n(3).include(i, e.which) ? !0 : void e.preventDefault()
                }) : e.attr("readOnly", "readOnly")
            }
        }
    },
    538: function(e, t, n) {
        (function(t) {
            "use strict";
            var n;
            e.exports = {
                getScrollbarSize: function() {
                    if (void 0 === n) {
                        var e, i, r;
                        e = t('<div class="g-scrollable-inner" style="width:50px;height:50px;overflow:hidden; position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>'), t("body").append(e), i = t("div", e).innerWidth(), e.css("overflow", "auto"), r = t("div", e).innerWidth(), e.remove(), n = i - r
                    }
                    return n
                }
            }
        }).call(t, n(1))
    },
    539: function(e, t, n) {
        "use strict";

        function i(e) {
            e.forEach(function(e) {
                var t = e.target;
                d.has(t) && d.get(t).forEach(function(t) {
                    return t(e)
                })
            })
        }

        function r(e) {
            return e.intersectionRatio > 0
        }

        function o(e, t) {
            a(e, t), f.observe(e)
        }

        function s(e) {
            l(e), f.unobserve(e)
        }

        function a(e, t) {
            d.has(e) ? d.get(e).push(t) : d.set(e, [t])
        }

        function l(e) {
            d["delete"](e)
        }
        var u = n(125).whenInserted,
            c = !(!window.IntersectionObserver || !window.WeakMap);
        e.exports = {
            whenElementVisible: c ? function(e) {
                return u(e).then(function() {
                    return n(56).promise(function(t) {
                        o(e, function(n) {
                            r(n) && (s(e), t())
                        })
                    })
                })
            } : function() {
                return n(56).resolve()
            }
        };
        var d = c ? new WeakMap : {},
            h = [0, .25, .5, .75, 1],
            p = "40px",
            f = c ? new window.IntersectionObserver(i, {
                threshold: h,
                rootMargin: p
            }) : {}
    },
    540: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = this;
                return this._saving = !0, e.always(function() {
                    t._saving = !1, t.saveCleanup()
                })
            }

            function r() {
                return this.get("editing") || this._saving ? n(56).reject() : n(56).resolve()
            }
            e.exports = new(n(21))(n(259).withOptions({
                read: "artwork_url"
            }), {
                requires: ["getAudible", "saveEdits"],
                _saving: !1,
                defaults: {
                    saveCleanup: function() {},
                    preSaveCheck: function() {
                        return n(56).resolve()
                    }
                },
                applyTo: function(e) {
                    e.fields = t.extend(!0, {}, e.fields, {
                        editing: {
                            defaultValue: !0
                        },
                        errorMessage: {
                            defaultValue: ""
                        }
                    })
                },
                around: {
                    saveEdits: function(e) {
                        var t = this,
                            o = n(3).rest(arguments);
                        return r.call(this).then(this.preSaveCheck.bind(this)).then(function() {
                            return i.call(t, e.apply(t, o))
                        })
                    }
                },
                saveAudibleImage: function(e) {
                    var t, i = this.getImageFileInfo();
                    return i.file ? (e.setImageFile(i.file, i.source), e.on("imageTranscodingDone", function(e) {
                        this.unsetImageFile({
                            silent: !0
                        }), this.set("artwork_url", e.artwork_url)
                    }), t = e.uploadImage()) : t = n(56).resolve(), t
                },
                getErrorMessageTemplate: function(e, t, i) {
                    var r = e || "unknown",
                        o = {
                            infoMessage: i && " " + i + "."
                        },
                        s = {
                            track: {
                                upload: n(52).t("Error uploading track.[[infoMessage]]", o),
                                save: n(52).t("Error saving track.[[infoMessage]] Please try again.", o),
                                transcode: n(52).t("Error processing track.[[infoMessage]]", o),
                                unknown: n(52).t("Error with track.[[infoMessage]]", o)
                            },
                            playlist: {
                                upload: n(52).t("Error uploading playlist.[[infoMessage]]", o),
                                save: n(52).t("Error saving playlist.[[infoMessage]] Please try again.", o),
                                transcode: n(52).t("Error processing playlist.[[infoMessage]]", o),
                                unknown: n(52).t("Error with playlist.[[infoMessage]]", o)
                            }
                        };
                    return s[t][r]
                },
                extractErrorMessage: function(e) {
                    try {
                        return JSON.parse(e.responseText).errors[0].error_message
                    } catch (t) {
                        return ""
                    }
                },
                setToModelAttributes: function() {
                    var e = this.getAttributesFromModel();
                    this.set(e), this.unsetImageFile({
                        force: !0
                    }), this.markFieldsClean()
                }
            })
        }).call(t, n(1))
    },
    542: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(65).prototype,
            hasPermalink: function(e) {
                return e && this.has("permalink") && this.get("permalink").toLowerCase() === e.toLowerCase()
            }
        })
    },
    556: function(e, t, n) {
        "use strict";
        e.exports = function(e, t, i, r, o, s) {
            function a() {
                m && v || (e.release(), g(), m = v = !0)
            }

            function l(e) {
                var t = e.sound,
                    o = e.index,
                    s = e.metadata,
                    a = s.originalModel,
                    l = s.queryPosition,
                    u = s.sourceInfo,
                    c = new(n(204))({}, {
                        layoutInfo: r,
                        originalModel: a,
                        queryPosition: l,
                        restoreUrl: i,
                        sound: t,
                        sourceInfo: u,
                        index: o
                    });
                return c.release(), c
            }
            var u = t || e.getCurrentSound(),
                c = e instanceof n(73) ? n(1343)(e) : n(1342)(e),
                d = n(1341)(c),
                h = n(1344)(d, u, l, o, s),
                p = h.next,
                f = h.prev,
                g = h.dispose,
                m = !1,
                v = !1;
            return e.hold(), {
                dispose: a,
                next: {
                    stream: p,
                    dispose: function() {
                        !m && v && a(), m = !0
                    }
                },
                prev: {
                    stream: f,
                    dispose: function() {
                        !v && m && a(), v = !0
                    }
                }
            }
        }
    },
    557: function(e, t, n) {
        "use strict";
        var i = window.document.referrer,
            r = n(62).parse(i).host || "",
            o = (n(62).getQueryParam("utm_medium") || "").toLowerCase(),
            s = [/\.ask\.com$/, /\.baidu\.com$/, /\.bing\.com$/, /\.duckduckgo\.com$/, /\.google\.com$/, /\.yahoo\.com$/, /\.yandex\.com$/];
        e.exports = {
            facebook: "facebook" === o || /\bfacebook\.com/.test(i) || /\bw\.soundcloud\.com/.test(i) && /origin=facebook/.test(i) || !!n(62).getQueryParam("fb_action_ids"),
            googleplus: "googleplus" === o,
            searchEngine: s.some(i.match, r)
        }
    },
    558: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !t.neverRelease && t.cleanup() || e
        }

        function r(e) {
            return e ? function(t) {
                o(t), e.apply(t, arguments)
            } : o
        }

        function o(e) {
            e.off && e.off(), e.stopListening && e.stopListening()
        }

        function s() {
            do; while (p.reduce(i, !1))
        }

        function a() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? h : arguments[0];
            l(), f = window.setInterval(s, e)
        }

        function l() {
            f && (window.clearInterval(f), f = null)
        }

        function u(e) {
            return e.__constructor__ || e
        }
        var c = n(3),
            d = c.noop,
            h = 6e4,
            p = [],
            f = void 0,
            g = function() {
                var e = 0;
                return function() {
                    return "f-" + ++e
                }
            }();
        a(), e.exports = {
            setStoreCleanupInterval: a,
            clearStoreCleanupInterval: l,
            applyTo: function m(e, t) {
                t = n(3).assign({
                    neverRelease: !1,
                    cleanupInstantly: !1,
                    hashFn: function() {
                        return null
                    },
                    prepareArgs: function() {
                        return arguments
                    },
                    prepareInstance: function() {
                        return this
                    },
                    getIncrementValue: function() {
                        return 1
                    },
                    onHold: d,
                    onRelease: d,
                    onCleanup: null
                }, t, e), delete t.prototype;
                var i = e.extend || n(22).Model.extend,
                    o = t.neverRelease,
                    a = new(n(935))({
                        autoCleanup: t.cleanupInstantly,
                        onCleanup: r(t.onCleanup),
                        onIncrement: t.onHold,
                        onDecrement: t.onRelease,
                        neverRelease: o
                    });
                p.push(a);
                var l = o ? d : function(e) {
                        a.increment(this.resource_id, e)
                    },
                    c = o ? d : function(e) {
                        a.decrement(this.resource_id, e)
                    },
                    h = {
                        hold: l,
                        release: c,
                        _usageCount: function() {
                            return a.countFor(this.resource_id)
                        },
                        constructor: function() {
                            for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                            var r = f.prepareArgs.apply(this, n),
                                o = f.hashFn.apply(this, r) || g(),
                                s = f.neverRelease ? 1 : f.getIncrementValue.apply(null, r),
                                l = a.get(o);
                            return l ? (this.constructor.neverRelease || l.hold(s), f.prepareInstance.apply(l, r), l) : (l = this, a.set(o, l), l.constructor.neverRelease || l.hold(s - 1), l.resource_id = o, u(e).apply(l, r), void f.prepareInstance.apply(l, r))
                        }
                    },
                    f = i.call(e, h, t);
                return n(3).assign(f, {
                    __constructor__: u(e),
                    reset: function() {
                        a.reset()
                    },
                    extend: function(e) {
                        e = e || {}, n(3).isArray(e) && (e = n(3).assign.apply(null, [{}].concat(e)));
                        var t = i.apply(f, arguments);
                        t.extend = i;
                        var r = m(t, f);
                        return r.__super__ && (r.__super__ = r.__super__.constructor.__super__), r
                    },
                    instances: function() {
                        return a.add = function(e) {
                            var t = f.hashFn(e.attributes);
                            e.resource_id = t, t && this.set(t, e)
                        }, a
                    }(),
                    getNewInstance: function() {
                        var e = f.hashFn;
                        f.hashFn = g;
                        for (var t = arguments.length, n = Array(t), i = 0; t > i; i++) n[i] = arguments[i];
                        var r = new(Function.prototype.bind.apply(f, [null].concat(n)));
                        return f.hashFn = e, r
                    },
                    removeInstance: function(e) {
                        a.decrement(e.resource_id, 1 / 0), s()
                    }
                })
            }
        }
    },
    559: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i, o, s, a = e.getAttribute("data-id"),
                l = r[a];
            o = l.__class, delete r[a], l.key && (s = l.key), i = t.addSubview(new o(n(3).omit(l, "__path", "__class", "key")), s), i.render(), e.parentNode.replaceChild(i.el, e)
        }
        var r = {},
            o = 0,
            s = e.exports = {
                handlebarHelper: function(e, t) {
                    var i = t.hash;
                    return i.args && (n(3).isFunction(i.args) && (i.args = i.args(this)), t.hash = i = n(3).assign({}, i.args, i)), delete i.args, t.fn && (i.blockContent = new(n(20).SafeString)(t.fn(this))), s.registerSubview(e, t.hash)
                },
                registerSubview: function(e, t) {
                    var n = o++;
                    return t.__class = e, t.className && (t.className = [e.prototype.className, t.className].filter(Boolean).join(" ")), r[n] = t, '<view data-id="' + n + '"></view>'
                },
                replacePlaceholders: function(e) {
                    e.$("view").each(function() {
                        i(this, e)
                    })
                }
            }
    },
    560: function(e, t, n) {
        "use strict";
        var i = n(267),
            r = i.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            o = "GTM-NXX9K5";
        e.exports = {
            include: function() {
                var e = this,
                    t = window.dataLayer = window.dataLayer || [],
                    i = !!n(55).get("me").id;
                t.push({
                    "gtm.start": Date.now(),
                    event: "gtm.js"
                }), i || (n(57).once("connect:login", function() {
                    e.pushEvent({
                        event: "login"
                    })
                }), n(57).once("signup:successful", function() {
                    e.pushEvent({
                        event: "signup-successful"
                    })
                })), n(57).on("consumer-premium:subscriptionChange", function(t) {
                    var n = t.price,
                        i = t.subType,
                        o = t.term;
                    i === r && e.pushEvent({
                        event: "consumer-signup-successful-go",
                        price: n,
                        subscriptionTerm: o
                    })
                }), n(57).on("layout:change", function(t) {
                    e.pushEvent({
                        event: "virtual-pageview",
                        layoutInfo: t
                    })
                }), n(57).on("upload_funnel:save", function() {
                    e.pushEvent({
                        event: "upload-save"
                    })
                }), n(125).insertScript("//www.googletagmanager.com/gtm.js?id=" + o)
            },
            pushEvent: function(e) {
                var t = e.event,
                    i = e.price,
                    r = e.subscriptionTerm,
                    o = e.creatorSubType,
                    s = e.layoutInfo,
                    a = window.dataLayer = window.dataLayer || [],
                    l = n(55).get("me"),
                    u = !!l.id,
                    c = n(55).get("geoip"),
                    d = c && c.get("country_code");
                a.push({
                    event: t,
                    isLoggedIn: u,
                    guid: n(936).generate(),
                    isPremium: l.isPremium(),
                    creatorSubType: o || l.getPlan(),
                    pageCategory: s ? s.layoutName : void 0,
                    hasHighTier: l.hasHighTier(),
                    consumerSubType: l.getConsumerPlan(),
                    countryCode: d,
                    price: i || void 0,
                    subscriptionTerm: r || void 0
                })
            }
        }
    },
    561: function(e, t, n) {
        (function(t) {
            "use strict";
            e.exports = function() {
                return n(37), n(38), t.datepicker.setDefaults(n(52).getDatePickerLocaleData()), t.extend(t.datepicker, {
                    _updateDatepickerOriginalMethod: t.datepicker._updateDatepicker,
                    _updateDatepicker: function(e) {
                        this._updateDatepickerOriginalMethod(e);
                        var n = t.datepicker._get(e, "onAfterRender");
                        n && n.apply(this, [e])
                    }
                }), t.datepicker
            }()
        }).call(t, n(1))
    },
    562: function(e, t, n) {
        "use strict";

        function i() {
            this.set("transfer", new(n(473))), this.set("transcoding", new(n(473)))
        }

        function r(e) {
            s.call(this, e, !0)
        }

        function o(e) {
            s.call(this, e, !1)
        }

        function s(e, t) {
            this.get("transfer")[t ? "addTransfer" : "removeTransfer"](e.get("transfer")), this.get("transcoding")[t ? "addTransfer" : "removeTransfer"](e.get("transcoding")), a.call(this)
        }

        function a() {
            var e, t = this._uploadsCollection,
                i = !1,
                r = !1,
                o = !0,
                s = !0;
            t.some(function(e) {
                switch (e.get("status")) {
                    case n(93).UPLOADING:
                        return r = !0, !0;
                    case n(93).QUEUED:
                        i = !0, s = !1, o = !1;
                        break;
                    case n(93).TRANSCODING:
                        s = !1, o = !1;
                        break;
                    case n(93).COMPLETE:
                        o = !1
                }
            }), e = r ? n(93).UPLOADING : i ? n(93).QUEUED : o ? n(93).FAILED : s ? n(93).COMPLETE : n(93).TRANSCODING, this.set("status", e)
        }
        var l = n(73).extend({
            model: n(358),
            url: null,
            isFullyPopulated: function() {
                return !0
            },
            hasDataForView: function() {
                return !0
            }
        });
        e.exports = n(65).extend({
            resource_type: "aggregate-audio-upload",
            url: null,
            _uploadsCollection: null,
            hasDataForView: function() {
                return !0
            },
            setup: function(e) {
                this._uploadsCollection = new l, this.set({
                    status: n(93).QUEUED,
                    hasBeenSaved: !1
                }), this.listenTo(this._uploadsCollection, "change:status", a).listenTo(this._uploadsCollection, "add", r).listenTo(this._uploadsCollection, "remove", o), i.call(this), this.addUploads(e.uploads)
            },
            addUploads: function(e) {
                this._uploadsCollection.add(e)
            },
            getUploadsCollection: function() {
                return this._uploadsCollection
            },
            getUploads: function() {
                return this._uploadsCollection.models
            },
            remove: function() {
                this._uploadsCollection.remove(this.getUploads()), this.destroy()
            }
        }, {
            hashFn: function(e, t) {
                function n(e) {
                    return e.resource_id
                }
                return t && t.resource_id || e && (e.uploads && e.uploads.length && e.uploads.map(n).join("_") || e.id || e.resource_id) || null
            },
            onCleanup: function(e) {
                e._uploadsCollection.remove(e.getUploads()), e._uploadsCollection.release()
            }
        })
    },
    563: function(e, t, n) {
        "use strict";
        var i = e.exports = function(e, t) {
            var i, r = t.resource_type;
            return "single-audio-upload" === r ? i = new(n(358))(e, t) : "aggregate-audio-upload" === r && (i = new(n(562))(e, t)), i
        };
        i.getClass = function(e) {
            var t = e.resource_type;
            return "single-audio-upload" === t ? n(358) : "aggregate-audio-upload" === t ? n(562) : void 0
        }
    },
    564: function(e, t, n) {
        "use strict";
        var i = new(n(105))("upload-settings");
        e.exports = {
            getUploadAsPlaylist: function() {
                var e = i.get("asPlaylist");
                return void 0 === e ? !0 : e
            },
            toggleUploadAsPlaylist: function() {
                i.set("asPlaylist", !this.getUploadAsPlaylist())
            }
        }
    },
    565: function(e, t, n) {
        "use strict";
        e.exports = n(162).extend([n(22).Events, {
            latest: 0,
            totalSize: 0,
            initialize: function(e) {
                e || (e = {}), this.totalSize = e.totalSize || 0
            },
            isIndeterminate: function() {
                return !this.totalSize
            },
            add: function(e) {
                return e !== this.latest && (this.latest = e, this.trigger("data")), this
            },
            setTotal: function(e) {
                if (this.totalSize !== e) {
                    var t = !this.totalSize || !e;
                    this.totalSize = e, t && this.trigger("change:indeterminate", this.isIndeterminate())
                }
                return this
            },
            getValue: function() {
                return this.latest
            },
            getProgress: function() {
                return this.totalSize ? this.latest / this.totalSize : 0
            },
            getTotalSize: function() {
                return this.totalSize
            }
        }])
    },
    662: function(e, t) {
        "use strict";
        var n = ["NL"];
        e.exports = {
            COOKIE_CONSENT_NAME: "cookie_consent",
            COOKIE_CONSENT_VALUE: "1",
            hasExplicitCookiesConsentMode: function(e, t) {
                return (t || n).indexOf(e) > -1
            }
        }
    },
    833: function(e, t) {
        e.exports = [{
            id: "Pacific/Midway",
            name: "International Date Line West",
            utc_offset: -39600
        }, {
            id: "Pacific/Midway",
            name: "Midway Island",
            utc_offset: -39600
        }, {
            id: "Pacific/Pago_Pago",
            name: "Samoa",
            utc_offset: -39600
        }, {
            id: "Pacific/Honolulu",
            name: "Hawaii",
            utc_offset: -36e3
        }, {
            id: "America/Juneau",
            name: "Alaska",
            utc_offset: -32400
        }, {
            id: "America/Los_Angeles",
            name: "Pacific Time (US & Canada)",
            utc_offset: -28800
        }, {
            id: "America/Tijuana",
            name: "Tijuana",
            utc_offset: -28800
        }, {
            id: "America/Phoenix",
            name: "Arizona",
            utc_offset: -25200
        }, {
            id: "America/Chihuahua",
            name: "Chihuahua",
            utc_offset: -25200
        }, {
            id: "America/Mazatlan",
            name: "Mazatlan",
            utc_offset: -25200
        }, {
            id: "America/Denver",
            name: "Mountain Time (US & Canada)",
            utc_offset: -25200
        }, {
            id: "America/Guatemala",
            name: "Central America",
            utc_offset: -21600
        }, {
            id: "America/Chicago",
            name: "Central Time (US & Canada)",
            utc_offset: -21600
        }, {
            id: "America/Mexico_City",
            name: "Guadalajara",
            utc_offset: -21600
        }, {
            id: "America/Mexico_City",
            name: "Mexico City",
            utc_offset: -21600
        }, {
            id: "America/Monterrey",
            name: "Monterrey",
            utc_offset: -21600
        }, {
            id: "America/Regina",
            name: "Saskatchewan",
            utc_offset: -21600
        }, {
            id: "America/Bogota",
            name: "Bogota",
            utc_offset: -18e3
        }, {
            id: "America/New_York",
            name: "Eastern Time (US & Canada)",
            utc_offset: -18e3
        }, {
            id: "America/Indiana/Indianapolis",
            name: "Indiana (East)",
            utc_offset: -18e3
        }, {
            id: "America/Lima",
            name: "Lima",
            utc_offset: -18e3
        }, {
            id: "America/Lima",
            name: "Quito",
            utc_offset: -18e3
        }, {
            id: "America/Caracas",
            name: "Caracas",
            utc_offset: -16200
        }, {
            id: "America/Halifax",
            name: "Atlantic Time (Canada)",
            utc_offset: -14400
        }, {
            id: "America/La_Paz",
            name: "La Paz",
            utc_offset: -14400
        }, {
            id: "America/Santiago",
            name: "Santiago",
            utc_offset: -14400
        }, {
            id: "America/St_Johns",
            name: "Newfoundland",
            utc_offset: -12600
        }, {
            id: "America/Sao_Paulo",
            name: "Brasilia",
            utc_offset: -10800
        }, {
            id: "America/Argentina/Buenos_Aires",
            name: "Buenos Aires",
            utc_offset: -10800
        }, {
            id: "America/Argentina/San_Juan",
            name: "Georgetown",
            utc_offset: -10800
        }, {
            id: "America/Godthab",
            name: "Greenland",
            utc_offset: -10800
        }, {
            id: "Atlantic/South_Georgia",
            name: "Mid-Atlantic",
            utc_offset: -7200
        }, {
            id: "Atlantic/Azores",
            name: "Azores",
            utc_offset: -3600
        }, {
            id: "Atlantic/Cape_Verde",
            name: "Cape Verde Is.",
            utc_offset: -3600
        }, {
            id: "Africa/Casablanca",
            name: "Casablanca",
            utc_offset: 0
        }, {
            id: "Europe/Dublin",
            name: "Dublin",
            utc_offset: 0
        }, {
            id: "Europe/Dublin",
            name: "Edinburgh",
            utc_offset: 0
        }, {
            id: "Europe/Lisbon",
            name: "Lisbon",
            utc_offset: 0
        }, {
            id: "Europe/London",
            name: "London",
            utc_offset: 0
        }, {
            id: "Africa/Monrovia",
            name: "Monrovia",
            utc_offset: 0
        }, {
            id: "Etc/UTC",
            name: "UTC",
            utc_offset: 0
        }, {
            id: "Europe/Amsterdam",
            name: "Amsterdam",
            utc_offset: 3600
        }, {
            id: "Europe/Belgrade",
            name: "Belgrade",
            utc_offset: 3600
        }, {
            id: "Europe/Berlin",
            name: "Berlin",
            utc_offset: 3600
        }, {
            id: "Europe/Berlin",
            name: "Bern",
            utc_offset: 3600
        }, {
            id: "Europe/Bratislava",
            name: "Bratislava",
            utc_offset: 3600
        }, {
            id: "Europe/Brussels",
            name: "Brussels",
            utc_offset: 3600
        }, {
            id: "Europe/Budapest",
            name: "Budapest",
            utc_offset: 3600
        }, {
            id: "Europe/Copenhagen",
            name: "Copenhagen",
            utc_offset: 3600
        }, {
            id: "Europe/Ljubljana",
            name: "Ljubljana",
            utc_offset: 3600
        }, {
            id: "Europe/Madrid",
            name: "Madrid",
            utc_offset: 3600
        }, {
            id: "Europe/Paris",
            name: "Paris",
            utc_offset: 3600
        }, {
            id: "Europe/Prague",
            name: "Prague",
            utc_offset: 3600
        }, {
            id: "Europe/Rome",
            name: "Rome",
            utc_offset: 3600
        }, {
            id: "Europe/Sarajevo",
            name: "Sarajevo",
            utc_offset: 3600
        }, {
            id: "Europe/Skopje",
            name: "Skopje",
            utc_offset: 3600
        }, {
            id: "Europe/Stockholm",
            name: "Stockholm",
            utc_offset: 3600
        }, {
            id: "Europe/Vienna",
            name: "Vienna",
            utc_offset: 3600
        }, {
            id: "Europe/Warsaw",
            name: "Warsaw",
            utc_offset: 3600
        }, {
            id: "Africa/Algiers",
            name: "West Central Africa",
            utc_offset: 3600
        }, {
            id: "Europe/Zagreb",
            name: "Zagreb",
            utc_offset: 3600
        }, {
            id: "Europe/Athens",
            name: "Athens",
            utc_offset: 7200
        }, {
            id: "Europe/Bucharest",
            name: "Bucharest",
            utc_offset: 7200
        }, {
            id: "Africa/Cairo",
            name: "Cairo",
            utc_offset: 7200
        }, {
            id: "Africa/Harare",
            name: "Harare",
            utc_offset: 7200
        }, {
            id: "Europe/Helsinki",
            name: "Helsinki",
            utc_offset: 7200
        }, {
            id: "Europe/Istanbul",
            name: "Istanbul",
            utc_offset: 7200
        }, {
            id: "Asia/Jerusalem",
            name: "Jerusalem",
            utc_offset: 7200
        }, {
            id: "Europe/Kiev",
            name: "Kyev",
            utc_offset: 7200
        }, {
            id: "Europe/Minsk",
            name: "Minsk",
            utc_offset: 7200
        }, {
            id: "Africa/Johannesburg",
            name: "Pretoria",
            utc_offset: 7200
        }, {
            id: "Europe/Riga",
            name: "Riga",
            utc_offset: 7200
        }, {
            id: "Europe/Sofia",
            name: "Sofia",
            utc_offset: 7200
        }, {
            id: "Europe/Tallinn",
            name: "Tallinn",
            utc_offset: 7200
        }, {
            id: "Europe/Vilnius",
            name: "Vilnius",
            utc_offset: 7200
        }, {
            id: "Asia/Baghdad",
            name: "Baghdad",
            utc_offset: 10800
        }, {
            id: "Asia/Kuwait",
            name: "Kuwait",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "Moscow",
            utc_offset: 10800
        }, {
            id: "Africa/Nairobi",
            name: "Nairobi",
            utc_offset: 10800
        }, {
            id: "Asia/Riyadh",
            name: "Riyadh",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "St. Petersburg",
            utc_offset: 10800
        }, {
            id: "Europe/Moscow",
            name: "Volgograd",
            utc_offset: 10800
        }, {
            id: "Asia/Tehran",
            name: "Tehran",
            utc_offset: 12600
        }, {
            id: "Asia/Muscat",
            name: "Abu Dhabi",
            utc_offset: 14400
        }, {
            id: "Asia/Baku",
            name: "Baku",
            utc_offset: 14400
        }, {
            id: "Asia/Muscat",
            name: "Muscat",
            utc_offset: 14400
        }, {
            id: "Asia/Tbilisi",
            name: "Tbilisi",
            utc_offset: 14400
        }, {
            id: "Asia/Yerevan",
            name: "Yerevan",
            utc_offset: 14400
        }, {
            id: "Asia/Kabul",
            name: "Kabul",
            utc_offset: 16200
        }, {
            id: "Asia/Yekaterinburg",
            name: "Ekaterinburg",
            utc_offset: 18e3
        }, {
            id: "Asia/Karachi",
            name: "Islamabad",
            utc_offset: 18e3
        }, {
            id: "Asia/Karachi",
            name: "Karachi",
            utc_offset: 18e3
        }, {
            id: "Asia/Tashkent",
            name: "Tashkent",
            utc_offset: 18e3
        }, {
            id: "Asia/Kolkata",
            name: "Chennai",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "Kolkata",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "Mumbai",
            utc_offset: 19800
        }, {
            id: "Asia/Kolkata",
            name: "New Delhi",
            utc_offset: 19800
        }, {
            id: "Asia/Colombo",
            name: "Sri Jayawardenepura",
            utc_offset: 19800
        }, {
            id: "Asia/Katmandu",
            name: "Kathmandu",
            utc_offset: 20700
        }, {
            id: "Asia/Almaty",
            name: "Almaty",
            utc_offset: 21600
        }, {
            id: "Asia/Dhaka",
            name: "Astana",
            utc_offset: 21600
        }, {
            id: "Asia/Dhaka",
            name: "Dhaka",
            utc_offset: 21600
        }, {
            id: "Asia/Novosibirsk",
            name: "Novosibirsk",
            utc_offset: 21600
        }, {
            id: "Asia/Rangoon",
            name: "Rangoon",
            utc_offset: 23400
        }, {
            id: "Asia/Bangkok",
            name: "Bangkok",
            utc_offset: 25200
        }, {
            id: "Asia/Bangkok",
            name: "Hanoi",
            utc_offset: 25200
        }, {
            id: "Asia/Jakarta",
            name: "Jakarta",
            utc_offset: 25200
        }, {
            id: "Asia/Krasnoyarsk",
            name: "Krasnoyarsk",
            utc_offset: 25200
        }, {
            id: "Asia/Shanghai",
            name: "Beijing",
            utc_offset: 28800
        }, {
            id: "Asia/Chongqing",
            name: "Chongqing",
            utc_offset: 28800
        }, {
            id: "Asia/Hong_Kong",
            name: "Hong Kong",
            utc_offset: 28800
        }, {
            id: "Asia/Irkutsk",
            name: "Irkutsk",
            utc_offset: 28800
        }, {
            id: "Asia/Kuala_Lumpur",
            name: "Kuala Lumpur",
            utc_offset: 28800
        }, {
            id: "Australia/Perth",
            name: "Perth",
            utc_offset: 28800
        }, {
            id: "Asia/Singapore",
            name: "Singapore",
            utc_offset: 28800
        }, {
            id: "Asia/Taipei",
            name: "Taipei",
            utc_offset: 28800
        }, {
            id: "Asia/Ulaanbaatar",
            name: "Ulaan Bataar",
            utc_offset: 28800
        }, {
            id: "Asia/Urumqi",
            name: "Urumqi",
            utc_offset: 28800
        }, {
            id: "Asia/Tokyo",
            name: "Osaka",
            utc_offset: 32400
        }, {
            id: "Asia/Tokyo",
            name: "Sapporo",
            utc_offset: 32400
        }, {
            id: "Asia/Seoul",
            name: "Seoul",
            utc_offset: 32400
        }, {
            id: "Asia/Tokyo",
            name: "Tokyo",
            utc_offset: 32400
        }, {
            id: "Asia/Yakutsk",
            name: "Yakutsk",
            utc_offset: 32400
        }, {
            id: "Australia/Adelaide",
            name: "Adelaide",
            utc_offset: 34200
        }, {
            id: "Australia/Darwin",
            name: "Darwin",
            utc_offset: 34200
        }, {
            id: "Australia/Brisbane",
            name: "Brisbane",
            utc_offset: 36e3
        }, {
            id: "Australia/Melbourne",
            name: "Canberra",
            utc_offset: 36e3
        }, {
            id: "Pacific/Guam",
            name: "Guam",
            utc_offset: 36e3
        }, {
            id: "Australia/Hobart",
            name: "Hobart",
            utc_offset: 36e3
        }, {
            id: "Australia/Melbourne",
            name: "Melbourne",
            utc_offset: 36e3
        }, {
            id: "Pacific/Port_Moresby",
            name: "Port Moresby",
            utc_offset: 36e3
        }, {
            id: "Australia/Sydney",
            name: "Sydney",
            utc_offset: 36e3
        }, {
            id: "Asia/Vladivostok",
            name: "Vladivostok",
            utc_offset: 36e3
        }, {
            id: "Asia/Magadan",
            name: "Magadan",
            utc_offset: 39600
        }, {
            id: "Pacific/Noumea",
            name: "New Caledonia",
            utc_offset: 39600
        }, {
            id: "Asia/Magadan",
            name: "Solomon Is.",
            utc_offset: 39600
        }, {
            id: "Pacific/Auckland",
            name: "Auckland",
            utc_offset: 43200
        }, {
            id: "Pacific/Fiji",
            name: "Fiji",
            utc_offset: 43200
        }, {
            id: "Asia/Kamchatka",
            name: "Kamchatka",
            utc_offset: 43200
        }, {
            id: "Pacific/Majuro",
            name: "Marshall Is.",
            utc_offset: 43200
        }, {
            id: "Pacific/Auckland",
            name: "Wellington",
            utc_offset: 43200
        }, {
            id: "Pacific/Tongatapu",
            name: "Nuku'alofa",
            utc_offset: 46800
        }]
    },
    837: function(e, t, n) {
        var i = n(1833);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    893: function(e, t) {
        e.exports = {
            ERROR: "banana-bus-error",
            OPEN: "banana-bus-open",
            DATA: "banana-bus-data",
            ACTION: "banana-bus-action",
            DISPOSE: "banana-bus-dispose",
            PUBLISH: "banana-bus-publish",
            PUBLISH_EVENT: "banana-bus-publish-event"
        }
    },
    930: function(e, t, n) {
        (function(t) {
            "use strict";
            var i, r = /^https?:\/\/.+?\//,
                o = /^https?/,
                s = {
                    likes: "favorites",
                    people: "users",
                    sound: "track",
                    sounds: "tracks",
                    "web-profile": "web_profile"
                };
            e.exports = {
                EDGE: "e1/",
                initialize: function(e) {
                    var o = this,
                        s = n(55).get("client_id"),
                        a = n(55).get("public_api_host");
                    t.ajaxSetup({
                        statusCode: e.statusCode,
                        xhr: i,
                        progress: null,
                        timeout: 4e4,
                        beforeSend: function(e, t) {
                            var i = o.isPublicApiEndpoint(t.url),
                                l = o.isApiV2Endpoint(t.url),
                                u = o.isSigninApiEndpoint(t.url);
                            t.crossDomain = !0, (i || l || u) && (n(63).isLoggedIn() && e.setRequestHeader("Authorization", "OAuth " + n(63).getAuthToken()), i && (t.url = a + t.url.replace(r, "")), t.url = n(62).modify(t.url, {
                                query: {
                                    client_id: s,
                                    app_version: n(55).get("app_version")
                                }
                            }))
                        }
                    })
                },
                isPublicApiEndpoint: function(e) {
                    return !o.test(e) || 0 === e.indexOf(n(55).get("public_api_host"))
                },
                isApiV2Endpoint: function(e) {
                    return 0 === e.indexOf(n(55).get("api_v2_host"))
                },
                isSigninApiEndpoint: function(e) {
                    return 0 === e.indexOf("https://sign-in.soundcloud.com/")
                },
                toAPIResource: function(e) {
                    return s[e] || e
                }
            };
            i = function() {
                var e, n = t.ajaxSettings.xhr,
                    i = ["Date", "Content-Type"];
                return e = function() {
                        var e = this,
                            t = e._getAllResponseHeaders();
                        return t || 200 !== this.status ? t : i.map(function(t) {
                            return e.getResponseHeader(t) ? t + ": " + e.getResponseHeader(t) : void 0
                        }).filter(Boolean).join("\n") + "\n"
                    },
                    function() {
                        var t = n();
                        return t._getAllResponseHeaders = t.getAllResponseHeaders, t.getAllResponseHeaders = e, this.progress && t.upload.addEventListener("progress", this.progress.bind(this)), t
                    }
            }()
        }).call(t, n(1))
    },
    931: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = "https://api.appboy.com/users/track";
            e.exports = {
                trackUserEvent: function(e) {
                    if (n(63).isLoggedIn()) {
                        var r = n(55).get("me"),
                            o = r.getUrn(),
                            s = window.btoa(o),
                            a = {
                                app_group_id: "5414e11b-f5cf-4ad7-8f58-7a57ceb8f7e1",
                                events: [{
                                    app_id: "2c0ba43c-af74-488e-9dfd-b87280e02a92",
                                    external_id: s,
                                    time: (new Date).toISOString(),
                                    name: e,
                                    properties: {
                                        creator_display_name: r.get("username"),
                                        creator_user_urn: o
                                    },
                                    _update_existing_only: !0
                                }]
                            };
                        t.ajax({
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json",
                            url: i,
                            data: JSON.stringify(a),
                            statusCode: n(3).mapObject(n(302), function() {
                                return n(3).noop
                            })
                        })
                    }
                }
            }
        }).call(t, n(1))
    },
    932: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            minLength: 0,
            message: n(52).t("[[minLength]] characters min"),
            check: function(e, t) {
                t(e.length >= this.minLength)
            }
        })
    },
    934: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            minValue: 0,
            message: null,
            check: function(e, t) {
                var n = Number(e);
                t(!window.isNaN(n) && n >= this.minValue)
            }
        })
    },
    935: function(e, t, n) {
        "use strict";
        var i = e.exports = n(235).extend();
        n(1330).applyTo(i.prototype)
    },
    936: function(e, t) {
        "use strict";

        function n(e) {
            return (e ^ 16 * Math.random() >> e / 4).toString(16)
        }
        var i = "10000000-1000-4000-8000-100000000000";
        e.exports = {
            generate: function() {
                return i.replace(/[018]/g, n)
            }
        }
    },
    937: function(e, t) {
        "use strict";
        e.exports = {
            getByteFromBuffer: function(e, t) {
                return t >= 0 && t < e.byteLength ? new Uint8Array(e, t, 1)[0] : void 0
            },
            getBlobFromDataURI: function(e) {
                var t, n, i, r, o = [],
                    s = e.split(",");
                for (t = s[0].indexOf("base64") > -1 ? window.atob(s[1]) : decodeURI(s[1]), n = /^.*?:(.*?);/.exec(e)[1], i = 0, r = t.length; r > i; i++) o[i] = t.charCodeAt(i);
                return new window.Blob([new Uint8Array(o)], {
                    type: n
                })
            }
        }
    },
    938: function(e, t, n) {
        "use strict";
        e.exports = {
            bytesToMB: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = t.base,
                    r = void 0 === i ? n(112).windows ? 1024 : 1e3 : i,
                    o = t.digits,
                    s = void 0 === o ? 1 : o,
                    a = t.unit,
                    l = void 0 === a ? "MB" : a,
                    u = e / Math.pow(r, 2);
                return u.toFixed(s) + l
            }
        }
    },
    940: function(e, t, n) {
        "use strict";

        function i(e) {
            return new RegExp("(?:" + s + "|\\s|\\b)" + n(283).regexpEscape(e), "i")
        }
        var r = /\S/,
            o = /\s+/,
            s = "	 	",
            a = function(e) {
                return !e || !r.test(e)
            };
        e.exports = {
            makeFilterGenerator: function(e) {
                var t = e.map(function(e) {
                        if (-1 === e.indexOf(".")) return function(t) {
                            return t[e]
                        };
                        var t = e.split(".");
                        return function(e) {
                            return t.reduce(function(e, t) {
                                return e && e[t]
                            }, e)
                        }
                    }),
                    r = function(e) {
                        return n(445)(s + n(3).compact(t.map(function(t) {
                            return t(e.attributes)
                        })).join(s))
                    };
                return function(e) {
                    if (a(e)) return null;
                    var t = n(3).compact(n(445)(e).split(o)),
                        s = t.map(i);
                    return function(e) {
                        var t = r(e);
                        return s.every(function(e) {
                            return e.test(t)
                        })
                    }
                }
            }
        }
    },
    941: function(e, t, n) {
        "use strict";
        var i;
        i = {
            prefix: "sc-icon",
            size: "small",
            title: !1,
            variation: null
        };
        e.exports = {
            render: function(e) {
                var t, r;
                return e = e || {}, e = n(3).defaults(e, i), t = [e.prefix, [e.prefix, e.type].join("-") + (e.variation ? "-" + e.variation : ""), [e.prefix, e.size].join("-"), e.title ? "sc-ir" : "", e["class"] || ""].filter(Boolean).join(" "), r = e.title ? n(20).Utils.escapeExpression(e.title) : "", '<span class="' + t + '">' + r + "</span>"
            }
        }
    },
    943: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (e.playlist) return {
                resourceType: "playlist",
                resourceId: e.playlist.resource_id,
                resourceUrn: "soundcloud:playlists:" + e.playlist.resource_id
            };
            if ("station" === t.sourceInfo.resourceType) return {
                resourceType: "station",
                resourceId: t.sourceInfo.resourceId,
                resourceUrn: t.sourceInfo.resourceId
            };
            switch (t.sourceInfo.type) {
                case "user-profile":
                case "user-tracks":
                case "user-reposts":
                case "user-likes":
                    return {
                        resourceType: "user",
                        resourceId: t.sourceInfo.resourceId,
                        resourceUrn: "soundcloud:users:" + t.sourceInfo.resourceId
                    };
                default:
                    return null
            }
        }
        var r = e.exports = {
            waitForPlayThreshold: function(e, t) {
                if ("history" === t.sourceInfo.type) return n(56).reject();
                var o = i(e, t);
                return e.isAd() ? n(56).reject() : r.whenSoundPlayedMinimum(e).then(function() {
                    return {
                        soundId: e.id,
                        playContext: o
                    }
                })
            },
            getMinimumPlayTime: function() {
                return 1e3
            },
            whenSoundPlayedMinimum: function(e) {
                function t() {
                    window.clearTimeout(s), o.resolve()
                }

                function i() {
                    window.clearTimeout(s), o.reject()
                }
                var o = n(56).defer(),
                    s = window.setTimeout(function() {
                        e.off(null, t), e.off(null, i), e.isPlaying() ? o.resolve() : o.reject()
                    }, r.getMinimumPlayTime());
                return e.once("finish", t), e.once("pause", i), o.promise()
            }
        }
    },
    944: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).pluck(n(83).countries([e.value]), "value")
        }

        function r(e) {
            return 0 === n(3).difference(o, e).length
        }
        var o = n(83).countryCodes(),
            s = .8,
            a = e.exports = {
                partition: function(e) {
                    var t = [],
                        o = [],
                        l = [];
                    return r(e) ? t.push(a.worldwide()) : n(83).regions().forEach(function(r) {
                        var a = i(r),
                            u = n(3).intersection(a, e),
                            c = n(3).difference(a, e);
                        u.length > a.length * s ? (t = t.concat(r), l = l.concat(c)) : o = o.concat(u)
                    }), {
                        regions: t,
                        countries: o.map(n(83).country),
                        exceptions: l.map(n(83).country)
                    }
                },
                worldwide: function() {
                    return {
                        title: n(52).t("Worldwide"),
                        value: "worldwide"
                    }
                }
            }
    },
    945: function(e, t, n) {
        "use strict";
        e.exports = n(117).extend({
            includeFooter: ".l-sidebar-left",
            css: n(2754),
            template: n(2376)
        })
    },
    946: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["getSourceInfo", "containsSound", "getCurrentSound", "getSoundIndex", "getQueueMetadataAt"]
        })
    },
    947: function(e, t, n) {
        "use strict";

        function i(e, t, i) {
            return this._shuffleEnabled && (n(3).isArray(t) ? t = n(3).shuffle(t) : n(3).isArray(t.collection) && (t.collection = n(3).shuffle(t.collection))), e(t, i)
        }
        e.exports = new(n(21))({
            requirePrototype: n(73).prototype,
            requires: ["unshuffle"],
            _shuffleEnabled: !1,
            isShuffled: function() {
                return this._shuffleEnabled
            },
            toggleShuffle: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !this._shuffleEnabled : arguments[0];
                if (e !== this._shuffleEnabled) {
                    var t = this.models.slice();
                    return e ? t = n(3).shuffle(t) : (t = n(3).sortBy(t, this.unshuffle), this._shuffleEnabled = e), this.reset(t), this._shuffleEnabled = e, this.trigger("shuffled", this, e), this
                }
            },
            around: {
                set: i
            }
        })
    },
    948: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.state,
                n = e.target,
                i = e.targetType,
                r = void 0,
                o = "sound" === i ? "track" : "playlist",
                s = o + "-repost";
            t ? this.add({
                type: s,
                created_at: (new Date).toISOString(),
                track: "track" === o ? {
                    id: n,
                    kind: o
                } : null,
                playlist: "playlist" === o ? {
                    id: n,
                    kind: o
                } : null
            }, {
                at: 0
            }) : (r = this.find(function(e) {
                return e.get("type") === s && e.get(o).id === n
            })) && this.remove(r)
        }
        var r = [{
            emitter: n(74),
            event: "repost",
            getInstance: function(e, t) {
                var n = t.origin;
                return e.options.userId === n
            },
            handler: i
        }];
        e.exports = new(n(21))(n(191).withOptions({
            events: r
        }), {
            override: {
                model: n(316)
            },
            audibleAt: function(e) {
                var t = this.at(e);
                return t && t.getAudible()
            }
        })
    },
    949: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return !(!e || e === r || n(124).isGenreLabel(e))
            }
            var r = "NO_GENRE",
                o = "CUSTOM_GENRE",
                s = function(e) {
                    var t = n(124).genreLabel(e.id);
                    return {
                        id: t.toString(),
                        value: t.toString(),
                        label: t
                    }
                },
                a = {
                    title: {
                        defaultValue: ""
                    },
                    description: {
                        defaultValue: ""
                    },
                    genre: {
                        defaultValue: r,
                        datasource: [{
                            value: r,
                            id: r
                        }],
                        groups: [{
                            links: [{
                                id: r,
                                value: r,
                                label: n(52).t("None")
                            }, {
                                id: o,
                                value: o,
                                label: n(52).t("Custom")
                            }]
                        }, {
                            title: n(52).t("Music"),
                            links: n(124).genres("music").map(s)
                        }, {
                            title: n(52).t("Audio"),
                            links: n(124).genres("audio").map(s)
                        }]
                    },
                    customGenre: {
                        defaultValue: ""
                    },
                    tags: {
                        defaultValue: function() {
                            return []
                        }
                    },
                    artwork_url: {
                        defaultValue: null
                    },
                    sharing: {
                        defaultValue: "public",
                        datasource: [{
                            label: n(52).t("private"),
                            value: "private"
                        }, {
                            label: n(52).t("public"),
                            value: "public"
                        }]
                    },
                    permalink: {
                        defaultValue: ""
                    }
                };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                merge: {
                    requiredModelAttributes: ["title", "description", "tag_list", "artwork_url", "sharing", "permalink"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: a
                    })
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = n(3).pick(this.attributes, "title", "description", "sharing", "permalink", "genre"),
                            s = this.get("customGenre");
                        return i.genre === r ? i.genre = "" : i.genre === o ? i.genre = s : i.genre = n(3).unescape(i.genre), i.tag_list = n(189).serialize(this.get("tags")), n(3).assign(i, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = this.getAudible(),
                            s = e.apply(this, n(3).rest(arguments)),
                            a = n(3).pick(t.attributes, "title", "description", "sharing", "permalink", "artwork_url", "genre");
                        return i(n(3).escape(a.genre)) ? (a.customGenre = a.genre, a.genre = o) : a.genre ? a.genre = n(3).escape(a.genre) : a.genre = r, a.tags = n(189).extract(t.attributes), n(3).assign(a, s)
                    }
                },
                isCustomGenre: function() {
                    return i(this.get("genre"))
                }
            })
        }).call(t, n(1))
    },
    950: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e.get("default_license")
            }

            function r(e) {
                var t = i(e);
                return t && t !== n(130).ALL_RIGHTS
            }

            function o(e, t) {
                t && this.set("shareAlike", !1)
            }

            function s(e, t) {
                t && this.set("nonDerivative", !1)
            }

            function a(e) {
                return "change:" + e
            }

            function l() {
                var e = n(130).serializeCCAttributes(this.attributes);
                this.set("creativeCommonsLicense", e)
            }

            function u() {
                var e = this.get("license");
                return e === n(130).ALL_RIGHTS ? e : this.get("creativeCommonsLicense")
            }
            var c = {
                license: {
                    defaultValue: function() {
                        return r(n(55).get("me")) ? n(130).COMMONS : n(130).ALL_RIGHTS
                    },
                    datasource: [{
                        label: n(52).t("All Rights Reserved"),
                        value: n(130).ALL_RIGHTS
                    }, {
                        label: "Creative Commons",
                        value: n(130).COMMONS
                    }]
                },
                creativeCommonsLicense: {
                    defaultValue: function() {
                        return r(n(55).get("me")) ? i(n(55).get("me")) : n(130).DEFAULT_CC
                    }
                },
                attribution: {
                    defaultValue: !0,
                    readOnly: !0
                },
                nonCommercial: {
                    defaultValue: !0
                },
                nonDerivative: {
                    defaultValue: !1
                },
                shareAlike: {
                    defaultValue: !0
                }
            };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                merge: {
                    requiredModelAttributes: ["license"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: c
                    })
                },
                before: {
                    setup: function() {
                        var e = ["license"].concat(Object.keys(n(130).ccFields));
                        this.listenTo(this, "change:nonDerivative", o).listenTo(this, "change:shareAlike", s).listenTo(this, e.map(a).join(" "), l)
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = {
                                license: u.call(this)
                            };
                        return n(3).assign(i, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = this.getAudible(),
                            i = e.apply(this, n(3).rest(arguments)),
                            r = n(130).parse(t.get("license"));
                        return n(3).assign(r, i)
                    }
                }
            })
        }).call(t, n(1))
    },
    951: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e && n(52).dateTimeHelper.fromString(e)
            }

            function r(e) {
                return e.toISOString()
            }

            function o() {
                var e = this.get("monetizationStart"),
                    t = this.get("monetizationEnd"),
                    n = this.get("monetizationEnabled");
                !n || e || t || (this.set("monetizationEnd", !0), this.set("monetizationEndDate", a(h(), this.defaultDurationDays)))
            }

            function s() {
                var e = this.get("monetizationStart"),
                    t = this.get("monetizationEnd"),
                    n = this.get("monetizationStartDate");
                e && t && n && (this.set("monetizationEndTimezone", this.get("monetizationStartTimezone")), this.set("monetizationEndDate", a(n, this.defaultDurationDays)))
            }

            function a(e, t) {
                return e = new Date(+e), e.setUTCDate(e.getUTCDate() + t), e
            }

            function l(e, t) {
                if (t) {
                    var i = n(83).monetizableCountryCodes().map(function(e) {
                        return {
                            territory: e
                        }
                    });
                    this.set("monetizationRightsholders", i)
                } else this.set("monetizationRightsholders", [])
            }

            function u(e, t) {
                var n = ["monetizationStartTimezone", "monetizationStart", "monetizationStartLocalDate", "monetizationStartDate", "monetizationEndTimezone", "monetizationEnd", "monetizationEndLocalDate", "monetizationEndDate"],
                    i = !t || !p();
                this.setFieldDisabled(n, i)
            }

            function c(e) {
                var t = {
                    start_timestamp: null,
                    start_timezone: null,
                    end_timestamp: null,
                    end_timezone: null,
                    territories: []
                };
                return e.get("monetizationEnabled") && (e.get("monetizationStart") && (t.start_timestamp = r(e.get("monetizationStartDate")), t.start_timezone = e.get("monetizationStartTimezone")), e.get("monetizationEnd") && (t.end_timestamp = r(e.get("monetizationEndDate")), t.end_timezone = e.get("monetizationEndTimezone")), t.territories = n(3).pluck(e.get("monetizationRightsholders"), "territory").concat(e.get("unknownTerritories")).filter(Boolean)), t
            }

            function d(e) {
                var t = e.get("monetizationRightsholders") || [];
                return t.filter(function(e) {
                    var t = e.rightsholder_urn;
                    return !!t
                })
            }

            function h() {
                var e = new Date;
                return e.setHours(0, 0, 0, 0), e
            }

            function p() {
                return n(55).get("me").canEditMonetization() && n(55).get("me").hasMonetization()
            }
            var f = n(3).negate(p),
                g = {
                    monetizationEnabled: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationStartTimezone: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationStart: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationStartLocalDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationStartDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEndTimezone: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEnd: {
                        defaultValue: !1,
                        disabled: f
                    },
                    monetizationEndLocalDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationEndDate: {
                        defaultValue: null,
                        disabled: f
                    },
                    monetizationRightsholders: {
                        defaultValue: null,
                        disabled: f,
                        datasource: function() {
                            return new(n(1232))
                        }
                    },
                    unknownTerritories: {
                        defaultValue: null
                    }
                };
            e.exports = new(n(21))({
                merge: {
                    requiredModelAttributes: ["monetization"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: g,
                        constraints: {
                            monetizationStartDate: [
                                [n(69), {
                                    message: n(52).t("Select a date.")
                                }], n(340), n(459)
                            ],
                            monetizationEndDate: [
                                [n(69), {
                                    message: n(52).t("Select a date.")
                                }], n(340), n(459)
                            ],
                            monetizationRightsholders: [n(1292), n(1301)]
                        },
                        constraintConditions: {
                            monetizationStartDate: {
                                fields: ["monetizationStartDate", "monetizationStart"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("monetizationStartDate").isDirty)
                                }
                            },
                            monetizationEndDate: {
                                fields: ["monetizationEndDate", "monetizationEnd"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("monetizationEndDate").isDirty)
                                }
                            },
                            monetizationRightsholders: {
                                fields: ["monetizationEnabled"],
                                check: function(e) {
                                    return e
                                }
                            }
                        }
                    }), e.constraints.FORM = (e.constraints.FORM || []).concat([
                        [n(530), {
                            nullable: !0,
                            message: n(52).t("Monetization start must happen before monetization end."),
                            fields: ["monetizationStartDate", "monetizationEndDate"]
                        }]
                    ])
                },
                after: {
                    setup: function() {
                        var e = n(55).get("me");
                        this.on("change:monetizationEnabled", u, this), this.forceChange("monetizationEnabled"), this.on("change:monetizationEnabled", l, this), !this.isEdit && e.getCPPOption("default_monetizable") && this.set("monetizationEnabled", !0), this.defaultDurationDays = e.getCPPOption("default_monetization_duration_in_days"), this.defaultDurationDays > 0 && (this.isEdit || (this.on("change:monetizationEnabled", o, this), o.call(this)), this.on("change:monetizationStartDate change:monetizationEnd", s, this))
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, [].slice.call(arguments, 1)),
                            i = n(55).get("me").isCPPEnabled();
                        return i ? n(3).assign(t, {
                            monetization: c(this),
                            rightsholders: d(this)
                        }) : t
                    },
                    getAttributesFromModel: function(e) {
                        var t = e.apply(this, [].slice.call(arguments, 1)),
                            r = this.getAudible().get("monetization"),
                            o = this.getAudible().get("rightsholders") || [],
                            s = n(3).partition(r ? r.territories : [], function(e) {
                                return n(3).contains(n(83).monetizableCountryCodes(), e)
                            }),
                            a = s[0],
                            l = s[1];
                        return r && n(3).assign(t, {
                            monetizationEnabled: !(!r.territories || !r.territories.length),
                            monetizationStart: !!r.start_timestamp,
                            monetizationEnd: !!r.end_timestamp,
                            monetizationStartDate: i(r.start_timestamp),
                            monetizationEndDate: i(r.end_timestamp),
                            monetizationStartTimezone: r.start_timezone,
                            monetizationEndTimezone: r.end_timezone
                        }), this.attributes.monetizationRightsholders = a.map(function(e) {
                            var t = n(3).findWhere(o, {
                                territory: e
                            });
                            return t || {
                                territory: e
                            }
                        }), this.attributes.unknownTerritories = l, t
                    }
                }
            })
        }).call(t, n(1))
    },
    952: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return "playlist-upload" === this.resource_type
            }

            function r() {
                this.setFieldDisabled("publisherIsrc", this.get("publisherIsrcGenerated")), this.setFieldDisabled("publisherIsrcGenerated", !(!this.get("publisherIsrcState") && !this.get("publisherIsrc")))
            }

            function o() {
                return n(55).get("me").isCPPEnabled()
            }
            var s = {
                    publisherArtist: {
                        defaultValue: null
                    },
                    publisherAlbumTitle: {
                        defaultValue: null
                    },
                    publisherContainsMusic: {
                        datasource: [{
                            label: "",
                            value: null
                        }, {
                            label: n(52).t("Yes"),
                            value: !0
                        }, {
                            label: n(52).t("No"),
                            value: !1
                        }],
                        defaultValue: null,
                        disabled: i
                    },
                    publisher: {
                        defaultValue: null
                    },
                    publisherIswc: {
                        defaultValue: null
                    },
                    publisherUpcOrEan: {
                        defaultValue: null
                    },
                    publisherIsrc: {
                        defaultValue: null,
                        disabled: i
                    },
                    publisherIsrcGenerated: {
                        defaultValue: !1,
                        disabled: i
                    },
                    publisherPLine: {
                        defaultValue: null
                    },
                    publisherCLine: {
                        defaultValue: null
                    },
                    publisherExplicit: {
                        datasource: [{
                            label: "",
                            value: null
                        }, {
                            label: n(52).t("Yes"),
                            value: !0
                        }, {
                            label: n(52).t("No"),
                            value: !1
                        }],
                        defaultValue: null
                    },
                    publisherWriterComposer: {
                        defaultValue: null
                    },
                    publisherReleaseTitle: {
                        defaultValue: null
                    }
                },
                a = {
                    artist: "publisherArtist",
                    album_title: "publisherAlbumTitle",
                    contains_music: "publisherContainsMusic",
                    publisher: "publisher",
                    iswc: "publisherIswc",
                    upc_or_ean: "publisherUpcOrEan",
                    isrc: "publisherIsrc",
                    p_line: "publisherPLine",
                    c_line: "publisherCLine",
                    explicit: "publisherExplicit",
                    writer_composer: "publisherWriterComposer",
                    release_title: "publisherReleaseTitle"
                };
            e.exports = new(n(21))({
                requires: ["getAudible", "getAttributesFromModel"],
                requirePrototype: n(79).prototype,
                merge: {
                    requiredModelAttributes: ["publisher_metadata", "isrc_state"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: s,
                        constraints: {
                            publisher: [
                                [n(69), {
                                    message: n(52).t("Enter a publisher.")
                                }]
                            ],
                            publisherIswc: [n(1294)],
                            publisherIsrc: [
                                [n(69), {
                                    message: n(52).t("Enter the ISRC.")
                                }], n(1293)
                            ],
                            publisherUpcOrEan: [n(1289)],
                            publisherArtist: [
                                [n(69), {
                                    message: n(52).t("Enter an artist.")
                                }]
                            ],
                            publisherContainsMusic: [
                                [n(69), {
                                    message: n(52).t("Select an option.")
                                }]
                            ],
                            publisherWriterComposer: [
                                [n(69), {
                                    message: n(52).t("Enter a composer.")
                                }]
                            ]
                        },
                        constraintConditions: {
                            publisherIsrc: {
                                fields: ["monetizationEnabled", "publisherContainsMusic"],
                                constraints: [n(69)],
                                check: function(e, t) {
                                    var i = n(55).get("me"),
                                        r = i.getCPPOption("is_isrc_required_for_audio"),
                                        o = i.hasMonetization();
                                    return e && (t || r) && o
                                }
                            },
                            publisherArtist: {
                                fields: ["publisherContainsMusic", "publisherIsrcGenerated"],
                                check: function(e, t) {
                                    return o() && (e || t)
                                }
                            },
                            publisherContainsMusic: {
                                fields: ["monetizationEnabled"],
                                check: n(3).identity
                            },
                            publisher: {
                                fields: ["publisherContainsMusic"],
                                check: function(e) {
                                    return e && n(55).get("me").hasMonetization()
                                }
                            },
                            publisherWriterComposer: {
                                fields: ["publisherContainsMusic"],
                                check: function(e) {
                                    return o() && e
                                }
                            }
                        },
                        isRequestingIsrcGeneration: function() {
                            return this.get("publisherIsrcGenerated")
                        },
                        isPendingIsrcGeneration: function() {
                            return "pending" === this.get("publisherIsrcState")
                        }
                    })
                },
                after: {
                    setup: function() {
                        !this.isEdit && n(55).get("me").getCPPOption("default_is_audio") && this.set("publisherContainsMusic", !1), this.listenTo(this, "change:publisherIsrcGenerated change:publisherIsrcState change:publisherIsrc", r), r.call(this)
                    },
                    saveCleanup: function() {
                        var e = this.getAudible(),
                            t = e.get("isrc_state"),
                            n = e.get("publisher_metadata");
                        this.set("publisherIsrcState", t), this.set("publisherIsrc", n.isrc)
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                        var o = e.apply(this, i),
                            s = this.isRequestingIsrcGeneration();
                        return o.publisher_metadata = n(3).reduce(a, function(e, t, n) {
                            var i = this.get(t);
                            return "isrc" === n ? e[n] = s ? null : i || null : e[n] = i, e
                        }, {}, this), o.isrc_generate = s, o
                    },
                    getAttributesFromModel: function(e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) i[r - 1] = arguments[r];
                        var o = e.apply(this, i),
                            s = this.getAudible(),
                            l = s.get("publisher_metadata"),
                            u = s.get("isrc_state");
                        return l && n(3).assign(o, n(3).reduce(a, function(e, t, n) {
                            return e[t] = l[n], e
                        }, {})), o.publisherIsrcState = u, o.publisherIsrcGenerated = !!u, o
                    }
                }
            })
        }).call(t, n(1))
    },
    953: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = n(343).typeToApi,
                r = n(343).apiToType,
                o = n(343).defaultReleaseType,
                s = n(343).releaseLabels,
                a = {
                    playlistType: {
                        defaultValue: o,
                        datasource: Object.keys(s).map(function(e) {
                            return {
                                value: e,
                                label: s[e]
                            }
                        })
                    },
                    releaseDate: {
                        defaultValue: null
                    }
                };
            e.exports = new(n(21))({
                requires: ["getAudible"],
                requirePrototype: n(79).prototype,
                merge: {
                    requiredModelAttributes: ["set_type", "release_date"]
                },
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: a,
                        constraints: {
                            releaseDate: [n(340), [n(69), {
                                message: function() {
                                    return {
                                        album: n(52).t("Enter a release date for albums."),
                                        ep: n(52).t("Enter a release date for EPs."),
                                        single: n(52).t("Enter a release date for singles."),
                                        compilation: n(52).t("Enter a release date for compilations.")
                                    }[this.get("playlistType")] || n(52).t("Enter a release date.")
                                }
                            }]]
                        },
                        constraintConditions: {
                            releaseDate: {
                                fields: ["playlistType"],
                                constraints: [n(69)],
                                check: function(e) {
                                    return e !== o
                                }
                            }
                        }
                    })
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            r = this.get("releaseDate");
                        return n(3).assign({
                            set_type: i(this.get("playlistType")),
                            release_date: r && n(52).dateTimeHelper.format(r, "iso")
                        }, t)
                    },
                    getAttributesFromModel: function(e) {
                        var t = e.apply(this, n(3).rest(arguments)),
                            i = this.getAudible();
                        return n(3).assign({
                            playlistType: r(i.get("set_type")),
                            releaseDate: i.get("release_date") && n(52).dateTimeHelper.fromString(i.get("release_date"))
                        }, t)
                    }
                }
            })
        }).call(t, n(1))
    },
    954: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                r.call(this, this.get("scheduledPublic"), this.get("scheduledPrivate"))
            }

            function r(e, t) {
                var n;
                null !== t && null !== e && (n = !e && (t || "public" === this.get("sharing")), this.set("sharing", n ? "public" : "private"))
            }
            var o;
            o = {
                scheduledTimezone: {
                    defaultValue: null
                },
                scheduledPublic: {
                    defaultValue: !1
                },
                scheduledPublicLocalDate: {
                    defaultValue: null
                },
                scheduledPublicDate: {
                    defaultValue: null
                },
                scheduledPrivate: {
                    defaultValue: !1
                },
                scheduledPrivateLocalDate: {
                    defaultValue: null
                },
                scheduledPrivateDate: {
                    defaultValue: null
                }
            };
            e.exports = new(n(21))({
                applyTo: function(e) {
                    t.extend(!0, e, {
                        fields: o,
                        constraints: {
                            scheduledPublicDate: [
                                [n(69), {
                                    message: n(52).t("Select a date.")
                                }], n(340), n(459)
                            ],
                            scheduledPrivateDate: [
                                [n(69), {
                                    message: n(52).t("Select a date.")
                                }], n(340), n(459)
                            ]
                        },
                        constraintConditions: {
                            scheduledPublicDate: {
                                fields: ["scheduledPublicDate", "scheduledPublic"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("scheduledPublicDate").isDirty)
                                }
                            },
                            scheduledPrivateDate: {
                                fields: ["scheduledPrivateDate", "scheduledPrivate"],
                                check: function(e, t) {
                                    return t && (!e || this.getFieldMetadata("scheduledPrivateDate").isDirty)
                                }
                            }
                        }
                    })
                },
                after: {
                    setup: function() {
                        this.listenTo(this, "change:scheduledPublic change:scheduledPrivate", i)
                    }
                },
                getScheduledAttributes: function() {
                    return ["scheduled_public_date", "scheduled_private_date", "scheduled_timezone"]
                },
                getScheduledAttributesToBeSaved: function() {
                    var e, t = n(55).get("me");
                    return t.hasAnyScheduling() && (e = {}, this.get("scheduledPublic") ? e.scheduled_public_date = +this.get("scheduledPublicDate") : this.get("scheduledPublic") === !1 && (e.scheduled_public_date = null), this.get("scheduledPublic") || this.get("scheduledPrivate") ? (e.scheduled_timezone = this.get("scheduledTimezone"), e.scheduled_public_timezone = this.get("scheduledTimezone")) : (this.get("scheduledPublic") === !1 || this.get("scheduledPrivate") === !1) && (e.scheduled_timezone = null, e.scheduled_public_timezone = null), t.hasFullScheduling() && (this.get("scheduledPrivate") ? e.scheduled_private_date = +this.get("scheduledPrivateDate") : this.get("scheduledPrivate") === !1 && (e.scheduled_private_date = null))), e
                }
            })
        }).call(t, n(1))
    },
    955: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this;
                this.trigger("generatingPermalink", !0), r.call(this, n(283).permalink(this.get("title"))).always(function(t) {
                    t = t || "", e.set("permalink", t), e.trigger("generatingPermalink", !1)
                })
            }

            function r(e, t, i) {
                var o = this;
                return t = t || n(56).defer(), i = i || 0, this._permalinkConstraint.check(e, function(n) {
                    n ? t.resolve(e) : a > i ? r.call(o, o.increasePermalink(e), t, ++i) : t.reject()
                }), t
            }

            function o() {
                var e = this._sound || this._playlist;
                this.get("networks").forEach(function(t) {
                    var i = new(n(477))({
                        id: t
                    });
                    s(["upload", "share", i.get("type"), e.id, e.resource_type])
                })
            }
            var s = n(59).trackV0Click,
                a = 10,
                l = {
                    networks: {
                        defaultValue: function() {
                            return []
                        }
                    },
                    apiStreamable: {
                        defaultValue: !0
                    },
                    embeddableByAll: {
                        defaultValue: !0
                    },
                    domainLocking: {
                        defaultValue: !1
                    },
                    downloadable: {
                        defaultValue: !1,
                        disabled: function() {
                            return !n(55).get("me").canEditDownloadable()
                        }
                    },
                    feedable: {
                        defaultValue: !1,
                        disabled: function() {
                            return !n(55).get("me").canEditRssEnabled()
                        }
                    },
                    offlineSyncEnabled: {
                        defaultValue: !0
                    },
                    buyLink: {
                        defaultValue: ""
                    },
                    buyTitle: {
                        defaultValue: n(52).t("Buy").toString()
                    },
                    commentable: {
                        defaultValue: !0
                    },
                    publicComments: {
                        defaultValue: !0
                    },
                    stats: {
                        defaultValue: !0
                    },
                    geoblocking: {
                        defaultValue: !1
                    },
                    availableCountries: {
                        defaultValue: function() {
                            return n(83).countryCodes()
                        }
                    },
                    labelName: {
                        defaultValue: null
                    },
                    releaseDate: {
                        defaultValue: null
                    }
                },
                u = {
                    save: {
                        label: n(52).t("Save"),
                        pendingLabel: n(52).t("Saving"),
                        action: "save"
                    },
                    cancel: {
                        label: n(52).t("Cancel"),
                        action: "cancel"
                    }
                },
                c = {
                    buyLink: [
                        [n(301), {
                            strict: !1
                        }]
                    ],
                    buyTitle: [
                        [n(525)]
                    ]
                },
                d = {
                    buyTitle: {
                        fields: [],
                        check: function() {
                            return n(55).get("me").getPerk("customBuyTitle")
                        }
                    }
                },
                h = {
                    "default": "save",
                    cancel: function() {
                        n(460).confirm(n(52).t("Are you sure you want to stop your upload? Any unsaved changes will be lost.")).done(this.cancel.bind(this))
                    }
                };
            e.exports = new(n(21))(n(949), n(950), n(260).withOptions({
                attr: "title"
            }), n(540), {
                applyTo: function(e) {
                    e.buttons = t.extend(!0, {}, u, e.buttons || {}), e.fields = t.extend(!0, {}, l, e.fields || {}), e.constraints = t.extend(!0, {}, c, e.constraints || {}), e.constraintConditions = t.extend(!0, {}, d, e.constraintConditions || {}), e.actions = t.extend(!0, {}, h, e.actions || {})
                },
                _permalinkConstraint: null,
                isEdit: !1,
                requires: ["cancel", "getAudible", "createAudible", "unsetAudible", "getAttributesToBeSaved", "getAttributesFromModel", "onAudibleSaved"],
                before: {
                    initialize: function() {
                        var e = {
                            type: "playlist-upload" === this.resource_type ? "playlist" : "sound",
                            getResource: function() {
                                return this.getAudible()
                            }
                        };
                        this._permalinkConstraint = new(n(456))(e, this)
                    },
                    setup: function() {
                        var e = this;
                        this.on("imageDataChanged", this.markFieldsDirty.bind(this, "artwork_url")), this.on("change:commentable", function(e, t) {
                            t || this.set("publicComments", !1)
                        }, this), this.on("change:publicComments", function(e, t) {
                            t && this.set("commentable", !0)
                        }, this), this.listenTo(this, "change:geoblocking", function(t, i) {
                            i || e.set("availableCountries", n(83).countryCodes())
                        })
                    }
                },
                after: {
                    setup: function(e, t) {
                        this.isEdit || (this.set("feedable", !!n(55).get("me").get("default_tracks_feedable")), t.inPlaylist || this.on("change:title", i, this))
                    }
                },
                around: {
                    getAttributesToBeSaved: function(e) {
                        var t = this.get("buyTitle"),
                            i = this.get("buyLink"),
                            r = {};
                        return this.get("networks") && "public" === this.get("sharing") && (r.shared_to = {
                            connections: this.get("networks").map(function(e) {
                                return {
                                    id: e
                                }
                            })
                        }), r.embeddable = this.get("embeddableByAll"), r.purchase_url = i ? n(62).normalize(i) : null, r.purchase_title = t === this.getFieldMetadata("buyTitle").defaultValue ? null : t, r.reveal_stats = this.get("stats"), r.label_name = this.get("labelName"), r.release_date = this.get("releaseDate") && n(52).dateTimeHelper.format(this.get("releaseDate"), "iso"), r.geo_blockings = n(83).complement(this.get("availableCountries")), n(3).assign(r, e())
                    }
                },
                saveEdits: function() {
                    var e = this.getAudibleWrapper(),
                        t = e.model;
                    return t.set(this.getAttributesToBeSaved()), t.save().then(e.afterSave).then(this.saveAudibleImage.bind(this, t)).then(this.onAudibleSaved.bind(this), this.onSaveFailed.bind(this)).done(this.trigger.bind(this, "saved"))
                },
                preSaveCheck: function() {
                    return this.fileStatusCheck()
                },
                getAudibleWrapper: function() {
                    var e, t = this.getAudible();
                    return t ? {
                        model: t,
                        afterSave: function() {}
                    } : (e = this.createAudible(), e.on("destroy", function() {
                        this.unsetAudible(), this.cancel()
                    }, this), {
                        model: e,
                        afterSave: o.bind(this)
                    })
                },
                saveCleanup: function(e) {
                    this.markFieldsClean(Object.keys(this.getAttributesFromModel()))
                },
                setToFailed: function(e, t) {
                    var n = "playlist-upload" === this.resource_type ? "playlist" : "track";
                    t && "string" != typeof t && (t = this.extractErrorMessage(t)), this.set({
                        errorMessage: this.getErrorMessageTemplate(e, n, t)
                    })
                },
                increasePermalink: function(e) {
                    var t = /-(\d+)$/,
                        n = e.match(t);
                    return n ? e.replace(t, function(e, t) {
                        return t = parseInt(t, 10) + 1, "-" + t
                    }) : e + "-1"
                }
            })
        }).call(t, n(1))
    },
    956: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this.getFileUpload();
                e && e.set("hasBeenSaved", !0), this._fileSaveableDeferred = null, this.set("fileUploadSaved", !0), s.call(this)
            }

            function r() {
                this.markFieldsClean("fileUpload"), this.unsetFileUpload()
            }

            function o(e, t) {
                var i = this.getAudible(),
                    r = this.isEdit;
                switch (t) {
                    case n(93).TRANSCODING:
                        r || this._fileSaveableDeferred.resolve();
                        break;
                    case n(93).FAILED:
                        e.previous("status") === n(93).TRANSCODING ? (i && i.set("state", n(66).states.FAILED), this.setToFailed("transcode")) : this.setToFailed("upload"), this.set("fileUploadFailed", !0);
                        break;
                    case n(93).COMPLETE:
                        i && i.set("state", n(66).states.FINISHED), r && this._fileSaveableDeferred.resolve(), s.call(this)
                }
            }

            function s() {
                var e = this.get("fileUploadSaved"),
                    t = this.getFileUpload(),
                    i = t && t.get("status") === n(93).COMPLETE;
                e && i && this.removeUpload()
            }
            var a = {
                fileUploadSaved: {
                    defaultValue: !1
                },
                fileUploadFailed: {
                    defaultValue: !1
                },
                fileUpload: {
                    defaultValue: null
                }
            };
            e.exports = new(n(21))({
                requires: ["getAudible", "isEdit", "onAudibleSaved"],
                _fileSaveableDeferred: null,
                applyTo: function(e) {
                    e.fields = t.extend(!0, {}, a, e.fields || {})
                },
                after: {
                    onAudibleSaved: function() {
                        var e = this.getAudible(),
                            t = this.getFileUpload();
                        e && this.isEdit && t && n(66).prototype.createAudio.apply(e), t && (n(57).trigger("upload_funnel:save"), n(59).trackUploadFunnel("save"), i.call(this))
                    }
                },
                hasUnsavedUpload: function() {
                    var e = this.getFileUpload();
                    return e && e.get("status") !== n(93).FAILED
                },
                setFileUpload: function(e) {
                    this.set({
                        fileUpload: e,
                        fileUploadFailed: !1,
                        fileUploadSaved: !1
                    }), this.markFieldsDirty("fileUpload"), e.hold(), this._fileSaveableDeferred = n(56).defer(), this.listenTo(e, "change:status", o).listenTo(e, "destroy", r)
                },
                unsetFileUpload: function() {
                    var e = this.getAudible();
                    e && e.set("state", n(66).states.FINISHED), this.set("fileUpload", null), this._fileSaveableDeferred = null
                },
                getFileUpload: function() {
                    return this.get("fileUpload")
                },
                removeUpload: function() {
                    var e = this.getFileUpload();
                    e && (e.release(), e.remove())
                },
                getUploadAttributes: function() {
                    var e = this.isEdit,
                        t = this.getFileUpload(),
                        n = {};
                    return t && (n[e ? "replacing_uid" : "uid"] = t.getS3Key(), n[e ? "replacing_original_filename" : "original_filename"] = t.getFileName()), n
                },
                fileStatusCheck: function() {
                    var e = this.getFileUpload(),
                        t = this.isEdit ? n(93).COMPLETE : n(93).TRANSCODING;
                    if (!e) return n(56).resolve();
                    var i = e.get("status");
                    return t > i && i !== n(93).FAILED ? this._fileSaveableDeferred : n(56).resolve()
                }
            })
        }).call(t, n(1))
    },
    957: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                this.has(e) && this.set(e, Math.max(0, this.get(e) + (t ? 1 : -1)))
            }
            e.exports = new(n(21))(n(946), n(1326), n(962), {
                requirePrototype: n(65).prototype,
                requires: ["getPrevSound", "getCurrentSound", "getNextSound", "getFirstSound", "getLastSound", "getSounds", "getNumSounds", "play", "pause", "isPlaying", "isProcessing", "isEditing", "isPublic", "isPrivate", "isNowPlaying", "duration", "isGeoblocked", "isMonetizable", "isManagedByFeeds", "hasScheduledPrivacy"],
                before: {
                    setup: function() {
                        this.listenTo(this, "destroy", this.pause)
                    }
                },
                around: {
                    destroy: function(e) {
                        var t = this,
                            i = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return i.statusCode = n(3).defaults({
                            202: function() {
                                n(57).trigger("audible:delete-already-queued", t)
                            }
                        }, i.statusCode), e(n(3).clone(i))
                    }
                },
                getSourceInfo: function() {
                    return {
                        type: "single",
                        resourceId: this.resource_id,
                        resourceType: this.resource_type
                    }
                },
                getQueueMetadataAt: function(e) {
                    return {
                        sourceInfo: this.getSourceInfo(),
                        queryPosition: 0,
                        originalModel: this
                    }
                },
                onLike: function(e) {
                    i.call(this, "likes_count", e.state)
                },
                onRepost: function(e) {
                    i.call(this, "reposts_count", e.state)
                },
                onComment: function(e) {
                    i.call(this, "comment_count", e.state)
                },
                onPlayRegistered: function() {
                    n(55).get("me").owns(this) || i.call(this, "playback_count", !0)
                },
                getShareURL: function(e) {
                    var t, i, r, o = !(!e || !e.permalinkUrl),
                        s = o ? e.permalinkUrl : this.get("permalink_url");
                    return r = this.playlist && this.playlist.id, t = {
                        query: {
                            "in": r ? n(62).parse(this.playlist.getShareURL()).relative.substr(1) : null
                        }
                    }, o || (t.scheme = "https"), e && e.time && (t.fragment = "t=" + e.time), i = this.isPrivate() && !/\/s-[a-zA-Z0-9]{5}$/.test(s), n(62).stringify(t, s + (i ? "/" + this.get("secret_token") : ""))
                },
                resetSecretLink: function() {
                    var e = this,
                        i = n(62).stringify({
                            path: "/" + n(62).joinPath([this.getUrn(), "secret_token", "reset"])
                        }, n(55).get("api_v2_host"));
                    return t.ajax({
                        url: i,
                        type: "POST",
                        dataType: "json"
                    }).done(function(t) {
                        e.set({
                            secret_token: t.secret_token,
                            permalink_url: t.permalink_url
                        })
                    })
                },
                getPermalink: function() {
                    return this.get("permalink_url").replace(/^https?:.+?\w\//, "/")
                },
                isDisabled: function() {
                    return !!this.get("disabled_reason")
                },
                isBlacklisted: function() {
                    return "blacklisted" === this.get("disabled_reason")
                },
                isOverQuota: function() {
                    return "quota" === this.get("disabled_reason")
                },
                toggle: function(e) {
                    this[this.isPlaying() ? "pause" : "play"](e)
                },
                isPaused: function() {
                    return !this.isPlaying()
                }
            })
        }).call(t, n(1))
    },
    958: function(e, t, n) {
        "use strict";

        function i(e) {
            return e ? n(62).stringify({
                query: e
            }) : "default"
        }

        function r(e) {
            return !this.id || e.jqAjax || e.batch === !1 || "private" === this.get("sharing")
        }

        function o(e, t, n, i, r) {
            this.batchEndpoint = e, this.batchParams = t, this.maxQueueSize = n, this.flushInterval = i, this.queue = {}, this.timer = null, this.paramName = r
        }
        var s = 50,
            a = 50,
            l = function() {
                return null
            };
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                var n = t.batchEndpoint,
                    u = t.flushInterval,
                    c = void 0 === u ? s : u,
                    d = t.maxQueueSize,
                    h = void 0 === d ? a : d,
                    p = t.getBatchParams,
                    f = void 0 === p ? l : p,
                    g = t.paramName,
                    m = void 0 === g ? "ids" : g,
                    v = {};
                this.around(e, {
                    fetch: function(e, t) {
                        var s = this;
                        if (t || (t = {}), r.call(this, t)) return e(t);
                        if (this._requests || (this._requests = {}), !this._requests[this.id]) {
                            var a = f(this) || null,
                                l = i(a),
                                u = v[l] || (v[l] = new o(n, a, h, c, m));
                            this._requests[this.id] = u.add(this, t).always(function() {
                                delete s._requests[s.id]
                            })
                        }
                        return this._requests[this.id]
                    }
                })
            }
        });
        o.prototype = {
            getIds: function() {
                var e = n(3).reduce(this.queue, function(e, t, n) {
                    return "pending" === t.deferred.state() && (e[n] = t), e
                }, {});
                return Object.keys(e).sort()
            },
            add: function(e, t) {
                var i = this.queue[e.id] = this.queue[e.id] || {
                    callsigs: [],
                    deferred: n(56).defer()
                };
                return i.callsigs.push({
                    model: e,
                    options: t
                }), this.timer || (this.timer = window.setTimeout(this.flush.bind(this), this.flushInterval)), Object.keys(this.queue).length === this.maxQueueSize && this.flush(), i.deferred
            },
            flush: function() {
                var e, t = this.getIds(),
                    i = this.queue;
                window.clearTimeout(this.timer), this.timer = null, this.queue = {}, t.length < 1 || n(23).callEndpoint(this.batchEndpoint, null, n(3).assign((e = {}, e[this.paramName] = t.join(","), e), this.batchParams)).then(function(e) {
                    var r = e.body,
                        o = n(3).map(n(3).pluck(r, "id"), String);
                    r.forEach(function(e) {
                        var t = e.id,
                            n = i[t],
                            r = Date.now();
                        n && (n.callsigs.forEach(function(t) {
                            var n = t.model;
                            n.lastFetchTime = r, n.set(n.parse(e), t.options)
                        }), n.deferred.resolve())
                    }), n(3).difference(t, o).forEach(function(e) {
                        var t = i[e];
                        t && t.callsigs.forEach(function(e) {
                            e.model.trigger("error", e.model, new(n(531)), e.options)
                        })
                    }), n(3).each(i, function(e) {
                        e.deferred.reject()
                    })
                })
            }
        }
    },
    959: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).some(this.ownerAttributes, function(t) {
                return e.indexOf(t) > -1
            })
        }
        e.exports = new(n(21))({
            requires: ["ownerAttributes", "ownerUrl", "attrExists"],
            around: {
                fetch: function(e, t) {
                    var r, o = t && t.attrs,
                        s = n(3).clone(t),
                        a = n(55).get("me").owns(this);
                    return r = o && !this.attrExists(o) && i.call(this, o), a && r && (s.url = n(62).modify(this.ownerUrl(), {
                        query: {
                            representation: "owner"
                        }
                    }), s.batch = !1), e.call(this, s)
                }
            }
        })
    },
    961: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return "sound" !== e.resource_type
            }

            function r(e) {
                return e && e.attrs && e.attrs.indexOf("visuals") > -1
            }

            function o(e) {
                var t = e && e.attrs;
                return !t || t.length > 1 || "visuals" !== t[0]
            }

            function s() {
                return this.getEndpointUrl("visuals", {}, {
                    urn: this.getUrn()
                })
            }

            function a(e) {
                var t = e.visuals || this.get("visuals") || null;
                t && e.tracking && (t.tracking = e.tracking), this.set("visuals", t)
            }
            var l, u = 1240,
                c = 5e3;
            e.exports = new(n(21))({
                _lastVisualsFetch: null,
                around: {
                    fetch: function(e, u) {
                        var d, h, p = this,
                            f = [],
                            g = i(this);
                        return l || (l = new(n(148))({
                            giveUp: 1
                        })), (!g || o(u)) && f.push(e(u)), g && r(u) && (this._lastVisualsFetch || this.attrExists("visuals") ? h = this._lastVisualsFetch : (this._lastVisualsFetch = h = n(56).defer(), l.enabled ? t.ajax({
                            dataType: "json",
                            url: s.call(this),
                            timeout: c
                        }).done(a.bind(this)).always(function(e, t, n) {
                            "timeout" === n && l.failed(), p.set("visuals", p.get("visuals") || null), h.resolve()
                        }) : (this.set("visuals", null), h.resolve())), h && f.push(h)), d = n(56).defer(), n(56).settled(f).done(function(e) {
                            d.resolve.apply(null, e)
                        }).fail(d.reject), d
                    }
                },
                getVisual: function() {
                    var e = this.get("visuals");
                    return e && e.visuals && (e = e.visuals), e && e[0] || {}
                },
                getVisualURL: function() {
                    var e = u * (n(112).isHiDPI ? 2 : 1);
                    return n(87).setFormat(this.getVisual().visual_url, e)
                },
                hasVisuals: function() {
                    return !n(3).isEmpty(this.get("visuals"))
                }
            })
        }).call(t, n(1))
    },
    962: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.replace(/^http:/, "https:")
        }
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                e.getTypes = n(3).constant(t && t.types || {})
            },
            defaults: {
                getShareURL: function(e) {
                    return this.getShareAttributes(e).permalink_url
                }
            },
            getShareAttributes: function(e) {
                var t = n(3).clone(this.attributes),
                    r = e && e.type,
                    o = r && this.getTypes()[r];
                return o && n(3).each(o, function(e, n) {
                    t[n] = e.replace(/\:([a-zA-Z0-9_-]+)/g, function(e, n) {
                        return t[n]
                    })
                }), t.permalink_url = i(t.permalink_url), t.uri = i(t.uri), "private" === t.sharing && !t.secret_uri && t.secret_token && (t.secret_uri = n(62).modify(t.uri, {
                    query: {
                        secret_token: t.secret_token
                    }
                })), t
            }
        })
    },
    963: function(e, t, n) {
        "use strict";

        function i(e) {
            return e._sdb = n(3).uniqueId("sdb"), e
        }

        function r(e) {
            return e._sdb
        }

        function o(e, t) {
            return e.hashFn ? e.hashFn(t) : t.id
        }

        function s(e, t, i) {
            var o = e[i];
            return o && r(t) && (e[i] = n(3).isArray(o) ? o.map(a.bind(null, t)) : a(t, o)), e
        }

        function a(e, t) {
            var i, s = r(e),
                a = o(e, t);
            return a ? (u[s] = u[s] || {}, (i = u[s][a]) ? n(3).assign(i, e.normalize ? e.normalize(t) : t) : i = u[s][a] = t, i) : t
        }

        function l(e, t) {
            var n = r(e),
                i = o(e, t);
            i && u[n] && delete u[n][i]
        }
        var u = {};
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = e.constructor;
                this.before(t, {
                    onCleanup: function(e) {
                        l(this.constructor, e.attributes)
                    }
                }), i(t)
            },
            after: {
                initialize: function() {
                    this.attributes = a(this.constructor, this.attributes)
                }
            },
            around: {
                set: function(e, t, i, r) {
                    var o, l;
                    return "object" == typeof t ? (o = t, r = i) : (o = {})[t] = i, o ? (this.submodelMap && (o = n(3).reduce(this.submodelMap, s, n(3).clone(o))), l = this.constructor, !this.resource_id && l.hashFn(o) && (o = a(l, o)), e(o, r)) : this
                }
            }
        })
    },
    964: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))(n(3).assign({
            around: {
                set: function(e, t, n, i) {
                    var r, o, s = i && i.silent;
                    return s || (o = this.get(t)), r = e(t, n, i), s || o === n || this.trigger(t, {
                        prev: o,
                        current: n
                    }), r
                },
                unset: function(e, t, n) {
                    var i, r, o = n && n.silent;
                    return o || (r = this.get(t)), i = e(t, n), o || void 0 === r || this.trigger(t, {
                        prev: r,
                        current: void 0
                    }), i
                },
                reset: function(e, t) {
                    var i, r, o;
                    return t && t.silent || (o = this.reduce(function(e, t, n) {
                        return t !== r && (e[n] = t), e
                    }, {}, this)), i = e(t), o && n(3).each(o, function(e, t) {
                        this.trigger(t, {
                            prev: e,
                            current: void 0
                        })
                    }, this), i
                }
            }
        }, n(22).Events))
    },
    970: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.sound;
            return t.isPlayable()
        }

        function r(e) {
            for (var t = e.length; t--;)
                if (e.at(t).sound.isPublic()) return e.at(t)
        }
        var o = n(22).Events,
            s = n(138).all,
            a = n(138).none,
            l = n(138).one,
            u = [a, l, s];
        e.exports = function() {
            function e(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                ee && (_e.stopListening(ee.stream),
                    ee.dispose()), t || y(), ee = e, oe = t, te = 0, e && (_e.getState("shuffle") && e.stream.shuffle(), _e.listenTo(ee.stream, "data", p).listenTo(ee.stream, "end", f)), C()
            }

            function t(e) {
                Z && (_e.stopListening(Z.stream), Z.dispose()), Z = e, e && (ve.cache = {}, _e.listenTo(Z.stream, "data", h))
            }

            function c(e) {
                if (e && ce) {
                    var t = Y.map(function(e) {
                            var t = e.index;
                            return t
                        }),
                        i = Math.max.apply(Math, [0].concat(t)) + 1,
                        r = ce(e.sound) || {},
                        o = r.source,
                        s = r.restoreUrl;
                    return o ? n(556)(o, null, s, e.layoutInfo, 1, i) : void 0
                }
            }

            function d() {
                oe || _e.pullNext(Math.max(0, O - (Y.length - Q) + 1)), _e.pullPrev(Math.max(0, O - Q))
            }

            function h(e) {
                0 === --ne && Z.stream.pause(), Y.unshift(e, {
                    prevStream: !0
                }), ae && _e.playItem(e, ae)
            }

            function p(e) {
                0 === --te && ee.stream.pause(), le ? (Y.unshift(e), le = !1) : Y.push(e), se && _e.playItem(e, se), R()
            }

            function f() {
                le = !1
            }

            function g(e, t, n) {
                var i = n.index;
                Q >= i && --Q, C()
            }

            function m(e) {
                var t = Y.indexOf(e);
                Q >= t && ++Q, C()
            }

            function v(e, t) {
                t instanceof n(531) && E(e.sound)
            }

            function _(e) {
                if (!n(172).isCasting()) {
                    var t = function() {
                        me(), n(943).waitForPlayThreshold(e, _e.getCurrentMetadata()).then(function(e) {
                            var t = e.soundId,
                                n = e.playContext;
                            pe.addToPlayHistory(t, n, !0)
                        })
                    };
                    e.on("time", t), me(), me = function() {
                        e.off("time", t), me = n(3).noop
                    }
                }
            }

            function y() {
                var e = Y.slice(0, Q + 1).concat(n(3).reject(Y.slice(Q + 1), "explicit"));
                Y.remove(e)
            }

            function b(e) {
                _e.listenTo(e, "finish", x).listenTo(e, "change:playable", S).listenTo(e, "time", k).listenToOnce(e, "time", function() {
                    ue = !1
                })
            }

            function w(e) {
                e && _e.stopListening(e)
            }

            function x() {
                T()
            }

            function k(e) {
                var t = _e.getCurrentSound();
                t && t.currentTime() >= t.duration() - V && (R(), _e.stopListening(t, "time", k))
            }

            function S() {
                var e = _e.getCurrentSound();
                e && !e.isPlayable() && (w(e), T())
            }

            function T() {
                var e = _e.getCurrentSound(),
                    t = e.playlist;
                _e.playNext({
                    userInitiated: !1
                }), t && e === t.getLastSound() && t.rewind(), e.seek(0)
            }

            function E(e) {
                var t = Y.filter({
                    sound: e
                });
                Y.remove(t)
            }

            function A() {
                _e.toggleState("globalPlayLock", he.isBlockedFromSkipping())
            }

            function C() {
                var e = I(),
                    t = !(!e && !_e.getCurrentQueueItem());
                _e.toggleState("hasNext", e).toggleState("hasCurrent", t)
            }

            function I() {
                return Q < Y.length - 1 || !!ee && !ee.stream.isEnded() || de === s && Y.length > 1 || de !== s && !!r(Y)
            }

            function M(e) {
                var t = e.sound;
                if (t.isPlaying()) {
                    var n = function() {
                            t.off("pause", n), window.clearTimeout(i)
                        },
                        i = window.setTimeout(function() {
                            n(), _e.playNext()
                        }, B);
                    t.on("pause", n)
                }
            }

            function D() {
                Y.each(function(e, t) {
                    e.order = t
                });
                var e = Q + 1,
                    t = Y.slice(0, e),
                    i = n(3).shuffle(Y.slice(e));
                Y.reset(t.concat(i)), ee && ee.stream.shuffle()
            }

            function P() {
                for (var e = _e.getCurrentQueueItem(), t = Q; t >= 0 && Y.at(t).explicit && null == Y.at(t).order;) t--;
                var i = Y.at(t),
                    r = Y.reduce(function(e, t) {
                        return null != t.order ? e.ordered.push(t) : t.explicit ? e.explicit.push(t) : t.index < 0 ? e.prev.push(t) : e.next.push(t), e
                    }, {
                        prev: [],
                        ordered: [],
                        explicit: [],
                        next: []
                    });
                r.next = r.next.concat(ee.stream.unshuffle());
                var o = [].concat(n(3).sortBy(r.prev, "index"), n(3).sortBy(r.ordered, "order"), n(3).sortBy(r.next, "index")),
                    s = o.indexOf(i),
                    a = n(3).sortBy(r.explicit, "index");
                o.splice.apply(o, [s + 1, 0].concat(a)), Q = o.indexOf(e), Y.reset(o)
            }

            function F(e) {
                for (var t = Q + 1; t < Y.length && Y.at(t) && Y.at(t).explicit;) t++;
                Y.add(e, {
                    at: t
                })
            }

            function R() {
                for (var e, t = _e.getCurrentQueueItem(), n = 1; null != (e = Y.at(Q + n)) && !e.sound.isPlayable();) n++;
                if (e) {
                    var i = t.sound && t.sound.audio && t.sound.audio.controller;
                    if (i && i.getCapabilities().canControlBuffer) {
                        var r = i.getMaxBufferLength(),
                            o = i.getLoadedPosition(),
                            s = i.getCurrentPosition();
                        o >= i.getDuration() || o - s >= Math.min(G, r) ? e.enablePreloading() : e.disablePreloading()
                    }
                }
            }
            var L = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                N = L.prefetchDistance,
                O = void 0 === N ? 20 : N,
                $ = L.playNextOnErrorDelay,
                B = void 0 === $ ? 2500 : $,
                U = L.rewindThreshold,
                z = void 0 === U ? 5e3 : U,
                H = L.randomBufferSize,
                j = void 0 === H ? 100 : H,
                q = L.prefetchAudioCheckPoint,
                V = void 0 === q ? 1e4 : q,
                W = L.stableBufferDuration,
                G = void 0 === W ? 1e4 : W,
                Y = new(n(1340)),
                K = 0,
                Q = -1,
                X = -(1 / 0),
                J = void 0,
                Z = void 0,
                ee = void 0,
                te = 0,
                ne = 0,
                ie = !1,
                re = void 0,
                oe = !1,
                se = void 0,
                ae = void 0,
                le = !1,
                ue = !1,
                ce = void 0,
                de = u[0],
                he = void 0,
                pe = void 0,
                fe = void 0,
                ge = void 0,
                me = n(3).noop,
                ve = n(3).memoize(function() {
                    var e = n(56).defer();
                    return !Z || Z.stream.isEnded() ? e.resolve() : (_e.listenTo(Z.stream, "end", e.resolve), _e.pullPrev(1 / 0)), e.promise()
                }),
                _e = n(3).assign({}, o, {
                    states: {
                        globalPlayLock: {
                            initial: !1
                        },
                        hasNext: {
                            initial: !1
                        },
                        hasCurrent: {
                            initial: !1
                        },
                        shuffle: {
                            setup: D,
                            teardown: P
                        },
                        hasFallback: {
                            initial: !1
                        },
                        fallbackEnabled: {
                            initial: !0
                        }
                    },
                    initialize: function(e, t, n) {
                        var i = arguments.length <= 3 || void 0 === arguments[3] ? function() {} : arguments[3];
                        he = e, pe = t, fe = n, _e.listenTo(he, "state:isInRequiredListenPeriod", A).listenTo(he, "state:isAllowedToSkipImmediately", A).listenTo(pe, "destroy", function(e) {
                            var t = e.targetType,
                                n = e.targetModel;
                            "sound" === t && E.call(this, n)
                        }).listenTo(fe, "geoBlocked", M), ce = i, ge = window.setInterval(R, 500)
                    },
                    dispose: function() {
                        window.clearInterval(ge), t(null), e(null), Y.release(), _e.stopListening(), _e.off()
                    },
                    playSource: function(i, r, o, s) {
                        var a = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4];
                        if (!_e.getState("globalPlayLock")) {
                            var l = _e.getCurrentQueueItem(),
                                u = l && !l.explicit && r === l.sound && _e.isSourceActive(i);
                            if (u) return void _e.playCurrent(a);
                            _e.pauseCurrent(), _e.toggleState("fallbackEnabled", !0);
                            var c = n(3).result(i, "getPlaySource", i),
                                d = n(556)(c, r, o, s, j),
                                h = d.prev,
                                p = d.next;
                            e(p), t(h), _e.trigger("queueReset"), se = a, le = !0, ue = !1, _e.pullNext(1)
                        }
                    },
                    toggleSource: function(e, t, n) {
                        var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
                        _e.isSourcePlaying(e) ? _e.pauseCurrent(i) : _e.playSource(e, null, t, n, i)
                    },
                    playCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = _e.getCurrentQueueItem();
                        if (t && t.sound.isPlayable()) {
                            var i = function() {
                                    _(t.sound), t.sound.play(e), n(354).addSound(t.sound, e)
                                },
                                r = he.isUserAdConsumer() && !n(172).isCasting();
                            t.enablePreloading(), r ? (he.whenAdFinished(t.sound, e).always(i), he.prefetchAudioAd(t.sound)) : i()
                        } else ue ? _e.playPrev(e) : _e.playNext(e)
                    },
                    pauseCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        ae = null, se = null;
                        var t = _e.getCurrentSound();
                        t && (t.pause(), 0 === e.seek && t.seek(0))
                    },
                    toggleCurrent: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            t = _e.getCurrentSound();
                        if (_e.getState("globalPlayLock")) {
                            var n = he.isUserAdConsumer() && he.getCurrentSound();
                            return void(n && n.toggle(e))
                        }
                        if (t && he.isUserAdConsumer()) {
                            var n = he.getCurrentSound();
                            if (n) return void n.toggle(e)
                        }
                        t && t.isPlaying() ? _e.pauseCurrent(e) : _e.playCurrent(e)
                    },
                    playItem: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        if (he.isUserAdConsumer() && he.getCurrentSound()) return void he.skip();
                        var n = _e.getCurrentQueueItem(),
                            i = e !== n,
                            r = e.sound;
                        i && (n && n.disablePreloading(), _e.pauseCurrent(t), n && w(n.sound), Q = Y.indexOf(e), C(), b(r)), _e.playCurrent(t), i && (_e.trigger("change:currentSound", {
                            current: r
                        }), d()), R()
                    },
                    playNext: function() {
                        var r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        r = n(3).assign({
                            seek: 0
                        }, r), ue = !1;
                        var o = de === s,
                            a = _e.getCurrentQueueItem();
                        return a && de === l && !r.userInitiated ? void _e.playItem(a, r) : Q < Y.length - 1 ? void _e.playItem(Y.at(Q + 1), r) : ee ? ee.stream.isEnded() || oe && o || oe && !_e.getState("fallbackEnabled") ? o ? void ve().then(function() {
                            var e = Y.find(i);
                            e && _e.playItem(e, r)
                        }) : void(_e.getState("fallbackEnabled") && _e.playNextFromFallback(r)) : (se = r, void _e.pullNext(1)) : void(J && (e(J.next), t(J.prev), J = null, _e.playNext(r)))
                    },
                    playPrev: function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        he.isUserAdConsumer() && he.getCurrentSound() && he.skip(), e = n(3).assign({
                            seek: 0
                        }, e);
                        var t = _e.getCurrentSound(),
                            i = de === s && Z && Z.stream.isEnded() && ee && ee.stream.isEnded(),
                            r = Q > 0 ? Y.at(Q - 1) : i ? Y.last() : null,
                            o = Z && !Z.stream.isEnded();
                        return t && (!r && !o || t.currentTime() > z) ? (t.isPlayable() && (t.seek(0), t.isPlaying() || t.play(e)), void(ue = !1)) : (ue = !0, void(r ? _e.playItem(r, e) : o && (ae = e, _e.pullPrev(1))))
                    },
                    playNextFromFallback: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                        if (ee.stream.isEnded()) {
                            var n = void 0,
                                i = r(Y);
                            i && (n = c(i)) && (e(n.next, !0), n.prev.dispose(), se = t, _e.pullNext(1))
                        } else oe && (se = t, _e.pullNext(1))
                    },
                    removeItem: function(e) {
                        var t = _e.getCurrentQueueItem();
                        t !== e && Y.remove(e)
                    },
                    clearQueue: function() {
                        var i = _e.getCurrentQueueItem();
                        t(null), e(n(972), !0), _e.trigger("queueReset"), i && Y.reset([i]), Q = Y.length - 1
                    },
                    replaceQueue: function(i) {
                        t(null), e(n(972), !0), Y.reset(i)
                    },
                    addExplicitQueueItem: function(e, t, i, r) {
                        var o = e.getSoundIndex(t),
                            s = e.getQueueMetadataAt(o),
                            a = s.originalModel,
                            l = s.queryPosition,
                            u = s.sourceInfo,
                            c = new(n(204))({}, {
                                layoutInfo: r,
                                originalModel: a,
                                queryPosition: l,
                                restoreUrl: i,
                                sound: t,
                                sourceInfo: u,
                                explicit: !0,
                                index: K++
                            });
                        c.release(), F(c)
                    },
                    cloneQueueItemToExplicit: function(e) {
                        var t = e.clone({
                            explicit: !0,
                            index: K++,
                            order: null
                        });
                        t.release(), F(t)
                    },
                    toggleShuffle: function() {
                        _e.toggleState("shuffle")
                    },
                    setInitialSource: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                            i = arguments[2],
                            r = arguments[3];
                        if (ie && !re && (re = window.setTimeout(function() {
                                ie = !1, re = null, _e.playCurrent({
                                    userInitiated: !1
                                })
                            }, 400)), !Z && t > X) {
                            J && J.dispose(), X = t;
                            var o = !!e.playlist,
                                s = o ? e.playlist : e,
                                a = o ? e : null;
                            return J = n(556)(s, a, i, r)
                        }
                    },
                    unsetInitialSource: function(e) {
                        J === e && (X = -(1 / 0), J.dispose(), J = null)
                    },
                    isSourcePlaying: function(e) {
                        var t = _e.getCurrentSound();
                        return !!t && t.isPlaying() && _e.isSourceActive(e)
                    },
                    isSourceActive: function(e) {
                        var t = _e.getCurrentQueueItem();
                        return !!t && n(3).isEqual(t.sourceInfo, e.getSourceInfo())
                    },
                    getQueue: function() {
                        return Y
                    },
                    getCurrentQueueItem: function() {
                        return Y.at(Q)
                    },
                    getCurrentMetadata: function() {
                        var e = he.isUserAdConsumer() ? he.getCurrentSound() : null,
                            t = _e.getCurrentQueueItem();
                        if (e) {
                            var n = t.clone({
                                sound: e,
                                originalModel: e,
                                restoreUrl: null
                            });
                            return n.release(), n
                        }
                        return t
                    },
                    hasNextSound: function() {
                        return _e.getState("hasNext")
                    },
                    hasCurrentSound: function() {
                        return _e.getState("hasCurrent")
                    },
                    getCurrentSound: function() {
                        var e = _e.getCurrentQueueItem();
                        return e && e.sound
                    },
                    hasMoreAhead: function() {
                        return !!ee && !ee.stream.isEnded()
                    },
                    hasMoreBehind: function() {
                        return !!Z && !Z.stream.isEnded()
                    },
                    hasFallback: function() {
                        return oe || ee && ee.stream.isEnded() && !!r(Y)
                    },
                    enableAutoplay: function() {
                        ee ? _e.playCurrent({
                            userInitiated: !1
                        }) : ie = !0
                    },
                    setFallbackSource: function() {},
                    restoreState: function() {
                        var e = _e.getCurrentQueueItem();
                        if (e) {
                            var t = n(55).get("router"),
                                i = e.restoreUrl,
                                r = e.sound,
                                o = r.playlist || r;
                            i ? (t.navigate(i, {
                                trigger: !0
                            }), n(55).set("restoreToSound", o.resource_type + o.resource_id)) : t.navigateToRoute("listen", [r], {
                                trigger: !0
                            })
                        }
                    },
                    cycleRepeatMode: function() {
                        if (n(172).isCasting()) _e.setRepeatMode(de === a ? l : a);
                        else {
                            var e = u.indexOf(de);
                            _e.setRepeatMode(u[(e + 1) % u.length])
                        }
                    },
                    setRepeatMode: function(e) {
                        e !== de && (de = e, _e.trigger("change:repeatMode", de), C())
                    },
                    pullNext: function(e) {
                        ee && !ee.stream.isEnded() && (te = Math.max(te, e), te > 0 && ee.stream.resume())
                    },
                    pullPrev: function(e) {
                        Z && !Z.stream.isEnded() && (ne = Math.max(ne, e), ne > 0 && Z.stream.resume())
                    },
                    getQueueState: function() {
                        return {
                            currentIndex: Q,
                            repeatMode: de
                        }
                    }
                });
            return n(349).applyTo(_e), _e.listenTo(Y, "remove", g).listenTo(Y, "add", m).listenTo(Y, "error", v), _e
        }
    },
    971: function(e, t, n) {
        "use strict";

        function i() {
            V.toggleState("globalPlayLock", O.isBlockedFromSkipping())
        }

        function r() {
            this.layoutInfo = l()
        }

        function o() {
            S.call(this, this.source).done(function(e) {
                e && e.isPlayable() && O.prefetchAudioAd(e)
            })
        }

        function s(e, t) {
            e && e === this.getCurrentSound() && (e.playlist && e.playlist.setCurrentSound(e), e.isPlayable() ? (V._addToPlayHistory(e), e.play(t), n(354).addSound(e, t), e.playlist && e === this.source && (k.call(this, e.playlist, t && t.restoreUrl), T.call(this, 0))) : y.call(this, e))
        }

        function a(e) {
            var t, n, i = e.sound;
            i.isPlaying() && (n = function() {
                i.off("pause", n), window.clearTimeout(t)
            }, t = window.setTimeout(function() {
                n(), V.playNext()
            }, j), i.on("pause", n))
        }

        function l() {
            var e = n(55).get("router").getLayoutInfo();
            return {
                args: e.args,
                layoutName: e.layoutName,
                url: window.location.href.replace(/^https?:\/\/[^\/]+\//, "")
            }
        }

        function u() {
            var e = this.source;
            e && (c(e) && (this.listenTo(e, "add", d).listenTo(e, "remove", h).listenTo(e, "reset", p), e.isPopulated() || e.fetch()), e.hold())
        }

        function c(e) {
            return e instanceof n(73)
        }

        function d(e, t) {
            var n = t.indexOf(e);
            n <= this.sourceCursor && T.call(this, this.sourceCursor + 1)
        }

        function h(e, t, n) {
            n.index <= this.sourceCursor && T.call(this, this.sourceCursor - 1)
        }

        function p() {
            T.call(this, -1)
        }

        function f(e) {
            e.sound.release()
        }

        function g(e) {
            e.sound.hold()
        }

        function m(e, t) {
            t[e]("finish", v, this)[e]("change:playable", _, this)
        }

        function v(e) {
            b.call(this, e.sound)
        }

        function _() {
            var e = this.getCurrentSound();
            e && !e.isPlayable() && y.call(this, e)
        }

        function y(e) {
            m.call(this, "off", e), b.call(this, e), P.call(this, e)
        }

        function b(e) {
            this.playNext({
                userInitiated: !1
            }), e.playlist && e === e.playlist.getLastSound() && e.playlist.rewind(), e.seek(0)
        }

        function w() {
            if (!this.FallbackSource) return null;
            var e = this.getCurrentSound();
            return e && e.isPublic() ? new this.FallbackSource(null, {
                resource_id: e.id,
                resource_type: e.resource_type
            }) : null
        }

        function x(e, t) {
            return c(t) ? e > -1 && e < t.length ? (t.audibleAt || t.at).call(t, e) : void 0 : 0 === e ? t : void 0
        }

        function k(e, t, n) {
            var i = this,
                r = this.source;
            if (r === e) return !1;
            var o = e && e.getAudioCursor ? e.getAudioCursor() : -1;
            return this.source = e, this.restoreUrl = t, u.call(this), T.call(this, o), r && (this.stopListening(r), r.release()), n && n.silent || this.trigger("change:source", this.source, r), this._autoplay && !this._autoplayTimeout && (this._autoplayTimeout = window.setTimeout(function() {
                i._autoplay = !1, i._autoplayTimeout = null, i.playCurrent({
                    userInitiated: !1
                })
            }, 400)), !0
        }

        function S(e, t, i, r, o) {
            var s, a, l, u, d, h, p = this,
                f = i || n(56).defer(),
                g = null == r ? H : r;
            if (t = t || {}, d = {
                    source: e
                }, "pending" === f.state()) {
                if (this._fetchDeferred && this._fetchDeferred !== f && this._fetchDeferred.reject(), this._fetchDeferred || (this._fetchDeferred = f, f.always(function() {
                        p._fetchDeferred = null
                    })), !t.userInitiated && this._repeatMode === N && (s = this.getCurrentSound())) s.isPlayable() ? (d.historyCursor = this.historyCursor, f.resolve(s, d)) : f.reject();
                else if (this.historyCursor < this.history.length - 1) d.historyCursor = this.historyCursor + 1, f.resolve(this.history[this.historyCursor + 1].sound, d);
                else if (this.queue.length) d.queueIndex = 0, f.resolve(this.queue[0], d);
                else if (e && c(e)) {
                    for (h = -1, l = this.source === e ? this.sourceCursor : 0; !a && l + ++h < e.length;)
                        if (a = l + h > -1 && x(l + h, e)) {
                            if (R(a)) break;
                            a = h > 0 || o ? a.getFirstSound() : a.getNextSound()
                        }
                    a && R(a) ? a.fetch().fail(f.reject).done(function() {
                        S.call(p, e, t, f, r, o)
                    }) : a ? (d.sourceCursor = l + h, d.initialFallback = !!o, f.resolve(a, d)) : !e.isFullyPopulated() && g ? e.fetch({
                        add: !0,
                        remove: !1
                    }).fail(f.reject).done(function() {
                        S.call(p, e, t, f, g - 1)
                    }) : e.isLooping && e.length ? (T.call(this, -1), S.call(this, e, t, f, g, o)) : (u = w.call(this)) && u !== e ? S.call(this, u, t, f, g, !0) : f.resolve(void 0)
                } else e ? (a = "playlist" === e.resource_type && e.getState("repeating") && !e.getNextSound() ? e.getFirstSound() : -1 === this.sourceCursor ? e.getFirstSound() : e.getNextSound(), a ? (d.sourceCursor = 0, f.resolve(a, d)) : S.call(this, w.call(this), t, f, g, !0)) : f.reject();
                return f
            }
        }

        function T(e) {
            "number" == typeof e ? this.sourceCursor = e : c(this.source) ? this.sourceCursor = C(e, this.source) : this.sourceCursor = 0, this.source && this.source.setAudioCursor && this.source.setAudioCursor(this.sourceCursor)
        }

        function E(e) {
            var t, n = this.getCurrentSound();
            this.historyCursor !== e && (n && m.call(this, "off", n), this.historyCursor = e, t = this.getCurrentSound(), t && m.call(this, "on", t), this.trigger("change:currentSound", {
                prev: n,
                current: t
            }))
        }

        function A(e, t, i, r, o) {
            return t instanceof A ? t : (this.sound = e, this.layoutInfo = n(3).clone(i), this.sourceInfo = t && t.getSourceInfo() || {}, this.queryPosition = o, this.restoreUrl = r, void(this.originalModel = t && t.at && t.at(V.sourceCursor) || e))
        }

        function C(e, t) {
            var n = -1;
            return c(t) ? (t.any(function(i, r) {
                var o = x(r, t);
                return o && (o === e || o.getSoundIndex(e) > -1) ? (n = r, !0) : void 0
            }), n) : t === e ? 0 : t.getSoundIndex(e)
        }

        function I(e) {
            P.call(this, e), F.call(this, e), M.call(this, e)
        }

        function M(e) {
            var t = this.source;
            t && (c(t) ? (t.remove(e), e.release()) : "sound" === t.resource_type && (t.release(), this.unsetInitialSource(t)))
        }

        function D(e, t, n) {
            for (var i = e.length; i--;) e[i].sound === t && (f(e[i]), n && (this.historyCursor > i || this.historyCursor === i && i === e.length - 1) && this.historyCursor--, e.splice(i, 1))
        }

        function P(e) {
            D.call(this, this.history, e, !0)
        }

        function F(e) {
            D.call(this, this.queue, e)
        }

        function R(e) {
            return e && e.hasDataForPlay && !e.hasDataForPlay()
        }
        var L = n(138).none,
            N = n(138).one,
            O = void 0,
            $ = void 0,
            B = void 0,
            U = 5e3,
            z = 3,
            H = 3,
            j = 2500,
            q = [L, N],
            V = e.exports = n(3).assign({}, n(22).Events, {
                states: {
                    globalPlayLock: {
                        initial: !1
                    }
                },
                history: [],
                historyCursor: -1,
                source: null,
                sourceCursor: -1,
                initialSourcePriority: -(1 / 0),
                queue: [],
                layoutInfo: {},
                restoreUrl: null,
                FallbackSource: null,
                _fetchDeferred: null,
                _autoplay: !1,
                _autoplayTimeout: null,
                _cancelHistorySoundTimer: n(3).noop,
                _repeatMode: q[0],
                initialize: function(e, t, n) {
                    O = e, $ = t, B = n, V.listenTo(O, "state:isInRequiredListenPeriod", i).listenTo(O, "state:isAllowedToSkipImmediately", i).listenTo($, "destroy", function(e) {
                        var t = e.targetType,
                            n = e.targetModel;
                        "sound" === t && I.call(this, n)
                    }).listenTo(B, "geoBlocked", a)
                },
                setInitialSource: function(e, t, n) {
                    t = t || 0, -1 === this.sourceCursor && t > this.initialSourcePriority && (this.initialSourcePriority = t, r.call(this), k.call(this, e, n))
                },
                unsetInitialSource: function(e) {
                    -1 === this.sourceCursor && this.source === e && (k.call(this, null), this.initialSourcePriority = -(1 / 0))
                },
                hasNextSound: function() {
                    var e = this.source,
                        t = this.getCurrentSound(),
                        n = c(e);
                    return !!(this.historyCursor < this.history.length - 1 || this.queue.length > 0 || e && n && (!e.isFullyPopulated() || e.length && this.sourceCursor < e.length - 1) || e && !n && (this.sourceCursor < 0 ? e.getFirstSound() : e.getNextSound()) || t && t.isPublic() && this.FallbackSource)
                },
                isSourcePlaying: function(e) {
                    var t = V.getCurrentSound();
                    return !!t && t.isPlaying() && V.isSourceActive(e)
                },
                isSourceActive: function(e) {
                    var t = V.getCurrentMetadata(),
                        i = t && t.sourceInfo;
                    return n(3).isEqual(i, e.getSourceInfo())
                },
                hasCurrentSound: function() {
                    return !(!this.getCurrentSound() && !this.hasNextSound())
                },
                getCurrentSound: function() {
                    var e = this.history[this.historyCursor];
                    return e && e.sound
                },
                toggleShuffle: n(3).noop,
                _getPrevSound: function() {
                    var e = this.history[this.historyCursor - 1];
                    return e && e.sound
                },
                _addToHistory: function(e, t) {
                    var i, r, o, s, a, l = e !== this.getCurrentSound();
                    i = this.historyCursor + (l ? 1 : 0), r = n(55).get("playHistoryLength"), a = this.source && this.source.getQueryPosition ? this.source.getQueryPosition() : this.sourceCursor, s = new A(e, t, this.layoutInfo, this.restoreUrl, a), this.history.splice(i).forEach(f), this.history.push(s), g(s), o = Math.max(0, this.history.length - r), o && (this.history.splice(0, o).forEach(f), this.historyCursor -= o), E.call(this, this.history.length - 1)
                },
                dispose: function() {
                    var e = this.getCurrentSound();
                    e && e.pause(), this.history.forEach(function(e) {
                        e.sound.release()
                    }), E.call(this, -1), this.history = [], this.queue.forEach(function(e) {
                        e.release()
                    }), this.queue = [], this.layoutInfo = {}, this._fetchDeferred && this._fetchDeferred.reject(), k.call(this, null), this.FallbackSource = this.fallbackRestoreFn = this.restoreUrl = null, this.initialSourcePriority = -(1 / 0), this._repeatMode = q[0], this.off(), this.stopListening()
                },
                enableAutoplay: function() {
                    this.source ? this.playCurrent({
                        userInitiated: !1
                    }) : this._autoplay = !0
                },
                playSource: function(e, t, n, i, o) {
                    if (!V.getState("globalPlayLock")) {
                        !t && e.getCurrentSound && (t = e.getCurrentSound()), r.call(this);
                        var s = this.getCurrentSound() !== t,
                            a = k.call(this, e, n, {
                                silent: !0
                            });
                        T.call(this, t), s && this.pauseCurrent(o), t && (a || s) && this._addToHistory(t, e), a && this.trigger("change:source", e), t ? this.playCurrent(o) : this.playNext(o)
                    }
                },
                playCurrent: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = this.getCurrentSound();
                    t ? O.isUserAdConsumer() ? (O.whenAdFinished(t, e).always(s.bind(this, t, e)), o.call(this)) : s.call(this, t, e) : (r.call(this), V.playNext(e))
                },
                pauseCurrent: function(e) {
                    var t = this.getCurrentSound();
                    t && t.pause(e)
                },
                toggleSource: function(e, t, n, i) {
                    var o = this.getCurrentSound();
                    this.source === e && this.sourceCursor > -1 && o && o.isPlaying() ? this.pauseCurrent(i) : (r.call(this), k.call(this, e, t) ? this.playNext(i) : this._fetchDeferred || this.playCurrent(i))
                },
                toggleCurrent: function(e) {
                    var t, n = this.getCurrentSound();
                    if (V.getState("globalPlayLock")) return t = O.isUserAdConsumer() && O.getCurrentSound(), void(t && t.toggle(e));
                    if (n) {
                        if (O.isUserAdConsumer() && (t = O.getCurrentSound())) return void t.toggle(e);
                        n.toggle(e)
                    } else this.playCurrent(e)
                },
                playNext: function(e) {
                    var t = this;
                    return e = n(3).assign({
                        seek: 0,
                        isRepeating: this._repeatMode === N
                    }, e), O.isUserAdConsumer() && O.getCurrentSound() ? (O.skip(), n(56).resolve()) : (this.pauseCurrent(), S.call(this, this.source, e).done(function(n, i) {
                        if (i) {
                            var r, o, s = i.source;
                            r = t.FallbackSource && s instanceof t.FallbackSource ? t.fallbackRestoreFn(t.getCurrentSound()) : e.restoreUrl, k.call(t, s, r, e), n && (null != i.historyCursor ? E.call(t, i.historyCursor) : (null != i.queueIndex ? o = t.queue.shift() : null != i.sourceCursor && (T.call(t, i.sourceCursor), o = t.source, c(s) && i.sourceCursor >= s.length - z && !s.isFullyPopulated() && s.fetch({
                                add: !0,
                                remove: !1
                            })), t._addToHistory(n, o)), t.playCurrent(e), i.initialFallback && t.trigger("fallback"))
                        }
                    }))
                },
                playPrev: function(e) {
                    var t = this.getCurrentSound(),
                        i = this._getPrevSound();
                    O.isUserAdConsumer() && O.getCurrentSound() && O.skip(), e = n(3).assign({
                        seek: 0
                    }, e), !i || t && t.currentTime() > U ? (t.seek(0), t.isPlaying() || t.play(e)) : i && (this.pauseCurrent(), E.call(this, this.historyCursor - 1), this.playCurrent(e))
                },
                setFallbackSource: function(e, t) {
                    this.FallbackSource = e, this.fallbackRestoreFn = t
                },
                restoreState: function() {
                    var e, t = this._getCurrentRestoreUrl(),
                        i = this.getCurrentSound(),
                        r = n(55).get("router");
                    t ? (e = i.playlist || i, r.navigate(t, {
                        trigger: !0
                    }), n(55).set("restoreToSound", e.resource_type + e.resource_id)) : i && r.navigateToRoute("listen", [i], {
                        trigger: !0
                    })
                },
                cycleRepeatMode: function() {
                    var e = q.indexOf(this._repeatMode);
                    this._repeatMode = q[(e + 1) % q.length], this.trigger("change:repeatMode", this._repeatMode)
                },
                _getCurrentRestoreUrl: function() {
                    var e = this.history[this.historyCursor];
                    return e && e.restoreUrl || ""
                },
                getCurrentMetadata: function() {
                    var e = O.isUserAdConsumer() ? O.getCurrentSound() : null;
                    return e ? new A(e, this.source, l(), null) : this.history[this.historyCursor]
                },
                _addToPlayHistory: function(e) {
                    var t = this,
                        i = function() {
                            t._cancelHistorySoundTimer(), n(943).waitForPlayThreshold(e, V.getCurrentMetadata()).then(function(e) {
                                var t = e.soundId,
                                    n = e.playContext;
                                $.addToPlayHistory(t, n, !0)
                            })
                        };
                    e.on("time", i), this._cancelHistorySoundTimer(), this._cancelHistorySoundTimer = function() {
                        e.off("time", i), t._cancelHistorySoundTimer = n(3).noop
                    }
                }
            });
        n(349).applyTo(V)
    },
    972: function(e, t, n) {
        "use strict";
        var i = n(22).Events,
            r = n(3).noop,
            o = n(3).assign,
            s = n(3).constant;
        e.exports = {
            stream: o({
                shuffle: r,
                unshuffle: r,
                pause: r,
                peek: r,
                resume: r,
                isEnded: s(!0)
            }, i),
            dispose: r
        }
    },
    973: function(e, t, n) {
        "use strict";
        var i;
        i = {
            add: !0,
            remove: !0,
            merge: !0
        };
        e.exports = n(73).extend({
            model: null,
            setup: n(3).noop,
            _prepareModel: function(e) {
                return e
            },
            _removeReference: n(3).noop,
            parse: function(e) {
                return e && e.collection || e
            },
            indexOfEquivalentModel: function(e, t, n) {
                return (t || this.models).indexOf(e, n)
            },
            compareModels: function(e, t) {
                return e === t
            },
            toJSON: function() {
                return this.models.slice()
            },
            set: function(e, t) {
                var r, o, s, a, l = this.indexOfEquivalentModel.bind(this);
                for (t = n(3).defaults({}, t, i), e = this.parse(e, t), e = n(3).isArray(e) ? e.slice() : [e], r = e.length; r--;) s = e[r], (l(s, e.slice(r + 1)) > -1 || l(s) > -1) && e.splice(r, 1);
                return this.length += e.length, o = null !== t.at && t.at !== a ? t.at : this.models.length, Array.prototype.splice.apply(this.models, [o, 0].concat(e)), this.comparator && this.sort({
                    silent: !0
                }), t.silent || e.forEach(function(e) {
                    this.trigger("add", e, this, t)
                }, this), this
            },
            remove: function(e, t) {
                var i, r, o, s;
                for (t || (t = {}), e = n(3).isArray(e) ? e.slice() : [e], i = 0, r = e.length; r > i; i++) s = e[i], o = this.indexOf(s), o >= 0 && (this.models.splice(o, 1), this.length--, t.silent || (t.index = o, this.trigger("remove", s, this, t)));
                return this
            }
        })
    },
    974: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            canvas: null,
            context: null,
            isDirty: !1,
            isAnimating: !1,
            requires: ["draw"],
            applyTo: function(e) {
                e.defaults = n(3).assign({
                    scale: 1,
                    $eventEl: null
                }, e.defaults)
            },
            after: {
                draw: function() {
                    this.setDirty(this.isAnimating)
                },
                onResize: function() {
                    this.setDirty(!0)
                }
            },
            before: {
                setup: function(e) {
                    e.$eventEl || (e.$eventEl = this.$el), this.canvas = this.el, this.context = this.el.getContext("2d")
                }
            },
            override: {
                render: function() {
                    this.hasData() ? this.setDirty(!0) : (this.setDirty(!1), this.fetchData())
                },
                destroyElement: n(3).noop
            },
            defaults: {
                onResize: n(3).noop
            },
            setDirty: function(e) {
                (this.isDirty = e) && this.trigger("dirty")
            }
        })
    },
    975: function(e, t, n) {
        "use strict";

        function i(e) {
            return a(e, n(150), {
                resource_id: e.resource_id
            })
        }

        function r(e, t) {
            var i = a(e, n(150), n(3).extend({
                resource_id: e.resource_id
            }, t));
            return n(1310).getDataFromFile(e.get("file")).done(function(e) {
                e.artwork_data && i.setImageFile(n(937).getBlobFromDataURI(e.artwork_data), "id3"), i.set(n(3).omit(e, "artwork_data"))
            }), i
        }

        function o(e, t) {
            var i = a(e, n(357), {
                    resource_id: e.resource_id
                }),
                o = e.getUploads().map(function(e) {
                    return r(e, t)
                });
            return i.addSoundForms(o), l(i), i
        }

        function s(e, t) {
            var n = new e(null, t);
            return n.release(), n
        }

        function a(e, t, n) {
            var i = s(t, n);
            return i.setFileUpload(e), i
        }

        function l(e) {
            var t = new(n(325));
            t.add(e, {
                at: 0
            }), t.release()
        }
        var u;
        e.exports = {
            addFiles: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    s = t.toPlaylistUploadId,
                    a = t.replaceSoundUploadId;
                u || (u = new(n(220)));
                var c = !s && e.length > 1 && n(564).getUploadAsPlaylist() && n(55).get("me").canBulkUploadAsPlaylist(),
                    d = void 0,
                    h = {};
                if (c) {
                    var p = u.addFiles(e, {
                        asPlaylist: c
                    });
                    h.inPlaylist = c, d = u.addUploadsAsAggregate(p)
                } else if (s) {
                    var p = u.addFiles(e, {
                        toPlaylistUploadId: s
                    });
                    d = u.addUploadsToAggregate(p, s)
                } else a ? u.addFiles(e, {
                    replaceSoundUploadId: a
                }).forEach(i) : u.addFiles(e).map(r).forEach(l);
                d && o(d, h)
            }
        }
    },
    976: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return 400 === e.status && "RequestTimeout" === r(e.responseXML)
            }

            function r(e) {
                return t(e).find("Error Code").text()
            }

            function o(e, t) {
                function i() {
                    s = e().done(u.resolve.bind(u)).progress(u.notify).fail(o)
                }

                function r(e) {
                    l.options.giveUp = 0 === e.status ? 1 / 0 : a
                }

                function o(e) {
                    0 === e.status || t(e) ? (r(e), l.failed()) : u.reject()
                }
                var s, a = 3,
                    l = new(n(148))({
                        giveUp: a
                    }),
                    u = n(56).defer(),
                    c = u.promise();
                return l.on("giveup", u.reject), l.on("enabled", i), u.always(function() {
                    l.dispose()
                }), i(), c.abort = function() {
                    s.abort(), u.reject()
                }, c
            }

            function s(e) {
                return function() {
                    var t = n(56).defer(),
                        i = t.promise(),
                        r = t.notify,
                        o = n(3).toArray(arguments).concat(r),
                        s = e.apply(this, o);
                    return s.then(t.resolve, t.reject), i.abort = s.abort, i
                }
            }
            e.exports = n(162).extend({
                upload: function(e) {
                    var t, n, r, a, l;
                    return t = this.presign(e), n = s(this.uploadFile), l = this.resolveWith, a = t.then(function(t) {
                        return r = o(function() {
                            return n(e, t)
                        }, i), r.then(function() {
                            return l(t)
                        })
                    }), a.abort = function() {
                        t.abort(), r && r.abort()
                    }, a
                },
                presign: function() {
                    return t.ajax({
                        url: "upload/policy",
                        dataType: "json",
                        cache: !1
                    })
                },
                uploadFile: function(e, i, r) {
                    var o, s;
                    return s = n(62).stringify({
                        scheme: "https",
                        host: i.bucket + ".s3.amazonaws.com"
                    }), o = new window.FormData, n(3).each(i, function(e, t) {
                        o.append(t, e)
                    }), o.append("file", e), t.ajax({
                        url: s,
                        type: "POST",
                        data: o,
                        processData: !1,
                        contentType: !1,
                        dataType: "xml",
                        headers: {
                            "x-amz-storage-class": "STANDARD_IA",
                            "x-amz-server-side-encryption": "AES256"
                        },
                        timeout: 0,
                        progress: r
                    })
                },
                resolveWith: function(e) {
                    return e.key
                }
            })
        }).call(t, n(1))
    },
    1064: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && (e.attributes || e)
        }

        function r(e, t) {
            var i = "visuals" === e ? u.availableVisualsSizes : u.availableSizes,
                r = n(3).find(i, function(e) {
                    return e[0] >= t
                }) || n(3).last(i);
            return "t20x20" === r[1] && "artworks" === e ? "tiny" : r[1]
        }

        function o(e) {
            if (e) {
                var t, n;
                for (t = 0, n = e.length; n > t; ++t)
                    if (!u.isDefaultImage(e[t].artwork_url)) return e[t].artwork_url
            }
            return null
        }

        function s(e) {
            u.imageUrlRegex.lastIndex = 0;
            var t, n = u.imageUrlRegex.exec(e);
            return n && (t = n[3].charCodeAt(0) % 4 + 1, 1 !== t && (e = e.replace("//i1.", "//i" + t + "."))), e
        }
        var a = /^http:/,
            l = /default/,
            u = e.exports = {
                tagOptions: {
                    whitelist: ["alt", "class", "height", "itemprop", "src", "title", "width"]
                },
                availableSizes: [
                    [20, "t20x20"],
                    [50, "t50x50"],
                    [120, "t120x120"],
                    [200, "t200x200"],
                    [500, "t500x500"]
                ],
                availableVisualsSizes: [
                    [1240, "t1240x260"],
                    [2480, "t2480x520"]
                ],
                imageUrlRegex: /^.*\/(\w+)-([-a-zA-Z0-9]+)-([a-z0-9]+)\.(jpg|png|gif).*$/i,
                markup: function(e, t) {
                    var i = this.getMarkupAttrs(e, t);
                    return n(282).getMarkup("img", i, this.tagOptions)
                },
                getMarkupAttrs: function(e, t) {
                    return e = i(e), n(3).assign({
                        src: this.urlFrom(e, t.size),
                        width: t.size,
                        height: t.size,
                        alt: this.getAltText(e)
                    }, t)
                },
                urlFrom: function(e, t, n) {
                    e = i(e);
                    var r = e && (e.artwork_url || e.avatar_url || o(e.tracks) || e.user && e.user.avatar_url);
                    return r = r ? r.replace(a, "https:") : "", this.setFormat(r, t, n)
                },
                setFormat: function(e, t, n) {
                    if (this.isDefaultImage(e)) return "";
                    u.imageUrlRegex.lastIndex = 0;
                    var i = u.imageUrlRegex.exec(e);
                    if (i) {
                        var o = i[1],
                            a = i[3],
                            l = r(o, t);
                        l && (e = e.replace(a, l)), n && (e = s(e))
                    }
                    return e
                },
                isDefaultImage: function(e) {
                    return !e || l.test(e)
                },
                getAltText: function(e) {
                    return e = i(e), e ? e.username ? n(406).get(e, !0) + " avatar" : n(406).get(e) : ""
                }
            }
    },
    1141: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-one-column">\n  <div class="l-main">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    1175: function(e, t, n) {
        var i = n(835),
            r = n(25),
            o = n(1145),
            s = "trinity-broadcast",
            a = e.exports = i({}, r, {
                broadcast: function(e, t) {
                    o.set(s, {
                        event: e,
                        data: t,
                        now: Date.now()
                    })
                }
            });
        o.on(s, function(e) {
            var t = e.event,
                n = e.data;
            t && a.trigger(t, n)
        })
    },
    1176: function(e, t) {
        function n(e) {
            return e.toUpperCase().replace(/-/g, "_")
        }
        var i = 0,
            r = {
                STOP: "stop",
                HEARTBEAT: "heartbeat"
            },
            o = {
                PLAY: "play"
            };
        e.exports = {
            events: o,
            actions: r,
            createMessage: function(e) {
                return {
                    version: i,
                    timestamp: Math.floor(Date.now() / 1e3),
                    registration_id: e
                }
            },
            parseAction: function(e) {
                return e && e.action && r[n(e.action)] ? e.action : null
            }
        }
    },
    1177: function(e, t, n) {
        function i(e) {
            function t() {
                x && (x.close(), x = null), b = !0
            }

            function n() {
                b || (x = new EventSource(g, {
                    withCredentials: m
                }), x.onopen = c, x.onerror = p, x.onmessage = f)
            }

            function i() {
                return x && h[x.readyState]
            }

            function l() {
                b || x.readyState === d && n()
            }

            function c() {
                b || (w = 0, k.trigger(a.OPEN))
            }

            function p(e) {
                if (!b) {
                    if (++w > u) {
                        var t = r(w);
                        y("More than " + u + " errors in a row. " + ("Will use back-off timeout to reconnect in " + t + " ms")), window.setTimeout(l, t)
                    } else y("Will try to reconnect ASAP"), l();
                    k.trigger(a.ERROR, e)
                }
            }

            function f(e) {
                if (!b) {
                    var t = e.data;
                    if (v) try {
                        t = JSON.parse(t)
                    } catch (n) {
                        t = {}, y("syntax error parsing data to object", n.message, e)
                    }
                    k.trigger(a.DATA, t)
                }
            }
            var g = e.eventUrl,
                m = e.withCredentials,
                v = e.json,
                _ = e.log,
                y = void 0 === _ ? function() {} : _,
                b = !1,
                w = 0,
                x = null,
                k = o({}, s, {
                    dispose: t,
                    getEventSourceReadyState: i
                });
            return n(), k
        }

        function r(e) {
            var t = e / u,
                n = l * Math.pow(2, t);
            return Math.min(c, n)
        }
        var o = n(835),
            s = n(25),
            a = n(893),
            l = 2e3,
            u = 1,
            c = 1e4,
            d = 2,
            h = {
                0: "connecting",
                1: "open",
                2: "closed"
            };
        e.exports = i
    },
    1179: function(e, t) {
        "use strict";
        var n = function(e) {
                return e
            },
            i = function(e) {
                return !(!e || "object" != typeof e || "function" != typeof e.then)
            },
            r = function(e, t) {
                var r = 0;
                return function o(s) {
                    var a = e[r++](s, r < e.length ? o : n);
                    return i(a) ? a : new t(function(e) {
                        return e(a)
                    })
                }
            };
        e.exports = function(e, t, n) {
            return new t(function(e) {
                return e(n)
            }).then(r(e, t))
        }
    },
    1184: function(e, t) {
        function n(e, t) {
            function n(t, n, i) {
                if (!(t instanceof Date)) throw new Error("toRelativeTime method expects first argument to be Date");
                i = i || Date.now();
                var r, o, s, a = i - t,
                    l = a > 0,
                    u = null,
                    c = e.relativeTime;
                if (n = n && parseInt(n, 10) || 1e3, a = Math.abs(a), n >= a) return l ? c.justNow : c.rightNow;
                for (r in v)
                    if (v.hasOwnProperty(r)) {
                        if (a < v[r]) break;
                        u = r, a /= v[r]
                    }
                return a = Math.floor(a), o = l ? c.past : c.future, s = c[u](a), o.replace(/%s/i, s)
            }

            function c(t, i) {
                var r, o, s, a, l, u, c = e.dates;
                if (!(t instanceof Date)) throw new Error("format method expects first argument to be Date");
                return "relative" === i ? n(t) : (r = t.getDate(), o = t.getDay(), s = t.getMonth(), a = t.getFullYear(), l = d(t.getMinutes()), u = [
                    ["YYYY", a],
                    ["MMMM", c.months[s]],
                    ["DDDD", c.weekdays[o]],
                    ["MMM", c.monthsShort[s]],
                    ["DD", r],
                    ["MM", s + 1],
                    ["HH", t.getHours()],
                    ["mm", l]
                ], u.reduce(function(e, t) {
                    return e.replace(new RegExp(t[0], "g"), t[1])
                }, y(i)))
            }

            function y(t) {
                var n;
                switch (t) {
                    case "iso":
                        return "YYYY-MM-DD";
                    case "readable":
                        n = "readable";
                        break;
                    case "readable_time":
                        n = "readableTime";
                        break;
                    case "readable_abbreviated":
                        n = "readableAbbreviated";
                        break;
                    case "readable_with_weekday":
                        n = "readableWithWeekday";
                        break;
                    default:
                        n = "default"
                }
                return e.dateFormats[n]
            }

            function b(e) {
                var t, n;
                return t = "number" == typeof e ? new Date(e) : i(e), n = t - Date.now(), Math.abs(n) > 7 * m ? !1 : (S = n, !0)
            }

            function w() {
                return Date.now() + S
            }

            function x(t, n) {
                if (isNaN(t)) return t;
                var i = [],
                    r = Math.floor(t / g),
                    o = Math.floor(t / f % 60),
                    s = Math.floor(t / p % 60),
                    a = e.relativeTime;
                return n && n.inWords ? (r > 0 && i.push(a.hour(r)), o > 0 && i.push(a.min(o)), (s > 0 || 0 === o && 0 === r) && i.push(a.sec(s)), i.join(" ")) : (r > 0 && i.push(r),
                    n && n.minimal && 0 === r && 0 === o ? i.push("") : i.push(10 > o && r > 0 ? "0" + o : o), i.push(10 > s ? "0" + s : s), i.join(":"))
            }

            function k(e) {
                return t.zeroPad(e.getHours(), 2) + ":" + t.zeroPad(e.getMinutes(), 2)
            }
            var S = 0;
            return {
                time: _,
                toRelativeTime: n,
                format: c,
                fromString: i,
                setServerTime: b,
                nowAtServer: w,
                timecode: x,
                stringToTime: r,
                convert: o,
                floorTo30Minutes: s,
                parseTime: a,
                formatTime: k,
                getTimezoneOffset: l,
                getBounds: u,
                toLocalDate: h
            }
        }

        function i(e) {
            return new Date(Date.parse(e) || e)
        }

        function r(e) {
            var t, n = /^\d+(\.\d+)?$/g,
                i = /^(?:npt:)?(?:(?:(\d+):)?(\d\d?):)?(\d\d?)(\.\d+)?$/,
                r = /^(?:(\d\d?)[hH])?(?:(\d\d?)[mM])?(\d\d?)[sS]$/;
            return n.test(e) ? 1e3 * parseFloat(e) : (t = i.exec(e) || r.exec(e), t ? 1e3 * (3600 * (parseInt(t[1], 10) || 0) + 60 * (parseInt(t[2], 10) || 0) + parseInt(t[3], 10) + (parseFloat(t[4]) || 0)) : 0)
        }

        function o(e, t, n) {
            n = n || "s";
            var i = "smh",
                r = i.indexOf(t),
                o = i.indexOf(n);
            if (-1 === r || -1 === o) throw new Error('Units must be expressed as either "h", "m" or "s"');
            return Math.round(Math.pow(60, o - r) * e)
        }

        function s(e) {
            return e = new Date(e), e.setMinutes(e.getMinutes() - e.getMinutes() % 30), e
        }

        function a(e) {
            var t, n, i, r = e.match(/^\s*(\d{1,2})\s*(?::\s*(\d{1,2}))?\s*(?:(a|p)m?)?\s*$/i);
            if (r && (t = r[1] && parseInt(r[1], 10), n = r[2] && parseInt(r[2], 10), i = r[3] && r[3].toLowerCase(), !(t > 23 || n > 59))) {
                if (i)
                    if ("p" === i) {
                        if (12 > t) t += 12;
                        else if (t > 13) return
                    } else if ("a" === i)
                    if (12 === t) t = 0;
                    else if (t > 12) return;
                return n || (n = 0), [t, n]
            }
        }

        function l() {
            var e, t = new Date(2009, 0, 1, 6, 0, 0),
                n = new Date(2009, 6, 1, 6, 0, 0);
            return e = t.getUTCHours() > n.getUTCHours() ? t.getTimezoneOffset() : n.getTimezoneOffset()
        }

        function u(e) {
            if (null == e.offset) return {};
            var t = new Date;
            c(t, e.resolution);
            var n = +new Date(+t + e.offset * _[e.resolution]),
                i = +new Date(n + (e.duration - 1) * _[e.resolution]);
            return {
                from: n,
                to: i
            }
        }

        function c(e, t) {
            switch (t) {
                case "day":
                    e.setUTCHours(0, 0, 0, 0);
                    break;
                case "hour":
                    e.setUTCMinutes(0, 0, 0)
            }
        }

        function d(e) {
            return ("0" + e).substr(-2)
        }

        function h(e) {
            var t = "string" == typeof e ? Date.parse(e) : "number" == typeof e ? e : e.valueOf(),
                n = 60 * l() * 1e3;
            return new Date(t + n)
        }
        e.exports = n;
        var p = 1e3,
            f = 6e4,
            g = 60 * f,
            m = 24 * g,
            v = {
                sec: 1e3,
                min: 60,
                hour: 60,
                day: 24,
                month: 30,
                year: 12
            },
            _ = {
                minute: f,
                hour: g,
                day: m
            }
    },
    1185: function(e, t) {
        function n(e) {
            return {
                round: i,
                format: function(t, n) {
                    if ("" === t || null == t || isNaN(t) || Math.abs(t) === 1 / 0) return "";
                    t = parseFloat(t);
                    var r = n && n.precision || 0,
                        o = e.delimiters;
                    return r = Math.max(Math.min(r, 20), 0), t = i(t, r, n && n.roundingFn), n && !isNaN(n.fixed) && (t = t.toFixed(Math.max(Math.min(n.fixed, 20), 0))), ("" + t).split(".").map(function(e, t) {
                        return 0 === t ? e.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o.thousands) : e
                    }).join(o.decimal)
                },
                zeroPad: function(e, t) {
                    if (null == e) return e;
                    e += "";
                    var n = t - e.length;
                    return n > 0 && (e = new Array(n + 1).join("0") + e), e
                }
            }
        }

        function i(e, t, n) {
            n = n || Math.round;
            var i = Math.pow(10, t || 0);
            return n(e * i) / i
        }
        e.exports = n
    },
    1196: function(e, t) {
        "use strict";

        function n(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
            return n.reduce(i, e)
        }

        function i(e, t) {
            for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
            return e
        }
        e.exports = n
    },
    1197: function(e, t) {
        "use strict";

        function n(e) {
            return i.innerHTML = e.replace(r, "&lt;"), i.value
        }
        e.exports = n;
        var i = document.createElement("textarea"),
            r = /</g
    },
    1198: function(e, t) {
        "use strict";

        function n(e) {
            return null == e || e === !1 ? "" : o.test(e) ? e.replace(r, s) : e
        }
        e.exports = n;
        var i = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            r = /&(?!\w+;)|[<>"'`]/g,
            o = /[&<>"'`]/,
            s = function(e) {
                return i[e] || "&amp;"
            }
    },
    1199: function(e, t) {
        "use strict";

        function n(e, t, n) {
            return !e || n && n.test(t) ? t : e.replace(i, window.encodeURIComponent(t))
        }
        e.exports = n;
        var i = /%s/
    },
    1200: function(e, t, n) {
        "use strict";

        function i(e, t) {
            function n(e) {
                if (t > 0) {
                    var n = e.data.length;
                    t -= n, 0 >= t && (e.data = e.substringData(0, e.data.length + t))
                } else e.data = ""
            }

            function i() {
                return t > 0
            }

            function a(e) {
                for (var t = void 0; e;) t = e, e = e.nextSibling, t.parentNode.removeChild(t)
            }
            return e.length < t ? e : (s.innerHTML = o.innerHTML = e, r(o, n, i, a), o.innerHTML + (o.innerHTML === s.innerHTML ? "" : "&hellip;"))
        }
        var r = n(897);
        e.exports = i;
        var o = document.createElement("div"),
            s = document.createElement("div")
    },
    1201: function(e, t) {
        "use strict";

        function n() {
            var e = [],
                t = Math.floor(1e4 * Math.random()),
                n = /xxxLINK[0-9]+\|([0-9]+)xxx/g;
            return {
                addPlaceholder: function(n, i) {
                    return e.push({
                        href: n,
                        text: i
                    }), "xxxLINK" + t + "|" + (e.length - 1) + "xxx"
                },
                flatten: function(t, i) {
                    var r = t.replace(n, function(t, n) {
                        var r = e[parseInt(n, 10)];
                        return r ? i(r.href, r.text) : t
                    });
                    return e.length = 0, r
                }
            }
        }
        e.exports = n
    },
    1202: function(e, t, n) {
        "use strict";

        function i(e, t) {
            function n(e) {
                i.lastIndex = 0, i.test(e.data) && (e.data = e.data.replace(i, function(e) {
                    return e.split(s).filter(Boolean).join("â€‹")
                }))
            }
            var i = new RegExp("\\S{" + t + ",}", "g"),
                s = new RegExp("(\\S{" + Math.floor(t / 2) + "}(?=\\S{2}))");
            return i.test(e) ? (o.innerHTML = e, r(o, n), o.innerHTML) : e
        }
        var r = n(897);
        e.exports = i;
        var o = document.createElement("div")
    },
    1203: function(e, t) {
        "use strict";

        function n(e, t, n) {
            e = n ? e.replace(n, "") : e;
            var o = e.match(r) || [],
                s = i(o, 1),
                a = s[0];
            if (a && e.length > t) {
                var l = e.search(r) + a.length,
                    u = Math.floor((t - l) / 2);
                return e.slice(0, l + u) + "&hellip;" + e.slice(-u)
            }
            return e
        }
        var i = function() {
            function e(e, t) {
                var n = [],
                    i = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
                } catch (l) {
                    r = !0, o = l
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (r) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        e.exports = n;
        var r = /\.[a-z-]{2,30}\//
    },
    1281: function(e, t, n) {
        "use strict";
        var i = e.exports = n(3).assign({}, n(22).Events, {
            initialize: function() {
                n(74).bindErrorHandler(i.onActionError)
            },
            onActionError: function(e) {
                if ("follow" === e.action) {
                    var t = i.getErrorFromXhr(e.xhr) || {};
                    switch (t.error_message) {
                        case "DENY_AGE_RESTRICTED":
                            return n(57).trigger("error:followDeniedAge", {
                                errorType: "DENY_AGE_RESTRICTED",
                                requiredAge: t.age
                            }), !1;
                        case "DENY_AGE_UNKNOWN":
                            return n(57).trigger("error:followDeniedAge", {
                                errorType: "DENY_AGE_UNKNOWN",
                                context: e.context,
                                followeeId: e.target
                            }), !1
                    }
                }
            },
            getErrorFromXhr: function(e) {
                return e && 403 === e.status && e.responseJSON ? n(3).find(e.responseJSON.errors, function(e) {
                    return "DENY_AGE_RESTRICTED" === e.error_message || "DENY_AGE_UNKNOWN" === e.error_message
                }) : void 0
            }
        })
    },
    1282: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            return o(e, t, n, function(e, t) {
                e.unshift(!1, t)
            })
        }

        function r(e, t, n) {
            return o(t, e, n, function(e, t) {
                e.push(!0, t)
            })
        }

        function o(e, t, n, i) {
            for (var r = [], o = e.length, s = t.length, a = 0, l = 0; o >= s;) {
                if (0 === o) return r;
                0 !== s && n(e[a], t[l]) ? (l++, s--) : i(r, a), a++, o--
            }
            return !1
        }

        function s(e) {
            for (var t = [], n = 0, i = 0; n < e.length; n += 2, ++i) t.unshift(e[n], e[n + 1] + i);
            return t
        }

        function a(e, t) {
            var n, i = arguments.length <= 2 || void 0 === arguments[2] ? d : arguments[2],
                r = [],
                o = [
                    [],
                    []
                ],
                a = [
                    [],
                    []
                ],
                l = [];
            return c(0, e.length, 0, t.length, e, t, r, o, a, i), n = 0, r.forEach(function(e) {
                switch (e) {
                    case g:
                    case m:
                        l.push(!1, n);
                        break;
                    case f:
                        ++n
                }
            }), l = s(l), n = 0, r.forEach(function(e) {
                switch (e) {
                    case v:
                    case m:
                        l.push(!0, n);
                    case f:
                        ++n
                }
            }), l
        }

        function l(e, t, n, i, r, o, s, a) {
            var l, u, c;
            for (r[e % 2][n] = 0, u = n + 1; i >= u; u++) r[e % 2][u] = r[e % 2][u - 1] + 1;
            for (l = e + 1; t >= l; l++)
                for (r[l % 2][n] = r[(l - 1) % 2][n] + 1, u = n + 1; i >= u; u++) c = r[(l - 1) % 2][u - 1], a(o[l - 1], s[u - 1]) || c++, r[l % 2][u] = Math.min(c, Math.min(r[(l - 1) % 2][u] + 1, r[l % 2][u - 1] + 1))
        }

        function u(e, t, n, i, r, o, s, a) {
            var l, u, c;
            for (r[t % 2][i] = 0, u = i - 1; u >= n; u--) r[t % 2][u] = r[t % 2][u + 1] + 1;
            for (l = t - 1; l >= e; l--)
                for (r[l % 2][i] = r[(l + 1) % 2][i] + 1, u = i - 1; u >= n; u--) c = r[(l + 1) % 2][u + 1], a(o[l], s[u]) || c++, r[l % 2][u] = Math.min(c, Math.min(r[(l + 1) % 2][u] + 1, r[l % 2][u + 1] + 1))
        }

        function c(e, t, n, i, r, o, s, a, d, h) {
            var p, _, y, b, w, x, k;
            if (e >= t)
                for (p = n; i > p; p++) s.push(v);
            else if (n >= i)
                for (p = e; t > p; p++) s.push(g);
            else if (t - 1 === e) {
                for (_ = r[e], y = n, p = n + 1; i > p; p++) h(o[p], _) && (y = p);
                for (p = n; i > p; p++) p === y ? h(o[p], _) ? s.push(f) : s.push(m) : s.push(v)
            } else {
                for (b = Math.floor((e + t) / 2), l(e, b, n, i, a, r, o, h), u(b, t, n, i, d, r, o, h), w = n, x = 1 / 0, p = n; i >= p; p++) k = a[b % 2][p] + d[b % 2][p], x > k && (x = k, w = p);
                c(e, b, n, w, r, o, s, a, d, h), c(b, t, w, i, r, o, s, a, d, h)
            }
        }
        var d = function(e, t) {
                return e === t
            },
            h = n(303).equal,
            p = e.exports = {
                align: function(e) {
                    var t, n, i, r = e.source,
                        o = e.target,
                        s = e.add,
                        a = e.remove,
                        l = e.comparisonFn,
                        u = void 0 === l ? d : l,
                        c = p.getAlignInstructions(r, o, u);
                    for (t = 0; t < c.length; t += 2) n = c[t + 1], c[t] ? (i = o[n], s(i, n)) : (i = r[n], a(i, n))
                },
                getAlignInstructions: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? d : arguments[2],
                        o = e.length,
                        s = t.length,
                        l = s - o,
                        u = void 0,
                        c = void 0,
                        p = void 0,
                        f = void 0;
                    if (1 === Math.abs(l)) {
                        if (p = l > 0, u = p ? t : e, c = p ? e : t, h(u.slice(0, -1), c, n)) return [p, o - (p ? 0 : 1)];
                        if (h(u.slice(1), c, n)) return [p, 0]
                    } else {
                        if (0 === l && h(e, t, n)) return [];
                        if (0 > l && (f = i(e, t, n))) return f;
                        if (l > 0 && (f = r(e, t, n))) return f
                    }
                    return a(e, t, n)
                }
            },
            f = 0,
            g = 1,
            m = 2,
            v = 3
    },
    1283: function(e, t, n) {
        "use strict";
        var i = "https://eventlogger.soundcloud.com/audio_error";
        e.exports = {
            log: function(e) {
                var t = n(62).stringify({
                        query: e
                    }),
                    r = new window.Image;
                r.src = i + t
            }
        }
    },
    1284: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var n = e.controller,
                    i = t(n.getContainerElement()),
                    o = n.getState() === r.States.ERROR;
                i.toggleClass("blocked", o)
            }
            var r, o = 1e3 / 60;
            e.exports = {
                getInstance: function(e) {
                    return r || (r = new(n(510))({
                        flashAudioPath: n(e ? 2374 : 2373),
                        flashObjectID: "flashAudioObject",
                        updateInterval: o,
                        mseEnableBufferingBeforePlay: !0
                    }), r.Errors = n(510).Errors, r.States = n(510).States, r.UPDATE_INTERVAL = o, n(57).once("flash:block flash:unblock", i)), r
                }
            }
        }).call(t, n(1))
    },
    1285: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return t.reduce(function(t, n) {
                return t[n] = e[n].bind(e), t
            }, {})
        }
        e.exports = {
            facebook: i(n(477), ["callback"]),
            payment: i(n(84), ["handleCallback"])
        }
    },
    1286: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            var o = this;
            this.soundId = e, this.lastCurrentTime = t, this.timeUpdateInterval = null, this.state = n ? _.playing : _.idle, this.castSender = null, this.timeUpdateInterval = null, this.audioCreateTriggered = !1, this.castSenderPromise = i.then(function(e) {
                o.castSender = e, r(e, o)
            })
        }

        function r(e, t) {
            t.listenTo(e, "media:" + t.soundId + ":idle", function() {
                t.state !== _.idle && (n(255).log("audio idle (from " + t.state + ")", t.soundId), t.lastCurrentTime = 0, t.state = _.idle, t.trigger(g).trigger(d)), s(t)
            }), t.listenTo(e, "media:" + t.soundId + ":playing", function() {
                t.state !== _.playing && (n(255).log("audio play (from " + t.state + ")", t.soundId), t.state = _.playing, t.trigger(c).trigger(h).trigger(g)), o(t)
            }), t.listenTo(e, "media:" + t.soundId + ":paused", function() {
                t.state !== _.paused && (n(255).log("audio paused (from " + t.state + ")", t.soundId), t.state = _.paused, t.trigger(g).trigger(d)), s(t)
            }), t.listenTo(e, "media:" + t.soundId + ":buffering", function() {
                var e = t.state;
                t.state = _.buffering, e === _.idle && (n(255).log("audio buffering-play (from " + e + ")", t.soundId), t.trigger(c)), e !== _.buffering && (n(255).log("audio buffering (from " + e + ")", t.soundId), t.trigger(f)), s(t)
            })
        }

        function o(e) {
            e.timeUpdateInterval || (e.timeUpdateInterval = window.setInterval(function() {
                a(e, null, function(t, n) {
                    e.lastCurrentTime = n.currentTime
                }), e.trigger(u)
            }, v))
        }

        function s(e) {
            window.clearInterval(e.timeUpdateInterval), e.timeUpdateInterval = null
        }

        function a(e, t, n) {
            if (e.castSender) {
                var i = e.castSender.getSoundStatus(e.soundId);
                if ("active" === i.state) return n(e.castSender, i)
            }
            return t
        }
        var l = n(211).Events,
            u = l.TIME,
            c = l.PLAY,
            d = l.PAUSE,
            h = l.PLAY_START,
            p = l.DESTROYED,
            f = l.BUFFERING_START,
            g = l.BUFFERING_END,
            m = l.CREATED,
            v = 1e3 / 60,
            _ = {
                idle: "idle",
                playing: "playing",
                paused: "paused",
                buffering: "buffering"
            };
        e.exports = {
            createAudioFromSound: function(e) {
                return new i(e.get("id"), e.currentTime(), e.isPlaying(), n(172).getInstance())
            }
        };
        n(3).assign(i.prototype, n(2).Events, {
            initAudio: function() {
                var e = this;
                return this.castSenderPromise.then(function() {
                    e.audioCreateTriggered || (e.audioCreateTriggered = !0, e.trigger(m))
                })
            },
            updateOptions: function() {},
            registerPlay: function() {
                return !1
            },
            toggle: function() {
                this.isPaused() ? this.play() : this.pause()
            },
            isPlaying: function() {
                return this.state === _.buffering || this.state === _.playing
            },
            isPaused: function() {
                return this.state === _.paused || this.state === _.idle
            },
            isBuffering: function() {
                return this.state === _.buffering
            },
            dispose: function() {
                this.trigger(p), this.off()
            },
            play: function(e) {
                if (this.castSender) {
                    var t = e && null != e.seek ? e.seek : this.currentTime();
                    this.state = _.playing, this.trigger(c, n(3).assign({}, e, {
                        position: t
                    })), this.castSender.togglePlaying(!0)
                }
            },
            pause: function(e) {
                this.castSender && (this.state = _.paused, this.trigger(d, n(3).assign({}, e, {
                    position: this.currentTime()
                })), this.castSender.togglePlaying(!1))
            },
            getListenTime: function() {
                return 0
            },
            seek: function(e) {
                a(this, null, function(t, n) {
                    return t.seekTo(e)
                })
            },
            seekRelative: function(e) {
                a(this, null, function(t, n) {
                    return t.seekTo(n.currentTime + e)
                })
            },
            currentTime: function() {
                return this.lastCurrentTime
            },
            loadProgress: function() {
                return 1
            },
            buffered: function() {
                return a(this, 0, function(e, t) {
                    return t.duration
                })
            },
            isLoading: function() {
                return !this.castSender
            },
            toggleMute: function(e) {
                a(this, null, function(e, t) {
                    return e.setMuted(!e.isMuted())
                })
            },
            isMuted: function() {
                return a(this, !1, function(e, t) {
                    return e.isMuted()
                })
            },
            setVolume: function(e) {
                a(this, null, function(t, n) {
                    return t.setVolume(e)
                })
            },
            getVolume: function() {
                return a(this, 1, function(e, t) {
                    return e.getVolume()
                })
            },
            hasStreamInfo: function() {
                return !0
            },
            hasNoConnection: function() {
                return !1
            },
            enablePreloading: function() {},
            disablePreloading: function() {},
            registerModelEventListener: function(e, t) {
                this.on("all", t.bind(this, e))
            },
            unregisterModelEventListener: function(e) {
                this.off("all")
            }
        })
    },
    1287: function(e, t, n) {
        "use strict";

        function i(e) {
            function t(e) {
                var t = r(),
                    i = t.queue;
                if (s(i, e.queue)) d.forEach(function(t, n) {
                    t.associateCastId(e.queue[n].id)
                });
                else if (!o(i, e.queue)) {
                    var l = e.queue.map(function(e, t) {
                        var i = e.urn,
                            r = e.id,
                            o = n(98).toComponents(i),
                            s = new(n(66))({
                                id: o.id
                            }),
                            l = s.getQueueMetadataAt(0),
                            u = l.sourceInfo,
                            c = l.queryPosition,
                            d = l.originalModel,
                            h = new(n(204))({}, {
                                sound: s,
                                sourceInfo: u,
                                queryPosition: c,
                                originalModel: d,
                                index: t,
                                castId: r,
                                restoreUrl: null,
                                explicit: !1,
                                layoutInfo: a()
                            });
                        return h.release(), s.release(), h
                    });
                    n(92).replaceQueue(l)
                }
                n(92).playItem(d.at(e.currentIndex))
            }

            function i() {
                var t = r(),
                    i = t.queue,
                    s = t.currentIndex,
                    a = n(303).sliceAround(i, s, u, l),
                    c = e.getLastRemoteQueue(),
                    d = n(92).getCurrentSound(),
                    h = !c || a.position !== c.currentIndex || !o(a.items, c.queue);
                s > -1 && h && e.loadQueue(a.items, a.position, n(63).getAuthToken(), d.isPlaying(), d.currentTime())
            }

            function c(t) {
                e.setRepeatMode(t)
            }
            var d = n(92).getQueue(),
                h = n(3).debounce(i, 500);
            e.on("queue:update", t), d.on("add remove reset", h), n(92).on("change:currentSound", h), n(92).on("change:repeatMode", c), n(57).once("googleCast:end", function() {
                d.forEach(function(e, t) {
                    e.associateCastId(null)
                }), e.off("queue:update", t), d.off("add remove reset", h), n(92).off("change:currentSound", h), n(92).off("change:repeatMode", c)
            }), d.length > 0 && e.isRemoteQueueEmpty() && (n(92).setRepeatMode(n(138).none), i())
        }

        function r() {
            return {
                currentIndex: n(92).getQueueState().currentIndex,
                queue: n(92).getQueue().map(function(e) {
                    var t = e.castId,
                        n = e.sound,
                        i = n.getUrn();
                    return t ? {
                        id: t,
                        urn: i
                    } : {
                        urn: i
                    }
                })
            }
        }

        function o(e, t) {
            return n(303).equal(e, t, function(e, t) {
                return e.id && e.id === t.id
            })
        }

        function s(e, t) {
            return n(303).equal(e, t, function(e, t) {
                return e.urn === t.urn
            })
        }

        function a() {
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
        var l = 100,
            u = 5;
        e.exports = {
            initialize: function() {
                n(172).getInstance().then(function(e) {
                    var t = i.bind(null, e);
                    return n(57).on("googleCast:start", t), {
                        dispose: function() {
                            n(57).off("googleCast:start", t)
                        }
                    }
                })
            }
        }
    },
    1288: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.getCurrentSession();
            return t && t.getMediaSession() || null
        }
        var r = n(22).Events,
            o = n(255).log,
            s = "BCFFBE3E",
            a = "9A5289F5",
            l = "urn:x-cast:com.soundcloud.chromecast",
            u = "UPDATE_QUEUE",
            c = 300,
            d = "disconnected",
            h = "connected";
        e.exports = {
            fromSDK: function(e, t) {
                function p(t) {
                    var r = i(_),
                        s = r && r.media;
                    if (s && s.contentId) {
                        var a = n(98).toComponents(s.contentId).id;
                        switch (k && k !== a && (o("remote sound changed: " + k + " -> " + a), E.trigger("media:" + k + ":idle")), k = a, t) {
                            case e.cast.media.PlayerState.IDLE:
                                E.trigger("media:" + a + ":idle");
                                break;
                            case e.cast.media.PlayerState.PLAYING:
                                E.trigger("media:" + a + ":playing");
                                break;
                            case e.cast.media.PlayerState.PAUSED:
                                E.trigger("media:" + a + ":paused");
                                break;
                            case e.cast.media.PlayerState.BUFFERING:
                                E.trigger("media:" + a + ":buffering")
                        }
                    }
                }

                function f(e) {
                    e.revision !== w && (w = e.revision, x = {
                        queue: e.queue,
                        currentIndex: e.current_index
                    }, o("queue updated", x, w), E.trigger("queue:update", x))
                }

                function g(e) {
                    S !== e && (S = e, w = null, x = null, k = null, e === d ? (o("session change: end"), n(57).trigger("googleCast:end"), n(57).trigger("googleCast:audioRestored")) : e === h && (o("session change: start", {
                        volume: E.getVolume(),
                        muted: E.isMuted()
                    }), n(57).trigger("googleCast:start"), n(57).trigger("googleCast:audioHijack"), n(57).broadcast("volume:set", E.getVolume()), n(57).broadcast("mute:toggle", E.isMuted())))
                }

                function m(e) {
                    T !== e && (T = e, T ? (o("cast is available"), n(57).trigger("googleCast:available")) : (o("cast is unavailable"), n(57).trigger("googleCast:unavailable")))
                }
                var v = n(55).get("rollouts").get("internal_qa") ? s : a,
                    _ = t.framework.CastContext.getInstance(),
                    y = new t.framework.RemotePlayer,
                    b = new t.framework.RemotePlayerController(y),
                    w = null,
                    x = null,
                    k = null,
                    S = d,
                    T = !1,
                    E = n(3).assign({}, r, {
                        loadQueue: function(t, n, i, r, s) {
                            var a = _.getCurrentSession();
                            if (a) {
                                var c = t[n],
                                    d = {
                                        revision: w,
                                        credentials: i ? {
                                            authorization: "OAuth " + i
                                        } : null,
                                        queue: t,
                                        current_index: n
                                    };
                                if (o("intending to load queue", d), y.isMediaLoaded) o("media session present - sending queue update"), a.sendMessage(l, {
                                    type: u,
                                    payload: d
                                });
                                else {
                                    var h = new e.cast.media.MediaInfo(c.urn, "audio/mpeg"),
                                        p = new e.cast.media.LoadRequest(h);
                                    p.autoplay = r, p.currentTime = s / 1e3, p.customData = d, a.loadMedia(p)
                                }
                            }
                        },
                        getSafeDeviceName: function() {
                            var e = _.getCurrentSession(),
                                t = e ? e.getCastDevice() : null;
                            return t ? t.friendlyName : null
                        },
                        getLastRemoteQueue: function() {
                            return x
                        },
                        isRemoteQueueEmpty: function() {
                            return !x || 0 === x.queue.length
                        },
                        getSoundStatus: function(t) {
                            var r = y.mediaInfo,
                                o = x && x.queue[x.currentIndex];
                            if (!r || !o) return {
                                state: "idle"
                            };
                            var s = n(98).toComponents(o.urn).id;
                            if (s !== t) return {
                                state: "idle"
                            };
                            var a = i(_);
                            return {
                                state: "active",
                                isPlaying: y.playerState === e.cast.media.PlayerState.PLAYING,
                                isPaused: y.playerState === e.cast.media.PlayerState.PAUSED,
                                buffering: y.playerState === e.cast.media.PlayerState.BUFFERING,
                                currentTime: a ? 1e3 * a.getEstimatedTime() : 0,
                                duration: 1e3 * r.duration
                            }
                        },
                        isConnected: function() {
                            return y.isConnected
                        },
                        isAvailable: function() {
                            return T
                        },
                        getVolume: function() {
                            return y.volumeLevel
                        },
                        isMuted: function() {
                            return y.isMuted
                        },
                        getRepeatMode: function() {
                            var t = i(_);
                            if (!t) return null;
                            switch (t.repeatMode) {
                                case e.cast.media.RepeatMode.OFF:
                                    return n(138).none;
                                case e.cast.media.RepeatMode.ALL:
                                    return n(138).all;
                                case e.cast.media.RepeatMode.SINGLE:
                                    return n(138).one;
                                case e.cast.media.RepeatMode.ALL_AND_SHUFFLE:
                                    return n(138).all;
                                default:
                                    return null
                            }
                        },
                        setVolume: n(3).debounce(function(e) {
                            var t = _.getCurrentSession();
                            t && e !== E.getVolume() && (o("sending volume: ", e), t.setVolume(e))
                        }, c),
                        setMuted: n(3).debounce(function(e) {
                            var t = _.getCurrentSession();
                            t && e !== E.isMuted() && (o("sending mute: ", e), t.setMute(e))
                        }, c),
                        togglePlaying: n(3).debounce(function(e) {
                            var t = i(_);
                            t && (e && y.isPaused ? (o("sending: play"), t.play()) : e || y.isPaused || (o("sending: pause"), t.pause()))
                        }, c),
                        seekTo: n(3).debounce(function(t) {
                            var n = i(_);
                            if (n) {
                                var r = new e.cast.media.SeekRequest;
                                r.currentTime = t / 1e3, n.seek(r)
                            }
                        }, c),
                        setRepeatMode: function(t) {
                            var r = i(_);
                            r && r.queueSetRepeatMode(t === n(138).all ? e.cast.media.RepeatMode.ALL : t === n(138).one ? e.cast.media.RepeatMode.SINGLE : e.cast.media.RepeatMode.OFF)
                        }
                    });
                return t.framework.CastContext.getInstance().setOptions({
                    receiverApplicationId: v,
                    autoJoinPolicy: e.cast.AutoJoinPolicy.ORIGIN_SCOPED
                }), _.addEventListener(t.framework.CastContextEventType.SESSION_STATE_CHANGED, function(e) {
                    var n = (e.session, e.sessionState);
                    switch (n) {
                        case t.framework.SessionState.SESSION_RESUMED:
                        case t.framework.SessionState.SESSION_STARTED:
                            g(h);
                            break;
                        case t.framework.SessionState.SESSION_ENDED:
                            g(d)
                    }
                }), _.addEventListener(t.framework.CastContextEventType.CAST_STATE_CHANGED, function(e) {
                    var n = e.castState;
                    switch (n) {
                        case t.framework.CastState.NO_DEVICES_AVAILABLE:
                            m(!1);
                            break;
                        case t.framework.CastState.NOT_CONNECTED:
                        case t.framework.CastState.CONNECTING:
                        case t.framework.CastState.CONNECTED:
                            m(!0)
                    }
                }), b.addEventListener(t.framework.RemotePlayerEventType.ANY_CHANGE, function(e) {
                    var t = (e.type, e.field),
                        i = e.value,
                        r = y.playerState,
                        s = y.mediaInfo,
                        a = s && s.customData,
                        l = a && a.queue_status;
                    "mediaInfo" === t && s && g(h), s && p(r), l && f(l), S === h && ("volumeLevel" === t && (o("Remote volume: ", i), n(57).broadcast("volume:set", i)), "isMuted" === t && (o("Remote isMuted: ", i), n(57).broadcast("mute:toggle", i)))
                }), E
            }
        }
    },
    1289: function(e, t, n) {
        "use strict";
        var i = /\s+/g,
            r = /^\d{6,18}$/;
        e.exports = n(100).extend({
            message: n(52).t("This is an invalid barcode."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1291: function(e, t, n) {
        "use strict";

        function i(e) {
            return null == e
        }
        var r = e.exports = n(162).extend({
            fields: null,
            nullable: !0,
            validate: function(e) {
                var t = n(56).defer(),
                    r = this.fields.map(e.get, e);
                return r.every(i) ? this.result(t, this.nullable) : this.check(r, this.fields, this.result.bind(this, t)), t
            },
            affectsField: function(e) {
                return this.fields.indexOf(e) > -1
            },
            getOwnerField: function() {
                return this.fields[0]
            }
        });
        n(457).applyTo(r.prototype)
    },
    1292: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            nullable: !1,
            message: n(52).t("Enter at least one territory."),
            check: function(e, t) {
                t(e && e.length > 0)
            }
        })
    },
    1293: function(e, t, n) {
        "use strict";
        var i = /\W+/g,
            r = /^\w{5}\d{7}$/;
        e.exports = n(100).extend({
            message: n(52).t("This is an invalid ISRC."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1294: function(e, t, n) {
        "use strict";
        var i = /\W+/g,
            r = /^\w\d{10}$/;
        e.exports = n(100).extend({
            message: n(52).t("This is an invalid ISWC."),
            check: function(e, t) {
                e = e.replace(i, "");
                var n = !e.length || r.test(e);
                t(n)
            }
        })
    },
    1295: function(e, t, n) {
        "use strict";
        e.exports = n(100).extend({
            constraints: [],
            check: function(e, t) {
                var i = this,
                    r = this.constraints.map(function(e) {
                        return n(457).hydrateConstraintDefinition.call(i, e)
                    }).map(function(t) {
                        return t.validate(i._form, e)
                    });
                n(56).settled(r).then(function() {
                    for (var e = arguments.length, i = Array(e), r = 0; e > r; r++) i[r] = arguments[r];
                    var o = n(3).any(i.map(function(e) {
                        return e[0].success
                    }));
                    t(o)
                })
            }
        })
    },
    1300: function(e, t, n) {
        "use strict";
        var i = [{
            rule: /^(?![_-])/,
            errorMessage: n(52).t("Profile URLs must not start with an underscore or hyphen.")
        }, {
            rule: /^(?!.*[-_]$)/,
            errorMessage: n(52).t("Profile URLs must not end with an underscore or hyphen.")
        }, {
            rule: /^(?!.*[\-_]{2,})/,
            errorMessage: n(52).t("Profile URLs must not have two consecutive underscores or hyphens.")
        }, {
            rule: /^[a-z0-9_-]*$/,
            errorMessage: n(52).t("Use only numbers, letters, underscores, or hyphens.")
        }, {
            rule: /^.{3,255}$/,
            errorMessage: n(52).t("Profile URLs must be between 3 and 255 characters.")
        }, {
            rule: new RegExp("^(?!(" + ["101", "accounts", "activate", "activity", "admin", "android", "announcements", "api", "apps", "artworks", "assets", "comments", "community-guidelines", "connect", "customize", "creativecommons", "creator", "creators", "dashboard", "dropbox", "emails", "errors", "events", "explore", "facebook", "faqs", "favorites", "feedbacks", "feeds", "for", "forums", "genres", "gifts", "google_plus", "groups", "guestlist", "help", "hot", "invite", "imprint", "iphone", "ipad", "ipod", "jobs", "latest", "login", "logout", "mac", "manage", "me", "messages", "mobile", "music", "newsletters", "notifications", "oauth", "oauth2", "orders", "oembed", "pages", "partners", "people", "player", "playlists", "posts", "press", "pro", "press_release", "search", "session", "sets", "settings", "signup", "sitemap", "sound", "sounds", "stations", "stats", "stream", "subscription", "terms-of-use", "tour", "tracks", "track-manager", "turn_off_notifications", "tags", "upload", "users", "videos", "waveform", "welcome", "widgets", "you"].join("|") + ")$)"),
            errorMessage: n(52).t("This permalink is reserved. Enter another one.")
        }];
        e.exports = n(100).extend({
            initialize: function() {
                n(100).prototype.initialize.apply(this, arguments), this.constraints = i
            },
            checkExisting: !0,
            check: function(e, t) {
                var i = this;
                if ("" === e) return void t(!0);
                var r = n(3).find(this.constraints, function(t) {
                    return t.rule.lastIndex = 0, !t.rule.test(e)
                });
                r || !this.checkExisting ? (this.message = r && r.errorMessage, t(!r)) : this.resolvePermalink(e).done(function() {
                    i.message = n(52).t("This profile URL is already in use. Try a different one."), t(!1)
                }).fail(function() {
                    t(!0)
                })
            },
            resolvePermalink: function(e) {
                var t = this.getResource.call(this._form);
                return t && e === t.get("permalink") ? n(56).reject() : n(64).resolve(e)
            }
        })
    },
    1301: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).has(e, "rightsholder_urn") ? Boolean(e.territory && e.rightsholder_urn) : Boolean(e.territory)
        }
        e.exports = n(100).extend({
            nullable: !1,
            message: n(52).t("Enter a rightsholder for each territory."),
            check: function(e, t) {
                t(n(3).every(e || [], i))
            }
        })
    },
    1302: function(e, t, n) {
        "use strict";
        e.exports = n(162).extend({
            _propagate: !0,
            data: null,
            initialize: function(e) {
                this.data = e || {}
            },
            stopPropagation: function() {
                this._propagate = !1
            },
            isPropagationStopped: function() {
                return !this._propagate
            }
        })
    },
    1303: function(e, t, n) {
        "use strict";

        function i() {
            this.actions = n(3).reduce(this.actions, function(e, t, i) {
                return "default" === i ? e["default"] = t : n(3).isFunction(t) ? e[i] = {
                    fn: t,
                    state: "enabled"
                } : e[i] = n(3).assign({
                    state: "enabled"
                }, t), e
            }, {})
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    i.call(this)
                }
            },
            actions: null,
            performAction: function(e) {
                var t = this,
                    n = this.actions[e],
                    i = void 0;
                if ("default" === e) {
                    if (!n) return;
                    "string" == typeof n && (e = n, n = this.actions[e])
                }
                return "enabled" === n.state ? (i = n.fn.apply(this, Array.prototype.slice.call(arguments, 1)), i && "function" == typeof i.state && ("pending" === i.state() && (this.setActionState(e, "pending"), i.always(function() {
                    "pending" === t.getActionState(e) && t.setActionState(e, "enabled")
                })), i.then(function(n) {
                    t.trigger("complete:action:" + e, n)
                })), i) : void 0
            },
            getActionState: function(e) {
                var t = this.actions[e];
                return t.state
            },
            setActionState: function(e, t) {
                var i = this.actions[e];
                i.state !== t && (this.trigger("change:action:" + e, t, i.state), i.state = t, this.buttons && n(3).each(this.buttons, function(n, i) {
                    n.action === e && this.setButtonConfig(i, {
                        state: t
                    })
                }, this))
            }
        })
    },
    1304: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.buttons;
            this.buttons = {}, n(3).each(e, function(e, t) {
                this.buttons[t] = n(3).clone(e);
                var i = r.call(this, t);
                this.setButtonConfig(t, {
                    state: i && i.state || "enabled"
                })
            }, this)
        }

        function r(e) {
            var t = this.buttons[e];
            return n(3).find(this.actions, function(e, n) {
                return n === t.action
            })
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    i.call(this)
                }
            },
            buttons: null,
            setButtonConfig: function(e, t) {
                var i, r = this.buttons[e],
                    o = {};
                n(3).each(t, function(e, t) {
                    r[t] !== e && (i = !0, o[t] = r[t] = e)
                }), i && this.trigger("change:button:" + e, o)
            }
        })
    },
    1305: function(e, t, n) {
        "use strict";

        function i() {
            this.fields = n(3).reduce(this.fields, o, {}, this), this.set(n(3).assign(n(3).reduce(this.fields, a, {}, this), this.attributes), {
                silent: !0
            }), this.resetChanges()
        }

        function r(e) {
            return e && e.hold && e.release
        }

        function o(e, t, i) {
            return e[i] = n(3).defaults(n(3).reduce(t, s, {}, this), {
                isDirty: !1
            }), e
        }

        function s(e, t, n) {
            return "function" == typeof t && (t = t.call(this)), r(t) && this._submodels.push(t), e[n] = t, e
        }

        function a(e, t, n) {
            return e[n] = t.defaultValue, e
        }
        e.exports = new(n(21))({
            before: {
                initialize: function() {
                    this._submodels = this._submodels || [], i.call(this)
                }
            },
            fields: null,
            getFieldMetadata: function(e) {
                return this.fields[e] || {}
            },
            setFieldDatasource: function(e, t) {
                var n = this;
                [].concat(e).forEach(function(e) {
                    var i = n.getFieldMetadata(e);
                    t !== i.datasource && (i.datasource = t, n.trigger("datasourceChange:" + e, i))
                })
            },
            setFieldDisabled: function(e, t) {
                var n = this;
                e = [].concat(e);
                var i = e.reduce(function(e, i) {
                    var r = n.getFieldMetadata(i);
                    return t !== r.disabled ? (r.disabled = t, n.trigger("disabledChange:" + i, r), n.trigger("disabledChange", i, r), !0) : e
                }, !1);
                i && this.validate({
                    fields: e
                })
            },
            hasDefaultValue: function() {
                var e = this,
                    t = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                return !t.some(function(t) {
                    var n = e.fields[t];
                    return n && n.defaultValue !== e.get(t)
                })
            },
            isDirty: function() {
                var e = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                return e.some(function(e) {
                    return this[e] && this[e].isDirty
                }, this.fields)
            },
            markFieldsClean: function() {
                if (this.isDirty()) {
                    var e = arguments[0] ? n(3).flatten(arguments) : Object.keys(this.fields);
                    e.forEach(function(e) {
                        this[e] && (this[e].isDirty = !1)
                    }, this.fields), this.isDirty() || this.trigger("form:clean")
                }
            },
            markFieldsDirty: function(e) {
                var t = !this.isDirty();
                e = "string" == typeof e ? [e] : e, e && (e.forEach(function(e) {
                    this[e] && (this[e].isDirty = !0)
                }, this.fields), t && this.trigger("form:dirty"))
            },
            triggerApplyAll: function(e) {
                var t = this;
                e = "string" == typeof e ? [e] : e, e.forEach(function(e) {
                    return t.trigger("applyAll", e, t.get(e))
                })
            }
        })
    },
    1306: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !e.constraints || n(3).any(e.constraints, n(3).partial(f, t))
        }

        function r() {
            var e = this,
                t = this.constraints = n(457).hydrateConstraintDefinitions.call(this, this.constraints);
            t.FORM = t.FORM || [], this.constraintConditions = this.constraintConditions || {}, n(3).each(this.fields, function(t, n) {
                var i = e.hasConstraintsOwnedBy(n);
                t.validity = i ? g : m, t.message = "", t.isValid = !0
            }), this.on("change", function() {
                o.call(e, Object.keys(e.changed))
            }), this.on("disabledChange", function(t) {
                o.call(e, [t])
            })
        }

        function o(e) {
            var t = Object.keys(e.reduce(c.bind(this), {})),
                i = [];
            n(3).each(this.constraintConditions, function(t, r) {
                n(3).intersection(t.fields, e).length && i.push(r)
            }), n(3).uniq(t.concat(i)).forEach(l, this)
        }

        function s(e) {
            var t = void 0,
                n = m;
            h.call(this, e).some(function(e) {
                switch (e.state) {
                    case v:
                        return t = e.getLastError(), n = e.state, !0;
                    case g:
                        return n = e.state, !0
                }
                return !1
            }), a.call(this, e, n, t)
        }

        function a(e, t, n) {
            var i = t === m,
                r = this.fields[e];
            r.validity = t, (r.isValid !== i || r.message !== n) && (r.message = n, r.isValid = i, this.trigger("validation:" + e, r))
        }

        function l(e) {
            var t = this;
            this.fields[e].validity = g, h.call(this, e).forEach(function(e) {
                e.reset(t), e.getOwnerField && (t.fields[e.getOwnerField()].validity = g)
            })
        }

        function u(e) {
            var t = this,
                n = !0,
                i = e.every(function(e) {
                    var i = t.fields[e];
                    return n = n && i.validity === m, i.validity !== g
                });
            return i ? n ? m : v : g
        }

        function c(e, t) {
            return d.call(this, t).forEach(function(i) {
                var r = n(3).result(i, "getOwnerField") || t,
                    o = e[r];
                o || (o = e[r] = []), -1 === o.indexOf(i) && o.push(i)
            }), e
        }

        function d(e) {
            return p.call(this, e, "affected")
        }

        function h(e) {
            return p.call(this, e, "owned")
        }

        function p(e, t) {
            var n = (this.constraints[e] || []).slice(),
                i = "owned" === t ? function(t) {
                    return t.getOwnerField() === e
                } : function(t) {
                    return t.affectsField(e)
                };
            return n.push.apply(n, this.constraints.FORM.filter(i)), n
        }

        function f(e, t) {
            return e === t || e.constructor === t || e.constructor === t.constructor
        }
        var g = n(173).UNKNOWN,
            m = n(173).VALID,
            v = n(173).INVALID;
        e.exports = new(n(21))(n(1305), {
            constraints: null,
            constaintConditions: null,
            before: {
                initialize: function() {
                    r.call(this)
                }
            },
            override: {
                _validate: function() {
                    return !0
                },
                isValid: function() {
                    return n(3).every(this.fields, function(e) {
                        return e.validity === m
                    })
                }
            },
            hasConstraintsOwnedBy: function(e) {
                return h.call(this, e).length > 0
            },
            resetFieldValidation: function(e) {
                var t = this.fields[e];
                l.call(this, e), t.validity = this.hasConstraintsOwnedBy(e) ? g : m, t.message = "", t.isValid = !0, this.trigger("validation:" + e, t)
            },
            validate: function() {
                var e = this,
                    t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    i = t.fields,
                    r = void 0 === i ? Object.keys(this.fields) : i,
                    o = n(56).defer(),
                    l = r.filter(Boolean);
                switch (u.call(this, l)) {
                    case v:
                        o.resolve(!1);
                        break;
                    case m:
                        o.resolve(!0);
                        break;
                    case g:
                        var d = n(3).chain(l).filter(function(t) {
                            return e.fields[t].validity === g
                        }).reduce(c.bind(this), {}).map(function(t, i) {
                            var r = e.isConstraintEnabledForField.bind(e, i),
                                o = n(3).partition(t, r),
                                l = o[0],
                                u = o[1];
                            n(3).invoke(u, "disable");
                            var c = n(3).invoke(l, "validate", e, e.get(i));
                            return c.length ? n(56).settled(c).always(s.bind(e, i)) : void a.call(e, i, m)
                        }).compact().value();
                        n(56).all(d).always(function() {
                            o.resolve(u.call(e, l) === m)
                        })
                }
                return l.length === Object.keys(this.fields).length && o.done(function(t) {
                    e.trigger("validation", t)
                }), o
            },
            getValidFieldValues: function(e) {
                var t = this,
                    i = n(56).defer();
                return this.validate({
                    fields: e
                }).then(function(n) {
                    if (n) {
                        var r = e.map(function(e) {
                            return t.get(e)
                        });
                        i.resolve.apply(i, r)
                    } else i.reject()
                }), i
            },
            isConstraintEnabledForField: function(e, t) {
                var r = this,
                    o = this.fields[e];
                if (!o) return !1;
                var s = this.constraintConditions[e],
                    a = s ? s.fields.map(this.get, this) : [];
                return !o.disabled && n(3).chain(d.call(this, e)).filter(function(e) {
                    return f(e, t)
                }).any(function(e) {
                    return s && i(s, e) ? Boolean(s.check.apply(r, a)) : !0
                }).value()
            },
            getInvalidFields: function() {
                return n(3).compact(n(3).map(this.fields, function(e, t) {
                    return e.validity === v ? t : void 0
                }))
            }
        })
    },
    1309: function(e, t) {
        "use strict";
        e.exports = {
            or: function(e, t) {
                return e | t
            }
        }
    },
    1310: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = void 0,
                i = e.name.replace(/\.[a-z0-9]{2,}$/, "");
            return t = i.replace(/_/g, " ").replace(/(\S)-(\S)/g, "$1 - $2"), t = n(405).capitalize(t).trim(), t || i.trim()
        }

        function r(e) {
            for (var t = e.length, n = new Array(t), i = 0; t > i; i++) n[i] = String.fromCharCode(e[i]);
            return window.btoa(n.join(""))
        }
        e.exports = {
            getTitleFromFile: i,
            getDataFromFile: function(e) {
                var t = n(56).defer();
                return n(40).read(e, {
                    onSuccess: function(o) {
                        var s = o.tags,
                            a = n(3).pick({
                                title: s.title || i(e),
                                publisherArtist: s.artist,
                                publisherAlbumTitle: s.album,
                                tags: n(3).compact([s.genre]),
                                artwork_data: s.picture ? "data:" + s.picture.format + ";base64," + r(s.picture.data) : void 0
                            }, n(3).identity);
                        t.resolve(a)
                    },
                    onError: function(n) {
                        t.resolve({
                            title: i(e)
                        })
                    }
                }), t
            }
        }
    },
    1311: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = !e || e.indexOf(a) > -1 ? s : e;
                return t.replace(p, ".json")
            }

            function r(e) {
                return t.ajax({
                    url: e,
                    type: "GET",
                    dataType: "json",
                    timeout: u
                })
            }
            var o = n(97).typedArrays ? Uint8Array : Array,
                s = n(55).get("wisHost") + "/90GaSwazbrh1_m.png",
                a = "/images/player-waveform-medium.png",
                l = 500,
                u = 1e4,
                c = new(n(235))({
                    maxLength: l
                }),
                d = 1.5,
                h = 1800,
                p = /\.png$/,
                f = (e.exports = {
                    loadWaveformData: function(e) {
                        var t = i(e),
                            o = c.get(t);
                        return o || (o = r(t).then(m, function() {
                            return n(56).resolve(g())
                        }), c.set(t, o)), o
                    }
                }, n(3).memoize(function(e) {
                    return function(t, n, i) {
                        return t[i] = Math.round(Math.pow((e - n) / e, 1 / d) * e), t
                    }
                })),
                g = n(3).memoize(function() {
                    for (var e = new o(h), t = 0; h > t; ++t) e[t] = Math.round(15 * Math.sin(t / h * Math.PI * 10) + 105);
                    return e
                }),
                m = function(e) {
                    return e.samples.reduce(f(e.height), new o(e.samples.length))
                }
        }).call(t, n(1))
    },
    1312: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            n(55).get("experiments") || n(55).set("experiments", n(1180)(e))
        }
    },
    1313: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = n(55).get("me");
            t ? t.set(e, {
                parse: !0
            }) : (t = new(n(64))(e, {
                isMe: !0,
                parse: !0
            }), t.baseUrl = function() {
                return this.getEndpointUrl("me")
            }, t.saveUrl = function() {
                return this.getEndpointUrl("meUpdate")
            }, n(55).set("me", t)), e && (t.lastFetchTime = Date.now())
        }
    },
    1314: function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            n(55).get("rollouts") || n(55).set("rollouts", n(1193)(e))
        }
    },
    1315: function(e, t, n) {
        "use strict";
        var i = e.exports = {
            segments: function() {
                return i._retrieveKruxValue("kxsegs") && i._retrieveKruxValue("kxsegs").split(",") || []
            },
            _retrieveKruxValue: function(e) {
                var t = "";
                return n(97).localStorage && (t = window.localStorage.getItem(e)), void 0 !== t && "" !== t ? t : (window.navigator.cookieEnabled && (t = window.document.cookie.match(e + "=([^;]*)"), t = t && unescape(t[1]) || ""), t)
            }
        }
    },
    1316: function(e, t, n) {
        "use strict";
        e.exports = {
            userId: function() {
                return n(134).get("rubicon_user_id")
            }
        }
    },
    1318: function(e, t, n) {
        "use strict";
        var i = {};
        e.exports = {
            loadLayout: function(e) {
                var t, r = i[e];
                return r ? r : (t = n(56).defer(), n(1172)("./" + e.replace("layouts/", ""))(function(e) {
                    t.resolve(e)
                }), r = i[e] = t.promise())
            }
        }
    },
    1320: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["adZone"],
            around: {
                parse: function(e, t) {
                    var i = n(82).parseResponse(t),
                        r = i.data,
                        o = [];
                    return r && o.push({
                        ad_urn: i.ad_urn,
                        campaign: "promoted",
                        kind: r.kind,
                        origin: r,
                        promoted_by: i.promoted_by_user,
                        promoted_by_urn: i.promoted_by_urn,
                        tracking: i.tracking
                    }), e(o)
                }
            },
            defaults: {
                parse: function(e) {
                    return e
                }
            },
            override: {
                url: function() {
                    return null !== this.next_href ? this.next_href : n(82).getAdUrl(this.adZone, n(3).result(this, "adZoneParams"))
                }
            }
        })
    },
    1323: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e ? "on" : "off";
            this._onFieldsChange = this._onFieldsChange || n(3).throttle(r.bind(this), this.serialization.saveOnceIn, {
                leading: !1
            }), this[t](o.call(this), this._onFieldsChange)
        }

        function r() {
            var e = this,
                t = this.serialization.fields.reduce(function(t, n) {
                    return t[n] = e.get(n), t
                }, {});
            l.set(this.serialization.storeKey, t)
        }

        function o() {
            return "change:" + this.serialization.fields.join(" change:")
        }

        function s() {
            return !this._isStoringFields && this.serialization.storeKey && this.serialization.fields && this.serialization.fields.length
        }
        var a, l = new(n(105))("persistentFormFields", "session");
        a = {
            fields: [],
            storeKey: null,
            saveOnceIn: 3e3,
            restoreAndStoreOnSetup: !1
        };
        e.exports = new(n(21))({
            _isStoringFields: !1,
            _onFieldsChange: null,
            after: {
                setup: function() {
                    this.serialization = n(3).assign({}, a, this.serialization), this.serialization.restoreAndStoreOnSetup && (this.restoreFields(), this.startStoringFields())
                }
            },
            applyTo: function(e) {
                e.constructor.onCleanup = function(e) {
                    e.stopStoringFields()
                }
            },
            restoreFields: function() {
                var e = l.get(this.serialization.storeKey);
                e && this.set(e)
            },
            startStoringFields: function() {
                s.call(this) && (this._isStoringFields = !0, i.call(this, !0))
            },
            stopStoringFields: function() {
                this._isStoringFields && (this._isStoringFields = !1, i.call(this, !1), this._onFieldsChange = null)
            },
            clearStoredValues: function() {
                l.set(this.serialization.storeKey, null)
            },
            _getStore: function() {
                return l
            }
        })
    },
    1324: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && new Date(e)
        }
        e.exports = new(n(21))(n(954), {
            requires: ["requiredModelAttributes"],
            applyTo: function(e) {
                e.constraints.FORM = (e.constraints.FORM || []).concat([
                    [n(530), {
                        nullable: !0,
                        message: n(52).t("Track must be made available before itâ€™s made unavailable."),
                        fields: ["scheduledPublicDate", "scheduledPrivateDate"]
                    }]
                ]), this.merge(e, {
                    requiredModelAttributes: e.getScheduledAttributes()
                })
            },
            around: {
                getAttributesToBeSaved: function(e) {
                    var t = e.apply(this, [].slice.call(arguments, 1));
                    return n(3).assign(t, this.getScheduledAttributesToBeSaved()), t
                },
                getAttributesFromModel: function(e) {
                    var t = e.apply(this, [].slice.call(arguments, 1)),
                        r = this.getAudible();
                    return n(3).assign(t, {
                        scheduledPublic: !!r.get("scheduled_public_date"),
                        scheduledPrivate: !!r.get("scheduled_private_date"),
                        scheduledPublicDate: i(r.get("scheduled_public_date")),
                        scheduledPrivateDate: i(r.get("scheduled_private_date")),
                        scheduledTimezone: r.get("scheduled_timezone")
                    }), t
                }
            }
        })
    },
    1325: function(e, t, n) {
        "use strict";

        function i(e, t, n) {
            function i() {
                s.clearTimeout(l), s.clearTimeout(a)
            }

            function o() {
                e() && (i(), n())
            }
            var s = window,
                a = s.setTimeout(i, t),
                l = s.setInterval(o, r);
            o()
        }
        var r = 50,
            o = 2e4,
            s = window.performance && window.performance.timing,
            a = "fetchStart",
            l = !0;
        e.exports = s ? new(n(21))({
            defaults: {
                performanceSelector: null
            },
            after: {
                render: function() {
                    var e, t, r, u = this;
                    l && (l = !1, (e = this.performanceSelector) && (t = function() {
                        return u.$(e).length
                    }, r = function() {
                        var e = Date.now() - s[a];
                        n(57).trigger("tracking:appLoad", {
                            latency: e
                        })
                    }, i(t, o, r)))
                }
            }
        }) : new(n(21))({})
    },
    1326: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requirePrototype: n(65).prototype,
            defaults: {
                isPrivate: function() {
                    return "private" === this.get("sharing")
                },
                extractSecretToken: n(3).noop
            },
            isPublic: function() {
                return !this.isPrivate()
            },
            around: {
                url: function(e, t) {
                    var i = this.get("secret_token"),
                        r = e(t);
                    return i && this.isPrivate() ? n(62).modify(r, {
                        query: {
                            secret_token: i
                        }
                    }) : r
                },
                parse: function(e, t) {
                    var i;
                    return "string" == typeof this.baseUrl && (i = n(62).parse(this.baseUrl).query.secret_token), i || (i = this.extractSecretToken(t)), i && (t.secret_token = i), e(t)
                }
            }
        })
    },
    1327: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, i) {
                var r = n(3).reduce(i, function(i, r) {
                        var o = e.get(r);
                        return n(3).isObject(o) ? i[r] = t.extend(!0, {}, o) : e.attrExists(r) && (i[r] = o), i
                    }, {}),
                    o = n(3).reject(i, function(t) {
                        return e.attrExists(t)
                    });
                this.rollback = function() {
                    n(3).each(o, function(t) {
                        e.unset(t)
                    }), e.set(r)
                }
            }
            e.exports = new(n(21))({
                requirePrototype: n(65).prototype,
                createSnapshot: function(e) {
                    return new i(this, e)
                }
            })
        }).call(t, n(1))
    },
    1328: function(e, t, n) {
        "use strict";
        var i = 2e3,
            r = 3e4,
            o = 100;
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = e.constructor;
                this.before(t, {
                    onCleanup: function(e) {
                        e.pollOff()
                    }
                })
            },
            after: {
                initialize: function() {
                    this._polling = {
                        circuit: null,
                        callbacks: {}
                    }
                }
            },
            pollOn: function(e, t, s) {
                var a = this._polling,
                    l = a.circuit;
                l || (l = a.circuit = new(n(148))({
                    tolerance: 1,
                    baseDelay: i,
                    maxDelay: r,
                    backoffRate: 1.5,
                    giveUp: o,
                    enabled: !1
                }), l.on("enabled", function() {
                    this.fetch({
                        attrs: Object.keys(a.callbacks),
                        batch: !1
                    }), l.failed()
                }, this).on("giveup", function() {
                    this.pollOff()
                }, this)), a.callbacks[e] = a.callbacks[e] || [], a.callbacks[e].length || l.succeeded(), this._polling.callbacks[e].push({
                    callback: t,
                    context: s
                }), this.on("change:" + e, t, s)
            },
            pollOff: function(e, t, i) {
                var r, o = this._polling,
                    s = {};
                3 === arguments.length && o.callbacks[e] ? (r = [], s[e] = [], o.callbacks[e].forEach(function(n) {
                    n.callback === t && n.context === i ? s[e].push(n) : r.push(n)
                }), o.callbacks[e] = r, o.callbacks[e].length || delete o.callbacks[e]) : e ? (s = {
                    attr: o.callbacks[e] || []
                }, delete o.callbacks[e]) : (s = o.callbacks, o.callbacks = {}), n(3).each(s, function(e, t) {
                    e.forEach(function(e) {
                        this.off("change:" + t, e.callback, e.context)
                    }, this)
                }, this), !Object.keys(o.callbacks).length && o.circuit && (o.circuit.dispose(), o.circuit = null)
            }
        })
    },
    1329: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return [l, e, t].join(u)
        }

        function r(e) {
            var t = e.storage,
                n = e.keyName,
                i = e._store;
            if (t) try {
                return t.setItem(n, JSON.stringify(i)), !0
            } catch (r) {
                return !1
            }
        }

        function o(e) {
            return "local" === e && n(97).localStorage ? window.localStorage : "session" === e && n(97).sessionStorage ? window.sessionStorage : null
        }

        function s(e) {
            var t = e.storage,
                n = e.keyName;
            if (t) try {
                return JSON.parse(t.getItem(n) || "{}")
            } catch (i) {}
            return {}
        }

        function a(e) {
            var t = {
                dontPersist: !0
            };
            if (!e.key) return void n(3).each(n(3).values(d.local).concat(n(3).values(d.session)), function(e) {
                e.reset(t)
            });
            c.lastIndex = 0;
            var i = c.exec(e.key) || [],
                r = i[1],
                o = i[2];
            r && o && ! function() {
                var e = d[r][o];
                if (e) {
                    var i = s(e),
                        a = Object.keys(i);
                    n(3).each(i, function(n, i) {
                        e.set(i, n, t)
                    }), n(3).difference(e.keys(), a).forEach(function(n) {
                        e.unset(n, t)
                    })
                }
            }()
        }
        var l = "V2",
            u = "::",
            c = new RegExp("^" + l + u + "(\\S+?)" + u + "(\\S+)");
        window.addEventListener("storage", a, !1);
        var d = {
            local: {},
            session: {}
        };
        e.exports = new(n(21))({
            storage: null,
            keyName: null,
            type: null,
            namespace: null,
            around: {
                initialize: function(e, t) {
                    var r = arguments.length <= 2 || void 0 === arguments[2] ? "local" : arguments[2];
                    return d[r][t] ? d[r][t] : (d[r][t] = this, e(), this.type = r, this.namespace = t, this.storage = o(r, t), this.keyName = i(r, t), this._store = s(this), void(this.length = n(3).keys(this._store).length))
                }
            },
            after: {
                set: function(e, t, n) {
                    n && n.dontPersist || r(this)
                },
                unset: function(e, t) {
                    t && t.dontPersist || r(this)
                },
                reset: function(e) {
                    e && e.dontPersist || r(this)
                }
            },
            dispose: function() {
                this.storage && this.storage.removeItem(this.keyName), this.reset({
                    dontPersist: !0
                }), delete d[this.type][this.namespace]
            },
            write: function() {
                r(this)
            }
        })
    },
    1330: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            onCleanup: null,
            onIncrement: null,
            onDecrement: null,
            after: {
                initialize: function(e) {
                    this._counts = {}, this._totalCount = 0, this._needsGC = !1, e = e || {}, this._autoCleanup = !!e.autoCleanup, this.onCleanup = e.onCleanup, this.onIncrement = e.onIncrement, this.onDecrement = e.onDecrement
                },
                reset: function() {
                    this._counts = {}, this._totalCount = 0, this._needsGC = !1
                },
                set: function(e, t) {
                    this._counts[e] || (this._counts[e] = 1, this._totalCount += 1, this.onIncrement && this.onIncrement(t, e, 1))
                },
                unset: function(e) {
                    this._totalCount -= this.countFor(e), delete this._counts[e]
                }
            },
            before: {
                reset: function() {
                    this.onCleanup && this.forEach(this.onCleanup)
                }
            },
            countFor: function(e) {
                return this._counts[e] || 0
            },
            totalCount: function() {
                return this._totalCount
            },
            increment: function(e, t) {
                return this.has(e) && (t = "number" == typeof t ? t : 1, t > 0 ? (this._totalCount += t, this._counts[e] = (this._counts[e] || 0) + t, this.onIncrement && this.onIncrement(this.get(e), e, t)) : 0 > t && this.decrement(e, -t)), this
            },
            decrement: function(e, t) {
                return this.has(e) && (t = "number" == typeof t ? t : 1, t > 0 ? (this._totalCount -= t, this._counts[e] = (this._counts[e] || 1) - t, this.onDecrement && this.onDecrement(this.get(e), e, t), this._counts[e] <= 0 && (this._needsGC = !0, this._autoCleanup && this.cleanup())) : 0 > t && this.increment(e, -t)), this
            },
            cleanup: function() {
                var e, t, n = this.onCleanup,
                    i = !1;
                if (this._needsGC) {
                    for (e in this._counts) this._counts.hasOwnProperty(e) && this._counts[e] <= 0 && (n && (t = this.get(e), n.call(t, t, e)), i = !0, this.unset(e));
                    this._needsGC = !1
                }
                return i
            },
            changeKey: function(e, t) {
                if (e !== t) {
                    var n = this.get(e),
                        i = this.countFor(e);
                    this.unset(e), this.set(t, n), this.increment(t, i - 1)
                }
            }
        })
    },
    1340: function(e, t, n) {
        "use strict";
        e.exports = n(73).extend({
            model: n(204),
            setup: function() {
                this.setToFullyPopulated()
            }
        })
    },
    1341: function(e, t, n) {
        "use strict";

        function i(e) {
            return "playlist" === e.resource_type ? e.attrExists("tracks") : !0
        }

        function r(e) {
            return e.fetch()
        }
        var o = n(22).Events;
        e.exports = function(e) {
            function t(e) {
                i(e) ? (l.push.apply(l, e.getSounds()), s()) : d || (d = !0, r(e).always(function() {
                    d = !1
                }).then(function() {
                    return t(e)
                }, s))
            }

            function s() {
                for (; !u && l.length;) f.trigger("data", l.shift(), p);
                u || 0 !== l.length || (e.isEnded() ? a() : e.resume())
            }

            function a() {
                h || (h = !0, f.trigger("end"))
            }
            var l = [],
                u = !0,
                c = !1,
                d = !1,
                h = !1,
                p = void 0;
            e.on("data", function(n, i) {
                e.pause(), p = i, t(n)
            }), e.on("end", function() {
                d || 0 !== l.length || a()
            });
            var f = n(3).assign({
                pause: function() {
                    u = !0
                },
                peek: function() {
                    if (c) return void 0;
                    if (l[0]) return {
                        sound: l[0],
                        metadata: p
                    };
                    var t = e.peek();
                    if (!t) return void 0;
                    var n = t.audible,
                        r = t.metadata;
                    if (i(n)) {
                        var o = n.getSounds();
                        if (o.length) return {
                            sound: o[0],
                            metadata: r
                        }
                    }
                    return void 0
                },
                resume: function() {
                    !u || c || h || (u = !1, d || s())
                },
                isEnded: function() {
                    return h
                },
                dispose: function() {
                    c = !0, u = !0, f.off(), e.dispose()
                }
            }, o);
            return f
        }
    },
    1342: function(e, t, n) {
        "use strict";
        var i = n(22).Events;
        e.exports = function(e) {
            var t = !1,
                r = !1,
                o = n(3).assign({
                    peek: function() {
                        return r || !e ? void 0 : {
                            audible: e,
                            metadata: e.getQueueMetadataAt(0)
                        }
                    },
                    resume: function() {
                        if (!t && !r && e) {
                            var n = e;
                            e = null, t = !0, o.trigger("data", n, n.getQueueMetadataAt(0)), o.trigger("end")
                        }
                    },
                    pause: function() {},
                    isEnded: function() {
                        return t
                    },
                    dispose: function() {
                        o.off(), r = !0
                    }
                }, i);
            return o
        }
    },
    1343: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return r(e, t) || void 0
        }

        function r(e, t) {
            return (e.audibleAt || e.at).call(e, t)
        }
        var o = n(22).Events,
            s = 3,
            a = 2e3;
        e.exports = function(e) {
            function t() {
                _ = y ? e.indexOf(y) : -1
            }

            function r(t) {
                var n = e.indexOf(t);
                _ >= n && ++_
            }

            function l(e, t, n) {
                var i = n.index;
                _ >= i && --_
            }

            function u() {
                for (var t = void 0; !m && _ + 1 < e.length;) ++_, t = i(e, _), t && (y = e.at(_), x.trigger("data", t, e.getQueueMetadataAt(_)));
                m || (e.isFullyPopulated() ? p() : w || (w = !0, c()))
            }

            function c() {
                e.fetch({
                    reset: !1,
                    remove: !1
                }).then(d, h)
            }

            function d() {
                b = s, w = !1, u()
            }

            function h() {
                --b, b ? v = window.setTimeout(c, a) : (w = !1, p())
            }

            function p() {
                f = !0, x.trigger("end")
            }
            var f = !1,
                g = !1,
                m = !0,
                v = void 0,
                _ = -1,
                y = void 0,
                b = s,
                w = !1;
            e.on("reset", t).on("add", r).on("remove", l);
            var x = n(3).assign({
                peek: function() {
                    if (g) return void 0;
                    for (var t = _ + 1; t < e.length; t++) {
                        var n = i(e, t);
                        if (n) return {
                            audible: n,
                            metadata: e.getQueueMetadataAt(t)
                        }
                    }
                    return void 0
                },
                resume: function() {
                    !m || f || g || (m = !1, u())
                },
                pause: function() {
                    m = !0
                },
                isEnded: function() {
                    return f
                },
                dispose: function() {
                    e.off("reset", t).off("add", r).off("remove", l), this.off(), g = !0, m = !0, window.clearTimeout(v)
                }
            }, o);
            return x
        }
    },
    1344: function(e, t, n) {
        "use strict";
        var i = n(22).Events;
        e.exports = function(e, t) {
            function r() {
                var e = Math.floor(Math.random() * f.length),
                    t = f.splice(e, 1),
                    n = t[0];
                return n
            }

            function o() {
                if (m && !y && f.length) {
                    var t = f.shift();
                    w.trigger("data", l(t)), m = !1
                }
                for (; !y && f.length && (e.isEnded() || f.length === g);) w.trigger("data", l(r()));
                e.isEnded() ? b || 0 !== f.length || (w.trigger("end"), b = !0) : b || y || e.resume()
            }

            function s() {
                v = n(56).promise(function(n) {
                    e.on("data", function(i, r) {
                        d || t && i !== t ? d ? (f.push({
                            sound: i,
                            index: h++,
                            metadata: r
                        }), o()) : p.push({
                            sound: i,
                            metadata: r
                        }) : (d = !0, e.pause(), p.forEach(function(e, t) {
                            e.index = t - p.length
                        }), f.push({
                            sound: i,
                            index: h++,
                            metadata: r
                        }), n())
                    }), e.on("end", function() {
                        b || 0 !== f.length ? o() : (w.trigger("end"), b = !0)
                    })
                })
            }

            function a() {
                S.off(), w.off(), e.dispose()
            }
            var l = arguments.length <= 2 || void 0 === arguments[2] ? n(3).identity : arguments[2],
                u = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3],
                c = arguments.length <= 4 || void 0 === arguments[4] ? 0 : arguments[4],
                d = !1,
                h = c,
                p = [],
                f = [],
                g = 1,
                m = !!t,
                v = void 0,
                _ = function() {
                    return v || s(), d || e.resume(), v
                },
                y = !0,
                b = !1,
                w = n(3).assign({
                    shuffle: function() {
                        g = u
                    },
                    unshuffle: function() {
                        return g = 1, f.splice(0, f.length).map(l)
                    },
                    pause: function() {
                        y = !0, d && e.pause()
                    },
                    peek: function() {
                        return e.peek()
                    },
                    resume: function() {
                        y = !1, _().then(o)
                    },
                    isEnded: function() {
                        return e.isEnded() && 0 === f.length
                    }
                }, i),
                x = !0,
                k = !1,
                S = n(3).assign({
                    pause: function() {
                        x = !0
                    },
                    resume: function() {
                        var e = this;
                        x && (x = !1, _().then(function() {
                            for (; !x && p.length;) e.trigger("data", l(p.pop()));
                            k || 0 !== p.length || (e.trigger("end"), k = !0)
                        }))
                    },
                    isEnded: function() {
                        return k
                    }
                }, i);
            return {
                next: w,
                prev: S,
                dispose: a
            }
        }
    },
    1345: function(e, t, n) {
        "use strict";
        var i = 9e5;
        e.exports = n(73).extend({
            defaults: {
                pollingInterval: i
            },
            url: function() {
                return n(3).result(this, "baseUrl")
            },
            parse: function(e) {
                return e
            },
            fetch: function(e) {
                var t = e && e.url || n(3).result(this, "url");
                return t ? n(22).Collection.prototype.fetch.call(this, e) : n(56).defer().done(e && e.success).resolve([])
            },
            bulkFetch: function() {
                return this.fetch()
            },
            setLimit: n(3).noop,
            isFullyPopulated: function() {
                return !1
            },
            startPolling: function() {
                this.isPolling() || this._pollingId || (this._pollingId = window.setInterval(this.fetch.bind(this), this.options.pollingInterval))
            },
            stopPolling: function() {
                window.clearInterval(this._pollingId), this._pollingId = null
            },
            isPolling: function() {
                return !!this._pollingId
            }
        })
    },
    1346: function(e, t, n) {
        "use strict";

        function i() {
            this.setDirty(!0)
        }
        e.exports = n(221).extend({
            className: "g-box-full sceneLayer",
            addNode: function(e) {
                var t = e[0],
                    r = n(3).assign({
                        el: this.el,
                        scale: this.scale
                    }, e[1]),
                    o = new t(r);
                o.className && this.$el.addClass(o.className), this.addSubview(o).on("dirty", i, this).render()
            },
            onCanvasResize: function() {
                n(3).invoke(this.subviews, "onResize")
            },
            setDirty: function(e) {
                (this.isDirty = e) && this.trigger("dirty")
            },
            update: function() {
                if (!this.disposed && this.isDirty) {
                    var e, t, n = !1;
                    for (this.context.clearRect(0, 0, this.el.width, this.el.height), e = 0; t = this.subviews[e]; ++e) t.draw(), n = n || t.isDirty;
                    this.setDirty(n)
                }
            }
        })
    },
    1347: function(e, t, n) {
        "use strict";

        function i() {
            r.call(this)
        }

        function r() {
            this._raf || (this._raf = window.requestAnimationFrame(this.update))
        }
        e.exports = n(162).extend([n(22).Events, {
            _layers: null,
            _raf: null,
            initialize: function() {
                this._layers = [], this.update = this.update.bind(this)
            },
            teardown: function() {
                window.cancelAnimationFrame(this._raf), this._raf = null;
                for (var e; e = this._layers.pop();) this.stopListening(e)
            },
            getLayers: function() {
                return this._layers
            },
            addLayer: function(e) {
                this._layers.push(e), this.listenTo(e, "dirty", i), e.isDirty && r.call(this)
            },
            update: function() {
                this._raf = null;
                var e, t;
                for (e = 0; t = this._layers[e]; ++e) t.isDirty && t.update()
            }
        }])
    },
    1348: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("me"),
                t = r(e.getConsumerPlan()),
                i = r(e.getPlan()),
                o = n(1309).or(t, i);
            return "number" == typeof o && n(134).set(n(3).assign({}, f, {
                value: o,
                expirationInDays: 30
            })), o
        }

        function r(e) {
            var t = 0;
            switch (e) {
                case h:
                case u:
                    t = 16;
                    break;
                case p:
                case c:
                    t = 32;
                    break;
                case s:
                    t = 64;
                    break;
                case a:
                case d:
                case l:
                    t = 0
            }
            return t
        }
        var o = n(72).productIds,
            s = o.CONSUMER_SUBSCRIPTION_HIGH_TIER,
            a = o.CONSUMER_SUBSCRIPTION_FREE,
            l = o.CREATOR_SUBSCRIPTION_FREE,
            u = o.CREATOR_SUBSCRIPTION_PRO,
            c = o.CREATOR_SUBSCRIPTION_PRO_UNLIMITED,
            d = o.CREATOR_GIFT_FREE,
            h = o.CREATOR_GIFT_PRO,
            p = o.CREATOR_GIFT_PRO_UNLIMITED,
            f = {
                name: "ja",
                domainStrict: !1,
                secure: !1
            };
        e.exports = {
            _subsCookie: null,
            initialize: function() {
                var e = this;
                n(63).isLoggedIn() && (this._subsCookie = i()), n(57).once("connect:hasUserData", function() {
                    e._subsCookie = i()
                }), n(57).once("connect:logout", function() {
                    n(134).unset(f), e._subsCookie = null
                })
            }
        }
    },
    1349: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                n(3).each({
                    id: 1014549368,
                    language: "en",
                    format: "3",
                    color: "ffffff",
                    label: "zEeoCJCauAIQ-Jbj4wM",
                    value: 0
                }, function(e, t) {
                    window["google_conversion_" + t] = e
                }), n(125).insertScript("//www.googleadservices.com/pagead/conversion.js")
            }
        }
    },
    1350: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                var e = window._comscore = window._comscore || [];
                e.push({
                    c1: "2",
                    c2: "16601931"
                }), n(125).insertScript("https://sb.scorecardresearch.com/beacon.js", {
                    removeAfterLoad: !0
                })
            }
        }
    },
    1351: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                var e = window._gaq = window._gaq || [];
                e.push(["_setAccount", "UA-2519404-22"], ["_gat._anonymizeIp"], ["_setSampleRate", "1"], ["_trackPageview"], ["_trackPageLoadTime"]), n(125).insertScript("https://ssl.google-analytics.com/ga.js")
            }
        }
    },
    1352: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                var e = n(55).get("geoip"),
                    t = e && e.get("country_code");
                "GB" !== t || n(97).doNotTrack || n(125).insertScript("//cdn.krxd.net/controltag?confid=Kn2GCuRg")
            }
        }
    },
    1353: function(e, t, n) {
        "use strict";
        e.exports = {
            include: function() {
                window._qoptions = {
                    qacct: "p-47_zcqmJsLHXQ"
                }, n(125).insertScript("//secure.quantserve.com/quant.js")
            }
        }
    },
    1354: function(e, t, n) {
        "use strict";
        var i = "//secure-assets.rubiconproject.com/utils/xapi/multi-sync.js",
            r = "rubicon_last_sync",
            o = {
                name: r,
                value: "synced",
                expirationInDays: 1,
                secure: !0
            },
            s = function(e) {
                return n(3).contains(n(83).monetizableCountryCodes(), e.get("country_code"))
            };
        e.exports = {
            include: function() {
                var e = n(55).get("geoip"),
                    t = n(134).get(r),
                    a = n(55).get("me").getPerk("adFree"),
                    l = n(97).doNotTrack;
                if (!l && !a && !t && s(e)) {
                    var u = {
                        "data-partner": n(55).get("rubiconPartnerCode"),
                        "data-region": e.get("region"),
                        "data-country": e.get("country_code"),
                        "data-endpoint": "eu"
                    };
                    return n(125).insertSandboxedScript(i, n(3).omit(u, n(3).isUndefined)).then(function() {
                        return n(134).set(o)
                    }, function(e) {
                        return !1
                    })
                }
            }
        }
    },
    1355: function(e, t, n) {
        "use strict";
        var i = n(101).INITIAL,
            r = n(101).CURRENT_COMMENT,
            o = n(101).CURRENT_TIMESTAMP,
            s = n(101).ACTIVE_TIMESTAMP,
            a = 300,
            l = 3e3,
            u = 1e3,
            c = function() {
                this.setup.apply(this, arguments)
            };
        c.extend = n(22).Model.extend, n(3).assign(c.prototype, n(22).Events, {
            constructor: c,
            currentComment: null,
            activeTimestamp: null,
            currentTimestamp: null,
            commentQuotaTimeout: null,
            commentQuotaExceeded: !0,
            commentIntervalTimeout: null,
            commentIntervalExceeded: !0,
            currentState: i,
            interactingWithComments: !1,
            setup: function(e, t, a) {
                this.collection = new(n(513))(null, {
                    sound_id: e,
                    secret_token: a
                }), this.listenTo(this, i, this.onInitialState).listenTo(this, r, this.onCurrentComment).listenTo(this, o, this.onCurrentTimestamp).listenTo(this, s, this.onActiveTimestamp), this.sound = new(n(66))({
                    id: e,
                    resource_id: t
                }), this.listenTo(this.sound, "time", this.onAudioTime)
            },
            dispose: function() {
                this.stopListening(), this.sound.release(), this.collection.release()
            },
            onInitialState: function() {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = null
            },
            onCurrentComment: function(e, t) {
                this.activeTimestamp = null, this.currentComment = t, this.currentTimestamp = null
            },
            onCurrentTimestamp: function(e) {
                this.activeTimestamp = null, this.currentComment = null, this.currentTimestamp = e
            },
            onActiveTimestamp: function(e) {
                this.activeTimestamp = e, this.currentComment = null, this.currentTimestamp = null
            },
            goToState: function(e) {
                var t = this.canGoToState.apply(this, arguments);
                return t && (this.currentState = e, this.trigger.apply(this, arguments)), t
            },
            canGoToState: function(e) {
                var t = this.activeTimestamp && this.currentState === s;
                switch (e) {
                    case o:
                        return !t;
                    case r:
                        return this.commentIntervalExceeded && arguments[1] !== this.currentComment && !t;
                    case i:
                        return !0;
                    case s:
                        var n = arguments[1];
                        return n !== this.activeTimestamp && n <= this.sound.getMediaDuration();
                    default:
                        return !1
                }
            },
            onAudioTime: n(3).throttle(function(e) {
                var t = this;
                if (!this.disposed) {
                    var n, i = e.sound.currentTime(),
                        s = window;
                    !this.interactingWithComments && this.sound.isPlaying() && (n = this.collection.getCommentAtTimestamp(i, a), n ? this.goToState(r, i, n) && (s.clearTimeout(this.commentIntervalTimeout), this.commentIntervalExceeded = !1, s.setTimeout(function() {
                        t.commentIntervalExceeded = !0
                    }, u), s.clearTimeout(this.commentQuotaTimeout), this.commentQuotaExceeded = !1, this.commentQuotaTimeout = s.setTimeout(function() {
                        t.commentQuotaExceeded = !0, t.onAudioTime(e)
                    }, l)) : this.commentQuotaExceeded && this.goToState(o, i))
                }
            }, a)
        }), e.exports = n(558).applyTo(c, {
            onCleanup: function(e) {
                e.dispose()
            },
            cleanupInstantly: !0,
            hashFn: function(e) {
                return e
            }
        })
    },
    1356: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                function t(e) {
                    return u = !e && u ? Math.min(1e4, 1.5 * u) : 1e3
                }

                function i(e) {
                    c = window.setTimeout(r, t(e))
                }

                function r() {
                    l = o(e).done(s).fail(a)
                }

                function s(e) {
                    switch (e.status) {
                        case n(312).QUEUED:
                        case n(312).PREPARING:
                            i();
                            break;
                        case n(312).TRANSCODING:
                            i(e.percentage === d), d = e.percentage, h.notify(d);
                            break;
                        case n(312).FINISHED:
                            h.resolve();
                            break;
                        case n(312).NOT_FOUND:
                        case n(312).FAILURE:
                            h.reject()
                    }
                }

                function a(e) {
                    500 === e.status ? i() : h.reject()
                }
                var l, u, c, d, h = n(56).defer(),
                    p = h.promise();
                return i(), p.abort = function() {
                    window.clearTimeout(c), l && l.abort()
                }, p
            }

            function r(e) {
                var i, r;
                return r = t.ajax({
                    url: "transcodings",
                    type: "POST",
                    data: {
                        uid: e
                    },
                    contentType: "application/json"
                }), i = r.then(null, function(e) {
                    return 500 === e.status ? n(56).resolve() : void 0
                }), i.abort = r.abort.bind(r), i
            }

            function o(e) {
                return t.getJSON("transcodings/" + e)
            }
            e.exports = function(e) {
                var t, n, o;
                return t = r(e), o = t.then(function() {
                    return n = i(e)
                }), o.abort = function() {
                    t.abort(), n && n.abort()
                }, o
            }
        }).call(t, n(1))
    },
    1829: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-fixed-fluid{position:relative}.l-fixed-fluid .l-sidebar-left{position:absolute;top:30px;bottom:0;left:0;width:200px}.l-fixed-fluid .l-sidebar-left .l-fixed{width:200px}.l-fixed-fluid .l-main{margin:0 0 0 230px;padding-top:30px}.l-fixed-fluid .l-sidebar-left>.l-footer{position:fixed;bottom:0;width:200px}@media (max-width:1079px){.l-fixed-fluid .l-main{margin-left:220px}}", ""])
    },
    1831: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-fluid-fixed{position:relative}.l-fluid-fixed .l-sidebar-right{position:absolute;top:30px;bottom:0;right:0;width:300px}.l-fluid-fixed .l-sidebar-right .l-fixed{width:300px}.l-fluid-fixed .l-sidebar-right .l-footer{position:relative;padding-bottom:80px}.l-fluid-fixed .l-sidebar-right .sidebarModule.mobileApps{margin-bottom:0;border-bottom:none}.l-fluid-fixed .l-main{padding:30px 30px 0 0;margin:0 330px 0 0}@media (max-width:1079px){.l-fluid-fixed .l-main{padding-right:20px;margin-right:320px}}", ""])
    },
    1833: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-one-column>.l-main{padding:30px 0}", ""])
    },
    2376: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-fixed-fluid">\n  <div class="l-sidebar-left">\n\n  </div>\n  <div class="l-main">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    2378: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="l-fluid-fixed">\n  <div class="l-main sc-border-light-right">\n\n  </div>\n  <div class="l-sidebar-right">\n\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    2754: function(e, t, n) {
        var i = n(1829);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
});