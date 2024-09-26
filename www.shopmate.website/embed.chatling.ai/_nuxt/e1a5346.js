(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        390: function(t, e, r) {
            "use strict";
            r.r(e);
            r(39);
            var o = r(14),
                n = r(21),
                i = (r(148), r(230), r(71), r(26), r(52), r(46), r(16), r(31), r(232), {
                    props: {
                        interface_language: {
                            type: String,
                            default: "en"
                        },
                        t: {
                            type: Object,
                            default: null
                        },
                        integration_type: {
                            type: String,
                            default: "custom"
                        },
                        predefined_queries: {
                            type: Array
                        },
                        chat_icon_design_type: {
                            type: Number | String
                        },
                        settings: {
                            type: Object
                        },
                        appearance: {
                            type: Object
                        },
                        texts: {
                            type: Object
                        },
                        chat_icon_url: {
                            type: String
                        },
                        bot_icon_url: {
                            type: String
                        },
                        external_gid: {
                            type: String,
                            default: null
                        },
                        internal_gid: {
                            type: String,
                            default: null
                        },
                        placed_on: {
                            type: String,
                            default: "website"
                        },
                        conversation: {
                            type: Array
                        },
                        forced_chat_open: {
                            type: Boolean,
                            default: !1
                        },
                        force_attention_grabber_to_open: {
                            type: Boolean,
                            default: !1
                        },
                        chatbot_thinking: {
                            type: Boolean,
                            default: !1
                        },
                        chatbot_streaming: {
                            type: Boolean,
                            default: !1
                        },
                        chat_error: {
                            type: String,
                            default: null
                        },
                        scroll_to_bottom: {
                            type: Boolean,
                            default: !1
                        },
                        show_powered_by: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            is_mobile_viewport: !1,
                            user_message: null,
                            is_chat_open: this.forced_chat_open,
                            show_test: !0,
                            current_chat_header_type: 1,
                            attention_grabber_closed: !1,
                            show_ellipsis_dropdown: !1,
                            customer_info_collector: {
                                collected: !1,
                                error: null
                            },
                            customer: {
                                uuid: null,
                                name: null,
                                email: null,
                                phone: null,
                                company: null,
                                job_title: null,
                                address: null,
                                city: null,
                                state: null,
                                zip: null,
                                country: null,
                                website: null
                            },
                            current_chat_page: null,
                            errors: {
                                customer: {
                                    name: null,
                                    email: null,
                                    phone: null,
                                    company: null,
                                    job_title: null,
                                    address: null,
                                    city: null,
                                    state: null,
                                    zip: null,
                                    country: null,
                                    website: null
                                }
                            }
                        }
                    },
                    emits: ["submitUserMessage", "clearChat"],
                    mounted: function() {
                        try {
                            var t = this.$md.renderer.rules.link_open || function(t, e, r, o, n) {
                                return n.renderToken(t, e, r)
                            };
                            this.$md.renderer.rules.link_open = function(e, r, o, n, i) {
                                var l = e[r].attrIndex("target");
                                return l < 0 ? e[r].attrPush(["target", "_blank"]) : e[r].attrs[l][1] = "_blank", t(e, r, o, n, i)
                            }
                        } catch (t) {}
                        var e = this;
                        window.addEventListener("message", (function(t) {
                            var r, o = null == t || null === (r = t.data) || void 0 === r ? void 0 : r.event_id;
                            try {
                                if ("chtl_cust_load" === o) {
                                    var n, i = null == t || null === (n = t.data) || void 0 === n ? void 0 : n.cust;
                                    if (null != i) try {
                                        e.customer.uuid = null == i ? void 0 : i.uuid, e.customer.name = null == i ? void 0 : i.name, e.customer.email = null == i ? void 0 : i.email, e.customer.phone = null == i ? void 0 : i.phone, e.customer.company = null == i ? void 0 : i.company, e.customer.job_title = null == i ? void 0 : i.job_title, e.customer.address = null == i ? void 0 : i.address, e.customer.city = null == i ? void 0 : i.city, e.customer.state = null == i ? void 0 : i.state, e.customer.zip = null == i ? void 0 : i.zip, e.customer.country = null == i ? void 0 : i.country, e.customer.website = null == i ? void 0 : i.website, e.isCustomerInformationSet() && (e.customer_info_collector.collected = !0)
                                    } catch (t) {}
                                } else if ("is_mobile" === o) {
                                    var l;
                                    null == t || null === (l = t.data) || void 0 === l || l.window_width;
                                    e.is_mobile_viewport = !0
                                }
                            } catch (t) {}
                        })), window.parent.postMessage({
                            event_id: "chtl_loaded",
                            data: {}
                        }, "*"), this.isCustomerInformationSet() && (this.customer_info_collector.collected = !0)
                    },
                    watch: {
                        forced_chat_open: function(t, e) {
                            null != t && (this.is_chat_open = t)
                        },
                        force_attention_grabber_to_open: function(t, e) {
                            null != t && (this.attention_grabber_closed = !t)
                        },
                        scroll_to_bottom: function(t, e) {
                            this.scrollChatToBottom()
                        }
                    },
                    methods: {
                        messageHasSources: function(t) {
                            try {
                                var e = this.getMessageSources(t);
                                return null != e && 0 != e.length
                            } catch (t) {
                                return !1
                            }
                        },
                        shouldShowMessageSources: function(t) {
                            try {
                                if (0 == this.messageHasSources(t)) return !1;
                                var e = this.getMessageSources(t);
                                if (null == e || 0 == e.length) return !1;
                                for (var r = 0; r < e.length; r++) {
                                    var o = e[r];
                                    if ("webpage" != (null == o ? void 0 : o.type) || 1 != this.showSourcePageTitle && 1 != this.showSourcePageURL)
                                        if ("document_url" != (null == o ? void 0 : o.type) || 1 != this.showSourceDocumentFilename && 1 != this.showSourceDocumentURL) {
                                            if ("document" == (null == o ? void 0 : o.type) && 1 == this.showSourceDocumentFilename && null != o.filename && o.filename.trim().length > 0) return !0
                                        } else {
                                            if (null != o.filename && o.filename.trim().length > 0) return !0;
                                            if (null != o.url && o.url.trim().length > 0) return !0
                                        }
                                    else {
                                        if (null != o.title && o.title.trim().length > 0) return !0;
                                        if (null != o.url && o.url.trim().length > 0) return !0
                                    }
                                }
                                return !1
                            } catch (t) {
                                return !1
                            }
                        },
                        getMessageSources: function(t) {
                            try {
                                if (null == t) return [];
                                var e = null == t ? void 0 : t.sources;
                                if (null == e || 0 == e.length) return [];
                                for (var r = [], o = [], n = [], i = 0; i < e.length; i++) {
                                    var l = e[i];
                                    if (null != l) {
                                        var s = null == l ? void 0 : l.url,
                                            a = null == l ? void 0 : l.filename;
                                        if (null != s && s.length > 0 && null == a) {
                                            if (0 == (s = s.trim()).length) continue;
                                            if (o.includes(s)) continue;
                                            o.push(s);
                                            var u = null == l ? void 0 : l.title;
                                            null != u && 0 == (u = u.trim()).length && (u = null);
                                            var c = s.replace(/(^\w+:|^)\/\//, "");
                                            c = c.replace("www.", ""), r.push({
                                                type: "webpage",
                                                title: u,
                                                url: s,
                                                shortened_url: c
                                            })
                                        } else if (null != s && null != a) {
                                            if (0 == (s = s.trim()).length && 0 == a.length) continue;
                                            if (o.includes(s)) continue;
                                            if (n.includes(a)) continue;
                                            o.push(s), n.push(s);
                                            var d = s.replace(/(^\w+:|^)\/\//, "");
                                            d = d.replace("www.", ""), r.push({
                                                type: "document_url",
                                                filename: a,
                                                url: s,
                                                shortened_url: d
                                            })
                                        } else {
                                            if (!(null != a && a.length > 0)) continue;
                                            if (a = a.trim(), n.includes(a)) continue;
                                            n.push(a), r.push({
                                                type: "document",
                                                filename: a
                                            })
                                        }
                                    }
                                }
                                return r.length > 6 && (r = r.slice(0, 3)), r
                            } catch (t) {
                                return []
                            }
                        },
                        validateEmail: function(t) {
                            return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(t)
                        },
                        getMaxCharactersMessageForLeadForm: function(t) {
                            var e = this.t.lead_form.errors.max_characters;
                            return e = e.replace("1234567", t)
                        },
                        startChatClicked: function() {
                            var t = 75,
                                e = 320,
                                r = 100,
                                o = 50,
                                n = 50,
                                i = 50,
                                l = 50,
                                s = 15,
                                a = 20,
                                u = 100,
                                c = 500,
                                d = !1,
                                p = this.customerDetailsToCollect;
                            this.errors.customer.name = null, this.errors.customer.email = null, this.errors.customer.phone = null, this.errors.customer.company = null, this.errors.customer.job_title = null, this.errors.customer.address = null, this.errors.customer.city = null, this.errors.customer.state = null, this.errors.customer.zip = null, this.errors.customer.country = null, this.errors.customer.website = null, 1 == p.name.enabled && (!p.name.required || null != this.customer.name && 0 != this.customer.name.trim().length ? this.customer.name.length > t && (this.errors.customer.name = this.getMaxCharactersMessageForLeadForm(t), d = !0) : (this.errors.customer.name = this.t.global.required, d = !0)), 1 == p.email.enabled && (!p.email.required || null != this.customer.email && 0 != this.customer.email.trim().length ? this.customer.email.length > e ? (this.errors.customer.email = this.getMaxCharactersMessageForLeadForm(e), d = !0) : this.validateEmail(this.customer.email) || (this.errors.customer.email = this.t.lead_form.errors.invalid_email, d = !0) : (this.errors.customer.email = this.t.global.required, d = !0)), 1 == p.phone.enabled && (!p.phone.required || null != this.customer.phone && 0 != this.customer.phone.trim().length ? this.customer.phone.length > a && (this.errors.customer.phone = this.getMaxCharactersMessageForLeadForm(a), d = !0) : (this.errors.customer.phone = this.t.global.required, d = !0)), 1 == p.company.enabled && (!p.company.required || null != this.customer.company && 0 != this.customer.company.trim().length ? this.customer.company.length > u && (this.errors.customer.company = this.getMaxCharactersMessageForLeadForm(u), d = !0) : (this.errors.customer.company = this.t.global.required, d = !0)), 1 == p.job_title.enabled && (!p.job_title.required || null != this.customer.job_title && 0 != this.customer.job_title.trim().length ? this.customer.job_title.length > l && (this.errors.customer.job_title = this.getMaxCharactersMessageForLeadForm(l), d = !0) : (this.errors.customer.job_title = this.t.global.required, d = !0)), 1 == p.address.enabled && (!p.address.required || null != this.customer.address && 0 != this.customer.address.trim().length ? this.customer.address.length > r && (this.errors.customer.address = this.getMaxCharactersMessageForLeadForm(r), d = !0) : (this.errors.customer.address = this.t.global.required, d = !0)), 1 == p.city.enabled && (!p.city.required || null != this.customer.city && 0 != this.customer.city.trim().length ? this.customer.city.length > i && (this.errors.customer.city = this.getMaxCharactersMessageForLeadForm(i), d = !0) : (this.errors.customer.city = this.t.global.required, d = !0)), 1 == p.state.enabled && (!p.state.required || null != this.customer.state && 0 != this.customer.state.trim().length ? this.customer.state.length > n && (this.errors.customer.state = this.getMaxCharactersMessageForLeadForm(n), d = !0) : (this.errors.customer.state = this.t.global.required, d = !0)), 1 == p.zip.enabled && (!p.zip.required || null != this.customer.zip && 0 != this.customer.zip.trim().length ? this.customer.zip.length > s && (this.errors.customer.zip = this.getMaxCharactersMessageForLeadForm(s), d = !0) : (this.errors.customer.zip = this.t.global.required, d = !0)), 1 == p.country.enabled && (!p.country.required || null != this.customer.country && 0 != this.customer.country.trim().length ? this.customer.country.length > o && (this.errors.customer.country = this.getMaxCharactersMessageForLeadForm(o), d = !0) : (this.errors.customer.country = this.t.global.required, d = !0)), 1 == p.website.enabled && (!p.website.required || null != this.customer.website && 0 != this.customer.website.trim().length ? this.customer.website.length > c && (this.errors.customer.website = this.getMaxCharactersMessageForLeadForm(c), d = !0) : (this.errors.customer.website = this.t.global.required, d = !0)), d ? this.customer_info_collector.error = this.t.lead_form.errors.submit : (this.customer_info_collector.error = null, this.customer_info_collector.collected = !0, window.parent.postMessage({
                                event_id: "chtl_customer_info_collected",
                                data: {
                                    customer: this.customer
                                }
                            }, "*"))
                        },
                        ratingSelected: function(t, e) {
                            1 !== e && -1 !== e || 1 !== (null == t ? void 0 : t.rating_value) && -1 !== (null == t ? void 0 : t.rating_value) && (null == t ? void 0 : t.rating_value) !== e && (t.rating_value = e, this.$emit("ratingSelected", {
                                message: t,
                                rating: e
                            }))
                        },
                        predefinedQuerySelect: function(t) {
                            this.submitMessage(t.query, "predefined_query")
                        },
                        submitUserMessage: function() {
                            var t = null == this ? void 0 : this.user_message;
                            this.submitMessage(t, "input") && (this.user_message = null)
                        },
                        submitMessage: function(t) {
                            return null != t && 0 != t.length && (!this.chatbot_thinking && !this.chatbot_streaming && (0 != (t = t.trim()).length && (this.$emit("submitUserMessage", {
                                message: t,
                                customer: this.customer
                            }), !0)))
                        },
                        parseMessageAsHTML: function(t) {
                            if (null == t) return "";
                            var e = null == t ? void 0 : t.text;
                            if (null == e) return "";
                            var r = this.$md.render(e);
                            try {
                                var o = this.addTargetAttrToHtmlLinks(r, "_blank");
                                null != o && o.length > 0 && (r = o)
                            } catch (t) {}
                            return r
                        },
                        addTargetAttrToHtmlLinks: function(t, e) {
                            var r = document.createElement("div");
                            return r.innerHTML = t, r.querySelectorAll("a").forEach((function(t) {
                                t.setAttribute("target", e)
                            })), r.innerHTML
                        },
                        scrollToLastMessage: function() {
                            var t = this.$refs.chat_last_message;
                            if (null != t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToBottom: function() {
                            var t = this.$refs.hidden_element;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        scrollChatToThinkingBubble: function() {
                            var t = this.$refs.chatbot_thinking_bubble;
                            if (t) try {
                                t.scrollIntoView({
                                    behavior: "smooth"
                                })
                            } catch (t) {}
                        },
                        closeHoveringMessages: function() {
                            this.attention_grabber_closed = !0
                        },
                        clearChat: function() {
                            this.show_ellipsis_dropdown = !1, this.$emit("clearChat")
                        },
                        closeChat: function() {
                            this.show_ellipsis_dropdown = !1, "chatbot-testing" != this.placed_on && "sharing" != this.placed_on && ("public_embed" == this.placed_on ? window.parent.postMessage("chtl_chat_minimized", "*") : this.is_chat_open = !1, this.attention_grabber_closed = !0)
                        },
                        chatIconClicked: function() {
                            this.attention_grabber_closed = !0, this.is_chat_open = !this.is_chat_open
                        },
                        chatBubbleWrapperCSS: function(t) {
                            var e = {
                                display: "flex",
                                "align-items": "flex-start",
                                "margin-bottom": "15px"
                            };
                            return "user" == t && (e["justify-content"] = "flex-end"), e
                        },
                        chatAvatarImgCSS: function(t) {
                            var e, r, o, n, i, l, s = {
                                    "flex-shrink": "0"
                                },
                                a = 35,
                                u = !0,
                                c = 10;
                            if (null != (null === (e = this.appearance) || void 0 === e || null === (r = e.avatar_icon) || void 0 === r ? void 0 : r.full_rounded) && (u = this.appearance.avatar_icon.full_rounded), null != (null === (o = this.appearance) || void 0 === o || null === (n = o.avatar_icon) || void 0 === n ? void 0 : n.size) && (a = this.appearance.avatar_icon.size), null != (null === (i = this.appearance) || void 0 === i || null === (l = i.avatar_icon) || void 0 === l ? void 0 : l.border_radius) && (c = this.appearance.avatar_icon.border_radius), s.width = "".concat(a, "px"), s.height = "".concat(a, "px"), s["border-radius"] = u ? "100%" : "".concat(c, "px"), "bot" == t) {
                                var d = this.botIconURL;
                                s["margin-right"] = "10px", s["background-image"] = "url(".concat(d, ")"), s["background-size"] = "cover", s["background-repeat"] = "no-repeat", s["background-position"] = "center"
                            }
                            return s
                        },
                        chatBubbleCSS: function(t) {
                            var e = {
                                display: "inline-block",
                                "overflow-wrap": "anywhere",
                                padding: "15px",
                                "border-radius": "20px",
                                "font-size": "13.5px",
                                transition: "width ease-in-out 0.2s"
                            };
                            return "user" == t ? (e["border-top-right-radius"] = "5px", e["background-color"] = this.primaryColor, e.color = this.textColor) : (e["border-top-left-radius"] = "5px", e["background-color"] = this.assistantBGColor, e.color = this.assistantTextColor), "rtl" == this.languageDirection && (e.direction = "rtl"), e
                        },
                        isCustomerInformationSet: function() {
                            if (1 == this.customer_info_collector.collected) return !0;
                            var t = this.customer;
                            if (null == t) return !1;
                            for (var e = 0, r = Object.entries(t); e < r.length; e++) {
                                var o = Object(n.a)(r[e], 2),
                                    i = o[0],
                                    l = o[1];
                                if ("uuid" != i) try {
                                    if (null != l && l.trim().length > 0) return !0
                                } catch (t) {}
                            }
                            return !1
                        }
                    },
                    computed: {
                        poweredByText: function() {
                            var t = this.t.powered_by;
                            return null == t || 0 == t.length ? "Powered by Chatling" : t = t.replace("XYZ", "Chatling")
                        },
                        thinkingIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? t.left = "25px" : t.right = "25px", t
                        },
                        sendIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? (t.left = "15px", t.rotate = "180deg") : t.right = "15px", t
                        },
                        languageDirection: function() {
                            if (null == this.interface_language || 0 == this.interface_language.length) return "ltr";
                            return ["ar", "az", "he", "fa", "ur"].includes(this.interface_language) ? "rtl" : "ltr"
                        },
                        messageInputPlaceholder: function() {
                            var t, e = "Write a message...";
                            if (null == this.texts) return e;
                            var r = null === (t = this.texts) || void 0 === t ? void 0 : t.message_input_placeholder;
                            return null == r ? e : r == e || "Enter a message..." == r ? this.t.input_placeholder : r
                        },
                        showPrechatForm: function() {
                            return "chatbot-testing" != this.placed_on && (!(!this.collectCustomerDetailsEnabled || 1 != this.customerDetailCollectionType) && !this.customer_info_collector.collected)
                        },
                        collectCustomerDetailsEnabled: function() {
                            var t, e, r = null === (t = this.settings) || void 0 === t || null === (e = t.collect_user_details) || void 0 === e ? void 0 : e.enabled;
                            return 1 == r && r
                        },
                        customerDetailsToCollect: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.collect_user_details) || void 0 === e ? void 0 : e.fields_list
                        },
                        customerDetailCollectionType: function() {
                            var t, e;
                            return null === (t = this.settings) || void 0 === t || null === (e = t.collect_user_details) || void 0 === e ? void 0 : e.type
                        },
                        customDetailsEntered: function() {
                            return !1
                        },
                        showRating: function() {
                            var t;
                            return !0 === (null === (t = this.settings) || void 0 === t ? void 0 : t.rate_each_chatbot_response)
                        },
                        hidePoweredByBranding: function() {
                            if ("chatbot-testing" == this.placed_on) return !0;
                            if (null == this.settings) return !1;
                            var t = this.settings.hide_branding;
                            return null != t && t
                        },
                        showCloseButton: function() {
                            return "chatbot-testing" != this.placed_on && "sharing" != this.placed_on
                        },
                        showChatIcon: function() {
                            return "wix" == this.integration_type || "chatbot-testing" != this.placed_on && "public_embed" != this.placed_on && "sharing" != this.placed_on
                        },
                        showAttentionGrabber: function() {
                            return "editor" == this.placed_on && (!this.is_chat_open && (!!this.attentionGrabberEnabled && (!this.attention_grabber_closed && (null != this.customAttentionGrabberTexts && 0 != this.customAttentionGrabberTexts.length && 0 != this.customAttentionGrabberTexts[0].length))))
                        },
                        attentionGrabberEnabled: function() {
                            var t, e, r, o;
                            return (null === (t = this.settings) || void 0 === t || null === (e = t.attention_grabber) || void 0 === e ? void 0 : e.desktop.enabled) || (null === (r = this.settings) || void 0 === r || null === (o = r.attention_grabber) || void 0 === o ? void 0 : o.mobile.enabled)
                        },
                        customAttentionGrabberEnabled: function() {
                            return !0
                        },
                        customAttentionGrabberTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.attention_grabber_hovering_messages) || 0 == this.texts.attention_grabber_hovering_messages.length ? e : this.texts.attention_grabber_hovering_messages
                        },
                        attentionGrabberTexts: function() {
                            return this.customAttentionGrabberTexts
                        },
                        attentionGrabberTextWrapperCSS: function() {
                            return {
                                position: "absolute",
                                right: "0px",
                                bottom: this.chatIconSize + 15 + "px",
                                width: "300px"
                            }
                        },
                        attentionGrabberTextCSS: function() {
                            var t = {
                                position: "relative",
                                padding: "15px",
                                "padding-right": "25px",
                                "border-radius": "5px",
                                "font-size": "14px"
                            };
                            return t["background-color"] = this.primaryColor, t.color = this.textColor, t
                        },
                        attentionGrabberTextCaretCSS: function() {
                            return {
                                position: "absolute",
                                right: "25px",
                                bottom: "-5px",
                                width: "10px",
                                height: "10px",
                                transform: "rotate(45deg)",
                                "background-color": this.primaryColor
                            }
                        },
                        botIconURL: function() {
                            return this.bot_icon_url
                        },
                        chatIconDesignID: function() {
                            var t;
                            return null === (t = this.chat_icon) || void 0 === t ? void 0 : t.desktop.type
                        },
                        chatIconCustomImageURL: function() {
                            return this.chat_icon_url
                        },
                        showSources: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var r = null == e ? void 0 : e.enabled;
                                return null !== r && (0 != r && ((0 != this.showSourcePageTitle || 0 != this.showSourcePageURL || 0 != this.showSourceDocumentFilename || 0 != this.showSourceDocumentURL) && r))
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageTitle: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var r = null == e ? void 0 : e.fields;
                                if (null == r) return !1;
                                var o = null == r ? void 0 : r.page_title;
                                return null !== o && o
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourcePageURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var r = null == e ? void 0 : e.fields;
                                if (null == r) return !1;
                                var o = null == r ? void 0 : r.page_url;
                                return null !== o && o
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentFilename: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var r = null == e ? void 0 : e.fields;
                                if (null == r) return !1;
                                var o = null == r ? void 0 : r.document_filename;
                                return null !== o && o
                            } catch (t) {
                                return !1
                            }
                        },
                        showSourceDocumentURL: function() {
                            try {
                                var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                                if (null == e) return !1;
                                var r = null == e ? void 0 : e.fields;
                                if (null == r) return !1;
                                var o = null == r ? void 0 : r.document_url;
                                return null !== o && o
                            } catch (t) {
                                return !1
                            }
                        },
                        sourcesWrapperCSS: function() {
                            return {
                                "margin-top": "10px",
                                "font-size": "0.95em"
                            }
                        },
                        sourceWrapperCSS: function() {},
                        sourceTitleCSS: function() {
                            var t = Object(o.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourcePageURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameCSS: function() {
                            var t = Object(o.a)({
                                color: "#1f2937",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "white-space": "nowrap",
                                "font-weight": "500"
                            }, "color", "#000");
                            return this.showSourceDocumentURL && (t["margin-bottom"] = "5px", t["padding-bottom"] = "5px", t["border-bottom"] = "1px solid #dee1e5"), t
                        },
                        sourceDocumentFilenameOnlyCSS: function() {
                            return Object(o.a)({
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
                                "margin-bottom": "2px",
                                direction: this.languageDirection
                            }
                        },
                        maxSources: function() {
                            var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                            if (null == e) return 1;
                            var r = null == e ? void 0 : e.max;
                            return null == r ? 1 : r
                        },
                        helpfulRatingContainerCSS: function() {
                            return {
                                "margin-top": "15px",
                                "padding-top": "15px",
                                "border-top": "1px solid #dee1e5",
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
                        inputLabelCSS: function() {
                            return {
                                "font-weight": "600",
                                "margin-bottom": "5px"
                            }
                        },
                        inputWrapperCSS: function() {
                            return {
                                margin: "10px 0",
                                "font-size": "0.95em",
                                display: "block",
                                background: "#FFFFFF"
                            }
                        },
                        inputBoxWrapperCSS: function() {
                            return {
                                padding: "7px 10px",
                                background: "transparent",
                                "border-radius": "5px",
                                display: "flex",
                                "align-items": "center",
                                border: "1px solid #ebebeb"
                            }
                        },
                        inputBoxCSS: function() {
                            var t = {
                                width: "100%",
                                background: "transparent !important",
                                outline: "none !important",
                                border: "none !important",
                                "background-image": "none !important",
                                "background-color": "transparent !important",
                                "-webkit-box-shadow": "none !important",
                                "-moz-box-shadow": "none !important",
                                "box-shadow": "none !important",
                                "-webkit-appearance": "none !important",
                                appearance: "none !important",
                                resize: "none",
                                "outline-style": "none !important"
                            };
                            return this.languageDirection, this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", t
                        },
                        bottomSection: function() {
                            return {
                                "padding-top": "10px"
                            }
                        },
                        messageInputWrapperCSS: function() {
                            return {
                                position: "relative",
                                display: "flex",
                                "align-items": "center",
                                "border-top": "1px solid #f3f4f6"
                            }
                        },
                        messageInputCSS: function() {
                            var t = {
                                padding: "15px 35px 15px 15px",
                                width: "100%",
                                background: "transparent !important",
                                outline: "none !important",
                                border: "none !important",
                                "background-image": "none !important",
                                "background-color": "transparent !important",
                                "-webkit-box-shadow": "none !important",
                                "-moz-box-shadow": "none !important",
                                "box-shadow": "none !important",
                                "-webkit-appearance": "none !important",
                                appearance: "none !important",
                                resize: "none",
                                "outline-style": "none !important"
                            };
                            return this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", "rtl" == this.languageDirection && (t.direction = "rtl", t.padding = "15px 15px 15px 35px"), t
                        },
                        parsed_conversation: function() {
                            var t = this.conversation;
                            return null != t && null != t || (t = []), t
                        },
                        chatIconSize: function() {
                            var t, e, r, o = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (r = e.desktop) || void 0 === r ? void 0 : r.size;
                            return null == o && (o = 55), o
                        },
                        chatContainerCSS: function() {
                            var t = this.appearance.visibility.desktop.offset.x,
                                e = this.appearance.visibility.desktop.offset.y,
                                r = {};
                            return "chatbot-testing" == this.placed_on || "sharing" == this.placed_on || (r = "public_embed" == this.placed_on ? {
                                position: "absolute",
                                "z-index": 1,
                                right: "0",
                                bottom: "0",
                                width: "100%",
                                height: "100%"
                            } : {
                                position: "fixed",
                                "z-index": 1,
                                bottom: "".concat(e, "px"),
                                right: "".concat(t, "px"),
                                top: "20px"
                            }), r["--chtl-primary-color"] = this.primaryColor, r["--chtl-text-color"] = this.textColor, r
                        },
                        chatWrapperCSS: function() {
                            return "chatbot-testing" == this.placed_on || "sharing" == this.placed_on ? {
                                height: "100%",
                                width: "100%",
                                "max-width": "1200px"
                            } : {
                                height: "100%"
                            }
                        },
                        customChatButtonWrapperCSS: function() {
                            var t, e, r, o, n, i, l = {
                                height: "".concat(this.chatIconSize, "px"),
                                width: "".concat(this.chatIconSize, "px"),
                                cursor: "pointer",
                                "z-index": "1"
                            };
                            null != this.chatIconCustomImageURL && (l["background-image"] = "url(".concat(this.chatIconCustomImageURL, ")"), l["background-size"] = "cover", l["background-repeat"] = "no-repeat", l["background-position"] = "center");
                            var s = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (r = e.desktop) || void 0 === r ? void 0 : r.full_rounded,
                                a = null === (o = this.appearance) || void 0 === o || null === (n = o.chat_icon) || void 0 === n || null === (i = n.desktop) || void 0 === i ? void 0 : i.border_radius;
                            return l["border-radius"] = 1 == s || null == a ? "100%" : "".concat(a, "px"), l
                        },
                        defaultChatButtonWrapperCSS: function() {
                            var t, e, r, o, n, i, l = {
                                    height: "".concat(this.chatIconSize, "px"),
                                    width: "".concat(this.chatIconSize, "px"),
                                    display: "flex",
                                    "justify-content": "center",
                                    "align-items": "center",
                                    cursor: "pointer",
                                    "z-index": "1"
                                },
                                s = this.primaryColor;
                            l["background-color"] = s;
                            var a = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (r = e.desktop) || void 0 === r ? void 0 : r.full_rounded,
                                u = null === (o = this.appearance) || void 0 === o || null === (n = o.chat_icon) || void 0 === n || null === (i = n.desktop) || void 0 === i ? void 0 : i.border_radius;
                            return l["border-radius"] = 1 == a || null == u ? "100%" : "".concat(u, "px"), l
                        },
                        defaultChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.width = "0", t.height = "0", t.opacity = "0") : (t.opacity = "1", t.width = "".concat(this.chatIconSize / 2, "px"), t.height = "".concat(this.chatIconSize / 2, "px")), t
                        },
                        closeChatButtonIconCSS: function() {
                            var t = {
                                transition: "width ease-in-out 0.05s"
                            };
                            return this.is_chat_open ? (t.opacity = "1", t.width = "".concat(.33 * this.chatIconSize, "px"), t.height = "".concat(.33 * this.chatIconSize, "px")) : (t.opacity = "0", t.width = "0", t.height = "0"), t
                        },
                        chatButtonContainerCSS: function() {
                            var t = {
                                    display: "flex",
                                    "align-items": "center",
                                    position: "absolute",
                                    bottom: "0",
                                    right: "0"
                                },
                                e = this.appearance.visibility.desktop.position;
                            return t["justify-content"] = "bl" == e || "tl" == e ? "left" : "right", t
                        },
                        chatUIContainerCSS: function() {
                            var t = {
                                width: "100%",
                                background: "#FFF",
                                transition: "width ease-in-out 0.2s, opacity ease-in 0.1s",
                                "border-radius": "15px",
                                overflow: "hidden"
                            };
                            if ("chatbot-testing" == this.placed_on) t.width = "100%", t["border-radius"] = "0", t.height = "90vh";
                            else if (t.position = "absolute", "public_embed" == this.placed_on) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else if ("sharing" == this.placed_on) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else {
                                var e, r, o;
                                t["margin-bottom"] = "20px", t.height = "min(600px, 100% - 100px)", t["min-height"] = "80px", t["max-height"] = "700px", t.bottom = "".concat(this.chatIconSize, "px"), t.right = "0px";
                                var n = null === (e = this.appearance) || void 0 === e || null === (r = e.chat_interface) || void 0 === r || null === (o = r.desktop) || void 0 === o ? void 0 : o.max_width;
                                null == n && (n = 400), t.width = "".concat(n, "px")
                            }
                            return this.is_chat_open ? t.opacity = 1 : t.opacity = 0, "public_embed" != this.placed_on && "chatbot-testing" != this.placed_on && (t["box-shadow"] = "0px 5px 10px 0 rgba(0,0,0,0.01), 0 7px 12px 0 rgba(0,0,0,.1)"), t
                        },
                        startChatCSS: function() {
                            return {
                                display: "block",
                                padding: "10px",
                                "text-align": "center",
                                "background-color": this.primaryColor,
                                "border-radius": "5px",
                                color: this.textColor,
                                "font-weight": "600",
                                cursor: "pointer"
                            }
                        },
                        chatUIHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, 2 == this.current_chat_header_type && (t["align-items"] = "normal", t.padding = "30px 15px"), t
                        },
                        prechatHeaderCSS: function() {
                            var t = {
                                    display: "flex",
                                    "justify-content": "space-between",
                                    padding: "15px",
                                    "align-items": "center"
                                },
                                e = this.primaryColor;
                            return t["background-color"] = e, t
                        },
                        chatHeaderTitleCSS_type1: function() {
                            return {
                                color: this.textColor,
                                "font-weight": "600",
                                "font-size": "16px",
                                "white-space": "nowrap",
                                overflow: "hidden",
                                "text-overflow": "ellipsis",
                                "padding-right": "10px"
                            }
                        },
                        chatHeaderTitleCSS_type2: function() {
                            return {
                                color: this.textColor,
                                "font-weight": "700",
                                "font-size": "25px",
                                "margin-bottom": "5px"
                            }
                        },
                        chatHeaderSubtitleCSS_type2: function() {
                            var t, e, r = null;
                            return null != (null === (t = this.appearance) || void 0 === t || null === (e = t.colors) || void 0 === e ? void 0 : e.text) && (r = this.$getColorString(this.appearance.colors.text, 80)), null == r && (r = this.textColor), {
                                color: r,
                                "font-weight": "400",
                                "font-size": "16px"
                            }
                        },
                        primaryColor: function() {
                            var t, e, r = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? r : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.primary) ? this.$getColorString(r) : this.$getColorString(this.appearance.colors.primary)
                        },
                        textColor: function() {
                            var t, e, r, o = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? o : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.text) ? this.$getColorString(o) : this.$getColorString(null === (r = this.appearance.colors) || void 0 === r ? void 0 : r.text)
                        },
                        chatIconColor: function() {
                            var t, e, r, o = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.chat_icon) ? o : null === (r = this.appearance.colors) || void 0 === r ? void 0 : r.chat_icon
                        },
                        assistantBGColor: function() {
                            var t, e, r = "#f1f5f9FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_background) || 0 == this.appearance.colors.assistant_chat_bubble_background.length ? r : this.appearance.colors.assistant_chat_bubble_background
                        },
                        assistantTextColor: function() {
                            var t, e, r, o, n = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_text) || 0 == (null === (r = this.appearance.colors) || void 0 === r ? void 0 : r.assistant_chat_bubble_text.length) ? n : null === (o = this.appearance.colors) || void 0 === o ? void 0 : o.assistant_chat_bubble_text
                        },
                        welcomeTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.welcome_text) || 0 == this.texts.welcome_text.length ? e : this.texts.welcome_text
                        },
                        predefinedQueryCSS: function() {
                            var t;
                            return t = {
                                "font-size": "12px",
                                padding: "5px",
                                "border-radius": "5px",
                                border: "1px solid ".concat(this.primaryColor),
                                display: "inline-block"
                            }, Object(o.a)(t, "padding", "5px 10px"), Object(o.a)(t, "background", "transparent"), Object(o.a)(t, "color", this.primaryColor), Object(o.a)(t, "cursor", "pointer"), Object(o.a)(t, "margin", "4px 4px 0 0"), t
                        }
                    }
                }),
                l = r(89),
                s = Object(l.a)(i, (function() {
                    var t, e, r, o, n, i, l, s, a, u, c, d, p, h, m, v, _, g, b, f, y, S, C, x, w, k, T, z, L = this,
                        B = L._self._c;
                    return B("div", [B("div", {
                        style: L.chatContainerCSS
                    }, [B("div", {
                        style: L.chatWrapperCSS
                    }, [B("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: L.is_chat_open,
                            expression: "is_chat_open"
                        }],
                        style: L.chatUIContainerCSS
                    }, [B("div", {
                        staticStyle: {
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            flex: "1 1 0%"
                        }
                    }, [L.showPrechatForm ? B("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [B("div", {
                        style: L.prechatHeaderCSS
                    }, [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == L.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [B("div", {
                        style: L.chatHeaderTitleCSS_type1
                    }, [L._v(L._s(null === (t = L.texts) || void 0 === t || null === (e = t.chat_header) || void 0 === e ? void 0 : e.title))])]), L._v(" "), B("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [L.showCloseButton ? B("div", {
                        on: {
                            click: function(t) {
                                return L.closeChat()
                            }
                        }
                    }, [B("svg", {
                        attrs: {
                            width: "11",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: L.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), L._v(" "), B("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: L.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : L._e()])]), L._v(" "), B("div", {
                        style: {
                            padding: "15px",
                            "overflow-y": "scroll",
                            direction: L.languageDirection
                        }
                    }, [B("div", {
                        staticClass: "chtl-reset",
                        staticStyle: {
                            color: "#393939"
                        },
                        domProps: {
                            innerHTML: L._s(null === (r = L.settings) || void 0 === r || null === (o = r.collect_user_details) || void 0 === o ? void 0 : o.message_type_1)
                        }
                    }), L._v(" "), B("div", {
                        staticStyle: {
                            margin: "0",
                            "margin-top": "-5px"
                        }
                    }), L._v(" "), B("div", {
                        staticStyle: {
                            margin: "0",
                            "margin-top": "-5px"
                        }
                    }), L._v(" "), null != L.customerDetailsToCollect && null !== (n = L.customerDetailsToCollect) && void 0 !== n && null !== (i = n.name) && void 0 !== i && i.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS,
                        attrs: {
                            direction: ""
                        }
                    }, [L._v(L._s(L.t.lead_form.name))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.name,
                            expression: "customer.name"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.name
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "name", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.name && L.errors.customer.name.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.name))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (l = L.customerDetailsToCollect) && void 0 !== l && null !== (s = l.email) && void 0 !== s && s.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.email))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.email,
                            expression: "customer.email"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "email"
                        },
                        domProps: {
                            value: L.customer.email
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "email", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.email && L.errors.customer.email.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.email))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (a = L.customerDetailsToCollect) && void 0 !== a && null !== (u = a.company) && void 0 !== u && u.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.company_name))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.company,
                            expression: "customer.company"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.company
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "company", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.company && L.errors.customer.company.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.company))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (c = L.customerDetailsToCollect) && void 0 !== c && null !== (d = c.website) && void 0 !== d && d.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.website_url))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.website,
                            expression: "customer.website"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.website
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "website", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.website && L.errors.customer.website.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.website))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (p = L.customerDetailsToCollect) && void 0 !== p && null !== (h = p.job_title) && void 0 !== h && h.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.job_title))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.job_title,
                            expression: "customer.job_title"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.job_title
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "job_title", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.job_title && L.errors.customer.job_title.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.job_title))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (m = L.customerDetailsToCollect) && void 0 !== m && null !== (v = m.phone) && void 0 !== v && v.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.phone_number))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.phone,
                            expression: "customer.phone"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.phone
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "phone", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.phone && L.errors.customer.phone.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.phone))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (_ = L.customerDetailsToCollect) && void 0 !== _ && null !== (g = _.address) && void 0 !== g && g.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.address))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.address,
                            expression: "customer.address"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.address
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "address", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.address && L.errors.customer.address.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.address))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (b = L.customerDetailsToCollect) && void 0 !== b && null !== (f = b.city) && void 0 !== f && f.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.city))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.city,
                            expression: "customer.city"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.city
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "city", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.city && L.errors.customer.city.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.city))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (y = L.customerDetailsToCollect) && void 0 !== y && null !== (S = y.state) && void 0 !== S && S.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.state))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.state,
                            expression: "customer.state"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.state
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "state", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.state && L.errors.customer.state.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.state))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (C = L.customerDetailsToCollect) && void 0 !== C && null !== (x = C.zip) && void 0 !== x && x.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.zip))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.zip,
                            expression: "customer.zip"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.zip
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "zip", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.zip && L.errors.customer.zip.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.zip))]) : L._e()]) : L._e(), L._v(" "), null != L.customerDetailsToCollect && null !== (w = L.customerDetailsToCollect) && void 0 !== w && null !== (k = w.country) && void 0 !== k && k.enabled ? B("div", {
                        style: L.inputWrapperCSS
                    }, [B("div", {
                        style: L.inputLabelCSS
                    }, [L._v(L._s(L.t.lead_form.country))]), L._v(" "), B("div", {
                        style: L.inputBoxWrapperCSS
                    }, [B("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.customer.country,
                            expression: "customer.country"
                        }],
                        style: L.inputBoxCSS,
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: L.customer.country
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.startChatClicked.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || L.$set(L.customer, "country", t.target.value)
                            }
                        }
                    })]), L._v(" "), null != L.errors.customer.country && L.errors.customer.country.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.errors.customer.country))]) : L._e()]) : L._e(), L._v(" "), B("div", {
                        staticStyle: {
                            "margin-top": "20px"
                        },
                        style: L.startChatCSS,
                        on: {
                            click: L.startChatClicked
                        }
                    }, [L._v(L._s(L.t.lead_form.submit_btn))]), L._v(" "), null != L.customer_info_collector.error && L.customer_info_collector.error.length > 0 ? B("div", {
                        staticStyle: {
                            "margin-top": "10px",
                            color: "#ff0d0d",
                            "font-size": "0.95em"
                        }
                    }, [L._v(L._s(L.customer_info_collector.error))]) : L._e()])]) : B("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [B("div", {
                        style: L.chatUIHeaderCSS
                    }, [B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == L.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [B("div", {
                        style: L.chatHeaderTitleCSS_type1
                    }, [L._v(L._s(null === (T = L.texts) || void 0 === T || null === (z = T.chat_header) || void 0 === z ? void 0 : z.title))])]), L._v(" "), B("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [B("div", {
                        staticClass: "ellipsis-dropdown",
                        style: {
                            direction: L.languageDirection
                        },
                        attrs: {
                            tabindex: "0"
                        }
                    }, [B("div", {
                        staticClass: "dropdown-btn",
                        staticStyle: {
                            display: "block"
                        },
                        on: {
                            click: function() {
                                L.show_ellipsis_dropdown = !L.show_ellipsis_dropdown
                            }
                        }
                    }, [B("svg", {
                        attrs: {
                            width: "11",
                            height: "11",
                            viewBox: "0 0 187 654",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.333303 560.667C0.333301 612.235 42.0986 654 93.6666 654C145.235 654 187 612.235 187 560.667C187 509.099 145.235 467.333 93.6666 467.333C42.0986 467.333 0.333306 509.099 0.333303 560.667ZM0.333324 93.9998C0.333321 145.568 42.0987 187.333 93.6667 187.333C145.235 187.333 187 145.568 187 93.9998C187 42.4318 145.235 0.666502 93.6667 0.6665C42.0987 0.666498 0.333326 42.4318 0.333324 93.9998ZM0.333313 327.333C0.333311 378.901 42.0986 420.667 93.6666 420.667C145.235 420.667 187 378.901 187 327.333C187 275.765 145.235 234 93.6667 234C42.0987 234 0.333316 275.765 0.333313 327.333Z",
                            fill: L.textColor
                        }
                    })])]), L._v(" "), L.show_ellipsis_dropdown ? B("ul", {
                        staticClass: "dropdown-content"
                    }, [B("li", {
                        on: {
                            click: function(t) {
                                return L.clearChat()
                            }
                        }
                    }, [L._v(L._s(L.t.global.clear_chat))]), L._v(" "), "public_embed" == this.placed_on ? B("li", {
                        on: {
                            click: function(t) {
                                return L.closeChat()
                            }
                        }
                    }, [L._v(L._s(L.t.global.minimize))]) : L._e()]) : L._e()]), L._v(" "), L.showCloseButton ? B("div", {
                        on: {
                            click: function(t) {
                                return L.closeChat()
                            }
                        }
                    }, [B("svg", {
                        attrs: {
                            width: "11",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: L.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), L._v(" "), B("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: L.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : L._e()])]), L._v(" "), B("div", {
                        ref: "chat_interface",
                        staticStyle: {
                            height: "100%",
                            padding: "15px",
                            "overflow-y": "scroll"
                        }
                    }, [L._l(L.welcomeTexts, (function(t, e) {
                        return B("div", [null != t && t.length > 0 ? B("div", {
                            style: L.chatBubbleWrapperCSS("bot")
                        }, [B("div", {
                            style: L.chatAvatarImgCSS("bot")
                        }), L._v(" "), B("div", [B("div", {
                            staticClass: "chtl-reset bot",
                            style: L.chatBubbleCSS("bot"),
                            domProps: {
                                innerHTML: L._s(t)
                            }
                        }), L._v(" "), e == L.welcomeTexts.length - 1 ? B("div", {
                            staticClass: "mt-1"
                        }, [null != L.predefined_queries && L.predefined_queries.length > 0 ? B("div", {
                            staticStyle: {
                                "padding-bottom": "5px"
                            }
                        }, L._l(L.predefined_queries, (function(t) {
                            return null != (null == t ? void 0 : t.label) && (null == t ? void 0 : t.label.length) > 0 ? B("div", {
                                style: L.predefinedQueryCSS,
                                on: {
                                    click: function(e) {
                                        return L.predefinedQuerySelect(t)
                                    }
                                }
                            }, [L._v(L._s(t.label))]) : L._e()
                        })), 0) : L._e()]) : L._e()])]) : L._e()])
                    })), L._v(" "), L._l(L.parsed_conversation, (function(t, e) {
                        return B("div", {
                            key: t.id
                        }, [null != t.text && t.text.length > 0 ? B("div", [B("div", ["bot" == t.role ? B("div", {
                            style: L.chatBubbleWrapperCSS(t.role)
                        }, [B("div", {
                            style: L.chatAvatarImgCSS(t.role)
                        }), L._v(" "), B("div", [B("div", {
                            style: L.chatBubbleCSS(t.role)
                        }, [B("div", {
                            staticClass: "chtl-reset bot",
                            domProps: {
                                innerHTML: L._s(L.parseMessageAsHTML(t))
                            }
                        }), L._v(" "), L.showSources && L.shouldShowMessageSources(t) ? B("div", {
                            style: L.sourcesWrapperCSS
                        }, [L.getMessageSources(t).length <= 1 ? B("div", {
                            style: L.sourceLabelCSS
                        }, [L._v(L._s(L.t.chat_bubble.source) + ":")]) : B("div", {
                            style: L.sourceLabelCSS
                        }, [L._v(L._s(L.t.chat_bubble.sources) + ":")]), L._v(" "), B("div", {
                            style: {
                                direction: L.languageDirection
                            }
                        }, L._l(L.getMessageSources(t), (function(t) {
                            return B("div", {
                                staticStyle: {
                                    display: "inline-block",
                                    "user-select": "none"
                                }
                            }, ["webpage" == t.type && (L.showSourcePageTitle || L.showSourcePageURL) ? B("a", {
                                staticClass: "chtl-source",
                                style: L.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [L.showSourcePageTitle && null != t.title && t.title.length > 0 ? B("div", {
                                style: L.sourceTitleCSS
                            }, [L._v(L._s(t.title))]) : L._e(), L._v(" "), L.showSourcePageURL ? B("div", {
                                style: L.sourceURLCSS
                            }, [L._v(L._s(t.shortened_url))]) : L._e()]) : "document_url" == t.type && (L.showSourceDocumentFilename || L.showSourceDocumentURL) ? B("a", {
                                staticClass: "chtl-source",
                                style: L.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [L.showSourceDocumentFilename && null != t.filename && t.filename.length > 0 ? B("div", {
                                style: L.sourceDocumentFilenameCSS
                            }, [L._v(L._s(t.filename))]) : L._e(), L._v(" "), L.showSourceDocumentURL ? B("div", {
                                style: L.sourceURLCSS
                            }, [L._v(L._s(t.shortened_url))]) : L._e()]) : "document" == t.type && L.showSourceDocumentFilename ? B("div", {
                                staticClass: "chtl-source chtl-source--w-lg",
                                style: L.sourceWrapperCSS,
                                attrs: {
                                    target: "_blank",
                                    href: t.url
                                }
                            }, [L.showSourceDocumentFilename && null != t.filename && t.filename.length > 0 ? B("div", {
                                style: L.sourceDocumentFilenameOnlyCSS
                            }, [L._v(L._s(t.filename))]) : L._e()]) : L._e()])
                        })), 0)]) : L._e(), L._v(" "), L.showRating && !0 !== (null == t ? void 0 : t.streaming) ? B("div", {
                            style: L.helpfulRatingContainerCSS
                        }, [B("div", {
                            style: L.helpfulRatingTextCSS
                        }, [L._v(L._s(L.t.chat_bubble.rating_message))]), L._v(" "), B("div", {
                            staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "start"
                            }
                        }, [B("span", {
                            staticClass: "response-helpful-rating",
                            class: {
                                active: 1 === (null == t ? void 0 : t.rating_value), disabled: null !== (null == t ? void 0 : t.rating_value) && 1 !== (null == t ? void 0 : t.rating_value)
                            },
                            on: {
                                click: function(e) {
                                    return L.ratingSelected(t, 1)
                                }
                            }
                        }, [L._v(L._s(L.t.chat_bubble.rating_yes))]), L._v(" "), B("span", {
                            staticClass: "response-helpful-rating",
                            class: {
                                active: -1 === (null == t ? void 0 : t.rating_value), disabled: null !== (null == t ? void 0 : t.rating_value) && -1 !== (null == t ? void 0 : t.rating_value)
                            },
                            style: {
                                "margin-left": "ltr" == L.languageDirection ? "10px" : 0,
                                "margin-right": "rtl" == L.languageDirection ? "10px" : 0
                            },
                            on: {
                                click: function(e) {
                                    return L.ratingSelected(t, -1)
                                }
                            }
                        }, [L._v(L._s(L.t.chat_bubble.rating_no))])])]) : L._e()])])]) : "user" == t.role ? B("div", {
                            style: L.chatBubbleWrapperCSS(t.role)
                        }, [B("div", {
                            staticClass: "chtl-reset",
                            style: L.chatBubbleCSS(t.role),
                            domProps: {
                                innerHTML: L._s(L.parseMessageAsHTML(t))
                            }
                        })]) : L._e()])]) : L._e()])
                    })), L._v(" "), B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: L.chatbot_thinking,
                            expression: "chatbot_thinking"
                        }],
                        staticClass: "ch1fkl",
                        style: L.chatBubbleWrapperCSS("bot")
                    }, [B("div", {
                        style: L.chatAvatarImgCSS("bot")
                    }), L._v(" "), B("div", {
                        style: L.chatBubbleCSS("bot_thinking")
                    }, [B("div", {
                        staticClass: "ticontainer"
                    }, [B("div", {
                        staticClass: "tiblock"
                    }, [B("div", {
                        staticClass: "tidot"
                    }), L._v(" "), B("div", {
                        staticClass: "tidot"
                    }), L._v(" "), B("div", {
                        staticClass: "tidot"
                    })])])])]), L._v(" "), B("div", {
                        ref: "chatbot_thinking_bubble"
                    }), L._v(" "), B("div", {
                        ref: "hidden_element",
                        staticStyle: {
                            height: "30px",
                            width: "0"
                        }
                    })], 2), L._v(" "), B("div", {
                        style: L.bottomSection
                    }, [B("div", {
                        style: L.messageInputWrapperCSS
                    }, [B("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: L.user_message,
                            expression: "user_message"
                        }],
                        staticClass: "chtl-message-input",
                        style: L.messageInputCSS,
                        attrs: {
                            "aria-label": L.messageInputPlaceholder,
                            rows: "1",
                            type: "text",
                            placeholder: L.messageInputPlaceholder
                        },
                        domProps: {
                            value: L.user_message
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && L._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : L.submitUserMessage.apply(null, arguments)
                            },
                            input: function(t) {
                                t.target.composing || (L.user_message = t.target.value)
                            }
                        }
                    }), L._v(" "), B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: L.chatbot_thinking || L.chatbot_streaming,
                            expression: "chatbot_thinking || chatbot_streaming"
                        }],
                        staticClass: "spnqlr",
                        style: L.thinkingIconCSS
                    }, [B("span", {
                        staticClass: "loader"
                    })]), L._v(" "), B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !L.chatbot_thinking && !L.chatbot_streaming,
                            expression: "!chatbot_thinking && !chatbot_streaming"
                        }],
                        style: L.sendIconCSS
                    }, [B("svg", {
                        staticStyle: {
                            display: "block",
                            cursor: "pointer"
                        },
                        attrs: {
                            width: "15",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        on: {
                            click: L.submitUserMessage
                        }
                    }, [B("path", {
                        attrs: {
                            fill: L.primaryColor,
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M6.67993 117.84C-22.5334 44.7987 54.0133 -25.64 124.377 9.54267L488.911 191.809C551.973 223.34 551.973 313.331 488.911 344.863L124.377 527.129C54.0133 562.317 -22.5294 491.879 6.67993 418.832L57.5439 291.676H200.891C213.776 291.676 224.224 281.228 224.224 268.343C224.224 255.457 213.776 245.009 200.891 245.009H57.5439L6.67993 117.84Z"
                        }
                    })])])]), L._v(" "), B("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null != L.chat_error && L.chat_error.length > 0,
                            expression: "chat_error != null && chat_error.length > 0"
                        }],
                        staticStyle: {
                            padding: "0 15px",
                            "margin-top": "5px",
                            "margin-bottom": "5px",
                            color: "red",
                            "font-weight": "400",
                            "font-size": "12px"
                        }
                    }, [L._v(L._s(L.chat_error))]), L._v(" "), 1 != L.hidePoweredByBranding ? B("div", {
                        staticStyle: {
                            padding: "0 15px",
                            "margin-top": "5px",
                            "margin-bottom": "5px",
                            "text-align": "center",
                            "font-size": "0.8em",
                            color: "#7d7d7d"
                        }
                    }, [L._v("\n                      Powered by "), B("a", {
                        staticStyle: {
                            color: "#7d7d7d !important",
                            "text-decoration": "underline !important",
                            display: "inline-block !important"
                        },
                        attrs: {
                            href: "https://chatling.ai",
                            target: "_blank"
                        }
                    }, [L._v("Chatling")])]) : L._e()])])])])]), L._v(" "), L.showAttentionGrabber ? B("div", {
                        style: L.attentionGrabberTextWrapperCSS
                    }, [B("div", {
                        staticClass: "chtl-hovering-message-close-btn",
                        on: {
                            click: L.closeHoveringMessages
                        }
                    }, [B("svg", {
                        attrs: {
                            width: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M2 14L14 2M2 2L14 14",
                            stroke: L.textColor,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), L._v(" "), B("div", {
                        style: {
                            cursor: "pointer",
                            direction: L.languageDirection
                        },
                        on: {
                            click: L.chatIconClicked
                        }
                    }, L._l(L.attentionGrabberTexts, (function(t) {
                        return null != t && "" != t ? B("div", {
                            staticClass: "chtl-hovering-message"
                        }, [B("span", {
                            staticClass: "chtl-reset",
                            domProps: {
                                innerHTML: L._s(t)
                            }
                        })]) : L._e()
                    })), 0)]) : L._e(), L._v(" "), L.showChatIcon ? B("div", [L.is_chat_open || 1 != L.chat_icon_design_type || null == L.chatIconCustomImageURL ? L.is_chat_open ? L.is_chat_open ? B("div", {
                        style: L.chatButtonContainerCSS
                    }, [B("div", {
                        style: L.defaultChatButtonWrapperCSS,
                        on: {
                            click: L.chatIconClicked
                        }
                    }, [B("svg", {
                        style: L.closeChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: L.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), L._v(" "), B("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: L.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]) : L._e() : B("div", {
                        style: L.chatButtonContainerCSS
                    }, [B("div", {
                        style: L.defaultChatButtonWrapperCSS,
                        on: {
                            click: L.chatIconClicked
                        }
                    }, [B("svg", {
                        style: L.defaultChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 820 760",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [B("path", {
                        attrs: {
                            d: "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z",
                            fill: L.chatIconColor
                        }
                    })])])]) : B("div", {
                        style: L.chatButtonContainerCSS
                    }, [B("div", {
                        style: L.customChatButtonWrapperCSS,
                        on: {
                            click: L.chatIconClicked
                        }
                    })])]) : L._e()], 1)])])
                }), [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);