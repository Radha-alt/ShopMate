(window.webpackJsonp = window.webpackJsonp || []).push([
    [19, 5, 11], {
        375: function(t, e, n) {
            "use strict";
            (function(t) {
                var i = n(14),
                    r = n(408),
                    o = n(15),
                    a = n(381),
                    l = n(388),
                    s = (n(68), n(148), n(115), n(69), n(16), n(30), n(234), n(32), n(382), n(231), n(26), n(383), n(44), n(384), n(38), n(51), n(39), n(402)),
                    u = n(385);
                e.a = {
                    props: {
                        previewTitleBarHeight: {
                            type: Number,
                            default: 0
                        },
                        placed_on: {
                            type: String,
                            default: "public_embed"
                        },
                        external_gid: {
                            type: String,
                            default: null
                        },
                        internal_gid: {
                            type: String,
                            default: null
                        },
                        forced_chat_open: {
                            type: Boolean,
                            default: !1
                        },
                        force_attention_grabber_to_open: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    emits: ["chatbotLoaded", "chatbotLoadingError"],
                    components: {
                        ChatbotInterface: s.default
                    },
                    data: function() {
                        return {
                            hasIp: !1,
                            fetchVisitorIpMessageCSRFToken: null,
                            allowSpeechToTextInput: !1,
                            maxActiveInputAudioRecordingDurationSeconds: 120,
                            displayType: "floating",
                            page_url: null,
                            device_type: null,
                            browser: null,
                            os: null,
                            is_mobile_viewport: !1,
                            aiStreamRequests: [],
                            scrollToBottomTimeout: null,
                            chatbotInitialized: !1,
                            displayStartNewChatButton: !1,
                            chatEndedAt: null,
                            chatStatusId: null,
                            startChatAxiosRequest: null,
                            setupChatbotAxiosRequest: null,
                            continueChatAxiosRequest: null,
                            refreshChatAxiosRequest: null,
                            endChatAxiosRequest: null,
                            startChatbotThinkingTimeout: null,
                            startChatbotThinkingTimeoutDuration: 500,
                            focusInputFieldFlag: !1,
                            clearUserInputFieldFlag: !1,
                            stream: !0,
                            scroll_to_bottom: !1,
                            loading: {
                                chatbot: !0,
                                newChat: !1,
                                refreshChat: !1,
                                endChat: !1
                            },
                            error: {
                                chat: null,
                                load: null,
                                newChat: null,
                                endChat: null
                            },
                            chat_error_timeout: null,
                            chatbot_loaded: !1,
                            chatbot_thinking: !1,
                            disable_user_input: !1,
                            interface_language: "en",
                            translated_texts: [],
                            settings: null,
                            appearance: null,
                            texts: null,
                            bot_icon: null,
                            chat_icon: null,
                            predefined_queries: [],
                            chat_id: null,
                            customer_uuid: null,
                            user_locale: null,
                            is_returning_user: !1,
                            custom_chat_icon_type_id: 1,
                            default_chat_icon_type_id: 2,
                            conversation: [],
                            active_input: null,
                            activeInputMessageId: null,
                            flow: {
                                components: [],
                                current_component_index: null,
                                output_delay: 1e3
                            }
                        }
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("message", this.onMessageEvent), this.cancelSetupChatbotRequest(), this.cancelContinueChatRequest(), this.cancelStartChatRequest(), this.cancelRefreshChatRequest(), this.cancelEndChatRequest(), this.endAllAiKbStreaming()
                    },
                    mounted: function() {
                        (this.isBuilderPreview || this.isSharingPage) && (this.user_locale = window.navigator.language, this.customer_uuid = this.$generateUUID()), window.addEventListener("message", this.onMessageEvent), window.parent.postMessage({
                            event_id: "chtl_loaded",
                            data: {}
                        }, "*")
                    },
                    watch: {
                        activeInputMessageId: {
                            handler: function(t, e) {},
                            immediate: !0
                        },
                        external_gid: {
                            handler: function(t, e) {
                                null != t && t != e && (this.isPublicChat || (this.chatbotInitialized = !0), this.loadChatbot(!0))
                            },
                            immediate: !0
                        }
                    },
                    methods: {
                        onMessageEvent: function(t) {
                            var e = this;
                            try {
                                var n, i;
                                if (null == t) return;
                                if (null == (null == t ? void 0 : t.data)) return;
                                if (null == (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.event_id)) return;
                                var r = null == t || null === (i = t.data) || void 0 === i ? void 0 : i.event_id;
                                if ("is_mobile" === r) e.is_mobile_viewport = !0;
                                else if ("chtl_chatbot_init" == r) {
                                    var o, a, l, s, u, c, d, h, p, v = null == t || null === (o = t.data) || void 0 === o ? void 0 : o.lcg,
                                        f = null == t || null === (a = t.data) || void 0 === a ? void 0 : a.cuid,
                                        g = null == t || null === (l = t.data) || void 0 === l ? void 0 : l.display_type,
                                        m = null == t || null === (s = t.data) || void 0 === s ? void 0 : s.locale,
                                        _ = null == t || null === (u = t.data) || void 0 === u ? void 0 : u.ru,
                                        b = null == t || null === (c = t.data) || void 0 === c ? void 0 : c.page_url,
                                        x = null == t || null === (d = t.data) || void 0 === d ? void 0 : d.device_type,
                                        C = null == t || null === (h = t.data) || void 0 === h ? void 0 : h.browser,
                                        w = null == t || null === (p = t.data) || void 0 === p ? void 0 : p.os;
                                    null != v && v.length > 0 && (e.chat_id = v), null != f && f.length > 0 && (e.customer_uuid = f), null != g && g.length > 0 && (e.displayType = g), null != m && m.length > 0 && (e.user_locale = m), null != _ && (e.is_returning_user = _), null != b && b.length > 0 && (e.page_url = b), null != x && x.length > 0 && (e.device_type = x), null != C && C.length > 0 && (e.browser = C), null != w && w.length > 0 && (e.os = w), e.chatbotInitialized = !0, e.loadChatbot(!0)
                                } else if ("chtl_chat_widget_opened" == r) null == this.chat_id || 0 == this.chat_id.length ? this.startNewChat() : this.scrollToBottomWithDelay(150);
                                else if ("chtl_gvia_fetched" == r) {
                                    var y, k, S, I, T = null == t || null === (y = t.data) || void 0 === y || null === (k = y.data) || void 0 === k ? void 0 : k.t,
                                        R = null == t || null === (S = t.data) || void 0 === S || null === (I = S.data) || void 0 === I ? void 0 : I.c;
                                    if (null == R || 0 == R.length) return;
                                    if (T != this.fetchVisitorIpMessageCSRFToken) return;
                                    try {
                                        var E = atob(R);
                                        null != E && E.length > 0 && (this.hasIp || this.saveVisitorIpForChat(E))
                                    } catch (t) {}
                                }
                            } catch (t) {}
                        },
                        clearUserInputField: function() {
                            this.clearUserInputFieldFlag = !this.clearUserInputFieldFlag
                        },
                        focusUserInputField: function() {
                            this.focusInputFieldFlag = !this.focusInputFieldFlag
                        },
                        hasValidDynamicProperties: function(t) {
                            return null != t && ("value" in t && "type" in t)
                        },
                        isValidComponent: function(t) {
                            var e = null == t ? void 0 : t.type;
                            if (null == e) return !1;
                            if (e == u.d.AI.RESPONSE) {
                                var n = null == t ? void 0 : t.data;
                                if (null == n) return !1;
                                var i = null == n ? void 0 : n.response_source;
                                if (null != u.a)
                                    if (i === u.a.KB)
                                        if (null == n ? void 0 : n.stream) return !0
                            }
                            return this.$chatMessageBlockHasData(t, u.d, u.a)
                        },
                        buttonBlockClicked: function(t) {},
                        showChatError: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3;
                            this.error.chat = t, null != this.chat_error_timeout && clearTimeout(this.chat_error_timeout), this.chat_error_timeout = setTimeout((function() {
                                e.error.chat = null
                            }), n)
                        },
                        clearChatError: function() {
                            this.error.chat = null, null != this.chat_error_timeout && clearTimeout(this.chat_error_timeout)
                        },
                        displayChatbotThinkingWithDelay: function() {
                            var t = this;
                            clearTimeout(this.startChatbotThinkingTimeout), this.startChatbotThinkingTimeout = setTimeout((function() {
                                t.chatbot_thinking = !0
                            }), this.startChatbotThinkingTimeoutDuration)
                        },
                        clearChatbotThinkingDelay: function() {
                            clearTimeout(this.startChatbotThinkingTimeout)
                        },
                        cancelEndChatRequest: function() {
                            try {
                                null != this.endChatAxiosRequest && this.endChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelRefreshChatRequest: function() {
                            try {
                                null != this.refreshChatAxiosRequest && this.refreshChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelStartChatRequest: function() {
                            try {
                                null != this.startChatAxiosRequest && this.startChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelSetupChatbotRequest: function() {
                            try {
                                null != this.setupChatbotAxiosRequest && this.setupChatbotAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        cancelContinueChatRequest: function() {
                            try {
                                null != this.continueChatAxiosRequest && this.continueChatAxiosRequest.cancel()
                            } catch (t) {}
                        },
                        refreshChat: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, i, r, o, a, l, s, u, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null != t.chat_id && 0 != t.chat_id.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!t.loading.refreshChat) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (null != t.external_gid && 0 != t.external_gid.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (t.error.refreshChat = null, t.loading.refreshChat = !0, n = {
                                                    cgid: t.chat_id,
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid
                                                }, t.refreshChatAxiosRequest = t.$axios.CancelToken.source(), null != (i = t.apiEndpointPath)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            return e.prev = 13, t.loading.chatbot = !0, e.next = 17, t.$axios.post("".concat(i, "/chat/refresh"), n, {
                                                cancelToken: t.refreshChatAxiosRequest.token
                                            });
                                        case 17:
                                            if (s = e.sent, t.refreshChatAxiosRequest = null, t.loading.refreshChat = !1, null != s) {
                                                e.next = 23;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2295)"), e.abrupt("return");
                                        case 23:
                                            if (null != (u = null !== (r = s.data) && void 0 !== r ? r : null)) {
                                                e.next = 27;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2296)"), e.abrupt("return");
                                        case 27:
                                            if (0 != u.success) {
                                                e.next = 30;
                                                break
                                            }
                                            return t.showChatError(u.data), e.abrupt("return");
                                        case 30:
                                            u = null === (o = u) || void 0 === o ? void 0 : o.data, c = null === (a = u) || void 0 === a ? void 0 : a.messages, t.chatEndedAt = null === (l = u) || void 0 === l ? void 0 : l.ended_at, t.loadChatFromMessages(c), e.next = 44;
                                            break;
                                        case 36:
                                            return e.prev = 36, e.t0 = e.catch(13), t.refreshChatAxiosRequest = null, t.loading.refreshChat = !1, t.showChatError("Error refreshing chat (Code: 2297)"), e.abrupt("return");
                                        case 44:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [13, 36]
                                ])
                            })))()
                        },
                        endChat: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, i, r, o, a, l, s, u, c;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (null != t.chat_id && 0 != t.chat_id.length) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (!t.loading.endChat) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 4:
                                            if (null != t.external_gid && 0 != t.external_gid.length) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            if (t.loading.endChat = !0, e.prev = 7, a = {
                                                    cgid: t.chat_id,
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid
                                                }, t.endChatAxiosRequest = t.$axios.CancelToken.source(), null != (l = t.apiEndpointPath)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 13:
                                            return e.next = 15, t.$axios.post("".concat(l, "/chat/end"), a, {
                                                cancelToken: t.endChatAxiosRequest.token
                                            });
                                        case 15:
                                            if (s = e.sent, t.endChatAxiosRequest = null, t.loading.endChat = !1, null != s) {
                                                e.next = 21;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2299)"), e.abrupt("return");
                                        case 21:
                                            if (null != (u = null !== (n = s.data) && void 0 !== n ? n : null)) {
                                                e.next = 25;
                                                break
                                            }
                                            return t.showChatError("Error refreshing chat (Code: 2300)"), e.abrupt("return");
                                        case 25:
                                            if (0 != u.success) {
                                                e.next = 28;
                                                break
                                            }
                                            return t.showChatError(u.data), e.abrupt("return");
                                        case 28:
                                            u = null === (i = u) || void 0 === i ? void 0 : i.data, t.chatEndedAt = null === (r = u) || void 0 === r ? void 0 : r.ended_at, c = null === (o = u) || void 0 === o ? void 0 : o.messages, null == t.conversation && (t.conversation = []), null != c && c.length > 0 && (t.conversation = t.conversation.concat(c)), t.displayStartNewChatButtonIfChatEnded(), e.next = 44;
                                            break;
                                        case 36:
                                            return e.prev = 36, e.t0 = e.catch(7), t.endChatAxiosRequest = null, t.loading.endChat = !1, t.showChatError("Error ending chat (Code: 2301)"), e.abrupt("return");
                                        case 44:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [7, 36]
                                ])
                            })))()
                        },
                        loadChatFromMessages: function(t) {
                            if (null != t)
                                if (0 == t.length) this.conversation = [];
                                else {
                                    this.conversation = t;
                                    var e = t[t.length - 1],
                                        n = null == e ? void 0 : e.component;
                                    null != n && (null == n ? void 0 : n.category) == u.c.INPUT && 1 != (null == n ? void 0 : n.submitted) && (this.conversation.pop(), this.setUpNewFlow([n])), this.scrollToBottomWithDelay(), this.displayStartNewChatButtonIfChatEnded()
                                }
                        },
                        loadChatbot: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var i, r, o, a, l, s, u, c, d, h, p, v, f, g, m, _, b, x, C, w, y, k;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (t || !e.loading.chatbot) {
                                                n.next = 4;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 4:
                                            if (e.chatbotInitialized) {
                                                n.next = 7;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 7:
                                            if (null != e.external_gid && 0 != e.external_gid.length) {
                                                n.next = 10;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 10:
                                            if (e.error.load = null, i = {
                                                    cgid: e.chat_id,
                                                    egid: e.external_gid,
                                                    cuid: e.customer_uuid,
                                                    ulc: e.user_locale,
                                                    ru: e.is_returning_user,
                                                    page_url: e.page_url,
                                                    device_type: e.device_type,
                                                    browser: e.browser,
                                                    os: e.os
                                                }, e.setupChatbotAxiosRequest = e.$axios.CancelToken.source(), null != (r = e.apiEndpointPath)) {
                                                n.next = 17;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 17:
                                            return n.prev = 17, e.loading.chatbot = !0, n.next = 21, e.$axios.post("".concat(r), i, {
                                                cancelToken: e.setupChatbotAxiosRequest.token
                                            });
                                        case 21:
                                            if (u = n.sent, e.setupChatbotAxiosRequest = null, e.loading.chatbot = !1, null != u) {
                                                n.next = 30;
                                                break
                                            }
                                            return "An error occurred (Code: 2045)", e.$emit("chatbotLoadingError", "An error occurred (Code: 2045)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 30:
                                            if (null != (c = null !== (o = u.data) && void 0 !== o ? o : null)) {
                                                n.next = 37;
                                                break
                                            }
                                            return "An error occurred (Code: 2046)", e.$emit("chatbotLoadingError", "An error occurred (Code: 2046)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 37:
                                            if (0 != c.success) {
                                                n.next = 49;
                                                break
                                            }
                                            return h = c.data, p = null === (d = c) || void 0 === d ? void 0 : d.code, v = null, null != h && h.length > 0 ? (v = h, e.$emit("chatbotLoadingError", v)) : null != p && 4001 === p && (v = "Chatbot not found. (CODE: 4005)", e.$emit("chatbotLoadingError", v)), null == v && (v = "An error occurred (Code: 4006)"), e.error.load = v, e.$emit("chatbotLoadingError", v), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 49:
                                            c = null === (a = c) || void 0 === a ? void 0 : a.data, f = null === (l = c) || void 0 === l ? void 0 : l.chatbot, g = null === (s = c) || void 0 === s ? void 0 : s.chat, null != f ? (e.translated_texts = null === (m = c) || void 0 === m ? void 0 : m.texts, e.appearance = null == f ? void 0 : f.appearance, e.settings = null == f ? void 0 : f.settings, e.texts = null == f ? void 0 : f.texts, _ = null == f ? void 0 : f.predefined_queries, null != (b = null == f ? void 0 : f.interface_language) && b.length > 0 && (e.interface_language = b), null != _ && _.length > 0 ? e.predefined_queries = _ : e.predefined_queries = [], e.bot_icon = null == f ? void 0 : f.bot_icon, e.chat_icon = null == f ? void 0 : f.chat_icon, e.chatbot_loaded = !0, x = null == f ? void 0 : f.mrd, C = null == f ? void 0 : f.allow_stt, null != x && x > 0 && (e.maxActiveInputAudioRecordingDurationSeconds = x), null != C && (e.allowSpeechToTextInput = C), null != g && (w = null == g ? void 0 : g.messages, y = null == g ? void 0 : g.id, e.hasIp = null == g ? void 0 : g.hia, null != y && y.length > 0 ? (e.chat_id = y, e.chatEndedAt = null == g ? void 0 : g.ended_at, e.loadChatFromMessages(w), e.isPublicChat && !e.hasIp && e.fetchVisitorIp()) : (e.chat_id = null, (e.isBuilderPreview || e.isSharingPage) && e.startNewChat())), e.chatbotLoaded()) : (k = "An error occurred (Code: 4007)", e.error.load = k, e.$emit("chatbotLoadingError", k), e.chatbot_loaded = !1, e.chatbotLoaded()), n.next = 65;
                                            break;
                                        case 55:
                                            return n.prev = 55, n.t0 = n.catch(17), e.setupChatbotAxiosRequest = null, e.loading.chatbot = !1, e.$emit("chatbotLoadingError", "An error occurred (Code: 2047)"), e.chatbot_loaded = !1, e.chatbotLoaded(), n.abrupt("return");
                                        case 65:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [17, 55]
                                ])
                            })))()
                        },
                        chatbotLoaded: function() {
                            this.$emit("chatbotLoaded", this.chatbot_loaded), window.parent.postMessage({
                                event_id: "chtl_chatbot_loaded",
                                data: {}
                            }, "*")
                        },
                        fetchVisitorIp: function() {
                            this.fetchVisitorIpMessageCSRFToken = this.$generateUUID(), window.parent.postMessage({
                                event_id: "chtl_gvia",
                                data: {
                                    t: this.fetchVisitorIpMessageCSRFToken
                                }
                            }, "*")
                        },
                        saveVisitorIpForChat: function(e) {
                            var n = this;
                            return Object(o.a)(regeneratorRuntime.mark((function i() {
                                var r, o, a, l, s;
                                return regeneratorRuntime.wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if (null != e) {
                                                i.next = 4;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 4:
                                            if (null != n.chat_id) {
                                                i.next = 6;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 6:
                                            return r = t.from(e).toString("base64"), o = {
                                                cgid: n.chat_id,
                                                egid: n.external_gid,
                                                eia: r
                                            }, i.prev = 8, i.next = 11, n.$axios.post("".concat(n.apiEndpointPath, "/chat/siac"), o);
                                        case 11:
                                            if (null != (l = i.sent)) {
                                                i.next = 15;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 15:
                                            if (null != (s = null !== (a = l.data) && void 0 !== a ? a : null)) {
                                                i.next = 19;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 19:
                                            if (0 != s.success) {
                                                i.next = 22;
                                                break
                                            }
                                            return i.abrupt("return");
                                        case 22:
                                            n.hasIp = !0, i.next = 28;
                                            break;
                                        case 25:
                                            i.prev = 25, i.t0 = i.catch(8);
                                        case 28:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i, null, [
                                    [8, 25]
                                ])
                            })))()
                        },
                        startNewChat: function() {
                            this.loading.newChat || (this.endAllAiKbStreaming(), this.loading.newChat = !1, this.loading.refreshChat = !1, this.loading.endChat = !1, this.chat_id = null, this.conversation = [], this.active_input = null, this.activeInputMessageId = null, this.flow.components = [], this.flow.current_component_index = null, this.disable_user_input = !1, this.chatbot_thinking = !1, this.clearChatError(), this.error.newChat = null, this.error.chat = null, this.clearChatbotThinkingDelay(), this.startChatbotThinkingTimeout = null, this.cancelContinueChatRequest(), this.cancelStartChatRequest(), this.cancelRefreshChatRequest(), this.cancelEndChatRequest(), this.error.refreshChat = null, this.chatEndedAt = null, this.chatStatusId = null, this.displayStartNewChatButton = !1, this.createChat())
                        },
                        createChat: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var n, i, r, o, a, l, s, u, c, d, h, p, v;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.loading.newChat = !0, t.error.newChat = null, n = {
                                                    egid: t.external_gid,
                                                    cuid: t.customer_uuid,
                                                    ulc: t.user_locale,
                                                    page_url: t.page_url,
                                                    device_type: t.device_type,
                                                    browser: t.browser,
                                                    os: t.os
                                                }, t.startChatAxiosRequest = t.$axios.CancelToken.source(), t.hasIp = !1, null != (i = t.apiEndpointPath)) {
                                                e.next = 10;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2291)", t.loading.newChat = !1, e.abrupt("return");
                                        case 10:
                                            return e.prev = 10, e.next = 13, t.$axios.post("".concat(i, "/chat/new"), n, {
                                                cancelToken: t.startChatAxiosRequest.token
                                            });
                                        case 13:
                                            if (s = e.sent, t.startChatAxiosRequest = null, t.loading.newChat = !1, null != s) {
                                                e.next = 19;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2292)", e.abrupt("return");
                                        case 19:
                                            if (null != (u = null !== (r = s.data) && void 0 !== r ? r : null)) {
                                                e.next = 23;
                                                break
                                            }
                                            return t.error.newChat = "An error occurred (Code: 2293)", e.abrupt("return");
                                        case 23:
                                            if (0 != u.success) {
                                                e.next = 27;
                                                break
                                            }
                                            return c = u.data, t.error.newChat = c, e.abrupt("return");
                                        case 27:
                                            u = null === (o = u) || void 0 === o ? void 0 : o.data, d = null === (a = u) || void 0 === a ? void 0 : a.flow, null != (h = null === (l = u) || void 0 === l ? void 0 : l.chat) && (t.chat_id = null == h ? void 0 : h.id, t.chatEndedAt = null == h ? void 0 : h.chat_ended_at, window.parent.postMessage({
                                                event_id: "chtl_chat_created_w2",
                                                data: {
                                                    chat_id: t.chat_id
                                                }
                                            }, "*"), t.isPublicChat && t.fetchVisitorIp()), null != d && (p = null == d ? void 0 : d.components, null !== (v = null == d ? void 0 : d.output_delay) && (t.flow.output_delay = v), t.setUpNewFlow(p)), e.next = 42;
                                            break;
                                        case 34:
                                            return e.prev = 34, e.t0 = e.catch(10), t.startChatAxiosRequest = null, t.loading.newChat = !1, t.error.newChat = "An error occurred (Code: 2294)", e.abrupt("return");
                                        case 42:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [10, 34]
                                ])
                            })))()
                        },
                        userInputSubmitted: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var i, o, a, l, s, c, d, h, p, v, f, g, m, _, b, x, C, w, y, k, S, I, T, R, E, A, B, N, F, M, D, P, U;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!e.chatEnded) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 3:
                                            if (e.clearChatError(), !e.chatbot_thinking) {
                                                n.next = 6;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 6:
                                            if (e.scrollToBottomWithDelay(), null != (i = null == t ? void 0 : t.block_id) && 0 != i.length) {
                                                n.next = 11;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2261)"), n.abrupt("return");
                                        case 11:
                                            if (null != (o = e.flow.components.find((function(t) {
                                                    return t.id == i
                                                })))) {
                                                n.next = 15;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2263)"), n.abrupt("return");
                                        case 15:
                                            if (null != e.flow) {
                                                n.next = 19;
                                                break
                                            }
                                            return e.showChatError("An error occurred (CODE: 2258)"), n.abrupt("return");
                                        case 19:
                                            if (a = null == t ? void 0 : t.message, l = null == t ? void 0 : t.message_id, s = {
                                                    message: a
                                                }, o.type == u.d.INPUTS.BUTTONS ? s.item_id = null == t ? void 0 : t.item_id : o.type == u.d.INPUTS.FORM ? s.field_values = null == t ? void 0 : t.values : o.type == u.d.CALCOM.BOOK && null != (c = null == t ? void 0 : t.data) && (s.booking = null == c ? void 0 : c.booking), d = null == o ? void 0 : o.cmgid, h = {
                                                    egid: e.external_gid,
                                                    cmgid: d,
                                                    cgid: e.chat_id,
                                                    data: s,
                                                    type: "input"
                                                }, p = null, o.type == u.d.INPUTS.FORM || o.type == u.d.CALCOM.BOOK ? e.updateSubmittedValueForMessage(l, !0) : ((p = e.getConversationItemSchema("user")).id = e.$generateUUID(), p.component = {
                                                    id: null == o ? void 0 : o.id,
                                                    type: null == o ? void 0 : o.type,
                                                    category: null == o ? void 0 : o.category,
                                                    data: null == o ? void 0 : o.data
                                                }, null != a && (null != (v = a) && (v = v.toString()), null != v && v.length > 0 && (p.text = v)), (null == o ? void 0 : o.type) == u.d.INPUTS.BUTTONS && (f = null == t ? void 0 : t.message_id, g = null == t ? void 0 : t.item_id, null != f && f.length > 0 && null != g && g.length > 0 && null != (_ = null == o || null === (m = o.data) || void 0 === m ? void 0 : m.options) && _.length > 0 && null != (b = _.find((function(t) {
                                                    return t.id == g
                                                }))) && (p.text = null == b ? void 0 : b.label, null != (x = e.conversation.find((function(t) {
                                                    return t.id == f
                                                }))) && (x.component.selected_item_id = null == b ? void 0 : b.id, (C = e.conversation.findIndex((function(t) {
                                                    return t.id == f
                                                }))) > -1 && (e.conversation[C] = x)))), e.conversation.push(p)), e.continueChatAxiosRequest = e.$axios.CancelToken.source(), n.prev = 28, null != (T = e.apiEndpointPath)) {
                                                n.next = 33;
                                                break
                                            }
                                            return e.showChatError("An error occurred (Code: 2292)"), n.abrupt("return");
                                        case 33:
                                            return e.disable_user_input = !0, e.active_input = null, e.activeInputMessageId = null, e.chatbot_thinking = !1, e.displayChatbotThinkingWithDelay(), n.next = 40, e.$axios.post("".concat(T, "/chat"), h, {
                                                cancelToken: e.continueChatAxiosRequest.token
                                            });
                                        case 40:
                                            if (R = n.sent, e.continueChatAxiosRequest = null, e.clearChatbotThinkingDelay(), e.disable_user_input = !1, null != R) {
                                                n.next = 50;
                                                break
                                            }
                                            return "An error occurred (Code: 2259)", e.showChatError("An error occurred (Code: 2259)"), null != p && e.removeMessageFromConversation(null === (E = p) || void 0 === E ? void 0 : E.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 50:
                                            if (null != (A = null !== (w = R.data) && void 0 !== w ? w : null)) {
                                                n.next = 57;
                                                break
                                            }
                                            return "An error occurred (Code: 2260)", e.showChatError("An error occurred (Code: 2260)"), null != p && e.removeMessageFromConversation(null === (B = p) || void 0 === B ? void 0 : B.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 57:
                                            if (0 != A.success) {
                                                n.next = 63;
                                                break
                                            }
                                            return null == (M = null === (N = A) || void 0 === N ? void 0 : N.data) || 0 == M.length ? Object(r.a)("error") : e.showChatError(M), null != p && e.removeMessageFromConversation(null === (F = p) || void 0 === F ? void 0 : F.id), e.redisplayCurrentFlowComponent(!1), n.abrupt("return");
                                        case 63:
                                            A = null === (y = A) || void 0 === y ? void 0 : y.data, e.clearUserInputField(), D = null === (k = A) || void 0 === k ? void 0 : k.flow, e.chatEndedAt = null === (S = A) || void 0 === S ? void 0 : S.chat_ended_at, e.chatStatusId = null === (I = A) || void 0 === I ? void 0 : I.chat_status_id, null != D ? (P = null == D ? void 0 : D.components, e.setUpNewFlow(P)) : (e.chatbot_thinking = !1, e.disable_user_input = !1), n.next = 82;
                                            break;
                                        case 71:
                                            return n.prev = 71, n.t0 = n.catch(28), e.continueChatAxiosRequest = null, e.clearChatbotThinkingDelay(), e.disable_user_input = !1, null != p && e.removeMessageFromConversation(null === (U = p) || void 0 === U ? void 0 : U.id), e.redisplayCurrentFlowComponent(!1), e.showChatError("An error occurred (Code: 2262)"), n.abrupt("return");
                                        case 82:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [28, 71]
                                ])
                            })))()
                        },
                        updateSubmittedValueForMessage: function(t, e) {
                            if (null == t || 0 == t.length) return !1;
                            var n = this.conversation.find((function(e) {
                                return e.id == t
                            }));
                            if (null == n) return !1;
                            n.component.submitted = e;
                            var i = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            return i > -1 && (this.conversation[i] = n, !0)
                        },
                        setUpNewFlow: function(t) {
                            if (null == t || 0 == t.length) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            this.flow.components = t, this.flow.current_component_index = 0, this.processNextFlow()
                        },
                        redisplayCurrentFlowComponent: function(t) {
                            if (null != this.flow) {
                                var e = this.flow.current_component_index;
                                if (!(null === e || e < 0)) {
                                    var n = this.flow.components[e];
                                    if (null == n || ((null == n ? void 0 : n.type) != u.d.INPUTS.BUTTONS || 0 != t) && (null == n ? void 0 : n.type) != u.d.INPUTS.FORM) this.processNextFlow();
                                    else
                                        for (var i = this.conversation.length - 1; i >= 0; i--) {
                                            var r, o = this.conversation[i];
                                            if ((null == o || null === (r = o.component) || void 0 === r ? void 0 : r.id) == (null == n ? void 0 : n.id)) {
                                                var a, l, s;
                                                (null == o || null === (a = o.component) || void 0 === a ? void 0 : a.type) == u.d.INPUTS.BUTTONS ? null != (null == o ? void 0 : o.component) && (o.component.selected_item_id = null) : (null == o || null === (l = o.component) || void 0 === l ? void 0 : l.type) != u.d.INPUTS.FORM && (null == o || null === (s = o.component) || void 0 === s ? void 0 : s.type) != u.d.CALCOM.BOOK || null != (null == o ? void 0 : o.component) && (o.component.submitted = !1), this.conversation[i] = o;
                                                break
                                            }
                                        }
                                }
                            }
                        },
                        goToPreviousFlowComponent: function() {
                            if (null != this.flow) {
                                var t = this.flow.current_component_index;
                                null === t || t < 0 || 0 != t && (this.flow.current_component_index = t - 1, this.processNextFlow())
                            }
                        },
                        aiResponseRated: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var i, r, o, a, l, s, u, c, d, h;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = null == t ? void 0 : t.message, r = null == t ? void 0 : t.rating, null != i && null != (null == i ? void 0 : i.id)) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            if (null != r) {
                                                n.next = 8;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 8:
                                            return o = null == i ? void 0 : i.id, (a = e.conversation.findIndex((function(t) {
                                                return t.id == o
                                            }))) > -1 && null != (l = e.conversation[a]) && null != (s = null == l ? void 0 : l.component) && "rating_value" in s && (s.rating_value = r, l.component = s, e.conversation[a] = l), u = {
                                                rating: r,
                                                message_id: null == i ? void 0 : i.id,
                                                chat_gid: e.chat_id
                                            }, n.prev = 12, n.next = 15, e.$axios.post("public/chat/v2/rate/airesp", u);
                                        case 15:
                                            if (null != (d = n.sent)) {
                                                n.next = 19;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 19:
                                            if (null != (h = null !== (c = d.data) && void 0 !== c ? c : null)) {
                                                n.next = 23;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 23:
                                            if (0 != h.success) {
                                                n.next = 26;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 26:
                                            n.next = 33;
                                            break;
                                        case 28:
                                            return n.prev = 28, n.t0 = n.catch(12), n.abrupt("return");
                                        case 33:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [12, 28]
                                ])
                            })))()
                        },
                        removeMessageFromConversation: function(t) {
                            var e = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            e > -1 && this.conversation.splice(e, 1)
                        },
                        scrollToBottom: function() {
                            this.scroll_to_bottom = !this.scroll_to_bottom
                        },
                        scrollToBottomWithDelay: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                            null != this.scrollToBottomTimeout && clearTimeout(this.scrollToBottomTimeout), this.scrollToBottomTimeout = setTimeout((function() {
                                t.scrollToBottom()
                            }), e)
                        },
                        getConversationItemSchema: function(t) {
                            return "bot" == t ? {
                                id: null,
                                role_id: u.e.BOT,
                                component: {
                                    id: null,
                                    type: null,
                                    category: null,
                                    data: null
                                },
                                text: null,
                                timestamp: Math.floor(Date.now() / 1e3)
                            } : "user" == t ? {
                                id: null,
                                role_id: u.e.USER,
                                timestamp: Math.floor(Date.now() / 1e3),
                                component: null
                            } : "system" == t ? {
                                id: null,
                                role_id: u.e.SYSTEM,
                                component: {
                                    id: null,
                                    type: null,
                                    category: null,
                                    data: null,
                                    text: null
                                },
                                text: null,
                                timestamp: Math.floor(Date.now() / 1e3)
                            } : void 0
                        },
                        goToNextComponent: function() {
                            this.chatbot_thinking = !1, this.disable_user_input = !1, this.flow.current_component_index++, this.processNextFlow()
                        },
                        processNextFlow: function() {
                            var t, e, n, i, r, o = this;
                            if (null == (null === (t = this.flow) || void 0 === t ? void 0 : t.components) || 0 == this.flow.components.length) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (null === this.flow.current_component_index) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (this.flow.current_component_index > this.flow.components.length - 1) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            var a = null;
                            try {
                                a = this.flow.components[this.flow.current_component_index]
                            } catch (t) {}
                            if (null == a) return this.chatbot_thinking = !1, void(this.disable_user_input = !1);
                            if (this.isValidComponent(a)) {
                                var l = null === (e = a) || void 0 === e ? void 0 : e.category,
                                    s = null === (n = a) || void 0 === n ? void 0 : n.type;
                                this.active_input = null, this.activeInputMessageId = null;
                                var c = null === (i = a) || void 0 === i ? void 0 : i.type,
                                    d = null === (r = a) || void 0 === r ? void 0 : r.cmgid,
                                    h = null;
                                if (null != d && d.length > 0 && (h = d), l == u.c.OUTPUT || l == u.c.AI || l == u.c.ERROR || l == u.c.LOGIC || l == u.c.SYSTEM || l == u.c.CALCOM) {
                                    var p, v, f, g = null;
                                    (g = l == u.c.ERROR || l == u.c.LOGIC || l == u.c.SYSTEM ? this.getConversationItemSchema("system") : this.getConversationItemSchema("bot")).id = h, g.component = {
                                        id: null === (p = a) || void 0 === p ? void 0 : p.id,
                                        type: s,
                                        category: l,
                                        data: null === (v = a) || void 0 === v ? void 0 : v.data,
                                        text: null === (f = a) || void 0 === f ? void 0 : f.text
                                    };
                                    var m = this.flow.output_delay,
                                        _ = !1;
                                    if (s == u.d.AI.RESPONSE) {
                                        var b, x, C = this.getAiResponseSourceFromBlock(a);
                                        if (C == u.a.KB)(null === (b = a) || void 0 === b || null === (x = b.data) || void 0 === x ? void 0 : x.stream) && (_ = !0), g.component.rating_value = null;
                                        else C == u.a.MODEL && (g.component.rating_value = null)
                                    }
                                    if (_) this.chatbot_thinking = !0, this.disable_user_input = !0, this.streamAiKbResponse(g);
                                    else if (s == u.d.CALCOM.BOOK) {
                                        var w;
                                        g.component.submitted = null === (w = a) || void 0 === w ? void 0 : w.submitted, this.chatbot_thinking = !0, this.disable_user_input = !0, this.scrollToBottomWithDelay(), setTimeout((function() {
                                            o.conversation.push(g), o.displayStartNewChatButtonIfChatEnded(), o.chatbot_thinking = !1
                                        }), m)
                                    } else this.chatbot_thinking = !0, this.disable_user_input = !0, this.scrollToBottomWithDelay(), setTimeout((function() {
                                        o.conversation.push(g), o.displayStartNewChatButtonIfChatEnded(), o.goToNextComponent()
                                    }), m)
                                } else if (l == u.c.INPUT) {
                                    if (this.disable_user_input = !1, this.chatbot_thinking = !1, c == u.d.INPUTS.BUTTONS || c == u.d.INPUTS.FORM) {
                                        var y, k, S, I = this.getConversationItemSchema("bot");
                                        if (I.id = h, I.component = {
                                                id: null === (y = a) || void 0 === y ? void 0 : y.id,
                                                type: s,
                                                category: l,
                                                data: null === (k = a) || void 0 === k ? void 0 : k.data,
                                                text: null === (S = a) || void 0 === S ? void 0 : S.text
                                            }, c == u.d.INPUTS.BUTTONS) I.component.selected_item_id = null;
                                        else if (c == u.d.INPUTS.FORM) {
                                            var T, R;
                                            I.component.submitted = null === (T = a) || void 0 === T ? void 0 : T.submitted, I.component.required = null === (R = a) || void 0 === R ? void 0 : R.required
                                        }
                                        this.conversation.push(I), this.scrollToBottomWithDelay(), this.activeInputMessageId = h
                                    } else this.active_input = a, this.activeInputMessageId = h, this.clearUserInputField(), this.focusUserInputField();
                                    this.displayStartNewChatButtonIfChatEnded()
                                } else this.goToNextComponent(), this.displayStartNewChatButtonIfChatEnded()
                            } else {
                                this.goToNextComponent()
                            }
                        },
                        setTextForMessage: function(t, e) {
                            var n = this.conversation.findIndex((function(e) {
                                return e.id == t
                            }));
                            if (n > -1) {
                                var i = this.conversation[n];
                                if (null == i) return;
                                var r = null == i ? void 0 : i.component;
                                if (null == r) return;
                                r.text = e, i.component = r, this.conversation[n] = i
                            }
                        },
                        setStreamStatusForAiKbMessage: function(t, e) {
                            if (null != e) {
                                var n = this.conversation.findIndex((function(e) {
                                    return e.id == t
                                }));
                                if (n > -1) {
                                    var i = this.conversation[n];
                                    if (null == i) return;
                                    var r = null == i ? void 0 : i.component;
                                    if (null == r) return;
                                    var o = null == r ? void 0 : r.data;
                                    if (null == o) return;
                                    o.stream_status = e, r.data = o, i.component = r, this.conversation[n] = i
                                }
                            }
                        },
                        streamAiKbResponse: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var i, r, o, a, l, s, c;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            n.prev = 0, null, r = null == t ? void 0 : t.id, null == t ? void 0 : t.component, i = {
                                                egid: e.external_gid,
                                                message_id: r,
                                                chat_id: e.chat_id
                                            }, o = e.$config.NODE_API_URL, a = "".concat(o, "/chat/v2"), e.isBuilderPreview && (a = "".concat(o, "/preview/chat/v2")), (l = new XMLHttpRequest).open("POST", a), l.setRequestHeader("Content-Type", "application/json"), l.responseType = "text", "", null, s = !1, c = "===END_STREAM===", e.aiStreamRequests[r] = l, l.addEventListener("readystatechange", (function() {
                                                if (l.readyState === l.HEADERS_RECEIVED) l.getResponseHeader("Content-Length"), l.getResponseHeader("Content-Type");
                                                else if (l.readyState === l.LOADING) {
                                                    s || (e.aiKbStreamingStarted(t), s = !0);
                                                    var n = l.responseText;
                                                    if (null != n && n.length > 0) {
                                                        var i = null;
                                                        try {
                                                            var o = n.split(c);
                                                            null == o || 0 == o.length || (i = o[0])
                                                        } catch (t) {
                                                            return
                                                        }
                                                        if (null == i && 0 == i.length) return;
                                                        e.setTextForMessage(r, i)
                                                    }
                                                } else if (l.readyState === l.DONE) {
                                                    var a, d;
                                                    e.aiKbStreamingCompleted(t);
                                                    var h = u.b.COMPLETED,
                                                        p = e.conversation.findIndex((function(t) {
                                                            return t.id == r
                                                        })),
                                                        v = null;
                                                    if (p > -1) {
                                                        var f;
                                                        if (null == (v = e.conversation[p])) return;
                                                        var g = null === (f = v) || void 0 === f ? void 0 : f.component;
                                                        if (null == g) return;
                                                        var m = null == g ? void 0 : g.data;
                                                        if (null == m) return;
                                                        m.stream_status = h, g.data = m, v.component = g, e.conversation[p] = v
                                                    }
                                                    var _ = null == l ? void 0 : l.responseText;
                                                    if (null == _ || 0 == _.length) return;
                                                    try {
                                                        var b = _.split(c)
                                                    } catch (t) {
                                                        return
                                                    }
                                                    if (null == b || b.length < 2) return;
                                                    var x = b[1],
                                                        C = null;
                                                    try {
                                                        C = JSON.parse(x)
                                                    } catch (t) {
                                                        return
                                                    }
                                                    if (null == C) return;
                                                    var w = null === (a = C) || void 0 === a ? void 0 : a.search_result,
                                                        y = null === (d = C) || void 0 === d ? void 0 : d.sources;
                                                    if (null != v) {
                                                        var k, S = null === (k = v) || void 0 === k ? void 0 : k.component;
                                                        if (null == S) return;
                                                        var I = null == S ? void 0 : S.data;
                                                        if (null == I) return;
                                                        null != y && y.length > 0 && (I.sources = y), S.data = I, v.component = S, e.conversation[p] = v
                                                    }
                                                    if (null == w) return;
                                                    var T = null == w ? void 0 : w.success;
                                                    if (null === T) return;
                                                    if (!1 === T) {
                                                        var R = null == w ? void 0 : w.data;
                                                        return void(null == R || 0 == R.length ? e.showChatError("An error occurred (CODE: 2302)") : e.showChatError(R))
                                                    }
                                                    return
                                                }
                                            })), l.send(JSON.stringify(i)), n.next = 25;
                                            break;
                                        case 21:
                                            return n.prev = 21, n.t0 = n.catch(0), n.abrupt("return");
                                        case 25:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 21]
                                ])
                            })))()
                        },
                        endAllAiKbStreaming: function() {
                            if (null != this.aiStreamRequests && 0 != this.aiStreamRequests.length) {
                                try {
                                    for (var t in this.aiStreamRequests) {
                                        var e = this.aiStreamRequests[t];
                                        if (null != e) try {
                                            e.abort()
                                        } catch (t) {}
                                    }
                                } catch (t) {}
                                this.aiStreamRequests = []
                            }
                        },
                        aiKbStreamingStarted: function(t) {
                            this.chatbot_thinking = !1, this.disable_user_input = !0, this.conversation.push(t), this.scrollToBottomWithDelay()
                        },
                        aiKbStreamingCompleted: function(t) {
                            var e = null;
                            null != t && (e = null == t ? void 0 : t.id);
                            try {
                                null != e && e in this.aiStreamRequests && delete this.aiStreamRequests[e]
                            } catch (t) {}
                            this.displayStartNewChatButtonIfChatEnded(), this.goToNextComponent()
                        },
                        readChunks: function(t) {
                            return Object(i.a)({}, Symbol.asyncIterator, (function() {
                                return Object(l.a)(regeneratorRuntime.mark((function e() {
                                    var n;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(a.a)(t.read());
                                            case 2:
                                                n = e.sent;
                                            case 3:
                                                if (n.done) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.next = 6, n.value;
                                            case 6:
                                                return e.next = 8, Object(a.a)(t.read());
                                            case 8:
                                                n = e.sent, e.next = 3;
                                                break;
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            }))
                        },
                        getRandomString: function(t) {
                            for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "", i = t; i > 0; --i) n += e[Math.floor(62 * Math.random())];
                            return n
                        },
                        getAiResponseSourceFromBlock: function(t) {
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.data;
                            return null == e ? null : null == e ? void 0 : e.response_source
                        },
                        displayStartNewChatButtonIfChatEnded: function() {
                            this.chatEnded && (null == this.flow.components || 0 == this.flow.components.length || this.flow.current_component_index === this.flow.components.length - 1) && (this.displayStartNewChatButton = !0)
                        }
                    },
                    computed: {
                        apiEndpointPath: function() {
                            var t = null;
                            return this.isBuilderPreview ? t = this.$config.CHATBOT_V2_PREVIEW_CHAT_ENDPOINT_PATH : (this.isPublicChat || this.isSharingPage) && (t = this.$config.CHATBOT_V2_PUBLIC_CHAT_ENDPOINT_PATH), t
                        },
                        isPublicChat: function() {
                            return "public_embed" == this.placed_on
                        },
                        isBuilderPreview: function() {
                            return "builder-preview" == this.placed_on
                        },
                        isSharingPage: function() {
                            return "sharing" == this.placed_on
                        },
                        chatEnded: function() {
                            return null != this.chatEndedAt && this.chatEndedAt > 0
                        },
                        filteredConversation: function() {
                            if (null == this.conversation || 0 == this.conversation.length) return [];
                            for (var t = [], e = 0; e < this.conversation.length; e++) {
                                var n = this.conversation[e];
                                if (null != n) {
                                    var i = null == n ? void 0 : n.component;
                                    if (null != i)
                                        if ((null == i ? void 0 : i.type) == u.d.INPUTS.BUTTONS) {
                                            var r = null == i ? void 0 : i.selected_item_id;
                                            if (null != r && r.length > 0) continue;
                                            if (1 == (null == i ? void 0 : i.submitted)) continue
                                        }
                                    t.push(n)
                                }
                            }
                            return t
                        },
                        messagesToShowAiAvatar: function() {
                            var t = [],
                                e = null;
                            if (null != this.filteredConversation && this.filteredConversation.length > 0)
                                for (var n = this.filteredConversation.length - 1; n >= 0; n--) {
                                    var i = this.filteredConversation[n];
                                    (null == i ? void 0 : i.role_id) == u.e.BOT ? null == e && (e = i, t.push(i.id)) : e = null
                                }
                            return t
                        },
                        hasCustomBotIcon: function() {
                            return null != this.botIconStorage && null != this.botIconName
                        },
                        hasCustomChatIcon: function() {
                            return this.chatIconDesignType == this.custom_chat_icon_type_id && null != this.chatIconName
                        },
                        chatIconDesignType: function() {
                            var t, e;
                            return null === (t = this.chat_icon) || void 0 === t || null === (e = t.desktop) || void 0 === e ? void 0 : e.type
                        },
                        customChatIconURL: function() {
                            var t, e = null;
                            return null != this.custom_chat_icon && null != (null === (t = this.custom_chat_icon) || void 0 === t ? void 0 : t.server_id) ? e = this.$config.CDN_URL_2 + "/" + this.custom_chat_icon.server_id : null != this.chatIconName && null != this.chatIconStorage && "cdn_2" == this.chatIconStorage && (e = this.$config.CDN_URL_2 + "/uploads/" + this.chatIconName), e
                        },
                        chatIconName: function() {
                            var t, e;
                            return null === (t = this.chat_icon) || void 0 === t || null === (e = t.desktop) || void 0 === e ? void 0 : e.name
                        },
                        chatIconStorage: function() {
                            var t, e;
                            return null === (t = this.chat_icon) || void 0 === t || null === (e = t.desktop) || void 0 === e ? void 0 : e.storage
                        },
                        botIconURL: function() {
                            var t, e = null;
                            return null != this.custom_bot_icon && null != (null === (t = this.custom_bot_icon) || void 0 === t ? void 0 : t.server_id) ? e = this.$config.CDN_URL_2 + "/" + this.custom_bot_icon.server_id : null != this.botIconName && null != this.botIconStorage && "cdn_2" == this.botIconStorage && (e = this.$config.CDN_URL_2 + "/uploads/" + this.botIconName), null == e && (e = "".concat(this.$config.CDN_URL_2, "/img/e1u43w8njdciwc8.jpg")), e
                        },
                        botIconName: function() {
                            var t, e;
                            return null == this.bot_icon || null == (null === (t = this.bot_icon) || void 0 === t ? void 0 : t.name) ? null : null === (e = this.bot_icon) || void 0 === e ? void 0 : e.name
                        },
                        botIconStorage: function() {
                            var t, e;
                            return null == this.bot_icon || null == (null === (t = this.bot_icon) || void 0 === t ? void 0 : t.storage) ? null : null === (e = this.bot_icon) || void 0 === e ? void 0 : e.storage
                        }
                    }
                }
            }).call(this, n(407).Buffer)
        },
        376: function(t, e, n) {
            var i = n(387);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, n(114).default)("270a91d8", i, !0, {
                sourceMap: !1
            })
        },
        379: function(t, e, n) {
            var i = n(396);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, n(114).default)("09b2a0fe", i, !0, {
                sourceMap: !1
            })
        },
        380: function(t, e, n) {
            var i = n(398);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, n(114).default)("0648aaf4", i, !0, {
                sourceMap: !1
            })
        },
        386: function(t, e, n) {
            "use strict";
            n(376)
        },
        387: function(t, e, n) {
            var i = n(113)((function(t) {
                return t[1]
            }));
            i.push([t.i, '.spinner[data-v-ec03766c]{animation:spinner-d3o0rx-ec03766c 1s steps(12) infinite;background:linear-gradient(0deg,hsla(0,0%,62%,.5) 50%,#9f9f9f 0) 50%/1.9px 100%,linear-gradient(90deg,hsla(0,0%,62%,.25) 50%,hsla(0,0%,62%,.75) 0) 50%/100% 1.9px;background-repeat:no-repeat;border-radius:50%;display:grid;height:17px;-webkit-mask:radial-gradient(farthest-side,transparent 40%,#9f9f9f 41%);width:17px}.spinner[data-v-ec03766c]:after,.spinner[data-v-ec03766c]:before{background:inherit;border-radius:50%;content:"";grid-area:1/1;opacity:.915;transform:rotate(30deg)}.spinner[data-v-ec03766c]:after{opacity:.83;transform:rotate(60deg)}@keyframes spinner-d3o0rx-ec03766c{to{transform:rotate(1turn)}}.audio-recorder[data-v-ec03766c]{margin:0 auto;width:100%}.recorder-box[data-v-ec03766c]{border-radius:999px;box-sizing:border-box;padding:5px 10px;width:100%}.recording-container[data-v-ec03766c]{align-items:center;display:flex;gap:10px;justify-content:space-between}.visualizer-container[data-v-ec03766c]{flex-grow:1;height:35px;overflow:hidden}.cancel-button[data-v-ec03766c],.check-button[data-v-ec03766c]{align-items:center;border-radius:999px;cursor:pointer;display:flex;flex-shrink:0;height:30px;justify-content:center;width:30px}.cancel-button svg[data-v-ec03766c],.check-button svg[data-v-ec03766c]{stroke-width:2.2px;height:17px;width:17px}.check-button[data-v-ec03766c]{background:var(--chtl-primary-color)}.check-button svg[data-v-ec03766c]{stroke:var(--chtl-text-color)}.cancel-button[data-v-ec03766c]{background:#f3f4f6}.cancel-button svg[data-v-ec03766c]{stroke:#6b7280}.time[data-v-ec03766c]{color:#000;flex-shrink:0;font-size:13px;min-width:40px;text-align:center}.visualizer[data-v-ec03766c]{border-radius:8px;height:35px;width:100%}button[data-v-ec03766c]{background-color:#007bff;border:none;border-radius:50%;color:#fff;cursor:pointer;font-size:16px;height:60px;transition:background-color .3s ease;width:60px}button.recording[data-v-ec03766c]{background-color:#dc3545}', ""]), i.locals = {}, t.exports = i
        },
        391: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n(15),
                r = n(14),
                o = (n(68), n(148), n(69), n(377), n(16), n(30), n(115), n(31), n(389), {
                    name: "AudioRecorder",
                    data: function() {
                        var t;
                        return t = {
                            mediaRecorder: null,
                            audioChunks: [],
                            startTime: 0,
                            elapsedTime: 0
                        }, Object(r.a)(t, "startTime", 0), Object(r.a)(t, "endTime", 0), Object(r.a)(t, "timerInterval", null), Object(r.a)(t, "audioContext", null), Object(r.a)(t, "audioBuffer", []), Object(r.a)(t, "drawingWidth", 0), Object(r.a)(t, "currentX", 0), Object(r.a)(t, "permissionGranted", !1), Object(r.a)(t, "recordingTimeout", null), Object(r.a)(t, "waveformAmplitude", 4), t
                    },
                    props: {
                        processingAudio: {
                            type: Boolean,
                            default: !1
                        },
                        waveformColor: {
                            type: String,
                            default: "#007bff"
                        },
                        baselineColor: {
                            type: String,
                            default: "#d1d5db"
                        },
                        maxAmplitude: {
                            type: Number,
                            default: 25
                        },
                        noiseThreshold: {
                            type: Number,
                            default: .01
                        },
                        bufferSize: {
                            type: Number,
                            default: 1024
                        },
                        maxRecordingDurationSeconds: {
                            type: Number,
                            required: !0
                        }
                    },
                    mounted: function() {
                        navigator.userAgent.indexOf("Safari") > -1 && -1 === navigator.userAgent.indexOf("Chrome") && (this.waveformAmplitude = 9), window.addEventListener("resize", this.updateDrawingWidth), this.initializeVisualizer(), this.updateDrawingWidth(), navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? this.requestMicrophonePermission() : this.$emit("error", "Recording not supported on this browser")
                    },
                    beforeUnmount: function() {
                        window.removeEventListener("resize", this.updateDrawingWidth), this.stopRecording().then((function() {})).catch((function(t) {}))
                    },
                    computed: {
                        formattedTime: function() {
                            var t = Math.floor(this.elapsedTime / 60),
                                e = Math.floor(this.elapsedTime % 60);
                            return "".concat(t.toString().padStart(2, "0"), ":").concat(e.toString().padStart(2, "0"))
                        }
                    },
                    methods: {
                        updateDrawingWidth: function() {
                            if (this.$refs.recorderBox && this.$refs.visualizer) {
                                var t = this.$refs.recorderBox.clientWidth - 120;
                                this.drawingWidth = t, this.$refs.visualizer.width = t, this.$refs.visualizer.height = 35, this.canvasCtx && this.drawWaveform()
                            }
                        },
                        initializeVisualizer: function() {
                            this.canvasCtx = this.$refs.visualizer.getContext("2d"), this.updateDrawingWidth(), this.drawWaveform()
                        },
                        requestMicrophonePermission: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 3:
                                            t.permissionGranted = !0, t.$emit("microphonePermissionGranted"), t.startRecording(), t.updateDrawingWidth(), e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), t.$emit("microphonePermissionDenied");
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        startRecording: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                var n, i, r, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, n = null, e.prev = 2, e.next = 5, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 5:
                                            n = e.sent, e.next = 14;
                                            break;
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(2), t.$emit("microphonePermissionDenied"), t.permissionGranted = !1, e.abrupt("return");
                                        case 14:
                                            t.permissionGranted = !0, t.$emit("microphonePermissionGranted"), i = t.getSupportedMimeType(), t.mediaRecorder = new MediaRecorder(n, {
                                                mimeType: i
                                            }), t.mediaRecorder.addEventListener("dataavailable", (function(e) {
                                                e.data.size > 0 && t.audioChunks.push(e.data)
                                            })), t.mediaRecorder.addEventListener("stop", (function() {})), t.mediaRecorder.start(1e3), t.startTime = Date.now(), t.updateElapsedTime(), t.audioContext = new(window.AudioContext || window.webkitAudioContext), r = t.audioContext.createMediaStreamSource(n), o = t.audioContext.createScriptProcessor(t.bufferSize, 1, 1), r.connect(o), o.connect(t.audioContext.destination), o.onaudioprocess = function(e) {
                                                var n = e.inputBuffer.getChannelData(0);
                                                t.processAudio(n)
                                            }, t.canvasCtx = t.$refs.visualizer.getContext("2d"), t.updateDrawingWidth(), t.drawWaveform(), t.recordingTimeout = setTimeout((function() {
                                                t.saveRecording()
                                            }), 1e3 * t.maxRecordingDurationSeconds), e.next = 40;
                                            break;
                                        case 36:
                                            e.prev = 36, e.t1 = e.catch(0), t.$emit("error", "Error accessing microphone");
                                        case 40:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 36],
                                    [2, 8]
                                ])
                            })))()
                        },
                        getSupportedMimeType: function() {
                            for (var t = 0, e = ["audio/webm", "audio/wav", "audio/ogg", "audio/mp4", "video/mp4;codecs=avc1"]; t < e.length; t++) {
                                var n = e[t];
                                if (MediaRecorder.isTypeSupported(n)) return n
                            }
                            return ""
                        },
                        processAudio: function(t) {
                            var e = t.reduce((function(t, e) {
                                    return t + Math.abs(e)
                                }), 0) / t.length,
                                n = Math.max(e, this.noiseThreshold);
                            this.audioBuffer.length < this.drawingWidth || this.audioBuffer.pop(), this.audioBuffer.unshift(n)
                        },
                        drawWaveform: function() {
                            if (this.$refs.visualizer) {
                                var t = this.canvasCtx,
                                    e = this.$refs.visualizer.width,
                                    n = this.$refs.visualizer.height;
                                t.clearRect(0, 0, e, n), t.beginPath(), t.moveTo(0, n / 2), t.lineTo(e, n / 2), t.strokeStyle = this.baselineColor, t.lineWidth = 2, t.stroke(), t.beginPath();
                                for (var i = n / 2, r = e / this.drawingWidth, o = 0; o < this.drawingWidth; o++) {
                                    var a = e - o * r,
                                        l = ((this.audioBuffer[o] || this.noiseThreshold) - this.noiseThreshold) * this.waveformAmplitude,
                                        s = Math.min(l * (n / 2), this.maxAmplitude);
                                    s > 0 && (t.moveTo(a, i - s), t.lineTo(a, i), t.moveTo(a, i), t.lineTo(a, i + s))
                                }
                                t.strokeStyle = this.waveformColor, t.lineWidth = 2, t.stroke(), requestAnimationFrame(this.drawWaveform)
                            }
                        },
                        drawWaveformWithBars: function() {
                            if (this.$refs.visualizer) {
                                var t = this.canvasCtx,
                                    e = this.$refs.visualizer.width,
                                    n = this.$refs.visualizer.height;
                                t.clearRect(0, 0, e, n);
                                var i = n / 2,
                                    r = Math.floor(e / 4);
                                t.fillStyle = this.waveformColor;
                                for (var o = 0; o < r; o++) {
                                    var a = e - 4 * o,
                                        l = ((this.audioBuffer[o] || this.noiseThreshold) - this.noiseThreshold) * this.waveformAmplitude,
                                        s = Math.min(l * n, n);
                                    t.fillRect(a, i - s / 2, 3, s)
                                }
                                requestAnimationFrame(this.drawWaveform)
                            }
                        },
                        saveRecording: function() {
                            if (clearTimeout(this.recordingTimeout), this.mediaRecorder && "inactive" !== this.mediaRecorder.state) {
                                var t = new Blob(this.audioChunks, {
                                    type: this.mediaRecorder.mimeType
                                });
                                this.endTime = Date.now();
                                var e = (this.endTime - this.startTime) / 1e3;
                                this.$emit("recordingCompleted", {
                                    blob: t,
                                    mimeType: this.mediaRecorder.mimeType,
                                    duration: e
                                }), this.stopRecording()
                            } else this.stopRecording()
                        },
                        cancelRecording: function() {
                            clearTimeout(this.recordingTimeout), this.stopRecording(), this.resetRecordingState(), this.$emit("recordingCancelled")
                        },
                        stopRecording: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (clearTimeout(t.recordingTimeout), clearInterval(t.timerInterval), t.mediaRecorder) {
                                                try {
                                                    t.mediaRecorder.stop()
                                                } catch (t) {}
                                                t.mediaRecorder.stream && t.mediaRecorder.stream.getTracks().forEach((function(t) {
                                                    t.stop(), t.enabled = !1
                                                }))
                                            }
                                            if (!t.audioContext) {
                                                e.next = 16;
                                                break
                                            }
                                            return e.prev = 6, e.next = 9, t.audioContext.close();
                                        case 9:
                                            e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(6);
                                        case 15:
                                            t.audioContext = null;
                                        case 16:
                                            return e.prev = 16, e.next = 19, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            });
                                        case 19:
                                            e.sent.getTracks().forEach((function(t) {
                                                t.stop()
                                            })), e.next = 26;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t1 = e.catch(16);
                                        case 26:
                                            t.mediaRecorder = null, t.$nextTick((function() {
                                                window.dispatchEvent(new Event("resize"))
                                            }));
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 12],
                                    [16, 23]
                                ])
                            })))()
                        },
                        resetRecordingState: function() {
                            this.audioChunks = [], this.elapsedTime = 0;
                            var t = this.drawingWidth > 0 ? this.drawingWidth : this.bufferSize;
                            this.audioBuffer = new Array(t).fill(this.noiseThreshold), this.drawWaveform()
                        },
                        updateElapsedTime: function() {
                            var t = this;
                            this.timerInterval = setInterval((function() {
                                t.elapsedTime = (Date.now() - t.startTime) / 1e3
                            }), 1e3)
                        }
                    }
                }),
                a = (n(386), n(89)),
                l = Object(a.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "audio-recorder"
                    }, [e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.permissionGranted,
                            expression: "permissionGranted"
                        }],
                        ref: "recorderBox",
                        staticClass: "recorder-box"
                    }, [e("div", {
                        staticClass: "recording-container"
                    }, [e("div", {
                        staticClass: "cancel-button",
                        staticStyle: {
                            cursor: "pointer"
                        },
                        on: {
                            click: t.cancelRecording
                        }
                    }, [e("svg", {
                        staticClass: "lucide lucide-x",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M18 6 6 18"
                        }
                    }), e("path", {
                        attrs: {
                            d: "m6 6 12 12"
                        }
                    })])]), t._v(" "), e("div", {
                        staticClass: "visualizer-container"
                    }, [e("canvas", {
                        ref: "visualizer",
                        staticClass: "visualizer"
                    })]), t._v(" "), e("span", {
                        staticClass: "time"
                    }, [t._v(t._s(t.formattedTime))]), t._v(" "), t.processingAudio ? e("div", {
                        staticStyle: {
                            height: "30px",
                            width: "33.5px",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center"
                        }
                    }, [e("div", {
                        staticClass: "spinner"
                    })]) : e("div", {
                        staticClass: "check-button",
                        on: {
                            click: t.saveRecording
                        }
                    }, [e("svg", {
                        staticClass: "lucide lucide-check",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M20 6 9 17l-5-5"
                        }
                    })])])])])])
                }), [], !1, null, "ec03766c", null);
            e.default = l.exports
        },
        395: function(t, e, n) {
            "use strict";
            n(379)
        },
        396: function(t, e, n) {
            var i = n(113)((function(t) {
                return t[1]
            }));
            i.push([t.i, "input[data-v-d8a30296]::-webkit-inner-spin-button,input[data-v-d8a30296]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-d8a30296]{-moz-appearance:textfield}", ""]), i.locals = {}, t.exports = i
        },
        397: function(t, e, n) {
            "use strict";
            n(380)
        },
        398: function(t, e, n) {
            var i = n(113)((function(t) {
                return t[1]
            }));
            i.push([t.i, '.chtl-chat-ended-message{align-items:center;color:#90949c;display:flex;font-size:.85em;justify-content:center;margin-top:20px;text-align:center;white-space:nowrap}.chtl-chat-ended-message:after,.chtl-chat-ended-message:before{background-color:#d1d5db;content:"";display:block;height:1px;width:100%}.chtl-chat-ended-message:before{margin-right:10px}.chtl-chat-ended-message:after{margin-left:10px}.chtl-qkreply-btn:hover,.chtl-skip-btn:hover{background:#000!important;color:#fff!important}.chtl-datepicker-input .mx-input-wrapper{padding:15px 45px 15px 15px}.chtl-datepicker-input .mx-input{-webkit-appearance:none!important;-moz-appearance:none!important;appearance:none!important;background-color:transparent!important;background-image:none!important;background:transparent;border:none!important;box-shadow:none!important;height:auto!important;outline:none!important;outline-style:none!important;padding:0;resize:none}.chtl-datepicker-input .mx-icon-calendar{display:none}.chtl-datepicker-input .mx-icon-clear{right:45px}', ""]), i.locals = {}, t.exports = i
        },
        402: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n(14),
                r = n(21),
                o = n(15),
                a = (n(68), n(148), n(16), n(31), n(115), n(32), n(230), n(26), n(71), n(72), n(30), n(52), n(235), n(232), n(377), n(69), n(413)),
                l = n(385),
                s = n(391),
                u = n(404),
                c = (n(403), {
                    props: {
                        allowSpeechToTextInput: {
                            type: Boolean,
                            required: !0
                        },
                        maxActiveInputAudioRecordingDurationSeconds: {
                            type: Number,
                            required: !0
                        },
                        apiEndpointPath: {
                            type: String,
                            required: !0
                        },
                        chat_id: {
                            required: !0
                        },
                        customer_uuid: {
                            default: null
                        },
                        activeInputMessageId: {
                            type: String,
                            default: null
                        },
                        displayType: {
                            type: String,
                            required: !0
                        },
                        endingChat: {
                            type: Boolean,
                            default: !1
                        },
                        newChatError: {
                            type: String,
                            default: null
                        },
                        startingNewChat: {
                            type: Boolean,
                            default: !1
                        },
                        refreshingChat: {
                            type: Boolean,
                            default: !1
                        },
                        chatEndedAt: {
                            type: Number,
                            default: null
                        },
                        chatEnded: {
                            type: Boolean,
                            default: !1
                        },
                        displayStartNewChatButton: {
                            type: Boolean,
                            default: !1
                        },
                        focusInputFieldFlag: {
                            type: Boolean,
                            default: !1
                        },
                        clearUserInputFieldFlag: {
                            type: Boolean,
                            default: !1
                        },
                        messagesToShowAiAvatar: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        active_input: {
                            type: Object,
                            default: null
                        },
                        previewTitleBarHeight: {
                            type: Number,
                            default: 0
                        },
                        interface_language: {
                            type: String,
                            default: "en"
                        },
                        translation: {
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
                        disable_user_input: {
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
                        },
                        is_mobile_viewport: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            bottomSectionErrorTimeout: null,
                            is_transcribing_active_input_audio: !1,
                            transcriptionAxiosRequest: null,
                            show_audio_recorder: !1,
                            set_active_input_audio_recorder_styles: !1,
                            make_active_input_audio_recorder_full_width: !1,
                            hide_active_input: !1,
                            success_notification_message: null,
                            success_notification_message_timeout: null,
                            error_input: null,
                            error_input_opacity: 1,
                            error_input_visibility_timeout: null,
                            user_input_value: null,
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
                    emits: ["startNewChat", "userInputSubmitted", "aiResponseRated"],
                    components: {
                        ChatbotMessage: a.default,
                        DatePicker: u.a,
                        AudioRecorder: s.default
                    },
                    mounted: function() {
                        window.addEventListener("message", this.onMessageEvent), window.addEventListener("scroll", (function() {})), this.isCustomerInformationSet() && (this.customer_info_collector.collected = !0)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("message", this.onMessageEvent)
                    },
                    watch: {
                        hideAudioRecorderForActiveInputFlag: function(t, e) {
                            this.hideAudioRecorderForActiveInput()
                        },
                        startingNewChat: function(t, e) {
                            1 == t && this.hideNotification("success")
                        },
                        newChatError: function(t, e) {},
                        clearUserInputFieldFlag: function(t, e) {
                            this.clearUserInputField()
                        },
                        focusInputFieldFlag: function(t, e) {
                            var n = this;
                            this.$nextTick((function() {
                                try {
                                    n.$refs.user_input_field.focus()
                                } catch (t) {}
                            }))
                        },
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
                        transcibeAudioForActiveInput: function(t, e, n) {
                            var i = this;
                            return Object(o.a)(regeneratorRuntime.mark((function o() {
                                var a, l, s, u, c, d, h, p, v, f, g, m;
                                return regeneratorRuntime.wrap((function(o) {
                                    for (;;) switch (o.prev = o.next) {
                                        case 0:
                                            if (a = new FormData, l = "audio.webm", !e) {
                                                o.next = 28;
                                                break
                                            }
                                            if (s = e.split(";")[0].split("/"), u = Object(r.a)(s, 2), u[0], !(c = u[1])) {
                                                o.next = 28;
                                                break
                                            }
                                            o.t0 = c, o.next = "mp4" === o.t0 ? 11 : "webm" === o.t0 ? 13 : "wav" === o.t0 ? 15 : "ogg" === o.t0 ? 17 : "mp3" === o.t0 ? 19 : "aac" === o.t0 ? 21 : "flac" === o.t0 ? 23 : "m4a" === o.t0 ? 25 : 27;
                                            break;
                                        case 11:
                                            return l = "audio.mp4", o.abrupt("break", 28);
                                        case 13:
                                            return l = "audio.webm", o.abrupt("break", 28);
                                        case 15:
                                            return l = "audio.wav", o.abrupt("break", 28);
                                        case 17:
                                            return l = "audio.ogg", o.abrupt("break", 28);
                                        case 19:
                                            return l = "audio.mp3", o.abrupt("break", 28);
                                        case 21:
                                            return l = "audio.aac", o.abrupt("break", 28);
                                        case 23:
                                            return l = "audio.flac", o.abrupt("break", 28);
                                        case 25:
                                            return l = "audio.m4a", o.abrupt("break", 28);
                                        case 27:
                                            l = "audio.".concat(c);
                                        case 28:
                                            if (a.append("audio", t, l), a.append("cgid", i.chat_id), a.append("egid", i.external_gid), a.append("cuid", i.customer_uuid), a.append("mime", e), a.append("duration", n), null != (d = i.apiEndpointPath)) {
                                                o.next = 39;
                                                break
                                            }
                                            return o.abrupt("return");
                                        case 39:
                                            return o.prev = 39, i.transcriptionAxiosRequest = i.$axios.CancelToken.source(), i.is_transcribing_active_input_audio = !0, o.next = 45, i.$axios.post("".concat(d, "/chat/tau"), a, {
                                                headers: {
                                                    "Content-Type": "multipart/form-data"
                                                },
                                                cancelToken: i.transcriptionAxiosRequest.token
                                            });
                                        case 45:
                                            if (v = o.sent, i.transcriptionAxiosRequest = null, i.hideAudioRecorderForActiveInput(), i.is_transcribing_active_input_audio = !1, null != v) {
                                                o.next = 52;
                                                break
                                            }
                                            return i.$emit("showChatError", "Error processing audio (Code: 2454)"), o.abrupt("return");
                                        case 52:
                                            if (null != (f = null !== (h = v.data) && void 0 !== h ? h : null)) {
                                                o.next = 56;
                                                break
                                            }
                                            return i.$emit("showChatError", "Error processing audio (Code: 2455)"), o.abrupt("return");
                                        case 56:
                                            if (0 != f.success) {
                                                o.next = 59;
                                                break
                                            }
                                            return i.$emit("showChatError", f.data), o.abrupt("return");
                                        case 59:
                                            null != (f = null === (p = f) || void 0 === p ? void 0 : p.data) && null != (m = null === (g = f) || void 0 === g ? void 0 : g.text) && (i.user_input_value = m), o.next = 73;
                                            break;
                                        case 64:
                                            if (o.prev = 64, o.t1 = o.catch(39), i.is_transcribing_active_input_audio = !1, i.transcriptionAxiosRequest = null, i.hideAudioRecorderForActiveInput(), !i.$axios.isCancel(o.t1)) {
                                                o.next = 71;
                                                break
                                            }
                                            return o.abrupt("return");
                                        case 71:
                                            i.$emit("showChatError", "Error processing audio (Code: 2456)");
                                        case 73:
                                        case "end":
                                            return o.stop()
                                    }
                                }), o, null, [
                                    [39, 64]
                                ])
                            })))()
                        },
                        hideAudioRecorderForActiveInput: function() {
                            this.show_audio_recorder = !1, this.hide_active_input = !1
                        },
                        showAudioRecorderForActiveInput: function() {
                            this.show_audio_recorder = !0, this.hide_active_input = !1
                        },
                        audioRecordingErrorForActiveInput: function(t) {
                            this.hideAudioRecorderForActiveInput(), this.$emit("showChatError", t)
                        },
                        microphonePermissionDeniedForActiveInput: function() {
                            this.hideAudioRecorderForActiveInput(), this.$emit("showChatError", "You have denied microphone access. Enable it in your browser's settings and try again.")
                        },
                        microphonePermissionGrantedForActiveInput: function() {
                            this.set_active_input_audio_recorder_styles = !0, this.hide_active_input = !0
                        },
                        audioRecordingClickedForActiveInput: function() {
                            this.showAudioRecorderForActiveInput()
                        },
                        audioRecordingCancelledForActiveInput: function() {
                            this.hideAudioRecorderForActiveInput(), this.is_transcribing_active_input_audio = !1;
                            try {
                                null != this.transcriptionAxiosRequest && (this.transcriptionAxiosRequest.cancel(), this.transcriptionAxiosRequest = null)
                            } catch (t) {}
                        },
                        audioRecordingCompletedForActiveInput: function(t) {
                            var e = this;
                            return Object(o.a)(regeneratorRuntime.mark((function n() {
                                var i, r, o;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (e.allowAudioRecordingForActiveInput) {
                                                n.next = 2;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 2:
                                            if (null != (i = null == t ? void 0 : t.blob)) {
                                                n.next = 5;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 5:
                                            r = null == t ? void 0 : t.duration, o = null == t ? void 0 : t.mimeType, e.transcibeAudioForActiveInput(i, o, r);
                                        case 8:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        hideActiveInputAudioRecorder: function() {
                            this.show_audio_recorder = !1, this.set_active_input_audio_recorder_styles = !1
                        },
                        inputSubmittedFromMessage: function(t) {
                            var e = null == t ? void 0 : t.message_id,
                                n = null == t ? void 0 : t.message;
                            if (null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var r = null == i ? void 0 : i.id;
                                    this.$emit("userInputSubmitted", {
                                        block_id: r,
                                        message_id: e,
                                        message: null,
                                        data: t
                                    })
                                }
                            }
                        },
                        onMessageEvent: function(t) {
                            try {
                                var e, n;
                                if (null == t) return;
                                if (null == (null == t ? void 0 : t.data)) return;
                                if (null == (null == t || null === (e = t.data) || void 0 === e ? void 0 : e.event_id)) return;
                                "chtl_chat_widget_closed" === (null == t || null === (n = t.data) || void 0 === n ? void 0 : n.event_id) && (this.pauseAllAudioBlocks(), this.pauseAllVideoBlocks())
                            } catch (t) {}
                        },
                        pauseAllVideoBlocks: function() {
                            try {
                                this.$refs.chat_interface.querySelectorAll("video").forEach((function(t) {
                                    t.pause()
                                }))
                            } catch (t) {}
                        },
                        pauseAllAudioBlocks: function() {
                            try {
                                this.$refs.chat_interface.querySelectorAll("audio").forEach((function(t) {
                                    t.pause()
                                }))
                            } catch (t) {}
                        },
                        quickReplyClicked: function(t) {
                            null != t && (this.user_input_value = null == t ? void 0 : t.content, this.submitInput(!1))
                        },
                        hideNotification: function(t) {
                            "success" == t && (this.success_notification_message = null, clearTimeout(this.success_notification_timeout))
                        },
                        showNotification: function(t, e) {
                            var n = this;
                            null != e && 0 != e.length && "success" == t && (clearTimeout(this.success_notification_timeout), this.success_notification_message = e, this.success_notification_timeout = setTimeout((function() {
                                n.success_notification_message = null
                            }), 5e3))
                        },
                        inputFormSubmitted: function(t) {
                            var e = null == t ? void 0 : t.values,
                                n = null == t ? void 0 : t.message;
                            if (null != e && null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var r = null == i ? void 0 : i.id;
                                    null != r && this.$emit("userInputSubmitted", {
                                        values: e,
                                        block_id: r,
                                        message_id: null == n ? void 0 : n.id,
                                        message: null
                                    })
                                }
                            }
                        },
                        refreshChatClicked: function() {
                            this.show_ellipsis_dropdown = !1, this.hideNotification("success"), this.$emit("refreshChat")
                        },
                        endChatClicked: function() {
                            this.show_ellipsis_dropdown = !1, this.$emit("endChat")
                        },
                        startNewChatClickedInEllipsisMenu: function() {
                            this.startNewChatClicked()
                        },
                        startNewChatClicked: function() {
                            this.show_ellipsis_dropdown = !1, this.hideInputError(), this.$emit("startNewChat")
                        },
                        clearUserInputField: function() {
                            this.user_input_value = null
                        },
                        dateTimeValueChanged: function(t) {
                            var e = this.dateTimeMaxValue,
                                n = this.dateTimeMinValue;
                            this.hideInputError(), this.user_input_value = null, null != e && t > e ? this.error_input = "Must be less than ".concat(e) : null != n && t < n && (this.error_input = "Must be greater than ".concat(n)), this.user_input_value = t
                        },
                        hideInputError: function() {
                            this.error_input_opacity = 0, this.error_input = null
                        },
                        showInputError: function(t) {
                            null != t && 0 != t.length && (this.error_input = t, this.error_input_opacity = 1, null != this.error_input_visibility_timeout && clearTimeout(this.error_input_visibility_timeout))
                        },
                        submitInput: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this.activeInputType == this.blockTypes.INPUTS.TEXT ? this.submitTextInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.NUMBER ? this.submitNumberInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.EMAIL ? this.submitEmailInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.URL ? this.submitUrlInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.PHONE ? this.submitPhoneInput(t, e) : this.activeInputType == this.blockTypes.INPUTS.DATETIME && this.submitDateTimeInput(t, e)
                        },
                        skipInputClicked: function() {
                            this.submitInput(!0)
                        },
                        submitDateTimeInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null == (e = this.user_input_value) && (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i = this.dateTimeMaxValue,
                                        r = this.dateTimeMinValue;
                                    if (null != i && e > i) return void(this.error_input = "Must be less than ".concat(i));
                                    if (null != r && e < r) return void(this.error_input = "Must be greater than ".concat(r))
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitPhoneInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i = this.$getMaxCharacters().chatbot_user.input.phone;
                                    if (e.length > i) return void(this.error_input = "Phone number cannot exceed " + i + " characters");
                                    if (!/^[+()\-0-9 ]+$/.test(e)) return void(this.error_input = "Enter a valid phone number");
                                    if (e.length < 4) return void(this.error_input = "Enter a valid phone number")
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitUrlInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    if (!this.$isValidURL(e)) return void(this.error_input = "Enter a valid URL (starting with http:// or https://)");
                                    var i = this.$getMaxCharacters().chatbot_user.input.url;
                                    if (e.length > i) return void(this.error_input = "URL cannot exceed " + i + " characters")
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitEmailInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.length || (n = !0), n && this.isInputRequired) return;
                                if (n && !this.isInputRequired) e = null;
                                else if (!n) {
                                    var i;
                                    if (!this.$isValidEmail(e)) return void(this.error_input = "Enter a valid email address");
                                    var r = this.$getMaxCharacters().chatbot_user.input.email;
                                    if (e.length > r) return void(this.error_input = "Email cannot exceed " + r + " characters");
                                    var o = null === (i = this.active_input) || void 0 === i ? void 0 : i.data;
                                    if (null != o) {
                                        var a = null == o ? void 0 : o.disallowed_domains;
                                        if (null != a && a.length > 0) {
                                            var l = e.split("@")[1];
                                            if (null != l && l.length > 0 && (l = l.toLowerCase()), a.includes(l)) return void(this.error_input = "This email domain is not allowed")
                                        }
                                    }
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        submitNumberInput: function(t) {
                            if (this.activeInputType == this.blockTypes.INPUTS.NUMBER) {
                                this.hideInputError();
                                var e = null;
                                if (!t) {
                                    e = this.user_input_value;
                                    var n = this.numberInputMin,
                                        i = this.numberInputMax,
                                        r = this.numberInputDataType,
                                        o = !1;
                                    if (null == e && (this.user_input_value = null, o = !0), o && this.isInputRequired) return;
                                    if (o && !this.isInputRequired) e = null;
                                    else if (!o) {
                                        if (null != n && (n = parseFloat(n), isNaN(n) && (n = null)), null != i && (i = parseFloat(i), isNaN(i) && (i = null)), (e = (e = e.toString()).trim()).length > 1 && (e = e.replace(/^0+/, "")), 0 == e.length) return;
                                        if (isNaN(e)) return void(this.error_input = "Enter a valid number");
                                        if ("integer" == r) {
                                            var a = parseInt(e);
                                            if (!Number.isInteger(a)) return void(this.error_input = "Input must be an integer")
                                        }
                                        var l = parseFloat(e);
                                        if (null != n && l < n) return void(this.error_input = "Input must be ".concat(n, " or greater"));
                                        if (null != i && l > i) return void(this.error_input = "Input must not be greater than ".concat(i));
                                        if ("integer" == r) {
                                            if (l % 1 != 0) return void(this.error_input = "Input must be an integer");
                                            e = parseInt(e)
                                        } else e = parseFloat(e)
                                    }
                                }
                                this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                    message: e,
                                    block_id: this.inputBlockId
                                })
                            }
                        },
                        numberInputChanged: function(t) {
                            return this.hideInputError(), 69 !== t.keyCode
                        },
                        buttonBlockClicked: function(t) {
                            var e = null == t ? void 0 : t.button,
                                n = null == t ? void 0 : t.message;
                            if (null != e && null != n) {
                                var i = null == n ? void 0 : n.component;
                                if (null != i) {
                                    var r = null == i ? void 0 : i.id;
                                    if (null != r) {
                                        var o = null == e ? void 0 : e.label;
                                        this.$emit("userInputSubmitted", {
                                            item_id: null == e ? void 0 : e.id,
                                            message: o,
                                            block_id: r,
                                            message_id: null == n ? void 0 : n.id
                                        })
                                    }
                                }
                            }
                        },
                        submitTextInput: function(t) {
                            this.hideInputError();
                            var e = null;
                            if (!t) {
                                var n = this.inputBlockData,
                                    i = !1;
                                if (null != (e = this.user_input_value) && (e = e.trim()), null != e && 0 != e.trim().length || (i = !0), i && this.isInputRequired) return;
                                if (i && !this.isInputRequired) e = null;
                                else if (!i && null != n) {
                                    var r = null == n ? void 0 : n.min_length;
                                    null == n || n.max_length;
                                    if (null !== r && e.length < r) return void(this.error_input = "Must be at least ".concat(r, " ") + (1 == r ? "character" : "characters"))
                                }
                            }
                            this.clearUserInputField(), this.$emit("userInputSubmitted", {
                                message: e,
                                block_id: this.inputBlockId
                            })
                        },
                        predefinedQuerySelected: function(t) {
                            this.submitMessage(t.query, "predefined_query")
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
                            if (this.isInlinePageDisplayType) return !1;
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
                        minimizeChat: function() {
                            this.showCloseButton && (this.show_ellipsis_dropdown = !1, this.isPublicEmbed ? window.parent.postMessage("chtl_chat_minimized", "*") : this.is_chat_open = !1, this.pauseAllAudioBlocks(), this.pauseAllVideoBlocks(), this.attention_grabber_closed = !0)
                        },
                        chatIconClicked: function() {
                            this.attention_grabber_closed = !0, this.is_chat_open = !this.is_chat_open
                        },
                        isCustomerInformationSet: function() {
                            if (1 == this.customer_info_collector.collected) return !0;
                            var t = this.customer;
                            if (null == t) return !1;
                            for (var e = 0, n = Object.entries(t); e < n.length; e++) {
                                var i = Object(r.a)(n[e], 2),
                                    o = i[0],
                                    a = i[1];
                                if ("uuid" != o) try {
                                    if (null != a && a.trim().length > 0) return !0
                                } catch (t) {}
                            }
                            return !1
                        }
                    },
                    computed: {
                        activeInputVoiceInputMaxDurationSeconds: function() {
                            var t;
                            if (0 == this.isInputActive) return null;
                            var e = this.maxActiveInputAudioRecordingDurationSeconds;
                            if (null == this.activeInputData) return e;
                            var n = this.activeInputData;
                            if (null == n) return e;
                            if (null == (null == n ? void 0 : n.voice_input)) return e;
                            var i = null == n || null === (t = n.voice_input) || void 0 === t ? void 0 : t.max_duration;
                            return null === i || i < 1 ? e : i
                        },
                        audioRecorderWrapperCSS: function() {
                            var t = {};
                            return this.set_active_input_audio_recorder_styles && (t.height = "51px", t.display = "flex", t.alignItems = "center", t.justifyContent = "center"), this.make_active_input_audio_recorder_full_width && (t.width = "100%"), t
                        },
                        allowAudioRecordingForActiveInput: function() {
                            var t;
                            if (0 == this.allowSpeechToTextInput) return !1;
                            if (this.activeInputType != this.blockTypes.INPUTS.TEXT) return !1;
                            if (null == this.activeInputData) return !1;
                            var e = null === (t = this.activeInputData) || void 0 === t ? void 0 : t.voice_input;
                            return null != e && 1 == (null == e ? void 0 : e.enabled)
                        },
                        audioRecorderForActiveInputVisible: function() {
                            return 1 == this.allowAudioRecordingForActiveInput && 1 == this.show_audio_recorder
                        },
                        inputQuickReplies: function() {
                            var t;
                            if (0 == this.isInputActive) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.quick_replies;
                            return null == n ? null : n
                        },
                        activeInputData: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.data
                        },
                        bottomBarFloatingCSS: function() {
                            var t;
                            return t = {
                                position: "absolute",
                                bottom: "100%",
                                left: "0",
                                width: "100%",
                                zIndex: "2",
                                padding: "0 15px 10px",
                                display: "flex",
                                justifyContent: "flex-start",
                                flexDirection: "column",
                                gap: "6px"
                            }, Object(i.a)(t, "width", "100%"), Object(i.a)(t, "boxSizing", "border-box"), t
                        },
                        isFloatingDisplayType: function() {
                            return "floating" == this.displayType
                        },
                        isFullScreenDisplayType: function() {
                            return "fullscreen" == this.displayType
                        },
                        isInlinePageDisplayType: function() {
                            return "page_inline" == this.displayType
                        },
                        showSuccessNotification: function() {
                            return null != this.success_notification_message && this.success_notification_message.length > 0
                        },
                        notificationWrapperCSS: function() {
                            var t = {
                                "box-sizing": "border-box",
                                height: "0",
                                opacity: "0",
                                width: "0",
                                display: "none"
                            };
                            return this.showSuccessNotification && (t.display = "block", t.height = "auto", t.opacity = "1", t.width = "100%"), t
                        },
                        notificationCSS: function() {
                            var t = {
                                "box-sizing": "border-box",
                                padding: "7px 10px",
                                borderRadius: "5px",
                                fontSize: "0.9em",
                                fontWeight: "500",
                                transition: "height 0.2s ease, opacity 0.2s ease",
                                height: "0",
                                opacity: "0",
                                overflow: "hidden",
                                width: "0"
                            };
                            return this.showSuccessNotification && (t.height = "auto", t.opacity = "1", t.width = "100%"), t
                        },
                        successNotificationCSS: function() {
                            return {
                                background: "#22c55e",
                                color: "white"
                            }
                        },
                        isPublicEmbed: function() {
                            return "public_embed" == this.placed_on
                        },
                        isSharingEmbed: function() {
                            return "sharing" == this.placed_on
                        },
                        isBuilderPreviewEmbed: function() {
                            return "builder-preview" == this.placed_on
                        },
                        chatEndedMessageWrapperCSS: function() {
                            return {
                                height: "1px",
                                background: "#d6d6d6",
                                position: "relative",
                                marginTop: "20px"
                            }
                        },
                        chatEndedMessageTextCSS: function() {
                            return {
                                fontSize: "0.85em",
                                color: "#8a8f99",
                                textAlign: "center",
                                position: "absolute",
                                background: "white",
                                top: "-9px",
                                padding: "0 10px",
                                left: "50%",
                                transform: "translateX(-50%)"
                            }
                        },
                        inputBlockId: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.id
                        },
                        numberInputMin: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.min) || void 0 === (null == e ? void 0 : e.min) ? null : e.min
                        },
                        numberInputMax: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.max) || void 0 === (null == e ? void 0 : e.max) ? null : e.max
                        },
                        numberInputDataType: function() {
                            var t;
                            if (this.activeInputType != this.blockTypes.INPUTS.NUMBER) return null;
                            if (null == this.active_input) return null;
                            var e = null === (t = this.active_input) || void 0 === t ? void 0 : t.data;
                            return null == e || null === (null == e ? void 0 : e.data_type) || void 0 === (null == e ? void 0 : e.data_type) ? null : e.data_type
                        },
                        activeInputType: function() {
                            return null == this.active_input ? null : this.active_input.type
                        },
                        isInputRequired: function() {
                            var t, e = !0;
                            if (null == this.activeInputType) return e;
                            var n = null === (t = this.active_input) || void 0 === t ? void 0 : t.required;
                            return null == n ? e : n
                        },
                        isInputActive: function() {
                            return null != this.active_input
                        },
                        isDateTimeInput: function() {
                            var t;
                            return null != this.active_input && (null === (t = this.active_input) || void 0 === t ? void 0 : t.type) == this.blockTypes.INPUTS.DATETIME
                        },
                        dateTimeType: function() {
                            var t = "datetime";
                            if (!this.isDateTimeInput) return null;
                            var e = this.inputBlockData;
                            if (null == e) return t;
                            var n = null == e ? void 0 : e.format;
                            return null == n ? t : n
                        },
                        dateTimeFormatString: function() {
                            var t = "YYYY-MM-DD HH:mm",
                                e = this.dateTimeType;
                            return null == e || ("date" == e ? t = "YYYY-MM-DD" : "time" == e && (t = "HH:mm")), t
                        },
                        dateTimeMaxValue: function() {
                            var t = this.inputBlockData;
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.max;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.type;
                            if (null == n || "none" == n) return null;
                            if ("custom" == n) return null == e ? void 0 : e.value;
                            if ("current" == n) {
                                var i = this.dateTimeType;
                                if (null == i) return null;
                                var r = new Date,
                                    o = r.getFullYear(),
                                    a = (r.getMonth() + 1).toString().padStart(2, "0"),
                                    l = r.getDate().toString().padStart(2, "0"),
                                    s = r.getHours().toString().padStart(2, "0"),
                                    u = r.getMinutes().toString().padStart(2, "0");
                                if ("datetime" == i) return "".concat(o, "-").concat(a, "-").concat(l, " ").concat(s, ":").concat(u);
                                if ("date" == i) return "".concat(o, "-").concat(a, "-").concat(l);
                                if ("time" == i) return "".concat(s, ":").concat(u)
                            }
                            return null
                        },
                        dateTimeMinValue: function() {
                            var t = this.inputBlockData;
                            if (null == t) return null;
                            var e = null == t ? void 0 : t.min;
                            if (null == e) return null;
                            var n = null == e ? void 0 : e.type;
                            if (null == n || "none" == n) return null;
                            if ("custom" == n) return null == e ? void 0 : e.value;
                            if ("current" == n) {
                                var i = this.dateTimeType;
                                if (null == i) return null;
                                var r = new Date,
                                    o = r.getFullYear(),
                                    a = (r.getMonth() + 1).toString().padStart(2, "0"),
                                    l = r.getDate().toString().padStart(2, "0"),
                                    s = r.getHours().toString().padStart(2, "0"),
                                    u = r.getMinutes().toString().padStart(2, "0");
                                if ("datetime" == i) return "".concat(o, "-").concat(a, "-").concat(l, " ").concat(s, ":").concat(u);
                                if ("date" == i) return "".concat(o, "-").concat(a, "-").concat(l);
                                if ("time" == i) return "".concat(s, ":").concat(u)
                            }
                            return null
                        },
                        blockTypes: function() {
                            return l.d
                        },
                        inputBlockData: function() {
                            var t;
                            return null == this.active_input ? null : null === (t = this.active_input) || void 0 === t ? void 0 : t.data
                        },
                        poweredByText: function() {
                            var t = this.translation.powered_by;
                            return null == t || 0 == t.length ? "Powered by Chatling" : t = t.replace("XYZ", "Chatling")
                        },
                        thinkingIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? t.left = "25px" : t.right = "25px", t
                        },
                        sendButtonCSSNew: function() {
                            var t = {
                                position: "absolute",
                                background: "black",
                                "border-radius": "999px",
                                display: "flex",
                                "align-items": "center",
                                "justify-content": "center",
                                width: "30px",
                                height: "30px"
                            };
                            return "rtl" == this.languageDirection ? t.left = "15px" : t.right = "15px", 1 == this.disable_user_input ? (t.cursor = "auto", t.background = "#e5e7eb") : (t.cursor = "pointer", t.background = this.primaryColor), t
                        },
                        sendButtonArrowCSS: function() {
                            var t = {
                                display: "block",
                                height: "17px",
                                width: "17px",
                                "stroke-width": "2.2px"
                            };
                            return 1 == this.disable_user_input ? t.stroke = "#9ca3af" : t.stroke = this.textColor, t
                        },
                        sendIconCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? (t.left = "15px", t.rotate = "180deg") : t.right = "15px", t
                        },
                        microphoneButtonCSS: function() {
                            var t = {
                                position: "absolute"
                            };
                            return "rtl" == this.languageDirection ? t.left = "50px" : t.right = "50px", 1 == this.disable_user_input ? t.cursor = "auto" : t.cursor = "pointer", t
                        },
                        microphoneButtonIconCSS: function() {
                            var t = {
                                width: "18px",
                                height: "18px",
                                display: "block",
                                "stroke-width": "1.75px"
                            };
                            return 1 == this.disable_user_input ? t.stroke = "#9ca3af" : t.stroke = "#6b7280", t
                        },
                        languageDirection: function() {
                            if (null == this.interface_language || 0 == this.interface_language.length) return "ltr";
                            return ["ar", "az", "he", "fa", "ur"].includes(this.interface_language) ? "rtl" : "ltr"
                        },
                        messageInputPlaceholder: function() {
                            var t, e = "Enter  a message...";
                            if (null == this.texts) return e;
                            var n = null === (t = this.texts) || void 0 === t ? void 0 : t.message_input_placeholder;
                            return null == n ? e : n == e || "Enter a message..." == n ? this.translation.input_placeholder : n
                        },
                        inputPlaceholder: function() {
                            var t = this.translation.global["type here..."];
                            return this.activeInputType == this.blockTypes.INPUTS.EMAIL ? t = this.translation.global["enter email address"] : this.activeInputType == this.blockTypes.INPUTS.NUMBER ? t = this.translation.global["enter number"] : this.activeInputType == this.blockTypes.INPUTS.PHONE ? t = this.translation.global["enter phone number"] : this.activeInputType == this.blockTypes.INPUTS.DATETIME && (t = "date" == this.dateTimeType ? this.translation.global["choose date"] : "time" == this.dateTimeType ? this.translation.global["choose time"] : "datetime" == this.dateTimeType ? this.translation.global["choose date and time"] : this.translation.global["choose date/time"]), t
                        },
                        collectCustomerDetailsEnabled: function() {
                            var t, e, n = null === (t = this.settings) || void 0 === t || null === (e = t.collect_user_details) || void 0 === e ? void 0 : e.enabled;
                            return 1 == n && n
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
                        hidePoweredByBranding: function() {
                            if ("chatbot-testing" == this.placed_on || "builder-preview" == this.placed_on) return !0;
                            if (null == this.settings) return !1;
                            var t = this.settings.hide_branding;
                            return null != t && t
                        },
                        showCloseButton: function() {
                            return !this.isSharingEmbed && !this.isBuilderPreviewEmbed && !!this.isFloatingDisplayType
                        },
                        showChatIcon: function() {
                            return "wix" == this.integration_type || !(this.isPublicEmbed || this.isSharingEmbed || this.isBuilderPreviewEmbed)
                        },
                        showAttentionGrabber: function() {
                            return "editor" == this.placed_on && (!this.is_chat_open && (!!this.attentionGrabberEnabled && (!this.attention_grabber_closed && (null != this.customAttentionGrabberTexts && 0 != this.customAttentionGrabberTexts.length && 0 != this.customAttentionGrabberTexts[0].length))))
                        },
                        attentionGrabberEnabled: function() {
                            var t, e, n, i;
                            return (null === (t = this.settings) || void 0 === t || null === (e = t.attention_grabber) || void 0 === e ? void 0 : e.desktop.enabled) || (null === (n = this.settings) || void 0 === n || null === (i = n.attention_grabber) || void 0 === i ? void 0 : i.mobile.enabled)
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
                        chatIconDesignID: function() {
                            var t;
                            return null === (t = this.chat_icon) || void 0 === t ? void 0 : t.desktop.type
                        },
                        chatIconCustomImageURL: function() {
                            return this.chat_icon_url
                        },
                        maxSources: function() {
                            var t, e = null === (t = this.settings) || void 0 === t ? void 0 : t.sources;
                            if (null == e) return 1;
                            var n = null == e ? void 0 : e.max;
                            try {
                                n = parseInt(n)
                            } catch (t) {
                                n = 1
                            }
                            return null == n ? 1 : n
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
                        bottomSectionCSS: function() {
                            var t = {
                                position: "relative"
                            };
                            return this.displayStartNewChatButton && (t["border-top"] = "1px solid #f3f4f6", t.background = "#f9fafb"), t
                        },
                        showBottomSectionError: function() {
                            return null != this.chat_error && this.chat_error.length > 0 || null != this.error_input && this.error_input.length > 0
                        },
                        bottomSectionErrorContainerCSS: function() {
                            return {
                                "flex-direction": "column",
                                gap: "5px",
                                "justify-content": "flex-start",
                                display: this.showBottomSectionError ? "flex" : "none"
                            }
                        },
                        bottomSectionErrorCSS: function() {
                            return {
                                background: "#ef4444",
                                color: "#fff",
                                padding: "5px 15px",
                                "font-size": "0.8em",
                                "font-weight": "500",
                                "border-radius": "5px",
                                "text-align": "left"
                            }
                        },
                        skipButtonCSS: function() {
                            var t = "all 0.3s ease",
                                e = "#000";
                            return {
                                padding: "5px 10px",
                                "font-size": "0.85em",
                                background: "white",
                                "border-radius": "999px",
                                color: e,
                                border: "1px solid ".concat(e),
                                cursor: "pointer",
                                transition: t,
                                "-webkit-transition": t,
                                "-moz-transition": t,
                                "-o-transition": t,
                                "white-space": "nowrap",
                                flex: "0 1 auto"
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
                        buttonInputCSS: function() {
                            return {
                                padding: "15px",
                                display: "flex",
                                "justify-content": "right"
                            }
                        },
                        paddingNormalCSS: function() {
                            return {
                                padding: "15px 15px"
                            }
                        },
                        messageInputCSS: function() {
                            var t = {
                                width: "100%",
                                background: "transparent",
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
                            return this.disable_user_input && (t["background-color"] = "#f3f4f6", t.cursor = "auto", t.color = "#9ca3af", t.opacity = "0.5"), this.is_mobile_viewport ? t["font-size"] = "16px" : t["font-size"] = "14px", "rtl" == this.languageDirection ? (t.direction = "rtl", 1 == this.allowAudioRecordingForActiveInput ? t.padding = "15px 15px 15px 85px" : t.padding = "15px 15px 15px 50px") : 1 == this.allowAudioRecordingForActiveInput ? t.padding = "15px 85px 15px 15px" : t.padding = "15px 50px 15px 15px", t
                        },
                        parsed_conversation: function() {
                            var t = this.conversation;
                            return null != t && null != t || (t = []), t
                        },
                        chatIconSize: function() {
                            var t, e, n, i = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (n = e.desktop) || void 0 === n ? void 0 : n.size;
                            return null == i && (i = 55), i
                        },
                        chatContainerCSS: function() {
                            var t = this.appearance.visibility.desktop.offset.x,
                                e = this.appearance.visibility.desktop.offset.y,
                                n = {};
                            return this.isSharingEmbed || this.isBuilderPreviewEmbed || (n = this.isPublicEmbed ? {
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
                            }), n["--chtl-primary-color"] = this.primaryColor, n["--chtl-text-color"] = this.textColor, n
                        },
                        chatWrapperCSS: function() {
                            return this.isSharingEmbed ? {
                                height: "100%",
                                width: "100%",
                                "max-width": "1200px"
                            } : this.isBuilderPreviewEmbed ? {
                                height: "100%",
                                width: "100%"
                            } : {
                                height: "100%"
                            }
                        },
                        customChatButtonWrapperCSS: function() {
                            var t, e, n, i, r, o, a = {
                                height: "".concat(this.chatIconSize, "px"),
                                width: "".concat(this.chatIconSize, "px"),
                                cursor: "pointer",
                                "z-index": "1"
                            };
                            null != this.chatIconCustomImageURL && (a["background-image"] = "url(".concat(this.chatIconCustomImageURL, ")"), a["background-size"] = "cover", a["background-repeat"] = "no-repeat", a["background-position"] = "center");
                            var l = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (n = e.desktop) || void 0 === n ? void 0 : n.full_rounded,
                                s = null === (i = this.appearance) || void 0 === i || null === (r = i.chat_icon) || void 0 === r || null === (o = r.desktop) || void 0 === o ? void 0 : o.border_radius;
                            return a["border-radius"] = 1 == l || null == s ? "100%" : "".concat(s, "px"), a
                        },
                        defaultChatButtonWrapperCSS: function() {
                            var t, e, n, i, r, o, a = {
                                    height: "".concat(this.chatIconSize, "px"),
                                    width: "".concat(this.chatIconSize, "px"),
                                    display: "flex",
                                    "justify-content": "center",
                                    "align-items": "center",
                                    cursor: "pointer",
                                    "z-index": "1"
                                },
                                l = this.primaryColor;
                            a["background-color"] = l;
                            var s = null === (t = this.appearance) || void 0 === t || null === (e = t.chat_icon) || void 0 === e || null === (n = e.desktop) || void 0 === n ? void 0 : n.full_rounded,
                                u = null === (i = this.appearance) || void 0 === i || null === (r = i.chat_icon) || void 0 === r || null === (o = r.desktop) || void 0 === o ? void 0 : o.border_radius;
                            return a["border-radius"] = 1 == s || null == u ? "100%" : "".concat(u, "px"), a
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
                            if (this.isBuilderPreviewEmbed) t.width = "100%", t["border-radius"] = "0", t.position = "absolute", t.height = "calc(100% - ".concat(this.previewTitleBarHeight, "px)"), t.left = "0px", t.top = "".concat(this.previewTitleBarHeight, "px");
                            else if (t.position = "absolute", this.isPublicEmbed) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else if (this.isSharingEmbed) t.bottom = "0px", t.right = "0px", t.height = "100%", t.width = "100%", t["border-radius"] = "0";
                            else {
                                var e, n, i;
                                t["margin-bottom"] = "20px", t.height = "min(600px, 100% - 100px)", t["min-height"] = "80px", t["max-height"] = "700px", t.bottom = "".concat(this.chatIconSize, "px"), t.right = "0px";
                                var r = null === (e = this.appearance) || void 0 === e || null === (n = e.chat_interface) || void 0 === n || null === (i = n.desktop) || void 0 === i ? void 0 : i.max_width;
                                null == r && (r = 400), t.width = "".concat(r, "px")
                            }
                            return this.is_chat_open ? t.opacity = 1 : t.opacity = 0, this.isPublicEmbed || this.isBuilderPreviewEmbed || (t["box-shadow"] = "0px 5px 10px 0 rgba(0,0,0,0.01), 0 7px 12px 0 rgba(0,0,0,.1)"), t
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
                        primaryButtonCSS: function() {
                            var t = "all 0.3s ease";
                            return {
                                display: "block",
                                padding: "10px",
                                "text-align": "center",
                                "background-color": this.primaryColor,
                                "border-radius": "5px",
                                color: this.textColor,
                                "font-weight": "500",
                                cursor: "pointer",
                                transition: t,
                                "-webkit-transition": t,
                                "-moz-transition": t,
                                "-o-transition": t
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
                            var t, e, n = null;
                            return null != (null === (t = this.appearance) || void 0 === t || null === (e = t.colors) || void 0 === e ? void 0 : e.text) && (n = this.$getColorString(this.appearance.colors.text, 80)), null == n && (n = this.textColor), {
                                color: n,
                                "font-weight": "400",
                                "font-size": "16px"
                            }
                        },
                        primaryColor: function() {
                            var t, e, n = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? n : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.primary) ? this.$getColorString(n) : this.$getColorString(this.appearance.colors.primary)
                        },
                        primaryColorDark: function() {
                            return this.primaryColor
                        },
                        primaryContrastColor: function() {
                            if (null == this.primaryColor) return null;
                            var t = this.$getContrastingColor(this.primaryColor);
                            return null == t ? this.textColor : t
                        },
                        textColor: function() {
                            var t, e, n, i = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) ? i : null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.text) ? this.$getColorString(i) : this.$getColorString(null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.text)
                        },
                        chatIconColor: function() {
                            var t, e, n, i = "#FFFFFFFF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.chat_icon) ? i : null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.chat_icon
                        },
                        assistantBGColor: function() {
                            var t, e, n = "#f1f5f9FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_background) || 0 == this.appearance.colors.assistant_chat_bubble_background.length ? n : this.appearance.colors.assistant_chat_bubble_background
                        },
                        assistantTextColor: function() {
                            var t, e, n, i, r = "#000000FF";
                            return null == this.appearance || null == (null === (t = this.appearance) || void 0 === t ? void 0 : t.colors) || null == (null === (e = this.appearance.colors) || void 0 === e ? void 0 : e.assistant_chat_bubble_text) || 0 == (null === (n = this.appearance.colors) || void 0 === n ? void 0 : n.assistant_chat_bubble_text.length) ? r : null === (i = this.appearance.colors) || void 0 === i ? void 0 : i.assistant_chat_bubble_text
                        },
                        welcomeTexts: function() {
                            var t, e = [];
                            return null == this.texts || null == (null === (t = this.texts) || void 0 === t ? void 0 : t.welcome_text) || 0 == this.texts.welcome_text.length ? e : this.texts.welcome_text
                        }
                    }
                }),
                d = c,
                h = (n(395), n(397), n(89)),
                p = Object(h.a)(d, (function() {
                    var t, e, n = this,
                        i = n._self._c;
                    return i("div", [i("div", {
                        style: [n.chatContainerCSS, {
                            "--chtl-primary-color": n.primaryColor,
                            "--chtl-primary-color-dark": n.primaryColorDark,
                            "--chtl-primary-contrast-color": n.primaryContrastColor,
                            "--chtl-text-color": n.textColor
                        }]
                    }, [i("div", {
                        style: n.chatWrapperCSS
                    }, [i("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: n.is_chat_open,
                            expression: "is_chat_open"
                        }],
                        style: n.chatUIContainerCSS
                    }, [i("div", {
                        staticStyle: {
                            display: "flex",
                            height: "100%",
                            width: "100%",
                            flex: "1 1 0%"
                        }
                    }, [i("div", {
                        staticStyle: {
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [this.isBuilderPreviewEmbed ? n._e() : i("div", {
                        style: n.chatUIHeaderCSS
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 == n.current_chat_header_type,
                            expression: "current_chat_header_type == 1"
                        }],
                        staticStyle: {
                            overflow: "hidden"
                        }
                    }, [i("div", {
                        style: n.chatHeaderTitleCSS_type1
                    }, [n._v(n._s(null === (t = n.texts) || void 0 === t || null === (e = t.chat_header) || void 0 === e ? void 0 : e.title))])]), n._v(" "), i("div", {
                        staticClass: "tpicns",
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [i("div", {
                        staticClass: "ellipsis-dropdown",
                        style: {
                            direction: n.languageDirection
                        },
                        attrs: {
                            tabindex: "0"
                        }
                    }, [i("div", {
                        staticClass: "dropdown-btn",
                        staticStyle: {
                            display: "block"
                        },
                        on: {
                            click: function() {
                                n.show_ellipsis_dropdown = !n.show_ellipsis_dropdown
                            }
                        }
                    }, [i("svg", {
                        attrs: {
                            width: "11",
                            height: "11",
                            viewBox: "0 0 187 654",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [i("path", {
                        attrs: {
                            "fill-rule": "evenodd",
                            "clip-rule": "evenodd",
                            d: "M0.333303 560.667C0.333301 612.235 42.0986 654 93.6666 654C145.235 654 187 612.235 187 560.667C187 509.099 145.235 467.333 93.6666 467.333C42.0986 467.333 0.333306 509.099 0.333303 560.667ZM0.333324 93.9998C0.333321 145.568 42.0987 187.333 93.6667 187.333C145.235 187.333 187 145.568 187 93.9998C187 42.4318 145.235 0.666502 93.6667 0.6665C42.0987 0.666498 0.333326 42.4318 0.333324 93.9998ZM0.333313 327.333C0.333311 378.901 42.0986 420.667 93.6666 420.667C145.235 420.667 187 378.901 187 327.333C187 275.765 145.235 234 93.6667 234C42.0987 234 0.333316 275.765 0.333313 327.333Z",
                            fill: n.textColor
                        }
                    })])]), n._v(" "), n.show_ellipsis_dropdown ? i("ul", {
                        staticClass: "dropdown-content"
                    }, [this.isPublicEmbed || this.isSharingEmbed ? i("li", {
                        on: {
                            click: n.startNewChatClickedInEllipsisMenu
                        }
                    }, [n._v(n._s(n.translation.global["new chat"]))]) : n._e(), n._v(" "), this.isPublicEmbed || this.isSharingEmbed ? i("li", {
                        on: {
                            click: n.refreshChatClicked
                        }
                    }, [n._v(n._s(n.translation.global.refresh))]) : n._e(), n._v(" "), (this.isPublicEmbed || this.isSharingEmbed) && 0 == this.chatEnded ? i("li", {
                        on: {
                            click: n.endChatClicked
                        }
                    }, [n._v(n._s(n.translation.global["end chat"]))]) : n._e()]) : n._e()]), n._v(" "), n.showCloseButton ? i("div", {
                        on: {
                            click: function(t) {
                                return n.minimizeChat()
                            }
                        }
                    }, [i("svg", {
                        attrs: {
                            width: "11",
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: n.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n._v(" "), i("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: n.textColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]) : n._e()])]), n._v(" "), i("div", {
                        staticStyle: {
                            position: "relative",
                            "flex-direction": "column",
                            display: "flex",
                            flex: "1 1 0%",
                            "min-height": "0px",
                            width: "100%"
                        }
                    }, [n.endingChat ? i("div", [i("div", {
                        staticClass: "chtl-chat-loader-full"
                    }, [i("span", {
                        staticClass: "chtl-chat-loader-icon"
                    })])]) : n._e(), n._v(" "), i("div", {
                        ref: "chat_interface",
                        staticClass: "hdscr",
                        staticStyle: {
                            height: "100%",
                            padding: "15px",
                            "overflow-y": "scroll",
                            "overflow-x": "hidden"
                        }
                    }, [null != n.newChatError && n.newChatError.length > 0 ? i("div", {
                        staticStyle: {
                            width: "100%"
                        }
                    }, [i("div", {
                        staticClass: "chtl-chat-error-inline"
                    }, [i("div"), n._v(" "), i("div", {
                        staticClass: "chtl-chat-error-inline-icon"
                    }, [i("svg", {
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
                    }, [i("circle", {
                        attrs: {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }
                    }), i("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "8",
                            y2: "12"
                        }
                    }), i("line", {
                        attrs: {
                            x1: "12",
                            x2: "12.01",
                            y1: "16",
                            y2: "16"
                        }
                    })])]), n._v(" "), i("div", [i("div", {
                        staticClass: "chtl-chat-error-inline-title"
                    }, [n._v("Error")]), n._v(" "), i("div", {
                        staticClass: "chtl-chat-error-inline-message"
                    }, [n._v(n._s(n.newChatError))])])])]) : n.startingNewChat || n.refreshingChat ? i("div", {
                        staticClass: "chtl-chat-loader"
                    }, [i("span", {
                        staticClass: "chtl-chat-loader-icon"
                    })]) : i("div", [n._l(n.parsed_conversation, (function(t, e) {
                        var r, o, a;
                        return i("div", {
                            key: t.id
                        }, [null != t.component && (null === (r = t.component) || void 0 === r ? void 0 : r.type) == (null === (o = n.blockTypes) || void 0 === o || null === (a = o.LOG) || void 0 === a ? void 0 : a.END) ? i("div", {
                            staticClass: "chtl-chat-ended-message"
                        }, [n._v("\n                            " + n._s(n.translation.global["the chat has ended"]) + "\n                          ")]) : i("ChatbotMessage", {
                            attrs: {
                                message: t,
                                messageType: "normal",
                                maxSources: n.maxSources,
                                languageDirection: n.languageDirection,
                                botIconUrl: n.bot_icon_url,
                                primaryColor: n.primaryColor,
                                textColor: n.textColor,
                                assistantTextColor: n.assistantTextColor,
                                assistantBGColor: n.assistantBGColor,
                                appearance: n.appearance,
                                settings: n.settings,
                                messagesToShowAiAvatar: n.messagesToShowAiAvatar,
                                isMobileViewport: n.is_mobile_viewport,
                                activeInputMessageId: n.activeInputMessageId,
                                translation: n.translation
                            },
                            on: {
                                showNotification: n.showNotification,
                                aiResponseRated: function(t) {
                                    n.$emit("aiResponseRated", t)
                                },
                                buttonBlockClicked: n.buttonBlockClicked,
                                inputFormSubmitted: n.inputFormSubmitted,
                                inputSubmittedFromMessage: n.inputSubmittedFromMessage
                            }
                        })], 1)
                    })), n._v(" "), i("div", [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: n.chatbot_thinking,
                            expression: "chatbot_thinking"
                        }]
                    }, [i("ChatbotMessage", {
                        attrs: {
                            message: null,
                            messageType: "bot_thinking",
                            primaryColor: n.primaryColor,
                            textColor: n.textColor,
                            assistantTextColor: n.assistantTextColor,
                            assistantBGColor: n.assistantBGColor,
                            appearance: n.appearance,
                            settings: n.settings,
                            botIconUrl: n.bot_icon_url,
                            translation: n.translation,
                            isMobileViewport: n.is_mobile_viewport
                        }
                    })], 1), n._v(" "), i("div", {
                        ref: "chatbot_thinking_bubble"
                    }), n._v(" "), i("div", {
                        ref: "hidden_element",
                        staticStyle: {
                            height: "30px",
                            width: "0"
                        }
                    })])], 2)]), n._v(" "), n.startingNewChat || n.refreshingChat || null != n.newChatError && 0 != n.newChatError.length ? n._e() : i("div", {
                        style: n.bottomSectionCSS
                    }, [i("div", {
                        style: n.bottomBarFloatingCSS
                    }, [i("div", {
                        style: n.notificationWrapperCSS
                    }, [i("div", {
                        style: [n.notificationCSS, n.successNotificationCSS]
                    }, [n._v(n._s(n.success_notification_message))])]), n._v(" "), 0 == n.displayStartNewChatButton ? i("div", {
                        staticClass: "hdscr",
                        staticStyle: {
                            display: "flex",
                            gap: "5px",
                            "align-items": "flex-end",
                            "justify-content": "flex-start",
                            "overflow-x": "scroll"
                        }
                    }, [n.isInputActive && !n.isInputRequired ? i("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "left"
                        }
                    }, [i("div", {
                        staticClass: "chtl-skip-btn",
                        style: n.skipButtonCSS,
                        on: {
                            click: n.skipInputClicked
                        }
                    }, [n._v("Skip")])]) : n._e(), n._v(" "), n._l(n.inputQuickReplies, (function(t) {
                        return n.isInputActive && null != n.inputQuickReplies && n.inputQuickReplies.length > 0 ? i("div", {
                            key: null == t ? void 0 : t.id,
                            staticClass: "chtl-skip-btn",
                            style: n.skipButtonCSS,
                            on: {
                                click: function(e) {
                                    return n.quickReplyClicked(t)
                                }
                            }
                        }, [null != (null == t ? void 0 : t.label) && t.label.length > 0 ? i("span", [n._v(n._s(t.label))]) : null != (null == t ? void 0 : t.content) && t.content.length > 9 ? i("span", [n._v(n._s(t.content))]) : n._e()]) : n._e()
                    }))], 2) : n._e(), n._v(" "), n.showBottomSectionError ? i("div", {
                        style: n.bottomSectionErrorContainerCSS
                    }, [i("div", {
                        staticStyle: {
                            display: "flex"
                        }
                    }, [null != n.chat_error && n.chat_error.length > 0 ? i("div", {
                        style: n.bottomSectionErrorCSS
                    }, [n._v(n._s(n.chat_error))]) : n._e(), n._v(" "), null != n.error_input && n.error_input.length > 0 ? i("div", {
                        style: n.bottomSectionErrorCSS
                    }, [n._v(n._s(n.error_input))]) : n._e()])]) : n._e()]), n._v(" "), n.displayStartNewChatButton ? i("div", {
                        style: n.paddingNormalCSS
                    }, [i("div", {
                        staticClass: "chtl-primary-btn",
                        on: {
                            click: n.startNewChatClicked
                        }
                    }, [n._v(n._s(n.translation.global["start new chat"]))])]) : i("div", [n.isInputActive && n.activeInputType == n.blockTypes.INPUTS.TEXT || n.activeInputType == n.blockTypes.INPUTS.NUMBER || n.activeInputType == n.blockTypes.INPUTS.EMAIL || n.activeInputType == n.blockTypes.INPUTS.URL || n.activeInputType == n.blockTypes.INPUTS.PHONE || n.activeInputType == n.blockTypes.INPUTS.DATETIME ? i("div", {
                        style: n.messageInputWrapperCSS
                    }, [n.allowAudioRecordingForActiveInput && n.audioRecorderForActiveInputVisible ? i("div", {
                        style: n.audioRecorderWrapperCSS
                    }, [i("AudioRecorder", {
                        attrs: {
                            processingAudio: n.is_transcribing_active_input_audio,
                            maxRecordingDurationSeconds: n.activeInputVoiceInputMaxDurationSeconds
                        },
                        on: {
                            recordingCancelled: n.audioRecordingCancelledForActiveInput,
                            recordingCompleted: n.audioRecordingCompletedForActiveInput,
                            microphonePermissionDenied: n.microphonePermissionDeniedForActiveInput,
                            microphonePermissionGranted: n.microphonePermissionGrantedForActiveInput,
                            error: n.audioRecordingErrorForActiveInput
                        }
                    })], 1) : n._e(), n._v(" "), n.hide_active_input || n.activeInputType != n.blockTypes.INPUTS.TEXT ? n._e() : i("textarea", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: n.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: n.messageInputCSS,
                        attrs: {
                            "aria-label": n.inputPlaceholder,
                            rows: "1",
                            type: "text",
                            placeholder: n.inputPlaceholder,
                            disabled: n.disable_user_input
                        },
                        domProps: {
                            value: n.user_input_value
                        },
                        on: {
                            input: [function(t) {
                                t.target.composing || (n.user_input_value = t.target.value)
                            }, function() {
                                n.hideInputError()
                            }],
                            keydown: function(t) {
                                return !t.type.indexOf("key") && n._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : (t.preventDefault(), n.submitInput(!1))
                            }
                        }
                    }), n._v(" "), n.hide_active_input || n.activeInputType != n.blockTypes.INPUTS.NUMBER ? n._e() : i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: n.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: n.messageInputCSS,
                        attrs: {
                            "aria-label": n.inputPlaceholder,
                            type: "number",
                            placeholder: n.inputPlaceholder,
                            min: n.numberInputMin,
                            max: n.numberInputMax,
                            disabled: n.disable_user_input,
                            onkeydown: "return event.keyCode !== 69"
                        },
                        domProps: {
                            value: n.user_input_value
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && n._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : n.submitInput(!1)
                            },
                            input: [function(t) {
                                t.target.composing || (n.user_input_value = t.target.value)
                            }, n.numberInputChanged]
                        }
                    }), n._v(" "), n.hide_active_input || n.activeInputType != n.blockTypes.INPUTS.EMAIL && n.activeInputType != n.blockTypes.INPUTS.URL && n.activeInputType != n.blockTypes.INPUTS.PHONE ? n._e() : i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: n.user_input_value,
                            expression: "user_input_value"
                        }],
                        ref: "user_input_field",
                        staticClass: "chtl-message-input",
                        style: n.messageInputCSS,
                        attrs: {
                            "aria-label": n.inputPlaceholder,
                            type: "email",
                            placeholder: n.inputPlaceholder,
                            disabled: n.disable_user_input
                        },
                        domProps: {
                            value: n.user_input_value
                        },
                        on: {
                            keydown: function(t) {
                                return !t.type.indexOf("key") && n._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : n.submitInput(!1)
                            },
                            input: [function(t) {
                                t.target.composing || (n.user_input_value = t.target.value)
                            }, function() {
                                n.hideInputError()
                            }]
                        }
                    }), n._v(" "), n.hide_active_input || n.activeInputType != n.blockTypes.INPUTS.DATETIME ? n._e() : i("date-picker", {
                        staticClass: "chtl-datepicker-input",
                        staticStyle: {
                            width: "100%"
                        },
                        style: {
                            direction: n.languageDirection
                        },
                        attrs: {
                            value: n.user_input_value,
                            type: n.dateTimeType,
                            valueType: "format",
                            format: n.dateTimeFormatString,
                            placeholder: n.inputPlaceholder
                        },
                        on: {
                            input: n.dateTimeValueChanged
                        }
                    }), n._v(" "), n.hide_active_input || n.chatbot_thinking ? n._e() : i("div", {
                        staticStyle: {
                            display: "flex",
                            "align-items": "center"
                        }
                    }, [n.allowAudioRecordingForActiveInput ? i("div", {
                        style: n.microphoneButtonCSS,
                        on: {
                            click: n.audioRecordingClickedForActiveInput
                        }
                    }, [i("svg", {
                        style: n.microphoneButtonIconCSS,
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
                        }
                    }), i("path", {
                        attrs: {
                            d: "M19 10v2a7 7 0 0 1-14 0v-2"
                        }
                    }), i("line", {
                        attrs: {
                            x1: "12",
                            x2: "12",
                            y1: "19",
                            y2: "22"
                        }
                    })])]) : n._e(), n._v(" "), i("div", {
                        style: n.sendButtonCSSNew,
                        on: {
                            click: function(t) {
                                return n.submitInput(!1)
                            }
                        }
                    }, [i("svg", {
                        style: n.sendButtonArrowCSS,
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "m5 12 7-7 7 7"
                        }
                    }), i("path", {
                        attrs: {
                            d: "M12 19V5"
                        }
                    })])])])], 1) : i("div")]), n._v(" "), 1 != n.hidePoweredByBranding ? i("div", {
                        staticStyle: {
                            padding: "0 15px",
                            "margin-top": "5px",
                            "margin-bottom": "5px",
                            "text-align": "center",
                            "font-size": "0.8em",
                            color: "#7d7d7d"
                        }
                    }, [n._v("\n                        Powered by "), i("a", {
                        staticStyle: {
                            color: "#7d7d7d !important",
                            "text-decoration": "underline !important",
                            display: "inline-block !important"
                        },
                        attrs: {
                            href: "https://chatling.ai",
                            target: "_blank"
                        }
                    }, [n._v("Chatling")])]) : n._e()])])])])])]), n._v(" "), n.showAttentionGrabber ? i("div", {
                        style: n.attentionGrabberTextWrapperCSS
                    }, [i("div", {
                        staticClass: "chtl-hovering-message-close-btn",
                        on: {
                            click: n.closeHoveringMessages
                        }
                    }, [i("svg", {
                        attrs: {
                            width: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M2 14L14 2M2 2L14 14",
                            stroke: n.textColor,
                            "stroke-width": "2",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])]), n._v(" "), i("div", {
                        style: {
                            cursor: "pointer",
                            direction: n.languageDirection
                        },
                        on: {
                            click: n.chatIconClicked
                        }
                    }, n._l(n.attentionGrabberTexts, (function(t) {
                        return null != t && "" != t ? i("div", {
                            staticClass: "chtl-hovering-message"
                        }, [i("span", {
                            staticClass: "chtl-reset",
                            domProps: {
                                innerHTML: n._s(t)
                            }
                        })]) : n._e()
                    })), 0)]) : n._e(), n._v(" "), n.showChatIcon ? i("div", [n.is_chat_open || 1 != n.chat_icon_design_type || null == n.chatIconCustomImageURL ? n.is_chat_open ? n.is_chat_open ? i("div", {
                        style: n.chatButtonContainerCSS
                    }, [i("div", {
                        style: n.defaultChatButtonWrapperCSS,
                        on: {
                            click: n.chatIconClicked
                        }
                    }, [i("svg", {
                        style: n.closeChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 537 537",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M41.1666 495.834L496.167 40.8335",
                            stroke: n.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    }), n._v(" "), i("path", {
                        attrs: {
                            d: "M496.167 495.834L41.1666 40.8335",
                            stroke: n.chatIconColor,
                            "stroke-width": "81.6667",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                        }
                    })])])]) : n._e() : i("div", {
                        style: n.chatButtonContainerCSS
                    }, [i("div", {
                        style: n.defaultChatButtonWrapperCSS,
                        on: {
                            click: n.chatIconClicked
                        }
                    }, [i("svg", {
                        style: n.defaultChatButtonIconCSS,
                        attrs: {
                            viewBox: "0 0 820 760",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [i("path", {
                        attrs: {
                            d: "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z",
                            fill: n.chatIconColor
                        }
                    })])])]) : i("div", {
                        style: n.chatButtonContainerCSS
                    }, [i("div", {
                        style: n.customChatButtonWrapperCSS,
                        on: {
                            click: n.chatIconClicked
                        }
                    })])]) : n._e()], 1)])])
                }), [], !1, null, "d8a30296", null);
            e.default = p.exports
        },
        406: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n(375).a,
                r = n(89),
                o = Object(r.a)(i, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.chatbot_loaded ? e("ChatbotInterface", {
                        attrs: {
                            apiEndpointPath: t.apiEndpointPath,
                            chatEnded: t.chatEnded,
                            chatEndedAt: t.chatEndedAt,
                            displayStartNewChatButton: t.displayStartNewChatButton,
                            startingNewChat: t.loading.newChat,
                            newChatError: t.error.newChat,
                            refreshingChat: t.loading.refreshChat,
                            endingChat: t.loading.endChat,
                            appearance: t.appearance,
                            predefined_queries: t.predefined_queries,
                            settings: t.settings,
                            interface_language: t.interface_language,
                            texts: t.texts,
                            chat_icon_url: t.customChatIconURL,
                            chat_icon_design_type: t.chatIconDesignType,
                            bot_icon_url: t.botIconURL,
                            external_gid: t.external_gid,
                            conversation: t.filteredConversation,
                            forced_chat_open: t.forced_chat_open,
                            placed_on: t.placed_on,
                            chat_error: t.error.chat,
                            chatbot_thinking: t.chatbot_thinking,
                            disable_user_input: t.disable_user_input,
                            scroll_to_bottom: t.scroll_to_bottom,
                            translation: t.translated_texts,
                            previewTitleBarHeight: t.previewTitleBarHeight,
                            active_input: t.active_input,
                            activeInputMessageId: t.activeInputMessageId,
                            messagesToShowAiAvatar: t.messagesToShowAiAvatar,
                            clearUserInputFieldFlag: t.clearUserInputFieldFlag,
                            focusInputFieldFlag: t.focusInputFieldFlag,
                            is_mobile_viewport: t.is_mobile_viewport,
                            displayType: t.displayType,
                            chat_id: t.chat_id,
                            customer_uuid: t.customer_uuid,
                            maxActiveInputAudioRecordingDurationSeconds: t.maxActiveInputAudioRecordingDurationSeconds,
                            allowSpeechToTextInput: t.allowSpeechToTextInput
                        },
                        on: {
                            showChatError: t.showChatError,
                            aiResponseRated: t.aiResponseRated,
                            userInputSubmitted: t.userInputSubmitted,
                            buttonBlockClicked: t.buttonBlockClicked,
                            startNewChat: t.startNewChat,
                            refreshChat: t.refreshChat,
                            endChat: t.endChat
                        }
                    }) : t._e()], 1)
                }), [], !1, null, null, null);
            e.default = o.exports
        },
        427: function(t, e, n) {
            "use strict";
            n.r(e);
            var i = {
                    components: {
                        Chatbot: n(406).default
                    },
                    head: function() {
                        return {
                            title: "Chatbot"
                        }
                    },
                    data: function() {
                        return {
                            show_chatbot: !1,
                            force_chat_open: !0,
                            chatbot_loaded: !1,
                            chatbot_loading: !0,
                            chatbot_error: null,
                            chatbot_external_gid: null
                        }
                    },
                    mounted: function() {
                        this.setupChatbot()
                    },
                    methods: {
                        setupChatbot: function() {
                            this.chatbot_error = null, this.chatbot_external_gid = this.chatbotID, this.show_chatbot = !0
                        },
                        reloadChatbot: function() {
                            this.chatbot_error = null, this.chatbot_loaded = !1, this.chatbot_loading = !0, this.chatbot_external_gid = null, this.chatbot_external_gid = this.chatbotID, this.show_chatbot = !0
                        }
                    },
                    computed: {
                        chatbotID: function() {
                            try {
                                return this.$route.params.id
                            } catch (t) {
                                return null
                            }
                        }
                    }
                },
                r = n(89),
                o = Object(r.a)(i, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.show_chatbot ? e("div", [e("Chatbot", {
                        attrs: {
                            placed_on: "public_embed",
                            forced_chat_open: t.force_chat_open,
                            external_gid: t.chatbot_external_gid
                        },
                        on: {
                            chatbotLoaded: function(e) {
                                t.chatbot_loading = !1, t.chatbot_loaded = e
                            },
                            chatbotLoadingError: function(e) {
                                t.chatbot_error = e
                            }
                        }
                    })], 1) : t._e()])
                }), [], !1, null, null, null);
            e.default = o.exports;
            installComponents(o, {
                Chatbot: n(390).default
            })
        }
    }
]);