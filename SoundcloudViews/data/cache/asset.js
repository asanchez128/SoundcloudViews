webpackJsonp([6], {
    156: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                a.current.dispose()
            }

            function r(e) {
                if (e.key) {
                    var t, n, i, r;
                    t = m.exec(e.key), t && (i = c.getItem(e.key), n = t[0], r = u[n], r && null === i ? r === a.current ? r.store.write() : (r.dispose(), delete u[n]) : !r && i && (u[n] = new l(n)))
                }
            }

            function s() {
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

            function o(e) {
                a.current.set("pong", e)
            }
            var a, l, u, c, d = 3e4,
                h = 1e3,
                p = "inst_",
                f = p + Date.now(),
                m = new RegExp(p + "\\d{13}$");
            n(97).localStorage ? (a = e.exports = {
                initialize: function() {
                    var e, a, h, p, g = this;
                    for (c = window.localStorage, u = {}, this.current = u[f] = new l(f), u[f].store.write(), ["each", "some", "every", "map", "filter", "find"].forEach(function(e) {
                            g[e] = n(3)[e].bind(n(3), u)
                        }), e = 0, a = c.length; a > e; ++e) h = c.key(e), h !== this.current.store.keyName && (p = m.exec(h)) && (u[p[0]] = new l(p[0]));
                    window.setInterval(s, d), n(57).on("broadcast:instances:ping", o), t(window).on("unload", i), window.addEventListener("storage", r, !1)
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
    164: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e === n(55).get("me").id,
                i = n(63).isLoggedIn();
            return t && i
        }

        function r(e) {
            var t = n(354).numSessionPlays(),
                i = 1 === s.get(u),
                r = e.userInitiated;
            !n(63).isLoggedIn() && !i && t > f && r && this.showSignupTeaser(e.sound.getUrn())
        }
        var s = new(n(105))("already-seen"),
            o = "listen-upsell",
            a = "stream-upsell",
            l = "user-upsell",
            u = "signup-teaser-modal",
            c = 36e5,
            d = 24 * c,
            h = 7 * d,
            p = 4,
            f = 2,
            m = e.exports = {
                getUpsellableTrackCount: function() {
                    return p
                },
                couldHaveUserUpsell: function(e) {
                    return i(e) && !m.alreadySeenUserUpsell() && !n(55).get("me").isPremium()
                },
                isValidSound: function(e) {
                    var t = n(55).get("me"),
                        i = "sound" === e.resource_type;
                    if (i && !e.hasVisuals() && !t.isPremium() && t.get("track_count") >= p && t.owns(e)) {
                        var r = new Date(e.get("created_at")),
                            s = Date.now(),
                            o = new Date(s - c),
                            a = new Date(s - h);
                        return o >= r && r >= a
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
                    return 1 === s.get(o)
                },
                alreadySeenUserUpsell: function() {
                    return 1 === s.get(a) ? (s.unset(a), this.dismissUserUpsell(), !0) : 1 === s.get(l)
                },
                dismissListenUpsell: function() {
                    s.set(o, 1)
                },
                dismissUserUpsell: function() {
                    s.set(l, 1)
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
                    i.open(), s.set(u, 1)
                }
            }
    },
    215: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.isSnippetized() && s(e.get("monetization_model")).length > 0
        }

        function r(e) {
            return e.soundsCollection.some(i)
        }

        function s(e) {
            switch (e) {
                case "SUB_MID_TIER":
                    return [n(72).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER];
                case "SUB_HIGH_TIER":
                    return [n(72).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER];
                default:
                    return []
            }
        }

        function o(e) {
            return a(e).then(function(e) {
                return e.release(), e.isAvailable()
            })
        }

        function a(e) {
            var t = new(n(77))({
                id: e
            });
            return t.isPopulated() || t.hasDataForView(["preselected_term"]) ? n(56).resolve(t) : t.fetch().then(function() {
                return t
            })
        }
        e.exports = {
            monetizationModelToProductIds: s,
            soundRequiresUpsell: i,
            playlistRequiresUpsell: r,
            isProductAvailable: o
        }
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
    241: function(e, t, n) {
        "use strict";
        var i = {
            geoblocked: "geoblocking",
            monetizable: "monetization",
            "monetizable-pending": "monetizationPending",
            "private": "sharing",
            restricted: "managedByFeeds",
            scheduled: "scheduling"
        };
        e.exports = n(54).extend({
            className: "audibleAttributeDesc",
            ModelClass: n(75),
            defaults: {
                type: null
            },
            setup: function(e) {},
            getModelData: function() {
                return {}
            },
            template: function() {
                var e = i[this.options.type];
                return n(342)[e](this.model)
            }
        })
    },
    261: function(e, t, n) {
        "use strict";
        var i = n(116).parseXFBML,
            r = n(116).isFacebookSDKReady,
            s = n(116).loadFacebookSDK;
        e.exports = new(n(21))({
            defaults: {
                hasData: function() {
                    return r()
                },
                fetchData: function() {
                    return s().done(this.rerender.bind(this))
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
    262: function(e, t, n) {
        "use strict";

        function i() {
            return this.model.getUrn()
        }
        e.exports = new(n(21))({
            applyTo: function(e) {
                function t(e) {
                    n(59).trackV1Click({
                        click_category: "navigation",
                        click_object: o.call(this),
                        click_name: l,
                        click_target: e.target.href
                    })
                }
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    s = r.clickObject,
                    o = void 0 === s ? i : s,
                    a = r.clickName,
                    l = void 0 === a ? "click::ext_url" : a;
                this.merge(e, {
                    events: {
                        'click a[href^="http://"]': t,
                        'click a[href^="https://"]': t
                    }
                })
            }
        })
    },
    270: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(287),
            className: "toggle sc-toggle",
            tagName: "label",
            defaults: {
                label: "",
                name: "",
                size: "",
                iconActive: "",
                iconInactive: "",
                isActive: !1
            },
            element2selector: {
                input: ".sc-toggle-input"
            },
            states: {
                active: "sc-toggle-active"
            },
            events: {
                "change .sc-toggle-input": "onInputChange"
            },
            setup: function(e) {
                this.toggleState("active", e.isActive), e.size && this.$el.addClass("sc-toggle-" + e.size)
            },
            getTemplateData: function(e) {
                return e.showIcon = this.options.size && this.options.iconActive && this.options.iconInactive, e.isActive = this.getState("active"), e
            },
            getChecked: function() {
                return this.getElement("input").prop("checked")
            },
            setChecked: function(e) {
                this.getElement("input").prop("checked", !!e), this.toggleState("active", e)
            },
            onInputChange: function(e) {
                var t = e.target.checked;
                this.toggleState("active", t), this.bubble("toggle:change", {
                    name: this.options.name,
                    isActive: t
                })
            }
        })
    },
    271: function(e, t, n) {
        "use strict";
        var i = {
            create: "userEmailCreate",
            update: "userEmailUpdate",
            "delete": "userEmailDelete"
        };
        e.exports = n(65).extend({
            resource_type: "email",
            setup: function(e, t) {
                !t || !t.userId || e && e.user_id || this.set({
                    user_id: t.userId
                })
            },
            baseUrl: null,
            getEndpointForMethod: function(e) {
                return i[e]
            }
        })
    },
    284: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".facebookFacepile{display:inline-block}", ""])
    },
    287: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o;
                return "    " + e.escapeExpression((n(96) || t && t.$a11y || i.helperMissing).call(null != t ? t : {}, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t._options : t) ? o.label : o
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, r) {
                var s, o = e.lambda,
                    a = e.escapeExpression;
                return '    <span class="sc-toggle-icon-inactive sc-icon sc-icon-' + a(o(null != (s = null != t ? t._options : t) ? s.size : s, t)) + " " + a(o(null != (s = null != t ? t._options : t) ? s.iconInactive : s, t)) + '"></span>\n    <span class="sc-toggle-icon-active sc-icon-' + a(o(null != (s = null != t ? t._options : t) ? s.size : s, t)) + " " + a(o(null != (s = null != t ? t._options : t) ? s.iconActive : s, t)) + '"></span>\n'
            },
            5: function(e, t, n, i, r) {
                return "checked"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return '<span class="sc-toggle-handle">\n' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.showIcon : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + '</span>\n\n<input class="sc-toggle-input sc-visuallyhidden" type="checkbox" ' + (null != (s = n["if"].call(o, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + ">\n"
            },
            useData: !0
        })
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
                var s, o = e.lambda,
                    a = e.escapeExpression;
                return '<fb:facepile\n  app_id="' + a(o(null != (s = null != t ? t.FB : t) ? s.app_id : s, t)) + '"\n  max_rows="1"\n  size="' + a(o(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '"\n  show_count="' + (null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t._options : t) ? s.show_count : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + '"\n  width="' + a(o(null != (s = null != t ? t._options : t) ? s.width : s, t)) + '">\n</fb:facepile>\n'
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
    332: function(e, t, n) {
        "use strict";

        function i(e, t) {
            t && n(3).chain(this.where({
                primary: !0
            })).without(e).invoke("set", {
                primary: !1
            })
        }
        e.exports = n(127).extend({
            model: n(271),
            defaults: {
                type: "emails"
            },
            setup: function(e) {
                n(127).prototype.setup.call(this, e), this.on("change:primary", i)
            },
            baseUrl: function() {
                return this.getEndpointUrl("userEmails", {
                    id: this.options.userId
                })
            },
            comparator: function(e) {
                return !e.get("primary")
            }
        })
    },
    382: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(428),
            css: n(440),
            ModelClass: n(66),
            className: "signupTeaser",
            defaults: {
                resource_id: null,
                resource_type: "sound",
                facepileWidth: 615
            },
            requiredAttributes: ["user", "title", "artwork_url"],
            events: {
                "click .signupTeaser__login": "login"
            },
            login: function(e) {
                e.preventDefault(), n(63).login()
            }
        })
    },
    383: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0Click,
            r = n(59).trackImpression;
        e.exports = n(71).extend({
            defaults: {
                Subview: n(382),
                soundUrn: null
            },
            setup: function() {
                var e = n(98).getAsAttributes(this.options.soundUrn);
                n(71).prototype.setup.apply(this, arguments), this.options.subviewArgs = {
                    version: this.options.version,
                    resource_type: e.resource_type,
                    resource_id: e.id,
                    facepileWidth: this.options.width
                }, this.listenTo(this, "overlay:closed", this.onDismiss).listenTo(this, "overlay:opened", this.onOpen)
            },
            onOpen: function() {
                r({
                    originView: "signupTeaser",
                    impression_name: "signup_teaser",
                    urn: this.options.soundUrn
                })
            },
            onDismiss: function() {
                i(["signup-teaser", "dismiss"], {
                    originView: "signupTeaser",
                    impression_name: "signup_teaser",
                    urn: this.options.soundUrn
                })
            }
        })
    },
    413: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signupTeaser__title{margin-top:-7px!important;margin-bottom:3px}.signupTeaser__image{margin-right:30px;width:200px}.signupTeaser__copy{color:#666}.signupTeaser__actions{margin-top:25px}.signupTeaser__divider{margin:30px 0 15px}.signupTeaser ul{list-style:outside url(" + n(732) + ");margin-left:15px}.signupTeaser .sc-media{position:relative}.signupTeaser__actionsBottom{position:absolute;bottom:0;left:230px}.signupTeaser__nowplaying{margin:-5px 0 25px}.signupTeaser__centered{text-align:center}.signupTeaser__centered .signupTeaser__image{margin:20px auto 5px}.signupTeaser__centered .signupTeaser__actions{margin-top:20px}.signupTeaser__centered .signupTeaser__divider{margin:20px 0 10px}", ""])
    },
    425: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o;
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(270), {
                    name: "$view",
                    hash: {
                        key: "toggle",
                        isActive: null != t ? t.isActive : t,
                        iconInactive: null != (o = null != t ? t._options : t) ? o.iconInactive : o,
                        iconActive: null != (o = null != t ? t._options : t) ? o.iconActive : o,
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        label: null != t ? t.defaultLabel : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    428: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h1 class="sc-text signupTeaser__title">' + u((n(51) || t && t.$t || l).call(a, "Sound good?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h1>\n<p class="sc-type-medium sc-text-light signupTeaser__copy signupTeaser__nowplaying sc-truncate">\n  ' + u((n(51) || t && t.$t || l).call(a, '<span class="sc-text">Now playing:</span> [[username]] - [[title]]', {
                    name: "$t",
                    hash: {
                        title: null != t ? t.title : t,
                        username: null != (o = null != t ? t.user : t) ? o.username : o
                    },
                    data: s
                })) + '\n</p>\n<div class="sc-media signupTeaser__spacing">\n  <div class="sc-media-image signupTeaser__image">\n    ' + u((n(53) || t && t.$view || l).call(a, n(89), {
                    name: "$view",
                    hash: {
                        size: 200,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + '\n  </div>\n  <div class="sc-media-content signupTeaser__copy sc-type-medium">\n    <p>' + u((n(51) || t && t.$t || l).call(a, "Hear more &ndash; sign up for SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</p>\n    <ul>\n      <li>" + u((n(51) || t && t.$t || l).call(a, "Save and share this and other favorites", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n      <li>" + u((n(51) || t && t.$t || l).call(a, "Create and share playlists", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n      <li>" + u((n(51) || t && t.$t || l).call(a, "Be the first to hear what [[username]] posts next", {
                    name: "$t",
                    hash: {
                        username: null != (o = null != t ? t.user : t) ? o.username : o
                    },
                    data: s
                })) + '</li>\n    </ul>\n\n    <div class="signupTeaser__actionsBottom sc-text-light sc-type-medium">\n      ' + u((n(51) || t && t.$t || l).call(a, '[[[signUpButton]]] or <a class="signupTeaser__login sc-link-dark" href="#">sign in</a>', {
                    name: "$t",
                    hash: {
                        signUpButton: (n(53) || t && t.$view || l).call(a, n(121), {
                            name: "$view",
                            hash: {
                                type: "signup",
                                size: "large"
                            },
                            data: s
                        })
                    },
                    data: s
                })) + '\n    </div>\n  </div>\n</div>\n\n<hr class="signupTeaser__divider">\n' + u((n(53) || t && t.$view || l).call(a, n(240), {
                    name: "$view",
                    hash: {
                        width: null != t ? t.facepileWidth : t
                    },
                    data: s
                })) + "\n\n"
            },
            useData: !0
        })
    },
    436: function(e, t, n) {
        var i = n(666);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    440: function(e, t, n) {
        var i = n(413);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    451: function(e, t, n) {
        "use strict";
        e.exports = n(79).extend({
            _audible: null,
            _suggestedTags: null,
            fields: {
                tags: {
                    defaultValue: function() {
                        return []
                    }
                }
            },
            buttons: {
                save: {
                    label: n(52).t("Save"),
                    action: "save"
                },
                cancel: {
                    label: n(52).t("Cancel"),
                    action: "cancel"
                }
            },
            actions: {
                save: function() {
                    var e = this;
                    return this.validate().done(function(t) {
                        t && e.trigger("save")
                    })
                },
                cancel: function() {
                    this.trigger("cancel")
                }
            },
            constraints: {
                tags: [
                    [n(69), {
                        message: n(52).t("Enter at least one tag.")
                    }]
                ]
            },
            setup: function(e, t) {
                var i = this._audible = new(n(75))({
                    resource_id: t.resource_id,
                    resource_type: t.resource_type
                });
                this._submodels.push(i), this._suggestedTags = [], this.listenTo(this, "change:tags", this.onTagChange)
            },
            onTagChange: function(e, t) {
                this._suggestedTags.length || (this._suggestedTags = t)
            },
            saveTags: function() {
                var e = this._audible,
                    t = this.get("tags").slice(),
                    i = {
                        genre: t.shift(),
                        tag_list: n(189).serialize(t)
                    };
                e.set(i), e.save(i)
            },
            getAudible: function() {
                return this._audible
            },
            getTagsForTracking: function(e) {
                var t, n = {
                    suggested_tags: this._suggestedTags.join(",")
                };
                return e && (t = this.get("tags"), n.saved_tags = t.join(",")), n
            }
        }, {
            hashFn: function(e, t) {
                var n = t.resource_type;
                return n ? n + "_" + t.resource_id : t.resource_id
            }
        })
    },
    474: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return !t.isConfirmed({
                viaEmail: "upload" === e
            })
        }
        var r = function(e, t) {
            return {
                comment: n(52).t("Almost there! Verify your email to write comments. An email was sent to [[email]]", {
                    email: t
                }),
                upload: n(52).t("Almost there! Verify your email to start uploading. An email was sent to [[email]]", {
                    email: t
                }),
                profile: n(52).t("Almost there! Verify your email to add images and links to your profile. An email was sent to [[email]]", {
                    email: t
                })
            }[e]
        };
        e.exports = n(54).extend({
            template: n(776),
            css: n(838),
            className: "confirmEmailBanner",
            defaults: {
                scenario: null,
                largePadding: !1
            },
            states: {
                largePadding: "m-largePadding"
            },
            requiredAttributes: ["confirmed", "primary_email_confirmed"],
            setup: function(e) {
                var t = e.largePadding;
                this.model = n(55).get("me"), this.model.hold(), this.toggleState("largePadding", t)
            },
            getTemplateData: function(e) {
                var t = this.options.scenario;
                return e.shouldRender = i(t, this.model), e.text = r(t, e.primary_email), e
            }
        })
    },
    487: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(797),
            className: "soundTags",
            ModelClass: n(75),
            requiredAttributes: ["genre", "tag_list"],
            defaults: {
                size: "medium",
                tagList: null
            },
            getTemplateData: function(e) {
                var t = this.options.tagList || n(189).extract(e);
                return {
                    tags: t,
                    size: e._options.size
                }
            }
        })
    },
    491: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            moreText: n(52).t("View all"),
            title: n(52).t("Playlists"),
            moduleClassName: "setsModule",
            iconClassName: "set",
            itemMinHeight: 70.2,
            Subview: n(391),
            ModelClass: n(64),
            requiredAttributes: ["playlist_count"],
            observedAttributes: ["private_playlists_count"],
            countableAttribute: "playlist_count",
            titleWithCount: function(e) {
                return n(52).tp("1 playlist", "%d playlists", e)
            },
            defaults: {
                exclude: null,
                playlistType: "playlists_without_albums"
            },
            setup: function() {
                var e = this.options,
                    t = e.exclude,
                    i = e.playlistType,
                    r = this.moreLink = n(61).getRoute("userNetwork", this.model, "albums" === i ? "albums" : "sets");
                this.noFollow = !0, this.subviewArgs = {
                    maxDisplay: 3,
                    compact: !0,
                    show_action_buttons: !1,
                    allowTrackFallback: !1,
                    Collection: n(328),
                    collectionArgs: {
                        resource_id: this.model.id,
                        playlists_for: "user",
                        playlistType: i,
                        exclude: t
                    },
                    getRestoreUrl: function() {
                        return r
                    }
                }
            },
            getCount: function() {
                return (this.model.get("playlist_count") || 0) + (this.model.get("private_playlists_count") || 0)
            }
        })
    },
    555: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e) {
                e.css ? (Array.isArray(e.css) || (e.css = [e.css]), e.css.push(n(436))) : e.css = n(436), e.className && !/\bupsellBanner\b/.test(e.className) && (e.className += " upsellBanner")
            }
        })
    },
    557: function(e, t, n) {
        "use strict";
        var i = window.document.referrer,
            r = n(62).parse(i).host || "",
            s = (n(62).getQueryParam("utm_medium") || "").toLowerCase(),
            o = [/\.ask\.com$/, /\.baidu\.com$/, /\.bing\.com$/, /\.duckduckgo\.com$/, /\.google\.com$/, /\.yahoo\.com$/, /\.yandex\.com$/];
        e.exports = {
            facebook: "facebook" === s || /\bfacebook\.com/.test(i) || /\bw\.soundcloud\.com/.test(i) && /origin=facebook/.test(i) || !!n(62).getQueryParam("fb_action_ids"),
            googleplus: "googleplus" === s,
            searchEngine: o.some(i.match, r)
        }
    },
    574: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(364).withOptions({
            angle: 135,
            colorAdjustment: "normal"
        }), {
            ModelClass: n(75),
            requiredAttributes: {
                sound: [n(66).prototype.imageProperties.read],
                playlist: [n(86).prototype.imageProperties.read]
            },
            setup: function(e) {
                var t = e.resource_type;
                "playlist" === t && this.listenTo(this.model, "internal:play", this.updateGradient).listenTo(n(67), "change:currentSound", this.updateGradient)
            },
            getGradientModel: function() {
                var e = this.model;
                return e.isNowPlaying() && e.getCurrentSound() || e
            }
        })
    },
    595: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(88), {
            buttonLabels: {
                "default": n(52).t("Resend email")
            },
            states: {
                sending: "sc-pending"
            },
            setup: function() {
                this.collection = new(n(332))(null, {
                    userId: n(55).get("me").id
                })
            },
            onClick: function() {
                var e = this,
                    t = this.collection.find(function(e) {
                        return e.get("primary")
                    });
                this.toggleState("sending", !0), n(23).callEndpoint("userEmailResendConfirmation", t.pick("user_id", "id")).then(function() {
                    e.toggleState("sending", !1), n(57).trigger("emailConfirmation:sent", t.get("address"))
                }, function() {
                    e.toggleState("sending", !1)
                })
            }
        })
    },
    605: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case "album":
                    return n(52).t("Album release date:");
                case "ep":
                    return n(52).t("EP release date:");
                case "single":
                    return n(52).t("Single release date:");
                case "compilation":
                    return n(52).t("Compilation release date:");
                default:
                    return n(52).t("Release date:")
            }
        }
        e.exports = n(54).extend({
            template: n(2505),
            css: n(2879),
            className: "listenInfo",
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["visuals", "user", "publisher_metadata"],
                playlist: ["user", "set_type"]
            },
            observedAttributes: {
                sound: ["created_with", "release_date"],
                playlist: ["release_date"]
            },
            defaults: {
                show_artwork: !0,
                show_copyright: !0
            },
            getTemplateData: function(e) {
                var t = n(55).get("me").owns(this.model),
                    r = "sound" === e._resource_type,
                    s = "playlist" === e._resource_type,
                    o = ["label_name", "release_date"].some(n(3).propertyOf(e)) || e.publisher_metadata && ["p_line", "c_line", "explicit"].some(n(3).propertyOf(e.publisher_metadata));
                return n(3).assign(e, {
                    isSound: r,
                    isPlaylist: s,
                    isMine: t,
                    show_copyright: this.options.show_copyright && r && !t,
                    show_artwork: this.options.show_artwork,
                    releaseTypeReleaseDate: i(e.set_type),
                    hasReleaseInfo: o
                })
            }
        })
    },
    619: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return this.model.getCurrentSound()
            }

            function r() {
                this.toggleState("active", this.model.isPlaying()).toggleState("disabled", !this.model.isPlayable())
            }

            function s() {
                r.call(this), this.rerender()
            }

            function o() {
                l.call(this, this.model.getUrn())
            }

            function a() {
                l.call(this, n(98).generate("user", this.model.get("user_id")))
            }

            function l(e) {
                u({
                    context: this.getContextData(),
                    target: e
                })
            }
            var u = n(59).trackClickThrough;
            e.exports = n(54).extend(n(149), n(218).withOptions({
                getSound: i
            }), n(68).withOptions("playlistTrackItem"), {
                template: n(808),
                css: n(873),
                className: "trackItem g-flex-row sc-type-small sc-type-light",
                ModelClass: n(66),
                requiredAttributes: ["permalink", "user", "duration", "display_date"],
                observedAttributes: ["playback_count"],
                defaults: {
                    show_user: !0,
                    show_upload_relative_time: !1,
                    track_number_override: null
                },
                states: {
                    active: "active",
                    hover: function(e) {
                        (e || !this.getState("removing")) && this.$el.toggleClass("hover", e)
                    },
                    removing: "removing",
                    dragging: "dragging",
                    disabled: "m-disabled"
                },
                events: {
                    click: "onClick",
                    mouseenter: "onHover",
                    mouseleave: "onHover",
                    "mousedown  .trackItem__dragHandle": "onDragHandleMouse",
                    "mouseup    .trackItem__dragHandle": "onDragHandleMouse",
                    "mouseleave .trackItem__dragHandle": "onDragHandleMouse",
                    "click .trackItem__username": a,
                    "click .trackItem__trackTitle": o
                },
                loadingTemplate: function() {
                    return '<img width="30" height="30" style="padding: 7px 0">'
                },
                initialize: function() {
                    var e, t = (e = {}, e[n(223).TOGGLE] = "onOverlayButtonToggle", e);
                    this.bubbleEvents = n(3).defaults(t, this.bubbleEvents), n(54).prototype.initialize.apply(this, arguments)
                },
                setup: function(e) {
                    this.listenTo(this.model, "play pause", r).listenTo(this.model, "change:playable", s)
                },
                renderDecorate: function() {
                    r.call(this)
                },
                getTemplateData: function(e) {
                    var t = this.model,
                        i = this.options.track_number_override,
                        r = t.playlist,
                        s = !t.isPlayable();
                    return e.showBlockedMsg = s, s && (e.blockedMsg = n(163).getShortBlockMessage()), e.trackNumber = i || r && r.getSoundIndex(t) + 1, e.playlistId = r && r.id, e.isSnippet = t.isSnippetized(), e.isPrivate = t.isPrivate(), e
                },
                onHover: function(e) {
                    this.toggleState("hover", !this.getState("disabled") && "mouseenter" === e.type)
                },
                onDragHandleMouse: function(e) {
                    this.toggleState("dragging", "mousedown" === e.type)
                },
                onClick: function(e) {
                    var n = t(e.target);
                    return n.closest("a,button,input,.trackItem__dragHandle", ".trackItem").length ? !0 : void(this.getState("disabled") || this.toggleAudible(this.model, {
                        userInitiated: !0,
                        context: this.getContextData()
                    }))
                },
                onOverlayButtonToggle: function(e) {
                    if (e.data.$el.closest(".trackItem").is(this.el)) {
                        var t = e.data.isOpened;
                        this.toggleState("removing", t).toggleState("hover", t, !0)
                    }
                },
                onContextRequest: function(e) {
                    e.data.listItem = this
                }
            })
        }).call(t, n(1))
    },
    640: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.map(function(e) {
                return {
                    user: e.get("user"),
                    playback_count: e.get("playback_count")
                }
            }).sort(function(e) {
                var t = e.playbackCount,
                    n = e.playback_count;
                return n - t
            }).map(function(e) {
                var t = e.user;
                return t
            });
            return n(3).uniq(t, function(e) {
                var t = e.id;
                return t
            }).slice(0, Math.max(a, l))
        }
        var r = n(114).el,
            s = n(20).SafeString,
            o = n(20).Utils.escapeExpression,
            a = 3,
            l = 5;
        e.exports = n(54).extend({
            className: "inThisStation",
            css: n(882),
            template: n(824),
            defaults: {
                messageType: "stationsMain",
                userLinkClass: ""
            },
            setup: function(e) {
                var t = e.resource_id;
                this.collection = new(n(212))(null, {
                    resource_id: t
                })
            },
            getCollectionData: function() {
                return []
            },
            getTemplateData: function(e) {
                var t = this,
                    l = i(this.collection);
                return e.usernames = new s(l.slice(0, a).map(function(e) {
                    return r("a", {
                        "class": "inThisStation__user " + t.options.userLinkClass,
                        href: n(61).getRoute("user", e)
                    }, [o(e.username)])
                }).join(", ")), e["is_" + this.options.messageType] = !0, e
            }
        })
    },
    666: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".upsellBanner{display:none;position:relative;padding:23px 30px}.upsellBanner.expanded{display:block}.upsellBanner__title{font-size:18px;color:#fff;padding:0 0 4px 0}.upsellBanner__copy{padding-bottom:4px}.upsellBanner__close{position:absolute;top:10px;right:10px;width:15px;height:15px;border:0;padding:0;display:block;background:url(" + n(723) + ") center center no-repeat;cursor:pointer}@media (max-width:1079px){.upsellBanner{background-image:none}}", ""])
    },
    667: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".confirmEmailBanner__inner{background:#fff7c8;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:10px 20px;line-height:22px}.confirmEmailBanner.m-largePadding .confirmEmailBanner__inner{padding:20px 30px}.confirmEmailBanner__text{margin-right:20px}@media (max-width:1079px){.confirmEmailBanner.m-largePadding .confirmEmailBanner__inner{padding-left:20px;padding-right:20px}}", ""])
    },
    672: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".fullHero{position:relative;height:380px;overflow:hidden;background:#e5e5e5}.fullHero__foreground{position:absolute;left:0;top:0;width:100%;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;padding:30px 560px 20px 30px;z-index:10}.fullHero__artwork{position:absolute;top:20px;right:20px;z-index:1;width:340px;height:340px}.fullHero__info{position:absolute;top:29px;width:150px;right:390px;text-align:right}.fullHero__uploadTime{color:#fff;margin-bottom:16px}.fullHero__info>.soundTitle__tag{display:inline-block}.fullHero__title .soundTitle__usernameHeroContainer{margin-right:0}.fullHero__tracksSummary{display:none;position:absolute;bottom:20px;left:30px}.fullHero.m-showTracksSummary .fullHero__tracksSummary{display:block}.fullHero__playerArea{position:absolute;bottom:0;left:30px;right:390px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.fullHero__waveform{margin-bottom:30px;height:100px;z-index:1}.fullHero__playerConsumerSubUpsell{background-color:rgba(51,51,51,.3);margin-right:-390px;padding-right:390px;margin-left:-30px;padding-left:30px}.fullHero__blocked{margin-bottom:20px;height:60px}.fullHero.m-showTracksSummary .fullHero__blocked,.fullHero.m-showTracksSummary .fullHero__waveform{visibility:hidden}.fullHero__parentLink{max-width:230px;margin-top:4px;margin-left:70px}@media (max-width:1079px){.fullHero__foreground{padding-left:20px;padding-right:550px}.fullHero__playerArea{left:20px;right:380px}.fullHero__info{right:380px}}.fullHero__tierIndicator{top:10px;right:10px}.fullHero__tierIndicator-plus{top:12px;right:12px}", ""])
    },
    698: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.trackItem{position:relative;line-height:44px;border-radius:4px}.trackItem:not(.m-disabled){cursor:pointer}.trackItem__image{position:relative;margin:7px 15px 0 0}.trackItem__play{position:absolute;top:4px;left:5px;line-height:1;display:none}.trackItem__numberWrapper{margin-right:15px;position:relative}.trackItem__content{-webkit-flex:1;-ms-flex:1;flex:1;color:#333}.trackItem__additional{padding:0 5px 0 12px;margin-left:25px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.trackItem__playCount{margin-left:2px}.trackItem__actions{display:none;float:left;margin:11px 0}.trackItem__actions>.soundActions{margin-bottom:0}.trackItem__playCount+.trackItem__relativeUploadTime::before{content:"·";width:5px;text-align:right}.trackItem.hover,.trackItem.active{background-color:#f2f2f2;margin:-1px -12px;padding:1px 12px}.trackItem:not(.m-disabled).active .trackItem__trackTitle,.trackItem:not(.m-disabled).active .trackItem__content{color:#f50}.trackItem:not(.m-disabled).active .trackItem__trackTitle:hover,.trackItem:not(.m-disabled).active .trackItem__trackTitle:focus{color:#f10}.trackItem:not(.m-disabled).hover .trackItem__additional,.trackItem:not(.m-disabled).active .trackItem__additional{background:#f2f2f2;background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px);right:12px}.trackItem:not(.m-disabled).hover .sc-snippet-badge,.trackItem:not(.m-disabled).active .sc-snippet-badge,.trackItem:not(.m-disabled).hover .trackItem__relativeUploadTime,.trackItem:not(.m-disabled).active .trackItem__relativeUploadTime,.trackItem:not(.m-disabled).hover .trackItem__tierIndicator,.trackItem:not(.m-disabled).active .trackItem__tierIndicator,.trackItem:not(.m-disabled).hover .trackItem__playCount,.trackItem:not(.m-disabled).active .trackItem__playCount,.trackItem:not(.m-disabled).hover .sc-label-private,.trackItem:not(.m-disabled).active .sc-label-private{display:none}.trackItem:not(.m-disabled).hover .trackItem__actions,.trackItem:not(.m-disabled).active .trackItem__actions,.trackItem:not(.m-disabled).hover .trackItem__play,.trackItem:not(.m-disabled).active .trackItem__play{display:block}.trackItem.m-disabled .trackItem__trackTitle,.trackItem.m-disabled .trackItem__content{color:#ccc}.trackItem__blockMsg{font-size:12px;line-height:0}', ""])
    },
    708: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".inThisStation__user{white-space:nowrap}", ""])
    },
    723: function(e, t, n) {
        e.exports = n.p + "assets/images/close-dark-49c5c80.png"
    },
    776: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="confirmEmailBanner__inner g-flex-row-centered-spread">\n    <div class="confirmEmailBanner__text">\n      ' + c((a = null != (a = i.text || (null != t ? t.text : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "text",
                    hash: {},
                    data: s
                }) : a)) + '\n    </div>\n    <div class="confirmEmailBanner__actions">\n      ' + c((n(51) || t && t.$t || u).call(l, "Didn't get the email?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n      " + c((n(53) || t && t.$view || u).call(l, n(595), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n" + (null != (o = (n(51) || t && t.$t || u).call(l, {
                    name: "$t",
                    hash: {
                        _comment: "This comes right after a button saying 'Resend email'",
                        url: (n(58) || t && t.$route || u).call(l, "settings", {
                            name: "$route",
                            hash: {},
                            data: s
                        })
                    },
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    </div>\n  </div>\n"
            },
            2: function(e, t, n, i, r) {
                return '        or <a href="[[url]]">change your address</a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.shouldRender : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            useData: !0
        })
    },
    797: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r, s, o) {
                var a;
                return '  <div class="sc-tag-group">\n' + (null != (a = n.each.call(null != t ? t : {}, null != t ? t.tags : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, r, 0, s, o),
                    inverse: e.noop,
                    data: r
                })) ? a : "") + "  </div>\n"
            },
            2: function(e, t, i, r, s, o, a) {
                var l = e.escapeExpression,
                    u = e.lambda;
                return '      <a href="' + l((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "tags", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="sc-tag sc-tag-' + l(u(null != a[1] ? a[1].size : a[1], t)) + '"><span class="sc-truncate">' + l(u(t, t)) + "</span></a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r, s, o) {
                var a;
                return null != (a = n["if"].call(null != t ? t : {}, null != t ? t.tags : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0, s, o),
                    inverse: e.noop,
                    data: r
                })) ? a : ""
            },
            useData: !0,
            useDepths: !0
        })
    },
    808: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a = e.escapeExpression;
                return '    <a href="' + a((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="trackItem__username sc-link-light">' + a(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + '</a> <span class="sc-type-light">&mdash;</span>\n'
            },
            3: function(e, t, n, i, r) {
                var s;
                return '    <span class="g-geoblocked-icon trackItem__blockMsg">' + e.escapeExpression((s = null != (s = n.blockedMsg || (null != t ? t.blockedMsg : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "blockedMsg",
                    hash: {},
                    data: r
                }) : s)) + "</span>\n"
            },
            5: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (o = i["if"].call(a, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    " + u((n(53) || t && t.$view || l).call(a, n(228), {
                    name: "$view",
                    hash: {
                        className: "trackItem__tierIndicator",
                        variant: "list",
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n" + (null != (o = i["if"].call(a, null != t ? t.playback_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(a, null != (o = null != t ? t._options : t) ? o.show_upload_relative_time : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '    <div class="trackItem__actions">\n      ' + u((n(53) || t && t.$view || l).call(a, n(276), {
                    name: "$view",
                    hash: {
                        show_owner: !1,
                        show_start_station: !1,
                        show_buy: !1,
                        show_share: !1,
                        icon_only: !0,
                        size: "small",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            6: function(e, t, i, r, s) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "private",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, r, s) {
                return '      <span class="trackItem__playCount sc-ministats sc-ministats-medium sc-ministats-plays">\n        ' + e.escapeExpression((n(208) || t && t.$formatStatNumber || i.helperMissing).call(null != t ? t : {}, null != t ? t.playback_count : t, {
                    name: "$formatStatNumber",
                    hash: {},
                    data: s
                })) + "\n      </span>\n"
            },
            10: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing;
                return '      <span class="trackItem__relativeUploadTime sc-ministats sc-ministats-medium">\n        ' + e.escapeExpression((n(51) || t && t.$t || a).call(o, "Posted [[[relativeTime]]] ago", {
                    name: "$t",
                    hash: {
                        _comment: "eg. Posted 2 hours ago",
                        relativeTime: (n(53) || t && t.$view || a).call(o, n(115), {
                            name: "$view",
                            hash: {
                                prefix: "",
                                timestamp: null != t ? t.display_date : t
                            },
                            data: s
                        })
                    },
                    data: s
                })) + "\n      </span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="trackItem__image">\n  ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        size: 30,
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n  <div class="trackItem__play">\n    ' + c((n(53) || t && t.$view || u).call(l, n(207), {
                    name: "$view",
                    hash: {
                        size: "small",
                        resource_type: "sound",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n  </div>\n</div>\n<div class="trackItem__numberWrapper">\n  <span class="trackItem__number sc-font-tabular">' + c((a = null != (a = i.trackNumber || (null != t ? t.trackNumber : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "trackNumber",
                    hash: {},
                    data: s
                }) : a)) + '</span>\n</div>\n<div class="trackItem__content sc-truncate">\n' + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.show_user : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  <a href="' + c((n(58) || t && t.$route || u).call(l, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="trackItem__trackTitle sc-link-dark sc-font-light">' + c((a = null != (a = i.title || (null != t ? t.title : t)) ? a : u, typeof a === d ? a.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : a)) + '</a>\n</div>\n<div class="trackItem__additional">\n' + (null != (o = i["if"].call(l, null != t ? t.showBlockedMsg : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(5, s, 0),
                    data: s
                })) ? o : "") + "</div>\n"
            },
            useData: !0
        })
    },
    824: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return '  <div class="inThisStation__text">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "An endless mix of music including [[[usernames]]], and&nbsp;more", {
                    name: "$t",
                    hash: {
                        usernames: null != t ? t.usernames : t
                    },
                    data: s
                })) + "</div>\n"
            },
            3: function(e, t, i, r, s) {
                return '  <div class="inThisStation__text">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Try this mix of music from [[[usernames]]], and&nbsp;more", {
                    name: "$t",
                    hash: {
                        usernames: null != t ? t.usernames : t
                    },
                    data: s
                })) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.is_stationsMain : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.is_fallbackSource : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n"
            },
            useData: !0
        })
    },
    838: function(e, t, n) {
        var i = n(667);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    844: function(e, t, n) {
        var i = n(672);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    873: function(e, t, n) {
        var i = n(698);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    882: function(e, t, n) {
        var i = n(708);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    977: function(e, t, n) {
        "use strict";

        function i() {
            switch (this.options.page) {
                case "comments":
                    return n(52).t("Be the first to comment on this track");
                default:
                    return ""
            }
        }

        function r() {
            var e = this.user,
                t = n(55).get("me") === e;
            switch (this.options.page) {
                case "tracks":
                    return t ? n(52).t("You haven’t uploaded any tracks or created any playlists") : n(52).t("[[username]] hasn’t uploaded any tracks or created any playlists", {
                        username: e.get("username")
                    });
                case "user":
                    return t ? n(52).t("You haven’t uploaded any tracks, liked any tracks, created any playlists, or provided any information about yourself") : n(52).t("[[username]] hasn’t added any content", {
                        username: e.get("username")
                    });
                case "info":
                    return t ? n(52).t("You haven’t provided any information about yourself") : n(52).t("[[username]] hasn’t provided any information", {
                        username: e.get("username")
                    });
                case "playlist":
                    return n(52).t("This playlist has no tracks");
                case "comments":
                    return n(52).t("Seems a little quiet over here")
            }
        }
        e.exports = n(54).extend({
            template: n(144),
            css: n(145),
            className: "emptyNetworkPage",
            defaults: {
                emptyPageClass: null,
                page: null,
                userId: null
            },
            user: null,
            setup: function(e) {
                var t = e.userId;
                t && (this.user = this.addDataSource(new(n(64))({
                    id: t
                }), {
                    requiredAttributes: ["username"]
                }))
            },
            dispose: function() {
                this.user = null
            },
            getTemplateData: function(e) {
                return e.message = r.call(this), e.subheaderMessage = i.call(this), e.emptyPageClass = this.options.emptyPageClass, e
            }
        })
    },
    1003: function(e, t, n) {
        "use strict";

        function i() {
            this.modal || (this.modal = new(n(71))({
                togglerEl: this.el,
                width: 520,
                Subview: n(1500),
                subviewArgs: {
                    resource_id: this.options.resource_id
                }
            })), this.modal.open()
        }
        e.exports = n(54).extend(n(88), {
            tagName: "a",
            className: "reportCopyright g-link-problem",
            template: function() {
                var e = n(52).t("Report");
                return '<span class="reportCopyright__full">' + e + "</span>"
            },
            defaults: {
                color: "medium"
            },
            modal: null,
            setup: function(e) {
                this.$el.addClass("sc-link-" + e.color)
            },
            onClick: function(e) {
                e.preventDefault(), i.call(this)
            }
        })
    },
    1006: function(e, t, n) {
        "use strict";
        var i, r = n(20).Utils.escapeExpression,
            s = n(20).SafeString;
        e.exports = n(54).extend(n(140), n(469), n(262), {
            defaults: {
                sound_id: null,
                dialogType: "userBadge",
                dialogSelector: ".commentItem__usernameLink, .commentItem__avatar"
            },
            template: n(2426),
            css: n(2806),
            observedAttributes: ["id"],
            requiredAttributes: ["created_at", "user"],
            ModelClass: n(108),
            editableObject: null,
            className: "commentItem",
            states: {
                isReply: "m-isReply",
                dialogOpen: "m-dialogOpen",
                creatorComment: "m-creatorComment"
            },
            bubbleEvents: (i = {}, i[n(223).TOGGLE] = "onDeleteDialogToggle", i),
            sound: null,
            _ignoreEditingChange: null,
            setup: function(e) {
                var t = e.sound_id;
                this.sound = this.addDataSource(new(n(66))({
                    id: t
                }), {
                    requiredAttributes: ["user", "permalink"]
                }), this.editableObject = this.model, this._ignoreEditingChange = !0, this.toggleState("editing", this.model.isEditing()), this._ignoreEditingChange = !1
            },
            renderDecorate: function() {
                this.toggleState("isReply", !!this.model.get("replyTo")).toggleState("creatorComment", n(64).instances.get(this.sound.get("user_id")).owns(this.model))
            },
            onDeleteDialogToggle: function(e) {
                this.toggleState("dialogOpen", e.data.isOpened)
            },
            dialogSubviewArgs: function() {
                return {
                    resource_id: this.model.get("user_id")
                }
            },
            getTimestamp: function() {
                return this.model.get("timestamp")
            },
            onEditEnter: function() {
                this._ignoreEditingChange || this.rerender()
            },
            onEditLeave: function() {
                this.rerender()
            },
            getTemplateData: function(e) {
                var t = e.showForm = this.model.isEditing();
                if (e.body = r(e.body), t) return e.confirmedUser = n(55).get("me").isConfirmed(), e;
                var i = !e.id,
                    o = n(55).get("me"),
                    a = this.sound,
                    l = this.model,
                    u = o.owns(a),
                    c = o.owns(l),
                    d = e.timestamp || 0,
                    h = d !== n(108).EMPTY_TIMESTAMP,
                    p = n(52).dateTimeHelper.timecode(d),
                    f = h ? new s(n(114).el("a", {
                        href: "",
                        "aria-role": "button",
                        "class": "commentItem__timestampLink sc-link-light",
                        title: n(52).t("Play from [[time]]", {
                            time: p
                        })
                    }, p)) : null,
                    m = c ? null : new s(n(114).el("a", {
                        href: n(61).getRoute("user", e.user),
                        title: n(52).t("Visit [[username]]’s profile", {
                            username: e.user.username
                        }).toString(),
                        "class": "commentItem__usernameLink sc-link-light"
                    }, r(e.user.username)));
                return n(3).assign(e, {
                    isMyComment: c,
                    timeHTML: f,
                    usernameLink: m,
                    isTimed: h,
                    canDelete: (c || u) && !i,
                    permalink: i ? null : n(61).getRoute("listenNetwork", a, "comments", l.id)
                })
            }
        }, {
            TIMESTAMP_SELECTOR: ".commentItem__timestampLink"
        })
    },
    1023: function(e, t, n) {
        "use strict";

        function i(e) {
            return [u, e.get("kind"), e.id].join("-")
        }

        function r() {
            return !!this.collection.length && 1 !== l.get(i(this.audible))
        }

        function s(e) {
            var t = this.getContextData(),
                n = this.form.getTagsForTracking("save" === e);
            return t.scope.push(e), {
                originView: this.contextName,
                context: t,
                params: n,
                urn: this.audible.getUrn()
            }
        }
        var o = n(59).trackV0Click,
            a = n(59).trackImpression,
            l = new(n(105))("already-seen"),
            u = "tag-suggest";
        e.exports = n(54).extend(n(202), n(68).withOptions("tagSuggester"), {
            template: n(2496),
            css: n(2871),
            className: "autoTagger sc-type-small",
            defaults: {
                resource_id: null,
                resource_type: "sound"
            },
            states: {
                loadedWithData: "loadedWithData"
            },
            element2selector: {
                content: ".autoTagger__content"
            },
            slideInnerSelector: ".autoTagger__wrapper",
            setup: function(e) {
                this.audible = new(n(75))({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }), this.collection = new(n(1208))(null, {
                    urn: this.audible.getUrn()
                }), this.form = new(n(451))({}, e), this.listenTo(this.form, "cancel", this.onCancel).listenTo(this.form, "save", this.onSave)
            },
            dispose: function() {
                this.form.release(), this.audible.release(), this.form = this.audible = null
            },
            renderDecorate: function() {
                var e = s.call(this, "display");
                e.impression_name = "tag_suggester", this.toggleState("loadedWithData", r.call(this)), a(e)
            },
            onCancel: function() {
                o(["tagSuggester", "cancel"], s.call(this, "cancel")), l.set(i(this.audible), 1), this.slideUp()
            },
            onSave: function() {
                o(["tagSuggester", "save"], s.call(this, "save")), this.form.saveTags(), this.slideUp()
            },
            getTemplateData: function(e) {
                return e.showSuggestions = r.call(this), e.isSound = "sound" === this.audible.resource_type, e
            }
        })
    },
    1024: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(2873),
            template: n(2498),
            className: "blockedTrack sc-font-light g-flex-row-centered",
            defaults: {
                blockReason: "geo"
            },
            setup: function(e) {
                var t = e.blockReason;
                "geo" === t ? this.$el.addClass("blockedTrackGeo") : "notFound" === t && this.$el.addClass("blockedTrackNotFound")
            },
            getTemplateData: function(e) {
                var t = this.options.blockReason;
                return "geo" === t ? e.message = n(163).getLongBlockMessage() : "notFound" === t && (e.message = n(52).t("This track was not found. Maybe it has been removed")), e
            }
        })
    },
    1025: function(e, t, n) {
        "use strict";

        function i() {
            var e = this,
                t = this.getElement("login");
            t.slideUp("slow", function() {
                e.disposed || (t.remove(), e.subviews.login._dispose(), e.removeSubview(e.subviews.login))
            })
        }

        function r(e) {
            var t = e.get("tracks");
            return t && t.length > 0
        }

        function s() {
            var e = this.subviews.playlistUpsell;
            if (e) {
                if (this.removeSubview(e), a(this.model)) {
                    var t = o(this.model),
                        i = new(n(1036))({
                            monetizationModels: t,
                            isAlbum: this.model.isAlbum()
                        });
                    i.render().$el.insertAfter(e.el), this.addSubview(i, "playlistUpsell")
                }
                e._dispose()
            }
        }

        function o(e) {
            return n(3).uniq(n(3).compact(n(3).pluck(e.get("tracks"), "monetization_model")))
        }

        function a(e) {
            return "playlist" === e.resource_type && !n(55).get("me").owns(e) && n(215).playlistRequiresUpsell(e)
        }
        e.exports = n(54).extend({
            template: n(2501),
            css: n(2876),
            className: "listenDetails",
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["description", "sharing", "tag_list", "visuals"],
                playlist: ["description", "sharing", "tag_list", "tracks"]
            },
            element2selector: {
                login: ".listenDetails__login"
            },
            defaults: {
                show_info: !1,
                comment_id: null,
                show_full_details: !1,
                show_partial_details: !1,
                show_avatar_in_login: !0
            },
            _listRendered: null,
            setup: function(e) {
                var t = e.resource_type;
                "playlist" === t && this.listenTo(n(57), "policyRefresh", s)
            },
            renderDecorate: function() {
                n(63).isLoggedIn() || this.listenToOnce(n(57), "connect:login", i, this)
            },
            onModelChange: function(e) {
                var t = Object.keys(e.changed);
                (1 !== t.length || "tracks" !== t[0] || this._listRendered !== r(e)) && this.rerender()
            },
            teardown: function() {
                this.stopListening(n(57), "connect:login")
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = n(55).get("me").owns(t),
                    s = "sound" === e._resource_type,
                    l = !s,
                    u = "private" !== e.sharing,
                    c = !u,
                    d = e.genre || n(189).parse(e.tag_list).length,
                    h = i && s,
                    p = this._listRendered = r(this.model),
                    f = s && n(215).soundRequiresUpsell(t),
                    m = !n(63).isLoggedIn() && u && !f,
                    g = l && o(t),
                    v = a(this.model);
                return n(3).assign(e, {
                    isSound: s,
                    isPlaylist: l,
                    isPublic: u,
                    isPrivate: c,
                    showLogin: !v && m,
                    showAttributes: c || h,
                    showPrivateOnly: c && !h,
                    showComments: s && t.isCommentable(),
                    privateText: c && n(342).sharing(t),
                    has_tracks: p,
                    show_tag_suggestions: i && !d,
                    monetizationModels: g,
                    showHighTierUpsell: v,
                    isAlbum: l && t.isAlbum()
                })
            }
        })
    },
    1026: function(e, t, n) {
        "use strict";

        function i() {
            return n(55).get("me").owns(this.model)
        }

        function r() {
            return n(55).get("rollouts").get("play_queue")
        }
        e.exports = n(54).extend({
            template: n(2502),
            css: n(2877),
            className: "listenEngagement sc-clearfix",
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["commentable"]
            },
            states: {
                isMine: "isMine"
            },
            defaults: {
                show_comments: !0,
                show_actions: !0,
                show_stats: !0,
                actions_size: "medium"
            },
            setup: function() {
                this.toggleState("isMine", i.call(this))
            },
            getTemplateData: function(e) {
                var t = n(55).get("me").isConfirmed(),
                    s = "sound" === this.model.resource_type,
                    o = s && this.model.isBlocked();
                return n(3).assign(e, {
                    commentsDisabled: s && (!t || e.commentable === !1),
                    commentsDisabledType: t ? null : "unconfirmed_user",
                    isMine: i.call(this),
                    showCommentForm: t && !o && s && e.commentable && this.options.show_comments && "finished" === e.state,
                    showShuffleSwitch: !s && !r()
                })
            }
        })
    },
    1027: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return this.model.getCurrentSound()
            }

            function r() {
                this.toggleState("showTracksSummary", s.call(this) && !this.model.isNowPlaying())
            }

            function s() {
                return "playlist" === this.options.resource_type
            }

            function o() {
                return "sound" === this.options.resource_type
            }

            function a(e) {
                t(e.target).hasClass("fullListenHero__foreground") && this.model.isPlayable() && this.toggleAudible(this.model, {
                    userInitiated: !0,
                    context: this.getContextData()
                })
            }
            e.exports = n(54).extend(n(149), n(106), n(68).withOptions("listenHero"), n(218).withOptions({
                getSound: i
            }), {
                template: n(2503),
                css: n(844),
                className: "fullListenHero fullHero l-inner-fullwidth",
                ModelClass: n(75),
                defaults: {
                    single: !0
                },
                requiredAttributes: {
                    sound: ["state", "policy", "monetization_model", "display_date"],
                    playlist: ["display_date"]
                },
                observedAttributes: ["genre"],
                states: {
                    showTracksSummary: "m-showTracksSummary"
                },
                events: {
                    click: a
                },
                setup: function() {
                    s.call(this) && this.listenTo(n(67), "change:currentSound", r)
                },
                renderDecorate: function() {
                    r.call(this)
                },
                getTemplateData: function(e) {
                    var t = this.model,
                        i = s.call(this),
                        r = void 0,
                        a = void 0;
                    t.playlist && (r = n(61).getRoute("playlist", t.playlist), a = t.playlist.resource_id);
                    var l = "fullHero__tierIndicator-plus";
                    return n(3).assign(e, {
                        goTagClass: l,
                        parentPlaylistRoute: r,
                        parentPlaylistResourceId: a,
                        showComments: !i && t.get("commentable") && "finished" === t.get("state"),
                        isPlaylist: i,
                        isSound: o.call(this),
                        blocked: !i && t.isBlocked(),
                        artworkImageOptions: {
                            size: 340,
                            stretch: !0,
                            zoomable: !0,
                            editable: n(55).get("me").owns(t)
                        },
                        showUpsell: !i && n(215).soundRequiresUpsell(t)
                    })
                }
            })
        }).call(t, n(1))
    },
    1028: function(e, t, n) {
        "use strict";
        var i = 3;
        e.exports = n(54).extend(n(68).withOptions("listenSidebar"), {
            template: n(2510),
            css: n(2884),
            className: "listenNetworkSidebar",
            ModelClass: n(75),
            requiredAttributes: ["sharing"],
            defaults: {
                adZone: "dashboxListen",
                showArtistInfo: !1
            },
            getTemplateData: function(e) {
                var t = "playlist" === e._resource_type,
                    r = this.model.isPrivate();
                return n(3).assign(e, {
                    hasPublicStats: this.model.attrExists("likes_count"),
                    isPrivate: r,
                    isPlaylist: t,
                    hasVisuals: this.model.hasVisuals(),
                    showRelated: !r && !t,
                    numRelatedItems: i
                })
            }
        })
    },
    1036: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).find(e, function(e) {
                return e.isAvailable()
            })
        }
        e.exports = n(54).extend(n(126).withOptions({
            elSelector: ".playlistConsumerSubUpsell__messageCta",
            type: "go"
        }), {
            template: n(2574),
            css: n(2954),
            className: "playlistConsumerSubUpsell",
            defaults: {
                monetizationModels: null,
                isAlbum: !1
            },
            states: {
                hidden: "sc-hidden"
            },
            setup: function(e) {
                var t = this,
                    i = e.monetizationModels,
                    r = n(3).flatten(i.map(n(215).monetizationModelToProductIds));
                this.requiredProducts = r.map(function(e) {
                    return t.addDataSource(new(n(77))({
                        id: e
                    }), {
                        observedAttributes: ["preselected_term"]
                    })
                }), this.toggleState("hidden", !0)
            },
            getTemplateData: function() {
                var e = i(this.requiredProducts);
                if (e) {
                    var t = n(52).t("Hear every second of every track with SoundCloud Go+.");
                    return {
                        isHighTier: e.id === n(72).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER,
                        description: t,
                        isAlbum: this.options.isAlbum,
                        trialAvailable: e.isTrial(),
                        trackingCode: this.getUpsellRef()
                    }
                }
                return {}
            },
            renderDecorate: function() {
                var e = null == i(this.requiredProducts);
                this.toggleState("hidden", e)
            },
            getUpsellRef: function() {
                return "t1043"
            }
        })
    },
    1039: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            defaults: {
                compact: !1,
                num_related_items: 3,
                playlistType: "playlists"
            },
            iconClassName: "set",
            moduleClassName: "soundInSetsModule",
            itemMinHeight: 70.2,
            title: null,
            moreText: n(52).t("View all"),
            ModelClass: n(66),
            Subview: n(391),
            setup: function() {
                var e = this.model,
                    t = this.options,
                    i = t.num_related_items,
                    r = t.compact,
                    s = t.playlistType;
                this.title = "albums" === s ? n(52).t("In albums") : n(52).t("In playlists"), this.moreLink = n(61).getRoute("listenNetwork", e, "albums" === s ? "albums" : "sets"), this.noFollow = !0, this.subviewArgs = {
                    noFollow: !0,
                    show_action_buttons: !1,
                    allowTrackFallback: !1,
                    maxDisplay: i,
                    compact: r,
                    highlight: !0,
                    Collection: n(328),
                    collectionArgs: {
                        limit: i,
                        resource_id: e.id,
                        playlists_for: "sound",
                        playlistType: s
                    }
                }
            }
        })
    },
    1041: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2632),
            css: n(3008),
            className: "license sc-type-light",
            ModelClass: n(75),
            requiredAttributes: ["license"],
            getTemplateData: function(e) {
                var t = n(130).parse(e.license),
                    i = e.isCreativeCommons = t.license === n(130).COMMONS;
                return i && (e.license_url = n(130).toURL(t), e.license_title = n(52).t("This track is released under a CC [[license]] license. Click for details.", {
                    license: e.license
                })), e
            }
        })
    },
    1208: function(e, t, n) {
        "use strict";
        e.exports = n(973).extend({
            defaults: {
                category: null,
                urn: null
            },
            baseUrl: function() {
                return this.options.category ? this.getEndpointUrl("tagsSuggestedCategory", {
                    category: this.options.category,
                    urn: this.options.urn
                }) : this.getEndpointUrl("tagsSuggested", {
                    urn: this.options.urn
                })
            },
            parse: function(e) {
                var t = e.suggestions,
                    n = t && t[0],
                    i = n && n.tags;
                return i && i.map(function(e) {
                    return e.name
                })
            }
        }, {
            hashFn: function(e, t) {
                return t && t.urn || null
            }
        })
    },
    1224: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n, i, r = this.length,
                s = null,
                o = r - 1;
            for (i = 0; r > i; ++i)
                if (t = this.at(i).get("timestamp"), null === s && t === e) s = i;
                else if (null !== s && t !== e) {
                o = i - 1;
                break
            }
            return null === s ? (o = null, n = []) : n = this.models.slice(s, o + 1), {
                start: s,
                end: o,
                comments: n
            }
        }
        e.exports = n(293).extend({
            defaults: {
                limit: 50
            },
            baseUrl: function() {
                return this.getEndpointUrl("appV2TrackComments", {
                    id: this.options.sound_id
                }, {
                    threaded: 1
                })
            },
            parse: function(e) {
                var t = n(293).prototype.parse.call(this, e),
                    i = this.last(),
                    r = i ? i.get("timestamp") : -1,
                    s = i && (i.get("replyTo") || i.id);
                return t.map(function(e) {
                    return r === e.timestamp ? e.replyTo = s : (e.replyTo = null, r = e.timestamp, s = e.id), e
                })
            },
            addReply: function(e) {
                var t, r = this.normalizeTimestamp(e.get("timestamp")),
                    s = i.call(this, r),
                    o = s.comments[0],
                    a = n(3).last(s.comments),
                    l = n(55).get("me");
                a.isNew() && a.isEditing() ? a.setReplyTo(e) : (t = new(n(108))({
                    timestamp: r,
                    created_at: (new Date).toISOString(),
                    body: "@" + e.get("user").permalink,
                    replyTo: e.id || o.id,
                    track_id: this.options.sound_id,
                    user: l.toJSON(),
                    user_id: l.id
                }), t.setEditState(n(136).EDITING), this.add(t, {
                    at: s.end + 1
                }), t.release())
            },
            getCommentAtTimestamp: function(e) {
                return this.findWhere({
                    timestamp: e
                }) || null
            },
            onCommentCreated: function(e) {
                if (e.get("replyTo")) {
                    var t = i.call(this, e.get("timestamp")),
                        n = t.end;
                    null === n || n === this.length - 1 && !this.isFullyPopulated() || this.add(e, {
                        at: n + 1
                    })
                } else this.add(e, {
                    at: 0
                })
            }
        })
    },
    1252: function(e, t, n) {
        "use strict";

        function i(e, t, i, r) {
            var s = e.message,
                o = e.xhr,
                a = e.status,
                l = i.userPermalink,
                c = i.soundPermalink;
            return s === n(146).SOUND_NOT_FOUND ? u(l).then(function(e) {
                var n = e.user;
                return p(t, {
                    user: n,
                    permalink: l + "/" + c
                })
            }).done(function() {
                r.resolve(), n(57).trigger("tracking:listenLayout", {
                    audible: null
                })
            }) : (n(123).ajaxFatal(s)(o, a), n(56).reject(s))
        }

        function r(e) {
            n(55).get("router").navigate(n(61).getRoute("user", e.get("user")), {
                trigger: !0
            })
        }

        function s() {
            this.audible && (this.stopListening(this.audible, "destroy"), this.audible.release(), this.audible = null)
        }

        function o(e, t, n, i) {
            return t && !e ? g : i && n.route.exec(i) ? v : m
        }

        function a(e, t, i) {
            return n(66).resolve(e, t, i).then(null, function(e, t) {
                return n(56).reject({
                    message: n(146).SOUND_NOT_FOUND,
                    xhr: e,
                    status: t
                })
            }).then(function(e) {
                var t = {
                    sound: e,
                    playlist: null
                };
                return e.attrExists("visuals") ? t : e.fetch({
                    attrs: ["visuals"]
                }).then(function() {
                    return t
                })
            })
        }

        function l(e, t, i) {
            var r = n(86).resolve(e, t, i);
            return r.then(null, function(e, t) {
                return n(56).reject({
                    message: n(146).PLAYLIST_NOT_FOUND,
                    xhr: e,
                    status: t
                })
            }).then(function(e) {
                return {
                    sound: null,
                    playlist: e
                }
            })
        }

        function u(e) {
            return n(64).resolve(e).then(function(e) {
                return {
                    user: e
                }
            }, function(e) {
                return n(56).resolve({
                    user: null
                })
            })
        }

        function c(e, t, i, r, s) {
            var o = n(56).defer(),
                u = a(e, t, i);
            return r.handler.apply({
                apply: function(e, t) {
                    var i = l(t.userPermalink, t.playlistPermalink, t.secretToken);
                    n(56).all([u, i]).then(function(e, t) {
                        o.resolve({
                            sound: e.sound,
                            playlist: t.playlist
                        })
                    }, o.reject)
                }
            }, r.route.exec(s).slice(1)), o.promise()
        }

        function d(e, t, n, i, r, s, o) {
            switch (e) {
                case m:
                    return a(t, n, r);
                case g:
                    return l(t, i, r);
                case v:
                    return c(t, n, r, s, o)
            }
        }

        function h(e, t, i, s) {
            var o = this,
                a = n(56).defer(),
                l = void 0,
                u = !1,
                c = s && i ? s.findSound(i) || i : s || i,
                d = c.get("user"),
                h = n(406).getTitleDisplayName(d.first_name, d.last_name, d.username),
                p = {
                    resource_id: c.resource_id,
                    resource_type: c.resource_type
                },
                f = "sound" === c.resource_type;
            this.listenTo(c, "destroy", r), c.hold(), this.audible = c, f && e ? (u = !0, n(61).removeFragmentParams("t")) : e = null, this.setTitle(n(52).t("[[[soundTitle]]] by [[[artist]]] | Free Listening on SoundCloud", {
                soundTitle: c.get("title"),
                artist: h
            }), {
                withoutSuffix: !0
            });
            var m = n(f ? 1496 : 239),
                g = f ? [n(474), {
                    largePadding: !0,
                    scenario: "comment"
                }] : [n(239)];
            return f && c.isBlocked() ? (this.switchLayout(b), l = {
                "l-confirm-email-banner": g,
                "l-banner": [m, n(3).clone(p)],
                "l-listen-hero": [n(1027), n(3).assign({
                    playQueuePriority: 1
                }, p)],
                "l-engagement": [n(1026), n(3).clone(p)],
                "l-main": [n(1492), {
                    resource_id: i.id
                }]
            }) : c.hasVisuals() ? (this.switchLayout(_), l = {
                "l-confirm-email-banner": g,
                "l-banner": [m, n(3).clone(p)],
                "listen-content": [n(1494), n(3).assign({
                    playQueuePriority: 1
                }, p)],
                "l-sidebar-left": [n(605), n(3).clone(p)],
                "l-main": [n(1025), n(3).assign({
                    show_full_details: !0,
                    comment_id: t
                }, p)],
                "l-sidebar-right": [n(1028), n(3).assign({
                    showArtistInfo: !0
                }, p)]
            }) : (this.switchLayout(y), l = {
                "l-confirm-email-banner": g,
                "l-banner": [m, n(3).clone(p)],
                "l-listen-hero": [n(1027), n(3).assign({
                    playQueuePriority: 1
                }, p)],
                "l-about-top": [n(1026), n(3).clone(p)],
                "l-about-left": [n(1489), {
                    resource_id: c.get("user").id,
                    soundId: i ? i.resource_id : null,
                    showCopyright: !!i && !n(55).get("me").owns(i)
                }],
                "l-about-right": [n(1025), n(3).assign({
                    show_partial_details: !0,
                    show_avatar_in_login: !1
                }, p)],
                "l-sidebar-right": [n(1028), n(3).clone(p)]
            }), this.setViews(l).done(function() {
                a.resolve(), n(57).trigger("tracking:listenLayout", {
                    audible: c
                }), (u || n(1308).shouldAutoPlay()) && o.playAudible(c, {
                    seek: e
                })
            }), a.promise()
        }

        function p(e, t) {
            var i = t.user,
                r = t.permalink,
                s = i ? i.id : null;
            return e.setTitle(n(52).t("This track was not found | Free Listening on SoundCloud"), {
                withoutSuffix: !0
            }), e.switchLayout(b), e.setViews({
                "l-listen-hero": [n(1499), {
                    userId: s,
                    permalink: r
                }],
                "l-main": [n(1498), {
                    userId: s,
                    permalink: r
                }]
            })
        }

        function f() {
            var e = n(62).getFragmentParam("t");
            return e ? n(52).dateTimeHelper.stringToTime(e) : 0
        }
        var m = 1,
            g = 2,
            v = 3,
            _ = {
                template: n(1135),
                includeFooter: ".l-sidebar-right"
            },
            y = {
                template: n(774),
                includeFooter: ".l-sidebar-right"
            },
            b = {
                template: n(1134),
                includeFooter: ".l-main"
            };
        e.exports = n(117).extend(n(149), {
            performanceSelector: ".sound.listenContext .sc-button-play, .heroPlayButton",
            css: [n(2757), n(1151), n(1150), n(506), n(1157)],
            template: n(774),
            tracking: {
                pageName: function() {
                    return (this.args.soundPermalink ? "tracks" : "playlists") + ":main"
                },
                pageUrn: function() {
                    return this.audible ? this.audible.getUrn() : null
                }
            },
            setup: function(e) {
                var t = this,
                    r = f(),
                    a = n(56).defer(),
                    l = n(62).getQueryParam("in"),
                    u = n(55).get("router").getRouteInfo("playlist");
                return s.call(this), d(o(e.soundPermalink, e.playlistPermalink, u, l), e.userPermalink, e.soundPermalink, e.playlistPermalink, e.secretToken, u, l).then(function(n) {
                    return h.call(t, r, e.commentId, n.sound, n.playlist)
                }).then(null, function(n) {
                    return i(n, t, e, a)
                }).then(null, function(e) {
                    return n(123).ajaxFatal(e)
                }).then(a.resolve, a.reject), a
            },
            dispose: function() {
                return this.audible = null, n(117).prototype.dispose.apply(this, arguments)
            }
        })
    },
    1308: function(e, t, n) {
        "use strict";
        e.exports = {
            shouldAutoPlay: function() {
                return n(112).desktop && !n(112).isJsEnabledBot && this._isInitialPage() && this._isOnlyInstance()
            },
            _isInitialPage: function() {
                return n(55).get("router").getNavCount() <= 1
            },
            _isOnlyInstance: function() {
                return n(156) && n(156).size() <= 1
            }
        }
    },
    1338: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                t.preventDefault();
                var n = t.which,
                    i = t.type;
                if (n === r || "click" === i) {
                    var s = this.getListItemViewByEvent(t);
                    s && e.call(this, s)
                }
            }
        }
        var r = n(102).ENTER;
        e.exports = new(n(21))({
            requirePrototype: n(80).prototype,
            applyTo: function(e) {
                var t, n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    r = n.selector,
                    s = void 0 === r ? "" : r,
                    o = n.onSelect,
                    a = i(o);
                this.merge(e, {
                    events: (t = {}, t["click.selectable " + s] = a, t["keydown.selectable " + s] = a, t)
                })
            }
        })
    },
    1361: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(551), {
            setup: function() {
                this.synchronizeStates()
            },
            isPlaying: function() {
                return !1
            },
            isDisabled: function() {
                return !0
            },
            isBuffering: function() {
                return !1
            }
        })
    },
    1374: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = t(window);
            e.exports = n(54).extend({
                template: n(2409),
                css: n(2790),
                className: "truncatedUserText",
                element2selector: {
                    content: ".userText__content",
                    expanded: ".userText__expanded",
                    collapsed: ".userText__collapsed"
                },
                defaults: {
                    maxLength: 50,
                    splitWordsAtLength: 12,
                    content: null,
                    moreText: n(52).t("Show More…"),
                    lessText: n(52).t("Show Less"),
                    contentClass: null,
                    toggleLinkClass: null,
                    collapsed: !0
                },
                _collapsed: null,
                $toggleLink: null,
                setup: function(e) {
                    this._collapsed = e.collapsed
                },
                toggle: function(e, t) {
                    e = null != e ? e : !this._collapsed;
                    var n, r, s = this.options,
                        o = s.moreText,
                        a = s.lessText,
                        l = e ? "addClass" : "removeClass",
                        u = e ? o : a;
                    this._collapsed = e, this.$el[l]("collapsed"), this.$toggleLink.toggleClass("collapsed", e).text(u), t && t.preventDefault(), e || (n = i.scrollTop(), r = this.$el.height(), n > this.$el.position().top && window.scrollTo(0, n - (r - this.$el.height())))
                },
                renderDecorate: function() {
                    var e = this,
                        n = this.options;
                    this.$el.addClass(n.contentClass), this.getElement("collapsed").text().length === this.getElement("expanded").text().length ? this.getElement("collapsed").remove() : (this.$toggleLink = t(window.document.createElement("a")).attr({
                        "class": "g-link-collapse truncatedUserText__toggleLink " + (this.options.toggleLinkClass || "sc-link-light"),
                        href: "#"
                    }).click(function(t) {
                        e.toggle(null, t)
                    }).appendTo(this.$el), this.toggle(n.collapsed))
                },
                getTemplateData: function() {
                    return n(3).pick(this.options, "content", "maxLength", "splitWordsAtLength")
                }
            })
        }).call(t, n(1))
    },
    1396: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2414),
            className: "appBadge sc-media",
            ModelClass: n(985),
            requiredAttributes: ["name", "permalink_url"]
        })
    },
    1427: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(965), {
            ModelClass: n(108),
            defaults: {
                sound_id: null
            },
            recipient: null,
            states: {
                visible: "visible"
            },
            setup: function() {
                var e = this.model,
                    t = e.get("body") + " ";
                this.recipient = this.extractRecipient(t), this.recipient && e.set("body", this.removeRecipientText(t)), this.toggleState("visible", !0)
            },
            cancelInput: function() {
                this.model.destroy()
            },
            renderDecorate: function() {
                var e = this;
                this.whenInserted().done(function() {
                    e.setRecipient(e.recipient), e.focus()
                })
            },
            postComment: function() {
                var e = this,
                    t = this.model;
                t.lastFetchTime = Date.now(), t.set("body", this.getCombinedBody()).setEditState(n(136).SAVING).save().done(function() {
                    t.setEditState(n(136).NONE), n(74).notify("comment", {
                        object: t,
                        target: e.options.sound_id,
                        targetType: "sound"
                    }), n(57).trigger(n(206).SENT, t)
                }).fail(function() {
                    t.setEditState(n(136).EDITING)
                })
            }
        })
    },
    1430: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.getListItemViewByEvent(e),
                n = t.model;
            e.preventDefault(), n.isNew() || this.collection.addReply(n)
        }

        function r() {
            var e = this.sound.get("comment_count"),
                t = e ? n(52).tp("1 comment", "%d comments", e) : n(52).t("Comments");
            this.getElement("commentCount").text(t)
        }

        function s(e) {
            var t = e.model.get("timestamp");
            this.sound.isPlaying() ? this.sound.seek(t) : this.playAudible(this.sound, {
                seek: t
            })
        }
        var o = n(114).subview;
        e.exports = n(78).extend(n(149), n(1338).withOptions({
            selector: n(1006).TIMESTAMP_SELECTOR,
            onSelect: s
        }), {
            className: "commentsList g-box-full",
            itemClassName: "commentsList__item",
            template: n(2429),
            css: n(2810),
            Subview: n(1006),
            defaults: {
                limit: 20,
                sound_id: null,
                comment_id: null
            },
            events: {
                "click .commentItem__replyButton": i
            },
            element2selector: {
                commentCount: ".commentsList__actualTitle"
            },
            setup: function(e) {
                var t = e.sound_id,
                    i = e.resource_id,
                    r = e.limit,
                    s = e.comment_id;
                this.sound = this.addDataSource(new(n(66))({
                    id: t,
                    resource_id: i
                }), {
                    requiredAttributes: ["commentable"],
                    observedAttributes: ["comment_count"]
                }), this.collection = new(n(1224))(null, {
                    sound_id: this.sound.id,
                    secret_token: this.sound.get("secret_token"),
                    limit: r
                }), s && (this.showLinkedComment = n(3).once(this.showLinkedComment.bind(this)), this.options.bulkFetch = 5e3)
            },
            dispose: function() {
                this.sound = null
            },
            emptyTemplate: function() {
                return o(n(977), {
                    emptyPageClass: "emptyComments",
                    page: "comments"
                })
            },
            getTemplateData: function(e) {
                return e.comment_count = this.sound.get("comment_count"), e
            },
            renderDecorate: function() {
                var e = this.options.comment_id;
                n(78).prototype.renderDecorate.apply(this, arguments), e && this.collection.get(e) && this.whenInserted().done(this.showLinkedComment), r.call(this)
            },
            showLinkedComment: function() {
                var e = this,
                    t = this.collection.get(this.options.comment_id),
                    n = this.getListItemView(t);
                n.scrollIntoView({
                    position: "top"
                }).done(function() {
                    e.collection.addReply(t)
                })
            },
            getSubviewArgs: function() {
                return n(3).assign(n(78).prototype.getSubviewArgs.apply(this, arguments), {
                    sound_id: this.options.sound_id
                })
            },
            onModelChange: function(e, t, i) {
                e === this.sound && this.getElement("commentCount").length ? r.call(this) : n(78).prototype.onModelChange.call(this, e, t, i)
            }
        })
    },
    1489: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "listenArtistInfo",
            template: n(2494),
            css: n(2868),
            defaults: {
                showCopyright: !1,
                soundId: null
            }
        })
    },
    1490: function(e, t, n) {
        "use strict";

        function i(e) {
            this.subviews.artwork && e.id === this._currentSoundId || (r.call(this, e), this._currentSoundId = e.id)
        }

        function r(e) {
            var t = this.subviews.artwork,
                i = n(3).assign({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }, this.options.imageOptions);
            t && (t._dispose(), this.removeSubview(t)), this.addSubview(new(n(89))(i), "artwork").render().$el.appendTo(this.getElement("artwork"))
        }

        function s() {
            return "playlist" === this.model.resource_type
        }
        e.exports = n(54).extend({
            className: "listenArtworkWrapper",
            template: function() {
                return '<div class="listenArtworkWrapper__artwork"></div>'
            },
            css: n(2869),
            ModelClass: n(75),
            requiredAttributes: {
                playlist: ["tracks"]
            },
            _currentSoundId: null,
            defaults: {
                imageOptions: null
            },
            element2selector: {
                artwork: ".listenArtworkWrapper__artwork"
            },
            setup: function(e) {
                s.call(this) && this.listenTo(this.model, "internal:play", this.switchArtwork).listenTo(n(67), "change:currentSound", this.setInitialArtwork)
            },
            switchArtwork: function() {
                !this.disposed && this.model.isNowPlaying() && i.call(this, this.model.getCurrentSound())
            },
            setInitialArtwork: function() {
                this.disposed || this.model.isNowPlaying() || i.call(this, this.model)
            },
            renderDecorate: function() {
                this.setInitialArtwork.call(this), this.switchArtwork.call(this)
            }
        })
    },
    1491: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2495),
            css: n(2870),
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["sharing", "managed_by_feeds", "monetization", "scheduled_public_date", "scheduled_private_date", "scheduled_timezone", "geo_blockings"],
                playlist: ["sharing"]
            },
            defaults: {
                showPrivateOnly: !1
            },
            hasData: function() {
                return this.options.showPrivateOnly ? this.model.attrExists("sharing") : n(54).prototype.hasData.apply(this, arguments)
            },
            getTemplateData: function(e) {
                var t = n(342).enabledAttributes(this.model),
                    i = ["isPrivate", "isGeoblocked", "isManagedByFeeds", "isMonetizable", "isMonetizablePending", "hasScheduledPrivacy"].some(n(3).propertyOf(t));
                return n(3).assign(e, t, {
                    hasAnyAttributes: i
                })
            }
        })
    },
    1492: function(e, t, n) {
        "use strict";
        var i = 6,
            r = "top";
        e.exports = n(54).extend({
            template: n(2497),
            css: n(2872),
            className: "blockedContent",
            ModelClass: n(66),
            requiredAttributes: ["genre"],
            setup: function(e) {
                var t = e.resource_id;
                this.relatedSounds = this.addDataSource(new(n(294))(null, {
                    resource_id: t,
                    resource_type: "sound"
                }), {
                    minModels: i
                }), this.relatedSounds.setLimit(12)
            },
            getTemplateData: function(e) {
                var t = e.useFallback = this.relatedSounds.length < i;
                return t && (e.chartGenre = n(124).userGenreToChartGenre(e.genre).id, e.chartKind = r, e.tagline = n(124).taglines(r, e.chartGenre)["long"]), e
            }
        })
    },
    1493: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(3).find(e, function(e) {
                return e.isAvailable()
            })
        }
        e.exports = n(54).extend(n(126).withOptions({
            elSelector: ".listenConsumerSubUpsell__button",
            type: "go"
        }), {
            template: n(2499),
            css: n(2874),
            className: "listenConsumerSubUpsell sc-type-small g-flex-row-centered-spread",
            defaults: {
                monetizationModel: null
            },
            states: {
                hidden: "sc-hidden"
            },
            setup: function(e) {
                var t = this,
                    i = e.monetizationModel,
                    r = n(215).monetizationModelToProductIds(i);
                this.requiredProducts = r.map(function(e) {
                    return t.addDataSource(new(n(77))({
                        id: e
                    }), {
                        observedAttributes: ["preselected_term"]
                    })
                }), this.toggleState("hidden", !0)
            },
            renderDecorate: function() {
                var e = null == i(this.requiredProducts);
                this.toggleState("hidden", e)
            },
            getUpsellRef: function() {
                return "t1018"
            },
            getTemplateData: function(e) {
                return e.description = n(52).t("Get SoundCloud Go+"), e
            }
        })
    },
    1494: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.getSoundsCollection();
            this.pollBreaker || (this.pollBreaker = new(n(148))({
                tolerance: 1,
                baseDelay: 2e3,
                giveUp: 15,
                backoffRate: 1.5,
                maxDelay: 15e3,
                enabled: !1
            })), r(e) || this.listenTo(this.pollBreaker, "enabled", this.checkForProcessing)
        }

        function r(e) {
            return e.every(function(e) {
                return !e.isProcessing() && e.get("duration")
            })
        }

        function s(e) {
            var t = [];
            return e.each(function(e) {
                t.push(e.fetch())
            }), n(56).settled(t)
        }

        function o(e) {
            return e.playlist && e.playlist.getSoundIndex(e)
        }
        e.exports = n(54).extend(n(68).withOptions("listenContent"), {
            template: n(2500),
            css: n(2875),
            className: "listenContent l-inner-fullwidth",
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["visuals"]
            },
            renderDecorate: function() {
                var e = this.model.resource_type;
                this.$el.addClass("listenContent__" + e), "playlist" === e && i.call(this), this.model.hasVisuals && this.model.hasVisuals() && this.$el.addClass("l-inner-fullwidth")
            },
            dispose: function() {
                this.pollBreaker && this.stopListening(this.pollBreaker, "enabled")
            },
            getTemplateData: function(e) {
                var t, i = this.model,
                    r = "sound" === e._resource_type,
                    s = "playlist" === e._resource_type,
                    a = this.model.hasVisuals && this.model.hasVisuals();
                return i.playlist && (t = i.playlist.toJSON()), n(3).assign(e, {
                    isSound: r,
                    isPlaylist: s,
                    isVisual: a,
                    playlist: t,
                    soundIndex: o(this.model)
                })
            },
            checkForProcessing: function() {
                var e = this,
                    t = this.model.getSoundsCollection();
                this.addDeferred(s(t).done(function() {
                    r(t) ? (e.stopListening(e.pollBreaker, "enabled"), e.addDeferred(e.model.fetch().done(function() {
                        e.rerender()
                    }))) : e.pollBreaker.failed()
                }))
            }
        })
    },
    1495: function(e, t, n) {
        "use strict";

        function i(e, t) {
            switch (e) {
                case "album":
                    return n(52).t('In album: <span class="inPlaylist__title">[[playlistTitle]]</span>', {
                        playlistTitle: t
                    });
                case "ep":
                    return n(52).t('In EP: <span class="inPlaylist__title">[[playlistTitle]]</span>', {
                        playlistTitle: t
                    });
                case "single":
                    return n(52).t('In single: <span class="inPlaylist__title">[[playlistTitle]]</span>', {
                        playlistTitle: t
                    });
                case "compilation":
                    return n(52).t('In compilation: <span class="inPlaylist__title">[[playlistTitle]]</span>', {
                        playlistTitle: t
                    });
                default:
                    return n(52).t('In playlist: <span class="inPlaylist__title">[[playlistTitle]]</span>', {
                        playlistTitle: t
                    })
            }
        }
        e.exports = n(54).extend({
            template: n(2504),
            css: n(2878),
            className: "inPlaylist",
            ModelClass: n(86),
            requiredAttributes: ["title", "artwork_url", "set_type"],
            defaults: {
                size: 24
            },
            getTemplateData: function(e) {
                return e.inPlaylistLabel = i(this.model.get("set_type"), this.model.get("title")), e
            }
        })
    },
    1496: function(e, t, n) {
        "use strict";

        function i() {
            return n(164).isValidIndex(this.soundIndex, this.userSounds) && !n(164).alreadySeenListenUpsell()
        }
        var r = n(59).trackV0Click,
            s = n(59).trackImpression;
        e.exports = n(54).extend(n(555), {
            template: n(2506),
            css: n(2880),
            className: "listenUpsell sc-type-light sc-border-box",
            events: {
                "click .upsellBanner__button": "onClick",
                "click .upsellBanner__close": "onClose"
            },
            states: {
                expanded: "expanded"
            },
            soundIndex: -1,
            hasData: function() {
                return this.sound && !!this.sound.lastFetchTime && this.userSounds.isPopulated()
            },
            setup: function(e) {
                this.sound = new(n(66))({
                    resource_id: e.resource_id
                }), this.userSounds = new(n(214))(null, {
                    resource_id: this.sound.get("user_id"),
                    limit: 50
                })
            },
            dispose: function() {
                this.userSounds && this.userSounds.release(), this.sound.release()
            },
            fetchData: function() {
                function e() {
                    this.soundIndex = o.indexOfEquivalentModel(s), i.call(this) ? (l.resolve(), this.rerender()) : l.reject()
                }

                function t() {
                    var t = this;
                    n(164).isValidSound(this.sound) ? o.isPopulated() && o.length > n(164).getUpsellableTrackCount() ? e.call(this) : o.fetch().done(function() {
                        e.call(t)
                    }).fail(l.reject) : l.reject()
                }
                var r = this,
                    s = this.sound,
                    o = this.userSounds,
                    a = n(56).defer(),
                    l = n(56).defer();
                return n(55).get("me").owns(this.sound) ? s.lastFetchTime ? (a.resolve(), t.call(this)) : s.fetch().done(function() {
                    t.call(r), a.resolve(r.sound)
                }).fail(a.reject) : (a.reject(), l.reject()), n(56).settled([a, l])
            },
            onClose: function() {
                this.toggleState("expanded", !1), n(164).dismissListenUpsell(), r(["upsell_teaser_listen", "dismiss"], {
                    impression_name: "listen_upsell",
                    context: this.getContextData(),
                    originView: "listenUpsell",
                    urn: this.sound.getUrn()
                })
            },
            onClick: function() {
                r(["upsell_teaser_listen", "click"], {
                    impression_name: "listen_upsell",
                    context: this.getContextData(),
                    originView: "listenUpsell",
                    urn: this.sound.getUrn()
                })
            },
            renderDecorate: function() {
                n(55).get("me").owns(this.sound) && i.call(this) && (n(164).dismissListenUpsell(), this.toggleState("expanded", !0), s({
                    impression_name: "listen_upsell",
                    context: this.getContextData(),
                    originView: "listenUpsell",
                    urn: this.sound.getUrn()
                }))
            }
        })
    },
    1497: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "listenLogin",
            ModelClass: n(64),
            css: n(2881),
            template: n(2507),
            requiredAttributes: ["creator_subscriptions"],
            defaults: {
                showAvatar: !0
            },
            getTemplateData: function(e) {
                return {
                    showAvatar: this.options.showAvatar,
                    cameFromFacebook: n(557).facebook,
                    artist: e
                }
            }
        })
    },
    1498: function(e, t, n) {
        "use strict";

        function i(e, t) {
            switch (s(e)) {
                case "profile":
                    return new(n(214))(null, {
                        userId: e.id,
                        keepBlocked: !1
                    });
                case "search":
                    return new(n(295))(null, {
                        category: "sounds",
                        params: {
                            q: r(e, t)
                        }
                    });
                case "station":
                    return new(n(212))(null, {
                        resource_id: "soundcloud:artist-stations:" + e.id
                    });
                case "trending":
                default:
                    return new(n(326))(null, {
                        chartKind: "trending",
                        genre: "all-music"
                    })
            }
        }

        function r(e, t) {
            var n = t.match(/^.*\/(.*)$/)[1];
            return e && n ? e.get("username") + " " + n : ""
        }

        function s(e) {
            return e ? n(55).get("experiments").get("v2_listening", "track_404_suggestions") || "trending" : "trending"
        }
        var o = 12,
            a = 6;
        e.exports = n(54).extend({
            template: n(2508),
            css: n(2882),
            className: "missingFallbackContent",
            defaults: {
                userId: null,
                permalink: null
            },
            setup: function(e) {
                var t = e.userId,
                    r = e.permalink;
                t && (this.user = this.addDataSource(new(n(64))({
                    id: t
                }), {
                    requiredAttributes: ["username"]
                })), this.primarySuggestions = this.addDataSource(i(this.user, r)), this.primarySuggestions.setLimit(o), "station" === s(this.user) && this.addDataSource(new(n(119))({
                    id: "soundcloud:artist-stations:" + this.user.id
                }), {
                    requiredAttributes: ["permalink"]
                })
            },
            getTemplateData: function(e) {
                var t = this.options.userId,
                    i = s(this.user);
                return this.primarySuggestions.length >= a ? (e["is_" + i] = !0, e.userId = t, this.user && (e.userLink = n(114).el("a", {
                    href: n(61).getRoute("user", this.user),
                    "class": "sc-link-dark"
                }, [this.user.get("username")])), "station" === i && (e.stationUrn = this.primarySuggestions.resource_id), "search" === i && (e.searchParams = this.primarySuggestions.options.params)) : e.is_trending = !0, e
            }
        })
    },
    1499: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2509),
            css: n(2883),
            className: "missingListenHero l-inner-fullwidth",
            defaults: {
                permalink: null,
                userId: null
            },
            user: null,
            setup: function(e) {
                var t = (e.permalink, e.userId);
                t && (this.user = this.addDataSource(new(n(64))({
                    id: t
                }), {
                    requiredAttributes: ["username"]
                }))
            },
            getTemplateData: function(e) {
                return this.user && (e.user = this.user.toJSON()), e
            },
            renderDecorate: function() {
                var e = this.options.permalink || "",
                    t = e.split("").reduce(function(e, t) {
                        return e + t.charCodeAt(0)
                    }, 0);
                this.subviews.gradient.setImageUrl(null, t)
            }
        })
    },
    1500: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2511),
            className: "reportCopyright",
            ModelClass: n(66),
            requiredAttributes: ["permalink", "user"],
            getTemplateData: function(e) {
                e.reportCopyrightUrl = n(61).getRoute("reportCopyright", this.model)
            }
        })
    },
    1501: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2512),
            className: "tagWrapper",
            ModelClass: n(75),
            requiredAttributes: ["genre", "tag_list"],
            getTemplateData: function(e) {
                var t = n(55).get("me").owns(this.model),
                    i = e.genre || n(189).parse(e.tag_list).length;
                return e.hasTags = i, e.showSuggestions = t && !i, e
            }
        })
    },
    1502: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(262), {
            template: n(2513),
            css: n(2885),
            className: "truncatedAudioInfo",
            ModelClass: n(75),
            requiredAttributes: ["description"],
            observedAttributes: ["label_name", "tag_list", "release_date"],
            states: {
                overflow: "m-overflow",
                collapsed: "m-collapsed"
            },
            element2selector: {
                wrapper: ".truncatedAudioInfo__wrapper",
                content: ".truncatedAudioInfo__content",
                showToggle: ".truncatedAudioInfo__collapse"
            },
            events: {
                "click .truncatedAudioInfo__collapse": "onCollapseClick"
            },
            defaults: {
                height: 140,
                collapsed: !0
            },
            onCollapseClick: function(e) {
                e.preventDefault(), this.toggleCollapse(!this.getState("collapsed"))
            },
            setup: function() {
                this.listenTo(n(85), "resize:debounced", this.calculateOverflow)
            },
            renderDecorate: function() {
                this.toggleCollapse(this.options.collapsed), this.whenInserted().done(this.calculateOverflow.bind(this))
            },
            toggleCollapse: function(e) {
                var t = (e ? n(52).t("Show more") : n(52).t("Show less")).toString();
                this.toggleState("collapsed", e), this.getElement("showToggle").toggleClass("collapsed", e).text(t), this.getElement("wrapper").css("max-height", e ? this.options.height + "px" : "")
            },
            calculateOverflow: function() {
                this.toggleState("overflow", this.getElement("content").height() > this.options.height)
            },
            getTemplateData: function(e) {
                return e.showLicense = e.license && "sound" === e._resource_type, e
            }
        })
    },
    1598: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.subviews.toggle;
            this.$el.attr("title", e ? s : r), t.getChecked() !== e && t.setChecked(e)
        }
        var r = n(52).t("Turn on shuffle mode"),
            s = n(52).t("Turn off shuffle mode"),
            o = n(59).trackV0Click;
        e.exports = n(54).extend({
            className: "playlistShuffleToggle",
            template: n(425),
            ModelClass: n(86),
            defaults: {
                label: n(52).t("Toggle playlist shuffling"),
                name: "playlistShuffleToggle",
                size: "medium",
                iconActive: "sc-icon-shuffle-orange",
                iconInactive: "sc-icon-shuffle",
                isActive: !1
            },
            attributes: {
                title: r
            },
            bubbleEvents: {
                "toggle:change": "onToggleChange"
            },
            setup: function() {
                this.listenTo(this.model, "state:shuffling", i)
            },
            getTemplateData: function(e) {
                return e.isActive = this.model.getState("shuffling"), e.defaultLabel = this.options.label, e
            },
            onToggleChange: function(e) {
                var t = e.data.isActive;
                this.model.toggleState("shuffling", t), o(["shuffle", "playlist"], {
                    click_name: t ? "shuffle::on" : "shuffle::off",
                    click_object: this.model.getUrn()
                })
            }
        })
    },
    1601: function(e, t, n) {
        "use strict";
        e.exports = n(78).extend({
            className: "trackList g-all-transitions-300",
            listClassName: "trackList__list sc-clearfix sc-list-nostyle",
            itemClassName: "trackList__item sc-border-light-bottom",
            Subview: n(619),
            automaticErrorHandling: !1,
            defaults: {
                pageSize: 15,
                maxDisplay: 500,
                resource_id: null
            },
            setup: function() {
                this.playlistModel = new(n(86))({
                    id: this.options.resource_id
                }), this.collection = this.playlistModel.getSoundsCollection()
            },
            dispose: function() {
                this.playlistModel.release()
            },
            getModelsToRender: function() {
                return this.hasDifferentCreators = !!this.playlistModel.hasDifferentCreators(), this.collection.models
            },
            getSubviewArgs: function(e) {
                return n(3).assign(n(78).prototype.getSubviewArgs.apply(this, arguments), {
                    resource_id: e.resource_id,
                    show_user: this.hasDifferentCreators
                })
            },
            getQueueSource: function() {
                return null
            }
        })
    },
    1655: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            iconClassName: "like",
            moduleClassName: "soundLikesModule",
            moreText: n(52).t("View all"),
            title: n(52).t("Like"),
            Subview: n(323),
            ModelClass: n(75),
            requiredAttributes: ["likes_count"],
            countableAttribute: "likes_count",
            titleWithCount: function(e) {
                return n(52).tp("1 like", "[[count]] likes", e, {
                    count: n(143).render(e, {
                        useSIUnits: !0
                    })
                }, {
                    context: "sidebar"
                })
            },
            contentMinHeight: 60,
            setup: function() {
                var e = this.model,
                    t = "playlist" === this.options.resource_type ? "playlistNetwork" : "listenNetwork";
                this.moreLink = n(61).getRoute(t, e, "likes"), this.noFollow = !0, this.subviewArgs = {
                    maxDisplay: 9,
                    floating: !0,
                    subviewName: "user-avatar-badge-hover",
                    subviewArgs: {
                        noFollow: !0
                    },
                    UsersCollection: n(447),
                    usersCollectionArgs: {
                        type: "likers",
                        resource_id: e.resource_id,
                        resource_type: e.resource_type,
                        limit: 9
                    }
                }
            }
        })
    },
    1656: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            iconClassName: "repost",
            moduleClassName: "soundRepostsModule",
            moreText: n(52).t("View all"),
            title: n(52).t("Reposts"),
            Subview: n(323),
            ModelClass: n(75),
            requiredAttributes: ["reposts_count"],
            countableAttribute: "reposts_count",
            titleWithCount: function(e) {
                return n(52).tp("1 repost", "[[count]] reposts", e, {
                    count: n(143).render(e, {
                        useSIUnits: !0
                    })
                }, {
                    context: "sidebar"
                })
            },
            contentMinHeight: 60,
            setup: function() {
                var e = this.model,
                    t = "playlist" === this.options.resource_type ? "playlistNetwork" : "listenNetwork";
                this.moreLink = n(61).getRoute(t, e, "reposts"), this.noFollow = !0, this.subviewArgs = {
                    maxDisplay: 9,
                    floating: !0,
                    subviewName: "user-avatar-badge-hover",
                    subviewArgs: {
                        noFollow: !0
                    },
                    UsersCollection: n(447),
                    usersCollectionArgs: {
                        type: "reposters",
                        resource_id: e.resource_id,
                        resource_type: e.resource_type,
                        limit: 9
                    }
                }
            }
        })
    },
    1658: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            moduleClassName: "createdByModule",
            title: n(52).t("Created with"),
            ModelClass: n(75),
            Subview: n(1396),
            requiredAttributes: ["created_with"],
            setup: function() {
                this.subviewArgs = {
                    resource_id: this.model.get("created_with").id
                }
            }
        })
    },
    1664: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend(n(68).withOptions("relatedSoundsSidebar"), {
            iconClassName: "sound",
            moduleClassName: "relatedSoundsModule",
            title: n(52).t("Related tracks"),
            ModelClass: n(66),
            itemMinHeight: 70.2,
            Subview: n(391),
            defaults: {
                compact: !1,
                num_related_items: 3
            },
            moreText: n(52).t("View all"),
            setup: function(e) {
                var t = this,
                    i = e.compact,
                    r = e.num_related_items,
                    s = e.resource_id,
                    o = e.resource_type;
                this.relatedSounds = new(n(294))(null, {
                    resource_id: s,
                    resource_type: o
                }), this.noFollow = !0, this.subviewArgs = {
                    compact: i,
                    highlight: !0,
                    Collection: n(294),
                    getRestoreUrl: function() {
                        return n(61).getRoute("listenNetwork", t.model, "related")
                    },
                    maxDisplay: r,
                    collectionArgs: {
                        limit: r,
                        resource_id: s,
                        resource_type: o
                    }
                }
            },
            getTemplateData: function(e) {
                return this.moreLink = n(61).getRoute("listenNetwork", e, "related"), n(118).prototype.getTemplateData.call(this, e) || e
            },
            onContextRequest: function(e) {
                e.data.attribution = e.data.attribution || {}, e.data.attribution.queryUrn = this.relatedSounds.queryUrn
            }
        })
    },
    1788: function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            return new(n(20).SafeString)(n(20).Utils.escapeExpression(n(406).get(e, t)))
        }
    },
    1834: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".l-three-column{position:relative}.l-three-column .l-sidebar-left{position:absolute;top:30px;bottom:0;width:200px;left:0}.l-three-column .l-sidebar-left .l-fixed{width:200px}.l-three-column .l-sidebar-right{position:absolute;top:30px;bottom:0;right:0;width:300px}.l-three-column .l-sidebar-right .l-fixed{width:300px}.l-three-column .l-main{padding:30px 30px 0 0;margin:0 330px 0 230px}@media (max-width:1079px){.l-three-column .l-main{padding-right:20px;margin:0 320px 0 0}.l-three-column .l-sidebar-left{width:auto;position:relative;margin-right:320px}.l-three-column .l-sidebar-left .l-fixed{position:relative;width:auto}}", ""])
    },
    1877: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".truncatedUserText.collapsed .userText__expanded{display:none}.truncatedUserText .userText__collapsed{display:none}.truncatedUserText .userText__expanded,.truncatedUserText.collapsed .userText__collapsed{display:block}.truncatedUserText__toggleLink{margin-top:10px;display:block}", ""])
    },
    1895: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentItem{position:relative;padding:10px 10px 10px 0}.commentItem__read{display:-webkit-flex;display:-ms-flexbox;display:flex}.commentItem__avatar{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:10px}.commentItem__content{-webkit-flex:1 0;-ms-flex:1 0;flex:1 0;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-right:10px}.commentItem__meta{-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.commentItem.m-creatorComment{background-color:#f2f2f2;margin-left:-10px;padding-left:10px}.commentItem.m-isReply{margin-left:20px}.commentItem.m-isReply.m-creatorComment{margin-left:10px}.commentItem__controls{visibility:hidden;white-space:nowrap}.commentItem:hover .commentItem__controls,.commentItem.m-dialogOpen .commentItem__controls{visibility:visible}.commentItem__body p{margin:0}.commentItem__createdAt{margin-left:10px;font-size:11px;white-space:nowrap}.commentItem__username{font-size:12px}.commentItem__timestamp{font-size:11px}@media (max-width:1239px){.commentItem__replyButton{text-indent:-100000px}.commentItem__replyButton::before{left:1px}}", ""])
    },
    1899: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".commentsList__title{padding-bottom:7px}.commentsList__icon{vertical-align:bottom;height:21px;width:21px;margin-right:-1px}", ""])
    },
    1962: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenArtistInfo__copyright{margin-top:30px}", ""])
    },
    1963: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenArtworkWrapper,.listenArtworkWrapper__artwork{width:100%;height:100%}", ""])
    },
    1964: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenAttributes{padding-bottom:8px;margin-bottom:20px}.listenAttributes__attribute{margin-bottom:10px;line-height:20px}", ""])
    },
    1965: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".autoTagger{margin-bottom:0}.autoTagger.loadedWithData{margin-bottom:40px}.autoTagger__content{overflow:hidden;position:relative}.autoTagger__fields{border-top-left-radius:4px;border-top-right-radius:4px}.autoTagger__fields,.autoTagger__content{padding:18px 15px 12px}.autoTagger__title{font-size:24px;margin:0 0 10px}.autoTagger__text{margin-right:135px}.autoTagger__actions{position:absolute;right:15px;bottom:12px}", ""])
    },
    1966: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".blockedContent__heading.sc-type-h2{margin:1em 0}", ""])
    },
    1967: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".blockedTrack{color:#fff;font-size:20px;height:100%;background-size:37px;background-repeat:no-repeat;background-position:12px center;padding-left:78px}.blockedTrackGeo{background-image:url(" + n(2256) + ")}.blockedTrackNotFound{background-image:url(" + n(2340) + ")}", ""])
    },
    1968: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenConsumerSubUpsell{height:56px;color:#fff}.listenConsumerSubUpsell__copy{margin-left:25px}.listenConsumerSubUpsell__snippetIndicator{-webkit-flex:1;-ms-flex:1;flex:1}.listenConsumerSubUpsell__purchaseButton{margin-left:15px}", ""])
    },
    1969: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenContent{position:relative;overflow:hidden;min-height:315px}.listenContent.listenContent__playlist{min-height:268px}.listenContent__inner{background:#fff;padding-top:30px;padding-left:30px;padding-right:30px}.listenContent__inner.listenContent__visual{padding-top:0;padding-left:0;padding-right:0}.listenContent__parentLink{position:absolute;left:50%;top:0;margin-left:-195px;width:390px;z-index:2;border-top:0;border-radius:0 0 4px 4px;background:#fff}", ""])
    },
    1970: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenDetails__tags>.sc-tag-group{margin-bottom:18px}.listenDetails__license{font-size:11px;margin-bottom:18px}.listenDetails__login{margin-bottom:15px}.listenDetails__description{margin-bottom:20px;overflow:hidden}.listenDetails__info{margin-bottom:30px}.listenDetails__trackList{margin-top:-7px}.listenDetails__tags .sc-truncate{max-width:200px}", ""])
    },
    1971: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenEngagement{position:relative;border:1px solid #fff;box-shadow:0 1px 0 0 #f2f2f2;padding:19px 0 4px;margin-bottom:1px}.listenEngagement__commentForm,.listenEngagement__commentFormDisabled{margin-bottom:10px}.listenEngagement__commentForm{margin-top:-7px}.listenEngagement__commentFormDisabled{margin-top:-10px}.listenEngagement__footer{position:relative;min-height:33px}.listenEngagement__actions{float:left;position:relative;z-index:1;overflow:hidden}.listenEngagement__extras{position:absolute;right:0;top:0;z-index:0;text-align:right}.listenEngagement__stats{float:right}.listenEngagement__shuffle{float:right;margin:-2px 0 0 15px}@media (max-width:1239px){.listenEngagement .sc-button-responsive{text-indent:-100000px}}", ""])
    },
    1972: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".inPlaylist__artwork{margin:-2px 7px -3px -7px;overflow:hidden;float:left}", ""])
    },
    1973: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenInfo__copyright{margin-top:20px}.listenInfo__releaseList{font-size:14px;line-height:1.3em}.listenInfo__releaseData{font-weight:100;margin:0 0 .5em 0}", ""])
    },
    1974: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenUpsell{background:#333 url(" + n(2362) + ") right 30px bottom no-repeat}", ""])
    },
    1975: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenLogin{background-color:#F2F2F2;padding:10px}.listenLogin__artPile{min-width:80px;max-width:380px;width:33%;position:relative;height:100px}.listenLogin__artPile__single{position:relative;width:80px;height:80px}.listenLogin__art{width:80px;height:80px;left:0;position:absolute}.listenLogin__tout{margin-bottom:12px}.listenLogin__tout__single{margin-top:10px}.listenLogin__facepile{margin-top:5px}@media (min-width:1400px){.listenLogin__artPile{height:120px}.listenLogin__art{width:120px;height:120px;margin-top:0}.listenLogin__art3{margin-left:-60px}.listenLogin__artPile__single{width:130px;height:120px}}", ""])
    },
    1976: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".missingFallbackContent__heading.sc-type-h2{margin:1em 0}", ""])
    },
    1977: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".missingListenHero{position:relative;height:380px;overflow:hidden;background:#e5e5e5}.missingListenHero__titleArea{display:-webkit-flex;display:-ms-flexbox;display:flex}.missingListenHero__playButton{height:60px;width:60px;margin-right:10px;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.missingListenHero__userTitle{margin-bottom:7px}.missingListenHero__userTitlePlaceholder,.missingListenHero__audibleTitlePlaceholder{background-color:rgba(0,0,0,.8)}.missingListenHero__userTitlePlaceholder{padding-right:70px}.missingListenHero__audibleTitlePlaceholder{padding-right:170px}.missingListenHero__foreground{position:absolute;left:0;top:0;width:100%;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;padding:30px 560px 20px 30px;z-index:10}.missingListenHero__playerArea{position:absolute;bottom:0;left:30px;right:30px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.missingListenHero__blocked{margin-bottom:20px;height:60px}@media (max-width:1079px){.missingListenHero__foreground{padding-left:20px}.missingListenHero__playerArea{left:20px}}", ""])
    },
    1978: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".listenNetworkSidebar__creator{padding-bottom:20px;margin-bottom:25px}", ""])
    },
    1979: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".truncatedAudioInfo__wrapper{overflow:hidden;position:relative}.truncatedAudioInfo__collapse{margin:16px 0 20px;display:none;outline:0}.truncatedAudioInfo__collapse:focus{outline:0;color:#333}.truncatedAudioInfo.m-overflow.m-collapsed .truncatedAudioInfo__wrapper::after{content:' ';position:absolute;left:0;bottom:0;height:20px;width:100%;background:#fff;background:linear-gradient(rgba(255,255,255,0),rgba(255,255,255,.5)90%,#fff)}.truncatedAudioInfo__collapse:after{border-width:4px}.truncatedAudioInfo.m-overflow .truncatedAudioInfo__collapse{display:block}.truncatedAudioInfo .listenInfo__releaseList{margin:0 0 7px 0}.truncatedAudioInfo .listenInfo__releaseTitle{margin-top:10px}", ""])
    },
    2049: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playlistConsumerSubUpsell__messageBox{background-color:#f2f2f2;text-align:center;padding:30px;border:1px solid #e5e5e5;margin-bottom:20px}.playlistConsumerSubUpsell__messageTitle{margin-bottom:8px}.playlistConsumerSubUpsell__messageDescription{margin-bottom:20px}", ""])
    },
    2106: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.license{line-height:1.8em}.license__icon{margin-top:3px}.license__title:before{content:"“"}.license__title:after{content:"”"}', ""])
    },
    2256: function(e, t, n) {
        e.exports = n.p + "assets/images/geoblock_icon@2x-d3be5d2.png"
    },
    2340: function(e, t, n) {
        e.exports = n.p + "assets/images/removed_resource_icon-52c3395.svg"
    },
    2362: function(e, t, n) {
        e.exports = n.p + "assets/images/upsell/stats-07a8c07.png"
    },
    2409: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="userText__collapsed">\n  ' + l((n(53) || t && t.$view || a).call(o, n(224), {
                    name: "$view",
                    hash: {
                        splitWordsAtLength: null != t ? t.splitWordsAtLength : t,
                        maxLength: null != t ? t.maxLength : t,
                        usertext: !0,
                        content: null != t ? t.content : t
                    },
                    data: s
                })) + '\n</div>\n<div class="userText__expanded">\n  ' + l((n(53) || t && t.$view || a).call(o, n(224), {
                    name: "$view",
                    hash: {
                        splitWordsAtLength: null != t ? t.splitWordsAtLength : t,
                        usertext: !0,
                        content: null != t ? t.content : t
                    },
                    data: s
                })) + "\n</div>\n\n"
            },
            useData: !0
        })
    },
    2414: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="sc-media-content">\n  <div class="appBadge__title sc-type-h3 sc-truncate">\n    <a href="' + u((o = null != (o = i.permalink_url || (null != t ? t.permalink_url : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "permalink_url",
                    hash: {},
                    data: s
                }) : o)) + '" class="sc-link-dark" target="_blank">' + u((n(1788) || t && t.$name || l).call(a, t, {
                    name: "$name",
                    hash: {},
                    data: s
                })) + "</a>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2426: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.confirmedUser : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.program(4, r, 0),
                    data: r
                })) ? s : ""
            },
            2: function(e, t, i, r, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1427), {
                    name: "$view",
                    hash: {
                        size: "small",
                        sound_id: null != (o = null != t ? t._options : t) ? o.sound_id : o,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            4: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(484), {
                    name: "$view",
                    hash: {
                        type: "unconfirmed_user",
                        initially_visible: !0,
                        size: "small"
                    },
                    data: s
                })) + "\n"
            },
            6: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <div class="commentItem__read">\n    <a class="commentItem__avatar" href=\'' + u((n(58) || t && t.$route || l).call(a, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + "'>\n      " + u((n(53) || t && t.$view || l).call(a, n(89), {
                    name: "$view",
                    hash: {
                        size: 40,
                        resource_type: "user",
                        resource_id: null != (o = null != t ? t.user : t) ? o.id : o
                    },
                    data: s
                })) + '\n    </a>\n    <div class="commentItem__content">\n      <span class="commentItem__username sc-text-light">\n' + (null != (o = i["if"].call(a, null != t ? t.isMyComment : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.program(12, s, 0),
                    data: s
                })) ? o : "") + '      </span>\n      <div class="commentItem__body sc-hyphenate">\n        ' + u((n(53) || t && t.$view || l).call(a, n(224), {
                    name: "$view",
                    hash: {
                        usertext: !0,
                        content: null != t ? t.body : t,
                        tagName: "span"
                    },
                    data: s
                })) + '\n      </div>\n    </div>\n    <div class="commentItem__meta">\n      <span class="commentItem__createdAt sc-text-light">' + u((n(53) || t && t.$view || l).call(a, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.created_at : t
                    },
                    data: s
                })) + '</span>\n      <div class="commentItem__controls">\n' + (null != (o = i["if"].call(a, null != t ? t.permalink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(a, null != t ? t.canDelete : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "      </div>\n    </div>\n  </div>\n"
            },
            7: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isTimed : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.program(10, r, 0),
                    data: r
                })) ? s : ""
            },
            8: function(e, t, i, r, s) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, 'You <span class="sc-text-verylight commentItem__timestamp">at [[[time]]]:</span>', {
                    name: "$t",
                    hash: {
                        _comment: "Context is 'You (wrote a comment) at [timestamp]'",
                        time: null != t ? t.timeHTML : t
                    },
                    data: s
                })) + "\n"
            },
            10: function(e, t, i, r, s) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "You", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            12: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isTimed : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, r, 0),
                    inverse: e.program(15, r, 0),
                    data: r
                })) ? s : ""
            },
            13: function(e, t, i, r, s) {
                return "            " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, '[[[usernameLink]]] <span class="sc-text-verylight commentItem__timestamp">at [[[time]]]:</span>', {
                    name: "$t",
                    hash: {
                        _comment: "Context is 'Some User (wrote a comment) at [timestamp]'",
                        time: null != t ? t.timeHTML : t,
                        usernameLink: null != t ? t.usernameLink : t
                    },
                    data: s
                })) + "\n"
            },
            15: function(e, t, n, i, r) {
                var s;
                return "            " + e.escapeExpression((s = null != (s = n.usernameLink || (null != t ? t.usernameLink : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "usernameLink",
                    hash: {},
                    data: r
                }) : s)) + "\n"
            },
            17: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '          <a href="' + u((o = null != (o = i.permalink || (null != t ? t.permalink : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "permalink",
                    hash: {},
                    data: s
                }) : o)) + '" class="sc-button sc-button-responsive sc-button-reply sc-button-small commentItem__replyButton" rel="nofollow" title="' + u((n(51) || t && t.$t || l).call(a, "Reply", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '" aria-role="button">' + u((n(51) || t && t.$t || l).call(a, "Reply", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a>\n"
            },
            19: function(e, t, i, r, s) {
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(374), {
                    name: "$view",
                    hash: {
                        size: "small",
                        key: "deleteCommentButton",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showForm : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(6, r, 0),
                    data: r
                })) ? s : ""
            },
            useData: !0
        })
    },
    2429: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                return '<div class="sc-clearfix sc-type-light sc-border-light-bottom">\n  <h3 class="commentsList__title sc-type-light">\n    <span class="sc-icon sc-icon-comment sc-icon-large commentsList__icon"></span>\n    <span class="commentsList__actualTitle"></span>\n  </h3>\n</div>\n'
            },
            useData: !0
        })
    },
    2494: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o;
                return '  <div class="listenArtistInfo__copyright">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1003), {
                    name: "$view",
                    hash: {
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t._options : t) ? o.soundId : o
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {};
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(154), {
                    name: "$view",
                    hash: {
                        size: "large",
                        stretch: !0,
                        avatar_height: 120,
                        avatar_width: 120,
                        display_direction: "vertical",
                        follow_button_cta: !0,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + "\n\n" + (null != (o = i["if"].call(a, null != (o = null != t ? t._options : t) ? o.showCopyright : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2495: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return '  <ul class="listenAttributes sc-border-light-bottom sc-list-nostyle sc-type-small">\n' + (null != (s = n.unless.call(o, null != (s = null != t ? t._options : t) ? s.showPrivateOnly : s, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "  </ul>\n"
            },
            2: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.isManagedByFeeds : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isMonetizable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isGeoblocked : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.hasScheduledPrivacy : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            3: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <li class="listenAttributes__attribute sc-media">\n          ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "restricted",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n          <div class="sc-media-content">\n            ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "restricted",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n          </div>\n        </li>\n"
            },
            5: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <li class="listenAttributes__attribute sc-media">\n          ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "monetizable",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n          <div class="sc-media-content">\n            ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "monetizable",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n          </div>\n        </li>\n"
            },
            7: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isMonetizablePending : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            8: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <li class="listenAttributes__attribute sc-media">\n          ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "monetizable-pending",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n          <div class="sc-media-content">\n            ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "monetizable-pending",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n          </div>\n        </li>\n      "
            },
            10: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <li class="listenAttributes__attribute sc-media">\n          ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "geoblocked",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n          <div class="sc-media-content">\n            ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "geoblocked",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n          </div>\n        </li>\n"
            },
            12: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '        <li class="listenAttributes__attribute sc-media">\n          ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "scheduled",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n          <div class="sc-media-content">\n            ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "scheduled",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n          </div>\n        </li>\n"
            },
            14: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '      <li class="listenAttributes__attribute sc-media">\n        ' + l((n(53) || t && t.$view || a).call(o, n(168), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        type: "private",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n        <div class="sc-media-content">\n          ' + l((n(53) || t && t.$view || a).call(o, n(241), {
                    name: "$view",
                    hash: {
                        type: "private",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n        </div>\n      </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.hasAnyAttributes : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            useData: !0
        })
    },
    2496: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <div class="autoTagger__fields sc-background-light">\n      ' + u((n(53) || t && t.$view || l).call(a, n(650), {
                    name: "$view",
                    hash: {
                        value: t,
                        size: "large",
                        field: "tags",
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(451)
                    },
                    data: s
                })) + '\n    </div>\n    <div class="autoTagger__content sc-background-light">\n      <div class="autoTagger__title">' + u((n(51) || t && t.$t || l).call(a, "Here are some tags to get you started.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n      <p class="autoTagger__text">\n' + (null != (o = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.program(4, s, 0),
                    data: s
                })) ? o : "") + '\n      </p>\n\n    <div class="autoTagger__actions">\n        ' + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        size: "small",
                        button: "cancel",
                        noStyle: !0,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(451)
                    },
                    data: s
                })) + "\n\n        " + u((n(53) || t && t.$view || l).call(a, n(76), {
                    name: "$view",
                    hash: {
                        className: "sc-button-cta",
                        size: "medium",
                        button: "save",
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(451)
                    },
                    data: s
                })) + "\n      </div>\n    </div>\n"
            },
            2: function(e, t, i, r, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add tags to help people find your tracks", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            4: function(e, t, i, r, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add tags to help people find your playlists", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return '<div class="autoTagger__wrapper">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showSuggestions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2497: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                var s;
                return "    " + e.escapeExpression((s = null != (s = n.tagline || (null != t ? t.tagline : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "tagline",
                    hash: {},
                    data: r
                }) : s)) + "\n"
            },
            3: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Try playing these related tracks", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            5: function(e, t, i, r, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        chartKind: null != t ? t.chartKind : t,
                        genre: null != t ? t.chartGenre : t,
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        type: "chart-tracks"
                    },
                    data: s
                })) + "\n"
            },
            7: function(e, t, i, r, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        type: "related-sounds"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return '<div class="sc-type-light sc-type-h2 blockedContent__heading">\n' + (null != (s = n["if"].call(o, null != t ? t.useFallback : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + '</div>\n<div class="blockedContent__list">\n' + (null != (s = n["if"].call(o, null != t ? t.useFallback : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2498: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing;
                return '<div class="blockedTrackMessage">\n  ' + (null != (a = null != (a = i.message || (null != t ? t.message : t)) ? a : u, o = "function" == typeof a ? a.call(l, {
                    name: "message",
                    hash: {},
                    data: s
                }) : a) ? o : "") + ' —\n  <a class="blockedTrack__helpCenterLink sc-link-verylight"\n    href="http://help.soundcloud.com/customer/portal/articles/2575888-no-longer-able-to-find-track"\n    target="_blank">' + e.escapeExpression((n(51) || t && t.$t || u).call(l, "Learn more", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a>\n</div>\n"
            },
            useData: !0
        })
    },
    2499: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="listenConsumerSubUpsell__snippetIndicator">\n  ' + u((n(53) || t && t.$view || l).call(a, n(390), {
                    name: "$view",
                    hash: {
                        color: "light",
                        override: "snippet"
                    },
                    data: s
                })) + '\n</div>\n<div class="listenConsumerSubUpsell__copy">\n  ' + u((n(51) || t && t.$t || l).call(a, "Play full tracks, offline and ad-free.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</div>\n<div class="listenConsumerSubUpsell__purchaseButton">\n  <a class="sc-button sc-button-cta sc-button-medium listenConsumerSubUpsell__button" href="' + u((n(58) || t && t.$route || l).call(a, "consumerPremium", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n    ' + u((o = null != (o = i.description || (null != t ? t.description : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "description",
                    hash: {},
                    data: s
                }) : o)) + "\n  </a>\n</div>\n"
            },
            useData: !0
        })
    },
    2500: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return "listenContent__visual"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {};
                return '<div class="listenContent__inner ' + (null != (o = i["if"].call(a, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(99), {
                    name: "$view",
                    hash: {
                        viewContext: "listenContext",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2501: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o;
                return '  <div class="listenDetails__login">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1497), {
                    name: "$view",
                    hash: {
                        showAvatar: null != (o = null != t ? t._options : t) ? o.show_avatar_in_login : o,
                        resource_id: null != (o = null != t ? t.user : t) ? o.id : o,
                        key: "login"
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            3: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1036), {
                    name: "$view",
                    hash: {
                        isAlbum: null != t ? t.isAlbum : t,
                        monetizationModels: null != t ? t.monetizationModels : t,
                        key: "playlistUpsell"
                    },
                    data: s
                })) + "\n"
            },
            5: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1491), {
                    name: "$view",
                    hash: {
                        showPrivateOnly: null != t ? t.showPrivateOnly : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            7: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1501), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            9: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_tag_suggestions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            10: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1023), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            12: function(e, t, i, r, s) {
                return '  <div class="listenDetails__partialInfo">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1502), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            14: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_full_details : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.has_tracks : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(20, r, 0),
                    inverse: e.program(22, r, 0),
                    data: r
                })) ? s : "")
            },
            15: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.description : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_info : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            16: function(e, t, i, r, s) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1374), {
                    name: "$view",
                    hash: {
                        moreText: "Read full description",
                        maxLength: 500,
                        contentClass: "listenDetails__description sc-type-small",
                        content: null != t ? t.description : t
                    },
                    data: s
                })) + "\n"
            },
            18: function(e, t, i, r, s) {
                return '      <div class="listenDetails__info">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(605), {
                    name: "$view",
                    hash: {
                        show_artwork: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            20: function(e, t, i, r, s) {
                return '    <div class="listenDetails__trackList">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1601), {
                    name: "$view",
                    hash: {
                        showEndView: !0,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            22: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(977), {
                    name: "$view",
                    hash: {
                        page: "playlist",
                        emptyPageClass: "emptyTracks emptyPlaylistTracks"
                    },
                    data: s
                })) + "\n"
            },
            24: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_full_details : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(25, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.showComments : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(30, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            25: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.description : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(26, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.license : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(28, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_info : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            26: function(e, t, i, r, s) {
                return '      <div class="listenDetails__description sc-type-small">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(224), {
                    name: "$view",
                    hash: {
                        usertext: !0,
                        content: null != t ? t.description : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            28: function(e, t, i, r, s) {
                return '      <div class="listenDetails__license">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1041), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            30: function(e, t, i, r, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1430), {
                    name: "$view",
                    hash: {
                        showEndView: !0,
                        comment_id: null != (o = null != t ? t._options : t) ? o.comment_id : o,
                        sound_id: null != t ? t.id : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.showLogin : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.showHighTierUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.showAttributes : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_full_details : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.program(9, r, 0),
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_partial_details : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            useData: !0
        })
    },
    2502: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return '  <div class="listenEngagement__commentForm">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(178), {
                    name: "$view",
                    hash: {
                        sound_id: null != t ? t.id : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            3: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.commentsDisabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            4: function(e, t, i, r, s) {
                return '      <div class="listenEngagement__commentFormDisabled">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(484), {
                    name: "$view",
                    hash: {
                        type: null != t ? t.commentsDisabledType : t,
                        initially_visible: !0,
                        size: "large"
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            6: function(e, t, i, r, s) {
                var o;
                return '    <div class="listenEngagement__actions">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(276), {
                    name: "$view",
                    hash: {
                        size: null != (o = null != t ? t._options : t) ? o.actions_size : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            8: function(e, t, i, r, s) {
                return '      <div class="listenEngagement__shuffle">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1598), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            10: function(e, t, i, r, s) {
                return '      <div class="listenEngagement__stats">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(494), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        show_comment_count: null != t ? t.isMine : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.showCommentForm : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + '\n<div class="listenEngagement__footer sc-clearfix">\n' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_actions : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + '\n  <div class="listenEngagement__extras">\n' + (null != (s = n["if"].call(o, null != t ? t.showShuffleSwitch : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_stats : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2503: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        className: null != t ? t.goTagClass : t,
                        variant: "largeArtwork",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '      <div class="fullHero__parentLink">\n        <a href="' + u((o = null != (o = i.parentPlaylistRoute || (null != t ? t.parentPlaylistRoute : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "parentPlaylistRoute",
                    hash: {},
                    data: s
                }) : o)) + '" class="g-type-shrinkwrap-block g-type-shrinkwrap-large-secondary">\n          ' + u((n(53) || t && t.$view || l).call(a, n(1495), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.parentPlaylistResourceId : t
                    },
                    data: s
                })) + "\n        </a>\n      </div>\n"
            },
            5: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '      <a class="soundTitle__tag sc-tag" href="' + u((n(58) || t && t.$route || l).call(a, "tags", null != t ? t.genre : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow">\n        <span class="soundTitle__tagContent sc-truncate sc-type-medium">' + u((o = null != (o = i.genre || (null != t ? t.genre : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "genre",
                    hash: {},
                    data: s
                }) : o)) + "</span>\n      </a>\n"
            },
            7: function(e, t, i, r, s) {
                return '    <div class="fullHero__tracksSummary">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(618), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            9: function(e, t, i, r, s) {
                return '      <div class="fullHero__blocked">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1024), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            11: function(e, t, i, r, s) {
                return '      <div class="fullHero__waveform">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(496), {
                    name: "$view",
                    hash: {
                        show_comments: null != t ? t.showComments : t,
                        commentFlagSize: "medium",
                        darkCommentText: !1,
                        waveformStyle: "inverted",
                        avatarSize: 20,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            13: function(e, t, i, r, s) {
                return '      <div class="fullHero__playerConsumerSubUpsell">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1493), {
                    name: "$view",
                    hash: {
                        monetizationModel: null != t ? t.monetization_model : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(a, n(574), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: s
                })) + '\n\n<div class="fullHero__foreground fullListenHero__foreground">\n  <div class="fullHero__artwork">\n    ' + u((n(53) || t && t.$view || l).call(a, n(1490), {
                    name: "$view",
                    hash: {
                        imageOptions: null != t ? t.artworkImageOptions : t,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t
                    },
                    data: s
                })) + "\n  </div>\n" + (null != (o = i["if"].call(a, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  <div class="fullHero__title">\n    ' + u((n(53) || t && t.$view || l).call(a, n(321), {
                    name: "$view",
                    hash: {
                        viewContext: "listenContext",
                        show_playbutton: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        is_link: !1
                    },
                    data: s
                })) + "\n\n" + (null != (o = i["if"].call(a, null != t ? t.parentPlaylistRoute : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  </div>\n\n  <div class="fullHero__info">\n    <div class="fullHero__uploadTime sc-type-medium">\n      ' + u((n(53) || t && t.$view || l).call(a, n(115), {
                    name: "$view",
                    hash: {
                        prefix: "",
                        timestamp: null != t ? t.display_date : t
                    },
                    data: s
                })) + "\n    </div>\n\n" + (null != (o = i["if"].call(a, null != t ? t.genre : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </div>\n\n" + (null != (o = i["if"].call(a, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n  <div class="fullHero__playerArea">\n' + (null != (o = i["if"].call(a, null != t ? t.blocked : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.program(11, s, 0),
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(a, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2504: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="inPlaylist__artwork">' + c((n(197) || t && t.$image || u).call(l, t, {
                    name: "$image",
                    hash: {
                        size: null != (o = null != t ? t._options : t) ? o.size : o
                    },
                    data: s
                })) + '</div>\n<div class="inPlaylist__body sc-font sc-truncate sc-media-content">\n  ' + c((a = null != (a = i.inPlaylistLabel || (null != t ? t.inPlaylistLabel : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "inPlaylistLabel",
                    hash: {},
                    data: s
                }) : a)) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2505: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(89), {
                    name: "$view",
                    hash: {
                        editable: !0,
                        zoomable: !0,
                        size: 200,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return '    <dl class="listenInfo__releaseList sc-font">\n' + (null != (s = n["if"].call(o, null != t ? t.label_name : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.release_date : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.publisher_metadata : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "    </dl>\n"
            },
            4: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <dt class="listenInfo__releaseTitle">' + u((n(51) || t && t.$t || l).call(a, "Released by:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</dt>\n        <dd class="listenInfo__releaseData">' + u((o = null != (o = i.label_name || (null != t ? t.label_name : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "label_name",
                    hash: {},
                    data: s
                }) : o)) + "</dd>\n"
            },
            6: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <dt class="listenInfo__releaseTitle">' + u((o = null != (o = i.releaseTypeReleaseDate || (null != t ? t.releaseTypeReleaseDate : t)) ? o : l, "function" == typeof o ? o.call(a, {
                    name: "releaseTypeReleaseDate",
                    hash: {},
                    data: s
                }) : o)) + '</dt>\n        <dd class="listenInfo__releaseData">' + u((n(245) || t && t.$date || l).call(a, null != t ? t.release_date : t, {
                    name: "$date",
                    hash: {
                        displayUTC: !0,
                        format: "readable"
                    },
                    data: s
                })) + "</dd>\n"
            },
            8: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t.publisher_metadata : t) ? s.p_line : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t.publisher_metadata : t) ? s.c_line : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t.publisher_metadata : t) ? s.explicit : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            9: function(e, t, i, r, s) {
                var o, a = e.escapeExpression;
                return '          <dt class="listenInfo__releaseTitle">' + a((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "P-line:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</dt>\n          <dd class="listenInfo__releaseData">' + a(e.lambda(null != (o = null != t ? t.publisher_metadata : t) ? o.p_line_for_display : o, t)) + "</dd>\n"
            },
            11: function(e, t, i, r, s) {
                var o, a = e.escapeExpression;
                return '          <dt class="listenInfo__releaseTitle">' + a((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "C-line:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</dt>\n          <dd class="listenInfo__releaseData">' + a(e.lambda(null != (o = null != t ? t.publisher_metadata : t) ? o.c_line_for_display : o, t)) + "</dd>\n"
            },
            13: function(e, t, i, r, s) {
                return '          <dt class="listenInfo__releaseTitle">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Explicit", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</dt>\n"
            },
            15: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.created_with : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            16: function(e, t, i, r, s) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1658), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            18: function(e, t, i, r, s) {
                return '    <div class="listenInfo__copyright">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1003), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return "<div>\n" + (null != (s = n["if"].call(o, null != t ? t.show_artwork : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.hasReleaseInfo : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_copyright : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2506: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '<h3 class="upsellBanner__title sc-type-light">' + l((n(51) || t && t.$t || a).call(o, "You've just shared a track. Congratulations!", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h3>\n<p class="upsellBanner__copy">' + l((n(51) || t && t.$t || a).call(o, "Want to know where your audience is?<br>Get a Pro plan to access stats that will help you learn more.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</p>\n<a href="' + l((n(58) || t && t.$route || a).call(o, "premium", null, null, "t112", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="upsellBanner__button sc-button sc-button-medium sc-button-cta">' + l((n(51) || t && t.$t || a).call(o, "Learn more about Pro", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a>\n<button class="upsellBanner__close sc-ir">' + l((n(51) || t && t.$t || a).call(o, "close", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n"
            },
            useData: !0
        })
    },
    2507: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <div class="listenLogin__artPile__single sc-media-image">\n      <a href="' + u((n(58) || t && t.$route || l).call(a, "user", null != t ? t.artist : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" title="' + u(e.lambda(null != (o = null != t ? t.artist : t) ? o.username : o, t)) + '">\n        ' + u((n(197) || t && t.$image || l).call(a, null != t ? t.artist : t, {
                    name: "$image",
                    hash: {
                        "class": "listenLogin__art",
                        size: 120,
                        stretch: !0
                    },
                    data: s
                })) + "\n      </a>\n    </div>\n"
            },
            3: function(e, t, n, i, r) {
                return '          Follow <a href="[[href]]">[[name]]</a> and others on SoundCloud.\n'
            },
            5: function(e, t, i, r, s) {
                return '        <div class="listenLogin__facepile">\n          ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(240), {
                    name: "$view",
                    hash: {
                        width: "500"
                    },
                    data: s
                })) + "\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="sc-media">\n' + (null != (o = i["if"].call(a, null != t ? t.showAvatar : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  <div class="sc-media-content sc-font-light">\n      <p class="sc-type-h2 listenLogin__tout listenLogin__tout__single">\n' + (null != (o = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        name: null != (o = null != t ? t.artist : t) ? o.username : o,
                        href: (n(58) || t && t.$route || l).call(a, "user", null != t ? t.artist : t, {
                            name: "$route",
                            hash: {},
                            data: s
                        })
                    },
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '      </p>\n      <div class="sc-button-toolbar">\n        ' + u((n(53) || t && t.$view || l).call(a, n(121), {
                    name: "$view",
                    hash: {
                        type: "signup"
                    },
                    data: s
                })) + "\n        " + u((n(53) || t && t.$view || l).call(a, n(121), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n      </div>\n" + (null != (o = i["if"].call(a, null != t ? t.cameFromFacebook : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2508: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="sc-type-light sc-type-h2 missingFallbackContent__heading">\n    ' + l((n(51) || t && t.$t || a).call(o, "Trending tracks on SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </div>\n  <div class="missingFallbackContent__list">\n    ' + l((n(53) || t && t.$view || a).call(o, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        genre: "all-music",
                        chartKind: "trending",
                        type: "chart-tracks"
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            3: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="sc-type-light sc-type-h2 missingFallbackContent__heading">\n    ' + l((n(51) || t && t.$t || a).call(o, "Other tracks from [[[userLink]]]", {
                    name: "$t",
                    hash: {
                        userLink: null != t ? t.userLink : t
                    },
                    data: s
                })) + '\n  </div>\n  <div class="missingFallbackContent__list">\n    ' + l((n(53) || t && t.$view || a).call(o, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        userId: null != t ? t.userId : t,
                        type: "artist-profile-tracks"
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            5: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="sc-type-light sc-type-h2 missingFallbackContent__heading">\n    ' + l((n(53) || t && t.$view || a).call(o, n(640), {
                    name: "$view",
                    hash: {
                        userLinkClass: "sc-link-dark",
                        messageType: "fallbackSource",
                        resource_id: null != t ? t.stationUrn : t
                    },
                    data: s
                })) + '\n  </div>\n  <div class="missingFallbackContent__list">\n    ' + l((n(53) || t && t.$view || a).call(o, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        resource_id: null != t ? t.stationUrn : t,
                        type: "artist-station-tracks"
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            7: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return '  <div class="sc-type-light sc-type-h2 missingFallbackContent__heading">\n    ' + l((n(51) || t && t.$t || a).call(o, "Was this what you were looking for?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </div>\n  <div class="missingFallbackContent__list">\n    ' + l((n(53) || t && t.$view || a).call(o, n(167), {
                    name: "$view",
                    hash: {
                        maxDisplay: 12,
                        searchParams: null != t ? t.searchParams : t,
                        type: "track-search-results"
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.is_trending : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_profile : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_station : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_search : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            useData: !0
        })
    },
    2509: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a = e.escapeExpression;
                return '          <a href="' + a((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="missingListenHero__titleStuff g-opacity-transition-500 g-type-shrinkwrap-inline g-type-shrinkwrap-large-secondary sc-type-medium">\n            ' + a(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + "\n          </a>\n"
            },
            3: function(e, t, n, i, r) {
                return '          <div class="missingListenHero__userTitlePlaceholder g-type-shrinkwrap-inline g-type-shrinkwrap-large-secondary">&nbsp;</div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(a, n(982), {
                    name: "$view",
                    hash: {
                        key: "gradient"
                    },
                    data: s
                })) + '\n\n<div class="missingListenHero__foreground">\n  <div class="missingListenHero__titleArea">\n    <div class="missingListenHero__playButton">\n      ' + u((n(53) || t && t.$view || l).call(a, n(1361), {
                    name: "$view",
                    hash: {
                        size: "stretch"
                    },
                    data: s
                })) + '\n    </div>\n    <div class="missingListenHero__title">\n      <div class="missingListenHero__userTitle">\n' + (null != (o = i["if"].call(a, null != t ? t.user : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + '      </div>\n      <div class="missingListenHero__audibleTitlePlaceholder g-type-shrinkwrap-inline g-type-shrinkwrap-large-primary">&nbsp;</div>\n    </div>\n  </div>\n  <div class="missingListenHero__playerArea">\n    <div class="missingListenHero__blocked">\n      ' + u((n(53) || t && t.$view || l).call(a, n(1024), {
                    name: "$view",
                    hash: {
                        blockReason: "notFound"
                    },
                    data: s
                })) + "\n    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2510: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(486), {
                    name: "$view",
                    hash: {
                        adZone: null != (o = null != t ? t._options : t) ? o.adZone : o
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, r, s) {
                var o;
                return '  <div class="sc-border-light-bottom listenNetworkSidebar__creator">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(154), {
                    name: "$view",
                    hash: {
                        follow_button_cta: !0,
                        resource_id: null != (o = null != t ? t.user : t) ? o.id : o
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            5: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1664), {
                    name: "$view",
                    hash: {
                        num_related_items: null != t ? t.numRelatedItems : t,
                        compact: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            7: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return "  " + l((n(53) || t && t.$view || a).call(o, n(491), {
                    name: "$view",
                    hash: {
                        title: (n(51) || t && t.$t || a).call(o, "Albums from this user", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        exclude: null != t ? t.id : t,
                        resource_id: null != t ? t.user_id : t,
                        playlistType: "albums"
                    },
                    data: s
                })) + "\n  " + l((n(53) || t && t.$view || a).call(o, n(491), {
                    name: "$view",
                    hash: {
                        title: (n(51) || t && t.$t || a).call(o, "Playlists from this user", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        exclude: null != t ? t.id : t,
                        resource_id: null != t ? t.user_id : t,
                        playlistType: "playlists_without_albums"
                    },
                    data: s
                })) + "\n"
            },
            9: function(e, t, i, r, s) {
                var o = null != t ? t : {},
                    a = i.helperMissing,
                    l = e.escapeExpression;
                return "  " + l((n(53) || t && t.$view || a).call(o, n(1039), {
                    name: "$view",
                    hash: {
                        num_related_items: null != t ? t.num_related_items : t,
                        compact: !0,
                        resource_id: null != t ? t.id : t,
                        playlistType: "albums"
                    },
                    data: s
                })) + "\n  " + l((n(53) || t && t.$view || a).call(o, n(1039), {
                    name: "$view",
                    hash: {
                        num_related_items: null != t ? t.num_related_items : t,
                        compact: !0,
                        resource_id: null != t ? t.id : t,
                        playlistType: "playlists_without_albums"
                    },
                    data: s
                })) + "\n"
            },
            11: function(e, t, i, r, s) {
                var o, a = null != t ? t : {};
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(1655), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n" + (null != (o = i.unless.call(a, null != t ? t.isPrivate : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            12: function(e, t, i, r, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1656), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {};
                return (null != (o = i.unless.call(a, null != t ? t.hasVisuals : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(a, null != (o = null != t ? t._options : t) ? o.showArtistInfo : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(a, null != t ? t.showRelated : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(a, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.program(9, s, 0),
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(a, null != t ? t.hasPublicStats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(a, n(629), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        audibleName: null != t ? t.title : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2511: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, r) {
                return '   Reported tracks are reviewed by a specialist team who take action if the content violates our\n    <a target="_blank" href="[[guidelinesUrl]]">Guidelines</a>\n    or <a target="_blank" href="[[tosUrl]]">Terms</a>. Repeat violation or serious breaches can result\n    in the permanent deletion of accounts.\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<h1 class="g-modal-title-h1 sc-truncate">' + c((n(51) || t && t.$t || u).call(l, "Report track for", {
                    name: "$t",
                    hash: {
                        _comment: 'This is a phrase that gets completed by other words like "Report track for Private violation"'
                    },
                    data: s
                })) + '</h1>\n<ul class="g-list-content">\n  <li><a rel="nofollow" href="' + c((a = null != (a = i.reportCopyrightUrl || (null != t ? t.reportCopyrightUrl : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "reportCopyrightUrl",
                    hash: {},
                    data: s
                }) : a)) + '">' + c((n(51) || t && t.$t || u).call(l, "Copyright infringement", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155801-reporting-privacy-violations">' + c((n(51) || t && t.$t || u).call(l, "Privacy violation", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155766-reporting-pornographic-content">' + c((n(51) || t && t.$t || u).call(l, "Pornographic content", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155717-reporting-abuse-or-harassment">' + c((n(51) || t && t.$t || u).call(l, "Abuse", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155763-reporting-hate-speech">' + c((n(51) || t && t.$t || u).call(l, "Hate speech", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155786-reporting-extremism-and-illegal-content">' + c((n(51) || t && t.$t || u).call(l, "Illegal content", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://help.soundcloud.com/customer/en/portal/articles/2155690-reporting-on-soundcloud?b_id=9644">' + c((n(51) || t && t.$t || u).call(l, "Other", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a></li>\n</ul>\n\n<h2>" + c((n(51) || t && t.$t || u).call(l, "Disclaimer", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + ":</h2>\n<p>\n" + (null != (o = (n(51) || t && t.$t || u).call(l, {
                    name: "$t",
                    hash: {
                        tosUrl: "/terms-of-use",
                        guidelinesUrl: "/community-guidelines"
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</p>\n"
            },
            useData: !0
        })
    },
    2512: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1023), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, r, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(487), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        className: "listenDetails__tags",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.showSuggestions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.hasTags : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : "")
            },
            useData: !0
        })
    },
    2513: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                return '      <div class="sc-type-small">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(224), {
                    name: "$view",
                    hash: {
                        usertext: !0,
                        content: null != t ? t.description : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            3: function(e, t, i, r, s) {
                return '      <div class="truncatedAudioInfo__license">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1041), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="truncatedAudioInfo__wrapper">\n  <div class="truncatedAudioInfo__content">\n' + (null != (o = i["if"].call(a, null != t ? t.description : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    " + u((n(53) || t && t.$view || l).call(a, n(487), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n\n    <div class="truncatedAudioInfo__metadata">\n      ' + u((n(53) || t && t.$view || l).call(a, n(605), {
                    name: "$view",
                    hash: {
                        show_artwork: !1,
                        show_copyright: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n\n" + (null != (o = i["if"].call(a, null != t ? t.showLicense : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  </div>\n</div>\n<p>\n  <a class="truncatedAudioInfo__collapse sc-link-light g-link-collapse collapsed" href="#">' + u((n(51) || t && t.$t || l).call(a, "Show more", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a>\n</p>\n"
            },
            useData: !0
        })
    },
    2574: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <div class="playlistConsumerSubUpsell__messageBox">\n' + (null != (o = i["if"].call(l, null != t ? t.isAlbum : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.program(4, s, 0),
                    data: s
                })) ? o : "") + '    <p class="playlistConsumerSubUpsell__messageDescription sc-type-small">' + c((a = null != (a = i.description || (null != t ? t.description : t)) ? a : u, "function" == typeof a ? a.call(l, {
                    name: "description",
                    hash: {},
                    data: s
                }) : a)) + '</p>\n    <a class="playlistConsumerSubUpsell__messageCta sc-button sc-button-cta sc-button-medium " href="' + c((n(58) || t && t.$route || u).call(l, "consumerPremium", null != t ? t.trackingCode : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n' + (null != (o = i["if"].call(l, null != t ? t.trialAvailable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? o : "") + "    </a>\n  </div>\n"
            },
            2: function(e, t, i, r, s) {
                return '      <h2 class="playlistConsumerSubUpsell__messageTitle">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Hear the full album", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h2>\n"
            },
            4: function(e, t, i, r, s) {
                return '      <h2 class="playlistConsumerSubUpsell__messageTitle">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Hear the full playlist", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h2>\n"
            },
            6: function(e, t, i, r, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Try it free for 30 days", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, r, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Purchase now", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isHighTier : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            useData: !0
        })
    },
    2632: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, r, s) {
                var o, a = null != t ? t : {},
                    l = i.helperMissing;
                return null != (o = (n(51) || t && t.$t || l).call(a, {
                    name: "$t",
                    hash: {
                        user_url: (n(58) || t && t.$route || l).call(a, "user", null != t ? t.user : t, {
                            name: "$route",
                            hash: {},
                            data: s
                        }),
                        license_title: null != t ? t.license_title : t,
                        license_url: null != t ? t.license_url : t,
                        license: null != t ? t.license : t,
                        username: null != (o = null != t ? t.user : t) ? o.username : o,
                        title: null != t ? t.title : t
                    },
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : ""
            },
            2: function(e, t, n, i, r) {
                return '    <span xmlns:dc="http://purl.org/dc/elements/1.1" href="http://purl.org/dc/dcmitype/Text" property="dc:title" rel="dc:type" class="license__title">[[title]]</span>\n    by <a xmlns:cc="http://creativecommons.org/ns#" href="[[user_url]]" property="cc:attributionName" rel="cc:attributionURL" class="license__user sc-link-dark">[[username]]</a>\n    is licensed under a\n    <a href="[[license_url]]" rel="license" target="_blank" title="[[license_title]]" class="license__type sc-link-dark"><span class="sc-license-icon sc-license-icon-[[license]] license__icon"></span>\n      Creative Commons License</a>.\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, r) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isCreativeCommons : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.noop,
                    data: r
                })) ? s : ""
            },
            useData: !0
        })
    },
    2757: function(e, t, n) {
        var i = n(1834);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2790: function(e, t, n) {
        var i = n(1877);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2806: function(e, t, n) {
        var i = n(1895);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2810: function(e, t, n) {
        var i = n(1899);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2868: function(e, t, n) {
        var i = n(1962);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2869: function(e, t, n) {
        var i = n(1963);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2870: function(e, t, n) {
        var i = n(1964);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2871: function(e, t, n) {
        var i = n(1965);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2872: function(e, t, n) {
        var i = n(1966);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2873: function(e, t, n) {
        var i = n(1967);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2874: function(e, t, n) {
        var i = n(1968);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2875: function(e, t, n) {
        var i = n(1969);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2876: function(e, t, n) {
        var i = n(1970);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2877: function(e, t, n) {
        var i = n(1971);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2878: function(e, t, n) {
        var i = n(1972);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2879: function(e, t, n) {
        var i = n(1973);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2880: function(e, t, n) {
        var i = n(1974);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2881: function(e, t, n) {
        var i = n(1975);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2882: function(e, t, n) {
        var i = n(1976);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2883: function(e, t, n) {
        var i = n(1977);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2884: function(e, t, n) {
        var i = n(1978);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2885: function(e, t, n) {
        var i = n(1979);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2954: function(e, t, n) {
        var i = n(2049);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3008: function(e, t, n) {
        var i = n(2106);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
});