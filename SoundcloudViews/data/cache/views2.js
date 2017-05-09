webpackJsonp([1], {
    68: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            applyTo: function(e, t) {
                e.contextName = t, e.bubbleEvents = n(3).assign({}, e.bubbleEvents, {
                    contextrequest: "_onContextRequest"
                })
            },
            _onContextRequest: function(e) {
                var t = this.model,
                    i = n(82).extractPromotedAttrs(t);
                i && n(3).defaults(e.data, i), !e.data.urn && t && (e.data.urn = t.getUrn()), e.data.scope || (e.data.scope = []), e.data.scope.unshift(this.contextName), this.onContextRequest && this.onContextRequest(e)
            }
        })
    },
    71: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.clickStartedInside = !0
            }

            function a(e) {
                var t = [".modal__closeButton"],
                    i = [this.getElement("modal"), this.getElement("header"), "#gritter-notice-wrapper"];
                return i.push.apply(i, this.options.customElementsInside), n(3).some(t, s(e)) || !n(3).some(i, s(e))
            }

            function s(e) {
                return function(t) {
                    return e.closest(t).length
                }
            }

            function o(e) {
                var t = e ? 0 : n(538).getScrollbarSize();
                r.css("paddingRight", t).toggleClass("g-overflow-hidden", !e), this.$el.css("paddingRight", t)
            }
            var r = t(window.document.body),
                l = t("#app"),
                u = 200,
                c = 300,
                d = u + c,
                p = 0,
                h = e.exports = n(54).extend(n(192), {
                    className: "modal g-z-index-modal-background g-opacity-transition",
                    css: n(1162),
                    defaults: {
                        width: null,
                        height: null,
                        edgeOffset: 30,
                        warnBeforeClosing: !1,
                        stayOpenOnNavigate: !1,
                        confirmCloseMessage: n(52).t("Are you sure you want to close this?"),
                        customElementsInside: null,
                        transparentBackground: !1,
                        HeaderSubview: null,
                        headerSubviewArgs: {},
                        filter: "whiteout"
                    },
                    element2selector: {
                        content: ".modal__content",
                        modal: ".modal__modal",
                        header: ".modal__header"
                    },
                    events: {
                        "mousedown .modal__modal": i
                    },
                    states: {
                        invisible: function(e) {
                            this.$el.toggleClass("invisible", e), "whiteout" === this.options.filter && l.toggleClass("g-filter-grayscale", !e)
                        },
                        showBackground: "showBackground",
                        fullHeight: "fullHeight"
                    },
                    template: n(2404),
                    setup: function(e) {
                        var t = e.filter;
                        this.toggleState("invisible", !0), "whiteout" === t ? this.$el.addClass("modalWhiteout") : "darken" === t && this.$el.addClass("modalDarken")
                    },
                    getOverlayContentEl: function() {
                        return this.getElement("content")
                    },
                    renderDecorate: function() {
                        var e;
                        this.options.HeaderSubview && (e = this.addSubview(new this.options.HeaderSubview(this.options.headerSubviewArgs), "header"), this.getElement("header").append(e.render().el), n(3).bindAll(this, "onScroll"), this.$el.on("scroll", this.onScroll))
                    },
                    teardown: function() {
                        this.toggleState("invisible", !0).toggleState("showBackground", !1), this.$el.off("scroll", this.onScroll)
                    },
                    canBeClosed: function() {
                        var e = this.options;
                        return !e.warnBeforeClosing || e.warnBeforeClosing && window.confirm(e.confirmCloseMessage)
                    },
                    onDocumentClick: function(e) {
                        if (this.clickStartedInside) return void(this.clickStartedInside = !1);
                        var n = t(e.target);
                        this.isOpened && a.call(this, n) && this.close()
                    },
                    onLayoutChange: function() {
                        this.options.stayOpenOnNavigate || this.close()
                    },
                    onOverlayOpen: function(e) {
                        e.isOpened && e !== this && e instanceof h && this.close(!0)
                    },
                    _hasHoveringHeader: !1,
                    onScroll: function() {
                        var e = this.el.scrollTop >= p;
                        e && !this._hasHoveringHeader ? (this.getElement("header").addClass("hovering"), this._hasHoveringHeader = !0) : !e && this._hasHoveringHeader && (this.getElement("header").removeClass("hovering"), this._hasHoveringHeader = !1)
                    },
                    close: function(e) {
                        !this.disposed && this.isOpened && (e || this.canBeClosed()) && (o.call(this, !0), this.toggleState("invisible", !0).toggleState("fullHeight", !1), this.addDeferred(n(3).delay(this.toggleState.bind(this, "showBackground", !1), c)), this.addDeferred(n(3).delay(n(192).properties.defaults.close.bind(this, !0), d)))
                    },
                    onWindowScroll: n(3).noop,
                    position: function() {
                        var e, t, i, a = this.options,
                            s = a.width,
                            r = a.height,
                            l = a.edgeOffset,
                            c = window.innerWidth,
                            d = c - 2 * l,
                            h = window.innerHeight - 2 * l,
                            f = 0;
                        e = Math.min(d, s), "full" === r ? (t = h, this.toggleState("fullHeight", !0)) : t = n(3).isNumber(r) ? r + "px" : "auto", p = p || parseInt(this.getElement("modal").css("margin-top"), 10), o.call(this, !1), this.options.HeaderSubview && (f = this.getElement("header").outerHeight()), i = {
                            width: e,
                            left: (c - e) / 2
                        }, this.getElement("modal").css(n(3).assign({}, i, {
                            marginTop: p + f + "px",
                            height: t
                        })), this.getElement("header").css(i), this.addDeferred(n(3).defer(this.toggleState.bind(this, "showBackground", !0))), this.addDeferred(n(3).delay(this.toggleState.bind(this, "invisible", !1), u))
                    },
                    getTemplateData: function(e) {
                        return e.hasHeader = !!this.options.HeaderSubview, e
                    }
                }, {
                    TOTAL_DURATION: d
                })
        }).call(t, n(1))
    },
    81: function(e, t) {
        "use strict";
        e.exports = {
            initial: "initial",
            signupWithEmail: "signup_with_email",
            signinWithPassword: "signin_with_password",
            signupWithGoogle: "signup_with_google",
            signupWithFacebook: "signup_with_facebook",
            addUserInformation: "add_user_information",
            promptPasswordReset: "prompt_password_reset",
            promptPasswordResetRequired: "prompt_password_reset_required",
            needHelp: "need_help",
            resetEmailSent: "reset_email_sent"
        }
    },
    99: function(e, t, n) {
        "use strict";

        function i() {
            return this.model.getCurrentSound()
        }

        function a(e, t) {
            e.pollOn && e.pollOff && e[t ? "pollOn" : "pollOff"]("state", s, this)
        }

        function s(e) {
            e.get("state") !== n(66).states.PROCESSING && a.call(this, e, !1)
        }

        function o() {
            this.updateActiveState()
        }
        var r = n(59).trackClickThrough,
            l = 500,
            u = {
                sound: n(2637),
                visualSound: n(2639)
            };
        e.exports = n(54).extend(n(106), n(550), n(68).withOptions("sound"), n(218).withOptions({
            getSound: i
        }), {
            ModelClass: n(75),
            template: u.sound,
            css: [n(3016), n(3018)],
            className: "sound",
            attributes: {
                role: "group"
            },
            requiredAttributes: {
                sound: ["permalink", "user", "display_date", "sharing", "commentable", "visuals"],
                playlist: ["permalink", "user", "display_date", "sharing"]
            },
            observedAttributes: {
                sound: ["state"]
            },
            bubbleEvents: {
                visualsFailed: "onVisualsFailed"
            },
            states: {
                active: function(e) {
                    var t = this;
                    e && this.whenInserted().done(function() {
                        n(200).focused() || t.scrollIntoView()
                    })
                },
                focused: "focused",
                playing: "playing",
                owned: "owned",
                hide_header: "hide-header",
                hide_footer: "hide-footer",
                hide_artwork: "hide-artwork",
                hide_actions: "hide-actions",
                hide_stats: "hide-stats",
                hide_comments: "hide-comments",
                minimal: "minimal",
                no_clicks: "noClicks"
            },
            element2selector: {
                comments: ".sound__comments",
                footer: ".sound__footer",
                bottom: ".sound__bottom",
                actions: ".sound__soundActions",
                stats: ".sound__soundStats",
                waveform: ".sound__waveform"
            },
            defaults: {
                viewContext: "streamContext",
                actorId: null,
                actionType: "post",
                is_promoted: !1,
                time_to_show: null,
                time_display_prefix: "Posted",
                hide_header: !1,
                hide_footer: !1,
                hide_artwork: !1,
                hide_actions: !1,
                hide_stats: !1,
                hide_comments: !1,
                hide_genre: !1,
                show_visuals: !0,
                show_context: !1,
                no_clicks: !1,
                minimal: !1,
                only_like_action: !1
            },
            events: {
                "click .sound__coverArt": "onSoundClickThrough",
                mouseenter: "onMouseEnter",
                mouseleave: "onMouseLeave"
            },
            _focusTimeout: null,
            actor: null,
            onMouseEnter: function() {
                window.clearTimeout(this._focusTimeout), this.toggleState("focused", !0)
            },
            onMouseLeave: function() {
                var e = this;
                this.model.isPlaying() ? this._focusTimeout = this.addTimeout(function() {
                    e.toggleState("focused", !1)
                }, l) : this.toggleState("focused", !1)
            },
            _statePolling: null,
            setup: function(e) {
                var t = /^hide_./,
                    i = Object.keys(e).filter(function(n) {
                        return e[n] && t.test(n)
                    }),
                    a = e.minimal,
                    s = e.no_clicks,
                    r = e.resource_type,
                    l = e.viewContext,
                    u = e.actorId,
                    c = this.model;
                this.toggleState("minimal", a).toggleState("no_clicks", s), this.$el.addClass(r).addClass(l), i.length && this.toggleState(i.join(" "), !0), this.listenTo(c, "play", this.onPlay).listenTo(c, "pause", this.onPause).listenTo(c, "finish", this.onFinish).listenTo(n(67), "change:currentSound", o), u && (this.actor = this.addDataSource(new(n(64))({
                    id: u
                }), {
                    requiredAttributes: ["username"]
                })), this.toggleState("playing", c.isPlaying())
            },
            getQueueSource: function() {
                return "listenContext" === this.options.viewContext && this.model
            },
            onModelChange: function(e, t) {
                (e.changed.user !== t || t.username !== e.get("user").username) && n(54).prototype.onModelChange.apply(this, arguments)
            },
            renderDecorate: function() {
                var e, t = n(55).get("me"),
                    i = this.model,
                    s = this.options,
                    o = this.actor,
                    r = "sound" === s.resource_type,
                    l = "repost" === s.actionType,
                    u = {
                        title: i.get("title"),
                        username: i.get("user").username,
                        actorUsername: o && o.get("username")
                    },
                    c = r && o && l ? n(52).t("Track: [[title]] by [[username]], reposted by [[actorUsername]]", u) : r && o && !l ? n(52).t("Track: [[title]] by [[username]], liked by [[actorUsername]]", u) : r && !o ? n(52).t("Track: [[title]] by [[username]]", u) : !r && o && l ? n(52).t("Playlist: [[title]] by [[username]], reposted by [[actorUsername]]", u) : r || !o || l ? r || o ? "" : n(52).t("Playlist: [[title]] by [[username]]", u) : n(52).t("Playlist: [[title]] by [[username]], liked by [[actorUsername]]", u);
                this.toggleState("owned", t.owns(i)), this.updateActiveState(), this.$el.attr("aria-label", n(174).usertextOneline(c.toString())), s.minimal || (e = this.subviews.commentsList || this.subviews.commentsDisabled, e && "sound" === i.resource_type && e.toggleState("visible", !0)), i.get("state") === n(66).states.PROCESSING && a.call(this, i, !0), this.$el.toggleClass("visualSound", this.isVisual())
            },
            teardown: function() {
                a.call(this, this.model, !1)
            },
            shouldListenToRestore: function() {
                return "streamContext" === this.options.viewContext
            },
            updateActiveState: function() {
                this.toggleState("active", this.model.isNowPlaying())
            },
            onPlay: function() {
                this.toggleState("playing", !0), this.subviews.commentsDisabled && this.subviews.commentsDisabled.toggleState("visible", !0)
            },
            onPause: function() {
                this.toggleState("playing", !1)
            },
            onFinish: function() {
                this.toggleState("playing", !1)
            },
            onSoundClickThrough: function() {
                var e = this.getContextData();
                n(82).trackEvent("soundClickThrough", e), r({
                    context: e
                })
            },
            getRestoreUrl: function() {
                var e = this.model.playlist || this.model;
                return n(61).getRoute("playlist" === e.resource_type ? "playlist" : "listen", e)
            },
            isVisual: function() {
                return this.options.show_visuals && this.model.hasVisuals && this.model.hasVisuals()
            },
            getTemplate: function() {
                return this.template = this.isVisual() ? u.visualSound : u.sound, n(54).prototype.getTemplate.apply(this, arguments)
            },
            getTemplateData: function(e) {
                var t = n(55).get("me"),
                    i = t.isConfirmed(),
                    a = this.model,
                    s = this.options,
                    o = s.hide_actions,
                    r = s.hide_artwork,
                    l = s.hide_comments,
                    u = s.hide_footer,
                    c = s.hide_genre,
                    d = s.hide_header,
                    p = s.hide_stats,
                    h = s.minimal,
                    f = s.only_like_action,
                    g = s.show_context,
                    m = s.show_visuals,
                    v = s.viewContext,
                    _ = "listenContext" === v,
                    y = t.owns(a),
                    b = "streamContext" === v,
                    w = "sound" === a.resource_type,
                    x = !w && !_,
                    k = w && e.commentable && !l && "finished" === e.state,
                    T = b && !h && !p,
                    A = s.time_to_show || e.display_date,
                    S = this.isVisual(),
                    C = S ? "inverted" : "default",
                    E = !S || !_,
                    D = _ ? "medium" : S ? "large" : "small";
                return {
                    actor: s.actorId || e.user_id,
                    model: e,
                    _options: s,
                    time_to_show: A,
                    is_playlist: !w,
                    is_sound: w,
                    is_listen_context: _,
                    is_stream_context: b,
                    comments_disabled: !i || e.commentable === !1,
                    comments_disabled_type: i ? null : "unconfirmed_user",
                    cover_size: 160,
                    actions_size: _ ? "medium" : "small",
                    playButton_size: _ ? "large" : "small",
                    private_size: _ ? "medium" : "small",
                    stats_size: _ ? "medium" : "small",
                    comments_size: _ ? "large" : "small",
                    show_header: !d,
                    show_footer: !u,
                    show_artwork: !r && b,
                    show_actions: !o,
                    show_stats: !p,
                    show_track_list: x,
                    show_comments: k,
                    show_commentForm: i && k && !h,
                    show_visuals: m,
                    show_time: !h && !g,
                    show_genre: !c && b,
                    show_actor_user: !g,
                    show_counts_actions: T,
                    show_promoted_in_title: !g,
                    show_likes_count: !T,
                    show_reposts_count: y || !T,
                    waveform_style: C,
                    waveform_avatar_size: _ ? 20 : 10,
                    waveform_dark_comment: E,
                    waveform_flag_size: D,
                    only_like_action: f || h,
                    minimal: h
                }
            },
            onVisualsFailed: function() {
                this.options.show_visuals && (this.options.show_visuals = !1, this.rerender())
            }
        })
    },
    104: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            override: {
                LoadingView: n(159)
            }
        })
    },
    107: function(e, t, n) {
        "use strict";

        function i(e) {
            return e ? n(3).isFunction(e.extend) ? e : e.call(this) : void 0
        }
        var a = {
            dialog: n(360),
            dropdown: n(361),
            modal: n(71)
        };
        e.exports = n(54).extend(n(88), {
            defaults: {
                el: null,
                overlayType: null,
                overlayOptions: {},
                ContentViewClass: null,
                contentViewArgs: null,
                hasActiveState: !0,
                zIndexLevel: null
            },
            contentView: null,
            domId: null,
            _overlay: null,
            setup: function(e) {
                var t = e.zIndexLevel;
                n(3).bindAll(this, "toggleOverlay"), this.domId = n(3).uniqueId("dropdown-button-"), this.$el.attr({
                    "aria-haspopup": "true",
                    role: "button",
                    "aria-owns": this.domId
                }), t && (this.options.overlayOptions = n(3).defaults({
                    zIndexLevel: t
                }, this.options.overlayOptions))
            },
            dispose: function() {
                var e = this._overlay;
                e && (e.isOpened ? e.once(n(361).Events.CLOSED, e._dispose, e) : e._dispose(), this._overlay = null)
            },
            onOverlayToggle: function(e) {
                this.toggleState("active", e && this.options.hasActiveState), this.$el.css({
                    display: e ? "inline-block" : ""
                })
            },
            onClick: function(e) {
                e.preventDefault(), this.toggleOverlay()
            },
            toggleOverlay: function() {
                var e = this.getOverlay();
                e.isOpened ? e.close() : e.open()
            },
            _createOverlay: function() {
                var e, t, s, o = this.options,
                    r = a[o.overlayType];
                return t = i.call(this, o.ContentViewClass), s = n(3).assign({
                    resource_id: o.resource_id,
                    resource_type: o.resource_type
                }, this.getContentViewArgs()), e = new r(n(3).assign({
                    togglerEl: this.el,
                    relativeElement: this.el,
                    Subview: t,
                    subviewArgs: s,
                    domId: this.domId,
                    text: o.blockContent || o.text
                }, o.overlayOptions)), e._parentView = this, e
            },
            getOverlay: function() {
                var e = this,
                    t = this._overlay,
                    i = n(361).Events,
                    a = i.OPENED,
                    s = i.CLOSED;
                return t && t.disposed && (this.stopListening(t), t = null), t || (t = this._createOverlay(), this.listenTo(t, a + " " + s, function() {
                    var t = e.isOverlayOpened(),
                        i = e.$el;
                    e.onOverlayToggle(t), e.bubble(n(223).TOGGLE, {
                        $el: i,
                        isOpened: t
                    })
                })), this._overlay = t, t
            },
            getContentViewArgs: function() {
                return this.options.contentViewArgs
            },
            isOverlayOpened: function() {
                return !!this._overlay && this.getOverlay().isOpened
            }
        }, {
            Events: n(223)
        })
    },
    111: function(e, t, n) {
        "use strict";
        var i = n(3).extend,
            a = n(3).noop;
        e.exports = new(n(21))({
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    i = t.actionHandlers,
                    a = void 0 === i ? {} : i;
                n(548).applyTo(e, {
                    actionHandlers: a
                })
            },
            merge: {
                defaults: {
                    size: "large",
                    resource_id: Math.floor(1e7 * Math.random())
                },
                css: [n(442)]
            },
            defaults: {
                ModelClass: n(455),
                focus: function() {
                    var e = this;
                    this.whenInserted().then(function() {
                        var t = e.getMainTextField();
                        t && t.focus()
                    })
                },
                getMainTextField: a,
                getErrorMessage: n(387),
                showErrorMessage: function(e) {
                    var t = e.error,
                        i = e.container,
                        a = e.control,
                        s = t instanceof n(20).SafeString,
                        o = (s ? t : n(387)(t)).toString(),
                        r = !!t,
                        l = a || this.getMainTextField();
                    i ? i.html(o).toggleClass("g-input-validation-hidden", !r) : l && l.setValidation({
                        isValid: !r,
                        message: o
                    })
                },
                goToStep: function(e) {
                    this.bubble("signin:go-to-step", {
                        step: e
                    })
                },
                finishSignin: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.token,
                        n = void 0 === t ? "" : t,
                        i = e.signup,
                        a = void 0 === i ? !1 : i,
                        s = e.provider,
                        o = void 0 === s ? "" : s;
                    this.bubble("signin:finish-signin", {
                        token: n,
                        signup: a,
                        provider: o
                    })
                },
                setToken: function(e) {
                    this.bubble("signin:set-token", {
                        token: e
                    })
                },
                getTokenFromResponse: function(e) {
                    return e && e.session && e.session.access_token
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var a = this.options,
                        s = a.size,
                        o = a.resource_id;
                    return i({
                        size: s,
                        resource_id: o,
                        SigninForm: n(455)
                    }, e(t) || t)
                }
            }
        })
    },
    115: function(e, t, n) {
        "use strict";

        function i() {
            var e, t, i = n(52).dateTimeHelper.toRelativeTime(this.date, null, n(52).dateTimeHelper.nowAtServer()),
                r = [this.options.prefix, i, "ago"].join(" ");
            this._timeoutId = null, this.el.innerHTML = n(534).getAccessibleMarkup({
                visible: i,
                screenreader: r
            }), e = n(52).dateTimeHelper.nowAtServer() - this.date, t = s > e ? a - e % a : o > e ? s - e % s : null, t && (this._timeoutId = window.setTimeout(this.updateDisplay, t))
        }
        var a = 6e4,
            s = 36e5,
            o = 864e5;
        e.exports = n(54).extend({
            className: "relativeTime",
            tagName: "time",
            _timeoutId: null,
            date: null,
            defaults: {
                timestamp: null,
                prefix: "Posted"
            },
            setup: function() {
                this.updateDisplay = i.bind(this), this.date = n(52).dateTimeHelper.fromString(this.options.timestamp)
            },
            renderDecorate: function() {
                var e = this.options.prefix,
                    t = n(52).dateTimeHelper.nowAtServer() - this.date < 2 * o ? "readable_time" : "readable",
                    i = (e ? e + " on " : "") + n(52).dateTimeHelper.format(this.date, t);
                this.$el.attr({
                    title: i,
                    datetime: this.date.toISOString()
                }), this.updateDisplay()
            },
            template: function() {
                return ""
            },
            teardown: function() {
                this._timeoutId && (window.clearTimeout(this._timeoutId), this._timeoutId = null)
            }
        })
    },
    118: function(e, t, n) {
        "use strict";
        var i = 3;
        e.exports = n(54).extend({
            template: n(2406),
            css: n(1163),
            tagName: "article",
            className: "sidebarModule g-all-transitions-200-linear",
            element2selector: {
                content: ".sidebarContent",
                title: ".sidebarHeader__actualTitle"
            },
            states: {
                empty: "empty",
                collapsed: "collapsed"
            },
            defaults: {
                title: null
            },
            moduleClassName: null,
            title: null,
            countableAttribute: null,
            titleWithCount: null,
            iconClassName: null,
            moreText: null,
            moreLink: null,
            moreClassName: null,
            noFollow: !1,
            itemsPerRow: 1,
            itemMinHeight: null,
            contentMinHeight: null,
            Subview: null,
            subviewArgs: null,
            titleVariation: "light",
            renderDecorate: function() {
                var e = !this.shouldShow();
                this.$el.addClass(this.moduleClassName), this.toggleState("empty", e), e || (this.updateTitle(), this.createSubview(), this.update())
            },
            getTemplateData: function() {
                return {
                    shouldShow: this.shouldShow(),
                    iconClassName: this.iconClassName,
                    externalMore: this.moreLink && 0 !== this.moreLink.indexOf("/"),
                    moreText: this.moreText,
                    moreLink: this.moreLink,
                    moreClassName: this.moreClassName,
                    noFollow: this.noFollow,
                    contentMinHeight: this.contentMinHeight ? this.contentMinHeight : this.itemMinHeight ? i * this.itemMinHeight : null,
                    titleVariation: this.titleVariation
                }
            },
            getCount: function() {
                return this.model && this.countableAttribute && this.model.get(this.countableAttribute)
            },
            shouldShow: function() {
                return !this.countableAttribute || this.getCount()
            },
            updateTitle: function() {
                var e = this.getCount();
                this.options.title ? this.title = this.options.title : e && this.titleWithCount && (this.title = this.titleWithCount(e)), this.getElement("title").html(this.title.toString())
            },
            update: function() {
                if (this.subviews.content) {
                    var e, t, n, i, a = this.subviews.content,
                        s = a.options.maxDisplay || 0,
                        o = a.collection;
                    if (o) {
                        if (e = o.isPopulated(), t = o.length, e && !t) return void this.hide();
                        this.show(), n = e ? Math.min(t, s) : s, i = this.contentMinHeight ? this.contentMinHeight : Math.ceil(n / this.itemsPerRow) * (this.itemMinHeight || 0), this.getElement("content").css({
                            minHeight: i
                        })
                    }
                }
            },
            hide: function() {
                this.$el.hide()
            },
            show: function() {
                this.$el.show()
            },
            createSubview: function() {
                var e = this.addSubview(new this.Subview(n(3).assign({
                    resource_id: this.model && this.model.resource_id || this.options.resource_id,
                    resource_type: this.model && this.model.resource_type || this.options.resource_type
                }, this.subviewArgs)), "content");
                e.on("update:collection", this.update, this), this.getElement("content").append(e.render().el)
            },
            onModelChange: function(e) {
                var t = this,
                    i = n(3).all(e.changedAttributes(), function(n, i) {
                        return i === t.countableAttribute && n > 0 && e.previousAttributes()[i] > 0
                    });
                i ? this.updateTitle() : this.rerender()
            }
        })
    },
    126: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return ["soundcloud", "tcode", n(3).isString(e) ? e.replace(/^t/, "") : ""].join(":")
            }
            var a = n(59).trackV1Click,
                s = n(59).trackImpression,
                o = {
                    go: n(3).constant("consumer_sub_ad"),
                    pro: n(3).constant("creator_sub_ad")
                },
                r = {
                    go: n(3).constant("clickthrough::consumer_sub_ad"),
                    pro: n(3).constant("clickthrough::creator_sub_ad")
                };
            e.exports = new(n(21))({
                requires: ["getUpsellRef"],
                applyTo: function(e, l) {
                    function u(e) {
                        _.call(this) && a({
                            context: this.getContextData(),
                            click_name: m.call(this),
                            click_category: "pro" === p ? "creator_subs" : "consumer_subs",
                            click_object: i(this.getUpsellRef()),
                            click_target: t(e.target).attr("href")
                        })
                    }
                    var c, d = l.elSelector,
                        p = l.type,
                        h = l.getImpressionName,
                        f = void 0 === h ? o[p] : h,
                        g = l.getClickthroughName,
                        m = void 0 === g ? r[p] : g,
                        v = l.shouldTrackUpsellClick,
                        _ = void 0 === v ? n(3).constant(!0) : v;
                    this.merge(e, {
                        events: (c = {}, c[["click", d].filter(Boolean).join(" ")] = u, c)
                    }), e.trackImpression = function() {
                        s({
                            context: this.getContextData(),
                            impression_name: f.call(this),
                            impression_object: i(this.getUpsellRef())
                        })
                    }, n(969).withOptions(d).applyTo(e)
                }
            })
        }).call(t, n(1))
    },
    140: function(e, t, n) {
        "use strict";

        function i(e, t) {
            t = t || {}, e.on("mouseenter", t, a.bind(this)).on("mouseleave", s.bind(this))
        }

        function a(e) {
            f(e) || (k.clearTimeout(b), k.clearTimeout(y), m ? d.call(this, e) : _ = k.setTimeout(o.bind(this, e), w))
        }

        function s(e) {
            k.clearTimeout(_), y = k.setTimeout(r.bind(this, e), x)
        }

        function o(e) {
            this.disposed || (k.clearTimeout(b), d.call(this, e))
        }

        function r(e) {
            !this.disposed && m && m.options.relativeElement === e.target && h()
        }

        function l() {
            k.clearTimeout(y), k.clearTimeout(b)
        }

        function u() {
            b = k.setTimeout(h, x)
        }

        function c() {
            this.removeSubview(m), m._dispose(), m = null, k.clearTimeout(b)
        }

        function d(e) {
            var t = this;
            m && m.options.relativeElement !== e.target && m.close(), m || (v && n(3).isFunction(v.reject) && v.reject(), v = p.call(this, e), n(56).all([v]).done(function(i) {
                v = null, m = n(360).create(t.options.dialogType, e.target, i, n(3).result(t, "dialogArgs")), m.on(n(360).Events.CLOSED, c, t).$el.on("mouseenter", l).on("mouseleave", u), t.addSubview(m), m.open()
            }))
        }

        function p(e) {
            var t = e.data,
                i = !n(3).isFunction(t) && n(3).isEmpty(t) ? this.dialogSubviewArgs : t;
            return n(3).isFunction(i) && (i = i.call(this, e.target)), i
        }

        function h() {
            m && m.close()
        }

        function f(e) {
            return n(112).opera ? !1 : !!(void 0 === e.buttons ? e.which : e.buttons)
        }
        var g, m, v, _, y, b, w = 150,
            x = 400,
            k = window;
        g = {
            dialogEnabled: !0,
            dialogType: null,
            dialogSelector: null
        };
        e.exports = new(n(21))({
            applyTo: function(e) {
                e.defaults = n(3).defaults(e.defaults, g)
            },
            defaults: {
                dialogSubviewArgs: null,
                dialogArgs: null
            },
            after: {
                renderDecorate: function() {
                    var e = this.options;
                    if (e.dialogEnabled !== !1) return e.dialogSelector ? void(n(3).isString(e.dialogSelector) ? i.call(this, this.$(e.dialogSelector)) : n(3).isObject(e.dialogSelector) && n(3).each(e.dialogSelector, function(e, t) {
                        i.call(this, this.$(t), e)
                    }, this)) : void i.call(this, this.$el)
                }
            },
            before: {
                disposeSubviews: function() {
                    m && m._parentView === this && m.close()
                }
            }
        })
    },
    154: function(e, t, n) {
        "use strict";
        var i = n(59).trackClickThrough;
        e.exports = n(54).extend(n(68).withOptions("userBadge"), {
            template: n(2719),
            css: n(3094),
            className: "userBadge",
            ModelClass: n(64),
            requiredAttributes: ["permalink", "username"],
            events: {
                "click .userBadge__usernameLink": "onUsernameClick"
            },
            states: {
                premium: "m-premium"
            },
            defaults: {
                noFollow: !1,
                use_image: !0,
                show_followed: !1,
                show_actions: !0,
                follow_button_cta: !1,
                display_direction: "horizontal",
                size: "medium",
                stretch: !1,
                avatar_width: null,
                avatar_height: null,
                follow_button_size: "small",
                dark: !1
            },
            setup: function(e) {
                var t = e.display_direction;
                this.$el.addClass("m-" + t)
            },
            onUsernameClick: function() {
                var e = this.getContextData();
                n(82).trackEvent("userClickThrough", e), i({
                    context: e
                })
            },
            renderDecorate: function() {
                this.toggleState("premium", this.model.isPremium())
            },
            getTemplateData: function(e) {
                var t = this.options,
                    i = t.noFollow,
                    a = t.avatar_width,
                    s = t.avatar_height;
                return e.noFollow = i, e.isMe = n(55).get("me").id === e.id, e.addAvatarStyles = a || s, e
            }
        })
    },
    165: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            defaults: {
                isAudible: !1,
                isAudibleUpload: !1,
                isPlaylist: !1,
                isProfileSettings: !1,
                isSound: !1,
                isStation: !1,
                isUser: !1
            },
            before: {
                initialize: function(e) {
                    var t = e.resource_type;
                    switch (t) {
                        case "user":
                            this.ModelClass = n(64), this.isUser = !0;
                            break;
                        case "profile-settings":
                            this.ModelClass = n(181), this.isProfileSettings = !0;
                            break;
                        case "sound":
                        case "playlist":
                            this.ModelClass = n(75).getClass({
                                resource_type: t
                            }), this.isAudible = !0, this.isSound = "sound" === t, this.isPlaylist = "playlist" === t;
                            break;
                        case "sound-upload-edit":
                        case "playlist-upload":
                            this.ModelClass = n(166).getClass({
                                resource_type: t
                            }), this.isAudibleUpload = !0;
                            break;
                        case "playlist-edit":
                            this.ModelClass = n(199);
                            break;
                        case "multi-track-artwork":
                            this.ModelClass = n(453), this.isMultiTrackArtwork = !0;
                            break;
                        case "station":
                            this.ModelClass = n(119), this.isStation = !0
                    }
                }
            }
        })
    },
    168: function(e, t, n) {
        "use strict";
        var i = {
            geoblocked: n(52).t("Geoblocked"),
            monetizable: n(52).t("Monetizable"),
            "monetizable-pending": n(52).t("Monetizable"),
            "private": n(52).t("Private"),
            restricted: n(52).t("Restricted"),
            scheduled: n(52).t("Scheduled")
        };
        e.exports = n(54).extend(n(140), {
            tagName: "span",
            className: "sc-label sc-label-small sc-label-icon-only sc-media-image",
            defaults: {
                type: null,
                dialogType: "audibleAttribute",
                dialogEnabled: !0
            },
            setup: function(e) {
                this.$el.addClass("sc-label-" + e.type)
            },
            dialogSubviewArgs: function() {
                var e = this.options;
                return {
                    resource_id: e.resource_id,
                    resource_type: e.resource_type,
                    type: e.type
                }
            },
            dialogArgs: function() {
                return "private" === this.options.type ? {
                    width: "auto"
                } : void 0
            },
            template: function() {
                return i[this.options.type]
            }
        })
    },
    169: function(e, t, n) {
        "use strict";

        function i() {
            return "string" == typeof this.options.size ? s[this.options.size] : this.options.size
        }
        var a = n(59).trackClickThrough,
            s = {
                tiny: 20,
                xsmall: 30,
                small: 40,
                medium: 50,
                large: 100,
                xlarge: 200
            };
        e.exports = n(54).extend(n(68).withOptions("userAvatarBadge"), {
            template: n(2716),
            className: "g-avatar-badge userAvatarBadge",
            ModelClass: n(64),
            requiredAttributes: null,
            defaults: {
                is_link: !0,
                noFollow: !1,
                stretch: !1,
                size: "small",
                boundaryOutlineStyle: "light"
            },
            events: {
                "click .g-avatar-badge-avatar-link": "onClickThrough"
            },
            setup: function(e) {
                this.requiredAttributes = n(3).flatten(["avatar_url", e.is_link && "permalink"].filter(n(3).identity))
            },
            dispose: function() {
                this.userSounds && (this.userSounds.release(), this.userSounds = null)
            },
            loadingTemplate: function() {
                var e = i.call(this);
                return '<img width="' + e + '" height="' + e + '">'
            },
            onClickThrough: function() {
                var e = this.getContextData();
                n(82).trackEvent("userClickThrough", e), a({
                    context: e,
                    target: this.model.getUrn()
                })
            },
            getTemplateData: function(e) {
                var t = i.call(this);
                return n(3).assign(e, {
                    noFollow: this.options.noFollow,
                    imageSize: t
                })
            }
        })
    },
    170: function(e, t, n) {
        var i = n(2107);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    184: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            defaults: {
                tagName: "form",
                formSelector: null,
                formId: null,
                submit: function(e) {
                    e.preventDefault(), this.onSubmit(this.getFormElement()[0].elements), this.bubble("simple-form:submit")
                },
                reset: function(e) {
                    e.preventDefault(), this.onReset(), this.bubble("simple-form:reset")
                },
                getFormElement: function() {
                    return this.formSelector ? this.$(this.formSelector) : this.$el
                },
                onSubmit: n(3).noop,
                onReset: n(3).noop
            },
            applyTo: function(e) {
                var t = {},
                    i = this.formSelector;
                t[["reset.simple-form", i].join(" ").trim()] = "reset", t[["submit.simple-form", i].join(" ").trim()] = "submit", e.events = n(3).defaults(t, e.events)
            },
            before: {
                setup: function() {
                    this.formId = n(3).uniqueId("form-")
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t = e(t) || t, t.form_id = this.formId, t
                }
            }
        })
    },
    192: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var i = e ? "on" : "off",
                    a = window;
                n(57)[i](u.OPENED, this.onOverlayOpen, this)[i]("layout:beforeChange", this.onLayoutChange, this), t(a.document)[i]("keydown", this.onDocumentKeydown), a.document[e ? "addEventListener" : "removeEventListener"]("click", this.onDocumentClick, !0), t(a)[i]("scroll", this.onWindowScroll)[i]("resize", this.onWindowResize)
            }

            function a() {
                var e = this.options;
                e.zIndexLevel ? this.$el.addClass("g-z-index-" + e.zIndexLevel) : t(e.relativeElement).closest(".g-z-index-fixed").length && this.$el.removeClass("g-z-index-content").addClass("g-z-index-fixed")
            }

            function s(e, n) {
                var i = n.element.element,
                    a = n.target.element,
                    s = e.top,
                    o = e.left,
                    r = "absolute",
                    u = t(window).height(),
                    c = i.height(),
                    d = 45 + this.options.margin,
                    p = u - c - 30,
                    h = !("none" === this.options.collision || "none" === this.options.collision.split(" ")[1]);
                l(a) ? (s -= t(window).scrollTop(), r = "fixed", 0 > s && (s = e.top)) : (p += window.scrollY, d += window.scrollY), d > s ? s = d : s > p && h && (s = p), i.css({
                    position: r,
                    top: s,
                    left: o
                })
            }

            function o(e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e instanceof window.HTMLElement && "fixed" === t(e).css("position")) return !0;
                return !1
            }

            function r() {
                return !0
            }

            function l(e) {
                return e.length ? "fixed" === e.css("position") ? !0 : e.is("html") ? !1 : l(e.parent()) : !1
            }
            var u = {
                    OPENED: "overlay:opened",
                    CLOSED: "overlay:closed"
                },
                c = 300;
            e.exports = new(n(21))({
                applyTo: function(e) {
                    var t = e.constructor;
                    n(3).assign(t, {
                        Events: u
                    }), e.defaults = n(3).defaults(e.defaults || {}, {
                        Subview: null,
                        subviewArgs: null,
                        togglerEl: null,
                        relativeElement: null,
                        relativeElementAnchor: "center bottom",
                        anchor: "center top",
                        offset: "0 0",
                        collision: "flip",
                        width: "auto",
                        minHeight: "auto",
                        domId: null,
                        zIndexLevel: "overlay",
                        focusable: !0,
                        margin: 0,
                        text: ""
                    }), e.element2selector = n(3).assign({}, e.element2selector, {
                        "last-tabbable": ":tabbable:last",
                        "first-tabbable": ":tabbable:first"
                    }), e.bubbleEvents = n(3).assign({}, e.bubbleEvents, {
                        "simple-form:reset": "close",
                        "simple-form:submit": "close",
                        "overlay:close": "close"
                    })
                },
                before: {
                    setup: function() {
                        n(3).bindAll(this, "onDocumentClick", "onDocumentKeydown", "onWindowScroll", "onWindowResize"), a.call(this), i.call(this, !0), this.$el.css({
                            outline: "none"
                        }), this.onPositionComplete = s.bind(this)
                    },
                    dispose: function() {
                        i.call(this, !1), this.close()
                    },
                    renderDecorate: function() {
                        var e = this;
                        this.whenInserted().done(function() {
                            var n = e.options.togglerEl,
                                i = n && t(n).closest(".modal__content");
                            i && i.length && (e.options.zIndexLevel = "modal-content", a.call(e))
                        })
                    }
                },
                defaults: {
                    template: function() {
                        return ""
                    },
                    isOpened: !1,
                    open: function() {
                        this.disposed || this.isOpened || !this.canBeOpened() || (this.isOpened = !0, this.rerender(), this.$el.appendTo(window.document.body), this.createContentView(), this.position(), this.options.focusable && this.$el.focus(), this.trigger(u.OPENED), n(57).trigger(u.OPENED, this))
                    },
                    close: function(e) {
                        var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                        if (!this.disposed && this.isOpened && (e || this.canBeClosed()) && (this.isOpened = !1, this.$el.detach(), this._teardown(), this.trigger(u.CLOSED), t)) {
                            var n = this.options.togglerEl;
                            n && n.focus()
                        }
                    },
                    canBeClosed: r,
                    canBeOpened: r,
                    getContentView: function() {
                        return this.subviews.contentView
                    },
                    createContentView: function() {
                        if (!this.getContentView() && this.options.Subview) {
                            var e, t = this.options,
                                i = t.Subview,
                                a = n(3).result(t, "subviewArgs");
                            e = this.addSubview(new i(n(3).assign({
                                resource_id: t.resource_id,
                                resource_type: t.resource_type
                            }, a)), "contentView"), this.$el.attr({
                                tabindex: "-1",
                                id: this.options.domId || n(3).uniqueId("overlay_")
                            }), this.getOverlayContentEl().append(e.render().el)
                        }
                    },
                    replaceContentView: function(e) {
                        var t = this.getContentView();
                        return t && (t._dispose(), this.removeSubview(t)), this.options.subviewArgs = e, this.createContentView(), this.position(), this.getContentView()
                    },
                    getOverlayContentEl: function() {
                        return this.$el
                    },
                    position: function() {
                        var e = this.options;
                        this.$el.css({
                            width: n(3).isFunction(e.width) ? e.width.call(this) : e.width,
                            minHeight: e.minHeight,
                            position: o(e.relativeElement) ? "fixed" : "absolute"
                        }).position({
                            my: e.anchor,
                            at: e.relativeElementAnchor,
                            of: e.relativeElement,
                            offset: e.offset,
                            collision: e.collision,
                            using: this.onPositionComplete
                        }), this.positionDecorate()
                    },
                    positionDecorate: n(3).noop,
                    onLayoutChange: function() {
                        this.close()
                    },
                    onOverlayOpen: function(e) {
                        e.isOpened && e !== this && this.close(!0)
                    },
                    onDocumentClick: function(e) {
                        this.isOpened && !t(e.target).closest(this.options.togglerEl).length && (t(e.target).closest(this.$el).length || this.close(!1, !1))
                    },
                    onDocumentKeydown: function(e) {
                        if (this.isOpened)
                            if (e.which !== n(102).ESC || e.isDefaultPrevented()) {
                                if (e.which === n(102).TAB) {
                                    if (!e.shiftKey && e.target === this.getElement("last-tabbable")[0]) return this.getElement("first-tabbable").focus(), !1;
                                    if (e.shiftKey && e.target === this.getElement("first-tabbable")[0]) return this.getElement("last-tabbable").focus(), !1
                                }
                            } else this.close()
                    },
                    onWindowScroll: n(3).throttle(function() {
                        if (!this.disposed && this.isOpened) {
                            var e = this.$el.css("position"),
                                t = o(this.options.relativeElement);
                            ("fixed" === e && !t || "absolute" === e && t) && this.position()
                        }
                    }, c),
                    onWindowResize: n(3).throttle(function() {
                        !this.disposed && this.isOpened && this.position()
                    }, c)
                }
            })
        }).call(t, n(1))
    },
    195: function(e, t, n) {
        "use strict";
        var i = n(59).trackShareClick;
        e.exports = n(54).extend(n(68).withOptions("socialShareButton"), n(165), n(88), {
            className: "shareButton sc-social-logo-32",
            tagName: "a",
            defaults: {
                share_type: null,
                popupSize: null,
                serviceKey: null,
                serviceName: null,
                serviceBaseURL: null,
                campaignName: "share",
                isScButton: !1
            },
            requiredAttributes: ["permalink_url"],
            observedAttributes: ["secret_token", "sharing"],
            buttonLabels: {
                "default": function() {
                    return n(52).t("Share on [[socialNetworkName]]", {
                        socialNetworkName: this.options.serviceName
                    })
                }
            },
            setup: function(e) {
                var t = e.serviceKey;
                this.$el.addClass("sc-social-logo-" + t).attr({
                    href: this.getHref(),
                    target: "_blank",
                    title: this.getButtonTitle("default")
                })
            },
            onClick: function(e) {
                e.preventDefault();
                var t = this.options.serviceKey;
                this.openPopup(e.target.getAttribute("href")), i({
                    click_target: t,
                    click_object: this.model.getUrn(),
                    context: this.getContextData()
                })
            },
            openPopup: function(e) {
                var t = this.options.popupSize;
                return n(257).centered(e, t[0], t[1])
            },
            getHrefData: n(3).noop,
            getShareURL: function(e) {
                if (e && e.ignoreContext && this.model.originalSound) return this.model.originalSound.getShareURL();
                var t = this.options,
                    i = t.campaignName,
                    a = t.serviceKey,
                    s = t.share_type,
                    o = this.model.getShareURL({
                        type: s
                    });
                return n(62).stringify({
                    query: {
                        utm_source: "soundcloud",
                        utm_campaign: i,
                        utm_medium: a
                    }
                }, o)
            },
            getHref: function() {
                return n(62).stringify({
                    query: this.getHrefData()
                }, this.options.serviceBaseURL)
            },
            getTemplateData: function() {
                var e = this.options,
                    t = e.serviceKey,
                    i = e.serviceName;
                return {
                    href: this.getHref(),
                    key: t,
                    title: n(52).t("Share on [[socialNetworkName]]", {
                        socialNetworkName: i
                    })
                }
            }
        })
    },
    196: function(e, t, n) {
        "use strict";
        e.exports = n(222).extend({
            css: [n(1161), n(3061)],
            className: "radioGroup sharingRadio"
        })
    },
    202: function(e, t, n) {
        "use strict";

        function i() {
            this._animating = !1, s.call(this)
        }

        function a(e, t) {
            var n = this._queuedAnimation,
                i = n ? n.deferred : t;
            this._queuedAnimation = {
                name: e,
                deferred: i
            }
        }

        function s() {
            var e = this._queuedAnimation;
            e && this[e.name](e.deferred), this._queuedAnimation = null
        }
        var o = 380,
            r = 250;
        e.exports = new(n(21))({
            defaults: {
                slideInnerSelector: ""
            },
            _firstRender: !0,
            _animating: !1,
            _queuedAnimation: null,
            slideDown: function(e) {
                var t = this,
                    s = this.$el,
                    l = this.getElement("wrapper");
                return e = e || n(56).defer(), this._animating ? (a.call(this, "slideDown", e), e) : (this._animating = !0, e.always(i.bind(this)), l.addClass("slide-down-inner"), this.addDeferred(n(3).defer(l.addClass.bind(l, "g-opacity-transition"))), s.addClass("slide-down-outer").css({
                    display: "",
                    height: "0"
                }), this.whenInserted().done(function() {
                    s.height(l.height()), t.addDeferred(n(3).delay(function() {
                        l.addClass("finished"), t.addDeferred(n(3).delay(l.removeClass.bind(l, "slide-down-inner g-opacity-transition finished"), r)), s.css("height", "").removeClass("slide-down-outer"), e.resolve()
                    }, o))
                }), e)
            },
            slideUp: function(e) {
                var t = this.$el,
                    s = this.getElement("wrapper"),
                    r = t.css("margin");
                return e = e || n(56).defer(), this._animating ? (a.call(this, "slideUp", e), e) : (this._animating = !0, e.always(i.bind(this)), t.height(s.height()), this.addDeferred(n(3).defer(function() {
                    s.addClass("slide-up-inner g-opacity-transition finished"), t.addClass("slide-up-outer").css({
                        margin: "0",
                        height: "0"
                    })
                })), this.addDeferred(n(3).delay(function() {
                    s.removeClass("slide-up-inner g-opacity-transition finished"), t.css({
                        height: "",
                        display: "none",
                        margin: r
                    }).removeClass("slide-up-outer"), e.resolve()
                }, o)), e)
            },
            after: {
                renderDecorate: function() {
                    this._automaticSlide && this._firstRender && (this.slideDown(), this._firstRender = !1)
                }
            },
            applyTo: function(e, t) {
                var i = n(3).assign({
                    automatic: !0
                }, t);
                e._automaticSlide = i.automatic, e.element2selector = n(3).assign({}, e.element2selector, {
                    wrapper: e.slideInnerSelector
                }), e.css ? (Array.isArray(e.css) || (e.css = [e.css]), e.css.push(n(1159))) : e.css = n(1159)
            }
        })
    },
    207: function(e, t, n) {
        "use strict";

        function i() {
            return this.getState("disabled") ? void 0 : this.model.getCurrentSound()
        }

        function a(e) {
            this._adBuffering = e.sound.isBuffering()
        }
        e.exports = n(54).extend(n(551), n(218).withOptions({
            getSound: i
        }), {
            _adBuffering: !1,
            ModelClass: n(75),
            observedAttributes: {
                playlist: ["tracks"],
                sound: ["state"]
            },
            setup: function(e) {
                e.size;
                this.listenTo(this.model, "play pause change:playable buffering:start buffering:end", this.synchronizeStates).listenTo(this.model, "ad:buffering:start ad:buffering:end", a), this.synchronizeStates()
            },
            onClick: function() {
                this.toggleAudible(this.model, {
                    userInitiated: !0,
                    context: this.getContextData()
                })
            },
            isPlaying: function() {
                return this.model.isPlaying()
            },
            isDisabled: function() {
                return !this.isAudiblePlayable(this.model)
            },
            isBuffering: function() {
                return this._adBuffering || this.model.isBuffering()
            }
        })
    },
    218: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _preloadingSound: null,
            applyTo: function(e) {
                function t() {
                    if (!this.disposed) {
                        var e = o.call(this);
                        e && e.isPlayable() && (this._preloadingSound = e, e.requestPreloading())
                    }
                }

                function i() {
                    this._preloadingSound && (this._preloadingSound.unrequestPreloading(), this._preloadingSound = null)
                }
                var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                    s = a.getSound,
                    o = void 0 === s ? n(3).constant(null) : s;
                this.after(e, {
                    setup: function() {
                        this.$el.hoverIntent({
                            over: t.bind(this),
                            out: i.bind(this),
                            timeout: 75,
                            interval: 50,
                            sensitivity: 7
                        })
                    }
                }), this.before(e, {
                    dispose: function() {
                        i.bind(this)
                    }
                })
            }
        })
    },
    223: function(e, t) {
        "use strict";
        e.exports = {
            TOGGLE: "dropdownButton:toggle"
        }
    },
    224: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(1336), {
            defaults: {
                dialogSelector: ".g-link-user"
            },
            template: function(e) {
                return n(183).updateSCLinks(e._options.content, e._options)
            }
        })
    },
    228: function(e, t, n) {
        "use strict";

        function i() {
            this.disposed || this.toggleState("hidden", "SUB_HIGH_TIER" !== this.model.get("monetization_model"))
        }
        var a = (e.exports = n(54).extend({
            tagName: "span",
            defaults: {
                variant: "smallArtwork"
            },
            states: {
                hidden: "sc-hidden"
            },
            ModelClass: n(66),
            requiredAttributes: ["policy", "monetization_model"],
            setup: function(e) {
                var t = (e.override, e.variant);
                e.resource_id;
                this.$el.addClass(a[t])
            },
            renderDecorate: i,
            onModelChange: i,
            getModelData: n(3).noop,
            template: n(3).constant(""),
            getTemplate: function() {
                return this.template
            }
        }), {
            largeArtwork: "g-go-plus-marker-artwork-large g-go-marker-artwork",
            smallArtwork: "g-go-plus-marker-artwork-small g-go-marker-artwork",
            list: "g-go-plus-marker-list"
        })
    },
    229: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = t[0],
                i = t[1],
                a = 3 === t.length ? t[2] : 1,
                s = "rgba(" + i + "," + a + ")";
            return e.addColorStop(n, s), e
        }

        function a(e) {
            var t = n(917)[e];
            return t
        }
        e.exports = {
            getConfig: function(e) {
                return n(917)._config[e]
            },
            gradient: function(e, t, n, s, o) {
                s = s || 1, null == o && (o = 1);
                var r = a(n),
                    l = e.canvas.height / s,
                    u = r[t];
                return 1 !== o && (u = u.map(function(e) {
                    var t = 3 === e.length ? e[2] : 1;
                    return [e[0], e[1], t * o]
                })), u.reduce(i, e.createLinearGradient(0, 0, 0, l))
            },
            getColor: function(e, t) {
                return a(t)[e]
            }
        }
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
    244: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0Click;
        e.exports = n(54).extend({
            className: "userBadgeListItem",
            template: n(2717),
            css: n(3093),
            ModelClass: n(64),
            requiredAttributes: ["permalink", "username"],
            events: {
                "click .userBadgeListItem__heading": "onUsernameClick"
            },
            getTemplateData: function(e) {
                return e.isMe = this.model.isMe(), e
            },
            onUsernameClick: function() {
                i(["userBadgeListItem", "username"], {
                    click_name: "item_navigation",
                    context: this.getContextData()
                })
            }
        })
    },
    263: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t) {
                var i, a = e[0];
                this.isDOMMonitoringStarted || (n(97).MutationObserver ? (i = new window.MutationObserver(t), i.observe(a, {
                    childList: !0,
                    subtree: !0
                }), this._observer = i) : (a.addEventListener("DOMNodeRemoved", t), a.addEventListener("DOMNodeInserted", t)), this.isDOMMonitoringStarted = !0)
            }

            function a(e, t) {
                if (e) {
                    var i = e[0];
                    this.isDOMMonitoringStarted && (n(97).MutationObserver ? this._observer && this._observer.disconnect() : (i.removeEventListener("DOMNodeRemoved", t), i.removeEventListener("DOMNodeInserted", t)), this.isDOMMonitoringStarted = !1)
                }
            }
            var s, o, r, l, u = n(3).noop,
                c = t(window.document);
            e.exports = new(n(21))({
                after: {
                    teardown: function() {
                        this.disposeScrollable()
                    }
                },
                scrollpane: null,
                verticalScrollbar: null,
                horizontalScrollbar: null,
                setupScrollable: function(e, t, a) {
                    var s = this;
                    this.whenInserted().done(function() {
                        if (s.scrollpane) s.scrollpane.update();
                        else {
                            var r = e.attr("style") || "";
                            e.attr("style", r + " overflow: hidden !important;"), s.scrollableContainer = e, s.scrollableContentElement = t, s.scrollpane = new o(e, t, a), s.onDOMChanges = n(3).debounce(s.onDOMChanges.bind(s), 250), (a.monitorChanges || n(97).MutationObserver) && i.call(s, t, s.onDOMChanges)
                        }
                        s.updateScrollable(!0)
                    })
                },
                onDOMChanges: function() {
                    this.updateScrollable(!0)
                },
                disposeScrollable: function() {
                    this.scrollpane && (this.scrollpane.el.removeClass("g-scrollable g-scrollable-v g-scrollable-h").attr("style", ""), this.scrollpane.innerEl.removeClass("g-scrollable-inner").attr("style", ""), delete this.scrollpane), a.call(this, this.scrollableContentElement, this.onDOMChanges), this.destroyVerticalScrollbar(), this.destroyHorizontalScrollbar()
                },
                updateScrollable: function(e) {
                    var t, n, i;
                    (i = this.scrollpane) && (i.update(), t = i.needHScroll(), !this.horizontalScrollbar && t ? this.horizontalScrollbar = new l(i) : this.horizontalScrollbar && !t && this.destroyHorizontalScrollbar(), this.horizontalScrollbar && (this.horizontalScrollbar.update(), e || this.horizontalScrollbar.show()), n = i.needVScroll(), !this.verticalScrollbar && n ? this.verticalScrollbar = new r(i) : this.verticalScrollbar && !n && this.destroyVerticalScrollbar(), this.verticalScrollbar && (this.verticalScrollbar.update(), e || this.verticalScrollbar.show()))
                },
                destroyVerticalScrollbar: function() {
                    this.verticalScrollbar && (this.verticalScrollbar.destroy(), this.verticalScrollbar = null)
                },
                destroyHorizontalScrollbar: function() {
                    this.horizontalScrollbar && (this.horizontalScrollbar.destroy(), this.horizontalScrollbar = null)
                }
            });
            o = function(e, t, i) {
                this.el = e, this.innerEl = t, this.options = n(3).defaults(i, this.options), e.addClass("g-scrollable"), i.hScroll && !i.vScroll ? e.addClass("g-scrollable-h") : !i.hScroll && i.vScroll && e.addClass("g-scrollable-v"), t.addClass("g-scrollable-inner"), this.update()
            }, o.prototype = {
                constructor: o,
                el: null,
                innerEl: null,
                options: {
                    hScroll: !0,
                    vScroll: !0,
                    padding: 2,
                    monitorChanges: !1
                },
                update: function() {
                    var e, t, i, a, s = this.el,
                        o = this.innerEl;
                    i = o.scrollTop(), o.css({
                        height: "auto"
                    }), e = Math.min(s.height(), o.height()), this.options.hScroll ? o.css({
                        height: e + n(538).getScrollbarSize()
                    }) : o.css({
                        "overflow-x": "hidden",
                        height: e
                    }), o.scrollTop(i), a = o.scrollLeft(), o.css({
                        width: "auto"
                    }), t = Math.min(s.width(), o.width()), this.options.vScroll ? o.css({
                        width: t + n(538).getScrollbarSize()
                    }) : o.css({
                        "overflow-y": "hidden",
                        width: t
                    }), o.scrollLeft(a)
                },
                needVScroll: function() {
                    return this.el && this.innerEl && this.options.vScroll ? this.innerEl[0].scrollHeight > this.el.outerHeight() : !1
                },
                needHScroll: function() {
                    return this.el && this.innerEl && this.options.hScroll ? this.innerEl[0].scrollWidth > this.el.outerWidth() : !1
                }
            }, s = function(e) {
                this.el = this.buildEl(), this.scrollpane = e, this.scrollpane.el.append(this.el), n(3).bindAll(this, "onMouseEnter", "onMouseLeave", "onMouseWheel", "onMouseDown", "onScroll"), this.el.on("mousedown", this.onMouseDown).on("mouseenter", this.onMouseEnter), e.innerEl.on("scroll", this.onScroll).on("mouseenter", this.onMouseEnter).on("mouseleave", this.onMouseLeave).on("wheel", this.onMouseWheel)
            }, s.prototype = {
                constructor: s,
                el: null,
                scrollpane: null,
                isDragging: !1,
                isHovered: !1,
                isVisible: !1,
                onScroll: function() {
                    this.isVisible || (this.show(), this.isHovered || this.isDragging || (this.hiding = window.setTimeout(this.hide.bind(this), 1500))), this.update()
                },
                show: function() {
                    this.isVisible || (this.isVisible = !0, this.update(), this.el.addClass("g-scrollbar-visible"), this.hiding && (window.clearTimeout(this.hiding), this.hiding = null))
                },
                hide: function() {
                    this.isVisible && (this.isVisible = !1, this.el.removeClass("g-scrollbar-visible"))
                },
                destroy: function() {
                    this.scrollpane.innerEl.off("scroll", this.onScroll).off("mouseenter", this.onMouseEnter).off("mouseleave", this.onMouseLeave).off("wheel", this.onMouseWheel), this.el.remove()
                },
                onMouseEnter: function() {
                    this.isHovered = !0, this.show()
                },
                onMouseLeave: function() {
                    this.isHovered = !1, this.isDragging || this.hide()
                },
                onMouseDown: function(e) {
                    var t = this,
                        n = window.document,
                        i = this.onMouseMove.bind(this);
                    e.preventDefault(), this.isDragging = !0, this.startPageY = e.pageY - parseInt(this.el.css("top"), 10), this.startPageX = e.pageX - parseInt(this.el.css("left"), 10), n.onselectstart = function() {
                        return !1
                    }, c.on("mousemove", i).on("mouseup", function() {
                        t.isDragging = !1, n.onselectstart = null, c.off("mousemove", i), t.isHovered || t.hide()
                    })
                },
                update: u,
                buildEl: u,
                onMouseMove: u,
                onMouseWheel: u
            }, l = n(162).extend([s.prototype, {
                initialize: function() {
                    s.apply(this, arguments)
                },
                minWidth: 30,
                update: function() {
                    var e = this.scrollpane.innerEl.get(0),
                        t = this.scrollpane.el.width(),
                        n = t - 2 * this.scrollpane.options.padding,
                        i = n * t / e.scrollWidth,
                        a = Math.max(this.minWidth, i),
                        s = Math.max(0, a - i);
                    this.el.css("height", a).css("top", (a - s) * e.scrollLeft / e.scrollWidth)
                },
                buildEl: function() {
                    return t('<div class="g-scrollbar g-scrollbar-horizontal">')
                },
                onMouseMove: function(e) {
                    var t, i = e.pageX - this.startPageX,
                        a = this.scrollpane.innerEl.get(0),
                        s = this.el.width(),
                        o = this.scrollpane.el.width() - 2 * this.scrollpane.options.padding;
                    t = n(132).clamp(i, 0, o - s), a.scrollLeft = (a.scrollWidth - this.scrollpane.el.width()) * t / (o - s)
                },
                onMouseWheel: function(e) {
                    var t = this.scrollpane.innerEl.get(0),
                        n = e.originalEvent.deltaX;
                    return 0 > n && 0 === t.scrollLeft || n > 0 && t.scrollLeft + this.scrollpane.el.width() === this.innerEl.scrollWidth ? (e.preventDefault(), !1) : void 0
                }
            }]), r = n(162).extend([s.prototype, {
                initialize: function() {
                    s.apply(this, arguments)
                },
                minHeight: 30,
                update: function() {
                    var e = this.scrollpane.innerEl.get(0),
                        t = this.scrollpane.el.height(),
                        n = t - 2 * this.scrollpane.options.padding,
                        i = n * t / e.scrollHeight,
                        a = Math.max(this.minHeight, i),
                        s = Math.max(0, a - i);
                    this.el.css("height", a).css("top", (n - s) * e.scrollTop / e.scrollHeight)
                },
                buildEl: function() {
                    return t('<div class="g-scrollbar g-scrollbar-vertical">')
                },
                onMouseMove: function(e) {
                    var t, i = e.pageY - this.startPageY,
                        a = this.scrollpane.innerEl.get(0),
                        s = this.el.height(),
                        o = this.scrollpane.el.height(),
                        r = o - 2 * this.scrollpane.options.padding;
                    t = n(132).clamp(i, 0, r - s), a.scrollTop = (a.scrollHeight - o) * t / (r - s)
                },
                onMouseWheel: function(e) {
                    var t = this.scrollpane.innerEl.get(0),
                        n = e.originalEvent.deltaY;
                    return 0 > n && 0 === t.scrollTop || n > 0 && t.scrollTop + this.scrollpane.el.height() === t.scrollHeight ? (e.preventDefault(), !1) : void 0
                }
            }])
        }).call(t, n(1))
    },
    269: function(e, t, n) {
        (function(t) {
            "use strict";
            e.exports = n(54).extend({
                relativeOffsetTop: null,
                absoluteOffsetTop: null,
                viewportHeight: null,
                pageHeight: null,
                sidebarHeight: null,
                fixedClassName: "l-fixed",
                scrolling: !1,
                isFixed: !1,
                scrollOffsetTop: 0,
                setup: function() {
                    var e = this;
                    this.storeHeight = n(3).throttle(this.storeHeight, 1e3), this.onResizeHandler = n(3).debounce(this.onResizeHandler, 200), n(3).bindAll(this, "onScrollHandler", "onResizeHandler"), t(window).on("scroll", this.onScrollHandler).on("resize", this.onResizeHandler), this.whenInserted().done(function() {
                        e.relativeOffsetTop = e.$el.parent().position().top, e.absoluteOffsetTop = e.$el.parent().offset().top, e.viewportHeight = e.getViewportHeight(), e.update()
                    }), this.$el.addClass("sc-clearfix sc-browsers-enable-gpu")
                },
                dispose: function() {
                    t(window).off("scroll", this.onScrollHandler).off("resize", this.onResizeHandler)
                },
                onScrollHandler: function() {
                    this.scrolling || window.requestAnimationFrame(this.update.bind(this)), this.scrolling = !0
                },
                onResizeHandler: function() {
                    this.viewportHeight = this.getViewportHeight()
                },
                update: function() {
                    this.storeHeight();
                    var e = window.pageYOffset,
                        t = this.viewportHeight >= this.sidebarHeight,
                        n = t,
                        i = this.viewportHeight - this.sidebarHeight + (this.absoluteOffsetTop - this.relativeOffsetTop),
                        a = i + e - this.absoluteOffsetTop >= 0,
                        s = !t && this.pageHeight > this.sidebarHeight + this.absoluteOffsetTop && a;
                    s && (n = !0, this.scrollOffsetTop !== i && (this.$el.css("top", i + "px"), this.scrollOffsetTop = i)), this.isFixed !== n && (this.$el.toggleClass(this.fixedClassName, n), this.isFixed = n), this.scrolling = !1
                },
                storeHeight: function() {
                    this.disposed || (this.sidebarHeight = this.$el.height(), this.pageHeight = t(window.document).height())
                },
                getViewportHeight: function() {
                    return this.viewportHeight = t(window).height() - (this.absoluteOffsetTop - this.relativeOffsetTop), this.viewportHeight
                }
            })
        }).call(t, n(1))
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
    275: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                if (t.error === a && e === this.options.recaptcha) {
                    var n = this.subviews.recaptchaSection,
                        i = n && n.subviews.recaptcha;
                    i && i.reset()
                }
            }
        }
        var a = n(110).RECAPTCHA_FAILED,
            s = {
                checkIdentifier: i("check_identifier_recaptcha"),
                signupWithEmail: i("signup_with_email_recaptcha"),
                signinWithPassword: i("signin_with_password_recaptcha")
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: s
        }), {
            className: "signinRecaptcha",
            template: n(815),
            defaults: {
                recaptcha: ""
            },
            getTemplateData: function() {
                var e = this.options.recaptcha;
                return {
                    recaptcha: e,
                    recaptcha_required: e + "_required"
                }
            }
        })
    },
    276: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var i = n(341).overflowActions(t, 4, 2),
                s = i.primary,
                r = i.overflow,
                l = a.call(this, s);
            return r.length > 0 && l.push(o.call(this, n(593), {
                actions: r
            })), l
        }

        function a(e) {
            return n(3).compact(e.map(s.bind(this)))
        }

        function s(e) {
            var t = this,
                i = this.options,
                a = i.resource_id,
                s = i.show_counts_actions,
                r = this.model.id,
                l = function(e, n) {
                    return o.call(t, e, n)
                };
            switch (e) {
                case "play":
                    return l(n(207), {
                        resource_id: a
                    });
                case "like":
                    return l(n(317), {
                        show_counts: s
                    });
                case "repost":
                    return l(n(594), {
                        show_counts: s
                    });
                case "addToPlaylist":
                    return l(n(376), {
                        type: "addToPlaylist",
                        soundIds: [r]
                    });
                case "addToNextUp":
                    return l(n(590), {
                        resource_id: a
                    });
                case "share":
                    return l(n(378), {
                        resource_id: a
                    });
                case "download":
                    return l(n(482));
                case "startStation":
                    return l(n(483), {
                        stationType: "track",
                        stationId: r
                    });
                default:
                    return null
            }
        }

        function o(e, t) {
            return {
                buttonArgs: n(3).assign({
                    size: this.options.size,
                    resource_id: this.model.id,
                    resource_type: this.options.resource_type,
                    icon_only: e !== n(207) && this.options.icon_only
                }, t),
                ButtonView: e
            }
        }

        function r(e) {
            var t = e.purchase_title,
                i = n(896).getStoreName(e),
                a = "sound" === e._resource_type;
            return t || (t = i ? c[i] || (a ? n(52).t("Buy on [[store]]", {
                store: i
            }) : n(52).t("Buy all on [[store]]", {
                store: i
            })) : a ? n(52).t("Buy") : n(52).t("Buy all")), t
        }
        var l = n(59).trackV0ClickWithPromotedParams,
            u = n(174).usertext,
            c = {
                Flattr: "Flattr",
                Promohutt: n(52).t("Subscribe on Promo Hutt")
            },
            d = {
                buy: {
                    sound: ["sharing", "purchase_url", "purchase_title"],
                    playlist: ["sharing", "user_id", "tracks", "purchase_url", "purchase_title"]
                },
                noBuy: {
                    sound: ["sharing"],
                    playlist: ["sharing", "user_id", "tracks"]
                }
            };
        e.exports = n(54).extend(n(68).withOptions("audibleButtons"), {
            template: n(2624),
            css: n(3003),
            className: "soundActions sc-button-toolbar",
            ModelClass: n(75),
            requiredAttributes: null,
            observedAttributes: {
                sound: ["state"]
            },
            defaults: {
                size: "small",
                icon_only: !1,
                show_owner: !0,
                expand_owner_buttons: !1,
                show_play: !1,
                show_share: !0,
                show_download: !0,
                show_buy: !0,
                show_like: !0,
                show_repost: !0,
                show_start_station: !0,
                show_add_to_playlist: !0,
                show_add_to_next_up: !0,
                show_counts_actions: !1,
                only_like: !1
            },
            events: {
                "click .soundActions__purchaseLink": "onBuyClick"
            },
            bubbleEvents: {
                "dropdownButton:toggle": "toggleEditButtons"
            },
            states: {
                myControlsActive: "m-my-controls-active"
            },
            toggleEditButtons: function(e) {
                this.toggleState("myControlsActive", e.data.isOpened)
            },
            setup: function() {
                this.$el.addClass("soundActions__" + this.options.size), this.requiredAttributes = this.options.show_buy ? d.buy : d.noBuy
            },
            onBuyClick: function() {
                var e = this.getContextData();
                n(82).trackEvent("purchaseClickThrough", e), l(null, {
                    context: e,
                    click_name: "buy_link",
                    click_object: e.urn,
                    click_target: this.model.get("purchase_url")
                })
            },
            getTemplateData: function(e) {
                var t, a = "sound" === e._resource_type,
                    s = this.model,
                    o = this.options,
                    l = o.expand_owner_buttons,
                    c = o.only_like,
                    d = o.show_add_to_next_up,
                    p = o.show_add_to_playlist,
                    h = o.show_buy,
                    f = o.show_download,
                    g = o.show_like,
                    m = o.show_owner,
                    v = o.show_play,
                    _ = o.show_repost,
                    y = o.show_share,
                    b = o.show_start_station,
                    w = !c,
                    x = n(341).getActionSet(s, function(e) {
                        switch (e) {
                            case "play":
                                return v;
                            case "like":
                                return g;
                            case "repost":
                                return w && _;
                            case "addToPlaylist":
                                return w && p;
                            case "addToNextUp":
                                return w && d;
                            case "share":
                                return w && y;
                            case "buy":
                                return w && h;
                            case "download":
                                return w && f;
                            case "startStation":
                                return w && b;
                            case "delete":
                            case "edit":
                                return m;
                            default:
                                return !1
                        }
                    }),
                    k = ["buy"].concat(l ? ["edit", "delete"] : []);
                return n(3).assign(e, {
                    is_sound: a,
                    purchase_title: r(e),
                    buy_type: (n(896).getStoreName(e) || "default").toLowerCase().replace(/[^a-z0-9_\-]/g, ""),
                    safePurchaseUrl: u.redirectLink(e.purchase_url),
                    action_buttons: i.call(this, s, (t = n(3)).without.apply(t, [x].concat(k))),
                    show_buy_button: n(3).contains(x, "buy"),
                    show_edit: n(3).contains(x, "edit"),
                    show_delete: n(3).contains(x, "delete")
                })
            }
        })
    },
    277: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return this.model.getCurrentSound()
            }

            function a(e) {
                return e.options.show_action_buttons
            }

            function s(e) {
                return e.options.show_owner_buttons
            }

            function o(e) {
                var t = e[this.model.resource_type];
                r(this, t)
            }

            function r(e, t) {
                var n = e.model === t && t.isPlaying();
                e.toggleState("active", n)
            }

            function l(e) {
                return u(e) && !e.isManagedByFeeds()
            }

            function u(e) {
                return !e.isDisabled()
            }

            function c(e) {
                return "playlist" === e.resource_type
            }

            function d(e) {
                return "sound" === e.resource_type
            }
            var p = {
                REMOVE_CLICK: "soundBadge:remove-click"
            };
            e.exports = n(54).extend(n(149), n(68).withOptions("soundBadge"), n(218).withOptions({
                getSound: i
            }), {
                template: n(2636),
                css: n(3014),
                className: "soundBadge",
                ModelClass: n(75),
                requiredAttributes: {
                    sound: ["permalink", "user", "sharing", "duration", "display_date"],
                    playlist: ["permalink", "user", "sharing", "is_album", "display_date"]
                },
                defaults: {
                    CheckboxForm: null,
                    compact: !1,
                    is_promoted: !1,
                    show_action_buttons: !1,
                    show_owner_buttons: !1,
                    expand_owner_buttons: !1,
                    show_like_button: !0,
                    show_repost_button: !0,
                    show_share_button: !1,
                    show_add_to_playlist_button: !0,
                    show_download: !0,
                    show_ministats: !0,
                    show_private: !1,
                    show_audible_attributes: !1,
                    show_duration: !1,
                    show_upload_time: !1,
                    show_info_stats: !1,
                    allowTrackFallback: !0,
                    click_to_play: !1,
                    click_to_navigate: !1,
                    noFollow: !1
                },
                states: {
                    active: "active",
                    selected: "selected",
                    clickable: "clickable",
                    compact: "compact sc-media",
                    hiddenActions: "hiddenActions",
                    playlist: "playlist",
                    hiddenSound: "hiddenSound",
                    hasCheckbox: "hasCheckbox",
                    hover: function(e) {
                        (e || !this._isOverlayOpened) && this.$el.toggleClass("hover", e)
                    }
                },
                element2selector: {
                    avatarLink: ".soundBadge__avatarLink",
                    removeButton: ".soundBadge__remove"
                },
                events: {
                    click: "onClick",
                    mouseenter: "onHover",
                    mouseleave: "onHover"
                },
                loadingTemplate: function() {
                    return '<img width="50" height="50">'
                },
                initialize: function(e) {
                    var t = {};
                    t[n(223).TOGGLE] = "onOverlayButtonToggle", e.CheckboxForm && (t["checkbox:checked"] = "onCheckboxChecked"), this.bubbleEvents = n(3).assign(this.bubbleEvents || {}, t), n(54).prototype.initialize.apply(this, arguments)
                },
                setup: function(e) {
                    this.toggleState("compact", e.compact).toggleState("hiddenActions", !a(this) && !s(this)).toggleState("playlist", c(this.model)).toggleState("hasCheckbox", !!e.CheckboxForm), e.CheckboxForm && (this.checkboxForm = new e.CheckboxForm), this.listenTo(this.model, "play pause", o)
                },
                dispose: function() {
                    this.checkboxForm && this.checkboxForm.release()
                },
                renderDecorate: function() {
                    var e = this.options,
                        t = e.click_to_play,
                        n = e.click_to_navigate,
                        i = e.CheckboxForm,
                        a = u(this.model);
                    r(this, this.model), this.toggleState("hiddenSound", !a).toggleState("clickable", t || n || i && a)
                },
                onHover: function(e) {
                    this.toggleState("hover", "mouseenter" === e.type)
                },
                onClick: function(e) {
                    var i = t(e.target),
                        a = this.options,
                        s = this.model.id;
                    if (i.closest("a,button,input,label", ".soundBadge").length) return !0;
                    if (a.click_to_play) this.toggleAudible(this.model, {
                        userInitiated: !0,
                        context: this.getContextData()
                    });
                    else if (a.click_to_navigate) n(55).get("router").navigateToRoute("listen", [this.model], {
                        trigger: !0
                    });
                    else if (a.CheckboxForm && u(this.model)) {
                        var o = this.checkboxForm.hasId(s);
                        this.checkboxForm[o ? "removeId" : "addId"](s), l(this.model) || this.checkboxForm[o ? "removeUneditableId" : "addUneditableId"](s)
                    }
                },
                onCheckboxChecked: function(e) {
                    this.toggleState("selected", e.data.checked)
                },
                onOverlayButtonToggle: function(e) {
                    e.data.$el.closest(".soundBadge").is(this.el) && (this._isOverlayOpened = e.data.isOpened, this.toggleState("hover", this._isOverlayOpened, !0))
                },
                getTemplateData: function(e) {
                    var t = this.options,
                        i = this.model,
                        o = c(i),
                        r = s(this),
                        p = a(this),
                        h = t.show_like_button,
                        f = t.show_repost_button,
                        g = t.show_share_button,
                        m = t.show_add_to_playlist_button,
                        v = t.show_private && i.isPrivate(),
                        _ = t.show_audible_attributes && !o,
                        y = t.show_duration,
                        b = t.show_upload_time,
                        w = t.show_info_stats,
                        x = t.allowTrackFallback,
                        k = o && e.is_album,
                        T = void 0,
                        A = void 0;
                    return y && (A = n(52).t("Duration: [[timeCodeInWords]]", {
                        timeCodeInWords: n(52).dateTimeHelper.timecode(e.duration, {
                            inWords: !0
                        })
                    }), T = n(52).dateTimeHelper.timecode(e.duration)), n(3).assign(e, {
                        routeName: o ? "playlist" : "listen",
                        show_checkbox: !!t.CheckboxForm,
                        show_download: t.compact ? !1 : t.show_download,
                        show_ministats: t.show_ministats,
                        show_buttons: p || r,
                        show_owner_buttons: r,
                        show_action_buttons: p,
                        show_like_button: h,
                        show_repost_button: f,
                        show_share_button: g,
                        show_add_to_playlist_button: m,
                        show_extra: v || y || b || _,
                        show_duration: y,
                        show_upload_time: b,
                        show_audible_attributes: v || _,
                        show_private_only: v && !_,
                        show_release_data: k,
                        show_info_stats: w,
                        stats_visible: w || t.show_ministats || k,
                        isEditable: l(i),
                        isDisabled: !u(i),
                        isSound: d(i),
                        link_to_sound: !i.isDisabled(),
                        is_blacklisted: i.isBlacklisted(),
                        duration_in_words: A,
                        duration: T,
                        allowTrackFallback: x,
                        noFollow: t.noFollow
                    })
                }
            }, {
                Events: p
            })
        }).call(t, n(1))
    },
    278: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(126).withOptions({
            elSelector: ".premiumIconLink",
            type: "pro"
        }), {
            ModelClass: n(64),
            requiredAttributes: ["creator_subscriptions"],
            defaults: {
                referral: null,
                size: "small"
            },
            tagName: "span",
            getUpsellRef: function() {
                return this.options.referral
            },
            template: function() {
                return n(72).getIconLink({
                    subscriptions: this.model.getCreatorSubscription()
                }, this.options)
            },
            getModelData: function() {
                return {}
            }
        })
    },
    279: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(184), {
            className: "reportUserSpam",
            css: n(292),
            template: n(289),
            ModelClass: n(64),
            requiredAttributes: ["username"],
            onSubmit: function() {
                var e = this;
                n(74).block(this.model.id, !0, !0, !0).then(function() {
                    return n(57).trigger("user:blocked", {
                        report: !0,
                        userData: e.model.attributes
                    })
                })
            }
        })
    },
    280: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(290),
            className: "reportUser",
            events: {
                "click .reportUser__reportSpam": "onReportSpamButtonClick"
            },
            onReportSpamButtonClick: function(e) {
                e.preventDefault(), new(n(71))({
                    width: 520,
                    Subview: n(279),
                    subviewArgs: {
                        resource_id: this.options.resource_id
                    }
                }).open()
            }
        })
    },
    285: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".reportUserSpam__actions{margin-top:24px;text-align:right}", ""])
    },
    287: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o;
                return "    " + e.escapeExpression((n(96) || t && t.$a11y || i.helperMissing).call(null != t ? t : {}, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t._options : t) ? o.label : o
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, a) {
                var s, o = e.lambda,
                    r = e.escapeExpression;
                return '    <span class="sc-toggle-icon-inactive sc-icon sc-icon-' + r(o(null != (s = null != t ? t._options : t) ? s.size : s, t)) + " " + r(o(null != (s = null != t ? t._options : t) ? s.iconInactive : s, t)) + '"></span>\n    <span class="sc-toggle-icon-active sc-icon-' + r(o(null != (s = null != t ? t._options : t) ? s.size : s, t)) + " " + r(o(null != (s = null != t ? t._options : t) ? s.iconActive : s, t)) + '"></span>\n'
            },
            5: function(e, t, n, i, a) {
                return "checked"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '<span class="sc-toggle-handle">\n' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.showIcon : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '</span>\n\n<input class="sc-toggle-input sc-visuallyhidden" type="checkbox" ' + (null != (s = n["if"].call(o, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ">\n"
            },
            useData: !0
        })
    },
    289: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<h1 class="g-modal-title-h1 sc-truncate">' + l((n(51) || t && t.$t || r).call(o, "Report Spam", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h1>\n<h2>" + l((n(51) || t && t.$t || r).call(o, "Reporting [[username]] for spam:", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + '</h2>\n\n<ul class="g-list-content">\n  <li>' + l((n(51) || t && t.$t || r).call(o, "Removes their comments, reposts and likes from your tracks and playlists", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "Blocks them from interacting with you", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "Sends SoundCloud a spam report", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</li>\n</ul>\n\n<div class="reportUserSpam__actions">\n  <button type="reset" class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n  <button type="submit" class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Report spam", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    290: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return '    Reported accounts are reviewed by a specialist team who take action if the accountâ€™s content or activity\n    violates our <a target="_blank" href="[[guidelinesUrl]]">Guidelines</a>\n    or <a target="_blank" href="[[tosUrl]]">Terms</a>. Repeat violation or serious breaches\n    can result in the permanent deletion of accounts.\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h1 class="g-modal-title-h1 sc-truncate">' + u((n(51) || t && t.$t || l).call(r, "Report account for", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h1>\n<ul class="g-list-content">\n  <li><a class="reportUser__reportSpam" href="" aria-role="button">' + u((n(51) || t && t.$t || l).call(r, "Spam", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://help.soundcloud.com/customer/en/portal/articles/2155730-reporting-impersonation?b_id=9644">' + u((n(51) || t && t.$t || l).call(r, "Impersonation", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2155717-reporting-abuse-or-harassment">' + u((n(51) || t && t.$t || l).call(r, "Abuse", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://help.soundcloud.com/customer/en/portal/articles/2155833-reporting-trademark-infringement?b_id=9644">' + u((n(51) || t && t.$t || l).call(r, "Trademark infringement", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a></li>\n  <li><a target="_blank" href="http://help.soundcloud.com/customer/en/portal/articles/2155690-reporting-on-soundcloud?b_id=9644">' + u((n(51) || t && t.$t || l).call(r, "Other", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a></li>\n</ul>\n\n<h2>" + u((n(51) || t && t.$t || l).call(r, "Disclaimer", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + ":</h2>\n<p>\n" + (null != (o = (n(51) || t && t.$t || l).call(r, {
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
    292: function(e, t, n) {
        var i = n(285);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    311: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.subviews.throbber;
            e || (e = this.addSubview(new(n(159))(this.loadingViewArgs), "throbber"), e.render()), this.$el.append(e.el)
        }

        function a() {
            var e = this.subviews.throbber;
            e && (e._dispose(), this.removeSubview(e))
        }

        function s() {
            var e = this.subviews.retry;
            e || (e = this.addSubview(new(n(274))(this.retryViewArgs), "retry"), e.on("button_click", r, this), e.render()), this.$el.append(e.el)
        }

        function o() {
            var e = this.subviews.retry;
            e && (e._dispose(), this.removeSubview(e))
        }

        function r() {
            o.call(this), i.call(this), this._retryDelay = Math.min(4 * this._retryDelay, d), this.addDeferred(n(3).delay(this.fetchData.bind(this), this._retryDelay))
        }
        var l = {
                button_label: n(52).t("Retry"),
                tagName: "div"
            },
            u = {
                dark: !1
            },
            c = 250,
            d = 16e3;
        e.exports = new(n(21))({
            _retryDelay: c,
            applyTo: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                e.retryViewArgs = n(3).assign({}, l, e.retryViewArgs), e.loadingViewArgs = n(3).assign({}, u, e.loadingViewArgs), e.LoadingView = t.LoadingView || n(159)
            },
            around: {
                fetchData: function(e) {
                    var t = this;
                    return e().done(function() {
                        t._retryDelay = c, a.call(t)
                    }).fail(function() {
                        a.call(t), s.call(t)
                    })
                }
            }
        })
    },
    314: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = this.getElement("content");
                this._tabs.forEach(function() {
                    e.append('<div class="tabs__contentSlot"></div>')
                }), this.resetElementCache()
            }

            function a(e, t, n) {
                e.isActive = n, t.toggleClass(r, n).attr("tabIndex", n ? "-1" : ""), e.icon && t.find(".sc-icon").toggleClass(e.icon.activeClass, n).toggleClass(e.icon.defaultClass, !n)
            }

            function s(e) {
                return this.getElement("slots").eq(e);
            }

            function o(e, t) {
                var i = e.hasOwnProperty("subviewArgs"),
                    a = n(3).clone(this.options),
                    s = void 0;
                i && (a = n(3).assign(a, e.subviewArgs)), s = e.subview, e.subviewInstance = this.addSubview(new s(a)), t.html(e.subviewInstance.render().el)
            }
            var r = "active";
            e.exports = n(54).extend({
                template: n(2407),
                css: n(848),
                className: "tabs",
                defaults: {
                    large: !1,
                    tabs: null,
                    activeTabIndex: 0,
                    forceDispose: !1
                },
                element2selector: {
                    content: ".tabs__content",
                    slots: ".tabs__contentSlot",
                    tabs: ".g-tabs",
                    tabItems: ".g-tabs-item",
                    tabLinks: ".g-tabs-link"
                },
                events: {
                    "click .g-tabs:first .g-tabs-link": "onTabClick"
                },
                _tabs: null,
                _activeTab: null,
                _previousTab: null,
                _activeTabIndex: null,
                _previousTabIndex: null,
                setup: function(e) {
                    this._tabs = e.tabs.map(n(3).clone), this._activeTabIndex = this.options.activeTabIndex, this._activeTab = this._tabs[this._activeTabIndex], this._activeTab.isActive = !0
                },
                renderDecorate: function() {
                    i.call(this), this.showActiveTab()
                },
                showActiveTab: function() {
                    var e = this._activeTab,
                        t = this._activeTabIndex,
                        n = s.call(this, t);
                    e.isRendered || this.renderTab(this._activeTabIndex), n.show()
                },
                renderTab: function(e) {
                    var t = this._tabs[e],
                        n = t.hasOwnProperty.bind(t),
                        i = n("content"),
                        a = n("subview"),
                        r = s.call(this, e);
                    i ? r.html(t.content) : a && o.call(this, t, r), t.isRendered = !0
                },
                hidePreviousTab: function() {
                    var e = this._previousTab;
                    null != this._previousTabIndex && (this.options.forceDispose && e && e.subviewInstance ? (e.subviewInstance._dispose(), this.removeSubview(e.subviewInstance), e.isRendered = !1) : this.getElement("slots").eq(this._previousTabIndex).hide())
                },
                onTabClick: function(e) {
                    e.preventDefault();
                    var n = e.currentTarget,
                        i = void 0,
                        s = void 0;
                    this._previousTabIndex = this._activeTabIndex, this._activeTabIndex = this.getElement("tabLinks").index(n), i = this._tabs[this._previousTabIndex], s = this._tabs[this._activeTabIndex], this._previousTabIndex !== this._activeTabIndex && (a.call(this, i, this.getElement("tabLinks").filter(".active"), !1), a.call(this, s, t(n), !0), this._activeTab = s, this._previousTab = i, this.hidePreviousTab(), this.showActiveTab(), this.bubble("activeTabChanged", {
                        index: this._activeTabIndex
                    }))
                },
                getTemplateData: function(e) {
                    e.tabs = this._tabs, e.singleTab = 1 === this._tabs.length && this._tabs[0]
                }
            })
        }).call(t, n(1))
    },
    321: function(e, t, n) {
        "use strict";

        function i() {
            return n(98).generate("user", this.model.get("user_id"))
        }
        var a = n(59).trackClickThrough;
        e.exports = n(54).extend(n(140), {
            template: n(2638),
            css: n(3017),
            className: "soundTitle sc-clearfix sc-hyphenate",
            ModelClass: n(75),
            requiredAttributes: ["user", "permalink", "title", "sharing", "genre"],
            events: {
                "click .soundTitle__username": "onUsernameClick",
                "click a.soundTitle__title": "onTitleClick"
            },
            states: {
                playing: "m-playing",
                hiddenSound: "m-hiddenSound",
                visualSound: "m-visualSound"
            },
            defaults: {
                is_link: !0,
                noFollow: !1,
                show_actor_user: !0,
                show_playbutton: !1,
                show_genre: !1,
                show_private: !1,
                show_promoted: !0,
                show_time: !1,
                show_visuals: !0,
                show_snippet_indicator: !0,
                playbutton_size: "small",
                truncate: !1,
                actorId: null,
                actionType: "post",
                is_promoted: !1,
                prefix: "",
                timestamp: null,
                viewContext: "",
                dialogType: "userBadge",
                dialogSelector: ".soundTitle__usernameText"
            },
            setup: function(e) {
                this.listenTo(this.model, "play", this.onPlay).listenTo(this.model, "pause", this.onPause).listenTo(this.model, "finished", this.onFinished), this.$el.addClass(e.viewContext)
            },
            dialogSubviewArgs: function() {
                return {
                    resource_id: this.model.get("user").id
                }
            },
            isVisual: function() {
                return this.options.show_visuals && this.model.hasVisuals && this.model.hasVisuals()
            },
            onPlay: function() {
                this.toggleState("playing", !0)
            },
            onPause: function() {
                this.toggleState("playing", !1)
            },
            onFinished: function() {
                this.toggleState("playing", !1)
            },
            onUsernameClick: function() {
                var e = this.getContextData();
                n(82).trackEvent("userClickThrough", e), a({
                    target: i.call(this),
                    context: e
                })
            },
            onTitleClick: function() {
                var e = this.getContextData();
                n(82).trackEvent("soundClickThrough", e), a({
                    context: e
                })
            },
            renderDecorate: function() {
                this.toggleState("playing", this.model.isPlaying()).toggleState("hiddenSound", this.model.isDisabled()).toggleState("visualSound", this.isVisual())
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = this.options,
                    a = t.isPrivate(),
                    s = t.isDisabled(),
                    o = this.isVisual(),
                    r = !!e.genre,
                    l = i.show_genre && r,
                    u = i.show_private && a,
                    c = "sound" === e._resource_type,
                    d = i.show_snippet_indicator && c;
                return n(3).assign(e, {
                    isPlaylist: !c,
                    isLink: i.is_link && !s,
                    noFollow: i.noFollow,
                    isListenContext: "listenContext" === i.viewContext,
                    showActorUser: i.actorId && i.show_actor_user,
                    showPlaybutton: i.show_playbutton,
                    showPromotedInTitle: i.show_promoted && o && i.is_promoted && "listenContext" !== i.viewContext,
                    showPromotedOutsideTitle: i.show_promoted && !o && i.is_promoted && "listenContext" !== i.viewContext,
                    showReleaseData: "streamContext" === i.viewContext && !c,
                    hasLabels: l || u || d,
                    isSound: c,
                    isPrivate: a,
                    isVisual: o,
                    showSnippet: d,
                    showGenre: l,
                    showPrivate: u
                })
            }
        })
    },
    323: function(e, t, n) {
        "use strict";
        var i = {
            "user-badge": n(154),
            "user-avatar-badge": n(169),
            "user-avatar-badge-hover": n(1770)
        };
        e.exports = n(78).extend({
            defaults: {
                floating: !1,
                subviewName: null,
                subviewArgs: {},
                UsersCollection: null,
                usersCollectionArgs: null,
                emptyTemplate: null
            },
            className: "usersList",
            listClassName: "usersList__list lazyLoadingList__list sc-list-nostyle",
            itemClassName: "usersList__item",
            css: n(3098),
            states: {
                floating: "floating"
            },
            automaticErrorHandling: !1,
            setup: function(e) {
                var t = i[e.subviewName],
                    n = e.usersCollectionArgs || {};
                this.Subview = t, this.subviewArgs = e.subviewArgs, this.collection = new e.UsersCollection(null, n), n.limit && this.collection.setLimit(n.limit), this.toggleState("floating", e.floating), this.$el.addClass(e.subviewName)
            },
            getEmptyTemplate: function() {
                return this.options.emptyTemplate
            }
        })
    },
    351: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["getHref"],
            defaults: {
                template: n(2381),
                css: n(2761),
                className: "readMoreTile"
            },
            applyTo: function(e) {
                e.defaults = n(3).assign({
                    alreadyShown: 0,
                    subviewArgs: null,
                    Subview: null
                }, e.defaults)
            },
            before: {
                getTemplateData: function(e) {
                    e.readMoreText = n(52).t("View all"), e.href = this.getHref()
                }
            }
        })
    },
    352: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            around: {
                validateOwnField: function(e) {
                    return this.isControlValid ? e.call(this) : void 0
                }
            },
            setValid: function(e, t) {
                this.isControlValid = e;
                var i = this.getMetaData();
                i && (i.isValid = e, i.validity = n(173)[e ? "VALID" : "INVALID"]), this.getElement("validation").html(e ? "" : t.toString()), this.toggleState("invalid", !e)
            }
        })
    },
    366: function(e, t, n) {
        "use strict";
        e.exports = n(80).extend(n(104), {
            tagName: "div",
            className: "notifications",
            itemClassName: "notifications__item",
            template: n(2405),
            css: n(2788),
            NotifyingCollection: null,
            defaults: {
                dark: !1,
                showViewAll: !0,
                markNotificationsRead: !0
            },
            element2selector: {
                list: ".notifications__list"
            },
            setup: function() {
                this.options.dark && this.$el.addClass("g-dark g-dark-bg"), this.collection = new this.NotifyingCollection, this.collection.setLimit(this.options.maxDisplay), this.collection.on("change:queue-size", this.onQueueSizeChange, this)
            },
            dispose: function() {
                this.collection.off("change:queue-size", this.onQueueSizeChange, this)
            },
            getListContainer: function() {
                return this.getElement("list")
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.call(this), this.options.markNotificationsRead && this.collection.markAsRead()
            },
            onQueueSizeChange: function(e, t) {
                t && e.fetchNewItems()
            },
            getViewAllLinkData: function() {
                return {
                    text: "",
                    href: "",
                    className: ""
                }
            },
            getEmptyListMessage: function() {
                return ""
            },
            getTemplateData: function(e) {
                return e = n(80).prototype.getTemplateData.call(this, e) || e, n(3).assign(e, {
                    isEmpty: !this.collection.length,
                    empty_message: this.getEmptyListMessage(),
                    view_all: this.getViewAllLinkData(),
                    show_view_all: this.options.showViewAll
                })
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
            a = n(59).trackImpression;
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
                a({
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
    385: function(e, t, n) {
        "use strict";

        function i(e) {
            this.model.set("reset_password_addresses", e.addresses || []), e.errors ? this.showErrorMessage({
                error: n(52).t("We couldnâ€™t find that email address or profile URL")
            }) : this.goToStep(n(81).resetEmailSent)
        }
        var a = {
            onPromptPasswordReset: i
        };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: a
        }), {
            defaults: {
                requirePasswordChange: !1
            },
            className: "promptPassword",
            template: n(814),
            getMainTextField: function() {
                return this.subviews.identifier
            }
        })
    },
    386: function(e, t, n) {
        "use strict";

        function i() {
            this.goToStep(n(81).initial)
        }
        e.exports = n(54).extend(n(111), {
            className: "signinBack sc-button sc-button-medium sc-button-icon sc-button-pageleft",
            css: n(878),
            template: function() {
                return n(52).t("Go back to the previous step")
            },
            attributes: {
                title: n(52).t("Go back one step")
            },
            events: {
                click: i
            }
        })
    },
    387: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = void 0;
            if (!e) return new(n(20).SafeString)("");
            switch (e) {
                case n(110).INVALID_CREDENTIALS:
                    return n(52).t("This password is incorrect.");
                case n(110).EMAIL_ALREADY_IN_USE:
                    return n(52).t("This email is already in use.");
                case n(110).EMAIL_DOMAIN_BLACKLISTED:
                    return n(52).t("This email domain is blacklisted.");
                case n(110).INVALID_EMAIL:
                case n(110).INVALID_IDENTIFIER:
                    return n(52).t("Enter a valid email address or profile url.");
                case n(110).ACCOUNT_FROZEN:
                    return t = "https://help.soundcloud.com/hc/articles/115003563468-It-says-my-account-is-frozen-and-I-can-t-sign-in", n(52).t('Your account is currently frozen. To learn more, <a href="[[helpLink]]">visit our Help center</a>.', {
                        helpLink: t
                    });
                case n(110).ACTION_DENIED:
                    return t = "http://youraccount.help.soundcloud.com/customer/en/portal/topics/839179-help-accessing-your-account/articles", n(52).t('Our robots think you are a robot. <br> Try again later. If you continue to have this problem, <a href="[[helpLink]]" target="_blank">visit our Help center</a>.', {
                        helpLink: t
                    });
                default:
                    return n(52).t("Something unexpected happen. Try again.")
            }
        }
        e.exports = i
    },
    388: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                if (this.options.provider === e) {
                    var i = this.getTokenFromResponse(t),
                        a = t.error;
                    if (a && s(n(103).sign_up_error, {
                            target: e
                        }), i) this.finishSignin({
                        token: i,
                        signup: !0,
                        provider: e
                    });
                    else {
                        var o = this.getErrorMessage(a).toString();
                        this.showErrorMessage({
                            error: o,
                            container: this.getElement("signupValidation")
                        })
                    }
                }
            }
        }
        var a = n(61).getRoute,
            s = n(59).trackAuthEvent,
            o = {
                onSignupWithGoogle: i("google"),
                onSignupWithFacebook: i("facebook")
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: o
        }), {
            className: "signupWithProvider",
            css: n(880),
            template: n(821),
            defaults: {
                button: "",
                provider: ""
            },
            states: {
                google: "m-google",
                facebook: "m-facebook"
            },
            element2selector: {
                signupValidation: ".signin__validation"
            },
            setup: function(e) {
                var t = e.provider;
                this.toggleState(t, !0)
            },
            getTemplateData: function() {
                var e = this.options,
                    t = e.provider,
                    i = e.button,
                    s = a("pages", "terms-of-use"),
                    o = a("pagesPages", "privacy"),
                    r = n(52).t('I agree to the <a href="[[termsHref]]" target="_blank">Terms of use</a> and <a href="[[privacyHref]]" target="_blank">Privacy policy</a>.', {
                        termsHref: s,
                        privacyHref: o
                    });
                return {
                    button: i,
                    provider: t,
                    acceptTermsLabel: r
                }
            }
        })
    },
    389: function(e, t, n) {
        "use strict";

        function i(e) {
            e.preventDefault(), this.goToStep(n(81).initial)
        }
        e.exports = n(54).extend(n(111), {
            className: "signinUserIdentifier sc-pointer sc-type-h2 sc-input sc-input-large g-block",
            css: n(881),
            template: n(822),
            observedAttributes: ["identifier"],
            events: {
                click: i
            }
        })
    },
    390: function(e, t, n) {
        "use strict";

        function i() {
            if (!this.disposed) {
                var e = this.options.override,
                    t = e ? e : this.model.isSnippetized() ? "snippet" : null,
                    n = a[t] || "";
                this.toggleState("hidden", !n), this.$el.html(n)
            }
        }
        var a = (e.exports = n(54).extend({
                tagName: "span",
                className: "sc-snippet-badge",
                defaults: {
                    override: null,
                    size: null,
                    color: null,
                    greyBackground: !1
                },
                states: {
                    hidden: "sc-hidden",
                    greyBackground: "sc-snippet-grey-background"
                },
                ModelClass: n(66),
                requiredAttributes: ["policy", "monetization_model"],
                setup: function(e) {
                    var t = (e.override, e.size),
                        n = e.color,
                        i = (e.resource_id, e.greyBackground);
                    this.$el.addClass(s[t]).addClass(o[n]), this.toggleState("greyBackground", !!i)
                },
                renderDecorate: i,
                onModelChange: i,
                getModelData: n(3).noop,
                template: n(3).constant(""),
                getTemplate: function() {
                    return this.template
                }
            }), {
                snippet: n(52).t("Preview", null, {
                    context: "track"
                }).toString()
            }),
            s = {
                small: "sc-snippet-badge-small",
                medium: "sc-snippet-badge-medium"
            },
            o = {
                light: "sc-snippet-badge-light",
                grey: "sc-snippet-badge-grey"
            }
    },
    391: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.get("kind"),
                n = e.id;
            return t || (t = "sound" === e.resource_type ? "track" : "playlist"), {
                id: n,
                kind: t
            }
        }
        e.exports = n(78).extend(n(106), {
            css: n(3013),
            defaults: {
                Collection: null,
                collectionArgs: null,
                getRestoreUrl: null,
                highlight: !1,
                CheckboxForm: null,
                compact: !1,
                show_download: !0,
                show_ministats: !0,
                show_action_buttons: !0,
                show_like_button: !0,
                show_repost_button: !0,
                show_share_button: !1,
                show_add_to_playlist_button: !0,
                show_owner_buttons: !1,
                show_private: !1,
                show_audible_attributes: !1,
                show_duration: !1,
                show_upload_time: !1,
                allowTrackFallback: !0,
                noFollow: !1
            },
            states: {
                compact: "compact"
            },
            className: "soundBadgeList",
            listClassName: "sc-list-nostyle sc-clearfix",
            itemClassName: "soundBadgeList__item",
            Subview: n(277),
            setup: function(e) {
                this.collection = new e.Collection(null, e.collectionArgs), e.getRestoreUrl && (this.getRestoreUrl = e.getRestoreUrl), this.toggleState("compact", e.compact)
            },
            getSubviewArgs: function(e) {
                var t = n(78).prototype.getSubviewArgs.apply(this, arguments),
                    a = this.options,
                    s = i(e),
                    o = s.kind,
                    r = s.id;
                return n(3).assign(t, {
                    resource_id: r,
                    resource_type: "track" === o ? "sound" : "playlist",
                    CheckboxForm: a.CheckboxForm,
                    compact: a.compact,
                    show_download: a.show_download,
                    show_ministats: a.show_ministats,
                    show_action_buttons: a.show_action_buttons,
                    show_like_button: a.show_like_button,
                    show_repost_button: a.show_repost_button,
                    show_share_button: a.show_share_button,
                    show_add_to_playlist_button: a.show_add_to_playlist_button,
                    show_owner_buttons: a.show_owner_buttons,
                    show_private: a.show_private,
                    show_audible_attributes: a.show_audible_attributes,
                    show_duration: a.show_duration,
                    show_upload_time: a.show_upload_time,
                    allowTrackFallback: a.allowTrackFallback,
                    noFollow: a.noFollow
                })
            }
        })
    },
    399: function(e, t, n) {
        "use strict";

        function i() {
            var e = s.get(o);
            return e && e > Date.now() - r
        }

        function a() {
            this.toggleState("hidden", !0), s.set(o, Date.now())
        }
        var s = new(n(105))("already-seen"),
            o = "stream-consumer-sub-upsell",
            r = 1728e5;
        e.exports = n(54).extend(n(126).withOptions({
            elSelector: ".streamHTUpsell__button",
            type: "go"
        }), {
            template: n(432),
            css: n(444),
            className: "streamHTUpsell",
            states: {
                hidden: "sc-hidden"
            },
            events: {
                "click .streamHTUpsell__dismiss": a
            },
            observedAttributes: ["preselected_term"],
            setup: function() {
                i() || (this.model = new(n(77))({
                    id: n(72).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER
                })), this.toggleState("hidden", !0)
            },
            renderDecorate: function() {
                this.toggleState("hidden", !this.model || !this.model.isAvailable() || i())
            },
            getUpsellRef: function() {
                return "t1028"
            },
            getTemplateData: function(e) {
                var t = this.model;
                return (e.available = t && t.isAvailable()) && (e.isTrial = t.isTrial()), e.headerText = n(52).t("Unlock Previews with SoundCloud Go+"), e.ctaText = n(52).t("Get SoundCloud Go+"), e
            }
        })
    },
    401: function(e, t, n) {
        "use strict";

        function i(e) {
            return Math.ceil(e / s) * s
        }

        function a(e) {
            return e - e % s
        }
        var s = n(229).getConfig("barWidth") + n(229).getConfig("gapWidth");
        e.exports = new(n(21))(n(974), {
            override: {
                ModelClass: n(66)
            },
            merge: {
                requiredAttributes: ["duration"],
                defaults: {
                    upperPartHeight: .7,
                    waveformStyle: "default"
                }
            },
            hasUnplayableArea: function() {
                return this.getPlayablePortion() < 1
            },
            getPlayablePortion: function() {
                var e = this.model.getMediaDuration(),
                    t = this.model.duration();
                return e === t ? 1 : e / (t || 1)
            },
            getPlayableWidth: function() {
                var e = this.canvas.width,
                    t = this.getPlayablePortion();
                return 1 === t ? e : a(e * t)
            },
            getUnplayableWidth: function() {
                return this.canvas.width - this.getPlayableWidth()
            },
            insideScrubbableArea: function(e, t) {
                return this.insideTopArea(t) && this.insidePlayableArea(e, "px")
            },
            roundToBar: function(e, t) {
                return (t ? i : a)(e)
            },
            getWholeBarWidth: function() {
                return s
            },
            insidePlayableArea: function(e, t) {
                return this.hasUnplayableArea() ? ("ms" === t && (e = this.msToPx(e)), e <= this.getPlayableWidth()) : !0
            },
            insideTopArea: function(e) {
                return e < this.options.upperPartHeight * this.canvas.height
            },
            msToPx: function(e) {
                return e / this.model.duration() * this.canvas.width
            }
        })
    },
    402: function(e, t, n) {
        "use strict";

        function i(e) {
            this.model[e]("play pause", a, this)
        }

        function a() {
            this.disposed || this.toggleState("playing", this.model.isPlaying())
        }

        function s() {
            return this.options.show_comments
        }

        function o() {
            if (!this.disposed) {
                var e = this.waveformData,
                    t = this.options,
                    i = t.waveformStyle,
                    a = t.upperPartHeight,
                    s = t.interactive,
                    o = this.model,
                    l = o.resource_id,
                    u = o.resource_type,
                    c = this.getElement("sceneElement");
                this.addLayer([
                    [n(1780), {
                        resource_id: l,
                        resource_type: u,
                        $eventEl: c,
                        waveformStyle: i,
                        upperPartHeight: a,
                        waveformData: e
                    }],
                    [n(1783), {
                        resource_id: l,
                        resource_type: u,
                        $eventEl: c,
                        waveformStyle: i
                    }], s && !n(97).touch ? [n(1784), {
                        resource_id: l,
                        resource_type: u,
                        $eventEl: c,
                        waveformStyle: i,
                        upperPartHeight: a
                    }] : null
                ]), s && this.addLayer([
                    [n(1785), {
                        resource_id: l,
                        resource_type: u,
                        $eventEl: c,
                        waveformStyle: i,
                        upperPartHeight: a
                    }],
                    [n(1782), {
                        resource_id: l,
                        resource_type: u,
                        $eventEl: c,
                        upperPartHeight: a
                    }]
                ]), r.call(this), this.toggleState("loaded", !0)
            }
        }

        function r() {
            if (!this._commentsShowing && s.call(this)) {
                var e = this.model,
                    t = this.addLayer([
                        [n(1781), {
                            sound_id: e.id,
                            resource_id: e.resource_id,
                            $eventEl: this.getElement("sceneElement"),
                            avatarSize: this.options.avatarSize
                        }]
                    ], {
                        at: 1
                    });
                t.setDirty(!0), this._commentsShowing = !0
            }
        }
        e.exports = n(54).extend(n(68).withOptions("waveform"), n(471).withOptions({
            dim: !1
        }), {
            template: n(2727),
            css: n(3103),
            className: "waveform",
            ModelClass: n(66),
            requiredAttributes: ["waveform_url", "state", "duration"],
            defaults: {
                upperPartHeight: .7,
                waveformStyle: "default",
                show_comments: !0,
                interactive: !0,
                avatarSize: 10,
                darkCommentText: !0,
                commentFlagSize: "small"
            },
            _commentsShowing: !1,
            states: {
                playing: "playing",
                emptyWaveform: function(e) {
                    this.$el.toggleClass("waveform__empty", e), e && this.toggleState("loaded", !0)
                },
                loaded: "loaded"
            },
            element2selector: {
                sceneElement: ".waveform__scene"
            },
            waveformData: null,
            setup: function() {
                i.call(this, "on"), this.scene = new(n(1347))
            },
            dispose: function() {
                i.call(this, "off")
            },
            teardown: function() {
                this.scene.teardown(), this._commentsShowing = !1
            },
            hasData: function() {
                return n(54).prototype.hasData.call(this) && !!this.waveformData
            },
            fetchData: function() {
                var e = this;
                return n(54).prototype.hasData.call(this) ? this.waveformData ? n(56).resolve() : n(1311).loadWaveformData(this.model.get("waveform_url")).then(function(t) {
                    e.disposed || (e.waveformData = t, e.rerender())
                }) : n(54).prototype.fetchData.call(this)
            },
            addLayer: function(e, t) {
                var i, a = new(n(1346)),
                    s = a.el,
                    o = this.scene,
                    r = this.getElement("sceneElement");
                return t = t || {}, this.addSubview(a), o.addLayer(a), void 0 === t.at ? r.append(s) : (i = o.getLayers()[t.at], i ? i.$el.before(s) : r.append(s)), a.initCanvasDimensions(), e.filter(n(3).identity).forEach(a.addNode, a), a
            },
            renderDecorate: function() {
                var e = this;
                this.toggleState("emptyWaveform", this.model.isProcessing() || this.model.isBlocked()), this.whenInserted().then(function() {
                    return o.call(e)
                })
            },
            getModelData: function() {
                return {}
            },
            getTemplateData: function(e) {
                var t = this.model,
                    i = t.isProcessing(),
                    a = t.isBlocked(),
                    o = a && n(163).getShortBlockMessage();
                return n(3).assign(e, {
                    id: t.id,
                    _resource_id: t.resource_id,
                    type: "track",
                    isReady: !i && !a,
                    isProcessing: i,
                    isBlocked: a,
                    blockMsg: o,
                    showComments: s.call(this),
                    upperPartHeightPercent: 100 * this.options.upperPartHeight + "%"
                })
            }
        })
    },
    413: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signupTeaser__title{margin-top:-7px!important;margin-bottom:3px}.signupTeaser__image{margin-right:30px;width:200px}.signupTeaser__copy{color:#666}.signupTeaser__actions{margin-top:25px}.signupTeaser__divider{margin:30px 0 15px}.signupTeaser ul{list-style:outside url(" + n(732) + ");margin-left:15px}.signupTeaser .sc-media{position:relative}.signupTeaser__actionsBottom{position:absolute;bottom:0;left:230px}.signupTeaser__nowplaying{margin:-5px 0 25px}.signupTeaser__centered{text-align:center}.signupTeaser__centered .signupTeaser__image{margin:20px auto 5px}.signupTeaser__centered .signupTeaser__actions{margin-top:20px}.signupTeaser__centered .signupTeaser__divider{margin:20px 0 10px}", ""])
    },
    416: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".streamHTUpsell{position:relative;background-color:#f2f2f2;text-align:center;padding:25px;margin:20px 0}.streamHTUpsell__heading{font-size:24px;margin:0 0 .3em}.streamHTUpsell__dismiss{position:absolute;top:15px;right:15px;width:20px;height:20px;background:url(" + n(417) + ") center no-repeat;text-indent:-9999px;overflow:hidden;border:none}", ""])
    },
    428: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h1 class="sc-text signupTeaser__title">' + u((n(51) || t && t.$t || l).call(r, "Sound good?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h1>\n<p class="sc-type-medium sc-text-light signupTeaser__copy signupTeaser__nowplaying sc-truncate">\n  ' + u((n(51) || t && t.$t || l).call(r, '<span class="sc-text">Now playing:</span> [[username]] - [[title]]', {
                    name: "$t",
                    hash: {
                        title: null != t ? t.title : t,
                        username: null != (o = null != t ? t.user : t) ? o.username : o
                    },
                    data: s
                })) + '\n</p>\n<div class="sc-media signupTeaser__spacing">\n  <div class="sc-media-image signupTeaser__image">\n    ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        size: 200,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + '\n  </div>\n  <div class="sc-media-content signupTeaser__copy sc-type-medium">\n    <p>' + u((n(51) || t && t.$t || l).call(r, "Hear more &ndash; sign up for SoundCloud", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</p>\n    <ul>\n      <li>" + u((n(51) || t && t.$t || l).call(r, "Save and share this and other favorites", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n      <li>" + u((n(51) || t && t.$t || l).call(r, "Create and share playlists", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n      <li>" + u((n(51) || t && t.$t || l).call(r, "Be the first to hear what [[username]] posts next", {
                    name: "$t",
                    hash: {
                        username: null != (o = null != t ? t.user : t) ? o.username : o
                    },
                    data: s
                })) + '</li>\n    </ul>\n\n    <div class="signupTeaser__actionsBottom sc-text-light sc-type-medium">\n      ' + u((n(51) || t && t.$t || l).call(r, '[[[signUpButton]]] or <a class="signupTeaser__login sc-link-dark" href="#">sign in</a>', {
                    name: "$t",
                    hash: {
                        signUpButton: (n(53) || t && t.$view || l).call(r, n(121), {
                            name: "$view",
                            hash: {
                                type: "signup",
                                size: "large"
                            },
                            data: s
                        })
                    },
                    data: s
                })) + '\n    </div>\n  </div>\n</div>\n\n<hr class="signupTeaser__divider">\n' + u((n(53) || t && t.$view || l).call(r, n(240), {
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
    432: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<h1 class="streamHTUpsell__heading sc-type-large">' + c((o = null != (o = i.headerText || (null != t ? t.headerText : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "headerText",
                    hash: {},
                    data: s
                }) : o)) + '</h1>\n<p class="sc-type-medium sc-text-light">\n  ' + c((n(51) || t && t.$t || l).call(r, "Get full access to the world's largest streaming catalog, with ad-free and mobile offline listening.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</p>\n\n<a class="sc-button sc-button-cta sc-button-large streamHTUpsell__button" href="' + c((n(58) || t && t.$route || l).call(r, "consumerPremium", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n  ' + c((o = null != (o = i.ctaText || (null != t ? t.ctaText : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "ctaText",
                    hash: {},
                    data: s
                }) : o)) + '\n</a>\n<button class="streamHTUpsell__dismiss">' + c((n(51) || t && t.$t || l).call(r, "Dismiss", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.available : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    440: function(e, t, n) {
        var i = n(413);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    442: function(e, t, n) {
        var i = n(704);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    444: function(e, t, n) {
        var i = n(416);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    470: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("someItems", e)
        }

        function a() {
            var e = this.model.get("size");
            this.toggleState("newItems", e && "number" == typeof e), this.toggleState("someItems", !!e)
        }
        e.exports = new(n(21))({
            defaults: {
                states: {
                    newItems: "newItems__new",
                    someItems: "newItems__some"
                },
                observedAttributes: ["size"]
            },
            override: {
                defaults: {
                    type: null
                }
            },
            before: {
                setup: function(e) {
                    var t = e.type;
                    "messages" === t ? (this.unreadConversations = new(n(448)), this.unreadConversations.startPolling(), this.listenTo(this.unreadConversations, "anyUnreadMessages", i)) : (this.model = new(n(264))({
                        type: t
                    }), a.call(this))
                },
                renderDecorate: function() {
                    "messages" === this.options.type ? i.call(this, this.unreadConversations.hasAnyUnreadMessages()) : a.call(this)
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    var i = e(t) || t,
                        a = n(122)[this.options.type];
                    return a && (i.itemName = a.get("itemName"), i.itemNamePlural = a.get("itemNamePlural")), i.isStream = "stream" === this.options.type, i
                }
            }
        })
    },
    471: function(e, t, n) {
        "use strict";

        function i(e) {
            var t;
            e = "boolean" == typeof e ? e : n(67).getState("globalPlayLock"), this._isPlayLocked !== e && (t = this._playLockSelector === a ? this.$el : this.getElement(this._playLockSelector), this._playLockDim && t.toggleClass(s, e), this._playLockFreeze && t.toggleClass(o, e), this._isPlayLocked = e)
        }
        var a = {},
            s = "playlock-dim",
            o = "playlock-freeze";
        e.exports = new(n(21))({
            _isPlayLocked: null,
            _playLockSelector: null,
            _playLockDim: null,
            _playLockFreeze: null,
            applyTo: function(e, t) {
                e.css = [].concat(e.css, n(2760)).filter(Boolean), e._playLockDim = t && "dim" in t ? !!t.dim : !0, e._playLockFreeze = t && "freeze" in t ? !!t.freeze : !0, e._playLockSelector = t && t.elName || a
            },
            before: {
                setup: function() {
                    this._isPlayLocked = !1, this.listenTo(n(67), "state:globalPlayLock", i)
                },
                renderDecorate: function() {
                    i.call(this)
                }
            }
        })
    },
    472: function(e, t, n) {
        "use strict";
        var i = n(3).noop;
        e.exports = new(n(21))({
            stateMachine: null,
            _stateHandlers: null,
            applyTo: function(e) {
                e.defaults = n(3).defaults(e.defaults || {}, {
                    sound_id: null
                })
            },
            before: {
                setup: function(e) {
                    this._stateHandlers = {}, this.sound = this.addDataSource(new(n(66))({
                        id: e.sound_id,
                        resource_id: e.resource_id
                    }), {
                        requiredAttributes: ["duration"]
                    })
                }
            },
            after: {
                setup: function() {
                    var e = this.sound.get("secret_token");
                    this.stateMachine = new(n(1355))(this.options.sound_id, this.options.resource_id, e), this.onState(n(101).INITIAL, this.onInitialState).onState(n(101).CURRENT_COMMENT, this.onCurrentCommentChange).onState(n(101).ACTIVE_TIMESTAMP, this.onActiveTimestamp).onState(n(101).CURRENT_TIMESTAMP, this.onCurrentTimestamp)
                },
                dispose: function() {
                    this.sound = null;
                    var e = this.stateMachine,
                        t = this;
                    n(3).each(this._stateHandlers, function(n, i) {
                        n.forEach(function(n) {
                            e.off(i, n, t)
                        })
                    }), this._stateHandlers = null, e && e.release()
                }
            },
            getCurrentComment: function() {
                return this.stateMachine.currentComment
            },
            getCurrentCommentTimestamp: function() {
                var e = this.getCurrentComment();
                return e && e.get("timestamp")
            },
            cachedDimensions: function() {
                return this._cachedDimensions || (this._cachedDimensions = this.$el.offset(), this._cachedDimensions.width = this.$el.width(), this._cachedDimensions.height = this.$el.height()), this._cachedDimensions
            },
            resetCachedDimensions: function() {
                this._cachedDimensions = null
            },
            getTimestampByMouseEvent: function(e) {
                return Math.floor((e.clientX - this.cachedDimensions().left) / this.cachedDimensions().width * this.sound.duration())
            },
            getCurrentState: function() {
                return this.stateMachine.currentState
            },
            goToState: function() {
                var e = this.stateMachine;
                e.goToState.apply(e, arguments)
            },
            setInteracting: function(e) {
                this.stateMachine.interactingWithComments = e
            },
            isInteracting: function() {
                return this.stateMachine.interactingWithComments
            },
            onState: function(e, t) {
                return this._stateHandlers[e] = this._stateHandlers[e] || [], this.stateMachine.on(e, t, this), this._stateHandlers[e].push(t), this
            },
            isActiveTimestampState: function() {
                return !!this.stateMachine.activeTimestamp && this.getCurrentState() === n(101).ACTIVE_TIMESTAMP
            },
            defaults: {
                onInitialState: i,
                onActiveTimestamp: i,
                onCurrentTimestamp: i,
                onCurrentCommentChange: i
            }
        })
    },
    488: function(e, t, n) {
        "use strict";

        function i(e) {
            e.forEach(function(e) {
                this.form.addAttachment(e, this.options.share_type)
            }, this)
        }

        function a() {
            var e = this.subviews;
            !this.options.showRecipientField || this.form.getRecipientIds().length >= this.options.maxRecipients ? s.call(this, e.compose) : s.call(this, e.recipients)
        }

        function s(e) {
            e && this.addDeferred(window.setTimeout(function() {
                e.focus()
            }, o))
        }
        var o = 400;
        e.exports = n(54).extend(n(184), {
            template: n(2522),
            css: n(2896),
            className: "newMessageForm sc-clearfix",
            tagName: "div",
            defaults: {
                maxRecipients: 1,
                formId: null,
                showSuccessMessage: !0,
                attachments: null,
                showTitle: !0,
                showRecipientField: !0,
                share_type: null
            },
            form: null,
            ModelClass: n(64),
            setup: function(e) {
                e.formId && (this.formId = e.formId), this.form = new(n(253))({
                    id: this.formId
                }), e.attachments && i.call(this, e.attachments), this.listenTo(this.form, "change:recipients", a)
            },
            dispose: function() {
                this.form.release()
            },
            renderDecorate: function() {
                this.model && this.form.addRecipient(this.model), this.whenInserted().done(a.bind(this))
            }
        })
    },
    490: function(e, t, n) {
        "use strict";
        var i = n(59).trackClickThrough;
        e.exports = n(54).extend(n(140), {
            tagName: "span",
            className: "promotedBadge",
            template: n(2591),
            events: {
                "click .promotedBadge__promoter": "onPromoterClick"
            },
            defaults: {
                size: "small",
                dialogType: "userBadge",
                dialogSelector: ".promotedBadge__promoter"
            },
            getTemplateData: function(e) {
                var t = this.getContextData();
                return e.promoted_by = t.promoted_by, e
            },
            dialogSubviewArgs: function() {
                var e = this.getContextData();
                return {
                    resource_id: e.promoted_by.id
                }
            },
            onPromoterClick: function() {
                var e = this.getContextData();
                n(82).trackEvent("sponsorClickThrough", e), i({
                    context: e,
                    target: e.promoted_by_urn
                })
            }
        })
    },
    492: function(e, t, n) {
        "use strict";

        function i(e) {
            "never" !== this.options.showPlayButton ? (e.preventDefault(), this.getElement("playButton").click()) : n(59).trackClickThrough({
                context: this.getContextData(),
                target: this.model.id
            })
        }

        function a() {
            this.toggleState("playing", n(67).isSourcePlaying(this.tracks))
        }
        var s, o = n(119).types,
            r = o.TRACK,
            l = o.ARTIST,
            u = (s = {}, s[l] = n(52).t("Artist station"), s[r] = n(52).t("Track station", null, {
                context: "noun phrase"
            }), s);
        e.exports = n(54).extend(n(68).withOptions("stationTile"), {
            className: "stationTile",
            template: n(2645),
            css: n(3024),
            defaults: {
                showPlayButton: "never"
            },
            ModelClass: n(119),
            requiredAttributes: ["title", "artwork_url"],
            events: {
                "click .stationTile__artworkLink": i
            },
            element2selector: {
                playButton: ".stationTile__playButton .sc-button"
            },
            states: {
                playing: "m-playing"
            },
            setup: function(e) {
                var t = e.resource_id;
                this.tracks = new(n(212))(null, {
                    resource_id: t
                }), this.listenTo(n(57), "audio:play audio:pause", a), a.call(this)
            },
            dispose: function() {
                this.tracks.release()
            },
            getTemplateData: function(e) {
                e.stationType = u[e.type], e.renderPlayButton = "never" !== this.options.showPlayButton
            },
            renderDecorate: function() {
                a.call(this)
            }
        })
    },
    494: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(143).render(e, {
                useSIUnits: !0
            })
        }
        e.exports = n(54).extend({
            template: n(2648),
            css: n(3027),
            ModelClass: n(75),
            className: "soundStats sc-ministats-group",
            tagName: "ul",
            requiredAttributes: {
                playlist: ["likes_count", "reposts_count"],
                sound: ["playback_count", "likes_count", "reposts_count", "download_count"]
            },
            observedAttributes: {
                sound: ["comment_count", "commentable"]
            },
            defaults: {
                size: "small",
                minimal: !1,
                show_playback_count: !0,
                show_likes_count: !0,
                show_reposts_count: !0,
                show_comment_count: !0,
                show_download_count: !0,
                show_more_stats: !0
            },
            setup: function(e) {
                var t = e.resource_type,
                    i = "sound" === t ? n(52).t("Track stats") : n(52).t("Playlist stats");
                this.$el.attr("aria-label", i)
            },
            getTemplateData: function(e) {
                var t = this.options,
                    a = t.resource_type,
                    s = "small" === t.size,
                    o = "sound" === a,
                    r = "playlist" === a,
                    l = e.likes_count,
                    u = e.playback_count,
                    c = e.reposts_count,
                    d = e.comment_count,
                    p = e.download_count;
                return e.is_mine = n(55).get("me").owns("sound", e), e.is_small = s, e.network_type = r ? "playlistNetwork" : "listenNetwork", e.ministats_class = "sc-ministats sc-ministats-" + t.size, e.show_likes_count = l && t.show_likes_count, e.show_playback_count = u && t.show_playback_count, e.show_reposts_count = c && t.show_reposts_count, e.show_comment_count = d && t.show_comment_count, e.show_download_count = p && t.show_download_count, e.show_more_stats = e.is_mine && o && t.show_more_stats, e.shortTexts = {
                    likes_count: i(l),
                    playback_count: i(u),
                    reposts_count: i(c),
                    comment_count: i(d),
                    download_count: i(p)
                }, e.fullTexts = {
                    likes_count: n(52).tp("1 like", "%d likes", l),
                    playback_count: n(52).tp("1 play", "%d plays", u),
                    reposts_count: n(52).tp("1 repost", "%d reposts", c),
                    comment_count: n(52).tp("1 comment", "%d comments", d),
                    download_count: n(52).tp("1 download", "%d downloads", p)
                }, e
            }
        })
    },
    495: function(e, t, n) {
        "use strict";
        e.exports = n(269).extend(n(68).withOptions("streamSidebar"), {
            className: "streamSidebar",
            defaults: {
                adZone: "dashboxStream"
            },
            template: function() {
                var e = n(55).get("me"),
                    t = n(63).isLoggedIn(),
                    i = t && e.hasTracks(),
                    a = this.options,
                    s = a.adZone,
                    o = a.resource_id,
                    r = n(114).subview;
                return n(3).flatten([r(n(486), {
                    adZone: s
                }), i && r(n(1040)), t && [r(n(1666), {
                    resource_id: o
                }), r(n(1038), {
                    resource_id: o,
                    includePlaylists: !1
                }), r(n(1661), {
                    type: "plays"
                })], r(n(629))]).filter(Boolean).join("")
            }
        })
    },
    496: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.source.getCurrentSound(),
                t = this.subviews.waveform;
            this.toggleState("empty", !e), !e || t && e.id === this._currentSoundId || (a.call(this, e), this._currentSoundId = e.id)
        }

        function a(e) {
            var t = n(3).defaults({
                resource_id: e.resource_id,
                resource_type: "sound"
            }, n(3).pick(this.options, Object.keys(n(402).prototype.defaults)));
            s.call(this, n(402), t, "waveform", this.getElement("waveform"))
        }

        function s(e, t, n, i) {
            var a = this.subviews[n];
            a && (a._dispose(), this.removeSubview(a));
            var s = this.addSubview(new e(t), n);
            s.render().$el.appendTo(i)
        }

        function o() {
            i.call(this)
        }

        function r() {
            i.call(this)
        }

        function l(e, t) {
            var n = e.getCurrentSound();
            return !n || n.id !== t
        }
        e.exports = n(54).extend({
            className: "waveformWrapper",
            css: n(3102),
            template: n(2726),
            _currentSoundId: null,
            defaults: n(3).clone(n(402).prototype.defaults),
            states: {
                empty: "m-empty"
            },
            element2selector: {
                waveform: ".waveformWrapper__waveform"
            },
            setup: function(e) {
                var t = e.resource_type,
                    i = e.resource_id;
                switch (t) {
                    case "playlist":
                        this.source = this.addDataSource(new(n(86))({
                            resource_id: i
                        }), {
                            requiredAttributes: ["tracks"]
                        }), this.listenTo(this.source, "internal:play", o);
                        break;
                    case "sound":
                        this.source = this.addDataSource(new(n(66))({
                            resource_id: i
                        }));
                        break;
                    case "station":
                        this.source = this.addDataSource(new(n(212))(null, {
                            resource_id: i
                        })), this.listenTo(this.source, "change:currentSound", r)
                }
            },
            shouldViewRerender: function() {
                return "playlist" === this.options.resource_type ? l(this.source, this._currentSoundId) : !0
            },
            getTemplateData: function(e) {
                return e["is_" + this.options.resource_type] = !0, e
            },
            renderDecorate: function() {
                i.call(this)
            }
        })
    },
    549: function(e, t, n) {
        "use strict";

        function i(e) {
            e.forEach(a)
        }

        function a(e) {
            e.View && (e.isView = !0)
        }
        e.exports = new(n(21))({
            merge: {
                defaults: {
                    cornerStyle: "square"
                },
                css: [n(2758)],
                className: "moreActions sc-list-nostyle sc-border-box"
            },
            override: {
                template: n(2380)
            },
            after: {
                setup: function(e) {
                    this.$el.toggleClass("moreActionsRounded", "round" === e.cornerStyle)
                }
            },
            around: {
                getTemplateData: function(e, t) {
                    return t = e(t) || t, t.items.forEach(i), t
                }
            }
        })
    },
    550: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("restoreToSound"),
                t = this.restorableModel();
            e === t.resource_type + t.resource_id && (n(55).set("restoreToSound", null, {
                silent: !0
            }), this.whenInserted().done(this.scrollIntoView.bind(this, {
                position: "top"
            })))
        }
        e.exports = new(n(21))({
            requirePrototype: n(54).prototype,
            defaults: {
                shouldListenToRestore: function() {
                    return !0
                },
                restorableModel: function() {
                    return this.model
                }
            },
            after: {
                setup: function() {},
                renderDecorate: function() {
                    i.call(this), this.shouldListenToRestore() && this.listenTo(n(55), "restoreToSound", i)
                },
                teardown: function() {
                    this.shouldListenToRestore() && this.stopListening(n(55), "restoreToSound")
                }
            }
        })
    },
    551: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.getState("disabled");
            return e ? n(52).t("Unavailable", {}) : this.getState("buffering") ? n(52).t("Buffering") : this.getState("playing") ? n(52).t("Pause") : n(52).t("Play")
        }
        e.exports = new(n(21))(n(68).withOptions("playButton"), n(88), n(149), n(471), {
            requires: ["isPlaying", "isDisabled", "isBuffering"],
            after: {
                setup: function(e) {
                    var t = e.size;
                    this.toggleState("stretch", "stretch" === t), this.synchronizeStates()
                }
            },
            before: {
                renderDecorate: function() {
                    this.synchronizeStates()
                }
            },
            merge: {
                css: [n(2759)],
                className: "sc-button-play playButton",
                defaults: {
                    responsive: !1
                },
                states: {
                    playing: "sc-button-pause",
                    buffering: "sc-button-buffering",
                    stretch: "m-stretch",
                    disabled: function(e) {
                        this.$el.attr({
                            disabled: e
                        })
                    }
                }
            },
            override: {
                template: function() {
                    return ""
                },
                loadingTemplate: null
            },
            synchronizeStates: function() {
                if (!this.disposed) {
                    this.toggleState("playing", this.isPlaying()).toggleState("buffering", this.isBuffering()).toggleState("disabled", this.isDisabled());
                    var e = i.call(this).toString();
                    this.$el.attr("title", e).html(e)
                }
            },
            isAudiblePlayable: function(e) {
                switch (e.resource_type) {
                    case "sound":
                        return e.isPlayable() && !e.isProcessing();
                    case "playlist":
                        return !e.hasDataForPlay() || e.isPlayable() && e.getNumSounds() && !e.isProcessing();
                    default:
                        return !1
                }
            }
        })
    },
    553: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e, t, n) {
                var i, a = e.slice();
                return i = a.splice(t, 1)[0], a.splice(n, 0, i), a
            }

            function a(e) {
                s.call(this, "on"), this._sortableOffset = this._sortableScrollParent.offset()
            }

            function s(e) {
                u[e]("dragover", this._onDragOver)
            }
            var o, r, l, u = t(window.document),
                c = t(window);
            e.exports = new(n(21))({
                _sortingEnabled: !1,
                _shouldEnableSorting: !1,
                _onDragOver: null,
                _stepAnimation: null,
                _debouncedReinitializeSorting: null,
                _sortableScrollParent: null,
                _sortableOffset: null,
                requires: ["editableObject", "listSelector", "listItemSelector"],
                defaults: {
                    onAddItem: n(3).noop,
                    onRemoveItem: n(3).noop,
                    onSortingUpdate: n(3).noop
                },
                applyTo: function(e) {
                    e.element2selector = n(3).assign({}, {
                        list: e.listSelector,
                        "list-items": e.listItemSelector
                    }, e.element2selector), e._debouncedReinitializeSorting = n(3).debounce(e.reinitializeSorting, 50)
                },
                after: {
                    onAdd: function() {
                        this._shouldBeSorting() && this.reinitializeSorting(), this.onAddItem()
                    },
                    onRemove: function() {
                        this.disposed || (this._shouldBeSorting() && this.reinitializeSorting(), this.onRemoveItem())
                    },
                    onCollectionReset: function() {
                        this.saveResetOrder()
                    },
                    addSubview: function() {
                        this._shouldBeSorting() && this._debouncedReinitializeSorting()
                    },
                    removeSubview: function() {
                        this._shouldBeSorting() && this._debouncedReinitializeSorting()
                    }
                },
                enableSorting: function() {
                    var e = this;
                    if (this.resetElementCache(), !this.getElement("list-items").length) return void(this._shouldEnableSorting = !0);
                    var t = {
                        forcePlaceholderSize: !0
                    };
                    this.dragHandleSelector && (t.handle = this.dragHandleSelector), this.saveResetOrder(), this.getElement("list").sortable(t).sortable("enable").on("sortupdate", this.onSortUpdate.bind(this)), this.getElement("list-items").on("dragstart.h5s", a.bind(this)).on("dragend.h5s", r.bind(this)), this._sortingEnabled = !0, this._onDragOver = this._onDragOver || o.bind(this), this._stepAnimation = this._stepAnimation || l.bind(this), this.whenInserted().done(function() {
                        var t = e.$el.closest(".g-scrollable-inner"),
                            n = e.$el.closest(".modal");
                        e._sortableScrollParent = t.length ? t : n.length ? n : u
                    })
                },
                disableSorting: function() {
                    this.getElement("list").sortable("destroy").off("sortupdate"), this._sortingEnabled = !1, this._shouldEnableSorting = !1
                },
                reinitializeSorting: function() {
                    this.resetElementCache(), this.disableSorting(), this.enableSorting()
                },
                onSortUpdate: function(e, t) {
                    var n, a = t.item.index(),
                        s = t.item.data("order");
                    n = i(this.getResetOrder(), s, a), this.resetElementCache(), this.editableObject.reorder(n), this.saveResetOrder(), this.onSortingUpdate.apply(this, arguments)
                },
                resetOrder: function() {
                    return this.addDeferred(this.editableObject.resetOrder())
                },
                saveOrder: function() {
                    return this.addDeferred(this.editableObject.saveOrder().done(this.saveResetOrder.bind(this)).fail(this.resetOrder.bind(this)))
                },
                saveResetOrder: function() {
                    this.disposed || (this.getElement("list-items").each(function(e) {
                        t(this).data("order", e)
                    }), this.editableObject.saveResetOrder())
                },
                getResetOrder: function() {
                    return this.editableObject.getResetOrder()
                },
                _shouldBeSorting: function() {
                    return this._sortingEnabled || this._shouldEnableSorting
                }
            });
            ! function() {
                function e(e) {
                    var t, n, i = e._sortableScrollParent,
                        a = i !== u && "HTML" !== i[0].tagName;
                    return a ? (t = i[0].offsetHeight, n = e._sortableOffset.top) : (t = c.height(), n = u.scrollTop()), {
                        top: n,
                        bottom: t + n
                    }
                }

                function t(e) {
                    !a && !i || n || (n = window.requestAnimationFrame(e))
                }
                var n = null,
                    i = 0,
                    a = 0,
                    d = 100,
                    p = .5,
                    h = .15;
                r = function(e) {
                    a = 0, s.call(this, "off")
                }, o = function(n) {
                    var i = n.originalEvent.pageY,
                        s = e(this);
                    a = Math.min(0, i - s.top - d) || Math.max(0, i - s.bottom + d), a *= p, t(this._stepAnimation)
                }, l = function() {
                    if (n = null, this.disposed) return void(i = a = 0);
                    var e = this._sortableScrollParent;
                    i = i + (a - i) * h | 0, e.scrollTop(e.scrollTop() + i), t(this._stepAnimation)
                }
            }()
        }).call(t, n(1))
    },
    606: function(e, t, n) {
        "use strict";

        function i() {
            n(55).get("router").navigateToRoute("messages", [this.model.id], {
                trigger: !0
            })
        }
        e.exports = n(54).extend({
            template: n(798),
            css: n(862),
            className: "conversationBadge",
            ModelClass: n(160),
            events: {
                click: i
            },
            getTemplateData: function(e) {
                var t = this.model.isFromSoundCloud(),
                    i = this.model.getRecipient();
                return n(3).assign(e, {
                    from: i,
                    isFromSoundCloud: t,
                    shouldBodyBeEscaped: !t,
                    missingUser: "missing_user" === i.kind
                })
            }
        })
    },
    614: function(e, t, n) {
        "use strict";

        function i(e) {
            this.model = new(n(231))({
                title: e.subviewArgs.defaultTitle || ""
            }, {
                startingSounds: n(3).map(e.subviewArgs.soundIds, function(e) {
                    var t = new(n(66))({
                        resource_id: e
                    });
                    return t.release(), t
                })
            }), e.subviewArgs = n(3).defaults({
                formId: this.model.resource_id
            }, e.subviewArgs)
        }

        function a() {
            return this.model.get("sounds").length && this.model.isDirty()
        }

        function s() {
            l(["add_to_set", "confirmation", "cancel"])
        }

        function o() {
            l(["add_to_set", "confirmation", "ok"])
        }
        var r = n(71).prototype,
            l = n(59).trackV0Click,
            u = n(52).t("The playlist is not saved yet. Are you sure you want to close it?");
        e.exports = n(71).extend({
            defaults: {
                Subview: n(638),
                transparentBackground: !0,
                width: 550
            },
            _navigating: !1,
            _navBlockId: null,
            setup: function(e) {
                i.call(this, e), r.setup.apply(this, arguments)
            },
            open: function() {
                var e = this;
                n(71).prototype.open.call(this), this._navigating = !1, this._navBlockId = n(55).get("router").addNavigationBlock(u, function(t) {
                    if (t) {
                        if (window.confirm(u)) return e._navigating = !0, o(), !0;
                        s()
                    }
                    return !1
                }, a.bind(this))
            },
            close: function() {
                var e = this;
                if (this.isOpened) {
                    var t = function() {
                        e.removeDataSource(e.model), e.model.release(), i.call(e, e.options), e.model.hold(), n(55).get("router").removeNavigationBlock(e._navBlockId), r.close.call(e)
                    };
                    !this._navigating && a.call(this) ? n(460).confirm(u).done(t).done(o).fail(s) : t()
                }
            }
        })
    },
    617: function(e, t, n) {
        "use strict";
        var i = n(343).getReleaseLabel;
        e.exports = n(54).extend({
            className: "releaseDataCompact sc-type-light sc-font-light",
            tagName: "span",
            css: n(2957),
            template: n(2577),
            ModelClass: n(86),
            requiredAttributes: ["set_type", "release_date"],
            defaults: {
                showYearOnly: !1
            },
            getTemplateData: function(e) {
                var t = e.release_date,
                    n = e.set_type,
                    a = this.options.showYearOnly;
                if (n) {
                    var s = a ? "" : i(n),
                        o = t && new Date(t).getFullYear();
                    e.releaseData = {
                        title: s,
                        year: o
                    }
                }
                return e
            }
        })
    },
    618: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "playlistTrackCount",
            ModelClass: n(86),
            requiredAttributes: ["track_count", "duration"],
            defaults: {
                showDuration: !0,
                size: "large"
            },
            template: function() {
                var e = this.options,
                    t = this.model;
                return n(114).subview(n(573), {
                    showDuration: e.showDuration,
                    size: e.size,
                    trackCount: t.get("track_count"),
                    duration: t.get("duration")
                })
            }
        })
    },
    621: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [10, 10],
                serviceKey: "email",
                serviceName: "Email",
                serviceBaseURL: "mailto:"
            },
            buttonLabels: {
                "default": function() {
                    return n(52).t("Share via email")
                }
            },
            getHrefData: function() {
                var e = this.model.attributes;
                return {
                    subject: (e.username || e.title || e.name) + " - SoundCloud",
                    body: this.getShareURL()
                }
            },
            getHref: function() {
                var e = this.getHrefData();
                return this.options.serviceBaseURL + n(62).stringify({
                    query: e
                })
            },
            openPopup: function() {
                var e = n(195).prototype.openPopup.apply(this, arguments);
                return window.setTimeout(e.close.bind(e), 1e3), e
            }
        })
    },
    622: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [550, 300],
                serviceKey: "facebook",
                serviceName: "Facebook",
                serviceBaseURL: "https://www.facebook.com/sharer/sharer.php"
            },
            getHrefData: function() {
                return {
                    u: this.getShareURL()
                }
            }
        })
    },
    623: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [600, 600],
                serviceKey: "googleplus",
                serviceName: "Google+",
                serviceBaseURL: "https://plus.google.com/share"
            },
            getHrefData: function() {
                return {
                    url: this.getShareURL()
                }
            }
        })
    },
    624: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                return e.type = this.options.share_type, this.model.getShareURL(e)
            }

            function a() {
                this.getElement("linkInput").val(i.call(this))
            }

            function s(e) {
                e !== this._listeningToModelEvents && (this._listeningToModelEvents = e, e ? this.listenTo(this.model, "time", this.updateFromField).listenTo(this.model, "seeked", this.updateFromField).listenTo(this.model, "change:secret_token", a) : this.stopListening(this.model))
            }
            var o = n(59).trackShareClick,
                r = 500,
                l = ["user", "sharing"];
            e.exports = n(54).extend(n(165), {
                template: n(2615),
                css: n(2995),
                className: "shareLink sc-clearfix",
                requiredAttributes: {
                    sound: l,
                    playlist: l
                },
                defaults: {
                    share_type: null,
                    showPositionOption: !0
                },
                states: {
                    fromDisabled: "m-fromDisabled",
                    fromChecked: "m-fromChecked",
                    showPositionOption: "m-showPositionOption"
                },
                element2selector: {
                    linkInput: ".shareLink__field",
                    fromInput: ".shareLink__fromField"
                },
                events: {
                    "click .shareLink__field": "onLinkFieldClick",
                    "copy .shareLink__field": "onLinkFieldCopy",
                    "keyup .shareLink__fromField": "onFromChange"
                },
                bubbleEvents: {
                    "checkbox:change:share_from": "onFromCheck"
                },
                _listeningToModelEvents: !1,
                setup: function(e) {
                    var t = e.resource_type,
                        n = e.showPositionOption,
                        i = "sound" === t;
                    this.toggleState("fromDisabled", !i).toggleState("showPositionOption", n), s.call(this, !0)
                },
                renderDecorate: function() {
                    var e = this;
                    n(537).makeReadOnly(this.getElement("linkInput")), this.isAudible && this.updateFromField(), this._logCopyOnce = n(3).once(function() {
                        o({
                            click_target: "link",
                            click_object: e.model.getUrn(),
                            context: e.getContextData()
                        })
                    }), this.whenInserted().done(function() {
                        e.addTimeout(function() {
                            e.$el && e.getElement("linkInput").select()
                        }, 101)
                    })
                },
                updateFromField: n(3).throttle(function() {
                    this.disposed || this.getState("fromDisabled") || this.getElement("fromInput").val(n(52).dateTimeHelper.timecode(this.model.currentTime()))
                }, r),
                onLinkFieldClick: function(e) {
                    t(e.target).select()
                },
                onLinkFieldCopy: function(e) {
                    this._logCopyOnce()
                },
                onFromCheck: function(e) {
                    var t, a, o = this.getElement("linkInput"),
                        r = this.getElement("fromInput"),
                        l = n(52).dateTimeHelper.stringToTime(r.val()),
                        u = e.data.checked;
                    return this.toggleState("fromChecked", u), s.call(this, u), u && 0 === l ? void r.focus() : void(u ? this.onFromChange() : (t = n(62).parse(o.val()), t.fragment = null, a = i.call(this, {
                        permalinkUrl: n(62).stringify(t),
                        time: null
                    }), o.val(a)))
                },
                onFromChange: function() {
                    var e = this.getElement("fromInput"),
                        t = this.getElement("linkInput"),
                        a = n(52).dateTimeHelper.stringToTime(e.val()),
                        s = {
                            permalinkUrl: t.val(),
                            time: e.val()
                        };
                    this.getState("fromChecked") && 0 !== a && t.val(i.call(this, s))
                },
                getTemplateData: function(e) {
                    return e.share_url_link = i.call(this), e
                }
            })
        }).call(t, n(1))
    },
    625: function(e, t, n) {
        "use strict";

        function i() {
            return n(533).isUsedLanguage("zh") ? "china" : n(533).isUsedLanguage("ru") || n(533).isUsedLanguage("uk") ? "russia" : "global"
        }
        var a = {
            global: [n(627), n(622), n(626), n(623), n(1649), n(621)],
            china: [n(627), n(622), n(626), n(623), n(1654), n(621)],
            russia: [n(627), n(622), n(626), n(623), n(1653), n(621)]
        };
        e.exports = n(54).extend(n(165), {
            template: n(2619),
            css: n(2997),
            className: "socialButtonsPanel",
            defaults: {
                share_type: null,
                maxButtonsToShow: null
            },
            setup: function() {
                this.buttonOrder = n(3).clone(a)
            },
            getTemplateData: function(e) {
                var t = this.options.maxButtonsToShow,
                    a = this.buttonOrder[i()];
                return e.buttons = t ? n(3).first(a, t) : a, e
            }
        })
    },
    626: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.username || e.user && e.user.username || e.name
        }
        e.exports = n(195).extend({
            defaults: {
                popupSize: [450, 450],
                serviceKey: "tumblr",
                serviceName: "Tumblr"
            },
            setup: function() {
                this.options.serviceBaseURL = "https://www.tumblr.com/widgets/share/tool", n(195).prototype.setup.apply(this, arguments)
            },
            getHrefData: function() {
                var e, t = this.model.attributes,
                    a = this.getShareURL(),
                    s = ["SoundCloud", "music", i(t)].concat(n(189).extract(t).slice(0, 4)).join(",");
                return e = this.isAudible ? {
                    canonicalUrl: this.getShareURL({
                        ignoreContext: !0
                    }),
                    posttype: "audio",
                    tags: s,
                    caption: "(<a href='" + a + "'>" + n(20).Utils.escapeExpression(i(t)) + "</a>)"
                } : {
                    url: a,
                    posttype: "link",
                    title: n(52).t("[[name]] on SoundCloud", {
                        name: i(t)
                    }).toString()
                }
            }
        })
    },
    627: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [700, 251],
                serviceKey: "twitter",
                serviceName: "Twitter",
                serviceBaseURL: "https://twitter.com/share"
            },
            setup: function() {
                this.webProfilesCollection = new(n(450))(null, {
                    userId: this.isAudible ? this.model.get("user_id") : this.model.id
                }), this.hasData(this.webProfilesCollection) || this.webProfilesCollection.fetch().done(this.rerender.bind(this)), n(195).prototype.setup.apply(this, arguments)
            },
            dispose: function() {
                this.webProfilesCollection.release()
            },
            getTwitterHandle: function() {
                var e = this.webProfilesCollection.getProfileByName("twitter");
                return e ? e.get("username") : null
            },
            getHrefData: function() {
                var e, t, i, a = this.model.attributes,
                    s = this.getTwitterHandle(),
                    o = ["soundcloud"];
                return s ? (e = "@" + s, o.push(s)) : e = this.isAudible ? a.user.username : a.username || a.name, i = {
                    title: a.title,
                    name: e
                }, t = this.isAudible ? i.title.length > 50 ? n(52).t("â€˜[[[title]]]â€™ on #SoundCloud #np", i) : n(52).t("Have you heard â€˜[[[title]]]â€™ by [[[name]]] on #SoundCloud? #np", i) : n(52).t("Hear and follow [[[name]]] on #SoundCloud", i), {
                    url: this.getShareURL(),
                    text: t.toString(),
                    related: o.join(",")
                }
            }
        })
    },
    629: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0Click,
            a = "mobile-apps-dismissed",
            s = new(n(105))("already-seen");
        e.exports = n(118).extend({
            defaults: {
                userName: "",
                audibleName: ""
            },
            Subview: n(1662),
            moduleClassName: "mobileApps",
            moreText: n(52).t("Dismiss"),
            title: n(52).t("Go mobile"),
            css: [n(1163), n(3e3)],
            events: {
                "click .mobileApps__dismiss": "onClickDismiss"
            },
            element2selector: n(3).defaults({
                dismiss: ".sidebarHeader__more"
            }, n(118).prototype.element2selector),
            viewLocation: null,
            setup: function() {
                this.viewLocation = this.options.userName ? "user" : this.options.audibleName ? "audible" : "stream", this.subviewArgs = {
                    abtest_identifier: this.title,
                    view_location: this.viewLocation
                }, s.get(a) && this.hide()
            },
            renderDecorate: function() {
                n(118).prototype.renderDecorate.call(this), this.getElement("dismiss").addClass("mobileApps__dismiss sc-ir")
            },
            createSubview: function() {
                s.get(a) || n(118).prototype.createSubview.call(this)
            },
            onClickDismiss: function() {
                s.set(a, 1), this.hide(), i(["go_mobile", "dismiss", this.viewLocation, this.title])
            }
        })
    },
    630: function(e, t, n) {
        "use strict";

        function i(e) {
            return "custom" === e
        }

        function a() {
            this.finishSignin({
                signup: !0,
                provider: "identifier"
            })
        }
        var s = "addUserInformation",
            o = {
                onAddUserInformation: a
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: o
        }), {
            className: "addUserInformation",
            template: n(811),
            getMainTextField: function() {
                return this.subviews.username
            },
            getTemplateData: function() {
                return {
                    showCustomGender: i,
                    actionOnEnter: s
                }
            }
        })
    },
    631: function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            return function(a) {
                var s = this;
                a.preventDefault(), o.call(this, i), t().then(e).then(function() {
                    return s.model.performAction(n)
                }, function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                        t = e.error;
                    return t && s.showErrorMessage({
                        error: t,
                        container: s.getElement("socialValidation")
                    })
                })
            }
        }

        function a(e) {
            e.preventDefault(), u(n(103).need_help), this.goToStep(n(81).needHelp)
        }

        function s() {
            o.call(this, "identifier")
        }

        function o(e) {
            u(n(103).start, {})
        }

        function r(e) {
            var t = e.error,
                i = e.status,
                a = e.type;
            if (t) this.showErrorMessage({
                error: t
            });
            else switch (i) {
                case v:
                    this.goToStep(n(81).signinWithPassword);
                    break;
                case _:
                    a === g && this.goToStep(n(81).signupWithEmail), a === m && this.showErrorMessage({
                        error: n(52).t("That profile url does not exist")
                    })
            }
        }

        function l(e) {
            return function(t) {
                var i = void 0,
                    a = t.error,
                    s = this.getTokenFromResponse(t);
                a && u(n(103).sign_in_error, {
                    target: e
                }), a === y ? i = n(52).t("We are having trouble connecting to [[provider]]", {
                    provider: e
                }) : a !== b && (i = this.getErrorMessage(a)), this.showErrorMessage({
                    error: i,
                    container: this.getElement("socialValidation")
                }), s ? this.finishSignin({
                    token: s,
                    provider: e
                }) : a === b && this.goToStep("google" === e ? n(81).signupWithGoogle : n(81).signupWithFacebook)
            }
        }
        var u = n(59).trackAuthEvent,
            c = n(116).loadFacebookSDK,
            d = n(116).getFacebookToken,
            p = n(116).getFacebookLoginLink,
            h = n(216).loadGoogleAuthSDK,
            f = n(216).getGoogleToken,
            g = n(356).EMAIL,
            m = n(356).PERMALINK,
            v = n(355).IN_USE,
            _ = n(355).AVAILABLE,
            y = n(110).INVALID_PROVIDER_TOKEN,
            b = n(110).NOT_FOUND,
            w = {
                onCheckIdentifier: r,
                onSigninWithGoogle: l("google"),
                onSigninWithFacebook: l("facebook")
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: w
        }), {
            className: "signinInitialStep",
            css: n(876),
            template: n(812),
            events: {
                "click button.sc-button-google": i(f, h, "signinWithGoogle", "google"),
                "click button.sc-button-facebook": i(d, c, "signinWithFacebook", "facebook"),
                "click .signinForm__checkIdentifierCTA": s,
                "click .signinInitialStep__needHelp": a
            },
            states: {
                "alt-signin-link": "m-alt-signin-link",
                "social-signin-visible": "m-social-signin-visible",
                "fb-sdk-blocked": "m-fb-sdk-blocked"
            },
            isAltLabelUsed: !1,
            element2selector: {
                socialValidation: ".signin__validation"
            },
            getMainTextField: function() {
                return this.subviews.identifier
            },
            setup: function() {
                this.toggleState("social-signin-visible", !0)
            },
            renderDecorate: function() {
                var e = this,
                    t = c(),
                    i = h();
                n(56).settled([t, i]).always(function() {
                    var n = "resolved" !== t.state();
                    e.toggleState("fb-sdk-blocked", n)
                })
            },
            getTemplateData: function() {
                return {
                    fbLoginLink: p()
                }
            }
        })
    },
    632: function(e, t, n) {
        "use strict";

        function i() {
            s(n(103).forgot_email)
        }

        function a(e) {
            e.preventDefault(), s(n(103).forgot_password), this.goToStep(n(81).promptPasswordReset)
        }
        var s = n(59).trackAuthEvent;
        e.exports = n(54).extend(n(111), {
            className: "needHelpSignin",
            template: n(813),
            events: {
                "click .needHelpSignin__email": i,
                "click .needHelpSignin__password": a
            }
        })
    },
    633: function(e, t, n) {
        "use strict";

        function i(e) {
            e.preventDefault(), a(n(103).reset_email_continue), this.goToStep(n(81).signinWithPassword)
        }
        var a = n(59).trackAuthEvent;
        e.exports = n(54).extend(n(111), {
            className: "resetEmailSent",
            css: n(877),
            template: n(816),
            events: {
                "click .resetEmailSent__continue": i
            },
            requiredAttributes: ["reset_password_addresses"],
            getTemplateData: function() {
                var e = this.model.get("reset_password_addresses"),
                    t = !n(3).isEmpty(e);
                return {
                    addressesAreDisplayed: t,
                    addresses: t && e.map(n(20).Utils.escapeExpression).join("<br>")
                }
            }
        })
    },
    634: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.getTokenFromResponse(e),
                i = e.error,
                a = "identifier";
            t && this.finishSignin({
                token: t,
                provider: a
            }), i && s(n(103).sign_in_error, {
                target: a
            }), i === o ? this.goToStep(n(81).promptPasswordResetRequired) : i && this.showErrorMessage({
                error: i
            })
        }

        function a(e) {
            e.preventDefault(), this.goToStep(n(81).promptPasswordReset)
        }
        var s = n(59).trackAuthEvent,
            o = n(110).PASSWORD_RESET_REQUIRED,
            r = {
                onSigninWithPassword: i
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: r
        }), {
            className: "signinWithPassword",
            template: n(817),
            events: {
                "click .signinWithPassword__promptPassword": a
            },
            getMainTextField: function() {
                return this.subviews.password
            }
        })
    },
    635: function(e, t, n) {
        "use strict";

        function i(e) {
            e.preventDefault()
        }

        function a(e) {
            e.stopPropagation(), c.call(this, e.data.step)
        }

        function s(e) {
            e.stopPropagation(), l.call(this, e.data)
        }

        function o(e) {
            e.stopPropagation(), r.call(this, e.data.token)
        }

        function r(e) {
            var t = this.options.onToken;
            e && t && h(t) && t.call(null, e)
        }

        function l(e) {
            var t = e.token,
                i = e.signup,
                a = e.provider,
                s = this.options.onSigninFinish;
            t && r.call(this, t), this.isSigninFinished = !0, this.$el.submit(), v(i ? n(103).sign_up_success : n(103).sign_in_success, {
                target: a
            }), s && h(s) && s(i)
        }

        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                t = e.signinArgs,
                i = e.onCancel,
                a = d({}, t, {
                    onSigninFinish: f(t.onSigninFinish || g, function(e, t) {
                        s.close(), e(t)
                    })
                }),
                s = new(n(71))({
                    Subview: _,
                    subviewArgs: a,
                    height: 570,
                    width: 450,
                    stayOpenOnNavigate: !0
                });
            s.on(n(71).Events.CLOSED, function() {
                o && !o.isSigninFinished && h(i) && (v(n(103).abort), i())
            }), s.open();
            var o = s.getContentView()
        }

        function c(e) {
            var t = this,
                n = 350,
                i = this.subviews[e];
            m(e), i && this.currentStep !== e && (this.getElement("steps").hide(), i.$el.parent().show(), i.focus(), this.addDeferred(window.setTimeout(function() {
                t.currentStep === e && i.focus()
            }, n)), this.currentStep = e)
        }
        var d = n(3).extend,
            p = n(3).mapObject,
            h = n(3).isFunction,
            f = n(3).wrap,
            g = n(3).noop,
            m = (n(3).has, n(59).trackAuthFunnel),
            v = n(59).trackAuthEvent,
            _ = e.exports = n(54).extend(n(111), {
                tagName: "form",
                className: "signinForm",
                css: n(442),
                template: n(818),
                element2selector: {
                    steps: ".signinForm__step"
                },
                defaults: {
                    onToken: null,
                    onSigninFinish: null,
                    startStep: n(81).initial
                },
                events: {
                    submit: i
                },
                bubbleEvents: {
                    "signin:go-to-step": a,
                    "signin:set-token": o,
                    "signin:finish-signin": s
                },
                currentStep: null,
                isSigninFinished: !1,
                setup: function(e) {
                    e.startStep
                },
                renderDecorate: function() {
                    c.call(this, this.options.startStep)
                },
                getTemplateData: function() {
                    var e;
                    return {
                        steps: p((e = {}, e[n(81).initial] = [n(631)], e[n(81).signinWithPassword] = [n(634)], e[n(81).signupWithEmail] = [n(637)], e[n(81).signupWithGoogle] = [n(388), {
                            provider: "google",
                            button: "signupWithGoogle"
                        }], e[n(81).signupWithFacebook] = [n(388), {
                            provider: "facebook",
                            button: "signupWithFacebook"
                        }], e[n(81).addUserInformation] = [n(630)], e[n(81).promptPasswordReset] = [n(385)], e[n(81).promptPasswordResetRequired] = [n(385), {
                            requirePasswordChange: !0
                        }], e[n(81).needHelp] = [n(632)], e[n(81).resetEmailSent] = [n(633)], e), function(e, t) {
                            var n = e[0],
                                i = e[1];
                            return {
                                StepView: n,
                                stepArgs: d({
                                    key: t
                                }, i)
                            }
                        })
                    }
                }
            }, {
                hashFn: function() {
                    return 1
                },
                openSigninModal: u
            })
    },
    636: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return function() {
                var i = this;
                if (this.options.provider === e) {
                    var a = this.rerender.bind(this);
                    t({
                        size: 300
                    }).then(function(e) {
                        return i.userData = e, n(87).load(e.picture_url)
                    }).then(a, a)
                }
            }
        }
        var a = n(216).getCurrentGoogleUser,
            s = n(116).getCurrentFacebookUser,
            o = {
                onSigninWithGoogle: i("google", a),
                onSigninWithFacebook: i("facebook", s)
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: o
        }), {
            className: "signupUserBadge",
            css: n(879),
            template: n(819),
            defaults: {
                provider: ""
            },
            setup: function() {
                this.userData = null
            },
            getTemplateData: function() {
                return {
                    userData: this.userData,
                    artworkPlaceholderClass: n(87).getPlaceholderClass(this.options.resource_id)
                }
            }
        })
    },
    637: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this,
                i = this.getTokenFromResponse(e),
                s = e.error,
                r = e.validation_errors;
            if (i && (this.setToken(i), this.goToStep(n(81).addUserInformation)), s && !r) o(n(103).sign_up_error, {
                target: "email"
            }), this.showErrorMessage({
                error: s
            });
            else if (r) {
                var l = Object.keys(r);
                l.forEach(function(e) {
                    o(n(103).sign_up_error, {
                        target: e
                    }), a.call(t, r, e)
                })
            }
        }

        function a(e, t) {
            var i = e[t];
            if ("minimum_age_required" === t) {
                var a = n(52).tp("You need to be at least 1 year old to create an account in this region.", "You need to be at least %d years old to create an account in this region.", parseInt(i, 10));
                this.showErrorMessage({
                    error: a,
                    control: this.subviews.age
                })
            } else this.showErrorMessage({
                error: i
            })
        }
        var s = n(61).getRoute,
            o = n(59).trackAuthEvent,
            r = {
                onSignupWithEmail: i
            };
        e.exports = n(54).extend(n(111).withOptions({
            actionHandlers: r
        }), {
            className: "signupWithEmail",
            template: n(820),
            element2selector: {
                signUpValidation: ".signupWithEmail__validation"
            },
            getMainTextField: function() {
                return this.subviews.password
            },
            getTemplateData: function() {
                var e = s("pages", "terms-of-use"),
                    t = s("pagesPages", "privacy"),
                    i = n(52).t('I agree to the <a href="[[termsHref]]" target="_blank">Terms of use</a> and <a href="[[privacyHref]]" target="_blank">Privacy policy</a>.', {
                        termsHref: e,
                        privacyHref: t
                    });
                return {
                    acceptTermsLabel: i
                }
            }
        })
    },
    638: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "addToPlaylistTabs",
            template: n(2628),
            defaults: {
                formId: null,
                soundIds: null,
                defaultTitle: null,
                startingTab: "add",
                tabs: [{
                    id: "add",
                    name: n(52).t("Add to playlist", null, {
                        context: "indefinite"
                    }),
                    subview: n(1672),
                    filter: function() {
                        return n(55).get("me").hasPlaylists()
                    }
                }, {
                    id: "create",
                    name: function() {
                        return n(52).t("Create a playlist")
                    },
                    subview: n(1597)
                }]
            },
            getTemplateData: function(e) {
                e.tabs = this.options.tabs.filter(function(e) {
                    return !e.filter || e.filter()
                }).map(n(3).clone);
                var t = n(3).findIndex(e.tabs, {
                    id: this.options.startingTab
                });
                return e.activeTabIndex = -1 === t ? 0 : t, e
            }
        })
    },
    649: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2652),
            ModelClass: n(64),
            className: "userStats",
            attributes: {
                "aria-label": "User stats"
            },
            requiredAttributes: ["track_count", "followers_count", "playlist_count"],
            defaults: {
                alwaysShow: !1,
                dark: !1,
                inverted: !1,
                isPromoted: !1,
                showFollowers: !0,
                showLink: !0,
                showSets: !1,
                showSounds: !0,
                size: "small"
            },
            getTemplateData: function(e) {
                var t = this.options,
                    i = t.alwaysShow,
                    a = e.followers_count,
                    s = e.track_count,
                    o = e.playlist_count;
                return e.ministats_class = "sc-ministats sc-ministats-" + t.size, (t.inverted || t.dark) && (e.ministats_class += " sc-ministats-inverted"), e.showFollowers = a && t.showFollowers || i, e.showSounds = s && t.showSounds || i, e.showLink = t.showLink, e.showSets = o && t.showSets, e.showMiniStats = this.hasAnythingToDisplay() || this.options.alwaysShow, e.shortTexts = {
                    followers_count: n(143).render(a, {
                        useSIUnits: !0
                    }),
                    track_count: n(143).render(s),
                    playlist_count: n(143).render(o)
                }, e.fullTexts = {
                    followers_count: n(52).tp("1 follower", "%d followers", a),
                    track_count: n(52).tp("1 track", "%d tracks", s),
                    playlist_count: n(52).tp("1 playlist", "%d playlists", o)
                }, e
            },
            renderDecorate: function() {
                this.$el.toggleClass("g-type-shrinkwrap-block g-type-shrinkwrap-secondary", this.options.inverted && this.hasAnythingToDisplay())
            },
            hasAnythingToDisplay: function() {
                var e = this.options,
                    t = this.model;
                return !!(e.showFollowers && t.get("followers_count") || e.showSounds && t.get("track_count") || e.showSets && t.get("playlist_count"))
            }
        })
    },
    650: function(e, t, n) {
        "use strict";
        var i = n(268).prototype;
        e.exports = n(268).extend({
            className: "tokenInput tagInput",
            template: n(2664),
            css: [n(843), n(3043)],
            defaults: {
                allowFreeInputTokens: !0,
                placeholder: n(52).t("Add tags"),
                tokenClassName: "tagInput__token"
            },
            autoCorrectTags: [{
                regex: /^\s*hip[\-\s]*hop\s*$/,
                correctTo: "Hip Hop"
            }, {
                regex: /^\s*#*\s*/,
                correctTo: ""
            }],
            events: n(3).defaults({
                "paste .tokenInput__input": "onPaste",
                "click .tagInput__token": "onTokenRemoveClick"
            }, i.events),
            MenuContentView: n(1714),
            menuContentViewArgs: function() {
                var e = this.form.getAudible && this.form.getAudible();
                return {
                    urn: e && e.getUrn(),
                    context: this.getFieldValue()
                }
            },
            menuOffset: "0 4",
            setup: function() {
                i.setup.apply(this, arguments), this.defaultSelectedItemIndex = 0
            },
            addToken: function(e) {
                var t, n;
                for (n = this.autoCorrectTags.length; n--;) t = this.autoCorrectTags[n], e = e.replace(t.regex, t.correctTo);
                e = e.substring(0, 255), i.addToken.call(this, e)
            },
            getFieldValue: function() {
                var e = n(268).prototype.getFieldValue.call(this);
                return "string" == typeof e ? n(189).parse(e, {
                    includeMachineTags: !0
                }) : e
            },
            getDisplayValue: n(3).identity,
            getRelativeElement: function() {
                return this.getElement("control")
            },
            cleanUserText: n(3).identity,
            getMenuWidth: function() {
                return "auto"
            },
            onPaste: function(e) {
                var t, i = e.target;
                "" === i.value && (t = e.originalEvent.clipboardData.getData("Text"), n(189).parse(t).forEach(this.addToken, this), e.preventDefault())
            }
        })
    },
    651: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.indexOf("playlist") > -1 ? "playlist" : "sound"
        }
        var a = ["sharing", "geoblocking", "monetizationEnabled", "scheduledPublic", "scheduledPrivate"];
        e.exports = n(54).extend({
            template: n(2671),
            css: n(3052),
            className: "uploadAudibleAttributeIcons",
            defaults: {
                Form: null
            },
            setup: function(e) {
                this.model = new e.Form({}, e), this.audible = new(n(75))({
                    id: e.resource_id,
                    resource_type: i(e.resource_type)
                }), a.forEach(function(e) {
                    this.listenTo(this.model, "change:" + e, this.rerender)
                }, this)
            },
            getTemplateData: function(e) {
                return n(3).assign(e, {
                    isPrivate: "private" === e.sharing,
                    isGeoblocked: e.geoblocking,
                    isMonetizable: e.monetizationEnabled,
                    isMonetizablePending: !1,
                    hasScheduledPrivacy: e.scheduledPublic || e.scheduledPrivate
                })
            }
        })
    },
    652: function(e, t, n) {
        "use strict";
        var i;
        e.exports = n(54).extend({
            template: n(2673),
            className: "chooseFiles",
            events: {
                "change .chooseFiles__input": "onFilesSelected",
                "click .chooseFiles__button": "onChooseClick"
            },
            element2selector: {
                input: ".chooseFiles__input",
                button: ".chooseFiles__button"
            },
            observedAttributes: ["quota", "primary_email_confirmed"],
            defaults: {
                callToAction: !0,
                size: "medium",
                text: n(52).t("Choose a file to upload"),
                toPlaylistUploadId: null,
                replaceSoundUploadId: null
            },
            _isOverQuota: null,
            _hasUnconfirmedEmail: null,
            _isDisabled: null,
            setup: function() {
                this.model = n(55).get("me"), this.model.hold(), i || (i = new(n(220)))
            },
            getTemplateData: function(e) {
                return e.allowMultiple = !this.options.replaceSoundUploadId, e
            },
            renderDecorate: function() {
                this.syncUploadState()
            },
            onFilesSelected: function(e) {
                n(975).addFiles(e.target.files, n(3).pick(this.options, "toPlaylistUploadId", "replaceSoundUploadId")), this.disposed || this.getElement("input").val("")
            },
            onChooseClick: function(e) {
                e.preventDefault(), this._isOverQuota ? n(57).trigger("error:choose_files", {
                    errorType: "overQuota"
                }) : this._hasUnconfirmedEmail && n(57).trigger("error:choose_files", {
                    errorType: "unconfirmedEmail"
                }), this._isDisabled || this.getElement("input").click()
            },
            syncUploadState: function() {
                var e = !!i.length,
                    t = this.options,
                    n = this.getElement("button");
                this._isOverQuota = this.model.isOverQuota(), this._hasUnconfirmedEmail = !this.model.get("primary_email_confirmed"), this._isDisabled = this._isOverQuota || this._hasUnconfirmedEmail, t.replaceSoundUploadId ? n.addClass("sc-button-" + t.size).toggleClass("sc-button-upload", !0) : n.toggleClass("sc-button-" + t.size, !e).toggleClass("sc-button-medium", e), n.toggleClass("sc-button-disabled", this._isDisabled)
            }
        })
    },
    653: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.toggleState("usernameAtStart", this.re.test(this.getValue()))
            }

            function a() {
                this.setFieldValue(this.getValue().replace(this.re, "")), this.toggleState("usernameAtStart", !1)
            }
            var s = n(60).prototype,
                o = "titleTextField__usernameHint",
                r = n(52).t("You donâ€™t have to put your name in the track title");
            e.exports = n(60).extend({
                states: n(3).defaults({
                    usernameAtStart: function(e) {
                        this.$el.toggleClass("hint", e), this.$("." + o).toggleClass("g-input-message-hidden", !e).text(e ? r : "")
                    }
                }, s.states),
                setup: function() {
                    s.setup.apply(this, arguments), this.setUsername(n(55).get("me").get("username"))
                },
                renderDecorate: function() {
                    s.renderDecorate.call(this), t(window.document.createElement("div")).addClass(o + " g-input-message g-input-message-hidden").css("cursor", "pointer").on("click", a.bind(this)).insertAfter(this.getElement("control")), i.call(this)
                },
                onInputChange: function() {
                    s.onInputChange.apply(this, arguments), this.toggleState("usernameAtStart", !1), i.call(this)
                },
                setUsername: function(e) {
                    this.re = new RegExp("^(" + n(283).regexpEscape(e) + "\\s*(?:[-â€“]\\s*)?)+", "i")
                }
            })
        }).call(t, n(1))
    },
    659: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            _fills: null,
            requires: ["gradientName"],
            applyTo: function(e) {
                e.defaults = n(3).defaults(e.defaults || {}, {
                    waveformStyle: null,
                    scale: null
                })
            },
            before: {
                onResize: function() {
                    this._fills = null
                }
            },
            getFillStyle: function(e, t) {
                return null == e && (e = 1), t = t || this.gradientName, this._fills = this._fills || {}, this._fills[e + "_" + t] || (this._fills[e + "_" + t] = n(229).gradient(this.context, t, this.options.waveformStyle, this.options.scale, e))
            }
        })
    },
    687: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".conversationBadge{cursor:pointer;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px}.conversationBadge__image{margin-right:10px}.conversationBadge__imageDeleted{border:1px solid rgba(0,0,0,.1);border-radius:50%;box-sizing:border-box;overflow:hidden}.conversationBadge__content{-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.conversationBadge__top{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;margin-top:3px;margin-bottom:2px}.conversationBadge__senderName{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:10px}.conversationBadge__missingUsername{color:#999}.conversationBadge>.loading{background:0 0;padding:0}.conversationBadge__time{font-size:12px;color:#999}.conversationBadge .sc-button{margin-top:5px}", ""])
    },
    701: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.signinInitialStep__loading,.signinInitialStep.m-fb-sdk-blocked .signinInitialStep_fbLink,.signinInitialStep.m-social-signin-visible .signinInitialStep__socialButtons{display:block}.signinInitialStep_fbLink,.signinInitialStep.m-fb-sdk-blocked .signinInitialStep_fbButton,.signinInitialStep__socialButtons,.signinInitialStep.m-social-signin-visible .signinInitialStep__loading{display:none}.signinInitialStep__btn{margin:1em 0}.signinInitialStep__divider{margin:1em auto;position:relative;text-align:center}.signinInitialStep__divider:before,.signinInitialStep__divider:after{display:inline-block;width:43%;border-top:1px solid #333;content:" ";position:absolute;top:.5em}.signinInitialStep__divider:before{left:0}.signinInitialStep__divider:after{right:0}.signinInitialStep__signinLink:nth-child(1),.signinInitialStep.m-alt-signin-link .signinInitialStep__signinLink:nth-child(2){display:inline-block}.signinInitialStep__signinLink:nth-child(2),.signinInitialStep.m-alt-signin-link .signinInitialStep__signinLink:nth-child(1){display:none}.signinInitialStep__socialValidation{background:0 0;color:#f50}', ""])
    },
    702: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".resetEmailSent__continue{margin:20px 0}", ""])
    },
    703: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signinBack{border:none}.signinBack.sc-button-medium.sc-button-icon{min-width:20px}.signinBack.sc-button-medium.sc-button-icon:before{width:10px}", ""])
    },
    704: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signinForm{width:100%;height:100%;margin:0 auto;overflow:hidden}.signinForm__header{margin-bottom:20px;text-align:center}.signinForm__steps{height:100%}.signinForm__step{-webkit-flex:0 0 100%;-ms-flex:0 0 100%;flex:0 0 100%}.signinForm__cta{width:100%}.signin__text{margin:10px 0}.signin__suggestion{margin:20px 0}.signin__block{margin:10px 0 20px 0}.signin__terms{margin-bottom:23px}.signinForm__requiredStateIntro{margin-bottom:20px}", ""])
    },
    705: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signupUserBadge{height:200px;margin:10px 0}.signupUserBadge__picture{width:150px;height:150px;margin:10px auto}", ""])
    },
    706: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signupWithProvider{position:relative}.signupWithProvider__back{position:absolute;bottom:100px;border:none}", ""])
    },
    707: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".signinUserIdentifier__value{vertical-align:middle}", ""])
    },
    798: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '    <img class="conversationBadge__imageDeleted" src="' + n(735) + '" alt="" width="100%" height="100%"/>\n'
            },
            3: function(e, t, i, a, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(169), {
                    name: "$view",
                    hash: {
                        is_link: !1,
                        size: "small",
                        resource_id: null != (o = null != t ? t.from : t) ? o.id : o
                    },
                    data: s
                })) + "\n"
            },
            5: function(e, t, n, i, a) {
                return "        SoundCloud\n"
            },
            7: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t.from : t) ? s.username : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, a, 0),
                    inverse: e.program(10, a, 0),
                    data: a
                })) ? s : ""
            },
            8: function(e, t, n, i, a) {
                var s;
                return "        " + e.escapeExpression(e.lambda(null != (s = null != t ? t.from : t) ? s.username : s, t)) + "\n      "
            },
            10: function(e, t, i, a, s) {
                return '\n        <span class="conversationBadge__missingUsername">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Deleted user", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</span>\n      "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="conversationBadge__image">\n' + (null != (o = i["if"].call(r, null != t ? t.missingUser : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + '</div>\n<div class="conversationBadge__content">\n  <div class="conversationBadge__top">\n    <h3 class="conversationBadge__senderName sc-truncate">\n' + (null != (o = i["if"].call(r, null != t ? t.isFromSoundCloud : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.program(7, s, 0),
                    data: s
                })) ? o : "") + '    </h3>\n    <div class="conversationBadge__time sc-font-light">\n      ' + u((n(53) || t && t.$view || l).call(r, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != (o = null != t ? t.last_message : t) ? o.sent_at : o
                    },
                    data: s
                })) + '\n    </div>\n  </div>\n  <div class="conversationBadge__body sc-truncate">\n    ' + u((n(187) || t && t.$usertext || l).call(r, null != (o = null != t ? t.last_message : t) ? o.content : o, {
                    name: "$usertext",
                    hash: {
                        escapeExpression: null != t ? t.shouldBodyBeEscaped : t,
                        paragraphs: !1,
                        links: !1
                    },
                    data: s
                })) + "\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    811: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return "    " + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        placeholder: (n(51) || t && t.$t || r).call(o, "Custom gender", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        actionOnEnter: null != t ? t.actionOnEnter : t,
                        field: "genderCustom",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h1 class="signinForm__header">\n  ' + u((n(51) || t && t.$t || l).call(r, "Tell us a bit<br>about yourself", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n</h1>\n\n" + u((n(53) || t && t.$view || l).call(r, n(60), {
                    name: "$view",
                    hash: {
                        actionOnEnter: null != t ? t.actionOnEnter : t,
                        key: "username",
                        labelClass: "sc-type-h2",
                        label: (n(51) || t && t.$t || l).call(r, "Choose your display name", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "username",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + '\n\n<p class="sc-text-light">\n  ' + u((n(51) || t && t.$t || l).call(r, "Your display name can be anything you like. Your name or artist name are good choices.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</p>\n\n<div class="signin__block">\n  ' + u((n(53) || t && t.$view || l).call(r, n(151), {
                    name: "$view",
                    hash: {
                        key: "gender",
                        actionOnEnter: null != t ? t.actionOnEnter : t,
                        blankText: (n(51) || t && t.$t || l).call(r, "Indicate your gender", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        showBlank: !0,
                        labelClass: "sc-type-h2",
                        label: (n(51) || t && t.$t || l).call(r, "Gender", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "gender",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n\n" + (null != (o = (n(53) || t && t.$view || l).call(r, n(205), {
                    name: "$view",
                    hash: {
                        conditionFn: null != t ? t.showCustomGender : t,
                        field: "gender",
                        resource_id: null != t ? t.resource_id : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n\n" + u((n(53) || t && t.$view || l).call(r, n(76), {
                    name: "$view",
                    hash: {
                        button: "addUserInformation",
                        className: "signinForm__cta sc-button-cta",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    812: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return '    By signing in, you agree to our <a target="_blank" href="[[href]]">Terms of Use.</a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return '<div class="signinInitialStep__socialSignin">\n  <div class="signinInitialStep__socialButtons">\n    <div class="signinInitialStep__btn">\n      <button class="signinInitialStep_fbButton signinForm__cta sc-button sc-button-' + d((r = null != (r = i.size || (null != t ? t.size : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "size",
                    hash: {},
                    data: s
                }) : r)) + ' sc-button-facebook">' + d((n(51) || t && t.$t || u).call(l, "Continue with Facebook", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n      <a href="' + d((r = null != (r = i.fbLoginLink || (null != t ? t.fbLoginLink : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "fbLoginLink",
                    hash: {},
                    data: s
                }) : r)) + '" class="signinInitialStep_fbLink signinForm__cta sc-button sc-button-' + d((r = null != (r = i.size || (null != t ? t.size : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "size",
                    hash: {},
                    data: s
                }) : r)) + ' sc-button-facebook">' + d((n(51) || t && t.$t || u).call(l, "Continue with Facebook", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a>\n    </div>\n    <div class="signinInitialStep__btn">\n      <button class="signinForm__cta sc-button sc-button-' + d((r = null != (r = i.size || (null != t ? t.size : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "size",
                    hash: {},
                    data: s
                }) : r)) + ' sc-button-google">' + d((n(51) || t && t.$t || u).call(l, "Continue with Google", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n    </div>\n    <div class="signin__validation g-input-validation g-input-validation-hidden"></div>\n  </div>\n  <div class="signinInitialStep__loading">\n    ' + d((n(53) || t && t.$view || u).call(l, n(159), {
                    name: "$view",
                    hash: {
                        padding: "43px 0"
                    },
                    data: s
                })) + '\n  </div>\n</div>\n\n<h2 class="signinInitialStep__divider">' + d((n(51) || t && t.$t || u).call(l, "or", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h2>\n\n" + d((n(53) || t && t.$view || u).call(l, n(363), {
                    name: "$view",
                    hash: {
                        actionOnEnter: "checkIdentifier",
                        name: "username",
                        key: "identifier",
                        placeholder: (n(51) || t && t.$t || u).call(l, "Your email address or profile URL", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "identifier",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n\n" + d((n(53) || t && t.$view || u).call(l, n(275), {
                    name: "$view",
                    hash: {
                        recaptcha: "check_identifier_recaptcha",
                        resource_id: null != t ? t.resource_id : t
                    },
                    data: s
                })) + "\n\n" + d((n(53) || t && t.$view || u).call(l, n(76), {
                    name: "$view",
                    hash: {
                        key: "ctaButton",
                        button: "checkIdentifier",
                        className: "signinForm__cta signinForm__checkIdentifierCTA sc-button-cta",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + '\n\n<p class="signin__text sc-clearfix">\n  <a class="sc-right signinInitialStep__needHelp" href="#">' + d((n(51) || t && t.$t || u).call(l, "Need help?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</a>\n</p>\n<p class="signin__text sc-text-light">\n  ' + d((n(51) || t && t.$t || u).call(l, "We may use your email for updates and tips on SoundCloud's products and services. You can unsubscribe for free at any time in your notification preferences.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</p>\n<p class="signin__text sc-text-light g-type-centered">\n' + (null != (o = (n(51) || t && t.$t || u).call(l, {
                    name: "$t",
                    hash: {
                        href: (n(58) || t && t.$route || u).call(l, "pages", "terms-of-use", {
                            name: "$route",
                            hash: {},
                            data: s
                        })
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</p>\n"
            },
            useData: !0
        })
    },
    813: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<h1 class="signinForm__header">\n  ' + l((n(51) || t && t.$t || r).call(o, "Having trouble<br>signing in?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</h1>\n<p class="signin__text sc-type-h2 g-type-centered">\n  <a href="#" class="needHelpSignin__password">\n    ' + l((n(51) || t && t.$t || r).call(o, "I donâ€™t know my password", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </a>\n</p>\n<p class="signin__text sc-type-h2 g-type-centered">\n  <a target="_blank" class="needHelpSignin__email" href="http://youraccount.help.soundcloud.com/customer/portal/articles/2105342-i-forgot-my-email-address-associated-with-my-soundcloud-account">\n    ' + l((n(51) || t && t.$t || r).call(o, "I donâ€™t know my email address", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </a>\n</p>\n<p class="signin__text sc-type-h2 g-type-centered">\n  <a target="_blank" href="http://youraccount.help.soundcloud.com/customer/en/portal/topics/839179-help-accessing-your-account">\n    ' + l((n(51) || t && t.$t || r).call(o, "I have a different problem", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n  </a>\n</p>\n"
            },
            useData: !0
        })
    },
    814: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "You must reset your password to continue", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Donâ€™t know your password?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            5: function(e, t, i, a, s) {
                return '  <div class="signinForm__requiredStateIntro">\n    ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Your email was found in a leak of user data from another service. Weâ€™re temporarily preventing access to your account to protect it against unauthorized access, in case youâ€™ve reused the same password on SoundCloud.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n  </div>\n"
            },
            7: function(e, t, i, a, s) {
                var o;
                return null != (o = (n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, {
                    name: "$t",
                    hash: {
                        href: "http://youraccount.help.soundcloud.com/customer/portal/articles/2576226-when-to-reset-your-password"
                    },
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : ""
            },
            8: function(e, t, n, i, a) {
                return "        A link to reset your password will be emailed to all addresses associated with your account. To learn more, <a href='[[href]]' target='_blank'>visit our Help Center</a>.\n"
            },
            10: function(e, t, i, a, s) {
                var o;
                return null != (o = (n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, {
                    name: "$t",
                    hash: {
                        href: "http://youraccount.help.soundcloud.com/customer/en/portal/topics/839179-help-accessing-your-account/articles"
                    },
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : ""
            },
            11: function(e, t, n, i, a) {
                return "        Weâ€™ll send you a link to change your password. If you still need help, <a href='[[href]]' target='_blank'>visit our Help Center</a>.\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="signin__block">\n  <h1 class="signinForm__header">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.requirePasswordChange : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + "  </h1>\n</div>\n\n" + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.requirePasswordChange : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n<div class="signin__block">\n  ' + u((n(53) || t && t.$view || l).call(r, n(363), {
                    name: "$view",
                    hash: {
                        actionOnEnter: "promptPasswordReset",
                        key: "identifier",
                        labelClass: "sc-type-h2",
                        placeholder: (n(51) || t && t.$t || l).call(r, "Enter your email address or profile URL", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        label: (n(51) || t && t.$t || l).call(r, "Your email address or profile URL", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "identifier",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + '\n\n  <p class="signin__text">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.requirePasswordChange : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.program(10, s, 0),
                    data: s
                })) ? o : "") + "  </p>\n</div>\n\n" + u((n(53) || t && t.$view || l).call(r, n(76), {
                    name: "$view",
                    hash: {
                        button: "promptPasswordReset",
                        className: "signinForm__cta sc-button-cta",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    815: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(362), {
                    name: "$view",
                    hash: {
                        key: "recaptcha",
                        field: null != t ? t.recaptcha : t,
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o;
                return null != (o = (n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(205), {
                    name: "$view",
                    hash: {
                        key: "recaptchaSection",
                        field: null != t ? t.recaptcha_required : t,
                        resource_id: null != t ? t.resource_id : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : ""
            },
            useData: !0
        })
    },
    816: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Weâ€™ve sent instructions on how to change your password to the following email addresses: <br> [[[emailAddresses]]]", {
                    name: "$t",
                    hash: {
                        emailAddresses: null != t ? t.addresses : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Weâ€™ve sent you instructions on how to change your password.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<div class="signin__block">\n  <h1 class="signinForm__header">\n    ' + c((n(51) || t && t.$t || u).call(l, "Check your email", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </h1>\n  <p class="signin__text g-type-centered sc-type-h2">\n' + (null != (o = i["if"].call(l, null != t ? t.addressesAreDisplayed : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + '  </p>\n</div>\n\n<button class="resetEmailSent__continue sc-button sc-button-' + c((r = null != (r = i.size || (null != t ? t.size : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "size",
                    hash: {},
                    data: s
                }) : r)) + ' sc-button-cta signinForm__cta">\n  ' + c((n(51) || t && t.$t || u).call(l, "Continue", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n</button>\n\n<p class="signin__text g-type-centered">\n  ' + c((n(51) || t && t.$t || u).call(l, "<a href='http://youraccount.help.soundcloud.com/customer/en/portal/topics/839179-help-accessing-your-account' target='_blank'>Still need help?</a>", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n</p>\n"
            },
            useData: !0
        })
    },
    817: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return l((n(53) || t && t.$view || r).call(o, n(389), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.resource_id : t
                    },
                    data: s
                })) + "\n\n" + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        actionOnEnter: "signinWithPassword",
                        name: "password",
                        key: "password",
                        placeholder: (n(51) || t && t.$t || r).call(o, "Your Password", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        type: "password",
                        field: "password",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n\n" + l((n(53) || t && t.$view || r).call(o, n(275), {
                    name: "$view",
                    hash: {
                        recaptcha: "signin_with_password_recaptcha",
                        resource_id: null != t ? t.resource_id : t
                    },
                    data: s
                })) + "\n\n" + l((n(53) || t && t.$view || r).call(o, n(76), {
                    name: "$view",
                    hash: {
                        button: "signinWithPassword",
                        className: "signinForm__cta sc-button-cta",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + '\n\n<p class="signin__text g-type-centered">\n  <a href="#" class="signinWithPassword__promptPassword">' + l((n(51) || t && t.$t || r).call(o, "Donâ€™t know your password?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a>\n</p>\n"
            },
            useData: !0
        })
    },
    818: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = e.escapeExpression;
                return '    <div class="signinForm__step signinForm__' + r(e.lambda(null != (o = null != t ? t.stepArgs : t) ? o.key : o, t)) + '">\n      ' + r((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, null != t ? t.StepView : t, {
                    name: "$view",
                    hash: {
                        size: (o = s && s.root) && o.size,
                        resource_id: (o = s && s.root) && o.resource_id,
                        args: null != t ? t.stepArgs : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="signinForm__steps g-flex-row-centered">\n' + (null != (s = n.each.call(null != t ? t : {}, null != t ? t.steps : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    819: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o, r = e.escapeExpression,
                    l = e.lambda;
                return '  <img class="signupUserBadge__picture sc-artwork ' + r((o = null != (o = n.artworkPlaceholderClass || (null != t ? t.artworkPlaceholderClass : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "artworkPlaceholderClass",
                    hash: {},
                    data: a
                }) : o)) + '" src="' + r(l(null != (s = null != t ? t.userData : t) ? s.picture_url : s, t)) + '"/>\n  <p class="sc-type-h2 g-type-centered">\n    ' + r(l(null != (s = null != t ? t.userData : t) ? s.name : s, t)) + "\n  </p>\n"
            },
            3: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(159), {
                    name: "$view",
                    hash: {
                        padding: "70px 0"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.userData : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(3, a, 0),
                    data: a
                })) ? s : "") + "\n\n"
            },
            useData: !0
        })
    },
    820: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return "    <h3>Are you trying to sign in?</h3>\n    The email address that you entered was not found.<br/>\n    Double-check your email address.\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l, u = null != t ? t : {},
                    c = i.helperMissing,
                    d = e.escapeExpression,
                    p = '<h1 class="signinForm__header">\n  ' + d((n(51) || t && t.$t || c).call(u, "Create your SoundCloud account", {
                        name: "$t",
                        hash: {},
                        data: s
                    })) + '\n</h1>\n<div class="signupWithEmail__validation g-input-validation g-input-validation-hidden"></div>\n' + d((n(53) || t && t.$view || c).call(u, n(389), {
                        name: "$view",
                        hash: {
                            resource_id: null != t ? t.resource_id : t
                        },
                        data: s
                    })) + "\n\n" + d((n(53) || t && t.$view || c).call(u, n(60), {
                        name: "$view",
                        hash: {
                            actionOnEnter: "signupWithEmail",
                            key: "password",
                            labelClass: "sc-type-h3",
                            label: (n(51) || t && t.$t || c).call(u, "Choose a password", {
                                name: "$t",
                                hash: {},
                                data: s
                            }),
                            type: "password",
                            field: "password",
                            resource_id: null != t ? t.resource_id : t,
                            size: null != t ? t.size : t,
                            Form: null != t ? t.SigninForm : t
                        },
                        data: s
                    })) + "\n\n" + d((n(53) || t && t.$view || c).call(u, n(60), {
                        name: "$view",
                        hash: {
                            maxlength: 3,
                            actionOnEnter: "signupWithEmail",
                            key: "age",
                            labelClass: "sc-type-h3",
                            label: (n(51) || t && t.$t || c).call(u, "Tell us your age", {
                                name: "$t",
                                hash: {},
                                data: s
                            }),
                            field: "age",
                            resource_id: null != t ? t.resource_id : t,
                            size: null != t ? t.size : t,
                            Form: null != t ? t.SigninForm : t
                        },
                        data: s
                    })) + '\n\n<div class="signin__terms">\n  ' + d((n(53) || t && t.$view || c).call(u, n(91), {
                        name: "$view",
                        hash: {
                            actionOnEnter: "signupWithEmail",
                            resource_id: null != t ? t.resource_id : t,
                            label: null != t ? t.acceptTermsLabel : t,
                            field: "accept_terms",
                            Form: null != t ? t.SigninForm : t
                        },
                        data: s
                    })) + "\n</div>\n\n" + d((n(53) || t && t.$view || c).call(u, n(275), {
                        name: "$view",
                        hash: {
                            recaptcha: "signup_with_email_recaptcha",
                            resource_id: null != t ? t.resource_id : t
                        },
                        data: s
                    })) + "\n\n" + d((n(53) || t && t.$view || c).call(u, n(76), {
                        name: "$view",
                        hash: {
                            button: "signupWithEmail",
                            className: "signinForm__cta sc-button-cta",
                            resource_id: null != t ? t.resource_id : t,
                            size: null != t ? t.size : t,
                            Form: null != t ? t.SigninForm : t
                        },
                        data: s
                    })) + '\n\n<div class="signin__suggestion g-type-centered">\n';
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = "function" == typeof r ? r.call(u, l) : r, n(51) || (o = i.blockHelperMissing.call(t, o, l)), null != o && (p += o), p + "</div>\n"
            },
            useData: !0
        })
    },
    821: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<h1 class="signinForm__header">\n  ' + l((n(51) || t && t.$t || r).call(o, "Create your SoundCloud account", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n</h1>\n\n" + l((n(53) || t && t.$view || r).call(o, n(636), {
                    name: "$view",
                    hash: {
                        provider: null != t ? t.provider : t,
                        resource_id: null != t ? t.resource_id : t
                    },
                    data: s
                })) + '\n\n<div class="signupWithProvider__back">\n  ' + l((n(53) || t && t.$view || r).call(o, n(386), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n</div>\n\n" + l((n(53) || t && t.$view || r).call(o, n(91), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.resource_id : t,
                        label: null != t ? t.acceptTermsLabel : t,
                        field: "accept_terms",
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + "\n\n" + l((n(53) || t && t.$view || r).call(o, n(76), {
                    name: "$view",
                    hash: {
                        button: null != t ? t.button : t,
                        className: "signinForm__cta sc-button-cta",
                        resource_id: null != t ? t.resource_id : t,
                        size: null != t ? t.size : t,
                        Form: null != t ? t.SigninForm : t
                    },
                    data: s
                })) + '\n<div class="signin__validation g-input-validation g-input-validation-hidden"></div>\n'
            },
            useData: !0
        })
    },
    822: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(r, n(386), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + '\n<span class="signinUserIdentifier__value">' + u((o = null != (o = i.identifier || (null != t ? t.identifier : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "identifier",
                    hash: {},
                    data: s
                }) : o)) + "</span>\n"
            },
            useData: !0
        })
    },
    848: function(e, t, n) {
        var i = n(1875);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    862: function(e, t, n) {
        var i = n(687);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    876: function(e, t, n) {
        var i = n(701);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    877: function(e, t, n) {
        var i = n(702);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    878: function(e, t, n) {
        var i = n(703);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    879: function(e, t, n) {
        var i = n(705);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    880: function(e, t, n) {
        var i = n(706);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    881: function(e, t, n) {
        var i = n(707);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    968: function(e, t, n) {
        "use strict";

        function i(e) {
            this.model[e]("validation", this.onFormValidation, this)
        }

        function a(e) {
            return e.isFormControl
        }

        function s(e) {
            return e && e.isInvalid()
        }
        var o = "error";
        e.exports = new(n(21))({
            after: {
                setup: function() {
                    i.call(this, "on")
                },
                dispose: function() {
                    i.call(this, "off")
                },
                renderDecorate: function() {
                    this._tabs.forEach(function(e, t) {
                        e.isRendered || this.renderTab(t)
                    }, this)
                }
            },
            defaults: {
                onFormValidation: function() {
                    this.getTabInvalidity().forEach(this.toggleError, this)
                }
            },
            toggleError: function(e, t) {
                this.getElement("tabItems").eq(t).toggleClass(o, e)
            },
            getFormControls: function() {
                return this._tabs.map(function(e) {
                    var t = e.subviewInstance;
                    return t ? t.getAncestorSubviews().filter(a) : null
                })
            },
            getTabInvalidity: function() {
                return this.getFormControls().map(function(e) {
                    return !!e && e.some(s)
                })
            }
        })
    },
    969: function(e, t, n) {
        "use strict";

        function i() {
            return this._elSelector ? this.getElement("impression") : this.$el
        }

        function a(e) {
            return e.is(":visible")
        }

        function s() {
            return this._retryCounter >= c ? void o.call(this) : (a(i.call(this)) ? (this._visibleCounter++, this._visibleCounter >= u && !this._impressionTracked ? (this.trackImpression(), r.call(this)) : l.call(this)) : l.call(this), void this._retryCounter++)
        }

        function o() {
            window.clearTimeout(this._impressionTimeout), this._impressionTimeout = null
        }

        function r() {
            o.call(this), this._impressionTracked = !0, this._retryCounter = 0, this._visibleCounter = 0
        }

        function l() {
            this._impressionTimeout = this.addDeferred(window.setTimeout(s.bind(this), d))
        }
        var u = 2,
            c = 10,
            d = 2e3;
        e.exports = new(n(21))({
            _visibleCounter: 0,
            _retryCounter: 0,
            _impressionTracked: !1,
            _elSelector: null,
            _impressionTimeout: null,
            requires: ["trackImpression"],
            applyTo: function(e, t) {
                e._elSelector = t, t && (e.element2selector = n(3).defaults(e.element2selector || {}, {
                    impression: t
                }))
            },
            defaults: {
                shouldTrackImpression: function() {
                    return i.call(this).length
                }
            },
            after: {
                renderDecorate: function() {
                    this.shouldTrackImpression() && !this._impressionTimeout && this.whenInserted().done(s.bind(this))
                }
            }
        })
    },
    1030: function(e, t, n) {
        "use strict";

        function i() {
            this.model.hasNewImage() && this.model.unsetImageFile({
                force: !0
            })
        }
        e.exports = n(71).extend(n(165), {
            defaults: {
                width: 550
            },
            bubbleEvents: {
                "image-content:cancel": "close",
                "image-content:save": "close"
            },
            setup: function() {
                n(71).prototype.setup.apply(this, arguments), this.listenTo(this, n(71).Events.CLOSED, i)
            }
        })
    },
    1031: function(e, t, n) {
        "use strict";
        e.exports = n(71).extend({
            defaults: {
                width: 350,
                Subview: n(1550)
            }
        })
    },
    1033: function(e, t, n) {
        "use strict";

        function i() {
            n(67).cycleRepeatMode()
        }

        function a(e) {
            this.toggleState("all", e === s).toggleState("none", e === o).toggleState("one", e === r)
        }
        var s = n(138).all,
            o = n(138).none,
            r = n(138).one;
        e.exports = n(54).extend({
            className: "repeatControl sc-ir",
            css: n(2943),
            tagName: "button",
            states: {
                none: "m-none",
                one: "m-one",
                all: "m-all",
                newPM: "m-new",
                oldPM: "m-old"
            },
            events: {
                click: i
            },
            attributes: {
                title: n(52).t("Repeat playing track")
            },
            setup: function() {
                var e = n(55).get("rollouts").get("play_queue");
                this.toggleState("newPM", e).toggleState("oldPM", !e), this.listenTo(n(67), "change:repeatMode", a);
                var t = o;
                a.call(this, t)
            },
            template: function() {
                return n(52).t("Repeat track")
            }
        })
    },
    1034: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("disabled", n(94).getCurrentSound())
        }

        function a(e, t) {
            t && this.stopListening(t), e && this.listenTo(e, "add remove reset", this.update), this.update()
        }
        var s = n(52).t("Skip to previous"),
            o = n(52).t("Skip to next");
        e.exports = n(54).extend({
            className: "skipControl sc-ir",
            css: n(2944),
            tagName: "button",
            defaults: {
                type: "previous"
            },
            states: {
                disabled: function(e) {
                    this.$el.toggleClass("disabled").attr("tabindex", e ? "-1" : "");
                }
            },
            events: {
                click: "onClick"
            },
            setup: function(e) {
                var t = e.type;
                this.$el.addClass("skipControl__" + t), "next" === t && this.listenTo(n(67), "change:source", a).listenTo(n(67), "state:hasNext", this.update), this.listenTo(n(67), "change:currentSound", this.update).listenTo(n(94), "ad:play ad:skip ad:finish", i).listenTo(n(57), "audio:play", this.update)
            },
            template: function() {
                return "previous" === this.options.type ? s : o
            },
            renderDecorate: function() {
                this.update()
            },
            onClick: function() {
                this.getState("disabled") || n(67)["previous" === this.options.type ? "playPrev" : "playNext"]({
                    userInitiated: !0
                })
            },
            update: function() {
                this.toggleState("disabled", "previous" === this.options.type ? !1 : !n(67).hasNextSound())
            }
        })
    },
    1035: function(e, t, n) {
        "use strict";
        e.exports = n(78).extend(n(106), n(68).withOptions("history"), {
            className: "historicalPlays",
            css: n(2949),
            Subview: n(1590),
            itemClassName: "historicalPlays__item",
            defaults: {
                displayType: "player"
            },
            setup: function(e) {
                var t = e.displayType,
                    i = n(516).getFilterClass();
                this.collection = new i(null);
                var a = "player" === t ? "m-player" : "m-soundBadge";
                this.$el.addClass(a)
            },
            getRestoreUrl: function() {
                return n(61).getRoute("youNetwork", null, "history")
            },
            getSubviewArgs: function(e) {
                return {
                    displayType: this.options.displayType,
                    resource_id: e.resource_id,
                    resource_type: e.resource_type
                }
            },
            onContextRequest: function(e) {
                e.data.attribution = e.data.attribution || {}, e.data.attribution.position = this.collection.indexOf(e.data.historicalPlay)
            }
        })
    },
    1038: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            moreText: n(52).t("View all"),
            title: n(52).t("Likes"),
            moduleClassName: "likesModule",
            iconClassName: "like",
            itemMinHeight: 70.2,
            Subview: n(1676),
            ModelClass: n(64),
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
            defaults: {
                includePlaylists: !0
            },
            setup: function() {
                var e = this,
                    t = this.model,
                    i = this.options.includePlaylists;
                this.noFollow = !0, this.moreLink = !i && t.isMe() ? n(61).getRoute("youNetwork", null, "likes") : n(61).getRoute("userNetwork", t, "likes"), this.subviewArgs = {
                    maxDisplay: 3,
                    compact: !0,
                    show_action_buttons: !0,
                    show_like_button: !1,
                    show_repost_button: !1,
                    Collection: n(i ? 297 : 213),
                    getRestoreUrl: function() {
                        return e.moreLink
                    },
                    collectionArgs: {
                        userId: t.id
                    }
                }
            }
        })
    },
    1040: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            title: n(52).t("Stats"),
            iconClassName: "stats",
            moreText: n(52).t("View all"),
            moreClassName: "outgoing-stats-module",
            moduleClassName: "statsModule",
            contentMinHeight: 99,
            Subview: n(1696),
            setup: function() {
                this.moreLink = n(61).getRoute("stats")
            },
            createSubview: function() {
                n(118).prototype.createSubview.apply(this, arguments), this.subviews.content.on("update:plays", this.update, this)
            },
            update: function() {
                this.subviews.content.hasRecentPlays() ? this.show() : this.hide()
            }
        })
    },
    1042: function(e, t, n) {
        "use strict";
        var i = n(59).trackV0Click,
            a = new(n(105))("already-seen"),
            s = "repost-share-dialog";
        e.exports = n(54).extend(n(68).withOptions("repostUpsellDialog"), {
            template: n(2635),
            css: n(3012),
            className: "shareRepostedAudible",
            ModelClass: n(75),
            doNotShowCheckboxChecked: !1,
            bubbleEvents: {
                "checkbox:change:dontRemind": "onDontRemindChange"
            },
            events: {
                "click .shareRepostedAudible__closeDialogButton": "onCloseDialogClick"
            },
            dispose: function() {
                this.doNotShowCheckboxChecked && i(["dont-show-repost-upsell"])
            },
            onDontRemindChange: function(e) {
                this.doNotShowCheckboxChecked = e.data.checked, a.set(s, this.doNotShowCheckboxChecked)
            },
            onCloseDialogClick: function() {
                this.bubble("overlay:close")
            }
        }, {
            shouldShowDialog: function() {
                return a.get(s) !== !0
            }
        })
    },
    1043: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = e.kind,
                n = e.is_album,
                i = e.set_type;
            return "track" === t ? "track" : n ? i : "playlist"
        }

        function a(e, t, a, l, d) {
            var p = n(61).getRoute("listen", t),
                h = i(t);
            return "promoted" === d && e ? u("span", {
                "class": "soundContext__line sc-font-body"
            }, [r(h, "promotedWithUser", {
                username: s(e),
                relativeTime: "",
                actionTagStart: c("span", {
                    "class": "sc-promoted-icon sc-promoted-icon-medium"
                }),
                actionTagEnd: "</span>",
                linkTagStart: c("a", {
                    href: p,
                    "class": "soundContext__targetLink sc-link-dark"
                }),
                linkTagEnd: "</a>"
            })]) : "promoted" === d ? u("span", {
                "class": "soundContext__line sc-font-body sc-promoted-icon sc-promoted-icon-medium"
            }, [r(h, "promoted", {
                username: "",
                relativeTime: "",
                actionTagStart: "",
                actionTagEnd: "",
                linkTagStart: c("a", {
                    href: p,
                    "class": "soundContext__targetLink sc-link-dark"
                }),
                linkTagEnd: "</a>"
            })]) : "repost" === l ? u("span", {
                "class": "soundContext__line sc-font-body"
            }, [r(h, "repost", {
                username: s(e),
                relativeTime: o(l, a),
                actionTagStart: '<span class="sc-ministats sc-ministats-small sc-ministats-reposts soundContext__repost">',
                actionTagEnd: "</span>",
                linkTagStart: c("a", {
                    href: p,
                    "class": "soundContext__targetLink sc-link-dark"
                }),
                linkTagEnd: "</a>"
            })]) : u("span", {
                "class": "soundContext__line sc-font-body"
            }, [r(h, "post", {
                username: s(e),
                relativeTime: o(l, a),
                actionTagStart: "",
                actionTagEnd: "",
                linkTagStart: c("a", {
                    href: p,
                    "class": "soundContext__targetLink sc-link-dark"
                }),
                linkTagEnd: "</a>"
            })])
        }

        function s(e) {
            return e ? u("a", {
                href: n(61).getRoute("user", e),
                "class": "soundContext__usernameLink sc-link-dark"
            }, [n(20).Utils.escapeExpression(e.username)]) : ""
        }

        function o(e, t) {
            return t ? l(n(115), {
                timestamp: t,
                prefix: "repost" === e ? "Reposted" : "Posted"
            }) : ""
        }

        function r(e, t, i) {
            switch (e + "-" + t) {
                case "track-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]a track[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "track-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]a track[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "track-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]track[[[linkTagEnd]]]", i);
                case "track-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]]promoted[[[actionTagEnd]]] [[[linkTagStart]]]a track[[[linkTagEnd]]]", i);
                case "playlist-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]a playlist[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "playlist-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]a playlist[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "playlist-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]playlist[[[linkTagEnd]]]", i);
                case "playlist-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] promoted[[[actionTagEnd]]] [[[linkTagStart]]]a playlist[[[linkTagEnd]]]", i);
                case "album-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]an album[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "album-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]an album[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "album-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]album[[[linkTagEnd]]]", i);
                case "album-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] promoted[[[actionTagEnd]]] [[[linkTagStart]]]an album[[[linkTagEnd]]]", i);
                case "ep-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]an EP[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "ep-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]an EP[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "ep-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]EP[[[linkTagEnd]]]", i);
                case "ep-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] promoted[[[actionTagEnd]]] [[[linkTagStart]]]an EP[[[linkTagEnd]]]", i);
                case "single-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]a single[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "single-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]a single[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "single-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]single[[[linkTagEnd]]]", i);
                case "single-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] promoted[[[actionTagEnd]]] [[[linkTagStart]]]a single[[[linkTagEnd]]]", i);
                case "compilation-repost":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] reposted[[[actionTagEnd]]] [[[linkTagStart]]]a compilation[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "compilation-post":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] posted[[[actionTagEnd]]] [[[linkTagStart]]]a compilation[[[linkTagEnd]]] [[[relativeTime]]] ago", i);
                case "compilation-promoted":
                    return n(52).t("Promoted [[[linkTagStart]]]compilation[[[linkTagEnd]]]", i);
                case "compilation-promotedWithUser":
                    return n(52).t("[[[username]]] [[[actionTagStart]]] promoted[[[actionTagEnd]]] [[[linkTagStart]]]a compilation[[[linkTagEnd]]]", i)
            }
        }
        var l = n(114).subview,
            u = n(114).el,
            c = n(282).getMarkup,
            d = n(59).trackClickThrough;
        e.exports = n(54).extend(n(140), {
            className: "soundContext g-flex-row-centered",
            css: n(3015),
            ModelClass: n(64),
            defaults: {
                actionType: "post",
                dialogSelector: ".userAvatarBadge, .soundContext__usernameLink",
                dialogType: "userBadge",
                is_promoted: !1,
                soundType: "sound",
                target: null,
                time_to_show: null
            },
            events: {
                click: "onClick"
            },
            dialogSubviewArgs: function() {
                var e = this.getUserAttributes();
                return {
                    resource_id: e.id || null
                }
            },
            onClick: function() {
                var e = this.getContextData();
                this.options.is_promoted && n(82).trackEvent("sponsorClickThrough", e), d({
                    target: this.model.getUrn(),
                    context: e
                })
            },
            template: function() {
                var e = this.options,
                    t = e.is_promoted,
                    i = e.actionType,
                    s = e.time_to_show,
                    o = e.target,
                    r = this.getUserAttributes(),
                    u = t ? "promoted" : "organic";
                return [r && l(n(169), {
                    resource_id: r.id,
                    size: "xsmall",
                    className: "soundContext__userAvatar"
                }), a(r, o, s, i, u)].filter(Boolean).join("")
            },
            getUserAttributes: function() {
                if (this.options.is_promoted) {
                    var e = this.getContextData();
                    return e.promoted_by
                }
                return this.model.attributes
            }
        })
    },
    1044: function(e, t, n) {
        "use strict";

        function i() {
            if (!this.disposed && this.visuals.length) {
                var e = this.model.currentTime(),
                    t = this.visuals,
                    i = void 0,
                    a = void 0,
                    s = void 0,
                    o = void 0;
                if (t.isLooping()) a = Math.floor(e / t.getLoopInterval() % t.length), o = t.at(a).resource_id, s = t.at(a).get("entry_time");
                else {
                    if (i = n(3).sortedIndex(t.models, {
                            entry_time: e
                        }, function(e) {
                            return null != e.entry_time ? e.entry_time : e.get("entry_time")
                        }), a = Math.min(t.length - 1, i), s = t.at(a).get("entry_time"), s > e) {
                        if (a = Math.min(t.length - 1, --i), 0 > a) return this.getElement("containers").filter(".visible").removeClass("visible"), void(this._currentTransitionId = null);
                        s = t.at(a).get("entry_time")
                    }
                    o = t.at(a).resource_id
                }
                o !== this._currentTransitionId && (this.getElement("containers").filter(".visible").removeClass("visible"), this.$(".timestamp-" + s).addClass("visible"), this._currentTransitionId = o)
            }
        }
        var a = n(59).trackImpression,
            s = 250;
        e.exports = n(54).extend(n(68).withOptions("soundVisuals"), {
            className: "visuals g-all-transitions-300 g-image-filter-darken-light",
            css: n(3019),
            template: n(2640),
            ModelClass: n(66),
            requiredAttributes: ["visuals"],
            element2selector: {
                containers: ".visuals__container"
            },
            states: {
                playing: "playing"
            },
            defaults: {
                viewContext: "streamContext"
            },
            _currentTransitionId: null,
            _loadAll: !1,
            setup: function(e) {
                this.visuals = new(n(906))(null, {
                    resource_id: this.model.id
                }), this.onCollectionChange = n(3).debounce(this.onCollectionChange, s), this.listenTo(this.model, "play", this.onPlay).listenTo(this.model, "pause", this.onPause).listenTo(this.model, "seeked", this.setImage).listenTo(this.model, "finish", this.onFinish).listenTo(this.model, "time", this.setImageThrottled).listenTo(this.visuals, "add remove reset", this.onCollectionChange), this.trackImpression = n(3).once(this.trackImpression), this.$el.addClass(e.viewContext)
            },
            dispose: function() {
                this.visuals.release(), this.visuals = null
            },
            setImage: i,
            setImageThrottled: n(3).throttle(i, 250),
            getTemplateData: function(e) {
                var t = this.model.currentTime(),
                    i = t > 0 || this.model.isPlaying(),
                    a = this._loadAll || i;
                if (0 === this.visuals.length) return e;
                if (e.visuals = (a ? this.visuals : [this.visuals.at(0)]).map(function(e) {
                        return {
                            id: e.get("id"),
                            entry_time: e.get("entry_time"),
                            failMessage: e.get("failMessage"),
                            background_url: e.get("visual_url").replace(/[()]/g, window.escape)
                        }
                    }), i && this.visuals.length > 1) {
                    var s = n(3).sortedIndex(e.visuals, {
                        entry_time: t
                    }, function(e) {
                        var t = e.entry_time;
                        return t
                    });
                    s > 0 && (e.visuals = e.visuals.slice(s).concat(e.visuals.slice(0, s)))
                }
                return e
            },
            onCollectionChange: function() {
                this.rerender()
            },
            onPlay: function() {
                this.toggleState("playing", !0), this.visuals.length > 1 && !this._loadAll && (this._loadAll = !0, this.rerender())
            },
            onPause: function() {
                this.toggleState("playing", !1)
            },
            onFinish: function() {
                this.toggleState("playing", !1)
            },
            renderDecorate: function() {
                this.trackImpression(), this._currentTransitionId = null, this.setImage(), this.toggleState("playing", this.model.isPlaying())
            },
            trackImpression: function() {
                n(82).trackEvent("impression", n(3).pick(this.model.get("visuals"), "tracking")), a({
                    impression_name: "visuals",
                    originView: this.contextName,
                    context: this.getContextData(),
                    urn: this.model.getUrn(),
                    useAudioFinishHandler: "streamContext" === this.options.viewContext
                })
            }
        })
    },
    1046: function(e, t, n) {
        "use strict";

        function i() {
            var e = "sc-license-icon-",
                t = this.getFieldValue();
            this.$el.removeClass(), t && this.$el.addClass("sc-license-icon").toggleClass("sc-license-icon-white", this.options.light).addClass(e + t)
        }
        e.exports = n(54).extend(n(113), {
            tagName: "span",
            className: "sc-license-icon",
            defaults: {
                light: !1
            },
            template: function() {
                return ""
            },
            renderDecorate: function() {
                i.call(this)
            },
            onFieldChange: function() {
                i.call(this)
            }
        })
    },
    1047: function(e, t, n) {
        "use strict";

        function i(e) {
            this.getElement("prefixText").toggleClass("sc-type-small", "medium" === e), this.$el.addClass(e), this.getElement("editButton").addClass("sc-button-" + e), this.getElement("control").addClass("sc-input-" + e)
        }

        function a(e) {
            this.toggleState("generating", e)
        }

        function s() {
            var e = this.getElement("prefixText").width(),
                t = this.$el.width() - e - 5;
            this.getElement("validation").css("margin-left", e), this.getElement("control").width(t)
        }
        var o = n(60).prototype;
        e.exports = n(60).extend({
            template: n(2678),
            css: n(3058),
            defaults: {
                validateOn: "blur",
                showLabel: !1,
                label: n(52).t("Permalink"),
                permalinkType: "sound",
                size: "small"
            },
            states: n(3).defaults({
                generating: "generating",
                editing: function(e) {
                    var t = this.getElement("control");
                    this.$el.toggleClass("editing", e), s.call(this), t.attr("disabled", !e), e && t.select()
                }
            }, o.states),
            element2selector: n(3).defaults({
                editButton: ".permalinkTextfield__editButton",
                prefixText: ".permalinkTextfield__prefixText"
            }, o.element2selector),
            events: n(3).defaults({
                "click .permalinkTextfield__inputWrapper": "onWrapperClick",
                "blur .permalinkTextfield__input": "onInputBlur",
                "keydown .permalinkTextfield__input": "onInputKeydown"
            }, o.events),
            className: "textfield permalinkTextfield",
            setup: function() {
                o.setup.apply(this, arguments), this.listenTo(n(85), "resize:x:debounced", s).listenTo(this.form, "generatingPermalink", a)
            },
            renderDecorate: function() {
                i.call(this, this.options.size), this.whenInserted().done(s.bind(this)), o.renderDecorate.apply(this, arguments)
            },
            getTemplateData: function(e) {
                var t = n(55).get("me").get("permalink") + "/",
                    i = this.options.permalinkType;
                return e = o.getTemplateData.call(this, e) || e, n(3).assign(e, {
                    prefix: "sound" === i ? t : "playlist" === i ? t + "sets/" : ""
                })
            },
            onInputKeydown: function(e) {
                e.keyCode === n(102).ESC && (this.getElement("control").blur(), this.getElement("editButton").focus())
            },
            onInputBlur: function() {
                this.toggleState("editing", !this.isValid())
            },
            onValidationChange: function(e) {
                n(60).prototype.onValidationChange.apply(this, arguments), this.toggleState("editing", !e.isValid)
            },
            onWrapperClick: function() {
                this.toggleState("editing", !0)
            }
        })
    },
    1048: function(e, t, n) {
        "use strict";

        function i() {
            var e = a.call(this),
                t = e.getProgress(),
                n = "scaleX(" + t + ")";
            this.getElement("inner").css({
                "-webkit-transform": n,
                "-moz-transform": n,
                "-o-transform": n,
                transform: n
            })
        }

        function a() {
            return this.model.get(this.options.type)
        }

        function s() {
            var e = a.call(this).isIndeterminate();
            e || i.call(this), this.toggleState("indeterminate", e)
        }
        e.exports = n(54).extend({
            className: "progressBar",
            template: n(2679),
            css: n(3059),
            ModelClass: n(563),
            defaults: {
                color: "orange",
                type: null
            },
            element2selector: {
                inner: ".progressBar__inner"
            },
            states: {
                indeterminate: function(e) {
                    var t = this.getElement("inner");
                    t.toggleClass("sc-pending", e), this.addDeferred(n(3).defer(t.toggleClass.bind(t, "g-transition-transform-linear", !e))), this.$el.toggleClass("indeterminate", e)
                }
            },
            setup: function(e) {
                var t = a.call(this);
                this.listenTo(t, "data", this.onData).listenTo(t, "change:indeterminate", s), this.$el.addClass(e.color)
            },
            renderDecorate: function() {
                s.call(this)
            },
            onData: i
        })
    },
    1049: function(e, t, n) {
        "use strict";

        function i(e) {
            this.toggleState("public", "public" === this.model.get("sharing"), e), this.toggleState("publicOrScheduled", "public" === this.model.get("sharing") || this.model.get("scheduledPublic"), e)
        }
        e.exports = n(54).extend({
            className: "schedulingSection",
            template: n(2680),
            defaults: {
                Form: null,
                publicToPrivate: !0
            },
            element2selector: {
                showPublic: ".showPublic",
                showPrivate: ".showPrivate",
                showPublicOrScheduled: ".showPublicOrScheduled",
                showNotPublicOrScheduled: ".showNotPublicOrScheduled"
            },
            states: {
                "public": function(e) {
                    this.getElement("showPublic").toggle(e), this.getElement("showPrivate").toggle(!e)
                },
                publicOrScheduled: function(e) {
                    this.getElement("showPublicOrScheduled").toggle(e), this.getElement("showNotPublicOrScheduled").toggle(!e)
                }
            },
            setup: function(e) {
                this.model = new e.Form({}, e), this.listenTo(this.model, "change:sharing change:scheduledPublic", i)
            },
            getTemplateData: function(e) {
                return e.FormClass = this.options.Form, e
            },
            renderDecorate: function() {
                i.call(this, !0)
            }
        })
    },
    1050: function(e, t, n) {
        "use strict";

        function i() {
            var e = !(!this.form.get("scheduledPublic") && !this.form.get("scheduledPrivate"));
            this.toggleState("scheduled", e)
        }
        e.exports = n(196).extend({
            states: n(3).defaults({
                scheduled: "scheduled"
            }, n(196).prototype.states),
            setup: function() {
                n(196).prototype.setup.apply(this, arguments), this.listenToFields("on", "scheduledPrivate"), this.listenToFields("on", "scheduledPublic")
            },
            dispose: function() {
                this.listenToFields("off", "scheduledPrivate"), this.listenToFields("off", "scheduledPublic"), n(196).prototype.dispose.apply(this, arguments)
            },
            template: function() {
                return '<span class="sharingRadio__scheduled sc-type-light">' + n(52).t("scheduled") + "</span>" + n(196).prototype.template.apply(this, arguments)
            },
            onFieldChange: function() {
                n(196).prototype.onFieldChange.apply(this, arguments), i.call(this)
            },
            renderDecorate: function() {
                n(196).prototype.renderDecorate.apply(this, arguments), i.call(this)
            }
        })
    },
    1051: function(e, t, n) {
        "use strict";
        e.exports = n(80).extend(n(553), {
            className: "uploadTrackList",
            defaults: {
                maxDisplay: 0,
                readOnly: !1
            },
            Subview: n(1727),
            listClassName: "uploadTrackList__list sc-list-nostyle",
            itemClassName: "uploadTrackList__item sc-border-light-bottom sc-clearfix",
            editableObject: null,
            listSelector: ".uploadTrackList__list",
            listItemSelector: ".uploadTrackList__item",
            dragHandleSelector: ".compactUpload__dragHandle",
            setup: function(e) {
                var t = n(357).hashFn({
                        id: e.resource_id
                    }),
                    i = n(357).instances.get(t);
                this.editableObject = i, this.subviewArgs = {
                    readOnly: e.readOnly
                }, this.collection = i.getSoundUploadsCollection(), this.collection.hold()
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.apply(this, arguments), this.options.readOnly || this.reinitializeSorting()
            },
            onRemove: function(e) {
                var t = this,
                    n = this.getListItemView(e);
                n && n.remove().done(function() {
                    t.getSubviewWrapper(n).detach(), t.removeSubview(n)
                })
            }
        })
    },
    1052: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("fileUpload"),
                t = this.subviews.status;
            e && (t && s.call(this, t), a.call(this, e))
        }

        function a(e) {
            var t = this.options,
                i = this.addSubview(new(n(1053))({
                    resource_id: e.resource_id,
                    resource_type: e.resource_type,
                    showCancelButton: t.showCancelButton,
                    cancelText: t.cancelText
                }), "status");
            this.$el.append(i.render().el)
        }

        function s(e) {
            e._dispose(), this.removeSubview(e)
        }
        e.exports = n(54).extend({
            className: "uploadStatusWrapper",
            defaults: {
                showCancelButton: !1,
                cancelText: n(52).t("Cancel upload")
            },
            ModelClass: n(166),
            template: function() {
                return ""
            },
            setup: function() {
                this.listenTo(this.model, "change:fileUpload", i)
            },
            renderDecorate: function() {
                i.call(this)
            }
        })
    },
    1053: function(e, t, n) {
        "use strict";

        function i() {
            this.slideUp()
        }

        function a() {
            return "single-audio-upload" === this.options.resource_type
        }

        function s() {
            return "aggregate-audio-upload" === this.options.resource_type
        }

        function o(e, t) {
            t.length && this.rerender()
        }
        e.exports = n(54).extend(n(202).withOptions({
            automatic: !1
        }), {
            template: n(2685),
            css: [n(3065), n(1167)],
            className: "uploadStatus editStatus",
            ModelClass: n(563),
            observedAttributes: ["status", "hasBeenSaved"],
            slideInnerSelector: ".uploadStatus__inner",
            defaults: {
                showText: !0,
                size: "large",
                cancelText: n(52).t("Cancel upload"),
                showCancelButton: !1
            },
            events: {
                "click .uploadStatus__cancel": "onCancelClick"
            },
            setup: function(e) {
                s.call(this) && this.listenTo(this.model.getUploadsCollection(), "add remove", o), this.listenTo(this.model, "destroy", i), this.$el.addClass(e.size)
            },
            onModelChange: function(e) {
                e.get("status") === n(93).COMPLETE && e.get("hasBeenSaved") || n(54).prototype.onModelChange.apply(this, arguments)
            },
            onCancelClick: function() {
                this.model.remove()
            },
            getTemplateData: function(e) {
                var t = a.call(this);
                return Object.keys(n(93)).reduce(function(e, t) {
                    return e["is_" + t.toLowerCase()] = e.status === n(93)[t], e
                }, e), e.isSingle = t, e.completeButNotSaved = e.is_complete && !e.hasBeenSaved, e.numSounds = !t && this.model.getUploads().length, e
            }
        })
    },
    1058: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(350), n(184), {
            template: n(2708),
            css: n(3086),
            className: "spotlightSearch sc-border-box",
            inputSelector: ".spotlightSearch__input",
            defaults: {
                maxItemDisplay: 15,
                showPrivateSounds: !1,
                placeholder: n(52).t("Select a track or playlist from your profile")
            },
            showAllItems: !0,
            MenuContentView: n(1761),
            setup: function(e) {
                this.menuContentViewArgs = {
                    userId: n(55).get("me").id,
                    maxDisplay: e.maxItemDisplay,
                    showPrivateSounds: e.showPrivateSounds,
                    includePlaylists: e.includePlaylists
                }
            },
            onItemSelected: function(e) {
                this.trigger("onItemSelected", e), this.emptyInput()
            },
            onClose: function() {
                this.trigger("onClose")
            }
        })
    },
    1059: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                e.preventDefault(), a.call(this)
            }

            function a() {
                var e = this;
                this.toggleState("waiting", !0), t.ajax({
                    type: "PUT",
                    url: this.model.get("error").acknowledge_url.replace(/^http:/, "https:")
                }).then(function() {
                    e.bubble("spam-warning:acknowledged")
                }, function() {
                    e.toggleState("waiting", !1)
                })
            }
            var s = n(20).SafeString;
            e.exports = n(54).extend({
                className: "spamWarning",
                ModelClass: n(123),
                css: n(3100),
                template: n(2725),
                events: {
                    "click .spamWarning__acknowledge:not(.disabled)": i
                },
                element2selector: {
                    button: ".spamWarning__acknowledge"
                },
                states: {
                    waiting: function(e) {
                        this.getElement("button").toggleClass("disabled", e)
                    }
                },
                getTemplateData: function(e) {
                    var t = e.error,
                        i = t.reason_phrase.split(" ").pop(),
                        a = t.release_at && n(52).dateTimeHelper.toRelativeTime(new Date(t.release_at)).toLowerCase(),
                        o = n(61).getRoute("pages", "terms-of-use"),
                        r = void 0,
                        l = void 0,
                        u = void 0,
                        c = void 0;
                    switch (i) {
                        case "comments":
                            r = n(52).t("Weâ€™ve noticed a high volume of commenting coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your commenting abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your commenting facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue commenting again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        case "messages":
                            r = n(52).t("Weâ€™ve noticed a high volume of messaging coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your messaging abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your messaging facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue messaging again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        case "affiliations":
                        case "followings":
                        case "follows":
                            r = n(52).t("Weâ€™ve noticed a high volume of following coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your following abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your following facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue following again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        case "favoritings":
                            r = n(52).t("Weâ€™ve noticed a high volume of liking coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your liking abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your liking facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue liking again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        case "reposts":
                            r = n(52).t("Weâ€™ve noticed a high volume of reposting coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your reposting abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your reposting facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue reposting again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        case "contributions":
                            r = n(52).t("Weâ€™ve noticed a high volume of contributing coming from your account and we would like to ask that you slow down."), l = n(52).t('Please note if you keep getting these warnings, your contributing abilities will be blocked as outlined in our <a href="[[termsLink]]">Terms of Use</a>.', {
                                termsLink: o
                            }), u = n(52).t("We have temporarily blocked your contributing facility because your account has previously gotten this warning many times."), c = n(52).t("You can continue contributing again [[unblockTime]]", {
                                unblockTime: a
                            });
                            break;
                        default:
                            var d = i.replace(/e?s$/, "ing");
                            r = new s("Weâ€™ve noticed a high volume of " + d + " coming from your account and we would like to ask that you slow down."), l = new s("Please note if you keep getting these warnings, your " + d + ' abilities will be blocked as outlined in our <a href="' + o + '">Terms of Use</a>.'), u = new s("We have temporarily blocked your " + d + " facility because your account has previously gotten this warning many times."), c = new s("You can continue " + d + " again " + a)
                    }
                    e.notice_msg = r, e.warning_msg = l, e.blocked_msg = u, e.unblock_msg = c, e.is_info = "info" === t.warning_level
                }
            })
        }).call(t, n(1))
    },
    1060: function(e, t, n) {
        "use strict";

        function i() {
            !this.isDirty && this.shouldBeDirty() && this.setDirty(!0)
        }

        function a() {
            this.setDirty(!0)
        }
        e.exports = new(n(21))({
            lastPosition: 0,
            after: {
                setup: function() {
                    this.listenTo(this.model, "time", i).listenTo(this.model, "seeked", a)
                }
            },
            getPosition: function() {
                return Math.max(this.model.isPlaying() ? 1 : 0, Math.ceil(this.model.progress() * this.canvas.width / this.options.scale))
            },
            hasPositionChanged: function() {
                return this.lastPosition !== this.getPosition()
            },
            defaults: {
                shouldBeDirty: function() {
                    return this.hasPositionChanged()
                }
            }
        })
    },
    1159: function(e, t, n) {
        var i = n(1839);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1160: function(e, t, n) {
        var i = n(1840);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1162: function(e, t, n) {
        var i = n(1872);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1163: function(e, t, n) {
        var i = n(1874);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    1334: function(e, t, n) {
        "use strict";
        e.exports = new(n(21))({
            requires: ["getTemplateData"],
            around: {
                getTemplateData: function(e, t) {
                    var i, a = {
                            google_play_url: n(185).getStoreUrl("google_play"),
                            appstore_url: n(185).getStoreUrl("appstore")
                        },
                        s = n(55).get("router").getLayoutInfo().layoutName;
                    return i = n(62).param({
                        utm_source: "soundcloud",
                        utm_medium: "web",
                        utm_campaign: "web_xsell_" + s + "_page"
                    }), a.google_play_url += "&referrer=" + encodeURIComponent(i), n(3).assign(a, e(t) || t)
                }
            }
        })
    },
    1335: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                this.toggleState("htmlWarning", !1)
            }

            function a() {
                r.lastIndex = 0, this.toggleState("htmlWarning", r.test(this.getValue()))
            }
            var s = "noHTMLContentHint",
                o = n(52).t("HTML is not supported, please only use plain text."),
                r = /<[a-zA-Z]+[^>]*>/g;
            e.exports = new(n(21))({
                requirePrototype: n(60).prototype,
                requires: ["onInputChange"],
                applyTo: function(e) {
                    e.states = n(3).assign(e.states || {}, {
                        htmlWarning: function(e) {
                            this.$el.toggleClass("hint", e), this.$("." + s).toggleClass("g-input-message-hidden", !e).text(e ? o : "")
                        }
                    })
                },
                after: {
                    setup: function() {
                        this.listenTo(this.form, "validation", i)
                    },
                    renderDecorate: function() {
                        t(window.document.createElement("div")).addClass(s + " g-input-message g-input-message-hidden").insertAfter(this.getElement("control")), a.call(this)
                    },
                    onInputChange: function() {
                        a.call(this)
                    }
                }
            })
        }).call(t, n(1))
    },
    1336: function(e, t, n) {
        (function(t) {
            "use strict";
            e.exports = new(n(21))(n(140), {
                applyTo: function(e) {
                    e.defaults.dialogType = "userBadge"
                },
                defaults: {
                    dialogSubviewArgs: function(e) {
                        var i = n(56).defer(),
                            a = t(e).text();
                        return n(64).resolve(a).done(function(e) {
                            i.resolve({
                                resource_id: e.id
                            })
                        }), i
                    }
                }
            })
        }).call(t, n(1))
    },
    1339: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                return {
                    scope: [this.widgetType]
                }
            }

            function a() {
                delete this.widgetParams.secret_token
            }

            function s() {
                if (!this.disposed) {
                    var e, i, a, s, o = this.model.getShareAttributes({
                            type: this.options.share_type
                        }),
                        r = this.widgetType,
                        l = this.widgetParams,
                        u = "visual" === r,
                        c = u ? 450 : void 0,
                        d = u ? this.widgetHeight : void 0,
                        p = this.getElement("widget-code-input"),
                        h = this.getElement("wordpress-checkbox")[0],
                        f = this.getElement("playerContainer"),
                        g = this.getElement("html5_mini-player");
                    f.removeClass("widgetLoading"), e = {
                        type: r,
                        params: l,
                        height: d
                    }, i = n(24)(o, e), a = t(n(24)(o, n(3).assign({}, e, {
                        height: c
                    }))), s = n(24)(o, n(3).defaults(e, {
                        format: "wordpress"
                    })), this.isDirty[r] && (this.getElement(r + "-player").html(a), this.setDirty(!1), "html5_mini" === r && (g.removeClass("miniLoaded sc-background-darkgrey sc-background-light"), a.one("load", function() {
                        g.addClass("miniLoaded"), g.toggleClass("sc-background-darkgrey", l.inverse), g.toggleClass("sc-background-light", !l.inverse)
                    }))), this._embedCode = i, this._wordpressCode = s, h.checked ? p.val(s) : p.val(i)
                }
            }

            function o(e) {
                switch (e) {
                    case "visual":
                        return "visual_embed";
                    case "html5":
                        return "html5_embed";
                    case "html5_mini":
                        return "html5_mini_embed"
                }
            }
            var r = n(59).trackShareClick,
                l = "ff5500",
                u = ["visual", "html5", "html5_mini"];
            e.exports = new(n(21))(n(165), {
                applyTo: function(e) {
                    e.events = n(3).assign({
                        'click input[type="text"]': "onInputClick",
                        "copy .widgetEmbed__widgetCode": "onWidgetCodeCopy",
                        "change .widgetEmbed__wordpressCheckbox": "onWordpressCodeChange",
                        "keyup .widgetEmbed__spectrum .sp-input, .widgetEmbed__colorInput": "onColorInputChange",
                        "change .widgetEmbed__size": "onSizeChange"
                    }, e.events), e.css ? (Array.isArray(e.css) || (e.css = [e.css]), e.css.push(n(1160), n(29))) : e.css = [n(1160), n(29)], e.element2selector = n(3).assign({
                        options: ".widgetEmbed__option",
                        players: ".widgetEmbed__player",
                        "color-picker": ".widgetEmbed__colorPicker",
                        playerContainer: ".widgetEmbed__players",
                        "visual-player": '[data-sc-player-type="visual"]',
                        "html5-player": '[data-sc-player-type="html5"]',
                        "html5_mini-player": '[data-sc-player-type="html5_mini"]',
                        "widget-code-input": ".widgetEmbed__widgetCode",
                        "wordpress-checkbox": ".widgetEmbed__wordpressCode"
                    }, e.element2selector), e.bubbleEvents = n(3).assign({
                        "checkbox:change": "onCheckboxChange"
                    }, e.bubbleEvents), e.defaults = n(3).assign({
                        share_type: null
                    }, e.defaults)
                },
                defaults: {
                    widgetHeight: null,
                    widgetType: null,
                    widgetParams: null
                },
                before: {
                    setup: function(e) {
                        n(3).bindAll(this, "onColorPickerChange", "decorateColorPicker"), this.$el.addClass("widgetEmbed"), this.isDirty = {}, u.forEach(function(e) {
                            this.isDirty[e] = !0
                        }, this), this.widgetParams = {
                            color: l,
                            inverse: !1,
                            auto_play: !1,
                            hide_related: !1,
                            show_comments: !0,
                            show_user: !0,
                            show_reposts: !1
                        }, this.$el.addClass("type-" + e.resource_type), a.call(this), this.insertIframe = n(3).debounce(s, 500)
                    }
                },
                after: {
                    renderDecorate: function() {
                        var e = this;
                        this.setupColorPicker(), this.togglePlayer(), this.toggleOptions(), this.insertIframe(), n(537).makeReadOnly(this.getElement("widget-code-input")), n(537).makeReadOnly(this.getElement("wordpress-input")), this._logCopyOnce = n(3).once(function() {
                            r({
                                click_target: o(e.widgetType),
                                context: i.call(e)
                            })
                        })
                    }
                },
                setDirty: function(e) {
                    e ? n(3).each(this.isDirty, function(e, t, n) {
                        n[t] = !0
                    }) : this.isDirty[this.widgetType] = !1
                },
                setupColorPicker: function() {
                    var e = this;
                    this.whenInserted().done(function() {
                        e.getElement("color-picker").spectrum({
                            color: e.widgetParams.color,
                            flat: !0,
                            showInput: !0,
                            showButtons: !1,
                            className: "widgetEmbed__spectrum",
                            preferredFormat: "hex",
                            showSelectionPalette: !1,
                            change: e.onColorPickerChange,
                            move: e.onColorPickerChange,
                            show: e.decorateColorPicker
                        })
                    })
                },
                decorateColorPicker: function() {
                    this.addElement2selector(), this.changeInputColor({
                        "background-color": "#" + this.widgetParams.color,
                        color: "#000"
                    })
                },
                addElement2selector: function() {
                    this.element2selector = n(3).assign(this.element2selector, {
                        "color-input": ".widgetEmbed__spectrum .sp-input, .widgetEmbed__colorInput"
                    })
                },
                togglePlayer: function() {
                    var e = this.widgetType;
                    this.getElement("players").toggleClass("sc-hidden", !0), this.getElement(e + "-player").toggleClass("sc-hidden", !1), this.getElement("playerContainer").removeClass(u.join(" ")).addClass(e).addClass("widgetLoading")
                },
                toggleOptions: function() {
                    this.getElement("options").toggleClass("sc-hidden", !0).filter('[data-sc-available~="' + this.widgetType + '"]').toggleClass("sc-hidden", !1)
                },
                changeInputColor: function(e) {
                    this.getElement("color-input").css(e)
                },
                changeColorPickerColor: function(e) {
                    var t = this.getElement("color-picker");
                    e = e || l, t.spectrum("set", e), this.changeWidgetColor(t.spectrum("get"))
                },
                changeWidgetColor: function(e) {
                    var t = e.toHexString();
                    this.widgetParams.color = e.toHex(), this.setDirty(!0), this.changeInputColor({
                        "background-color": t,
                        color: e.toHsl().l <= .4 ? "#fff" : "#000"
                    }), this.getElement("color-input").val(t), this.insertIframe()
                },
                inverseWidgetColor: function(e) {
                    this.widgetParams.inverse = "dark" === e, this.setDirty(!0), this.insertIframe()
                },
                onColorInputChange: function(e) {
                    var t = e.target.value;
                    /^#?[a-f0-9]{6}$/i.test(t) && this.changeColorPickerColor(t)
                },
                onColorPickerChange: function(e) {
                    this.changeWidgetColor(e)
                },
                onSizeChange: function(e) {
                    this.widgetHeight = e.target.value, this.insertIframe()
                },
                onCheckboxChange: function(e) {
                    var t = e.data,
                        n = t.name;
                    this.widgetParams[n] = t.checked, "auto_play" !== n && this.setDirty(!0), "hide_related" === n && (this.widgetParams[n] = !t.checked), this.insertIframe()
                },
                onWidgetCodeCopy: function() {
                    this._logCopyOnce()
                },
                onWordpressCodeChange: function() {
                    var e = this.getElement("wordpress-checkbox")[0],
                        t = this.getElement("widget-code-input");
                    e.checked ? t.val(this._wordpressCode) : t.val(this._embedCode)
                },
                onInputClick: function(e) {
                    t(e.target).select()
                }
            })
        }).call(t, n(1))
    },
    1373: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("visible", this.isOpened)
        }
        var a = e.exports = n(54).extend(n(192), {
            css: n(2789),
            template: n(2408),
            className: "tooltip g-z-index-overlay g-opacity-transition sc-selection-disabled",
            defaults: {
                collision: "fit",
                anchor: "center top",
                offset: "0 11",
                text: null
            },
            attributes: {
                role: "tooltip"
            },
            states: {
                visible: "m-is-visible"
            },
            setup: function(e) {
                !e.text && e.relativeElement && (e.text = e.relativeElement.title, e.relativeElement.removeAttribute("title")), this.on(a.Events.CLOSE, i, this)
            },
            renderDecorate: function() {
                this.whenInserted().done(i.bind(this))
            }
        })
    },
    1506: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(113), {
            template: n(2516),
            css: n(2888),
            className: "attachedSounds",
            element2selector: {
                items: ".attachedSounds__items"
            },
            states: {
                hidden: "g-hidden"
            },
            bubbleEvents: {
                onRemoveClick: "onRemoveClick"
            },
            setup: function() {
                this.listenToFields("on", "attachments", this.onAttachmentsChange)
            },
            dispose: function() {
                this.listenToFields("off", "attachments", this.onAttachmentsChange)
            },
            renderDecorate: function() {
                this.toggleState("hidden", !this.form.get("attachments").length)
            },
            getTemplateData: function() {
                var e = n(3).uniq(this.form.get("attachments")).reverse();
                return {
                    attachments: e.map(function(e) {
                        return e.toJSON()
                    })
                }
            },
            onRemoveClick: function(e) {
                e.stopPropagation(), this.form.trigger("removeSoundFromAttached", e.data.sound.resource_id)
            },
            onAttachmentsChange: function(e, t) {
                var i = e.previousAttributes().attachments;
                i.length === t.length && n(3).isEqual(i, t) || this.rerender()
            }
        })
    },
    1507: function(e, t, n) {
        "use strict";

        function i(e) {
            e.which === n(102).ENTER && (e.metaKey || e.ctrlKey) && (e.preventDefault(), this.form.performAction("default", {
                showSuccessMessage: this.options.showSuccessMessage
            }))
        }
        e.exports = n(60).extend({
            defaults: {
                type: "textarea",
                updateOn: "input",
                validateOn: "",
                resizing: "vertical",
                showSuccessMessage: !0
            },
            css: [n(209), n(2889)],
            events: n(3).defaults({
                "keydown .textfield__input": i
            }, n(60).prototype.events),
            className: "textfield composeTextfield",
            onFieldChange: function() {
                var e = this.getElement("control")[0],
                    t = e.selectionStart,
                    i = e.selectionEnd;
                n(60).prototype.onFieldChange.apply(this, arguments), e.selectionStart = t, e.selectionEnd = i
            }
        })
    },
    1508: function(e, t, n) {
        "use strict";

        function i() {
            a.call(this)
        }

        function a() {
            var e = this.subviews.search;
            e || (e = this.addSubview(new(n(1058))({
                maxItemDisplay: 3,
                showPrivateSounds: !0
            }), "search"), this.listenTo(e, "onItemSelected", r), this.listenTo(e, "onClose", s), this.getElement("searchViewWrapper").append(e.render().el)), this.toggleState("searching", !0), e.$el.show(), e.focusInput()
        }

        function s() {
            this.toggleState("searching", !1), o.call(this), n(3).defer(this.focus.bind(this))
        }

        function o() {
            var e = this.subviews.search;
            e && (n(3).defer(e._dispose.bind(e)), this.removeSubview(e))
        }

        function r(e) {
            var t = this.getFieldValue();
            l(["messages", "track-added"]), this.setFieldValue(t.replace(/\n*$/, "\n" + e.getShareURL() + "\n"))
        }
        var l = n(59).trackV0Click;
        e.exports = n(54).extend(n(113), {
            className: "composeMessage",
            css: n(2890),
            template: n(2517),
            defaults: {
                showSuccessMessage: !0
            },
            states: {
                userHasNoSounds: "m-userHasNoSounds",
                searching: "m-searching"
            },
            events: {
                "click .composeMessage__addSoundButton": i
            },
            element2selector: {
                searchViewWrapper: ".composeMessage__searchViewWrapper"
            },
            focus: function() {
                var e = this.subviews.textfield;
                e && e.focus()
            },
            renderDecorate: function() {
                this.toggleState("userHasNoSounds", !n(55).get("me").hasOwnSounds())
            },
            getTemplateData: function(e) {
                return e.sendButtonTitle = n(112).mac ? "âŒ˜ + âŽ" : "ctrl + âŽ", e.sendButtonArgs = {
                    showSuccessMessage: this.options.showSuccessMessage
                }, e
            },
            onFieldChange: n(3).noop
        })
    },
    1512: function(e, t, n) {
        "use strict";
        e.exports = n(366).extend({
            Subview: n(606),
            defaults: {
                maxDisplay: 3,
                markNotificationsRead: !1,
                collectionType: null
            },
            listClassName: n(366).prototype.listClassName + " g-dark-list",
            className: n(366).prototype.className + " g-dark",
            setup: function(e) {
                this.collection = "unread" === e.collectionType ? new(n(448)) : new(n(327)), this.collection.setLimit(this.options.maxDisplay)
            },
            getEmptyListMessage: function() {
                return n(52).t("No messages")
            },
            getViewAllLinkData: function() {
                return {
                    link: n(61).getRoute("messages"),
                    text: n(52).t("View all messages"),
                    className: "outgoing-messages headerMessages__viewAll"
                }
            }
        })
    },
    1518: function(e, t, n) {
        "use strict";

        function i() {
            this.onValidationChange({
                isValid: !1,
                message: n(52).t("SoundCloud user not found")
            })
        }
        var a = n(114).el;
        e.exports = n(268).extend({
            css: [n(843), n(2899)],
            defaults: {
                allowFreeInputTokens: !0,
                type: "User"
            },
            MenuContentView: n(1766),
            setup: function() {
                this.$el.addClass("recipientChooser"), n(268).prototype.setup.apply(this, arguments)
            },
            renderDecorate: function() {
                this.syncState(), n(900).prefetch()
            },
            addToken: function(e) {
                var t = this.form.addRecipient(e).fail(i.bind(this));
                return this.getElement("input").focus(), t
            },
            getDisplayValue: n(3).identity,
            getTokenHTML: function(e) {
                var t = n(20).Utils.escapeExpression(e.username);
                return a("div", {
                    "class": this.options.tokenClassName + " recipientChooser__token sc-border-box sc-font-body"
                }, [n(87).markup(e, {
                    size: 20,
                    "class": "left"
                }), a("span", {
                    "class": "recipientChooser__name left"
                }, [t]), a("button", {
                    "class": "tokenInput__tokenRemove sc-ir"
                }, [t])])
            },
            getRelativeElement: function() {
                return this.getElement("input")
            },
            getMenuWidth: function() {
                return "auto"
            },
            onInputKeyup: function() {
                n(268).prototype.onInputKeyup.apply(this, arguments), this.toggleState("invalid", !1)
            },
            onInputBlur: function() {
                n(268).prototype.onInputBlur.apply(this, arguments), this.inputHasQuery() && this.createFreeInputToken()
            }
        })
    },
    1519: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(311), {
            template: n(2525),
            css: n(2900),
            _unreadConversations: null,
            _conversations: null,
            className: "unreadConversations g-dark",
            loadingViewArgs: {
                dark: !0
            },
            setup: function() {
                this._unreadConversations = this.addDataSource(new(n(448))), this._conversations = this.addDataSource(new(n(327)))
            },
            getTemplateData: function(e) {
                return e.collectionType = this._unreadConversations.length ? "unread" : "all", e
            }
        })
    },
    1521: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(2902),
            template: n(2527),
            className: "ageGateContent sc-clearfix",
            defaults: {
                errorType: null,
                context: null,
                followeeId: null,
                requiredAge: null
            },
            events: {
                "click .ageGateContent__ok": "onOkClick"
            },
            setup: function(e) {
                "DENY_AGE_UNKNOWN" === e.errorType && (this.model = new(n(64))({
                    id: e.followeeId
                }), this.requiredAttributes = ["username"], this.ownAgeVerifyModel = this.addDataSource(new(n(927))), this.listenTo(this.ownAgeVerifyModel, "change:action:save", this.onOwnAgeVerifySave))
            },
            onOkClick: function() {
                this.bubble("overlay:close")
            },
            onOwnAgeVerifySave: function(e, t) {
                "pending" === t && "enabled" === e && (n(74).follow(this.options.followeeId, {
                    context: this.options.context
                }), this.bubble("overlay:close"))
            },
            getTemplateData: function(e) {
                switch (e._options.errorType) {
                    case "DENY_AGE_RESTRICTED":
                        return {
                            isAgeRestricted: !0,
                            meUsername: n(55).get("me").get("username"),
                            requiredAge: e._options.requiredAge
                        };
                    case "DENY_AGE_UNKNOWN":
                        return {
                            isAgeUnknown: !0,
                            followeeUsername: e.username,
                            FormClass: n(927)
                        }
                }
            }
        })
    },
    1522: function(e, t, n) {
        "use strict";
        e.exports = n(71).extend({
            defaults: {
                Subview: n(1521),
                event: null,
                width: 350,
                subviewArgs: function() {
                    return n(3).pick(this.event, ["errorType", "context", "followeeId", "requiredAge"])
                }
            }
        })
    },
    1523: function(e, t, n) {
        "use strict";
        var i = {
                FormView: n(1466),
                Form: n(199),
                FORM_RESOURCE_TYPE: "playlist-edit"
            },
            a = {
                FormView: n(1472),
                Form: n(150),
                FORM_RESOURCE_TYPE: "sound-upload-edit",
                formArgs: {
                    isEdit: !0
                }
            },
            s = {
                FormView: n(1014),
                Form: n(454),
                FORM_RESOURCE_TYPE: "restricted-sound-edit"
            },
            o = {
                FormView: n(1014),
                Form: n(454),
                FORM_RESOURCE_TYPE: "restricted-playlist-edit"
            },
            r = function(e) {
                if (e.isRestricted) switch (e.resource_type) {
                    case "sound":
                        return s;
                    case "playlist":
                        return o;
                    default:
                        return a
                } else switch (e.resource_type) {
                    case "sound":
                        return a;
                    case "playlist":
                        return i;
                    default:
                        return a
                }
            };
        e.exports = n(71).extend({
            defaults: {
                customElementsInside: [".ui-datepicker", ".dropdownMenu", ".dialog"],
                isRestricted: !1,
                subviewArgs: function() {
                    return {
                        resource_id: this.resource_id,
                        resource_type: r(this).FORM_RESOURCE_TYPE
                    }
                },
                transparentBackground: !0
            },
            setup: function(e) {
                var t = e.resource_id,
                    i = r(e);
                e.Subview = i.FormView, e.width = e.isRestricted ? 600 : 850, n(71).prototype.setup.apply(this, arguments), this.form = new i.Form(null, n(3).assign({}, {
                    resource_id: t,
                    resource_type: i.FORM_RESOURCE_TYPE
                }, i.formArgs)), this.listenTo(this, n(71).Events.CLOSED, this.onClosed).listenTo(this.form, "saved", this.onSaved).listenTo(this.form, "canceled", this.onCanceled)
            },
            dispose: function() {
                n(71).prototype.dispose.apply(this, arguments), this.form.release(), this.form = null
            },
            canBeClosed: function() {
                return this.form.hasUnsavedUpload ? !this.form.hasUnsavedUpload() || this.form.hasUnsavedUpload() && window.confirm(n(52).t("Are you sure you want to stop your upload? Any unsaved changes will be lost.")) : !0
            },
            onClosed: function() {
                this.form.isDirty() && this.form.cancel()
            },
            onCanceled: function() {
                this.close()
            },
            onSaved: function() {
                this.close()
            }
        })
    },
    1533: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(165), {
            template: n(2531),
            className: "imageContent",
            setup: function() {
                this.requiredAttributes = [this.model.getTitleAttribute()]
            },
            getTemplateData: function(e) {
                return e.displayTitle = this.model.get(this.model.getTitleAttribute()), e
            }
        })
    },
    1534: function(e, t, n) {
        "use strict";

        function i(e) {
            return this.model.setImageFile(e, "file"), this.model.uploadImage()
        }

        function a() {
            this.model.hasNewImage() && this.model.unsetImageFile({
                force: !0
            }), this.bubble("image-content:cancel")
        }
        var s = 500;
        e.exports = n(54).extend(n(165), {
            template: n(2532),
            css: n(2906),
            className: "imageSelect",
            defaults: {
                file: null
            },
            setup: function(e) {
                e.file;
                this.requiredAttributes = [this.model.getTitleAttribute()]
            },
            getTemplateData: function(e) {
                var t = this;
                return e.displayTitle = this.model.get(this.model.getTitleAttribute()), e.cropSizes = {
                    width: s,
                    height: s,
                    previewWidth: s
                }, e.showRoundOverlay = n(87).isRounded(e._resource_type), e.file = this.options.file, e.saveFile = i.bind(this), e.onCancel = a.bind(this), e.onSaveSuccess = function() {
                    return t.bubble("image-content:save")
                }, e
            }
        })
    },
    1535: function(e, t, n) {
        "use strict";
        var i = function() {
                return n(55).get("rollouts").get("play_queue")
            },
            a = (e.exports = n(54).extend({
                template: n(2533),
                css: n(2907),
                className: "keyboardShortcuts",
                getTemplateData: function() {
                    return {
                        shortcutsGroups: [
                            ["playPause", "volDown", "next", "volUp", "repeat", "mute", "prev"],
                            ["seekForward", "seekBackward", "like", "load", "repost", "gotoNowPlaying"],
                            ["search", "dialog"],
                            ["gotoLikes", "gotoStream", "gotoCollection", "gotoProfile", "gotoHistory", i() ? "toggleQueue" : null, i() ? "toggleShuffle" : null].filter(Boolean)
                        ].map(function(e) {
                            return e.map(a)
                        })
                    }
                }
            }), function(e) {
                var t = n(462).shortcuts[e];
                return t && t.chorded ? n(3).defaults({
                    className: "kbd-big",
                    keyName: n(52).t("[[firstLetter]] then [[secondLetter]]", {
                        firstLetter: n(462).chordStartKeyName,
                        secondLetter: t.keyName
                    })
                }, t) : t
            })
    },
    1536: function(e, t, n) {
        "use strict";
        e.exports = n(71).extend({
            defaults: {
                warnBeforeClosing: !0,
                stayOpenOnNavigate: !0,
                productId: null
            },
            setup: function() {
                n(71).prototype.setup.apply(this, arguments), this.options.subviewArgs = {
                    resource_id: this.options.productId
                }, this.listenTo(n(84), "started", this.onPaymentStarted).listenTo(n(84), "canceled", this.onPaymentCanceled).listenTo(n(84), "successful", this.onPaymentSuccessful).listenTo(n(84), "unsuccessful", this.onPaymentUnsuccessful).listenTo(this, n(71).Events.CLOSED, this.onClose)
            },
            onClose: n(3).noop,
            onPaymentStarted: n(3).noop,
            onPaymentCanceled: n(3).noop,
            onPaymentSuccessful: n(3).noop,
            onPaymentUnsuccessful: n(3).noop
        })
    },
    1537: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var n, i = e.action,
                    a = i.indexOf("premium.soundcloud.com") > -1;
                n = t("<form>", {
                    action: i,
                    method: a ? "POST" : "GET",
                    target: "premiumModalContent__iframe"
                }), e.params.forEach(function(e) {
                    var i = t("<input>", {
                        type: "hidden",
                        name: e[0],
                        value: e[1]
                    });
                    n.append(i)
                }), this.$el.append(n), this.addDeferred(window.setTimeout(n.submit.bind(n), 0))
            }
            var a = n(3).object([
                ["default", n(52).t("We encountered a problem. Please try again.")],
                ["timeout", n(52).t("We encountered a problem. Please check back later.")],
                [n(84).paymentFailStates.GENERIC, n(52).t("We encountered a problem. No funds were transferred. Please try again.")],
                [n(84).paymentFailStates.CANCEL, n(52).t("Your purchase was canceled, and no funds were transferred.")]
            ]);
            e.exports = n(54).extend({
                template: n(2534),
                css: n(2908),
                className: "premiumModalContent",
                element2selector: {
                    iframe: ".premiumModalContent__iframe",
                    failedMessage: ".premiumModalContent__failedMessage",
                    externalLink: ".premiumModalContent__external-link"
                },
                events: {
                    "click .premiumModalContent__external-link": "onExternalLinkClick"
                },
                states: {
                    waiting: "waiting",
                    processing: "processing",
                    external: "external",
                    cancel: "cancel",
                    fail: "fail"
                },
                ModelClass: n(77),
                setup: function() {
                    this.listenTo(n(84), "started", this.onPaymentStarted).listenTo(n(84), "external", this.onPaymentExternal).listenTo(n(84), "processing", this.onPaymentProcessing).listenTo(n(84), "unsuccessful", this.onPaymentUnsuccessful).listenTo(n(84), "finished", this.onPaymentFinished), this.$el.toggleClass("touch", n(97).touch)
                },
                renderDecorate: function() {
                    this.toggleState("waiting", !0), i.call(this, n(84).getPaymentParams())
                },
                writeFailMessage: function(e) {
                    var t = a[e] || a["default"];
                    this.getElement("failedMessage").text(t)
                },
                onExternalLinkClick: function(e) {
                    var i = t(e.target).attr("href");
                    e.preventDefault(), n(84).openExternal(i)
                },
                onPaymentStarted: function() {
                    this.disposed || (this.toggleState("processing", !1), this.rerender())
                },
                onPaymentExternal: function(e, t, n) {
                    this.getElement("iframe").remove(), this.getElement("externalLink").attr("href", n), this.toggleState("external", !0).toggleState("waiting", !1)
                },
                onPaymentProcessing: function() {
                    this.getElement("iframe").remove(), this.toggleState("processing", !0).toggleState("waiting", !0).toggleState("external", !1)
                },
                onPaymentUnsuccessful: function(e, t, i) {
                    this.getElement("iframe").remove(), this.writeFailMessage(i), i === n(84).paymentFailStates.CANCEL ? this.toggleState("cancel", !0) : this.toggleState("fail", !0)
                },
                onPaymentFinished: function() {
                    this.toggleState("external", !1).toggleState("processing", !1).toggleState("waiting", !1)
                }
            })
        }).call(t, n(1))
    },
    1542: function(e, t, n) {
        "use strict";
        e.exports = n(1536).extend({
            defaults: {
                width: 990,
                height: "full",
                warnBeforeClosing: !0,
                productId: null,
                Subview: n(1537)
            },
            onClose: function() {
                n(84).cancel()
            },
            onPaymentStarted: function() {
                this.options.warnBeforeClosing = !0
            },
            onPaymentCanceled: function() {
                this.close(!0)
            },
            onPaymentSuccessful: function() {
                this.close(!0)
            },
            onPaymentUnsuccessful: function() {
                var e = this.options,
                    t = e.width,
                    n = e.height;
                e.width = 850, e.height = null, e.warnBeforeClosing = !1, this.position(), e.width = t, e.height = n
            }
        })
    },
    1547: function(e, t, n) {
        "use strict";
        e.exports = n(71).extend({
            defaults: {
                width: 500,
                Subview: n(1059)
            },
            bubbleEvents: {
                "spam-warning:acknowledged": "close"
            }
        })
    },
    1550: function(e, t, n) {
        "use strict";

        function i() {
            this.bubble("overlay:close")
        }
        e.exports = n(54).extend(n(126).withOptions({
            elSelector: ".whyAds__upsell",
            type: "go"
        }), {
            css: n(2912),
            template: n(2539),
            className: "whyAds sc-clearfix",
            events: {
                "click .whyAds__close": i
            },
            getUpsellRef: function() {
                return "t1020"
            },
            requiredAttributes: ["active"],
            setup: function() {
                this.model = new(n(77))({
                    id: n(72).productIds.CONSUMER_SUBSCRIPTION_HIGH_TIER
                })
            },
            getTemplateData: function(e) {
                return e.showUpsell = e.active, e
            }
        })
    },
    1559: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return function(t) {
                    t.preventDefault(), n(55).get("router").navigate(e, !0)
                }
            }

            function a(e) {
                var n = t.gritter.add(e);
                return t("#gritter-item-" + n)
            }

            function s(e) {
                return a({
                    text: e,
                    image: n(55).get("me").get("avatar_url"),
                    class_name: "no-title"
                })
            }

            function o() {
                var e = this.attr("id").replace(/^.*-(\d+)$/, "$1");
                t.gritter.remove(e)
            }

            function r(e) {
                u(e, "like")
            }

            function l(e) {
                u(e, "repost")
            }

            function u(e, t) {
                var i, s, o, r = "repost" === t,
                    l = "sound" === e.targetType,
                    u = "playlist" === e.targetType,
                    c = n(55).get("me"),
                    d = !0;
                return e.state ? (r ? (s = n(61).getRoute("user", c), d = !1) : l ? s = n(61).getRoute("youNetwork", c, "likes") : u && (s = n(61).getRoute("youNetwork", c, "sets")), i = new(n(75))({
                    id: e.target,
                    resource_type: e.targetType
                }), i.release(), o = {
                    repost: {
                        collection: n(52).t('was reposted to <a href="[[href]]">your Collection</a>.', {
                            href: s
                        }),
                        profile: n(52).t('was reposted to <a href="[[href]]">your profile</a>.', {
                            href: s
                        })
                    },
                    saved: {
                        collection: n(52).t('was saved to <a href="[[href]]">your Collection</a>.', {
                            href: s
                        }),
                        profile: n(52).t('was saved to <a href="[[href]]">your profile</a>.', {
                            href: s
                        })
                    }
                }, a({
                    title: W(i.get("title")),
                    text: o[r ? "repost" : "saved"][d ? "collection" : "profile"],
                    image: n(87).urlFrom(i.attributes, 50),
                    class_name: "oneLine"
                })) : void 0
            }

            function c(e) {
                var t = e.report,
                    i = e.userData,
                    s = i.username,
                    o = t ? n(52).t("Youâ€™ve blocked and reported [[username]] as spam.", {
                        username: s
                    }) : n(52).t("Youâ€™ve blocked [[username]].", {
                        username: s
                    });
                return a({
                    text: o,
                    image: n(87).urlFrom(i, 50),
                    class_name: "no-title"
                })
            }

            function d() {
                return Z("no-flash", {
                    title: n(52).t("You need Adobe Flash Player to play this track."),
                    text: n(52).t('Please <a href="[[href]]" target="_blank">install Flash</a> and reload the page.', {
                        href: "http://get.adobe.com/flashplayer"
                    }),
                    sticky: !0,
                    class_name: "error"
                })
            }

            function p() {
                return Z("no-streams", {
                    text: n(52).t("This track canâ€™t be played right now. Please try again later."),
                    class_name: "error"
                })
            }

            function h() {
                return Z("no-network", {
                    text: n(52).t("Your network connection seems to be disabled. Please check and retry."),
                    class_name: "error",
                    sticky: !0
                })
            }

            function f() {
                return Z("audio-problem", {
                    text: n(52).t("There was a problem playing this track."),
                    class_name: "error"
                })
            }

            function g() {
                var e = Z("flash-block", {
                    text: n(52).t("It looks like you have a Flash blocker enabled. Please disable the Flash blocker to hear this track."),
                    class_name: "error",
                    sticky: !0
                });
                this.listenToOnce(n(57), "audio:flash_unblock", o.bind(e))
            }

            function m() {
                var e = n(55).get("me");
                return a({
                    sticky: !0,
                    class_name: "no-title",
                    title: n(52).t("You changed your password"),
                    text: n(52).t("Now signed in as [[username]]", {
                        username: e.get("username")
                    }),
                    image: e.get("avatar_url")
                })
            }

            function v(e) {
                return a({
                    title: "Oops!",
                    text: e || "Something went wrong with that request.",
                    class_name: "error"
                })
            }

            function _(e) {
                return a({
                    text: e,
                    class_name: "error"
                })
            }

            function y(e) {
                return "join" === e ? "leave" : "un" + e
            }

            function b(e) {
                Z("geoblocked", {
                    text: n(52).t("Sorry, â€œ[[trackTitle]]â€ is not available in your country.", {
                        trackTitle: e.sound.get("title")
                    }),
                    class_name: "error",
                    time: V
                })
            }

            function w() {
                var e = "http://help.soundcloud.com/customer/portal/articles/243877-how-do-i-download-a-sound-";
                a({
                    text: n(52).t('It looks like you have a browser extension installed to enable downloads for all tracks on SoundCloud. This is discouraged by the community, and we feel itâ€™s up to the creator whether or not their track is available for download. Please switch off this extension to continue using our download feature.<br>For more information about downloads, <a href="[[link]]">refer to the help center article</a>.', {
                        link: e
                    }),
                    sticky: !0,
                    class_name: "error"
                })
            }

            function x() {
                var e = n(52).t("Your notifications preferences have been updated successfully.");
                return s(e)
            }

            function k() {
                var e = n(52).t("Your settings have been updated successfully.");
                return s(e)
            }

            function T() {
                var e = n(52).t("Your profile has been updated successfully.");
                return s(e)
            }

            function A(e) {
                var t = n(52).t("An email to [[email]] was sent.", {
                    email: e
                });
                return s(t)
            }

            function S(e) {
                return a({
                    text: n(52).t("Your track has been updated successfully."),
                    image: e.getImageUrl(50),
                    class_name: "no-title"
                })
            }

            function C(e) {
                return a({
                    text: n(52).t("Your playlist has been updated successfully."),
                    image: n(87).urlFrom(e, 50),
                    class_name: "no-title"
                })
            }

            function E(e) {
                return a({
                    image: n(87).urlFrom(e, 50),
                    text: "playlist" === e.resource_type ? n(52).t("Your playlist will be deleted shortly.") : n(52).t("Your track will be deleted shortly."),
                    class_name: "no-title"
                })
            }

            function D(e) {
                var t, i, s, o, r;
                return (s = e.soundSaves[0]) ? (o = s.sound.get("title"), i = n(52).tp("has been updated", "have been updated", e.soundSaves.length), 1 === e.soundSaves.length ? t = n(174).usertextOneline(o, {
                    links: !1,
                    maxLength: 30
                }) : (r = e.soundSaves.length - 1, t = n(52).tp("[[[trackTitle]]] and 1 more track", "[[[trackTitle]]] and %d more tracks", r, {
                    trackTitle: n(174).usertextOneline(o, {
                        links: !1,
                        maxLength: 12
                    })
                })), a({
                    title: t,
                    text: i,
                    class_name: "big-success"
                })) : null
            }

            function M(e) {
                e && e.showSuccessMessage && a({
                    text: n(52).t("Your message to [[username]] was sent successfully", {
                        username: e.recipient.username
                    }),
                    image: e.recipient.avatar_url,
                    class_name: "no-title"
                })
            }

            function $(e) {
                var t = e.recipient && e.recipient.username,
                    i = {
                        "default": n(52).t("Unable to send message.<br>Please retry."),
                        emailnotconfirmed: n(52).t('You need to confirm your email address before sending messages. <a href="[[href]]">Check email settings</a>.', {
                            href: n(61).getRoute("settings")
                        }),
                        ratelimit: n(52).t("Please wait a moment to send your message"),
                        youareblocked: n(52).t("Unable to send message, as [[username]] chose to block you.", {
                            username: t
                        }),
                        privacy: n(52).t("Unable to send message, [[username]] only accepts messages from people that they follow.", {
                            username: t
                        }),
                        receiverdoesntexist: n(52).t("You cannot send this message. [[username]] has been deleted.", {
                            username: t
                        })
                    },
                    s = i[e.errorCode];
                s && a({
                    text: s,
                    class_name: "error"
                })
            }

            function I() {
                a({
                    class_name: "error",
                    text: n(52).t('Please confirm your email address before uploading. <a href="[[href]]">Check email settings</a>.', {
                        href: n(61).getRoute("settings")
                    })
                })
            }

            function P() {
                a({
                    class_name: "error",
                    text: n(52).t("Something went wrong. Please try again.")
                })
            }

            function B() {
                var e = n(52).t("You successfully saved your new payment method.");
                return s(e)
            }

            function N() {
                a({
                    class_name: "error",
                    text: n(52).t("Something went wrong. Please try again.")
                })
            }

            function F(e) {
                e = e || {};
                var t = {
                        unconfirmedEmail: n(52).t('You need to confirm your email address before uploading. <a href="[[href]]">Check email settings</a>.', {
                            href: n(61).getRoute("settings")
                        }),
                        overQuota: n(52).t('You are currently over your upload limit. Please <a href="[[tracksHref]]">manage your tracks</a> or <a href="[[premiumHref]]">upgrade your account</a> to upload more.', {
                            tracksHref: n(61).getRoute("userNetwork", n(55).get("me"), "tracks"),
                            premiumHref: n(61).getRoute("premium")
                        })
                    },
                    i = t[e.errorType];
                i && a({
                    class_name: "error",
                    text: i
                })
            }

            function R() {
                var e = a({
                    class_name: "error",
                    sticky: !0,
                    text: n(52).t('Listening in the background? Enable notifications so you know whatâ€™s playing.<br><a class="bubble__desktopNotificationAccept" aria-role="button" href="">Turn on notifications.</a> <a class="bubble__desktopNotificationReject" aria-role="button" href="">No thanks.</a>')
                });
                e.find(".bubble__desktopNotificationAccept").on("click", function(t) {
                    t.preventDefault(), n(256).create(n(52).t("Done!"), {
                        icon: n(2216)
                    }).closeAfter(3e3), o.call(e)
                }), e.find(".bubble__desktopNotificationReject").on("click", function(t) {
                    t.preventDefault(), o.call(e), n(157).set("newTrackNotifications", "never"), a({
                        text: n(52).t("Ok! If you change your mind, you can adjust your preferences in the settings menu."),
                        class_name: "error"
                    })
                })
            }

            function O(e) {
                var t = e.action,
                    i = e.state,
                    a = e.xhr.status;
                return "likeStation" === t && i && 409 === a ? (Z("too-many-stations", {
                    class_name: "error",
                    text: n(52).t("You have reached the maximum number of 100 liked Stations. Please unlike a Station before trying again.")
                }), !1) : void 0
            }

            function z() {
                H()
            }

            function L() {
                t("#" + G + " ." + Y + " .gritter-close").click()
            }

            function H() {
                a({
                    class_name: "error " + Y,
                    text: n(52).t("Paused because you started playing on another device.")
                })
            }

            function W(e) {
                return n(20).Utils.escapeExpression(e)
            }

            function q() {
                a({
                    class_name: "error",
                    text: n(52).t("Promotional offer unavailable.")
                })
            }

            function U() {
                a({
                    class_name: "error",
                    text: n(52).t("This promotion is available to new SoundCloud Go+ users only.")
                })
            }
            var j = 6e3,
                V = 1e4,
                Y = "gritter-trinity-stop",
                G = "gritter-notice-wrapper",
                X = "activities",
                K = {
                    "checkout.adyen.user.email.not_confirmed": {
                        className: "user-email-not-confirmed",
                        text: n(52).t("Please confirm your email address before purchasing."),
                        linkText: n(52).t("Need help with that?"),
                        linkHref: "http://help.soundcloud.com/customer/portal/articles/243845"
                    },
                    "order.checkout.max_retries_exceeded": {
                        className: "order-checkout-max-retries",
                        text: n(52).t("We encountered a problem. Please try again.")
                    },
                    "order.checkout.exists": {
                        className: "order-checkout-exists",
                        text: n(52).t("This order is already being processed.")
                    }
                },
                Z = (e.exports = n(54).extend(n(68).withOptions("notificationBubble"), {
                    css: n(2917),
                    setup: function() {
                        n(3).assign(t.gritter.options, {
                            position: "top-right",
                            fade_in_speed: "medium",
                            fade_out_speed: 500,
                            time: j
                        });
                        var e, i = n(55).get("notifications"),
                            a = n(122)[X].get("channel");
                        i && a && (n(3).bindAll(this, "onNotification"), i.subscribe(a, this.onNotification)), e = new(n(220)), n(74).bindErrorHandler(O), this.listenTo(n(74), "addToPlaylist", J).listenTo(n(74), "error", this.onActionError).listenTo(n(74), "like", r).listenTo(n(74), "repost", l).listenTo(n(57), "user:blocked", c).listenTo(n(57), "audible:delete-already-queued", E).listenTo(n(57), "connect:connectionError", _).listenTo(n(57), "delete-account:error", P).listenTo(n(57), "desktop-notification-reminder", R).listenTo(n(57), "downloader", w).listenTo(n(57), "error:ajax", v).listenTo(n(57), "error:audio_error", f).listenTo(n(57), "error:audio_no_streams", p).listenTo(n(57), "error:audio_no_connection", h).listenToOnce(n(57), "error:audio_support", d).listenTo(n(57), "error:choose_files", F).listenTo(n(57), "geoBlocked", b).listenTo(n(57), "multi-track:saved", D).listenTo(n(57), "new-message:failed", $).listenTo(n(57), "new-message:sent", M).listenTo(n(57), "promotion:error", q).listenTo(n(57), "promotion:existing_sub", U).listenTo(n(57), "payment-details:error", N).listenTo(n(57), "payment-details:saved", B).listenTo(n(57), "playlist:saved", C).listenTo(n(57), "settings:saved", k).listenTo(n(57), "profile:saved", T).listenTo(n(57), "emailConfirmation:sent", A).listenTo(n(57), "notifications-preferences:saved", x).listenTo(n(57), "signin:passwordResetSuccess", m).listenTo(n(57), "sound:saved", S).listenTo(n(57), "upload:image:unconfirmed", I).listenTo(n(57), "concurrent_streaming:pause", z).listenTo(n(57), "audio:play", L).listenTo(n(84), "error", this.onPaymentError).listenTo(e, "error", this.onUploadError).listenToOnce(n(57), "flash:block", g)
                    },
                    template: function() {
                        return ""
                    },
                    display: function(e, t) {
                        "object" == typeof e ? t = e : (t || (t = {}), t.text = e), a(t)
                    },
                    onActionError: function(e) {
                        this.displayError("action", e)
                    },
                    onPaymentError: function(e) {
                        this.displayError("payment", e)
                    },
                    onUploadError: function(e) {
                        this.displayError("upload", e)
                    },
                    onNotification: function(e) {
                        var t = this;
                        this.fetchNotification(e.uuid).done(function(e) {
                            var i, a, s, o, r, l = n(55).get("me").id;
                            if (e) switch (t.displayActivity(e), s = e.get("type"), o = {
                                origin: e.get("user").id,
                                context: t.getContextData()
                            }, s) {
                                case "track-like":
                                case "track-repost":
                                case "playlist-like":
                                case "playlist-repost":
                                    s.indexOf("track") > -1 ? (i = e.get("track").id, a = "sound") : (i = e.get("playlist").id, a = "playlist"), r = s.indexOf("repost") > -1 ? "repost" : "like", n(74)[r](i, a, !0, o);
                                    break;
                                case "affiliation":
                                    n(74).follow(l, !0, o)
                            }
                        })
                    },
                    fetchNotification: function(e) {
                        var t = n(56).defer(),
                            i = n(512).getNewInstance([], {
                                limit: 1,
                                offset: null
                            });
                        return i.baseUrl = n(62).modify(i.baseUrl, {
                            query: {
                                cursor: e
                            }
                        }), i.fetch().always(function() {
                            i.release()
                        }).done(function() {
                            t.resolve(i.at(0))
                        }).fail(t.reject), t
                    },
                    displayActivity: function(e) {
                        var t = e.get("type"),
                            s = e.get(t.replace(/-.*/, "")),
                            o = e.get("user") || s.user || {},
                            r = o.username,
                            l = s.title,
                            u = {
                                title: " ",
                                image: o.avatar_url,
                                url: o.permalink_url.replace(/^https?:\/\/.*?\//, "/")
                            };
                        switch (t) {
                            case "track-like":
                            case "favoriting":
                            case "playlist-like":
                                u.text = n(52).t("[[username]] liked [[objectTitle]]", {
                                    username: r,
                                    objectTitle: l
                                });
                                break;
                            case "track-repost":
                            case "playlist-repost":
                                u.text = n(52).t("[[username]] reposted [[objectTitle]]", {
                                    username: r,
                                    objectTitle: l
                                });
                                break;
                            case "comment":
                                u.text = n(52).t("[[username]] commented on [[objectTitle]]", {
                                    username: r,
                                    objectTitle: s.track.title
                                }), u.url = n(62).modify(s.track.permalink_url, {
                                    path: n(62).parse(s.track.permalink_url).path += "/comment-" + s.id
                                }).replace(/^https?:\/\/.*?\//, "/");
                                break;
                            case "affiliation":
                                u.text = n(52).t("[[username]] followed you", {
                                    username: r
                                });
                                break;
                            case "track":
                                u.text = n(52).t("[[username]] mentioned you on a track", {
                                    username: r
                                });
                                break;
                            case "playlist":
                                u.text = n(52).t("[[username]] mentioned you on a playlist", {
                                    username: r
                                })
                        }
                        u.text = u.text.substr(0, 74) + (u.text.length > 75 ? "&hellip;" : ""), a(u).on("click", i(u.url)).addClass("sc-selection-disabled")
                    },
                    displayError: function(e, t) {
                        var i, s, o, r, l, u, c = t && t.action;
                        switch (e) {
                            case "action":
                                if (i = t.xhr.status, 429 === i) return;
                                "follow" === c ? 422 === i ? (r = "http://help.soundcloud.com/customer/portal/articles/102487-why-can-t-i-follow-unfollow-any-more-people-", l = n(52).t("Learn more"), s = n(52).t("You have reached the limit of accounts that you can follow.")) : 403 === i && (s = n(52).t("This community member has asked us to block your account from following them.")) : "upload_image" === c ? s = n(52).t("Error uploading image.") : "switch_locale" === c && (s = n(52).t("Something went wrong when switching languages. Please try again later.")), c && !s && (s = n(52).t("Something went wrong when trying to [[action]] this [[objectType]]", {
                                    action: t.state ? c : y(c),
                                    objectType: t.targetType
                                })), o = c;
                                break;
                            case "payment":
                                u = K[t], u ? (s = u.text, l = u.linkText, r = u.linkHref, o = u.className) : (s = n(52).t("Something went wrong with the payment. Please try again later."), o = "generic");
                                break;
                            case "upload":
                                "invalid" === t.name && (s = n(52).tp("One of your files is too large or not supported", "%d of your files are too large or not supported.", t.count), r = "http://help.soundcloud.com/customer/portal/articles/1198303-what-types-of-files-can-i-upload-%5C", l = n(52).t("Read about our supported file types and sizes.")), o = t.name
                        }
                        s && a({
                            text: s + (l ? ' <a href="' + r + '"' + ("/" === r[0] ? "" : ' target="_blank"') + ">" + l + "</a>" : ""),
                            class_name: "error " + [e, o].join("-")
                        })
                    }
                }), function() {
                    var e = {};
                    return function(i, a) {
                        var s = !e[i] || 0 === t("#gritter-item-" + e[i]).length;
                        s && (e[i] = t.gritter.add(a));
                        var o = t("#gritter-item-" + e[i]);
                        return s || Q(o, n(3).pick(a, "text", "title")), o
                    }
                }()),
                Q = function(e, t) {
                    var n = t.text,
                        i = t.title;
                    e.find(".gritter-title").html((i || "").toString()), e.find("p").html((n || "").toString())
                },
                J = function() {
                    var e = [],
                        t = n(3).debounce(function() {
                            e.length && (n(3).forEach(n(3).groupBy(e, "playlistId"), function(e) {
                                var t = e[0],
                                    i = e.slice(1),
                                    s = !i.length,
                                    o = {
                                        href: t.href,
                                        playlistTitle: t.playlistTitle
                                    },
                                    r = void 0;
                                r = s ? n(52).t('was added to <a href="[[href]]">[[playlistTitle]]</a>.', o) : n(52).tp('and %d other track were added to <a href="[[href]]">[[playlistTitle]]</a>.', 'and %d other tracks were added to <a href="[[href]]">[[playlistTitle]]</a>.', i.length, o), a({
                                    title: t.soundTitle,
                                    text: r,
                                    image: t.image,
                                    class_name: s ? "oneLine" : ""
                                })
                            }), e.length = 0)
                        }, 50);
                    return function(i) {
                        if (i.state && i.target) {
                            var a = new(n(75))({
                                    id: i.target,
                                    resource_type: i.targetType
                                }),
                                s = i.object,
                                o = n(61).getRoute("playlist", a);
                            a.release(), e.push({
                                playlistId: a.id,
                                soundTitle: W(s.get("title")),
                                playlistTitle: a.get("title"),
                                href: o,
                                image: n(87).urlFrom(s.attributes, 50)
                            }), t()
                        }
                    }
                }()
        }).call(t, n(1))
    },
    1560: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(470), {
            tagName: "span",
            css: n(2918),
            className: "newItemBadge",
            template: function() {
                return ""
            }
        })
    },
    1581: function(e, t, n) {
        "use strict";
        var i = n(114).el;
        e.exports = n(54).extend({
            className: "castControl",
            css: n(2939),
            defaults: {
                context: "playControls"
            },
            states: {
                visible: function(e) {
                    this.$el.toggle(e)
                }
            },
            setup: function(e) {
                var t = e.context;
                this.toggleState("visible", !1, !0), "playControls" === t && this.$el.addClass("castControl__playControls")
            },
            renderDecorate: function() {
                var e = this;
                n(172).getInstance().then(function(t) {
                    e.toggleState("visible", t.isAvailable()), e.listenTo(n(57), "googleCast:available", function() {
                        e.toggleState("visible", !0)
                    }), e.listenTo(n(57), "googleCast:unavailable", function() {
                        e.toggleState("visible", !1)
                    })
                })
            },
            template: function() {
                return i("button", {
                    is: "google-cast-button"
                })
            }
        })
    },
    1582: function(e, t, n) {
        "use strict";

        function i(e) {
            e = e || n(94).getCurrentAd();
            var t, i;
            n(94).isBlockedFromSkipping() ? (t = !0, i = p(e)) : (t = !1, i = n(52).t("Skip")), this._skipButtonDisabled !== t && (this._skipButtonDisabled = t, this.getElement("skipButton").toggleClass("m-disabled", t)), this._skipButtonText !== i && (this._skipButtonText = i, this.getElement("skipButton").text(i))
        }

        function a() {
            var e = this;
            n(94).metrics("companion_display:clickthrough", {
                context: this.getContextData(),
                contextName: this.contextName
            }), n(94).clicked().then(function(t) {
                return "sound" === t.resource_type ? n(94).skip().always(function() {
                    return e.playAudible(t)
                }) : void 0
            })
        }

        function s(e) {
            e.preventDefault(), this._whyAdsModal || (this._whyAdsModal = new(n(1031))({
                togglerEl: e.target
            })), this._whyAdsModal.open();
            var t = n(94).getCurrentAd();
            h(null, {
                click_name: "companion_display::why_ads",
                click_object: t.sound.getUrn(),
                click_target: null,
                monetized_object: t.sound.getMonetizableTrack().getUrn(),
                monetization_type: "audio_ad",
                external_media: null,
                ad_urn: t.get("companion_display").ad_urn,
                context: this.getContextData()
            })
        }

        function o() {
            return n(94).skip({
                context: this.getContextData(),
                contextName: this.contextName
            })
        }

        function r() {
            n(94).metrics("audio_ad:playStart"), n(94).metrics("audio_ad:impression", {
                context: this.getContextData(),
                contextName: this.contextName
            })
        }

        function l() {
            this.toggleState("active", !0)
        }

        function u() {
            this.toggleState("active", !1)
        }

        function c() {
            this.toggleState("active", !1), n(94).metrics("audio_ad:finish", {
                context: this.getContextData(),
                contextName: this.contextName
            })
        }

        function d(e) {
            i.call(this, e)
        }

        function p(e) {
            var t = n(52).dateTimeHelper.timecode(e.getMsUntilCanSkip(), {
                minimal: !0
            });
            return e.sound.getMediaDuration() - e.getRequiredListenPeriod() < 1e3 ? t : n(52).t("Skip in [[skipText]]", {
                skipText: t
            })
        }
        var h = n(59).trackV0Click;
        e.exports = n(54).extend(n(202).withOptions({
            automatic: !1
        }), n(149), n(68).withOptions("playControlsPanel"), n(471).withOptions({
            elName: "skip",
            dim: !1
        }), {
            className: "playControlsPanel sc-font-body sc-background-darkgrey",
            css: n(2940),
            template: n(2565),
            defaults: {
                height: 250,
                width: 300
            },
            events: {
                "click .playControlsPanel__skip": o,
                "click .playControlsPanel__adVisual": a,
                "click .playControlsPanel__whyAds": s
            },
            element2selector: {
                adVisual: ".playControlsPanel__adVisual",
                landingPage: ".playControlsPanel__landingPage",
                skip: ".playControlsPanel__skip",
                skipButton: ".playControlsPanel__skipButton",
                whyAds: ".playControlsPanel__whyAds"
            },
            _whyAdsModal: null,
            _skipButtonDisabled: null,
            _skipButtonText: null,
            states: {
                active: function(e) {
                    var t = this;
                    e ? (this.rerender(), this.$el.addClass("is-visible is-active")) : (this.$el.removeClass("is-active"), this.addDeferred(window.setTimeout(function() {
                        t.$el.removeClass("is-visible"), t._teardown()
                    }, 300)))
                },
                companionless: "m-companionless",
                loaded: function(e) {
                    this.getElement("adVisual").toggleClass("loaded", e), this.getElement("landingPage").toggleClass("sc-pending-dark", !e)
                }
            },
            slideInnerSelector: ".playControlsPanel__inner",
            hasData: function() {
                return !!n(94).getCurrentSound()
            },
            setup: function() {
                this.listenTo(n(94), "ad:play", l).listenTo(n(94), "ad:playStart", r).listenTo(n(94), "ad:skip", u).listenTo(n(94), "ad:finish", c).listenTo(n(94), "ad:time", d)
            },
            getTemplateData: function(e) {
                var t = n(94).getCurrentAd(),
                    i = t.get("companion_display") || {},
                    a = i.ad_visual,
                    s = (t.getLandingPage() || "").replace(n(183).soundcloudUrlRegex, "/");
                return a && (e.adVisual = a, e.landingPage = s), e
            },
            renderDecorate: function() {
                var e = n(94).getCurrentAd(),
                    t = e.get("audio"),
                    a = e.get("companion_display") || {},
                    s = a.ad_visual;
                this._skipButtonDisabled = !1, this._skipButtonText = "", this.toggleState("companionless", !s), t && i.call(this, e), s && this.addDeferred(n(87).load(s)).then(this.toggleState.bind(this, "loaded", !0)).then(n(94).metrics.bind(null, "companion_display:impression", {
                    context: this.getContextData(),
                    contextName: this.contextName
                }))
            },
            teardown: function() {
                this._skipButtonDisabled = null, this._skipButtonText = null, this.getElement("adVisual").attr("src", ""), this.toggleState("loaded", !1)
            },
            dispose: function() {
                this._whyAdsModal && (this._whyAdsModal.close(), this._whyAdsModal = null)
            }
        })
    },
    1583: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("visible", !0)
        }

        function a() {
            var e = this;
            this.toggleState("volumeInactive", !0), this.addTimeout(function() {
                e.toggleState("volumeInactive", !1)
            }, 500)
        }

        function s() {
            this.toggleState("visible", !0)
        }

        function o() {
            this.toggleState("queueVisible")
        }
        e.exports = n(54).extend(n(68).withOptions("playControls"), {
            template: n(2566),
            css: n(2941),
            className: "playControls g-z-index-header",
            states: {
                visible: "m-visible",
                volumeInactive: "m-volumeInactive",
                queueVisible: "m-queueVisible"
            },
            setup: function() {
                this.listenToOnce(n(57), "audio:play", s).listenTo(n(57), "queue:toggle", o).listenToOnce(n(94), "ad:play", i).listenTo(n(94), "ad:skip", a)
            },
            getTemplateData: function(e) {
                var t = n(55).get("rollouts").get("play_queue");
                return e.showQueue = t, e.showRepeat = !t, e.showCastControl = n(55).get("rollouts").get("google_cast"), e
            }
        })
    },
    1584: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(94).getCurrentSound();
            this.toggleState("playing", !(!e || !e.isPlaying()))
        }

        function a() {
            var e = n(67).getCurrentSound();
            this.toggleState("playing", !(!e || !e.isPlaying())).toggleState("disabled", !n(67).hasCurrentSound())
        }

        function s(e, t) {
            t && this.stopListening(t), e && this.listenTo(e, "add remove reset", a), a.call(this)
        }
        var o = n(52).t("Play current"),
            r = n(52).t("Pause current");
        e.exports = n(54).extend(n(88), {
            className: "playControl sc-ir",
            css: n(2942),
            defaults: {
                isScButton: !1
            },
            states: {
                playing: function(e) {
                    this.$el.toggleClass("playing", e), this.updateButton(e ? "playing" : "default")
                },
                disabled: function(e) {
                    this.$el.toggleClass("disabled").attr("tabindex", e ? "-1" : "")
                }
            },
            buttonLabels: {
                "default": o,
                playing: r
            },
            setup: function() {
                this.listenTo(n(67), "change:source", s).listenTo(n(67), "state:hasCurrent", a).listenTo(n(94), "ad:play ad:pause", i).listenTo(n(94), "ad:skip ad:finish", a).listenTo(n(57), "audio:play audio:pause", a)
            },
            onClick: function() {
                this.getState("disabled") || n(67).toggleCurrent({
                    userInitiated: !0
                })
            },
            renderDecorate: function() {
                a.call(this)
            }
        })
    },
    1585: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = {
                resource_id: e.resourceId
            };
            switch (e.resourceType) {
                case "user":
                    return [new(n(64))(t), {
                        requiredAttributes: ["username"]
                    }];
                case "sound":
                    return [new(n(66))(t), {
                        requiredAttributes: ["title"]
                    }];
                case "playlist":
                    return [new(n(86))(t), {
                        requiredAttributes: ["title"]
                    }];
                case "station":
                    return [new(n(119))(t), {
                        requiredAttributes: ["title"]
                    }];
                default:
                    return null
            }
        }

        function a() {
            r.call(this, n(67).getCurrentSound())
        }

        function s() {
            this.toggleState("adPlaying", !0), r.call(this, n(94).getUpcomingSound())
        }

        function o() {
            this.toggleState("adPlaying", !1), r.call(this, n(67).getCurrentSound())
        }

        function r(e) {
            var t = this.sound !== e;
            e && (this.setupSound(e), this.setupContext()), this.sound && (u.call(this), t ? this.rerender() : c.call(this))
        }

        function l(e) {
            this.googleCastDeviceName !== e && (this.googleCastDeviceName = e, this.sound && c.call(this))
        }

        function u() {
            this.toggleState("paused", this.sound.isPaused())
        }

        function c() {
            var e = this.getElement("context"),
                t = this.getContextText().toString();
            e.html(t).attr("title", t)
        }

        function d() {
            n(57).trigger("queue:toggle")
        }

        function p(e) {
            e.keyCode === n(102).ESC && (n(57).trigger("queue:toggle"), e.preventDefault())
        }
        e.exports = n(54).extend({
            css: n(2945),
            template: n(2567),
            className: "playbackSoundBadge",
            states: {
                paused: "paused",
                adPlaying: "is-adPlaying"
            },
            element2selector: {
                avatar: ".playbackSoundBadge__avatar",
                context: ".playbackSoundBadge__context",
                likeButton: ".sc-button-like",
                title: ".playbackTitle__title"
            },
            events: {
                "click .playbackSoundBadge__context": "onContextClick",
                "click .playbackSoundBadge__showQueue": d,
                "keyup .playbackSoundBadge__showQueue": p
            },
            contextModel: null,
            googleCastDeviceName: null,
            setup: function() {
                var e = this;
                this.listenTo(n(67), "change:currentSound change:source", a).listenTo(n(94), "ad:play", s).listenTo(n(94), "ad:skip ad:finish", o), this.setupSound(n(67).getCurrentSound()), this.setupContext(), n(172).getInstance().then(function(t) {
                    l.call(e, t.getSafeDeviceName()), e.listenTo(n(57), "googleCast:audioHijack", function() {
                        l.call(e, t.getSafeDeviceName())
                    }), e.listenTo(n(57), "googleCast:end", function() {
                        l.call(e, null)
                    })
                })
            },
            dispose: function() {
                this.teardownSound(), this.teardownContext()
            },
            setupSound: function(e) {
                e && (this.sound !== e && (this.teardownSound(), this.teardownContext()), e.hold(), this.sound = this.addDataSource(e, {
                    requiredAttributes: ["title"]
                }), this.listenTo(this.sound, "play pause", u))
            },
            teardownSound: function() {
                this.sound && (this.removeDataSource(this.sound), this.stopListening(this.sound, "play pause", u), this.sound = null)
            },
            setupContext: function() {
                var e = n(67).getCurrentMetadata();
                if (e && e.sourceInfo) {
                    var t = i(e.sourceInfo),
                        a = t && t[0];
                    a !== this.contextModel ? (this.teardownContext(), a && this.addDataSource(a, t[1]), this.contextModel = a) : a && a.release()
                }
            },
            teardownContext: function() {
                this.contextModel && (this.removeDataSource(this.contextModel), this.contextModel = null)
            },
            hasData: function() {
                return !0
            },
            getTemplateData: function(e) {
                if (!this.sound) return e;
                var t = this.sound.get("title");
                return e.contextText = this.getContextText(), e.sound = this.sound, e.soundTitle = t, e.fullSoundTitle = n(52).t("Current track: [[trackTitle]]", {
                    trackTitle: t
                }), e.adPlaying = this.getState("adPlaying"), e.hasData = !0, e.showQueue = n(55).get("rollouts").get("play_queue"), e.showLike = !e.showQueue && this.sound.isPublic(), e
            },
            onContextClick: function(e) {
                e.isMetaKey() || e.isMiddleClick() || (e.preventDefault(), n(67).restoreState())
            },
            getContextText: function() {
                if (!n(67).getCurrentSound()) return "";
                var e = n(67).getCurrentMetadata().sourceInfo,
                    t = this.contextModel && n(55).get("me").id === this.contextModel.id,
                    i = this.contextModel && {
                        username: this.contextModel.get("username")
                    };
                if (this.getState("adPlaying")) return "Up Next:";
                if (this.googleCastDeviceName) return n(52).t("Casting to [[[googleCastDevice]]]", {
                    googleCastDevice: this.googleCastDeviceName
                });
                switch (e.type) {
                    case "conversation":
                        return n(52).t("Playing from a conversation with [[username]]", i);
                    case "stream":
                        return n(52).t("Playing from your stream");
                    case "search":
                    case "search:albums":
                    case "search:high_tier":
                    case "search:playlists":
                    case "search:top_results":
                    case "search:tracks":
                        return n(52).t("Playing from search results");
                    case "tags-sound":
                    case "tags-playlist":
                        return n(52).t("Playing from [[tag]]", {
                            tag: e.resourceId
                        });
                    case "user-albums":
                        return t ? n(52).t("Playing from your albums") : n(52).t("Playing from [[username]]â€™s albums", i);
                    case "user-profile":
                        return t ? n(52).t("Playing from your profile") : n(52).t("Playing from [[username]]â€™s profile", i);
                    case "user-playlists":
                        return t ? n(52).t("Playing from your playlists") : n(52).t("Playing from [[username]]â€™s playlists", i);
                    case "user-liked-albums":
                        return t ? n(52).t("Playing from your liked albums") : n(52).t("Playing from [[username]]â€™s liked albums", i);
                    case "user-likes":
                        return t ? n(52).t("Playing from your likes") : n(52).t("Playing from [[username]]â€™s likes", i);
                    case "user-track_likes":
                        return t ? n(52).t("Playing from your liked tracks") : n(52).t("Playing from [[username]]â€™s liked tracks", i);
                    case "user-tracks":
                    case "user-sounds":
                        return t ? n(52).t("Playing from your tracks") : n(52).t("Playing from [[username]]â€™s tracks", i);
                    case "user-reposts":
                        return t ? n(52).t("Playing from your reposts") : n(52).t("Playing from [[username]]â€™s reposts", i);
                    case "charts":
                        return n(52).t("Playing from [[[display]]]", {
                            display: n(124).taglines(e.chartKind, e.genre)["short"]
                        });
                    case "recommender":
                        return n(52).t("Playing from related tracks for [[title]]", {
                            title: this.contextModel.get("title")
                        });
                    case "new-for-you":
                        return n(52).t("Playing from The Upload");
                    case "personal-recommended":
                        return n(52).t("Playing from your suggested tracks");
                    case "home":
                        return n(52).t("Playing from the home page");
                    case "sets-for-sound":
                        return n(52).t("Playing from playlists containing [[title]]", {
                            title: this.contextModel.get("title")
                        });
                    case "history":
                        return n(52).t("Playing from your history");
                    case "single":
                        return this.sound.playlist ? n(52).t("Playing from [[title]]", {
                            title: this.sound.playlist.get("title")
                        }) : n(52).t("Playing track");
                    case "stations":
                        switch (this.contextModel.get("type")) {
                            case n(119).types.ARTIST:
                                return n(52).t("Playing from artist station [[title]]", {
                                    title: this.contextModel.get(this.contextModel.getTitleAttribute())
                                });
                            case n(119).types.TRACK:
                            default:
                                return n(52).t("Playing from track station [[title]]", {
                                    title: this.contextModel.get(this.contextModel.getTitleAttribute())
                                })
                        }
                    default:
                        return ""
                }
            }
        })
    },
    1586: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                this.toggleState("hasSound", !!e).toggleState("snippet", !!e && e.isSnippetized()), this.setupSound(e), this.sound ? u.call(this) : c.call(this)
            }

            function a() {
                this.toggleState("scrubbable", !1), i.call(this, n(94).getCurrentSound())
            }

            function s() {
                this.toggleState("scrubbable", !0), i.call(this, n(67).getCurrentSound())
            }

            function o() {
                i.call(this, n(67).getCurrentSound())
            }

            function r(e, t) {
                d(e, this.getElement("timepassed"), "currentTime"), n(157).get("showTimeRemaining") && d(e - t, this.getElement("duration"), "remaining")
            }

            function l() {
                this.sound && u.call(this)
            }

            function u() {
                var e = this.getState("dragging"),
                    t = this.sound,
                    i = t.getMediaDuration(),
                    a = t.currentTime(),
                    s = Math.floor(a / 1e3),
                    o = Math.ceil(a / i * this._progressWidth()) || (t.isPlaying() ? 1 : 0);
                o === this._progressLastPosition || e || (this._progressLastPosition = o, this.getElement("progressBar").css("width", o), this.getElement("progressHandle").css("left", o)), i !== this._progressLastDuration && (this._progressLastDuration = i, this.getElement("progressWrapper").attr("aria-valuemax", i), d(i, this.getElement("duration"), "duration")), s !== this._progressLastSeconds && (this._progressLastSeconds = s, this.getElement("progressWrapper").attr({
                    "aria-valuenow": a,
                    "aria-valuetext": n(52).dateTimeHelper.timecode(a, {
                        inWords: !0
                    })
                }), e || r.call(this, a, i))
            }

            function c() {
                this.getElement("progressBar").css("width", 0), this.getElement("progressHandle").css("left", 0)
            }

            function d(e, t, i) {
                var a = Math.abs(e),
                    s = 0 > e,
                    o = n(52).dateTimeHelper.timecode(a, {
                        inWords: !0
                    }),
                    r = (s ? "-" : "") + n(52).dateTimeHelper.timecode(a),
                    l = {
                        timeInWords: o
                    },
                    u = "currentTime" === i ? n(52).t("Current time: [[timeInWords]]", l) : "duration" === i ? n(52).t("Duration: [[timeInWords]]", l) : "remaining" === i ? n(52).t("Remaining: [[timeInWords]]", l) : "";
                t.html(n(534).getAccessibleMarkup({
                    screenreader: u,
                    visible: r
                }))
            }

            function p() {
                var e = n(157).get("showTimeRemaining");
                n(157).set("showTimeRemaining", !e)
            }

            function h() {
                var e = this.sound,
                    t = e.getMediaDuration();
                n(157).get("showTimeRemaining") ? r.call(this, e.currentTime(), t) : d(t, this.getElement("duration"), "duration")
            }
            e.exports = n(54).extend({
                css: n(2946),
                template: n(2568),
                className: "playbackTimeline",
                element2selector: {
                    timepassed: ".playbackTimeline__timePassed",
                    duration: ".playbackTimeline__duration",
                    progressWrapper: ".playbackTimeline__progressWrapper",
                    progressBar: ".playbackTimeline__progressBar",
                    progressHandle: ".playbackTimeline__progressHandle"
                },
                events: {
                    "click .playbackTimeline__duration": p
                },
                states: {
                    hasSound: "has-sound",
                    dragging: "is-dragging",
                    scrubbable: function(e) {
                        this.$el.toggleClass("is-scrubbable", e), this.$el[e ? "on" : "off"]("mousedown", ".playbackTimeline__progressWrapper", this.startDragging)
                    },
                    snippet: "m-is-snippet"
                },
                setup: function() {
                    this.listenTo(n(67), "change:currentSound", o).listenTo(n(67), "change:source", o).listenTo(n(94), "ad:play", a).listenTo(n(94), "ad:skip ad:finish", s).listenTo(n(157), "showTimeRemaining", h).listenTo(n(85), "resize:x:debounced", l), this.setupSound(n(67).getCurrentSound()), n(3).bindAll(this, "startDragging", "drag", "endDragging", "updateSizesCache"), this.toggleState("scrubbable", !0)
                },
                setupSound: function(e) {
                    e && (this.sound !== e && this.teardownSound(), e.hold(), this.sound = this.addDataSource(e, {
                        requiredAttributes: ["title"]
                    }), this.listenTo(this.sound, "play finish time seeked", u).listenTo(this.sound, "change:policy", o))
                },
                renderDecorate: function() {
                    t(window).on("resize", this.updateSizesCache)
                },
                startDragging: function(e) {
                    this.toggleState("dragging", !0), this.drag(e), t(window.document).one("mouseup", this.endDragging).on("mousemove", this.drag)
                },
                drag: function(e) {
                    e.preventDefault();
                    var t = this._percentFromMouseCoords(e),
                        n = this.sound.getMediaDuration();
                    this.getElement("progressBar").css("width", t * this._progressWidth()), this.getElement("progressHandle").css("left", t * this._progressWidth()), r.call(this, t * n, n)
                },
                endDragging: function(e) {
                    this.seekSound(this._percentFromMouseCoords(e)), this.toggleState("dragging", !1), t(window.document).off("mousemove", this.drag)
                },
                updateSizesCache: function() {
                    this._progressWidth(!0), this._progressOffset(!0)
                },
                _progressWidth: function(e) {
                    var t = this._progressWidthCache;
                    return (e || !t) && (t = this._progressWidthCache = this.getElement("progressWrapper").width()), t
                },
                _progressOffset: function(e) {
                    var t = this._progressOffsetCache;
                    return (e || !t) && (t = this._progressOffsetCache = this.getElement("progressWrapper").offset()), t
                },
                _percentFromMouseCoords: function(e) {
                    var t = 10;
                    return n(132).clamp((e.clientX - this._progressOffset().left - t / 2) / this._progressWidth(), 0, 1)
                },
                seekSound: function(e) {
                    this.sound && this.sound.seek(this.sound.getMediaDuration() * e)
                },
                teardown: function() {
                    t(window).off("resize", this.updateSizesCache)
                },
                teardownSound: function() {
                    this.sound && (this.removeDataSource(this.sound), this.stopListening(this.sound, "play finish time seeked", u), this.sound = null)
                }
            })
        }).call(t, n(1))
    },
    1587: function(e, t, n) {
        (function(t) {
            "use strict";

            function i() {
                window.clearTimeout(this.hideSliderTimeout), this.toggleState("expanded", !0), this.toggleState("hover", !0)
            }

            function a() {
                this.toggleState("hover", !1), this.getState("dragging") || this.toggleState("expanded", !1)
            }
            var s = n(59).trackV0Click,
                o = "volume",
                r = (e.exports = n(54).extend({
                    template: n(2569),
                    css: n(2947),
                    className: "volume",
                    element2selector: {
                        range: ".volume__range",
                        sliderBackground: ".volume__sliderBackground",
                        sliderProgress: ".volume__sliderProgress",
                        sliderHandle: ".volume__sliderHandle",
                        sliderWrapper: ".volume__sliderWrapper"
                    },
                    events: {
                        "click .volume__iconWrapper": "onIconClick",
                        "focus .volume__button": "onMuteButtonFocus",
                        "blur .volume__button": "onMuteButtonBlur",
                        "mousedown .volume__sliderWrapper": "startDragging"
                    },
                    states: {
                        expanded: "expanded",
                        hover: "hover",
                        dragging: "dragging",
                        muted: "muted"
                    },
                    sliderValue: null,
                    setup: function() {
                        var e = n(157).get("volume"),
                            t = n(156) && n(156).size() > 1;
                        this.sliderValue = e || 1, 0 === e && t && (this.sliderValue = 0), this.listenTo(n(57), "broadcast:mute:toggle", this.onMuteChange).listenTo(n(57), "broadcast:volume:set", this.updateFromOtherTab).listenTo(n(57), "volume:change", this.onVolumeChange), n(3).bindAll(this, "startDragging", "drag", "endDragging")
                    },
                    _sliderHeight: function() {
                        var e = this._sliderHeightCache;
                        return e || (e = this._sliderHeightCache = this.getElement("sliderBackground").height()), e
                    },
                    _sliderOffset: function(e) {
                        var t = this._sliderOffsetCache;
                        return (e || !t) && (t = this._sliderOffsetCache = this.getElement("sliderBackground").offset()), t
                    },
                    startDragging: function(e) {
                        this.toggleState("dragging", !0), this._resetOffset(), this.drag(e), t(window.document).one("mouseup", this.endDragging).on("mousemove", this.drag)
                    },
                    drag: function(e) {
                        e.preventDefault();
                        var t = this._percentFromMouseCoords(e);
                        this.getElement("progressBar").css("width", t * this._sliderHeight()), this.getElement("progressHandle").css("top", t * this._sliderHeight()), this.updateSlider(t), this.syncState(t)
                    },
                    _percentFromMouseCoords: function(e) {
                        var t = 4,
                            i = (e.pageY - this._sliderOffset().top - t) / this._sliderHeight();
                        return i = n(132).clamp(i, 0, 1), i = Math.abs(1 - i), i = Math.round(10 * i) / 10
                    },
                    endDragging: function() {
                        this.toggleState("dragging", !1), t(window.document).off("mousemove", this.drag), this.getState("hover") || this.toggleState("expanded", !1)
                    },
                    renderDecorate: function() {
                        var e = this;
                        this.whenInserted().done(function() {
                            e.$el.hoverIntent({
                                over: i.bind(e),
                                out: a.bind(e),
                                timeout: 75,
                                interval: 50,
                                sensitivity: 7
                            }), e.updateSlider(e.sliderValue), e.syncState(e.sliderValue)
                        })
                    },
                    getTemplateData: function() {
                        return {
                            volumeLevel: this.sliderValue
                        }
                    },
                    onIconClick: function() {
                        n(57).broadcast("mute:toggle")
                    },
                    onMuteButtonFocus: i,
                    onMuteButtonBlur: a,
                    onVolumeChange: function(e) {
                        var t = n(132).precise(parseFloat(this.sliderValue + e), 1);
                        t = n(132).clamp(t, 0, 1), this.updateSlider(t), this.syncState(t), i.call(this), this.hideSliderTimeout = this.addDeferred(window.setTimeout(a.bind(this), 1e3))
                    },
                    onMuteChange: function(e) {
                        this.getState("muted") || e === !1 ? (this.updateSlider(this.sliderValue), this.toggleState("muted", !1), this.syncState(this.sliderValue)) : (this.updateSlider(0), this.toggleState("muted", !0), this.syncState(0))
                    },
                    updateSlider: function(e) {
                        this.getElement("sliderProgress").height(this._sliderHeight() * e), this.getElement("sliderHandle").css("top", this._sliderHeight() + 10 - this._sliderHeight() * e), this.getElement("sliderWrapper").attr("aria-valuenow", e), this.$el.attr("data-level", Math.floor(10 * e))
                    },
                    syncState: function(e) {
                        var t = this.sliderValue;
                        this.toggleState("muted", 0 === e), 0 !== e && (this.sliderValue = e), t !== e && (n(157).set(o, e), n(57).broadcast("volume:set", e), r.call(this, e))
                    },
                    updateFromOtherTab: function(e) {
                        0 !== e && (this.sliderValue = e, this.toggleState("muted", !1)), this.updateSlider(e)
                    },
                    _resetOffset: function() {
                        this._sliderOffset(!0)
                    },
                    dispose: function() {
                        t(window.document).off("mousemove", this.drag)
                    }
                }), n(3).throttle(n(3).after(2, function(e) {
                    s(["header", "volume"])
                }), 1e4))
        }).call(t, n(1))
    },
    1588: function(e, t, n) {
        "use strict";
        e.exports = n(78).extend({
            className: "historicalPlayContexts",
            css: n(2948),
            Subview: n(1589),
            itemClassName: "historicalPlayContexts__item",
            setup: function() {
                this.collection = new(n(329))(null)
            }
        })
    },
    1589: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            ModelClass: n(479),
            template: function() {
                var e = this.model.getContextId(),
                    t = n(114),
                    i = t.subview;
                switch (this.model.get("kind")) {
                    case "user":
                        return i(n(154), {
                            resource_id: e
                        });
                    case "station":
                        return i(n(1683), {
                            resource_id: e
                        });
                    case "playlist":
                        return i(n(277), {
                            resource_id: e,
                            resource_type: "playlist",
                            compact: !0
                        });
                    default:
                        return ""
                }
            }
        })
    },
    1590: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(68).withOptions("historyItem"), {
            ModelClass: n(581),
            defaults: {
                displayType: "player"
            },
            onContextRequest: function(e) {
                e.data.historicalPlay = this.model
            },
            template: function(e) {
                var t = this.options.displayType,
                    i = n(114),
                    a = i.subview;
                return "player" === t ? a(n(99), {
                    resource_id: e.track_id,
                    resource_type: "sound"
                }) : a(n(277), {
                    resource_id: e.track_id,
                    resource_type: "sound",
                    compact: !0,
                    show_action_buttons: !0
                })
            }
        })
    },
    1591: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = this.model,
                i = t.sound,
                s = t.resource_id,
                o = t.resource_type,
                r = i.resource_id,
                l = i.resource_type,
                u = i.id;
            switch (e) {
                case "repost":
                    return a.call(this, n(594), {
                        selectedClass: "sc-button-selected",
                        hasPopups: !1,
                        resource_id: r,
                        resource_type: l
                    });
                case "addToPlaylist":
                    return a.call(this, n(376), {
                        type: "addToPlaylist",
                        soundIds: [u]
                    });
                case "addToNextUp":
                    return a.call(this, n(590), {
                        resource_id: s,
                        resource_type: o,
                        closes_dropdown: !0
                    });
                case "removeFromQueue":
                    return a.call(this, n(1002), {
                        resource_id: s,
                        closes_dropdown: !0
                    });
                case "startStation":
                    return a.call(this, n(483), {
                        stationType: "track",
                        stationId: u,
                        tagName: "button"
                    });
                case "download":
                    return a.call(this, n(482), {
                        resource_id: r,
                        resource_type: l,
                        className: "moreActions__link sc-button-medium sc-button-icon"
                    });
                case "share":
                    return a.call(this, n(378), {
                        resource_id: r,
                        resource_type: l
                    });
                case "like":
                    return a.call(this, n(317), {
                        resource_id: u,
                        resource_type: l,
                        selectedClass: "sc-button-selected"
                    });
                default:
                    return null
            }
        }

        function a(e, t) {
            var i = this.options.icon_only;
            return {
                args: n(3).assign({
                    className: "moreActions__button sc-button-medium",
                    size: "medium",
                    isScButton: !1,
                    responsive: !1,
                    icon_only: i
                }, t),
                View: e
            }
        }
        e.exports = n(54).extend(n(549), n(68).withOptions("moreActions"), {
            ModelClass: n(204),
            defaults: {
                actions: null
            },
            getModelData: function() {
                return {}
            },
            getTemplateData: function(e) {
                var t = this.options.actions.map(i, this).filter(Boolean);
                return {
                    items: [t]
                }
            }
        })
    },
    1592: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                t(e.target).closest(".queueFallback,.queueFallback__toggle").is(".queueFallback__toggle") || n(92).playNextFromFallback({
                    userInitiated: !0
                })
            }

            function a() {
                var e = this.subviews.toggle;
                e && e.setChecked(this.getState("active"))
            }

            function s(e) {
                this.toggleState("active", e)
            }
            e.exports = n(54).extend({
                className: "queueFallback",
                template: n(2570),
                css: n(2950),
                states: {
                    active: function(e) {
                        a.call(this)
                    }
                },
                bubbleEvents: {
                    "toggle:change": "onClickToggle"
                },
                events: {
                    click: i
                },
                setup: function() {
                    this.listenTo(n(92), "state:fallbackEnabled", s)
                },
                renderDecorate: function() {
                    this.toggleState("active", n(92).getState("fallbackEnabled")), a.call(this)
                },
                getTemplateData: function(e) {
                    e.isActive = this.getState("active")
                },
                onClickToggle: function(e) {
                    var t = e.isActive;
                    n(92).toggleState("fallbackEnabled", t)
                }
            })
        }).call(t, n(1))
    },
    1593: function(e, t, n) {
        "use strict";

        function i() {
            return this.sound
        }

        function a(e) {
            n(92).playItem(this.model, {
                userInitiated: !0
            })
        }

        function s(e) {
            if (e.dataTransfer.setDragImage) {
                var t = new window.Image;
                t.src = d, e.dataTransfer.setDragImage(t, 0, 0)
            }
            n(203).start(e, [this.model])
        }

        function o(e) {
            n(203).end(e)
        }

        function r() {
            this.toggleState("explicit", !0)
        }

        function l() {
            this.toggleState("playing", this.sound.isPlaying())
        }
        var u = ["title", "artwork_url", "user", "permalink"],
            c = ["like", "startStation", "repost", "addToNextUp", "addToPlaylist", "share", "download", "removeFromQueue"],
            d = (e.exports = n(54).extend(n(218).withOptions({
                getSound: i
            }), {
                ModelClass: n(204),
                className: "queueItemView sc-border-box sc-font-light",
                template: n(2571),
                css: n(2951),
                sound: null,
                states: {
                    upcoming: "m-upcoming",
                    dimmed: "m-dimmed",
                    active: "m-active",
                    explicit: "m-explicit",
                    overlayOpen: "m-overlayOpen",
                    playing: "m-playing"
                },
                bubbleEvents: {
                    "dropdownButton:toggle": "onOverlayToggled"
                },
                events: {
                    "click .queueItemView__details": a,
                    "dragstart .queueItemView__dragHandle": s,
                    "dragend .queueItemView__dragHandle": o
                },
                setup: function() {
                    var e = this.model,
                        t = e.sound,
                        n = e.explicit;
                    this.sound = t, t.hold(), this.addDataSource(t, {
                        requiredAttributes: u
                    }), this.listenTo(t, "play pause", l), this.toggleState("playing", t.isPlaying()), n ? this.toggleState("explicit", !0) : this.listenToOnce(this.model, "change:explicit", r)
                },
                getTemplateData: function(e) {
                    return e.sound = this.sound.toJSON(), e.OverflowListView = n(1591), e.overflowActions = n(341).getActionSet(this.model, function(e) {
                        return c.indexOf(e) > -1
                    }), e
                },
                onOverlayToggled: function(e) {
                    this.toggleState("overlayOpen", e.data.isOpened)
                }
            }), "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
    },
    1594: function(e, t, n) {
        "use strict";

        function i() {
            var e = this;
            return "pending" === this.animationPromise.state() ? void(this.syncQueued = !0) : (this.sourceChanged ? (this.sourceChanged = !1, this.syncQueued = !0, this.animationPromise = p.call(this, 0)) : (this.syncQueued = !1, this.animationPromise = a.call(this)), void this.animationPromise.then(function() {
                e.syncQueued && e.syncThrottled()
            }))
        }

        function a() {
            var e = this,
                t = this.collection;
            g.call(this);
            var i = Math.floor(this.getElement("scrollableInner")[0].scrollTop / I / F) * F,
                a = i - O,
                s = i + R + O,
                o = Math.max(0, a),
                r = t.slice(o, s),
                l = m.call(this, {
                    itemsToRender: r,
                    offset: o,
                    showFallback: s >= t.length && n(92).hasFallback()
                });
            return this.toggleState("dragging", n(203).isDragging()), y.call(this, {
                itemsToRender: r,
                offset: o
            }), b.call(this, a, s), v.call(this, this.getElement("container")[0], l).then(function() {
                e.toggleState("scrolling", !1)
            })
        }

        function s(e) {
            this.prevItemCount++, this.snapshot.models.unshift(e)
        }

        function o(e) {
            var t = e ? "on" : "off";
            this.getElement("scrollableInner")[t]("scroll", this.onScroll)
        }

        function r() {
            this.toggleState("scrolling", !0), this.syncThrottled()
        }

        function l(e) {
            n(3).each(e, u, this)
        }

        function u(e) {
            var t = e.wrapper,
                n = e.view;
            t.remove(), this.removeSubview(n), n._dispose()
        }

        function c() {
            var e = this.getElement("scrollableInner")[0].scrollTop,
                t = e - I * this.prevItemCount;
            return {
                top: t - I,
                bottom: t + N
            }
        }

        function d() {
            this.sourceChanged = !0
        }

        function p(e) {
            var t = this,
                i = this.getElement("scrollableInner");
            return i[0].scrollTop === e ? n(56).resolve() : n(56).promise(function(n) {
                t.getState("visible") ? i.animate({
                    scrollTop: e
                }, {
                    complete: n,
                    duration: B
                }) : (i[0].scrollTop = e, n())
            })
        }

        function h() {
            this.toggleState("visible")
        }

        function f(e) {
            if (e) {
                var t = n(92).getQueueState(),
                    i = t.currentIndex;
                p.call(this, i * I)
            }
            this.$el.toggleClass("m-visible", e), this.syncThrottled()
        }

        function g() {
            var e = this.getElement("itemsHeight");
            e[0].style.height = I * this.collection.length + (n(92).hasFallback() ? P : 0) + "px";
            var t = this.prevItemCount - this.snapshot.prevItemCount;
            t && (this.snapshot.prevItemCount = this.prevItemCount, this.getElement("container").css("transform", "translateY(" + I * this.prevItemCount + "px)"), this.getElement("scrollableInner")[0].scrollTop += t * I)
        }

        function m(e) {
            var t = this,
                i = e.itemsToRender,
                a = e.offset,
                s = e.showFallback,
                o = c.call(this),
                r = o.top,
                l = o.bottom,
                u = function(e) {
                    return e >= r && l > e
                },
                d = n(203).getDropCursor(),
                p = n(3).pluck(n(203).getItems(), "resource_id");
            n(203).isDragging() || (this.scrollDirection = 0, this.getElement("dragCover").removeClass("m-active"), C.call(this));
            var h = this.items;
            this.items = {};
            var f = i.reduce(function(e, i, s) {
                var o = i.resource_id,
                    r = i.explicit,
                    l = h[o],
                    c = a + s >= d ? (a + s - t.prevItemCount + p.length) * I : (a + s - t.prevItemCount) * I,
                    f = void 0,
                    g = void 0;
                if (l) f = l, f.y !== c && (f.y = c, e.move.push(f));
                else if (g = t.draggedItems[o]) f = {
                    wrapper: g.wrapper,
                    view: g.view,
                    y: c,
                    x: 0
                }, e.add.push(f), delete t.draggedItems[o];
                else {
                    f = x.call(t, o), f.y = c;
                    var m = f,
                        v = m.wrapper,
                        _ = n(3).findIndex(t.snapshot.models, function(e) {
                            return e.resource_id === o
                        }),
                        y = -1 === _,
                        b = u(c);
                    if (!b || y && !r) v.style.transform = "translate(0," + c + "px)", v.style.opacity = 0, y ? e.add.push(f) : e.remove.push(f);
                    else if (y && r) v.style.transform = "translate(-100%," + c + "px)", e.add.push(f);
                    else {
                        var w = (_ - t.prevItemCount) * I,
                            k = n(132).clamp(w, c - H, c + H);
                        v.style.transform = "translate(0," + k + "px)", v.style.opacity = 0, e.move.push(f)
                    }
                    e.create.push(f)
                }
                return t.items[o] = f, e
            }, {
                remove: [],
                move: [],
                add: [],
                create: [],
                destroy: []
            });
            if (s) {
                var g = a + i.length >= d ? (a + i.length - this.prevItemCount + p.length) * I : (a + i.length - this.prevItemCount) * I,
                    m = h[q];
                m ? m.y !== g && f.move.push(m) : (m = k.call(this), m.wrapper.style.transform = "translate(0," + g + "px)", m.wrapper.style.opacity = 0, f.add.push(m), f.create.push(m)), m.y = g, this.items[q] = m
            }
            return n(3).reduce(h, function(e, i, a) {
                if (t.items[a]) return e;
                if (n(3).contains(p, a)) return t.draggedItems[a] = i, e;
                if (u(i.y)) {
                    var s = n(3).findIndex(t.collection.models, function(e) {
                        return e.resource_id === a
                    }); - 1 === s ? (i.x = "100%", e.remove.push(i)) : (i.y = n(132).clamp((s - t.prevItemCount) * I, i.y - H, i.y + H), e.move.push(i))
                }
                return e.destroy.push(i), e
            }, f), this.snapshot.models = this.collection.models.slice(), f
        }

        function v(e, t) {
            var i = this,
                a = t.add,
                s = t.remove,
                o = t.move,
                r = t.create,
                u = t.destroy;
            r.length && (e.appendChild(r.reduce(function(e, t) {
                var n = t.wrapper;
                return e.appendChild(n), e
            }, window.document.createDocumentFragment())), r.forEach(function(e) {
                var t = e.wrapper;
                return window.getComputedStyle(t).opacity
            }));
            var c = [s, o, a].reduce(function(e, t) {
                return t.length ? e.then(function() {
                    return t.forEach(function(e) {
                        var t = e.wrapper.style,
                            n = e.x,
                            i = e.y,
                            a = e.opacity,
                            s = void 0 === a ? "" : a;
                        t.transition = "", t.zIndex = "", t.transform = "translate(" + n + "," + i + "px)", t.opacity = s
                    }), _.call(i)
                }) : e
            }, n(56).resolve());
            return u.length && c.done(function() {
                l.call(i, u);
            }), c
        }

        function _() {
            return this.getState("visible") ? n(56).delay(B) : n(56).resolve()
        }

        function y(e) {
            var t = this,
                i = e.itemsToRender,
                a = e.offset,
                s = n(92).getQueueState(),
                o = s.currentIndex,
                r = s.repeatMode,
                l = o - a;
            n(3).each(i, function(e, n) {
                var i = e.resource_id,
                    a = t.items[i].view;
                a.toggleState("upcoming", r === U || r === j && n > l).toggleState("dimmed", r === j && l > n || r === V && l !== n).toggleState("active", n === l)
            })
        }

        function b(e, t) {
            var i = this.collection.length;
            t + z > i && n(92).hasMoreAhead() && !n(92).hasFallback() && n(92).pullNext(z - (i - t)), z > e && n(92).hasMoreBehind() && n(92).pullPrev(z - e)
        }

        function w() {
            var e = window.document.createElement("div");
            return e.className = W, e
        }

        function x(e) {
            var t = w(),
                i = this.addSubview(new(n(1593))({
                    resource_id: e
                }));
            return t.appendChild(i.render().el), {
                view: i,
                wrapper: t,
                x: 0,
                y: 0
            }
        }

        function k() {
            var e = w(),
                t = this.addSubview(new(n(1592)));
            return e.appendChild(t.render().el), {
                view: t,
                wrapper: e,
                x: 0,
                y: 0
            }
        }

        function T() {
            return this.boundingClientRect || (this.boundingClientRect = this.getElement("scrollable")[0].getBoundingClientRect()), this.boundingClientRect
        }

        function A(e) {
            if (n(203).isValid(e)) {
                this.getElement("dragCover").addClass("m-active");
                var t = T.call(this);
                this.draggingTop = e.originalEvent.pageY - t.top - window.pageYOffset, this.draggingTop < L ? this.scrollDirection = -1 * (L - this.draggingTop) / L : this.draggingTop > t.height - L ? this.scrollDirection = 1 - (t.height - this.draggingTop) / L : this.scrollDirection = 0, C.call(this), S.call(this)
            }
        }

        function S() {
            var e = this,
                t = this.draggingTop + this.getElement("scrollableInner")[0].scrollTop - .5 * I;
            n(3).each(n(203).getItems(), function(i, a) {
                var s = n(132).clamp(t + a * I, 0, e.collection.length * I) - e.prevItemCount * I,
                    o = e.draggedItems[i.resource_id];
                if (o && o.y !== s) {
                    var r = o.wrapper.style;
                    r.transform = "translateY(" + s + "px)", r.opacity = .5, r.transition = "none", r.zIndex = 1, o.y = s
                }
            }), n(203).setDropCursor(Math.min(Math.round(t / I), this.collection.length)), this.syncThrottled()
        }

        function C() {
            var e = this,
                t = this.scrollDirection,
                i = this.scrollTimer;
            0 === t && i ? (window.clearTimeout(i), this.scrollDirection = 0, this.scrollTimer = null) : 0 === t || i || (this.scrollTimer = window.setTimeout(function() {
                e.scrollTimer = null;
                var t = e.getElement("scrollableInner")[0],
                    i = T.call(e),
                    a = (e.collection.length + n(203).getItems().length) * I - i.height + (n(92).hasFallback() ? P : 0);
                t.scrollTop = n(132).clamp(t.scrollTop + 10 * e.scrollDirection, 0, a), S.call(e), C.call(e)
            }, 25))
        }

        function E() {
            n(57).trigger("queue:toggle")
        }

        function D() {
            n(92).clearQueue()
        }

        function M() {
            n(92).toggleShuffle()
        }

        function $() {
            var e = n(92).getState("shuffle");
            this.toggleState("shuffle", e)
        }
        var I = 45,
            P = 80,
            B = 300,
            N = 500,
            F = 10,
            R = Math.ceil(N / I),
            O = Math.ceil(1.5 * R),
            z = 10,
            L = I,
            H = (R + O) * I,
            W = "queue__itemWrapper",
            q = "fallback",
            U = n(138).all,
            j = n(138).none,
            V = n(138).one;
        e.exports = n(54).extend(n(263), {
            className: "queue",
            css: n(2952),
            template: n(2572),
            element2selector: {
                itemsHeight: ".queue__itemsHeight",
                container: ".queue__itemsContainer",
                scrollable: ".queue__scrollable",
                scrollableInner: ".queue__scrollableInner",
                dragCover: ".queue__dragCover",
                shuffle: ".queue__shuffle"
            },
            states: {
                scrolling: "m-scrolling",
                dragging: "m-dragging",
                shuffle: "m-shuffle",
                visible: f
            },
            events: {
                "dragover .queue__scrollable": A,
                "dragover .queue__dragCover": A,
                "click .queue__shuffle": M,
                "click .queue__clear": D,
                "click .queue__hide": E
            },
            prevItemCount: 0,
            snapshot: null,
            items: null,
            draggedItems: null,
            animationPromise: null,
            syncQueued: !1,
            sourceChanged: !1,
            scrollTimer: null,
            scrollDirection: 0,
            draggingTop: 0,
            boundingClientRect: null,
            setup: function() {
                var e = this;
                this.snapshot = {
                    prevItemCount: 0,
                    models: []
                }, this.items = {}, this.animationPromise = n(56).resolve(), this.draggedItems = {}, this.syncThrottled = n(3).throttle(i.bind(this), 16, {
                    leading: !1,
                    trailing: !0
                }), this.onScroll = r.bind(this), this.listenTo(n(85), "resize:debounce", function() {
                    e.boundingClientRect = null
                }), this.listenTo(n(57), "queue:toggle", h), this.collection = n(92).getQueue(), this.collection.hold(), this.listenTo(n(92), "change:currentSound change:repeatMode", this.syncThrottled).listenTo(n(92), "queueReset", d).listenTo(n(92), "state:shuffle", $), this.el.style.height = N + "px"
            },
            renderDecorate: function() {
                o.call(this, !0), i.call(this), $.call(this), this.setupScrollable(this.getElement("scrollable"), this.getElement("scrollableInner"), {
                    hScroll: !1,
                    monitorChanges: !0
                })
            },
            teardown: function() {
                this.syncQueued = !1, this.sourceChanged = !1, o.call(this, !1)
            },
            onAdd: function(e, t, n) {
                n.prevStream && s.call(this, e), this.syncThrottled()
            },
            onRemove: function() {
                this.syncThrottled()
            },
            onCollectionReset: function() {
                this.syncThrottled()
            }
        })
    },
    1595: function(e, t, n) {
        "use strict";

        function i() {
            this.stopListening(this.playlistModel, "play", i), this.options.maxDisplay = 0, this.setDisplayedItems(1 / 0), this.rerender()
        }

        function a(e) {
            s.call(this, e.current)
        }

        function s(e) {
            var t, n, i = this.playlistModel;
            i.isNowPlaying() && !this.getState("expanded") && (e = e || i.getCurrentSound(), t = this.getListItemView(e), t && (n = t.$el.position().top, this.getElement("listContainer").animate({
                scrollTop: n
            })))
        }
        var o = n(59).trackClickThrough,
            r = 5,
            l = 350;
        e.exports = n(80).extend(n(263), n(471).withOptions({
            elName: "listContainer"
        }), {
            css: n(2953),
            template: n(2573),
            className: "compactTrackList sc-border-light sc-font-body",
            listClassName: "compactTrackList__list sc-list-nostyle sc-clearfix",
            itemClassName: "compactTrackList__item",
            Subview: n(566),
            defaults: {
                maxDisplay: r,
                showTrackNumber: !1
            },
            element2selector: {
                listWrapper: ".compactTrackList__listWrapper",
                listContainer: ".compactTrackList__listContainer",
                moreLink: ".compactTrackList__moreLink"
            },
            states: {
                expanded: function(e) {
                    var t;
                    t = e ? n(52).t("View fewer tracks") : n(52).tp("View all tracks", "View %d tracks", this.collection.length), this.$el.toggleClass("expanded", e), this.getElement("moreLink").text(t), e ? this.addTimeout(this.setupScrollable.bind(this, this.getElement("listWrapper"), this.getElement("listContainer"), {
                        hScroll: !1
                    }), l) : (this.addTimeout(this.disposeScrollable.bind(this), l), this.playlistModel.isNowPlaying() && s.call(this))
                }
            },
            events: {
                "click .compactTrackList__moreLink": "onMoreClick"
            },
            setup: function(e) {
                this.playlistModel = new(n(86))({
                    id: e.resource_id
                }), this.collection = this.playlistModel.getSoundsCollection(), this.playlistModel.isNowPlaying() ? e.maxDisplay = 0 : this.listenToOnce(this.playlistModel, "play", i), this.listenTo(n(67), "change:currentSound", a), this._numItemsRendered = 0, this._debouncedRerender = n(3).debounce(n(3).bind(this.rerender, this), 100)
            },
            dispose: function() {
                this.playlistModel.release()
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.apply(this, arguments), this.whenInserted().done(s.bind(this))
            },
            onCollectionChange: function(e, t) {
                var i = this.collection.size();
                n(80).prototype.onCollectionChange.apply(this, arguments), this._numItemsRendered !== i && this._debouncedRerender(), this._numItemsRendered = i
            },
            onMoreClick: function(e) {
                o({
                    context: this.getContextData()
                }), e.preventDefault(), this.getState("expanded") || this.options.maxDisplay !== r ? this.toggleState("expanded") : (i.call(this), n(3).defer(this.toggleState.bind(this, "expanded", !0)))
            },
            getModelsToRender: function() {
                return this.hasDifferentCreators = this.playlistModel.hasDifferentCreators(), this.collection.models
            },
            getListContainer: function() {
                return this.getElement("listContainer")
            },
            getSubviewArgs: function() {
                return n(3).assign(n(80).prototype.getSubviewArgs.apply(this, arguments), {
                    showUser: this.hasDifferentCreators,
                    showTrackNumber: this.options.showTrackNumber
                })
            },
            getTemplateData: function(e) {
                var t = this.collection.length;
                return n(3).assign(n(80).prototype.getTemplateData.call(this, e) || e, {
                    trackCount: t,
                    hasMoreTracks: t > r
                })
            }
        })
    },
    1596: function(e, t, n) {
        "use strict";

        function i() {
            a.call(this)
        }

        function a() {
            if (n(55).get("me").hasLikes()) {
                var e, t, i = s - this.collection.length,
                    a = window.document.createDocumentFragment();
                if (i >= 0) {
                    for (t = 0; i > t; t++) e = window.document.createElement("div"), e.className = "createPlaylistSounds__placeholder sc-border-light-bottom", a.appendChild(e);
                    this.getElement("placeholdersContainer").html(a)
                }
            }
        }
        var s = 4;
        e.exports = n(80).extend(n(113), {
            css: n(2955),
            template: n(2575),
            Subview: n(566),
            className: "createPlaylistSounds sc-border-light",
            defaults: {
                isSaved: !1,
                maxDisplay: 0
            },
            bubbleEvents: {
                onRemoveClick: "onRemoveClick"
            },
            element2selector: {
                listContainer: ".createPlaylistSounds__listContainer",
                placeholdersContainer: ".createPlaylistSounds__placeholdersContainer"
            },
            setup: function() {
                this.collection = this.getFieldValue(), this.collection.hold(), this.listenTo(this.collection, "add remove reset", i)
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.apply(this, arguments), this.options.isSaved || a.call(this)
            },
            onFieldChange: n(3).noop,
            onRemoveClick: function(e) {
                this.collection.remove(e.data.sound)
            },
            getSubviewArgs: function() {
                return n(3).assign(n(80).prototype.getSubviewArgs.apply(this, arguments), {
                    showRemoveButton: !this.options.isSaved,
                    showPlaybackCount: !1,
                    clickToPlay: !1
                })
            },
            getListContainer: function() {
                return this.getElement("listContainer")
            },
            getTemplateData: function(e) {
                var t = s - this.collection.length,
                    n = 0;
                if (t > 0)
                    for (e.placeholders = [], n = 0; t > n; n++) e.placeholders.push(!0)
            }
        })
    },
    1597: function(e, t, n) {
        "use strict";

        function i() {
            a.call(this)
        }

        function a() {
            this.toggleState("hideSuggestions", !this.suggestions.length)
        }

        function s() {
            o(["add_to_set", "go_to_new"])
        }
        var o = n(59).trackV0Click;
        e.exports = n(54).extend(n(309), {
            className: "createPlaylist",
            template: n(2576),
            css: n(2956),
            states: {
                saved: "saved",
                hideSuggestions: "hideSuggestions"
            },
            defaults: {
                formId: null
            },
            observedAttributes: ["playlist"],
            events: {
                "click .createPlaylist__goToPlaylist": s
            },
            suggestions: null,
            setup: function(e) {
                this.model = new(n(231))(null, {
                    resource_id: e.formId
                }), this.suggestions = this.model.getFieldMetadata("sounds").datasource, this.listenTo(this.suggestions, "add remove reset", i), this.suggestions.hold()
            },
            dispose: function() {
                this.suggestions = null
            },
            getTemplateData: function(e) {
                var t = e.isSaved = !!this.model.get("playlist"),
                    i = n(55).get("me");
                e.areAllSoundsMine = this.model.areAllSoundsMine(), e.areAllSoundsMine ? e.showSuggestions = !t && i.hasOwnSounds() : e.showSuggestions = !t && i.hasLikes()
            },
            renderDecorate: function() {
                a.call(this)
            }
        })
    },
    1599: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("added", !!this.form.get("sounds").get(this.model))
        }
        e.exports = n(54).extend({
            template: n(2578),
            css: n(2958),
            className: "createPlaylistSuggestion",
            ModelClass: n(66),
            defaults: {
                query: null,
                formId: null
            },
            events: {
                "click .createPlaylistSuggestion__add": "onButtonClick"
            },
            element2selector: {
                button: ".createPlaylistSuggestion__add"
            },
            states: {
                added: function(e) {
                    var t = e ? n(52).t("Added") : n(52).t("Add to playlist", null, {
                        context: "definite"
                    });
                    this.getElement("button").toggleClass("sc-button-selected", e).text(t)
                }
            },
            setup: function(e) {
                this.form = new(n(231))(null, {
                    resource_id: e.formId
                }), this.listenTo(this.form.get("sounds"), "add remove", i)
            },
            dispose: function() {
                this.form.release()
            },
            renderDecorate: function() {
                i.call(this)
            },
            onButtonClick: function() {
                this.form.addSound(this.model)
            }
        })
    },
    1600: function(e, t, n) {
        "use strict";
        e.exports = n(80).extend(n(113), {
            Subview: n(1599),
            className: "createPlaylistSuggestions",
            itemClassName: "createPlaylistSuggestions__item sc-border-light-top",
            css: n(2959),
            defaults: {
                maxDisplay: 3
            },
            animations: {
                remove: {
                    delay: 250
                }
            },
            setup: function() {
                var e = this.form.resource_id;
                this.subviewArgs = {
                    formId: e
                }
            },
            onFieldChange: n(3).noop
        })
    },
    1624: function(e, t, n) {
        "use strict";
        var i = n(114).subview;
        e.exports = n(54).extend({
            ModelClass: n(315),
            template: function() {
                var e = this.model.resource;
                switch (this.model.get("kind")) {
                    case "user":
                        return i(n(244), {
                            resource_id: e.resource_id
                        });
                    case "track":
                    case "playlist":
                        return i(n(158), {
                            resource_type: e.resource_type,
                            resource_id: e.resource_id
                        })
                }
            }
        })
    },
    1647: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                var n = t(e.target),
                    i = n.data("type");
                e.preventDefault(), this.getElement("tabLinks").removeClass("active"), n.addClass("active"), this.subviews.html5.setWidgetType(i.split("-")[1])
            }
            e.exports = n(54).extend(n(165), {
                template: n(2614),
                css: n(2994),
                className: "embedPanel",
                requiredAttributes: {
                    sound: ["user", "sharing"],
                    playlist: ["user", "sharing"]
                },
                element2selector: {
                    tabLinks: ".embedPanel__tabLink"
                },
                events: {
                    "click .embedPanel__tabLink": i
                },
                defaults: {
                    share_type: null
                },
                getTemplateData: function(e) {
                    return e.showMiniWidget = "sound" === this.model.resource_type && n(55).get("me").getPerk("widgets"), e
                }
            })
        }).call(t, n(1))
    },
    1648: function(e, t, n) {
        "use strict";

        function i() {
            a({
                click_target: "sc_message",
                click_object: this.model.getUrn(),
                context: this.getContextData()
            }), this.bubble("overlay:close")
        }
        var a = n(59).trackShareClick;
        e.exports = n(54).extend(n(165), {
            template: n(2616),
            defaults: {
                share_type: null
            },
            setup: function() {
                this.listenTo(n(57), "new-message:sent", i)
            },
            getTemplateData: function() {
                return {
                    attachments: [this.model],
                    share_type: this.options.share_type
                }
            }
        })
    },
    1649: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [665, 300],
                serviceKey: "pinterest",
                serviceName: "Pinterest",
                serviceBaseURL: "http://pinterest.com/pin/create/button/"
            },
            getHrefData: function() {
                var e, t = this.model.attributes,
                    i = {
                        title: t.title
                    },
                    a = n(87).urlFrom(t, 200);
                return this.isAudible ? (i.username = t.user.username, e = n(52).t("[[title]] by [[username]] on SoundCloud", i)) : (i.username = t.username || t.name, e = n(52).t("Visit [[username]] on SoundCloud", i)), {
                    url: this.getShareURL(),
                    media: a,
                    description: e.toString(),
                    is_video: "true"
                }
            }
        })
    },
    1650: function(e, t, n) {
        "use strict";

        function i() {
            this.toggleState("successful", !0).toggleState("confirmation", !1).toggleState("failed", !1)
        }

        function a() {
            this.toggleState("failed", !0).toggleState("successful", !1)
        }

        function s() {
            this.toggleState("resetting", !1)
        }
        e.exports = n(54).extend({
            template: n(2617),
            css: n(2996),
            className: "privateShare",
            ModelClass: n(75),
            requiredAttributes: ["user", "sharing"],
            events: {
                "click .privateShare__reset": "onResetClick",
                "click .privateShare__resetConfirm": "onConfirmClick",
                "click .privateShare__resetCancel": "onCancelClick"
            },
            element2selector: {
                confirmButton: ".privateShare__resetConfirm",
                cancelButton: ".privateShare__resetCancel"
            },
            states: {
                confirmation: "confirmation",
                successful: "successful",
                failed: "failed",
                resetting: function(e) {
                    this.getElement("confirmButton").toggleClass("sc-pending", e), this.getElement("cancelButton").attr("disabled", e)
                }
            },
            onResetClick: function() {
                this.toggleState("confirmation", !0)
            },
            onConfirmClick: function() {
                this.toggleState("resetting", !0), this.model.resetSecretLink().always(s.bind(this)).fail(a.bind(this)).done(i.bind(this))
            },
            onCancelClick: function() {
                this.toggleState("confirmation", !1).toggleState("failed", !1)
            },
            getTemplateData: function(e) {
                return e.audibleType = "sound" === this.options.resource_type ? "track" : "playlist", e
            }
        })
    },
    1651: function(e, t, n) {
        "use strict";

        function i(e) {
            return !("none" === e.embeddable_by || "me" === e.embeddable_by && n(55).get("me").id !== (e.user && e.user.id))
        }
        var a = [{
            name: n(52).t("Share"),
            subview: n(1652),
            isTabEnabled: function() {
                return !0
            }
        }, {
            name: n(52).t("Embed"),
            subview: n(1647),
            isTabEnabled: i
        }, {
            name: n(52).t("Message"),
            subview: n(1648),
            isTabEnabled: function() {
                return n(63).isLoggedIn()
            }
        }];
        e.exports = n(54).extend(n(165), {
            defaults: {
                share_type: null
            },
            template: n(2618),
            className: "sharePanel",
            getTemplateData: function(e) {
                return e.tabs = a.filter(function(t) {
                    return t.isTabEnabled.call(this, e)
                }, this).map(n(3).clone), e
            }
        })
    },
    1652: function(e, t, n) {
        "use strict";
        var i = ["sharing"];
        e.exports = n(54).extend(n(165), {
            template: n(2620),
            css: n(2998),
            className: "shareContent",
            tagName: "article",
            requiredAttributes: {
                sound: i,
                playlist: i
            },
            defaults: {
                share_type: null
            },
            renderDecorate: function() {
                n(57).trigger("share:main", {
                    object: this.model.getUrn()
                })
            },
            getTemplateData: function(e) {
                var t = this.isAudible;
                return e.isAudible = t, e.isPrivateShare = t && this.model.isPrivate(), e
            }
        })
    },
    1653: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [645, 450],
                serviceKey: "vkontakte",
                serviceName: "VK",
                serviceBaseURL: "http://vkontakte.ru/share.php"
            },
            getHrefData: function() {
                return {
                    url: this.getShareURL()
                }
            }
        })
    },
    1654: function(e, t, n) {
        "use strict";
        e.exports = n(195).extend({
            defaults: {
                popupSize: [450, 450],
                serviceKey: "weibo",
                serviceName: "Weibo",
                serviceBaseURL: "http://service.weibo.com/share/share.php"
            },
            getHrefData: function() {
                return {
                    url: this.getShareURL()
                }
            }
        })
    },
    1661: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend({
            moreText: n(52).t("View all"),
            moduleClassName: "historyModule",
            iconClassName: "calendar",
            itemMinHeight: 72,
            defaults: {
                type: "plays"
            },
            setup: function(e) {
                var t = e.type;
                "plays" === t ? (this.title = n(52).t("Listening history"), this.Subview = n(1035), this.subviewArgs = {
                    maxDisplay: 3,
                    displayType: "soundBadge"
                }) : (this.title = n(52).t("Recently played"), this.Subview = n(1588), this.subviewArgs = {
                    maxDisplay: 3
                }), this.moreLink = n(61).getRoute("youNetwork", null, "history")
            }
        })
    },
    1662: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = t.abtest_identifier,
                i = t.view_location;
            a(["go_mobile", "click", i, n, e])
        }
        var a = n(59).trackV0Click;
        e.exports = n(54).extend(n(1334), {
            template: n(2621),
            css: n(2999),
            className: "mobileAppsButtons sc-clearfix",
            defaults: {
                abtest_identifier: "",
                view_location: "",
                type: "sidebar"
            },
            events: {
                "click .mobileAppsButtons__appStore": "onAppStoreClick",
                "click .mobileAppsButtons__googlePlay": "onGooglePlayClick"
            },
            states: {
                sidebar: "m-sidebar"
            },
            setup: function(e) {
                this.toggleState("sidebar", "sidebar" === e.type)
            },
            onAppStoreClick: function() {
                i("appStore", this.options)
            },
            onGooglePlayClick: function() {
                i("googlePlay", this.options)
            }
        })
    },
    1666: function(e, t, n) {
        "use strict";
        e.exports = n(118).extend(n(68).withOptions("whoToFollowModule"), {
            css: n(3001),
            title: n(52).t("Who to follow"),
            iconClassName: "follower",
            itemMinHeight: 70,
            moreText: n(52).t("Refresh"),
            moreLink: "#",
            moreClassName: "refresh-wtf",
            moduleClassName: "whoToFollowModule",
            Subview: n(1767),
            events: {
                "click .refresh-wtf": "onRefreshClick"
            },
            onRefreshClick: function(e) {
                this.subviews.content.refresh(), e.preventDefault()
            }
        })
    },
    1668: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "soundActionsOwner sc-button-group",
            template: n(2623),
            defaults: {
                size: "small",
                showEdit: !0,
                showDelete: !0
            },
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["managed_by_feeds"]
            }
        })
    },
    1669: function(e, t, n) {
        "use strict";
        var i = n(59).trackClickThrough;
        e.exports = n(54).extend(n(140), {
            tagName: "a",
            className: "actorUser sc-link-light",
            template: n(2625),
            css: n(3004),
            ModelClass: n(64),
            defaults: {
                dialogType: "userBadge",
                actionType: "post"
            },
            events: {
                click: "onClick"
            },
            dialogSubviewArgs: function() {
                return {
                    resource_id: this.model.id
                }
            },
            renderDecorate: function() {
                "playlist" === this.options.resource_type && this.$el.addClass("playlist"), this.el.href = n(61).getRoute("user", this.model)
            },
            onClick: function() {
                i({
                    target: this.model.getUrn(),
                    context: this.getContextData()
                })
            },
            getActionDescription: function(e, t) {
                var i = {
                    username: t
                };
                return "repost" === e ? n(52).t("Reposted by [[username]]", i) : "like" === e ? n(52).t("Liked by [[username]]", i) : n(52).t("Posted by [[username]]", i)
            },
            getTemplateData: function(e) {
                return e.actionDescription = this.getActionDescription(this.options.actionType, e.username), e
            }
        })
    },
    1670: function(e, t, n) {
        "use strict";

        function i() {
            return n(52).tp("1 track", "%d tracks", this.model.getNumSounds())
        }
        e.exports = n(54).extend(n(140), {
            template: n(2626),
            css: [n(3005), n(1164)],
            ModelClass: n(86),
            className: "addToPlaylistItem g-flex-row-centered",
            element2selector: {
                count: ".addToPlaylistItem__count"
            },
            defaults: {
                soundIds: null,
                dialogSelector: ".addToPlaylistItem__managed",
                dialogType: "genericDialog"
            },
            dialogArgs: {
                text: n(52).t("This playlist is managed directly by its rightsholder."),
                zIndexLevel: "modal-content"
            },
            requiredAttributes: ["title", "tracks", "managed_by_feeds"],
            onModelChange: function() {
                var e = this.getElement("count"),
                    t = this.model.changedAttributes(),
                    n = this.model.getNumSounds();
                0 === e.length || t.title ? this.rerender() : e.html(" " + n).attr("title", i.call(this))
            },
            getTemplateData: function(e) {
                return e.isManagedByFeeds = this.model.isManagedByFeeds(), e.isPrivate = this.model.isPrivate(), e.trackCountTitle = i.call(this), e
            }
        })
    },
    1671: function(e, t, n) {
        "use strict";

        function i() {
            this.disposed || (o(), this.collection.setUserInput(this.filterForm.get("term")))
        }
        var a = 2e3,
            s = (e.exports = n(78).extend({
                css: n(3006),
                template: n(2627),
                className: "addToPlaylistList",
                itemClassName: "addToPlaylistList__item sc-border-light-top",
                Subview: n(1670),
                defaults: {
                    soundIds: null,
                    fullPageList: !1
                },
                element2selector: {
                    list: ".addToPlaylistList__list"
                },
                setup: function() {
                    this.collection = new(n(1214)), this.collection.setLimit(10), this.filterForm = new s, this.listenTo(this.filterForm, "change:term", i)
                },
                dispose: function() {
                    this.filterForm.release()
                },
                getSubviewArgs: function() {
                    return n(3).assign(n(78).prototype.getSubviewArgs.apply(this, arguments), {
                        soundIds: this.options.soundIds
                    })
                },
                getListContainer: function() {
                    return this.getElement("list")
                },
                getTemplateData: function(e) {
                    e.FilterForm = s, e.formId = this.filterForm.resource_id
                },
                onCollectionChange: function() {
                    n(54).prototype.onCollectionChange.apply(this, arguments)
                }
            }), n(79).extend({
                fields: {
                    term: {
                        "default": ""
                    }
                }
            }, {
                hashFn: function() {
                    return 1
                }
            })),
            o = n(3).debounce(function() {
                n(59).trackV0Click(["add_to_set", "filter"])
            }, a)
    },
    1672: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            className: "addToPlaylist",
            defaults: {
                soundIds: null
            },
            template: n(2629)
        })
    },
    1673: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2630),
            ModelClass: n(75),
            requiredAttributes: {
                sound: ["sharing", "managed_by_feeds", "monetization", "monetization_enabled", "scheduled_public_date", "scheduled_private_date", "scheduled_timezone", "geo_blockings"],
                playlist: ["sharing"]
            },
            defaults: {
                showPrivateOnly: !1
            },
            getTemplateData: function(e) {
                return n(3).assign(e, n(342).enabledAttributes(this.model))
            }
        })
    },
    1674: function(e, t, n) {
        "use strict";
        var i = {
            playlist: {
                title: "Delete Playlist?",
                text: function() {
                    return ["Are you sure you want to delete ", this.model.get("title"), "? This action cannot be undone."].join("")
                }
            },
            sound: {
                title: "Delete Track?",
                text: "Stats and comments for this track will be permanently removed."
            }
        };
        e.exports = n(359).extend({
            className: "deleteAudible",
            ModelClass: n(75),
            template: n(2631),
            css: n(3007),
            defaults: {
                confirmButton: "Delete"
            },
            getTemplateData: function(e) {
                var t = i[this.options.resource_type];
                return n(3).defaults({
                    title: t.title,
                    text: n(3).isFunction(t.text) ? t.text.call(this) : t.text
                }, e)
            },
            onSubmit: function() {
                n(74).destroy(this.model)
            }
        })
    },
    1675: function(e, t, n) {
        (function(t) {
            "use strict";
            var i = {
                sound: n(52).t("Are you sure?<br> Deleting is forever â€“ you wonâ€™t be able to get this track back."),
                playlist: n(52).t("Are you sure?<br> Deleting is forever â€“ you wonâ€™t be able to get this playlist back.")
            };
            e.exports = n(359).extend({
                ModelClass: n(75),
                defaults: {
                    confirmButton: n(52).t("Delete"),
                    size: "small"
                },
                element2selector: {
                    actions: ".confirmableForm__actions",
                    text: ".confirmableForm__text"
                },
                setup: function() {
                    this.options.confirmText = i[this.model.resource_type]
                },
                renderDecorate: function() {
                    var e, i, a, s, o, r;
                    this.model.isOverQuota() && (s = n(55).get("me"), e = n(72).getNextLevelProductId(s), a = s.hasProPlanLevel(), r = "sound" === this.options.resource_type, i = this.addSubview(new(n(139))({
                        resource_id: e,
                        tagName: "a",
                        linkRef: "t117",
                        size: "xsmall"
                    })), t("<div>").appendTo(this.getElement("actions")).append(i.render().el), o = a && r ? n(52).t("You can upgrade to display this track.") : a && !r ? n(52).t("You can upgrade to display this playlist.") : !a && r ? n(52).t("You can go Pro to display this track.") : n(52).t("You can go Pro to display this playlist."), this.getElement("text").append(o))
                },
                onSubmit: function() {
                    n(74).destroy(this.model)
                }
            })
        }).call(t, n(1))
    },
    1676: function(e, t, n) {
        "use strict";
        e.exports = n(391).extend({
            getSubviewModel: function(e) {
                var t = void 0,
                    i = void 0;
                return (t = e.get("track")) ? new(n(66))(t) : (i = e.get("playlist")) ? new(n(86))(i) : null
            }
        })
    },
    1677: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2633),
            css: n(3009),
            ModelClass: n(86),
            requiredAttributes: ["track_count"],
            className: "playlistLength",
            loadingTemplate: null,
            getTemplateData: function(e) {
                var t = this.model.getNumSounds();
                return e.trackCount = t, e.trackCountTitle = n(52).tp("1 track", "%d tracks", t), e
            }
        })
    },
    1678: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                o[e]("resize", this.onWindowResize), this.model[e]("play finish time seeked", s, this)
            }

            function a() {
                this._inserted && (this._width = this.$el.width())
            }

            function s() {
                if (!this.disposed && (this._width || (a.call(this), this._width))) {
                    this._duration || (this._duration = this.model.duration());
                    var e = this.model.currentTime(),
                        t = Math.floor(e / 1e3),
                        i = this._duration,
                        s = e / i,
                        o = Math.ceil(s * this._width) || (this.model.isPlaying() ? 1 : 0);
                    o !== this._lastPos && (this._lastPos = o, this.getElement("bar").css("width", o + "px")), t !== this._lastSecs && (this._lastSecs = t, this.$el.attr({
                        "aria-valuenow": e,
                        "aria-valuetext": n(52).dateTimeHelper.timecode(e, {
                            inWords: !0
                        })
                    }))
                }
            }
            var o = t(window),
                r = 300;
            e.exports = n(54).extend({
                ModelClass: n(66),
                requiredAttributes: ["duration"],
                css: n(3010),
                className: "progressBar",
                attributes: {
                    "aria-role": "progressbar",
                    "aria-valuemin": "0"
                },
                element2selector: {
                    bar: ".progressBar__bar"
                },
                defaults: {
                    foregroundColor: "#f50",
                    backgroundColor: "#999"
                },
                _lastPos: 0,
                _lastSecs: null,
                _duration: null,
                _inserted: !1,
                _width: null,
                setup: function(e) {
                    var t = this;
                    this.whenInserted().done(function() {
                        t._inserted = !0, a.call(t)
                    }), this.onWindowResize = n(3).debounce(this.onWindowResize, r).bind(this), this.setBackgroundColor(e.backgroundColor), i.call(this, "on")
                },
                dispose: function() {
                    i.call(this, "off")
                },
                template: function() {
                    return '<div class="progressBar__bar" style="background-color:' + this.options.foregroundColor + '"></div>'
                },
                renderDecorate: function() {
                    this.$el.attr("aria-valuemax", this.model.duration()), s.call(this)
                },
                onWindowResize: function() {
                    a.call(this)
                },
                setBackgroundColor: function(e) {
                    this.el.style.backgroundColor = e
                }
            })
        }).call(t, n(1))
    },
    1679: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(184), {
            template: n(2634),
            css: n(3011),
            className: "repostAudibleForm",
            ModelClass: n(75),
            onSubmit: function() {
                var e = this.options;
                n(74).repost(e.resource_id, e.resource_type, null, {
                    context: this.getContextData()
                })
            }
        })
    },
    1680: function(e, t, n) {
        "use strict";

        function i(e) {
            window.location.search = "?stage=" + e
        }
        e.exports = n(54).extend({
            template: n(2641),
            css: n(3020),
            className: "stagingMenu g-z-index-overlay",
            element2selector: {
                select: ".stagingMenu__select"
            },
            events: {
                "change .stagingMenu__select": "onSelectChange"
            },
            onSelectChange: function() {
                i.call(this, this.getElement("select").val())
            },
            hasData: function() {
                return n(134).get("stage")
            },
            getTemplateData: function(e) {
                var t = n(134).get("stage");
                return e.selectValues = [{
                    value: t,
                    label: "Stage: " + t.charAt(0).toUpperCase() + t.slice(1)
                }, {
                    value: "",
                    label: "Live Site"
                }], e
            }
        })
    },
    1683: function(e, t, n) {
        "use strict";
        var i, a = n(119).types,
            s = a.TRACK,
            o = a.ARTIST,
            r = (i = {}, i[o] = n(52).t("Artist station"), i[s] = n(52).t("Track station", null, {
                context: "noun phrase"
            }), i);
        e.exports = n(54).extend({
            template: n(2643),
            css: n(3022),
            className: "stationBadgeHorizontal",
            ModelClass: n(119),
            requiredAttributes: ["permalink", "title", "type"],
            getTemplateData: function(e) {
                return e.stationType = r[e.type], e
            }
        })
    },
    1686: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(544), {
            setup: function(e) {
                var t = e.resource_id;
                this.collection = new(n(212))(null, {
                    resource_id: t
                }), this.station = this.addDataSource(new(n(119))({
                    resource_id: t
                }), {
                    requiredAttributes: ["permalink_url"]
                })
            },
            getRestoreUrl: function() {
                return n(61).getRoute("station", this.station)
            }
        })
    },
    1687: function(e, t, n) {
        "use strict";

        function i(e) {
            return n(143).render(e, {
                useSIUnits: !0
            })
        }

        function a(e) {
            var t = e.playback_count;
            return e.ministats_class = "sc-ministats sc-ministats-small", e.showDuration = !0, e.durationInWords = n(52).t("Duration: [[timeCodeInWords]]", {
                timeCodeInWords: n(52).dateTimeHelper.timecode(e.duration, {
                    inWords: !0
                })
            }), e.duration = n(52).dateTimeHelper.timecode(e.duration), e.show_playback_count = t > 0, e.shortTexts = {
                playback_count: i(t)
            }, e.fullTexts = {
                playback_count: n(52).tp("1 play", "%d plays", t)
            }, e
        }

        function s(e) {
            var t = e.likes_count;
            return e.network_type = "playlistNetwork", e.ministats_class = "sc-ministats sc-ministats-small", e.show_likes_count = t > 0, e.shortTexts = {
                likes_count: i(t)
            }, e.fullTexts = {
                likes_count: n(52).tp("1 like", "%d likes", t)
            }, e
        }
        e.exports = n(54).extend({
            template: n(2646),
            ModelClass: n(75),
            className: "audibleInfoStats sc-text-light",
            requiredAttributes: {
                playlist: ["likes_count", "display_date"],
                sound: ["playback_count", "duration", "display_date"]
            },
            setup: function(e) {
                var t = e.resource_type,
                    i = "playlist" === t ? n(52).t("Playlist stats") : n(52).t("Track stats");
                this.$el.attr("aria-label", i)
            },
            getTemplateData: function(e) {
                var t = "sound" === this.options.resource_type;
                return t ? a(e) : s(e)
            }
        })
    },
    1696: function(e, t, n) {
        "use strict";

        function i() {
            var e = n(55).get("me"),
                t = e.get("quota"),
                i = t && !!t.unlimited_upload_quota;
            return this.total.get("plays") >= d && !e.isPremium() && !i
        }

        function a() {
            return n(55).get("me").isOverQuota() ? n(3).clone(p.overquota) : n(3).clone(n(3).sample(p.random))
        }

        function s(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor(e / 60 - 60 * t);
            return (t ? t + "h " : "") + n + "m"
        }

        function o() {
            return n(55).get("me").getUploadSecondsLeft()
        }

        function r() {
            this.trigger("update:plays")
        }

        function l() {
            var e = this.last24Hrs,
                t = e.get("plays") + this.lastWeek.get("plays"),
                i = n(132).clamp(8 * c.day / t, h, f);
            this._updateId = window.setInterval(e.fetch.bind(e), i)
        }

        function u() {
            window.clearTimeout(this._updateId)
        }
        var c = n(52).dateTimeHelper.time,
            d = 100,
            p = {
                overquota: {
                    headline: n(52).t("Youâ€™re out of upload time"),
                    text: n(52).t("Share more of your sounds. Upgrade to a Pro plan for more upload minutes and advanced features."),
                    link: n(52).t("Upgrade now"),
                    ref: "t075"
                },
                random: [{
                    headline: n(52).t("Get more upload time"),
                    text: function() {
                        var e = o(),
                            t = s(e);
                        return 10 > e / 60 ? n(52).t("You have only <span>[[time]]</span> left. Go Pro for more upload minutes and advanced features.", {
                            time: t
                        }) : n(52).t("You have <span>[[time]]</span> left. Go Pro for more upload minutes and advanced features.", {
                            time: t
                        })
                    },
                    link: n(52).t("Upgrade now"),
                    ref: "t084"
                }, {
                    headline: n(52).t("Do more with a Pro plan"),
                    text: n(52).t("Grow and better understand your audience with a Pro plan."),
                    link: n(52).t("Go Pro"),
                    ref: "t085"
                }, {
                    headline: n(52).t("Know more with a Pro plan"),
                    text: n(52).t("Get more in-depth stats about your audience."),
                    link: n(52).t("Go Pro"),
                    ref: "t086"
                }]
            },
            h = 3 * c.minute,
            f = 30 * c.minute,
            g = {
                total: {},
                last24Hrs: {
                    offset: -24,
                    duration: 24,
                    resolution: "hour"
                },
                lastWeek: {
                    offset: -6,
                    duration: 7,
                    resolution: "day"
                }
            };
        e.exports = n(54).extend(n(104), n(126).withOptions({
            elSelector: ".statsBadge__upsellLink",
            type: "pro"
        }), {
            css: n(3028),
            template: n(2649),
            className: "statsBadge",
            element2selector: {
                upsell: ".statsBadge__upsell",
                headline: ".statsBadge__upsell-headline",
                text: ".statsBadge__upsell-text"
            },
            last24Hrs: null,
            lastWeek: null,
            total: null,
            setup: function() {
                var e = {
                    user: n(55).get("me").getUrn(),
                    singleMetric: "plays"
                };
                n(3).each(g, function(t, i) {
                    this[i] = this.addDataSource(new(n(586))(null, n(3).assign(n(52).dateTimeHelper.getBounds(t), e)), {
                        requiredAttributes: ["plays"]
                    })
                }, this), this.listenTo(n(55).get("me"), "change:quota change:subscriptions", this.rerender).listenTo(this.last24Hrs, "change:plays", r).listenTo(this.lastWeek, "change:plays", r)
            },
            renderDecorate: function() {
                l.call(this)
            },
            teardown: function() {
                u.call(this)
            },
            getTemplateData: function(e) {
                return e.total = this.total.get("plays"), e.last24Hrs = this.last24Hrs.get("plays"), e.lastWeek = this.lastWeek.get("plays"), i.call(this) && (e.upsell = a(), e.upsell.text = n(3).result(e.upsell, "text")), e
            },
            getUpsellRef: function() {
                return a().ref
            },
            hasRecentPlays: function() {
                return this.last24Hrs.get("plays") > 0 || this.lastWeek.get("plays") > 0
            }
        })
    },
    1711: function(e, t, n) {
        "use strict";
        var i = n(59).trackImpression;
        e.exports = n(54).extend(n(68).withOptions("userSuggestion"), {
            template: n(2662),
            css: n(3040),
            className: "userSuggestion",
            ModelClass: n(371),
            defaults: {
                size: "medium"
            },
            renderDecorate: function() {
                if (this.model.isPromoted()) {
                    var e = this.getContextData();
                    n(82).trackEvent("impression", e), i({
                        context: e,
                        impression_name: "promoted_profile"
                    })
                }
            },
            getTemplateData: function(e) {
                return e.isPromoted = this.model.isPromoted(), e
            }
        })
    },
    1713: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            css: n(3042),
            className: "suggestedTag sc-truncate",
            defaults: {
                tag: ""
            },
            setup: function(e) {
                this.tag = String(e.tag)
            },
            template: function() {
                return this.tag
            }
        })
    },
    1714: function(e, t, n) {
        "use strict";

        function i() {
            var e = 'Add "' + this.options.query + '"';
            this.createAndInsertListItemView(e), this.resetElementCache()
        }
        e.exports = n(80).extend(n(307), {
            className: "suggestedTags sc-type-small",
            Subview: n(1713),
            itemClassName: "suggestedTags__listItem",
            itemSelector: ".suggestedTags__listItem",
            maxItemDisplay: 11,
            states: {
                visible: "visible"
            },
            defaults: {
                query: "",
                urn: null,
                context: null
            },
            setup: function(e) {
                this.collection = new(n(1221))(null, {
                    prefix: e.query,
                    urn: e.urn,
                    context: e.context
                })
            },
            getSubviewArgs: function(e) {
                return {
                    tag: e
                }
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.call(this), i.call(this), this.highlightItem(this.options.defaultSelectedItemIndex), this.toggleState("visible", !0)
            },
            onItemSelected: function(e) {
                return this.collection.at(e) || this.options.query
            }
        })
    },
    1727: function(e, t, n) {
        "use strict";

        function i(e) {
            e && e.rerender()
        }

        function a() {
            var e = this.subviews,
                t = e.composer,
                n = e.publisher,
                a = e.publisherIsrc,
                s = e.publisherArtist;
            i(t), i(n), i(a), i(s)
        }

        function s() {
            this.toggleState("failed", !!this.model.get("fileUploadFailed")).toggleState("readOnly", this.options.readOnly)
        }
        e.exports = n(54).extend(n(202), {
            template: n(2675),
            css: n(3055),
            className: "compactUpload sc-type-small",
            ModelClass: n(150),
            slideInnerSelector: ".compactUpload__wrapper",
            events: {
                "click .compactUpload__cancel": "onCancelClick"
            },
            element2selector: {
                failedErrorMessage: ".compactUpload__failedErrorMessage"
            },
            defaults: {
                readOnly: !1
            },
            states: {
                failed: function() {
                    var e = n(52).t('<span class="compactUpload__failedTitle sc-type-light">[[trackTitle]]</span> failed to upload', {
                        trackTitle: this.model.get("title")
                    });
                    this.getElement("failedErrorMessage").html(e.toString()), this.$el.toggleClass("failed")
                },
                readOnly: "readOnly"
            },
            setup: function() {
                this.listenTo(this.model, "change:fileUploadFailed", s), this.listenTo(this.model, "change:monetizationEnabled change:publisherContainsMusic", a)
            },
            renderDecorate: function() {
                s.call(this)
            },
            getTemplateData: function(e) {
                return e.isCPPEnabled = n(55).get("me").isCPPEnabled(), e.FormClass = n(150), e.uploadStatusSize = this.options.readOnly ? "small" : "medium", e
            },
            onCancelClick: function() {
                this.model.performAction("cancel")
            },
            remove: function() {
                return this.slideUp()
            }
        })
    },
    1728: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                this.model.isOverQuota() || n(975).addFiles(e), a()
            }

            function a() {
                n(55).get("router").navigateToRoute("upload", null, {
                    trigger: !0
                })
            }

            function s(e) {
                t(window.document)[e]("dragover", this.onDragOver)[e]("drop", this.onDrop)[e]("dragenter", this.onDragEnter)[e]("dragleave", this.onDragLeave)
            }

            function o(e) {
                return n(3).any(e, function(e) {
                    return n(220).isAcceptable(e)
                })
            }

            function r(e) {
                return e.dataTransfer.items ? n(3).any(e.dataTransfer.items, function(e) {
                    return "file" === e.kind && n(220).isAcceptable(e)
                }) : !1
            }
            var l = 0;
            e.exports = n(54).extend({
                css: [n(3056), n(1162)],
                className: "uploadTarget modal modalWhiteout g-z-index-modal-background sc-font g-opacity-transition",
                states: {
                    entered: "entered",
                    visible: function() {
                        var e;
                        return function(t) {
                            var n = "uploadTarget__visible",
                                i = this.$el;
                            window.clearTimeout(e), t ? i.addClass(n).css("display", "") : (i.removeClass(n), window.setTimeout(i.css.bind(i, "display", "none"), 300))
                        }
                    }()
                },
                observedAttributes: ["creator_subscriptions", "quota"],
                events: {
                    "dragenter .uploadTarget__frame": "onFrameDragToggle",
                    "dragleave .uploadTarget__frame": "onFrameDragToggle"
                },
                template: n(2676),
                setup: function() {
                    n(3).bindAll(this, "onDragOver", "onDrop", "onDragEnter", "onDragLeave"), s.call(this, "on"), this.model = n(55).get("me"), this.model.hold(), this.el.style.display = "none"
                },
                dispose: function() {
                    s.call(this, "off")
                },
                getTemplateData: function(e) {
                    var t = this.model,
                        i = t.getUploadSecondsUsed(),
                        a = t.getUploadSecondsLeft(),
                        s = e.logged_in = n(63).isLoggedIn(),
                        o = e.show_quota = s && !t.hasUnlimitedUpload() && !t.isOverQuota();
                    e.drop_files = !s || a > 0, o && (e.minutes_used = n(52).dateTimeHelper.convert(i, "m"), e.minutes_left = n(52).dateTimeHelper.convert(a + i, "m") - e.minutes_used)
                },
                onFrameDragToggle: function() {
                    this.toggleState("entered")
                },
                onDragOver: function() {
                    return !1
                },
                onDrop: function(e) {
                    var t = this,
                        a = !!this.model.id,
                        s = e.dataTransfer.files;
                    return l = 0, this.toggleState("visible", !1), o(s) && (a ? i.call(this, s) : n(63).login({
                        implicitAction: "upload"
                    }).done(function() {
                        return i.call(t, s)
                    })), !1
                },
                onDragEnter: function(e) {
                    return 0 === l++ && !this.getState("visible") && r(e) && this.toggleState("visible"), !1
                },
                onDragLeave: function(e) {
                    0 === --l && this.getState("visible") && r(e) && this.toggleState("visible")
                }
            })
        }).call(t, n(1))
    },
    1730: function(e, t, n) {
        "use strict";

        function i() {
            var e = this.model.get("transfer");
            this.getElement("current").text(n(938).bytesToMB(e.getValue(), {
                digits: 2
            })), this.getElement("total").text(n(938).bytesToMB(e.getTotalSize(), {
                digits: 2
            }))
        }
        e.exports = n(54).extend({
            className: "progressText",
            element2selector: {
                current: ".progressText__current",
                total: ".progressText__total"
            },
            ModelClass: n(563),
            setup: function() {
                this.listenTo(this.model.get("transfer"), "data", this.onData)
            },
            template: function() {
                return n(52).t("[[[fileSizeUploaded]]] of [[[fileSizeTotal]]] uploaded", {
                    fileSizeUploaded: '<span class="progressText__current">0MB</span>',
                    fileSizeTotal: '<span class="progressText__total"></span>'
                })
            },
            renderDecorate: i,
            onData: i
        })
    },
    1731: function(e, t, n) {
        "use strict";

        function i() {
            var e = o.map(function(e) {
                return this.collection.getByType(e.type)
            }, this).filter(Boolean).filter(function(e) {
                return e.get("post_publish")
            }).map(function(e) {
                return e.id
            });
            this.setFieldValue(e)
        }

        function a() {
            var e = this.getFieldValue();
            o.forEach(function(t) {
                var n = t.type,
                    i = this.collection.getByType(n),
                    a = !i || -1 === e.indexOf(i.id);
                this.getElement("inputs").filter("." + n).prop("checked", !a)
            }, this)
        }

        function s(e, t) {
            var i, s, o = this,
                r = this.getFieldValue().slice();
            if (e) {
                if (i = function(e) {
                        var n = e.id,
                            i = r.indexOf(n);
                        if (-1 === i && t) r.push(n);
                        else {
                            if (!(i > -1) || t) return;
                            r.splice(i, 1)
                        }
                        o.setFieldValue(r)
                    }, s = this.collection.getByType(e.type), !s && !t) return;
                s ? i(s) : n(477).create(e.type).done(i).fail(a.bind(this))
            }
        }
        var o;
        o = [{
            type: "twitter",
            icon: "twitter",
            name: "Twitter"
        }, {
            type: "facebook_profile",
            icon: "facebook",
            name: "Facebook"
        }, {
            type: "tumblr",
            icon: "tumblr",
            name: "Tumblr"
        }];
        e.exports = n(54).extend(n(113), {
            css: n(3060),
            template: n(2681),
            className: "shareToNetworks",
            defaults: {
                size: "small"
            },
            element2selector: {
                inputs: ".shareToNetworks__input"
            },
            events: {
                "change .shareToNetworks__input": "onNetworkChange"
            },
            setup: function() {
                this.collection = new(n(1213))
            },
            getCollectionData: function() {
                return {}
            },
            renderDecorate: function() {
                i.call(this), a.call(this)
            },
            getTemplateData: function(e) {
                return e.networks = o, e.sizeClass = "large" === this.options.size ? "sc-social-logo-32" : "", e
            },
            onFieldChange: function() {
                a.call(this)
            },
            onNetworkChange: function(e) {
                var t = e.target,
                    i = t.name,
                    a = n(3).find(o, function(e) {
                        return e.type === i
                    });
                s.call(this, a, !!t.checked)
            }
        })
    },
    1741: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend(n(184), {
            template: n(2689),
            css: n(3069),
            className: "blockUser",
            ModelClass: n(64),
            requiredAttributes: ["username"],
            onSubmit: function(e) {
                var t = this,
                    i = e.report.checked;
                n(74).block(this.model.id, !0, i, e.remove.checked).then(function() {
                    return n(57).trigger("user:blocked", {
                        report: i,
                        userData: t.model.attributes
                    })
                })
            },
            getTemplateData: function(e) {
                e.reportLabel = n(52).t("Also report [[username]] for spam", {
                    username: e.username
                }), e.removeLabel = n(52).t("Also permanently remove this user's comments, reposts and likes of your tracks and playlists")
            }
        })
    },
    1760: function(e, t, n) {
        "use strict";

        function i(e) {
            return "<" === e ? "&lt;" : "&gt;"
        }

        function a(e, t, n) {
            return t + "<b>" + n + "</b>"
        }
        e.exports = n(54).extend({
            css: n(3084),
            template: n(2707),
            className: "spotlightResultItem sc-type-light sc-media",
            tagName: "a",
            attributes: {
                href: ""
            },
            defaults: {
                queryRegex: null
            },
            ModelClass: n(75),
            requiredAttributes: ["artwork_url", "title"],
            renderDecorate: function() {
                this.$el.toggleClass("private", this.model.isPrivate())
            },
            getTemplateData: function(e) {
                var t = e.title.replace(/<|>/g, i),
                    n = this.options.queryRegex;
                return e.title = n ? t.replace(n, a) : t, e.iconType = "playlist" === e.kind ? "set" : "sound", e
            }
        })
    },
    1761: function(e, t, n) {
        "use strict";
        e.exports = n(78).extend(n(307), n(104), {
            css: n(3085),
            className: "spotlightResults sc-list-nostyle sc-border-light-bottom sc-border-light-left sc-border-light-right",
            itemClassName: "spotlightResults__item sc-border-light-top",
            Subview: n(1760),
            defaults: {
                showPrivateSounds: !1,
                includePlaylists: !0,
                query: "",
                userId: null
            },
            itemSelector: ".spotlightResults__item",
            maxItemDisplay: 15,
            _queryRegex: null,
            setup: function(e) {
                this.collection = new(n(1227))(null, {
                    userId: this.options.userId,
                    includePrivateSounds: e.showPrivateSounds,
                    includePlaylists: e.includePlaylists
                }), this.collection.setUserInput(e.query)
            },
            renderDecorate: function() {
                n(78).prototype.renderDecorate.call(this), this.highlightItem(this.options.defaultSelectedItemIndex)
            },
            emptyTemplate: function() {
                var e = n(52).t("No results found");
                return '<div class="sc-media-content spotlightResults__noResults"><h2 class="spotlightResultItem__title sc-truncate sc-type-h3">' + e + "</h2></div>"
            },
            onItemSelected: function(e, t) {
                return this.getSubviewInWrapper(t).model
            },
            getSubviewArgs: function() {
                return n(3).assign(n(78).prototype.getSubviewArgs.apply(this, arguments), {
                    queryRegex: this._queryRegex
                })
            }
        })
    },
    1765: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2713),
            css: n(3089),
            ModelClass: n(64),
            className: "suggestedUser sc-clearfix",
            requiredAttributes: ["username", "avatar_url"],
            getTemplateData: function(e) {
                return e.userModel = this.model, e
            }
        })
    },
    1766: function(e, t, n) {
        "use strict";
        e.exports = n(80).extend(n(307), {
            className: "suggestedUsers sc-list-nostyle",
            css: n(3090),
            Subview: n(1765),
            defaults: {
                query: ""
            },
            itemClassName: "suggestedUsers__listItem sc-type-light",
            itemSelector: ".suggestedUsers__listItem",
            setup: function(e) {
                var t = e.query;
                this.collection = new(n(900))(null, {
                    query: t
                })
            },
            renderDecorate: function() {
                n(80).prototype.renderDecorate.call(this), this.highlightItem(this.options.defaultSelectedItemIndex)
            },
            onItemSelected: function(e) {
                return this.collection.at(e)
            }
        })
    },
    1767: function(e, t, n) {
        "use strict";
        var i = 12;
        e.exports = n(80).extend(n(104), {
            css: n(3039),
            className: "userSuggestionList",
            itemClassName: "userSuggestionList__item",
            Subview: n(1711),
            setup: function() {
                this.collection = new(n(907))(null, {
                    limit: 21,
                    category: "who_to_follow",
                    view: "recommended-first"
                })
            },
            refresh: function() {
                this.collection.remove(this.collection.first(this.options.maxDisplay)), this.collection.length < i && this.collection.fetch()
            }
        })
    },
    1770: function(e, t, n) {
        "use strict";
        e.exports = n(169).extend(n(140), {
            defaults: {
                dialogType: "userBadge",
                boundaryOutlineStyle: "white",
                noFollow: !1
            },
            dialogSubviewArgs: function() {
                return {
                    resource_id: this.model.id
                }
            }
        })
    },
    1772: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2720),
            css: n(3095),
            className: "userDialogBadge",
            ModelClass: n(64),
            requiredAttributes: ["permalink", "username", "country_code", "city"],
            getTemplateData: function(e) {
                return n(3).assign(e, {
                    address: [e.city, this.model.getCountry()].filter(Boolean).join(", "),
                    isPremium: this.model.isPremium(),
                    isMe: this.model.isMe()
                })
            }
        })
    },
    1778: function(e, t, n) {
        "use strict";
        e.exports = n(54).extend({
            template: n(2724),
            className: "deniedSignup"
        })
    },
    1780: function(e, t, n) {
        "use strict";

        function i(e) {
            return e > 0 && c > e
        }

        function a() {
            this.setDirty(!0)
        }

        function s(e, t) {
            var n = t ? c : 0;
            return e + (n > e ? 1 : e > n ? -1 : 0)
        }

        function o() {
            if (this._pattern) return this._pattern;
            var e = l || (l = window.document.createElement("canvas")),
                t = this.options,
                i = this.canvas,
                a = t.scale,
                s = t.waveformHeight,
                o = t.upperPartHeight,
                r = t.waveformData,
                u = t.waveformWidth,
                c = e.getContext("2d"),
                d = i.width / a,
                p = i.height / a,
                h = n(229).getConfig("gapWidth"),
                f = n(229).getConfig("barWidth"),
                g = f + h,
                m = o * p,
                v = p - m,
                _ = this.getFillStyle(),
                y = h > 0,
                b = y && this.getFillStyle(1, "gapGradient"),
                w = null,
                x = null,
                k = void 0,
                T = void 0,
                A = void 0,
                S = void 0,
                C = void 0;
            for (e.width = i.width, e.height = i.height, c.clearRect(0, 0, e.width, e.height), c.save(), n(112).isHiDPI && 1 !== a && c.scale(a, a), c.beginPath(), c.fillStyle = b, k = 0; d > k; k += g) S = r[k / d * u | 0], T = S / s * m | 0, A = (1 - S / s) * v + m | 0, c.rect(k, T, f, A - T), y && k && (C = Math.max(T, w), c.fillRect(k - h, C, h, Math.min(A, x) - C)), w = T, x = A;
            return c.fillStyle = _, c.fill(), c.clearRect(0, m - 1, d, 1), this._pattern = this.context.createPattern(e, "no-repeat"), c.restore(), this._pattern
        }

        function r(e) {
            this.options.$eventEl[e]("mouseenter mouseleave", this.onHover)
        }
        var l = void 0,
            u = 3,
            c = 13,
            d = .2,
            p = (e.exports = n(54).extend(n(401), n(659), {
                gradientName: "backgroundGradient",
                _pattern: null,
                _currentPlayingStep: 0,
                _currentHoverStep: 0,
                _isHovered: !1,
                defaults: {
                    upperPartHeight: .7,
                    waveformWidth: 1800,
                    waveformHeight: 140,
                    waveformData: null
                },
                setup: function() {
                    var e = this.model;
                    e.isPlaying() && (this._currentPlayingStep = c), this.listenTo(e, "play pause", a), this.onHover = this.onHover.bind(this), r.call(this, "on")
                },
                dispose: function() {
                    r.call(this, "off")
                },
                onResize: function() {
                    this._pattern = null
                },
                onHover: function(e) {
                    this._isHovered = "mouseenter" === e.type, this.setDirty(!0)
                },
                draw: function() {
                    var e = this.model,
                        t = this.context,
                        n = this.options.scale,
                        a = this.canvas.height,
                        r = this._isHovered,
                        l = s(this._currentPlayingStep, e.isPlaying()),
                        u = s(this._currentHoverStep, r);
                    this._currentPlayingStep = l, this._currentHoverStep = u, this.isAnimating = i(u) || i(l);
                    var c = Math.max(l, u),
                        h = this.getPlayableWidth(),
                        f = this.getUnplayableWidth();
                    t.save(), t.scale(1 / n, 1 / n), t.fillStyle = o.call(this), t.globalAlpha = p(c), t.fillRect(0, 0, h, a), f && (t.globalAlpha = d, t.fillRect(h, 0, f, a)), t.restore()
                }
            }), n(3).memoize(function(e) {
                var t = Math.max(0, (e - u) / (c - u));
                return -Math.cos(t * Math.PI) / 8 + .875
            }))
    },
    1781: function(e, t, n) {
        "use strict";

        function i() {
            return !!this._avatarsDeferred && "pending" !== this._avatarsDeferred.state()
        }

        function a() {
            var e = this,
                t = this.collection.map(s, this).filter(n(3).identity);
            return this._avatarsDeferred = this.addDeferred(n(56).settled(t).done(function() {
                e.setDirty(!0), e.toggleState("loadedAvatars", !0)
            })), this._avatarsDeferred
        }

        function s(e) {
            var t = void 0,
                i = void 0;
            if (e.length) {
                t = e[0];
                var a = e[1];
                i = a[0]
            } else t = e.get("timestamp"), i = e;
            if (i && null != t && !(0 > t)) {
                var s = n(56).defer(),
                    o = {
                        timestamp: t,
                        cid: i.cid
                    },
                    l = i.get("user"),
                    u = l.avatar_url,
                    c = n(87).isDefaultImage(u),
                    d = this.options.avatarSize,
                    p = n(112).isHiDPI && (c || d !== f) ? 2 * d : d;
                return c ? (o.el = v(l.id, p), this._comments.unshift(o), s.resolve()) : r({
                    view: this,
                    url: n(87).setFormat(u, p, !0),
                    info: o,
                    imgDefer: s
                }), s
            }
        }

        function o(e) {
            var t = new window.Image;
            t.onload = c.bind(e.view, t, e.info, e.imgDefer), t.onerror = d.bind(e.view, e.info, e.imgDefer), t.src = e.url
        }

        function r(e) {
            m.push(e), l()
        }

        function l() {
            for (var e = void 0, t = void 0, n = g.length; h > n && (t = m.shift());) e = t.imgDefer, "pending" === e.state() && (n = g.push(t), o(t), e.always(u(t)))
        }

        function u(e) {
            return function() {
                g.splice(g.indexOf(e), 1), l()
            }
        }

        function c(e, t, n) {
            this.disposed || (t.el = e, this._comments.unshift(t)), n.resolve()
        }

        function d(e, t) {
            this._comments.unshift(e), t.resolve()
        }
        var p = n(54).prototype,
            h = 10,
            f = 10,
            g = [],
            m = [],
            v = (e.exports = n(54).extend(n(974), n(472), n(966), {
                css: n(3101),
                className: "waveformCommentsNode",
                defaults: {
                    upperPartHeight: .7,
                    sound_id: null,
                    avatarSize: 10,
                    bulkFetch: n(55).get("maxComments")
                },
                _avatarsDeferred: null,
                _comments: null,
                states: {
                    loadedAvatars: "loaded",
                    commenting: "commenting"
                },
                setup: function(e) {
                    this.collection = new(n(513))(null, {
                        sound_id: e.sound_id,
                        secret_token: this.sound.get("secret_token")
                    }), this._comments = []
                },
                dispose: function() {
                    this._comments.length = 0
                },
                getSound: function() {
                    return this.sound
                },
                hasData: function() {
                    return p.hasData.call(this) && i.call(this)
                },
                fetchData: function() {
                    return p.hasData.call(this) ? i.call(this) ? (this.toggleState("loadedAvatars", !0), n(56).resolve()) : a.call(this) : p.fetchData.call(this)
                },
                onResize: function() {
                    this.resetCachedDimensions()
                },
                draw: function() {
                    if (this._comments.length && i.call(this)) {
                        var e = this.context,
                            t = this.options,
                            n = t.scale,
                            a = t.upperPartHeight,
                            s = t.avatarSize,
                            o = this.canvas,
                            r = this.sound,
                            l = this._comments,
                            u = o.width / n,
                            c = o.height / n * a,
                            d = r.duration();
                        l.forEach(function(t) {
                            var n = t.timestamp,
                                i = t.el,
                                a = n / d,
                                o = Math.floor(u * a);
                            i && e.drawImage(i, o, c, s, s)
                        })
                    }
                },
                onAdd: function(e) {
                    var t = this;
                    s.call(this, e).done(function() {
                        return t.setDirty(!0)
                    })
                },
                onRemove: function(e) {
                    var t = this;
                    this._comments.some(function(n, i, a) {
                        return n.cid === e.cid ? (a.splice(i, 1), t.setDirty(!0), !0) : void 0
                    })
                },
                onInitialState: function() {
                    this.toggleState("commenting", !1)
                },
                onActiveTimestamp: function() {
                    this.toggleState("commenting", !0)
                },
                onCurrentCommentChange: function() {
                    this.toggleState("commenting", !1)
                },
                onCurrentTimestamp: function() {
                    this.toggleState("commenting", !1)
                }
            }), n(3).memoize(n(87).getPlaceholderCanvas, function(e, t) {
                return n(87).getPlaceholderClass(e) + t
            }))
    },
    1782: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                this.options.$eventEl[e](d, this.onPointerMove)[e](p, this.onPointerUp)[e](c, this.onPointerDown), this.model[e]("play pause", a, this)
            }

            function a() {
                this.disposed || this.toggleState("clickToPlay", this.model.isPlaying())
            }

            function s(e) {
                return e.isPlayable() && !e.isProcessing()
            }

            function o(e) {
                var t = n(461).normalizeEvent(e),
                    i = t.offsetX,
                    a = t.offsetY,
                    s = t.pageX,
                    o = this.options.scale;
                this.insideScrubbableArea(i * o, a * o) && this.model.seek(this.getSeekPosition(s))
            }
            var r = t(window),
                l = n(3).constant(!1),
                u = void 0,
                c = n(97).touch ? "touchstart" : "mousedown",
                d = n(97).touch ? "touchmove" : "mousemove",
                p = n(97).touch ? "touchend" : "mouseup";
            e.exports = n(54).extend(n(401), n(149), {
                states: {
                    scrubbing: function(e) {
                        window.document.onselectstart = e ? l : null
                    },
                    clickToPlay: function(e) {
                        this.$el.css({
                            cursor: e && s(this.model) ? "pointer" : ""
                        })
                    }
                },
                _cachedOffset: null,
                draw: n(3).noop,
                setup: function() {
                    u = u || t("#app"), n(3).bindAll(this, "onPointerDown", "onPointerMove", "onPointerUp"), i.call(this, "on")
                },
                dispose: function() {
                    i.call(this, "off")
                },
                onResize: function() {
                    this._cachedOffset = null
                },
                onPointerDown: function(e) {
                    var t = n(461).normalizeEvent(e),
                        i = t.offsetY,
                        a = this.model,
                        l = this.options.scale;
                    this.toggleState("scrubbing", !0), r.on(p, this.onPointerUp), a.isPlaying() ? o.call(this, e) : this.insideTopArea(i * l) && s(this.model) && this.toggleAudible(a, {
                        context: this.getContextData(),
                        userInitiated: !0
                    })
                },
                onPointerUp: function(e) {
                    r.off(p, this.onPointerUp), this.toggleState("scrubbing", !1)
                },
                onPointerMove: function(e) {
                    n(97).touch && e.preventDefault(), this.getState("scrubbing") && this.model.isPlaying() && o.call(this, e)
                },
                getCachedOffset: function() {
                    if (!this._cachedOffset) {
                        var e = this.$el,
                            t = e.offset(),
                            n = t.left,
                            i = t.top;
                        this._cachedOffset = {
                            left: 0 | n,
                            top: 0 | i,
                            right: n + e.width() | 0,
                            bottom: i + e.height() | 0
                        }
                    }
                    return this._cachedOffset
                },
                getSeekPosition: function(e) {
                    var t = (e - this.getCachedOffset().left) / this.canvas.width * this.options.scale;
                    return t * this.model.duration() | 0
                }
            })
        }).call(t, n(1))
    },
    1783: function(e, t, n) {
        "use strict";

        function i() {
            this.setDirty(!0)
        }
        e.exports = n(54).extend(n(401), n(1060), n(659), {
            gradientName: "progressGradient",
            setup: function() {
                this.listenTo(this.model, "play pause seeked", i)
            },
            draw: function() {
                var e = this.context,
                    t = this.canvas,
                    n = this.lastPosition = this.getCurrentPosition(),
                    i = this.roundToBar(n, !1),
                    a = n - i,
                    s = this.getWholeBarWidth();
                e.save(), e.globalCompositeOperation = "source-atop", e.fillStyle = this.getFillStyle(), e.fillRect(0, 0, i, t.height), a && (e.fillStyle = this.getFillStyle(a / s), e.fillRect(i, 0, s, t.height)), e.restore()
            },
            getCurrentPosition: function() {
                var e = n(229).getConfig("fadeInSteps");
                return Math.ceil(this.model.progress() * (this.canvas.width / this.options.scale) * e) / e
            },
            shouldBeDirty: function() {
                return this.lastPosition !== this.getCurrentPosition()
            }
        })
    },
    1784: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = this.context,
                    n = this.canvas,
                    i = this.options,
                    a = this.model,
                    s = i.scale,
                    o = this._mouseX || 0,
                    r = a.progress() * (n.width / s),
                    l = this.roundToBar(r, r >= o);
                t.save(), t.globalCompositeOperation = "source-atop", t.fillStyle = this.getFillStyle(e, o > l ? "scrubberGradientForward" : this.gradientName), t.fillRect(Math.min(l, o), 0, Math.abs(l - o), n.height), t.restore()
            }
        }

        function a(e) {
            this.options.$eventEl[e]("mouseleave", this.onMouseLeave)[e]("mousemove", this.onMouseMove)
        }

        function s() {
            var e = this._targetStep,
                t = this._currentStep;
            return e > t ? t + 1 : t > e ? t - 1 : t
        }
        var o = 3,
            r = 13,
            l = (e.exports = n(54).extend(n(401), n(659), {
                gradientName: "scrubberGradientBackward",
                _mouseX: null,
                _currentStep: 0,
                _targetStep: 0,
                _isHovering: !1,
                setup: function() {
                    n(3).bindAll(this, "onMouseLeave", "onMouseMove"), a.call(this, "on")
                },
                dispose: function() {
                    a.call(this, "off"), window.clearTimeout(this._delayTimeout)
                },
                onResize: function() {
                    this._mouseX = null
                },
                onMouseLeave: function() {
                    this._isHovering = !1, this.setDirty(!0)
                },
                onMouseMove: function(e) {
                    var t = n(461).normalizeEvent(e),
                        i = t.offsetX,
                        a = t.offsetY,
                        s = this._isHovering,
                        o = this._mouseX,
                        r = this.options.scale;
                    (this._isHovering = this.insideScrubbableArea(i * r, a * r)) && (this._mouseX = i), (o !== this._mouseX || s !== this._isHovering) && this.setDirty(!0)
                },
                draw: function() {
                    this._targetStep = this.model.isPlaying() && this._isHovering ? r : 0;
                    var e = s.call(this),
                        t = l(e);
                    this.isAnimating = e !== this._currentStep, this._currentStep = e, i.call(this, t)
                }
            }), n(3).memoize(function(e) {
                var t = Math.max(0, (e - o) / (r - o));
                return -Math.cos(t * Math.PI) / 2 + .5
            }))
    },
    1785: function(e, t, n) {
        "use strict";

        function i() {
            this.setDirty(!0)
        }

        function a(e) {
            var t = e && n(157).get("showTimeRemaining"),
                i = this.model.duration(),
                a = t ? i - this.model.currentTime() : i,
                s = (t ? "-" : "") + n(52).dateTimeHelper.timecode(a);
            return {
                duration: i,
                text: s,
                width: this.context.measureText(s).width
            }
        }

        function s() {
            this.setDirty(!0)
        }

        function o(e) {
            this.options.$eventEl[e]("mouseleave", this.onMouseLeave)[e]("mousemove", this.onMouseMove)
        }
        var r = 2,
            l = 12;
        e.exports = n(54).extend(n(401), n(1060), {
            _lastSecs: null,
            _isHovering: !1,
            _mouseX: null,
            setup: function() {
                n(3).bindAll(this, "onMouseMove", "onMouseLeave"), this.listenTo(this.model, "play", i), this.listenTo(n(157), "showTimeRemaining", s), o.call(this, "on"), this.setFont()
            },
            dispose: function() {
                o.call(this, "off")
            },
            onResize: function() {
                this.setFont()
            },
            setFont: function() {
                this.context.font = '10px "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Garuda, Verdana, Tahoma, sans-serif', this.setDirty(!0)
            },
            shouldBeDirty: function() {
                return !this._isHovering && this._lastSecs !== Math.floor(this.model.currentTime() / 1e3)
            },
            draw: function() {
                var e = this.canvas,
                    t = this.context,
                    i = this.options,
                    s = this.model,
                    o = this._isHovering,
                    u = this._mouseX,
                    c = i.waveformStyle,
                    d = i.upperPartHeight,
                    p = i.scale,
                    h = e.width / p,
                    f = s.currentTime(),
                    g = s.isPlaying(),
                    m = f > 0 || g,
                    v = a.call(this, m),
                    _ = v.text,
                    y = v.width,
                    b = v.duration,
                    w = o && g ? u / h * b : f,
                    x = n(52).dateTimeHelper.timecode(w),
                    k = t.measureText(x).width,
                    T = y + 2 * r,
                    A = d * (e.height / p) - 1,
                    S = A - l - r;
                t.fillStyle = n(229).getColor("durationIndicatorBg", c), t.fillRect(h - T, S, T, l + r), m && (t.fillRect(0, S, k + 2 * r, l + r), t.fillStyle = n(229).getColor("progressIndicatorColor", c), t.fillText(x, r, Math.floor(A - 2 * r) + .5)), t.fillStyle = n(229).getColor("durationIndicatorColor", c), t.fillText(_, Math.floor(h - T + r) + .5, Math.floor(A - 2 * r) + .5), this._lastSecs = Math.floor(f / 1e3)
            },
            onMouseMove: function(e) {
                var t = n(461).normalizeEvent(e),
                    i = t.offsetX,
                    a = t.offsetY,
                    s = this._isHovering,
                    o = this._mouseX,
                    r = this.options.scale;
                (this._isHovering = this.insideScrubbableArea(i * r, a * r)) && (this._mouseX = i), (o !== this._mouseX || s !== this._isHovering) && this.setDirty(!0)
            },
            onMouseLeave: function() {
                this._isHovering = !1, this.setDirty(!0)
            }
        })
    },
    1786: function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                e.preventDefault(), this.toggleState("showMore")
            }

            function a(e) {
                e.preventDefault(), this.toggleState("showColorPicker")
            }

            function s(e) {
                var n = t(e.target),
                    i = n.text();
                e.preventDefault(), this.changeColorPickerColor(i), this.getElement("colorBoxes").removeClass("active"), n.addClass("active")
            }

            function o(e) {
                this.inverseWidgetColor(e.target.value)
            }

            function r(e) {
                return "html5" === e || "html5_mini" === e
            }
            var l = n(52).t("More options"),
                u = n(52).t("Fewer options"),
                c = [{
                    color: "#FF5500",
                    active: !0
                }, {
                    color: "#0066CC"
                }, {
                    color: "#00AABB"
                }, {
                    color: "#00CC11"
                }, {
                    color: "#FF9900"
                }];
            e.exports = n(54).extend(n(1339), {
                template: n(2728),
                css: n(3104),
                className: "widgetCustomization",
                element2selector: {
                    moreToggle: ".widgetCustomization__moreToggle",
                    colorBoxes: ".widgetCustomization__colorBox"
                },
                events: {
                    "click .widgetCustomization__moreToggle": i,
                    "click .widgetCustomization__colorBox": s,
                    "click .widgetCustomization__colorPickerToggle": a,
                    "change .widgetCustomization__backgroundStyle": o
                },
                states: {
                    showMore: function(e) {
                        this.$el.toggleClass("showMore", e), this.getElement("moreToggle").text(e ? u : l).toggleClass("collapsed", !e)
                    },
                    showColors: "showColors",
                    showColorPicker: "showColorPicker"
                },
                defaults: {
                    type: "visual"
                },
                setup: function(e) {
                    this.widgetType = e.type, this.toggleState("showColors", r(e.type))
                },
                setWidgetType: function(e) {
                    this.widgetType = e, this.togglePlayer(), this.toggleOptions(), this.toggleState("showColors", r(e)), this.insertIframe()
                },
                getTemplateData: function(e) {
                    return e.colorBoxes = c, e.canSeeExtraWidgetOptions = n(55).get("me").getPerk("widgetOptions"), e.isUserWidget = this.isUser, e.isSoundWidget = "sound" === this.options.resource_type, e.isPlaylistWidget = "playlist" === this.options.resource_type, e.moreToggleText = l, e
                }
            })
        }).call(t, n(1))
    },
    1835: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".moreActions{border:1px solid #e5e5e5;box-shadow:0 2px 10px rgba(0,0,0,.1)}.moreActions__group:not(:first-child){border-top:5px solid #e5e5e5}.moreActions__button,.moreActions__link{background-color:#fff;display:block;border:none;box-shadow:none;height:32px;position:relative;padding-right:28px;padding-left:3px;text-align:left;width:100%;white-space:nowrap}.moreActions__group .moreActions__link{line-height:30px;color:#333;box-sizing:border-box;cursor:pointer}.moreActions__button.sc-button-medium,.moreActions__link.sc-button-medium{text-indent:30px}.moreActions__button.m-noIcon.sc-button-medium,.moreActions__link.m-noIcon.sc-button-medium{text-indent:10px}.moreActions__link.sc-button-medium:before,.moreActions__button.sc-button-medium:before{left:8px}.moreActions__button:hover,.moreActions__link:hover,.moreActions__button:focus{border:none;background-color:#f2f2f2;box-shadow:none;outline:none}.moreActions__button:not(:last-child),.moreActions__link{border-bottom:1px solid #e5e5e5}.moreActionsRounded{border-radius:4px;overflow:hidden}.moreActions__button.sc-button-medium.sc-button-pc:before{left:7px}.moreActions__button.sc-button-medium.sc-button-queue:before,.moreActions__button.sc-button-medium.sc-button-like:before,.moreActions__link.sc-button-medium.sc-button-edit:before,.moreActions__button.sc-button-medium.sc-button-delete:before,.moreActions__link.sc-button-medium.sc-button-download:before,.moreActions__button.sc-button-medium.sc-button-repost:before,.moreActions__button.sc-button-medium.sc-button-share:before,.moreActions__button.sc-button-medium.sc-button-startstation:before{left:6px}", ""])
    },
    1836: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playButton.m-stretch{width:100%;height:100%;border-radius:50%;text-indent:-100000em;border-color:#f50;background-color:#f50}.playButton.m-stretch:hover,.playButton.m-stretch:focus{background-color:#f30;border-color:#f30}.playButton.m-stretch:active{background-color:#f30;border-color:#f30}.playButton.m-stretch:disabled,.playButton.m-stretch.sc-button-disabled:disabled{opacity:.4}.playButton.m-stretch:before{content:'';position:absolute;z-index:1;left:0;top:0;right:0;bottom:0;background-image:url(" + n(2214) + ");background-size:40% 60%;background-position:60% center;background-repeat:no-repeat;transition:opacity .3s;opacity:1}.playButton.m-stretch.sc-button-pause:before{background-image:url(" + n(2213) + ");background-size:42% 56%;background-position:50% 51%}.playButton.m-stretch:after{position:absolute;z-index:0;background:rgba(0,0,0,0);width:100%;height:100%;content:'';left:0;top:0}.playButton.m-stretch:active:after{background:rgba(0,0,0,.04);border-radius:50%}.playButton.m-stretch.sc-button-buffering:before,.playButton.m-stretch.sc-button-pause.sc-button-buffering:before{opacity:0}.playButton.m-stretch.sc-button-buffering:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;opacity:1;background-repeat:no-repeat;background-image:url(" + n(2211) + ");background-position:center center;background-size:85% 85%}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.playButton.m-stretch.sc-button-buffering:after{background-image:url(" + n(2212) + ")}}", ""])
    },
    1837: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playlock-dim{opacity:.5!important}.playlock-freeze{pointer-events:none}", ""])
    },
    1838: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".readMoreTile{position:relative}.readMoreTile__tile{position:relative;z-index:0}.readMoreTile__countWrapper{position:absolute;left:0;top:0;right:0;bottom:0;width:100%;height:100%;background-color:#fff;opacity:.9;margin:auto;z-index:1}.readMoreTile__count{position:absolute;display:block;left:0;top:89px;width:100%;line-height:0;text-align:center;font-size:20px}@media (max-width:1239px){.readMoreTile__count{top:77px}}@media (max-width:1079px){.readMoreTile__count{top:68px}}", ""])
    },
    1839: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".slide-down-outer,.slide-up-outer{overflow:hidden;transition:height .3s cubic-bezier(.175,.885,.32,1.275),margin .3s ease}.slide-up-outer{transition-timing-function:cubic-bezier(.28,.42,.18,1),ease}.slide-down-inner,.slide-up-inner.finished{opacity:0}.slide-up-inner,.slide-down-inner.finished{opacity:1}", ""])
    },
    1840: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".widgetEmbed__textInput{color:#666;padding:3px 5px 4px;display:block;box-shadow:inset 0 0 4px rgba(0,0,0,.15);width:380px;float:left;margin:0 6px 0 0}.widgetEmbed__wordpressCheckbox{margin:6px 0 0}.widgetEmbed__players{margin-top:20px;position:relative}.widgetEmbed__players.widgetLoading:after{content:'';position:absolute;top:0;left:0;bottom:0;right:0;background:url(" + n(249) + ') no-repeat center center}.widgetEmbed__option{margin-bottom:7px}.widgetEmbed__players.visual{min-height:454px}.widgetEmbed__players.html5{min-height:454px}.widgetEmbed__players.html5_mini{min-height:44px}.widgetEmbed.type-sound .widgetEmbed__players.html5{min-height:170px}.widgetEmbed__player{position:relative;z-index:1}.widgetEmbed__player:focus{outline:0}.widgetEmbed__player[data-sc-player-type="html5_mini"].miniLoaded{height:20px;padding:10px}.widgetEmbed .sp-container{background-color:transparent;border:0;overflow:visible;height:72px}.widgetEmbed .sp-color,.widgetEmbed .sp-hue{border:solid 1px #ccc}.widgetEmbed .sp-picker-container,.widgetEmbed .sp-palette-container{padding:0;height:72px;width:90px}.widgetEmbed .sp-hue{width:24px}.widgetEmbed .sp-input-container{width:72px!important;float:left}.widgetEmbed .sp-input{width:72px!important;border-radius:0;border:1px solid #ccc;outline:0;color:#000}', ""])
    },
    1872: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".modal{position:fixed;top:0;left:0;width:100%;height:100%;opacity:0;overflow-y:auto;box-sizing:border-box}.modal.modalWhiteout{background-color:rgba(242,242,242,.9)}.modal.modalPureWhite{background-color:rgba(255,255,255,.95)}.modal.modalDarken{background-color:rgba(0,0,0,.5)}.modal.showBackground{opacity:1}.modal__header{position:absolute;top:76px}.modal__modal,.modal__header{transition:-webkit-transform .3s cubic-bezier(.13,1.07,.5,1.01),visibility 0s;transition:transform .3s cubic-bezier(.13,1.07,.5,1.01),visibility 0s;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:visible}.modal.invisible .modal__modal,.modal.invisible .modal__header{transition:-webkit-transform .3s cubic-bezier(.98,-.15,.9,.6),visibility 0s .3s;transition:transform .3s cubic-bezier(.98,-.15,.9,.6),visibility 0s .3s;-webkit-transform:translateY(-1000px);transform:translateY(-1000px);visibility:hidden}.modal__header.hovering{top:0!important;position:fixed}.modal__modal{margin:76px 0 30px;position:absolute;top:0;padding:25px;background:#fff}.modal__modal.transparentBackground{background:0 0;padding:0}.modal__modal.noEntryTransition{transition:none}.modal.fullHeight .modal__modal{margin-top:30px}.modal.fullHeight .modal__header{top:30px}.modal__content{position:relative;height:100%}.modal__closeButton{position:absolute;top:14px;right:20px;width:20px;height:20px;text-indent:20px;border:0;overflow:hidden}.modal.modalWhiteout>.modal__closeButton{background:url(" + n(417) + ") center no-repeat}.modal.modalDarken>.modal__closeButton{background:url(" + n(2219) + ") center no-repeat}.modal__closeButton:focus{outline:1px dotted #ccc}.modal__closeButton:active{margin-top:1px}", ""])
    },
    1873: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".notifications{overflow:hidden}.notifications .loading{padding:50px 0}.notifications__viewAll{border-top:1px solid rgba(255,255,255,.1);display:block;padding:10px 0 12px;text-align:center}.notifications.g-dark .notifications__viewAll:hover{background-color:#333;color:#FFF}.notifications__empty{border-bottom:1px solid #262626;display:block;padding:20px 10px;text-align:center}", ""])
    },
    1874: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".sidebarModule{margin-bottom:20px}.sidebarModule:last-child{border-bottom:0;padding-bottom:0}.sidebarHeader{height:30px}.sidebarHeader__icon{width:21px;margin-right:4px}.sidebarHeader__title{line-height:24px}.sidebarHeader__more{font-weight:100;margin-top:0}.sidebarContent{padding-top:5px}.sidebarModule.collapsed .sidebarContent{display:none}.sidebarModule.empty{display:none}", ""])
    },
    1875: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".tabs__tabs,.tabs__headingContainer{background:#fff;padding:16px 25px 0}.tabs__heading{line-height:1.6;border-bottom:1px solid #e5e5e5}.tabs__headingLarge{font-size:24px}.tabs__contentSlot{display:none}", ""])
    },
    1876: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.tooltip{padding:3px 7px;opacity:0;font-size:12px;line-height:15px;white-space:nowrap;border-radius:4px;background:rgba(0,0,0,.8);color:#fff}.tooltip.m-is-visible{opacity:1}.tooltip__arrow{display:block;position:absolute;content:"";width:0;height:0;top:-7px;left:50%;margin-left:-5px;border-style:solid;border-color:transparent;border-width:0 5px 7px 5px;border-bottom-color:rgba(0,0,0,.8)}', ""])
    },
    1982: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".attachedSounds__list{max-height:166px;overflow:auto}.attachedSounds__item{padding:0 5px}", ""])
    },
    1983: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".composeTextfield{margin-bottom:0}.composeTextfield.invalid{border-bottom:1px solid #ccc}.composeTextfield .textfield__input{border-bottom-left-radius:0;border-bottom-right-radius:0;height:108px;line-height:1.45;color:#666;padding:9px 12px 15px}", ""])
    },
    1984: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".composeMessage{position:relative}.composeMessage__bottomWrapper{border:1px solid #ccc;border-top:0;border-radius:0 0 4px 4px}.composeMessage__attachedSounds{margin:0 1px}.composeMessage__toolbar{padding:11px 10px 10px}.composeMessage__sendButton{float:right}.composeMessage__searchViewWrapper{position:absolute;top:22px;left:0;right:0}.composeMessage__searchViewWrapper::after{content:'';position:absolute;top:0;bottom:0;left:1px;right:1px;background:rgba(255,255,255,.8);border-radius:3px}.composeMessage.m-searching .composeMessage__searchViewWrapper{bottom:1px}.composeMessage.m-userHasNoSounds .composeMessage__addSoundButton{display:none}", ""])
    },
    1990: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".newMessageForm__recipient{margin-bottom:19px}.newMessageForm .tokenInput{position:relative}", ""])
    },
    1993: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".recipientChooser{margin:3px 0}.recipientChooser .tokenInput__wrapper{background-color:#fff;padding:4px}.recipientChooser__token{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border:none;padding:0 3px 0 0;margin-left:1px;margin-top:1px}.recipientChooser .tokenInput__input{padding:4px 3px 0 8px;width:100%}.recipientChooser .tokenInput__inputContainer{display:block}.recipientChooser__name{margin-left:4px}.recipientChooser.invalid .tokenInput__wrapper{border-color:#f50}.recipientChooser .tokenInput__tokenRemove{width:10px;height:10px;background-image:url(" + n(2278) + ");margin-left:4px}", ""])
    },
    1994: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".unreadConversations .loading{padding:50px 0}.unreadConversations{background:#111}", ""])
    },
    1996: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".ageGateContent__followeeUsername{font-weight:700}.ageGateContent__ageVerifyControls{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px}.ageGateContent__ageVerifySelect.select{margin:0;-webkit-flex-basis:48%;-ms-flex-preferred-size:48%;flex-basis:48%}.ageGateContent__verifyAgeButton{float:right}", ""])
    },
    2e3: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".imageSelect__hint{color:#666;margin-bottom:8px}", ""])
    },
    2001: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".keyboardShortcuts__inner{margin-top:40px}.keyboardShortcuts__shortcutsGroup{margin-bottom:20px}.keyboardShortcuts__shortcutsGroup:last-child{margin-bottom:0}.keyboardShortcuts__shortcutsGroup>dl{float:left;margin:0 0 5px 0;width:50%;height:22px;line-height:22px;font-size:11px}.keyboardShortcuts__shortcutsGroup>dl>dt,.keyboardShortcuts__shortcutsGroup>dl>dd{float:left;margin:0;height:22px;line-height:22px}.keyboardShortcuts__shortcutsGroup>dl>dt{width:54px;margin:0 10px 0 0}.keyboardShortcuts__shortcutsGroup>dl>dt>kbd>kbd{float:right;background:#f2f2f2;height:22px;line-height:22px;min-width:24px;text-align:center;border-radius:3px;font-weight:700;margin:0 0 0 3px}.keyboardShortcuts__shortcutsGroup>dl.kbd-big>dt>kbd>kbd{width:51px}", ""])
    },
    2002: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".premiumModalContent{height:100%;position:relative;margin:0 -30px}.premiumModalContent.touch{overflow:scroll;-webkit-overflow-scrolling:touch}.premiumModalContent.processing,.premiumModalContent.external,.premiumModalContent.fail{margin:0}.premiumModalContent.waiting{background:url(" + n(249) + ") no-repeat center 45%}.premiumModalContent__iframe{height:100%}.premiumModalContent__failed{padding:50px 0;text-align:center;display:none}.premiumModalContent.fail .premiumModalContent__failed{background:url(" + n(2327) + ") no-repeat center 50px;padding-top:330px}.premiumModalContent__failedMessage{color:#333;font-weight:100}.premiumModalContent__processing,.premiumModalContent__external{display:none;position:absolute;top:50%;width:100%;margin-top:-12px;text-align:center}.premiumModalContent__processing-headline,.premiumModalContent__external-headline{color:#333;font-weight:100}.premiumModalContent.fail .premiumModalContent__failed,.premiumModalContent.cancel .premiumModalContent__failed,.premiumModalContent.processing .premiumModalContent__processing,.premiumModalContent.external .premiumModalContent__external{display:block}", ""])
    },
    2007: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".whyAds__actions{margin-top:24px;text-align:right}", ""])
    },
    2012: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, "#gritter-notice-wrapper{position:fixed;top:60px;right:30px;width:301px;z-index:9999}#gritter-notice-wrapper.top-left{left:20px;right:auto}#gritter-notice-wrapper.bottom-right{top:auto;left:auto;bottom:20px;right:20px}#gritter-notice-wrapper.bottom-left{top:auto;right:auto;bottom:20px;left:20px}.gritter-item-wrapper{box-sizing:border-box;position:relative;margin:0 0 10px 0;width:300px;color:#333;background-color:#fff;min-height:44px;border-radius:4px;box-shadow:0 0 4px rgba(0,0,0,.2),inset 0 0 2px rgba(255,255,255,1);border:1px solid #ccc}.gritter-item{padding:5px 30px 5px 50px;overflow:hidden;cursor:pointer}.gritter-item p{margin:0}.oneLine .gritter-title,.oneLine .gritter-item p{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-height:23px}.gritter-title{font-weight:700}.gritter-top,.gritter-image{position:absolute;top:-1px;left:-1px;border-bottom-left-radius:4px;border-top-left-radius:4px}.gritter-image{width:44px;height:44px;box-shadow:inset 0 0 1px rgba(0,0,0,.4),inset 0 2px 0 rgba(255,255,255,.1)}.gritter-close{display:none;position:absolute;top:0;right:7px;width:15px;height:100%;background:url(" + n(286) + ") center center no-repeat;cursor:pointer}.error .gritter-top,.gritter-item-wrapper.big-success .gritter-top{width:40px;height:100%;background-position:center center,left top;box-shadow:inset 0 1px 0 rgba(255,255,255,.1);border:1px solid #cc3914}.gritter-item-wrapper.error{min-height:36px}.error .gritter-item{cursor:default}.no-title .gritter-item p,.error .gritter-item p{max-height:none}.error .gritter-top{background:#ff4d00 url(" + n(1123) + ") center center no-repeat;background-image:url(" + n(1123) + "),linear-gradient(#f60,#ff4d00 40%,#f30)}.gritter-item-wrapper.big-success .gritter-top{background:#ff4d00 url(" + n(1124) + ") center center no-repeat;background-image:url(" + n(1124) + "),linear-gradient(#f60,#ff4d00 40%,#f30);background-size:26px 26px,auto}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.gritter-item-wrapper.big-success .gritter-top{background:#ff4d00 url(" + n(1125) + ") center center no-repeat;background-image:url(" + n(1125) + "),linear-gradient(#f60,#ff4d00 40%,#f30);background-size:26px 26px,auto}}@media (max-width:1079px){#gritter-notice-wrapper{right:20px}}", ""])
    },
    2013: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".newItemBadge{display:block;width:100%;height:100%;border-radius:50%}.newItemBadge.newItems__some{background:#F50;border:1px solid #333}", ""])
    },
    2034: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".castControl{width:36px}.castControl__playControls{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin-top:3px;margin-right:10px}.castControl>button{--connected-color:#f50;--disconnected-color:#cecece;border:none;background:0 0;outline:none;line-height:0;padding:2px 6px 3px;cursor:pointer}", ""])
    },
    2035: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playControlsPanel{float:right;width:360px;box-sizing:border-box;font-size:11px;background:#333;-webkit-transform:translateY(-100%);transform:translateY(-100%);display:none;z-index:-5;opacity:0;transition:opacity 200ms}.playControlsPanel.is-visible{padding:0 30px 0 30px;z-index:350}.playControlsPanel.is-active{opacity:1;display:block}.playControlsPanel:after{content:'';position:absolute;top:100%;left:17px;width:0;height:0;border:6px solid #333;border-right-color:transparent;border-left-color:transparent;border-bottom-color:transparent}.playControlsPanel__inner{border-top:1px solid #000}.playControlsPanel__adHeader{height:40px;line-height:40px}.playControlsPanel__adDisplay{position:relative;float:right}.playControlsPanel__landingPage{display:block}.playControlsPanel__whyAds{color:#999;cursor:pointer;float:right}.playControlsPanel__whyAds:hover,.playControlsPanel__whyAds:active{color:#fff}.playControlsPanel__adVisual{opacity:0}.playControlsPanel__adVisual.loaded{opacity:1}.playControlsPanel__skip{line-height:40px;height:40px}.playControlsPanel__skipButton{cursor:pointer;color:#fff}.playControlsPanel__skipButton.m-disabled{cursor:default}.playControlsPanel.m-companionless .playControlsPanel__inner{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.playControlsPanel.m-companionless .playControlsPanel__info{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-order:1;-ms-flex-order:1;order:1}.playControlsPanel.m-companionless .playControlsPanel__skip{-webkit-order:2;-ms-flex-order:2;order:2}.playControlsPanel.m-companionless .playControlsPanel__whyAds{-webkit-order:3;-ms-flex-order:3;order:3}.playControlsPanel.m-companionless .playControlsPanel__whyAds::before{content:'-';padding:5px}@media (max-width:1079px){.playControlsPanel.is-visible{width:340px;padding:0 20px 0 20px}}", ""])
    },
    2036: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playControls{position:fixed;bottom:0;visibility:hidden;width:100%;-webkit-perspective:900;perspective:900;-webkit-perspective-origin:80% 100%;perspective-origin:80% 100%}.playControls__bg{background-color:#f2f2f2;position:absolute;top:0;left:0;bottom:0;right:0}.playControls__inner{background-color:#f2f2f2;border-top:1px solid rgba(0,0,0,.15);height:46px;visibility:visible;transition:-webkit-transform 200ms ease-out;transition:transform 200ms ease-out;-webkit-transform:translateY(100%);transform:translateY(100%)}.playControls.m-visible .playControls__inner{-webkit-transform:translateY(0);transform:translateY(0)}.playControls__wrapper{padding-bottom:10px;visibility:visible;position:relative}.playControls__elements{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.playControls__icon:focus{outline:0}.playControls__icon.disabled{opacity:.3;cursor:default}.playControls__next{margin:0 40px 0 0}.playControls__timeline{margin-right:30px;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.playControls__soundBadge{box-sizing:border-box;width:360px;height:46px;padding:0 8px;z-index:1}.playControls__panel{position:absolute;right:0;top:0;z-index:0}.playControls__repeat{margin-right:20px}.playControls__volume{margin-right:30px}.playControls.m-volumeInactive .playControls__volume{pointer-events:none}.playControls__queue{position:absolute;bottom:46px;right:0;width:360px;transition:-webkit-transform .5s;transition:transform .5s;-webkit-transform:translateY(100%);transform:translateY(100%)}.playControls.m-queueVisible.m-visible .playControls__queue{-webkit-transform:translateY(0);transform:translateY(0)}@media (max-width:1079px){.playControls__volume{margin-right:20px}.playControls__soundBadge{width:340px}}", ""])
    },
    2037: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playControl{background:url(" + n(2308) + ") no-repeat 55% center;width:46px;height:46px;margin:0 6px}.playControl.playing{background-image:url(" + n(2307) + ");background-position:center center}", ""])
    },
    2038: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".repeatControl{margin:0;padding:0;position:relative}.repeatControl:focus{outline:0}.repeatControl,.repeatControl:before,.repeatControl:after{width:24px;height:46px;background-repeat:no-repeat;background-position:left center;cursor:pointer}.repeatControl.m-old .repeatControl.m-old:before,.repeatControl.m-old:after{width:19px}.repeatControl:before,.repeatControl:after{content:'';position:absolute;top:0;left:0;opacity:0}.repeatControl.m-one:after,.repeatControl.m-all:before{opacity:1}.repeatControl.m-old.m-one:before{opacity:0}.repeatControl.m-old:after{background-image:url(" + n(2312) + ")}.repeatControl.m-old:before{background-image:url(" + n(2313) + ");opacity:.75}.repeatControl.m-old:hover:before{opacity:1}.repeatControl.m-old:before,.repeatControl.m-old:after{transition:opacity 200ms}.repeatControl.m-new:after{background-image:url(" + n(2311) + ")}.repeatControl.m-new:before{background-image:url(" + n(2310) + ")}.repeatControl.m-new.m-none{background-image:url(" + n(2314) + ")}", ""])
    },
    2039: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".skipControl{width:33px;height:46px;background-repeat:no-repeat}.skipControl__previous{background-image:url(" + n(2309) + ");background-position:40% center}.skipControl__next{background-image:url(" + n(2317) + ");background-position:60% center}", ""])
    },
    2040: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playbackSoundBadge{height:100%}.playbackSoundBadge__avatar{margin:8px 10px 0 0;float:left}.playbackSoundBadge__avatar:focus{outline:0}.playbackSoundBadge__titleContextContainer{float:left;width:250px;margin-right:20px;line-height:1.5em;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.playbackSoundBadge__context,.playbackSoundBadge__title{display:block;width:100%}.playbackSoundBadge__context{font-size:11px;line-height:16px}a.playbackSoundBadge__context:hover,a.playbackSoundBadge__context:focus{color:#000;outline:0}.playbackSoundBadge__title,.playbackSoundBadge__title:visited{font-size:11px;color:#666}.playbackSoundBadge__title:hover,.playbackSoundBadge__title:focus{color:#000;outline:0}.playbackSoundBadge__actions{float:left;margin-left:7px;position:relative;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);margin-top:1px}.playbackSoundBadge__like{padding:12px}.playbackSoundBadge__like.sc-button-small.sc-button-icon:before{left:2px}@media (max-width:1079px){.playbackSoundBadge__titleContextContainer{width:230px}}", ""])
    },
    2041: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playbackTimeline{display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:11px;visibility:hidden}.playbackTimeline.has-sound{visibility:visible}.playbackTimeline__timePassed,.playbackTimeline__progressWrapper,.playbackTimeline__duration,.playbackTimeline__snippetIndicator{line-height:46px}.playbackTimeline__timePassed{color:#f50;text-align:right}.playbackTimeline__duration{color:#333;text-align:left;cursor:pointer}.playbackTimeline__snippetIndicator,.playbackTimeline__timePassed,.playbackTimeline__duration{width:50px;height:46px}.playbackTimeline__progressWrapper{position:relative;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:10px 0;margin:13px 10px 0 10px}.playbackTimeline.is-scrubbable .playbackTimeline__progressWrapper:hover{cursor:pointer}.playbackTimeline__progressBackground,.playbackTimeline__progressBar,.playbackTimeline__progressHandle{position:absolute}.playbackTimeline__progressBackground{width:100%;height:1px;background-color:#ccc}.playbackTimeline__progressBar{width:0;height:1px;background-color:#f50;transition:width 50ms}.playbackTimeline.is-dragging .playbackTimeline__progressBar{transition:none}.playbackTimeline__progressHandle{border:1px solid #f50;border-radius:100%;height:8px;width:8px;background-color:#f50;box-sizing:border-box;margin-top:-3px;opacity:0;transition:opacity 150ms}.playbackTimeline.is-dragging .playbackTimeline__progressHandle,.playbackTimeline.is-scrubbable .playbackTimeline__progressWrapper:hover .playbackTimeline__progressHandle{opacity:1}.playbackTimeline.m-is-snippet .playbackTimeline__duration,.playbackTimeline__snippetIndicator{display:none}.playbackTimeline.m-is-snippet .playbackTimeline__snippetIndicator{display:block}", ""])
    },
    2042: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".volume{position:relative}.volume__iconWrapper{position:relative}.volume__button{display:block;border:0;background:url(" + n(1128) + ") no-repeat left center;outline:0;width:20px;height:46px}.volume__button:before,.volume__button:after{content:'';width:0;height:0;position:absolute;background-image:url(" + n(1127) + ")}.volume__button:after{background-image:url(" + n(1126) + ")}.volume[data-level='1'] .volume__button,.volume[data-level='2'] .volume__button,.volume[data-level='3'] .volume__button,.volume[data-level='4'] .volume__button,.volume[data-level='5'] .volume__button,.volume[data-level='6'] .volume__button,.volume[data-level='7'] .volume__button,.volume[data-level='8'] .volume__button,.volume[data-level='9'] .volume__button{background-image:url(" + n(1127) + ")}.volume[data-level='10'] .volume__button{background-image:url(" + n(1126) + ")}.volume.muted .volume__button{background-image:url(" + n(1128) + ')}.volume__sliderWrapper{position:absolute;left:-9px;bottom:40px;z-index:1;width:30px;height:0;transition:height 100ms;-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden;background-color:#f2f2f2;border:1px solid transparent;outline:0;cursor:pointer}.volume.expanded .volume__sliderWrapper{height:118px;border-color:#ccc;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:initial}.volume__sliderWrapper:before,.volume__sliderWrapper:after{content:"";position:absolute;width:0;height:0;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);pointer-events:none}.volume__sliderWrapper:before{z-index:0;bottom:-10px;border:5px solid #000;left:8px;border-color:transparent transparent #ccc #ccc;box-shadow:-3px 3px 4px rgba(0,0,0,.1)}.volume__sliderWrapper:after{bottom:-8px;left:9px;z-index:1;border:4px solid #000;border-color:transparent transparent #f2f2f2 #f2f2f2}.volume__sliderBackground{position:absolute;display:block;background-color:#ccc;bottom:13px;left:0;height:92px;width:2px;border:none;box-shadow:none;border-radius:0;outline:0;margin-left:14px}.volume__sliderHandle{position:absolute;display:block;width:8px;height:8px;border-radius:100%;background-color:#f50;margin-left:11px;top:0}.volume__sliderProgress{background:#f50;bottom:13px;position:absolute;width:2px;margin-left:14px}.volume__sliderProgress,.volume__sliderBackground,.volume__sliderHandle{opacity:0;transition:opacity 100ms linear;transition-delay:100ms}.volume.expanded .volume__sliderProgress,.volume.expanded .volume__sliderBackground,.volume.expanded .volume__sliderHandle{opacity:1}', ""])
    },
    2043: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".historicalPlayContexts__item{padding:5px 0}", ""])
    },
    2044: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".historicalPlays.m-player .historicalPlays__item{margin-bottom:36px}.historicalPlays.m-soundBadge .historicalPlays__item{padding:5px 0}", ""])
    },
    2045: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".queueFallback{padding:20px 0;text-align:center}", ""])
    },
    2046: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".queueItemView{display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;padding:8px 5px 0 7px;font-size:12px;transition:margin-right .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:-88px;background:#f2f2f2}.queueItemView:not(.m-active).m-overlayOpen,.queueItemView:not(.m-active):hover{margin-right:0}.queueItemView.m-active{margin-right:-32px}.queueItemView__details{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;margin-top:-1px;cursor:pointer}.queueItemView__action{margin-top:3px}.queueItemView__artwork{margin-right:7px}.queueItemView__user{color:#999}.queueItemView__title{color:#333}.queueItemView.m-playing .queueItemView__title{color:#f50}.queueItemView.m-explicit{font-weight:400}.queueItemView.m-active{background:#e5e5e5}.queueItemView__details,.queueItemView__artwork{transition:opacity .3s}.queueItemView.m-dimmed .queueItemView__details,.queueItemView.m-dimmed .queueItemView__artwork{opacity:.3}.queueItemView__altButtons{position:relative}.queueItemView__like{position:absolute;top:0;left:0}.queueItemView__like,.queueItemView__remove{transition:visibility 0s .3s}.queueItemView.m-active .queueItemView__like,.queueItemView.m-active .queueItemView__remove,.queueItemView:hover .queueItemView__like,.queueItemView:hover .queueItemView__remove{transition-delay:0s}.queueItemView.m-active .queueItemView__remove,.queueItemView__like{visibility:hidden}.queueItemView__remove,.queueItemView.m-active .queueItemView__like{visibility:visible}.queueItemView__dragHandle{border:0;background-image:url(" + n(1110) + ");background-repeat:no-repeat;background-position:center center;background-size:18px 10px;width:18px;height:22px;margin-right:7px;margin-left:7px;cursor:move;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.queueItemView__dragHandle{background-image:url(" + n(2240) + ")}}", ""])
    },
    2047: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".queue{position:relative;border:1px solid rgba(0,0,0,.15);border-bottom:0;background-color:#f2f2f2}.queue.m-scrolling:not(.m-dragging) .queue__itemsHeight{background-image:url(" + n(2306) + ");background-repeat:repeat-y}.queue__itemsContainer{position:relative}.queue__panel{display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.queue__title{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;line-height:46px;padding:0 10px}.queue__hide:hover,.queue__hide{height:46px;margin:0 10px;background-image:url(" + n(417) + ");background-position:center;background-repeat:no-repeat;background-size:16px 16px}.queue__clear{height:46px}.queue__shuffle{position:relative;border:0;padding:0;width:24px;height:46px;margin:0 10px;outline:none;background:0 0}.queue__shuffle::after,.queue__shuffle::before{content:'';position:absolute;top:0;left:0;display:block;width:24px;height:100%;background-repeat:no-repeat;background-position:left center;transition:opacity .2s}.queue__shuffle::after{background-image:url(" + n(2315) + ");opacity:0}.queue__shuffle::before{background-image:url(" + n(2316) + ")}.queue.m-shuffle .queue__shuffle::after{opacity:1}.queue.m-shuffle .queue__shuffle::before{opacity:0}.queue__scrollable,.queue__dragCover{top:45px;left:0;width:100%;bottom:0;position:absolute}.queue__dragCover{display:none;z-index:1}.queue__dragCover.m-active{display:block}.queue__itemWrapper{background-color:#f2f2f2;position:absolute;top:0;left:0;right:0;height:45px}.queue.m-visible .queue__itemWrapper{transition-property:-webkit-transform,opacity,visibility;transition-property:transform,opacity,visibility;transition-duration:.3s}", ""])
    },
    2048: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".compactTrackList{font-size:12px;border-radius:0 0 4px 4px;overflow:hidden}.compactTrackList__listWrapper{display:block}.compactTrackList__listContainer{max-height:155px;overflow-y:hidden;transition:max-height .3s}.compactTrackList.expanded .compactTrackList__listContainer{max-height:310px}.compactTrackList__list{position:relative}.compactTrackList__moreLink{border:none;display:block;text-align:center;padding:5px 10px;position:relative}.compactTrackList__moreLink:hover,.compactTrackList__moreLink:focus{background-color:#f2f2f2}", ""])
    },
    2050: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".createPlaylistSounds{border-bottom:0}.createPlaylistSounds__placeholder{height:28px}", ""])
    },
    2051: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".createPlaylist__title{margin:0}.createPlaylist__title .textfield__label{line-height:16px;font-size:12px}.createPlaylist__buttonWrapper{line-height:26px;margin:15px 0 30px}.createPlaylist__sharing{display:inline-block}.createPlaylist__saveButton{float:right}.createPlaylist.hideSuggestions .createPlaylist__suggestionsSection{display:none}.createPlaylist__suggestionsHeading{margin-bottom:12px}.createPlaylist__savedContainer{position:relative;margin:10px 0 35px;padding-right:120px}.createPlaylist__goToPlaylist{position:absolute;top:17px;right:0}", ""])
    },
    2052: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".releaseDataCompact{font-size:12px}", ""])
    },
    2053: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".createPlaylistSuggestion{position:relative}.createPlaylistSuggestion__addContainer{position:absolute;right:0;top:0;width:155px;height:100%;background:linear-gradient(to right,rgba(255,255,255,.1),#fff 20px);text-align:right}.createPlaylistSuggestion__add{margin-top:17px;min-width:120px}", ""])
    },
    2054: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".createPlaylistSuggestions__item{padding:5px 0}", ""])
    },
    2092: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".embedPanel__tab{float:left;margin-right:12px}.embedPanel__tabLink{display:block;width:100px;height:100px;padding:10px;border-bottom:1px solid transparent;position:relative;background-color:#e5e5e5;opacity:.4;-webkit-filter:grayscale(1);filter:grayscale(1);transition:opacity .2s}.embedPanel__tabLink.active{border-color:#f50;opacity:1;-webkit-filter:none;filter:none}.embedPanel__tabLink:after{content:'';background-repeat:no-repeat;position:absolute;top:0;left:0;right:0;bottom:0}.embedPanel__tabLink.visual:after{background-image:url(" + n(2372) + ")}.embedPanel__tabLink.classic:after{background-image:url(" + n(2370) + ")}.embedPanel__tabLink.mini:after{background-image:url(" + n(2371) + ")}", ""])
    },
    2093: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".shareLink__field{width:100%;margin-right:7px}.shareLink.m-showPositionOption .shareLink__field{width:75.5%}.shareLink__fromField{width:15%;float:right}.shareLink.m-fromDisabled .shareLink__field{width:100%}.shareLink.m-fromDisabled .shareLink__from,.shareLink.m-fromDisabled .shareLink__fromField{display:none}", ""])
    },
    2094: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".privateShare__link{margin-bottom:16px}.privateShare__hint{margin-bottom:15px}.privateShare__confirmHint,.privateShare__confirmButtons,.privateShare__successful,.privateShare__failed,.privateShare.confirmation .privateShare__reset,.privateShare.confirmation .privateShare__hintHint,.privateShare.successful .privateShare__hintHint,.privateShare.successful .privateShare__buttons{display:none}.privateShare.confirmation .privateShare__confirmButtons,.privateShare.confirmation .privateShare__confirmHint,.privateShare.successful .privateShare__successful,.privateShare.failed .privateShare__failed{display:block}", ""])
    },
    2095: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".socialButtonsPanel__shareButton{float:left;margin:0 7px 0 0}.socialButtonsPanel__shareButton:last-child{margin-right:0}", ""])
    },
    2096: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".shareContent__link{padding-top:15px}.shareContent .emailButton{position:relative;line-height:30px}", ""])
    },
    2097: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".mobileAppsButtons.m-sidebar{padding:10px 0 15px}.mobileAppsButtons__button{float:left;margin-right:8px}", ""])
    },
    2098: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".mobileApps{margin-bottom:0}.mobileApps .sidebarHeader__title{padding-right:25px}.mobileApps__dismiss{display:none;margin-right:5px;width:15px;height:15px;background:url(" + n(286) + ") center center no-repeat;cursor:pointer}.mobileApps:hover .mobileApps__dismiss{display:block}", ""])
    },
    2099: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".whoToFollowModule .sidebarHeader__more{background:url(" + n(2363) + ") no-repeat 0 center;padding-left:15px;background-size:13px 13px;opacity:.8}.whoToFollowModule .sc-link-light:hover .sidebarHeader__more{opacity:1}", ""])
    },
    2101: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundList__item .soundActions__mine,.searchList__item .soundActions__mine{display:none}.sound.listenContext .soundActions__mine .sc-button,.listenEngagement__actions .soundActions__mine .sc-button,.soundList__item:hover .soundActions__mine .sc-button,.soundList__item:hover .soundActions__mine,.searchList__item:hover .soundActions__mine .sc-button,.searchList__item:hover .soundActions__mine,.soundBadge.hover .soundActions__mine .sc-button,.soundBadge.hover .soundActions__mine,.soundActions__mine .sc-button-active,.soundActions.m-my-controls-active>.soundActions__mine,.listenEngagement__actions .soundActions__mine .sc-button{display:block}.soundActions{margin-bottom:0}.soundActions .playButton{margin-right:5px}.editing .soundActions__mine .sc-button,.editing .soundList__item .soundActions__mine{display:none!important}@media (max-width:850px){.l-fullwidth .soundActions__purchaseLink{max-width:150px}}@media (max-width:1200px){.l-fluid-fixed .soundActions__purchaseLink,.l-fixed-fluid .soundActions__purchaseLink{max-width:100px}}@media (max-width:1394px){.l-three-column .soundActions__purchaseLink{max-width:100px}}", ""])
    },
    2102: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".actorUser__username::before,.actorUser__username.sc-ministats::before{height:15px;background-position-y:0}.actorUser__username{color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;display:inline-table}", ""])
    },
    2103: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".addToPlaylistItem__title{margin-bottom:3px}.addToPlaylistItem__image{margin-right:10px}.addToPlaylistItem__content{-webkit-flex:1;-ms-flex:1;flex:1;margin-right:8px;overflow:hidden}.addToPlaylistItem__private{margin-right:10px}.addToPlaylistItem__hint{margin-left:5px}", ""])
    },
    2104: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".addToPlaylistList__item{padding:10px 0;margin-right:30px;width:100%}.addToPlaylistList__item:first-child{border-top:0;padding-top:0}.addToPlaylistList__item:last-child{padding-bottom:0}", ""])
    },
    2105: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".deleteAudible__buttons{float:right}", ""])
    },
    2107: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundList__item{clear:both;margin-bottom:36px;position:relative}.soundList__item:first-child{padding-top:0}", ""])
    },
    2108: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".playlistLength{height:16px;line-height:16px;padding:0 5px;border-radius:7px;background:rgba(0,0,0,.6);text-shadow:0 0 2px rgba(0,0,0,.4)}", ""])
    },
    2109: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".progressBar{height:100%;background:#666;transition:background .2s}.progressBar__bar{background:#f50;height:100%;width:0}", ""])
    },
    2110: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".repostAudibleForm__actions{text-align:right;margin-top:5px}", ""])
    },
    2111: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".shareRepostedAudible{margin:10px}.shareRepostedAudible__buttons{padding:10px 10px 10px 0}.shareRepostedAudible__closeDialogButton{float:right}", ""])
    },
    2112: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundBadgeList.compact .loading{padding:85px 0}.soundBadgeList.compact .soundBadgeList__item{padding:5px 0}", ""])
    },
    2113: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundBadge{position:relative;min-height:60px;padding:5px 10px;border-radius:4px}.soundBadge__additional{background:rgba(255,255,255);background:linear-gradient(to right,rgba(255,255,255,.1),#fff 17px);position:absolute;top:25px;right:0;padding:0 10px 0 20px}.soundBadge__actions{float:left;display:none}.soundBadge__extra{float:left;margin:2px 0 0 15px}.soundBadge__extraItem{float:left;margin-left:20px;text-align:right}.soundBadge__extraItem:first-child{margin-left:0}.soundBadge__duration,.soundBadge__uploadTime{padding:1px 0}.soundBadge__duration{min-width:45px}.soundBadge__private{min-width:65px}.soundBadge__uploadTime{min-width:65px}.soundBadge__audibleAttributes{min-width:168px;min-height:1px}.soundBadge__content{margin-top:4px}.soundBadge__content.soundBadge__contentWithoutStats{margin-top:7px}.soundBadge .soundTitle__title{height:1.3em;float:left}.soundBadge .soundTitle__username{line-height:1;margin:0 0 2px}.soundBadge .soundTitle__username small{font-size:12px;font-family:\"Lucida Grande\",Arial,sans-serif}.soundBadge__audibleInfoStats{padding-top:2px}.soundBadge__infoItem{position:absolute;right:12px;bottom:12px;z-index:1}.soundBadge__avatarLink{display:inline-block;background:center center/contain no-repeat;margin-right:4px;padding:5px 6px;width:50px;height:50px;position:relative}.soundBadge__tierIndicator{top:0;right:1px}.soundBadge.hiddenSound .soundBadge__avatarLink:after{content:'';background:rgba(150,150,150,.6);position:absolute;top:5px;bottom:5px;left:6px;right:6px}.soundBadge__checkbox{position:absolute;left:19px;top:50%;margin-top:-8px}.soundBadge.compact{padding:0;left:-6px;margin-right:-6px}.soundBadge.compact .soundBadge__additional{top:18px}.soundBadge.hover:not(.compact),.soundBadge.selected:not(.compact),.soundBadge.active:not(.compact){background-color:#f2f2f2;margin:-1px -4px;padding:6px 14px}.soundBadge.hover:not(.compact) .soundBadge__additional,.soundBadge.selected:not(.compact) .soundBadge__additional,.soundBadge.active:not(.compact) .soundBadge__additional{right:4px;top:26px;background:rgba(242,242,242);background:linear-gradient(to right,rgba(242,242,242,.1),#f2f2f2 17px)}.soundBadge.hover .soundBadge__actions,.soundBadge.active .soundBadge__actions{display:block}.soundBadge.active:not(.compact),.soundBadge.active:not(.compact).hover{border-bottom:1px solid #f50;padding-bottom:5px;border-radius:4px 4px 0 0}.soundBadge.active .soundTitle__title{color:#f50}.soundBadge.hasCheckbox,.soundBadge.hasCheckbox.hover,.soundBadge.hasCheckbox.selected,.soundBadge.hasCheckbox.active{margin-left:-4px;padding-left:42px}.soundBadge.hasCheckbox .soundBadge__additional{padding-right:15px}.soundBadge.playlist .soundBadge__avatarLink{background-image:url(" + n(2320) + ")}.soundBadge.clickable{cursor:pointer}.soundBadge__disabledReason{margin:2px 0 0 0}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.soundBadge.playlist .soundBadge__avatarLink{background-image:url(" + n(2321) + ")}}", ""]);
    },
    2114: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".soundContext{margin-bottom:12px}.soundContext__userAvatar{margin-right:8px}.soundContext__line{color:#999}.soundContext__line .sc-ministats{font-family:inherit}.soundContext__repost{font-size:12px}.soundContext__repost:before{margin-right:-2px}", ""])
    },
    2115: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.sound{height:auto}.sound__body{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;height:100%}.sound__artwork{position:relative;margin-right:15px}.sound__tierIndicator{top:-5px;right:-5px}.sound__content{-webkit-flex:1;-ms-flex:1;flex:1;overflow-x:hidden}.sound.playing .sound__backgroundGradient{opacity:.8}.sound__coverArt{background:center center/contain no-repeat;display:block;width:160px;height:160px;z-index:2}.coverArt__infoItem{position:absolute;left:10px;top:90px;z-index:1}.sound__header{position:relative;margin:0 0 6px 0;padding-top:7px;min-height:43px;z-index:2}.sound.hide-artwork .sound__header{margin-left:0}.sound__uploadTime{color:#ccc;position:absolute;top:8px;right:0;font-size:12px}.visualSound.streamContext .sound__uploadTime{top:9px}.sound__waveform{height:60px;position:relative}.sound__footer{position:relative;margin-top:10px;min-height:30px;box-sizing:border-box}.sound__soundActions{z-index:1;overflow:hidden;position:relative;float:left;background-color:#fff}.playlist .sound__soundActions{margin-top:10px}.sound__footerRight{position:absolute;right:0;top:0;z-index:0}.playlist .sound__footerRight{position:relative;float:right;margin-top:10px}.sound__soundPrivate{float:right;margin:4px 0 0 4px}.sound__trackList{margin-top:15px}.sound.listenContext .sound__header{margin:0 0 20px 0;padding-top:0;z-index:2}.sound.listenContext .sound__waveform{height:110px;margin-bottom:25px}.sound.listenContext .sound__uploadTime{top:-1px;font-size:16px;font-family:"Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;font-weight:100}.sound.listenContext .sound__footer{height:37px}.sound__prevLink,.sound__nextLink{position:absolute;top:0;height:100%;width:100%;opacity:.2}.sound__nextLink{left:100%;margin-left:15px}.sound__nextLink:hover{margin-left:10px}.sound__prevLink{left:-100%;margin-left:-15px}.sound__prevLink:hover{margin-left:-10px}.l-three-column .sound .sc-button-responsive{text-indent:-100000px}.l-three-column .sound .sc-button-responsive:before{left:1px}.sound.minimal .sound__header{margin-left:0}.sound.minimal .commentBubble{display:none}.visualSound.minimal .sound__footer{margin-top:20px}.sound.minimal .visualSound__wrapper{margin-right:0!important}.sound.noClicks .soundTitle__title,.sound.noClicks .soundTitle__username,.sound.noClicks .sound__coverArt,.sound.noClicks .soundTitle__tag{pointer-events:none}.conversationMessage .sound .sc-button-responsive{text-indent:-100000px}.conversationMessage .sound .sc-button-responsive:before{left:1px}@media (min-width:805px){.l-collection .coverArt__infoItem,.l-fixed-top-one-column .coverArt__infoItem{height:16px;line-height:16px;padding:0 8px;font-size:11px}.l-collection .coverArt__infoItemWaveform,.l-fixed-top-one-column .coverArt__infoItemWaveform{height:16px;margin-right:-4px}}@media (min-width:1025px){.l-fluid-fixed .activity__sharingNote-container,.l-collection .activity__sharingNote-container{padding-left:136px}}@media (max-width:1239px){.l-fluid-fixed .sound .sc-button-responsive,.l-fixed-fluid .sound .sc-button-responsive,.l-fullwidth .sound .sc-button-responsive{text-indent:-100000px}.l-fixed-fluid .sound .sc-button-responsive:before,.l-fluid-fixed .sound .sc-button-responsive:before{left:1px}}', ""])
    },
    2116: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, '.soundTitle__info{display:inline-block;vertical-align:baseline;white-space:nowrap}.soundTitle__titleContainer{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.soundTitle__usernameTitleContainer{-webkit-flex:1;-ms-flex:1;flex:1;min-width:0}.soundTitle__title{max-width:100%;font-weight:100;box-sizing:border-box}.soundTitle__title .sc-truncate{display:block}.soundTitle.m-hiddenSound .soundTitle__title{color:#999;cursor:default}.soundTitle.streamContext .soundTitle__title{font-size:15px;line-height:1.2}.soundTitle__additionalContainer{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start;margin-left:5px;text-align:right}.soundTitle__uploadTime{color:#ccc;font-size:12px;font-weight:100;line-height:16px}.soundTitle__tagContainer{line-height:12px;margin-top:2px}.soundTitle__tag{vertical-align:middle}.soundTitle__tagContent{max-width:120px}.soundTitle__playButton{margin-right:5px}.soundTitle__playButtonHero{height:60px;width:60px;margin-right:10px;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.soundTitle__usernameHeroContainer{margin-bottom:7px}.soundTitle.streamContext .soundTitle__secondary{font-size:12px;line-height:16px}.soundTitle.listenContext .soundTitle__title,.soundTitle.listenContext .soundTitle__title.g-type-shrinkwrap-inline:hover{font-weight:100}.soundTitle.streamContext .soundTitle__secondary .sc-promoted-icon-small{font-family:inherit;font-size:inherit;line-height:inherit;background-position-y:center}.soundTitle.listenContext .soundTitle__playButton{height:60px}.soundTitle.listenContext .soundTitle__tagContainer{display:none}.soundTitle.listenContext .sc-media-content{overflow:visible;margin-left:70px}.soundTitle.m-visualSound.streamContext .soundTitle__playButton{margin-left:4px}.sound.streamContext .soundTitle.m-visualSound .soundTitle__info{margin-left:-4px;padding-left:1px}.sound .soundTitle.m-visualSound .soundTitle__info .actorUser__username::before{background-position:left;width:18px;margin-left:-2px}.sound:not(.focused) .soundTitle.m-visualSound.m-playing .soundTitle__info{opacity:0}.sound:not(.focused) .soundTitle.m-visualSound.m-playing .soundTitle__playButton{opacity:0}.soundTitle.m-visualSound.streamContext .soundTitle__uploadTime{margin-top:3px}.soundTitle.m-visualSound.streamContext .soundTitle__username{padding-top:2px;box-sizing:border-box}.sound:not(.focused) .soundTitle.m-visualSound.m-playing .soundTitle__title,.sound:not(.focused) .soundTitle.m-visualSound.m-playing .soundTitle__username{opacity:0}.soundTitle.m-visualSound.streamContext .soundTitle__title{margin-top:2px}.soundTitle.m-visualSound.streamContext .soundTitle__tagContainer{margin-top:5px}.soundTitle.m-visualSound.listenContext .soundTitle__uploadTime{font-size:16px;font-family:"Interstate","Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif}@media (max-width:1079px){.soundTitle__tagContainer>.sc-snippet-badge-medium,.soundTitle__tag{display:none}}@media (min-width:1080px){.soundTitle__tagContainer>.sc-snippet-badge-small{display:none}}', ""])
    },
    2117: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".visualSound .sound__artwork{margin-right:0}.visualSound__wrapper{box-sizing:border-box;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.visualSound.streamContext .visualSound__wrapper{min-height:160px;position:relative;padding-top:90px;padding-right:10px;padding-left:10px;margin-right:-10px;margin-left:5px;margin-bottom:35px}.conversationMessage__sound .visualSound.streamContext .visualSound__wrapper{margin-right:0}.visualSound.streamContext.playing .visualSound__wrapper{padding-top:315px}.conversationMessage__sound .visualSound.streamContext.playing .visualSound__wrapper{padding-top:330px}.visualSound.listenContext .visualSound__wrapper{padding:255px 30px 0 30px}.visualSound.listenContext .sound__waveform{margin-bottom:50px}.visualSound.streamContext.hide-comments .sound__waveform{padding-bottom:7px}.visualSound.playing:not(.focused) .sound__waveform{opacity:0}.visualSound .sound__header{position:absolute;top:-2px;left:6px;right:10px}.visualSound.listenContext .sound__header{left:30px;right:30px;top:29px}.visualSound__progress{opacity:0;height:3px;position:absolute;left:0;right:0;z-index:10;top:397px;display:none}.visualSound.playing .visualSound__progress{display:block}.visualSound.playing:not(.focused) .visualSound__progress{opacity:1}.visualSound:not(.listenContext) .sound__footer{position:absolute;bottom:-40px;left:10px;right:10px}", ""])
    },
    2118: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".visuals{top:0;left:0;right:0;height:294px;position:absolute}.visuals.listenContext{height:400px}.visuals.streamContext{height:160px;top:0;width:100%}.sound.focused .visuals.streamContext{opacity:1}.visuals.playing .visuals:after,.visuals.listenContext .visuals:after{opacity:0}.sound.focused .visuals.playing:after,.visuals.listenContext:after{opacity:1}.sound:not(.focused) .visuals.listenContext.playing:after{opacity:0}.visuals.playing.streamContext{height:400px;opacity:1}.visuals__container{position:absolute;top:0;left:0;bottom:0;right:0;position:absolute;background-size:cover;background-position:center;background-repeat:no-repeat;opacity:0}.visuals__container.visible{opacity:1}.visuals__transition{transition:opacity .3s ease-out}", ""])
    },
    2119: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".stagingMenu{position:fixed;top:46px;width:100%}.stagingMenu__select{background:#f2f2f2;color:#38f;border:0;float:right;margin-right:-3px}", ""])
    },
    2121: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".stationBadgeHorizontal{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.stationBadgeHorizontal__artwork{margin:5px 10px 5px 0}.stationBadgeHorizontal__like{margin-left:5px}.stationBadgeHorizontal__content{-webkit-flex:1;-ms-flex:1;flex:1;overflow:hidden}.stationBadgeHorizontal__titleText{width:100%}", ""])
    },
    2123: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".stationTile{width:100%;padding-bottom:58px;margin-bottom:20px;position:relative}.stationTile__artwork{height:0;padding-top:100%;position:relative;z-index:2}.stationTile__image{top:0;left:0;right:0;bottom:0;position:absolute}.stationTile__playButton{position:absolute;left:34%;top:34%;right:34%;bottom:34%}.stationTile__playButton{opacity:0;transition:opacity 100ms}.stationTile.m-playing .stationTile__playButton,.stationTile__artwork:hover .stationTile__playButton{opacity:1}.stationTile__mainHeading{font-size:14px}.stationTile__heading{width:100%;display:block;line-height:1.4}.stationTile__description{position:absolute;padding-top:100%;top:6px;width:100%;z-index:1}.stationTile__actions{position:absolute;bottom:0;left:0;width:100%;height:40px;padding:5px;background:linear-gradient(to top,rgba(0,0,0,.4),rgba(0,0,0,0));display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;box-sizing:border-box;opacity:0;visibility:hidden;transition:opacity .1s,visibility .1s}.stationTile__artwork:hover .stationTile__actions{opacity:1;visibility:visible}", ""])
    },
    2126: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".stats__moreLink{line-height:26px}", ""])
    },
    2127: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".statsBadge .loading{padding:30px 0}.statsBadge__recent{width:100%;margin:10px 0 0 0}.statsBadge__title,.statsBadge__value{width:50%;text-align:left}.statsBadge__title:last-child,.statsBadge__value:last-child{text-align:right}.statsBadge__value{font-size:32px;line-height:1em}.statsBadge__total{margin:15px 0 0 0}.statsBadge__error{padding-top:9px;text-align:center}.statsBadge__upsell{margin-top:10px;padding-top:20px}.statsBadge__upsell-headline{margin-bottom:5px}.statsBadge__upsell-text{font-size:12px;color:#666}.statsBadge__upsell-text>span{color:#333}", ""])
    },
    2138: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userSuggestionList__item{padding:10px 0}.userSuggestionList .loading{padding:80px 0}", ""])
    },
    2139: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userSuggestion__promoted{display:inline-block;margin-top:6px}", ""])
    },
    2141: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".suggestedTags{opacity:0;background-color:#fff;border:1px solid #ccc;border-radius:0 4px 4px 4px;box-shadow:0 2px 7px rgba(0,0,0,.15);min-width:102px;max-width:200px}.suggestedTags.visible{opacity:1}.suggestedTags__listItem{padding:3px 10px}.suggestedTags__listItem.selected{background-color:#f2f2f2}.suggestedTags__listItem.selected:first-child{border-top-right-radius:4px}.suggestedTags__listItem.selected:last-child{border-radius:0 0 4px 4px}", ""])
    },
    2142: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".tagInput{margin:0}.tagInput__wrapper{background-color:#fff}.tagInput__token{display:inline-block;padding-left:10px;margin-right:8px;opacity:1;cursor:pointer;position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tagInput__token:hover{text-decoration:line-through}.tagInput__token:before{content:'#';position:absolute;left:0;color:#999}.tagInput__token.hide{width:0!important;opacity:0;margin:0;padding:0;transition:width .15s .1s ease-in-out,margin .15s .1s ease-in-out,padding .15s .1s ease-in-out,opacity .25s linear}.tagInput .tokenInput__tokenRemove{display:none}.tagInput__wrapper.sc-input-large .tagInput__input{width:80px}.tagInput__wrapper.sc-input-large .tagInput__token{padding-left:12px;margin-right:10px}", ""])
    },
    2151: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".uploadAudibleAttributeIcons{position:absolute;right:20px;top:24px}.uploadAudibleAttributeIcons .sc-label{margin-right:5px}", ""])
    },
    2154: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".compactUpload__dragHandle{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background:url(" + n(1110) + ") no-repeat center center;width:80px;height:10px;cursor:move}.compactUpload__content{padding:15px 0;-webkit-flex:1;-ms-flex:1;flex:1;position:relative}.compactUpload__onlyTitle{margin:0}.compactUpload__cancel{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background:url(" + n(286) + ") no-repeat 0 0;border:0;width:15px;height:15px;margin:0 30px 0 15px}.compactUpload__failed{display:none;margin-left:35px}.compactUpload.readOnly .compactUpload__field{line-height:26px}.compactUpload.readOnly .compactUpload__cancel{opacity:.3;pointer-events:none}.compactUpload.readOnly .compactUpload__dragHandle{opacity:.3;cursor:not-allowed;pointer-events:none}.compactUpload.failed{background-color:#f2f2f2}.compactUpload.failed .compactUpload__content{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;background-image:url(" + n(1117) + ");background-position:0 center;background-size:26px 26px;background-repeat:no-repeat}.compactUpload.failed .compactUpload__failed{display:block}.compactUpload.failed .compactUpload__field{display:none}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:192dpi){.compactUpload.failed .compactUpload__content{background-image:url(" + n(1118) + ")}}", ""])
    },
    2155: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".uploadTarget{text-align:center}.uploadTarget.uploadTarget__visible{opacity:1}.uploadTarget__frame{background:#fff;top:50%;left:50%;width:740px;height:290px;margin:-200px 0 0 -400px;padding:30px 30px 80px;border-radius:5px;border-top-left-radius:0;border-top-right-radius:0;position:absolute;box-shadow:5px 5px 22px -4px rgba(0,0,0,.6);transition:box-shadow .07s,-webkit-transform .07s;transition:box-shadow .07s,transform .07s}.uploadTarget.entered .uploadTarget__frame{box-shadow:2px 2px 12px -4px rgba(0,0,0,.8);-webkit-transform:scale(.99);transform:scale(.99)}.uploadTarget__frameInner{border:1px dashed transparent;height:100%;position:relative}.uploadTarget.entered .uploadTarget__frameInner{border-color:#999}.uploadTarget__title{text-shadow:0 -1px 0 rgba(0,0,0,.3);font-size:32px;color:#e5e5e5;position:absolute;top:50%;margin-top:-22px;width:100%;left:0;transition:color .2s}.uploadTarget.entered .uploadTarget__title{color:#ccc}.uploadTarget__message{position:absolute;bottom:30px;left:0;right:0}.uploadedTarget__messageHighlight{color:#333}", ""])
    },
    2157: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".permalinkTextfield{position:relative}.permalinkTextfield__inputWrapper{position:relative;line-height:22px}.permalinkTextfield.medium .permalinkTextfield__inputWrapper{line-height:26px}.permalinkTextfield__input,.permalinkTextfield__editButton{position:absolute;right:0;top:0}.permalinkTextfield__editButton{z-index:1;transition:opacity .12s}.permalinkTextfield__input{width:auto;min-width:120px;padding:2px}.permalinkTextfield__input.sc-input-small{font-size:12px}.permalinkTextfield__input:disabled{border-color:transparent;color:#333;cursor:text}.permalinkTextfield.editing .permalinkTextfield__editButton,.permalinkTextfield.generating .permalinkTextfield__editButton{opacity:0}.permalinkTextfield.generating{background:url(" + n(249) + ") no-repeat right 3px center;background-size:16px}.permalinkTextfield.generating .permalinkTextfield__input{opacity:.3}", ""])
    },
    2158: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".progressBar,.progressBar__outer,.progressBar__inner,.progressBar__indicators{width:100%;height:100%}.progressBar__outer{background:#e5e5e5 url(" + n(2346) + ");position:relative}.progressBar__inner{background-color:#f50;background-image:linear-gradient(to right,#fd7722,#fc6621);-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0);transform:scaleX(0)}.progressBar.blue .progressBar__inner{background-color:#06c;background-image:linear-gradient(to right,#2189c9,#1c75c9)}.progressBar.indeterminate .progressBar__inner{-webkit-transform:none!important;transform:none!important}", ""])
    },
    2159: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".shareToNetworks__wrapper{margin-right:5px;height:16px;width:36px}.shareToNetworks__wrapper:last-child{margin-right:0}.shareToNetworks__check{margin-top:2px}.shareToNetworks__icon{transition:opacity .2s;opacity:1}.shareToNetworks__input:checked~.shareToNetworks__icon{opacity:1}", ""])
    },
    2160: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".sharingRadio__scheduled{display:none}.sharingRadio.scheduled{padding-left:0}.sharingRadio.scheduled>.sharingRadio__scheduled{display:inline}.sharingRadio.scheduled>.radioGroup__radio{display:none}", ""])
    },
    2164: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".uploadStatus__cancel{position:absolute;right:-7px;top:-3px;z-index:1;font-size:12px;color:#666}.uploadStatus__upload,.uploadStatus__transcoding{width:50%;height:100%;float:left}.uploadStatus__upload{box-sizing:border-box;border-right:1px solid #fff}", ""])
    },
    2168: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".blockUser__actions{margin-top:24px;text-align:right}.blockUser__checkbox{margin-bottom:10px}", ""])
    },
    2183: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".spotlightResultItem{display:block;color:#666!important;padding:10px 45px 10px 14px;position:relative}.spotlightResultItem b{color:#333}.spotlightResultItem__title{font-weight:100;line-height:20px}.spotlightResultItem__private{position:absolute;top:12px;right:40px}.spotlightResultItem__icon{position:absolute;top:9px;right:14px}.spotlightResultItem.private{padding-right:105px}.spotlightResultItem__private{display:none}.spotlightResultItem.private .spotlightResultItem__private{display:inline-block}", ""])
    },
    2184: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".spotlightResults{background-color:#fff}.spotlightResults__item.selected{background-color:#f2f2f2}.spotlightResults .loading{padding:30px 0 30px}.spotlightResults__noResults{display:block;color:#666!important;padding:10px 45px 10px 14px;position:relative}.spotlightResults__noResults h2{font-weight:100;line-height:20px}", ""])
    },
    2185: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".spotlightSearch{position:relative;outline:none}input.spotlightSearch__input{width:100%;height:32px;padding-right:35px;box-shadow:0 1px 2px rgba(0,0,0,.1);position:relative;z-index:101}input.spotlightSearch__input:focus{outline:0}.spotlightSearch .loader{padding:0;position:absolute;right:0;top:6px;z-index:101}.spotlightSearch__icon{border:0;padding:0;background:url(" + n(2260) + ") 50% -359px no-repeat;text-indent:22px;overflow:hidden;width:22px;height:19px;position:absolute;right:7px;top:8px;z-index:101;opacity:1;pointer-events:none}.spotlightSearch__input:focus+.spotlightSearch__icon{opacity:0}", ""])
    },
    2188: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".suggestedUser{padding:2px}.suggestedUser__name{margin:4px 0 0 5px}", ""])
    },
    2189: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".suggestedUsers{background-color:#f2f2f2;padding:3px 0;color:#666}.suggestedUsers__listItem{padding:3px 6px;cursor:pointer}.suggestedUsers__listItem.selected{color:#333;background-color:#ccc}", ""])
    },
    2192: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userBadgeListItem{width:100%;padding-bottom:78px;position:relative}.userBadgeListItem__artwork{padding-top:100%;height:0;position:relative;z-index:2}.userBadgeListItem__title,.userBadgeListItem__action{position:absolute;padding-top:100%;top:6px;width:100%;z-index:1;text-align:center}.userBadgeListItem__heading{display:inline-block;max-width:85%}.userBadgeListItem__image{position:absolute;top:0;bottom:0;left:0;right:0}.userBadgeListItem__action{z-index:0;top:30px;opacity:0}.userBadgeListItem:hover .userBadgeListItem__action{opacity:1}", ""])
    },
    2193: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userBadge{position:relative;min-height:50px}.userBadge__title{margin:6px 0 0 0}.userBadge.m-horizontal{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-flex:1;-ms-flex:1;flex:1}.userBadge.m-horizontal .userBadge__content{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.userBadge.m-horizontal .userBadge__meta{display:-webkit-flex;display:-ms-flexbox;display:flex}.userBadge.m-horizontal .userBadge__actions{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.userBadge.m-horizontal .userBadge__stats{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.userBadge.m-horizontal .userBadge__avatar{margin-right:10px}.userBadge.m-horizontal .userBadge__title{white-space:nowrap}.userBadge.m-horizontal .userBadge__usernameWrap{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;word-break:normal;display:block}.userBadge.m-horizontal .userBadge__usernameLink{float:left;max-width:100%;box-sizing:border-box;margin-right:3px}.userBadge.m-horizontal.m-premium .userBadge__usernameLink{margin-right:-13px;padding-right:16px}.userBadge.m-horizontal .userBadge__usernameLink.m-withFollowed{max-width:111px}.userBadge.m-vertical .userBadge__title,.userBadge.m-vertical .userBadge__stats{margin-bottom:5px}", ""])
    },
    2194: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".userDialogBadge{box-sizing:border-box;overflow:hidden;margin-bottom:10px;width:100%;text-align:center}.userDialogBadge__avatar{display:block;width:80px;height:80px;margin:5px auto 15px}.userDialogBadge__address{font-size:12px}.userDialogBadge__stats{margin-bottom:4px}.userDialogBadge__stats .sc-ministats-item{float:none}", ""])
    },
    2197: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".usersList{overflow:hidden}.usersList.user-badge .usersList__item{padding:10px 0}.usersList .loading{padding:86px 0}.usersList.floating{margin-top:15px}.usersList.floating.user-avatar-badge-hover{margin-top:0;padding:10px 0 8px}.usersList.floating .usersList__list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.usersList.floating .usersList__item:not(:last-child){margin-right:-8px}.usersList.user-avatar-badge.floating .loading,.usersList.user-avatar-badge-hover.floating .loading{padding:0 15px}", ""])
    },
    2199: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".spamWarning>.sc-type-h2,.spamWarning__buttonContainer{margin-bottom:1em}", ""])
    },
    2200: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".waveformCommentsNode{opacity:0;transition:opacity .2s}.waveformCommentsNode.loaded{opacity:1}.waveformCommentsNode.loaded.commenting{opacity:.3}", ""])
    },
    2201: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".waveformWrapper{position:relative;width:100%;height:100%}.waveformWrapper__waveform{position:absolute;left:0;right:0;top:0;bottom:0}.waveformWrapper__empty{position:absolute;text-align:center;left:0;right:0;top:50%;margin-top:-10px;line-height:20px;display:none}.waveformWrapper.m-empty .waveformWrapper__empty{display:block}", ""])
    },
    2202: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".waveform{position:relative;width:100%;height:100%;opacity:0;transition:opacity .2s ease-in-out}.waveform:not(.playing) .waveform__scene:hover{cursor:pointer}.waveform.loaded{opacity:1}.waveform__layer,.waveform__layer .sceneLayer{position:absolute;top:0;left:0;width:100%;height:100%}.waveform__empty .waveform__scene{opacity:.4}.waveform__emptyWaveform{position:relative}.waveform__emptyMessage{position:absolute;text-align:center;width:100%;bottom:5px;color:#000;font-size:11px;text-shadow:1px 1px 1px #fff}.listenHero .waveform__emptyMessage{font-size:16px;color:#fff;text-shadow:none}", ""])
    },
    2203: function(e, t, n) {
        t = e.exports = n(6)(), t.push([e.id, ".widgetCustomization__players{margin-bottom:15px}.widgetCustomization__more{display:none;margin-top:15px}.widgetCustomization.showMore .widgetCustomization__more{display:block}.widgetCustomization__options{position:relative;width:100%}.widgetCustomization__widgetCodeContainer{margin-bottom:18px}.widgetCustomization__embedCodes{width:180px;margin:2px 0 0 30px}.widgetCustomization__topOptions{height:24px}.widgetCustomization__lowerOptions{margin-top:10px}.widgetCustomization__color{display:none}.widgetCustomization.showColors .widgetCustomization__color{display:block}.widgetCustomization__colorLabel,.widgetCustomization__colorList{float:left;margin-right:4px}.widgetCustomization__colorList{margin-top:-5px}.widgetCustomization__colorListItem{float:left;margin-right:4px}.widgetCustomization__colorListItem:last-child{margin-right:0}.widgetCustomization__colorBox{display:block;width:24px;height:24px;box-sizing:border-box;border:2px solid transparent}.widgetCustomization__colorBox.active{border-color:#000}input.widgetCustomization__colorInput{width:72px;background-color:#fff!important;color:#000!important}.widgetCustomization__colorPickerContainer{display:none;margin:11px 10px 0 0;position:absolute;right:0}.widgetCustomization.showColorPicker .widgetCustomization__colorPickerContainer{display:block}", ""])
    },
    2380: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '  <div class="moreActions__group">\n' + (null != (s = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </div>\n"
            },
            2: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isView : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.program(5, a, 0),
                    data: a
                })) ? s : ""
            },
            3: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, null != t ? t.View : t, {
                    name: "$view",
                    hash: {
                        args: null != t ? t.args : t
                    },
                    data: s
                })) + "\n"
            },
            5: function(e, t, n, i, a) {
                return "        " + e.escapeExpression(e.lambda(t, t)) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n.each.call(null != t ? t : {}, null != t ? t.items : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2381: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="readMoreTile__tile">\n  ' + c((n(53) || t && t.$view || u).call(l, n(158), {
                    name: "$view",
                    hash: {
                        resource_type: null != (o = null != (o = null != t ? t._options : t) ? o.subviewArgs : o) ? o.resource_type : o,
                        resource_id: null != (o = null != (o = null != t ? t._options : t) ? o.subviewArgs : o) ? o.resource_id : o,
                        type: null != (o = null != (o = null != t ? t._options : t) ? o.subviewArgs : o) ? o.type : o
                    },
                    data: s
                })) + '\n</div>\n\n<a class="readMoreTile__countWrapper sc-type-h3 sc-link-dark" href="' + c((r = null != (r = i.href || (null != t ? t.href : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "href",
                    hash: {},
                    data: s
                }) : r)) + '">\n  <span class="readMoreTile__count">' + c((r = null != (r = i.readMoreText || (null != t ? t.readMoreText : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "readMoreText",
                    hash: {},
                    data: s
                }) : r)) + "</span>\n</a>\n"
            },
            useData: !0
        })
    },
    2404: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return '  <div class="modal__header g-z-index-modal-header">\n\n  </div>\n'
            },
            3: function(e, t, n, i, a) {
                return " transparentBackground"
            },
            5: function(e, t, n, i, a) {
                return " noEntryTransition"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<button title="Close" class="modal__closeButton">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(r, "Close", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n" + (null != (o = i["if"].call(r, null != t ? t.hasHeader : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '<div class="modal__modal sc-border-box g-z-index-modal-content' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.transparentBackground : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.noEntryTransition : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '">\n  <div class="modal__content"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    2405: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '  <div class="notifications__empty">' + e.escapeExpression((s = null != (s = n.empty_message || (null != t ? t.empty_message : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "empty_message",
                    hash: {},
                    data: a
                }) : s)) + "</div>\n"
            },
            3: function(e, t, n, i, a) {
                return '  <div class="notifications__list"></div>\n'
            },
            5: function(e, t, n, i, a) {
                var s, o = e.lambda,
                    r = e.escapeExpression;
                return '  <div>\n    <a href="' + r(o(null != (s = null != t ? t.view_all : t) ? s.link : s, t)) + '" class="notifications__viewAll sc-type-h3 ' + r(o(null != (s = null != t ? t.view_all : t) ? s.className : s, t)) + '">' + r(o(null != (s = null != t ? t.view_all : t) ? s.text : s, t)) + "</a>\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.isEmpty : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(3, a, 0),
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_view_all : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n"
            },
            useData: !0
        })
    },
    2406: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.moreLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.program(7, a, 0),
                    data: a
                })) ? s : "") + '    <h3 class="sidebarHeader__title sc-type-light sc-font-tabular g-flex-row-centered ' + (null != (s = n.unless.call(o, null != t ? t.iconClassName : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(9, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">\n' + (null != (s = n["if"].call(o, null != t ? t.iconClassName : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '      <span class="sidebarHeader__actualTitle"></span>\n    </h3>\n' + (null != (s = n["if"].call(o, null != t ? t.moreText : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.moreLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, a, 0),
                    inverse: e.program(17, a, 0),
                    data: a
                })) ? s : "") + '  <div class="sidebarContent"' + (null != (s = n["if"].call(o, null != t ? t.contentMinHeight : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "></div>\n"
            },
            2: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '    <a class="sidebarHeader g-flex-row-centered-spread sc-link-' + c((o = null != (o = n.titleVariation || (null != t ? t.titleVariation : t)) ? o : l,
                    typeof o === u ? o.call(r, {
                        name: "titleVariation",
                        hash: {},
                        data: a
                    }) : o)) + " " + c((o = null != (o = n.moreClassName || (null != t ? t.moreClassName : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "moreClassName",
                    hash: {},
                    data: a
                }) : o)) + ' sc-border-light-bottom"' + (null != (s = n["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ' href="' + c((o = null != (o = n.moreLink || (null != t ? t.moreLink : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "moreLink",
                    hash: {},
                    data: a
                }) : o)) + '"' + (null != (s = n["if"].call(r, null != t ? t.externalMore : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ">\n"
            },
            3: function(e, t, n, i, a) {
                return ' rel="nofollow"'
            },
            5: function(e, t, n, i, a) {
                return ' target="_blank"'
            },
            7: function(e, t, n, i, a) {
                var s;
                return '    <div class="sidebarHeader g-flex-row-centered-spread sc-type-' + e.escapeExpression((s = null != (s = n.titleVariation || (null != t ? t.titleVariation : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "titleVariation",
                    hash: {},
                    data: a
                }) : s)) + ' sc-border-light-bottom">\n'
            },
            9: function(e, t, n, i, a) {
                return "noIcon"
            },
            11: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(180) || t && t.$icon || i.helperMissing).call(null != t ? t : {}, {
                    name: "$icon",
                    hash: {
                        "class": "sidebarHeader__icon",
                        type: null != t ? t.iconClassName : t,
                        size: "large"
                    },
                    data: s
                })) + "\n"
            },
            13: function(e, t, n, i, a) {
                var s;
                return '    <span class="sidebarHeader__more sc-type-h3">' + e.escapeExpression((s = null != (s = n.moreText || (null != t ? t.moreText : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "moreText",
                    hash: {},
                    data: a
                }) : s)) + "</span>\n"
            },
            15: function(e, t, n, i, a) {
                return "    </a>\n"
            },
            17: function(e, t, n, i, a) {
                return "    </div>\n"
            },
            19: function(e, t, n, i, a) {
                var s;
                return ' style="min-height:' + e.escapeExpression((s = null != (s = n.contentMinHeight || (null != t ? t.contentMinHeight : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "contentMinHeight",
                    hash: {},
                    data: a
                }) : s)) + 'px;"'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.shouldShow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2407: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '  <div class="tabs__headingContainer">\n    <h3 class="tabs__heading sc-text' + (null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t._options : t) ? s.large : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">' + e.escapeExpression(e.lambda(null != (s = null != t ? t.singleTab : t) ? s.name : s, t)) + "</h3>\n  </div>\n"
            },
            2: function(e, t, n, i, a) {
                return " tabs__headingLarge"
            },
            4: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '  <div class="tabs__tabs">\n    <ul class="g-tabs' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.large : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">\n' + (null != (s = n.each.call(o, null != t ? t.tabs : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "    </ul>\n  </div>\n"
            },
            5: function(e, t, n, i, a) {
                return " g-tabs-large"
            },
            7: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '        <li class="g-tabs-item">\n          <a class="g-tabs-link' + (null != (s = n["if"].call(o, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '" ' + (null != (s = n["if"].call(o, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ' href="">\n' + (null != (s = n["if"].call(o, null != t ? t.icon : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "            " + e.escapeExpression(e.lambda(null != t ? t.name : t, t)) + "\n          </a>\n        </li>\n"
            },
            8: function(e, t, n, i, a) {
                return " active"
            },
            10: function(e, t, n, i, a) {
                return 'tabIndex="-1"'
            },
            12: function(e, t, n, i, a) {
                var s;
                return '              <span class="sc-icon sc-icon-large ' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isActive : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.program(15, a, 0),
                    data: a
                })) ? s : "") + '"></span>\n'
            },
            13: function(e, t, n, i, a) {
                var s;
                return " " + e.escapeExpression(e.lambda(null != (s = null != t ? t.icon : t) ? s.activeClass : s, t)) + " "
            },
            15: function(e, t, n, i, a) {
                var s;
                return " " + e.escapeExpression(e.lambda(null != (s = null != t ? t.icon : t) ? s.defaultClass : s, t)) + " "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.singleTab : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(4, a, 0),
                    data: a
                })) ? s : "") + '\n<div class="tabs__content"></div>\n'
            },
            useData: !0
        })
    },
    2408: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="tooltip__arrow"></div>\n<div class="tooltip__content">' + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.text : s, t)) + "</div>\n"
            },
            useData: !0
        })
    },
    2516: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <li class="attachedSounds__item">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(566), {
                    name: "$view",
                    hash: {
                        clickToPlay: !1,
                        showRemoveButton: !0,
                        showPlaybackCount: !1,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<ul class="attachedSounds__list sc-list-nostyle">\n' + (null != (s = n.each.call(null != t ? t : {}, null != t ? t.attachments : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2517: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(53) || t && t.$view || l).call(r, n(1507), {
                    name: "$view",
                    hash: {
                        key: "textfield",
                        showSuccessMessage: null != (o = null != t ? t._options : t) ? o.showSuccessMessage : o,
                        size: "medium",
                        label: (n(51) || t && t.$t || l).call(r, "Write your message and add tracks", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "body",
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(253)
                    },
                    data: s
                })) + '\n\n<div class="composeMessage__bottomWrapper">\n  <div class="composeMessage__attachedSounds">\n    ' + u((n(53) || t && t.$view || l).call(r, n(1506), {
                    name: "$view",
                    hash: {
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(253)
                    },
                    data: s
                })) + '\n  </div>\n\n  <div class="composeMessage__toolbar sc-clearfix">\n    <button class="composeMessage__addSoundButton sc-button sc-button-medium">' + u((n(51) || t && t.$t || l).call(r, "Add track", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n    " + u((n(53) || t && t.$view || l).call(r, n(76), {
                    name: "$view",
                    hash: {
                        buttonArgs: null != t ? t.sendButtonArgs : t,
                        title: null != t ? t.sendButtonTitle : t,
                        size: "medium",
                        button: "send",
                        className: "composeMessage__sendButton sc-button-cta",
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        Form: n(253)
                    },
                    data: s
                })) + '\n  </div>\n</div>\n\n<div class="composeMessage__searchViewWrapper"></div>\n'
            },
            useData: !0
        })
    },
    2522: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <h1 class="newMessageForm__title g-modal-title-h1">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "New message", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h1>\n"
            },
            3: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="newMessageForm__recipient">\n    ' + e.escapeExpression((n(53) || t && t.$view || l).call(r, n(1518), {
                    name: "$view",
                    hash: {
                        key: "recipients",
                        maxTokens: null != (o = null != t ? t._options : t) ? o.maxRecipients : o,
                        label: (n(51) || t && t.$t || l).call(r, "To", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "recipients",
                        resource_id: null != t ? t.form_id : t,
                        Form: n(253)
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.showTitle : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.showRecipientField : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(1508), {
                    name: "$view",
                    hash: {
                        key: "compose",
                        showSuccessMessage: null != (o = null != t ? t._options : t) ? o.showSuccessMessage : o,
                        field: "body",
                        resource_id: null != t ? t.form_id : t,
                        Form: n(253)
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2525: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1512), {
                    name: "$view",
                    hash: {
                        collectionType: null != t ? t.collectionType : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2527: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '  <h1 class="g-modal-title-h2">' + l((n(51) || t && t.$t || r).call(o, "Sorry [[username]]", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.meUsername : t
                    },
                    data: s
                })) + "</h1>\n  <p>" + l((n(51) || t && t.$t || r).call(o, "Only users [[requiredAge]] years and older are allowed to follow this profile.", {
                    name: "$t",
                    hash: {
                        requiredAge: null != t ? t.requiredAge : t
                    },
                    data: s
                })) + '</p>\n  <button class="ageGateContent__ok sc-button sc-right">' + l((n(51) || t && t.$t || r).call(o, "OK", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n"
            },
            3: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '  <h1 class="g-modal-title-h1">' + l((n(51) || t && t.$t || r).call(o, "Please verify your age", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h1>\n\n  <p>" + l((n(51) || t && t.$t || r).call(o, '<strong class="ageGateContent__followeeUsername">[[username]]</strong> has determined that some of its content may be inappropriate for users under a certain age. To follow this profile, please confirm youâ€™re of the required age.', {
                    name: "$t",
                    hash: {
                        username: null != t ? t.followeeUsername : t
                    },
                    data: s
                })) + "</p>\n\n  <p>" + l((n(51) || t && t.$t || r).call(o, "This information will be saved on your profile.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</p>\n\n  <div class="ageGateContent__ageVerifyControls">\n    ' + l((n(53) || t && t.$view || r).call(o, n(151), {
                    name: "$view",
                    hash: {
                        key: "month",
                        blankText: (n(51) || t && t.$t || r).call(o, "Month", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        showBlank: !0,
                        label: (n(51) || t && t.$t || r).call(o, "Month", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "month",
                        className: "ageGateContent__ageVerifySelect",
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n    " + l((n(53) || t && t.$view || r).call(o, n(151), {
                    name: "$view",
                    hash: {
                        key: "year",
                        blankText: (n(51) || t && t.$t || r).call(o, "Year", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        showBlank: !0,
                        label: (n(51) || t && t.$t || r).call(o, "Year", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "year",
                        className: "ageGateContent__ageVerifySelect",
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n  </div>\n\n  " + l((n(53) || t && t.$view || r).call(o, n(76), {
                    name: "$view",
                    hash: {
                        size: "medium",
                        button: "save",
                        className: "ageGateContent__verifyAgeButton sc-button-cta",
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.isAgeRestricted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.isAgeUnknown : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2531: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h2 class="g-modal-title-h1 sc-truncate">' + u((o = null != (o = i.displayTitle || (null != t ? t.displayTitle : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "displayTitle",
                    hash: {},
                    data: s
                }) : o)) + "</h2>\n" + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        forceSquare: !0,
                        size: 500,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2532: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h2 class="g-modal-title-h1 sc-truncate">' + u((o = null != (o = i.displayTitle || (null != t ? t.displayTitle : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "displayTitle",
                    hash: {},
                    data: s
                }) : o)) + '</h2>\n<p class="imageSelect__hint">' + u((n(51) || t && t.$t || l).call(r, "For best results, upload images of at least 1000x1000 pixels. 2MB file-size limit.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</p>\n<div class="imageSelect__cropper">\n  ' + u((n(53) || t && t.$view || l).call(r, n(575), {
                    name: "$view",
                    hash: {
                        showRoundOverlay: null != t ? t.showRoundOverlay : t,
                        sizes: null != t ? t.cropSizes : t,
                        onCancel: null != t ? t.onCancel : t,
                        onSaveSuccess: null != t ? t.onSaveSuccess : t,
                        saveFile: null != t ? t.saveFile : t,
                        file: null != t ? t.file : t
                    },
                    data: s
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2533: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '  <div class="keyboardShortcuts__shortcutsGroup sc-clearfix">\n' + (null != (s = n.each.call(null != t ? t : {}, t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </div>\n"
            },
            2: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '      <dl class="' + c((o = null != (o = n.className || (null != t ? t.className : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "className",
                    hash: {},
                    data: a
                }) : o)) + '">\n        <dt>\n            <kbd>\n' + (null != (s = n.each.call(r, null != t ? t.keyName : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "            </kbd>\n        </dt>\n        <dd>" + c((o = null != (o = n.description || (null != t ? t.description : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "description",
                    hash: {},
                    data: a
                }) : o)) + "</dd>\n      </dl>\n"
            },
            3: function(e, t, n, i, a) {
                return '              <kbd class="sc-font">' + e.escapeExpression(e.lambda(t, t)) + "</kbd>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<h2 class="g-modal-title-h2">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(r, "Keyboard shortcuts", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h2>\n<div class="keyboardShortcuts__inner sc-clearfix">\n' + (null != (o = i.each.call(r, null != t ? t.shortcutsGroups : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2534: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<iframe id="premiumModalContent__iframe"\n        class="premiumModalContent__iframe"\n        name="premiumModalContent__iframe"\n        src="about:blank"\n        allowtransparency="true"\n        frameborder="no"\n        width="100%"></iframe>\n\n<div class="premiumModalContent__failed">\n  <div class="premiumModalContent__failedMessage sc-type-h1"></div>\n</div>\n\n<div class="premiumModalContent__processing">\n  <div class="premiumModalContent__processing-headline sc-type-h1">' + l((n(51) || t && t.$t || r).call(o, "Processing paymentâ€¦", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</div>\n  <p>" + l((n(51) || t && t.$t || r).call(o, "This may take up to one minute.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</p>\n</div>\n<div class="premiumModalContent__external">\n  <div class="premiumModalContent__external-headline sc-type-h1">' + l((n(51) || t && t.$t || r).call(o, "Waiting for external serviceâ€¦", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</div>\n  <p>" + l((n(51) || t && t.$t || r).call(o, 'If nothing happens, please check if your browser has blocked a pop-up window. <br>You can <a class="premiumModalContent__external-link" href="">open the pop-up</a> again.', {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</p>\n</div>\n"
            },
            useData: !0
        })
    },
    2539: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r, l, u = "";
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = "function" == typeof r ? r.call(null != t ? t : {}, l) : r, n(51) || (o = i.blockHelperMissing.call(t, o, l)), null != o && (u += o), u
            },
            2: function(e, t, n, i, a) {
                return "    <p>Every time you see or hear an ad, artists get paid. They're how we keep SoundCloud free for listeners.</p>\n    <p>Want to lose the interruptions? Go ad-free and continue to support your favorite artists with SoundCloud Go.</p>\n"
            },
            4: function(e, t, i, a, s) {
                var o, r, l, u = "";
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : i.helperMissing, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = "function" == typeof r ? r.call(null != t ? t : {}, l) : r, n(51) || (o = i.blockHelperMissing.call(t, o, l)), null != o && (u += o), u
            },
            5: function(e, t, n, i, a) {
                return "    <p>Every time you see or hear an ad, artists get paid.</p>\n    <p>Occasional ads allow us to continue to support artists and keep SoundCloud free for listeners.</p>\n"
            },
            7: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '    <a class="whyAds__upsell sc-button sc-button-cta" href="' + l((n(58) || t && t.$route || r).call(o, "consumerPremium", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n      ' + l((n(51) || t && t.$t || r).call(o, "Go ad-free", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n    </a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h1 class="g-modal-title-h2">\n  ' + u((n(51) || t && t.$t || l).call(r, "Why ads?", {
                    name: "$t",
                    hash: {
                        _comment: "Header text"
                    },
                    data: s
                })) + "\n</h1>\n" + (null != (o = i["if"].call(r, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(4, s, 0),
                    data: s
                })) ? o : "") + '<div class="whyAds__actions">\n  <button class="whyAds__close sc-button">\n    ' + u((n(51) || t && t.$t || l).call(r, "OK", {
                    name: "$t",
                    hash: {
                        _comment: "button"
                    },
                    data: s
                })) + "\n  </button>\n" + (null != (o = i["if"].call(r, null != t ? t.showUpsell : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2565: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression,
                    d = e.lambda;
                return '      <a class="playControlsPanel__landingPage sc-pending-dark" href="' + c((o = null != (o = n.landingPage || (null != t ? t.landingPage : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "landingPage",
                    hash: {},
                    data: a
                }) : o)) + '" target="_blank">\n        <img class="playControlsPanel__adVisual g-opacity-transition" src="' + c((o = null != (o = n.adVisual || (null != t ? t.adVisual : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "adVisual",
                    hash: {},
                    data: a
                }) : o)) + '" height="' + c(d(null != (s = null != t ? t._options : t) ? s.height : s, t)) + '" width="' + c(d(null != (s = null != t ? t._options : t) ? s.width : s, t)) + '">\n      </a>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="playControlsPanel__inner">\n  <div class="playControlsPanel__adHeader g-dark playControlsPanel__info sc-media-image">' + u((n(51) || t && t.$t || l).call(r, "Advertisement", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n  <div class="playControlsPanel__adHeader g-dark playControlsPanel__whyAds">' + u((n(51) || t && t.$t || l).call(r, "Why ads?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n  <div class="playControlsPanel__adDisplay">\n' + (null != (o = i["if"].call(r, null != t ? t.adVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  </div>\n  <div class="playControlsPanel__skip g-dark">\n    <span class="playControlsPanel__skipButton sc-media-right"></span>\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    2566: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '      <div class="playControls__queue">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1594), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n      </div>\n"
            },
            3: function(e, t, i, a, s) {
                return '        <div class="playControls__repeat">\n          ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1033), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n        </div>\n"
            },
            5: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1581), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n"
            },
            7: function(e, t, i, a, s) {
                return '        <div class="playControls__volume">\n          ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1587), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="playControls__inner">\n  <div class="playControls__wrapper l-container l-fullwidth">\n' + (null != (o = i["if"].call(r, null != t ? t.showQueue : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '    <div class="playControls__bg"></div>\n    <div class="playControls__elements">\n      ' + u((n(53) || t && t.$view || l).call(r, n(1034), {
                    name: "$view",
                    hash: {
                        className: "playControls__icon playControls__prev"
                    },
                    data: s
                })) + "\n      " + u((n(53) || t && t.$view || l).call(r, n(1584), {
                    name: "$view",
                    hash: {
                        className: "playControls__icon playControls__play"
                    },
                    data: s
                })) + "\n      " + u((n(53) || t && t.$view || l).call(r, n(1034), {
                    name: "$view",
                    hash: {
                        type: "next",
                        className: "playControls__icon playControls__next"
                    },
                    data: s
                })) + "\n\n" + (null != (o = i["if"].call(r, null != t ? t.showRepeat : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n      <div class="playControls__timeline">\n        ' + u((n(53) || t && t.$view || l).call(r, n(1586), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n      </div>\n\n" + (null != (o = i["if"].call(r, null != t ? t.showCastControl : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i.unless.call(r, null != t ? t.isMobile : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n      <div class="playControls__soundBadge">\n        ' + u((n(53) || t && t.$view || l).call(r, n(1585), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + '\n      </div>\n    </div>\n    <div class="playControls__panel">\n      ' + u((n(53) || t && t.$view || l).call(r, n(1582), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2567: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '  <a href="' + c((n(58) || t && t.$route || u).call(l, "listen", null != t ? t.sound : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="playbackSoundBadge__avatar sc-media-image" tabIndex="-1">\n    ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        size: 30,
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t.sound : t) ? o.resource_id : o
                    },
                    data: s
                })) + '\n  </a>\n  <div class="playbackSoundBadge__titleContextContainer">\n' + (null != (o = i["if"].call(l, null != t ? t.adPlaying : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.program(4, s, 0),
                    data: s
                })) ? o : "") + '    <a href="' + c((n(58) || t && t.$route || u).call(l, "listen", null != t ? t.sound : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="playbackSoundBadge__title sc-truncate" title="' + c((r = null != (r = i.soundTitle || (null != t ? t.soundTitle : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "soundTitle",
                    hash: {},
                    data: s
                }) : r)) + '">\n      ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        visible: null != t ? t.soundTitle : t,
                        screenreader: null != t ? t.fullSoundTitle : t
                    },
                    data: s
                })) + '\n    </a>\n  </div>\n  <div class="playbackSoundBadge__actions">\n' + (null != (o = i["if"].call(l, null != t ? t.showLike : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(l, null != t ? t.showQueue : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </button>\n"
            },
            2: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function";
                return '      <span class="playbackSoundBadge__context sc-text-light sc-truncate" title="' + (null != (o = null != (o = n.contextText || (null != t ? t.contextText : t)) ? o : l, s = typeof o === u ? o.call(r, {
                    name: "contextText",
                    hash: {},
                    data: a
                }) : o) ? s : "") + '">' + (null != (o = null != (o = n.contextText || (null != t ? t.contextText : t)) ? o : l, s = typeof o === u ? o.call(r, {
                    name: "contextText",
                    hash: {},
                    data: a
                }) : o) ? s : "") + "</span>\n"
            },
            4: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function";
                return '      <a href="" class="playbackSoundBadge__context sc-link-light sc-truncate" title="' + (null != (o = null != (o = n.contextText || (null != t ? t.contextText : t)) ? o : l, s = typeof o === u ? o.call(r, {
                    name: "contextText",
                    hash: {},
                    data: a
                }) : o) ? s : "") + '">' + (null != (o = null != (o = n.contextText || (null != t ? t.contextText : t)) ? o : l, s = typeof o === u ? o.call(r, {
                    name: "contextText",
                    hash: {},
                    data: a
                }) : o) ? s : "") + "</a>\n"
            },
            6: function(e, t, i, a, s) {
                var o;
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(317), {
                    name: "$view",
                    hash: {
                        disabled: null != t ? t.adPlaying : t,
                        className: "playbackSoundBadge__like",
                        icon_only: !0,
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t.sound : t) ? o.id : o
                    },
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, a, s) {
                return '      <button class="playbackSoundBadge__showQueue sc-button sc-button-queue sc-button-nostyle sc-button-small sc-button-icon">\n        ' + e.escapeExpression((n(247) || t && t["$t-pending"] || i.helperMissing).call(null != t ? t : {}, "Next up", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + "\n      </button>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.hasData : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2568: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                return '<div class="playbackTimeline__timePassed"></div>\n<div class="playbackTimeline__progressWrapper" role="progressbar">\n  <div class="playbackTimeline__progressBackground"></div>\n  <div class="playbackTimeline__progressBar"></div>\n  <div class="playbackTimeline__progressHandle sc-ir"></div>\n</div>\n<div class="playbackTimeline__duration"></div>\n<div class="playbackTimeline__snippetIndicator">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(390), {
                    name: "$view",
                    hash: {
                        size: "small",
                        override: "snippet"
                    },
                    data: s
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2569: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="sc-visuallyhidden">' + u((n(51) || t && t.$t || l).call(r, "Volume", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n<div class="volume__iconWrapper">\n  <button class="volume__button volume__speakerIcon sc-ir">\n    ' + u((n(51) || t && t.$t || l).call(r, "Toggle mute", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </button>\n</div>\n\n<div class="sc-hidden" id="volume__sliderDescription">' + u((n(51) || t && t.$t || l).call(r, "Use shift and the arrow up and down keys to change the volume.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n<div class="volume__sliderWrapper" role="slider" aria-valuemin="0" aria-valuemax="1" aria-label="Volume" aria-valuenow="' + u((o = null != (o = i.volumeLevel || (null != t ? t.volumeLevel : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "volumeLevel",
                    hash: {},
                    data: s
                }) : o)) + '">\n  <div class="volume__sliderBackground"></div>\n  <div class="volume__sliderProgress"></div>\n  <div class="volume__sliderHandle"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    2570: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="queueFallback__heading sc-type-medium">\n  ' + l((n(247) || t && t["$t-pending"] || r).call(o, "Station autoplay", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + '\n  <span class="queueFallback__toggle">\n    ' + l((n(53) || t && t.$view || r).call(o, n(270), {
                    name: "$view",
                    hash: {
                        key: "toggle",
                        isActive: null != t ? t.isActive : t,
                        size: "small",
                        label: (n(247) || t && t["$t-pending"] || r).call(o, "Enable autoplay", {
                            name: "$t-pending",
                            hash: {},
                            data: s
                        })
                    },
                    data: s
                })) + '\n  </span>\n</div>\n<div class="queueFallback__subheading sc-font-light">\n  ' + l((n(247) || t && t["$t-pending"] || r).call(o, "New music based on whatâ€™s playing", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2571: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression,
                    c = e.lambda;
                return '<div class="queueItemView__artwork">\n  ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        lazyLoading: !1,
                        size: 30,
                        resource_type: null != (o = null != t ? t.sound : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.sound : t) ? o._resource_id : o
                    },
                    data: s
                })) + '\n</div>\n<div class="queueItemView__details sc-truncate">\n  <div class="queueItemView__user sc-truncate">' + u(c(null != (o = null != (o = null != t ? t.sound : t) ? o.user : o) ? o.username : o, t)) + '</div>\n  <div class="queueItemView__title sc-truncate">' + u(c(null != (o = null != t ? t.sound : t) ? o.title : o, t)) + '</div>\n</div>\n<div class="queueItemView__altButtons">\n  ' + u((n(53) || t && t.$view || l).call(r, n(1002), {
                    name: "$view",
                    hash: {
                        responsive: !1,
                        icon_only: !0,
                        noStyle: !0,
                        resource_id: null != t ? t._resource_id : t,
                        className: "queueItemView__remove queueItemView__action"
                    },
                    data: s
                })) + "\n  " + u((n(53) || t && t.$view || l).call(r, n(317), {
                    name: "$view",
                    hash: {
                        responsive: !1,
                        noStyle: !0,
                        icon_only: !0,
                        resource_type: "sound",
                        resource_id: null != (o = null != t ? t.sound : t) ? o.id : o,
                        className: "queueItemView__like queueItemView__action"
                    },
                    data: s
                })) + "\n</div>\n" + u((n(53) || t && t.$view || l).call(r, n(593), {
                    name: "$view",
                    hash: {
                        zIndexLevel: "header-menu",
                        cornerStyle: "round",
                        actions: null != t ? t.overflowActions : t,
                        noStyle: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: null != t ? t._resource_type : t,
                        ContentViewClass: null != t ? t.OverflowListView : t,
                        className: "queueItemView__more queueItemView__action"
                    },
                    data: s
                })) + '\n<div draggable="true" class="queueItemView__dragHandle queueItemView__action"></div>\n'
            },
            useData: !0
        })
    },
    2572: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<div class="queue__panel">\n  <div class="queue__title sc-font-light sc-type-medium">' + l((n(247) || t && t["$t-pending"] || r).call(o, "Next up", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + "</div>\n  " + l((n(53) || t && t.$view || r).call(o, n(1033), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + '\n\n  <button class="queue__shuffle sc-ir">' + l((n(247) || t && t["$t-pending"] || r).call(o, "Shuffle", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + '</button>\n  <button class="queue__clear sc-button sc-button-medium sc-button-icon sc-button-nostyle sc-button-delete sc-ir">' + l((n(247) || t && t["$t-pending"] || r).call(o, "Clear queue", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + '</button>\n  <button class="queue__hide sc-button sc-button-nostyle sc-ir">' + l((n(247) || t && t["$t-pending"] || r).call(o, "Hide queue", {
                    name: "$t-pending",
                    hash: {},
                    data: s
                })) + '</button>\n</div>\n<div class="queue__scrollable g-scrollable">\n  <div class="queue__scrollableInner g-scrollable-inner">\n    <div class="queue__itemsHeight">\n      <div class="queue__itemsContainer"></div>\n    </div>\n  </div>\n</div>\n<div class="queue__dragCover"></div>\n'
            },
            useData: !0
        })
    },
    2573: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <a href="" class="compactTrackList__moreLink sc-link-light sc-border-light">\n  ' + e.escapeExpression((n(186) || t && t.$tp || i.helperMissing).call(null != t ? t : {}, null != t ? t.trackCount : t, "View all tracks", "View %d tracks", {
                    name: "$tp",
                    hash: {},
                    data: s
                })) + "\n  </a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="compactTrackList__listWrapper">\n  <div class="compactTrackList__listContainer"></div>\n</div>\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.hasMoreTracks : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2575: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                return '<div class="createPlaylistSounds__listContainer sc-clearfix"></div>\n\n<div class="createPlaylistSounds__placeholdersContainer"></div>\n'
            },
            useData: !0
        })
    },
    2576: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <div class="createPlaylist__savedContainer">\n      ' + u((n(53) || t && t.$view || l).call(r, n(277), {
                    name: "$view",
                    hash: {
                        compact: !0,
                        show_private: !0,
                        resource_type: null != (o = null != t ? t.playlist : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t.playlist : t) ? o.resource_id : o
                    },
                    data: s
                })) + '\n\n      <div class="createPlaylist__goToPlaylistContainer">\n        <a href="' + u((n(58) || t && t.$route || l).call(r, "playlist", null != t ? t.playlist : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="createPlaylist__goToPlaylist sc-button sc-button-medium">' + u((n(51) || t && t.$t || l).call(r, "Go to playlist", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</a>\n      </div>\n    </div>\n";
            },
            3: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return "    " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        autoFocus: !0,
                        className: "createPlaylist__title",
                        field: "title",
                        label: (n(51) || t && t.$t || r).call(o, "Playlist title", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_id: null != t ? t._resource_id : t,
                        Form: n(231)
                    },
                    data: s
                })) + '\n\n    <div class="createPlaylist__buttonWrapper">\n      ' + l((n(51) || t && t.$t || r).call(o, "Playlist will be [[[visbilityOptions]]]", {
                    name: "$t",
                    hash: {
                        visbilityOptions: (n(53) || t && t.$view || r).call(o, n(196), {
                            name: "$view",
                            hash: {
                                className: "createPlaylist__sharing sc-media-additional",
                                field: "sharing",
                                resource_id: null != t ? t._resource_id : t,
                                Form: n(231)
                            },
                            data: s
                        })
                    },
                    data: s
                })) + "\n      " + l((n(53) || t && t.$view || r).call(o, n(76), {
                    name: "$view",
                    hash: {
                        className: "createPlaylist__saveButton sc-button-cta",
                        size: "medium",
                        button: "save",
                        resource_id: null != t ? t._resource_id : t,
                        Form: n(231)
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            5: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <section class="g-modal-section createPlaylist__suggestionsSection">\n    <h2 class="createPlaylist__suggestionsHeading">\n      ' + u((n(51) || t && t.$t || l).call(r, "Looking for more tracks?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n" + (null != (o = i["if"].call(r, null != t ? t.areAllSoundsMine : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.program(8, s, 0),
                    data: s
                })) ? o : "") + "    </h2>\n\n    " + u((n(53) || t && t.$view || l).call(r, n(1600), {
                    name: "$view",
                    hash: {
                        field: "sounds",
                        resource_id: null != t ? t._resource_id : t,
                        Form: n(231)
                    },
                    data: s
                })) + "\n  </section>\n"
            },
            6: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add some of your own.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Add some from your likes.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<section class="g-modal-section sc-clearfix">\n' + (null != (o = i["if"].call(r, null != t ? t.playlist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(1596), {
                    name: "$view",
                    hash: {
                        isSaved: null != t ? t.isSaved : t,
                        field: "sounds",
                        resource_id: null != t ? t._resource_id : t,
                        Form: n(231)
                    },
                    data: s
                })) + "\n</section>\n\n" + (null != (o = i["if"].call(r, null != t ? t.showSuggestions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2577: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t.releaseData : t) ? s.year : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.program(4, a, 0),
                    data: a
                })) ? s : ""
            },
            2: function(e, t, n, i, a) {
                var s, o = e.lambda,
                    r = e.escapeExpression;
                return "    " + r(o(null != (s = null != t ? t.releaseData : t) ? s.title : s, t)) + '&nbsp;Â·&nbsp;<span class="sc-font-tabular-light">' + r(o(null != (s = null != t ? t.releaseData : t) ? s.year : s, t)) + "</span>\n"
            },
            4: function(e, t, n, i, a) {
                var s;
                return "    " + e.escapeExpression(e.lambda(null != (s = null != t ? t.releaseData : t) ? s.title : s, t)) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.releaseData : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2578: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return l((n(53) || t && t.$view || r).call(o, n(277), {
                    name: "$view",
                    hash: {
                        show_upload_time: !1,
                        show_duration: !1,
                        show_private: !1,
                        show_ministats: !1,
                        show_action_buttons: !1,
                        compact: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n\n<div class="createPlaylistSuggestion__addContainer">\n  <button class="createPlaylistSuggestion__add sc-button sc-button-medium sc-button-blue">' + l((n(51) || t && t.$t || r).call(o, "Add to playlist", {
                    name: "$t",
                    hash: {
                        _comment: "Add to the playlist",
                        _context: "definite"
                    },
                    data: s
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2591: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return null != (o = (n(51) || t && t.$t || l).call(r, {
                    name: "$t",
                    hash: {
                        promotedByRoute: (n(58) || t && t.$route || l).call(r, "user", null != t ? t.promoted_by : t, {
                            name: "$route",
                            hash: {},
                            data: s
                        }),
                        username: null != (o = null != t ? t.promoted_by : t) ? o.username : o
                    },
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : ""
            },
            2: function(e, t, n, i, a) {
                return '      Promoted by <a href="[[promotedByRoute]]" class="promotedBadge__promoter sc-link-light" title="Visit [[username]]â€™s profile">[[username]]</a>\n'
            },
            4: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Promoted", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<span class="sc-promoted-icon sc-promoted-icon-' + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.size : s, t)) + ' sc-text-light">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t.promoted_by : t) ? s.username : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(4, a, 0),
                    data: a
                })) ? s : "") + "</span>\n"
            },
            useData: !0
        })
    },
    2614: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '      <li class="embedPanel__tab">\n        <a class="embedPanel__tabLink sc-ir mini" href="" data-type="html5-html5_mini">\n          ' + e.escapeExpression((n(96) || t && t.$a11y || r).call(o, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || r).call(o, "Mini Embed", {
                            name: "$t",
                            hash: {},
                            data: s
                        })
                    },
                    data: s
                })) + "\n        </a>\n      </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<h3 class="sc-visuallyhidden">' + u((n(51) || t && t.$t || l).call(r, "Customize your player", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h3>\n\n<div class="g-modal-section">\n  <ul class="embedPanel__tabs sc-list-nostyle sc-clearfix">\n    <li class="embedPanel__tab">\n      <a class="embedPanel__tabLink visual active" href="" data-type="html5-visual" title="Visual embed">\n        ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        size: 100
                    },
                    data: s
                })) + '\n      </a>\n    </li>\n    <li class="embedPanel__tab">\n      <a class="embedPanel__tabLink sc-ir classic" href="" data-type="html5-html5" title="Classic embed">\n        ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o,
                        size: 50
                    },
                    data: s
                })) + "\n      </a>\n    </li>\n" + (null != (o = i["if"].call(r, null != t ? t.showMiniWidget : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  </ul>\n</div>\n\n<div class="g-modal-section">\n  <div class="embedPanel__html5">\n    ' + u((n(53) || t && t.$view || l).call(r, n(1786), {
                    name: "$view",
                    hash: {
                        key: "html5",
                        type: "visual",
                        share_type: null != (o = null != t ? t._options : t) ? o.share_type : o,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + "\n  </div>\n\n</div>\n"
            },
            useData: !0
        })
    },
    2615: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '  <input type="text" value="0:00" class="shareLink__fromField sc-input">\n  ' + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        className: "shareLink__from",
                        label: (n(51) || t && t.$t || r).call(o, "at", {
                            name: "$t",
                            hash: {
                                _comment: "share a position of a track (Eye of the Tiger 'at' 01:20min)"
                            },
                            data: s
                        }),
                        name: "share_from"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<label for="shareLink__field" class="sc-visuallyhidden">' + c((n(51) || t && t.$t || u).call(l, "Link", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</label>\n<input type="text" value="' + c((r = null != (r = i.share_url_link || (null != t ? t.share_url_link : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "share_url_link",
                    hash: {},
                    data: s
                }) : r)) + '" class="shareLink__field sc-input" id="shareLink__field">\n' + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.showPositionOption : o, {
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
    2616: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                return '<section class="g-modal-section sc-clearfix sendMessageContent">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(488), {
                    name: "$view",
                    hash: {
                        showTitle: !1,
                        share_type: null != t ? t.share_type : t,
                        attachments: null != t ? t.attachments : t
                    },
                    data: s
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    2617: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<section class="g-modal-section">\n  <h2 class="g-modal-title-h2">' + l((n(51) || t && t.$t || r).call(o, "Private Share", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h2>\n  <div class="privateShare__link">\n    ' + l((n(53) || t && t.$view || r).call(o, n(624), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n  </div>\n  <div class="privateShare__hint privateShare__hintHint">' + l((n(51) || t && t.$t || r).call(o, "This [[audibleType]] is set to private and can only be shared using the secret link above.<br>You can reset the secret link if you want to revoke access.", {
                    name: "$t",
                    hash: {
                        audibleType: null != t ? t.audibleType : t
                    },
                    data: s
                })) + '</div>\n  <div class="privateShare__hint privateShare__confirmHint sc-orange">' + l((n(51) || t && t.$t || r).call(o, "Are you sure you want to reset this link?<br> It will not be possible to access this [[audibleType]] from any existing shares.", {
                    name: "$t",
                    hash: {
                        audibleType: null != t ? t.audibleType : t
                    },
                    data: s
                })) + '</div>\n  <div class="privateShare__hint privateShare__failed g-input-validation">' + l((n(51) || t && t.$t || r).call(o, "There was a problem resetting the link. Please try again later.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</div>\n  <div class="privateShare__buttons">\n    <button class="privateShare__reset sc-button">' + l((n(51) || t && t.$t || r).call(o, "Reset secret link", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n    <div class="privateShare__confirmButtons">\n      <button class="privateShare__resetConfirm sc-button sc-button-cta">' + l((n(51) || t && t.$t || r).call(o, "Reset", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n      <button class="privateShare__resetCancel sc-button sc-button-nostyle">' + l((n(51) || t && t.$t || r).call(o, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n    </div>\n  </div>\n  <div class="privateShare__successful">' + l((n(51) || t && t.$t || r).call(o, "The secret link has been successfully reset.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</div>\n</section>\n"
            },
            useData: !0
        })
    },
    2618: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o;
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(314), {
                    name: "$view",
                    hash: {
                        large: !0,
                        tabs: null != t ? t.tabs : t,
                        share_type: null != (o = null != t ? t._options : t) ? o.share_type : o,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2619: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s, o, r) {
                var l;
                return '    <li class="socialButtonsPanel__shareButton">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, t, {
                    name: "$view",
                    hash: {
                        share_type: null != (l = null != r[1] ? r[1]._options : r[1]) ? l.share_type : l,
                        resource_type: null != r[1] ? r[1]._resource_type : r[1],
                        resource_id: null != r[1] ? r[1]._resource_id : r[1]
                    },
                    data: s
                })) + "\n    </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a, s, o) {
                var r;
                return '<ul class="sc-list-nostyle sc-clearfix">\n' + (null != (r = n.each.call(null != t ? t : {}, null != t ? t.buttons : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0, s, o),
                    inverse: e.noop,
                    data: a
                })) ? r : "") + "</ul>\n"
            },
            useData: !0,
            useDepths: !0
        })
    },
    2620: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <section class="g-modal-section sc-clearfix">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(99), {
                    name: "$view",
                    hash: {
                        hide_footer: !0,
                        hide_comments: !0,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </section>\n"
            },
            3: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1650), {
                    name: "$view",
                    hash: {
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            5: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <section class="g-modal-section sc-clearfix">\n' + (null != (o = i["if"].call(r, null != t ? t.isAudible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n    " + u((n(53) || t && t.$view || l).call(r, n(625), {
                    name: "$view",
                    hash: {
                        share_type: null != (o = null != t ? t._options : t) ? o.share_type : o,
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + '\n\n    <section class="shareContent__link">\n      ' + u((n(53) || t && t.$view || l).call(r, n(624), {
                    name: "$view",
                    hash: {
                        share_type: null != (o = null != t ? t._options : t) ? o.share_type : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </section>\n  </section>\n"
            },
            6: function(e, t, i, a, s) {
                return '      <h2 class="shareContent__heading g-modal-title-h2">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Share", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</h2>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<h1 class="sc-visuallyhidden">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(r, "Share &ldquo;[[title]]&rdquo;", {
                    name: "$t",
                    hash: {
                        title: null != t ? t.title : t
                    },
                    data: s
                })) + "</h1>\n\n" + (null != (o = i["if"].call(r, null != t ? t.isAudible : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(r, null != t ? t.isPrivateShare : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(5, s, 0),
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2621: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<a href="' + c((o = null != (o = i.appstore_url || (null != t ? t.appstore_url : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "appstore_url",
                    hash: {},
                    data: s
                }) : o)) + '" target="_blank" class="mobileAppsButtons__button mobileAppsButtons__appStore g-appStoreButton g-appStoreButton__appStore sc-ir">\n  ' + c((n(51) || t && t.$t || l).call(r, "Download on the App Store", {
                    name: "$t",
                    hash: {
                        _comment: "Text on a app download button"
                    },
                    data: s
                })) + '\n</a>\n<a href="' + c((o = null != (o = i.google_play_url || (null != t ? t.google_play_url : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "google_play_url",
                    hash: {},
                    data: s
                }) : o)) + '" target="_blank" class="mobileAppsButtons__button mobileAppsButtons__googlePlay g-appStoreButton g-appStoreButton__googlePlay sc-ir">\n  ' + c((n(51) || t && t.$t || l).call(r, "Get it on Google Play", {
                    name: "$t",
                    hash: {
                        _comment: "Text on a app download button"
                    },
                    data: s
                })) + "\n</a>\n"
            },
            useData: !0
        })
    },
    2623: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1001), {
                    name: "$view",
                    hash: {
                        showRestrictedTooltip: null != t ? t.managed_by_feeds : t,
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        className: "soundActionsOwner__edit"
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1398), {
                    name: "$view",
                    hash: {
                        showDisabled: null != t ? t.managed_by_feeds : t,
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        className: "soundActionsOwner__delete"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.showEdit : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.showDelete : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2624: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '  <div class="sc-button-group sc-button-group-' + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '">\n' + (null != (s = n.each.call(null != t ? t : {}, null != t ? t.action_buttons : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </div>\n"
            },
            2: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, null != t ? t.ButtonView : t, {
                    name: "$view",
                    hash: {
                        args: null != t ? t.buttonArgs : t
                    },
                    data: s
                })) + "\n"
            },
            4: function(e, t, n, i, a) {
                var s, o, r = e.lambda,
                    l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = n.helperMissing,
                    d = "function";
                return '  <div class="sc-button-group sc-button-group-' + l(r(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '">\n    <a href="' + l((o = null != (o = n.safePurchaseUrl || (null != t ? t.safePurchaseUrl : t)) ? o : c, typeof o === d ? o.call(u, {
                    name: "safePurchaseUrl",
                    hash: {},
                    data: a
                }) : o)) + '" target="_blank" title="' + l((o = null != (o = n.purchase_url || (null != t ? t.purchase_url : t)) ? o : c, typeof o === d ? o.call(u, {
                    name: "purchase_url",
                    hash: {},
                    data: a
                }) : o)) + '"\n       class="soundActions__purchaseLink sc-truncate sc-buylink sc-buylink-responsive sc-buylink-' + l(r(null != (s = null != t ? t._options : t) ? s.size : s, t)) + " sc-buylink-" + l((o = null != (o = n.buy_type || (null != t ? t.buy_type : t)) ? o : c, typeof o === d ? o.call(u, {
                    name: "buy_type",
                    hash: {},
                    data: a
                }) : o)) + '">' + l((o = null != (o = n.purchase_title || (null != t ? t.purchase_title : t)) ? o : c, typeof o === d ? o.call(u, {
                    name: "purchase_title",
                    hash: {},
                    data: a
                }) : o)) + "</a>\n  </div>\n"
            },
            6: function(e, t, i, a, s) {
                var o;
                return '  <div class="soundActions__mine sc-button-group">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1668), {
                    name: "$view",
                    hash: {
                        showDelete: null != t ? t.show_delete : t,
                        showEdit: null != t ? t.show_edit : t,
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t.action_buttons : t) ? s.length : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_buy_button : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.expand_owner_buttons : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2625: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '<span title="' + c((o = null != (o = n.actionDescription || (null != t ? t.actionDescription : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "actionDescription",
                    hash: {},
                    data: a
                }) : o)) + '" class="actorUser__username sc-ministats sc-ministats-small sc-ministats-' + c(e.lambda(null != (s = null != t ? t._options : t) ? s.actionType : s, t)) + 's">\n  ' + c((o = null != (o = n.username || (null != t ? t.username : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "username",
                    hash: {},
                    data: a
                }) : o)) + "\n</span>\n"
            },
            useData: !0
        })
    },
    2626: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <div class="addToPlaylistItem__managed g-flex-row-centered sc-type-light">\n    ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Disabled", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + ' <span class="addToPlaylistItem__hint hintButton sc-button sc-button-small">?</span>\n  </div>\n'
            },
            3: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '  <div class="addToPlaylistItem__actions g-flex-row-centered">\n' + (null != (o = i["if"].call(r, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(1397), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.id : t,
                        soundIds: null != (o = null != t ? t._options : t) ? o.soundIds : o
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            4: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(404) || t && t.$privateLabel || i.helperMissing).call(null != t ? t : {}, {
                    name: "$privateLabel",
                    hash: {
                        className: "addToPlaylistItem__private sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<a href="' + c((n(58) || t && t.$route || u).call(l, "playlist", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="addToPlaylistItem__image" title="' + c((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + '">\n  ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        size: 50,
                        resource_id: null != t ? t._resource_id : t,
                        resource_type: "playlist"
                    },
                    data: s
                })) + '\n</a>\n\n<div class="addToPlaylistItem__content">\n  <h3 class="addToPlaylistItem__title sc-truncate"><a href="' + c((n(58) || t && t.$route || u).call(l, "playlist", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="addToPlaylistItem__titleLink sc-link-dark" title="' + c((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + '"}}>' + c((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + '</a></h3>\n  <div class="addToPlaylistItem__data">\n    <span title="' + c((r = null != (r = i.trackCountTitle || (null != t ? t.trackCountTitle : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "trackCountTitle",
                    hash: {},
                    data: s
                }) : r)) + '" class="addToPlaylistItem__count sc-ministats sc-ministats-small sc-ministats-sounds">\n      ' + c(e.lambda(null != (o = null != t ? t.tracks : t) ? o.length : o, t)) + "\n    </span>\n  </div>\n</div>\n\n" + (null != (o = i["if"].call(l, null != t ? t.isManagedByFeeds : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2627: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '<form onsubmit="return false">\n  ' + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        clearButton: !0,
                        autoSelectAll: !0,
                        autoFocus: !0,
                        placeholder: (n(51) || t && t.$t || r).call(o, "Filter playlists", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        updateOn: "input",
                        field: "term",
                        resource_id: null != t ? t.formId : t,
                        Form: null != t ? t.FilterForm : t
                    },
                    data: s
                })) + '\n  <div class="addToPlaylistList__list"></div>\n</form>\n'
            },
            useData: !0
        })
    },
    2628: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o;
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(314), {
                    name: "$view",
                    hash: {
                        large: !0,
                        activeTabIndex: null != t ? t.activeTabIndex : t,
                        tabs: null != t ? t.tabs : t,
                        formId: null != (o = null != t ? t._options : t) ? o.formId : o,
                        soundIds: null != (o = null != t ? t._options : t) ? o.soundIds : o
                    },
                    data: s
                })) + "\n"
            },
            useData: !0
        })
    },
    2629: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o;
                return '<section class="g-modal-section sc-clearfix">\n  ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1671), {
                    name: "$view",
                    hash: {
                        fullPageList: !1,
                        soundIds: null != (o = null != t ? t._options : t) ? o.soundIds : o
                    },
                    data: s
                })) + "\n</section>\n"
            },
            useData: !0
        })
    },
    2630: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.isManagedByFeeds : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isMonetizable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.program(6, a, 0),
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isGeoblocked : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.hasScheduledPrivacy : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            2: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "restricted",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            4: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "monetizable",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            6: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isMonetizablePending : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            7: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "monetizable-pending",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  "
            },
            9: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "geoblocked",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            11: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "scheduled",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            13: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(168), {
                    name: "$view",
                    hash: {
                        type: "private",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n.unless.call(o, null != (s = null != t ? t._options : t) ? s.showPrivateOnly : s, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2631: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return '<h1 class="g-modal-title-h1">' + d((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + "</h1>\n<p>" + d((r = null != (r = i.text || (null != t ? t.text : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "text",
                    hash: {},
                    data: s
                }) : r)) + '</p>\n<div class="deleteAudible__buttons">\n  <button type="reset" class="sc-button sc-button-nostyle sc-button-medium">' + d((n(51) || t && t.$t || u).call(l, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n  <button type="submit" class="sc-button sc-button-medium">' + d(e.lambda(null != (o = null != t ? t._options : t) ? o.confirmButton : o, t)) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2633: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {},
                    r = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '<span title="' + u((s = null != (s = n.trackCountTitle || (null != t ? t.trackCountTitle : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "trackCountTitle",
                    hash: {},
                    data: a
                }) : s)) + '" class="sc-ministats sc-ministats-small sc-ministats-inverted sc-ministats-sounds">\n  ' + u((s = null != (s = n.trackCount || (null != t ? t.trackCount : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "trackCount",
                    hash: {},
                    data: a
                }) : s)) + "\n</span>\n"
            },
            useData: !0
        })
    },
    2634: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return l((n(51) || t && t.$t || r).call(o, "Repost this track to your profile and your followersâ€™ streams?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '<br/>\n<div class="repostAudibleForm__actions">\n  <button type="reset"\n          class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n  <button type="submit"\n          class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Yes", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2635: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(51) || t && t.$t || l).call(r, "This has been reposted to your SoundCloud profile. Would you like to share it with other friends as well?", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n<div class="shareRepostedAudible__buttons">\n  ' + u((n(53) || t && t.$view || l).call(r, n(625), {
                    name: "$view",
                    hash: {
                        resource_type: null != (o = null != t ? t._options : t) ? o.resource_type : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.resource_id : o
                    },
                    data: s
                })) + "\n</div>\n\n" + u((n(53) || t && t.$view || l).call(r, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(r, "Don't ask me again", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        name: "dontRemind"
                    },
                    data: s
                })) + '\n\n<button class="sc-button sc-button-small shareRepostedAudible__closeDialogButton">' + u((n(51) || t && t.$t || l).call(r, "Close", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n"
            },
            useData: !0
        })
    },
    2636: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o;
                return '  <div class="soundBadge__checkbox">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1363), {
                    name: "$view",
                    hash: {
                        field: "trackIds",
                        disabled: null != t ? t.isDisabled : t,
                        modelEditable: null != t ? t.isEditable : t,
                        modelId: null != t ? t._resource_id : t,
                        Form: null != (o = null != t ? t._options : t) ? o.CheckboxForm : o
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            3: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '  <a href="' + e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(r, null != t ? t.routeName : t, t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" ' + (null != (o = i["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ' class="soundBadge__avatarLink sc-media-image">\n'
            },
            4: function(e, t, n, i, a) {
                return 'rel="nofollow"'
            },
            6: function(e, t, n, i, a) {
                return '  <span class="soundBadge__avatarLink sc-media-image">\n'
            },
            8: function(e, t, i, a, s) {
                return '  <span class="soundBadge__infoItem">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1677), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </span>\n"
            },
            10: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        className: "soundBadge__tierIndicator",
                        variant: "smallArtwork",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            12: function(e, t, n, i, a) {
                return "  </a>\n"
            },
            14: function(e, t, n, i, a) {
                return "  </span>\n"
            },
            16: function(e, t, n, i, a) {
                return " soundBadge__contentWithoutStats"
            },
            18: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '    <p class="soundBadge__disabledReason g-icon-warning">' + u((n(51) || t && t.$t || l).call(r, "This track has been removed for copyright reasons.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n      <a href="https://copyright.soundcloud.com/disputes" target="_blank" ' + (null != (o = i["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ">\n        " + u((n(51) || t && t.$t || l).call(r, "More info", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n      </a>\n    </p>\n"
            },
            20: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_release_data : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.program(23, a, 0),
                    data: a
                })) ? s : ""
            },
            21: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(617), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            23: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_info_stats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, a, 0),
                    inverse: e.program(26, a, 0),
                    data: a
                })) ? s : ""
            },
            24: function(e, t, i, a, s) {
                return '    <div class="soundBadge__audibleInfoStats">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1687), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            26: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_ministats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(27, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            27: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(494), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n  "
            },
            29: function(e, t, i, a, s) {
                var o;
                return '      <div class="soundBadge__actions">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(276), {
                    name: "$view",
                    hash: {
                        expand_owner_buttons: null != (o = null != t ? t._options : t) ? o.expand_owner_buttons : o,
                        show_owner: null != t ? t.show_owner_buttons : t,
                        show_start_station: !1,
                        show_buy: !1,
                        show_download: null != t ? t.show_download : t,
                        show_share: null != t ? t.show_share_button : t,
                        show_add_to_playlist: null != t ? t.show_add_to_playlist_button : t,
                        show_repost: null != t ? t.show_repost_button : t,
                        show_like: null != t ? t.show_like_button : t,
                        show_play: null != t ? t.show_action_buttons : t,
                        icon_only: !0,
                        size: "small",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            31: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '      <div class="soundBadge__extra">\n        <div class="soundBadge__extraItem soundBadge__audibleAttributes sc-label-group">\n' + (null != (s = n["if"].call(o, null != t ? t.show_audible_attributes : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(32, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "        </div>\n" + (null != (s = n["if"].call(o, null != t ? t.show_duration : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(34, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.show_upload_time : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(36, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "      </div>\n"
            },
            32: function(e, t, i, a, s) {
                return "            " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1673), {
                    name: "$view",
                    hash: {
                        showPrivateOnly: null != t ? t.show_private_only : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            34: function(e, t, i, a, s) {
                return '          <div class="soundBadge__extraItem soundBadge__duration">\n            ' + e.escapeExpression((n(96) || t && t.$a11y || i.helperMissing).call(null != t ? t : {}, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != t ? t.duration_in_words : t,
                        visible: null != t ? t.duration : t
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            36: function(e, t, i, a, s) {
                return '          <div class="soundBadge__extraItem soundBadge__uploadTime sc-type-light">\n            ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(115), {
                    name: "$view",
                    hash: {
                        timestamp: null != t ? t.display_date : t
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return (null != (o = i["if"].call(r, null != t ? t.show_checkbox : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(r, null != t ? t.link_to_sound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.track_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        allowTrackFallback: null != t ? t.allowTrackFallback : t,
                        size: 50,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n" + (null != (o = i["if"].call(r, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.link_to_sound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.program(14, s, 0),
                    data: s
                })) ? o : "") + '<div class="sc-media-content soundBadge__content' + (null != (o = i.unless.call(r, null != t ? t.stats_visible : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '">\n  ' + u((n(53) || t && t.$view || l).call(r, n(321), {
                    name: "$view",
                    hash: {
                        className: "sc-type-h3",
                        noFollow: null != t ? t.noFollow : t,
                        truncate: !0,
                        show_snippet_indicator: !1,
                        show_visuals: !1,
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n\n" + (null != (o = i["if"].call(r, null != t ? t.is_blacklisted : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.program(20, s, 0),
                    data: s
                })) ? o : "") + '\n  <div class="soundBadge__additional">\n' + (null != (o = i["if"].call(r, null != t ? t.show_buttons : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(29, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.show_extra : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(31, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2637: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1043), {
                    name: "$view",
                    hash: {
                        target: null != t ? t.model : t,
                        time_to_show: null != t ? t.time_to_show : t,
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        soundType: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        actionType: null != (o = null != t ? t._options : t) ? o.actionType : o,
                        resource_id: null != t ? t.actor : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '    <div class="sound__artwork">\n' + (null != (o = i["if"].call(r, null != t ? t.is_playlist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? o : "") + "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(89), {
                    name: "$view",
                    hash: {
                        lazyLoading: null != t ? t.is_stream_context : t,
                        stretch: !0,
                        size: null != t ? t.cover_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n      </a>\n" + (null != (o = i["if"].call(r, null != t ? t.is_sound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    </div>\n"
            },
            4: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '      <a class="sound__coverArt" href="' + u((n(58) || t && t.$route || l).call(r, "playlist", null != t ? t.model : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n        <span class="coverArt__infoItem">\n          ' + u((n(53) || t && t.$view || l).call(r, n(618), {
                    name: "$view",
                    hash: {
                        showDuration: !1,
                        size: "small",
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n        </span>\n"
            },
            6: function(e, t, i, a, s) {
                return '      <a class="sound__coverArt" href="' + e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "listen", null != t ? t.model : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n'
            },
            8: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        className: "sound__tierIndicator",
                        variant: "smallArtwork",
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            10: function(e, t, n, i, a) {
                var s;
                return '      <div class="sound__header">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.is_listen_context : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.program(13, a, 0),
                    data: a
                })) ? s : "") + "      </div>\n"
            },
            11: function(e, t, i, a, s) {
                var o;
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(321), {
                    name: "$view",
                    hash: {
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        prefix: null != (o = null != t ? t._options : t) ? o.time_display_prefix : o,
                        timestamp: null != t ? t.time_to_show : t,
                        show_private: !1,
                        show_genre: null != t ? t.show_genre : t,
                        playbutton_size: "xlarge",
                        show_promoted: null != t ? t.show_promoted_in_title : t,
                        show_playbutton: !0,
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        tagName: "h1",
                        is_link: !1,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            13: function(e, t, i, a, s) {
                var o;
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(321), {
                    name: "$view",
                    hash: {
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        prefix: null != (o = null != t ? t._options : t) ? o.time_display_prefix : o,
                        timestamp: null != t ? t.time_to_show : t,
                        show_time: null != t ? t.show_time : t,
                        show_private: !0,
                        show_genre: null != t ? t.show_genre : t,
                        show_visuals: null != t ? t.show_visuals : t,
                        playbutton_size: "xlarge",
                        show_promoted: null != t ? t.show_promoted_in_title : t,
                        show_playbutton: !0,
                        show_actor_user: null != t ? t.show_actor_user : t,
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        className: "sc-type-h2",
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        actionType: null != (o = null != t ? t._options : t) ? o.actionType : o,
                        actorId: null != (o = null != t ? t._options : t) ? o.actorId : o
                    },
                    data: s
                })) + "\n"
            },
            15: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(496), {
                    name: "$view",
                    hash: {
                        waveformStyle: null != t ? t.waveform_style : t,
                        avatarSize: null != t ? t.waveform_avatar_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        show_comments: null != t ? t.show_comments : t
                    },
                    data: s
                })) + "\n"
            },
            17: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(402), {
                    name: "$view",
                    hash: {
                        darkCommentText: null != t ? t.waveform_dark_comment : t,
                        commentFlagSize: null != t ? t.waveform_flag_size : t,
                        waveformStyle: null != t ? t.waveform_style : t,
                        avatarSize: null != t ? t.waveform_avatar_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        show_comments: null != t ? t.show_comments : t
                    },
                    data: s
                })) + "\n"
            },
            19: function(e, t, i, a, s) {
                var o;
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(178), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.comments_size : t,
                        sound_id: null != (o = null != t ? t.model : t) ? o.id : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            21: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.comments_disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            22: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(484), {
                    name: "$view",
                    hash: {
                        type: null != t ? t.comments_disabled_type : t,
                        key: "commentsDisabled",
                        size: null != t ? t.comments_size : t
                    },
                    data: s
                })) + "\n"
            },
            24: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '      <div class="sound__footer g-all-transitions-300">\n' + (null != (s = n["if"].call(o, null != t ? t.show_track_list : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(25, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.show_actions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(27, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.show_stats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(29, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "      </div>\n"
            },
            25: function(e, t, i, a, s) {
                var o;
                return '          <div class="sound__trackList">\n            ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1595), {
                    name: "$view",
                    hash: {
                        showTrackNumber: !0,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o.id : o
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            27: function(e, t, i, a, s) {
                var o;
                return '          <div class="sound__soundActions">\n            ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(276), {
                    name: "$view",
                    hash: {
                        show_counts_actions: null != t ? t.show_counts_actions : t,
                        only_like: null != t ? t.only_like_action : t,
                        size: null != t ? t.actions_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            29: function(e, t, i, a, s) {
                var o;
                return '          <div class="sound__footerRight">\n            <div class="sound__soundStats">\n              ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(494), {
                    name: "$view",
                    hash: {
                        show_likes_count: null != t ? t.show_likes_count : t,
                        show_reposts_count: null != t ? t.show_reposts_count : t,
                        minimal: null != t ? t.minimal : t,
                        size: null != t ? t.stats_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o.id : o
                    },
                    data: s
                })) + "\n            </div>\n          </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_context : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n<div class="sound__body">\n' + (null != (s = n["if"].call(o, null != t ? t.show_artwork : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n  <div class="sound__content">\n' + (null != (s = n["if"].call(o, null != t ? t.show_header : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n    <div class="sound__waveform">\n' + (null != (s = n["if"].call(o, null != t ? t.is_playlist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, a, 0),
                    inverse: e.program(17, a, 0),
                    data: a
                })) ? s : "") + "    </div>\n\n" + (null != (s = n["if"].call(o, null != t ? t.show_commentForm : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, a, 0),
                    inverse: e.program(21, a, 0),
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_footer : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2638: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '    <div class="soundTitle__playButton ' + (null != (s = n["if"].call(o, null != t ? t.isListenContext : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + " " + (null != (s = n["if"].call(o, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">\n' + (null != (s = n["if"].call(o, null != t ? t.isListenContext : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.program(8, a, 0),
                    data: a
                })) ? s : "") + "    </div>\n"
            },
            2: function(e, t, n, i, a) {
                return "soundTitle__playButtonHero"
            },
            4: function(e, t, n, i, a) {
                return "g-opacity-transition-500"
            },
            6: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(207), {
                    name: "$view",
                    hash: {
                        size: "stretch",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(207), {
                    name: "$view",
                    hash: {
                        size: null != (o = null != t ? t._options : t) ? o.playbutton_size : o,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            10: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '      <div class="soundTitle__usernameHeroContainer">\n        <a href="' + c((n(58) || t && t.$route || u).call(l, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="soundTitle__username g-opacity-transition-500 g-type-shrinkwrap-inline g-type-shrinkwrap-large-secondary soundTitle__usernameHero sc-type-medium" ' + (null != (o = i["if"].call(l, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ">\n          " + c(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + "\n" + (null != (o = i["if"].call(l, null != t ? t.showPromotedInTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "        </a>\n" + (null != (o = i["if"].call(l, null != t ? t.showPromotedOutsideTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '      </div>\n      <span class="soundTitle__title sc-font g-type-shrinkwrap-inline g-type-shrinkwrap-large-primary' + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.truncate : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(l, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '"' + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.truncate : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ">\n        <span " + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.truncate : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ">" + c((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + "</span>\n      </span>\n"
            },
            11: function(e, t, n, i, a) {
                return 'rel="nofollow"'
            },
            13: function(e, t, i, a, s) {
                return "            " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(490), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n"
            },
            15: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(490), {
                    name: "$view",
                    hash: {},
                    data: s
                })) + "\n"
            },
            17: function(e, t, n, i, a) {
                return " sc-truncate"
            },
            19: function(e, t, n, i, a) {
                return " g-opacity-transition-500"
            },
            21: function(e, t, n, i, a) {
                var s;
                return ' title="' + e.escapeExpression((s = null != (s = n.title || (null != t ? t.title : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "title",
                    hash: {},
                    data: a
                }) : s)) + '"'
            },
            23: function(e, t, n, i, a) {
                return 'class="sc-truncate"'
            },
            25: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = e.escapeExpression;
                return '      <div class="sc-type-light soundTitle__secondary ' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.truncate : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '">\n        <a href="' + l((n(58) || t && t.$route || i.helperMissing).call(r, "user", null != t ? t.user : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" ' + (null != (o = i["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n          class="soundTitle__username\n' + (null != (o = i["if"].call(r, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(26, s, 0),
                    inverse: e.program(28, s, 0),
                    data: s
                })) ? o : "") + '">\n          <span class="soundTitle__usernameText">' + l(e.lambda(null != (o = null != t ? t.user : t) ? o.username : o, t)) + "</span>\n" + (null != (o = i["if"].call(r, null != t ? t.showPromotedInTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "        </a>\n" + (null != (o = i["if"].call(r, null != t ? t.showPromotedOutsideTitle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "        " + (null != (o = i["if"].call(r, null != t ? t.showActorUser : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(30, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "      </div>\n" + (null != (o = i["if"].call(r, null != t ? t.isLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(33, s, 0),
                    inverse: e.program(44, s, 0),
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.showReleaseData : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(46, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            26: function(e, t, n, i, a) {
                return "              g-opacity-transition-500 g-type-shrinkwrap-block g-type-shrinkwrap-secondary\n"
            },
            28: function(e, t, n, i, a) {
                return "              sc-link-light\n            "
            },
            30: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<div class="soundTitle__info ' + (null != (o = i["if"].call(r, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(31, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '">\n            ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(1669), {
                    name: "$view",
                    hash: {
                        actionType: null != (o = null != t ? t._options : t) ? o.actionType : o,
                        resource_id: null != (o = null != t ? t._options : t) ? o.actorId : o
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            31: function(e, t, n, i, a) {
                return "g-opacity-transition-500 g-type-shrinkwrap-block g-type-shrinkwrap-secondary"
            },
            33: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {};
                return '        <a class="soundTitle__title' + (null != (s = n["if"].call(r, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(34, a, 0),
                    inverse: e.program(36, a, 0),
                    data: a
                })) ? s : "") + '"\n           href="' + (null != (s = n["if"].call(r, null != t ? t.isPlaylist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(38, a, 0),
                    inverse: e.program(40, a, 0),
                    data: a
                })) ? s : "") + '"\n           ' + (null != (s = n["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + " " + (null != (s = n["if"].call(r, null != (s = null != t ? t._options : t) ? s.truncate : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '>\n            <span class="' + (null != (s = n["if"].call(r, null != (s = null != t ? t._options : t) ? s.truncate : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(42, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '">' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(r, {
                    name: "title",
                    hash: {},
                    data: a
                }) : o)) + "</span>\n        </a>\n"
            },
            34: function(e, t, n, i, a) {
                return " g-opacity-transition-500 g-type-shrinkwrap-block g-type-shrinkwrap-primary"
            },
            36: function(e, t, n, i, a) {
                return " sc-link-dark"
            },
            38: function(e, t, i, a, s) {
                return e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "playlist", t, {
                    name: "$route",
                    hash: {},
                    data: s
                }))
            },
            40: function(e, t, i, a, s) {
                return e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "listen", t, {
                    name: "$route",
                    hash: {},
                    data: s
                }))
            },
            42: function(e, t, n, i, a) {
                return "sc-truncate"
            },
            44: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {};
                return '        <span class="soundTitle__title sc-font ' + (null != (s = n["if"].call(r, null != (s = null != t ? t._options : t) ? s.truncate : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(r, null != t ? t.isVisual : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(19, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '"' + (null != (s = n["if"].call(r, null != (s = null != t ? t._options : t) ? s.truncate : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ">\n          <span " + (null != (s = n["if"].call(r, null != (s = null != t ? t._options : t) ? s.truncate : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + ">" + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(r, {
                    name: "title",
                    hash: {},
                    data: a
                }) : o)) + "</span>\n        </span>\n"
            },
            46: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(617), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            48: function(e, t, i, a, s) {
                var o;
                return '      <div class="soundTitle__uploadTime">\n        ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(115), {
                    name: "$view",
                    hash: {
                        prefix: null != (o = null != t ? t._options : t) ? o.prefix : o,
                        timestamp: null != (o = null != t ? t._options : t) ? o.timestamp : o
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            50: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '      <div class="soundTitle__tagContainer">\n' + (null != (s = n["if"].call(o, null != t ? t.showSnippet : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(51, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.showGenre : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(53, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.showPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(55, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "      </div>\n"
            },
            51: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return "          " + l((n(53) || t && t.$view || r).call(o, n(390), {
                    name: "$view",
                    hash: {
                        color: "grey",
                        size: "medium",
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n          " + l((n(53) || t && t.$view || r).call(o, n(390), {
                    name: "$view",
                    hash: {
                        color: "grey",
                        size: "small",
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            53: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '          <a class="soundTitle__tag sc-tag sc-tag-small" href="' + c((n(58) || t && t.$route || u).call(l, "tags", null != t ? t.genre : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" ' + (null != (o = i["if"].call(l, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '>\n            <span class="soundTitle__tagContent sc-truncate">' + c((r = null != (r = i.genre || (null != t ? t.genre : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "genre",
                    hash: {},
                    data: s
                }) : r)) + "</span>\n          </a>\n"
            },
            55: function(e, t, i, a, s) {
                var o;
                return "          " + e.escapeExpression((o = null != (o = n(404) || (null != t ? t.$privateLabel : t)) ? o : i.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "$privateLabel",
                    hash: {},
                    data: s
                }) : o)) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '<div class="soundTitle__titleContainer">\n' + (null != (s = n["if"].call(o, null != t ? t.showPlaybutton : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n  <div class="soundTitle__usernameTitleContainer">\n' + (null != (s = n["if"].call(o, null != t ? t.isListenContext : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.program(25, a, 0),
                    data: a
                })) ? s : "") + '  </div>\n  <div class="soundTitle__additionalContainer">\n' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.show_time : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(48, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.hasLabels : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(50, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2639: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1043), {
                    name: "$view",
                    hash: {
                        target: null != t ? t.model : t,
                        time_to_show: null != t ? t.time_to_show : t,
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        soundType: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        actionType: null != (o = null != t ? t._options : t) ? o.actionType : o,
                        resource_id: null != t ? t.actor : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                var o;
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1044), {
                    name: "$view",
                    hash: {
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o.id : o
                    },
                    data: s
                })) + "\n"
            },
            5: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  <div class="sound__artwork">\n    <a class="sound__coverArt" href="' + u((n(58) || t && t.$route || l).call(r, "listen", null != t ? t.model : t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n      ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        stretch: !0,
                        size: null != t ? t.cover_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n    </a>\n  </div>\n"
            },
            7: function(e, t, i, a, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1044), {
                    name: "$view",
                    hash: {
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o.id : o
                    },
                    data: s
                })) + "\n"
            },
            9: function(e, t, n, i, a) {
                var s;
                return '    <div class="sound__header">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.is_listen_context : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.program(12, a, 0),
                    data: a
                })) ? s : "") + "    </div>\n"
            },
            10: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(321), {
                    name: "$view",
                    hash: {
                        prefix: null != (o = null != t ? t._options : t) ? o.time_display_prefix : o,
                        timestamp: null != t ? t.time_to_show : t,
                        show_time: null != t ? t.show_time : t,
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        show_private: !1,
                        playbutton_size: "xlarge",
                        show_promoted: null != t ? t.show_promoted_in_title : t,
                        show_playbutton: !0,
                        show_actor_user: null != t ? t.show_actor_user : t,
                        is_link: !1,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            12: function(e, t, i, a, s) {
                var o;
                return "        " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(321), {
                    name: "$view",
                    hash: {
                        viewContext: null != (o = null != t ? t._options : t) ? o.viewContext : o,
                        is_promoted: null != (o = null != t ? t._options : t) ? o.is_promoted : o,
                        truncate: !0,
                        prefix: null != (o = null != t ? t._options : t) ? o.time_display_prefix : o,
                        timestamp: null != t ? t.time_to_show : t,
                        show_time: null != t ? t.show_time : t,
                        show_private: !0,
                        show_genre: !0,
                        playbutton_size: "xlarge",
                        show_promoted: null != t ? t.show_promoted_in_title : t,
                        show_playbutton: !0,
                        show_actor_user: null != t ? t.show_actor_user : t,
                        className: "sc-type-h2 g-all-transitions-500",
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        actionType: null != (o = null != t ? t._options : t) ? o.actionType : o,
                        actorId: null != (o = null != t ? t._options : t) ? o.actorId : o
                    },
                    data: s
                })) + "\n"
            },
            14: function(e, t, i, a, s) {
                var o;
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(496), {
                    name: "$view",
                    hash: {
                        waveformStyle: null != t ? t.waveform_style : t,
                        avatarSize: null != t ? t.waveform_avatar_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        show_comments: null != t ? t.show_comments : t
                    },
                    data: s
                })) + "\n"
            },
            16: function(e, t, i, a, s) {
                var o;
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(402), {
                    name: "$view",
                    hash: {
                        darkCommentText: null != t ? t.waveform_dark_comment : t,
                        commentFlagSize: null != t ? t.waveform_flag_size : t,
                        avatarSize: null != t ? t.waveform_avatar_size : t,
                        waveformStyle: null != t ? t.waveform_style : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o,
                        show_comments: null != t ? t.show_comments : t
                    },
                    data: s
                })) + "\n"
            },
            18: function(e, t, i, a, s) {
                var o;
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(178), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.comments_size : t,
                        sound_id: null != (o = null != t ? t.model : t) ? o.id : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n"
            },
            20: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.comments_disabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            21: function(e, t, i, a, s) {
                return "      " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(484), {
                    name: "$view",
                    hash: {
                        key: "commentsDisabled",
                        size: null != t ? t.comments_size : t
                    },
                    data: s
                })) + "\n"
            },
            23: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '    <div class="sound__footer ' + (null != (s = n["if"].call(o, null != t ? t.show_divider : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, a, 0),
                    inverse: e.program(26, a, 0),
                    data: a
                })) ? s : "") + ' g-all-transitions-300">\n' + (null != (s = n["if"].call(o, null != t ? t.show_actions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(28, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.show_stats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(30, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "    </div>\n"
            },
            24: function(e, t, n, i, a) {
                return "sc-border-light-bottom"
            },
            26: function(e, t, n, i, a) {
                return "noDivider"
            },
            28: function(e, t, i, a, s) {
                var o;
                return '        <div class="sound__soundActions">\n          ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(276), {
                    name: "$view",
                    hash: {
                        show_counts_actions: null != t ? t.show_counts_actions : t,
                        only_like: null != t ? t.only_like_action : t,
                        size: null != t ? t.actions_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n        </div>\n"
            },
            30: function(e, t, i, a, s) {
                var o;
                return '        <div class="sound__footerRight">\n          <div class="sound__soundStats">\n            ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(494), {
                    name: "$view",
                    hash: {
                        show_likes_count: null != t ? t.show_likes_count : t,
                        show_reposts_count: null != t ? t.show_reposts_count : t,
                        size: null != t ? t.stats_size : t,
                        resource_type: null != (o = null != t ? t.model : t) ? o._resource_type : o,
                        resource_id: null != (o = null != t ? t.model : t) ? o.id : o
                    },
                    data: s
                })) + "\n          </div>\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.show_context : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n<div class="sound__body">\n\n' + (null != (o = i["if"].call(r, null != t ? t.is_listen_context : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(r, null != t ? t.show_artwork : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n<div class="visualSound__wrapper g-all-transitions-300">\n' + (null != (o = i["if"].call(r, null != t ? t.is_stream_context : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n  <div class="visualSound__progress g-opacity-transition-500">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(1678), {
                    name: "$view",
                    hash: {
                        className: "g-opacity-transition-500",
                        resource_id: null != (o = null != t ? t.model : t) ? o._resource_id : o
                    },
                    data: s
                })) + "\n  </div>\n" + (null != (o = i["if"].call(r, null != t ? t.show_header : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n  <div class="sound__waveform g-all-transitions-500">\n' + (null != (o = i["if"].call(r, null != t ? t.is_playlist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, s, 0),
                    inverse: e.program(16, s, 0),
                    data: s
                })) ? o : "") + "  </div>\n" + (null != (o = i["if"].call(r, null != t ? t.show_comments : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, s, 0),
                    inverse: e.program(20, s, 0),
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(r, null != t ? t.show_footer : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(23, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n\n</div>\n"
            },
            useData: !0
        })
    },
    2640: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return null != (s = n.unless.call(null != t ? t : {}, null != t ? t.failMessage : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            2: function(e, t, n, i, a) {
                var s, o = null != t ? t : {},
                    r = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '    <div class="timestamp-' + u((s = null != (s = n.entry_time || (null != t ? t.entry_time : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "entry_time",
                    hash: {},
                    data: a
                }) : s)) + ' visuals__container visuals__transition" style="background-image: url(' + u((s = null != (s = n.background_url || (null != t ? t.background_url : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "background_url",
                    hash: {},
                    data: a
                }) : s)) + ');"></div>\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n.each.call(null != t ? t : {}, null != t ? t.visuals : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2641: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = null != t ? t : {},
                    r = n.helperMissing,
                    l = "function",
                    u = e.escapeExpression;
                return '      <option value="' + u((s = null != (s = n.value || (null != t ? t.value : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "value",
                    hash: {},
                    data: a
                }) : s)) + '">' + u((s = null != (s = n.label || (null != t ? t.label : t)) ? s : r, typeof s === l ? s.call(o, {
                    name: "label",
                    hash: {},
                    data: a
                }) : s)) + "</option>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="l-container l-fullwidth">\n  <select class="stagingMenu__select sc-select">\n' + (null != (s = n.each.call(null != t ? t : {}, null != t ? t.selectValues : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </select>\n</div>\n"
            },
            useData: !0
        })
    },
    2643: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression,
                    c = "function";
                return '<div class="stationBadgeHorizontal__artwork">\n  ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        size: 50,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n</div>\n\n<div class="stationBadgeHorizontal__content">\n  <h3 class="stationBadgeHorizontal__title sc-clearfix sc-type-light">\n    <div class="sc-truncate stationBadgeHorizontal__titleText"><a href="' + u((n(58) || t && t.$route || l).call(r, "station", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="sc-link-dark">' + u((o = null != (o = i.title || (null != t ? t.title : t)) ? o : l, typeof o === c ? o.call(r, {
                    name: "title",
                    hash: {},
                    data: s
                }) : o)) + '</a></div>\n  </h3>\n  <div class="stationBadgeHorizontal__type sc-type-light sc-font-light">\n    ' + u((o = null != (o = i.stationType || (null != t ? t.stationType : t)) ? o : l, typeof o === c ? o.call(r, {
                    name: "stationType",
                    hash: {},
                    data: s
                }) : o)) + '\n  </div>\n</div>\n<div class="stationBadgeHorizontal__like">\n  ' + u((n(53) || t && t.$view || l).call(r, n(591), {
                    name: "$view",
                    hash: {
                        responsive: !1,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n</div>\n"
            },
            useData: !0
        })
    },
    2645: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(228), {
                    name: "$view",
                    hash: {
                        className: "stationTile__tierIndicator",
                        variant: "smallArtwork",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                return '    <div class="stationTile__playButton g-z-index-content">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1686), {
                    name: "$view",
                    hash: {
                        size: "stretch",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression,
                    d = "function";
                return '<div class="stationTile__artwork">\n  <a class="stationTile__artworkLink" href="' + c((n(58) || t && t.$route || u).call(l, "station", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n    <div class="stationTile__image">\n      ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        stretch: !0,
                        size: 200,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n    </div>\n  </a>\n" + (null != (o = i["if"].call(l, null != t ? t.isSound : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(l, null != t ? t.renderPlayButton : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  <div class="stationTile__actions">\n    ' + c((n(53) || t && t.$view || u).call(l, n(591), {
                    name: "$view",
                    hash: {
                        responsive: !1,
                        noStyle: !0,
                        lightFg: !0,
                        icon_only: !0,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n  </div>\n</div>\n<div class="stationTile__description">\n  <a class="stationTile__heading stationTile__mainHeading sc-truncate sc-type-light sc-font-light sc-link-dark" href="' + c((n(58) || t && t.$route || u).call(l, "station", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">\n    ' + c((r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r)) + '\n  </a>\n  <span class="stationsBadge__heading stationsBadge__subHeading sc-truncate sc-text-light">' + c((r = null != (r = i.stationType || (null != t ? t.stationType : t)) ? r : u, typeof r === d ? r.call(l, {
                    name: "stationType",
                    hash: {},
                    data: s
                }) : r)) + "</a>\n</div>\n"
            },
            useData: !0
        })
    },
    2646: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o, r = e.lambda,
                    l = e.escapeExpression;
                return '  <span title="' + l(r(null != (s = null != t ? t.fullTexts : t) ? s.playback_count : s, t)) + '" class="sc-ministats-item audibleMiniStats__item">\n    <span class="' + l((o = null != (o = n.ministats_class || (null != t ? t.ministats_class : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(null != t ? t : {}, {
                    name: "ministats_class",
                    hash: {},
                    data: a
                }) : o)) + ' sc-ministats-plays">' + l(r(null != (s = null != t ? t.shortTexts : t) ? s.playback_count : s, t)) + "</span>\n  </span>\n  &middot;\n"
            },
            3: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_likes_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            4: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '  <span title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.likes_count : o, t)) + '" class="sc-ministats-item audibleMiniStats__item">\n    <a href="' + l((n(58) || t && t.$route || c).call(u, null != t ? t.network_type : t, t, "likes", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow"\n       class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-likes">\n       ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || c).call(u, "View all likes", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.likes_count : o
                    },
                    data: s
                })) + "\n    </a>\n  </span>\n  &middot;\n"
            },
            6: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '  &middot;\n  <span class="' + u((o = null != (o = i.ministats_class || (null != t ? t.ministats_class : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : o)) + ' sc-ministats-text sc-ministats-item audibleMiniStats__item">\n    ' + u((n(96) || t && t.$a11y || l).call(r, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != t ? t.durationInWords : t,
                        visible: null != t ? t.duration : t
                    },
                    data: s
                })) + "\n  </span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return (null != (o = i["if"].call(l, null != t ? t.show_playback_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + '\n<span class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-text sc-ministats-item audibleMiniStats__item">\n  ' + c((n(51) || t && t.$t || u).call(l, "[[[relativeTime]]] ago", {
                    name: "$t",
                    hash: {
                        relativeTime: (n(53) || t && t.$view || u).call(l, n(115), {
                            name: "$view",
                            hash: {
                                prefix: (n(51) || t && t.$t || u).call(l, "Posted", {
                                    name: "$t",
                                    hash: {},
                                    data: s
                                }),
                                timestamp: null != t ? t.display_date : t
                            },
                            data: s
                        })
                    },
                    data: s
                })) + "\n</span>\n" + (null != (o = i["if"].call(l, null != t ? t.showDuration : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2648: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '  <li title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.playback_count : o, t)) + '" class="sc-ministats-item">\n    <span class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-plays">\n      ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.playback_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.playback_count : o
                    },
                    data: s
                })) + "\n    </span>\n  </li>\n"
            },
            3: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '  <li title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.likes_count : o, t)) + '" class="sc-ministats-item">\n    <a href="' + l((n(58) || t && t.$route || c).call(u, null != t ? t.network_type : t, t, "likes", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow"\n       class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-likes">\n       ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || c).call(u, "View all likes", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.likes_count : o
                    },
                    data: s
                })) + "\n    </a>\n  </li>\n"
            },
            5: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '  <li title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.reposts_count : o, t)) + '" class="sc-ministats-item">\n    <a href="' + l((n(58) || t && t.$route || c).call(u, null != t ? t.network_type : t, t, "reposts", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow"\n       class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-reposts">\n      ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || c).call(u, "View all reposts", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.reposts_count : o
                    },
                    data: s
                })) + "\n    </a>\n  </li>\n"
            },
            7: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_comment_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            8: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '    <li title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.comment_count : o, t)) + '" class="sc-ministats-item">\n      <a href="' + l((n(58) || t && t.$route || c).call(u, null != t ? t.network_type : t, t, "comments", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow"\n         class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-comments"\n         rel="nofollow">\n         ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: (n(51) || t && t.$t || c).call(u, "View all comments", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.comment_count : o
                    },
                    data: s
                })) + "\n      </a>\n    </li>\n"
            },
            10: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.show_download_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            11: function(e, t, i, a, s) {
                var o, r, l = e.escapeExpression,
                    u = null != t ? t : {},
                    c = i.helperMissing;
                return '    <li title="' + l(e.lambda(null != (o = null != t ? t.fullTexts : t) ? o.download_count : o, t)) + '" class="sc-ministats-item">\n      <span class="' + l((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : c, "function" == typeof r ? r.call(u, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-downloads">\n        ' + l((n(96) || t && t.$a11y || c).call(u, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.download_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.download_count : o
                    },
                    data: s
                })) + "\n      </span>\n    </li>\n"
            },
            13: function(e, t, n, i, a) {
                var s;
                return null != (s = n.unless.call(null != t ? t : {}, null != t ? t.is_small : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(14, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            14: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '    <li class="sc-ministats-item">\n      <a href="' + l((n(58) || t && t.$route || r).call(o, "track-stats", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '"\n        class="stats__moreLink sc-type-small sc-link-light">\n         ' + l((n(51) || t && t.$t || r).call(o, "More stats", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n      </a>\n    </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.show_playback_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_likes_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "\n" + (null != (s = n["if"].call(o, null != t ? t.show_reposts_count : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.commentable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_mine : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.show_more_stats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2649: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = e.lambda,
                    l = e.escapeExpression;
                return '  <div class="statsBadge__upsell sc-border-light-top">\n    <h3 class="statsBadge__upsell-headline">' + l(r(null != (o = null != t ? t.upsell : t) ? o.headline : o, t)) + '</h3>\n    <p class="statsBadge__upsell-text">' + (null != (o = r(null != (o = null != t ? t.upsell : t) ? o.text : o, t)) ? o : "") + '</p>\n    <div class="sc-button-group">\n      <a class="statsBadge__upsellLink sc-button sc-button-cta sc-button-medium" href="' + l((n(58) || t && t.$route || i.helperMissing).call(null != t ? t : {}, "premium", null, null, null != (o = null != t ? t.upsell : t) ? o.ref : o, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '">' + l(r(null != (o = null != t ? t.upsell : t) ? o.link : o, t)) + "</a>\n    </div>\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<table class="statsBadge__recent sc-type-small">\n  <tr>\n    <th class="statsBadge__title sc-type-light sc-border-light-right">' + u((n(51) || t && t.$t || l).call(r, "Plays last 24 hours", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</th>\n    <th class="statsBadge__title sc-type-light">' + u((n(51) || t && t.$t || l).call(r, "Plays last 7 days", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</th>\n  </tr>\n  <tr>\n    <td class="statsBadge__today sc-orange statsBadge__value sc-border-light-right">' + u((n(208) || t && t.$formatStatNumber || l).call(r, null != t ? t.last24Hrs : t, {
                    name: "$formatStatNumber",
                    hash: {},
                    data: s
                })) + '</td>\n    <td class="statsBadge__value sc-text-verylight">' + u((n(208) || t && t.$formatStatNumber || l).call(r, null != t ? t.lastWeek : t, {
                    name: "$formatStatNumber",
                    hash: {},
                    data: s
                })) + '</td>\n  </tr>\n</table>\n\n<p class="statsBadge__total sc-type-small sc-type-light">\n  ' + u((n(51) || t && t.$t || l).call(r, "<strong>[[count]]</strong> plays in total", {
                    name: "$t",
                    hash: {
                        count: (n(660) || t && t.$count || l).call(r, null != t ? t.total : t, {
                            name: "$count",
                            hash: {},
                            data: s
                        })
                    },
                    data: s
                })) + "\n</p>\n\n" + (null != (o = i["if"].call(r, null != t ? t.upsell : t, {
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
    2652: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '  <ul class="sc-ministats-group">\n' + (null != (s = n["if"].call(o, null != t ? t.showFollowers : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.showSounds : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.showSets : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.isPromoted : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "  </ul>\n"
            },
            2: function(e, t, n, i, a) {
                var s;
                return '    <li title="' + e.escapeExpression(e.lambda(null != (s = null != t ? t.fullTexts : t) ? s.followers_count : s, t)) + '" class="sc-ministats-item">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.program(5, a, 0),
                    data: a
                })) ? s : "") + "    </li>\n"
            },
            3: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '        <a href="' + c((n(58) || t && t.$route || u).call(l, "userNetwork", t, "followers", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow" class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-followers">\n          ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.followers_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.followers_count : o
                    },
                    data: s
                })) + "\n        </a>\n"
            },
            5: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '        <span class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-followers">\n          ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.followers_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.followers_count : o
                    },
                    data: s
                })) + "\n        </span>\n"
            },
            7: function(e, t, n, i, a) {
                var s;
                return '      <li title="' + e.escapeExpression(e.lambda(null != (s = null != t ? t.fullTexts : t) ? s.track_count : s, t)) + '" class="sc-ministats-item">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, a, 0),
                    inverse: e.program(10, a, 0),
                    data: a
                })) ? s : "") + "      </li>\n"
            },
            8: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '          <a href="' + c((n(58) || t && t.$route || u).call(l, "userNetwork", t, "tracks", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow" class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-sounds">\n            ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.track_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.track_count : o
                    },
                    data: s
                })) + "\n          </a>\n"
            },
            10: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '          <span class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-sounds">\n            ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.track_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.track_count : o
                    },
                    data: s
                })) + "\n          </span>\n"
            },
            12: function(e, t, n, i, a) {
                var s;
                return '      <li title="' + e.escapeExpression(e.lambda(null != (s = null != t ? t.fullTexts : t) ? s.playlist_count : s, t)) + '" class="sc-ministats-item">\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showLink : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.program(15, a, 0),
                    data: a
                })) ? s : "") + "      </li>\n"
            },
            13: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '          <a href="' + c((n(58) || t && t.$route || u).call(l, "userNetwork", t, "sets", {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" rel="nofollow" class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-sets">\n              ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.playlist_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.playlist_count : o
                    },
                    data: s
                })) + "\n          </a>\n"
            },
            15: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '          <span class="' + c((r = null != (r = i.ministats_class || (null != t ? t.ministats_class : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : r)) + ' sc-ministats-sets">\n            ' + c((n(96) || t && t.$a11y || u).call(l, {
                    name: "$a11y",
                    hash: {
                        screenreader: null != (o = null != t ? t.fullTexts : t) ? o.playlist_count : o,
                        visible: null != (o = null != t ? t.shortTexts : t) ? o.playlist_count : o
                    },
                    data: s
                })) + "\n          </span>\n"
            },
            17: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '      <li title="Promoted user" class="sc-ministats-item">\n        <span class="' + u((o = null != (o = i.ministats_class || (null != t ? t.ministats_class : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "ministats_class",
                    hash: {},
                    data: s
                }) : o)) + ' sc-ministats-text">' + u((n(51) || t && t.$t || l).call(r, "Promoted", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</span>\n      </li>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showMiniStats : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            useData: !0
        })
    },
    2662: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(490), {
                    name: "$view",
                    hash: {
                        dialogEnabled: !1,
                        className: "userSuggestion__promoted"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(154), {
                    name: "$view",
                    hash: {
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        resource_id: null != (o = null != t ? t.user : t) ? o.id : o
                    },
                    data: s
                })) + "\n" + (null != (o = i["if"].call(r, null != t ? t.isPromoted : t, {
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
    2664: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s, o = e.lambda,
                    r = e.escapeExpression;
                return '  <label class="tokenInput__label' + (null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t._options : t) ? s.required : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '" for="tokenInput__' + r(o(null != (s = null != t ? t._options : t) ? s.field : s, t)) + '">' + r(o(null != (s = null != t ? t._options : t) ? s.label : s, t)) + "</label>\n"
            },
            2: function(e, t, n, i, a) {
                return " g-required-label"
            },
            4: function(e, t, n, i, a) {
                return 'aria-required="true"'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {},
                    r = e.lambda,
                    l = e.escapeExpression;
                return (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.label : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n<div class="tokenInput__wrapper tagInput__wrapper sc-input">\n  <div class="tokenInput__inputContainer">\n    <span class="sc-visuallyhidden">' + l(r(null != (s = null != t ? t._options : t) ? s.placeholder : s, t)) + '</span>\n    <div class="tagInput__inputWrapper">\n      <input\n        type="text"\n        ' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.required : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '\n        class="tagInput__input tokenInput__input"\n        id="tokenInput__' + l(r(null != (s = null != t ? t._options : t) ? s.field : s, t)) + '"\n        placeholder="' + l(r(null != (s = null != t ? t._options : t) ? s.placeholder : s, t)) + '"\n      >\n    </div>\n  </div>\n</div>\n<div class="tokenInput__validation g-input-validation g-input-validation-hidden"></div>\n'
            },
            useData: !0
        })
    },
    2671: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(403) || t && t.$label || i.helperMissing).call(null != t ? t : {}, {
                    name: "$label",
                    hash: {
                        label: "Monetizable",
                        type: "monetizable",
                        className: "sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isMonetizablePending : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            4: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(403) || t && t.$label || i.helperMissing).call(null != t ? t : {}, {
                    name: "$label",
                    hash: {
                        label: "Monetizable",
                        type: "monetizable-pending",
                        className: "sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            6: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(403) || t && t.$label || i.helperMissing).call(null != t ? t : {}, {
                    name: "$label",
                    hash: {
                        label: "Geoblocked",
                        type: "geoblocked",
                        className: "sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            8: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(403) || t && t.$label || i.helperMissing).call(null != t ? t : {}, {
                    name: "$label",
                    hash: {
                        label: "Scheduled",
                        type: "scheduled",
                        className: "sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            10: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(404) || t && t.$privateLabel || i.helperMissing).call(null != t ? t : {}, {
                    name: "$privateLabel",
                    hash: {
                        className: "sc-label-icon-only"
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return (null != (s = n["if"].call(o, null != t ? t.isMonetizable : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(3, a, 0),
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isGeoblocked : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.hasScheduledPrivacy : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isPrivate : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2673: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return "multiple"
            },
            3: function(e, t, n, i, a) {
                return " sc-button-cta"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {},
                    r = e.lambda,
                    l = e.escapeExpression;
                return '<input class="chooseFiles__input sc-visuallyhidden" type="file" accept="*" ' + (null != (s = n["if"].call(o, null != t ? t.allowMultiple : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '>\n<button class="chooseFiles__button sc-button' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.callToAction : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + " sc-button-" + l(r(null != (s = null != t ? t._options : t) ? s.size : s, t)) + '">' + l(r(null != (s = null != t ? t._options : t) ? s.text : s, t)) + "</button>\n"
            },
            useData: !0
        })
    },
    2675: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "  " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1053), {
                    name: "$view",
                    hash: {
                        size: null != t ? t.uploadStatusSize : t,
                        showText: !1,
                        resource_type: "single-audio-upload",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, a) {
                var s;
                return "        " + e.escapeExpression((s = null != (s = n.title || (null != t ? t.title : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "title",
                    hash: {},
                    data: a
                }) : s)) + "\n"
            },
            5: function(e, t, n, i, a) {
                var s;
                return (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isCPPEnabled : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.program(8, a, 0),
                    data: a
                })) ? s : "") + "\n"
            },
            6: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '          <div class="metadataGrid__row">\n            ' + l((n(53) || t && t.$view || r).call(o, n(653), {
                    name: "$view",
                    hash: {
                        className: "metadataGrid__field-half",
                        label: (n(51) || t && t.$t || r).call(o, "Title", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        size: "medium",
                        field: "title",
                        placeholder: (n(51) || t && t.$t || r).call(o, "Name your new track", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n            " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherArtist",
                        field: "publisherArtist",
                        label: (n(51) || t && t.$t || r).call(o, "Artist", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + "\n            " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        key: "composer",
                        label: (n(51) || t && t.$t || r).call(o, "Composer", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "publisherWriterComposer",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + '\n          </div>\n          <div class="metadataGrid__row">\n            ' + l((n(53) || t && t.$view || r).call(o, n(151), {
                    name: "$view",
                    hash: {
                        key: "publisherContainsMusic",
                        showBlank: !1,
                        label: (n(51) || t && t.$t || r).call(o, "Contains music", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "publisherContainsMusic",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + "\n            " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisher",
                        label: (n(51) || t && t.$t || r).call(o, "Publisher", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "publisher",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + "\n            " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        key: "publisherIsrc",
                        label: (n(51) || t && t.$t || r).call(o, "ISRC", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        placeholder: (n(51) || t && t.$t || r).call(o, "e.g. USS1Z1001234", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "publisherIsrc",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + "\n            " + l((n(53) || t && t.$view || r).call(o, n(60), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || r).call(o, "Release title", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        field: "publisherReleaseTitle",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t,
                        className: "metadataGrid__field-quarter"
                    },
                    data: s
                })) + "\n          </div>\n"
            },
            8: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return "          " + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(653), {
                    name: "$view",
                    hash: {
                        className: "compactUpload__onlyTitle",
                        size: "medium",
                        field: "title",
                        placeholder: (n(51) || t && t.$t || r).call(o, "Name your new track", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_id: null != t ? t._resource_id : t,
                        Form: n(150)
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return (null != (o = i["if"].call(r, null != t ? t.fileUpload : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '<div class="compactUpload__wrapper g-flex-row">\n  <div class="compactUpload__dragHandle">\n  </div>\n  <div class="compactUpload__content">\n    <div class="compactUpload__field">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.readOnly : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.program(5, s, 0),
                    data: s
                })) ? o : "") + '    </div>\n    <div class="compactUpload__failed">\n      <div class="compactUpload__failedErrorMessage"></div>\n    </div>\n  </div>\n  <button class="compactUpload__cancel sc-ir">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(r, "Cancel upload", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2676: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Drop your files here", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            3: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "You have no upload time left.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            5: function(e, t, n, i, a) {
                var s;
                return (null != (s = n["if"].call(null != t ? t : {}, null != (s = null != t ? t.quota : t) ? s.unlimited_upload_quota : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.program(11, a, 0),
                    data: a
                })) ? s : "") + "\n"
            },
            6: function(e, t, i, a, s) {
                var o;
                return null != (o = (n(186) || t && t.$tp || i.helperMissing).call(null != t ? t : {}, null != t ? t.minutes_used : t, {
                    name: "$tp",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.program(9, s, 0),
                    data: s
                })) ? o : ""
            },
            7: function(e, t, n, i, a) {
                return '          You have uploaded <span class="uploadedTarget__messageHighlight">1 minute</span> of sound.\n'
            },
            9: function(e, t, n, i, a) {
                return '          You have uploaded <span class="uploadedTarget__messageHighlight">%d minutes</span> of sound.\n'
            },
            11: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return "\n" + (null != (o = (n(186) || t && t.$tp || l).call(r, null != t ? t.minutes_used : t, {
                    name: "$tp",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.program(14, s, 0),
                    data: s
                })) ? o : "") + "\n" + (null != (o = (n(186) || t && t.$tp || l).call(r, null != t ? t.minutes_left : t, {
                    name: "$tp",
                    hash: {},
                    fn: e.program(16, s, 0),
                    inverse: e.program(18, s, 0),
                    data: s
                })) ? o : "")
            },
            12: function(e, t, n, i, a) {
                return '          You have used <span class="uploadedTarget__messageHighlight">1 minute</span> of your upload quota.\n'
            },
            14: function(e, t, n, i, a) {
                return '          You have used <span class="uploadedTarget__messageHighlight">%d minutes</span> of your upload quota.\n'
            },
            16: function(e, t, n, i, a) {
                return '          You have <span class="uploadedTarget__messageHighlight">1 minute</span> left.\n'
            },
            18: function(e, t, n, i, a) {
                return '          You have <span class="uploadedTarget__messageHighlight">%d minutes</span> left.\n'
            },
            20: function(e, t, n, i, a) {
                var s;
                return null != (s = n.unless.call(null != t ? t : {}, null != t ? t.logged_in : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            21: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "After you sign in, your upload will start.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '<div class="uploadTarget__frame">\n  <div class="uploadTarget__frameInner">\n    <span class="uploadTarget__title">\n' + (null != (s = n["if"].call(o, null != t ? t.drop_files : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(3, a, 0),
                    data: a
                })) ? s : "") + '    </span>\n  </div>\n  <div class="uploadTarget__message sc-type-medium sc-text-light">\n' + (null != (s = n["if"].call(o, null != t ? t.show_quota : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.program(20, a, 0),
                    data: a
                })) ? s : "") + "  </div>\n</div>\n\n\n"
            },
            useData: !0
        })
    },
    2678: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return "    " + e.escapeExpression((s = null != (s = n._label || (null != t ? t._label : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "_label",
                    hash: {},
                    data: a
                }) : s)) + "\n"
            },
            3: function(e, t, n, i, a) {
                var s;
                return '    <span class="sc-visuallyhidden">' + e.escapeExpression((s = null != (s = n._label || (null != t ? t._label : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "_label",
                    hash: {},
                    data: a
                }) : s)) + "</span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = "function",
                    d = e.escapeExpression;
                return "<label for=" + d((r = null != (r = i._controlId || (null != t ? t._controlId : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "_controlId",
                    hash: {},
                    data: s
                }) : r)) + ">\n" + (null != (o = i["if"].call(l, null != (o = null != t ? t._options : t) ? o.showLabel : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(3, s, 0),
                    data: s
                })) ? o : "") + '</label>\n  <div class="permalinkTextfield__inputWrapper">\n    <span class="sc-text-light permalinkTextfield__prefixText">soundcloud.com/' + d((r = null != (r = i.prefix || (null != t ? t.prefix : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "prefix",
                    hash: {},
                    data: s
                }) : r)) + '</span>\n    <input\n      class="textfield__input permalinkTextfield__input sc-truncate sc-input"\n      id="' + d((r = null != (r = i._controlId || (null != t ? t._controlId : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "_controlId",
                    hash: {},
                    data: s
                }) : r)) + '"\n      type="text"\n      value="' + d((r = null != (r = i._value || (null != t ? t._value : t)) ? r : u, typeof r === c ? r.call(l, {
                    name: "_value",
                    hash: {},
                    data: s
                }) : r)) + '"\n      disabled="disabled"\n    >\n    <button class="sc-button sc-button-edit sc-button-icon permalinkTextfield__editButton">' + d((n(51) || t && t.$t || u).call(l, "Edit", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n    <div class="textfield__validation g-input-validation g-input-validation-hidden"></div>\n  </div>\n'
            },
            useData: !0
        })
    },
    2679: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                return '<div class="progressBar__outer">\n  <div class="progressBar__inner g-transition-transform-linear">\n  </div>\n</div>\n'
            },
            useData: !0
        })
    },
    2680: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '    <span class="showUnchecked">\n      <span class="showPrivate">' + l((n(51) || t && t.$t || r).call(o, "This track will remain private.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</span>\n      <span class="showPublic">' + l((n(51) || t && t.$t || r).call(o, "This track is already public.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</span>\n    </span>\n\n    <span class="showChecked">\n      ' + l((n(51) || t && t.$t || r).call(o, "This track will become public on:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n    </span>\n    <div class="showChecked">\n      ' + l((n(53) || t && t.$view || r).call(o, n(313), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "scheduledTimezone",
                        localDateField: "scheduledPublicLocalDate",
                        field: "scheduledPublicDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n    </div>\n"
            },
            3: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return '  <div class="g-options-cell">\n' + (null != (o = (n(53) || t && t.$view || l).call(r, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "scheduledPrivate",
                        field: "scheduledPrivate",
                        label: (n(51) || t && t.$t || l).call(r, "Make unavailable", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "  </div>\n"
            },
            4: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '      <span class="showUnchecked">\n        <span class="showPublicOrScheduled">' + l((n(51) || t && t.$t || r).call(o, "This track will remain public.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</span>\n        <span class="showNotPublicOrScheduled">' + l((n(51) || t && t.$t || r).call(o, "This track will remain private.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</span>\n      </span>\n      <span class="showChecked">\n        ' + l((n(51) || t && t.$t || r).call(o, "This track will become private on:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n      </span>\n      <div class="showChecked">\n        ' + l((n(53) || t && t.$view || r).call(o, n(313), {
                    name: "$view",
                    hash: {
                        minDate: 0,
                        timezoneField: "scheduledTimezone",
                        localDateField: "scheduledPrivateLocalDate",
                        field: "scheduledPrivateDate",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    data: s
                })) + "\n      </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return '<div class="g-options-cell">\n' + (null != (o = (n(53) || t && t.$view || l).call(r, n(95), {
                    name: "$view",
                    hash: {
                        toggleAnywhere: !1,
                        key: "scheduledPublic",
                        field: "scheduledPublic",
                        label: (n(51) || t && t.$t || l).call(r, "Make available", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t,
                        Form: null != t ? t.FormClass : t
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n\n" + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.publicToPrivate : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2681: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s, o, r) {
                var l, u = null != t ? t : {},
                    c = i.helperMissing,
                    d = "function",
                    p = e.escapeExpression;
                return '  <label class="shareToNetworks__wrapper g-inline-block">\n    <input type="checkbox" class="sc-checkbox-input sc-visuallyhidden shareToNetworks__input ' + p((l = null != (l = i.type || (null != t ? t.type : t)) ? l : c, typeof l === d ? l.call(u, {
                    name: "type",
                    hash: {},
                    data: s
                }) : l)) + '" name="' + p((l = null != (l = i.type || (null != t ? t.type : t)) ? l : c, typeof l === d ? l.call(u, {
                    name: "type",
                    hash: {},
                    data: s
                }) : l)) + '">\n    <div class="sc-checkbox-check shareToNetworks__check"></div>\n    <span class="shareToNetworks__icon sc-social-logo sc-social-logo-square ' + p(e.lambda(null != r[1] ? r[1].sizeClass : r[1], t)) + " sc-social-logo-" + p((l = null != (l = i.icon || (null != t ? t.icon : t)) ? l : c, typeof l === d ? l.call(u, {
                    name: "icon",
                    hash: {},
                    data: s
                }) : l)) + ' sc-ir" title="' + p((n(51) || t && t.$t || c).call(u, "Share on [[socialNetworkName]]", {
                    name: "$t",
                    hash: {
                        socialNetworkName: null != t ? t.name : t
                    },
                    data: s
                })) + '">\n      ' + p((n(51) || t && t.$t || c).call(u, "Share on [[socialNetworkName]]", {
                    name: "$t",
                    hash: {
                        socialNetworkName: null != t ? t.name : t
                    },
                    data: s
                })) + "\n    </span>\n  </label>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a, s, o) {
                var r;
                return null != (r = n.each.call(null != t ? t : {}, null != t ? t.networks : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, a, 0, s, o),
                    inverse: e.noop,
                    data: a
                })) ? r : ""
            },
            useData: !0,
            useDepths: !0
        })
    },
    2685: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return '    <button class="uploadStatus__cancel sc-button sc-button-small sc-button-nostyle">\n      ' + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.cancelText : s, t)) + "\n    </button>\n"
            },
            3: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '    <div class="editStatus__text">\n' + (null != (s = n["if"].call(o, null != t ? t.is_queued : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_uploading : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_failed : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(14, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.is_transcoding : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.completeButNotSaved : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(21, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "    </div>\n"
            },
            4: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Queued", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            6: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isSingle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, a, 0),
                    inverse: e.program(9, a, 0),
                    data: a
                })) ? s : ""
            },
            7: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(1730), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            9: function(e, t, i, a, s) {
                var o;
                return (null != (o = (n(186) || t && t.$tp || i.helperMissing).call(null != t ? t : {}, null != t ? t.numSounds : t, {
                    name: "$tp",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.program(12, s, 0),
                    data: s
                })) ? o : "") + "\n"
            },
            10: function(e, t, n, i, a) {
                return "            Uploading 1 track\n"
            },
            12: function(e, t, n, i, a) {
                return "            Uploading %d tracks\n"
            },
            14: function(e, t, n, i, a) {
                var s;
                return "        " + e.escapeExpression((s = null != (s = n.errorMessage || (null != t ? t.errorMessage : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "errorMessage",
                    hash: {},
                    data: a
                }) : s)) + "\n"
            },
            16: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isSingle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(17, a, 0),
                    inverse: e.program(19, a, 0),
                    data: a
                })) ? s : ""
            },
            17: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "We are processing your track for playbackâ€¦", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            19: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "We are processing your tracks for playbackâ€¦", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            21: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isSingle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(22, a, 0),
                    inverse: e.program(24, a, 0),
                    data: a
                })) ? s : ""
            },
            22: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Ready. Click Save to post this track.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            24: function(e, t, i, a, s) {
                return "          " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Ready. Click Save to post this playlist.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n"
            },
            26: function(e, t, n, i, a) {
                var s;
                return '    <div class="editStatus__progress">\n' + (null != (s = n.unless.call(null != t ? t : {}, null != t ? t.is_failed : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(27, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "    </div>\n"
            },
            27: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '        <div class="uploadStatus__upload">\n          ' + l((n(53) || t && t.$view || r).call(o, n(1048), {
                    name: "$view",
                    hash: {
                        color: "blue",
                        type: "transfer",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n        </div>\n        <div class="uploadStatus__transcoding">\n          ' + l((n(53) || t && t.$view || r).call(o, n(1048), {
                    name: "$view",
                    hash: {
                        type: "transcoding",
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n        </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return '<div class="uploadStatus__inner">\n' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.showCancelButton : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.showText : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != t ? t.isSingle : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(26, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2689: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing,
                    l = e.escapeExpression;
                return '<h1 class="g-modal-title-h1 sc-truncate">' + l((n(51) || t && t.$t || r).call(o, "Block [[username]]", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + "</h1>\n<h2>" + l((n(51) || t && t.$t || r).call(o, "Blocking means that [[username]] will no&nbsp;longer be able&nbsp;to", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + '</h2>\n<ul class="g-list-content">\n  <li>' + l((n(51) || t && t.$t || r).call(o, "follow you,", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "like your tracks,", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "repost your tracks,", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "send you messages,", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "share tracks with you,", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "post new comments on your tracks, or", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n  <li>" + l((n(51) || t && t.$t || r).call(o, "send you new stream or email notifications.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</li>\n</ul>\n" + l((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        className: "sc-text-light blockUser__checkbox",
                        label: null != t ? t.removeLabel : t,
                        name: "remove"
                    },
                    data: s
                })) + "\n" + l((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        className: "sc-text-light blockUser__checkbox",
                        label: null != t ? t.reportLabel : t,
                        name: "report"
                    },
                    data: s
                })) + '\n<div class="blockUser__actions">\n  <button type="reset" class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Cancel", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</button>\n  <button type="submit" class="sc-button sc-button-small">' + l((n(51) || t && t.$t || r).call(o, "Block [[username]]", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + "</button>\n</div>\n"
            },
            useData: !0
        })
    },
    2707: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return c((n(197) || t && t.$image || u).call(l, t, {
                    name: "$image",
                    hash: {
                        "class": "sc-media-image",
                        size: 20
                    },
                    data: s
                })) + '\n<div class="sc-media-content">\n  <h2 class="spotlightResultItem__title sc-truncate sc-type-h3">' + (null != (r = null != (r = i.title || (null != t ? t.title : t)) ? r : u, o = "function" == typeof r ? r.call(l, {
                    name: "title",
                    hash: {},
                    data: s
                }) : r) ? o : "") + "</h2>\n</div>\n" + c((n(180) || t && t.$icon || u).call(l, {
                    name: "$icon",
                    hash: {
                        "class": "spotlightResultItem__icon",
                        type: null != t ? t.iconType : t,
                        size: "large"
                    },
                    data: s
                })) + "\n" + c((n(404) || t && t.$privateLabel || u).call(l, {
                    name: "$privateLabel",
                    hash: {
                        className: "spotlightResultItem__private sc-label-icon-only"
                    },
                    data: s
                })) + "\n\n"
            },
            useData: !0
        })
    },
    2708: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<input\n  class="spotlightSearch__input sc-input"\n  placeholder="' + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.placeholder : s, t)) + '"\n  type="search"\n  autocomplete="off"\n  aria-label="($t "Search")"\n  aria-autocomplete="list"\n  aria-owns="spotlightResults">\n<span class="spotlightSearch__icon g-opacity-transition"></span>\n\n'
            },
            useData: !0
        })
    },
    2713: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return u((n(197) || t && t.$image || l).call(r, null != t ? t.userModel : t, {
                    name: "$image",
                    hash: {
                        "class": "left",
                        size: 20
                    },
                    data: s
                })) + '\n<span class="suggestedUser__name left">' + u((o = null != (o = i.username || (null != t ? t.username : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "username",
                    hash: {},
                    data: s
                }) : o)) + "</span>\n"
            },
            useData: !0
        })
    },
    2716: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return "    <a href='" + e.escapeExpression((n(58) || t && t.$route || i.helperMissing).call(r, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + "' " + (null != (o = i["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ' class="g-avatar-badge-avatar-link">\n'
            },
            2: function(e, t, n, i, a) {
                return ' rel="nofollow"'
            },
            4: function(e, t, n, i, a) {
                return "    </a>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<div class="g-avatar-badge-body">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.is_link : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  <div class="g-avatar-badge-avatar">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(89), {
                    name: "$view",
                    hash: {
                        boundaryOutlineStyle: null != (o = null != t ? t._options : t) ? o.boundaryOutlineStyle : o,
                        stretch: null != (o = null != t ? t._options : t) ? o.stretch : o,
                        size: null != t ? t.imageSize : t,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n" + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.is_link : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "</div>\n"
            },
            useData: !0
        })
    },
    2717: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <div class="userBadgeListItem__action">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(375), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '<div class="userBadgeListItem__artwork">\n  <a href="' + u((n(58) || t && t.$route || l).call(r, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="userBadgeListItem__image">\n    ' + u((n(53) || t && t.$view || l).call(r, n(89), {
                    name: "$view",
                    hash: {
                        stretch: !0,
                        size: 200,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n  </a>\n</div>\n<div class="userBadgeListItem__title">\n  <a href="' + u((n(58) || t && t.$route || l).call(r, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" title="' + u((n(51) || t && t.$t || l).call(r, "Visit [[username]]â€™s profile", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + '" class="userBadgeListItem__heading sc-type-small sc-link-dark sc-truncate">\n    ' + u(e.lambda(null != t ? t.username : t, t)) + "\n  </a>\n  " + u((n(53) || t && t.$view || l).call(r, n(278), {
                    name: "$view",
                    hash: {
                        referral: "t072",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n</div>\n" + (null != (o = i.unless.call(r, null != t ? t.isMe : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2719: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '  <div class="userBadge__avatar"' + (null != (o = i["if"].call(r, null != t ? t.addAvatarStyles : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ">\n    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(169), {
                    name: "$view",
                    hash: {
                        stretch: null != (o = null != t ? t._options : t) ? o.stretch : o,
                        size: null != (o = null != t ? t._options : t) ? o.size : o,
                        resource_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            2: function(e, t, n, i, a) {
                var s, o = null != t ? t : {};
                return ' style="' + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.avatar_width : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + (null != (s = n["if"].call(o, null != (s = null != t ? t._options : t) ? s.avatar_height : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '"'
            },
            3: function(e, t, n, i, a) {
                var s;
                return "width: " + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.avatar_width : s, t)) + "px;"
            },
            5: function(e, t, n, i, a) {
                var s;
                return " height: " + e.escapeExpression(e.lambda(null != (s = null != t ? t._options : t) ? s.avatar_height : s, t)) + "px;"
            },
            7: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return "        " + e.escapeExpression((n(51) || t && t.$t || r).call(o, "[[[linkStart]]][[[usernameWrapStart]]][[usernameSplit]][[[usernameWrapEnd]]][[[linkEnd]]] [[[premiumIndicator]]] is following you", {
                    name: "$t",
                    hash: {
                        usernameSplit: (n(1061) || t && t.$splitWords || r).call(o, null != t ? t.username : t, {
                            name: "$splitWords",
                            hash: {},
                            data: s
                        }),
                        premiumModifier: null != t ? t.premiumModifier : t,
                        premiumIndicator: (n(53) || t && t.$view || r).call(o, n(278), {
                            name: "$view",
                            hash: {
                                referral: "t072",
                                resource_id: null != t ? t._resource_id : t
                            },
                            data: s
                        }),
                        usernameWrapEnd: "</span>",
                        usernameWrapStart: '<span class="userBadge__usernameWrap">',
                        linkEnd: "</a>",
                        linkStart: (n(281) || t && t.$concat || r).call(o, '<a href="', (n(58) || t && t.$route || r).call(o, "user", t, {
                            name: "$route",
                            hash: {},
                            data: s
                        }), '" ', (n(155) || t && t.$ternary || r).call(o, null != t ? t.noFollow : t, 'rel="nofollow" ', "", {
                            name: "$ternary",
                            hash: {},
                            data: s
                        }), 'title="', (n(51) || t && t.$t || r).call(o, "Visit [[username]]â€™s profile", {
                            name: "$t",
                            hash: {
                                username: null != t ? t.username : t
                            },
                            data: s
                        }), '" class="userBadge__usernameLink m-withFollowed sc-link-dark">', {
                            name: "$concat",
                            hash: {},
                            data: s
                        }),
                        _comment: "[[usernameSplit]] is following you"
                    },
                    data: s
                })) + "\n"
            },
            9: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return '        <a href="' + u((n(58) || t && t.$route || l).call(r, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" ' + (null != (o = i["if"].call(r, null != t ? t.noFollow : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + ' title="' + u((n(51) || t && t.$t || l).call(r, "Visit [[username]]â€™s profile", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + '" class="userBadge__usernameLink sc-link-dark"><span class="userBadge__usernameWrap">' + u((n(1061) || t && t.$splitWords || l).call(r, null != t ? t.username : t, {
                    name: "$splitWords",
                    hash: {},
                    data: s
                })) + "</span></a>\n        " + u((n(53) || t && t.$view || l).call(r, n(278), {
                    name: "$view",
                    hash: {
                        referral: "t072",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            10: function(e, t, n, i, a) {
                return ' rel="nofollow"'
            },
            12: function(e, t, n, i, a) {
                var s;
                return null != (s = n.unless.call(null != t ? t : {}, null != t ? t.isMe : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(13, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            13: function(e, t, i, a, s) {
                var o;
                return "          " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(375), {
                    name: "$view",
                    hash: {
                        is_cta: null != (o = null != t ? t._options : t) ? o.follow_button_cta : o,
                        resource_id: null != t ? t.id : t,
                        size: null != (o = null != t ? t._options : t) ? o.follow_button_size : o
                    },
                    data: s
                })) + "\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.use_image : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '\n<div class="userBadge__content">\n  <div class="userBadge__title">\n    <h3 class="sc-clearfix sc-type-light">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.show_followed : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.program(9, s, 0),
                    data: s
                })) ? o : "") + '    </h3>\n  </div>\n  <div class="userBadge__meta">\n    <div class="userBadge__stats">\n      ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(r, n(649), {
                    name: "$view",
                    hash: {
                        dark: null != (o = null != t ? t._options : t) ? o.dark : o,
                        resource_id: null != t ? t.id : t,
                        size: "small"
                    },
                    data: s
                })) + '\n    </div>\n\n    <div class="userBadge__actions">\n' + (null != (o = i["if"].call(r, null != (o = null != t ? t._options : t) ? o.show_actions : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2720: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return "    " + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(278), {
                    name: "$view",
                    hash: {
                        referral: "t072",
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n"
            },
            3: function(e, t, n, i, a) {
                var s;
                return '  <div class="userDialogBadge__address">\n    <p class="sc-type-light">' + e.escapeExpression((s = null != (s = n.address || (null != t ? t.address : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "address",
                    hash: {},
                    data: a
                }) : s)) + "</p>\n  </div>\n"
            },
            5: function(e, t, i, a, s) {
                return '  <div class="userDialogBadge__action">\n    ' + e.escapeExpression((n(53) || t && t.$view || i.helperMissing).call(null != t ? t : {}, n(375), {
                    name: "$view",
                    hash: {
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + "\n  </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<a href="' + c((n(58) || t && t.$route || u).call(l, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" class="userDialogBadge__avatar">\n  ' + c((n(53) || t && t.$view || u).call(l, n(89), {
                    name: "$view",
                    hash: {
                        size: 80,
                        resource_type: null != t ? t._resource_type : t,
                        resource_id: null != t ? t._resource_id : t
                    },
                    data: s
                })) + '\n</a>\n<div class="userDialogBadge__description sc-type-small">\n  <a href="' + c((n(58) || t && t.$route || u).call(l, "user", t, {
                    name: "$route",
                    hash: {},
                    data: s
                })) + '" title="' + c((n(51) || t && t.$t || u).call(l, "Visit [[username]]â€™s profile", {
                    name: "$t",
                    hash: {
                        username: null != t ? t.username : t
                    },
                    data: s
                })) + '" class="sc-link-dark sc-font">\n    ' + c((r = null != (r = i.username || (null != t ? t.username : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "username",
                    hash: {},
                    data: s
                }) : r)) + "\n  </a>\n" + (null != (o = i["if"].call(l, null != t ? t.isPremium : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '  </a>\n</div>\n<div class="userDialogBadge__stats">\n  ' + c((n(53) || t && t.$view || u).call(l, n(649), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t,
                        showSounds: !1,
                        size: "small"
                    },
                    data: s
                })) + "\n</div>\n" + (null != (o = i["if"].call(l, null != t ? t.address : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i.unless.call(l, null != t ? t.isMe : t, {
                    name: "unless",
                    hash: {},
                    fn: e.program(5, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2724: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return '    Our robots think this signup looks too much like spam.<br>If you believe this to be a mistake, refer to the <a href="http://youraccount.help.soundcloud.com/customer/portal/articles/2105268" target="_blank">help center article</a>.\n'
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l, u = null != t ? t : {},
                    c = i.helperMissing,
                    d = '<h1 class="g-modal-title-h1">' + e.escapeExpression((n(51) || t && t.$t || c).call(u, "We couldnâ€™t sign you up", {
                        name: "$t",
                        hash: {},
                        data: s
                    })) + '</h1>\n<p class="sc-type-small">\n';
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = "function" == typeof r ? r.call(u, l) : r, n(51) || (o = i.blockHelperMissing.call(t, o, l)), null != o && (d += o), d + "</p>\n"
            },
            useData: !0
        })
    },
    2725: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                var o, r, l, u = null != t ? t : {},
                    c = i.helperMissing,
                    d = "function",
                    p = e.escapeExpression,
                    h = i.blockHelperMissing,
                    f = "  <p>" + p((r = null != (r = i.notice_msg || (null != t ? t.notice_msg : t)) ? r : c, typeof r === d ? r.call(u, {
                        name: "notice_msg",
                        hash: {},
                        data: s
                    }) : r)) + "</p>\n  <p>\n";
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(2, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = typeof r === d ? r.call(u, l) : r, n(51) || (o = h.call(t, o, l)), null != o && (f += o), f += "  </p>\n  <p>\n", r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(4, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = typeof r === d ? r.call(u, l) : r, n(51) || (o = h.call(t, o, l)), null != o && (f += o), f + "  </p>\n  <p>" + p((r = null != (r = i.warning_msg || (null != t ? t.warning_msg : t)) ? r : c, typeof r === d ? r.call(u, {
                    name: "warning_msg",
                    hash: {},
                    data: s
                }) : r)) + "</p>\n"
            },
            2: function(e, t, n, i, a) {
                return '      If your account is performing many more actions when compared to most others, it loses the human touch. You can\n      find out more about this policy in our <a href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2151544-feature-limits" target="_blank">help center</a>.\n'
            },
            4: function(e, t, n, i, a) {
                return '      Remember that there is a fine line between promoting yourself and bombarding other users with notifications. We\n      want our community to remain a genuine, positive place for members to interact, so remember to stick to our\n      <a href="https://soundcloud.com/community-guidelines" target="_blank">Community Guidelines</a>.\n'
            },
            6: function(e, t, i, a, s) {
                var o, r, l, u = null != t ? t : {},
                    c = i.helperMissing,
                    d = "function",
                    p = i.blockHelperMissing,
                    h = "  <p>" + e.escapeExpression((r = null != (r = i.blocked_msg || (null != t ? t.blocked_msg : t)) ? r : c, typeof r === d ? r.call(u, {
                        name: "blocked_msg",
                        hash: {},
                        data: s
                    }) : r)) + "</p>\n  <p>\n";
                return r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = typeof r === d ? r.call(u, l) : r, n(51) || (o = p.call(t, o, l)), null != o && (h += o), h += "  </p>\n  <p>\n", r = null != (r = n(51) || (null != t ? t.$t : t)) ? r : c, l = {
                    name: "$t",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                }, o = typeof r === d ? r.call(u, l) : r, n(51) || (o = p.call(t, o, l)), null != o && (h += o), h + "  </p>\n"
            },
            7: function(e, t, n, i, a) {
                return "      As mentioned in our Terms of use, a high volume of similar actions from an account in a short period of time will\n      be considered a violation of our anti-spam policies. As these actions aim to unfairly boost popularity within the\n      community, they are forbidden on our platform.\n"
            },
            9: function(e, t, n, i, a) {
                return '      If you want some tips on how to better promote yourself, and get heard, refer to the page about\n      <a href="http://statsandengagement.help.soundcloud.com/customer/en/portal/topics/858935-promote-improve" target="_blank">community building</a>.\n      If you have been blocked and want to understand more, refer to the page\n      <a href="http://policyandsafety.help.soundcloud.com/customer/portal/articles/2151544-feature-limits" target="_blank">What have I been blocked for?</a>.\n'
            },
            11: function(e, t, i, a, s) {
                return '  <div class="spamWarning__buttonContainer">\n    <button class="spamWarning__acknowledge sc-button sc-button-medium sc-button-cta">\n      ' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "Yes, I understand.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n    </button>\n  </div>\n"
            },
            13: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return "  <p>\n    " + u((o = null != (o = i.unblock_msg || (null != t ? t.unblock_msg : t)) ? o : l, "function" == typeof o ? o.call(r, {
                    name: "unblock_msg",
                    hash: {},
                    data: s
                }) : o)) + "\n    " + u((n(51) || t && t.$t || l).call(r, "The more you hit these limits, the longer the block will last.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n  </p>\n  <p>" + u((n(51) || t && t.$t || l).call(r, "We appreciate your understanding.", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</p>\n  <p>" + u((n(51) || t && t.$t || l).call(r, "The SoundCloud team", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</p>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r = null != t ? t : {};
                return '<p class="sc-type-h2">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(r, "Hello", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + ",</p>\n" + (null != (o = i["if"].call(r, null != t ? t.is_info : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, s, 0),
                    inverse: e.program(6, s, 0),
                    data: s
                })) ? o : "") + "\n" + (null != (o = i["if"].call(r, null != (o = null != t ? t.error : t) ? o.acknowledge_url : o, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.program(13, s, 0),
                    data: s
                })) ? o : "")
            },
            useData: !0
        })
    },
    2726: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, i, a, s) {
                return '  <div class="waveformWrapper__empty sc-type-small">' + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This playlist has no tracks yet", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "</div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="waveformWrapper__waveform"></div>\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.is_playlist : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2727: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                var s;
                return null != (s = n["if"].call(null != t ? t : {}, null != t ? t.showComments : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(2, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : ""
            },
            2: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing,
                    u = e.escapeExpression;
                return "    " + u((n(53) || t && t.$view || l).call(r, n(1428), {
                    name: "$view",
                    hash: {
                        resource_id: null != t ? t._resource_id : t,
                        sound_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n    " + u((n(53) || t && t.$view || l).call(r, n(1429), {
                    name: "$view",
                    hash: {
                        flagSize: null != (o = null != t ? t._options : t) ? o.commentFlagSize : o,
                        darkText: null != (o = null != t ? t._options : t) ? o.darkCommentText : o,
                        avatarSize: null != (o = null != t ? t._options : t) ? o.avatarSize : o,
                        resource_id: null != t ? t._resource_id : t,
                        sound_id: null != t ? t.id : t
                    },
                    data: s
                })) + "\n"
            },
            4: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {};
                return '  <div style="height:' + e.escapeExpression((o = null != (o = n.upperPartHeightPercent || (null != t ? t.upperPartHeightPercent : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(r, {
                    name: "upperPartHeightPercent",
                    hash: {},
                    data: a
                }) : o)) + ';" class="waveform__emptyWaveform sc-font sc-type-light">\n    <span class="waveform__emptyMessage">\n' + (null != (s = n["if"].call(r, null != t ? t.isProcessing : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, a, 0),
                    inverse: e.program(7, a, 0),
                    data: a
                })) ? s : "") + "    </span>\n  </div>\n"
            },
            5: function(e, t, i, a, s) {
                return "        " + e.escapeExpression((n(51) || t && t.$t || i.helperMissing).call(null != t ? t : {}, "This track is being processed", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + "\n      "
            },
            7: function(e, t, n, i, a) {
                var s;
                return '\n        <span class="g-geoblocked-icon">' + e.escapeExpression((s = null != (s = n.blockMsg || (null != t ? t.blockMsg : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(null != t ? t : {}, {
                    name: "blockMsg",
                    hash: {},
                    data: a
                }) : s)) + "</span>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, i, a) {
                var s;
                return '<div class="waveform__layer waveform__scene"></div>\n' + (null != (s = n["if"].call(null != t ? t : {}, null != t ? t.isReady : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, a, 0),
                    inverse: e.program(4, a, 0),
                    data: a
                })) ? s : "")
            },
            useData: !0
        })
    },
    2728: function(e, t, n) {
        var i = n(20);
        e.exports = (i["default"] || i).template({
            1: function(e, t, n, i, a) {
                return '    This player uses cookies in accordance with our <a href="[[cookieRoute]]" target="_blank">Cookies policy</a>. It is your responsibility to disclose this to visitors of any site where you embed the player. <a href="http://help.soundcloud.com/customer/portal/articles/1603169-embedded-player-policy-update" target="_blank">Read more</a>\n'
            },
            3: function(e, t, n, i, a) {
                var s, o, r = null != t ? t : {},
                    l = n.helperMissing,
                    u = "function",
                    c = e.escapeExpression;
                return '            <li class="widgetCustomization__colorListItem">\n              <a class="widgetCustomization__colorBox sc-ir' + (null != (s = n["if"].call(r, null != t ? t.active : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, a, 0),
                    inverse: e.noop,
                    data: a
                })) ? s : "") + '" href="" style="background-color: ' + c((o = null != (o = n.color || (null != t ? t.color : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "color",
                    hash: {},
                    data: a
                }) : o)) + ';">' + c((o = null != (o = n.color || (null != t ? t.color : t)) ? o : l, typeof o === u ? o.call(r, {
                    name: "color",
                    hash: {},
                    data: a
                }) : o)) + "</a>\n            </li>\n"
            },
            4: function(e, t, n, i, a) {
                return " active"
            },
            6: function(e, t, i, a, s) {
                var o, r = null != t ? t : {},
                    l = i.helperMissing;
                return '        <p class="widgetEmbed__option sc-hidden" data-sc-available="html5 visual">\n          ' + e.escapeExpression((n(53) || t && t.$view || l).call(r, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || l).call(r, "Show comments", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        checked: "true",
                        name: "show_comments"
                    },
                    data: s
                })) + "\n        </p>\n" + (null != (o = i["if"].call(r, null != t ? t.isPlaylistWidget : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.isSoundWidget : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + (null != (o = i["if"].call(r, null != t ? t.isUserWidget : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(11, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "")
            },
            7: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '          <p class="widgetEmbed__option sc-hidden" data-sc-available="html5 visual">\n            ' + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || r).call(o, "Show display names", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        checked: "true",
                        name: "show_user"
                    },
                    data: s
                })) + "\n          </p>\n"
            },
            9: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '          <p class="widgetEmbed__option sc-hidden" data-sc-available="html5 visual">\n            ' + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || r).call(o, "Show recommendations", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        checked: "true",
                        name: "hide_related"
                    },
                    data: s
                })) + "\n          </p>\n"
            },
            11: function(e, t, i, a, s) {
                var o = null != t ? t : {},
                    r = i.helperMissing;
                return '          <p class="widgetEmbed__option sc-hidden" data-sc-available="html5 visual">\n            ' + e.escapeExpression((n(53) || t && t.$view || r).call(o, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || r).call(o, "Include reposts", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        name: "show_reposts"
                    },
                    data: s
                })) + "\n          </p>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, i, a, s) {
                var o, r, l = null != t ? t : {},
                    u = i.helperMissing,
                    c = e.escapeExpression;
                return '<h2 class="g-modal-title-h2">' + c((n(51) || t && t.$t || u).call(l, "Code and preview", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</h2>\n<p>\n  <input type="text" value="" class="widgetEmbed__textInput widgetEmbed__widgetCode">\n  <label class="sc-checkbox widgetEmbed__wordpressCheckbox">\n    <input type="checkbox" class="sc-checkbox-input sc-visuallyhidden widgetEmbed__wordpressCode">\n    <span class="sc-checkbox-check"></span>\n    ' + c((n(51) || t && t.$t || u).call(l, "WordPress code", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '\n  </label>\n</p>\n\n<div class="widgetCustomization__players widgetEmbed__players">\n  <div class="widgetEmbed__player sc-hidden" data-sc-player-type="visual"></div>\n  <div class="widgetEmbed__player sc-hidden" data-sc-player-type="html5"></div>\n  <div class="widgetEmbed__player sc-hidden" data-sc-player-type="html5_mini"></div>\n</div>\n\n<p class="widgetEmbed__option sc-hidden" data-sc-available="html5_mini">\n' + (null != (o = (n(51) || t && t.$t || u).call(l, {
                    name: "$t",
                    hash: {
                        cookieRoute: (n(58) || t && t.$route || u).call(l, "pagesPages", "cookies", {
                            name: "$route",
                            hash: {},
                            data: s
                        })
                    },
                    fn: e.program(1, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '</p>\n\n<a href="" class="widgetCustomization__moreToggle sc-link-dark g-link-collapse collapsed">' + c((r = null != (r = i.moreToggleText || (null != t ? t.moreToggleText : t)) ? r : u, "function" == typeof r ? r.call(l, {
                    name: "moreToggleText",
                    hash: {},
                    data: s
                }) : r)) + '</a>\n<div class="widgetCustomization__more">\n  <div class="widgetCustomization__embedCodes sc-media-right">\n  </div>\n  <div class="widgetCustomization__options">\n    <div class="widgetCustomization__topOptions">\n      <div class="widgetCustomization__color sc-clearfix">\n        <span class="widgetCustomization__colorLabel">' + c((n(51) || t && t.$t || u).call(l, "Color:", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</span>\n        <ul class="widgetCustomization__colorList sc-list-nostyle">\n' + (null != (o = i.each.call(l, null != t ? t.colorBoxes : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + '          <li class="widgetCustomization__colorListItem">\n            <input type="text" class="widgetEmbed__textInput widgetCustomization__colorInput widgetEmbed__colorInput" value="#FF5500">\n          </li>\n          <li class="widgetCustomization__colorListItem">\n            <a class="widgetCustomization__colorPickerToggle" href=""><img src="' + n(2364) + '" width="24" height="24" alt="Toggle color chooser"></a>\n          </li>\n        </ul>\n        <div class="widgetCustomization__colorPickerContainer">\n          <input type="text" value="#FF5500" class="widgetEmbed__textInput widgetEmbed__colorPicker">\n        </div>\n      </div>\n      <div class="widgetEmbed__option sc-hidden" data-sc-available="visual">\n        <label for="widgetCustomization__optionSize">' + c((n(51) || t && t.$t || u).call(l, "Size:", {
                    name: "$t",
                    hash: {
                        _comment: "Size of the SoundCloud widget"
                    },
                    data: s
                })) + '</label>\n        <select id="widgetCustomization__optionSize" class="widgetEmbed__size">\n          <option value="300">300px</option>\n          <option value="450" selected>450px</option>\n          <option value="600">600px</option>\n        </select>\n      </div>\n    </div>\n    <div class="widgetCustomization__lowerOptions">\n      <div class="widgetEmbed__option widgetCustomization__backgroundStyle sc-hidden" data-sc-available="html5_mini">\n        <label for="widgetCustomization__optionBackground">' + c((n(51) || t && t.$t || u).call(l, "Background:", {
                    name: "$t",
                    hash: {
                        _comment: "The background style of the SoundCloud widget"
                    },
                    data: s
                })) + '</label>\n        <select id="widgetCustomization__optionBackground" class="widgetEmbed__backgroundStyle">\n          <option value="light">' + c((n(51) || t && t.$t || u).call(l, "light", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</option>\n          <option value="dark">' + c((n(51) || t && t.$t || u).call(l, "dark", {
                    name: "$t",
                    hash: {},
                    data: s
                })) + '</option>\n        </select>\n      </div>\n      <p class="widgetEmbed__option sc-hidden" data-sc-available="html5 visual html5_mini">\n        ' + c((n(53) || t && t.$view || u).call(l, n(176), {
                    name: "$view",
                    hash: {
                        label: (n(51) || t && t.$t || u).call(l, "Enable automatic play", {
                            name: "$t",
                            hash: {},
                            data: s
                        }),
                        name: "auto_play"
                    },
                    data: s
                })) + "\n      </p>\n" + (null != (o = i["if"].call(l, null != t ? t.canSeeExtraWidgetOptions : t, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, s, 0),
                    inverse: e.noop,
                    data: s
                })) ? o : "") + "    </div>\n  </div>\n</div>\n"
            },
            useData: !0
        })
    },
    2758: function(e, t, n) {
        var i = n(1835);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2759: function(e, t, n) {
        var i = n(1836);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2760: function(e, t, n) {
        var i = n(1837);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2761: function(e, t, n) {
        var i = n(1838);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2788: function(e, t, n) {
        var i = n(1873);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2789: function(e, t, n) {
        var i = n(1876);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2888: function(e, t, n) {
        var i = n(1982);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2889: function(e, t, n) {
        var i = n(1983);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2890: function(e, t, n) {
        var i = n(1984);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2896: function(e, t, n) {
        var i = n(1990);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2899: function(e, t, n) {
        var i = n(1993);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2900: function(e, t, n) {
        var i = n(1994);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2902: function(e, t, n) {
        var i = n(1996);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2906: function(e, t, n) {
        var i = n(2e3);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2907: function(e, t, n) {
        var i = n(2001);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2908: function(e, t, n) {
        var i = n(2002);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2912: function(e, t, n) {
        var i = n(2007);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2917: function(e, t, n) {
        var i = n(2012);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2918: function(e, t, n) {
        var i = n(2013);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2939: function(e, t, n) {
        var i = n(2034);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2940: function(e, t, n) {
        var i = n(2035);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2941: function(e, t, n) {
        var i = n(2036);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2942: function(e, t, n) {
        var i = n(2037);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2943: function(e, t, n) {
        var i = n(2038);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2944: function(e, t, n) {
        var i = n(2039);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2945: function(e, t, n) {
        var i = n(2040);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2946: function(e, t, n) {
        var i = n(2041);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2947: function(e, t, n) {
        var i = n(2042);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2948: function(e, t, n) {
        var i = n(2043);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2949: function(e, t, n) {
        var i = n(2044);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2950: function(e, t, n) {
        var i = n(2045);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2951: function(e, t, n) {
        var i = n(2046);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2952: function(e, t, n) {
        var i = n(2047);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2953: function(e, t, n) {
        var i = n(2048);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2955: function(e, t, n) {
        var i = n(2050);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2956: function(e, t, n) {
        var i = n(2051);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2957: function(e, t, n) {
        var i = n(2052);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2958: function(e, t, n) {
        var i = n(2053);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2959: function(e, t, n) {
        var i = n(2054);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2994: function(e, t, n) {
        var i = n(2092);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2995: function(e, t, n) {
        var i = n(2093);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2996: function(e, t, n) {
        var i = n(2094);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2997: function(e, t, n) {
        var i = n(2095);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2998: function(e, t, n) {
        var i = n(2096);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    2999: function(e, t, n) {
        var i = n(2097);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3e3: function(e, t, n) {
        var i = n(2098);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3001: function(e, t, n) {
        var i = n(2099);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3003: function(e, t, n) {
        var i = n(2101);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3004: function(e, t, n) {
        var i = n(2102);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3005: function(e, t, n) {
        var i = n(2103);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3006: function(e, t, n) {
        var i = n(2104);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3007: function(e, t, n) {
        var i = n(2105);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3009: function(e, t, n) {
        var i = n(2108);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3010: function(e, t, n) {
        var i = n(2109);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3011: function(e, t, n) {
        var i = n(2110);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3012: function(e, t, n) {
        var i = n(2111);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3013: function(e, t, n) {
        var i = n(2112);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3014: function(e, t, n) {
        var i = n(2113);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3015: function(e, t, n) {
        var i = n(2114);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3016: function(e, t, n) {
        var i = n(2115);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3017: function(e, t, n) {
        var i = n(2116);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3018: function(e, t, n) {
        var i = n(2117);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3019: function(e, t, n) {
        var i = n(2118);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3020: function(e, t, n) {
        var i = n(2119);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3022: function(e, t, n) {
        var i = n(2121);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3024: function(e, t, n) {
        var i = n(2123);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3027: function(e, t, n) {
        var i = n(2126);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3028: function(e, t, n) {
        var i = n(2127);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3039: function(e, t, n) {
        var i = n(2138);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3040: function(e, t, n) {
        var i = n(2139);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3042: function(e, t, n) {
        var i = n(2141);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3043: function(e, t, n) {
        var i = n(2142);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3052: function(e, t, n) {
        var i = n(2151);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3055: function(e, t, n) {
        var i = n(2154);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3056: function(e, t, n) {
        var i = n(2155);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3058: function(e, t, n) {
        var i = n(2157);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3059: function(e, t, n) {
        var i = n(2158);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3060: function(e, t, n) {
        var i = n(2159);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3061: function(e, t, n) {
        var i = n(2160);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3065: function(e, t, n) {
        var i = n(2164);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3069: function(e, t, n) {
        var i = n(2168);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3084: function(e, t, n) {
        var i = n(2183);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3085: function(e, t, n) {
        var i = n(2184);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3086: function(e, t, n) {
        var i = n(2185);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3089: function(e, t, n) {
        var i = n(2188);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3090: function(e, t, n) {
        var i = n(2189);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3093: function(e, t, n) {
        var i = n(2192);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3094: function(e, t, n) {
        var i = n(2193);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3095: function(e, t, n) {
        var i = n(2194);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3098: function(e, t, n) {
        var i = n(2197);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3100: function(e, t, n) {
        var i = n(2199);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3101: function(e, t, n) {
        var i = n(2200);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3102: function(e, t, n) {
        var i = n(2201);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3103: function(e, t, n) {
        var i = n(2202);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    },
    3104: function(e, t, n) {
        var i = n(2203);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(7)(i, {})
    }
});