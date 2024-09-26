(() => {
    var t = null,
        e = null,
        n = null,
        l = "chatling-chat-iframe",
        i = "chatling-embed-script",
        o = "chatling-inline-bot",
        r = null,
        a = null,
        c = null,
        u = null,
        s = "chatling-open-chat-icon",
        d = "chatling-close-chat-icon",
        h = null;
    null == h && (h = "1.3.8");
    var p, f = null,
        y = 640,
        v = 2147483647,
        g = null,
        m = 365,
        b = !1,
        x = !1,
        w = null,
        _ = 0,
        A = null,
        C = null,
        E = "floating",
        k = "fullscreen",
        S = "page_inline",
        I = "floating",
        T = null,
        B = 200,
        O = !1,
        L = {
            LAST_PAGEVIEW: "chtl_last_pageview",
            SESSION_ID: "chtl_sid",
            LOCAL_STORAGE_SESSION_ID: "chtl_lsid"
        };

    function N() {
        return null != t && ("1" == t || "1.0" == t)
    }

    function M() {
        return null != t && ("2" == t || "2.0" == t)
    }

    function z() {
        return W("chtl_cus")
    }

    function P() {
        return W("chtl_chats")
    }

    function j() {
        return W("chtl_opened")
    }

    function R() {
        return W("chtl_aghmc")
    }

    function W(t) {
        return null == t || 0 == t.length || 0 == (t = t.trim()).length ? null : (null == e && (e = Y()), null != e ? "".concat(t, "_").concat(e) : null)
    }

    function D(t) {
        if (null != t) try {
            var e = z();
            if (null == e) return;
            for (var n in t) null === t[n] && delete t[n];
            var l = JSON.stringify(t);
            Z(e, btoa(l), m)
        } catch (t) {}
    }

    function J(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "*";
        try {
            null != n && n.contentWindow.postMessage(t, e)
        } catch (t) {}
    }

    function H() {
        try {
            return window.innerWidth
        } catch (t) {
            return null
        }
    }

    function V() {
        var t = H();
        return null !== t && t < y
    }

    function G() {
        try {
            var t = n;
            null == t && (t = document.getElementById(l)), null != t && (t.style.transform = "scale(0)", setTimeout((function() {
                t.style.zIndex = -1, t.style.display = "none"
            }), B)), J({
                event_id: "chtl_chat_widget_closed"
            })
        } catch (t) {}! function() {
            try {
                a ? a.style.display = "flex" : document.getElementById(s).style.display = "flex", c ? c.style.display = "none" : document.getElementById(d).style.display = "none"
            } catch (t) {}
        }()
    }

    function U() {
        try {
            var t = n;
            null == t && (t = document.getElementById(l)), null != t && (t.style.zIndex = v, t.style.display = "block", setTimeout((function() {
                t.style.transform = "scale(1)"
            }), 10));
            var e = j();
            null != e && Z(e, !0, 30), K("hide"), J({
                event_id: "chtl_chat_widget_opened"
            })
        } catch (t) {}! function() {
            try {
                a ? a.style.display = "none" : document.getElementById(s).style.display = "none", V() || (c ? c.style.display = "flex" : document.getElementById(d).style.display = "flex")
            } catch (t) {}
        }(), null != f && clearTimeout(f)
    }

    function F() {
        try {
            if (n) {
                if ("block" == n.style.display) return !0
            } else if (1 == document.getElementById(l).style.scale) return !0
        } catch (t) {}
        return !1
    }

    function K(t) {
        try {
            if (null != u)
                if ("hide" == t) u.style.display = "none", Z(R(), !0, 30);
                else "show" == t && !1 === F() && !1 === function() {
                    var t = R();
                    if (null == t) return !1;
                    var e = Q(t);
                    return 1 == e || "true" == e
                }() && (u.style.display = "block")
        } catch (t) {}
    }

    function X() {
        var t = P();
        if (null == t) return null;
        var e = Q(t),
            n = [];
        if (null == e) return n;
        try {
            var l = atob(e);
            if (null == l || 0 == l.length) return n;
            var i = JSON.parse(l);
            return null == i ? n : i
        } catch (t) {
            return n
        }
    }

    function Z(t, e, n) {
        var l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Strict",
            i = "";
        if (n) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = ";expires=" + o.toUTCString()
        }
        var r = null;
        try {
            null != (r = window.location.hostname) && 0 != r.length || (r = location.hostname)
        } catch (t) {}
        null != r && r.length > 0 && (document.cookie = t + "=" + (e || "") + i + ";path=/;domain=.".concat(r, ";SameSite=").concat(l))
    }

    function q() {
        var t = null;
        null == g && (g = function() {
            try {
                var t = z();
                if (null == t) return;
                var e = Q(t);
                if (null == e) return;
                var n = atob(e);
                return JSON.parse(n)
            } catch (t) {
                return null
            }
        }());
        try {
            var e;
            if (null != g) t = null === (e = g) || void 0 === e ? void 0 : e.uuid
        } catch (t) {}
        return t
    }

    function Q(t) {
        if (null == t || 0 == t.length) return null;
        if (0 == (t = t.trim()).length) return null;
        for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), l = 0; l < n.length; l++) {
            for (var i = n[l];
                " " === i.charAt(0);) i = i.substring(1);
            if (0 === i.indexOf(e)) return i.substring(e.length, i.length)
        }
        return null
    }

    function Y() {
        var t = null;
        try {
            var e;
            if (null != window.chtlConfig) t = null === (e = window.chtlConfig) || void 0 === e ? void 0 : e.chatbotId
        } catch (t) {}
        if (null == t || 0 == t.length) {
            var n = document.getElementById(i);
            null != n && (t = n.getAttribute("data-id"))
        }
        return null != t && (t = t.trim()), t
    }

    function $(t) {
        if ((n = document.createElement("iframe")).setAttribute("allow", "microphone"), n.setAttribute("allowfullscreen", "true"), n.setAttribute("mozallowfullscreen", "true"), n.setAttribute("webkitallowfullscreen", "true"), N()) n.src = "https://embed.chatling.ai/widgets/".concat(e);
        else {
            if (!M()) return;
            n.src = "https://embed.chatling.ai/w2/".concat(e)
        }
        if (n.style.border = "none", E == k) n.style.position = "fixed", n.style.height = "100%", n.style.width = "100%", n.style.minHeight = "80px", n.style.zIndex = "".concat(v), n.style.overflow = "hidden", n.style.borderRadius = "0", n.style.top = "0", n.style.left = "0";
        else if (E == S) n.style.height = "100%", n.style.width = "100%", n.style.overflow = "hidden", n.style.borderRadius = "0";
        else {
            var i = t.position.value,
                r = t.position.x,
                a = t.position.y;
            if (null != r) try {
                r = parseInt(r)
            } catch (t) {}
            if (null != a) try {
                a = parseInt(a)
            } catch (t) {}
            var c = t.chat_icon.size,
                u = t.chat_interface.width,
                s = 700,
                d = a + c + 20;
            null != a && (s = window.innerHeight - d - 50) > 700 && (s = 700), "bl" == i ? (n.style.bottom = "".concat(d, "px"), n.style.left = "".concat(r, "px"), n.style.transformOrigin = "bottom left") : "tl" == i ? (n.style.top = "".concat(d, "px"), n.style.left = "".concat(r, "px"), n.style.transformOrigin = "top left") : "tr" == i ? (n.style.top = "".concat(d, "px"), n.style.right = "".concat(r, "px"), n.style.transformOrigin = "top right") : (n.style.bottom = "".concat(d, "px"), n.style.right = "".concat(r, "px"), n.style.transformOrigin = "bottom right"), n.style.display = "none", n.style.position = "fixed", n.style.height = "80vh", n.style.minHeight = "80px", n.style.maxHeight = "".concat(s, "px"), n.style.overflow = "hidden", n.style.width = "100%", n.style.maxWidth = "".concat(u, "px"), n.style.borderRadius = "15px", n.style.transition = "transform ".concat(B, "ms ease-in-out 0s"), n.style.transform = "scale(0)", n.style.zIndex = "-1"
        }
        if (n.setAttribute("id", l), n.setAttribute("class", "chatling-display-".concat(E)), n.addEventListener("load", (function() {
                E == I && (n.style.boxShadow = "rgba(0, 0, 0, 0.01) 0px 5px 10px 0px, rgba(0, 0, 0, 0.1) 0px 7px 12px 0px")
            })), E == S) {
            var h = document.getElementById(o);
            null != h && h.appendChild(n)
        } else document.body.appendChild(n)
    }

    function tt(t) {
        var e = "";
        E == I && (e = "@media all and (max-width: 640px) {\n            #chatling-chat-iframe.chatling-display-".concat(I, " { \n                width: 100% !important;\n                max-width: initial !important;\n                right: 0px !important;\n                top: 0px !important;\n                left: 0 !important;\n                bottom: 0px !important;\n                max-height: initial !important;\n                height: 100% !important;\n                border-radius: 0px !important;\n            }\n        }\n        #").concat(s, ", #").concat(d, " {\n            transition: scale 0.2s ease 0s;\n            scale: 1;\n        }\n        #").concat(s, ":hover, #").concat(d, ":hover {\n            scale: 1.1;\n        }")), e += "\n    .chtl-hovering-message-container p, .chtl-hovering-message-container p span, .chtl-hovering-message-container p em, .chtl-hovering-message-container p u {\n        color: black !important;\n        margin: 0 !important;\n        font-weight: 400 !important;\n    }";
        var n = document.createElement("style");
        n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e)), document.head.appendChild(n)
    }

    function et() {
        "open_once" == w && function() {
            var t = j();
            if (null == t) return !1;
            var e = Q(t);
            return 1 == e || "true" == e
        }() || (V() ? b && (f = setTimeout((function() {
            U()
        }), 1e3 * _)) : x && (f = setTimeout((function() {
            U()
        }), 1e3 * _)))
    }
    window.addEventListener("message", (function(e) {
            try {
                if ("chtl_chat_minimized" === (null == e ? void 0 : e.data)) G();
                else {
                    var l;
                    if (null == (null == e ? void 0 : e.data)) return;
                    var i = null == e || null === (l = e.data) || void 0 === l ? void 0 : l.event_id;
                    if (null == i) return;
                    if ("chtl_new_chat" == i) {
                        var o, r = null == e || null === (o = e.data) || void 0 === o ? void 0 : o.data;
                        if (null != r) ! function(t, e) {
                            var n = P();
                            if (null == n) return;
                            var l = X();
                            null == l && (l = []);
                            l = [];
                            var i = {
                                chat_gid: t,
                                customer_gid: e,
                                created_at: Date.now()
                            };
                            l.push(i);
                            var o = JSON.stringify(l),
                                r = btoa(o);
                            Z(n, r, 30)
                        }(null == r ? void 0 : r.chat_gid, null)
                    } else if ("chtl_chat_created_w2" == i) {
                        var a, c = null == e || null === (a = e.data) || void 0 === a ? void 0 : a.data;
                        if (null != c) ! function(e) {
                            var n = P();
                            if (null == n) return;
                            var l = X();
                            null == l && (l = []);
                            l = [];
                            var i = {
                                chat_gid: e,
                                chatbot_version: t,
                                created_at: Date.now()
                            };
                            l.push(i);
                            var o = JSON.stringify(l),
                                r = btoa(o);
                            Z(n, r, 30)
                        }(null == c ? void 0 : c.chat_id)
                    } else if ("chtl_customer_info_collected" == i) {
                        var u, s, d = null == e || null === (u = e.data) || void 0 === u || null === (s = u.data) || void 0 === s ? void 0 : s.customer;
                        null != d && (g = d, D(d))
                    } else if ("chtl_loaded" == i) {
                        if (null != n) {
                            if (null == g || J({
                                    event_id: "chtl_cust_load",
                                    cust: g,
                                    custgid: null
                                }), V() && J({
                                    event_id: "is_mobile",
                                    window_width: H()
                                }), N() && null != A && A.length > 0 && J({
                                    event_id: "chtl_conversation_history",
                                    lcg: C,
                                    messages: A
                                }), M()) {
                                var h = q();
                                J({
                                    event_id: "chtl_chatbot_init",
                                    lcg: C,
                                    cuid: h,
                                    display_type: E,
                                    locale: T,
                                    ru: O,
                                    page_url: window.location.href,
                                    browser: function() {
                                        try {
                                            var t = navigator.userAgent,
                                                e = null;
                                            return t.includes("Chrome") ? e = "chrome" : t.includes("Firefox") ? e = "firefox" : t.includes("Safari") && !t.includes("Chrome") ? e = "safari" : t.includes("Edge") ? e = "edge" : t.includes("Opera") || t.includes("OPR") ? e = "opera" : (t.includes("MSIE") || t.includes("Trident/")) && (e = "ie"), e
                                        } catch (t) {
                                            return null
                                        }
                                    }(),
                                    device_type: function() {
                                        try {
                                            var t = navigator.userAgent;
                                            return /tablet|ipad|playbook|silk/i.test(t) && !/mobile/i.test(t) ? "tablet" : /Mobile|Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t) ? "mobile" : /SmartTV|TV/i.test(t) ? "tv" : "desktop"
                                        } catch (t) {
                                            return null
                                        }
                                    }(),
                                    os: function() {
                                        try {
                                            var t = navigator.userAgent;
                                            return /Windows/.test(t) ? "windows" : /Mac OS X/.test(t) ? "macos" : /Linux/.test(t) ? "linux" : /iPhone|iPad|iPod/.test(t) ? "ios" : /Android/.test(t) ? "android" : /BlackBerry|BB10/.test(t) ? "blackberry" : /Windows Phone/.test(t) ? "windows-phone" : /PlayBook/.test(t) ? "playbook" : /Silk/.test(t) ? "silk" : /Kindle/.test(t) ? "kindle" : null
                                        } catch (t) {}
                                    }()
                                })
                            }
                        }
                    } else if ("chtl_chat_cleared" == i) ! function() {
                        var t = P();
                        if (null == t) return;
                        e = t, document.cookie = e + "=; Max-Age=-99999999;";
                        var e
                    }();
                    else if ("chtl_chatbot_loaded" == i) E == k || E == S ? U() : et();
                    else if ("chtl_gvia" == i) {
                        var p, f, y = null == e || null === (p = e.data) || void 0 === p || null === (f = p.data) || void 0 === f ? void 0 : f.t;
                        if (null == y) return;
                        v = function(t) {
                                if (null != t) {
                                    var e = btoa(t);
                                    J({
                                        event_id: "chtl_gvia_fetched",
                                        data: {
                                            t: y,
                                            c: e
                                        }
                                    })
                                }
                            },
                            function(t) {
                                fetch("https://api.ipify.org?format=json").then((function(t) {
                                    return t.json()
                                })).then((function(e) {
                                    return e && e.ip ? void t(e.ip) : void t(null)
                                })).catch((function(e) {
                                    t(null)
                                }))
                            }((function(t) {
                                null == t ? function(t) {
                                    try {
                                        fetch("https://www.cloudflare.com/cdn-cgi/trace").then((function(t) {
                                            return t.text()
                                        })).then((function(e) {
                                            var n = e.match(/ip=(.+)/);
                                            if (n && n[1]) {
                                                var l = n[1];
                                                if (null != t) return void t(l)
                                            }
                                            t(null)
                                        })).catch((function(e) {
                                            t(null)
                                        }))
                                    } catch (e) {
                                        t(null)
                                    }
                                }((function(t) {
                                    null == t || v(t)
                                })) : v(t)
                            }))
                    }
                }
            } catch (t) {}
            var v
        })),
        function() {
            var t, e = (t = localStorage.getItem(L.LAST_PAGEVIEW)) ? parseInt(t, 10) : null;
            if (!e) return !1;
            var n = Math.floor(Date.now() / 1e3);
            O = n - e >= 10800
        }(), p = Math.floor(Date.now() / 1e3), localStorage.setItem(L.LAST_PAGEVIEW, p),
        function() {
            if (e = Y(), E = function() {
                    var t = null,
                        e = I;
                    try {
                        var n;
                        if (null != window.chtlConfig) t = null === (n = window.chtlConfig) || void 0 === n ? void 0 : n.display
                    } catch (t) {}
                    if (null == t || 0 == t.length) {
                        var l = document.getElementById(i);
                        null != l && null != (t = l.getAttribute("data-display")) && t.length > 0 && (t = t.trim())
                    }(null == t || 0 == t.length || t != k && t != S && t != I) && (t = e);
                    return t
                }(), !e) return;
            try {
                T = navigator.language || navigator.languages[0]
            } catch (t) {}
            try {
                var n = function() {
                    try {
                        var t = X();
                        return null == t || 0 == t.length ? null : t[t.length - 1]
                    } catch (t) {
                        return null
                    }
                }();
                null != n && (C = n.chat_gid)
            } catch (t) {}
            var l = q(),
                o = {
                    widget_id: e,
                    lcg: C,
                    cuid: l,
                    display_type: E,
                    locale: T,
                    page_url: window.location.href
                };
            fetch("https://api.chatling.ai/public/embed/chatbot/setup", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(o)
            }).then((function(e) {
                try {
                    e.json().then((function(e) {
                        if (null != e && null != (null == e ? void 0 : e.success) && 0 != e.success) {
                            var n = null == e ? void 0 : e.data;
                            if (null != n) {
                                try {
                                    var i = null == n ? void 0 : n.chat;
                                    if (null != i) {
                                        var o = null == i ? void 0 : i.messages;
                                        null != o && o.length > 0 && (A = o)
                                    }
                                } catch (t) {}
                                if (n, null == l) {
                                    var h = null == n ? void 0 : n.cuid;
                                    null != h && h.length > 0 && (null == g ? g = {
                                        uuid: h
                                    } : g.uuid = h, D(g))
                                }
                                t = null == n ? void 0 : n.version, (N() || M()) && (N() || E == I ? (E = I, function(t) {
                                    var e = t.chat_icon.url,
                                        n = t.position.value,
                                        l = t.position.x,
                                        i = t.position.y;
                                    if (null != l) try {
                                        l = parseInt(l)
                                    } catch (t) {}
                                    if (null != i) try {
                                        i = parseInt(i)
                                    } catch (t) {}
                                    var o = t.primary_color,
                                        h = t.chat_icon.border_radius,
                                        p = t.chat_icon.size,
                                        f = t.chat_icon.color;
                                    (r = document.createElement("div")).style.position = "fixed", r.style.zIndex = "2147483647", "bl" == n ? (r.style.bottom = "".concat(i, "px"), r.style.left = "".concat(l, "px")) : "tl" == n ? (r.style.top = "".concat(i, "px"), r.style.left = "".concat(l, "px")) : "tr" == n ? (r.style.top = "".concat(i, "px"), r.style.right = "".concat(l, "px")) : (r.style.bottom = "".concat(i, "px"), r.style.right = "".concat(l, "px"));
                                    (a = document.createElement("div")).setAttribute("id", s), a.style.display = "flex", a.style.justifyContent = "center", a.style.alignItems = "center", a.style.cursor = "pointer", a.style.borderRadius = "".concat(h);
                                    var y = document.createElement("div");
                                    y.style.height = "".concat(p, "px"), y.style.width = "".concat(p, "px"), y.style.cursor = "pointer", y.style.borderRadius = "".concat(h);
                                    var v = y.cloneNode(!0);
                                    if (null == e) {
                                        a.style.backgroundColor = "".concat(o), y.style.display = "flex", y.style.justifyContent = "center", y.style.alignItems = "center", y.style.backgroundColor = "".concat(o);
                                        var g = document.documentElement;
                                        (g = document.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttribute("style", "transition: width ease-in-out 0.05s; width: ".concat(p / 2, "px; height: ").concat(p / 2, "px;")), g.setAttribute("viewBox", "0 0 820 760"), g.setAttribute("fill", "none");
                                        var m = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                        m.setAttribute("d", "M400 0C179.44 0 9.84565e-05 161.493 9.84565e-05 360C9.84565e-05 429.4 21.9601 496.613 63.5734 554.72C55.6934 641.88 34.5734 706.587 3.90677 737.24C-0.146568 741.293 -1.1599 747.493 1.4001 752.613C3.6801 757.187 8.33343 760 13.3334 760C13.9468 760 14.5734 759.96 15.2001 759.867C20.6001 759.107 146.04 741.04 236.76 688.693C288.293 709.48 343.173 720 400 720C620.56 720 800 558.507 800 360C800 161.493 620.56 0 400 0Z"), m.setAttribute("fill", f), g.appendChild(m), y.appendChild(g)
                                    } else y.style.backgroundImage = "url(".concat(e, ")"), y.style.backgroundSize = "cover", y.style.backgroundRepeat = "no-repeat", y.style.backgroundPosition = "center";
                                    (c = a.cloneNode(!0)).setAttribute("id", d), v.style.display = "flex", v.style.justifyContent = "center", v.style.alignItems = "center", v.style.backgroundColor = "".concat(o);
                                    var b = document.documentElement;
                                    (b = document.createElementNS("http://www.w3.org/2000/svg", "svg")).setAttribute("style", "width: ".concat(.33 * p, "px; height: ").concat(.33 * p, "px;")), b.setAttribute("viewBox", "0 0 537 537"), b.setAttribute("fill", "none");
                                    var x = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                    x.setAttribute("d", "M41.1666 495.834L496.167 40.8335"), x.setAttribute("stroke", f), x.setAttribute("stroke-width", "81.6667"), x.setAttribute("stroke-linecap", "round"), x.setAttribute("stroke-linejoin", "round"), b.appendChild(x);
                                    var w = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                    w.setAttribute("d", "M496.167 495.834L41.1666 40.8335"), w.setAttribute("stroke", f), w.setAttribute("stroke-width", "81.6667"), w.setAttribute("stroke-linecap", "round"), w.setAttribute("stroke-linejoin", "round"), b.appendChild(w), v.appendChild(b), c.appendChild(v), a.style.display = "flex", c.style.display = "none", a.appendChild(y), r.appendChild(a), r.appendChild(c), document.body.appendChild(r),
                                        function(t) {
                                            try {
                                                var e = null == t ? void 0 : t.attention_grabber;
                                                if (null == e) return;
                                                var n, l, i = null == e ? void 0 : e.delay,
                                                    o = !1;
                                                if (V()) o = null == e || null === (n = e.mobile) || void 0 === n ? void 0 : n.enabled;
                                                else o = null == e || null === (l = e.desktop) || void 0 === l ? void 0 : l.enabled;
                                                if (!0 !== o) return;
                                                var a = null == e ? void 0 : e.messages;
                                                if (null == a || 0 == a.length) return;
                                                if (0 == (a = a.filter((function(t) {
                                                        return null != t && (null != (t = t.trim()) && 0 != t.length)
                                                    }))).length) return;
                                                var c = 350,
                                                    s = H();
                                                (u = document.createElement("div")).style.position = "absolute";
                                                var d = 0,
                                                    h = 10,
                                                    p = t.position.x,
                                                    f = t.position.y;
                                                if (null != p) try {
                                                    p = parseInt(p)
                                                } catch (t) {}
                                                if (null != f) try {
                                                    f = parseInt(f)
                                                } catch (t) {}
                                                var y = t.chat_icon.size;
                                                null != f && (d = y);
                                                var v = t.position.value,
                                                    g = d + h,
                                                    m = 0,
                                                    b = document.createElement("div");
                                                b.style.position = "absolute", b.style.top = "-25px", b.style.zIndex = "1", b.style.cursor = "pointer", b.style.background = "#ffffff", b.style.borderRadius = "999px", b.style.padding = "5px", b.style.border = "1px solid #e7ebf0", b.style.display = "flex", b.style.alignItems = "center", b.style.justifyContent = "center", b.setAttribute("id", "cthl-hovering-message-close-btn");
                                                var x = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                                x.setAttribute("style", "width: 8px; height: 8px;"), x.setAttribute("viewBox", "0 0 16 16"), x.setAttribute("fill", "none");
                                                var w = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                                w.setAttribute("d", "M2 14L14 2M2 2L14 14"), w.setAttribute("stroke", "#aeaeae"), w.setAttribute("stroke-width", "3"), w.setAttribute("stroke-linecap", "round"), w.setAttribute("stroke-linejoin", "round"), x.appendChild(w), b.appendChild(x), "bl" == v ? (u.style.bottom = "".concat(g, "px"), u.style.left = "".concat(m, "px"), b.style.left = "0px") : "tl" == v ? (u.style.top = "".concat(g, "px"), u.style.left = "".concat(m, "px"), b.style.left = "0px") : "tr" == v ? (u.style.top = "".concat(g, "px"), u.style.right = "".concat(m, "px"), b.style.right = "0px") : (u.style.bottom = "".concat(g, "px"), u.style.right = "".concat(m, "px"), b.style.right = "0px"), u.style.display = "none", null != s && V() ? (c > s && (c = s - 25), u.style.width = "".concat(c, "px")) : u.style.width = "".concat(c, "px"), u.appendChild(b);
                                                var _ = document.createElement("div");
                                                _.style.cursor = "pointer";
                                                var A = 0;
                                                a.forEach((function(t) {
                                                    var e = document.createElement("div");
                                                    e.classList.add("chtl-hovering-message-container"), e.style.padding = "10px 15px", e.style.position = "relative", e.style.borderRadius = "5px", e.style.marginTop = 0 == A ? "0px" : "7px", e.style.backgroundColor = "#ffffff", e.style.fontSize = "14.5px", e.style.color = "#000000", e.style.border = "1px solid #e6e9ee", e.style.boxShadow = "-2px 0px 10px rgba(0, 0, 0, 0.05)", e.style.mozBoxShadow = "-2px 0px 10px rgba(0, 0, 0, 0.05)", e.innerHTML = t, A++, _.appendChild(e)
                                                })), _.addEventListener("click", (function() {
                                                    U()
                                                })), r.appendChild(u), u.appendChild(_), b.addEventListener("click", (function() {
                                                    K("hide")
                                                })), (null == i || i < 0) && (i = 0), setTimeout((function() {
                                                    K("show")
                                                }), 1e3 * i)
                                            } catch (t) {}
                                        }(t), y.addEventListener("click", (function() {
                                            U()
                                        })), v.addEventListener("click", (function() {
                                            G()
                                        }))
                                }(n), $(n), tt(n), function(t) {
                                    try {
                                        var e = null == t ? void 0 : t.auto_open;
                                        if (null != e) {
                                            x = null == e ? void 0 : e.enable_on_desktop, b = null == e ? void 0 : e.enable_on_mobile;
                                            var n = null == e ? void 0 : e.delay;
                                            w = null == e ? void 0 : e.behavior, (null == n || n < 0) && (n = 0), _ = n, N() && et()
                                        }
                                    } catch (t) {}
                                }(n)) : (E == k || E == S) && ($(n), tt(n)))
                            }
                        }
                    }))
                } catch (t) {}
            })).catch((function(t) {}))
        }()
})();