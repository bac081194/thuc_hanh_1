(function (g) {
  var window = this;
  ("use strict");
  var Mub = function (a, b) {
      g.W.call(this, {
        I: "button",
        Ka: [
          "ytp-miniplayer-expand-watch-page-button",
          "ytp-button",
          "ytp-miniplayer-button-top-left",
        ],
        X: {
          title: "{{title}}",
          "data-tooltip-target-id": "ytp-miniplayer-expand-watch-page-button",
          "aria-keyshortcuts": "i",
          "data-title-no-tooltip": "{{data-title-no-tooltip}}",
        },
        V: [
          {
            I: "svg",
            X: {
              height: "24px",
              version: "1.1",
              viewBox: "0 0 24 24",
              width: "24px",
            },
            V: [
              {
                I: "g",
                X: {
                  fill: "none",
                  "fill-rule": "evenodd",
                  stroke: "none",
                  "stroke-width": "1",
                },
                V: [
                  {
                    I: "g",
                    X: {
                      transform:
                        "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ",
                    },
                    V: [
                      {
                        I: "path",
                        X: {
                          d: "M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
                          fill: "#fff",
                          "fill-rule": "nonzero",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
      this.J = a;
      this.listen("click", this.onClick, this);
      this.updateValue("title", g.TT(a, "M\u1edf r\u1ed9ng", "i"));
      this.update({ "data-title-no-tooltip": "M\u1edf r\u1ed9ng" });
      this.addOnDisposeCallback(g.RT(b.Me(), this.element));
    },
    Nub = function (a) {
      g.W.call(this, { I: "div", S: "ytp-miniplayer-ui" });
      this.G = !1;
      this.player = a;
      this.T(a, "minimized", this.gh);
      this.T(a, "onStateChange", this.E3);
    },
    Oub = function (a) {
      g.qV.call(this, a);
      this.B = new g.uK(this);
      this.j = new Nub(this.player);
      this.j.hide();
      g.bU(this.player, this.j.element, 4);
      a.isMinimized() &&
        (this.load(), g.tv(a.getRootNode(), "ytp-player-minimized", !0));
    };
  g.y(Mub, g.W);
  Mub.prototype.onClick = function () {
    this.J.gb("onExpandMiniplayer");
  };
  g.y(Nub, g.W);
  g.k = Nub.prototype;
  g.k.show = function () {
    this.j = new g.$u(this.C3, null, this);
    this.j.start();
    if (!this.G) {
      this.tooltip = new g.CX(this.player, this);
      g.O(this, this.tooltip);
      g.bU(this.player, this.tooltip.element, 4);
      this.tooltip.scale = 0.6;
      this.Xd = new g.VV(this.player);
      g.O(this, this.Xd);
      this.B = new g.W({ I: "div", S: "ytp-miniplayer-scrim" });
      g.O(this, this.B);
      this.B.Ja(this.element);
      this.T(this.B.element, "click", this.zT);
      var a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-close-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.KF()],
      });
      g.O(this, a);
      a.Ja(this.B.element);
      this.T(a.element, "click", this.yT);
      a = new Mub(this.player, this);
      g.O(this, a);
      a.Ja(this.B.element);
      this.C = new g.W({ I: "div", S: "ytp-miniplayer-controls" });
      g.O(this, this.C);
      this.C.Ja(this.B.element);
      this.T(this.C.element, "click", this.zT);
      var b = new g.W({ I: "div", S: "ytp-miniplayer-button-container" });
      g.O(this, b);
      b.Ja(this.C.element);
      a = new g.W({ I: "div", S: "ytp-miniplayer-play-button-container" });
      g.O(this, a);
      a.Ja(this.C.element);
      var c = new g.W({ I: "div", S: "ytp-miniplayer-button-container" });
      g.O(this, c);
      c.Ja(this.C.element);
      this.N = new g.PW(this.player, this, !1);
      g.O(this, this.N);
      this.N.Ja(b.element);
      b = new g.OW(this.player, this);
      g.O(this, b);
      b.Ja(a.element);
      this.nextButton = new g.PW(this.player, this, !0);
      g.O(this, this.nextButton);
      this.nextButton.Ja(c.element);
      this.K = new g.vX(this.player, this);
      g.O(this, this.K);
      this.K.Ja(this.B.element);
      this.progressBar = new g.UW(this.player, this);
      g.O(this, this.progressBar);
      g.bU(this.player, this.progressBar.element, 4);
      this.D = new g.W({ I: "div", S: "ytp-miniplayer-buttons" });
      g.O(this, this.D);
      g.bU(this.player, this.D.element, 4);
      a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-close-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.KF()],
      });
      g.O(this, a);
      a.Ja(this.D.element);
      this.T(a.element, "click", this.yT);
      a = new g.W({
        I: "button",
        Ka: ["ytp-miniplayer-replay-button", "ytp-button"],
        X: { "aria-label": "\u0110o\u0301ng" },
        V: [g.jxa()],
      });
      g.O(this, a);
      a.Ja(this.D.element);
      this.T(a.element, "click", this.Caa);
      this.T(this.player, "presentingplayerstatechange", this.D3);
      this.T(this.player, "appresize", this.Ub);
      this.T(this.player, "fullscreentoggled", this.Ub);
      this.Ub();
      this.G = !0;
    }
    0 !== this.player.getPlayerState() && g.W.prototype.show.call(this);
    this.progressBar.show();
    this.player.unloadModule("annotations_module");
  };
  g.k.hide = function () {
    this.j && (this.j.dispose(), (this.j = void 0));
    g.W.prototype.hide.call(this);
    this.player.isMinimized() ||
      (this.G && this.progressBar.hide(),
      this.player.loadModule("annotations_module"));
  };
  g.k.va = function () {
    this.j && (this.j.dispose(), (this.j = void 0));
    g.W.prototype.va.call(this);
  };
  g.k.yT = function () {
    this.player.stopVideo();
    this.player.gb("onCloseMiniplayer");
  };
  g.k.Caa = function () {
    this.player.playVideo();
  };
  g.k.zT = function (a) {
    if (a.target === this.B.element || a.target === this.C.element)
      g.nL(this.player.Rb())
        ? this.player.pauseVideo()
        : this.player.playVideo();
  };
  g.k.gh = function () {
    g.tv(
      this.player.getRootNode(),
      "ytp-player-minimized",
      this.player.isMinimized()
    );
  };
  g.k.Wf = function () {
    this.progressBar.Oc();
    this.K.Oc();
  };
  g.k.C3 = function () {
    this.Wf();
    this.j && this.j.start();
  };
  g.k.D3 = function (a) {
    g.lG(a.state, 32) && this.tooltip.hide();
  };
  g.k.Ub = function () {
    g.s1a(this.progressBar, 0, this.player.kb().getPlayerSize().width, !1);
    g.VW(this.progressBar);
  };
  g.k.E3 = function (a) {
    this.player.isMinimized() && (0 === a ? this.hide() : this.show());
  };
  g.k.Me = function () {
    return this.tooltip;
  };
  g.k.Zt = function (a, b, c, d, e) {
    var f = 0,
      h = (d = 0),
      l = g.Gs(a);
    if (b) {
      c = g.iv(b, "ytp-prev-button") || g.iv(b, "ytp-next-button");
      var m = g.iv(b, "ytp-play-button"),
        n = g.iv(b, "ytp-miniplayer-expand-watch-page-button");
      c
        ? (f = h = 12)
        : m
        ? ((b = g.Es(b, this.element)), (h = b.x), (f = b.y - 12))
        : n &&
          ((h = g.iv(b, "ytp-miniplayer-button-top-left")),
          (f = g.Es(b, this.element)),
          (b = g.Gs(b)),
          h
            ? ((h = 8), (f = f.y + 40))
            : ((h = f.x - l.width + b.width), (f = f.y - 20)));
    } else (h = c - l.width / 2), (d = 25 + (e || 0));
    b = this.player.kb().getPlayerSize().width;
    e = f + (e || 0);
    l = g.He(h, 0, b - l.width);
    e
      ? ((a.style.top = e + "px"), (a.style.bottom = ""))
      : ((a.style.top = ""), (a.style.bottom = d + "px"));
    a.style.left = l + "px";
  };
  g.y(Oub, g.qV);
  g.k = Oub.prototype;
  g.k.onVideoDataChange = function () {
    if (this.player.getVideoData()) {
      var a = this.player.getVideoAspectRatio(),
        b = 16 / 9;
      a = a > b + 0.1 || a < b - 0.1;
      g.tv(
        this.player.getRootNode(),
        "ytp-rounded-miniplayer-not-regular-wide-video",
        a
      );
    }
  };
  g.k.create = function () {
    g.qV.prototype.create.call(this);
    this.B.T(this.player, "videodatachange", this.onVideoDataChange);
    this.onVideoDataChange();
  };
  g.k.jl = function () {
    return !1;
  };
  g.k.load = function () {
    this.player.hideControls();
    this.j.show();
  };
  g.k.unload = function () {
    this.player.showControls();
    this.j.hide();
  };
  g.pV("miniplayer", Oub);
})(_yt_player);
