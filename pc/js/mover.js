gzshow = (function() {
    var _pop = {
        _body: document.body,
        _head: document.getElementsByTagName("head")[0],
        isie6: function() {
            return (/MSIE 6.0/ig.test(navigator.appVersion))
        },
        isie: function() {
            return navigator.userAgent.indexOf("MSIE") != -1
        },
        elem: function(o) {
            return document.createElement(o)
        },
        id: function(o) {
            return document.getElementById(o)
        },
        loadjs: function(u, s, v) {
            var o = _pop.elem("script");
            o.src = u;
            o.type = "text/javascript";
            _pop._head.appendChild(o);
            if (_pop.isie()) {
                o.onreadystatechange = function() {
                    if (this.readyState && this.readyState == "loading") {
                        return
                    } else {
                        s(v)
                    }
                }
            } else {
                o.onload = function() {
                    s(v)
                }
            }
        },
        dm: window.location.host.split(".")[0] != "" ? window.location.host.split(".")[0] : "unknown",
        gg_link: function(o, y) {
            var gg_link = o,
                at = gg_link.indexOf("?") != -1 ? "&": "?";
            gg_link += at + "ADTAG=ied.guangzi." + y + "." + _pop.dm;
            return gg_link
        },
        chkDm: function() {
            chk = false,
                items = oDaTaNew711.pos3917[0].split("%2C");
            for (i = items.length; i--;) {
                if (items[i] == _pop.dm) {
                    chk = true;
                    break
                }
            }
            return chk
        },
        showPop: function() {
            if (oDaTaNew711.pos3917[1] != "#" || oDaTaNew711.pos4014[1] != "#") {
                var _css = ".ls_spr{display:block;background:url(http://game.qq.com/gz/ls_sprites.png) no-repeat;margin:0;padding:0;}.ls_box{width:100%;list-style:none;position:absolute;left:0;top:42px;background-position:0 bottom;background-repeat:repeat-x;vertical-align:top;}.ls_tips{width:1000px;height:30px;margin:0 auto;}.ls_logo{display:block;width:24px;height:30px;float:left; overflow:hidden; text-indent:-9999px;}.ls_text{text-align:left;font-size:12px;line-height:30px;background-position:-115px 0;padding-left:10px;margin-left:10px;float:left;}a.ls_lnk{text-decoration:none;color:#FFFFFF;vertical-align:baseline;}a.ls_lnk:hover{color:#FFFFFF;text-decoration:underline;}.ls_yt{background-position:0 -35px;}.ls_9j{background-position:0 -65px;}.ls_h2{background-position:0 -95px;}.ls_cheng{background-position:0 -125px;}.ls_tang{background-position:0 -155px;}.ls_xb{background-position:-24px -35px;}.ls_ye{background-position:-24px -65px;}.ls_xxz{background-position:-24px -95px;}.ls_hxsj{background-position:-24px -125px;}.ls_yxd{background-position:-48px -35px;}.ls_ss{background-position:-48px -65px;}.ls_fo{background-position:-48px -95px;}.ls_ba{background-position:-48px -125px;}.ls_ffo{background-position:-72px -35px;}.ls_moe{background-position:-72px -65px;}.ls_dzs{background-position:-72px -95px;}.ls_wang{background-position:-72px -125px;}.ls_jh{background-position:-96px -35px;}.ls_qqhx{background-position:-96px -65px;}.ls_qqt{background-position:-96px -95px;}.ls_shen{background-position:-48px -155px;}.ls_zt{background-position:-72px -155px;}.ls_rgame{background-position:-96px -125px;} #lq_overlay{background:#000; min-width:1000px; position:absolute; z-index:9998; width:100%; left:0; top:0; opacity:0.7; filter:alpha(opacity=70); display:block;} #lq_showPop{border:5px solid #000; width:870px; margin:-240px -440px; left:50%; top:50%; height:470px;position:fixed;background:#000; z-index:9999;} .lq_close{position:absolute; display:block; width:35px; height:35px; overflow:hidden; text-indent:-9999px;top:0;right:0; z-index:9999;}";
                if (document.getElementsByTagName("style").length == 0) {
                    if (_pop.isie()) {
                        document.createStyleSheet()
                    } else {
                        _pop._head.appendChild(elem("style"))
                    }
                };
                var _style = document.getElementsByTagName("style")[0];
                if (_pop.isie()) {
                    _style.styleSheet.cssText += _css
                } else {
                    _style.appendChild(document.createTextNode(_css))
                }
            }
            if (oDaTaNew711.pos3917[1] != "#") {
                var _popbox = _pop.elem("div"),
                    _overlay = _pop.elem("div"),
                    _html = "<a href=\"javascript:gzshow.hide();\" class=\"ls_spr lq_close\" onclick=\"pgvSendClick({hottag:'index.guangzi.close'});\" title=\"¹Ø±Õ\">¹Ø±Õ</a><a href=\"" + _pop.gg_link(oDaTaNew711.pos3917[1], "pop") + "\" target=\"_blank\"><img src=\"http://ossweb-img.qq.com/upload/adw/" + oDaTaNew711.pos3917[2] + "\" alt=\"\" width=\"870\" height=\"470\" border=\"0\" /></a>";
                _overlay.id = "lq_overlay";
                _overlay.style.cssText = "height:" + Math.max(document.documentElement.clientHeight, _pop._body.offsetHeight) + "px;";
                _popbox.id = "lq_showPop";
                _popbox.innerHTML = _html;
                _pop._body.appendChild(_overlay);
                _pop._body.appendChild(_popbox);
                if (_pop.isie6()) {
                    _pop.scroll_top();
                    window.onscroll = function() {
                        _pop.scroll_top()
                    };
                    _pop.id("lq_overlay").innerHTML = "<div style=\"width:1000px;\"><\/div>"
                }
            }
            if (oDaTaNew711.pos4014[1] != "#") {
                var _top = _pop.elem("div"),
                    _game_host = oDaTaNew711.pos4014[1].split("/")[2].split("."),
                    _game_dm = _game_host[_game_host.length - 3];
                _tophtml = "<div class=\"ls_box ls_spr\"><div class=\"ls_tips\"><a href=\"http://" + _game_dm + ".qq.com\" target=\"_blank\" class=\"ls_spr ls_logo ls_" + _game_dm + "\">" + _game_dm + "</a><p class=\"ls_text ls_spr\"><a href=\"" + _pop.gg_link(oDaTaNew711.pos4014[1], "text") + "\" target=\"_blank\" class=\"ls_lnk\">" + decodeURI(oDaTaNew711.pos4014[0]) + "</a></p></div></div>";
                _top.id = "lq_top";
                _top.innerHTML = _tophtml;
                _pop._body.style.backgroundPosition = "center 72px";
                set = setInterval(function() {
                        if (parseInt(_pop._body.style.paddingTop) == 42) {
                            _pop._body.style.paddingTop = "72px";
                            if (oDaTaNew711.pos3917[1] != "#") {
                                _pop.id("lq_overlay").style.height = Math.max(document.documentElement.clientHeight, _pop._body.offsetHeight) + "px"
                            }
                            _pop._body.appendChild(_top);
                            clearInterval(set)
                        }
                    },
                    50)
            }
        },
        scroll_top: function() {
            var scrolltop = document.documentElement.scrollTop | document.body.scrollTop,
                windowHeight = document.documentElement.clientHeight;
            if (windowHeight > 480) {
                scrolltop += windowHeight / 2
            } else {
                scrolltop = scrolltop + 240
            }
            _pop.id("lq_showPop").style.cssText += "position:absolute;top:" + scrolltop + "px"
        },
        loadShowDialog: function() {
            _pop.loadjs("http://game.qq.com/time/qqadv/Info_new_711.js?v=" + Math.random(),
                function() {
                    if (_pop.chkDm()) {
                        _pop.showPop()
                    }
                },
                "")
        }
    };
    _pop.loadShowDialog();
    return {
        hide: function() {
            _pop.id("lq_showPop").style.display = "none";
            _pop.id("lq_overlay").style.display = "none"
        }
    }
})();
/*  |xGv00|bd39acbe17a11d000677ba68b8168008 */
