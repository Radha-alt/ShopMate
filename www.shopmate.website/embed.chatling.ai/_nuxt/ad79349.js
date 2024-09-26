(window.webpackJsonp = window.webpackJsonp || []).push([
    [1, 13, 14, 16], {
        385: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "e", (function() {
                return l
            })), i.d(e, "d", (function() {
                return s
            })), i.d(e, "c", (function() {
                return a
            })), i.d(e, "a", (function() {
                return u
            }));
            i(71), i(72), i(422);
            var n = {
                    NOT_STARTED: 1,
                    STARTED: 2,
                    COMPLETED: 3
                },
                l = {
                    BOT: 1,
                    USER: 2,
                    SYSTEM: 3
                },
                r = {
                    TEXT: "bot_text",
                    IMAGE: "bot_image",
                    VIDEO: "bot_video",
                    AUDIO: "bot_audio",
                    CAROUSEL: "bot_carousel"
                },
                o = {
                    BUTTONS: "input_buttons",
                    TEXT: "input_text",
                    NUMBER: "input_number",
                    EMAIL: "input_email",
                    URL: "input_url",
                    DATETIME: "input_datetime",
                    PHONE: "input_phone",
                    FORM: "input_form"
                },
                s = {
                    OUTPUTS: r,
                    INPUTS: o,
                    AI: {
                        RESPONSE: "ai_generate_response"
                    },
                    LOG: {
                        CONDITION: "logic_condition",
                        CONDITION_LANGUAGE: "logic_condition_language",
                        END: "logic_end"
                    },
                    ACTION: {
                        HTTP: "action_http",
                        SEND_EMAIL: "action_send_email",
                        SET_VARIABLE: "action_set_variable"
                    },
                    TRIGGER: {
                        RETURNING_USER: "trigger_returning_user",
                        SPECIFIC_WEBPAGE_OPENED: "trigger_specific_webpage_opened"
                    },
                    SYSTEM: {
                        DEBUG_MESSAGE: "system_debug_message"
                    },
                    ZENDESK: {
                        CREATE_TICKET: "zendesk_create_ticket"
                    },
                    CALCOM: {
                        BOOK: "calcom_book"
                    }
                },
                a = {
                    INPUT: "input",
                    OUTPUT: "output",
                    AI: "ai",
                    ERROR: "error",
                    LOGIC: "logic",
                    SYSTEM: "system",
                    ACTION: "action",
                    ZENDESK: "zendesk",
                    CALCOM: "calcom",
                    TRIGGER: "trigger"
                },
                u = {
                    KB: "knowledge_base",
                    MODEL: "ai_model"
                }
        },
        405: function(t, e, i) {
            "use strict";
            i.r(e);
            i(38), i(51), i(148), i(230);
            var n = {
                    name: "CarouselItemMessage",
                    props: {
                        item: {
                            required: !0
                        },
                        currentCarouselItemIndex: {
                            type: Number,
                            required: !0
                        },
                        carouselItemWidth: {
                            type: Number,
                            required: !0
                        }
                    },
                    computed: {
                        buttonCSS: function() {
                            return {
                                padding: "7px",
                                "border-radius": "5px",
                                color: "#000",
                                "font-size": "0.95em",
                                cursor: "pointer",
                                "background-color": "#f9fafb",
                                "text-decoration": "none",
                                "text-align": "center",
                                "user-select": "none",
                                border: "1px solid #e5e7eb",
                                display: "block",
                                width: "100%"
                            }
                        },
                        buttonContainerCSS: function() {
                            var t = {
                                gap: "5px",
                                display: "flex",
                                "flex-direction": "column"
                            };
                            return (this.hasButtons || this.hasDescription) && (t["margin-top"] = "10px"), t
                        },
                        imageUrl: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.image_url;
                            return null == e || 0 == (e = e.trim()).length ? null : e
                        },
                        title: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.title;
                            return null == e ? null : e
                        },
                        description: function() {
                            var t;
                            if (null == this.item) return null;
                            var e = null === (t = this.item) || void 0 === t ? void 0 : t.description;
                            return null == e ? null : e
                        },
                        hasButtons: function() {
                            var t, e;
                            return null != this.item && (null != (null === (t = this.item) || void 0 === t ? void 0 : t.buttons) && 0 != (null === (e = this.item) || void 0 === e ? void 0 : e.buttons.length))
                        },
                        hasImage: function() {
                            return null != this.item && (null != this.imageUrl && 0 != this.imageUrl.length)
                        },
                        hasTitle: function() {
                            return null != this.item && null != this.title
                        },
                        hasDescription: function() {
                            return null != this.item && null != this.description
                        }
                    },
                    methods: {
                        getButtonType: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.content;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.type;
                            return null == i ? null : i
                        },
                        getButtonLabel: function(t) {
                            return null == t ? null : null == t ? void 0 : t.label
                        },
                        getButtonUrl: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.content;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.type;
                            return null == i || "url" != i ? null : null == e ? void 0 : e.value
                        }
                    }
                },
                l = i(89),
                r = Object(l.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.hasImage ? e("div", {
                        staticStyle: {
                            width: "100%"
                        },
                        style: {
                            "border-bottom": t.hasTitle || t.hasDescription || t.hasButtons ? "1px solid #e5e7eb" : "none"
                        }
                    }, [e("img", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            src: t.imageUrl
                        }
                    })]) : t._e(), t._v(" "), t.hasTitle || t.hasDescription || t.hasButtons ? e("div", {
                        staticStyle: {
                            padding: "15px",
                            gap: "5px",
                            display: "flex",
                            "flex-direction": "column"
                        }
                    }, [t.hasTitle ? e("div", {
                        staticStyle: {
                            color: "#1f2937",
                            "font-weight": "500",
                            "user-select": "none"
                        }
                    }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), t.hasDescription ? e("div", {
                        staticStyle: {
                            color: "#6b7280",
                            "font-size": "0.95em",
                            "user-select": "none"
                        }
                    }, [t._v(t._s(t.description))]) : t._e(), t._v(" "), t.hasButtons ? e("div", {
                        style: t.buttonContainerCSS
                    }, t._l(t.item.buttons, (function(i) {
                        return e("div", {
                            key: null == i ? void 0 : i.id,
                            staticStyle: {
                                width: "100%",
                                display: "flex"
                            }
                        }, ["url" == t.getButtonType(i) && null != t.getButtonUrl(i) && 0 != t.getButtonUrl(i).length ? e("a", {
                            style: t.buttonCSS,
                            attrs: {
                                href: t.getButtonUrl(i),
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }
                        }, [t._v(t._s(t.getButtonLabel(i)))]) : t._e()])
                    })), 0) : t._e()]) : t._e()])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        413: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = i(14),
                l = (i(39), i(69), i(16), i(31), i(230), i(26), i(71), i(52), i(46), i(72), i(385)),
                r = i(417),
                o = i(418),
                s = i(404),
                a = (i(403), {
                    props: {
                        activeInputMessageId: {
                            default: null
                        },
                        messagesToShowAiAvatar: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        translation: {
                            type: Object,
                            required: !0
                        },
                        messageType: {
                            type: String,
                            required: !0
                        },
                        message: {
                            required: !0
                        },
                        languageDirection: {
                            type: String
                        },
                        maxSources: {
                            default: 0
                        },
                        botIconUrl: {
                            type: String
                        },
                        primaryColor: {
                            type: String,
                            required: !0
                        },
                        textColor: {
                            type: String,
                            required: !0
                        },
                        assistantTextColor: {
                            type: String,
                            required: !0
                        },
                        assistantBGColor: {
                            type: String,
                            required: !0
                        },
                        appearance: {
                            type: Object,
                            required: !0
                        },
                        settings: {
                            type: Object
                        },
                        isMobileViewport: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            calcomInlineBookElementId: "cal-booking-inline",
                            calcomScriptId: "calcom-chtl-script",
                            aiKbSourcesVisible: !1,
                            inputFormFieldValues: {},
                            inputFormFieldErrors: {},
                            currentCarouselItemIndex: 0,
                            carouselItemWidth: 250,
                            error: {
                                inputFormSubmission: null
                            }
                        }
                    },
                    mounted: function() {
                        if (this.isInputFormBlock) {
                            if (!this.inputFormDisabled) try {
                                this.$refs.chtl_input_form[0].focus()
                            } catch (t) {}
                            this.setupInputForm()
                        } else this.isCalBookingBlock && (this.isBlockSubmitted || this.setupCalEmbed())
                    },
                    components: {
                        VideoMessage: r.default,
                        CarouselMessage: o.default,
                        DatePicker: s.a
                    },
                    methods: {
                        cleanupCalEmbed: function() {
                            var t = document.getElementById(this.calcomScriptId);
                            t && t.remove(), window.Cal && (window.Cal.loaded = !1, window.Cal.q = [], window.Cal.ns = {})
                        },
                        emitBookingEvent: function(t) {
                            this.$emit("inputSubmittedFromMessage", {
                                message_id: this.message.id,
                                message: this.message,
                                booking: t
                            })
                        },
                        setupCalEmbed: function() {
                            var t, e, i, n = this,
                                l = {
                                    successful: !1,
                                    error: null,
                                    id: null,
                                    start_date: null,
                                    end_date: null,
                                    user: {
                                        name: null,
                                        email: null
                                    }
                                },
                                r = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == r) return l.error = "Error setting up booking (CODE: 2446)", l.successful = !1, void this.emitBookingEvent(l);
                            var o = null == r ? void 0 : r.data;
                            if (null == o) return l.error = "Error setting up booking (CODE: 2447)", l.successful = !1, void this.emitBookingEvent(l);
                            var s = this.$generateUUID(),
                                a = null == o ? void 0 : o.permalink,
                                u = null == o ? void 0 : o.hide_event_details,
                                c = null !== (e = null == o ? void 0 : o.layout) && void 0 !== e ? e : "month",
                                d = null !== (i = null == o ? void 0 : o.theme) && void 0 !== i ? i : "auto",
                                h = null == o ? void 0 : o.prefill,
                                p = null,
                                m = null,
                                v = null,
                                g = null;
                            if (null == a) return l.error = "Error setting up booking (CODE: 2448)", l.successful = !1, void this.emitBookingEvent(l);
                            try {
                                if (!document.getElementById(this.calcomScriptId)) {
                                    var f = document.createElement("script");
                                    f.id = this.calcomScriptId, f.type = "text/javascript", f.innerHTML = '\n                            (function (C, A, L) {\n                            let p = function (a, ar) {\n                                a.q.push(ar);\n                            };\n                            let d = C.document;\n                            C.Cal = C.Cal || function () {\n                                let cal = C.Cal;\n                                let ar = arguments;\n                                if (!cal.loaded) {\n                                cal.ns = {};\n                                cal.q = cal.q || [];\n                                d.head.appendChild(d.createElement("script")).src = A;\n                                cal.loaded = true;\n                                }\n                                if (ar[0] === L) {\n                                const api = function () {\n                                    p(api, arguments);\n                                };\n                                const namespace = ar[1];\n                                api.q = api.q || [];\n                                if (typeof namespace === "string") {\n                                    cal.ns[namespace] = cal.ns[namespace] || api;\n                                    p(cal.ns[namespace], ar);\n                                    p(cal, ["initNamespace", namespace]);\n                                } else p(cal, ar);\n                                return;\n                                }\n                                p(cal, ar);\n                            };\n                            })(window, "https://app.cal.com/embed/embed.js", "init");\n                        ', document.head.appendChild(f)
                                }
                                var b = {
                                    styles: {
                                        branding: {
                                            brandColor: "#000000"
                                        }
                                    },
                                    hideEventTypeDetails: u,
                                    layout: c,
                                    theme: d
                                };
                                "auto" != d && (b.theme = d), null != h && (p = null == h ? void 0 : h.name, m = null == h ? void 0 : h.email, v = null == h ? void 0 : h.phone, g = null == h ? void 0 : h.notes);
                                var k = {
                                    elementOrSelector: "#" + this.calcomInlineBookElementId,
                                    calLink: a,
                                    config: {}
                                };
                                null != m && m.length > 0 && (k.config.email = m), null != p && p.length > 0 && (k.config.name = p), null != v && v.length > 0 && (k.config.phone = v), null != g && g.length > 0 && (k.config.notes = g), Cal("init", s, {
                                    origin: "https://app.cal.com"
                                }), Cal.ns[s]("inline", k), Cal.ns[s]("ui", b), Cal.ns[s]("on", {
                                    action: "bookingSuccessful",
                                    callback: function(t) {
                                        var e, i = t.detail,
                                            r = i.data,
                                            o = (i.type, i.namespace, null == r ? void 0 : r.date),
                                            s = null,
                                            a = null,
                                            u = null,
                                            c = null;
                                        null != (null == r ? void 0 : r.booking) && (s = r.booking.id, null != o && 0 != o.length || (o = r.booking.startTime), a = r.booking.endTime, null != (null == r || null === (e = r.booking) || void 0 === e ? void 0 : e.responses) && (c = r.booking.responses.email, u = r.booking.responses.name));
                                        l.successful = !0, l.error = null, l.id = s, l.start_date = o, l.end_date = a, l.user.name = u, l.user.email = c, n.emitBookingEvent(l)
                                    }
                                }), Cal.ns[s]("on", {
                                    action: "linkFailed",
                                    callback: function(t) {
                                        var e = t.detail,
                                            i = e.data,
                                            r = (e.type, e.namespace, null),
                                            o = null;
                                        try {
                                            r = null == i ? void 0 : i.code, o = null == i ? void 0 : i.msg
                                        } catch (t) {}
                                        l.error = "Error setting up booking. (Code: ".concat(r, ", Message: ").concat(o, ")"), l.successful = !1, n.emitBookingEvent(l)
                                    }
                                })
                            } catch (t) {
                                return l.error = "Error setting up booking (CODE: 2449)", l.successful = !1, void this.emitBookingEvent(l)
                            }
                        },
                        shouldShowFormField: function(t) {
                            return !0
                        },
                        dateTimeFieldValueChanged: function(t, e) {
                            var i = null == e ? void 0 : e.id;
                            null != i && (i in this.inputFormFieldErrors && (this.inputFormFieldErrors[i] = null), this.inputFormFieldValues[i] = null, null != t && (this.inputFormFieldValues[i] = t))
                        },
                        getDateTimeFormatString: function(t) {
                            var e = "YYYY-MM-DD HH:mm";
                            return null == t || ("date" == t ? e = "YYYY-MM-DD" : "time" == t && (e = "HH:mm")), e
                        },
                        copyMessageClicked: function() {
                            if (this.canCopyMessage) try {
                                var t = this.$refs.text_el_to_copy;
                                if (null != t) {
                                    var e = document.createRange();
                                    e.selectNode(t), window.getSelection().removeAllRanges(), window.getSelection().addRange(e), document.execCommand("copy"), window.getSelection().removeAllRanges(), this.$emit("showNotification", "success", "Copied text")
                                }
                            } catch (t) {
                                log.error("copy error:", t)
                            }
                        },
                        setupInputForm: function() {
                            var t, e = this;
                            this.inputFormFieldValues = {};
                            var i = this.isInputFormSubmitted;
                            null != this.blockData && null != (null === (t = this.blockData) || void 0 === t ? void 0 : t.fields) && 0 != this.blockData.fields.length && this.blockData.fields.forEach((function(t) {
                                if (null != t && 0 != e.shouldShowFormField(t)) {
                                    var n = null;
                                    i && (n = null == t ? void 0 : t.value), e.$set(e.inputFormFieldValues, t.id, n), e.$set(e.inputFormFieldErrors, t.id, null)
                                }
                            }))
                        },
                        onInputFormField: function(t) {
                            this.error.inputFormSubmission = null, t in this.inputFormFieldErrors && (this.inputFormFieldErrors[t] = null)
                        },
                        clearFieldErrors: function() {
                            for (var t in this.inputFormFieldErrors) this.inputFormFieldErrors[t] = null;
                            this.error.inputFormSubmission = null
                        },
                        submitInputForm: function() {
                            if (!this.inputFormDisabled) {
                                this.clearFieldErrors();
                                for (var t = !0, e = "Enter all the required fields", i = 0; i < this.inputFormFields.length; i++) {
                                    var n = this.inputFormFields[i];
                                    if (null != n) {
                                        var l = null == n ? void 0 : n.required,
                                            r = null == n ? void 0 : n.type,
                                            o = null == n ? void 0 : n.id;
                                        if (0 != this.shouldShowFormField(n)) {
                                            var s = null;
                                            if (1 == l) {
                                                if (!o in this.inputFormFieldValues) {
                                                    this.error.inputFormSubmission = e, t = !1;
                                                    break
                                                }
                                                if (null == (s = this.inputFormFieldValues[o]) || 0 == s.length) {
                                                    this.error.inputFormSubmission = e, t = !1;
                                                    break
                                                }
                                                if (0 == (s = s.trim()).length) {
                                                    this.error.inputFormSubmission = e, t = !1;
                                                    break
                                                }
                                            }
                                            var a = null;
                                            if ("url" == r ? a = 2048 : "email" == r ? a = 320 : "text" == r && (a = 3e3), null != a && a > 0 && null != s && s.length > a) this.inputFormFieldErrors[o] = "Must not exceed ".concat(a, " characters"), t = !1;
                                            else if (null != r) {
                                                if ("email" == r && !this.$isValidEmail(s)) {
                                                    this.inputFormFieldErrors[o] = "Invalid email address", t = !1;
                                                    continue
                                                }
                                                if ("number" == r && !this.$isValidNumber(s, "number")) {
                                                    this.inputFormFieldErrors[o] = "Invalid input", t = !1;
                                                    continue
                                                }
                                                if ("integer" == r && !this.$isValidNumber(s, "integer")) {
                                                    this.inputFormFieldErrors[o] = "Invalid input", t = !1;
                                                    continue
                                                }
                                                if ("url" == r && !this.$isValidURL(s)) {
                                                    this.inputFormFieldErrors[o] = "Invalid URL (make sure it starts with http:// or https://)", t = !1;
                                                    continue
                                                }
                                            }
                                        }
                                    }
                                }
                                if (t) {
                                    var u = this.inputFormFieldValues;
                                    for (var c in u) {
                                        var d = u[c];
                                        null != d && (d = d.trim(), u[c] = d)
                                    }
                                    this.$emit("inputFormSubmitted", {
                                        values: this.inputFormFieldValues,
                                        message: this.message
                                    })
                                }
                            }
                        },
                        isRtlString: function(t) {
                            return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\u0590-\u05FF\uFB1D-\uFB4F]/.test(t)
                        },
                        getUserMessageText: function() {
                            var t;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.text;
                            return null != e && e.length > 0 ? {
                                type: "text",
                                text: e
                            } : null
                        },
                        buttonItemClicked: function(t) {
                            this.$emit("buttonBlockClicked", {
                                button: t,
                                message: this.message
                            })
                        },
                        carouselControlClicked: function(t) {
                            "left" == t ? this.currentCarouselItemIndex > 0 && this.currentCarouselItemIndex-- : "right" == t && this.currentCarouselItemIndex < this.blockData.items.length - 1 && this.currentCarouselItemIndex++
                        },
                        markdownToHtml: function(t) {
                            if (null == t) return "";
                            var e = this.$md.render(t);
                            try {
                                var i = this.addTargetAttrToHtmlLinks(e, "_blank");
                                null != i && i.length > 0 && (e = i)
                            } catch (t) {}
                            return e
                        },
                        addTargetAttrToHtmlLinks: function(t, e) {
                            var i = document.createElement("div");
                            return i.innerHTML = t, i.querySelectorAll("a").forEach((function(t) {
                                t.setAttribute("target", e)
                            })), i.innerHTML
                        },
                        predefinedQuerySelected: function(t) {
                            this.$emit("predefinedQuerySelected", t)
                        },
                        ratingSelected: function(t) {
                            if (1 === t || -1 === t) {
                                var e = null;
                                if (this.isAiKbResponseBlock) e = this.aiKbResponseRatingValue;
                                else {
                                    if (!this.isAiCompletionResponseBlock) return;
                                    e = this.aiCompletionResponseRatingValue
                                }
                                1 !== e && -1 !== e && e !== t && this.$emit("aiResponseRated", {
                                    message: this.message,
                                    rating: t
                                })
                            }
                        },
                        getTextBlockHTML: function() {
                            var t, e = null === (t = this.blockData) || void 0 === t ? void 0 : t.richText;
                            return null == e || 0 == e.length ? "" : this.$convertRichTextToHTML(e, [], "chatbot_message")
                        },
                        getAiKbResponseHTML: function() {
                            return null == this.aiKbResponseText || 0 == this.aiKbResponseText.length ? "" : this.markdownToHtml(this.aiKbResponseText)
                        },
                        getAiCompletionResponseHTML: function() {
                            return null == this.aiCompletionResponseText || 0 == this.aiCompletionResponseText.length ? "" : this.markdownToHtml(this.aiCompletionResponseText)
                        }
                    },
                    computed: {
                        isCalBookingBlock: function() {
                            return this.blockType === l.d.CALCOM.BOOK
                        },
                        botMessageBubbleWrapperCSS: function() {
                            var t = {};
                            return this.isInputFormBlock && (t.width = "100%"), t
                        },
                        isTodayTimestamp: function() {
                            return null != this.timestamp && this.$isTodayTimestamp(this.timestamp)
                        },
                        showMessageTimestamp: function() {
                            return null != this.messageTimestamp && this.messageTimestamp.length > 0
                        },
                        canCopyMessage: function() {
                            return this.blockType === this.blockTypes.OUTPUTS.TEXT || this.isAiKbResponseBlock || this.isAiCompletionResponseBlock
                        },
                        timestamp: function() {
                            var t;
                            return null == this.message ? null : null === (t = this.message) || void 0 === t ? void 0 : t.timestamp
                        },
                        messageTimestamp: function() {
                            return null == this.timestamp ? null : this.isTodayTimestamp ? this.$formatTimeInConversation(this.timestamp) : this.$formatDateShortInChat(this.timestamp)
                        },
                        inputFieldGlobalCSS: function() {
                            var t = {};
                            return this.isMobileViewport && (t["font-size"] = "16px"), t
                        },
                        sourceLabelCaretIconCSS: function() {
                            var t = {
                                transition: "all 0.15s ease"
                            };
                            return this.aiKbSourcesVisible ? (t.transform = "rotate(90deg)", "rtl" == this.languageDirection ? t["margin-left"] = "6px" : t["margin-right"] = "6px") : "rtl" == this.languageDirection ? (t.transform = "rotate(180deg)", t["margin-left"] = "4px") : t["margin-right"] = "4px", t
                        },
                        inputFormFields: function() {
                            var t;
                            return null == this.blockData || null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.fields) || 0 == this.blockData.fields.length ? null : this.blockData.fields
                        },
                        AllRoleId: function() {
                            return l.e
                        },
                        isDebugMessage: function() {
                            if (this.blockType === l.d.SYSTEM.DEBUG_MESSAGE) return !0
                        },
                        debugMessageText: function() {
                            var t, e, i;
                            return this.isDebugMessage && null != (null === (t = this.message) || void 0 === t ? void 0 : t.component) ? null === (e = this.message) || void 0 === e || null === (i = e.component) || void 0 === i ? void 0 : i.text : null
                        },
                        isErrorBlock: function() {
                            if (this.BlockCategory == l.c.ERROR) return !0
                        },
                        errorBlockMessage: function() {
                            var t;
                            return this.isErrorBlock ? null == this.blockData ? null : null === (t = this.blockData) || void 0 === t ? void 0 : t.message : null
                        },
                        errorBlockTitle: function() {
                            var t, e = "Error";
                            if (!this.isErrorBlock) return e;
                            if (null == this.blockData) return e;
                            var i = null === (t = this.blockData) || void 0 === t ? void 0 : t.title;
                            return null == i || 0 == i.length ? e : i
                        },
                        isErrorForAdmin: function() {
                            var t;
                            return !!this.isErrorBlock && (null != this.blockData && 2 == (null === (t = this.blockData) || void 0 === t ? void 0 : t.display_to))
                        },
                        hasData: function() {
                            var t;
                            return this.$chatMessageBlockHasData(null === (t = this.message) || void 0 === t ? void 0 : t.component, this.blockTypes, l.a)
                        },
                        showMessage: function() {
                            if (this.roleId == this.AllRoleId.USER) {
                                var t;
                                if (null == this.getUserMessageText()) return !1;
                                var e = null === (t = this.getUserMessageText()) || void 0 === t ? void 0 : t.text;
                                return null != e && 0 != e.length && 0 != (e = e.trim()).length
                            }
                            return this.roleId != this.AllRoleId.BOT || this.blockType !== l.d.ACTION.HTTP && ((!this.isCalBookingBlock || !this.isBlockSubmitted) && this.hasData)
                        },
                        outputImageUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        outputAudioUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        outputAudioAutoplay: function() {
                            var t;
                            return null != this.blockData && (null != (null === (t = this.blockData) || void 0 === t ? void 0 : t.autoplay) && this.blockData.autoplay)
                        },
                        outputVideoUrl: function() {
                            var t;
                            if (null == this.blockData) return null;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return null;
                            var e = this.blockData.url;
                            return null == e || 0 == e.length || 0 == (e = e.trim()).length ? null : e
                        },
                        aiKbAnswerNotFound: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.blockData) || void 0 === t ? void 0 : t.answer_not_found;
                            return null != e && e
                        },
                        aiKbResponseText: function() {
                            var t;
                            if (1 != this.isAiKbResponseBlock) return null;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.text
                        },
                        isAiKbResponseStreaming: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && 1 == (null == i ? void 0 : i.stream)
                        },
                        isAiKbResponseStreamingEnded: function() {
                            var t;
                            if (!this.isAiKbResponseBlock) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.stream_status) == l.b.COMPLETED
                        },
                        aiKbResponseRatingValue: function() {
                            var t;
                            if (1 != this.isAiKbResponseBlock) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.rating_value;
                            if (null == i) return null;
                            try {
                                return parseInt(i)
                            } catch (t) {
                                return null
                            }
                        },
                        isAiKbResponseBlock: function() {
                            var t;
                            if (!this.blockType === l.d.AI.RESPONSE) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.response_source) === l.a.KB
                        },
                        isAiCompletionResponseBlock: function() {
                            var t;
                            if (!this.blockType === l.d.AI.RESPONSE) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return !1;
                            var i = null == e ? void 0 : e.data;
                            return null != i && (null == i ? void 0 : i.response_source) === l.a.MODEL
                        },
                        aiCompletionResponseText: function() {
                            var t;
                            if (1 != this.isAiCompletionResponseBlock) return null;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.text
                        },
                        aiCompletionResponseRatingValue: function() {
                            var t;
                            if (1 != this.isAiCompletionResponseBlock) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            if (null == e) return null;
                            var i = null == e ? void 0 : e.rating_value;
                            if (null == i) return null;
                            try {
                                return parseInt(i)
                            } catch (t) {
                                return null
                            }
                        },
                        hasUrlData: function() {
                            var t;
                            if (null == this.blockData) return !1;
                            if (null == (null === (t = this.blockData) || void 0 === t ? void 0 : t.url)) return !1;
                            var e = this.blockData.url;
                            return null != e && 0 != e.length
                        },
                        selectedButtonData: function() {
                            var t;
                            if (1 == this.isButtonsBlock || this.roleId == this.AllRoleId.BOT) {
                                if (null == this.message) return null;
                                var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                                if (null == e) return null;
                                if (null == (null == e ? void 0 : e.data)) return null;
                                var i = null == e ? void 0 : e.data;
                                if (null == (null == i ? void 0 : i.options) || 0 == i.options.length) return null;
                                var n = null == e ? void 0 : e.selected_item_id;
                                if (null == n || 0 == n.length) return null;
                                for (var l = null, r = 0; r < i.options.length; r++) {
                                    var o = i.options[r];
                                    if ((null == o ? void 0 : o.id) == n) {
                                        l = o;
                                        break
                                    }
                                }
                                return l
                            }
                        },
                        isCarouselBlock: function() {
                            return this.blockType === l.d.OUTPUTS.CAROUSEL
                        },
                        isButtonsBlock: function() {
                            return this.blockType === l.d.INPUTS.BUTTONS
                        },
                        isInputFormBlock: function() {
                            return this.blockType === l.d.INPUTS.FORM
                        },
                        isInputFormSubmitted: function() {
                            var t;
                            if (!this.isInputFormBlock) return !1;
                            if (null == this.message) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null != e && 1 == (null == e ? void 0 : e.submitted)
                        },
                        inputFormDisabled: function() {
                            var t;
                            return !!this.isInputFormSubmitted || (null == this.activeInputMessageId || (null == this.message || this.activeInputMessageId != (null === (t = this.message) || void 0 === t ? void 0 : t.id)))
                        },
                        isBlockSubmitted: function() {
                            var t;
                            if (!this.isInputFormBlock && !this.isCalBookingBlock) return !1;
                            if (null == this.message) return !1;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null != e && 1 == (null == e ? void 0 : e.submitted)
                        },
                        isAiMessage: function() {
                            var t;
                            return null != this.message && !0 === (null === (t = this.message) || void 0 === t ? void 0 : t.is_ai_message)
                        },
                        blockData: function() {
                            var t;
                            if (null == this.message) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.data
                        },
                        blockTypes: function() {
                            return l.d
                        },
                        predefinedQueryCSS: function() {
                            var t;
                            return t = {
                                "font-size": "12px",
                                padding: "5px",
                                "border-radius": "5px",
                                display: "inline-block"
                            }, Object(n.a)(t, "padding", "5px 10px"), Object(n.a)(t, "background", "transparent"), Object(n.a)(t, "border", "1px solid ".concat(this.primaryColor)), Object(n.a)(t, "color", this.primaryColor), Object(n.a)(t, "cursor", "pointer"), Object(n.a)(t, "margin", "4px 4px 0 0"), t
                        },
                        selectedButtonItemCSS: function() {
                            var t = this.primaryColor,
                                e = this.$getContrastingColor(t);
                            null == e && (t = "#000", e = "#fff"), t = "#000", e = "#fff";
                            var i = {};
                            return null != this.selectedButtonData && (i["background-color"] = t, i.color = e, i["border-color"] = t, i["font-weight"] = "500"), i
                        },
                        buttonItemCSS: function() {
                            var t = "all 0.3s ease",
                                e = {
                                    background: "transparent",
                                    color: "#000",
                                    cursor: "pointer",
                                    "font-size": "0.95em",
                                    display: "inline-block",
                                    margin: "4px 4px 0 0",
                                    "font-weight": "400",
                                    padding: "8px 10px",
                                    border: "1px solid #e5e7eb",
                                    "background-color": "#fff",
                                    "box-shadow": "rgb(0 0 0 / 5%) 0px 2px 4px",
                                    "border-radius": "5px",
                                    transition: t,
                                    "-webkit-transition": t,
                                    "-moz-transition": t,
                                    "-o-transition": t
                                };
                            return null != this.selectedButtonData && (e["background-color"] = "#f3f4f6", e["border-color"] = "#f3f4f6", e.color = "#71717a", e["font-weight"] = "400", e.cursor = "not-allowed"), e
                        },
                        showAiKbResponseSourcesEnabled: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.enabled;
                                return null !== i && (0 != i && ((0 != this.showSourcePageTitle || 0 != this.showSourcePageURL || 0 != this.showSourceDocumentFilename || 0 != this.showSourceDocumentURL) && i))
                            } catch (t) {
                                return !1
                            }
                        },
                        hasValidAiKbResponseSources: function() {
                            try {
                                if (!this.isAiKbResponseBlock) return !1;
                                var t = this.aiKbResponseSources;
                                if (null == t || 0 == t.length) return !1;
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    if ("webpage" != (null == i ? void 0 : i.type) || 1 != this.showSourcePageTitle && 1 != this.showSourcePageURL)
                                        if ("document_url" != (null == i ? void 0 : i.type) || 1 != this.showSourceDocumentFilename && 1 != this.showSourceDocumentURL) {
                                            if ("document" == (null == i ? void 0 : i.type) && 1 == this.showSourceDocumentFilename && null != i.filename && i.filename.trim().length > 0) return !0
                                        } else {
                                            if (null != i.filename && i.filename.trim().length > 0) return !0;
                                            if (null != i.url && i.url.trim().length > 0) return !0
                                        }
                                    else {
                                        if (null != i.title && i.title.trim().length > 0) return !0;
                                        if (null != i.url && i.url.trim().length > 0) return !0
                                    }
                                }
                                return !1
                            } catch (t) {
                                return !1
                            }
                        },
                        aiKbResponseSources: function() {
                            try {
                                var t;
                                if (null == this.blockData) return [];
                                var e = null === (t = this.blockData) || void 0 === t ? void 0 : t.sources;
                                if (null == e || 0 == e.length) return [];
                                var i = [],
                                    n = [],
                                    l = [];
                                if (0 == this.maxSources) return [];
                                for (var r = 0; r < e.length; r++) {
                                    var o = e[r];
                                    if (null != o) {
                                        var s = null == o ? void 0 : o.url,
                                            a = null == o ? void 0 : o.filename;
                                        if (null != s && s.length > 0 && null == a) {
                                            if (0 == (s = s.trim()).length) continue;
                                            if (n.includes(s)) continue;
                                            n.push(s);
                                            var u = null == o ? void 0 : o.title;
                                            null != u && 0 == (u = u.trim()).length && (u = null);
                                            var c = s.replace(/(^\w+:|^)\/\//, "");
                                            c = c.replace("www.", ""), i.push({
                                                type: "webpage",
                                                title: u,
                                                url: s,
                                                shortened_url: c
                                            })
                                        } else if (null != s && null != a) {
                                            if (0 == (s = s.trim()).length && 0 == a.length) continue;
                                            if (n.includes(s)) continue;
                                            if (l.includes(a)) continue;
                                            n.push(s), l.push(s);
                                            var d = s.replace(/(^\w+:|^)\/\//, "");
                                            d = d.replace("www.", ""), i.push({
                                                type: "document_url",
                                                filename: a,
                                                url: s,
                                                shortened_url: d
                                            })
                                        } else {
                                            if (!(null != a && a.length > 0)) continue;
                                            if (a = a.trim(), l.includes(a)) continue;
                                            l.push(a), i.push({
                                                type: "document",
                                                filename: a
                                            })
                                        }
                                    }
                                }
                                return null != i && i.length > this.maxSources && (i = i.slice(0, this.maxSources)), i
                            } catch (t) {
                                return []
                            }
                        },
                        showAiKbRating: function() {
                            var t;
                            return !!this.isAiKbResponseBlock && (0 != (null === (t = this.settings) || void 0 === t ? void 0 : t.rate_each_chatbot_response) && (!0 !== this.isAiKbResponseStreaming || 1 == this.isAiKbResponseStreaming && 1 == this.isAiKbResponseStreamingEnded))
                        },
                        roleId: function() {
                            return "welcome_text" == this.messageType || "bot_thinking" == this.messageType ? this.AllRoleId.BOT : "normal" == this.messageType ? this.message.role_id : null
                        },
                        blockType: function() {
                            var t;
                            if ("normal" != this.messageType) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.type
                        },
                        BlockCategory: function() {
                            var t;
                            if ("normal" != this.messageType) return null;
                            var e = null === (t = this.message) || void 0 === t ? void 0 : t.component;
                            return null == e ? null : null == e ? void 0 : e.category
                        },
                        chatBubbleWrapperCSS: function() {
                            var t = {
                                display: "flex",
                                "align-items": "flex-end",
                                "margin-bottom": "7px"
                            };
                            return this.roleId == this.AllRoleId.BOT && this.isCarouselBlock && (t["align-items"] = "flex-start"), this.roleId == this.AllRoleId.USER && (t["justify-content"] = "flex-end", t["padding-left"] = "45px"), t.position = "relative", t
                        },
                        inlineErrorCSS: function() {
                            return {
                                background: "#fef2f2",
                                color: "#fff",
                                padding: "5px 15px",
                                "font-size": "0.9em",
                                "font-weight": "500",
                                "border-radius": "5px",
                                "text-align": "left",
                                display: "flex",
                                "align-items": "center",
                                border: "1px solid #dc2626",
                                width: "100%"
                            }
                        },
                        inlineErrorTitleCSS: function() {
                            return {
                                color: "#dc2626",
                                "font-weight": "500"
                            }
                        },
                        inlineErrorMessageCSS: function() {
                            return {
                                color: "#dc2626",
                                "font-weight": "400",
                                "margin-top": "3px"
                            }
                        },
                        chatBubbleCSS: function() {
                            var t = {
                                "box-sizing": "border-box",
                                "overflow-wrap": "anywhere",
                                padding: "10px 15px",
                                "border-radius": "10px",
                                "font-size": "13.5px",
                                transition: "width 200ms linear"
                            };
                            return this.roleId == this.AllRoleId.USER ? (t["border-bottom-right-radius"] = "2px", t["background-color"] = this.primaryColor, t.color = this.textColor) : (t["border-bottom-left-radius"] = "2px", t["background-color"] = this.assistantBGColor, t.color = this.assistantTextColor), this.isInputFormBlock && (t["min-width"] = "250px", t["max-width"] = "450px", t.width = "100%"), "rtl" == this.languageDirection && (t.direction = "rtl"), "normal" == this.messageType && (this.isCarouselBlock ? (t.padding = "0px", t["border-radius"] = "0px", t["background-color"] = "transparent", t["overflow-wrap"] = "unset", t.display = "block") : this.isButtonsBlock && this.roleId == this.AllRoleId.BOT && (t.padding = "0px", t["border-radius"] = "0px", t["background-color"] = "transparent", t.display = "block")), t
                        },
                        chatAvatarImgCSS: function() {
                            var t, e, i, n, l, r, o = {
                                    "flex-shrink": "0"
                                },
                                s = 35,
                                a = !0,
                                u = 10;
                            return null != (null === (t = this.appearance) || void 0 === t || null === (e = t.avatar_icon) || void 0 === e ? void 0 : e.full_rounded) && (a = this.appearance.avatar_icon.full_rounded), null != (null === (i = this.appearance) || void 0 === i || null === (n = i.avatar_icon) || void 0 === n ? void 0 : n.size) && (s = this.appearance.avatar_icon.size), null != (null === (l = this.appearance) || void 0 === l || null === (r = l.avatar_icon) || void 0 === r ? void 0 : r.border_radius) && (u = this.appearance.avatar_icon.border_radius), o.width = "".concat(s, "px"), o.height = "".concat(s, "px"), o["border-radius"] = a ? "100%" : "".concat(u, "px"), this.roleId == this.AllRoleId.BOT && (o["margin-right"] = "10px", null != this.botIconUrl && this.botIconUrl.length > 0 && (o["background-image"] = "url(".concat(this.botIconUrl, ")")), o["background-size"] = "cover", o["background-repeat"] = "no-repeat", o["background-position"] = "center"), o.visibility = "hidden", ("bot_thinking" == this.messageType || "normal" == this.messageType && this.roleId == this.AllRoleId.BOT && this.showAvatar) && (o.visibility = "visible"), o
                        },
                        showAvatar: function() {
                            var t;
                            if ("normal" == this.messageType && (null != this.message && null != (null === (t = this.message) || void 0 === t ? void 0 : t.id) && this.roleId == this.AllRoleId.BOT && null != this.messagesToShowAiAvatar && this.messagesToShowAiAvatar.includes(this.message.id))) return !0
                        },
                        sourceWrapperCSS: function() {},
                        sourceTitleCSS: function() {
                            var t = Object(n.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourcePageURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameCSS: function() {
                            var t = Object(n.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourceDocumentURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameOnlyCSS: function() {
                            return Object(n.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "400"
                            }, "color", "#000")
                        },
                        sourceURLCSS: function() {
                            return {
                                color: "#4b5563",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap"
                            }
                        },
                        sourceLabelCSS: function() {
                            return {
                                color: "rgb(80 93 106)",
                                direction: this.languageDirection
                            }
                        },
                        helpfulRatingContainerCSS: function() {
                            return {
                                "margin-top": "10px",
                                "padding-top": "10px",
                                direction: this.languageDirection
                            }
                        },
                        helpfulRatingTextCSS: function() {
                            return {
                                color: "rgb(80 93 106)",
                                "font-size": "0.95em",
                                "margin-bottom": "5px"
                            }
                        },
                        showSourcePageTitle: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var n = null == i ? void 0 : i.page_title;
                                return null !== n && n
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var n = null == i ? void 0 : i.page_url;
                                return null !== n && n
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentFilename: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var n = null == i ? void 0 : i.document_filename;
                                return null !== n && n
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var i = null == e ? void 0 : e.fields;
                                if (null == i) return !1;
                                var n = null == i ? void 0 : i.document_url;
                                return null !== n && n
                            } catch (t) {
                                return !1
                            }
                        },
                        sourcesWrapperCSS: function() {
                            return {
                                "border-top": "1px solid #dee1e5",
                                "margin-top": "12px",
                                "padding-top": "12px",
                                "font-size": "0.95em",
                                display: "flex",
                                "flex-direction": "column",
                                gap: "10px"
                            }
                        }
                    }
                }),
                u = (i(424), i(89)),
                c = Object(u.a)(a, (function() {
                    var t = this,
                        e = t._self._c;
                    return "normal" == t.messageType && t.showMessage ? e("div", [e("div", [t.roleId == t.AllRoleId.BOT ? e("div", {
                        style: t.chatBubbleWrapperCSS
                    }, [t.isCarouselBlock ? e("div", [t.currentCarouselItemIndex > 0 ? e("div", {
                        staticClass: "chtl-carousel-control",
                        style: [{
                            left: "0px"
                        }],
                        on: {
                            click: function(e) {
                                return t.carouselControlClicked("left")
                            }
                        }
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#6b7280",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "m12 19-7-7 7-7"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M19 12H5"
                        }
                    })])]) : t._e(), t._v(" "), t.currentCarouselItemIndex < t.blockData.items.length - 1 ? e("div", {
                        staticClass: "chtl-carousel-control",
                        style: [{
                            right: "0px"
                        }],
                        on: {
                            click: function(e) {
                                return t.carouselControlClicked("right")
                            }
                        }
                    }, [e("svg", {
                        staticStyle: {
                            rotate: "180deg"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#6b7280",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "m12 19-7-7 7-7"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M19 12H5"
                        }
                    })])]) : t._e()]) : t._e(), t._v(" "), e("div", {
                        style: t.chatAvatarImgCSS
                    }), t._v(" "), e("div", {
                        staticClass: "chtl-bot-bubble-message-wrapper",
                        style: t.botMessageBubbleWrapperCSS
                    }, [e("div", {
                        style: t.chatBubbleCSS
                    }, [null != t.blockData ? e("div", [t.blockType === t.blockTypes.OUTPUTS.TEXT ? e("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: t._s(t.getTextBlockHTML())
                        }
                    }) : t.isAiKbResponseBlock && !t.aiKbAnswerNotFound && null != t.aiKbResponseText && t.aiKbResponseText.length > 0 ? e("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: t._s(t.getAiKbResponseHTML())
                        }
                    }) : t.isAiCompletionResponseBlock && null != t.aiCompletionResponseText && t.aiCompletionResponseText.length > 0 ? e("div", {
                        ref: "text_el_to_copy",
                        staticClass: "chtl-reset bot",
                        domProps: {
                            innerHTML: t._s(t.getAiCompletionResponseHTML())
                        }
                    }) : t.isCarouselBlock ? e("div", [e("CarouselMessage", {
                        attrs: {
                            data: t.blockData,
                            currentCarouselItemIndex: t.currentCarouselItemIndex,
                            carouselItemWidth: t.carouselItemWidth
                        }
                    })], 1) : t.blockType === t.blockTypes.OUTPUTS.IMAGE ? e("div", [e("div", [e("img", {
                        staticClass: "chtl-ot-image",
                        attrs: {
                            src: t.outputImageUrl
                        }
                    })])]) : t.blockType === t.blockTypes.OUTPUTS.AUDIO ? e("div", [e("div", {
                        staticClass: "chtl-ot-audio-wrapper"
                    }, [e("audio", {
                        staticClass: "chtl-ot-audio",
                        attrs: {
                            controls: "controls",
                            autobuffer: "",
                            preload: "auto",
                            autoplay: t.outputAudioAutoplay
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.outputAudioUrl
                        }
                    }), t._v("Your browser does not support the audio element.")])])]) : t.blockType === t.blockTypes.OUTPUTS.VIDEO ? e("div", [e("VideoMessage", {
                        attrs: {
                            url: t.outputVideoUrl
                        }
                    })], 1) : t.isButtonsBlock ? e("div", t._l(t.blockData.options, (function(i) {
                        return null != (null == i ? void 0 : i.label) && i.label.length > 0 ? e("div", {
                            staticClass: "chtl-block-button-item",
                            on: {
                                click: function(e) {
                                    return t.buttonItemClicked(i)
                                }
                            }
                        }, [t._v(t._s(i.label))]) : t._e()
                    })), 0) : t.isInputFormBlock && null != t.inputFormFields && t.inputFormFields.length > 0 ? e("div", [e("form", {
                        ref: "chtl_input_form",
                        staticClass: "chtl-input-form-bock",
                        attrs: {
                            onsubmit: "return false;"
                        }
                    }, [t._l(t.inputFormFields, (function(i, n) {
                        return t.shouldShowFormField(i) ? e("div", {
                            key: i.id,
                            style: {
                                "margin-bottom": n == t.inputFormFields.length - 1 ? "0" : "10px"
                            }
                        }, [e("div", {
                            staticClass: "input-field flx",
                            class: {
                                required: 1 == (null == i ? void 0 : i.required)
                            }
                        }, [e("label", {
                            staticClass: "weight-medium"
                        }, [t._v(t._s(i.label))]), t._v(" "), "date" == i.type || "datetime" == i.type || "time" == i.type ? e("date-picker", {
                            staticClass: "chtl-form-datepicker-input",
                            staticStyle: {
                                width: "100%"
                            },
                            style: {
                                direction: t.languageDirection
                            },
                            attrs: {
                                value: t.inputFormFieldValues[i.id],
                                type: i.type,
                                valueType: "format",
                                format: t.getDateTimeFormatString(i.type),
                                disabled: t.inputFormDisabled
                            },
                            on: {
                                input: function(e) {
                                    return t.dateTimeFieldValueChanged(e, i)
                                }
                            }
                        }) : e("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: t.inputFormFieldValues[i.id],
                                expression: "inputFormFieldValues[field.id]"
                            }],
                            staticClass: "input",
                            style: t.inputFieldGlobalCSS,
                            attrs: {
                                type: "text",
                                placeholder: "",
                                disabled: t.inputFormDisabled
                            },
                            domProps: {
                                value: t.inputFormFieldValues[i.id]
                            },
                            on: {
                                keyup: function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.submitInputForm.apply(null, arguments)
                                },
                                input: [function(e) {
                                    e.target.composing || t.$set(t.inputFormFieldValues, i.id, e.target.value)
                                }, function(e) {
                                    return t.onInputFormField(i.id)
                                }]
                            }
                        }), t._v(" "), i.id in t.inputFormFieldErrors && null != t.inputFormFieldErrors[i.id] && t.inputFormFieldErrors[i.id].length > 0 ? e("div", {
                            staticClass: "chtl-error"
                        }, [t._v(t._s(t.inputFormFieldErrors[i.id]))]) : t._e()], 1)]) : t._e()
                    })), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null != t.error.inputFormSubmission && t.error.inputFormSubmission.length > 0,
                            expression: "error.inputFormSubmission != null && error.inputFormSubmission.length > 0"
                        }],
                        staticClass: "chtl-error",
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }, [t._v(t._s(t.error.inputFormSubmission))]), t._v(" "), e("div", {
                        staticClass: "chtl-input-form-bock-submit-btn-wrapper"
                    }, [e("div", {
                        staticClass: "chtl-btn-primary",
                        class: {
                            disabled: t.inputFormDisabled
                        },
                        on: {
                            click: t.submitInputForm
                        }
                    }, [t._v(t._s(t.translation.global.submit))])])], 2)]) : t.isCalBookingBlock ? e("div", [e("div", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "max-height": "450px",
                            overflow: "scroll"
                        },
                        attrs: {
                            id: t.calcomInlineBookElementId
                        }
                    })]) : t._e()]) : t._e(), t._v(" "), t.isAiKbResponseBlock && (t.showAiKbResponseSourcesEnabled && t.hasValidAiKbResponseSources && !t.aiKbAnswerNotFound || t.showAiKbRating && (!0 !== t.isAiKbResponseStreaming || 1 == t.isAiKbResponseStreaming && 1 == t.isAiKbResponseStreamingEnded)) ? e("div", {
                        style: t.sourcesWrapperCSS
                    }, [t.showAiKbRating ? e("div", {
                        staticClass: "chtl-msg-actions",
                        class: {
                            mob: t.isMobileViewport
                        }
                    }, [t.canCopyMessage ? e("div", {
                        staticClass: "chtl-icon chtl-msg-action",
                        on: {
                            click: t.copyMessageClicked
                        }
                    }, [e("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "13",
                            height: "13",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("rect", {
                        attrs: {
                            width: "14",
                            height: "14",
                            x: "8",
                            y: "8",
                            rx: "2",
                            ry: "2"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                        }
                    })])]) : t._e(), t._v(" "), t.showAiKbRating ? e("div", {
                        staticClass: "chtl-icon chtl-msg-action",
                        class: {
                            active: -1 === t.aiKbResponseRatingValue, disabled: null !== t.aiKbResponseRatingValue && -1 !== t.aiKbResponseRatingValue
                        },
                        on: {
                            click: function(e) {
                                return t.ratingSelected(-1)
                            }
                        }
                    }, [e("svg", {
                        staticClass: "lucide lucide-thumbs-down",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "black",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M17 14V2"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"
                        }
                    })])]) : t._e(), t._v(" "), t.showAiKbRating ? e("div", {
                        staticClass: "chtl-icon chtl-msg-action",
                        class: {
                            active: 1 === t.aiKbResponseRatingValue, disabled: null !== t.aiKbResponseRatingValue && 1 !== t.aiKbResponseRatingValue
                        },
                        on: {
                            click: function(e) {
                                return t.ratingSelected(1)
                            }
                        }
                    }, [e("svg", {
                        staticClass: "lucide lucide-thumbs-up",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M7 10v12"
                        }
                    }), e("path", {
                        attrs: {
                            d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"
                        }
                    })])]) : t._e()]) : t._e(), t._v(" "), t.showAiKbResponseSourcesEnabled && t.hasValidAiKbResponseSources && !t.aiKbAnswerNotFound ? e("div", [e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "user-select": "none"
                        }
                    }, [e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(e) {
                                t.aiKbSourcesVisible = !t.aiKbSourcesVisible
                            }
                        }
                    }, [e("svg", {
                        style: t.sourceLabelCaretIconCSS,
                        attrs: {
                            width: "4",
                            viewBox: "0 0 52 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M0.170898 98.7374L0.170898 2.23739C0.170898 1.03739 1.6709 0.337389 2.5709 1.23739L50.7709 49.5374C51.2709 50.0374 51.2709 50.9374 50.7709 51.5374L2.5709 99.7374C1.6709 100.637 0.170898 99.9374 0.170898 98.7374Z",
                            fill: "#8b94a6"
                        }
                    })]), t._v(" "), e("div", {
                        style: t.sourceLabelCSS
                    }, [t._v(t._s(t.translation.chat_bubble.sources))])])]), t._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.aiKbSourcesVisible,
                            expression: "aiKbSourcesVisible"
                        }],
                        staticStyle: {
                            "margin-top": "5px"
                        },
                        style: {
                            direction: t.languageDirection
                        }
                    }, t._l(t.aiKbResponseSources, (function(i) {
                        return e("div", {
                            staticStyle: {
                                display: "inline-block",
                                "user-select": "none"
                            }
                        }, ["webpage" == i.type && (t.showSourcePageTitle || t.showSourcePageURL) ? e("a", {
                            staticClass: "chtl-source",
                            style: t.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: i.url
                            }
                        }, [t.showSourcePageTitle && null != i.title && i.title.length > 0 ? e("div", {
                            style: t.sourceTitleCSS
                        }, [t._v(t._s(i.title))]) : t._e(), t._v(" "), t.showSourcePageURL ? e("div", {
                            style: t.sourceURLCSS
                        }, [t._v(t._s(i.shortened_url))]) : t._e()]) : "document_url" == i.type && 1 == t.showSourceDocumentFilename && 1 == t.showSourceDocumentURL ? e("a", {
                            staticClass: "chtl-source",
                            style: t.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: i.url
                            }
                        }, [null != i.filename && i.filename.length > 0 ? e("div", {
                            style: t.sourceDocumentFilenameCSS
                        }, [t._v(t._s(i.filename))]) : t._e(), t._v(" "), null != i.shortened_url && i.shortened_url.length > 0 ? e("div", {
                            style: t.sourceURLCSS
                        }, [t._v(t._s(i.shortened_url))]) : t._e()]) : "document_url" == i.type && 0 == t.showSourceDocumentFilename && 1 == t.showSourceDocumentURL && null != i.shortened_url && i.shortened_url.length > 0 ? e("a", {
                            staticClass: "chtl-source",
                            style: t.sourceWrapperCSS,
                            attrs: {
                                target: "_blank",
                                href: i.url
                            }
                        }, [e("div", {
                            style: t.sourceURLCSS
                        }, [t._v(t._s(i.shortened_url))])]) : ("document" == i.type || "document_url" == i.type) && 1 == t.showSourceDocumentFilename && null != i.filename && i.filename.length > 0 ? e("div", {
                            staticClass: "chtl-source",
                            style: t.sourceWrapperCSS
                        }, [e("div", {
                            style: t.sourceDocumentFilenameOnlyCSS
                        }, [t._v(t._s(i.filename))])]) : t._e()])
                    })), 0)]) : t._e()]) : t._e()])])]) : t.roleId == t.AllRoleId.USER ? e("div", {
                        style: t.chatBubbleWrapperCSS
                    }, [null != t.getUserMessageText() && null != t.getUserMessageText().text ? e("div", {
                        staticClass: "chtl-reset",
                        style: t.chatBubbleCSS,
                        domProps: {
                            innerHTML: t._s(t.getUserMessageText().text)
                        }
                    }) : t._e()]) : t.roleId == t.AllRoleId.SYSTEM ? e("div", {
                        style: t.chatBubbleWrapperCSS
                    }, [t.isErrorBlock ? e("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [e("div", {
                        staticClass: "chtl-chat-error-inline"
                    }, [e("div"), t._v(" "), e("div", {
                        staticClass: "chtl-chat-error-inline-icon"
                    }, [e("svg", {
                        staticClass: "lucide lucide-alert-circle",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            stroke: "#dc2626",
                            width: "20",
                            height: "20",
                            viewBox: "0 0 24 24",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("circle", {
                        attrs: {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }
                    }), e("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "8",
                            y2: "12"
                        }
                    }), e("line", {
                        attrs: {
                            x1: "12",
                            x2: "12.01",
                            y1: "16",
                            y2: "16"
                        }
                    })])]), t._v(" "), e("div", [e("div", {
                        staticClass: "chtl-chat-error-inline-title"
                    }, [t._v(t._s(t.errorBlockTitle))]), t._v(" "), e("div", {
                        staticClass: "chtl-chat-error-inline-message"
                    }, [t._v(t._s(t.errorBlockMessage))])])]), t._v(" "), t.isErrorForAdmin ? e("div", {
                        staticStyle: {
                            "margin-top": "8px",
                            color: "#6b7280",
                            "font-size": "0.85em"
                        }
                    }, [t._v("\n                    * This error is visible to you and your team only.\n                ")]) : t._e()]) : 1 == t.isDebugMessage && null != t.debugMessageText && t.debugMessageText.length > 0 ? e("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [e("div", {
                        staticStyle: {
                            color: "#6b7280",
                            "font-size": "0.85em",
                            "text-align": "center"
                        }
                    }, [t._v("\n                    " + t._s(t.debugMessageText) + "\n                ")])]) : t._e()]) : t._e()])]) : "bot_thinking" == t.messageType ? e("div", [e("div", {
                        staticClass: "ch1fkl",
                        style: t.chatBubbleWrapperCSS
                    }, [e("div", {
                        style: t.chatAvatarImgCSS
                    }), t._v(" "), e("div", {
                        style: t.chatBubbleCSS
                    }, [t._m(0)])])]) : t._e()
                }), [function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "ticontainer"
                    }, [e("div", {
                        staticClass: "tiblock"
                    }, [e("div", {
                        staticClass: "tidot"
                    }), t._v(" "), e("div", {
                        staticClass: "tidot"
                    }), t._v(" "), e("div", {
                        staticClass: "tidot"
                    })])])
                }], !1, null, "2b0a7cf7", null);
            e.default = c.exports
        },
        416: function(t, e, i) {
            var n = i(425);
            n.__esModule && (n = n.default), "string" == typeof n && (n = [
                [t.i, n, ""]
            ]), n.locals && (t.exports = n.locals);
            (0, i(114).default)("71217017", n, !0, {
                sourceMap: !1
            })
        },
        417: function(t, e, i) {
            "use strict";
            i.r(e);
            i(26), i(154);
            var n = {
                    name: "VideoMessage",
                    props: {
                        url: {
                            type: String,
                            required: !0
                        }
                    },
                    mounted: function() {},
                    computed: {},
                    methods: {
                        isYouTubeVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getYoutubeVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        isYouTubeShortsUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getYoutubeShortsId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getYouTubeEmbedUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                if (0 == this.isYouTubeVideoUrl(t) && 0 == this.isYouTubeShortsUrl(t)) return null;
                                if (this.isYouTubeVideoUrl(t)) {
                                    var e = this.getYoutubeVideoId(t);
                                    return null == e || 0 == e.length ? null : "https://www.youtube.com/embed/".concat(e)
                                }
                                if (this.isYouTubeShortsUrl(t)) {
                                    var i = this.getYoutubeShortsId(t);
                                    return null == i || 0 == i.length ? null : "https://www.youtube.com/embed/".concat(i)
                                }
                                return null
                            } catch (t) {
                                return null
                            }
                        },
                        getYoutubeShortsId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/shorts\/([a-zA-Z0-9_-]+)/),
                                    i = e ? e[1] : null;
                                return null == i || 0 == i.length ? null : i
                            } catch (t) {
                                return null
                            }
                        },
                        getYoutubeVideoId: function(t) {
                            try {
                                var e = t.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isVimeoVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getVimeoVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getVimeoVideoId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/^https?:\/\/(www\.)?vimeo\.com\/(\d+)(\/|\?.*)?$/);
                                return e ? e[2] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isDailymotionVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getDailymotionVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getDailymotionVideoId: function(t) {
                            try {
                                if (null == t || 0 == t.length) return null;
                                var e = t.match(/dailymotion\.com\/video\/([a-zA-Z0-9]+)/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        },
                        isIntagramPostUrl: function(t) {
                            try {
                                return /^https?:\/\/(www\.)?instagram\.com\/(p|reel)\/[a-zA-Z0-9-_]+\/?/.test(t)
                            } catch (t) {
                                return null
                            }
                        },
                        isTikTokVideoUrl: function(t) {
                            try {
                                if (null == t || 0 == t.length) return !1;
                                var e = this.getTikTokVideoId(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        getTikTokVideoId: function(t) {
                            try {
                                var e = t.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
                                return e ? e[1] : null
                            } catch (t) {
                                return null
                            }
                        }
                    }
                },
                l = i(89),
                r = Object(l.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [t.isYouTubeVideoUrl(t.url) || t.isYouTubeShortsUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px"
                        },
                        attrs: {
                            src: t.getYouTubeEmbedUrl(t.url),
                            title: "YouTube video player",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: ""
                        }
                    })]) : t.isVimeoVideoUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px"
                        },
                        attrs: {
                            src: "https://player.vimeo.com/video/".concat(t.getVimeoVideoId(t.url), "?h=d7e7506c10&color=ffffff&title=0&byline=0&portrait=0&badge=0"),
                            frameborder: "0",
                            allow: "autoplay; fullscreen; picture-in-picture",
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: ""
                        }
                    })]) : t.isTikTokVideoUrl(t.url) ? e("div", [e("blockquote", {
                        staticClass: "tiktok-embed",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            cite: t.url,
                            "data-video-id": t.getTikTokVideoId(t.url)
                        }
                    }, [e("section")]), t._v(" "), e("script", {
                        attrs: {
                            async: "",
                            src: "https://www.tiktok.com/embed.js"
                        }
                    })]) : t.isDailymotionVideoUrl(t.url) ? e("div", [e("iframe", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px",
                            "min-height": "250px",
                            overflow: "hidden"
                        },
                        attrs: {
                            frameborder: "0",
                            type: "text/html",
                            src: "https://www.dailymotion.com/embed/video/".concat(t.getDailymotionVideoId(t.url)),
                            allowfullscreen: "",
                            mozallowfullscreen: "",
                            webkitallowfullscreen: "",
                            allow: "autoplay"
                        }
                    })]) : e("div", [e("video", {
                        staticStyle: {
                            width: "100%",
                            height: "100%",
                            "border-radius": "5px"
                        },
                        attrs: {
                            disablePictureInPicture: "",
                            controls: ""
                        }
                    }, [e("source", {
                        attrs: {
                            src: t.url,
                            type: "video/mp4"
                        }
                    }), t._v("\n            Your browser does not support the video tag.\n        ")])])])
                }), [], !1, null, null, null);
            e.default = r.exports
        },
        418: function(t, e, i) {
            "use strict";
            i.r(e);
            i(148);
            var n = i(405),
                l = {
                    name: "CarouselMessage",
                    props: {
                        data: {
                            required: !0
                        },
                        currentCarouselItemIndex: {
                            type: Number,
                            required: !0
                        },
                        carouselItemWidth: {
                            type: Number,
                            required: !0
                        }
                    },
                    components: {
                        CarouselItemMessage: n.default
                    },
                    methods: {}
                },
                r = i(89),
                o = Object(r.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "flex-start"
                        },
                        style: {
                            width: "".concat(t.data.items.length * t.carouselItemWidth, "px"),
                            transform: 0 == t.currentCarouselItemIndex ? "translateX(-".concat(t.currentCarouselItemIndex * t.carouselItemWidth, "px)") : "translateX(-".concat(t.currentCarouselItemIndex * t.carouselItemWidth + 15 * t.currentCarouselItemIndex, "px)"),
                            transition: "transform 0.3s ease-in-out"
                        }
                    }, [e("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "flex-start",
                            gap: "15px",
                            "flex-grow": "1",
                            "background-color": "white"
                        }
                    }, t._l(t.data.items, (function(i, n) {
                        return e("div", {
                            key: null == i ? void 0 : i.id,
                            staticStyle: {
                                overflow: "hidden",
                                "border-radius": "10px",
                                border: "1px solid #e5e7eb",
                                "background-color": "#fff",
                                display: "flex",
                                "flex-direction": "column",
                                "flex-shrink": "0"
                            },
                            style: {
                                width: "".concat(t.carouselItemWidth, "px")
                            }
                        }, [e("CarouselItemMessage", {
                            attrs: {
                                item: i,
                                currentCarouselItemIndex: t.currentCarouselItemIndex,
                                carouselItemWidth: t.carouselItemWidth
                            }
                        })], 1)
                    })), 0)])
                }), [], !1, null, null, null);
            e.default = o.exports
        },
        424: function(t, e, i) {
            "use strict";
            i(416)
        },
        425: function(t, e, i) {
            var n = i(113)((function(t) {
                return t[1]
            }));
            n.push([t.i, ".chtl-msg-actions[data-v-2b0a7cf7]{align-items:center;display:flex;gap:10px;height:0;justify-content:left;opacity:0;transition:opacity .3s ease,height .5s ease}.chtl-msg-actions[data-v-2b0a7cf7],.chtl-msg-actions.mob[data-v-2b0a7cf7]{height:auto;opacity:1}.chtl-msg-action[data-v-2b0a7cf7]{-webkit-user-select:none;-moz-user-select:none;user-select:none}.chtl-bot-bubble-message-wrapper:hover .chtl-msg-actions[data-v-2b0a7cf7]{height:auto;opacity:1}.chtl-msg-actions .chtl-icon svg[data-v-2b0a7cf7]{stroke:#9ca3af;stroke-width:2.2px;cursor:pointer;display:block;height:12px;transition:stroke .2s ease;width:12px}.chtl-msg-actions .chtl-icon svg[data-v-2b0a7cf7]:hover{stroke:var(--chtl-primary-color)}.chtl-msg-actions .chtl-msg-action.chtl-icon.active svg[data-v-2b0a7cf7]{stroke:var(--chtl-primary-color);cursor:auto}.chtl-msg-actions .chtl-msg-action.chtl-icon.disabled svg[data-v-2b0a7cf7]{stroke:#d1d5db;cursor:auto}.chtl-msg-actions .chtl-seperator[data-v-2b0a7cf7]{background:#e5e7eb;display:inline-block;height:12px;margin:0;width:1px}", ""]), n.locals = {}, t.exports = n
        }
    }
]);