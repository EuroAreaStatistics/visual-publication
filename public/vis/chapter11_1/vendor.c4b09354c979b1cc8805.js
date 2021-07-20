!(function (t) {
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  var e = {};
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (n.p = ""),
    n((n.s = 597));
})([
  ,
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t > 1 ? 0 : t < -1 ? c : Math.acos(t);
    }
    function i(t) {
      return t > 1 ? s : t < -1 ? -s : Math.asin(t);
    }
    function o(t) {
      return (t = x(t / 2)) * t;
    }
    e.d(n, "i", function () {
      return u;
    }),
      e.d(n, "j", function () {
        return a;
      }),
      e.d(n, "o", function () {
        return c;
      }),
      e.d(n, "l", function () {
        return s;
      }),
      e.d(n, "q", function () {
        return f;
      }),
      e.d(n, "w", function () {
        return l;
      }),
      e.d(n, "h", function () {
        return h;
      }),
      e.d(n, "r", function () {
        return d;
      }),
      e.d(n, "a", function () {
        return p;
      }),
      e.d(n, "d", function () {
        return v;
      }),
      e.d(n, "e", function () {
        return g;
      }),
      e.d(n, "g", function () {
        return b;
      }),
      e.d(n, "f", function () {
        return m;
      }),
      e.d(n, "k", function () {
        return y;
      }),
      e.d(n, "n", function () {
        return _;
      }),
      e.d(n, "p", function () {
        return O;
      }),
      e.d(n, "t", function () {
        return x;
      }),
      e.d(n, "s", function () {
        return w;
      }),
      e.d(n, "u", function () {
        return j;
      }),
      e.d(n, "v", function () {
        return T;
      }),
      (n.b = r),
      (n.c = i),
      (n.m = o);
    var u = 1e-6,
      a = 1e-12,
      c = Math.PI,
      s = c / 2,
      f = c / 4,
      l = 2 * c,
      h = 180 / c,
      d = c / 180,
      p = Math.abs,
      v = Math.atan,
      g = Math.atan2,
      b = Math.cos,
      m = Math.ceil,
      y = Math.exp,
      _ = (Math.floor, Math.log),
      O = Math.pow,
      x = Math.sin,
      w =
        Math.sign ||
        function (t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        },
      j = Math.sqrt,
      T = Math.tan;
  },
  ,
  function (t, n, e) {
    "use strict";
    var r = e(265);
    e.d(n, "b", function () {
      return r.a;
    });
    var i = e(61);
    e.d(n, "c", function () {
      return i.a;
    });
    var o = e(294);
    e.d(n, "f", function () {
      return o.a;
    });
    var u = e(151);
    e.d(n, "g", function () {
      return u.a;
    });
    var a = e(295);
    e.d(n, "h", function () {
      return a.a;
    });
    var c = e(84);
    e.d(n, "i", function () {
      return c.a;
    });
    var s = e(85);
    e.d(n, "j", function () {
      return s.a;
    });
    var f = e(62);
    e.d(n, "a", function () {
      return f.a;
    });
    var l = e(149);
    e.d(n, "k", function () {
      return l.a;
    });
    var h = e(296);
    e.d(n, "l", function () {
      return h.a;
    });
    var d = e(10);
    e.d(n, "m", function () {
      return d.b;
    });
    var p = e(86);
    e.d(n, "n", function () {
      return p.a;
    });
    var v = e(150);
    e.d(n, "o", function () {
      return v.a;
    });
    var g = e(154);
    e.d(n, "p", function () {
      return g.b;
    });
    var b = e(297);
    e.d(n, "q", function () {
      return b.a;
    });
    var m = e(298);
    e.d(n, "r", function () {
      return m.a;
    });
    var y = e(87);
    e.d(n, "s", function () {
      return y.a;
    });
    var _ = e(88);
    e.d(n, "e", function () {
      return _.c;
    }),
      e.d(n, "d", function () {
        return _.a;
      });
  },
  ,
  function (t, n, e) {
    "use strict";
    function r(t, n, e, u) {
      function a(n) {
        return t((n = new Date(+n))), n;
      }
      return (
        (a.floor = a),
        (a.ceil = function (e) {
          return t((e = new Date(e - 1))), n(e, 1), t(e), e;
        }),
        (a.round = function (t) {
          var n = a(t),
            e = a.ceil(t);
          return t - n < e - t ? n : e;
        }),
        (a.offset = function (t, e) {
          return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
        }),
        (a.range = function (e, r, i) {
          var o,
            u = [];
          if (
            ((e = a.ceil(e)),
            (i = null == i ? 1 : Math.floor(i)),
            !(e < r && i > 0))
          )
            return u;
          do {
            u.push((o = new Date(+e))), n(e, i), t(e);
          } while (o < e && e < r);
          return u;
        }),
        (a.filter = function (e) {
          return r(
            function (n) {
              if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
            },
            function (t, r) {
              if (t >= t)
                if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
                else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
            }
          );
        }),
        e &&
          ((a.count = function (n, r) {
            return (
              i.setTime(+n), o.setTime(+r), t(i), t(o), Math.floor(e(i, o))
            );
          }),
          (a.every = function (t) {
            return (
              (t = Math.floor(t)),
              isFinite(t) && t > 0
                ? t > 1
                  ? a.filter(
                      u
                        ? function (n) {
                            return u(n) % t == 0;
                          }
                        : function (n) {
                            return a.count(0, n) % t == 0;
                          }
                    )
                  : a
                : null
            );
          })),
        a
      );
    }
    n.a = r;
    var i = new Date(),
      o = new Date();
  },
  ,
  ,
  function (t, n, e) {
    "use strict";
    var r = e(137);
    e.d(n, "b", function () {
      return r.c;
    }),
      e.d(n, "d", function () {
        return r.b;
      }),
      e.d(n, "c", function () {
        return r.a;
      });
    var i = e(28);
    e.d(n, "a", function () {
      return i.a;
    });
    var o = e(138);
    e.d(n, "e", function () {
      return o.a;
    });
    var u = e(241);
    e.d(n, "f", function () {
      return u.a;
    });
    var a = e(242);
    e.d(n, "g", function () {
      return a.a;
    });
    var c = e(140);
    e.d(n, "h", function () {
      return c.a;
    });
    var s = e(142);
    e.d(n, "i", function () {
      return s.a;
    });
    var f = e(243);
    e.d(n, "j", function () {
      return f.a;
    });
    var l = e(246);
    e.d(n, "w", function () {
      return l.a;
    });
    var h = e(247);
    e.d(n, "x", function () {
      return h.a;
    });
    var d = e(146);
    e.d(n, "y", function () {
      return d.a;
    });
    var p = e(248);
    e.d(n, "k", function () {
      return p.a;
    });
    var v = e(249);
    e.d(n, "l", function () {
      return v.a;
    });
    var g = e(250);
    e.d(n, "m", function () {
      return g.a;
    });
    var b = e(251);
    e.d(n, "n", function () {
      return b.a;
    });
    var m = e(147);
    e.d(n, "o", function () {
      return m.a;
    });
    var y = e(139);
    e.d(n, "p", function () {
      return y.a;
    });
    var _ = e(252);
    e.d(n, "q", function () {
      return _.a;
    });
    var O = e(82);
    e.d(n, "r", function () {
      return O.a;
    });
    var x = e(144);
    e.d(n, "s", function () {
      return x.a;
    });
    var w = e(253);
    e.d(n, "t", function () {
      return w.a;
    });
    var j = e(254);
    e.d(n, "u", function () {
      return j.a;
    });
    var T = e(255);
    e.d(n, "v", function () {
      return T.a;
    });
    var E = e(145);
    e.d(n, "B", function () {
      return E.a;
    }),
      e.d(n, "z", function () {
        return E.b;
      }),
      e.d(n, "A", function () {
        return E.c;
      });
    var C = e(148);
    e.d(n, "C", function () {
      return C.a;
    });
    var A = e(141);
    e.d(n, "D", function () {
      return A.a;
    });
    var S = e(256);
    e.d(n, "E", function () {
      return S.a;
    });
  },
  ,
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._groups = t), (this._parents = n);
    }
    function i() {
      return new r([[document.documentElement]], L);
    }
    e.d(n, "c", function () {
      return L;
    }),
      (n.a = r);
    var o = e(266),
      u = e(267),
      a = e(268),
      c = e(269),
      s = e(152),
      f = e(271),
      l = e(272),
      h = e(273),
      d = e(274),
      p = e(275),
      v = e(276),
      g = e(277),
      b = e(278),
      m = e(279),
      y = e(280),
      _ = e(281),
      O = e(154),
      x = e(282),
      w = e(283),
      j = e(284),
      T = e(285),
      E = e(286),
      C = e(287),
      A = e(288),
      S = e(289),
      M = e(290),
      N = e(291),
      D = e(292),
      k = e(88),
      I = e(293),
      L = [null];
    (r.prototype = i.prototype = {
      constructor: r,
      select: o.a,
      selectAll: u.a,
      filter: a.a,
      data: c.a,
      enter: s.b,
      exit: f.a,
      merge: l.a,
      order: h.a,
      sort: d.a,
      call: p.a,
      nodes: v.a,
      node: g.a,
      size: b.a,
      empty: m.a,
      each: y.a,
      attr: _.a,
      style: O.a,
      property: x.a,
      classed: w.a,
      text: j.a,
      html: T.a,
      raise: E.a,
      lower: C.a,
      append: A.a,
      insert: S.a,
      remove: M.a,
      clone: N.a,
      datum: D.a,
      on: k.b,
      dispatch: I.a,
    }),
      (n.b = i);
  },
  function (t, n, e) {
    "use strict";
    var r = e(90);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(161);
    e.d(n, "b", function () {
      return i.a;
    });
    var o = e(93);
    e.d(n, "c", function () {
      return o.b;
    });
    var u = e(159);
    e.d(n, "d", function () {
      return u.a;
    });
    var a = e(162);
    e.d(n, "g", function () {
      return a.a;
    });
    var c = e(63);
    e.d(n, "m", function () {
      return c.a;
    });
    var s = e(163);
    e.d(n, "n", function () {
      return s.a;
    });
    var f = e(303);
    e.d(n, "r", function () {
      return f.a;
    });
    var l = e(164);
    e.d(n, "s", function () {
      return l.a;
    });
    var h = e(304);
    e.d(n, "t", function () {
      return h.a;
    }),
      e.d(n, "u", function () {
        return h.b;
      });
    var d = e(307);
    e.d(n, "v", function () {
      return d.a;
    });
    var p = e(158);
    e.d(n, "o", function () {
      return p.a;
    }),
      e.d(n, "p", function () {
        return p.b;
      }),
      e.d(n, "q", function () {
        return p.c;
      });
    var v = e(308);
    e.d(n, "j", function () {
      return v.a;
    }),
      e.d(n, "k", function () {
        return v.b;
      });
    var g = e(309);
    e.d(n, "l", function () {
      return g.a;
    });
    var b = e(310);
    e.d(n, "h", function () {
      return b.a;
    }),
      e.d(n, "i", function () {
        return b.b;
      });
    var m = e(311);
    e.d(n, "e", function () {
      return m.b;
    }),
      e.d(n, "f", function () {
        return m.a;
      });
    var y = e(312);
    e.d(n, "w", function () {
      return y.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = o(t, n);
      if (e.state > l) throw new Error("too late; already scheduled");
      return e;
    }
    function i(t, n) {
      var e = o(t, n);
      if (e.state > d) throw new Error("too late; already started");
      return e;
    }
    function o(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error("transition not found");
      return e;
    }
    function u(t, n, e) {
      function r(t) {
        (e.state = h),
          e.timer.restart(i, e.delay, e.time),
          e.delay <= t && i(t - e.delay);
      }
      function i(r) {
        var f, l, g, m;
        if (e.state !== h) return u();
        for (f in s)
          if (((m = s[f]), m.name === e.name)) {
            if (m.state === p) return Object(c.c)(i);
            m.state === v
              ? ((m.state = b),
                m.timer.stop(),
                m.on.call("interrupt", t, t.__data__, m.index, m.group),
                delete s[f])
              : +f < n && ((m.state = b), m.timer.stop(), delete s[f]);
          }
        if (
          (Object(c.c)(function () {
            e.state === p &&
              ((e.state = v), e.timer.restart(o, e.delay, e.time), o(r));
          }),
          (e.state = d),
          e.on.call("start", t, t.__data__, e.index, e.group),
          e.state === d)
        ) {
          for (
            e.state = p, a = new Array((g = e.tween.length)), f = 0, l = -1;
            f < g;
            ++f
          )
            (m = e.tween[f].value.call(t, t.__data__, e.index, e.group)) &&
              (a[++l] = m);
          a.length = l + 1;
        }
      }
      function o(n) {
        for (
          var r =
              n < e.duration
                ? e.ease.call(null, n / e.duration)
                : (e.timer.restart(u), (e.state = g), 1),
            i = -1,
            o = a.length;
          ++i < o;

        )
          a[i].call(null, r);
        e.state === g &&
          (e.on.call("end", t, t.__data__, e.index, e.group), u());
      }
      function u() {
        (e.state = b), e.timer.stop(), delete s[n];
        for (var r in s) return;
        delete t.__transition;
      }
      var a,
        s = t.__transition;
      (s[n] = e), (e.timer = Object(c.d)(r, 0, e.time));
    }
    e.d(n, "c", function () {
      return h;
    }),
      e.d(n, "d", function () {
        return d;
      }),
      e.d(n, "b", function () {
        return g;
      }),
      e.d(n, "a", function () {
        return b;
      }),
      (n.g = r),
      (n.h = i),
      (n.f = o);
    var a = e(22),
      c = e(64),
      s = Object(a.a)("start", "end", "interrupt"),
      f = [],
      l = 0,
      h = 1,
      d = 2,
      p = 3,
      v = 4,
      g = 5,
      b = 6;
    n.e = function (t, n, e, r, i, o) {
      var a = t.__transition;
      if (a) {
        if (e in a) return;
      } else t.__transition = {};
      u(t, e, {
        name: n,
        index: r,
        group: i,
        on: s,
        tween: f,
        time: o.time,
        delay: o.delay,
        duration: o.duration,
        ease: o.ease,
        timer: null,
        state: l,
      });
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(91);
    e.d(n, "a", function () {
      return r.e;
    }),
      e.d(n, "f", function () {
        return r.g;
      }),
      e.d(n, "d", function () {
        return r.f;
      });
    var i = e(301);
    e.d(n, "e", function () {
      return i.a;
    }),
      e.d(n, "c", function () {
        return i.b;
      });
    var o = e(302);
    e.d(n, "b", function () {
      return o.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Object(d.b)({
        point: function (n, e) {
          var r = t(n, e);
          return this.stream.point(r[0], r[1]);
        },
      });
    }
    function i(t) {
      return o(function () {
        return t;
      })();
    }
    function o(t) {
      function n(t) {
        return (t = O(t[0] * l.r, t[1] * l.r)), [t[0] * C + m, y - t[1] * C];
      }
      function e(t) {
        return (
          (t = O.invert((t[0] - m) / C, (y - t[1]) / C)) && [
            t[0] * l.h,
            t[1] * l.h,
          ]
        );
      }
      function i(t, n) {
        return (t = b(t, n)), [t[0] * C + m, y - t[1] * C];
      }
      function o() {
        O = Object(s.a)((_ = Object(h.b)(D, k, I)), b);
        var t = b(M, N);
        return (m = A - t[0] * C), (y = S + t[1] * C), d();
      }
      function d() {
        return (T = E = null), n;
      }
      var b,
        m,
        y,
        _,
        O,
        x,
        w,
        j,
        T,
        E,
        C = 150,
        A = 480,
        S = 250,
        M = 0,
        N = 0,
        D = 0,
        k = 0,
        I = 0,
        L = null,
        P = u.a,
        R = null,
        H = f.a,
        F = 0.5,
        q = Object(v.a)(i, F);
      return (
        (n.stream = function (t) {
          return T && E === t ? T : (T = g(r(_)(P(q(H((E = t)))))));
        }),
        (n.preclip = function (t) {
          return arguments.length ? ((P = t), (L = void 0), d()) : P;
        }),
        (n.postclip = function (t) {
          return arguments.length ? ((H = t), (R = x = w = j = null), d()) : H;
        }),
        (n.clipAngle = function (t) {
          return arguments.length
            ? ((P = +t ? Object(a.a)((L = t * l.r)) : ((L = null), u.a)), d())
            : L * l.h;
        }),
        (n.clipExtent = function (t) {
          return arguments.length
            ? ((H =
                null == t
                  ? ((R = x = w = j = null), f.a)
                  : Object(c.a)(
                      (R = +t[0][0]),
                      (x = +t[0][1]),
                      (w = +t[1][0]),
                      (j = +t[1][1])
                    )),
              d())
            : null == R
            ? null
            : [
                [R, x],
                [w, j],
              ];
        }),
        (n.scale = function (t) {
          return arguments.length ? ((C = +t), o()) : C;
        }),
        (n.translate = function (t) {
          return arguments.length ? ((A = +t[0]), (S = +t[1]), o()) : [A, S];
        }),
        (n.center = function (t) {
          return arguments.length
            ? ((M = (t[0] % 360) * l.r), (N = (t[1] % 360) * l.r), o())
            : [M * l.h, N * l.h];
        }),
        (n.rotate = function (t) {
          return arguments.length
            ? ((D = (t[0] % 360) * l.r),
              (k = (t[1] % 360) * l.r),
              (I = t.length > 2 ? (t[2] % 360) * l.r : 0),
              o())
            : [D * l.h, k * l.h, I * l.h];
        }),
        (n.precision = function (t) {
          return arguments.length
            ? ((q = Object(v.a)(i, (F = t * t))), d())
            : Object(l.u)(F);
        }),
        (n.fitExtent = function (t, e) {
          return Object(p.a)(n, t, e);
        }),
        (n.fitSize = function (t, e) {
          return Object(p.c)(n, t, e);
        }),
        (n.fitWidth = function (t, e) {
          return Object(p.d)(n, t, e);
        }),
        (n.fitHeight = function (t, e) {
          return Object(p.b)(n, t, e);
        }),
        function () {
          return (
            (b = t.apply(this, arguments)), (n.invert = b.invert && e), o()
          );
        }
      );
    }
    (n.a = i), (n.b = o);
    var u = e(177),
      a = e(183),
      c = e(68),
      s = e(176),
      f = e(104),
      l = e(1),
      h = e(67),
      d = e(69),
      p = e(107),
      v = e(406),
      g = Object(d.b)({
        point: function (t, n) {
          this.stream.point(t * l.r, n * l.r);
        },
      });
  },
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    e.d(n, "d", function () {
      return r;
    }),
      e.d(n, "c", function () {
        return i;
      }),
      e.d(n, "b", function () {
        return o;
      }),
      e.d(n, "a", function () {
        return u;
      }),
      e.d(n, "e", function () {
        return a;
      });
    var r = 1e3,
      i = 6e4,
      o = 36e5,
      u = 864e5,
      a = 6048e5;
  },
  ,
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
    }
    function i(t) {
      return Object(u.m)().transition(t);
    }
    function o() {
      return ++j;
    }
    (n.a = r), (n.b = i), (n.c = o);
    var u = e(3),
      a = e(318),
      c = e(319),
      s = e(320),
      f = e(321),
      l = e(322),
      h = e(323),
      d = e(324),
      p = e(325),
      v = e(326),
      g = e(327),
      b = e(328),
      m = e(329),
      y = e(330),
      _ = e(331),
      O = e(332),
      x = e(333),
      w = e(65),
      j = 0,
      T = u.m.prototype;
    r.prototype = i.prototype = {
      constructor: r,
      select: g.a,
      selectAll: b.a,
      filter: h.a,
      merge: d.a,
      selection: m.a,
      transition: x.a,
      call: T.call,
      nodes: T.nodes,
      node: T.node,
      size: T.size,
      empty: T.empty,
      each: T.each,
      on: p.a,
      attr: a.a,
      attrTween: c.a,
      style: y.a,
      styleTween: _.a,
      text: O.a,
      remove: v.a,
      tween: w.a,
      delay: s.a,
      duration: f.a,
      ease: l.a,
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    n.a = r;
  },
  function (t, n, e) {
    "use strict";
    var r = e(263);
    e.d(n, "a", function () {
      return r.a;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(353);
    e.d(n, "a", function () {
      return r.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      t && a.hasOwnProperty(t.type) && a[t.type](t, n);
    }
    function i(t, n, e) {
      var r,
        i = -1,
        o = t.length - e;
      for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
      n.lineEnd();
    }
    function o(t, n) {
      var e = -1,
        r = t.length;
      for (n.polygonStart(); ++e < r; ) i(t[e], n, 1);
      n.polygonEnd();
    }
    var u = {
        Feature: function (t, n) {
          r(t.geometry, n);
        },
        FeatureCollection: function (t, n) {
          for (var e = t.features, i = -1, o = e.length; ++i < o; )
            r(e[i].geometry, n);
        },
      },
      a = {
        Sphere: function (t, n) {
          n.sphere();
        },
        Point: function (t, n) {
          (t = t.coordinates), n.point(t[0], t[1], t[2]);
        },
        MultiPoint: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
            (t = e[r]), n.point(t[0], t[1], t[2]);
        },
        LineString: function (t, n) {
          i(t.coordinates, n, 0);
        },
        MultiLineString: function (t, n) {
          for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
            i(e[r], n, 0);
        },
        Polygon: function (t, n) {
          o(t.coordinates, n);
        },
        MultiPolygon: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
            o(e[r], n);
        },
        GeometryCollection: function (t, n) {
          for (var e = t.geometries, i = -1, o = e.length; ++i < o; )
            r(e[i], n);
        },
      };
    n.a = function (t, n) {
      t && u.hasOwnProperty(t.type) ? u[t.type](t, n) : r(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return i;
    }),
      e.d(n, "b", function () {
        return o;
      });
    var r = Array.prototype,
      i = r.map,
      o = r.slice;
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  ,
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this.reset();
    }
    function i(t, n, e) {
      var r = (t.s = n + e),
        i = r - n,
        o = r - i;
      t.t = n - o + (e - i);
    }
    (n.a = function () {
      return new r();
    }),
      (r.prototype = {
        constructor: r,
        reset: function () {
          this.s = this.t = 0;
        },
        add: function (t) {
          i(o, t, this.t),
            i(this, o.s, this.s),
            this.s ? (this.t += o.t) : (this.s = o.t);
        },
        valueOf: function () {
          return this.s;
        },
      });
    var o = new r();
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      return Math.random();
    };
  },
  ,
  ,
  ,
  function (t, n, e) {
    var r, i;
    /*!
     * jQuery JavaScript Library v3.3.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2018-01-20T17:24Z
     */
    !(function (n, e) {
      "use strict";
      "object" == typeof t && "object" == typeof t.exports
        ? (t.exports = n.document
            ? e(n, !0)
            : function (t) {
                if (!t.document)
                  throw new Error("jQuery requires a window with a document");
                return e(t);
              })
        : e(n);
    })("undefined" != typeof window ? window : this, function (e, o) {
      "use strict";
      function u(t, n, e) {
        n = n || ft;
        var r,
          i = n.createElement("script");
        if (((i.text = t), e)) for (r in jt) e[r] && (i[r] = e[r]);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function a(t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? gt[bt.call(t)] || "object"
          : typeof t;
      }
      function c(t) {
        var n = !!t && "length" in t && t.length,
          e = a(t);
        return (
          !xt(t) &&
          !wt(t) &&
          ("array" === e ||
            0 === n ||
            ("number" == typeof n && n > 0 && n - 1 in t))
        );
      }
      function s(t, n) {
        return t.nodeName && t.nodeName.toLowerCase() === n.toLowerCase();
      }
      function f(t, n, e) {
        return xt(n)
          ? Tt.grep(t, function (t, r) {
              return !!n.call(t, r, t) !== e;
            })
          : n.nodeType
          ? Tt.grep(t, function (t) {
              return (t === n) !== e;
            })
          : "string" != typeof n
          ? Tt.grep(t, function (t) {
              return vt.call(n, t) > -1 !== e;
            })
          : Tt.filter(n, t, e);
      }
      function l(t, n) {
        for (; (t = t[n]) && 1 !== t.nodeType; );
        return t;
      }
      function h(t) {
        var n = {};
        return (
          Tt.each(t.match(Pt) || [], function (t, e) {
            n[e] = !0;
          }),
          n
        );
      }
      function d(t) {
        return t;
      }
      function p(t) {
        throw t;
      }
      function v(t, n, e, r) {
        var i;
        try {
          t && xt((i = t.promise))
            ? i.call(t).done(n).fail(e)
            : t && xt((i = t.then))
            ? i.call(t, n, e)
            : n.apply(void 0, [t].slice(r));
        } catch (t) {
          e.apply(void 0, [t]);
        }
      }
      function g() {
        ft.removeEventListener("DOMContentLoaded", g),
          e.removeEventListener("load", g),
          Tt.ready();
      }
      function b(t, n) {
        return n.toUpperCase();
      }
      function m(t) {
        return t.replace(qt, "ms-").replace(Ut, b);
      }
      function y() {
        this.expando = Tt.expando + y.uid++;
      }
      function _(t) {
        return (
          "true" === t ||
          ("false" !== t &&
            ("null" === t
              ? null
              : t === +t + ""
              ? +t
              : Vt.test(t)
              ? JSON.parse(t)
              : t))
        );
      }
      function O(t, n, e) {
        var r;
        if (void 0 === e && 1 === t.nodeType)
          if (
            ((r = "data-" + n.replace(Yt, "-$&").toLowerCase()),
            "string" == typeof (e = t.getAttribute(r)))
          ) {
            try {
              e = _(e);
            } catch (t) {}
            zt.set(t, n, e);
          } else e = void 0;
        return e;
      }
      function x(t, n, e, r) {
        var i,
          o,
          u = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return Tt.css(t, n, "");
              },
          c = a(),
          s = (e && e[3]) || (Tt.cssNumber[n] ? "" : "px"),
          f = (Tt.cssNumber[n] || ("px" !== s && +c)) && Xt.exec(Tt.css(t, n));
        if (f && f[3] !== s) {
          for (c /= 2, s = s || f[3], f = +c || 1; u--; )
            Tt.style(t, n, f + s),
              (1 - o) * (1 - (o = a() / c || 0.5)) <= 0 && (u = 0),
              (f /= o);
          (f *= 2), Tt.style(t, n, f + s), (e = e || []);
        }
        return (
          e &&
            ((f = +f || +c || 0),
            (i = e[1] ? f + (e[1] + 1) * e[2] : +e[2]),
            r && ((r.unit = s), (r.start = f), (r.end = i))),
          i
        );
      }
      function w(t) {
        var n,
          e = t.ownerDocument,
          r = t.nodeName,
          i = Jt[r];
        return (
          i ||
          ((n = e.body.appendChild(e.createElement(r))),
          (i = Tt.css(n, "display")),
          n.parentNode.removeChild(n),
          "none" === i && (i = "block"),
          (Jt[r] = i),
          i)
        );
      }
      function j(t, n) {
        for (var e, r, i = [], o = 0, u = t.length; o < u; o++)
          (r = t[o]),
            r.style &&
              ((e = r.style.display),
              n
                ? ("none" === e &&
                    ((i[o] = Bt.get(r, "display") || null),
                    i[o] || (r.style.display = "")),
                  "" === r.style.display && Qt(r) && (i[o] = w(r)))
                : "none" !== e && ((i[o] = "none"), Bt.set(r, "display", e)));
        for (o = 0; o < u; o++) null != i[o] && (t[o].style.display = i[o]);
        return t;
      }
      function T(t, n) {
        var e;
        return (
          (e =
            void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(n || "*")
              : void 0 !== t.querySelectorAll
              ? t.querySelectorAll(n || "*")
              : []),
          void 0 === n || (n && s(t, n)) ? Tt.merge([t], e) : e
        );
      }
      function E(t, n) {
        for (var e = 0, r = t.length; e < r; e++)
          Bt.set(t[e], "globalEval", !n || Bt.get(n[e], "globalEval"));
      }
      function C(t, n, e, r, i) {
        for (
          var o,
            u,
            c,
            s,
            f,
            l,
            h = n.createDocumentFragment(),
            d = [],
            p = 0,
            v = t.length;
          p < v;
          p++
        )
          if ((o = t[p]) || 0 === o)
            if ("object" === a(o)) Tt.merge(d, o.nodeType ? [o] : o);
            else if (rn.test(o)) {
              for (
                u = u || h.appendChild(n.createElement("div")),
                  c = (tn.exec(o) || ["", ""])[1].toLowerCase(),
                  s = en[c] || en._default,
                  u.innerHTML = s[1] + Tt.htmlPrefilter(o) + s[2],
                  l = s[0];
                l--;

              )
                u = u.lastChild;
              Tt.merge(d, u.childNodes),
                (u = h.firstChild),
                (u.textContent = "");
            } else d.push(n.createTextNode(o));
        for (h.textContent = "", p = 0; (o = d[p++]); )
          if (r && Tt.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((f = Tt.contains(o.ownerDocument, o)),
            (u = T(h.appendChild(o), "script")),
            f && E(u),
            e)
          )
            for (l = 0; (o = u[l++]); ) nn.test(o.type || "") && e.push(o);
        return h;
      }
      function A() {
        return !0;
      }
      function S() {
        return !1;
      }
      function M() {
        try {
          return ft.activeElement;
        } catch (t) {}
      }
      function N(t, n, e, r, i, o) {
        var u, a;
        if ("object" == typeof n) {
          "string" != typeof e && ((r = r || e), (e = void 0));
          for (a in n) N(t, a, e, r, n[a], o);
          return t;
        }
        if (
          (null == r && null == i
            ? ((i = e), (r = e = void 0))
            : null == i &&
              ("string" == typeof e
                ? ((i = r), (r = void 0))
                : ((i = r), (r = e), (e = void 0))),
          !1 === i)
        )
          i = S;
        else if (!i) return t;
        return (
          1 === o &&
            ((u = i),
            (i = function (t) {
              return Tt().off(t), u.apply(this, arguments);
            }),
            (i.guid = u.guid || (u.guid = Tt.guid++))),
          t.each(function () {
            Tt.event.add(this, n, i, r, e);
          })
        );
      }
      function D(t, n) {
        return s(t, "table") && s(11 !== n.nodeType ? n : n.firstChild, "tr")
          ? Tt(t).children("tbody")[0] || t
          : t;
      }
      function k(t) {
        return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
      }
      function I(t) {
        return (
          "true/" === (t.type || "").slice(0, 5)
            ? (t.type = t.type.slice(5))
            : t.removeAttribute("type"),
          t
        );
      }
      function L(t, n) {
        var e, r, i, o, u, a, c, s;
        if (1 === n.nodeType) {
          if (
            Bt.hasData(t) &&
            ((o = Bt.access(t)), (u = Bt.set(n, o)), (s = o.events))
          ) {
            delete u.handle, (u.events = {});
            for (i in s)
              for (e = 0, r = s[i].length; e < r; e++)
                Tt.event.add(n, i, s[i][e]);
          }
          zt.hasData(t) &&
            ((a = zt.access(t)), (c = Tt.extend({}, a)), zt.set(n, c));
        }
      }
      function P(t, n) {
        var e = n.nodeName.toLowerCase();
        "input" === e && Zt.test(t.type)
          ? (n.checked = t.checked)
          : ("input" !== e && "textarea" !== e) ||
            (n.defaultValue = t.defaultValue);
      }
      function R(t, n, e, r) {
        n = dt.apply([], n);
        var i,
          o,
          a,
          c,
          s,
          f,
          l = 0,
          h = t.length,
          d = h - 1,
          p = n[0],
          v = xt(p);
        if (
          v ||
          (h > 1 && "string" == typeof p && !Ot.checkClone && ln.test(p))
        )
          return t.each(function (i) {
            var o = t.eq(i);
            v && (n[0] = p.call(this, i, o.html())), R(o, n, e, r);
          });
        if (
          h &&
          ((i = C(n, t[0].ownerDocument, !1, t, r)),
          (o = i.firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = Tt.map(T(i, "script"), k), c = a.length; l < h; l++)
            (s = i),
              l !== d &&
                ((s = Tt.clone(s, !0, !0)), c && Tt.merge(a, T(s, "script"))),
              e.call(t[l], s, l);
          if (c)
            for (
              f = a[a.length - 1].ownerDocument, Tt.map(a, I), l = 0;
              l < c;
              l++
            )
              (s = a[l]),
                nn.test(s.type || "") &&
                  !Bt.access(s, "globalEval") &&
                  Tt.contains(f, s) &&
                  (s.src && "module" !== (s.type || "").toLowerCase()
                    ? Tt._evalUrl && Tt._evalUrl(s.src)
                    : u(s.textContent.replace(hn, ""), f, s));
        }
        return t;
      }
      function H(t, n, e) {
        for (var r, i = n ? Tt.filter(n, t) : t, o = 0; null != (r = i[o]); o++)
          e || 1 !== r.nodeType || Tt.cleanData(T(r)),
            r.parentNode &&
              (e && Tt.contains(r.ownerDocument, r) && E(T(r, "script")),
              r.parentNode.removeChild(r));
        return t;
      }
      function F(t, n, e) {
        var r,
          i,
          o,
          u,
          a = t.style;
        return (
          (e = e || pn(t)),
          e &&
            ((u = e.getPropertyValue(n) || e[n]),
            "" !== u || Tt.contains(t.ownerDocument, t) || (u = Tt.style(t, n)),
            !Ot.pixelBoxStyles() &&
              dn.test(u) &&
              vn.test(n) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = u),
              (u = e.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== u ? u + "" : u
        );
      }
      function q(t, n) {
        return {
          get: function () {
            return t()
              ? void delete this.get
              : (this.get = n).apply(this, arguments);
          },
        };
      }
      function U(t) {
        if (t in On) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), e = _n.length; e--; )
          if ((t = _n[e] + n) in On) return t;
      }
      function W(t) {
        var n = Tt.cssProps[t];
        return n || (n = Tt.cssProps[t] = U(t) || t), n;
      }
      function B(t, n, e) {
        var r = Xt.exec(n);
        return r ? Math.max(0, r[2] - (e || 0)) + (r[3] || "px") : n;
      }
      function z(t, n, e, r, i, o) {
        var u = "width" === n ? 1 : 0,
          a = 0,
          c = 0;
        if (e === (r ? "border" : "content")) return 0;
        for (; u < 4; u += 2)
          "margin" === e && (c += Tt.css(t, e + Kt[u], !0, i)),
            r
              ? ("content" === e && (c -= Tt.css(t, "padding" + Kt[u], !0, i)),
                "margin" !== e &&
                  (c -= Tt.css(t, "border" + Kt[u] + "Width", !0, i)))
              : ((c += Tt.css(t, "padding" + Kt[u], !0, i)),
                "padding" !== e
                  ? (c += Tt.css(t, "border" + Kt[u] + "Width", !0, i))
                  : (a += Tt.css(t, "border" + Kt[u] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (c += Math.max(
              0,
              Math.ceil(
                t["offset" + n[0].toUpperCase() + n.slice(1)] - o - c - a - 0.5
              )
            )),
          c
        );
      }
      function V(t, n, e) {
        var r = pn(t),
          i = F(t, n, r),
          o = "border-box" === Tt.css(t, "boxSizing", !1, r),
          u = o;
        if (dn.test(i)) {
          if (!e) return i;
          i = "auto";
        }
        return (
          (u = u && (Ot.boxSizingReliable() || i === t.style[n])),
          ("auto" === i ||
            (!parseFloat(i) && "inline" === Tt.css(t, "display", !1, r))) &&
            ((i = t["offset" + n[0].toUpperCase() + n.slice(1)]), (u = !0)),
          (i = parseFloat(i) || 0) +
            z(t, n, e || (o ? "border" : "content"), u, r, i) +
            "px"
        );
      }
      function Y(t, n, e, r, i) {
        return new Y.prototype.init(t, n, e, r, i);
      }
      function G() {
        wn &&
          (!1 === ft.hidden && e.requestAnimationFrame
            ? e.requestAnimationFrame(G)
            : e.setTimeout(G, Tt.fx.interval),
          Tt.fx.tick());
      }
      function X() {
        return (
          e.setTimeout(function () {
            xn = void 0;
          }),
          (xn = Date.now())
        );
      }
      function K(t, n) {
        var e,
          r = 0,
          i = { height: t };
        for (n = n ? 1 : 0; r < 4; r += 2 - n)
          (e = Kt[r]), (i["margin" + e] = i["padding" + e] = t);
        return n && (i.opacity = i.width = t), i;
      }
      function Q(t, n, e) {
        for (
          var r,
            i = (Z.tweeners[n] || []).concat(Z.tweeners["*"]),
            o = 0,
            u = i.length;
          o < u;
          o++
        )
          if ((r = i[o].call(e, n, t))) return r;
      }
      function $(t, n, e) {
        var r,
          i,
          o,
          u,
          a,
          c,
          s,
          f,
          l = "width" in n || "height" in n,
          h = this,
          d = {},
          p = t.style,
          v = t.nodeType && Qt(t),
          g = Bt.get(t, "fxshow");
        e.queue ||
          ((u = Tt._queueHooks(t, "fx")),
          null == u.unqueued &&
            ((u.unqueued = 0),
            (a = u.empty.fire),
            (u.empty.fire = function () {
              u.unqueued || a();
            })),
          u.unqueued++,
          h.always(function () {
            h.always(function () {
              u.unqueued--, Tt.queue(t, "fx").length || u.empty.fire();
            });
          }));
        for (r in n)
          if (((i = n[r]), jn.test(i))) {
            if (
              (delete n[r],
              (o = o || "toggle" === i),
              i === (v ? "hide" : "show"))
            ) {
              if ("show" !== i || !g || void 0 === g[r]) continue;
              v = !0;
            }
            d[r] = (g && g[r]) || Tt.style(t, r);
          }
        if ((c = !Tt.isEmptyObject(n)) || !Tt.isEmptyObject(d)) {
          l &&
            1 === t.nodeType &&
            ((e.overflow = [p.overflow, p.overflowX, p.overflowY]),
            (s = g && g.display),
            null == s && (s = Bt.get(t, "display")),
            (f = Tt.css(t, "display")),
            "none" === f &&
              (s
                ? (f = s)
                : (j([t], !0),
                  (s = t.style.display || s),
                  (f = Tt.css(t, "display")),
                  j([t]))),
            ("inline" === f || ("inline-block" === f && null != s)) &&
              "none" === Tt.css(t, "float") &&
              (c ||
                (h.done(function () {
                  p.display = s;
                }),
                null == s && ((f = p.display), (s = "none" === f ? "" : f))),
              (p.display = "inline-block"))),
            e.overflow &&
              ((p.overflow = "hidden"),
              h.always(function () {
                (p.overflow = e.overflow[0]),
                  (p.overflowX = e.overflow[1]),
                  (p.overflowY = e.overflow[2]);
              })),
            (c = !1);
          for (r in d)
            c ||
              (g
                ? "hidden" in g && (v = g.hidden)
                : (g = Bt.access(t, "fxshow", { display: s })),
              o && (g.hidden = !v),
              v && j([t], !0),
              h.done(function () {
                v || j([t]), Bt.remove(t, "fxshow");
                for (r in d) Tt.style(t, r, d[r]);
              })),
              (c = Q(v ? g[r] : 0, r, h)),
              r in g ||
                ((g[r] = c.start), v && ((c.end = c.start), (c.start = 0)));
        }
      }
      function J(t, n) {
        var e, r, i, o, u;
        for (e in t)
          if (
            ((r = m(e)),
            (i = n[r]),
            (o = t[e]),
            Array.isArray(o) && ((i = o[1]), (o = t[e] = o[0])),
            e !== r && ((t[r] = o), delete t[e]),
            (u = Tt.cssHooks[r]) && "expand" in u)
          ) {
            (o = u.expand(o)), delete t[r];
            for (e in o) e in t || ((t[e] = o[e]), (n[e] = i));
          } else n[r] = i;
      }
      function Z(t, n, e) {
        var r,
          i,
          o = 0,
          u = Z.prefilters.length,
          a = Tt.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (i) return !1;
            for (
              var n = xn || X(),
                e = Math.max(0, s.startTime + s.duration - n),
                r = e / s.duration || 0,
                o = 1 - r,
                u = 0,
                c = s.tweens.length;
              u < c;
              u++
            )
              s.tweens[u].run(o);
            return (
              a.notifyWith(t, [s, o, e]),
              o < 1 && c
                ? e
                : (c || a.notifyWith(t, [s, 1, 0]), a.resolveWith(t, [s]), !1)
            );
          },
          s = a.promise({
            elem: t,
            props: Tt.extend({}, n),
            opts: Tt.extend(
              !0,
              { specialEasing: {}, easing: Tt.easing._default },
              e
            ),
            originalProperties: n,
            originalOptions: e,
            startTime: xn || X(),
            duration: e.duration,
            tweens: [],
            createTween: function (n, e) {
              var r = Tt.Tween(
                t,
                s.opts,
                n,
                e,
                s.opts.specialEasing[n] || s.opts.easing
              );
              return s.tweens.push(r), r;
            },
            stop: function (n) {
              var e = 0,
                r = n ? s.tweens.length : 0;
              if (i) return this;
              for (i = !0; e < r; e++) s.tweens[e].run(1);
              return (
                n
                  ? (a.notifyWith(t, [s, 1, 0]), a.resolveWith(t, [s, n]))
                  : a.rejectWith(t, [s, n]),
                this
              );
            },
          }),
          f = s.props;
        for (J(f, s.opts.specialEasing); o < u; o++)
          if ((r = Z.prefilters[o].call(s, t, f, s.opts)))
            return (
              xt(r.stop) &&
                (Tt._queueHooks(s.elem, s.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          Tt.map(f, Q, s),
          xt(s.opts.start) && s.opts.start.call(t, s),
          s
            .progress(s.opts.progress)
            .done(s.opts.done, s.opts.complete)
            .fail(s.opts.fail)
            .always(s.opts.always),
          Tt.fx.timer(Tt.extend(c, { elem: t, anim: s, queue: s.opts.queue })),
          s
        );
      }
      function tt(t) {
        return (t.match(Pt) || []).join(" ");
      }
      function nt(t) {
        return (t.getAttribute && t.getAttribute("class")) || "";
      }
      function et(t) {
        return Array.isArray(t)
          ? t
          : "string" == typeof t
          ? t.match(Pt) || []
          : [];
      }
      function rt(t, n, e, r) {
        var i;
        if (Array.isArray(n))
          Tt.each(n, function (n, i) {
            e || Pn.test(t)
              ? r(t, i)
              : rt(
                  t + "[" + ("object" == typeof i && null != i ? n : "") + "]",
                  i,
                  e,
                  r
                );
          });
        else if (e || "object" !== a(n)) r(t, n);
        else for (i in n) rt(t + "[" + i + "]", n[i], e, r);
      }
      function it(t) {
        return function (n, e) {
          "string" != typeof n && ((e = n), (n = "*"));
          var r,
            i = 0,
            o = n.toLowerCase().match(Pt) || [];
          if (xt(e))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(e))
                : (t[r] = t[r] || []).push(e);
        };
      }
      function ot(t, n, e, r) {
        function i(a) {
          var c;
          return (
            (o[a] = !0),
            Tt.each(t[a] || [], function (t, a) {
              var s = a(n, e, r);
              return "string" != typeof s || u || o[s]
                ? u
                  ? !(c = s)
                  : void 0
                : (n.dataTypes.unshift(s), i(s), !1);
            }),
            c
          );
        }
        var o = {},
          u = t === Xn;
        return i(n.dataTypes[0]) || (!o["*"] && i("*"));
      }
      function ut(t, n) {
        var e,
          r,
          i = Tt.ajaxSettings.flatOptions || {};
        for (e in n) void 0 !== n[e] && ((i[e] ? t : r || (r = {}))[e] = n[e]);
        return r && Tt.extend(!0, t, r), t;
      }
      function at(t, n, e) {
        for (var r, i, o, u, a = t.contents, c = t.dataTypes; "*" === c[0]; )
          c.shift(),
            void 0 === r &&
              (r = t.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
          for (i in a)
            if (a[i] && a[i].test(r)) {
              c.unshift(i);
              break;
            }
        if (c[0] in e) o = c[0];
        else {
          for (i in e) {
            if (!c[0] || t.converters[i + " " + c[0]]) {
              o = i;
              break;
            }
            u || (u = i);
          }
          o = o || u;
        }
        if (o) return o !== c[0] && c.unshift(o), e[o];
      }
      function ct(t, n, e, r) {
        var i,
          o,
          u,
          a,
          c,
          s = {},
          f = t.dataTypes.slice();
        if (f[1]) for (u in t.converters) s[u.toLowerCase()] = t.converters[u];
        for (o = f.shift(); o; )
          if (
            (t.responseFields[o] && (e[t.responseFields[o]] = n),
            !c && r && t.dataFilter && (n = t.dataFilter(n, t.dataType)),
            (c = o),
            (o = f.shift()))
          )
            if ("*" === o) o = c;
            else if ("*" !== c && c !== o) {
              if (!(u = s[c + " " + o] || s["* " + o]))
                for (i in s)
                  if (
                    ((a = i.split(" ")),
                    a[1] === o && (u = s[c + " " + a[0]] || s["* " + a[0]]))
                  ) {
                    !0 === u
                      ? (u = s[i])
                      : !0 !== s[i] && ((o = a[0]), f.unshift(a[1]));
                    break;
                  }
              if (!0 !== u)
                if (u && t.throws) n = u(n);
                else
                  try {
                    n = u(n);
                  } catch (t) {
                    return {
                      state: "parsererror",
                      error: u ? t : "No conversion from " + c + " to " + o,
                    };
                  }
            }
        return { state: "success", data: n };
      }
      var st = [],
        ft = e.document,
        lt = Object.getPrototypeOf,
        ht = st.slice,
        dt = st.concat,
        pt = st.push,
        vt = st.indexOf,
        gt = {},
        bt = gt.toString,
        mt = gt.hasOwnProperty,
        yt = mt.toString,
        _t = yt.call(Object),
        Ot = {},
        xt = function (t) {
          return "function" == typeof t && "number" != typeof t.nodeType;
        },
        wt = function (t) {
          return null != t && t === t.window;
        },
        jt = { type: !0, src: !0, noModule: !0 },
        Tt = function (t, n) {
          return new Tt.fn.init(t, n);
        },
        Et = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (Tt.fn = Tt.prototype = {
        jquery: "3.3.1",
        constructor: Tt,
        length: 0,
        toArray: function () {
          return ht.call(this);
        },
        get: function (t) {
          return null == t
            ? ht.call(this)
            : t < 0
            ? this[t + this.length]
            : this[t];
        },
        pushStack: function (t) {
          var n = Tt.merge(this.constructor(), t);
          return (n.prevObject = this), n;
        },
        each: function (t) {
          return Tt.each(this, t);
        },
        map: function (t) {
          return this.pushStack(
            Tt.map(this, function (n, e) {
              return t.call(n, e, n);
            })
          );
        },
        slice: function () {
          return this.pushStack(ht.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (t) {
          var n = this.length,
            e = +t + (t < 0 ? n : 0);
          return this.pushStack(e >= 0 && e < n ? [this[e]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: pt,
        sort: st.sort,
        splice: st.splice,
      }),
        (Tt.extend = Tt.fn.extend = function () {
          var t,
            n,
            e,
            r,
            i,
            o,
            u = arguments[0] || {},
            a = 1,
            c = arguments.length,
            s = !1;
          for (
            "boolean" == typeof u && ((s = u), (u = arguments[a] || {}), a++),
              "object" == typeof u || xt(u) || (u = {}),
              a === c && ((u = this), a--);
            a < c;
            a++
          )
            if (null != (t = arguments[a]))
              for (n in t)
                (e = u[n]),
                  (r = t[n]),
                  u !== r &&
                    (s && r && (Tt.isPlainObject(r) || (i = Array.isArray(r)))
                      ? (i
                          ? ((i = !1), (o = e && Array.isArray(e) ? e : []))
                          : (o = e && Tt.isPlainObject(e) ? e : {}),
                        (u[n] = Tt.extend(s, o, r)))
                      : void 0 !== r && (u[n] = r));
          return u;
        }),
        Tt.extend({
          expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (t) {
            throw new Error(t);
          },
          noop: function () {},
          isPlainObject: function (t) {
            var n, e;
            return (
              !(!t || "[object Object]" !== bt.call(t)) &&
              (!(n = lt(t)) ||
                ("function" ==
                  typeof (e = mt.call(n, "constructor") && n.constructor) &&
                  yt.call(e) === _t))
            );
          },
          isEmptyObject: function (t) {
            var n;
            for (n in t) return !1;
            return !0;
          },
          globalEval: function (t) {
            u(t);
          },
          each: function (t, n) {
            var e,
              r = 0;
            if (c(t))
              for (e = t.length; r < e && !1 !== n.call(t[r], r, t[r]); r++);
            else for (r in t) if (!1 === n.call(t[r], r, t[r])) break;
            return t;
          },
          trim: function (t) {
            return null == t ? "" : (t + "").replace(Et, "");
          },
          makeArray: function (t, n) {
            var e = n || [];
            return (
              null != t &&
                (c(Object(t))
                  ? Tt.merge(e, "string" == typeof t ? [t] : t)
                  : pt.call(e, t)),
              e
            );
          },
          inArray: function (t, n, e) {
            return null == n ? -1 : vt.call(n, t, e);
          },
          merge: function (t, n) {
            for (var e = +n.length, r = 0, i = t.length; r < e; r++)
              t[i++] = n[r];
            return (t.length = i), t;
          },
          grep: function (t, n, e) {
            for (var r = [], i = 0, o = t.length, u = !e; i < o; i++)
              !n(t[i], i) !== u && r.push(t[i]);
            return r;
          },
          map: function (t, n, e) {
            var r,
              i,
              o = 0,
              u = [];
            if (c(t))
              for (r = t.length; o < r; o++)
                null != (i = n(t[o], o, e)) && u.push(i);
            else for (o in t) null != (i = n(t[o], o, e)) && u.push(i);
            return dt.apply([], u);
          },
          guid: 1,
          support: Ot,
        }),
        "function" == typeof Symbol &&
          (Tt.fn[Symbol.iterator] = st[Symbol.iterator]),
        Tt.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (t, n) {
            gt["[object " + n + "]"] = n.toLowerCase();
          }
        );
      var Ct =
        /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
        (function (t) {
          function n(t, n, e, r) {
            var i,
              o,
              u,
              a,
              c,
              f,
              h,
              d = n && n.ownerDocument,
              p = n ? n.nodeType : 9;
            if (
              ((e = e || []),
              "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
            )
              return e;
            if (
              !r &&
              ((n ? n.ownerDocument || n : F) !== N && M(n), (n = n || N), k)
            ) {
              if (11 !== p && (c = vt.exec(t)))
                if ((i = c[1])) {
                  if (9 === p) {
                    if (!(u = n.getElementById(i))) return e;
                    if (u.id === i) return e.push(u), e;
                  } else if (
                    d &&
                    (u = d.getElementById(i)) &&
                    R(n, u) &&
                    u.id === i
                  )
                    return e.push(u), e;
                } else {
                  if (c[2]) return Q.apply(e, n.getElementsByTagName(t)), e;
                  if (
                    (i = c[3]) &&
                    _.getElementsByClassName &&
                    n.getElementsByClassName
                  )
                    return Q.apply(e, n.getElementsByClassName(i)), e;
                }
              if (_.qsa && !z[t + " "] && (!I || !I.test(t))) {
                if (1 !== p) (d = n), (h = t);
                else if ("object" !== n.nodeName.toLowerCase()) {
                  for (
                    (a = n.getAttribute("id"))
                      ? (a = a.replace(yt, _t))
                      : n.setAttribute("id", (a = H)),
                      f = j(t),
                      o = f.length;
                    o--;

                  )
                    f[o] = "#" + a + " " + l(f[o]);
                  (h = f.join(",")), (d = (gt.test(t) && s(n.parentNode)) || n);
                }
                if (h)
                  try {
                    return Q.apply(e, d.querySelectorAll(h)), e;
                  } catch (t) {
                  } finally {
                    a === H && n.removeAttribute("id");
                  }
              }
            }
            return E(t.replace(ot, "$1"), n, e, r);
          }
          function e() {
            function t(e, r) {
              return (
                n.push(e + " ") > O.cacheLength && delete t[n.shift()],
                (t[e + " "] = r)
              );
            }
            var n = [];
            return t;
          }
          function r(t) {
            return (t[H] = !0), t;
          }
          function i(t) {
            var n = N.createElement("fieldset");
            try {
              return !!t(n);
            } catch (t) {
              return !1;
            } finally {
              n.parentNode && n.parentNode.removeChild(n), (n = null);
            }
          }
          function o(t, n) {
            for (var e = t.split("|"), r = e.length; r--; )
              O.attrHandle[e[r]] = n;
          }
          function u(t, n) {
            var e = n && t,
              r =
                e &&
                1 === t.nodeType &&
                1 === n.nodeType &&
                t.sourceIndex - n.sourceIndex;
            if (r) return r;
            if (e) for (; (e = e.nextSibling); ) if (e === n) return -1;
            return t ? 1 : -1;
          }
          function a(t) {
            return function (n) {
              return "form" in n
                ? n.parentNode && !1 === n.disabled
                  ? "label" in n
                    ? "label" in n.parentNode
                      ? n.parentNode.disabled === t
                      : n.disabled === t
                    : n.isDisabled === t || (n.isDisabled !== !t && xt(n) === t)
                  : n.disabled === t
                : "label" in n && n.disabled === t;
            };
          }
          function c(t) {
            return r(function (n) {
              return (
                (n = +n),
                r(function (e, r) {
                  for (var i, o = t([], e.length, n), u = o.length; u--; )
                    e[(i = o[u])] && (e[i] = !(r[i] = e[i]));
                })
              );
            });
          }
          function s(t) {
            return t && void 0 !== t.getElementsByTagName && t;
          }
          function f() {}
          function l(t) {
            for (var n = 0, e = t.length, r = ""; n < e; n++) r += t[n].value;
            return r;
          }
          function h(t, n, e) {
            var r = n.dir,
              i = n.next,
              o = i || r,
              u = e && "parentNode" === o,
              a = U++;
            return n.first
              ? function (n, e, i) {
                  for (; (n = n[r]); )
                    if (1 === n.nodeType || u) return t(n, e, i);
                  return !1;
                }
              : function (n, e, c) {
                  var s,
                    f,
                    l,
                    h = [q, a];
                  if (c) {
                    for (; (n = n[r]); )
                      if ((1 === n.nodeType || u) && t(n, e, c)) return !0;
                  } else
                    for (; (n = n[r]); )
                      if (1 === n.nodeType || u)
                        if (
                          ((l = n[H] || (n[H] = {})),
                          (f = l[n.uniqueID] || (l[n.uniqueID] = {})),
                          i && i === n.nodeName.toLowerCase())
                        )
                          n = n[r] || n;
                        else {
                          if ((s = f[o]) && s[0] === q && s[1] === a)
                            return (h[2] = s[2]);
                          if (((f[o] = h), (h[2] = t(n, e, c)))) return !0;
                        }
                  return !1;
                };
          }
          function d(t) {
            return t.length > 1
              ? function (n, e, r) {
                  for (var i = t.length; i--; ) if (!t[i](n, e, r)) return !1;
                  return !0;
                }
              : t[0];
          }
          function p(t, e, r) {
            for (var i = 0, o = e.length; i < o; i++) n(t, e[i], r);
            return r;
          }
          function v(t, n, e, r, i) {
            for (var o, u = [], a = 0, c = t.length, s = null != n; a < c; a++)
              (o = t[a]) && ((e && !e(o, r, i)) || (u.push(o), s && n.push(a)));
            return u;
          }
          function g(t, n, e, i, o, u) {
            return (
              i && !i[H] && (i = g(i)),
              o && !o[H] && (o = g(o, u)),
              r(function (r, u, a, c) {
                var s,
                  f,
                  l,
                  h = [],
                  d = [],
                  g = u.length,
                  b = r || p(n || "*", a.nodeType ? [a] : a, []),
                  m = !t || (!r && n) ? b : v(b, h, t, a, c),
                  y = e ? (o || (r ? t : g || i) ? [] : u) : m;
                if ((e && e(m, y, a, c), i))
                  for (s = v(y, d), i(s, [], a, c), f = s.length; f--; )
                    (l = s[f]) && (y[d[f]] = !(m[d[f]] = l));
                if (r) {
                  if (o || t) {
                    if (o) {
                      for (s = [], f = y.length; f--; )
                        (l = y[f]) && s.push((m[f] = l));
                      o(null, (y = []), s, c);
                    }
                    for (f = y.length; f--; )
                      (l = y[f]) &&
                        (s = o ? J(r, l) : h[f]) > -1 &&
                        (r[s] = !(u[s] = l));
                  }
                } else (y = v(y === u ? y.splice(g, y.length) : y)), o ? o(null, u, y, c) : Q.apply(u, y);
              })
            );
          }
          function b(t) {
            for (
              var n,
                e,
                r,
                i = t.length,
                o = O.relative[t[0].type],
                u = o || O.relative[" "],
                a = o ? 1 : 0,
                c = h(
                  function (t) {
                    return t === n;
                  },
                  u,
                  !0
                ),
                s = h(
                  function (t) {
                    return J(n, t) > -1;
                  },
                  u,
                  !0
                ),
                f = [
                  function (t, e, r) {
                    var i =
                      (!o && (r || e !== C)) ||
                      ((n = e).nodeType ? c(t, e, r) : s(t, e, r));
                    return (n = null), i;
                  },
                ];
              a < i;
              a++
            )
              if ((e = O.relative[t[a].type])) f = [h(d(f), e)];
              else {
                if (
                  ((e = O.filter[t[a].type].apply(null, t[a].matches)), e[H])
                ) {
                  for (r = ++a; r < i && !O.relative[t[r].type]; r++);
                  return g(
                    a > 1 && d(f),
                    a > 1 &&
                      l(
                        t
                          .slice(0, a - 1)
                          .concat({ value: " " === t[a - 2].type ? "*" : "" })
                      ).replace(ot, "$1"),
                    e,
                    a < r && b(t.slice(a, r)),
                    r < i && b((t = t.slice(r))),
                    r < i && l(t)
                  );
                }
                f.push(e);
              }
            return d(f);
          }
          function m(t, e) {
            var i = e.length > 0,
              o = t.length > 0,
              u = function (r, u, a, c, s) {
                var f,
                  l,
                  h,
                  d = 0,
                  p = "0",
                  g = r && [],
                  b = [],
                  m = C,
                  y = r || (o && O.find.TAG("*", s)),
                  _ = (q += null == m ? 1 : Math.random() || 0.1),
                  x = y.length;
                for (
                  s && (C = u === N || u || s);
                  p !== x && null != (f = y[p]);
                  p++
                ) {
                  if (o && f) {
                    for (
                      l = 0, u || f.ownerDocument === N || (M(f), (a = !k));
                      (h = t[l++]);

                    )
                      if (h(f, u || N, a)) {
                        c.push(f);
                        break;
                      }
                    s && (q = _);
                  }
                  i && ((f = !h && f) && d--, r && g.push(f));
                }
                if (((d += p), i && p !== d)) {
                  for (l = 0; (h = e[l++]); ) h(g, b, u, a);
                  if (r) {
                    if (d > 0) for (; p--; ) g[p] || b[p] || (b[p] = X.call(c));
                    b = v(b);
                  }
                  Q.apply(c, b),
                    s &&
                      !r &&
                      b.length > 0 &&
                      d + e.length > 1 &&
                      n.uniqueSort(c);
                }
                return s && ((q = _), (C = m)), g;
              };
            return i ? r(u) : u;
          }
          var y,
            _,
            O,
            x,
            w,
            j,
            T,
            E,
            C,
            A,
            S,
            M,
            N,
            D,
            k,
            I,
            L,
            P,
            R,
            H = "sizzle" + 1 * new Date(),
            F = t.document,
            q = 0,
            U = 0,
            W = e(),
            B = e(),
            z = e(),
            V = function (t, n) {
              return t === n && (S = !0), 0;
            },
            Y = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            K = G.push,
            Q = G.push,
            $ = G.slice,
            J = function (t, n) {
              for (var e = 0, r = t.length; e < r; e++)
                if (t[e] === n) return e;
              return -1;
            },
            Z =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            et =
              "\\[" +
              tt +
              "*(" +
              nt +
              ")(?:" +
              tt +
              "*([*^$|!~]?=)" +
              tt +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              nt +
              "))|)" +
              tt +
              "*\\]",
            rt =
              ":(" +
              nt +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              et +
              ")*)|.*)\\)|)",
            it = new RegExp(tt + "+", "g"),
            ot = new RegExp(
              "^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$",
              "g"
            ),
            ut = new RegExp("^" + tt + "*," + tt + "*"),
            at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            ct = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            st = new RegExp(rt),
            ft = new RegExp("^" + nt + "$"),
            lt = {
              ID: new RegExp("^#(" + nt + ")"),
              CLASS: new RegExp("^\\.(" + nt + ")"),
              TAG: new RegExp("^(" + nt + "|[*])"),
              ATTR: new RegExp("^" + et),
              PSEUDO: new RegExp("^" + rt),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  tt +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  tt +
                  "*(?:([+-]|)" +
                  tt +
                  "*(\\d+)|))" +
                  tt +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + Z + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  tt +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  tt +
                  "*((?:-\\d)?\\d*)" +
                  tt +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            ht = /^(?:input|select|textarea|button)$/i,
            dt = /^h\d$/i,
            pt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            gt = /[+~]/,
            bt = new RegExp(
              "\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)",
              "ig"
            ),
            mt = function (t, n, e) {
              var r = "0x" + n - 65536;
              return r !== r || e
                ? n
                : r < 0
                ? String.fromCharCode(r + 65536)
                : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            yt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _t = function (t, n) {
              return n
                ? "\0" === t
                  ? "�"
                  : t.slice(0, -1) +
                    "\\" +
                    t.charCodeAt(t.length - 1).toString(16) +
                    " "
                : "\\" + t;
            },
            Ot = function () {
              M();
            },
            xt = h(
              function (t) {
                return !0 === t.disabled && ("form" in t || "label" in t);
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            Q.apply((G = $.call(F.childNodes)), F.childNodes),
              G[F.childNodes.length].nodeType;
          } catch (t) {
            Q = {
              apply: G.length
                ? function (t, n) {
                    K.apply(t, $.call(n));
                  }
                : function (t, n) {
                    for (var e = t.length, r = 0; (t[e++] = n[r++]); );
                    t.length = e - 1;
                  },
            };
          }
          (_ = n.support = {}),
            (w = n.isXML = function (t) {
              var n = t && (t.ownerDocument || t).documentElement;
              return !!n && "HTML" !== n.nodeName;
            }),
            (M = n.setDocument = function (t) {
              var n,
                e,
                r = t ? t.ownerDocument || t : F;
              return r !== N && 9 === r.nodeType && r.documentElement
                ? ((N = r),
                  (D = N.documentElement),
                  (k = !w(N)),
                  F !== N &&
                    (e = N.defaultView) &&
                    e.top !== e &&
                    (e.addEventListener
                      ? e.addEventListener("unload", Ot, !1)
                      : e.attachEvent && e.attachEvent("onunload", Ot)),
                  (_.attributes = i(function (t) {
                    return (t.className = "i"), !t.getAttribute("className");
                  })),
                  (_.getElementsByTagName = i(function (t) {
                    return (
                      t.appendChild(N.createComment("")),
                      !t.getElementsByTagName("*").length
                    );
                  })),
                  (_.getElementsByClassName = pt.test(
                    N.getElementsByClassName
                  )),
                  (_.getById = i(function (t) {
                    return (
                      (D.appendChild(t).id = H),
                      !N.getElementsByName || !N.getElementsByName(H).length
                    );
                  })),
                  _.getById
                    ? ((O.filter.ID = function (t) {
                        var n = t.replace(bt, mt);
                        return function (t) {
                          return t.getAttribute("id") === n;
                        };
                      }),
                      (O.find.ID = function (t, n) {
                        if (void 0 !== n.getElementById && k) {
                          var e = n.getElementById(t);
                          return e ? [e] : [];
                        }
                      }))
                    : ((O.filter.ID = function (t) {
                        var n = t.replace(bt, mt);
                        return function (t) {
                          var e =
                            void 0 !== t.getAttributeNode &&
                            t.getAttributeNode("id");
                          return e && e.value === n;
                        };
                      }),
                      (O.find.ID = function (t, n) {
                        if (void 0 !== n.getElementById && k) {
                          var e,
                            r,
                            i,
                            o = n.getElementById(t);
                          if (o) {
                            if ((e = o.getAttributeNode("id")) && e.value === t)
                              return [o];
                            for (
                              i = n.getElementsByName(t), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (e = o.getAttributeNode("id")) &&
                                e.value === t
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (O.find.TAG = _.getElementsByTagName
                    ? function (t, n) {
                        return void 0 !== n.getElementsByTagName
                          ? n.getElementsByTagName(t)
                          : _.qsa
                          ? n.querySelectorAll(t)
                          : void 0;
                      }
                    : function (t, n) {
                        var e,
                          r = [],
                          i = 0,
                          o = n.getElementsByTagName(t);
                        if ("*" === t) {
                          for (; (e = o[i++]); ) 1 === e.nodeType && r.push(e);
                          return r;
                        }
                        return o;
                      }),
                  (O.find.CLASS =
                    _.getElementsByClassName &&
                    function (t, n) {
                      if (void 0 !== n.getElementsByClassName && k)
                        return n.getElementsByClassName(t);
                    }),
                  (L = []),
                  (I = []),
                  (_.qsa = pt.test(N.querySelectorAll)) &&
                    (i(function (t) {
                      (D.appendChild(t).innerHTML =
                        "<a id='" +
                        H +
                        "'></a><select id='" +
                        H +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        t.querySelectorAll("[msallowcapture^='']").length &&
                          I.push("[*^$]=" + tt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length ||
                          I.push("\\[" + tt + "*(?:value|" + Z + ")"),
                        t.querySelectorAll("[id~=" + H + "-]").length ||
                          I.push("~="),
                        t.querySelectorAll(":checked").length ||
                          I.push(":checked"),
                        t.querySelectorAll("a#" + H + "+*").length ||
                          I.push(".#.+[+~]");
                    }),
                    i(function (t) {
                      t.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var n = N.createElement("input");
                      n.setAttribute("type", "hidden"),
                        t.appendChild(n).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length &&
                          I.push("name" + tt + "*[*^$|!~]?="),
                        2 !== t.querySelectorAll(":enabled").length &&
                          I.push(":enabled", ":disabled"),
                        (D.appendChild(t).disabled = !0),
                        2 !== t.querySelectorAll(":disabled").length &&
                          I.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        I.push(",.*:");
                    })),
                  (_.matchesSelector = pt.test(
                    (P =
                      D.matches ||
                      D.webkitMatchesSelector ||
                      D.mozMatchesSelector ||
                      D.oMatchesSelector ||
                      D.msMatchesSelector)
                  )) &&
                    i(function (t) {
                      (_.disconnectedMatch = P.call(t, "*")),
                        P.call(t, "[s!='']:x"),
                        L.push("!=", rt);
                    }),
                  (I = I.length && new RegExp(I.join("|"))),
                  (L = L.length && new RegExp(L.join("|"))),
                  (n = pt.test(D.compareDocumentPosition)),
                  (R =
                    n || pt.test(D.contains)
                      ? function (t, n) {
                          var e = 9 === t.nodeType ? t.documentElement : t,
                            r = n && n.parentNode;
                          return (
                            t === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(e.contains
                                ? e.contains(r)
                                : t.compareDocumentPosition &&
                                  16 & t.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (t, n) {
                          if (n)
                            for (; (n = n.parentNode); ) if (n === t) return !0;
                          return !1;
                        }),
                  (V = n
                    ? function (t, n) {
                        if (t === n) return (S = !0), 0;
                        var e =
                          !t.compareDocumentPosition -
                          !n.compareDocumentPosition;
                        return (
                          e ||
                          ((e =
                            (t.ownerDocument || t) === (n.ownerDocument || n)
                              ? t.compareDocumentPosition(n)
                              : 1),
                          1 & e ||
                          (!_.sortDetached &&
                            n.compareDocumentPosition(t) === e)
                            ? t === N || (t.ownerDocument === F && R(F, t))
                              ? -1
                              : n === N || (n.ownerDocument === F && R(F, n))
                              ? 1
                              : A
                              ? J(A, t) - J(A, n)
                              : 0
                            : 4 & e
                            ? -1
                            : 1)
                        );
                      }
                    : function (t, n) {
                        if (t === n) return (S = !0), 0;
                        var e,
                          r = 0,
                          i = t.parentNode,
                          o = n.parentNode,
                          a = [t],
                          c = [n];
                        if (!i || !o)
                          return t === N
                            ? -1
                            : n === N
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : A
                            ? J(A, t) - J(A, n)
                            : 0;
                        if (i === o) return u(t, n);
                        for (e = t; (e = e.parentNode); ) a.unshift(e);
                        for (e = n; (e = e.parentNode); ) c.unshift(e);
                        for (; a[r] === c[r]; ) r++;
                        return r
                          ? u(a[r], c[r])
                          : a[r] === F
                          ? -1
                          : c[r] === F
                          ? 1
                          : 0;
                      }),
                  N)
                : N;
            }),
            (n.matches = function (t, e) {
              return n(t, null, null, e);
            }),
            (n.matchesSelector = function (t, e) {
              if (
                ((t.ownerDocument || t) !== N && M(t),
                (e = e.replace(ct, "='$1']")),
                _.matchesSelector &&
                  k &&
                  !z[e + " "] &&
                  (!L || !L.test(e)) &&
                  (!I || !I.test(e)))
              )
                try {
                  var r = P.call(t, e);
                  if (
                    r ||
                    _.disconnectedMatch ||
                    (t.document && 11 !== t.document.nodeType)
                  )
                    return r;
                } catch (t) {}
              return n(e, N, null, [t]).length > 0;
            }),
            (n.contains = function (t, n) {
              return (t.ownerDocument || t) !== N && M(t), R(t, n);
            }),
            (n.attr = function (t, n) {
              (t.ownerDocument || t) !== N && M(t);
              var e = O.attrHandle[n.toLowerCase()],
                r =
                  e && Y.call(O.attrHandle, n.toLowerCase())
                    ? e(t, n, !k)
                    : void 0;
              return void 0 !== r
                ? r
                : _.attributes || !k
                ? t.getAttribute(n)
                : (r = t.getAttributeNode(n)) && r.specified
                ? r.value
                : null;
            }),
            (n.escape = function (t) {
              return (t + "").replace(yt, _t);
            }),
            (n.error = function (t) {
              throw new Error("Syntax error, unrecognized expression: " + t);
            }),
            (n.uniqueSort = function (t) {
              var n,
                e = [],
                r = 0,
                i = 0;
              if (
                ((S = !_.detectDuplicates),
                (A = !_.sortStable && t.slice(0)),
                t.sort(V),
                S)
              ) {
                for (; (n = t[i++]); ) n === t[i] && (r = e.push(i));
                for (; r--; ) t.splice(e[r], 1);
              }
              return (A = null), t;
            }),
            (x = n.getText = function (t) {
              var n,
                e = "",
                r = 0,
                i = t.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof t.textContent) return t.textContent;
                  for (t = t.firstChild; t; t = t.nextSibling) e += x(t);
                } else if (3 === i || 4 === i) return t.nodeValue;
              } else for (; (n = t[r++]); ) e += x(n);
              return e;
            }),
            (O = n.selectors = {
              cacheLength: 50,
              createPseudo: r,
              match: lt,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (t) {
                  return (
                    (t[1] = t[1].replace(bt, mt)),
                    (t[3] = (t[3] || t[4] || t[5] || "").replace(bt, mt)),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                  );
                },
                CHILD: function (t) {
                  return (
                    (t[1] = t[1].toLowerCase()),
                    "nth" === t[1].slice(0, 3)
                      ? (t[3] || n.error(t[0]),
                        (t[4] = +(t[4]
                          ? t[5] + (t[6] || 1)
                          : 2 * ("even" === t[3] || "odd" === t[3]))),
                        (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                      : t[3] && n.error(t[0]),
                    t
                  );
                },
                PSEUDO: function (t) {
                  var n,
                    e = !t[6] && t[2];
                  return lt.CHILD.test(t[0])
                    ? null
                    : (t[3]
                        ? (t[2] = t[4] || t[5] || "")
                        : e &&
                          st.test(e) &&
                          (n = j(e, !0)) &&
                          (n = e.indexOf(")", e.length - n) - e.length) &&
                          ((t[0] = t[0].slice(0, n)), (t[2] = e.slice(0, n))),
                      t.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  var n = t.replace(bt, mt).toLowerCase();
                  return "*" === t
                    ? function () {
                        return !0;
                      }
                    : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === n;
                      };
                },
                CLASS: function (t) {
                  var n = W[t + " "];
                  return (
                    n ||
                    ((n = new RegExp(
                      "(^|" + tt + ")" + t + "(" + tt + "|$)"
                    )) &&
                      W(t, function (t) {
                        return n.test(
                          ("string" == typeof t.className && t.className) ||
                            (void 0 !== t.getAttribute &&
                              t.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (t, e, r) {
                  return function (i) {
                    var o = n.attr(i, t);
                    return null == o
                      ? "!=" === e
                      : !e ||
                          ((o += ""),
                          "=" === e
                            ? o === r
                            : "!=" === e
                            ? o !== r
                            : "^=" === e
                            ? r && 0 === o.indexOf(r)
                            : "*=" === e
                            ? r && o.indexOf(r) > -1
                            : "$=" === e
                            ? r && o.slice(-r.length) === r
                            : "~=" === e
                            ? (" " + o.replace(it, " ") + " ").indexOf(r) > -1
                            : "|=" === e &&
                              (o === r ||
                                o.slice(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (t, n, e, r, i) {
                  var o = "nth" !== t.slice(0, 3),
                    u = "last" !== t.slice(-4),
                    a = "of-type" === n;
                  return 1 === r && 0 === i
                    ? function (t) {
                        return !!t.parentNode;
                      }
                    : function (n, e, c) {
                        var s,
                          f,
                          l,
                          h,
                          d,
                          p,
                          v = o !== u ? "nextSibling" : "previousSibling",
                          g = n.parentNode,
                          b = a && n.nodeName.toLowerCase(),
                          m = !c && !a,
                          y = !1;
                        if (g) {
                          if (o) {
                            for (; v; ) {
                              for (h = n; (h = h[v]); )
                                if (
                                  a
                                    ? h.nodeName.toLowerCase() === b
                                    : 1 === h.nodeType
                                )
                                  return !1;
                              p = v = "only" === t && !p && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((p = [u ? g.firstChild : g.lastChild]), u && m)
                          ) {
                            for (
                              h = g,
                                l = h[H] || (h[H] = {}),
                                f = l[h.uniqueID] || (l[h.uniqueID] = {}),
                                s = f[t] || [],
                                d = s[0] === q && s[1],
                                y = d && s[2],
                                h = d && g.childNodes[d];
                              (h =
                                (++d && h && h[v]) || (y = d = 0) || p.pop());

                            )
                              if (1 === h.nodeType && ++y && h === n) {
                                f[t] = [q, d, y];
                                break;
                              }
                          } else if (
                            (m &&
                              ((h = n),
                              (l = h[H] || (h[H] = {})),
                              (f = l[h.uniqueID] || (l[h.uniqueID] = {})),
                              (s = f[t] || []),
                              (d = s[0] === q && s[1]),
                              (y = d)),
                            !1 === y)
                          )
                            for (
                              ;
                              (h =
                                (++d && h && h[v]) || (y = d = 0) || p.pop()) &&
                              ((a
                                ? h.nodeName.toLowerCase() !== b
                                : 1 !== h.nodeType) ||
                                !++y ||
                                (m &&
                                  ((l = h[H] || (h[H] = {})),
                                  (f = l[h.uniqueID] || (l[h.uniqueID] = {})),
                                  (f[t] = [q, y])),
                                h !== n));

                            );
                          return (y -= i) === r || (y % r == 0 && y / r >= 0);
                        }
                      };
                },
                PSEUDO: function (t, e) {
                  var i,
                    o =
                      O.pseudos[t] ||
                      O.setFilters[t.toLowerCase()] ||
                      n.error("unsupported pseudo: " + t);
                  return o[H]
                    ? o(e)
                    : o.length > 1
                    ? ((i = [t, t, "", e]),
                      O.setFilters.hasOwnProperty(t.toLowerCase())
                        ? r(function (t, n) {
                            for (var r, i = o(t, e), u = i.length; u--; )
                              (r = J(t, i[u])), (t[r] = !(n[r] = i[u]));
                          })
                        : function (t) {
                            return o(t, 0, i);
                          })
                    : o;
                },
              },
              pseudos: {
                not: r(function (t) {
                  var n = [],
                    e = [],
                    i = T(t.replace(ot, "$1"));
                  return i[H]
                    ? r(function (t, n, e, r) {
                        for (var o, u = i(t, null, r, []), a = t.length; a--; )
                          (o = u[a]) && (t[a] = !(n[a] = o));
                      })
                    : function (t, r, o) {
                        return (
                          (n[0] = t), i(n, null, o, e), (n[0] = null), !e.pop()
                        );
                      };
                }),
                has: r(function (t) {
                  return function (e) {
                    return n(t, e).length > 0;
                  };
                }),
                contains: r(function (t) {
                  return (
                    (t = t.replace(bt, mt)),
                    function (n) {
                      return (
                        (n.textContent || n.innerText || x(n)).indexOf(t) > -1
                      );
                    }
                  );
                }),
                lang: r(function (t) {
                  return (
                    ft.test(t || "") || n.error("unsupported lang: " + t),
                    (t = t.replace(bt, mt).toLowerCase()),
                    function (n) {
                      var e;
                      do {
                        if (
                          (e = k
                            ? n.lang
                            : n.getAttribute("xml:lang") ||
                              n.getAttribute("lang"))
                        )
                          return (
                            (e = e.toLowerCase()) === t ||
                            0 === e.indexOf(t + "-")
                          );
                      } while ((n = n.parentNode) && 1 === n.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (n) {
                  var e = t.location && t.location.hash;
                  return e && e.slice(1) === n.id;
                },
                root: function (t) {
                  return t === D;
                },
                focus: function (t) {
                  return (
                    t === N.activeElement &&
                    (!N.hasFocus || N.hasFocus()) &&
                    !!(t.type || t.href || ~t.tabIndex)
                  );
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function (t) {
                  var n = t.nodeName.toLowerCase();
                  return (
                    ("input" === n && !!t.checked) ||
                    ("option" === n && !!t.selected)
                  );
                },
                selected: function (t) {
                  return (
                    t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                  );
                },
                empty: function (t) {
                  for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (t) {
                  return !O.pseudos.empty(t);
                },
                header: function (t) {
                  return dt.test(t.nodeName);
                },
                input: function (t) {
                  return ht.test(t.nodeName);
                },
                button: function (t) {
                  var n = t.nodeName.toLowerCase();
                  return (
                    ("input" === n && "button" === t.type) || "button" === n
                  );
                },
                text: function (t) {
                  var n;
                  return (
                    "input" === t.nodeName.toLowerCase() &&
                    "text" === t.type &&
                    (null == (n = t.getAttribute("type")) ||
                      "text" === n.toLowerCase())
                  );
                },
                first: c(function () {
                  return [0];
                }),
                last: c(function (t, n) {
                  return [n - 1];
                }),
                eq: c(function (t, n, e) {
                  return [e < 0 ? e + n : e];
                }),
                even: c(function (t, n) {
                  for (var e = 0; e < n; e += 2) t.push(e);
                  return t;
                }),
                odd: c(function (t, n) {
                  for (var e = 1; e < n; e += 2) t.push(e);
                  return t;
                }),
                lt: c(function (t, n, e) {
                  for (var r = e < 0 ? e + n : e; --r >= 0; ) t.push(r);
                  return t;
                }),
                gt: c(function (t, n, e) {
                  for (var r = e < 0 ? e + n : e; ++r < n; ) t.push(r);
                  return t;
                }),
              },
            }),
            (O.pseudos.nth = O.pseudos.eq);
          for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0,
          })
            O.pseudos[y] = (function (t) {
              return function (n) {
                return "input" === n.nodeName.toLowerCase() && n.type === t;
              };
            })(y);
          for (y in { submit: !0, reset: !0 })
            O.pseudos[y] = (function (t) {
              return function (n) {
                var e = n.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && n.type === t;
              };
            })(y);
          return (
            (f.prototype = O.filters = O.pseudos),
            (O.setFilters = new f()),
            (j = n.tokenize = function (t, e) {
              var r,
                i,
                o,
                u,
                a,
                c,
                s,
                f = B[t + " "];
              if (f) return e ? 0 : f.slice(0);
              for (a = t, c = [], s = O.preFilter; a; ) {
                (r && !(i = ut.exec(a))) ||
                  (i && (a = a.slice(i[0].length) || a), c.push((o = []))),
                  (r = !1),
                  (i = at.exec(a)) &&
                    ((r = i.shift()),
                    o.push({ value: r, type: i[0].replace(ot, " ") }),
                    (a = a.slice(r.length)));
                for (u in O.filter)
                  !(i = lt[u].exec(a)) ||
                    (s[u] && !(i = s[u](i))) ||
                    ((r = i.shift()),
                    o.push({ value: r, type: u, matches: i }),
                    (a = a.slice(r.length)));
                if (!r) break;
              }
              return e ? a.length : a ? n.error(t) : B(t, c).slice(0);
            }),
            (T = n.compile = function (t, n) {
              var e,
                r = [],
                i = [],
                o = z[t + " "];
              if (!o) {
                for (n || (n = j(t)), e = n.length; e--; )
                  (o = b(n[e])), o[H] ? r.push(o) : i.push(o);
                (o = z(t, m(i, r))), (o.selector = t);
              }
              return o;
            }),
            (E = n.select = function (t, n, e, r) {
              var i,
                o,
                u,
                a,
                c,
                f = "function" == typeof t && t,
                h = !r && j((t = f.selector || t));
              if (((e = e || []), 1 === h.length)) {
                if (
                  ((o = h[0] = h[0].slice(0)),
                  o.length > 2 &&
                    "ID" === (u = o[0]).type &&
                    9 === n.nodeType &&
                    k &&
                    O.relative[o[1].type])
                ) {
                  if (
                    !(n = (O.find.ID(u.matches[0].replace(bt, mt), n) || [])[0])
                  )
                    return e;
                  f && (n = n.parentNode),
                    (t = t.slice(o.shift().value.length));
                }
                for (
                  i = lt.needsContext.test(t) ? 0 : o.length;
                  i-- && ((u = o[i]), !O.relative[(a = u.type)]);

                )
                  if (
                    (c = O.find[a]) &&
                    (r = c(
                      u.matches[0].replace(bt, mt),
                      (gt.test(o[0].type) && s(n.parentNode)) || n
                    ))
                  ) {
                    if ((o.splice(i, 1), !(t = r.length && l(o))))
                      return Q.apply(e, r), e;
                    break;
                  }
              }
              return (
                (f || T(t, h))(
                  r,
                  n,
                  !k,
                  e,
                  !n || (gt.test(t) && s(n.parentNode)) || n
                ),
                e
              );
            }),
            (_.sortStable = H.split("").sort(V).join("") === H),
            (_.detectDuplicates = !!S),
            M(),
            (_.sortDetached = i(function (t) {
              return 1 & t.compareDocumentPosition(N.createElement("fieldset"));
            })),
            i(function (t) {
              return (
                (t.innerHTML = "<a href='#'></a>"),
                "#" === t.firstChild.getAttribute("href")
              );
            }) ||
              o("type|href|height|width", function (t, n, e) {
                if (!e)
                  return t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
              }),
            (_.attributes &&
              i(function (t) {
                return (
                  (t.innerHTML = "<input/>"),
                  t.firstChild.setAttribute("value", ""),
                  "" === t.firstChild.getAttribute("value")
                );
              })) ||
              o("value", function (t, n, e) {
                if (!e && "input" === t.nodeName.toLowerCase())
                  return t.defaultValue;
              }),
            i(function (t) {
              return null == t.getAttribute("disabled");
            }) ||
              o(Z, function (t, n, e) {
                var r;
                if (!e)
                  return !0 === t[n]
                    ? n.toLowerCase()
                    : (r = t.getAttributeNode(n)) && r.specified
                    ? r.value
                    : null;
              }),
            n
          );
        })(e);
      (Tt.find = Ct),
        (Tt.expr = Ct.selectors),
        (Tt.expr[":"] = Tt.expr.pseudos),
        (Tt.uniqueSort = Tt.unique = Ct.uniqueSort),
        (Tt.text = Ct.getText),
        (Tt.isXMLDoc = Ct.isXML),
        (Tt.contains = Ct.contains),
        (Tt.escapeSelector = Ct.escape);
      var At = function (t, n, e) {
          for (var r = [], i = void 0 !== e; (t = t[n]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
              if (i && Tt(t).is(e)) break;
              r.push(t);
            }
          return r;
        },
        St = function (t, n) {
          for (var e = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== n && e.push(t);
          return e;
        },
        Mt = Tt.expr.match.needsContext,
        Nt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      (Tt.filter = function (t, n, e) {
        var r = n[0];
        return (
          e && (t = ":not(" + t + ")"),
          1 === n.length && 1 === r.nodeType
            ? Tt.find.matchesSelector(r, t)
              ? [r]
              : []
            : Tt.find.matches(
                t,
                Tt.grep(n, function (t) {
                  return 1 === t.nodeType;
                })
              )
        );
      }),
        Tt.fn.extend({
          find: function (t) {
            var n,
              e,
              r = this.length,
              i = this;
            if ("string" != typeof t)
              return this.pushStack(
                Tt(t).filter(function () {
                  for (n = 0; n < r; n++)
                    if (Tt.contains(i[n], this)) return !0;
                })
              );
            for (e = this.pushStack([]), n = 0; n < r; n++) Tt.find(t, i[n], e);
            return r > 1 ? Tt.uniqueSort(e) : e;
          },
          filter: function (t) {
            return this.pushStack(f(this, t || [], !1));
          },
          not: function (t) {
            return this.pushStack(f(this, t || [], !0));
          },
          is: function (t) {
            return !!f(
              this,
              "string" == typeof t && Mt.test(t) ? Tt(t) : t || [],
              !1
            ).length;
          },
        });
      var Dt,
        kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((Tt.fn.init = function (t, n, e) {
        var r, i;
        if (!t) return this;
        if (((e = e || Dt), "string" == typeof t)) {
          if (
            !(r =
              "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
                ? [null, t, null]
                : kt.exec(t)) ||
            (!r[1] && n)
          )
            return !n || n.jquery
              ? (n || e).find(t)
              : this.constructor(n).find(t);
          if (r[1]) {
            if (
              ((n = n instanceof Tt ? n[0] : n),
              Tt.merge(
                this,
                Tt.parseHTML(
                  r[1],
                  n && n.nodeType ? n.ownerDocument || n : ft,
                  !0
                )
              ),
              Nt.test(r[1]) && Tt.isPlainObject(n))
            )
              for (r in n) xt(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
            return this;
          }
          return (
            (i = ft.getElementById(r[2])),
            i && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return t.nodeType
          ? ((this[0] = t), (this.length = 1), this)
          : xt(t)
          ? void 0 !== e.ready
            ? e.ready(t)
            : t(Tt)
          : Tt.makeArray(t, this);
      }).prototype = Tt.fn),
        (Dt = Tt(ft));
      var It = /^(?:parents|prev(?:Until|All))/,
        Lt = { children: !0, contents: !0, next: !0, prev: !0 };
      Tt.fn.extend({
        has: function (t) {
          var n = Tt(t, this),
            e = n.length;
          return this.filter(function () {
            for (var t = 0; t < e; t++) if (Tt.contains(this, n[t])) return !0;
          });
        },
        closest: function (t, n) {
          var e,
            r = 0,
            i = this.length,
            o = [],
            u = "string" != typeof t && Tt(t);
          if (!Mt.test(t))
            for (; r < i; r++)
              for (e = this[r]; e && e !== n; e = e.parentNode)
                if (
                  e.nodeType < 11 &&
                  (u
                    ? u.index(e) > -1
                    : 1 === e.nodeType && Tt.find.matchesSelector(e, t))
                ) {
                  o.push(e);
                  break;
                }
          return this.pushStack(o.length > 1 ? Tt.uniqueSort(o) : o);
        },
        index: function (t) {
          return t
            ? "string" == typeof t
              ? vt.call(Tt(t), this[0])
              : vt.call(this, t.jquery ? t[0] : t)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (t, n) {
          return this.pushStack(Tt.uniqueSort(Tt.merge(this.get(), Tt(t, n))));
        },
        addBack: function (t) {
          return this.add(
            null == t ? this.prevObject : this.prevObject.filter(t)
          );
        },
      }),
        Tt.each(
          {
            parent: function (t) {
              var n = t.parentNode;
              return n && 11 !== n.nodeType ? n : null;
            },
            parents: function (t) {
              return At(t, "parentNode");
            },
            parentsUntil: function (t, n, e) {
              return At(t, "parentNode", e);
            },
            next: function (t) {
              return l(t, "nextSibling");
            },
            prev: function (t) {
              return l(t, "previousSibling");
            },
            nextAll: function (t) {
              return At(t, "nextSibling");
            },
            prevAll: function (t) {
              return At(t, "previousSibling");
            },
            nextUntil: function (t, n, e) {
              return At(t, "nextSibling", e);
            },
            prevUntil: function (t, n, e) {
              return At(t, "previousSibling", e);
            },
            siblings: function (t) {
              return St((t.parentNode || {}).firstChild, t);
            },
            children: function (t) {
              return St(t.firstChild);
            },
            contents: function (t) {
              return s(t, "iframe")
                ? t.contentDocument
                : (s(t, "template") && (t = t.content || t),
                  Tt.merge([], t.childNodes));
            },
          },
          function (t, n) {
            Tt.fn[t] = function (e, r) {
              var i = Tt.map(this, n, e);
              return (
                "Until" !== t.slice(-5) && (r = e),
                r && "string" == typeof r && (i = Tt.filter(r, i)),
                this.length > 1 &&
                  (Lt[t] || Tt.uniqueSort(i), It.test(t) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var Pt = /[^\x20\t\r\n\f]+/g;
      (Tt.Callbacks = function (t) {
        t = "string" == typeof t ? h(t) : Tt.extend({}, t);
        var n,
          e,
          r,
          i,
          o = [],
          u = [],
          c = -1,
          s = function () {
            for (i = i || t.once, r = n = !0; u.length; c = -1)
              for (e = u.shift(); ++c < o.length; )
                !1 === o[c].apply(e[0], e[1]) &&
                  t.stopOnFalse &&
                  ((c = o.length), (e = !1));
            t.memory || (e = !1), (n = !1), i && (o = e ? [] : "");
          },
          f = {
            add: function () {
              return (
                o &&
                  (e && !n && ((c = o.length - 1), u.push(e)),
                  (function n(e) {
                    Tt.each(e, function (e, r) {
                      xt(r)
                        ? (t.unique && f.has(r)) || o.push(r)
                        : r && r.length && "string" !== a(r) && n(r);
                    });
                  })(arguments),
                  e && !n && s()),
                this
              );
            },
            remove: function () {
              return (
                Tt.each(arguments, function (t, n) {
                  for (var e; (e = Tt.inArray(n, o, e)) > -1; )
                    o.splice(e, 1), e <= c && c--;
                }),
                this
              );
            },
            has: function (t) {
              return t ? Tt.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = u = []), (o = e = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = u = []), e || n || (o = e = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (t, e) {
              return (
                i ||
                  ((e = e || []),
                  (e = [t, e.slice ? e.slice() : e]),
                  u.push(e),
                  n || s()),
                this
              );
            },
            fire: function () {
              return f.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return f;
      }),
        Tt.extend({
          Deferred: function (t) {
            var n = [
                [
                  "notify",
                  "progress",
                  Tt.Callbacks("memory"),
                  Tt.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  Tt.Callbacks("once memory"),
                  Tt.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  Tt.Callbacks("once memory"),
                  Tt.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (t) {
                  return i.then(null, t);
                },
                pipe: function () {
                  var t = arguments;
                  return Tt.Deferred(function (e) {
                    Tt.each(n, function (n, r) {
                      var i = xt(t[r[4]]) && t[r[4]];
                      o[r[1]](function () {
                        var t = i && i.apply(this, arguments);
                        t && xt(t.promise)
                          ? t
                              .promise()
                              .progress(e.notify)
                              .done(e.resolve)
                              .fail(e.reject)
                          : e[r[0] + "With"](this, i ? [t] : arguments);
                      });
                    }),
                      (t = null);
                  }).promise();
                },
                then: function (t, r, i) {
                  function o(t, n, r, i) {
                    return function () {
                      var a = this,
                        c = arguments,
                        s = function () {
                          var e, s;
                          if (!(t < u)) {
                            if ((e = r.apply(a, c)) === n.promise())
                              throw new TypeError("Thenable self-resolution");
                            (s =
                              e &&
                              ("object" == typeof e ||
                                "function" == typeof e) &&
                              e.then),
                              xt(s)
                                ? i
                                  ? s.call(e, o(u, n, d, i), o(u, n, p, i))
                                  : (u++,
                                    s.call(
                                      e,
                                      o(u, n, d, i),
                                      o(u, n, p, i),
                                      o(u, n, d, n.notifyWith)
                                    ))
                                : (r !== d && ((a = void 0), (c = [e])),
                                  (i || n.resolveWith)(a, c));
                          }
                        },
                        f = i
                          ? s
                          : function () {
                              try {
                                s();
                              } catch (e) {
                                Tt.Deferred.exceptionHook &&
                                  Tt.Deferred.exceptionHook(e, f.stackTrace),
                                  t + 1 >= u &&
                                    (r !== p && ((a = void 0), (c = [e])),
                                    n.rejectWith(a, c));
                              }
                            };
                      t
                        ? f()
                        : (Tt.Deferred.getStackHook &&
                            (f.stackTrace = Tt.Deferred.getStackHook()),
                          e.setTimeout(f));
                    };
                  }
                  var u = 0;
                  return Tt.Deferred(function (e) {
                    n[0][3].add(o(0, e, xt(i) ? i : d, e.notifyWith)),
                      n[1][3].add(o(0, e, xt(t) ? t : d)),
                      n[2][3].add(o(0, e, xt(r) ? r : p));
                  }).promise();
                },
                promise: function (t) {
                  return null != t ? Tt.extend(t, i) : i;
                },
              },
              o = {};
            return (
              Tt.each(n, function (t, e) {
                var u = e[2],
                  a = e[5];
                (i[e[1]] = u.add),
                  a &&
                    u.add(
                      function () {
                        r = a;
                      },
                      n[3 - t][2].disable,
                      n[3 - t][3].disable,
                      n[0][2].lock,
                      n[0][3].lock
                    ),
                  u.add(e[3].fire),
                  (o[e[0]] = function () {
                    return (
                      o[e[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[e[0] + "With"] = u.fireWith);
              }),
              i.promise(o),
              t && t.call(o, o),
              o
            );
          },
          when: function (t) {
            var n = arguments.length,
              e = n,
              r = Array(e),
              i = ht.call(arguments),
              o = Tt.Deferred(),
              u = function (t) {
                return function (e) {
                  (r[t] = this),
                    (i[t] = arguments.length > 1 ? ht.call(arguments) : e),
                    --n || o.resolveWith(r, i);
                };
              };
            if (
              n <= 1 &&
              (v(t, o.done(u(e)).resolve, o.reject, !n),
              "pending" === o.state() || xt(i[e] && i[e].then))
            )
              return o.then();
            for (; e--; ) v(i[e], u(e), o.reject);
            return o.promise();
          },
        });
      var Rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (Tt.Deferred.exceptionHook = function (t, n) {
        e.console &&
          e.console.warn &&
          t &&
          Rt.test(t.name) &&
          e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
      }),
        (Tt.readyException = function (t) {
          e.setTimeout(function () {
            throw t;
          });
        });
      var Ht = Tt.Deferred();
      (Tt.fn.ready = function (t) {
        return (
          Ht.then(t).catch(function (t) {
            Tt.readyException(t);
          }),
          this
        );
      }),
        Tt.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (t) {
            (!0 === t ? --Tt.readyWait : Tt.isReady) ||
              ((Tt.isReady = !0),
              (!0 !== t && --Tt.readyWait > 0) || Ht.resolveWith(ft, [Tt]));
          },
        }),
        (Tt.ready.then = Ht.then),
        "complete" === ft.readyState ||
        ("loading" !== ft.readyState && !ft.documentElement.doScroll)
          ? e.setTimeout(Tt.ready)
          : (ft.addEventListener("DOMContentLoaded", g),
            e.addEventListener("load", g));
      var Ft = function (t, n, e, r, i, o, u) {
          var c = 0,
            s = t.length,
            f = null == e;
          if ("object" === a(e)) {
            i = !0;
            for (c in e) Ft(t, n, c, e[c], !0, o, u);
          } else if (
            void 0 !== r &&
            ((i = !0),
            xt(r) || (u = !0),
            f &&
              (u
                ? (n.call(t, r), (n = null))
                : ((f = n),
                  (n = function (t, n, e) {
                    return f.call(Tt(t), e);
                  }))),
            n)
          )
            for (; c < s; c++) n(t[c], e, u ? r : r.call(t[c], c, n(t[c], e)));
          return i ? t : f ? n.call(t) : s ? n(t[0], e) : o;
        },
        qt = /^-ms-/,
        Ut = /-([a-z])/g,
        Wt = function (t) {
          return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
        };
      (y.uid = 1),
        (y.prototype = {
          cache: function (t) {
            var n = t[this.expando];
            return (
              n ||
                ((n = {}),
                Wt(t) &&
                  (t.nodeType
                    ? (t[this.expando] = n)
                    : Object.defineProperty(t, this.expando, {
                        value: n,
                        configurable: !0,
                      }))),
              n
            );
          },
          set: function (t, n, e) {
            var r,
              i = this.cache(t);
            if ("string" == typeof n) i[m(n)] = e;
            else for (r in n) i[m(r)] = n[r];
            return i;
          },
          get: function (t, n) {
            return void 0 === n
              ? this.cache(t)
              : t[this.expando] && t[this.expando][m(n)];
          },
          access: function (t, n, e) {
            return void 0 === n || (n && "string" == typeof n && void 0 === e)
              ? this.get(t, n)
              : (this.set(t, n, e), void 0 !== e ? e : n);
          },
          remove: function (t, n) {
            var e,
              r = t[this.expando];
            if (void 0 !== r) {
              if (void 0 !== n) {
                Array.isArray(n)
                  ? (n = n.map(m))
                  : ((n = m(n)), (n = n in r ? [n] : n.match(Pt) || [])),
                  (e = n.length);
                for (; e--; ) delete r[n[e]];
              }
              (void 0 === n || Tt.isEmptyObject(r)) &&
                (t.nodeType
                  ? (t[this.expando] = void 0)
                  : delete t[this.expando]);
            }
          },
          hasData: function (t) {
            var n = t[this.expando];
            return void 0 !== n && !Tt.isEmptyObject(n);
          },
        });
      var Bt = new y(),
        zt = new y(),
        Vt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Yt = /[A-Z]/g;
      Tt.extend({
        hasData: function (t) {
          return zt.hasData(t) || Bt.hasData(t);
        },
        data: function (t, n, e) {
          return zt.access(t, n, e);
        },
        removeData: function (t, n) {
          zt.remove(t, n);
        },
        _data: function (t, n, e) {
          return Bt.access(t, n, e);
        },
        _removeData: function (t, n) {
          Bt.remove(t, n);
        },
      }),
        Tt.fn.extend({
          data: function (t, n) {
            var e,
              r,
              i,
              o = this[0],
              u = o && o.attributes;
            if (void 0 === t) {
              if (
                this.length &&
                ((i = zt.get(o)),
                1 === o.nodeType && !Bt.get(o, "hasDataAttrs"))
              ) {
                for (e = u.length; e--; )
                  u[e] &&
                    ((r = u[e].name),
                    0 === r.indexOf("data-") &&
                      ((r = m(r.slice(5))), O(o, r, i[r])));
                Bt.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof t
              ? this.each(function () {
                  zt.set(this, t);
                })
              : Ft(
                  this,
                  function (n) {
                    var e;
                    if (o && void 0 === n) {
                      if (void 0 !== (e = zt.get(o, t))) return e;
                      if (void 0 !== (e = O(o, t))) return e;
                    } else
                      this.each(function () {
                        zt.set(this, t, n);
                      });
                  },
                  null,
                  n,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (t) {
            return this.each(function () {
              zt.remove(this, t);
            });
          },
        }),
        Tt.extend({
          queue: function (t, n, e) {
            var r;
            if (t)
              return (
                (n = (n || "fx") + "queue"),
                (r = Bt.get(t, n)),
                e &&
                  (!r || Array.isArray(e)
                    ? (r = Bt.access(t, n, Tt.makeArray(e)))
                    : r.push(e)),
                r || []
              );
          },
          dequeue: function (t, n) {
            n = n || "fx";
            var e = Tt.queue(t, n),
              r = e.length,
              i = e.shift(),
              o = Tt._queueHooks(t, n),
              u = function () {
                Tt.dequeue(t, n);
              };
            "inprogress" === i && ((i = e.shift()), r--),
              i &&
                ("fx" === n && e.unshift("inprogress"),
                delete o.stop,
                i.call(t, u, o)),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (t, n) {
            var e = n + "queueHooks";
            return (
              Bt.get(t, e) ||
              Bt.access(t, e, {
                empty: Tt.Callbacks("once memory").add(function () {
                  Bt.remove(t, [n + "queue", e]);
                }),
              })
            );
          },
        }),
        Tt.fn.extend({
          queue: function (t, n) {
            var e = 2;
            return (
              "string" != typeof t && ((n = t), (t = "fx"), e--),
              arguments.length < e
                ? Tt.queue(this[0], t)
                : void 0 === n
                ? this
                : this.each(function () {
                    var e = Tt.queue(this, t, n);
                    Tt._queueHooks(this, t),
                      "fx" === t &&
                        "inprogress" !== e[0] &&
                        Tt.dequeue(this, t);
                  })
            );
          },
          dequeue: function (t) {
            return this.each(function () {
              Tt.dequeue(this, t);
            });
          },
          clearQueue: function (t) {
            return this.queue(t || "fx", []);
          },
          promise: function (t, n) {
            var e,
              r = 1,
              i = Tt.Deferred(),
              o = this,
              u = this.length,
              a = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof t && ((n = t), (t = void 0)), t = t || "fx";
              u--;

            )
              (e = Bt.get(o[u], t + "queueHooks")) &&
                e.empty &&
                (r++, e.empty.add(a));
            return a(), i.promise(n);
          },
        });
      var Gt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Xt = new RegExp("^(?:([+-])=|)(" + Gt + ")([a-z%]*)$", "i"),
        Kt = ["Top", "Right", "Bottom", "Left"],
        Qt = function (t, n) {
          return (
            (t = n || t),
            "none" === t.style.display ||
              ("" === t.style.display &&
                Tt.contains(t.ownerDocument, t) &&
                "none" === Tt.css(t, "display"))
          );
        },
        $t = function (t, n, e, r) {
          var i,
            o,
            u = {};
          for (o in n) (u[o] = t.style[o]), (t.style[o] = n[o]);
          i = e.apply(t, r || []);
          for (o in n) t.style[o] = u[o];
          return i;
        },
        Jt = {};
      Tt.fn.extend({
        show: function () {
          return j(this, !0);
        },
        hide: function () {
          return j(this);
        },
        toggle: function (t) {
          return "boolean" == typeof t
            ? t
              ? this.show()
              : this.hide()
            : this.each(function () {
                Qt(this) ? Tt(this).show() : Tt(this).hide();
              });
        },
      });
      var Zt = /^(?:checkbox|radio)$/i,
        tn = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        nn = /^$|^module$|\/(?:java|ecma)script/i,
        en = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      (en.optgroup = en.option),
        (en.tbody = en.tfoot = en.colgroup = en.caption = en.thead),
        (en.th = en.td);
      var rn = /<|&#?\w+;/;
      !(function () {
        var t = ft.createDocumentFragment(),
          n = t.appendChild(ft.createElement("div")),
          e = ft.createElement("input");
        e.setAttribute("type", "radio"),
          e.setAttribute("checked", "checked"),
          e.setAttribute("name", "t"),
          n.appendChild(e),
          (Ot.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (n.innerHTML = "<textarea>x</textarea>"),
          (Ot.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue);
      })();
      var on = ft.documentElement,
        un = /^key/,
        an = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        cn = /^([^.]*)(?:\.(.+)|)/;
      (Tt.event = {
        global: {},
        add: function (t, n, e, r, i) {
          var o,
            u,
            a,
            c,
            s,
            f,
            l,
            h,
            d,
            p,
            v,
            g = Bt.get(t);
          if (g)
            for (
              e.handler && ((o = e), (e = o.handler), (i = o.selector)),
                i && Tt.find.matchesSelector(on, i),
                e.guid || (e.guid = Tt.guid++),
                (c = g.events) || (c = g.events = {}),
                (u = g.handle) ||
                  (u = g.handle = function (n) {
                    return void 0 !== Tt && Tt.event.triggered !== n.type
                      ? Tt.event.dispatch.apply(t, arguments)
                      : void 0;
                  }),
                n = (n || "").match(Pt) || [""],
                s = n.length;
              s--;

            )
              (a = cn.exec(n[s]) || []),
                (d = v = a[1]),
                (p = (a[2] || "").split(".").sort()),
                d &&
                  ((l = Tt.event.special[d] || {}),
                  (d = (i ? l.delegateType : l.bindType) || d),
                  (l = Tt.event.special[d] || {}),
                  (f = Tt.extend(
                    {
                      type: d,
                      origType: v,
                      data: r,
                      handler: e,
                      guid: e.guid,
                      selector: i,
                      needsContext: i && Tt.expr.match.needsContext.test(i),
                      namespace: p.join("."),
                    },
                    o
                  )),
                  (h = c[d]) ||
                    ((h = c[d] = []),
                    (h.delegateCount = 0),
                    (l.setup && !1 !== l.setup.call(t, r, p, u)) ||
                      (t.addEventListener && t.addEventListener(d, u))),
                  l.add &&
                    (l.add.call(t, f),
                    f.handler.guid || (f.handler.guid = e.guid)),
                  i ? h.splice(h.delegateCount++, 0, f) : h.push(f),
                  (Tt.event.global[d] = !0));
        },
        remove: function (t, n, e, r, i) {
          var o,
            u,
            a,
            c,
            s,
            f,
            l,
            h,
            d,
            p,
            v,
            g = Bt.hasData(t) && Bt.get(t);
          if (g && (c = g.events)) {
            for (n = (n || "").match(Pt) || [""], s = n.length; s--; )
              if (
                ((a = cn.exec(n[s]) || []),
                (d = v = a[1]),
                (p = (a[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  l = Tt.event.special[d] || {},
                    d = (r ? l.delegateType : l.bindType) || d,
                    h = c[d] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    u = o = h.length;
                  o--;

                )
                  (f = h[o]),
                    (!i && v !== f.origType) ||
                      (e && e.guid !== f.guid) ||
                      (a && !a.test(f.namespace)) ||
                      (r && r !== f.selector && ("**" !== r || !f.selector)) ||
                      (h.splice(o, 1),
                      f.selector && h.delegateCount--,
                      l.remove && l.remove.call(t, f));
                u &&
                  !h.length &&
                  ((l.teardown && !1 !== l.teardown.call(t, p, g.handle)) ||
                    Tt.removeEvent(t, d, g.handle),
                  delete c[d]);
              } else for (d in c) Tt.event.remove(t, d + n[s], e, r, !0);
            Tt.isEmptyObject(c) && Bt.remove(t, "handle events");
          }
        },
        dispatch: function (t) {
          var n,
            e,
            r,
            i,
            o,
            u,
            a = Tt.event.fix(t),
            c = new Array(arguments.length),
            s = (Bt.get(this, "events") || {})[a.type] || [],
            f = Tt.event.special[a.type] || {};
          for (c[0] = a, n = 1; n < arguments.length; n++) c[n] = arguments[n];
          if (
            ((a.delegateTarget = this),
            !f.preDispatch || !1 !== f.preDispatch.call(this, a))
          ) {
            for (
              u = Tt.event.handlers.call(this, a, s), n = 0;
              (i = u[n++]) && !a.isPropagationStopped();

            )
              for (
                a.currentTarget = i.elem, e = 0;
                (o = i.handlers[e++]) && !a.isImmediatePropagationStopped();

              )
                (a.rnamespace && !a.rnamespace.test(o.namespace)) ||
                  ((a.handleObj = o),
                  (a.data = o.data),
                  void 0 !==
                    (r = (
                      (Tt.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, c)) &&
                    !1 === (a.result = r) &&
                    (a.preventDefault(), a.stopPropagation()));
            return f.postDispatch && f.postDispatch.call(this, a), a.result;
          }
        },
        handlers: function (t, n) {
          var e,
            r,
            i,
            o,
            u,
            a = [],
            c = n.delegateCount,
            s = t.target;
          if (c && s.nodeType && !("click" === t.type && t.button >= 1))
            for (; s !== this; s = s.parentNode || this)
              if (
                1 === s.nodeType &&
                ("click" !== t.type || !0 !== s.disabled)
              ) {
                for (o = [], u = {}, e = 0; e < c; e++)
                  (r = n[e]),
                    (i = r.selector + " "),
                    void 0 === u[i] &&
                      (u[i] = r.needsContext
                        ? Tt(i, this).index(s) > -1
                        : Tt.find(i, this, null, [s]).length),
                    u[i] && o.push(r);
                o.length && a.push({ elem: s, handlers: o });
              }
          return (
            (s = this),
            c < n.length && a.push({ elem: s, handlers: n.slice(c) }),
            a
          );
        },
        addProp: function (t, n) {
          Object.defineProperty(Tt.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: xt(n)
              ? function () {
                  if (this.originalEvent) return n(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[t];
                },
            set: function (n) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
            },
          });
        },
        fix: function (t) {
          return t[Tt.expando] ? t : new Tt.Event(t);
        },
        special: {
          load: { noBubble: !0 },
          focus: {
            trigger: function () {
              if (this !== M() && this.focus) return this.focus(), !1;
            },
            delegateType: "focusin",
          },
          blur: {
            trigger: function () {
              if (this === M() && this.blur) return this.blur(), !1;
            },
            delegateType: "focusout",
          },
          click: {
            trigger: function () {
              if ("checkbox" === this.type && this.click && s(this, "input"))
                return this.click(), !1;
            },
            _default: function (t) {
              return s(t.target, "a");
            },
          },
          beforeunload: {
            postDispatch: function (t) {
              void 0 !== t.result &&
                t.originalEvent &&
                (t.originalEvent.returnValue = t.result);
            },
          },
        },
      }),
        (Tt.removeEvent = function (t, n, e) {
          t.removeEventListener && t.removeEventListener(n, e);
        }),
        (Tt.Event = function (t, n) {
          if (!(this instanceof Tt.Event)) return new Tt.Event(t, n);
          t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && !1 === t.returnValue)
                  ? A
                  : S),
              (this.target =
                t.target && 3 === t.target.nodeType
                  ? t.target.parentNode
                  : t.target),
              (this.currentTarget = t.currentTarget),
              (this.relatedTarget = t.relatedTarget))
            : (this.type = t),
            n && Tt.extend(this, n),
            (this.timeStamp = (t && t.timeStamp) || Date.now()),
            (this[Tt.expando] = !0);
        }),
        (Tt.Event.prototype = {
          constructor: Tt.Event,
          isDefaultPrevented: S,
          isPropagationStopped: S,
          isImmediatePropagationStopped: S,
          isSimulated: !1,
          preventDefault: function () {
            var t = this.originalEvent;
            (this.isDefaultPrevented = A),
              t && !this.isSimulated && t.preventDefault();
          },
          stopPropagation: function () {
            var t = this.originalEvent;
            (this.isPropagationStopped = A),
              t && !this.isSimulated && t.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var t = this.originalEvent;
            (this.isImmediatePropagationStopped = A),
              t && !this.isSimulated && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        Tt.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (t) {
              var n = t.button;
              return null == t.which && un.test(t.type)
                ? null != t.charCode
                  ? t.charCode
                  : t.keyCode
                : !t.which && void 0 !== n && an.test(t.type)
                ? 1 & n
                  ? 1
                  : 2 & n
                  ? 3
                  : 4 & n
                  ? 2
                  : 0
                : t.which;
            },
          },
          Tt.event.addProp
        ),
        Tt.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (t, n) {
            Tt.event.special[t] = {
              delegateType: n,
              bindType: n,
              handle: function (t) {
                var e,
                  r = this,
                  i = t.relatedTarget,
                  o = t.handleObj;
                return (
                  (i && (i === r || Tt.contains(r, i))) ||
                    ((t.type = o.origType),
                    (e = o.handler.apply(this, arguments)),
                    (t.type = n)),
                  e
                );
              },
            };
          }
        ),
        Tt.fn.extend({
          on: function (t, n, e, r) {
            return N(this, t, n, e, r);
          },
          one: function (t, n, e, r) {
            return N(this, t, n, e, r, 1);
          },
          off: function (t, n, e) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
              return (
                (r = t.handleObj),
                Tt(t.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof t) {
              for (i in t) this.off(i, n, t[i]);
              return this;
            }
            return (
              (!1 !== n && "function" != typeof n) || ((e = n), (n = void 0)),
              !1 === e && (e = S),
              this.each(function () {
                Tt.event.remove(this, t, e, n);
              })
            );
          },
        });
      var sn = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        fn = /<script|<style|<link/i,
        ln = /checked\s*(?:[^=]|=\s*.checked.)/i,
        hn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      Tt.extend({
        htmlPrefilter: function (t) {
          return t.replace(sn, "<$1></$2>");
        },
        clone: function (t, n, e) {
          var r,
            i,
            o,
            u,
            a = t.cloneNode(!0),
            c = Tt.contains(t.ownerDocument, t);
          if (
            !(
              Ot.noCloneChecked ||
              (1 !== t.nodeType && 11 !== t.nodeType) ||
              Tt.isXMLDoc(t)
            )
          )
            for (u = T(a), o = T(t), r = 0, i = o.length; r < i; r++)
              P(o[r], u[r]);
          if (n)
            if (e)
              for (
                o = o || T(t), u = u || T(a), r = 0, i = o.length;
                r < i;
                r++
              )
                L(o[r], u[r]);
            else L(t, a);
          return (
            (u = T(a, "script")), u.length > 0 && E(u, !c && T(t, "script")), a
          );
        },
        cleanData: function (t) {
          for (
            var n, e, r, i = Tt.event.special, o = 0;
            void 0 !== (e = t[o]);
            o++
          )
            if (Wt(e)) {
              if ((n = e[Bt.expando])) {
                if (n.events)
                  for (r in n.events)
                    i[r]
                      ? Tt.event.remove(e, r)
                      : Tt.removeEvent(e, r, n.handle);
                e[Bt.expando] = void 0;
              }
              e[zt.expando] && (e[zt.expando] = void 0);
            }
        },
      }),
        Tt.fn.extend({
          detach: function (t) {
            return H(this, t, !0);
          },
          remove: function (t) {
            return H(this, t);
          },
          text: function (t) {
            return Ft(
              this,
              function (t) {
                return void 0 === t
                  ? Tt.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = t);
                    });
              },
              null,
              t,
              arguments.length
            );
          },
          append: function () {
            return R(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                D(this, t).appendChild(t);
              }
            });
          },
          prepend: function () {
            return R(this, arguments, function (t) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var n = D(this, t);
                n.insertBefore(t, n.firstChild);
              }
            });
          },
          before: function () {
            return R(this, arguments, function (t) {
              this.parentNode && this.parentNode.insertBefore(t, this);
            });
          },
          after: function () {
            return R(this, arguments, function (t) {
              this.parentNode &&
                this.parentNode.insertBefore(t, this.nextSibling);
            });
          },
          empty: function () {
            for (var t, n = 0; null != (t = this[n]); n++)
              1 === t.nodeType &&
                (Tt.cleanData(T(t, !1)), (t.textContent = ""));
            return this;
          },
          clone: function (t, n) {
            return (
              (t = null != t && t),
              (n = null == n ? t : n),
              this.map(function () {
                return Tt.clone(this, t, n);
              })
            );
          },
          html: function (t) {
            return Ft(
              this,
              function (t) {
                var n = this[0] || {},
                  e = 0,
                  r = this.length;
                if (void 0 === t && 1 === n.nodeType) return n.innerHTML;
                if (
                  "string" == typeof t &&
                  !fn.test(t) &&
                  !en[(tn.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = Tt.htmlPrefilter(t);
                  try {
                    for (; e < r; e++)
                      (n = this[e] || {}),
                        1 === n.nodeType &&
                          (Tt.cleanData(T(n, !1)), (n.innerHTML = t));
                    n = 0;
                  } catch (t) {}
                }
                n && this.empty().append(t);
              },
              null,
              t,
              arguments.length
            );
          },
          replaceWith: function () {
            var t = [];
            return R(
              this,
              arguments,
              function (n) {
                var e = this.parentNode;
                Tt.inArray(this, t) < 0 &&
                  (Tt.cleanData(T(this)), e && e.replaceChild(n, this));
              },
              t
            );
          },
        }),
        Tt.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (t, n) {
            Tt.fn[t] = function (t) {
              for (
                var e, r = [], i = Tt(t), o = i.length - 1, u = 0;
                u <= o;
                u++
              )
                (e = u === o ? this : this.clone(!0)),
                  Tt(i[u])[n](e),
                  pt.apply(r, e.get());
              return this.pushStack(r);
            };
          }
        );
      var dn = new RegExp("^(" + Gt + ")(?!px)[a-z%]+$", "i"),
        pn = function (t) {
          var n = t.ownerDocument.defaultView;
          return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        vn = new RegExp(Kt.join("|"), "i");
      !(function () {
        function t() {
          if (s) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (s.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              on.appendChild(c).appendChild(s);
            var t = e.getComputedStyle(s);
            (r = "1%" !== t.top),
              (a = 12 === n(t.marginLeft)),
              (s.style.right = "60%"),
              (u = 36 === n(t.right)),
              (i = 36 === n(t.width)),
              (s.style.position = "absolute"),
              (o = 36 === s.offsetWidth || "absolute"),
              on.removeChild(c),
              (s = null);
          }
        }
        function n(t) {
          return Math.round(parseFloat(t));
        }
        var r,
          i,
          o,
          u,
          a,
          c = ft.createElement("div"),
          s = ft.createElement("div");
        s.style &&
          ((s.style.backgroundClip = "content-box"),
          (s.cloneNode(!0).style.backgroundClip = ""),
          (Ot.clearCloneStyle = "content-box" === s.style.backgroundClip),
          Tt.extend(Ot, {
            boxSizingReliable: function () {
              return t(), i;
            },
            pixelBoxStyles: function () {
              return t(), u;
            },
            pixelPosition: function () {
              return t(), r;
            },
            reliableMarginLeft: function () {
              return t(), a;
            },
            scrollboxSize: function () {
              return t(), o;
            },
          }));
      })();
      var gn = /^(none|table(?!-c[ea]).+)/,
        bn = /^--/,
        mn = { position: "absolute", visibility: "hidden", display: "block" },
        yn = { letterSpacing: "0", fontWeight: "400" },
        _n = ["Webkit", "Moz", "ms"],
        On = ft.createElement("div").style;
      Tt.extend({
        cssHooks: {
          opacity: {
            get: function (t, n) {
              if (n) {
                var e = F(t, "opacity");
                return "" === e ? "1" : e;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (t, n, e, r) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var i,
              o,
              u,
              a = m(n),
              c = bn.test(n),
              s = t.style;
            if (
              (c || (n = W(a)),
              (u = Tt.cssHooks[n] || Tt.cssHooks[a]),
              void 0 === e)
            )
              return u && "get" in u && void 0 !== (i = u.get(t, !1, r))
                ? i
                : s[n];
            (o = typeof e),
              "string" === o &&
                (i = Xt.exec(e)) &&
                i[1] &&
                ((e = x(t, n, i)), (o = "number")),
              null != e &&
                e === e &&
                ("number" === o &&
                  (e += (i && i[3]) || (Tt.cssNumber[a] ? "" : "px")),
                Ot.clearCloneStyle ||
                  "" !== e ||
                  0 !== n.indexOf("background") ||
                  (s[n] = "inherit"),
                (u && "set" in u && void 0 === (e = u.set(t, e, r))) ||
                  (c ? s.setProperty(n, e) : (s[n] = e)));
          }
        },
        css: function (t, n, e, r) {
          var i,
            o,
            u,
            a = m(n);
          return (
            bn.test(n) || (n = W(a)),
            (u = Tt.cssHooks[n] || Tt.cssHooks[a]),
            u && "get" in u && (i = u.get(t, !0, e)),
            void 0 === i && (i = F(t, n, r)),
            "normal" === i && n in yn && (i = yn[n]),
            "" === e || e
              ? ((o = parseFloat(i)), !0 === e || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        Tt.each(["height", "width"], function (t, n) {
          Tt.cssHooks[n] = {
            get: function (t, e, r) {
              if (e)
                return !gn.test(Tt.css(t, "display")) ||
                  (t.getClientRects().length && t.getBoundingClientRect().width)
                  ? V(t, n, r)
                  : $t(t, mn, function () {
                      return V(t, n, r);
                    });
            },
            set: function (t, e, r) {
              var i,
                o = pn(t),
                u = "border-box" === Tt.css(t, "boxSizing", !1, o),
                a = r && z(t, n, r, u, o);
              return (
                u &&
                  Ot.scrollboxSize() === o.position &&
                  (a -= Math.ceil(
                    t["offset" + n[0].toUpperCase() + n.slice(1)] -
                      parseFloat(o[n]) -
                      z(t, n, "border", !1, o) -
                      0.5
                  )),
                a &&
                  (i = Xt.exec(e)) &&
                  "px" !== (i[3] || "px") &&
                  ((t.style[n] = e), (e = Tt.css(t, n))),
                B(t, e, a)
              );
            },
          };
        }),
        (Tt.cssHooks.marginLeft = q(Ot.reliableMarginLeft, function (t, n) {
          if (n)
            return (
              (parseFloat(F(t, "marginLeft")) ||
                t.getBoundingClientRect().left -
                  $t(t, { marginLeft: 0 }, function () {
                    return t.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        Tt.each({ margin: "", padding: "", border: "Width" }, function (t, n) {
          (Tt.cssHooks[t + n] = {
            expand: function (e) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof e ? e.split(" ") : [e];
                r < 4;
                r++
              )
                i[t + Kt[r] + n] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== t && (Tt.cssHooks[t + n].set = B);
        }),
        Tt.fn.extend({
          css: function (t, n) {
            return Ft(
              this,
              function (t, n, e) {
                var r,
                  i,
                  o = {},
                  u = 0;
                if (Array.isArray(n)) {
                  for (r = pn(t), i = n.length; u < i; u++)
                    o[n[u]] = Tt.css(t, n[u], !1, r);
                  return o;
                }
                return void 0 !== e ? Tt.style(t, n, e) : Tt.css(t, n);
              },
              t,
              n,
              arguments.length > 1
            );
          },
        }),
        (Tt.Tween = Y),
        (Y.prototype = {
          constructor: Y,
          init: function (t, n, e, r, i, o) {
            (this.elem = t),
              (this.prop = e),
              (this.easing = i || Tt.easing._default),
              (this.options = n),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (Tt.cssNumber[e] ? "" : "px"));
          },
          cur: function () {
            var t = Y.propHooks[this.prop];
            return t && t.get ? t.get(this) : Y.propHooks._default.get(this);
          },
          run: function (t) {
            var n,
              e = Y.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = n = Tt.easing[this.easing](
                    t,
                    this.options.duration * t,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = n = t),
              (this.now = (this.end - this.start) * n + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              e && e.set ? e.set(this) : Y.propHooks._default.set(this),
              this
            );
          },
        }),
        (Y.prototype.init.prototype = Y.prototype),
        (Y.propHooks = {
          _default: {
            get: function (t) {
              var n;
              return 1 !== t.elem.nodeType ||
                (null != t.elem[t.prop] && null == t.elem.style[t.prop])
                ? t.elem[t.prop]
                : ((n = Tt.css(t.elem, t.prop, "")), n && "auto" !== n ? n : 0);
            },
            set: function (t) {
              Tt.fx.step[t.prop]
                ? Tt.fx.step[t.prop](t)
                : 1 !== t.elem.nodeType ||
                  (null == t.elem.style[Tt.cssProps[t.prop]] &&
                    !Tt.cssHooks[t.prop])
                ? (t.elem[t.prop] = t.now)
                : Tt.style(t.elem, t.prop, t.now + t.unit);
            },
          },
        }),
        (Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
          set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
          },
        }),
        (Tt.easing = {
          linear: function (t) {
            return t;
          },
          swing: function (t) {
            return 0.5 - Math.cos(t * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (Tt.fx = Y.prototype.init),
        (Tt.fx.step = {});
      var xn,
        wn,
        jn = /^(?:toggle|show|hide)$/,
        Tn = /queueHooks$/;
      (Tt.Animation = Tt.extend(Z, {
        tweeners: {
          "*": [
            function (t, n) {
              var e = this.createTween(t, n);
              return x(e.elem, t, Xt.exec(n), e), e;
            },
          ],
        },
        tweener: function (t, n) {
          xt(t) ? ((n = t), (t = ["*"])) : (t = t.match(Pt));
          for (var e, r = 0, i = t.length; r < i; r++)
            (e = t[r]),
              (Z.tweeners[e] = Z.tweeners[e] || []),
              Z.tweeners[e].unshift(n);
        },
        prefilters: [$],
        prefilter: function (t, n) {
          n ? Z.prefilters.unshift(t) : Z.prefilters.push(t);
        },
      })),
        (Tt.speed = function (t, n, e) {
          var r =
            t && "object" == typeof t
              ? Tt.extend({}, t)
              : {
                  complete: e || (!e && n) || (xt(t) && t),
                  duration: t,
                  easing: (e && n) || (n && !xt(n) && n),
                };
          return (
            Tt.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in Tt.fx.speeds
                  ? (r.duration = Tt.fx.speeds[r.duration])
                  : (r.duration = Tt.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              xt(r.old) && r.old.call(this),
                r.queue && Tt.dequeue(this, r.queue);
            }),
            r
          );
        }),
        Tt.fn.extend({
          fadeTo: function (t, n, e, r) {
            return this.filter(Qt)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: n }, t, e, r);
          },
          animate: function (t, n, e, r) {
            var i = Tt.isEmptyObject(t),
              o = Tt.speed(n, e, r),
              u = function () {
                var n = Z(this, Tt.extend({}, t), o);
                (i || Bt.get(this, "finish")) && n.stop(!0);
              };
            return (
              (u.finish = u),
              i || !1 === o.queue ? this.each(u) : this.queue(o.queue, u)
            );
          },
          stop: function (t, n, e) {
            var r = function (t) {
              var n = t.stop;
              delete t.stop, n(e);
            };
            return (
              "string" != typeof t && ((e = n), (n = t), (t = void 0)),
              n && !1 !== t && this.queue(t || "fx", []),
              this.each(function () {
                var n = !0,
                  i = null != t && t + "queueHooks",
                  o = Tt.timers,
                  u = Bt.get(this);
                if (i) u[i] && u[i].stop && r(u[i]);
                else for (i in u) u[i] && u[i].stop && Tn.test(i) && r(u[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != t && o[i].queue !== t) ||
                    (o[i].anim.stop(e), (n = !1), o.splice(i, 1));
                (!n && e) || Tt.dequeue(this, t);
              })
            );
          },
          finish: function (t) {
            return (
              !1 !== t && (t = t || "fx"),
              this.each(function () {
                var n,
                  e = Bt.get(this),
                  r = e[t + "queue"],
                  i = e[t + "queueHooks"],
                  o = Tt.timers,
                  u = r ? r.length : 0;
                for (
                  e.finish = !0,
                    Tt.queue(this, t, []),
                    i && i.stop && i.stop.call(this, !0),
                    n = o.length;
                  n--;

                )
                  o[n].elem === this &&
                    o[n].queue === t &&
                    (o[n].anim.stop(!0), o.splice(n, 1));
                for (n = 0; n < u; n++)
                  r[n] && r[n].finish && r[n].finish.call(this);
                delete e.finish;
              })
            );
          },
        }),
        Tt.each(["toggle", "show", "hide"], function (t, n) {
          var e = Tt.fn[n];
          Tt.fn[n] = function (t, r, i) {
            return null == t || "boolean" == typeof t
              ? e.apply(this, arguments)
              : this.animate(K(n, !0), t, r, i);
          };
        }),
        Tt.each(
          {
            slideDown: K("show"),
            slideUp: K("hide"),
            slideToggle: K("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (t, n) {
            Tt.fn[t] = function (t, e, r) {
              return this.animate(n, t, e, r);
            };
          }
        ),
        (Tt.timers = []),
        (Tt.fx.tick = function () {
          var t,
            n = 0,
            e = Tt.timers;
          for (xn = Date.now(); n < e.length; n++)
            (t = e[n])() || e[n] !== t || e.splice(n--, 1);
          e.length || Tt.fx.stop(), (xn = void 0);
        }),
        (Tt.fx.timer = function (t) {
          Tt.timers.push(t), Tt.fx.start();
        }),
        (Tt.fx.interval = 13),
        (Tt.fx.start = function () {
          wn || ((wn = !0), G());
        }),
        (Tt.fx.stop = function () {
          wn = null;
        }),
        (Tt.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (Tt.fn.delay = function (t, n) {
          return (
            (t = Tt.fx ? Tt.fx.speeds[t] || t : t),
            (n = n || "fx"),
            this.queue(n, function (n, r) {
              var i = e.setTimeout(n, t);
              r.stop = function () {
                e.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var t = ft.createElement("input"),
            n = ft.createElement("select"),
            e = n.appendChild(ft.createElement("option"));
          (t.type = "checkbox"),
            (Ot.checkOn = "" !== t.value),
            (Ot.optSelected = e.selected),
            (t = ft.createElement("input")),
            (t.value = "t"),
            (t.type = "radio"),
            (Ot.radioValue = "t" === t.value);
        })();
      var En,
        Cn = Tt.expr.attrHandle;
      Tt.fn.extend({
        attr: function (t, n) {
          return Ft(this, Tt.attr, t, n, arguments.length > 1);
        },
        removeAttr: function (t) {
          return this.each(function () {
            Tt.removeAttr(this, t);
          });
        },
      }),
        Tt.extend({
          attr: function (t, n, e) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === t.getAttribute
                ? Tt.prop(t, n, e)
                : ((1 === o && Tt.isXMLDoc(t)) ||
                    (i =
                      Tt.attrHooks[n.toLowerCase()] ||
                      (Tt.expr.match.bool.test(n) ? En : void 0)),
                  void 0 !== e
                    ? null === e
                      ? void Tt.removeAttr(t, n)
                      : i && "set" in i && void 0 !== (r = i.set(t, e, n))
                      ? r
                      : (t.setAttribute(n, e + ""), e)
                    : i && "get" in i && null !== (r = i.get(t, n))
                    ? r
                    : ((r = Tt.find.attr(t, n)), null == r ? void 0 : r));
          },
          attrHooks: {
            type: {
              set: function (t, n) {
                if (!Ot.radioValue && "radio" === n && s(t, "input")) {
                  var e = t.value;
                  return t.setAttribute("type", n), e && (t.value = e), n;
                }
              },
            },
          },
          removeAttr: function (t, n) {
            var e,
              r = 0,
              i = n && n.match(Pt);
            if (i && 1 === t.nodeType)
              for (; (e = i[r++]); ) t.removeAttribute(e);
          },
        }),
        (En = {
          set: function (t, n, e) {
            return !1 === n ? Tt.removeAttr(t, e) : t.setAttribute(e, e), e;
          },
        }),
        Tt.each(Tt.expr.match.bool.source.match(/\w+/g), function (t, n) {
          var e = Cn[n] || Tt.find.attr;
          Cn[n] = function (t, n, r) {
            var i,
              o,
              u = n.toLowerCase();
            return (
              r ||
                ((o = Cn[u]),
                (Cn[u] = i),
                (i = null != e(t, n, r) ? u : null),
                (Cn[u] = o)),
              i
            );
          };
        });
      var An = /^(?:input|select|textarea|button)$/i,
        Sn = /^(?:a|area)$/i;
      Tt.fn.extend({
        prop: function (t, n) {
          return Ft(this, Tt.prop, t, n, arguments.length > 1);
        },
        removeProp: function (t) {
          return this.each(function () {
            delete this[Tt.propFix[t] || t];
          });
        },
      }),
        Tt.extend({
          prop: function (t, n, e) {
            var r,
              i,
              o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && Tt.isXMLDoc(t)) ||
                  ((n = Tt.propFix[n] || n), (i = Tt.propHooks[n])),
                void 0 !== e
                  ? i && "set" in i && void 0 !== (r = i.set(t, e, n))
                    ? r
                    : (t[n] = e)
                  : i && "get" in i && null !== (r = i.get(t, n))
                  ? r
                  : t[n]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (t) {
                var n = Tt.find.attr(t, "tabindex");
                return n
                  ? parseInt(n, 10)
                  : An.test(t.nodeName) || (Sn.test(t.nodeName) && t.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        Ot.optSelected ||
          (Tt.propHooks.selected = {
            get: function (t) {
              var n = t.parentNode;
              return n && n.parentNode && n.parentNode.selectedIndex, null;
            },
            set: function (t) {
              var n = t.parentNode;
              n &&
                (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
            },
          }),
        Tt.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            Tt.propFix[this.toLowerCase()] = this;
          }
        ),
        Tt.fn.extend({
          addClass: function (t) {
            var n,
              e,
              r,
              i,
              o,
              u,
              a,
              c = 0;
            if (xt(t))
              return this.each(function (n) {
                Tt(this).addClass(t.call(this, n, nt(this)));
              });
            if (((n = et(t)), n.length))
              for (; (e = this[c++]); )
                if (
                  ((i = nt(e)), (r = 1 === e.nodeType && " " + tt(i) + " "))
                ) {
                  for (u = 0; (o = n[u++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  (a = tt(r)), i !== a && e.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (t) {
            var n,
              e,
              r,
              i,
              o,
              u,
              a,
              c = 0;
            if (xt(t))
              return this.each(function (n) {
                Tt(this).removeClass(t.call(this, n, nt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if (((n = et(t)), n.length))
              for (; (e = this[c++]); )
                if (
                  ((i = nt(e)), (r = 1 === e.nodeType && " " + tt(i) + " "))
                ) {
                  for (u = 0; (o = n[u++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  (a = tt(r)), i !== a && e.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (t, n) {
            var e = typeof t,
              r = "string" === e || Array.isArray(t);
            return "boolean" == typeof n && r
              ? n
                ? this.addClass(t)
                : this.removeClass(t)
              : xt(t)
              ? this.each(function (e) {
                  Tt(this).toggleClass(t.call(this, e, nt(this), n), n);
                })
              : this.each(function () {
                  var n, i, o, u;
                  if (r)
                    for (i = 0, o = Tt(this), u = et(t); (n = u[i++]); )
                      o.hasClass(n) ? o.removeClass(n) : o.addClass(n);
                  else
                    (void 0 !== t && "boolean" !== e) ||
                      ((n = nt(this)),
                      n && Bt.set(this, "__className__", n),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          n || !1 === t
                            ? ""
                            : Bt.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (t) {
            var n,
              e,
              r = 0;
            for (n = " " + t + " "; (e = this[r++]); )
              if (1 === e.nodeType && (" " + tt(nt(e)) + " ").indexOf(n) > -1)
                return !0;
            return !1;
          },
        });
      var Mn = /\r/g;
      Tt.fn.extend({
        val: function (t) {
          var n,
            e,
            r,
            i = this[0];
          {
            if (arguments.length)
              return (
                (r = xt(t)),
                this.each(function (e) {
                  var i;
                  1 === this.nodeType &&
                    ((i = r ? t.call(this, e, Tt(this).val()) : t),
                    null == i
                      ? (i = "")
                      : "number" == typeof i
                      ? (i += "")
                      : Array.isArray(i) &&
                        (i = Tt.map(i, function (t) {
                          return null == t ? "" : t + "";
                        })),
                    ((n =
                      Tt.valHooks[this.type] ||
                      Tt.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in n &&
                      void 0 !== n.set(this, i, "value")) ||
                      (this.value = i));
                })
              );
            if (i)
              return (n =
                Tt.valHooks[i.type] || Tt.valHooks[i.nodeName.toLowerCase()]) &&
                "get" in n &&
                void 0 !== (e = n.get(i, "value"))
                ? e
                : ((e = i.value),
                  "string" == typeof e
                    ? e.replace(Mn, "")
                    : null == e
                    ? ""
                    : e);
          }
        },
      }),
        Tt.extend({
          valHooks: {
            option: {
              get: function (t) {
                var n = Tt.find.attr(t, "value");
                return null != n ? n : tt(Tt.text(t));
              },
            },
            select: {
              get: function (t) {
                var n,
                  e,
                  r,
                  i = t.options,
                  o = t.selectedIndex,
                  u = "select-one" === t.type,
                  a = u ? null : [],
                  c = u ? o + 1 : i.length;
                for (r = o < 0 ? c : u ? o : 0; r < c; r++)
                  if (
                    ((e = i[r]),
                    (e.selected || r === o) &&
                      !e.disabled &&
                      (!e.parentNode.disabled || !s(e.parentNode, "optgroup")))
                  ) {
                    if (((n = Tt(e).val()), u)) return n;
                    a.push(n);
                  }
                return a;
              },
              set: function (t, n) {
                for (
                  var e, r, i = t.options, o = Tt.makeArray(n), u = i.length;
                  u--;

                )
                  (r = i[u]),
                    (r.selected =
                      Tt.inArray(Tt.valHooks.option.get(r), o) > -1) &&
                      (e = !0);
                return e || (t.selectedIndex = -1), o;
              },
            },
          },
        }),
        Tt.each(["radio", "checkbox"], function () {
          (Tt.valHooks[this] = {
            set: function (t, n) {
              if (Array.isArray(n))
                return (t.checked = Tt.inArray(Tt(t).val(), n) > -1);
            },
          }),
            Ot.checkOn ||
              (Tt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value;
              });
        }),
        (Ot.focusin = "onfocusin" in e);
      var Nn = /^(?:focusinfocus|focusoutblur)$/,
        Dn = function (t) {
          t.stopPropagation();
        };
      Tt.extend(Tt.event, {
        trigger: function (t, n, r, i) {
          var o,
            u,
            a,
            c,
            s,
            f,
            l,
            h,
            d = [r || ft],
            p = mt.call(t, "type") ? t.type : t,
            v = mt.call(t, "namespace") ? t.namespace.split(".") : [];
          if (
            ((u = h = a = r = r || ft),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Nn.test(p + Tt.event.triggered) &&
              (p.indexOf(".") > -1 &&
                ((v = p.split(".")), (p = v.shift()), v.sort()),
              (s = p.indexOf(":") < 0 && "on" + p),
              (t = t[Tt.expando]
                ? t
                : new Tt.Event(p, "object" == typeof t && t)),
              (t.isTrigger = i ? 2 : 3),
              (t.namespace = v.join(".")),
              (t.rnamespace = t.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (t.result = void 0),
              t.target || (t.target = r),
              (n = null == n ? [t] : Tt.makeArray(n, [t])),
              (l = Tt.event.special[p] || {}),
              i || !l.trigger || !1 !== l.trigger.apply(r, n)))
          ) {
            if (!i && !l.noBubble && !wt(r)) {
              for (
                c = l.delegateType || p, Nn.test(c + p) || (u = u.parentNode);
                u;
                u = u.parentNode
              )
                d.push(u), (a = u);
              a === (r.ownerDocument || ft) &&
                d.push(a.defaultView || a.parentWindow || e);
            }
            for (o = 0; (u = d[o++]) && !t.isPropagationStopped(); )
              (h = u),
                (t.type = o > 1 ? c : l.bindType || p),
                (f =
                  (Bt.get(u, "events") || {})[t.type] && Bt.get(u, "handle")),
                f && f.apply(u, n),
                (f = s && u[s]) &&
                  f.apply &&
                  Wt(u) &&
                  ((t.result = f.apply(u, n)),
                  !1 === t.result && t.preventDefault());
            return (
              (t.type = p),
              i ||
                t.isDefaultPrevented() ||
                (l._default && !1 !== l._default.apply(d.pop(), n)) ||
                !Wt(r) ||
                (s &&
                  xt(r[p]) &&
                  !wt(r) &&
                  ((a = r[s]),
                  a && (r[s] = null),
                  (Tt.event.triggered = p),
                  t.isPropagationStopped() && h.addEventListener(p, Dn),
                  r[p](),
                  t.isPropagationStopped() && h.removeEventListener(p, Dn),
                  (Tt.event.triggered = void 0),
                  a && (r[s] = a))),
              t.result
            );
          }
        },
        simulate: function (t, n, e) {
          var r = Tt.extend(new Tt.Event(), e, { type: t, isSimulated: !0 });
          Tt.event.trigger(r, null, n);
        },
      }),
        Tt.fn.extend({
          trigger: function (t, n) {
            return this.each(function () {
              Tt.event.trigger(t, n, this);
            });
          },
          triggerHandler: function (t, n) {
            var e = this[0];
            if (e) return Tt.event.trigger(t, n, e, !0);
          },
        }),
        Ot.focusin ||
          Tt.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
            var e = function (t) {
              Tt.event.simulate(n, t.target, Tt.event.fix(t));
            };
            Tt.event.special[n] = {
              setup: function () {
                var r = this.ownerDocument || this,
                  i = Bt.access(r, n);
                i || r.addEventListener(t, e, !0),
                  Bt.access(r, n, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this,
                  i = Bt.access(r, n) - 1;
                i
                  ? Bt.access(r, n, i)
                  : (r.removeEventListener(t, e, !0), Bt.remove(r, n));
              },
            };
          });
      var kn = e.location,
        In = Date.now(),
        Ln = /\?/;
      Tt.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
          n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          n = void 0;
        }
        return (
          (n && !n.getElementsByTagName("parsererror").length) ||
            Tt.error("Invalid XML: " + t),
          n
        );
      };
      var Pn = /\[\]$/,
        Rn = /\r?\n/g,
        Hn = /^(?:submit|button|image|reset|file)$/i,
        Fn = /^(?:input|select|textarea|keygen)/i;
      (Tt.param = function (t, n) {
        var e,
          r = [],
          i = function (t, n) {
            var e = xt(n) ? n() : n;
            r[r.length] =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(null == e ? "" : e);
          };
        if (Array.isArray(t) || (t.jquery && !Tt.isPlainObject(t)))
          Tt.each(t, function () {
            i(this.name, this.value);
          });
        else for (e in t) rt(e, t[e], n, i);
        return r.join("&");
      }),
        Tt.fn.extend({
          serialize: function () {
            return Tt.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var t = Tt.prop(this, "elements");
              return t ? Tt.makeArray(t) : this;
            })
              .filter(function () {
                var t = this.type;
                return (
                  this.name &&
                  !Tt(this).is(":disabled") &&
                  Fn.test(this.nodeName) &&
                  !Hn.test(t) &&
                  (this.checked || !Zt.test(t))
                );
              })
              .map(function (t, n) {
                var e = Tt(this).val();
                return null == e
                  ? null
                  : Array.isArray(e)
                  ? Tt.map(e, function (t) {
                      return { name: n.name, value: t.replace(Rn, "\r\n") };
                    })
                  : { name: n.name, value: e.replace(Rn, "\r\n") };
              })
              .get();
          },
        });
      var qn = /%20/g,
        Un = /#.*$/,
        Wn = /([?&])_=[^&]*/,
        Bn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vn = /^(?:GET|HEAD)$/,
        Yn = /^\/\//,
        Gn = {},
        Xn = {},
        Kn = "*/".concat("*"),
        Qn = ft.createElement("a");
      (Qn.href = kn.href),
        Tt.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: kn.href,
            type: "GET",
            isLocal: zn.test(kn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Kn,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": Tt.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (t, n) {
            return n ? ut(ut(t, Tt.ajaxSettings), n) : ut(Tt.ajaxSettings, t);
          },
          ajaxPrefilter: it(Gn),
          ajaxTransport: it(Xn),
          ajax: function (t, n) {
            function r(t, n, r, a) {
              var s,
                h,
                d,
                _,
                O,
                x = n;
              f ||
                ((f = !0),
                c && e.clearTimeout(c),
                (i = void 0),
                (u = a || ""),
                (w.readyState = t > 0 ? 4 : 0),
                (s = (t >= 200 && t < 300) || 304 === t),
                r && (_ = at(p, w, r)),
                (_ = ct(p, _, w, s)),
                s
                  ? (p.ifModified &&
                      ((O = w.getResponseHeader("Last-Modified")),
                      O && (Tt.lastModified[o] = O),
                      (O = w.getResponseHeader("etag")) && (Tt.etag[o] = O)),
                    204 === t || "HEAD" === p.type
                      ? (x = "nocontent")
                      : 304 === t
                      ? (x = "notmodified")
                      : ((x = _.state), (h = _.data), (d = _.error), (s = !d)))
                  : ((d = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                (w.status = t),
                (w.statusText = (n || x) + ""),
                s ? b.resolveWith(v, [h, x, w]) : b.rejectWith(v, [w, x, d]),
                w.statusCode(y),
                (y = void 0),
                l &&
                  g.trigger(s ? "ajaxSuccess" : "ajaxError", [w, p, s ? h : d]),
                m.fireWith(v, [w, x]),
                l &&
                  (g.trigger("ajaxComplete", [w, p]),
                  --Tt.active || Tt.event.trigger("ajaxStop")));
            }
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
              o,
              u,
              a,
              c,
              s,
              f,
              l,
              h,
              d,
              p = Tt.ajaxSetup({}, n),
              v = p.context || p,
              g = p.context && (v.nodeType || v.jquery) ? Tt(v) : Tt.event,
              b = Tt.Deferred(),
              m = Tt.Callbacks("once memory"),
              y = p.statusCode || {},
              _ = {},
              O = {},
              x = "canceled",
              w = {
                readyState: 0,
                getResponseHeader: function (t) {
                  var n;
                  if (f) {
                    if (!a)
                      for (a = {}; (n = Bn.exec(u)); )
                        a[n[1].toLowerCase()] = n[2];
                    n = a[t.toLowerCase()];
                  }
                  return null == n ? null : n;
                },
                getAllResponseHeaders: function () {
                  return f ? u : null;
                },
                setRequestHeader: function (t, n) {
                  return (
                    null == f &&
                      ((t = O[t.toLowerCase()] = O[t.toLowerCase()] || t),
                      (_[t] = n)),
                    this
                  );
                },
                overrideMimeType: function (t) {
                  return null == f && (p.mimeType = t), this;
                },
                statusCode: function (t) {
                  var n;
                  if (t)
                    if (f) w.always(t[w.status]);
                    else for (n in t) y[n] = [y[n], t[n]];
                  return this;
                },
                abort: function (t) {
                  var n = t || x;
                  return i && i.abort(n), r(0, n), this;
                },
              };
            if (
              (b.promise(w),
              (p.url = ((t || p.url || kn.href) + "").replace(
                Yn,
                kn.protocol + "//"
              )),
              (p.type = n.method || n.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(Pt) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              s = ft.createElement("a");
              try {
                (s.href = p.url),
                  (s.href = s.href),
                  (p.crossDomain =
                    Qn.protocol + "//" + Qn.host != s.protocol + "//" + s.host);
              } catch (t) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = Tt.param(p.data, p.traditional)),
              ot(Gn, p, n, w),
              f)
            )
              return w;
            (l = Tt.event && p.global),
              l && 0 == Tt.active++ && Tt.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !Vn.test(p.type)),
              (o = p.url.replace(Un, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(qn, "+"))
                : ((d = p.url.slice(o.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((o += (Ln.test(o) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((o = o.replace(Wn, "$1")),
                    (d = (Ln.test(o) ? "&" : "?") + "_=" + In++ + d)),
                  (p.url = o + d)),
              p.ifModified &&
                (Tt.lastModified[o] &&
                  w.setRequestHeader("If-Modified-Since", Tt.lastModified[o]),
                Tt.etag[o] && w.setRequestHeader("If-None-Match", Tt.etag[o])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                n.contentType) &&
                w.setRequestHeader("Content-Type", p.contentType),
              w.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + Kn + "; q=0.01" : "")
                  : p.accepts["*"]
              );
            for (h in p.headers) w.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(v, w, p) || f))
              return w.abort();
            if (
              ((x = "abort"),
              m.add(p.complete),
              w.done(p.success),
              w.fail(p.error),
              (i = ot(Xn, p, n, w)))
            ) {
              if (((w.readyState = 1), l && g.trigger("ajaxSend", [w, p]), f))
                return w;
              p.async &&
                p.timeout > 0 &&
                (c = e.setTimeout(function () {
                  w.abort("timeout");
                }, p.timeout));
              try {
                (f = !1), i.send(_, r);
              } catch (t) {
                if (f) throw t;
                r(-1, t);
              }
            } else r(-1, "No Transport");
            return w;
          },
          getJSON: function (t, n, e) {
            return Tt.get(t, n, e, "json");
          },
          getScript: function (t, n) {
            return Tt.get(t, void 0, n, "script");
          },
        }),
        Tt.each(["get", "post"], function (t, n) {
          Tt[n] = function (t, e, r, i) {
            return (
              xt(e) && ((i = i || r), (r = e), (e = void 0)),
              Tt.ajax(
                Tt.extend(
                  { url: t, type: n, dataType: i, data: e, success: r },
                  Tt.isPlainObject(t) && t
                )
              )
            );
          };
        }),
        (Tt._evalUrl = function (t) {
          return Tt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0,
          });
        }),
        Tt.fn.extend({
          wrapAll: function (t) {
            var n;
            return (
              this[0] &&
                (xt(t) && (t = t.call(this[0])),
                (n = Tt(t, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && n.insertBefore(this[0]),
                n
                  .map(function () {
                    for (var t = this; t.firstElementChild; )
                      t = t.firstElementChild;
                    return t;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (t) {
            return xt(t)
              ? this.each(function (n) {
                  Tt(this).wrapInner(t.call(this, n));
                })
              : this.each(function () {
                  var n = Tt(this),
                    e = n.contents();
                  e.length ? e.wrapAll(t) : n.append(t);
                });
          },
          wrap: function (t) {
            var n = xt(t);
            return this.each(function (e) {
              Tt(this).wrapAll(n ? t.call(this, e) : t);
            });
          },
          unwrap: function (t) {
            return (
              this.parent(t)
                .not("body")
                .each(function () {
                  Tt(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (Tt.expr.pseudos.hidden = function (t) {
          return !Tt.expr.pseudos.visible(t);
        }),
        (Tt.expr.pseudos.visible = function (t) {
          return !!(
            t.offsetWidth ||
            t.offsetHeight ||
            t.getClientRects().length
          );
        }),
        (Tt.ajaxSettings.xhr = function () {
          try {
            return new e.XMLHttpRequest();
          } catch (t) {}
        });
      var $n = { 0: 200, 1223: 204 },
        Jn = Tt.ajaxSettings.xhr();
      (Ot.cors = !!Jn && "withCredentials" in Jn),
        (Ot.ajax = Jn = !!Jn),
        Tt.ajaxTransport(function (t) {
          var n, r;
          if (Ot.cors || (Jn && !t.crossDomain))
            return {
              send: function (i, o) {
                var u,
                  a = t.xhr();
                if (
                  (a.open(t.type, t.url, t.async, t.username, t.password),
                  t.xhrFields)
                )
                  for (u in t.xhrFields) a[u] = t.xhrFields[u];
                t.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(t.mimeType),
                  t.crossDomain ||
                    i["X-Requested-With"] ||
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (u in i) a.setRequestHeader(u, i[u]);
                (n = function (t) {
                  return function () {
                    n &&
                      ((n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                      "abort" === t
                        ? a.abort()
                        : "error" === t
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            $n[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = n()),
                  (r = a.onerror = a.ontimeout = n("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          e.setTimeout(function () {
                            n && r();
                          });
                      }),
                  (n = n("abort"));
                try {
                  a.send((t.hasContent && t.data) || null);
                } catch (t) {
                  if (n) throw t;
                }
              },
              abort: function () {
                n && n();
              },
            };
        }),
        Tt.ajaxPrefilter(function (t) {
          t.crossDomain && (t.contents.script = !1);
        }),
        Tt.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (t) {
              return Tt.globalEval(t), t;
            },
          },
        }),
        Tt.ajaxPrefilter("script", function (t) {
          void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET");
        }),
        Tt.ajaxTransport("script", function (t) {
          if (t.crossDomain) {
            var n, e;
            return {
              send: function (r, i) {
                (n = Tt("<script>")
                  .prop({ charset: t.scriptCharset, src: t.url })
                  .on(
                    "load error",
                    (e = function (t) {
                      n.remove(),
                        (e = null),
                        t && i("error" === t.type ? 404 : 200, t.type);
                    })
                  )),
                  ft.head.appendChild(n[0]);
              },
              abort: function () {
                e && e();
              },
            };
          }
        });
      var Zn = [],
        te = /(=)\?(?=&|$)|\?\?/;
      Tt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var t = Zn.pop() || Tt.expando + "_" + In++;
          return (this[t] = !0), t;
        },
      }),
        Tt.ajaxPrefilter("json jsonp", function (t, n, r) {
          var i,
            o,
            u,
            a =
              !1 !== t.jsonp &&
              (te.test(t.url)
                ? "url"
                : "string" == typeof t.data &&
                  0 ===
                    (t.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  te.test(t.data) &&
                  "data");
          if (a || "jsonp" === t.dataTypes[0])
            return (
              (i = t.jsonpCallback = xt(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
              a
                ? (t[a] = t[a].replace(te, "$1" + i))
                : !1 !== t.jsonp &&
                  (t.url += (Ln.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
              (t.converters["script json"] = function () {
                return u || Tt.error(i + " was not called"), u[0];
              }),
              (t.dataTypes[0] = "json"),
              (o = e[i]),
              (e[i] = function () {
                u = arguments;
              }),
              r.always(function () {
                void 0 === o ? Tt(e).removeProp(i) : (e[i] = o),
                  t[i] && ((t.jsonpCallback = n.jsonpCallback), Zn.push(i)),
                  u && xt(o) && o(u[0]),
                  (u = o = void 0);
              }),
              "script"
            );
        }),
        (Ot.createHTMLDocument = (function () {
          var t = ft.implementation.createHTMLDocument("").body;
          return (
            (t.innerHTML = "<form></form><form></form>"),
            2 === t.childNodes.length
          );
        })()),
        (Tt.parseHTML = function (t, n, e) {
          if ("string" != typeof t) return [];
          "boolean" == typeof n && ((e = n), (n = !1));
          var r, i, o;
          return (
            n ||
              (Ot.createHTMLDocument
                ? ((n = ft.implementation.createHTMLDocument("")),
                  (r = n.createElement("base")),
                  (r.href = ft.location.href),
                  n.head.appendChild(r))
                : (n = ft)),
            (i = Nt.exec(t)),
            (o = !e && []),
            i
              ? [n.createElement(i[1])]
              : ((i = C([t], n, o)),
                o && o.length && Tt(o).remove(),
                Tt.merge([], i.childNodes))
          );
        }),
        (Tt.fn.load = function (t, n, e) {
          var r,
            i,
            o,
            u = this,
            a = t.indexOf(" ");
          return (
            a > -1 && ((r = tt(t.slice(a))), (t = t.slice(0, a))),
            xt(n)
              ? ((e = n), (n = void 0))
              : n && "object" == typeof n && (i = "POST"),
            u.length > 0 &&
              Tt.ajax({ url: t, type: i || "GET", dataType: "html", data: n })
                .done(function (t) {
                  (o = arguments),
                    u.html(r ? Tt("<div>").append(Tt.parseHTML(t)).find(r) : t);
                })
                .always(
                  e &&
                    function (t, n) {
                      u.each(function () {
                        e.apply(this, o || [t.responseText, n, t]);
                      });
                    }
                ),
            this
          );
        }),
        Tt.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (t, n) {
            Tt.fn[n] = function (t) {
              return this.on(n, t);
            };
          }
        ),
        (Tt.expr.pseudos.animated = function (t) {
          return Tt.grep(Tt.timers, function (n) {
            return t === n.elem;
          }).length;
        }),
        (Tt.offset = {
          setOffset: function (t, n, e) {
            var r,
              i,
              o,
              u,
              a,
              c,
              s,
              f = Tt.css(t, "position"),
              l = Tt(t),
              h = {};
            "static" === f && (t.style.position = "relative"),
              (a = l.offset()),
              (o = Tt.css(t, "top")),
              (c = Tt.css(t, "left")),
              (s =
                ("absolute" === f || "fixed" === f) &&
                (o + c).indexOf("auto") > -1),
              s
                ? ((r = l.position()), (u = r.top), (i = r.left))
                : ((u = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
              xt(n) && (n = n.call(t, e, Tt.extend({}, a))),
              null != n.top && (h.top = n.top - a.top + u),
              null != n.left && (h.left = n.left - a.left + i),
              "using" in n ? n.using.call(t, h) : l.css(h);
          },
        }),
        Tt.fn.extend({
          offset: function (t) {
            if (arguments.length)
              return void 0 === t
                ? this
                : this.each(function (n) {
                    Tt.offset.setOffset(this, t, n);
                  });
            var n,
              e,
              r = this[0];
            if (r)
              return r.getClientRects().length
                ? ((n = r.getBoundingClientRect()),
                  (e = r.ownerDocument.defaultView),
                  { top: n.top + e.pageYOffset, left: n.left + e.pageXOffset })
                : { top: 0, left: 0 };
          },
          position: function () {
            if (this[0]) {
              var t,
                n,
                e,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === Tt.css(r, "position"))
                n = r.getBoundingClientRect();
              else {
                for (
                  n = this.offset(),
                    e = r.ownerDocument,
                    t = r.offsetParent || e.documentElement;
                  t &&
                  (t === e.body || t === e.documentElement) &&
                  "static" === Tt.css(t, "position");

                )
                  t = t.parentNode;
                t &&
                  t !== r &&
                  1 === t.nodeType &&
                  ((i = Tt(t).offset()),
                  (i.top += Tt.css(t, "borderTopWidth", !0)),
                  (i.left += Tt.css(t, "borderLeftWidth", !0)));
              }
              return {
                top: n.top - i.top - Tt.css(r, "marginTop", !0),
                left: n.left - i.left - Tt.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var t = this.offsetParent;
                t && "static" === Tt.css(t, "position");

              )
                t = t.offsetParent;
              return t || on;
            });
          },
        }),
        Tt.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (t, n) {
            var e = "pageYOffset" === n;
            Tt.fn[t] = function (r) {
              return Ft(
                this,
                function (t, r, i) {
                  var o;
                  if (
                    (wt(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                    void 0 === i)
                  )
                    return o ? o[n] : t[r];
                  o
                    ? o.scrollTo(e ? o.pageXOffset : i, e ? i : o.pageYOffset)
                    : (t[r] = i);
                },
                t,
                r,
                arguments.length
              );
            };
          }
        ),
        Tt.each(["top", "left"], function (t, n) {
          Tt.cssHooks[n] = q(Ot.pixelPosition, function (t, e) {
            if (e)
              return (e = F(t, n)), dn.test(e) ? Tt(t).position()[n] + "px" : e;
          });
        }),
        Tt.each({ Height: "height", Width: "width" }, function (t, n) {
          Tt.each(
            { padding: "inner" + t, content: n, "": "outer" + t },
            function (e, r) {
              Tt.fn[r] = function (i, o) {
                var u = arguments.length && (e || "boolean" != typeof i),
                  a = e || (!0 === i || !0 === o ? "margin" : "border");
                return Ft(
                  this,
                  function (n, e, i) {
                    var o;
                    return wt(n)
                      ? 0 === r.indexOf("outer")
                        ? n["inner" + t]
                        : n.document.documentElement["client" + t]
                      : 9 === n.nodeType
                      ? ((o = n.documentElement),
                        Math.max(
                          n.body["scroll" + t],
                          o["scroll" + t],
                          n.body["offset" + t],
                          o["offset" + t],
                          o["client" + t]
                        ))
                      : void 0 === i
                      ? Tt.css(n, e, a)
                      : Tt.style(n, e, i, a);
                  },
                  n,
                  u ? i : void 0,
                  u
                );
              };
            }
          );
        }),
        Tt.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (t, n) {
            Tt.fn[n] = function (t, e) {
              return arguments.length > 0
                ? this.on(n, null, t, e)
                : this.trigger(n);
            };
          }
        ),
        Tt.fn.extend({
          hover: function (t, n) {
            return this.mouseenter(t).mouseleave(n || t);
          },
        }),
        Tt.fn.extend({
          bind: function (t, n, e) {
            return this.on(t, null, n, e);
          },
          unbind: function (t, n) {
            return this.off(t, null, n);
          },
          delegate: function (t, n, e, r) {
            return this.on(n, t, e, r);
          },
          undelegate: function (t, n, e) {
            return 1 === arguments.length
              ? this.off(t, "**")
              : this.off(n, t || "**", e);
          },
        }),
        (Tt.proxy = function (t, n) {
          var e, r, i;
          if (("string" == typeof n && ((e = t[n]), (n = t), (t = e)), xt(t)))
            return (
              (r = ht.call(arguments, 2)),
              (i = function () {
                return t.apply(n || this, r.concat(ht.call(arguments)));
              }),
              (i.guid = t.guid = t.guid || Tt.guid++),
              i
            );
        }),
        (Tt.holdReady = function (t) {
          t ? Tt.readyWait++ : Tt.ready(!0);
        }),
        (Tt.isArray = Array.isArray),
        (Tt.parseJSON = JSON.parse),
        (Tt.nodeName = s),
        (Tt.isFunction = xt),
        (Tt.isWindow = wt),
        (Tt.camelCase = m),
        (Tt.type = a),
        (Tt.now = Date.now),
        (Tt.isNumeric = function (t) {
          var n = Tt.type(t);
          return (
            ("number" === n || "string" === n) && !isNaN(t - parseFloat(t))
          );
        }),
        (r = []),
        void 0 !==
          (i = function () {
            return Tt;
          }.apply(n, r)) && (t.exports = i);
      var ne = e.jQuery,
        ee = e.$;
      return (
        (Tt.noConflict = function (t) {
          return (
            e.$ === Tt && (e.$ = ee),
            t && e.jQuery === Tt && (e.jQuery = ne),
            Tt
          );
        }),
        o || (e.jQuery = e.$ = Tt),
        Tt
      );
    });
  },
  ,
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return null === t ? NaN : +t;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return function (e) {
        return t + e * n;
      };
    }
    function i(t, n, e) {
      return (
        (t = Math.pow(t, e)),
        (n = Math.pow(n, e) - t),
        (e = 1 / e),
        function (r) {
          return Math.pow(t + r * n, e);
        }
      );
    }
    function o(t, n) {
      var e = n - t;
      return e
        ? r(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : Object(c.a)(isNaN(t) ? n : t);
    }
    function u(t) {
      return 1 == (t = +t)
        ? a
        : function (n, e) {
            return e - n ? i(n, e, t) : Object(c.a)(isNaN(n) ? e : n);
          };
    }
    function a(t, n) {
      var e = n - t;
      return e ? r(t, e) : Object(c.a)(isNaN(t) ? n : t);
    }
    (n.c = o), (n.b = u), (n.a = a);
    var c = e(160);
  },
  function (t, n, e) {
    "use strict";
    var r = e(354);
    e.d(n, "d", function () {
      return r.a;
    });
    var i = e(355);
    e.d(n, "e", function () {
      return i.a;
    });
    var o = e(96);
    e.d(n, "c", function () {
      return o.a;
    });
    var u = e(356);
    e.d(n, "b", function () {
      return u.a;
    });
    var a = e(357);
    e.d(n, "f", function () {
      return a.a;
    });
    var c = e(358);
    e.d(n, "a", function () {
      return c.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return [Object(f.e)(t[1], t[0]), Object(f.c)(t[2])];
    }
    function i(t) {
      var n = t[0],
        e = t[1],
        r = Object(f.g)(e);
      return [r * Object(f.g)(n), r * Object(f.t)(n), Object(f.t)(e)];
    }
    function o(t, n) {
      return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
    }
    function u(t, n) {
      return [
        t[1] * n[2] - t[2] * n[1],
        t[2] * n[0] - t[0] * n[2],
        t[0] * n[1] - t[1] * n[0],
      ];
    }
    function a(t, n) {
      (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
    }
    function c(t, n) {
      return [t[0] * n, t[1] * n, t[2] * n];
    }
    function s(t) {
      var n = Object(f.u)(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      (t[0] /= n), (t[1] /= n), (t[2] /= n);
    }
    (n.g = r), (n.a = i), (n.d = o), (n.c = u), (n.b = a), (n.f = c), (n.e = s);
    var f = e(1);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        var r = Object(o.g)(n),
          i = Object(o.g)(e),
          u = t(r * i);
        return [u * i * Object(o.t)(n), u * Object(o.t)(e)];
      };
    }
    function i(t) {
      return function (n, e) {
        var r = Object(o.u)(n * n + e * e),
          i = t(r),
          u = Object(o.t)(i),
          a = Object(o.g)(i);
        return [Object(o.e)(n * u, r * a), Object(o.c)(r && (e * u) / r)];
      };
    }
    (n.b = r), (n.a = i);
    var o = e(1);
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e, r, i) {
      for (
        var o,
          u = t.children,
          a = -1,
          c = u.length,
          s = t.value && (r - n) / t.value;
        ++a < c;

      )
        (o = u[a]),
          (o.y0 = e),
          (o.y1 = i),
          (o.x0 = n),
          (o.x1 = n += o.value * s);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = t.domain;
      return (
        (t.ticks = function (t) {
          var e = n();
          return Object(o.B)(e[0], e[e.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, e) {
          return Object(c.a)(n(), t, e);
        }),
        (t.nice = function (e) {
          null == e && (e = 10);
          var r,
            i = n(),
            u = 0,
            a = i.length - 1,
            c = i[u],
            s = i[a];
          return (
            s < c && ((r = c), (c = s), (s = r), (r = u), (u = a), (a = r)),
            (r = Object(o.z)(c, s, e)),
            r > 0
              ? ((c = Math.floor(c / r) * r),
                (s = Math.ceil(s / r) * r),
                (r = Object(o.z)(c, s, e)))
              : r < 0 &&
                ((c = Math.ceil(c * r) / r),
                (s = Math.floor(s * r) / r),
                (r = Object(o.z)(c, s, e))),
            r > 0
              ? ((i[u] = Math.floor(c / r) * r),
                (i[a] = Math.ceil(s / r) * r),
                n(i))
              : r < 0 &&
                ((i[u] = Math.ceil(c * r) / r),
                (i[a] = Math.floor(s * r) / r),
                n(i)),
            t
          );
        }),
        t
      );
    }
    function i() {
      var t = Object(a.b)(a.c, u.m);
      return (
        (t.copy = function () {
          return Object(a.a)(t, i());
        }),
        r(t)
      );
    }
    (n.b = r), (n.a = i);
    var o = e(8),
      u = e(11),
      a = e(72),
      c = e(466);
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t.match(/.{6}/g).map(function (t) {
        return "#" + t;
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t > 1 ? 0 : t < -1 ? d : Math.acos(t);
    }
    function i(t) {
      return t >= 1 ? p : t <= -1 ? -p : Math.asin(t);
    }
    e.d(n, "a", function () {
      return o;
    }),
      e.d(n, "d", function () {
        return u;
      }),
      e.d(n, "e", function () {
        return a;
      }),
      e.d(n, "h", function () {
        return c;
      }),
      e.d(n, "i", function () {
        return s;
      }),
      e.d(n, "k", function () {
        return f;
      }),
      e.d(n, "l", function () {
        return l;
      }),
      e.d(n, "f", function () {
        return h;
      }),
      e.d(n, "j", function () {
        return d;
      }),
      e.d(n, "g", function () {
        return p;
      }),
      e.d(n, "m", function () {
        return v;
      }),
      (n.b = r),
      (n.c = i);
    var o = Math.abs,
      u = Math.atan2,
      a = Math.cos,
      c = Math.max,
      s = Math.min,
      f = Math.sin,
      l = Math.sqrt,
      h = 1e-12,
      d = Math.PI,
      p = d / 2,
      v = 2 * d;
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      if ((i = t.length) > 1)
        for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
          for (r = u, u = t[n[o]], e = 0; e < a; ++e)
            u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1];
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
      return e;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
    }
    function i(t, n) {
      return n[1] - t[1] || n[0] - t[0];
    }
    function o(t, n) {
      var e,
        r,
        o,
        v = t.sort(i).pop();
      for (s = [], a = new Array(t.length), u = new p.b(), c = new p.b(); ; )
        if (
          ((o = h.c), v && (!o || v[1] < o.y || (v[1] === o.y && v[0] < o.x)))
        )
          (v[0] === e && v[1] === r) ||
            (Object(f.a)(v), (e = v[0]), (r = v[1])),
            (v = t.pop());
        else {
          if (!o) break;
          Object(f.b)(o.arc);
        }
      if ((Object(l.d)(), n)) {
        var g = +n[0][0],
          b = +n[0][1],
          m = +n[1][0],
          y = +n[1][1];
        Object(d.a)(g, b, m, y), Object(l.b)(g, b, m, y);
      }
      (this.edges = s), (this.cells = a), (u = c = s = a = null);
    }
    e.d(n, "f", function () {
      return v;
    }),
      e.d(n, "g", function () {
        return g;
      }),
      e.d(n, "a", function () {
        return u;
      }),
      e.d(n, "b", function () {
        return a;
      }),
      e.d(n, "c", function () {
        return c;
      }),
      e.d(n, "e", function () {
        return s;
      }),
      (n.d = o);
    var u,
      a,
      c,
      s,
      f = e(525),
      l = e(216),
      h = e(217),
      d = e(121),
      p = e(120),
      v = 1e-6,
      g = 1e-12;
    o.prototype = {
      constructor: o,
      polygons: function () {
        var t = this.edges;
        return this.cells.map(function (n) {
          var e = n.halfedges.map(function (e) {
            return Object(l.a)(n, t[e]);
          });
          return (e.data = n.site.data), e;
        });
      },
      triangles: function () {
        var t = [],
          n = this.edges;
        return (
          this.cells.forEach(function (e, i) {
            if ((u = (o = e.halfedges).length))
              for (
                var o,
                  u,
                  a,
                  c = e.site,
                  s = -1,
                  f = n[o[u - 1]],
                  l = f.left === c ? f.right : f.left;
                ++s < u;

              )
                (a = l),
                  (f = n[o[s]]),
                  (l = f.left === c ? f.right : f.left),
                  a &&
                    l &&
                    i < a.index &&
                    i < l.index &&
                    r(c, a, l) < 0 &&
                    t.push([c.data, a.data, l.data]);
          }),
          t
        );
      },
      links: function () {
        return this.edges
          .filter(function (t) {
            return t.right;
          })
          .map(function (t) {
            return { source: t.left.data, target: t.right.data };
          });
      },
      find: function (t, n, e) {
        for (
          var r, i, o = this, u = o._found || 0, a = o.cells.length;
          !(i = o.cells[u]);

        )
          if (++u >= a) return null;
        var c = t - i.site[0],
          s = n - i.site[1],
          f = c * c + s * s;
        do {
          (i = o.cells[(r = u)]),
            (u = null),
            i.halfedges.forEach(function (e) {
              var r = o.edges[e],
                a = r.left;
              if ((a !== i.site && a) || (a = r.right)) {
                var c = t - a[0],
                  s = n - a[1],
                  l = c * c + s * s;
                l < f && ((f = l), (u = a.index));
              }
            });
        } while (null !== u);
        return (o._found = r), null == e || f <= e * e ? i.site : null;
      },
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        var n = this.ownerDocument,
          e = this.namespaceURI;
        return e === u.b && n.documentElement.namespaceURI === u.b
          ? n.createElement(t)
          : n.createElementNS(e, t);
      };
    }
    function i(t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    }
    var o = e(84),
      u = e(85);
    n.a = function (t) {
      var n = Object(o.a)(t);
      return (n.local ? i : r)(n);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e = t.ownerSVGElement || t;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return (
          (r.x = n.clientX),
          (r.y = n.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        );
      }
      var i = t.getBoundingClientRect();
      return [
        n.clientX - i.left - t.clientLeft,
        n.clientY - i.top - t.clientTop,
      ];
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return (
        (t = +t),
        (n -= t),
        function (e) {
          return t + n * e;
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(95);
    e.d(n, "b", function () {
      return r.b;
    }),
      e.d(n, "d", function () {
        return r.c;
      }),
      e.d(n, "e", function () {
        return r.d;
      });
    var i = e(315);
    e.d(n, "c", function () {
      return i.a;
    });
    var o = e(316);
    e.d(n, "a", function () {
      return o.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e, r;
      return function () {
        var i = Object(u.h)(this, t),
          o = i.tween;
        if (o !== e) {
          r = e = o;
          for (var a = 0, c = r.length; a < c; ++a)
            if (r[a].name === n) {
              (r = r.slice()), r.splice(a, 1);
              break;
            }
        }
        i.tween = r;
      };
    }
    function i(t, n, e) {
      var r, i;
      if ("function" != typeof e) throw new Error();
      return function () {
        var o = Object(u.h)(this, t),
          a = o.tween;
        if (a !== r) {
          i = (r = a).slice();
          for (var c = { name: n, value: e }, s = 0, f = i.length; s < f; ++s)
            if (i[s].name === n) {
              i[s] = c;
              break;
            }
          s === f && i.push(c);
        }
        o.tween = i;
      };
    }
    function o(t, n, e) {
      var r = t._id;
      return (
        t.each(function () {
          var t = Object(u.h)(this, r);
          (t.value || (t.value = {}))[n] = e.apply(this, arguments);
        }),
        function (t) {
          return Object(u.f)(t, r).value[n];
        }
      );
    }
    n.b = o;
    var u = e(12);
    n.a = function (t, n) {
      var e = this._id;
      if (((t += ""), arguments.length < 2)) {
        for (
          var o, a = Object(u.f)(this.node(), e).tween, c = 0, s = a.length;
          c < s;
          ++c
        )
          if ((o = a[c]).name === t) return o.value;
        return null;
      }
      return this.each((null == n ? r : i)(e, t, n));
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(103);
    n.a = function (t) {
      return (t = Object(r.a)(Math.abs(t))), t ? t[1] : NaN;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [t > s.o ? t - s.w : t < -s.o ? t + s.w : t, n];
    }
    function i(t, n, e) {
      return (t %= s.w)
        ? n || e
          ? Object(c.a)(u(t), a(n, e))
          : u(t)
        : n || e
        ? a(n, e)
        : r;
    }
    function o(t) {
      return function (n, e) {
        return (n += t), [n > s.o ? n - s.w : n < -s.o ? n + s.w : n, e];
      };
    }
    function u(t) {
      var n = o(t);
      return (n.invert = o(-t)), n;
    }
    function a(t, n) {
      function e(t, n) {
        var e = Object(s.g)(n),
          a = Object(s.g)(t) * e,
          c = Object(s.t)(t) * e,
          f = Object(s.t)(n),
          l = f * r + a * i;
        return [
          Object(s.e)(c * o - l * u, a * r - f * i),
          Object(s.c)(l * o + c * u),
        ];
      }
      var r = Object(s.g)(t),
        i = Object(s.t)(t),
        o = Object(s.g)(n),
        u = Object(s.t)(n);
      return (
        (e.invert = function (t, n) {
          var e = Object(s.g)(n),
            a = Object(s.g)(t) * e,
            c = Object(s.t)(t) * e,
            f = Object(s.t)(n),
            l = f * o - c * u;
          return [
            Object(s.e)(c * o + f * u, a * r + l * i),
            Object(s.c)(l * r - a * i),
          ];
        }),
        e
      );
    }
    n.b = i;
    var c = e(176),
      s = e(1);
    (r.invert = r),
      (n.a = function (t) {
        function n(n) {
          return (
            (n = t(n[0] * s.r, n[1] * s.r)), (n[0] *= s.h), (n[1] *= s.h), n
          );
        }
        return (
          (t = i(t[0] * s.r, t[1] * s.r, t.length > 2 ? t[2] * s.r : 0)),
          (n.invert = function (n) {
            return (
              (n = t.invert(n[0] * s.r, n[1] * s.r)),
              (n[0] *= s.h),
              (n[1] *= s.h),
              n
            );
          }),
          n
        );
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      function l(i, o) {
        return t <= i && i <= e && n <= o && o <= r;
      }
      function h(i, o, u, a) {
        var c = 0,
          s = 0;
        if (
          null == i ||
          (c = d(i, u)) !== (s = d(o, u)) ||
          (v(i, o) < 0) ^ (u > 0)
        )
          do {
            a.point(0 === c || 3 === c ? t : e, c > 1 ? r : n);
          } while ((c = (c + u + 4) % 4) !== s);
        else a.point(o[0], o[1]);
      }
      function d(r, o) {
        return Object(i.a)(r[0] - t) < i.i
          ? o > 0
            ? 0
            : 3
          : Object(i.a)(r[0] - e) < i.i
          ? o > 0
            ? 2
            : 1
          : Object(i.a)(r[1] - n) < i.i
          ? o > 0
            ? 1
            : 0
          : o > 0
          ? 3
          : 2;
      }
      function p(t, n) {
        return v(t.x, n.x);
      }
      function v(t, n) {
        var e = d(t, 1),
          r = d(n, 1);
        return e !== r
          ? e - r
          : 0 === e
          ? n[1] - t[1]
          : 1 === e
          ? t[0] - n[0]
          : 2 === e
          ? t[1] - n[1]
          : n[0] - t[0];
      }
      return function (i) {
        function d(t, n) {
          l(t, n) && D.point(t, n);
        }
        function v() {
          for (var n = 0, e = 0, i = x.length; e < i; ++e)
            for (
              var o,
                u,
                a = x[e],
                c = 1,
                s = a.length,
                f = a[0],
                l = f[0],
                h = f[1];
              c < s;
              ++c
            )
              (o = l),
                (u = h),
                (f = a[c]),
                (l = f[0]),
                (h = f[1]),
                u <= r
                  ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n
                  : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
          return n;
        }
        function g() {
          (D = k), (O = []), (x = []), (N = !0);
        }
        function b() {
          var t = v(),
            n = N && t,
            e = (O = Object(c.n)(O)).length;
          (n || e) &&
            (i.polygonStart(),
            n && (i.lineStart(), h(null, null, 1, i), i.lineEnd()),
            e && Object(a.a)(O, p, t, h, i),
            i.polygonEnd()),
            (D = i),
            (O = x = w = null);
        }
        function m() {
          (I.point = _),
            x && x.push((w = [])),
            (M = !0),
            (S = !1),
            (C = A = NaN);
        }
        function y() {
          O && (_(j, T), E && S && k.rejoin(), O.push(k.result())),
            (I.point = d),
            S && D.lineEnd();
        }
        function _(i, o) {
          var a = l(i, o);
          if ((x && w.push([i, o]), M))
            (j = i),
              (T = o),
              (E = a),
              (M = !1),
              a && (D.lineStart(), D.point(i, o));
          else if (a && S) D.point(i, o);
          else {
            var c = [
                (C = Math.max(f, Math.min(s, C))),
                (A = Math.max(f, Math.min(s, A))),
              ],
              h = [
                (i = Math.max(f, Math.min(s, i))),
                (o = Math.max(f, Math.min(s, o))),
              ];
            Object(u.a)(c, h, t, n, e, r)
              ? (S || (D.lineStart(), D.point(c[0], c[1])),
                D.point(h[0], h[1]),
                a || D.lineEnd(),
                (N = !1))
              : a && (D.lineStart(), D.point(i, o), (N = !1));
          }
          (C = i), (A = o), (S = a);
        }
        var O,
          x,
          w,
          j,
          T,
          E,
          C,
          A,
          S,
          M,
          N,
          D = i,
          k = Object(o.a)(),
          I = {
            point: d,
            lineStart: m,
            lineEnd: y,
            polygonStart: g,
            polygonEnd: b,
          };
        return I;
      };
    }
    n.a = r;
    var i = e(1),
      o = e(179),
      u = e(396),
      a = e(180),
      c = e(8),
      s = 1e9,
      f = -s;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n) {
        var e = new i();
        for (var r in t) e[r] = t[r];
        return (e.stream = n), e;
      };
    }
    function i() {}
    (n.b = r),
      (n.a = function (t) {
        return { stream: r(t) };
      }),
      (i.prototype = {
        constructor: i,
        point: function (t, n) {
          this.stream.point(t, n);
        },
        sphere: function () {
          this.stream.sphere();
        },
        lineStart: function () {
          this.stream.lineStart();
        },
        lineEnd: function () {
          this.stream.lineEnd();
        },
        polygonStart: function () {
          this.stream.polygonStart();
        },
        polygonEnd: function () {
          this.stream.polygonEnd();
        },
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e, r, i) {
      for (
        var o,
          u = t.children,
          a = -1,
          c = u.length,
          s = t.value && (i - e) / t.value;
        ++a < c;

      )
        (o = u[a]),
          (o.x0 = n),
          (o.x1 = r),
          (o.y0 = e),
          (o.y1 = e += o.value * s);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(112);
    n.a = function (t, n) {
      return function (e, i) {
        var o = Object(r.a)(e).mimeType(t).response(n);
        if (null != i) {
          if ("function" != typeof i) throw new Error("invalid callback: " + i);
          return o.get(i);
        }
        return o;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return (n -= t = +t)
        ? function (e) {
            return (e - t) / n;
          }
        : Object(d.a)(n);
    }
    function i(t) {
      return function (n, e) {
        var r = t((n = +n), (e = +e));
        return function (t) {
          return t <= n ? 0 : t >= e ? 1 : r(t);
        };
      };
    }
    function o(t) {
      return function (n, e) {
        var r = t((n = +n), (e = +e));
        return function (t) {
          return t <= 0 ? n : t >= 1 ? e : r(t);
        };
      };
    }
    function u(t, n, e, r) {
      var i = t[0],
        o = t[1],
        u = n[0],
        a = n[1];
      return (
        o < i ? ((i = e(o, i)), (u = r(a, u))) : ((i = e(i, o)), (u = r(u, a))),
        function (t) {
          return u(i(t));
        }
      );
    }
    function a(t, n, e, r) {
      var i = Math.min(t.length, n.length) - 1,
        o = new Array(i),
        u = new Array(i),
        a = -1;
      for (
        t[i] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
        ++a < i;

      )
        (o[a] = e(t[a], t[a + 1])), (u[a] = r(n[a], n[a + 1]));
      return function (n) {
        var e = Object(f.b)(t, n, 1, i) - 1;
        return u[e](o[e](n));
      };
    }
    function c(t, n) {
      return n
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp());
    }
    function s(t, n) {
      function e() {
        return (
          (s = Math.min(g.length, b.length) > 2 ? a : u), (f = d = null), c
        );
      }
      function c(n) {
        return (f || (f = s(g, b, y ? i(t) : t, m)))(+n);
      }
      var s,
        f,
        d,
        g = v,
        b = v,
        m = l.a,
        y = !1;
      return (
        (c.invert = function (t) {
          return (d || (d = s(b, g, r, y ? o(n) : n)))(+t);
        }),
        (c.domain = function (t) {
          return arguments.length ? ((g = h.a.call(t, p.a)), e()) : g.slice();
        }),
        (c.range = function (t) {
          return arguments.length ? ((b = h.b.call(t)), e()) : b.slice();
        }),
        (c.rangeRound = function (t) {
          return (b = h.b.call(t)), (m = l.r), e();
        }),
        (c.clamp = function (t) {
          return arguments.length ? ((y = !!t), e()) : y;
        }),
        (c.interpolate = function (t) {
          return arguments.length ? ((m = t), e()) : m;
        }),
        e()
      );
    }
    (n.c = r), (n.a = c), (n.b = s);
    var f = e(8),
      l = e(11),
      h = e(25),
      d = e(113),
      p = e(197),
      v = [0, 1];
  },
  function (t, n, e) {
    "use strict";
    var r = e(5);
    e.d(n, "g", function () {
      return r.a;
    });
    var i = e(472);
    e.d(n, "h", function () {
      return i.a;
    }),
      e.d(n, "i", function () {
        return i.b;
      }),
      e.d(n, "L", function () {
        return i.a;
      }),
      e.d(n, "M", function () {
        return i.b;
      });
    var o = e(473);
    e.d(n, "r", function () {
      return o.a;
    }),
      e.d(n, "s", function () {
        return o.b;
      }),
      e.d(n, "V", function () {
        return o.a;
      }),
      e.d(n, "W", function () {
        return o.b;
      });
    var u = e(474);
    e.d(n, "j", function () {
      return u.a;
    }),
      e.d(n, "k", function () {
        return u.b;
      });
    var a = e(475);
    e.d(n, "e", function () {
      return a.a;
    }),
      e.d(n, "f", function () {
        return a.b;
      });
    var c = e(476);
    e.d(n, "a", function () {
      return c.b;
    }),
      e.d(n, "b", function () {
        return c.a;
      });
    var s = e(477);
    e.d(n, "B", function () {
      return s.g;
    }),
      e.d(n, "C", function () {
        return s.h;
      }),
      e.d(n, "t", function () {
        return s.g;
      }),
      e.d(n, "u", function () {
        return s.h;
      }),
      e.d(n, "l", function () {
        return s.c;
      }),
      e.d(n, "m", function () {
        return s.d;
      }),
      e.d(n, "x", function () {
        return s.k;
      }),
      e.d(n, "y", function () {
        return s.l;
      }),
      e.d(n, "z", function () {
        return s.m;
      }),
      e.d(n, "A", function () {
        return s.n;
      }),
      e.d(n, "v", function () {
        return s.i;
      }),
      e.d(n, "w", function () {
        return s.j;
      }),
      e.d(n, "c", function () {
        return s.a;
      }),
      e.d(n, "d", function () {
        return s.b;
      }),
      e.d(n, "p", function () {
        return s.e;
      }),
      e.d(n, "q", function () {
        return s.f;
      });
    var f = e(478);
    e.d(n, "n", function () {
      return f.a;
    }),
      e.d(n, "o", function () {
        return f.b;
      });
    var l = e(479);
    e.d(n, "D", function () {
      return l.a;
    }),
      e.d(n, "E", function () {
        return l.b;
      });
    var h = e(480);
    e.d(n, "N", function () {
      return h.a;
    }),
      e.d(n, "O", function () {
        return h.b;
      });
    var d = e(481);
    e.d(n, "J", function () {
      return d.a;
    }),
      e.d(n, "K", function () {
        return d.b;
      });
    var p = e(482);
    e.d(n, "F", function () {
      return p.a;
    }),
      e.d(n, "G", function () {
        return p.b;
      });
    var v = e(483);
    e.d(n, "_5", function () {
      return v.g;
    }),
      e.d(n, "_6", function () {
        return v.h;
      }),
      e.d(n, "X", function () {
        return v.g;
      }),
      e.d(n, "Y", function () {
        return v.h;
      }),
      e.d(n, "P", function () {
        return v.c;
      }),
      e.d(n, "Q", function () {
        return v.d;
      }),
      e.d(n, "_1", function () {
        return v.k;
      }),
      e.d(n, "_2", function () {
        return v.l;
      }),
      e.d(n, "_3", function () {
        return v.m;
      }),
      e.d(n, "_4", function () {
        return v.n;
      }),
      e.d(n, "Z", function () {
        return v.i;
      }),
      e.d(n, "_0", function () {
        return v.j;
      }),
      e.d(n, "H", function () {
        return v.a;
      }),
      e.d(n, "I", function () {
        return v.b;
      }),
      e.d(n, "T", function () {
        return v.e;
      }),
      e.d(n, "U", function () {
        return v.f;
      });
    var g = e(484);
    e.d(n, "R", function () {
      return g.a;
    }),
      e.d(n, "S", function () {
        return g.b;
      });
    var b = e(485);
    e.d(n, "_7", function () {
      return b.a;
    }),
      e.d(n, "_8", function () {
        return b.b;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    (r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(t, n);
        }
      },
    }),
      (n.a = function (t) {
        return new r(t);
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {};
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + n) / 6,
        (t._y0 + 4 * t._y1 + e) / 6
      );
    }
    function i(t) {
      this._context = t;
    }
    (n.c = r),
      (n.a = i),
      (i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              r(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              r(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n);
        },
      }),
      (n.b = function (t) {
        return new i(t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      t._context.bezierCurveTo(
        t._x1 + t._k * (t._x2 - t._x0),
        t._y1 + t._k * (t._y2 - t._y0),
        t._x2 + t._k * (t._x1 - n),
        t._y2 + t._k * (t._y1 - e),
        t._x2,
        t._y2
      );
    }
    function i(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    (n.c = r),
      (n.a = i),
      (i.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x2, this._y2);
              break;
            case 3:
              r(this, this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              (this._point = 2), (this._x1 = t), (this._y1 = n);
              break;
            case 2:
              this._point = 3;
            default:
              r(this, t, n);
          }
          (this._x0 = this._x1),
            (this._x1 = this._x2),
            (this._x2 = t),
            (this._y0 = this._y1),
            (this._y1 = this._y2),
            (this._y2 = n);
        },
      }),
      (n.b = (function t(n) {
        function e(t) {
          return new i(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0));
  },
  ,
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    var r = e(40);
    n.a = function (t, n, e) {
      if ((null == e && (e = r.a), (i = t.length))) {
        if ((n = +n) <= 0 || i < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[i - 1], i - 1, t);
        var i,
          o = (i - 1) * n,
          u = Math.floor(o),
          a = +e(t[u], u, t);
        return a + (+e(t[u + 1], u + 1, t) - a) * (o - u);
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(264);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(155);
    e.d(n, "b", function () {
      return i.a;
    }),
      e.d(n, "c", function () {
        return i.b;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(85);
    n.a = function (t) {
      var n = (t += ""),
        e = n.indexOf(":");
      return (
        e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        r.a.hasOwnProperty(n) ? { space: r.a[n], local: t } : t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return r;
    });
    var r = "http://www.w3.org/1999/xhtml";
    n.a = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: r,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    n.a = function (t) {
      return null == t
        ? r
        : function () {
            return this.querySelector(t);
          };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      return (
        (t = i(t, n, e)),
        function (n) {
          var e = n.relatedTarget;
          (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
            t.call(this, n);
        }
      );
    }
    function i(t, n, e) {
      return function (r) {
        var i = f;
        f = r;
        try {
          t.call(this, this.__data__, n, e);
        } finally {
          f = i;
        }
      };
    }
    function o(t) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (t) {
          var n = "",
            e = t.indexOf(".");
          return (
            e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
            { type: t, name: n }
          );
        });
    }
    function u(t) {
      return function () {
        var n = this.__on;
        if (n) {
          for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
            (e = n[r]),
              (t.type && e.type !== t.type) || e.name !== t.name
                ? (n[++i] = e)
                : this.removeEventListener(e.type, e.listener, e.capture);
          ++i ? (n.length = i) : delete this.__on;
        }
      };
    }
    function a(t, n, e) {
      var o = s.hasOwnProperty(t.type) ? r : i;
      return function (r, i, u) {
        var a,
          c = this.__on,
          s = o(n, i, u);
        if (c)
          for (var f = 0, l = c.length; f < l; ++f)
            if ((a = c[f]).type === t.type && a.name === t.name)
              return (
                this.removeEventListener(a.type, a.listener, a.capture),
                this.addEventListener(
                  a.type,
                  (a.listener = s),
                  (a.capture = e)
                ),
                void (a.value = n)
              );
        this.addEventListener(t.type, s, e),
          (a = {
            type: t.type,
            name: t.name,
            value: n,
            listener: s,
            capture: e,
          }),
          c ? c.push(a) : (this.__on = [a]);
      };
    }
    function c(t, n, e, r) {
      var i = f;
      (t.sourceEvent = f), (f = t);
      try {
        return n.apply(e, r);
      } finally {
        f = i;
      }
    }
    e.d(n, "c", function () {
      return f;
    }),
      (n.a = c);
    var s = {},
      f = null;
    if ("undefined" != typeof document) {
      "onmouseenter" in document.documentElement ||
        (s = { mouseenter: "mouseover", mouseleave: "mouseout" });
    }
    n.b = function (t, n, e) {
      var r,
        i,
        c = o(t + ""),
        s = c.length;
      {
        if (!(arguments.length < 2)) {
          for (f = n ? a : u, null == e && (e = !1), r = 0; r < s; ++r)
            this.each(f(c[r], n, e));
          return this;
        }
        var f = this.node().__on;
        if (f)
          for (var l, h = 0, d = f.length; h < d; ++h)
            for (r = 0, l = f[h]; r < s; ++r)
              if ((i = c[r]).type === l.type && i.name === l.name)
                return l.value;
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(88);
    n.a = function () {
      for (var t, n = r.c; (t = n.sourceEvent); ) n = t;
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(13),
      i = e(158),
      o = e(161),
      u = e(162),
      a = e(63),
      c = e(163),
      s = e(164),
      f = e(160);
    n.a = function (t, n) {
      var e,
        l = typeof n;
      return null == n || "boolean" === l
        ? Object(f.a)(n)
        : ("number" === l
            ? a.a
            : "string" === l
            ? (e = Object(r.a)(n))
              ? ((n = e), i.a)
              : s.a
            : n instanceof r.a
            ? i.a
            : n instanceof Date
            ? u.a
            : Array.isArray(n)
            ? o.a
            : ("function" != typeof n.valueOf &&
                "function" != typeof n.toString) ||
              isNaN(n)
            ? c.a
            : a.a)(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    function i(t) {
      var n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (n = O.exec(t))
          ? ((n = parseInt(n[1], 16)),
            new s(
              ((n >> 8) & 15) | ((n >> 4) & 240),
              ((n >> 4) & 15) | (240 & n),
              ((15 & n) << 4) | (15 & n),
              1
            ))
          : (n = x.exec(t))
          ? o(parseInt(n[1], 16))
          : (n = w.exec(t))
          ? new s(n[1], n[2], n[3], 1)
          : (n = j.exec(t))
          ? new s((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
          : (n = T.exec(t))
          ? u(n[1], n[2], n[3], n[4])
          : (n = E.exec(t))
          ? u((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
          : (n = C.exec(t))
          ? f(n[1], n[2] / 100, n[3] / 100, 1)
          : (n = A.exec(t))
          ? f(n[1], n[2] / 100, n[3] / 100, n[4])
          : S.hasOwnProperty(t)
          ? o(S[t])
          : "transparent" === t
          ? new s(NaN, NaN, NaN, 0)
          : null
      );
    }
    function o(t) {
      return new s((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function u(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new s(t, n, e, r);
    }
    function a(t) {
      return (
        t instanceof r || (t = i(t)),
        t ? ((t = t.rgb()), new s(t.r, t.g, t.b, t.opacity)) : new s()
      );
    }
    function c(t, n, e, r) {
      return 1 === arguments.length ? a(t) : new s(t, n, e, null == r ? 1 : r);
    }
    function s(t, n, e, r) {
      (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
    }
    function f(t, n, e, r) {
      return (
        r <= 0
          ? (t = n = e = NaN)
          : e <= 0 || e >= 1
          ? (t = n = NaN)
          : n <= 0 && (t = NaN),
        new d(t, n, e, r)
      );
    }
    function l(t) {
      if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
      if ((t instanceof r || (t = i(t)), !t)) return new d();
      if (t instanceof d) return t;
      t = t.rgb();
      var n = t.r / 255,
        e = t.g / 255,
        o = t.b / 255,
        u = Math.min(n, e, o),
        a = Math.max(n, e, o),
        c = NaN,
        s = a - u,
        f = (a + u) / 2;
      return (
        s
          ? ((c =
              n === a
                ? (e - o) / s + 6 * (e < o)
                : e === a
                ? (o - n) / s + 2
                : (n - e) / s + 4),
            (s /= f < 0.5 ? a + u : 2 - a - u),
            (c *= 60))
          : (s = f > 0 && f < 1 ? 0 : c),
        new d(c, s, f, t.opacity)
      );
    }
    function h(t, n, e, r) {
      return 1 === arguments.length ? l(t) : new d(t, n, e, null == r ? 1 : r);
    }
    function d(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    function p(t, n, e) {
      return (
        255 *
        (t < 60
          ? n + ((e - n) * t) / 60
          : t < 180
          ? e
          : t < 240
          ? n + ((e - n) * (240 - t)) / 60
          : n)
      );
    }
    (n.a = r),
      e.d(n, "d", function () {
        return g;
      }),
      e.d(n, "c", function () {
        return b;
      }),
      (n.e = i),
      (n.h = a),
      (n.g = c),
      (n.b = s),
      (n.f = h);
    var v = e(92),
      g = 0.7,
      b = 1 / g,
      m = "\\s*([+-]?\\d+)\\s*",
      y = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      _ = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      O = /^#([0-9a-f]{3})$/,
      x = /^#([0-9a-f]{6})$/,
      w = new RegExp("^rgb\\(" + [m, m, m] + "\\)$"),
      j = new RegExp("^rgb\\(" + [_, _, _] + "\\)$"),
      T = new RegExp("^rgba\\(" + [m, m, m, y] + "\\)$"),
      E = new RegExp("^rgba\\(" + [_, _, _, y] + "\\)$"),
      C = new RegExp("^hsl\\(" + [y, _, _] + "\\)$"),
      A = new RegExp("^hsla\\(" + [y, _, _, y] + "\\)$"),
      S = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    Object(v.a)(r, i, {
      displayable: function () {
        return this.rgb().displayable();
      },
      toString: function () {
        return this.rgb() + "";
      },
    }),
      Object(v.a)(
        s,
        c,
        Object(v.b)(r, {
          brighter: function (t) {
            return (
              (t = null == t ? b : Math.pow(b, t)),
              new s(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? g : Math.pow(g, t)),
              new s(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function () {
            return this;
          },
          displayable: function () {
            return (
              0 <= this.r &&
              this.r <= 255 &&
              0 <= this.g &&
              this.g <= 255 &&
              0 <= this.b &&
              this.b <= 255 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          toString: function () {
            var t = this.opacity;
            return (
              (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
              (1 === t ? "rgb(" : "rgba(") +
                Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
                ", " +
                Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
                (1 === t ? ")" : ", " + t + ")")
            );
          },
        })
      ),
      Object(v.a)(
        d,
        h,
        Object(v.b)(r, {
          brighter: function (t) {
            return (
              (t = null == t ? b : Math.pow(b, t)),
              new d(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? g : Math.pow(g, t)),
              new d(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              e = this.l,
              r = e + (e < 0.5 ? e : 1 - e) * n,
              i = 2 * e - r;
            return new s(
              p(t >= 240 ? t - 240 : t + 120, i, r),
              p(t, i, r),
              p(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity
            );
          },
          displayable: function () {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
        })
      );
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = Object.create(t.prototype);
      for (var r in n) e[r] = n[r];
      return e;
    }
    (n.b = r),
      (n.a = function (t, n, e) {
        (t.prototype = n.prototype = e), (e.constructor = t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r, i) {
      var o = t * t,
        u = o * t;
      return (
        ((1 - 3 * t + 3 * o - u) * n +
          (4 - 6 * o + 3 * u) * e +
          (1 + 3 * t + 3 * o - 3 * u) * r +
          u * i) /
        6
      );
    }
    (n.a = r),
      (n.b = function (t) {
        var n = t.length - 1;
        return function (e) {
          var i =
              e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
            o = t[i],
            u = t[i + 1],
            a = i > 0 ? t[i - 1] : 2 * o - u,
            c = i < n - 1 ? t[i + 2] : 2 * u - o;
          return r((e - i / n) * n, a, o, u, c);
        };
      });
  },
  function (t, n, e) {
    "use strict";
    var r = (e(313), e(20));
    e.d(n, "c", function () {
      return r.b;
    });
    var i = e(344);
    e.d(n, "a", function () {
      return i.a;
    });
    var o = e(165);
    e.d(n, "b", function () {
      return o.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return y || (x(i), (y = O.now() + _));
    }
    function i() {
      y = 0;
    }
    function o() {
      this._call = this._time = this._next = null;
    }
    function u(t, n, e) {
      var r = new o();
      return r.restart(t, n, e), r;
    }
    function a() {
      r(), ++p;
      for (var t, n = h; n; )
        (t = y - n._time) >= 0 && n._call.call(null, t), (n = n._next);
      --p;
    }
    function c() {
      (y = (m = O.now()) + _), (p = v = 0);
      try {
        a();
      } finally {
        (p = 0), f(), (y = 0);
      }
    }
    function s() {
      var t = O.now(),
        n = t - m;
      n > b && ((_ -= n), (m = t));
    }
    function f() {
      for (var t, n, e = h, r = 1 / 0; e; )
        e._call
          ? (r > e._time && (r = e._time), (t = e), (e = e._next))
          : ((n = e._next),
            (e._next = null),
            (e = t ? (t._next = n) : (h = n)));
      (d = t), l(r);
    }
    function l(t) {
      if (!p) {
        v && (v = clearTimeout(v));
        t - y > 24
          ? (t < 1 / 0 && (v = setTimeout(c, t - O.now() - _)),
            g && (g = clearInterval(g)))
          : (g || ((m = O.now()), (g = setInterval(s, b))), (p = 1), x(c));
      }
    }
    (n.b = r), (n.a = o), (n.c = u), (n.d = a);
    var h,
      d,
      p = 0,
      v = 0,
      g = 0,
      b = 1e3,
      m = 0,
      y = 0,
      _ = 0,
      O =
        "object" == typeof performance && performance.now ? performance : Date,
      x =
        "object" == typeof window && window.requestAnimationFrame
          ? window.requestAnimationFrame.bind(window)
          : function (t) {
              setTimeout(t, 17);
            };
    o.prototype = u.prototype = {
      constructor: o,
      restart: function (t, n, e) {
        if ("function" != typeof t)
          throw new TypeError("callback is not a function");
        (e = (null == e ? r() : +e) + (null == n ? 0 : +n)),
          this._next ||
            d === this ||
            (d ? (d._next = this) : (h = this), (d = this)),
          (this._call = t),
          (this._time = e),
          l();
      },
      stop: function () {
        this._call && ((this._call = null), (this._time = 1 / 0), l());
      },
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    function i(t, n) {
      var e = new r();
      if (t instanceof r)
        t.each(function (t, n) {
          e.set(n, t);
        });
      else if (Array.isArray(t)) {
        var i,
          o = -1,
          u = t.length;
        if (null == n) for (; ++o < u; ) e.set(o, t[o]);
        else for (; ++o < u; ) e.set(n((i = t[o]), o, t), i);
      } else if (t) for (var a in t) e.set(a, t[a]);
      return e;
    }
    e.d(n, "b", function () {
      return o;
    });
    var o = "$";
    (r.prototype = i.prototype = {
      constructor: r,
      has: function (t) {
        return o + t in this;
      },
      get: function (t) {
        return this[o + t];
      },
      set: function (t, n) {
        return (this[o + t] = n), this;
      },
      remove: function (t) {
        var n = o + t;
        return n in this && delete this[n];
      },
      clear: function () {
        for (var t in this) t[0] === o && delete this[t];
      },
      keys: function () {
        var t = [];
        for (var n in this) n[0] === o && t.push(n.slice(1));
        return t;
      },
      values: function () {
        var t = [];
        for (var n in this) n[0] === o && t.push(this[n]);
        return t;
      },
      entries: function () {
        var t = [];
        for (var n in this)
          n[0] === o && t.push({ key: n.slice(1), value: this[n] });
        return t;
      },
      size: function () {
        var t = 0;
        for (var n in this) n[0] === o && ++t;
        return t;
      },
      empty: function () {
        for (var t in this) if (t[0] === o) return !1;
        return !0;
      },
      each: function (t) {
        for (var n in this) n[0] === o && t(this[n], n.slice(1), this);
      },
    }),
      (n.a = i);
  },
  function (t, n, e) {
    "use strict";
    var r = e(98);
    e.d(n, "e", function () {
      return r.a;
    });
    var i = e(359);
    e.d(n, "c", function () {
      return i.c;
    }),
      e.d(n, "d", function () {
        return i.d;
      }),
      e.d(n, "a", function () {
        return i.a;
      }),
      e.d(n, "b", function () {
        return i.b;
      });
    var o = e(360);
    e.d(n, "h", function () {
      return o.c;
    }),
      e.d(n, "i", function () {
        return o.d;
      }),
      e.d(n, "f", function () {
        return o.a;
      }),
      e.d(n, "g", function () {
        return o.b;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return new Function(
        "d",
        "return {" +
          t
            .map(function (t, n) {
              return JSON.stringify(t) + ": d[" + n + "]";
            })
            .join(",") +
          "}"
      );
    }
    function i(t, n) {
      var e = r(t);
      return function (r, i) {
        return n(e(r), i, t);
      };
    }
    function o(t) {
      var n = Object.create(null),
        e = [];
      return (
        t.forEach(function (t) {
          for (var r in t) r in n || e.push((n[r] = r));
        }),
        e
      );
    }
    var u = {},
      a = {},
      c = 34,
      s = 10,
      f = 13;
    n.a = function (t) {
      function n(t, n) {
        var o,
          u,
          a = e(t, function (t, e) {
            if (o) return o(t, e - 1);
            (u = t), (o = n ? i(t, n) : r(t));
          });
        return (a.columns = u || []), a;
      }
      function e(t, n) {
        function e() {
          if (d) return a;
          if (p) return (p = !1), u;
          var n,
            e,
            r = l;
          if (t.charCodeAt(r) === c) {
            for (
              ;
              (l++ < o && t.charCodeAt(l) !== c) || t.charCodeAt(++l) === c;

            );
            return (
              (n = l) >= o
                ? (d = !0)
                : (e = t.charCodeAt(l++)) === s
                ? (p = !0)
                : e === f && ((p = !0), t.charCodeAt(l) === s && ++l),
              t.slice(r + 1, n - 1).replace(/""/g, '"')
            );
          }
          for (; l < o; ) {
            if ((e = t.charCodeAt((n = l++))) === s) p = !0;
            else if (e === f) (p = !0), t.charCodeAt(l) === s && ++l;
            else if (e !== g) continue;
            return t.slice(r, n);
          }
          return (d = !0), t.slice(r, o);
        }
        var r,
          i = [],
          o = t.length,
          l = 0,
          h = 0,
          d = o <= 0,
          p = !1;
        for (
          t.charCodeAt(o - 1) === s && --o, t.charCodeAt(o - 1) === f && --o;
          (r = e()) !== a;

        ) {
          for (var v = []; r !== u && r !== a; ) v.push(r), (r = e());
          (n && null == (v = n(v, h++))) || i.push(v);
        }
        return i;
      }
      function l(n, e) {
        return (
          null == e && (e = o(n)),
          [e.map(p).join(t)]
            .concat(
              n.map(function (n) {
                return e
                  .map(function (t) {
                    return p(n[t]);
                  })
                  .join(t);
              })
            )
            .join("\n")
        );
      }
      function h(t) {
        return t.map(d).join("\n");
      }
      function d(n) {
        return n.map(p).join(t);
      }
      function p(t) {
        return null == t
          ? ""
          : v.test((t += ""))
          ? '"' + t.replace(/"/g, '""') + '"'
          : t;
      }
      var v = new RegExp('["' + t + "\n\r]"),
        g = t.charCodeAt(0);
      return { parse: n, parseRows: e, format: l, formatRows: h };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      return 1e-6 * (Math.random() - 0.5);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(364);
    e.d(n, "a", function () {
      return r.a;
    });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e, r, i) {
      (this.node = t),
        (this.x0 = n),
        (this.y0 = e),
        (this.x1 = r),
        (this.y1 = i);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(382);
    e.d(n, "b", function () {
      return r.a;
    }),
      e.d(n, "a", function () {
        return r.b;
      }),
      e.d(n, "d", function () {
        return r.c;
      });
    var i = e(170);
    e.d(n, "c", function () {
      return i.a;
    });
    var o = e(171);
    e.d(n, "e", function () {
      return o.a;
    });
    var u = e(388);
    e.d(n, "f", function () {
      return u.a;
    });
    var a = e(389);
    e.d(n, "g", function () {
      return a.a;
    });
    var c = e(390);
    e.d(n, "h", function () {
      return c.a;
    });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      if (
        (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
          "e"
        )) < 0
      )
        return null;
      var e,
        r = t.slice(0, e);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      function e(t, n) {
        var e = Object(i.u)(a - 2 * o * Object(i.t)(n)) / o;
        return [e * Object(i.t)((t *= o)), c - e * Object(i.g)(t)];
      }
      var r = Object(i.t)(t),
        o = (r + Object(i.t)(n)) / 2;
      if (Object(i.a)(o) < i.i) return Object(u.a)(t);
      var a = 1 + r * (2 * o - r),
        c = Object(i.u)(a) / o;
      return (
        (e.invert = function (t, n) {
          var e = c - n;
          return [
            (Object(i.e)(t, Object(i.a)(e)) / o) * Object(i.s)(e),
            Object(i.c)((a - (t * t + e * e) * o * o) / (2 * o)),
          ];
        }),
        e
      );
    }
    n.a = r;
    var i = e(1),
      o = e(106),
      u = e(407);
    n.b = function () {
      return Object(o.a)(r).scale(155.424).center([0, 33.6442]);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = 0,
        e = i.o / 3,
        r = Object(o.b)(t),
        u = r(n, e);
      return (
        (u.parallels = function (t) {
          return arguments.length
            ? r((n = t[0] * i.r), (e = t[1] * i.r))
            : [n * i.h, e * i.h];
        }),
        u
      );
    }
    n.a = r;
    var i = e(1),
      o = e(14);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = t.clipExtent && t.clipExtent();
      return (
        t.scale(150).translate([0, 0]),
        null != r && t.clipExtent(null),
        Object(c.a)(e, t.stream(s.a)),
        n(s.a.result()),
        null != r && t.clipExtent(r),
        t
      );
    }
    function i(t, n, e) {
      return r(
        t,
        function (e) {
          var r = n[1][0] - n[0][0],
            i = n[1][1] - n[0][1],
            o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
            u = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2,
            a = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
          t.scale(150 * o).translate([u, a]);
        },
        e
      );
    }
    function o(t, n, e) {
      return i(t, [[0, 0], n], e);
    }
    function u(t, n, e) {
      return r(
        t,
        function (e) {
          var r = +n,
            i = r / (e[1][0] - e[0][0]),
            o = (r - i * (e[1][0] + e[0][0])) / 2,
            u = -i * e[0][1];
          t.scale(150 * i).translate([o, u]);
        },
        e
      );
    }
    function a(t, n, e) {
      return r(
        t,
        function (e) {
          var r = +n,
            i = r / (e[1][1] - e[0][1]),
            o = -i * e[0][0],
            u = (r - i * (e[1][1] + e[0][1])) / 2;
          t.scale(150 * i).translate([o, u]);
        },
        e
      );
    }
    (n.a = i), (n.c = o), (n.d = u), (n.b = a);
    var c = e(24),
      s = e(186);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [t, Object(o.n)(Object(o.v)((o.l + n) / 2))];
    }
    function i(t) {
      function n() {
        var n = o.o * l(),
          a = s(Object(u.a)(s.rotate()).invert([0, 0]));
        return d(
          null == p
            ? [
                [a[0] - n, a[1] - n],
                [a[0] + n, a[1] + n],
              ]
            : t === r
            ? [
                [Math.max(a[0] - n, p), e],
                [Math.min(a[0] + n, i), c],
              ]
            : [
                [p, Math.max(a[1] - n, e)],
                [i, Math.min(a[1] + n, c)],
              ]
        );
      }
      var e,
        i,
        c,
        s = Object(a.a)(t),
        f = s.center,
        l = s.scale,
        h = s.translate,
        d = s.clipExtent,
        p = null;
      return (
        (s.scale = function (t) {
          return arguments.length ? (l(t), n()) : l();
        }),
        (s.translate = function (t) {
          return arguments.length ? (h(t), n()) : h();
        }),
        (s.center = function (t) {
          return arguments.length ? (f(t), n()) : f();
        }),
        (s.clipExtent = function (t) {
          return arguments.length
            ? (null == t
                ? (p = e = i = c = null)
                : ((p = +t[0][0]),
                  (e = +t[0][1]),
                  (i = +t[1][0]),
                  (c = +t[1][1])),
              n())
            : null == p
            ? null
            : [
                [p, e],
                [i, c],
              ];
        }),
        n()
      );
    }
    (n.c = r), (n.b = i);
    var o = e(1),
      u = e(67),
      a = e(14);
    (r.invert = function (t, n) {
      return [t, 2 * Object(o.d)(Object(o.k)(n)) - o.l];
    }),
      (n.a = function () {
        return i(r).scale(961 / o.w);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e,
        r,
        i,
        u,
        s,
        f = new c(t),
        l = +t.value && (f.value = t.value),
        h = [f];
      for (null == n && (n = o); (e = h.pop()); )
        if ((l && (e.value = +e.data.value), (i = n(e.data)) && (s = i.length)))
          for (e.children = new Array(s), u = s - 1; u >= 0; --u)
            h.push((r = e.children[u] = new c(i[u]))),
              (r.parent = e),
              (r.depth = e.depth + 1);
      return f.eachBefore(a);
    }
    function i() {
      return r(this).eachBefore(u);
    }
    function o(t) {
      return t.children;
    }
    function u(t) {
      t.data = t.data.data;
    }
    function a(t) {
      var n = 0;
      do {
        t.height = n;
      } while ((t = t.parent) && t.height < ++n);
    }
    function c(t) {
      (this.data = t), (this.depth = this.height = 0), (this.parent = null);
    }
    (n.c = r), (n.b = a), (n.a = c);
    var s = e(421),
      f = e(422),
      l = e(423),
      h = e(424),
      d = e(425),
      p = e(426),
      v = e(427),
      g = e(428),
      b = e(429),
      m = e(430),
      y = e(431);
    c.prototype = r.prototype = {
      constructor: c,
      count: s.a,
      each: f.a,
      eachAfter: h.a,
      eachBefore: l.a,
      sum: d.a,
      sort: p.a,
      path: v.a,
      ancestors: g.a,
      descendants: b.a,
      leaves: m.a,
      links: y.a,
      copy: i,
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return null == t ? null : i(t);
    }
    function i(t) {
      if ("function" != typeof t) throw new Error();
      return t;
    }
    (n.a = r), (n.b = i);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r, u, a) {
      for (
        var c,
          s,
          f,
          l,
          h,
          d,
          p,
          v,
          g,
          b,
          m,
          y = [],
          _ = n.children,
          O = 0,
          x = 0,
          w = _.length,
          j = n.value;
        O < w;

      ) {
        (f = u - e), (l = a - r);
        do {
          h = _[x++].value;
        } while (!h && x < w);
        for (
          d = p = h,
            b = Math.max(l / f, f / l) / (j * t),
            m = h * h * b,
            g = Math.max(p / m, m / d);
          x < w;
          ++x
        ) {
          if (
            ((h += s = _[x].value),
            s < d && (d = s),
            s > p && (p = s),
            (m = h * h * b),
            (v = Math.max(p / m, m / d)) > g)
          ) {
            h -= s;
            break;
          }
          g = v;
        }
        y.push((c = { value: h, dice: f < l, children: _.slice(O, x) })),
          c.dice
            ? Object(i.a)(c, e, r, u, j ? (r += (l * h) / j) : a)
            : Object(o.a)(c, e, r, j ? (e += (f * h) / j) : u, a),
          (j -= h),
          (O = x);
      }
      return y;
    }
    e.d(n, "b", function () {
      return u;
    }),
      (n.c = r);
    var i = e(45),
      o = e(70),
      u = (1 + Math.sqrt(5)) / 2;
    n.a = (function t(n) {
      function e(t, e, i, o, u) {
        r(n, t, e, i, o, u);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })(u);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        t(null == n ? e : null);
      };
    }
    function i(t) {
      var n = t.responseType;
      return n && "text" !== n ? t.response : t.responseText;
    }
    var o = e(42),
      u = e(22);
    n.a = function (t, n) {
      function e(t) {
        var n,
          e = d.status;
        if ((!e && i(d)) || (e >= 200 && e < 300) || 304 === e) {
          if (s)
            try {
              n = s.call(a, d);
            } catch (t) {
              return void l.call("error", a, t);
            }
          else n = d;
          l.call("load", a, n);
        } else l.call("error", a, t);
      }
      var a,
        c,
        s,
        f,
        l = Object(u.a)("beforesend", "progress", "load", "error"),
        h = Object(o.c)(),
        d = new XMLHttpRequest(),
        p = null,
        v = null,
        g = 0;
      if (
        ("undefined" == typeof XDomainRequest ||
          "withCredentials" in d ||
          !/^(http(s)?:)?\/\//.test(t) ||
          (d = new XDomainRequest()),
        "onload" in d
          ? (d.onload = d.onerror = d.ontimeout = e)
          : (d.onreadystatechange = function (t) {
              d.readyState > 3 && e(t);
            }),
        (d.onprogress = function (t) {
          l.call("progress", a, t);
        }),
        (a = {
          header: function (t, n) {
            return (
              (t = (t + "").toLowerCase()),
              arguments.length < 2
                ? h.get(t)
                : (null == n ? h.remove(t) : h.set(t, n + ""), a)
            );
          },
          mimeType: function (t) {
            return arguments.length ? ((c = null == t ? null : t + ""), a) : c;
          },
          responseType: function (t) {
            return arguments.length ? ((f = t), a) : f;
          },
          timeout: function (t) {
            return arguments.length ? ((g = +t), a) : g;
          },
          user: function (t) {
            return arguments.length < 1
              ? p
              : ((p = null == t ? null : t + ""), a);
          },
          password: function (t) {
            return arguments.length < 1
              ? v
              : ((v = null == t ? null : t + ""), a);
          },
          response: function (t) {
            return (s = t), a;
          },
          get: function (t, n) {
            return a.send("GET", t, n);
          },
          post: function (t, n) {
            return a.send("POST", t, n);
          },
          send: function (n, e, i) {
            return (
              d.open(n, t, !0, p, v),
              null == c || h.has("accept") || h.set("accept", c + ",*/*"),
              d.setRequestHeader &&
                h.each(function (t, n) {
                  d.setRequestHeader(n, t);
                }),
              null != c && d.overrideMimeType && d.overrideMimeType(c),
              null != f && (d.responseType = f),
              g > 0 && (d.timeout = g),
              null == i && "function" == typeof e && ((i = e), (e = null)),
              null != i && 1 === i.length && (i = r(i)),
              null != i &&
                a.on("error", i).on("load", function (t) {
                  i(null, t);
                }),
              l.call("beforesend", a, d),
              d.send(null == e ? null : e),
              a
            );
          },
          abort: function () {
            return d.abort(), a;
          },
          on: function () {
            var t = l.on.apply(l, arguments);
            return t === l ? a : t;
          },
        }),
        null != n)
      ) {
        if ("function" != typeof n) throw new Error("invalid callback: " + n);
        return a.get(n);
      }
      return a;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(115);
    e.d(n, "d", function () {
      return r.a;
    }),
      e.d(n, "c", function () {
        return r.b;
      }),
      e.d(n, "f", function () {
        return r.c;
      }),
      e.d(n, "g", function () {
        return r.d;
      }),
      e.d(n, "h", function () {
        return r.e;
      });
    var i = e(200);
    e.d(n, "e", function () {
      return i.a;
    });
    var o = e(201);
    e.d(n, "a", function () {
      return o.a;
    });
    var u = e(486);
    e.d(n, "b", function () {
      return u.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return (
        (i = Object(s.a)(t)),
        (o = i.format),
        (u = i.parse),
        (a = i.utcFormat),
        (c = i.utcParse),
        i
      );
    }
    e.d(n, "b", function () {
      return o;
    }),
      e.d(n, "c", function () {
        return u;
      }),
      e.d(n, "d", function () {
        return a;
      }),
      e.d(n, "e", function () {
        return c;
      }),
      (n.a = r);
    var i,
      o,
      u,
      a,
      c,
      s = e(200);
    r({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(23),
      i = e(26),
      o = e(74),
      u = e(117);
    n.a = function () {
      function t(t) {
        var i,
          o,
          u,
          l = t.length,
          h = !1;
        for (null == c && (f = s((u = Object(r.a)()))), i = 0; i <= l; ++i)
          !(i < l && a((o = t[i]), i, t)) === h &&
            ((h = !h) ? f.lineStart() : f.lineEnd()),
            h && f.point(+n(o, i, t), +e(o, i, t));
        if (u) return (f = null), u + "" || null;
      }
      var n = u.a,
        e = u.b,
        a = Object(i.a)(!0),
        c = null,
        s = o.a,
        f = null;
      return (
        (t.x = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(i.a)(+e)), t)
            : n;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(i.a)(+n)), t)
            : e;
        }),
        (t.defined = function (n) {
          return arguments.length
            ? ((a = "function" == typeof n ? n : Object(i.a)(!!n)), t)
            : a;
        }),
        (t.curve = function (n) {
          return arguments.length ? ((s = n), null != c && (f = s(c)), t) : s;
        }),
        (t.context = function (n) {
          return arguments.length
            ? (null == n ? (c = f = null) : (f = s((c = n))), t)
            : c;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t[0];
    }
    function i(t) {
      return t[1];
    }
    (n.a = r), (n.b = i);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = t._x1,
        i = t._y1,
        u = t._x2,
        a = t._y2;
      if (t._l01_a > o.f) {
        var c = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
          s = 3 * t._l01_a * (t._l01_a + t._l12_a);
        (r = (r * c - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s),
          (i = (i * c - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s);
      }
      if (t._l23_a > o.f) {
        var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
          l = 3 * t._l23_a * (t._l23_a + t._l12_a);
        (u = (u * f + t._x1 * t._l23_2a - n * t._l12_2a) / l),
          (a = (a * f + t._y1 * t._l23_2a - e * t._l12_2a) / l);
      }
      t._context.bezierCurveTo(r, i, u, a, t._x2, t._y2);
    }
    function i(t, n) {
      (this._context = t), (this._alpha = n);
    }
    n.b = r;
    var o = e(48),
      u = e(77);
    (i.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            i = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + i * i, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            r(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
      (n.a = (function t(n) {
        function e(t) {
          return n ? new i(t, n) : new u.a(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5));
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      for (var n, e = 0, r = -1, i = t.length; ++r < i; )
        (n = +t[r][1]) && (e += n);
      return e;
    }
    n.b = r;
    var i = e(50);
    n.a = function (t) {
      var n = t.map(r);
      return Object(i.a)(t).sort(function (t, e) {
        return n[t] - n[e];
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this._ = null;
    }
    function i(t) {
      t.U = t.C = t.L = t.R = t.P = t.N = null;
    }
    function o(t, n) {
      var e = n,
        r = n.R,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (e.U = r),
        (e.R = r.L),
        e.R && (e.R.U = e),
        (r.L = e);
    }
    function u(t, n) {
      var e = n,
        r = n.L,
        i = e.U;
      i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
        (r.U = i),
        (e.U = r),
        (e.L = r.R),
        e.L && (e.L.U = e),
        (r.R = e);
    }
    function a(t) {
      for (; t.L; ) t = t.L;
      return t;
    }
    (n.a = i),
      (r.prototype = {
        constructor: r,
        insert: function (t, n) {
          var e, r, i;
          if (t) {
            if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
              for (t = t.R; t.L; ) t = t.L;
              t.L = n;
            } else t.R = n;
            e = t;
          } else
            this._
              ? ((t = a(this._)),
                (n.P = null),
                (n.N = t),
                (t.P = t.L = n),
                (e = t))
              : ((n.P = n.N = null), (this._ = n), (e = null));
          for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
            (r = e.U),
              e === r.L
                ? ((i = r.R),
                  i && i.C
                    ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                    : (t === e.R && (o(this, e), (t = e), (e = t.U)),
                      (e.C = !1),
                      (r.C = !0),
                      u(this, r)))
                : ((i = r.L),
                  i && i.C
                    ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                    : (t === e.L && (u(this, e), (t = e), (e = t.U)),
                      (e.C = !1),
                      (r.C = !0),
                      o(this, r))),
              (e = t.U);
          this._.C = !1;
        },
        remove: function (t) {
          t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
          var n,
            e,
            r,
            i = t.U,
            c = t.L,
            s = t.R;
          if (
            ((e = c ? (s ? a(s) : c) : s),
            i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
            c && s
              ? ((r = e.C),
                (e.C = t.C),
                (e.L = c),
                (c.U = e),
                e !== s
                  ? ((i = e.U),
                    (e.U = t.U),
                    (t = e.R),
                    (i.L = t),
                    (e.R = s),
                    (s.U = e))
                  : ((e.U = i), (i = e), (t = e.R)))
              : ((r = t.C), (t = e)),
            t && (t.U = i),
            !r)
          ) {
            if (t && t.C) return void (t.C = !1);
            do {
              if (t === this._) break;
              if (t === i.L) {
                if (
                  ((n = i.R),
                  n.C && ((n.C = !1), (i.C = !0), o(this, i), (n = i.R)),
                  (n.L && n.L.C) || (n.R && n.R.C))
                ) {
                  (n.R && n.R.C) ||
                    ((n.L.C = !1), (n.C = !0), u(this, n), (n = i.R)),
                    (n.C = i.C),
                    (i.C = n.R.C = !1),
                    o(this, i),
                    (t = this._);
                  break;
                }
              } else if (
                ((n = i.L),
                n.C && ((n.C = !1), (i.C = !0), u(this, i), (n = i.L)),
                (n.L && n.L.C) || (n.R && n.R.C))
              ) {
                (n.L && n.L.C) ||
                  ((n.R.C = !1), (n.C = !0), o(this, n), (n = i.L)),
                  (n.C = i.C),
                  (i.C = n.L.C = !1),
                  u(this, i),
                  (t = this._);
                break;
              }
              (n.C = !0), (t = i), (i = i.U);
            } while (!t.C);
            t && (t.C = !1);
          }
        },
      }),
      (n.b = r);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      var i = [null, null],
        u = s.e.push(i) - 1;
      return (
        (i.left = t),
        (i.right = n),
        e && o(i, t, n, e),
        r && o(i, n, t, r),
        s.b[t.index].halfedges.push(u),
        s.b[n.index].halfedges.push(u),
        i
      );
    }
    function i(t, n, e) {
      var r = [n, e];
      return (r.left = t), r;
    }
    function o(t, n, e, r) {
      t[0] || t[1]
        ? t.left === e
          ? (t[1] = r)
          : (t[0] = r)
        : ((t[0] = r), (t.left = n), (t.right = e));
    }
    function u(t, n, e, r, i) {
      var o,
        u = t[0],
        a = t[1],
        c = u[0],
        s = u[1],
        f = a[0],
        l = a[1],
        h = 0,
        d = 1,
        p = f - c,
        v = l - s;
      if (((o = n - c), p || !(o > 0))) {
        if (((o /= p), p < 0)) {
          if (o < h) return;
          o < d && (d = o);
        } else if (p > 0) {
          if (o > d) return;
          o > h && (h = o);
        }
        if (((o = r - c), p || !(o < 0))) {
          if (((o /= p), p < 0)) {
            if (o > d) return;
            o > h && (h = o);
          } else if (p > 0) {
            if (o < h) return;
            o < d && (d = o);
          }
          if (((o = e - s), v || !(o > 0))) {
            if (((o /= v), v < 0)) {
              if (o < h) return;
              o < d && (d = o);
            } else if (v > 0) {
              if (o > d) return;
              o > h && (h = o);
            }
            if (((o = i - s), v || !(o < 0))) {
              if (((o /= v), v < 0)) {
                if (o > d) return;
                o > h && (h = o);
              } else if (v > 0) {
                if (o < h) return;
                o < d && (d = o);
              }
              return (
                !(h > 0 || d < 1) ||
                (h > 0 && (t[0] = [c + h * p, s + h * v]),
                d < 1 && (t[1] = [c + d * p, s + d * v]),
                !0)
              );
            }
          }
        }
      }
    }
    function a(t, n, e, r, i) {
      var o = t[1];
      if (o) return !0;
      var u,
        a,
        c = t[0],
        s = t.left,
        f = t.right,
        l = s[0],
        h = s[1],
        d = f[0],
        p = f[1],
        v = (l + d) / 2,
        g = (h + p) / 2;
      if (p === h) {
        if (v < n || v >= r) return;
        if (l > d) {
          if (c) {
            if (c[1] >= i) return;
          } else c = [v, e];
          o = [v, i];
        } else {
          if (c) {
            if (c[1] < e) return;
          } else c = [v, i];
          o = [v, e];
        }
      } else if (((u = (l - d) / (p - h)), (a = g - u * v), u < -1 || u > 1))
        if (l > d) {
          if (c) {
            if (c[1] >= i) return;
          } else c = [(e - a) / u, e];
          o = [(i - a) / u, i];
        } else {
          if (c) {
            if (c[1] < e) return;
          } else c = [(i - a) / u, i];
          o = [(e - a) / u, e];
        }
      else if (h < p) {
        if (c) {
          if (c[0] >= r) return;
        } else c = [n, u * n + a];
        o = [r, u * r + a];
      } else {
        if (c) {
          if (c[0] < n) return;
        } else c = [r, u * r + a];
        o = [n, u * n + a];
      }
      return (t[0] = c), (t[1] = o), !0;
    }
    function c(t, n, e, r) {
      for (var i, o = s.e.length; o--; )
        (a((i = s.e[o]), t, n, e, r) &&
          u(i, t, n, e, r) &&
          (Math.abs(i[0][0] - i[1][0]) > s.f ||
            Math.abs(i[0][1] - i[1][1]) > s.f)) ||
          delete s.e[o];
    }
    (n.c = r), (n.b = i), (n.d = o), (n.a = c);
    var s = e(51);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    }),
      e.d(n, "a", function () {
        return a;
      });
    var r = e(28),
      i = e(138),
      o = Object(i.a)(r.a),
      u = o.right,
      a = o.left;
    n.c = u;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        return Object(i.a)(t(n), e);
      };
    }
    var i = e(28);
    n.a = function (t) {
      return (
        1 === t.length && (t = r(t)),
        {
          left: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
              var o = (r + i) >>> 1;
              t(n[o], e) < 0 ? (r = o + 1) : (i = o);
            }
            return r;
          },
          right: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
              var o = (r + i) >>> 1;
              t(n[o], e) > 0 ? (i = o) : (r = o + 1);
            }
            return r;
          },
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [t, n];
    }
    (n.b = r),
      (n.a = function (t, n) {
        null == n && (n = r);
        for (
          var e = 0, i = t.length - 1, o = t[0], u = new Array(i < 0 ? 0 : i);
          e < i;

        )
          u[e] = n(o, (o = t[++e]));
        return u;
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(141);
    n.a = function (t, n) {
      var e = Object(r.a)(t, n);
      return e ? Math.sqrt(e) : e;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(40);
    n.a = function (t, n) {
      var e,
        i,
        o = t.length,
        u = 0,
        a = -1,
        c = 0,
        s = 0;
      if (null == n)
        for (; ++a < o; )
          isNaN((e = Object(r.a)(t[a]))) ||
            ((i = e - c), (c += i / ++u), (s += i * (e - c)));
      else
        for (; ++a < o; )
          isNaN((e = Object(r.a)(n(t[a], a, t)))) ||
            ((i = e - c), (c += i / ++u), (s += i * (e - c)));
      if (u > 1) return s / (u - 1);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e,
        r,
        i,
        o = t.length,
        u = -1;
      if (null == n) {
        for (; ++u < o; )
          if (null != (e = t[u]) && e >= e)
            for (r = i = e; ++u < o; )
              null != (e = t[u]) && (r > e && (r = e), i < e && (i = e));
      } else
        for (; ++u < o; )
          if (null != (e = n(t[u], u, t)) && e >= e)
            for (r = i = e; ++u < o; )
              null != (e = n(t[u], u, t)) &&
                (r > e && (r = e), i < e && (i = e));
      return [r, i];
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return i;
    }),
      e.d(n, "a", function () {
        return o;
      });
    var r = Array.prototype,
      i = r.slice,
      o = r.map;
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e) {
      (t = +t),
        (n = +n),
        (e =
          (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
      for (
        var r = -1,
          i = 0 | Math.max(0, Math.ceil((n - t) / e)),
          o = new Array(i);
        ++r < i;

      )
        o[r] = t + r * e;
      return o;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = (n - t) / Math.max(0, e),
        i = Math.floor(Math.log(r) / Math.LN10),
        c = r / Math.pow(10, i);
      return i >= 0
        ? (c >= o ? 10 : c >= u ? 5 : c >= a ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (c >= o ? 10 : c >= u ? 5 : c >= a ? 2 : 1);
    }
    function i(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
        i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
        c = r / i;
      return (
        c >= o ? (i *= 10) : c >= u ? (i *= 5) : c >= a && (i *= 2),
        n < t ? -i : i
      );
    }
    (n.b = r), (n.c = i);
    var o = Math.sqrt(50),
      u = Math.sqrt(10),
      a = Math.sqrt(2);
    n.a = function (t, n, e) {
      var i,
        o,
        u,
        a,
        c = -1;
      if (((n = +n), (t = +t), (e = +e), t === n && e > 0)) return [t];
      if (
        ((i = n < t) && ((o = t), (t = n), (n = o)),
        0 === (a = r(t, n, e)) || !isFinite(a))
      )
        return [];
      if (a > 0)
        for (
          t = Math.ceil(t / a),
            n = Math.floor(n / a),
            u = new Array((o = Math.ceil(n - t + 1)));
          ++c < o;

        )
          u[c] = (t + c) * a;
      else
        for (
          t = Math.floor(t * a),
            n = Math.ceil(n * a),
            u = new Array((o = Math.ceil(t - n + 1)));
          ++c < o;

        )
          u[c] = (t - c) / a;
      return i && u.reverse(), u;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e,
        r,
        i = t.length,
        o = -1;
      if (null == n) {
        for (; ++o < i; )
          if (null != (e = t[o]) && e >= e)
            for (r = e; ++o < i; ) null != (e = t[o]) && r > e && (r = e);
      } else
        for (; ++o < i; )
          if (null != (e = n(t[o], o, t)) && e >= e)
            for (r = e; ++o < i; )
              null != (e = n(t[o], o, t)) && r > e && (r = e);
      return r;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.length;
    }
    var i = e(147);
    n.a = function (t) {
      if (!(u = t.length)) return [];
      for (var n = -1, e = Object(i.a)(t, r), o = new Array(e); ++n < e; )
        for (var u, a = -1, c = (o[n] = new Array(u)); ++a < u; )
          c[a] = t[a][n];
      return o;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10);
    n.a = function (t) {
      return "string" == typeof t
        ? new r.a([[document.querySelector(t)]], [document.documentElement])
        : new r.a([[t]], r.c);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return [];
    }
    n.a = function (t) {
      return null == t
        ? r
        : function () {
            return this.querySelectorAll(t);
          };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = function (t) {
      return function () {
        return this.matches(t);
      };
    };
    if ("undefined" != typeof document) {
      var i = document.documentElement;
      if (!i.matches) {
        var o =
          i.webkitMatchesSelector ||
          i.msMatchesSelector ||
          i.mozMatchesSelector ||
          i.oMatchesSelector;
        r = function (t) {
          return function () {
            return o.call(this, t);
          };
        };
      }
    }
    n.a = r;
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this.ownerDocument = t.ownerDocument),
        (this.namespaceURI = t.namespaceURI),
        (this._next = null),
        (this._parent = t),
        (this.__data__ = n);
    }
    n.a = r;
    var i = e(153),
      o = e(10);
    (n.b = function () {
      return new o.a(this._enter || this._groups.map(i.a), this._parents);
    }),
      (r.prototype = {
        constructor: r,
        appendChild: function (t) {
          return this._parent.insertBefore(t, this._next);
        },
        insertBefore: function (t, n) {
          return this._parent.insertBefore(t, n);
        },
        querySelector: function (t) {
          return this._parent.querySelector(t);
        },
        querySelectorAll: function (t) {
          return this._parent.querySelectorAll(t);
        },
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return new Array(t.length);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function i(t, n, e) {
      return function () {
        this.style.setProperty(t, n, e);
      };
    }
    function o(t, n, e) {
      return function () {
        var r = n.apply(this, arguments);
        null == r
          ? this.style.removeProperty(t)
          : this.style.setProperty(t, r, e);
      };
    }
    function u(t, n) {
      return (
        t.style.getPropertyValue(n) ||
        Object(a.a)(t).getComputedStyle(t, null).getPropertyValue(n)
      );
    }
    n.b = u;
    var a = e(87);
    n.a = function (t, n, e) {
      return arguments.length > 1
        ? this.each(
            (null == n ? r : "function" == typeof n ? o : i)(
              t,
              n,
              null == e ? "" : e
            )
          )
        : u(this.node(), t);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = t.document.documentElement,
        r = Object(i.k)(t).on("dragstart.drag", null);
      n &&
        (r.on("click.drag", o.a, !0),
        setTimeout(function () {
          r.on("click.drag", null);
        }, 0)),
        "onselectstart" in e
          ? r.on("selectstart.drag", null)
          : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
    }
    n.b = r;
    var i = e(3),
      o = e(156);
    n.a = function (t) {
      var n = t.document.documentElement,
        e = Object(i.k)(t).on("dragstart.drag", o.a, !0);
      "onselectstart" in n
        ? e.on("selectstart.drag", o.a, !0)
        : ((n.__noselect = n.style.MozUserSelect),
          (n.style.MozUserSelect = "none"));
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      i.e.stopImmediatePropagation();
    }
    n.b = r;
    var i = e(3);
    n.a = function () {
      i.e.preventDefault(), i.e.stopImmediatePropagation();
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    }),
      e.d(n, "b", function () {
        return i;
      });
    var r = Math.PI / 180,
      i = 180 / Math.PI;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n) {
        var e,
          r,
          o = n.length,
          u = new Array(o),
          a = new Array(o),
          c = new Array(o);
        for (e = 0; e < o; ++e)
          (r = Object(i.f)(n[e])),
            (u[e] = r.r || 0),
            (a[e] = r.g || 0),
            (c[e] = r.b || 0);
        return (
          (u = t(u)),
          (a = t(a)),
          (c = t(c)),
          (r.opacity = 1),
          function (t) {
            return (r.r = u(t)), (r.g = a(t)), (r.b = c(t)), r + "";
          }
        );
      };
    }
    e.d(n, "b", function () {
      return c;
    }),
      e.d(n, "c", function () {
        return s;
      });
    var i = e(13),
      o = e(93),
      u = e(159),
      a = e(41);
    n.a = (function t(n) {
      function e(t, n) {
        var e = r((t = Object(i.f)(t)).r, (n = Object(i.f)(n)).r),
          o = r(t.g, n.g),
          u = r(t.b, n.b),
          c = Object(a.a)(t.opacity, n.opacity);
        return function (n) {
          return (
            (t.r = e(n)), (t.g = o(n)), (t.b = u(n)), (t.opacity = c(n)), t + ""
          );
        };
      }
      var r = Object(a.b)(n);
      return (e.gamma = t), e;
    })(1);
    var c = r(o.b),
      s = r(u.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(93);
    n.a = function (t) {
      var n = t.length;
      return function (e) {
        var i = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          o = t[(i + n - 1) % n],
          u = t[i % n],
          a = t[(i + 1) % n],
          c = t[(i + 2) % n];
        return Object(r.a)((e - i / n) * n, o, u, a, c);
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(90);
    n.a = function (t, n) {
      var e,
        i = n ? n.length : 0,
        o = t ? Math.min(i, t.length) : 0,
        u = new Array(o),
        a = new Array(i);
      for (e = 0; e < o; ++e) u[e] = Object(r.a)(t[e], n[e]);
      for (; e < i; ++e) a[e] = n[e];
      return function (t) {
        for (e = 0; e < o; ++e) a[e] = u[e](t);
        return a;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e = new Date();
      return (
        (t = +t),
        (n -= t),
        function (r) {
          return e.setTime(t + n * r), e;
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(90);
    n.a = function (t, n) {
      var e,
        i = {},
        o = {};
      (null !== t && "object" == typeof t) || (t = {}),
        (null !== n && "object" == typeof n) || (n = {});
      for (e in n) e in t ? (i[e] = Object(r.a)(t[e], n[e])) : (o[e] = n[e]);
      return function (t) {
        for (e in i) o[e] = i[e](t);
        return o;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        return t;
      };
    }
    function i(t) {
      return function (n) {
        return t(n) + "";
      };
    }
    var o = e(63),
      u = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      a = new RegExp(u.source, "g");
    n.a = function (t, n) {
      var e,
        c,
        s,
        f = (u.lastIndex = a.lastIndex = 0),
        l = -1,
        h = [],
        d = [];
      for (t += "", n += ""; (e = u.exec(t)) && (c = a.exec(n)); )
        (s = c.index) > f &&
          ((s = n.slice(f, s)), h[l] ? (h[l] += s) : (h[++l] = s)),
          (e = e[0]) === (c = c[0])
            ? h[l]
              ? (h[l] += c)
              : (h[++l] = c)
            : ((h[++l] = null), d.push({ i: l, x: Object(o.a)(e, c) })),
          (f = a.lastIndex);
      return (
        f < n.length && ((s = n.slice(f)), h[l] ? (h[l] += s) : (h[++l] = s)),
        h.length < 2
          ? d[0]
            ? i(d[0].x)
            : r(n)
          : ((n = d.length),
            function (t) {
              for (var e, r = 0; r < n; ++r) h[(e = d[r]).i] = e.x(t);
              return h.join("");
            })
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(12);
    n.a = function (t, n) {
      var e,
        i,
        o,
        u = t.__transition,
        a = !0;
      if (u) {
        n = null == n ? null : n + "";
        for (o in u)
          (e = u[o]).name === n
            ? ((i = e.state > r.d && e.state < r.b),
              (e.state = r.a),
              e.timer.stop(),
              i && e.on.call("interrupt", t, t.__data__, e.index, e.group),
              delete u[o])
            : (a = !1);
        a && delete t.__transition;
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(13),
      i = e(11);
    n.a = function (t, n) {
      var e;
      return ("number" == typeof n
        ? i.m
        : n instanceof r.a
        ? i.o
        : (e = Object(r.a)(n))
        ? ((n = e), i.o)
        : i.s)(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(334);
    e.d(n, "y", function () {
      return r.a;
    });
    var i = e(335);
    e.d(n, "D", function () {
      return i.b;
    }),
      e.d(n, "E", function () {
        return i.a;
      }),
      e.d(n, "G", function () {
        return i.c;
      }),
      e.d(n, "F", function () {
        return i.b;
      });
    var o = e(336);
    e.d(n, "m", function () {
      return o.b;
    }),
      e.d(n, "n", function () {
        return o.a;
      }),
      e.d(n, "p", function () {
        return o.c;
      }),
      e.d(n, "o", function () {
        return o.b;
      });
    var u = e(337);
    e.d(n, "z", function () {
      return u.b;
    }),
      e.d(n, "A", function () {
        return u.a;
      }),
      e.d(n, "C", function () {
        return u.c;
      }),
      e.d(n, "B", function () {
        return u.b;
      });
    var a = e(338);
    e.d(n, "H", function () {
      return a.b;
    }),
      e.d(n, "I", function () {
        return a.a;
      }),
      e.d(n, "K", function () {
        return a.c;
      }),
      e.d(n, "J", function () {
        return a.b;
      });
    var c = e(339);
    e.d(n, "u", function () {
      return c.b;
    }),
      e.d(n, "v", function () {
        return c.a;
      }),
      e.d(n, "x", function () {
        return c.c;
      }),
      e.d(n, "w", function () {
        return c.b;
      });
    var s = e(340);
    e.d(n, "i", function () {
      return s.b;
    }),
      e.d(n, "j", function () {
        return s.a;
      }),
      e.d(n, "l", function () {
        return s.c;
      }),
      e.d(n, "k", function () {
        return s.b;
      });
    var f = e(341);
    e.d(n, "e", function () {
      return f.c;
    }),
      e.d(n, "f", function () {
        return f.a;
      }),
      e.d(n, "h", function () {
        return f.c;
      }),
      e.d(n, "g", function () {
        return f.b;
      });
    var l = e(342);
    e.d(n, "a", function () {
      return l.b;
    }),
      e.d(n, "b", function () {
        return l.a;
      }),
      e.d(n, "d", function () {
        return l.c;
      }),
      e.d(n, "c", function () {
        return l.b;
      });
    var h = e(343);
    e.d(n, "q", function () {
      return h.c;
    }),
      e.d(n, "r", function () {
        return h.a;
      }),
      e.d(n, "t", function () {
        return h.c;
      }),
      e.d(n, "s", function () {
        return h.b;
      });
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    }),
      e.d(n, "d", function () {
        return i;
      }),
      e.d(n, "b", function () {
        return u;
      }),
      e.d(n, "e", function () {
        return a;
      }),
      e.d(n, "c", function () {
        return c;
      });
    var r = Math.cos,
      i = Math.sin,
      o = Math.PI,
      u = o / 2,
      a = 2 * o,
      c = Math.max;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.x;
    }
    function i(t) {
      return t.y;
    }
    (n.b = r), (n.c = i);
    var o = e(22),
      u = e(42),
      a = e(64),
      c = Math.PI * (3 - Math.sqrt(5));
    n.a = function (t) {
      function n() {
        e(), b.call("tick", s), f < l && (g.stop(), b.call("end", s));
      }
      function e() {
        var n,
          e,
          r = t.length;
        for (
          f += (d - f) * h,
            v.each(function (t) {
              t(f);
            }),
            n = 0;
          n < r;
          ++n
        )
          (e = t[n]),
            null == e.fx ? (e.x += e.vx *= p) : ((e.x = e.fx), (e.vx = 0)),
            null == e.fy ? (e.y += e.vy *= p) : ((e.y = e.fy), (e.vy = 0));
      }
      function r() {
        for (var n, e = 0, r = t.length; e < r; ++e) {
          if (((n = t[e]), (n.index = e), isNaN(n.x) || isNaN(n.y))) {
            var i = 10 * Math.sqrt(e),
              o = e * c;
            (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
          }
          (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
        }
      }
      function i(n) {
        return n.initialize && n.initialize(t), n;
      }
      var s,
        f = 1,
        l = 0.001,
        h = 1 - Math.pow(l, 1 / 300),
        d = 0,
        p = 0.6,
        v = Object(u.c)(),
        g = Object(a.d)(n),
        b = Object(o.a)("tick", "end");
      return (
        null == t && (t = []),
        r(),
        (s = {
          tick: e,
          restart: function () {
            return g.restart(n), s;
          },
          stop: function () {
            return g.stop(), s;
          },
          nodes: function (n) {
            return arguments.length ? ((t = n), r(), v.each(i), s) : t;
          },
          alpha: function (t) {
            return arguments.length ? ((f = +t), s) : f;
          },
          alphaMin: function (t) {
            return arguments.length ? ((l = +t), s) : l;
          },
          alphaDecay: function (t) {
            return arguments.length ? ((h = +t), s) : +h;
          },
          alphaTarget: function (t) {
            return arguments.length ? ((d = +t), s) : d;
          },
          velocityDecay: function (t) {
            return arguments.length ? ((p = 1 - t), s) : 1 - p;
          },
          force: function (t, n) {
            return arguments.length > 1
              ? (null == n ? v.remove(t) : v.set(t, i(n)), s)
              : v.get(t);
          },
          find: function (n, e, r) {
            var i,
              o,
              u,
              a,
              c,
              s = 0,
              f = t.length;
            for (null == r ? (r = 1 / 0) : (r *= r), s = 0; s < f; ++s)
              (a = t[s]),
                (i = n - a.x),
                (o = e - a.y),
                (u = i * i + o * o) < r && ((c = a), (r = u));
            return c;
          },
          on: function (t, n) {
            return arguments.length > 1 ? (b.on(t, n), s) : b.on(t);
          },
        })
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(66),
      i = e(383),
      o = e(384),
      u = e(171),
      a = e(172),
      c = e(173),
      s = e(387),
      f = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    n.a = function (t) {
      function n(t) {
        function n(t) {
          var n,
            o,
            u,
            a = _,
            h = O;
          if ("c" === y) (h = x(t) + h), (t = "");
          else {
            t = +t;
            var v = t < 0;
            if (
              ((t = x(Math.abs(t), m)),
              v && 0 == +t && (v = !1),
              (a =
                (v ? ("(" === i ? i : "-") : "-" === i || "(" === i ? "" : i) +
                a),
              (h =
                ("s" === y ? f[8 + c.b / 3] : "") +
                h +
                (v && "(" === i ? ")" : "")),
              w)
            )
              for (n = -1, o = t.length; ++n < o; )
                if (48 > (u = t.charCodeAt(n)) || u > 57) {
                  (h = (46 === u ? d + t.slice(n + 1) : t.slice(n)) + h),
                    (t = t.slice(0, n));
                  break;
                }
          }
          b && !s && (t = l(t, 1 / 0));
          var j = a.length + t.length + h.length,
            T = j < g ? new Array(g - j + 1).join(e) : "";
          switch (
            (b &&
              s &&
              ((t = l(T + t, T.length ? g - h.length : 1 / 0)), (T = "")),
            r)
          ) {
            case "<":
              t = a + t + h + T;
              break;
            case "=":
              t = a + T + t + h;
              break;
            case "^":
              t = T.slice(0, (j = T.length >> 1)) + a + t + h + T.slice(j);
              break;
            default:
              t = T + a + t + h;
          }
          return p(t);
        }
        t = Object(u.a)(t);
        var e = t.fill,
          r = t.align,
          i = t.sign,
          o = t.symbol,
          s = t.zero,
          g = t.width,
          b = t.comma,
          m = t.precision,
          y = t.type,
          _ =
            "$" === o
              ? h[0]
              : "#" === o && /[boxX]/.test(y)
              ? "0" + y.toLowerCase()
              : "",
          O = "$" === o ? h[1] : /[%p]/.test(y) ? v : "",
          x = a.a[y],
          w = !y || /[defgprs%]/.test(y);
        return (
          (m =
            null == m
              ? y
                ? 6
                : 12
              : /[gprs]/.test(y)
              ? Math.max(1, Math.min(21, m))
              : Math.max(0, Math.min(20, m))),
          (n.toString = function () {
            return t + "";
          }),
          n
        );
      }
      function e(t, e) {
        var i = n(((t = Object(u.a)(t)), (t.type = "f"), t)),
          o = 3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(e) / 3))),
          a = Math.pow(10, -o),
          c = f[8 + o / 3];
        return function (t) {
          return i(a * t) + c;
        };
      }
      var l =
          t.grouping && t.thousands
            ? Object(i.a)(t.grouping, t.thousands)
            : s.a,
        h = t.currency,
        d = t.decimal,
        p = t.numerals ? Object(o.a)(t.numerals) : s.a,
        v = t.percent || "%";
      return { format: n, formatPrefix: e };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return new i(t);
    }
    function i(t) {
      if (!(n = u.exec(t))) throw new Error("invalid format: " + t);
      var n,
        e = n[1] || " ",
        r = n[2] || ">",
        i = n[3] || "-",
        a = n[4] || "",
        c = !!n[5],
        s = n[6] && +n[6],
        f = !!n[7],
        l = n[8] && +n[8].slice(1),
        h = n[9] || "";
      "n" === h ? ((f = !0), (h = "g")) : o.a[h] || (h = ""),
        (c || ("0" === e && "=" === r)) && ((c = !0), (e = "0"), (r = "=")),
        (this.fill = e),
        (this.align = r),
        (this.sign = i),
        (this.symbol = a),
        (this.zero = c),
        (this.width = s),
        (this.comma = f),
        (this.precision = l),
        (this.type = h);
    }
    n.a = r;
    var o = e(172),
      u = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
    (r.prototype = i.prototype),
      (i.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (null == this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (null == this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          this.type
        );
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(385),
      i = e(173),
      o = e(386);
    n.a = {
      "": r.a,
      "%": function (t, n) {
        return (100 * t).toFixed(n);
      },
      b: function (t) {
        return Math.round(t).toString(2);
      },
      c: function (t) {
        return t + "";
      },
      d: function (t) {
        return Math.round(t).toString(10);
      },
      e: function (t, n) {
        return t.toExponential(n);
      },
      f: function (t, n) {
        return t.toFixed(n);
      },
      g: function (t, n) {
        return t.toPrecision(n);
      },
      o: function (t) {
        return Math.round(t).toString(8);
      },
      p: function (t, n) {
        return Object(o.a)(100 * t, n);
      },
      r: o.a,
      s: i.a,
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return r;
    });
    var r,
      i = e(103);
    n.a = function (t, n) {
      var e = Object(i.a)(t, n);
      if (!e) return t + "";
      var o = e[0],
        u = e[1],
        a = u - (r = 3 * Math.max(-8, Math.min(8, Math.floor(u / 3)))) + 1,
        c = o.length;
      return a === c
        ? o
        : a > c
        ? o + new Array(a - c + 1).join("0")
        : a > 0
        ? o.slice(0, a) + "." + o.slice(a)
        : "0." +
          new Array(1 - a).join("0") +
          Object(i.a)(t, Math.max(0, n + a - 1))[0];
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      m.point = o;
    }
    function i() {
      u(a, c);
    }
    function o(t, n) {
      (m.point = u),
        (a = t),
        (c = n),
        (t *= d.r),
        (n *= d.r),
        (s = t),
        (f = Object(d.g)((n = n / 2 + d.q))),
        (l = Object(d.t)(n));
    }
    function u(t, n) {
      (t *= d.r), (n *= d.r), (n = n / 2 + d.q);
      var e = t - s,
        r = e >= 0 ? 1 : -1,
        i = r * e,
        o = Object(d.g)(n),
        u = Object(d.t)(n),
        a = l * u,
        c = f * o + a * Object(d.g)(i),
        h = a * r * Object(d.t)(i);
      g.add(Object(d.e)(h, c)), (s = t), (f = o), (l = u);
    }
    e.d(n, "a", function () {
      return g;
    }),
      e.d(n, "b", function () {
        return m;
      });
    var a,
      c,
      s,
      f,
      l,
      h = e(30),
      d = e(1),
      p = e(21),
      v = e(24),
      g = Object(h.a)(),
      b = Object(h.a)(),
      m = {
        point: p.a,
        lineStart: p.a,
        lineEnd: p.a,
        polygonStart: function () {
          g.reset(), (m.lineStart = r), (m.lineEnd = i);
        },
        polygonEnd: function () {
          var t = +g;
          b.add(t < 0 ? d.w + t : t),
            (this.lineStart = this.lineEnd = this.point = p.a);
        },
        sphere: function () {
          b.add(d.w);
        },
      };
    n.c = function (t) {
      return b.reset(), Object(v.a)(t, m), 2 * b;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r, u, c) {
      if (e) {
        var s = Object(a.g)(n),
          f = Object(a.t)(n),
          l = r * e;
        null == u
          ? ((u = n + r * a.w), (c = n - l / 2))
          : ((u = i(s, u)),
            (c = i(s, c)),
            (r > 0 ? u < c : u > c) && (u += r * a.w));
        for (var h, d = u; r > 0 ? d > c : d < c; d -= l)
          (h = Object(o.g)([s, -f * Object(a.g)(d), -f * Object(a.t)(d)])),
            t.point(h[0], h[1]);
      }
    }
    function i(t, n) {
      (n = Object(o.a)(n)), (n[0] -= t), Object(o.e)(n);
      var e = Object(a.b)(-n[1]);
      return ((-n[2] < 0 ? -e : e) + a.w - a.i) % a.w;
    }
    n.a = r;
    var o = e(43),
      u = e(394),
      a = e(1),
      c = e(67);
    n.b = function () {
      function t(t, n) {
        e.push((t = i(t, n))), (t[0] *= a.h), (t[1] *= a.h);
      }
      function n() {
        var t = o.apply(this, arguments),
          n = s.apply(this, arguments) * a.r,
          u = f.apply(this, arguments) * a.r;
        return (
          (e = []),
          (i = Object(c.b)(-t[0] * a.r, -t[1] * a.r, 0).invert),
          r(l, n, u, 1),
          (t = { type: "Polygon", coordinates: [e] }),
          (e = i = null),
          t
        );
      }
      var e,
        i,
        o = Object(u.a)([0, 0]),
        s = Object(u.a)(90),
        f = Object(u.a)(6),
        l = { point: t };
      return (
        (n.center = function (t) {
          return arguments.length
            ? ((o = "function" == typeof t ? t : Object(u.a)([+t[0], +t[1]])),
              n)
            : o;
        }),
        (n.radius = function (t) {
          return arguments.length
            ? ((s = "function" == typeof t ? t : Object(u.a)(+t)), n)
            : s;
        }),
        (n.precision = function (t) {
          return arguments.length
            ? ((f = "function" == typeof t ? t : Object(u.a)(+t)), n)
            : f;
        }),
        n
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      function e(e, r) {
        return (e = t(e, r)), n(e[0], e[1]);
      }
      return (
        t.invert &&
          n.invert &&
          (e.invert = function (e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
          }),
        e
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n,
        e = NaN,
        r = NaN,
        o = NaN;
      return {
        lineStart: function () {
          t.lineStart(), (n = 1);
        },
        point: function (u, c) {
          var s = u > 0 ? a.o : -a.o,
            f = Object(a.a)(u - e);
          Object(a.a)(f - a.o) < a.i
            ? (t.point(e, (r = (r + c) / 2 > 0 ? a.l : -a.l)),
              t.point(o, r),
              t.lineEnd(),
              t.lineStart(),
              t.point(s, r),
              t.point(u, r),
              (n = 0))
            : o !== s &&
              f >= a.o &&
              (Object(a.a)(e - o) < a.i && (e -= o * a.i),
              Object(a.a)(u - s) < a.i && (u -= s * a.i),
              (r = i(e, r, u, c)),
              t.point(o, r),
              t.lineEnd(),
              t.lineStart(),
              t.point(s, r),
              (n = 0)),
            t.point((e = u), (r = c)),
            (o = s);
        },
        lineEnd: function () {
          t.lineEnd(), (e = r = NaN);
        },
        clean: function () {
          return 2 - n;
        },
      };
    }
    function i(t, n, e, r) {
      var i,
        o,
        u = Object(a.t)(t - e);
      return Object(a.a)(u) > a.i
        ? Object(a.d)(
            (Object(a.t)(n) * (o = Object(a.g)(r)) * Object(a.t)(e) -
              Object(a.t)(r) * (i = Object(a.g)(n)) * Object(a.t)(t)) /
              (i * o * u)
          )
        : (n + r) / 2;
    }
    function o(t, n, e, r) {
      var i;
      if (null == t)
        (i = e * a.l),
          r.point(-a.o, i),
          r.point(0, i),
          r.point(a.o, i),
          r.point(a.o, 0),
          r.point(a.o, -i),
          r.point(0, -i),
          r.point(-a.o, -i),
          r.point(-a.o, 0),
          r.point(-a.o, i);
      else if (Object(a.a)(t[0] - n[0]) > a.i) {
        var o = t[0] < n[0] ? a.o : -a.o;
        (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
      } else r.point(n[0], n[1]);
    }
    var u = e(178),
      a = e(1);
    n.a = Object(u.a)(
      function () {
        return !0;
      },
      r,
      o,
      [-a.o, -a.l]
    );
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.length > 1;
    }
    function i(t, n) {
      return (
        ((t = t.x)[0] < 0 ? t[1] - a.l - a.i : a.l - t[1]) -
        ((n = n.x)[0] < 0 ? n[1] - a.l - a.i : a.l - n[1])
      );
    }
    var o = e(179),
      u = e(180),
      a = e(1),
      c = e(182),
      s = e(8);
    n.a = function (t, n, e, a) {
      return function (f) {
        function l(n, e) {
          t(n, e) && f.point(n, e);
        }
        function h(t, n) {
          O.point(t, n);
        }
        function d() {
          (T.point = h), O.lineStart();
        }
        function p() {
          (T.point = l), O.lineEnd();
        }
        function v(t, n) {
          _.push([t, n]), w.point(t, n);
        }
        function g() {
          w.lineStart(), (_ = []);
        }
        function b() {
          v(_[0][0], _[0][1]), w.lineEnd();
          var t,
            n,
            e,
            i,
            o = w.clean(),
            u = x.result(),
            a = u.length;
          if ((_.pop(), m.push(_), (_ = null), a))
            if (1 & o) {
              if (((e = u[0]), (n = e.length - 1) > 0)) {
                for (
                  j || (f.polygonStart(), (j = !0)), f.lineStart(), t = 0;
                  t < n;
                  ++t
                )
                  f.point((i = e[t])[0], i[1]);
                f.lineEnd();
              }
            } else
              a > 1 && 2 & o && u.push(u.pop().concat(u.shift())),
                y.push(u.filter(r));
        }
        var m,
          y,
          _,
          O = n(f),
          x = Object(o.a)(),
          w = n(x),
          j = !1,
          T = {
            point: l,
            lineStart: d,
            lineEnd: p,
            polygonStart: function () {
              (T.point = v),
                (T.lineStart = g),
                (T.lineEnd = b),
                (y = []),
                (m = []);
            },
            polygonEnd: function () {
              (T.point = l),
                (T.lineStart = d),
                (T.lineEnd = p),
                (y = Object(s.n)(y));
              var t = Object(c.a)(m, a);
              y.length
                ? (j || (f.polygonStart(), (j = !0)),
                  Object(u.a)(y, i, t, e, f))
                : t &&
                  (j || (f.polygonStart(), (j = !0)),
                  f.lineStart(),
                  e(null, null, 1, f),
                  f.lineEnd()),
                j && (f.polygonEnd(), (j = !1)),
                (y = m = null);
            },
            sphere: function () {
              f.polygonStart(),
                f.lineStart(),
                e(null, null, 1, f),
                f.lineEnd(),
                f.polygonEnd();
            },
          };
        return T;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(21);
    n.a = function () {
      var t,
        n = [];
      return {
        point: function (n, e) {
          t.push([n, e]);
        },
        lineStart: function () {
          n.push((t = []));
        },
        lineEnd: r.a,
        rejoin: function () {
          n.length > 1 && n.push(n.pop().concat(n.shift()));
        },
        result: function () {
          var e = n;
          return (n = []), (t = null), e;
        },
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      (this.x = t),
        (this.z = n),
        (this.o = e),
        (this.e = r),
        (this.v = !1),
        (this.n = this.p = null);
    }
    function i(t) {
      if ((n = t.length)) {
        for (var n, e, r = 0, i = t[0]; ++r < n; )
          (i.n = e = t[r]), (e.p = i), (i = e);
        (i.n = e = t[0]), (e.p = i);
      }
    }
    var o = e(181);
    n.a = function (t, n, e, u, a) {
      var c,
        s,
        f = [],
        l = [];
      if (
        (t.forEach(function (t) {
          if (!((n = t.length - 1) <= 0)) {
            var n,
              e,
              i = t[0],
              u = t[n];
            if (Object(o.a)(i, u)) {
              for (a.lineStart(), c = 0; c < n; ++c)
                a.point((i = t[c])[0], i[1]);
              return void a.lineEnd();
            }
            f.push((e = new r(i, t, null, !0))),
              l.push((e.o = new r(i, null, e, !1))),
              f.push((e = new r(u, t, null, !1))),
              l.push((e.o = new r(u, null, e, !0)));
          }
        }),
        f.length)
      ) {
        for (l.sort(n), i(f), i(l), c = 0, s = l.length; c < s; ++c)
          l[c].e = e = !e;
        for (var h, d, p = f[0]; ; ) {
          for (var v = p, g = !0; v.v; ) if ((v = v.n) === p) return;
          (h = v.z), a.lineStart();
          do {
            if (((v.v = v.o.v = !0), v.e)) {
              if (g)
                for (c = 0, s = h.length; c < s; ++c)
                  a.point((d = h[c])[0], d[1]);
              else u(v.x, v.n.x, 1, a);
              v = v.n;
            } else {
              if (g)
                for (h = v.p.z, c = h.length - 1; c >= 0; --c)
                  a.point((d = h[c])[0], d[1]);
              else u(v.x, v.p.x, -1, a);
              v = v.p;
            }
            (v = v.o), (h = v.z), (g = !g);
          } while (!v.v);
          a.lineEnd();
        }
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(1);
    n.a = function (t, n) {
      return Object(r.a)(t[0] - n[0]) < r.i && Object(r.a)(t[1] - n[1]) < r.i;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(30),
      i = e(43),
      o = e(1),
      u = Object(r.a)();
    n.a = function (t, n) {
      var e = n[0],
        r = n[1],
        a = [Object(o.t)(e), -Object(o.g)(e), 0],
        c = 0,
        s = 0;
      u.reset();
      for (var f = 0, l = t.length; f < l; ++f)
        if ((d = (h = t[f]).length))
          for (
            var h,
              d,
              p = h[d - 1],
              v = p[0],
              g = p[1] / 2 + o.q,
              b = Object(o.t)(g),
              m = Object(o.g)(g),
              y = 0;
            y < d;
            ++y, v = O, b = w, m = j, p = _
          ) {
            var _ = h[y],
              O = _[0],
              x = _[1] / 2 + o.q,
              w = Object(o.t)(x),
              j = Object(o.g)(x),
              T = O - v,
              E = T >= 0 ? 1 : -1,
              C = E * T,
              A = C > o.o,
              S = b * w;
            if (
              (u.add(
                Object(o.e)(S * E * Object(o.t)(C), m * j + S * Object(o.g)(C))
              ),
              (c += A ? T + E * o.w : T),
              A ^ (v >= e) ^ (O >= e))
            ) {
              var M = Object(i.c)(Object(i.a)(p), Object(i.a)(_));
              Object(i.e)(M);
              var N = Object(i.c)(a, M);
              Object(i.e)(N);
              var D = (A ^ (T >= 0) ? -1 : 1) * Object(o.c)(N[2]);
              (r > D || (r === D && (M[0] || M[1]))) &&
                (s += A ^ (T >= 0) ? 1 : -1);
            }
          }
      return (c < -o.i || (c < o.i && u < -o.i)) ^ (1 & s);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(43),
      i = e(175),
      o = e(1),
      u = e(181),
      a = e(178);
    n.a = function (t) {
      function n(n, e, r, o) {
        Object(i.a)(o, t, h, r, n, e);
      }
      function e(t, n) {
        return Object(o.g)(t) * Object(o.g)(n) > l;
      }
      function c(t) {
        var n, r, i, a, c;
        return {
          lineStart: function () {
            (a = i = !1), (c = 1);
          },
          point: function (l, h) {
            var v,
              g = [l, h],
              b = e(l, h),
              m = d
                ? b
                  ? 0
                  : f(l, h)
                : b
                ? f(l + (l < 0 ? o.o : -o.o), h)
                : 0;
            if (
              (!n && (a = i = b) && t.lineStart(),
              b !== i &&
                (!(v = s(n, g)) || Object(u.a)(n, v) || Object(u.a)(g, v)) &&
                ((g[0] += o.i), (g[1] += o.i), (b = e(g[0], g[1]))),
              b !== i)
            )
              (c = 0),
                b
                  ? (t.lineStart(), (v = s(g, n)), t.point(v[0], v[1]))
                  : ((v = s(n, g)), t.point(v[0], v[1]), t.lineEnd()),
                (n = v);
            else if (p && n && d ^ b) {
              var y;
              m & r ||
                !(y = s(g, n, !0)) ||
                ((c = 0),
                d
                  ? (t.lineStart(),
                    t.point(y[0][0], y[0][1]),
                    t.point(y[1][0], y[1][1]),
                    t.lineEnd())
                  : (t.point(y[1][0], y[1][1]),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(y[0][0], y[0][1])));
            }
            !b || (n && Object(u.a)(n, g)) || t.point(g[0], g[1]),
              (n = g),
              (i = b),
              (r = m);
          },
          lineEnd: function () {
            i && t.lineEnd(), (n = null);
          },
          clean: function () {
            return c | ((a && i) << 1);
          },
        };
      }
      function s(t, n, e) {
        var i = Object(r.a)(t),
          u = Object(r.a)(n),
          a = [1, 0, 0],
          c = Object(r.c)(i, u),
          s = Object(r.d)(c, c),
          f = c[0],
          h = s - f * f;
        if (!h) return !e && t;
        var d = (l * s) / h,
          p = (-l * f) / h,
          v = Object(r.c)(a, c),
          g = Object(r.f)(a, d),
          b = Object(r.f)(c, p);
        Object(r.b)(g, b);
        var m = v,
          y = Object(r.d)(g, m),
          _ = Object(r.d)(m, m),
          O = y * y - _ * (Object(r.d)(g, g) - 1);
        if (!(O < 0)) {
          var x = Object(o.u)(O),
            w = Object(r.f)(m, (-y - x) / _);
          if ((Object(r.b)(w, g), (w = Object(r.g)(w)), !e)) return w;
          var j,
            T = t[0],
            E = n[0],
            C = t[1],
            A = n[1];
          E < T && ((j = T), (T = E), (E = j));
          var S = E - T,
            M = Object(o.a)(S - o.o) < o.i,
            N = M || S < o.i;
          if (
            (!M && A < C && ((j = C), (C = A), (A = j)),
            N
              ? M
                ? (C + A > 0) ^ (w[1] < (Object(o.a)(w[0] - T) < o.i ? C : A))
                : C <= w[1] && w[1] <= A
              : (S > o.o) ^ (T <= w[0] && w[0] <= E))
          ) {
            var D = Object(r.f)(m, (-y + x) / _);
            return Object(r.b)(D, g), [w, Object(r.g)(D)];
          }
        }
      }
      function f(n, e) {
        var r = d ? t : o.o - t,
          i = 0;
        return (
          n < -r ? (i |= 1) : n > r && (i |= 2),
          e < -r ? (i |= 4) : e > r && (i |= 8),
          i
        );
      }
      var l = Object(o.g)(t),
        h = 6 * o.r,
        d = l > 0,
        p = Object(o.a)(l) > o.i;
      return Object(a.a)(e, c, n, d ? [0, -t] : [-o.o, t - o.o]);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(185),
      i = [null, null],
      o = { type: "LineString", coordinates: i };
    n.a = function (t, n) {
      return (i[0] = t), (i[1] = n), Object(r.a)(o);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      (v.point = o), (v.lineEnd = i);
    }
    function i() {
      v.point = v.lineEnd = h.a;
    }
    function o(t, n) {
      (t *= l.r),
        (n *= l.r),
        (a = t),
        (c = Object(l.t)(n)),
        (s = Object(l.g)(n)),
        (v.point = u);
    }
    function u(t, n) {
      (t *= l.r), (n *= l.r);
      var e = Object(l.t)(n),
        r = Object(l.g)(n),
        i = Object(l.a)(t - a),
        o = Object(l.g)(i),
        u = Object(l.t)(i),
        f = r * u,
        h = s * e - c * r * o,
        d = c * e + s * r * o;
      p.add(Object(l.e)(Object(l.u)(f * f + h * h), d)),
        (a = t),
        (c = e),
        (s = r);
    }
    var a,
      c,
      s,
      f = e(30),
      l = e(1),
      h = e(21),
      d = e(24),
      p = Object(f.a)(),
      v = {
        sphere: h.a,
        point: h.a,
        lineStart: r,
        lineEnd: h.a,
        polygonStart: h.a,
        polygonEnd: h.a,
      };
    n.a = function (t) {
      return p.reset(), Object(d.a)(t, v), +p;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      t < o && (o = t), t > a && (a = t), n < u && (u = n), n > c && (c = n);
    }
    var i = e(21),
      o = 1 / 0,
      u = o,
      a = -o,
      c = a,
      s = {
        point: r,
        lineStart: i.a,
        lineEnd: i.a,
        polygonStart: i.a,
        polygonEnd: i.a,
        result: function () {
          var t = [
            [o, u],
            [a, c],
          ];
          return (a = c = -(u = o = 1 / 0)), t;
        },
      };
    n.a = s;
  },
  function (t, n, e) {
    "use strict";
    var r = e(105);
    n.a = function () {
      return Object(r.b)()
        .parallels([29.5, 45.5])
        .scale(1070)
        .translate([480, 250])
        .rotate([96, 0])
        .center([-0.6, 38.7]);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [t, n];
    }
    n.b = r;
    var i = e(14);
    (r.invert = r),
      (n.a = function () {
        return Object(i.a)(r).scale(152.63);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = t.x,
        i = t.y,
        o = n.r + e.r,
        u = t.r + e.r,
        a = n.x - r,
        c = n.y - i,
        s = a * a + c * c;
      if (s) {
        var f = 0.5 + ((u *= u) - (o *= o)) / (2 * s),
          l =
            Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) /
            (2 * s);
        (e.x = r + f * a + l * c), (e.y = i + f * c - l * a);
      } else (e.x = r + u), (e.y = i);
    }
    function i(t, n) {
      var e = n.x - t.x,
        r = n.y - t.y,
        i = t.r + n.r;
      return i * i - 1e-6 > e * e + r * r;
    }
    function o(t) {
      var n = t._,
        e = t.next._,
        r = n.r + e.r,
        i = (n.x * e.r + e.x * n.r) / r,
        o = (n.y * e.r + e.y * n.r) / r;
      return i * i + o * o;
    }
    function u(t) {
      (this._ = t), (this.next = null), (this.previous = null);
    }
    function a(t) {
      if (!(s = t.length)) return 0;
      var n, e, a, s, f, l, h, d, p, v, g;
      if (((n = t[0]), (n.x = 0), (n.y = 0), !(s > 1))) return n.r;
      if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(s > 2)))
        return n.r + e.r;
      r(e, n, (a = t[2])),
        (n = new u(n)),
        (e = new u(e)),
        (a = new u(a)),
        (n.next = a.previous = e),
        (e.next = n.previous = a),
        (a.next = e.previous = n);
      t: for (h = 3; h < s; ++h) {
        r(n._, e._, (a = t[h])),
          (a = new u(a)),
          (d = e.next),
          (p = n.previous),
          (v = e._.r),
          (g = n._.r);
        do {
          if (v <= g) {
            if (i(d._, a._)) {
              (e = d), (n.next = e), (e.previous = n), --h;
              continue t;
            }
            (v += d._.r), (d = d.next);
          } else {
            if (i(p._, a._)) {
              (n = p), (n.next = e), (e.previous = n), --h;
              continue t;
            }
            (g += p._.r), (p = p.previous);
          }
        } while (d !== p.next);
        for (
          a.previous = n, a.next = e, n.next = e.previous = e = a, f = o(n);
          (a = a.next) !== e;

        )
          (l = o(a)) < f && ((n = a), (f = l));
        e = n.next;
      }
      for (n = [e._], a = e; (a = a.next) !== e; ) n.push(a._);
      for (a = Object(c.a)(n), h = 0; h < s; ++h)
        (n = t[h]), (n.x -= a.x), (n.y -= a.y);
      return a.r;
    }
    n.b = a;
    var c = e(190);
    n.a = function (t) {
      return a(t), t;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e, r;
      if (u(n, t)) return [n];
      for (e = 0; e < t.length; ++e)
        if (i(n, t[e]) && u(s(t[e], n), t)) return [t[e], n];
      for (e = 0; e < t.length - 1; ++e)
        for (r = e + 1; r < t.length; ++r)
          if (
            i(s(t[e], t[r]), n) &&
            i(s(t[e], n), t[r]) &&
            i(s(t[r], n), t[e]) &&
            u(f(t[e], t[r], n), t)
          )
            return [t[e], t[r], n];
      throw new Error();
    }
    function i(t, n) {
      var e = t.r - n.r,
        r = n.x - t.x,
        i = n.y - t.y;
      return e < 0 || e * e < r * r + i * i;
    }
    function o(t, n) {
      var e = t.r - n.r + 1e-6,
        r = n.x - t.x,
        i = n.y - t.y;
      return e > 0 && e * e > r * r + i * i;
    }
    function u(t, n) {
      for (var e = 0; e < n.length; ++e) if (!o(t, n[e])) return !1;
      return !0;
    }
    function a(t) {
      switch (t.length) {
        case 1:
          return c(t[0]);
        case 2:
          return s(t[0], t[1]);
        case 3:
          return f(t[0], t[1], t[2]);
      }
    }
    function c(t) {
      return { x: t.x, y: t.y, r: t.r };
    }
    function s(t, n) {
      var e = t.x,
        r = t.y,
        i = t.r,
        o = n.x,
        u = n.y,
        a = n.r,
        c = o - e,
        s = u - r,
        f = a - i,
        l = Math.sqrt(c * c + s * s);
      return {
        x: (e + o + (c / l) * f) / 2,
        y: (r + u + (s / l) * f) / 2,
        r: (l + i + a) / 2,
      };
    }
    function f(t, n, e) {
      var r = t.x,
        i = t.y,
        o = t.r,
        u = n.x,
        a = n.y,
        c = n.r,
        s = e.x,
        f = e.y,
        l = e.r,
        h = r - u,
        d = r - s,
        p = i - a,
        v = i - f,
        g = c - o,
        b = l - o,
        m = r * r + i * i - o * o,
        y = m - u * u - a * a + c * c,
        _ = m - s * s - f * f + l * l,
        O = d * p - h * v,
        x = (p * _ - v * y) / (2 * O) - r,
        w = (v * g - p * b) / O,
        j = (d * y - h * _) / (2 * O) - i,
        T = (h * b - d * g) / O,
        E = w * w + T * T - 1,
        C = 2 * (o + x * w + j * T),
        A = x * x + j * j - o * o,
        S = -(E ? (C + Math.sqrt(C * C - 4 * E * A)) / (2 * E) : A / C);
      return { x: r + x + w * S, y: i + j + T * S, r: S };
    }
    var l = e(433);
    n.a = function (t) {
      for (
        var n, e, i = 0, u = (t = Object(l.a)(l.b.call(t))).length, c = [];
        i < u;

      )
        (n = t[i]), e && o(e, n) ? ++i : ((e = a((c = r(c, n)))), (i = 0));
      return e;
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return 0;
    }
    (n.a = r),
      (n.b = function (t) {
        return function () {
          return t;
        };
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      (t.x0 = Math.round(t.x0)),
        (t.y0 = Math.round(t.y0)),
        (t.x1 = Math.round(t.x1)),
        (t.y1 = Math.round(t.y1));
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(31);
    n.a = (function t(n) {
      function e(t, e) {
        var r, i;
        return (
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          function () {
            var o;
            if (null != r) (o = r), (r = null);
            else
              do {
                (r = 2 * n() - 1), (o = 2 * n() - 1), (i = r * r + o * o);
              } while (!i || i > 1);
            return t + e * o * Math.sqrt((-2 * Math.log(i)) / i);
          }
        );
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(31);
    n.a = (function t(n) {
      function e(t) {
        return function () {
          for (var e = 0, r = 0; r < t; ++r) e += n();
          return e;
        };
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return function (e) {
        return t(e.responseText, n);
      };
    }
    var i = e(112);
    n.a = function (t, n) {
      return function (e, o, u) {
        arguments.length < 3 && ((u = o), (o = null));
        var a = Object(i.a)(e).mimeType(t);
        return (
          (a.row = function (t) {
            return arguments.length ? a.response(r(n, (o = t))) : o;
          }),
          a.row(o),
          u ? a.get(u) : a
        );
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      function n(n) {
        var r = n + "",
          i = e.get(r);
        if (!i) {
          if (c !== u) return c;
          e.set(r, (i = a.push(n)));
        }
        return t[(i - 1) % t.length];
      }
      var e = Object(i.c)(),
        a = [],
        c = u;
      return (
        (t = null == t ? [] : o.b.call(t)),
        (n.domain = function (t) {
          if (!arguments.length) return a.slice();
          (a = []), (e = Object(i.c)());
          for (var r, o, u = -1, c = t.length; ++u < c; )
            e.has((o = (r = t[u]) + "")) || e.set(o, a.push(r));
          return n;
        }),
        (n.range = function (e) {
          return arguments.length ? ((t = o.b.call(e)), n) : t.slice();
        }),
        (n.unknown = function (t) {
          return arguments.length ? ((c = t), n) : c;
        }),
        (n.copy = function () {
          return r().domain(a).range(t).unknown(c);
        }),
        n
      );
    }
    e.d(n, "b", function () {
      return u;
    }),
      (n.a = r);
    var i = e(42),
      o = e(25),
      u = { name: "implicit" };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return +t;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      t = t.slice();
      var e,
        r = 0,
        i = t.length - 1,
        o = t[r],
        u = t[i];
      return (
        u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
        (t[r] = n.floor(o)),
        (t[i] = n.ceil(u)),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return new Date(t);
    }
    function i(t) {
      return t instanceof Date ? +t : +new Date(+t);
    }
    function o(t, n, e, c, s, _, O, x, w) {
      function j(r) {
        return (O(r) < r
          ? S
          : _(r) < r
          ? M
          : s(r) < r
          ? N
          : c(r) < r
          ? D
          : n(r) < r
          ? e(r) < r
            ? k
            : I
          : t(r) < r
          ? L
          : P)(r);
      }
      function T(n, e, r, i) {
        if ((null == n && (n = 10), "number" == typeof n)) {
          var o = Math.abs(r - e) / n,
            a = Object(u.e)(function (t) {
              return t[2];
            }).right(R, o);
          a === R.length
            ? ((i = Object(u.A)(e / y, r / y, n)), (n = t))
            : a
            ? ((a = R[o / R[a - 1][2] < R[a][2] / o ? a - 1 : a]),
              (i = a[1]),
              (n = a[0]))
            : ((i = Math.max(Object(u.A)(e, r, n), 1)), (n = x));
        }
        return null == i ? n : n.every(i);
      }
      var E = Object(l.b)(l.c, a.m),
        C = E.invert,
        A = E.domain,
        S = w(".%L"),
        M = w(":%S"),
        N = w("%I:%M"),
        D = w("%I %p"),
        k = w("%a %d"),
        I = w("%b %d"),
        L = w("%B"),
        P = w("%Y"),
        R = [
          [O, 1, d],
          [O, 5, 5 * d],
          [O, 15, 15 * d],
          [O, 30, 30 * d],
          [_, 1, p],
          [_, 5, 5 * p],
          [_, 15, 15 * p],
          [_, 30, 30 * p],
          [s, 1, v],
          [s, 3, 3 * v],
          [s, 6, 6 * v],
          [s, 12, 12 * v],
          [c, 1, g],
          [c, 2, 2 * g],
          [e, 1, b],
          [n, 1, m],
          [n, 3, 3 * m],
          [t, 1, y],
        ];
      return (
        (E.invert = function (t) {
          return new Date(C(t));
        }),
        (E.domain = function (t) {
          return arguments.length ? A(f.a.call(t, i)) : A().map(r);
        }),
        (E.ticks = function (t, n) {
          var e,
            r = A(),
            i = r[0],
            o = r[r.length - 1],
            u = o < i;
          return (
            u && ((e = i), (i = o), (o = e)),
            (e = T(t, i, o, n)),
            (e = e ? e.range(i, o + 1) : []),
            u ? e.reverse() : e
          );
        }),
        (E.tickFormat = function (t, n) {
          return null == n ? j : w(n);
        }),
        (E.nice = function (t, n) {
          var e = A();
          return (t = T(t, e[0], e[e.length - 1], n))
            ? A(Object(h.a)(e, t))
            : E;
        }),
        (E.copy = function () {
          return Object(l.a)(E, o(t, n, e, c, s, _, O, x, w));
        }),
        E
      );
    }
    n.a = o;
    var u = e(8),
      a = e(11),
      c = e(73),
      s = e(114),
      f = e(25),
      l = e(72),
      h = e(198),
      d = 1e3,
      p = 60 * d,
      v = 60 * p,
      g = 24 * v,
      b = 7 * g,
      m = 30 * g,
      y = 365 * g;
    n.b = function () {
      return o(c.D, c.n, c.B, c.a, c.e, c.j, c.r, c.h, s.c).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2),
      ]);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n;
      }
      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }
    function i(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n;
      }
      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }
    function o(t) {
      return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
    }
    function u(t) {
      function n(t, n) {
        return function (e) {
          var r,
            i,
            o,
            u = [],
            a = -1,
            c = 0,
            s = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++a < s; )
            37 === t.charCodeAt(a) &&
              (u.push(t.slice(c, a)),
              null != (i = pt[(r = t.charAt(++a))])
                ? (r = t.charAt(++a))
                : (i = "e" === r ? " " : "0"),
              (o = n[r]) && (r = o(e, i)),
              u.push(r),
              (c = a + 1));
          return u.push(t.slice(c, a)), u.join("");
        };
      }
      function e(t, n) {
        return function (e) {
          var r,
            a,
            c = o(1900),
            s = u(c, t, (e += ""), 0);
          if (s != e.length) return null;
          if ("Q" in c) return new Date(c.Q);
          if (("p" in c && (c.H = (c.H % 12) + 12 * c.p), "V" in c)) {
            if (c.V < 1 || c.V > 53) return null;
            "w" in c || (c.w = 1),
              "Z" in c
                ? ((r = i(o(c.y))),
                  (a = r.getUTCDay()),
                  (r = a > 4 || 0 === a ? dt.P.ceil(r) : Object(dt.P)(r)),
                  (r = dt.F.offset(r, 7 * (c.V - 1))),
                  (c.y = r.getUTCFullYear()),
                  (c.m = r.getUTCMonth()),
                  (c.d = r.getUTCDate() + ((c.w + 6) % 7)))
                : ((r = n(o(c.y))),
                  (a = r.getDay()),
                  (r = a > 4 || 0 === a ? dt.l.ceil(r) : Object(dt.l)(r)),
                  (r = dt.a.offset(r, 7 * (c.V - 1))),
                  (c.y = r.getFullYear()),
                  (c.m = r.getMonth()),
                  (c.d = r.getDate() + ((c.w + 6) % 7)));
          } else
            ("W" in c || "U" in c) &&
              ("w" in c || (c.w = "u" in c ? c.u % 7 : "W" in c ? 1 : 0),
              (a = "Z" in c ? i(o(c.y)).getUTCDay() : n(o(c.y)).getDay()),
              (c.m = 0),
              (c.d =
                "W" in c
                  ? ((c.w + 6) % 7) + 7 * c.W - ((a + 5) % 7)
                  : c.w + 7 * c.U - ((a + 6) % 7)));
          return "Z" in c
            ? ((c.H += (c.Z / 100) | 0), (c.M += c.Z % 100), i(c))
            : n(c);
        };
      }
      function u(t, n, e, r) {
        for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
          if (r >= c) return -1;
          if (37 === (i = n.charCodeAt(u++))) {
            if (
              ((i = n.charAt(u++)),
              !(o = $t[i in pt ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      function a(t, n, e) {
        var r = Ft.exec(n.slice(e));
        return r ? ((t.p = qt[r[0].toLowerCase()]), e + r[0].length) : -1;
      }
      function c(t, n, e) {
        var r = Bt.exec(n.slice(e));
        return r ? ((t.w = zt[r[0].toLowerCase()]), e + r[0].length) : -1;
      }
      function vt(t, n, e) {
        var r = Ut.exec(n.slice(e));
        return r ? ((t.w = Wt[r[0].toLowerCase()]), e + r[0].length) : -1;
      }
      function gt(t, n, e) {
        var r = Gt.exec(n.slice(e));
        return r ? ((t.m = Xt[r[0].toLowerCase()]), e + r[0].length) : -1;
      }
      function bt(t, n, e) {
        var r = Vt.exec(n.slice(e));
        return r ? ((t.m = Yt[r[0].toLowerCase()]), e + r[0].length) : -1;
      }
      function mt(t, n, e) {
        return u(t, Nt, n, e);
      }
      function yt(t, n, e) {
        return u(t, Dt, n, e);
      }
      function _t(t, n, e) {
        return u(t, kt, n, e);
      }
      function Ot(t) {
        return Pt[t.getDay()];
      }
      function xt(t) {
        return Lt[t.getDay()];
      }
      function wt(t) {
        return Ht[t.getMonth()];
      }
      function jt(t) {
        return Rt[t.getMonth()];
      }
      function Tt(t) {
        return It[+(t.getHours() >= 12)];
      }
      function Et(t) {
        return Pt[t.getUTCDay()];
      }
      function Ct(t) {
        return Lt[t.getUTCDay()];
      }
      function At(t) {
        return Ht[t.getUTCMonth()];
      }
      function St(t) {
        return Rt[t.getUTCMonth()];
      }
      function Mt(t) {
        return It[+(t.getUTCHours() >= 12)];
      }
      var Nt = t.dateTime,
        Dt = t.date,
        kt = t.time,
        It = t.periods,
        Lt = t.days,
        Pt = t.shortDays,
        Rt = t.months,
        Ht = t.shortMonths,
        Ft = s(It),
        qt = f(It),
        Ut = s(Lt),
        Wt = f(Lt),
        Bt = s(Pt),
        zt = f(Pt),
        Vt = s(Rt),
        Yt = f(Rt),
        Gt = s(Ht),
        Xt = f(Ht),
        Kt = {
          a: Ot,
          A: xt,
          b: wt,
          B: jt,
          c: null,
          d: M,
          e: M,
          f: L,
          H: N,
          I: D,
          j: k,
          L: I,
          m: P,
          M: R,
          p: Tt,
          Q: lt,
          s: ht,
          S: H,
          u: F,
          U: q,
          V: U,
          w: W,
          W: B,
          x: null,
          X: null,
          y: z,
          Y: V,
          Z: Y,
          "%": ft,
        },
        Qt = {
          a: Et,
          A: Ct,
          b: At,
          B: St,
          c: null,
          d: G,
          e: G,
          f: J,
          H: X,
          I: K,
          j: Q,
          L: $,
          m: Z,
          M: tt,
          p: Mt,
          Q: lt,
          s: ht,
          S: nt,
          u: et,
          U: rt,
          V: it,
          w: ot,
          W: ut,
          x: null,
          X: null,
          y: at,
          Y: ct,
          Z: st,
          "%": ft,
        },
        $t = {
          a: c,
          A: vt,
          b: gt,
          B: bt,
          c: mt,
          d: _,
          e: _,
          f: E,
          H: x,
          I: x,
          j: O,
          L: T,
          m: y,
          M: w,
          p: a,
          Q: A,
          s: S,
          S: j,
          u: h,
          U: d,
          V: p,
          w: l,
          W: v,
          x: yt,
          X: _t,
          y: b,
          Y: g,
          Z: m,
          "%": C,
        };
      return (
        (Kt.x = n(Dt, Kt)),
        (Kt.X = n(kt, Kt)),
        (Kt.c = n(Nt, Kt)),
        (Qt.x = n(Dt, Qt)),
        (Qt.X = n(kt, Qt)),
        (Qt.c = n(Nt, Qt)),
        {
          format: function (t) {
            var e = n((t += ""), Kt);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          parse: function (t) {
            var n = e((t += ""), r);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var e = n((t += ""), Qt);
            return (
              (e.toString = function () {
                return t;
              }),
              e
            );
          },
          utcParse: function (t) {
            var n = e(t, i);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    }
    function a(t, n, e) {
      var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        o = i.length;
      return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
    }
    function c(t) {
      return t.replace(bt, "\\$&");
    }
    function s(t) {
      return new RegExp("^(?:" + t.map(c).join("|") + ")", "i");
    }
    function f(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r; )
        n[t[e].toLowerCase()] = e;
      return n;
    }
    function l(t, n, e) {
      var r = vt.exec(n.slice(e, e + 1));
      return r ? ((t.w = +r[0]), e + r[0].length) : -1;
    }
    function h(t, n, e) {
      var r = vt.exec(n.slice(e, e + 1));
      return r ? ((t.u = +r[0]), e + r[0].length) : -1;
    }
    function d(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.U = +r[0]), e + r[0].length) : -1;
    }
    function p(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.V = +r[0]), e + r[0].length) : -1;
    }
    function v(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.W = +r[0]), e + r[0].length) : -1;
    }
    function g(t, n, e) {
      var r = vt.exec(n.slice(e, e + 4));
      return r ? ((t.y = +r[0]), e + r[0].length) : -1;
    }
    function b(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r
        ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
        : -1;
    }
    function m(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r
        ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
        : -1;
    }
    function y(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
    }
    function _(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.d = +r[0]), e + r[0].length) : -1;
    }
    function O(t, n, e) {
      var r = vt.exec(n.slice(e, e + 3));
      return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
    }
    function x(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.H = +r[0]), e + r[0].length) : -1;
    }
    function w(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.M = +r[0]), e + r[0].length) : -1;
    }
    function j(t, n, e) {
      var r = vt.exec(n.slice(e, e + 2));
      return r ? ((t.S = +r[0]), e + r[0].length) : -1;
    }
    function T(t, n, e) {
      var r = vt.exec(n.slice(e, e + 3));
      return r ? ((t.L = +r[0]), e + r[0].length) : -1;
    }
    function E(t, n, e) {
      var r = vt.exec(n.slice(e, e + 6));
      return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
    }
    function C(t, n, e) {
      var r = gt.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }
    function A(t, n, e) {
      var r = vt.exec(n.slice(e));
      return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
    }
    function S(t, n, e) {
      var r = vt.exec(n.slice(e));
      return r ? ((t.Q = 1e3 * +r[0]), e + r[0].length) : -1;
    }
    function M(t, n) {
      return a(t.getDate(), n, 2);
    }
    function N(t, n) {
      return a(t.getHours(), n, 2);
    }
    function D(t, n) {
      return a(t.getHours() % 12 || 12, n, 2);
    }
    function k(t, n) {
      return a(1 + dt.a.count(Object(dt.D)(t), t), n, 3);
    }
    function I(t, n) {
      return a(t.getMilliseconds(), n, 3);
    }
    function L(t, n) {
      return I(t, n) + "000";
    }
    function P(t, n) {
      return a(t.getMonth() + 1, n, 2);
    }
    function R(t, n) {
      return a(t.getMinutes(), n, 2);
    }
    function H(t, n) {
      return a(t.getSeconds(), n, 2);
    }
    function F(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }
    function q(t, n) {
      return a(dt.t.count(Object(dt.D)(t), t), n, 2);
    }
    function U(t, n) {
      var e = t.getDay();
      return (
        (t = e >= 4 || 0 === e ? Object(dt.v)(t) : dt.v.ceil(t)),
        a(
          dt.v.count(Object(dt.D)(t), t) + (4 === Object(dt.D)(t).getDay()),
          n,
          2
        )
      );
    }
    function W(t) {
      return t.getDay();
    }
    function B(t, n) {
      return a(dt.l.count(Object(dt.D)(t), t), n, 2);
    }
    function z(t, n) {
      return a(t.getFullYear() % 100, n, 2);
    }
    function V(t, n) {
      return a(t.getFullYear() % 1e4, n, 4);
    }
    function Y(t) {
      var n = t.getTimezoneOffset();
      return (
        (n > 0 ? "-" : ((n *= -1), "+")) +
        a((n / 60) | 0, "0", 2) +
        a(n % 60, "0", 2)
      );
    }
    function G(t, n) {
      return a(t.getUTCDate(), n, 2);
    }
    function X(t, n) {
      return a(t.getUTCHours(), n, 2);
    }
    function K(t, n) {
      return a(t.getUTCHours() % 12 || 12, n, 2);
    }
    function Q(t, n) {
      return a(1 + dt.F.count(Object(dt._7)(t), t), n, 3);
    }
    function $(t, n) {
      return a(t.getUTCMilliseconds(), n, 3);
    }
    function J(t, n) {
      return $(t, n) + "000";
    }
    function Z(t, n) {
      return a(t.getUTCMonth() + 1, n, 2);
    }
    function tt(t, n) {
      return a(t.getUTCMinutes(), n, 2);
    }
    function nt(t, n) {
      return a(t.getUTCSeconds(), n, 2);
    }
    function et(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }
    function rt(t, n) {
      return a(dt.X.count(Object(dt._7)(t), t), n, 2);
    }
    function it(t, n) {
      var e = t.getUTCDay();
      return (
        (t = e >= 4 || 0 === e ? Object(dt.Z)(t) : dt.Z.ceil(t)),
        a(
          dt.Z.count(Object(dt._7)(t), t) +
            (4 === Object(dt._7)(t).getUTCDay()),
          n,
          2
        )
      );
    }
    function ot(t) {
      return t.getUTCDay();
    }
    function ut(t, n) {
      return a(dt.P.count(Object(dt._7)(t), t), n, 2);
    }
    function at(t, n) {
      return a(t.getUTCFullYear() % 100, n, 2);
    }
    function ct(t, n) {
      return a(t.getUTCFullYear() % 1e4, n, 4);
    }
    function st() {
      return "+0000";
    }
    function ft() {
      return "%";
    }
    function lt(t) {
      return +t;
    }
    function ht(t) {
      return Math.floor(+t / 1e3);
    }
    n.a = u;
    var dt = e(73),
      pt = { "-": "", _: " ", 0: "0" },
      vt = /^\s*\d+/,
      gt = /^%/,
      bt = /[\\^$*+?|[\]().{}]/g;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.toISOString();
    }
    e.d(n, "b", function () {
      return o;
    });
    var i = e(115),
      o = "%Y-%m-%dT%H:%M:%S.%LZ",
      u = Date.prototype.toISOString ? r : Object(i.d)(o);
    n.a = u;
  },
  function (t, n, e) {
    "use strict";
    var r = e(23),
      i = e(26),
      o = e(74),
      u = e(116),
      a = e(117);
    n.a = function () {
      function t(t) {
        var n,
          i,
          o,
          u,
          a,
          v = t.length,
          g = !1,
          b = new Array(v),
          m = new Array(v);
        for (null == h && (p = d((a = Object(r.a)()))), n = 0; n <= v; ++n) {
          if (!(n < v && l((u = t[n]), n, t)) === g)
            if ((g = !g)) (i = n), p.areaStart(), p.lineStart();
            else {
              for (p.lineEnd(), p.lineStart(), o = n - 1; o >= i; --o)
                p.point(b[o], m[o]);
              p.lineEnd(), p.areaEnd();
            }
          g &&
            ((b[n] = +e(u, n, t)),
            (m[n] = +s(u, n, t)),
            p.point(c ? +c(u, n, t) : b[n], f ? +f(u, n, t) : m[n]));
        }
        if (a) return (p = null), a + "" || null;
      }
      function n() {
        return Object(u.a)().defined(l).curve(d).context(h);
      }
      var e = a.a,
        c = null,
        s = Object(i.a)(0),
        f = a.b,
        l = Object(i.a)(!0),
        h = null,
        d = o.a,
        p = null;
      return (
        (t.x = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(i.a)(+n)),
              (c = null),
              t)
            : e;
        }),
        (t.x0 = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(i.a)(+n)), t)
            : e;
        }),
        (t.x1 = function (n) {
          return arguments.length
            ? ((c =
                null == n
                  ? null
                  : "function" == typeof n
                  ? n
                  : Object(i.a)(+n)),
              t)
            : c;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : Object(i.a)(+n)),
              (f = null),
              t)
            : s;
        }),
        (t.y0 = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : Object(i.a)(+n)), t)
            : s;
        }),
        (t.y1 = function (n) {
          return arguments.length
            ? ((f =
                null == n
                  ? null
                  : "function" == typeof n
                  ? n
                  : Object(i.a)(+n)),
              t)
            : f;
        }),
        (t.lineX0 = t.lineY0 = function () {
          return n().x(e).y(s);
        }),
        (t.lineY1 = function () {
          return n().x(e).y(f);
        }),
        (t.lineX1 = function () {
          return n().x(c).y(s);
        }),
        (t.defined = function (n) {
          return arguments.length
            ? ((l = "function" == typeof n ? n : Object(i.a)(!!n)), t)
            : l;
        }),
        (t.curve = function (n) {
          return arguments.length ? ((d = n), null != h && (p = d(h)), t) : d;
        }),
        (t.context = function (n) {
          return arguments.length
            ? (null == n ? (h = p = null) : (p = d((h = n))), t)
            : h;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._curve = t;
    }
    function i(t) {
      function n(n) {
        return new r(t(n));
      }
      return (n._curve = t), n;
    }
    e.d(n, "a", function () {
      return u;
    }),
      (n.b = i);
    var o = e(74),
      u = i(o.a);
    r.prototype = {
      areaStart: function () {
        this._curve.areaStart();
      },
      areaEnd: function () {
        this._curve.areaEnd();
      },
      lineStart: function () {
        this._curve.lineStart();
      },
      lineEnd: function () {
        this._curve.lineEnd();
      },
      point: function (t, n) {
        this._curve.point(n * Math.sin(t), n * -Math.cos(t));
      },
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = t.curve;
      return (
        (t.angle = t.x),
        delete t.x,
        (t.radius = t.y),
        delete t.y,
        (t.curve = function (t) {
          return arguments.length ? n(Object(i.b)(t)) : n()._curve;
        }),
        t
      );
    }
    n.b = r;
    var i = e(203),
      o = e(116);
    n.a = function () {
      return r(Object(o.a)().curve(i.a));
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return [(n = +n) * Math.cos((t -= Math.PI / 2)), n * Math.sin(t)];
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    });
    var r = Array.prototype.slice;
  },
  function (t, n, e) {
    "use strict";
    var r = e(48);
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(n / r.j);
        t.moveTo(e, 0), t.arc(0, 0, e, 0, r.m);
      },
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(n / 5) / 2;
        t.moveTo(-3 * e, -e),
          t.lineTo(-e, -e),
          t.lineTo(-e, -3 * e),
          t.lineTo(e, -3 * e),
          t.lineTo(e, -e),
          t.lineTo(3 * e, -e),
          t.lineTo(3 * e, e),
          t.lineTo(e, e),
          t.lineTo(e, 3 * e),
          t.lineTo(-e, 3 * e),
          t.lineTo(-e, e),
          t.lineTo(-3 * e, e),
          t.closePath();
      },
    };
  },
  function (t, n, e) {
    "use strict";
    var r = Math.sqrt(1 / 3),
      i = 2 * r;
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(n / i),
          o = e * r;
        t.moveTo(0, -e),
          t.lineTo(o, 0),
          t.lineTo(0, e),
          t.lineTo(-o, 0),
          t.closePath();
      },
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(48),
      i = Math.sin(r.j / 10) / Math.sin((7 * r.j) / 10),
      o = Math.sin(r.m / 10) * i,
      u = -Math.cos(r.m / 10) * i;
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(0.8908130915292852 * n),
          i = o * e,
          a = u * e;
        t.moveTo(0, -e), t.lineTo(i, a);
        for (var c = 1; c < 5; ++c) {
          var s = (r.m * c) / 5,
            f = Math.cos(s),
            l = Math.sin(s);
          t.lineTo(l * e, -f * e), t.lineTo(f * i - l * a, l * i + f * a);
        }
        t.closePath();
      },
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(n),
          r = -e / 2;
        t.rect(r, r, e, e);
      },
    };
  },
  function (t, n, e) {
    "use strict";
    var r = Math.sqrt(3);
    n.a = {
      draw: function (t, n) {
        var e = -Math.sqrt(n / (3 * r));
        t.moveTo(0, 2 * e),
          t.lineTo(-r * e, -e),
          t.lineTo(r * e, -e),
          t.closePath();
      },
    };
  },
  function (t, n, e) {
    "use strict";
    var r = -0.5,
      i = Math.sqrt(3) / 2,
      o = 1 / Math.sqrt(12),
      u = 3 * (o / 2 + 1);
    n.a = {
      draw: function (t, n) {
        var e = Math.sqrt(n / u),
          a = e / 2,
          c = e * o,
          s = a,
          f = e * o + e,
          l = -s,
          h = f;
        t.moveTo(a, c),
          t.lineTo(s, f),
          t.lineTo(l, h),
          t.lineTo(r * a - i * c, i * a + r * c),
          t.lineTo(r * s - i * f, i * s + r * f),
          t.lineTo(r * l - i * h, i * l + r * h),
          t.lineTo(r * a + i * c, r * c - i * a),
          t.lineTo(r * s + i * f, r * f - i * s),
          t.lineTo(r * l + i * h, r * h - i * l),
          t.closePath();
      },
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    n.a = r;
    var i = e(75),
      o = e(77);
    (r.prototype = {
      areaStart: i.a,
      areaEnd: i.a,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            Object(o.c)(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
      (n.b = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0));
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._context = t), (this._k = (1 - n) / 6);
    }
    n.a = r;
    var i = e(77);
    (r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Object(i.c)(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
      (n.b = (function t(n) {
        function e(t) {
          return new r(t, n);
        }
        return (
          (e.tension = function (n) {
            return t(+n);
          }),
          e
        );
      })(0));
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return (f.b[t.index] = { site: t, halfedges: [] });
    }
    function i(t, n) {
      var e = t.site,
        r = n.left,
        i = n.right;
      return (
        e === i && ((i = r), (r = e)),
        i
          ? Math.atan2(i[1] - r[1], i[0] - r[0])
          : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
            Math.atan2(r[0] - i[0], i[1] - r[1]))
      );
    }
    function o(t, n) {
      return n[+(n.left !== t.site)];
    }
    function u(t, n) {
      return n[+(n.left === t.site)];
    }
    function a() {
      for (var t, n, e, r, o = 0, u = f.b.length; o < u; ++o)
        if ((t = f.b[o]) && (r = (n = t.halfedges).length)) {
          var a = new Array(r),
            c = new Array(r);
          for (e = 0; e < r; ++e) (a[e] = e), (c[e] = i(t, f.e[n[e]]));
          for (
            a.sort(function (t, n) {
              return c[n] - c[t];
            }),
              e = 0;
            e < r;
            ++e
          )
            c[e] = n[a[e]];
          for (e = 0; e < r; ++e) n[e] = c[e];
        }
    }
    function c(t, n, e, r) {
      var i,
        a,
        c,
        l,
        h,
        d,
        p,
        v,
        g,
        b,
        m,
        y,
        _ = f.b.length,
        O = !0;
      for (i = 0; i < _; ++i)
        if ((a = f.b[i])) {
          for (c = a.site, h = a.halfedges, l = h.length; l--; )
            f.e[h[l]] || h.splice(l, 1);
          for (l = 0, d = h.length; l < d; )
            (b = u(a, f.e[h[l]])),
              (m = b[0]),
              (y = b[1]),
              (p = o(a, f.e[h[++l % d]])),
              (v = p[0]),
              (g = p[1]),
              (Math.abs(m - v) > f.f || Math.abs(y - g) > f.f) &&
                (h.splice(
                  l,
                  0,
                  f.e.push(
                    Object(s.b)(
                      c,
                      b,
                      Math.abs(m - t) < f.f && r - y > f.f
                        ? [t, Math.abs(v - t) < f.f ? g : r]
                        : Math.abs(y - r) < f.f && e - m > f.f
                        ? [Math.abs(g - r) < f.f ? v : e, r]
                        : Math.abs(m - e) < f.f && y - n > f.f
                        ? [e, Math.abs(v - e) < f.f ? g : n]
                        : Math.abs(y - n) < f.f && m - t > f.f
                        ? [Math.abs(g - n) < f.f ? v : t, n]
                        : null
                    )
                  ) - 1
                ),
                ++d);
          d && (O = !1);
        }
      if (O) {
        var x,
          w,
          j,
          T = 1 / 0;
        for (i = 0, O = null; i < _; ++i)
          (a = f.b[i]) &&
            ((c = a.site),
            (x = c[0] - t),
            (w = c[1] - n),
            (j = x * x + w * w) < T && ((T = j), (O = a)));
        if (O) {
          var E = [t, n],
            C = [t, r],
            A = [e, r],
            S = [e, n];
          O.halfedges.push(
            f.e.push(Object(s.b)((c = O.site), E, C)) - 1,
            f.e.push(Object(s.b)(c, C, A)) - 1,
            f.e.push(Object(s.b)(c, A, S)) - 1,
            f.e.push(Object(s.b)(c, S, E)) - 1
          );
        }
      }
      for (i = 0; i < _; ++i)
        (a = f.b[i]) && (a.halfedges.length || delete f.b[i]);
    }
    (n.c = r), (n.a = o), (n.d = a), (n.b = c);
    var s = e(121),
      f = e(51);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      Object(a.a)(this),
        (this.x = this.y = this.arc = this.site = this.cy = null);
    }
    function i(t) {
      var n = t.P,
        e = t.N;
      if (n && e) {
        var i = n.site,
          o = t.site,
          a = e.site;
        if (i !== a) {
          var f = o[0],
            l = o[1],
            h = i[0] - f,
            d = i[1] - l,
            p = a[0] - f,
            v = a[1] - l,
            g = 2 * (h * v - d * p);
          if (!(g >= -c.g)) {
            var b = h * h + d * d,
              m = p * p + v * v,
              y = (v * b - d * m) / g,
              _ = (h * m - p * b) / g,
              O = s.pop() || new r();
            (O.arc = t),
              (O.site = o),
              (O.x = y + f),
              (O.y = (O.cy = _ + l) + Math.sqrt(y * y + _ * _)),
              (t.circle = O);
            for (var x = null, w = c.c._; w; )
              if (O.y < w.y || (O.y === w.y && O.x <= w.x)) {
                if (!w.L) {
                  x = w.P;
                  break;
                }
                w = w.L;
              } else {
                if (!w.R) {
                  x = w;
                  break;
                }
                w = w.R;
              }
            c.c.insert(x, O), x || (u = O);
          }
        }
      }
    }
    function o(t) {
      var n = t.circle;
      n &&
        (n.P || (u = n.N),
        c.c.remove(n),
        s.push(n),
        Object(a.a)(n),
        (t.circle = null));
    }
    e.d(n, "c", function () {
      return u;
    }),
      (n.a = i),
      (n.b = o);
    var u,
      a = e(120),
      c = e(51),
      s = [];
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      (this.k = t), (this.x = n), (this.y = e);
    }
    function i(t) {
      return t.__zoom || o;
    }
    (n.a = r),
      e.d(n, "c", function () {
        return o;
      }),
      (n.b = i),
      (r.prototype = {
        constructor: r,
        scale: function (t) {
          return 1 === t ? this : new r(this.k * t, this.x, this.y);
        },
        translate: function (t, n) {
          return (0 === t) & (0 === n)
            ? this
            : new r(this.k, this.x + this.k * t, this.y + this.k * n);
        },
        apply: function (t) {
          return [t[0] * this.k + this.x, t[1] * this.k + this.y];
        },
        applyX: function (t) {
          return t * this.k + this.x;
        },
        applyY: function (t) {
          return t * this.k + this.y;
        },
        invert: function (t) {
          return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
        },
        invertX: function (t) {
          return (t - this.x) / this.k;
        },
        invertY: function (t) {
          return (t - this.y) / this.k;
        },
        rescaleX: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertX, this).map(t.invert, t));
        },
        rescaleY: function (t) {
          return t
            .copy()
            .domain(t.range().map(this.invertY, this).map(t.invert, t));
        },
        toString: function () {
          return (
            "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
          );
        },
      });
    var o = new r(1, 0, 0);
    i.prototype = r.prototype;
  },
  function (t, n) {
    var e;
    e = (function () {
      return this;
    })();
    try {
      e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  },
  ,
  ,
  ,
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });
    var r = e(240);
    e.d(n, "version", function () {
      return r.a;
    });
    var i = e(8);
    e.d(n, "bisect", function () {
      return i.b;
    }),
      e.d(n, "bisectRight", function () {
        return i.d;
      }),
      e.d(n, "bisectLeft", function () {
        return i.c;
      }),
      e.d(n, "ascending", function () {
        return i.a;
      }),
      e.d(n, "bisector", function () {
        return i.e;
      }),
      e.d(n, "cross", function () {
        return i.f;
      }),
      e.d(n, "descending", function () {
        return i.g;
      }),
      e.d(n, "deviation", function () {
        return i.h;
      }),
      e.d(n, "extent", function () {
        return i.i;
      }),
      e.d(n, "histogram", function () {
        return i.j;
      }),
      e.d(n, "thresholdFreedmanDiaconis", function () {
        return i.w;
      }),
      e.d(n, "thresholdScott", function () {
        return i.x;
      }),
      e.d(n, "thresholdSturges", function () {
        return i.y;
      }),
      e.d(n, "max", function () {
        return i.k;
      }),
      e.d(n, "mean", function () {
        return i.l;
      }),
      e.d(n, "median", function () {
        return i.m;
      }),
      e.d(n, "merge", function () {
        return i.n;
      }),
      e.d(n, "min", function () {
        return i.o;
      }),
      e.d(n, "pairs", function () {
        return i.p;
      }),
      e.d(n, "permute", function () {
        return i.q;
      }),
      e.d(n, "quantile", function () {
        return i.r;
      }),
      e.d(n, "range", function () {
        return i.s;
      }),
      e.d(n, "scan", function () {
        return i.t;
      }),
      e.d(n, "shuffle", function () {
        return i.u;
      }),
      e.d(n, "sum", function () {
        return i.v;
      }),
      e.d(n, "ticks", function () {
        return i.B;
      }),
      e.d(n, "tickIncrement", function () {
        return i.z;
      }),
      e.d(n, "tickStep", function () {
        return i.A;
      }),
      e.d(n, "transpose", function () {
        return i.C;
      }),
      e.d(n, "variance", function () {
        return i.D;
      }),
      e.d(n, "zip", function () {
        return i.E;
      });
    var o = e(257);
    e.d(n, "axisTop", function () {
      return o.d;
    }),
      e.d(n, "axisRight", function () {
        return o.c;
      }),
      e.d(n, "axisBottom", function () {
        return o.a;
      }),
      e.d(n, "axisLeft", function () {
        return o.b;
      });
    var u = e(261);
    e.d(n, "brush", function () {
      return u.a;
    }),
      e.d(n, "brushX", function () {
        return u.c;
      }),
      e.d(n, "brushY", function () {
        return u.d;
      }),
      e.d(n, "brushSelection", function () {
        return u.b;
      });
    var a = e(348);
    e.d(n, "chord", function () {
      return a.a;
    }),
      e.d(n, "ribbon", function () {
        return a.b;
      });
    var c = e(42);
    e.d(n, "nest", function () {
      return c.d;
    }),
      e.d(n, "set", function () {
        return c.e;
      }),
      e.d(n, "map", function () {
        return c.c;
      }),
      e.d(n, "keys", function () {
        return c.b;
      }),
      e.d(n, "values", function () {
        return c.f;
      }),
      e.d(n, "entries", function () {
        return c.a;
      });
    var s = e(13);
    e.d(n, "color", function () {
      return s.a;
    }),
      e.d(n, "rgb", function () {
        return s.f;
      }),
      e.d(n, "hsl", function () {
        return s.d;
      }),
      e.d(n, "lab", function () {
        return s.e;
      }),
      e.d(n, "hcl", function () {
        return s.c;
      }),
      e.d(n, "cubehelix", function () {
        return s.b;
      });
    var f = e(22);
    e.d(n, "dispatch", function () {
      return f.a;
    });
    var l = e(83);
    e.d(n, "drag", function () {
      return l.a;
    }),
      e.d(n, "dragDisable", function () {
        return l.b;
      }),
      e.d(n, "dragEnable", function () {
        return l.c;
      });
    var h = e(97);
    e.d(n, "dsvFormat", function () {
      return h.e;
    }),
      e.d(n, "csvParse", function () {
        return h.c;
      }),
      e.d(n, "csvParseRows", function () {
        return h.d;
      }),
      e.d(n, "csvFormat", function () {
        return h.a;
      }),
      e.d(n, "csvFormatRows", function () {
        return h.b;
      }),
      e.d(n, "tsvParse", function () {
        return h.h;
      }),
      e.d(n, "tsvParseRows", function () {
        return h.i;
      }),
      e.d(n, "tsvFormat", function () {
        return h.f;
      }),
      e.d(n, "tsvFormatRows", function () {
        return h.g;
      });
    var d = e(167);
    e.d(n, "easeLinear", function () {
      return d.y;
    }),
      e.d(n, "easeQuad", function () {
        return d.D;
      }),
      e.d(n, "easeQuadIn", function () {
        return d.E;
      }),
      e.d(n, "easeQuadOut", function () {
        return d.G;
      }),
      e.d(n, "easeQuadInOut", function () {
        return d.F;
      }),
      e.d(n, "easeCubic", function () {
        return d.m;
      }),
      e.d(n, "easeCubicIn", function () {
        return d.n;
      }),
      e.d(n, "easeCubicOut", function () {
        return d.p;
      }),
      e.d(n, "easeCubicInOut", function () {
        return d.o;
      }),
      e.d(n, "easePoly", function () {
        return d.z;
      }),
      e.d(n, "easePolyIn", function () {
        return d.A;
      }),
      e.d(n, "easePolyOut", function () {
        return d.C;
      }),
      e.d(n, "easePolyInOut", function () {
        return d.B;
      }),
      e.d(n, "easeSin", function () {
        return d.H;
      }),
      e.d(n, "easeSinIn", function () {
        return d.I;
      }),
      e.d(n, "easeSinOut", function () {
        return d.K;
      }),
      e.d(n, "easeSinInOut", function () {
        return d.J;
      }),
      e.d(n, "easeExp", function () {
        return d.u;
      }),
      e.d(n, "easeExpIn", function () {
        return d.v;
      }),
      e.d(n, "easeExpOut", function () {
        return d.x;
      }),
      e.d(n, "easeExpInOut", function () {
        return d.w;
      }),
      e.d(n, "easeCircle", function () {
        return d.i;
      }),
      e.d(n, "easeCircleIn", function () {
        return d.j;
      }),
      e.d(n, "easeCircleOut", function () {
        return d.l;
      }),
      e.d(n, "easeCircleInOut", function () {
        return d.k;
      }),
      e.d(n, "easeBounce", function () {
        return d.e;
      }),
      e.d(n, "easeBounceIn", function () {
        return d.f;
      }),
      e.d(n, "easeBounceOut", function () {
        return d.h;
      }),
      e.d(n, "easeBounceInOut", function () {
        return d.g;
      }),
      e.d(n, "easeBack", function () {
        return d.a;
      }),
      e.d(n, "easeBackIn", function () {
        return d.b;
      }),
      e.d(n, "easeBackOut", function () {
        return d.d;
      }),
      e.d(n, "easeBackInOut", function () {
        return d.c;
      }),
      e.d(n, "easeElastic", function () {
        return d.q;
      }),
      e.d(n, "easeElasticIn", function () {
        return d.r;
      }),
      e.d(n, "easeElasticOut", function () {
        return d.t;
      }),
      e.d(n, "easeElasticInOut", function () {
        return d.s;
      });
    var p = e(361);
    e.d(n, "forceCenter", function () {
      return p.a;
    }),
      e.d(n, "forceCollide", function () {
        return p.b;
      }),
      e.d(n, "forceLink", function () {
        return p.c;
      }),
      e.d(n, "forceManyBody", function () {
        return p.d;
      }),
      e.d(n, "forceRadial", function () {
        return p.e;
      }),
      e.d(n, "forceSimulation", function () {
        return p.f;
      }),
      e.d(n, "forceX", function () {
        return p.g;
      }),
      e.d(n, "forceY", function () {
        return p.h;
      });
    var v = e(102);
    e.d(n, "formatDefaultLocale", function () {
      return v.b;
    }),
      e.d(n, "format", function () {
        return v.a;
      }),
      e.d(n, "formatPrefix", function () {
        return v.d;
      }),
      e.d(n, "formatLocale", function () {
        return v.c;
      }),
      e.d(n, "formatSpecifier", function () {
        return v.e;
      }),
      e.d(n, "precisionFixed", function () {
        return v.f;
      }),
      e.d(n, "precisionPrefix", function () {
        return v.g;
      }),
      e.d(n, "precisionRound", function () {
        return v.h;
      });
    var g = e(391);
    e.d(n, "geoArea", function () {
      return g.c;
    }),
      e.d(n, "geoBounds", function () {
        return g.h;
      }),
      e.d(n, "geoCentroid", function () {
        return g.i;
      }),
      e.d(n, "geoCircle", function () {
        return g.j;
      }),
      e.d(n, "geoClipAntimeridian", function () {
        return g.k;
      }),
      e.d(n, "geoClipCircle", function () {
        return g.l;
      }),
      e.d(n, "geoClipExtent", function () {
        return g.m;
      }),
      e.d(n, "geoClipRectangle", function () {
        return g.n;
      }),
      e.d(n, "geoContains", function () {
        return g.u;
      }),
      e.d(n, "geoDistance", function () {
        return g.v;
      }),
      e.d(n, "geoGraticule", function () {
        return g.A;
      }),
      e.d(n, "geoGraticule10", function () {
        return g.B;
      }),
      e.d(n, "geoInterpolate", function () {
        return g.D;
      }),
      e.d(n, "geoLength", function () {
        return g.E;
      }),
      e.d(n, "geoPath", function () {
        return g.L;
      }),
      e.d(n, "geoAlbers", function () {
        return g.a;
      }),
      e.d(n, "geoAlbersUsa", function () {
        return g.b;
      }),
      e.d(n, "geoAzimuthalEqualArea", function () {
        return g.d;
      }),
      e.d(n, "geoAzimuthalEqualAreaRaw", function () {
        return g.e;
      }),
      e.d(n, "geoAzimuthalEquidistant", function () {
        return g.f;
      }),
      e.d(n, "geoAzimuthalEquidistantRaw", function () {
        return g.g;
      }),
      e.d(n, "geoConicConformal", function () {
        return g.o;
      }),
      e.d(n, "geoConicConformalRaw", function () {
        return g.p;
      }),
      e.d(n, "geoConicEqualArea", function () {
        return g.q;
      }),
      e.d(n, "geoConicEqualAreaRaw", function () {
        return g.r;
      }),
      e.d(n, "geoConicEquidistant", function () {
        return g.s;
      }),
      e.d(n, "geoConicEquidistantRaw", function () {
        return g.t;
      }),
      e.d(n, "geoEquirectangular", function () {
        return g.w;
      }),
      e.d(n, "geoEquirectangularRaw", function () {
        return g.x;
      }),
      e.d(n, "geoGnomonic", function () {
        return g.y;
      }),
      e.d(n, "geoGnomonicRaw", function () {
        return g.z;
      }),
      e.d(n, "geoIdentity", function () {
        return g.C;
      }),
      e.d(n, "geoProjection", function () {
        return g.M;
      }),
      e.d(n, "geoProjectionMutator", function () {
        return g.N;
      }),
      e.d(n, "geoMercator", function () {
        return g.F;
      }),
      e.d(n, "geoMercatorRaw", function () {
        return g.G;
      }),
      e.d(n, "geoNaturalEarth1", function () {
        return g.H;
      }),
      e.d(n, "geoNaturalEarth1Raw", function () {
        return g.I;
      }),
      e.d(n, "geoOrthographic", function () {
        return g.J;
      }),
      e.d(n, "geoOrthographicRaw", function () {
        return g.K;
      }),
      e.d(n, "geoStereographic", function () {
        return g.P;
      }),
      e.d(n, "geoStereographicRaw", function () {
        return g.Q;
      }),
      e.d(n, "geoTransverseMercator", function () {
        return g.T;
      }),
      e.d(n, "geoTransverseMercatorRaw", function () {
        return g.U;
      }),
      e.d(n, "geoRotation", function () {
        return g.O;
      }),
      e.d(n, "geoStream", function () {
        return g.R;
      }),
      e.d(n, "geoTransform", function () {
        return g.S;
      });
    var b = e(419);
    e.d(n, "cluster", function () {
      return b.a;
    }),
      e.d(n, "hierarchy", function () {
        return b.b;
      }),
      e.d(n, "pack", function () {
        return b.c;
      }),
      e.d(n, "packSiblings", function () {
        return b.e;
      }),
      e.d(n, "packEnclose", function () {
        return b.d;
      }),
      e.d(n, "partition", function () {
        return b.f;
      }),
      e.d(n, "stratify", function () {
        return b.g;
      }),
      e.d(n, "tree", function () {
        return b.h;
      }),
      e.d(n, "treemap", function () {
        return b.i;
      }),
      e.d(n, "treemapBinary", function () {
        return b.j;
      }),
      e.d(n, "treemapDice", function () {
        return b.k;
      }),
      e.d(n, "treemapSlice", function () {
        return b.m;
      }),
      e.d(n, "treemapSliceDice", function () {
        return b.n;
      }),
      e.d(n, "treemapSquarify", function () {
        return b.o;
      }),
      e.d(n, "treemapResquarify", function () {
        return b.l;
      });
    var m = e(11);
    e.d(n, "interpolate", function () {
      return m.a;
    }),
      e.d(n, "interpolateArray", function () {
        return m.b;
      }),
      e.d(n, "interpolateBasis", function () {
        return m.c;
      }),
      e.d(n, "interpolateBasisClosed", function () {
        return m.d;
      }),
      e.d(n, "interpolateDate", function () {
        return m.g;
      }),
      e.d(n, "interpolateNumber", function () {
        return m.m;
      }),
      e.d(n, "interpolateObject", function () {
        return m.n;
      }),
      e.d(n, "interpolateRound", function () {
        return m.r;
      }),
      e.d(n, "interpolateString", function () {
        return m.s;
      }),
      e.d(n, "interpolateTransformCss", function () {
        return m.t;
      }),
      e.d(n, "interpolateTransformSvg", function () {
        return m.u;
      }),
      e.d(n, "interpolateZoom", function () {
        return m.v;
      }),
      e.d(n, "interpolateRgb", function () {
        return m.o;
      }),
      e.d(n, "interpolateRgbBasis", function () {
        return m.p;
      }),
      e.d(n, "interpolateRgbBasisClosed", function () {
        return m.q;
      }),
      e.d(n, "interpolateHsl", function () {
        return m.j;
      }),
      e.d(n, "interpolateHslLong", function () {
        return m.k;
      }),
      e.d(n, "interpolateLab", function () {
        return m.l;
      }),
      e.d(n, "interpolateHcl", function () {
        return m.h;
      }),
      e.d(n, "interpolateHclLong", function () {
        return m.i;
      }),
      e.d(n, "interpolateCubehelix", function () {
        return m.e;
      }),
      e.d(n, "interpolateCubehelixLong", function () {
        return m.f;
      }),
      e.d(n, "quantize", function () {
        return m.w;
      });
    var y = e(23);
    e.d(n, "path", function () {
      return y.a;
    });
    var _ = e(441);
    e.d(n, "polygonArea", function () {
      return _.a;
    }),
      e.d(n, "polygonCentroid", function () {
        return _.b;
      }),
      e.d(n, "polygonHull", function () {
        return _.d;
      }),
      e.d(n, "polygonContains", function () {
        return _.c;
      }),
      e.d(n, "polygonLength", function () {
        return _.e;
      });
    var O = e(100);
    e.d(n, "quadtree", function () {
      return O.a;
    });
    var x = e(448);
    e.d(n, "queue", function () {
      return x.a;
    });
    var w = e(451);
    e.d(n, "randomUniform", function () {
      return w.f;
    }),
      e.d(n, "randomNormal", function () {
        return w.e;
      }),
      e.d(n, "randomLogNormal", function () {
        return w.d;
      }),
      e.d(n, "randomBates", function () {
        return w.a;
      }),
      e.d(n, "randomIrwinHall", function () {
        return w.c;
      }),
      e.d(n, "randomExponential", function () {
        return w.b;
      });
    var j = e(456);
    e.d(n, "request", function () {
      return j.d;
    }),
      e.d(n, "html", function () {
        return j.b;
      }),
      e.d(n, "json", function () {
        return j.c;
      }),
      e.d(n, "text", function () {
        return j.e;
      }),
      e.d(n, "xml", function () {
        return j.g;
      }),
      e.d(n, "csv", function () {
        return j.a;
      }),
      e.d(n, "tsv", function () {
        return j.f;
      });
    var T = e(463);
    e.d(n, "scaleBand", function () {
      return T.i;
    }),
      e.d(n, "scalePoint", function () {
        return T.o;
      }),
      e.d(n, "scaleIdentity", function () {
        return T.j;
      }),
      e.d(n, "scaleLinear", function () {
        return T.l;
      }),
      e.d(n, "scaleLog", function () {
        return T.m;
      }),
      e.d(n, "scaleOrdinal", function () {
        return T.n;
      }),
      e.d(n, "scaleImplicit", function () {
        return T.k;
      }),
      e.d(n, "scalePow", function () {
        return T.p;
      }),
      e.d(n, "scaleSqrt", function () {
        return T.t;
      }),
      e.d(n, "scaleQuantile", function () {
        return T.q;
      }),
      e.d(n, "scaleQuantize", function () {
        return T.r;
      }),
      e.d(n, "scaleThreshold", function () {
        return T.u;
      }),
      e.d(n, "scaleTime", function () {
        return T.v;
      }),
      e.d(n, "scaleUtc", function () {
        return T.w;
      }),
      e.d(n, "schemeCategory10", function () {
        return T.x;
      }),
      e.d(n, "schemeCategory20b", function () {
        return T.z;
      }),
      e.d(n, "schemeCategory20c", function () {
        return T.A;
      }),
      e.d(n, "schemeCategory20", function () {
        return T.y;
      }),
      e.d(n, "interpolateCubehelixDefault", function () {
        return T.b;
      }),
      e.d(n, "interpolateRainbow", function () {
        return T.f;
      }),
      e.d(n, "interpolateWarm", function () {
        return T.h;
      }),
      e.d(n, "interpolateCool", function () {
        return T.a;
      }),
      e.d(n, "interpolateViridis", function () {
        return T.g;
      }),
      e.d(n, "interpolateMagma", function () {
        return T.d;
      }),
      e.d(n, "interpolateInferno", function () {
        return T.c;
      }),
      e.d(n, "interpolatePlasma", function () {
        return T.e;
      }),
      e.d(n, "scaleSequential", function () {
        return T.s;
      });
    var E = e(3);
    e.d(n, "create", function () {
      return E.b;
    }),
      e.d(n, "creator", function () {
        return E.c;
      }),
      e.d(n, "local", function () {
        return E.f;
      }),
      e.d(n, "matcher", function () {
        return E.g;
      }),
      e.d(n, "mouse", function () {
        return E.h;
      }),
      e.d(n, "namespace", function () {
        return E.i;
      }),
      e.d(n, "namespaces", function () {
        return E.j;
      }),
      e.d(n, "clientPoint", function () {
        return E.a;
      }),
      e.d(n, "select", function () {
        return E.k;
      }),
      e.d(n, "selectAll", function () {
        return E.l;
      }),
      e.d(n, "selection", function () {
        return E.m;
      }),
      e.d(n, "selector", function () {
        return E.n;
      }),
      e.d(n, "selectorAll", function () {
        return E.o;
      }),
      e.d(n, "style", function () {
        return E.p;
      }),
      e.d(n, "touch", function () {
        return E.q;
      }),
      e.d(n, "touches", function () {
        return E.r;
      }),
      e.d(n, "window", function () {
        return E.s;
      }),
      e.d(n, "event", function () {
        return E.e;
      }),
      e.d(n, "customEvent", function () {
        return E.d;
      });
    var C = e(496);
    e.d(n, "arc", function () {
      return C.a;
    }),
      e.d(n, "area", function () {
        return C.b;
      }),
      e.d(n, "line", function () {
        return C.v;
      }),
      e.d(n, "pie", function () {
        return C.A;
      }),
      e.d(n, "areaRadial", function () {
        return C.c;
      }),
      e.d(n, "radialArea", function () {
        return C.C;
      }),
      e.d(n, "lineRadial", function () {
        return C.w;
      }),
      e.d(n, "radialLine", function () {
        return C.D;
      }),
      e.d(n, "pointRadial", function () {
        return C.B;
      }),
      e.d(n, "linkHorizontal", function () {
        return C.x;
      }),
      e.d(n, "linkVertical", function () {
        return C.z;
      }),
      e.d(n, "linkRadial", function () {
        return C.y;
      }),
      e.d(n, "symbol", function () {
        return C.P;
      }),
      e.d(n, "symbols", function () {
        return C.X;
      }),
      e.d(n, "symbolCircle", function () {
        return C.Q;
      }),
      e.d(n, "symbolCross", function () {
        return C.R;
      }),
      e.d(n, "symbolDiamond", function () {
        return C.S;
      }),
      e.d(n, "symbolSquare", function () {
        return C.T;
      }),
      e.d(n, "symbolStar", function () {
        return C.U;
      }),
      e.d(n, "symbolTriangle", function () {
        return C.V;
      }),
      e.d(n, "symbolWye", function () {
        return C.W;
      }),
      e.d(n, "curveBasisClosed", function () {
        return C.e;
      }),
      e.d(n, "curveBasisOpen", function () {
        return C.f;
      }),
      e.d(n, "curveBasis", function () {
        return C.d;
      }),
      e.d(n, "curveBundle", function () {
        return C.g;
      }),
      e.d(n, "curveCardinalClosed", function () {
        return C.i;
      }),
      e.d(n, "curveCardinalOpen", function () {
        return C.j;
      }),
      e.d(n, "curveCardinal", function () {
        return C.h;
      }),
      e.d(n, "curveCatmullRomClosed", function () {
        return C.l;
      }),
      e.d(n, "curveCatmullRomOpen", function () {
        return C.m;
      }),
      e.d(n, "curveCatmullRom", function () {
        return C.k;
      }),
      e.d(n, "curveLinearClosed", function () {
        return C.o;
      }),
      e.d(n, "curveLinear", function () {
        return C.n;
      }),
      e.d(n, "curveMonotoneX", function () {
        return C.p;
      }),
      e.d(n, "curveMonotoneY", function () {
        return C.q;
      }),
      e.d(n, "curveNatural", function () {
        return C.r;
      }),
      e.d(n, "curveStep", function () {
        return C.s;
      }),
      e.d(n, "curveStepAfter", function () {
        return C.t;
      }),
      e.d(n, "curveStepBefore", function () {
        return C.u;
      }),
      e.d(n, "stack", function () {
        return C.E;
      }),
      e.d(n, "stackOffsetExpand", function () {
        return C.G;
      }),
      e.d(n, "stackOffsetDiverging", function () {
        return C.F;
      }),
      e.d(n, "stackOffsetNone", function () {
        return C.H;
      }),
      e.d(n, "stackOffsetSilhouette", function () {
        return C.I;
      }),
      e.d(n, "stackOffsetWiggle", function () {
        return C.J;
      }),
      e.d(n, "stackOrderAscending", function () {
        return C.K;
      }),
      e.d(n, "stackOrderDescending", function () {
        return C.L;
      }),
      e.d(n, "stackOrderInsideOut", function () {
        return C.M;
      }),
      e.d(n, "stackOrderNone", function () {
        return C.N;
      }),
      e.d(n, "stackOrderReverse", function () {
        return C.O;
      });
    var A = e(73);
    e.d(n, "timeInterval", function () {
      return A.g;
    }),
      e.d(n, "timeMillisecond", function () {
        return A.h;
      }),
      e.d(n, "timeMilliseconds", function () {
        return A.i;
      }),
      e.d(n, "utcMillisecond", function () {
        return A.L;
      }),
      e.d(n, "utcMilliseconds", function () {
        return A.M;
      }),
      e.d(n, "timeSecond", function () {
        return A.r;
      }),
      e.d(n, "timeSeconds", function () {
        return A.s;
      }),
      e.d(n, "utcSecond", function () {
        return A.V;
      }),
      e.d(n, "utcSeconds", function () {
        return A.W;
      }),
      e.d(n, "timeMinute", function () {
        return A.j;
      }),
      e.d(n, "timeMinutes", function () {
        return A.k;
      }),
      e.d(n, "timeHour", function () {
        return A.e;
      }),
      e.d(n, "timeHours", function () {
        return A.f;
      }),
      e.d(n, "timeDay", function () {
        return A.a;
      }),
      e.d(n, "timeDays", function () {
        return A.b;
      }),
      e.d(n, "timeWeek", function () {
        return A.B;
      }),
      e.d(n, "timeWeeks", function () {
        return A.C;
      }),
      e.d(n, "timeSunday", function () {
        return A.t;
      }),
      e.d(n, "timeSundays", function () {
        return A.u;
      }),
      e.d(n, "timeMonday", function () {
        return A.l;
      }),
      e.d(n, "timeMondays", function () {
        return A.m;
      }),
      e.d(n, "timeTuesday", function () {
        return A.x;
      }),
      e.d(n, "timeTuesdays", function () {
        return A.y;
      }),
      e.d(n, "timeWednesday", function () {
        return A.z;
      }),
      e.d(n, "timeWednesdays", function () {
        return A.A;
      }),
      e.d(n, "timeThursday", function () {
        return A.v;
      }),
      e.d(n, "timeThursdays", function () {
        return A.w;
      }),
      e.d(n, "timeFriday", function () {
        return A.c;
      }),
      e.d(n, "timeFridays", function () {
        return A.d;
      }),
      e.d(n, "timeSaturday", function () {
        return A.p;
      }),
      e.d(n, "timeSaturdays", function () {
        return A.q;
      }),
      e.d(n, "timeMonth", function () {
        return A.n;
      }),
      e.d(n, "timeMonths", function () {
        return A.o;
      }),
      e.d(n, "timeYear", function () {
        return A.D;
      }),
      e.d(n, "timeYears", function () {
        return A.E;
      }),
      e.d(n, "utcMinute", function () {
        return A.N;
      }),
      e.d(n, "utcMinutes", function () {
        return A.O;
      }),
      e.d(n, "utcHour", function () {
        return A.J;
      }),
      e.d(n, "utcHours", function () {
        return A.K;
      }),
      e.d(n, "utcDay", function () {
        return A.F;
      }),
      e.d(n, "utcDays", function () {
        return A.G;
      }),
      e.d(n, "utcWeek", function () {
        return A._5;
      }),
      e.d(n, "utcWeeks", function () {
        return A._6;
      }),
      e.d(n, "utcSunday", function () {
        return A.X;
      }),
      e.d(n, "utcSundays", function () {
        return A.Y;
      }),
      e.d(n, "utcMonday", function () {
        return A.P;
      }),
      e.d(n, "utcMondays", function () {
        return A.Q;
      }),
      e.d(n, "utcTuesday", function () {
        return A._1;
      }),
      e.d(n, "utcTuesdays", function () {
        return A._2;
      }),
      e.d(n, "utcWednesday", function () {
        return A._3;
      }),
      e.d(n, "utcWednesdays", function () {
        return A._4;
      }),
      e.d(n, "utcThursday", function () {
        return A.Z;
      }),
      e.d(n, "utcThursdays", function () {
        return A._0;
      }),
      e.d(n, "utcFriday", function () {
        return A.H;
      }),
      e.d(n, "utcFridays", function () {
        return A.I;
      }),
      e.d(n, "utcSaturday", function () {
        return A.T;
      }),
      e.d(n, "utcSaturdays", function () {
        return A.U;
      }),
      e.d(n, "utcMonth", function () {
        return A.R;
      }),
      e.d(n, "utcMonths", function () {
        return A.S;
      }),
      e.d(n, "utcYear", function () {
        return A._7;
      }),
      e.d(n, "utcYears", function () {
        return A._8;
      });
    var S = e(114);
    e.d(n, "timeFormatDefaultLocale", function () {
      return S.d;
    }),
      e.d(n, "timeFormat", function () {
        return S.c;
      }),
      e.d(n, "timeParse", function () {
        return S.f;
      }),
      e.d(n, "utcFormat", function () {
        return S.g;
      }),
      e.d(n, "utcParse", function () {
        return S.h;
      }),
      e.d(n, "timeFormatLocale", function () {
        return S.e;
      }),
      e.d(n, "isoFormat", function () {
        return S.a;
      }),
      e.d(n, "isoParse", function () {
        return S.b;
      });
    var M = e(64);
    e.d(n, "now", function () {
      return M.b;
    }),
      e.d(n, "timer", function () {
        return M.d;
      }),
      e.d(n, "timerFlush", function () {
        return M.e;
      }),
      e.d(n, "timeout", function () {
        return M.c;
      }),
      e.d(n, "interval", function () {
        return M.a;
      });
    var N = e(94);
    e.d(n, "transition", function () {
      return N.c;
    }),
      e.d(n, "active", function () {
        return N.a;
      }),
      e.d(n, "interrupt", function () {
        return N.b;
      });
    var D = e(521);
    e.d(n, "voronoi", function () {
      return D.a;
    });
    var k = e(526);
    e.d(n, "zoom", function () {
      return k.a;
    }),
      e.d(n, "zoomTransform", function () {
        return k.c;
      }),
      e.d(n, "zoomIdentity", function () {
        return k.b;
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, n) {
    /*! @source http://purl.eligrey.com/github/l10n.js/blob/master/l10n.js*/
    !(function () {
      "use strict";
      var t,
        n,
        e = self.navigator,
        r = String,
        i = Object.prototype.hasOwnProperty,
        o = {},
        u = {},
        a = /^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,
        c =
          Array.prototype.indexOf ||
          function (t) {
            for (var n = this.length, e = 0; e < n; e++)
              if (e in this && this[e] === t) return e;
            return -1;
          },
        s = function (n) {
          var e = new t(),
            r = {};
          e.open("GET", n, !1), e.send(null);
          try {
            r = JSON.parse(e.responseText);
          } catch (t) {
            setTimeout(function () {
              var t = new Error("Unable to load localization data: " + n);
              throw ((t.name = "Localization Error"), t);
            }, 0);
          }
          return r;
        },
        f = (r.toLocaleString = function (t) {
          if (arguments.length > 0 && "number" != typeof t)
            if ("string" == typeof t) f(s(t));
            else if (!1 === t) u = {};
            else {
              var n, e, a;
              for (n in t)
                if (i.call(t, n)) {
                  if (
                    ((e = t[n]),
                    (n = n.toLowerCase()),
                    (n in u && !1 !== e) || (u[n] = {}),
                    !1 === e)
                  )
                    continue;
                  if ("string" == typeof e) {
                    if (0 !== r.locale.toLowerCase().indexOf(n)) {
                      n in o || (o[n] = []), o[n].push(e);
                      continue;
                    }
                    e = s(e);
                  }
                  for (a in e) i.call(e, a) && (u[n][a] = e[a]);
                }
            }
          return Function.prototype.toLocaleString.apply(r, arguments);
        }),
        l = function (t) {
          for (var n, e = o[t], r = 0, i = e.length; r < i; r++)
            (n = {}), (n[t] = s(e[r])), f(n);
          delete o[t];
        },
        h = (r.prototype.toLocaleString = function () {
          var t,
            e = n,
            i = r[e ? "defaultLocale" : "locale"],
            a = i.toLowerCase().split("-"),
            c = a.length,
            s = this.valueOf();
          n = !1;
          do {
            if (
              ((t = a.slice(0, c).join("-")),
              t in o && l(t),
              t in u && s in u[t])
            )
              return u[t][s];
          } while (c-- > 1);
          return !e && r.defaultLocale ? ((n = !0), h.call(s)) : s;
        });
      if (
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        var d = ActiveXObject;
        t = function () {
          try {
            return new d("Msxml2.XMLHTTP.6.0");
          } catch (t) {}
          try {
            return new d("Msxml2.XMLHTTP.3.0");
          } catch (t) {}
          try {
            return new d("Msxml2.XMLHTTP");
          } catch (t) {}
          throw new Error("XMLHttpRequest not supported by this browser.");
        };
      } else t = XMLHttpRequest;
      if (
        ((r.defaultLocale = r.defaultLocale || ""),
        (r.locale = (e && (e.language || e.userLanguage)) || ""),
        "undefined" != typeof document)
      )
        for (
          var p, v = document.getElementsByTagName("link"), g = v.length;
          g--;

        ) {
          var b = v[g],
            m = (b.getAttribute("rel") || "").toLowerCase().split(/\s+/);
          a.test(b.type) &&
            (-1 !== c.call(m, "localizations")
              ? f(b.getAttribute("href"))
              : -1 !== c.call(m, "localization") &&
                ((p = {}),
                (p[
                  (b.getAttribute("hreflang") || "").toLowerCase()
                ] = b.getAttribute("href")),
                f(p)));
        }
    })();
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    });
    var r = "4.13.0";
  },
  function (t, n, e) {
    "use strict";
    var r = e(139);
    n.a = function (t, n, e) {
      var i,
        o,
        u,
        a,
        c = t.length,
        s = n.length,
        f = new Array(c * s);
      for (null == e && (e = r.b), i = u = 0; i < c; ++i)
        for (a = t[i], o = 0; o < s; ++o, ++u) f[u] = e(a, n[o]);
      return f;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(143),
      i = e(137),
      o = e(244),
      u = e(142),
      a = e(245),
      c = e(144),
      s = e(145),
      f = e(146);
    n.a = function () {
      function t(t) {
        var r,
          o,
          u = t.length,
          a = new Array(u);
        for (r = 0; r < u; ++r) a[r] = n(t[r], r, t);
        var f = e(a),
          h = f[0],
          d = f[1],
          p = l(a, h, d);
        Array.isArray(p) ||
          ((p = Object(s.c)(h, d, p)),
          (p = Object(c.a)(Math.ceil(h / p) * p, Math.floor(d / p) * p, p)));
        for (var v = p.length; p[0] <= h; ) p.shift(), --v;
        for (; p[v - 1] > d; ) p.pop(), --v;
        var g,
          b = new Array(v + 1);
        for (r = 0; r <= v; ++r)
          (g = b[r] = []),
            (g.x0 = r > 0 ? p[r - 1] : h),
            (g.x1 = r < v ? p[r] : d);
        for (r = 0; r < u; ++r)
          (o = a[r]), h <= o && o <= d && b[Object(i.c)(p, o, 0, v)].push(t[r]);
        return b;
      }
      var n = a.a,
        e = u.a,
        l = f.a;
      return (
        (t.value = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(o.a)(e)), t)
            : n;
        }),
        (t.domain = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(o.a)([n[0], n[1]])), t)
            : e;
        }),
        (t.thresholds = function (n) {
          return arguments.length
            ? ((l =
                "function" == typeof n
                  ? n
                  : Array.isArray(n)
                  ? Object(o.a)(r.b.call(n))
                  : Object(o.a)(n)),
              t)
            : l;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(143),
      i = e(28),
      o = e(40),
      u = e(82);
    n.a = function (t, n, e) {
      return (
        (t = r.a.call(t, o.a).sort(i.a)),
        Math.ceil(
          (e - n) /
            (2 *
              (Object(u.a)(t, 0.75) - Object(u.a)(t, 0.25)) *
              Math.pow(t.length, -1 / 3))
        )
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(140);
    n.a = function (t, n, e) {
      return Math.ceil(
        (e - n) / (3.5 * Object(r.a)(t) * Math.pow(t.length, -1 / 3))
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e,
        r,
        i = t.length,
        o = -1;
      if (null == n) {
        for (; ++o < i; )
          if (null != (e = t[o]) && e >= e)
            for (r = e; ++o < i; ) null != (e = t[o]) && e > r && (r = e);
      } else
        for (; ++o < i; )
          if (null != (e = n(t[o], o, t)) && e >= e)
            for (r = e; ++o < i; )
              null != (e = n(t[o], o, t)) && e > r && (r = e);
      return r;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(40);
    n.a = function (t, n) {
      var e,
        i = t.length,
        o = i,
        u = -1,
        a = 0;
      if (null == n)
        for (; ++u < i; ) isNaN((e = Object(r.a)(t[u]))) ? --o : (a += e);
      else
        for (; ++u < i; )
          isNaN((e = Object(r.a)(n(t[u], u, t)))) ? --o : (a += e);
      if (o) return a / o;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(28),
      i = e(40),
      o = e(82);
    n.a = function (t, n) {
      var e,
        u = t.length,
        a = -1,
        c = [];
      if (null == n)
        for (; ++a < u; ) isNaN((e = Object(i.a)(t[a]))) || c.push(e);
      else
        for (; ++a < u; ) isNaN((e = Object(i.a)(n(t[a], a, t)))) || c.push(e);
      return Object(o.a)(c.sort(r.a), 0.5);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i; )
        u += t[o].length;
      for (e = new Array(u); --i >= 0; )
        for (r = t[i], n = r.length; --n >= 0; ) e[--u] = r[n];
      return e;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
      return r;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(28);
    n.a = function (t, n) {
      if ((e = t.length)) {
        var e,
          i,
          o = 0,
          u = 0,
          a = t[u];
        for (null == n && (n = r.a); ++o < e; )
          (n((i = t[o]), a) < 0 || 0 !== n(a, a)) && ((a = i), (u = o));
        return 0 === n(a, a) ? u : void 0;
      }
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e) {
      for (
        var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
        o;

      )
        (i = (Math.random() * o--) | 0),
          (r = t[o + n]),
          (t[o + n] = t[i + n]),
          (t[i + n] = r);
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      var e,
        r = t.length,
        i = -1,
        o = 0;
      if (null == n) for (; ++i < r; ) (e = +t[i]) && (o += e);
      else for (; ++i < r; ) (e = +n(t[i], i, t)) && (o += e);
      return o;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(148);
    n.a = function () {
      return Object(r.a)(arguments);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(258);
    e.d(n, "d", function () {
      return r.d;
    }),
      e.d(n, "c", function () {
        return r.c;
      }),
      e.d(n, "a", function () {
        return r.a;
      }),
      e.d(n, "b", function () {
        return r.b;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return "translate(" + (t + 0.5) + ",0)";
    }
    function i(t) {
      return "translate(0," + (t + 0.5) + ")";
    }
    function o(t) {
      return function (n) {
        return +t(n);
      };
    }
    function u(t) {
      var n = Math.max(0, t.bandwidth() - 1) / 2;
      return (
        t.round() && (n = Math.round(n)),
        function (e) {
          return +t(e) + n;
        }
      );
    }
    function a() {
      return !this.__axis;
    }
    function c(t, n) {
      function e(e) {
        var r = null == s ? (n.ticks ? n.ticks.apply(n, c) : n.domain()) : s,
          i = null == f ? (n.tickFormat ? n.tickFormat.apply(n, c) : p.a) : f,
          d = Math.max(l, 0) + _,
          j = n.range(),
          T = +j[0] + 0.5,
          E = +j[j.length - 1] + 0.5,
          C = (n.bandwidth ? u : o)(n.copy()),
          A = e.selection ? e.selection() : e,
          S = A.selectAll(".domain").data([null]),
          M = A.selectAll(".tick").data(r, n).order(),
          N = M.exit(),
          D = M.enter().append("g").attr("class", "tick"),
          k = M.select("line"),
          I = M.select("text");
        (S = S.merge(
          S.enter()
            .insert("path", ".tick")
            .attr("class", "domain")
            .attr("stroke", "#000")
        )),
          (M = M.merge(D)),
          (k = k.merge(
            D.append("line")
              .attr("stroke", "#000")
              .attr(x + "2", O * l)
          )),
          (I = I.merge(
            D.append("text")
              .attr("fill", "#000")
              .attr(x, O * d)
              .attr("dy", t === v ? "0em" : t === b ? "0.71em" : "0.32em")
          )),
          e !== A &&
            ((S = S.transition(e)),
            (M = M.transition(e)),
            (k = k.transition(e)),
            (I = I.transition(e)),
            (N = N.transition(e)
              .attr("opacity", y)
              .attr("transform", function (t) {
                return isFinite((t = C(t)))
                  ? w(t)
                  : this.getAttribute("transform");
              })),
            D.attr("opacity", y).attr("transform", function (t) {
              var n = this.parentNode.__axis;
              return w(n && isFinite((n = n(t))) ? n : C(t));
            })),
          N.remove(),
          S.attr(
            "d",
            t === m || t == g
              ? "M" + O * h + "," + T + "H0.5V" + E + "H" + O * h
              : "M" + T + "," + O * h + "V0.5H" + E + "V" + O * h
          ),
          M.attr("opacity", 1).attr("transform", function (t) {
            return w(C(t));
          }),
          k.attr(x + "2", O * l),
          I.attr(x, O * d).text(i),
          A.filter(a)
            .attr("fill", "none")
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr(
              "text-anchor",
              t === g ? "start" : t === m ? "end" : "middle"
            ),
          A.each(function () {
            this.__axis = C;
          });
      }
      var c = [],
        s = null,
        f = null,
        l = 6,
        h = 6,
        _ = 3,
        O = t === v || t === m ? -1 : 1,
        x = t === m || t === g ? "x" : "y",
        w = t === v || t === b ? r : i;
      return (
        (e.scale = function (t) {
          return arguments.length ? ((n = t), e) : n;
        }),
        (e.ticks = function () {
          return (c = d.a.call(arguments)), e;
        }),
        (e.tickArguments = function (t) {
          return arguments.length
            ? ((c = null == t ? [] : d.a.call(t)), e)
            : c.slice();
        }),
        (e.tickValues = function (t) {
          return arguments.length
            ? ((s = null == t ? null : d.a.call(t)), e)
            : s && s.slice();
        }),
        (e.tickFormat = function (t) {
          return arguments.length ? ((f = t), e) : f;
        }),
        (e.tickSize = function (t) {
          return arguments.length ? ((l = h = +t), e) : l;
        }),
        (e.tickSizeInner = function (t) {
          return arguments.length ? ((l = +t), e) : l;
        }),
        (e.tickSizeOuter = function (t) {
          return arguments.length ? ((h = +t), e) : h;
        }),
        (e.tickPadding = function (t) {
          return arguments.length ? ((_ = +t), e) : _;
        }),
        e
      );
    }
    function s(t) {
      return c(v, t);
    }
    function f(t) {
      return c(g, t);
    }
    function l(t) {
      return c(b, t);
    }
    function h(t) {
      return c(m, t);
    }
    (n.d = s), (n.c = f), (n.a = l), (n.b = h);
    var d = e(259),
      p = e(260),
      v = 1,
      g = 2,
      b = 3,
      m = 4,
      y = 1e-6;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    });
    var r = Array.prototype.slice;
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(262);
    e.d(n, "a", function () {
      return r.d;
    }),
      e.d(n, "c", function () {
        return r.b;
      }),
      e.d(n, "d", function () {
        return r.c;
      }),
      e.d(n, "b", function () {
        return r.a;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return { type: t };
    }
    function i() {
      return !v.e.button;
    }
    function o() {
      var t = this.ownerSVGElement || this;
      return [
        [0, 0],
        [t.width.baseVal.value, t.height.baseVal.value],
      ];
    }
    function u(t) {
      for (; !t.__brush; ) if (!(t = t.parentNode)) return;
      return t.__brush;
    }
    function a(t) {
      return t[0][0] === t[1][0] || t[0][1] === t[1][1];
    }
    function c(t) {
      var n = t.__brush;
      return n ? n.dim.output(n.selection) : null;
    }
    function s() {
      return l(j);
    }
    function f() {
      return l(T);
    }
    function l(t) {
      function n(n) {
        var i = n
          .property("__brush", l)
          .selectAll(".overlay")
          .data([r("overlay")]);
        i
          .enter()
          .append("rect")
          .attr("class", "overlay")
          .attr("pointer-events", "all")
          .attr("cursor", C.overlay)
          .merge(i)
          .each(function () {
            var t = u(this).extent;
            Object(v.k)(this)
              .attr("x", t[0][0])
              .attr("y", t[0][1])
              .attr("width", t[1][0] - t[0][0])
              .attr("height", t[1][1] - t[0][1]);
          }),
          n
            .selectAll(".selection")
            .data([r("selection")])
            .enter()
            .append("rect")
            .attr("class", "selection")
            .attr("cursor", C.selection)
            .attr("fill", "#777")
            .attr("fill-opacity", 0.3)
            .attr("stroke", "#fff")
            .attr("shape-rendering", "crispEdges");
        var o = n.selectAll(".handle").data(t.handles, function (t) {
          return t.type;
        });
        o.exit().remove(),
          o
            .enter()
            .append("rect")
            .attr("class", function (t) {
              return "handle handle--" + t.type;
            })
            .attr("cursor", function (t) {
              return C[t.type];
            }),
          n
            .each(e)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            .on("mousedown.brush touchstart.brush", f);
      }
      function e() {
        var t = Object(v.k)(this),
          n = u(this).selection;
        n
          ? (t
              .selectAll(".selection")
              .style("display", null)
              .attr("x", n[0][0])
              .attr("y", n[0][1])
              .attr("width", n[1][0] - n[0][0])
              .attr("height", n[1][1] - n[0][1]),
            t
              .selectAll(".handle")
              .style("display", null)
              .attr("x", function (t) {
                return "e" === t.type[t.type.length - 1]
                  ? n[1][0] - L / 2
                  : n[0][0] - L / 2;
              })
              .attr("y", function (t) {
                return "s" === t.type[0] ? n[1][1] - L / 2 : n[0][1] - L / 2;
              })
              .attr("width", function (t) {
                return "n" === t.type || "s" === t.type
                  ? n[1][0] - n[0][0] + L
                  : L;
              })
              .attr("height", function (t) {
                return "e" === t.type || "w" === t.type
                  ? n[1][1] - n[0][1] + L
                  : L;
              }))
          : t
              .selectAll(".selection,.handle")
              .style("display", "none")
              .attr("x", null)
              .attr("y", null)
              .attr("width", null)
              .attr("height", null);
      }
      function c(t, n) {
        return t.__brush.emitter || new s(t, n);
      }
      function s(t, n) {
        (this.that = t),
          (this.args = n),
          (this.state = t.__brush),
          (this.active = 0);
      }
      function f() {
        function n() {
          var t = Object(v.h)(q);
          !J ||
            H ||
            F ||
            (Math.abs(t[0] - tt[0]) > Math.abs(t[1] - tt[1])
              ? (F = !0)
              : (H = !0)),
            (tt = t),
            (R = !0),
            Object(y.a)(),
            r();
        }
        function r() {
          var t;
          switch (((L = tt[0] - Z[0]), (P = tt[1] - Z[1]), W)) {
            case O:
            case _:
              B &&
                ((L = Math.max(X - f, Math.min(Q - b, L))),
                (l = f + L),
                (m = b + L)),
                z &&
                  ((P = Math.max(K - h, Math.min($ - D, P))),
                  (p = h + P),
                  (I = D + P));
              break;
            case x:
              B < 0
                ? ((L = Math.max(X - f, Math.min(Q - f, L))),
                  (l = f + L),
                  (m = b))
                : B > 0 &&
                  ((L = Math.max(X - b, Math.min(Q - b, L))),
                  (l = f),
                  (m = b + L)),
                z < 0
                  ? ((P = Math.max(K - h, Math.min($ - h, P))),
                    (p = h + P),
                    (I = D))
                  : z > 0 &&
                    ((P = Math.max(K - D, Math.min($ - D, P))),
                    (p = h),
                    (I = D + P));
              break;
            case w:
              B &&
                ((l = Math.max(X, Math.min(Q, f - L * B))),
                (m = Math.max(X, Math.min(Q, b + L * B)))),
                z &&
                  ((p = Math.max(K, Math.min($, h - P * z))),
                  (I = Math.max(K, Math.min($, D + P * z))));
          }
          m < l &&
            ((B *= -1),
            (t = f),
            (f = b),
            (b = t),
            (t = l),
            (l = m),
            (m = t),
            U in A && rt.attr("cursor", C[(U = A[U])])),
            I < p &&
              ((z *= -1),
              (t = h),
              (h = D),
              (D = t),
              (t = p),
              (p = I),
              (I = t),
              U in S && rt.attr("cursor", C[(U = S[U])])),
            V.selection && (G = V.selection),
            H && ((l = G[0][0]), (m = G[1][0])),
            F && ((p = G[0][1]), (I = G[1][1])),
            (G[0][0] === l &&
              G[0][1] === p &&
              G[1][0] === m &&
              G[1][1] === I) ||
              ((V.selection = [
                [l, p],
                [m, I],
              ]),
              e.call(q),
              nt.brush());
        }
        function i() {
          if ((Object(y.b)(), v.e.touches)) {
            if (v.e.touches.length) return;
            E && clearTimeout(E),
              (E = setTimeout(function () {
                E = null;
              }, 500)),
              et.on("touchmove.brush touchend.brush touchcancel.brush", null);
          } else
            Object(d.c)(v.e.view, R),
              it.on(
                "keydown.brush keyup.brush mousemove.brush mouseup.brush",
                null
              );
          et.attr("pointer-events", "all"),
            rt.attr("cursor", C.overlay),
            V.selection && (G = V.selection),
            a(G) && ((V.selection = null), e.call(q)),
            nt.end();
        }
        function o() {
          switch (v.e.keyCode) {
            case 16:
              J = B && z;
              break;
            case 18:
              W === x &&
                (B && ((b = m - L * B), (f = l + L * B)),
                z && ((D = I - P * z), (h = p + P * z)),
                (W = w),
                r());
              break;
            case 32:
              (W !== x && W !== w) ||
                (B < 0 ? (b = m - L) : B > 0 && (f = l - L),
                z < 0 ? (D = I - P) : z > 0 && (h = p - P),
                (W = O),
                rt.attr("cursor", C.selection),
                r());
              break;
            default:
              return;
          }
          Object(y.a)();
        }
        function s() {
          switch (v.e.keyCode) {
            case 16:
              J && ((H = F = J = !1), r());
              break;
            case 18:
              W === w &&
                (B < 0 ? (b = m) : B > 0 && (f = l),
                z < 0 ? (D = I) : z > 0 && (h = p),
                (W = x),
                r());
              break;
            case 32:
              W === O &&
                (v.e.altKey
                  ? (B && ((b = m - L * B), (f = l + L * B)),
                    z && ((D = I - P * z), (h = p + P * z)),
                    (W = w))
                  : (B < 0 ? (b = m) : B > 0 && (f = l),
                    z < 0 ? (D = I) : z > 0 && (h = p),
                    (W = x)),
                rt.attr("cursor", C[U]),
                r());
              break;
            default:
              return;
          }
          Object(y.a)();
        }
        if (v.e.touches) {
          if (v.e.changedTouches.length < v.e.touches.length)
            return Object(y.a)();
        } else if (E) return;
        if (k.apply(this, arguments)) {
          var f,
            l,
            h,
            p,
            b,
            m,
            D,
            I,
            L,
            P,
            R,
            H,
            F,
            q = this,
            U = v.e.target.__data__.type,
            W =
              "selection" === (v.e.metaKey ? (U = "overlay") : U)
                ? _
                : v.e.altKey
                ? w
                : x,
            B = t === T ? null : M[U],
            z = t === j ? null : N[U],
            V = u(q),
            Y = V.extent,
            G = V.selection,
            X = Y[0][0],
            K = Y[0][1],
            Q = Y[1][0],
            $ = Y[1][1],
            J = B && z && v.e.shiftKey,
            Z = Object(v.h)(q),
            tt = Z,
            nt = c(q, arguments).beforestart();
          "overlay" === U
            ? (V.selection = G = [
                [(f = t === T ? X : Z[0]), (h = t === j ? K : Z[1])],
                [(b = t === T ? Q : f), (D = t === j ? $ : h)],
              ])
            : ((f = G[0][0]), (h = G[0][1]), (b = G[1][0]), (D = G[1][1])),
            (l = f),
            (p = h),
            (m = b),
            (I = D);
          var et = Object(v.k)(q).attr("pointer-events", "none"),
            rt = et.selectAll(".overlay").attr("cursor", C[U]);
          if (v.e.touches)
            et.on("touchmove.brush", n, !0).on(
              "touchend.brush touchcancel.brush",
              i,
              !0
            );
          else {
            var it = Object(v.k)(v.e.view)
              .on("keydown.brush", o, !0)
              .on("keyup.brush", s, !0)
              .on("mousemove.brush", n, !0)
              .on("mouseup.brush", i, !0);
            Object(d.b)(v.e.view);
          }
          Object(y.b)(), Object(g.b)(q), e.call(q), nt.start();
        }
      }
      function l() {
        var n = this.__brush || { selection: null };
        return (n.extent = D.apply(this, arguments)), (n.dim = t), n;
      }
      var E,
        D = o,
        k = i,
        I = Object(h.a)(n, "start", "brush", "end"),
        L = 6;
      return (
        (n.move = function (n, r) {
          n.selection
            ? n
                .on("start.brush", function () {
                  c(this, arguments).beforestart().start();
                })
                .on("interrupt.brush end.brush", function () {
                  c(this, arguments).end();
                })
                .tween("brush", function () {
                  function n(t) {
                    (o.selection = 1 === t && a(f) ? null : l(t)),
                      e.call(i),
                      u.brush();
                  }
                  var i = this,
                    o = i.__brush,
                    u = c(i, arguments),
                    s = o.selection,
                    f = t.input(
                      "function" == typeof r ? r.apply(this, arguments) : r,
                      o.extent
                    ),
                    l = Object(p.a)(s, f);
                  return s && f ? n : n(1);
                })
            : n.each(function () {
                var n = this,
                  i = arguments,
                  o = n.__brush,
                  u = t.input(
                    "function" == typeof r ? r.apply(n, i) : r,
                    o.extent
                  ),
                  s = c(n, i).beforestart();
                Object(g.b)(n),
                  (o.selection = null == u || a(u) ? null : u),
                  e.call(n),
                  s.start().brush().end();
              });
        }),
        (s.prototype = {
          beforestart: function () {
            return (
              1 == ++this.active &&
                ((this.state.emitter = this), (this.starting = !0)),
              this
            );
          },
          start: function () {
            return (
              this.starting && ((this.starting = !1), this.emit("start")), this
            );
          },
          brush: function () {
            return this.emit("brush"), this;
          },
          end: function () {
            return (
              0 == --this.active &&
                (delete this.state.emitter, this.emit("end")),
              this
            );
          },
          emit: function (e) {
            Object(v.d)(
              new m.a(n, e, t.output(this.state.selection)),
              I.apply,
              I,
              [e, this.that, this.args]
            );
          },
        }),
        (n.extent = function (t) {
          return arguments.length
            ? ((D =
                "function" == typeof t
                  ? t
                  : Object(b.a)([
                      [+t[0][0], +t[0][1]],
                      [+t[1][0], +t[1][1]],
                    ])),
              n)
            : D;
        }),
        (n.filter = function (t) {
          return arguments.length
            ? ((k = "function" == typeof t ? t : Object(b.a)(!!t)), n)
            : k;
        }),
        (n.handleSize = function (t) {
          return arguments.length ? ((L = +t), n) : L;
        }),
        (n.on = function () {
          var t = I.on.apply(I, arguments);
          return t === I ? n : t;
        }),
        n
      );
    }
    (n.a = c), (n.b = s), (n.c = f);
    var h = e(22),
      d = e(83),
      p = e(11),
      v = e(3),
      g = e(94),
      b = e(345),
      m = e(346),
      y = e(347),
      _ = { name: "drag" },
      O = { name: "space" },
      x = { name: "handle" },
      w = { name: "center" },
      j = {
        name: "x",
        handles: ["e", "w"].map(r),
        input: function (t, n) {
          return (
            t && [
              [t[0], n[0][1]],
              [t[1], n[1][1]],
            ]
          );
        },
        output: function (t) {
          return t && [t[0][0], t[1][0]];
        },
      },
      T = {
        name: "y",
        handles: ["n", "s"].map(r),
        input: function (t, n) {
          return (
            t && [
              [n[0][0], t[0]],
              [n[1][0], t[1]],
            ]
          );
        },
        output: function (t) {
          return t && [t[0][1], t[1][1]];
        },
      },
      E = {
        name: "xy",
        handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(r),
        input: function (t) {
          return t;
        },
        output: function (t) {
          return t;
        },
      },
      C = {
        overlay: "crosshair",
        selection: "move",
        n: "ns-resize",
        e: "ew-resize",
        s: "ns-resize",
        w: "ew-resize",
        nw: "nwse-resize",
        ne: "nesw-resize",
        se: "nwse-resize",
        sw: "nesw-resize",
      },
      A = { e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se" },
      S = { n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw" },
      M = {
        overlay: 1,
        selection: 1,
        n: null,
        e: 1,
        s: null,
        w: -1,
        nw: -1,
        ne: 1,
        se: 1,
        sw: -1,
      },
      N = {
        overlay: 1,
        selection: 1,
        n: -1,
        e: null,
        s: 1,
        w: null,
        nw: -1,
        ne: -1,
        se: 1,
        sw: 1,
      };
    n.d = function () {
      return l(E);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + "") || t in r)
          throw new Error("illegal type: " + t);
        r[t] = [];
      }
      return new i(r);
    }
    function i(t) {
      this._ = t;
    }
    function o(t, n) {
      return t
        .trim()
        .split(/^|\s+/)
        .map(function (t) {
          var e = "",
            r = t.indexOf(".");
          if (
            (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
            t && !n.hasOwnProperty(t))
          )
            throw new Error("unknown type: " + t);
          return { type: t, name: e };
        });
    }
    function u(t, n) {
      for (var e, r = 0, i = t.length; r < i; ++r)
        if ((e = t[r]).name === n) return e.value;
    }
    function a(t, n, e) {
      for (var r = 0, i = t.length; r < i; ++r)
        if (t[r].name === n) {
          (t[r] = c), (t = t.slice(0, r).concat(t.slice(r + 1)));
          break;
        }
      return null != e && t.push({ name: n, value: e }), t;
    }
    var c = { value: function () {} };
    (i.prototype = r.prototype = {
      constructor: i,
      on: function (t, n) {
        var e,
          r = this._,
          i = o(t + "", r),
          c = -1,
          s = i.length;
        {
          if (!(arguments.length < 2)) {
            if (null != n && "function" != typeof n)
              throw new Error("invalid callback: " + n);
            for (; ++c < s; )
              if ((e = (t = i[c]).type)) r[e] = a(r[e], t.name, n);
              else if (null == n) for (e in r) r[e] = a(r[e], t.name, null);
            return this;
          }
          for (; ++c < s; )
            if ((e = (t = i[c]).type) && (e = u(r[e], t.name))) return e;
        }
      },
      copy: function () {
        var t = {},
          n = this._;
        for (var e in n) t[e] = n[e].slice();
        return new i(t);
      },
      call: function (t, n) {
        if ((e = arguments.length - 2) > 0)
          for (var e, r, i = new Array(e), o = 0; o < e; ++o)
            i[o] = arguments[o + 2];
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (r = this._[t], o = 0, e = r.length; o < e; ++o)
          r[o].value.apply(n, i);
      },
      apply: function (t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
          r[i].value.apply(n, e);
      },
    }),
      (n.a = r);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return !c.e.button;
    }
    function i() {
      return this.parentNode;
    }
    function o(t) {
      return null == t ? { x: c.e.x, y: c.e.y } : t;
    }
    function u() {
      return "ontouchstart" in this;
    }
    var a = e(22),
      c = e(3),
      s = e(155),
      f = e(156),
      l = e(299),
      h = e(300);
    n.a = function () {
      function t(t) {
        t.on("mousedown.drag", n)
          .filter(T)
          .on("touchstart.drag", p)
          .on("touchmove.drag", v)
          .on("touchend.drag touchcancel.drag", g)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function n() {
        if (!O && x.apply(this, arguments)) {
          var t = b("mouse", w.apply(this, arguments), c.h, this, arguments);
          t &&
            (Object(c.k)(c.e.view)
              .on("mousemove.drag", e, !0)
              .on("mouseup.drag", d, !0),
            Object(s.a)(c.e.view),
            Object(f.b)(),
            (_ = !1),
            (m = c.e.clientX),
            (y = c.e.clientY),
            t("start"));
        }
      }
      function e() {
        if ((Object(f.a)(), !_)) {
          var t = c.e.clientX - m,
            n = c.e.clientY - y;
          _ = t * t + n * n > S;
        }
        E.mouse("drag");
      }
      function d() {
        Object(c.k)(c.e.view).on("mousemove.drag mouseup.drag", null),
          Object(s.b)(c.e.view, _),
          Object(f.a)(),
          E.mouse("end");
      }
      function p() {
        if (x.apply(this, arguments)) {
          var t,
            n,
            e = c.e.changedTouches,
            r = w.apply(this, arguments),
            i = e.length;
          for (t = 0; t < i; ++t)
            (n = b(e[t].identifier, r, c.q, this, arguments)) &&
              (Object(f.b)(), n("start"));
        }
      }
      function v() {
        var t,
          n,
          e = c.e.changedTouches,
          r = e.length;
        for (t = 0; t < r; ++t)
          (n = E[e[t].identifier]) && (Object(f.a)(), n("drag"));
      }
      function g() {
        var t,
          n,
          e = c.e.changedTouches,
          r = e.length;
        for (
          O && clearTimeout(O),
            O = setTimeout(function () {
              O = null;
            }, 500),
            t = 0;
          t < r;
          ++t
        )
          (n = E[e[t].identifier]) && (Object(f.b)(), n("end"));
      }
      function b(n, e, r, i, o) {
        var u,
          a,
          s,
          f = r(e, n),
          l = C.copy();
        if (
          Object(c.d)(
            new h.a(t, "beforestart", u, n, A, f[0], f[1], 0, 0, l),
            function () {
              return (
                null != (c.e.subject = u = j.apply(i, o)) &&
                ((a = u.x - f[0] || 0), (s = u.y - f[1] || 0), !0)
              );
            }
          )
        )
          return function d(p) {
            var v,
              g = f;
            switch (p) {
              case "start":
                (E[n] = d), (v = A++);
                break;
              case "end":
                delete E[n], --A;
              case "drag":
                (f = r(e, n)), (v = A);
            }
            Object(c.d)(
              new h.a(
                t,
                p,
                u,
                n,
                v,
                f[0] + a,
                f[1] + s,
                f[0] - g[0],
                f[1] - g[1],
                l
              ),
              l.apply,
              l,
              [p, i, o]
            );
          };
      }
      var m,
        y,
        _,
        O,
        x = r,
        w = i,
        j = o,
        T = u,
        E = {},
        C = Object(a.a)("start", "drag", "end"),
        A = 0,
        S = 0;
      return (
        (t.filter = function (n) {
          return arguments.length
            ? ((x = "function" == typeof n ? n : Object(l.a)(!!n)), t)
            : x;
        }),
        (t.container = function (n) {
          return arguments.length
            ? ((w = "function" == typeof n ? n : Object(l.a)(n)), t)
            : w;
        }),
        (t.subject = function (n) {
          return arguments.length
            ? ((j = "function" == typeof n ? n : Object(l.a)(n)), t)
            : j;
        }),
        (t.touchable = function (n) {
          return arguments.length
            ? ((T = "function" == typeof n ? n : Object(l.a)(!!n)), t)
            : T;
        }),
        (t.on = function () {
          var n = C.on.apply(C, arguments);
          return n === C ? t : n;
        }),
        (t.clickDistance = function (n) {
          return arguments.length ? ((S = (n = +n) * n), t) : Math.sqrt(S);
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(61),
      i = e(149);
    n.a = function (t) {
      return Object(i.a)(Object(r.a)(t).call(document.documentElement));
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10),
      i = e(86);
    n.a = function (t) {
      "function" != typeof t && (t = Object(i.a)(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), u = 0;
        u < e;
        ++u
      )
        for (
          var a, c, s = n[u], f = s.length, l = (o[u] = new Array(f)), h = 0;
          h < f;
          ++h
        )
          (a = s[h]) &&
            (c = t.call(a, a.__data__, h, s)) &&
            ("__data__" in a && (c.__data__ = a.__data__), (l[h] = c));
      return new r.a(o, this._parents);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10),
      i = e(150);
    n.a = function (t) {
      "function" != typeof t && (t = Object(i.a)(t));
      for (
        var n = this._groups, e = n.length, o = [], u = [], a = 0;
        a < e;
        ++a
      )
        for (var c, s = n[a], f = s.length, l = 0; l < f; ++l)
          (c = s[l]) && (o.push(t.call(c, c.__data__, l, s)), u.push(c));
      return new r.a(o, u);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10),
      i = e(151);
    n.a = function (t) {
      "function" != typeof t && (t = Object(i.a)(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), u = 0;
        u < e;
        ++u
      )
        for (var a, c = n[u], s = c.length, f = (o[u] = []), l = 0; l < s; ++l)
          (a = c[l]) && t.call(a, a.__data__, l, c) && f.push(a);
      return new r.a(o, this._parents);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r, i, o) {
      for (var a, c = 0, s = n.length, f = o.length; c < f; ++c)
        (a = n[c])
          ? ((a.__data__ = o[c]), (r[c] = a))
          : (e[c] = new u.a(t, o[c]));
      for (; c < s; ++c) (a = n[c]) && (i[c] = a);
    }
    function i(t, n, e, r, i, o, a) {
      var s,
        f,
        l,
        h = {},
        d = n.length,
        p = o.length,
        v = new Array(d);
      for (s = 0; s < d; ++s)
        (f = n[s]) &&
          ((v[s] = l = c + a.call(f, f.__data__, s, n)),
          l in h ? (i[s] = f) : (h[l] = f));
      for (s = 0; s < p; ++s)
        (l = c + a.call(t, o[s], s, o)),
          (f = h[l])
            ? ((r[s] = f), (f.__data__ = o[s]), (h[l] = null))
            : (e[s] = new u.a(t, o[s]));
      for (s = 0; s < d; ++s) (f = n[s]) && h[v[s]] === f && (i[s] = f);
    }
    var o = e(10),
      u = e(152),
      a = e(270),
      c = "$";
    n.a = function (t, n) {
      if (!t)
        return (
          (b = new Array(this.size())),
          (d = -1),
          this.each(function (t) {
            b[++d] = t;
          }),
          b
        );
      var e = n ? i : r,
        u = this._parents,
        c = this._groups;
      "function" != typeof t && (t = Object(a.a)(t));
      for (
        var s = c.length,
          f = new Array(s),
          l = new Array(s),
          h = new Array(s),
          d = 0;
        d < s;
        ++d
      ) {
        var p = u[d],
          v = c[d],
          g = v.length,
          b = t.call(p, p && p.__data__, d, u),
          m = b.length,
          y = (l[d] = new Array(m)),
          _ = (f[d] = new Array(m));
        e(p, v, y, _, (h[d] = new Array(g)), b, n);
        for (var O, x, w = 0, j = 0; w < m; ++w)
          if ((O = y[w])) {
            for (w >= j && (j = w + 1); !(x = _[j]) && ++j < m; );
            O._next = x || null;
          }
      }
      return (f = new o.a(f, u)), (f._enter = l), (f._exit = h), f;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(153),
      i = e(10);
    n.a = function () {
      return new i.a(this._exit || this._groups.map(r.a), this._parents);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10);
    n.a = function (t) {
      for (
        var n = this._groups,
          e = t._groups,
          i = n.length,
          o = e.length,
          u = Math.min(i, o),
          a = new Array(i),
          c = 0;
        c < u;
        ++c
      )
        for (
          var s,
            f = n[c],
            l = e[c],
            h = f.length,
            d = (a[c] = new Array(h)),
            p = 0;
          p < h;
          ++p
        )
          (s = f[p] || l[p]) && (d[p] = s);
      for (; c < i; ++c) a[c] = n[c];
      return new r.a(a, this._parents);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
          (r = i[o]) &&
            (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u),
            (u = r));
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }
    var i = e(10);
    n.a = function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }
      t || (t = r);
      for (
        var e = this._groups, o = e.length, u = new Array(o), a = 0;
        a < o;
        ++a
      ) {
        for (
          var c, s = e[a], f = s.length, l = (u[a] = new Array(f)), h = 0;
          h < f;
          ++h
        )
          (c = s[h]) && (l[h] = c);
        l.sort(n);
      }
      return new i.a(u, this._parents).order();
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = new Array(this.size()),
        n = -1;
      return (
        this.each(function () {
          t[++n] = this;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];
          if (u) return u;
        }
      return null;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = 0;
      return (
        this.each(function () {
          ++t;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      return !this.node();
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
          (i = o[u]) && t.call(i, i.__data__, u, o);
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function i(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function o(t, n) {
      return function () {
        this.setAttribute(t, n);
      };
    }
    function u(t, n) {
      return function () {
        this.setAttributeNS(t.space, t.local, n);
      };
    }
    function a(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
      };
    }
    function c(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e
          ? this.removeAttributeNS(t.space, t.local)
          : this.setAttributeNS(t.space, t.local, e);
      };
    }
    var s = e(84);
    n.a = function (t, n) {
      var e = Object(s.a)(t);
      if (arguments.length < 2) {
        var f = this.node();
        return e.local ? f.getAttributeNS(e.space, e.local) : f.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? i
            : r
          : "function" == typeof n
          ? e.local
            ? c
            : a
          : e.local
          ? u
          : o)(e, n)
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        delete this[t];
      };
    }
    function i(t, n) {
      return function () {
        this[t] = n;
      };
    }
    function o(t, n) {
      return function () {
        var e = n.apply(this, arguments);
        null == e ? delete this[t] : (this[t] = e);
      };
    }
    n.a = function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? r : "function" == typeof n ? o : i)(t, n))
        : this.node()[t];
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.trim().split(/^|\s+/);
    }
    function i(t) {
      return t.classList || new o(t);
    }
    function o(t) {
      (this._node = t), (this._names = r(t.getAttribute("class") || ""));
    }
    function u(t, n) {
      for (var e = i(t), r = -1, o = n.length; ++r < o; ) e.add(n[r]);
    }
    function a(t, n) {
      for (var e = i(t), r = -1, o = n.length; ++r < o; ) e.remove(n[r]);
    }
    function c(t) {
      return function () {
        u(this, t);
      };
    }
    function s(t) {
      return function () {
        a(this, t);
      };
    }
    function f(t, n) {
      return function () {
        (n.apply(this, arguments) ? u : a)(this, t);
      };
    }
    (o.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    }),
      (n.a = function (t, n) {
        var e = r(t + "");
        if (arguments.length < 2) {
          for (var o = i(this.node()), u = -1, a = e.length; ++u < a; )
            if (!o.contains(e[u])) return !1;
          return !0;
        }
        return this.each(("function" == typeof n ? f : n ? c : s)(e, n));
      });
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this.textContent = "";
    }
    function i(t) {
      return function () {
        this.textContent = t;
      };
    }
    function o(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.textContent = null == n ? "" : n;
      };
    }
    n.a = function (t) {
      return arguments.length
        ? this.each(null == t ? r : ("function" == typeof t ? o : i)(t))
        : this.node().textContent;
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this.innerHTML = "";
    }
    function i(t) {
      return function () {
        this.innerHTML = t;
      };
    }
    function o(t) {
      return function () {
        var n = t.apply(this, arguments);
        this.innerHTML = null == n ? "" : n;
      };
    }
    n.a = function (t) {
      return arguments.length
        ? this.each(null == t ? r : ("function" == typeof t ? o : i)(t))
        : this.node().innerHTML;
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this.nextSibling && this.parentNode.appendChild(this);
    }
    n.a = function () {
      return this.each(r);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this.previousSibling &&
        this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    n.a = function () {
      return this.each(r);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(61);
    n.a = function (t) {
      var n = "function" == typeof t ? t : Object(r.a)(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return null;
    }
    var i = e(61),
      o = e(86);
    n.a = function (t, n) {
      var e = "function" == typeof t ? t : Object(i.a)(t),
        u = null == n ? r : "function" == typeof n ? n : Object(o.a)(n);
      return this.select(function () {
        return this.insertBefore(
          e.apply(this, arguments),
          u.apply(this, arguments) || null
        );
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }
    n.a = function () {
      return this.each(r);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }
    function i() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }
    n.a = function (t) {
      return this.select(t ? i : r);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return arguments.length
        ? this.property("__data__", t)
        : this.node().__data__;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = Object(u.a)(t),
        i = r.CustomEvent;
      "function" == typeof i
        ? (i = new i(n, e))
        : ((i = r.document.createEvent("Event")),
          e
            ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
            : i.initEvent(n, !1, !1)),
        t.dispatchEvent(i);
    }
    function i(t, n) {
      return function () {
        return r(this, t, n);
      };
    }
    function o(t, n) {
      return function () {
        return r(this, t, n.apply(this, arguments));
      };
    }
    var u = e(87);
    n.a = function (t, n) {
      return this.each(("function" == typeof n ? o : i)(t, n));
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return new i();
    }
    function i() {
      this._ = "@" + (++o).toString(36);
    }
    n.a = r;
    var o = 0;
    i.prototype = r.prototype = {
      constructor: i,
      get: function (t) {
        for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
        return t[n];
      },
      set: function (t, n) {
        return (t[this._] = n);
      },
      remove: function (t) {
        return this._ in t && delete t[this._];
      },
      toString: function () {
        return this._;
      },
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(89),
      i = e(62);
    n.a = function (t) {
      var n = Object(r.a)();
      return n.changedTouches && (n = n.changedTouches[0]), Object(i.a)(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(10);
    n.a = function (t) {
      return "string" == typeof t
        ? new r.a([document.querySelectorAll(t)], [document.documentElement])
        : new r.a([null == t ? [] : t], r.c);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(89),
      i = e(62);
    n.a = function (t, n, e) {
      arguments.length < 3 && ((e = n), (n = Object(r.a)().changedTouches));
      for (var o, u = 0, a = n ? n.length : 0; u < a; ++u)
        if ((o = n[u]).identifier === e) return Object(i.a)(t, o);
      return null;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(89),
      i = e(62);
    n.a = function (t, n) {
      null == n && (n = Object(r.a)().touches);
      for (var e = 0, o = n ? n.length : 0, u = new Array(o); e < o; ++e)
        u[e] = Object(i.a)(t, n[e]);
      return u;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r, i, o, u, a, c, s) {
      (this.target = t),
        (this.type = n),
        (this.subject = e),
        (this.identifier = r),
        (this.active = i),
        (this.x = o),
        (this.y = u),
        (this.dx = a),
        (this.dy = c),
        (this._ = s);
    }
    (n.a = r),
      (r.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      if (t instanceof o) return new o(t.l, t.a, t.b, t.opacity);
      if (t instanceof h) {
        var n = t.h * v.a;
        return new o(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }
      t instanceof p.b || (t = Object(p.h)(t));
      var e = s(t.r),
        r = s(t.g),
        i = s(t.b),
        a = u((0.4124564 * e + 0.3575761 * r + 0.1804375 * i) / g),
        c = u((0.2126729 * e + 0.7151522 * r + 0.072175 * i) / b);
      return new o(
        116 * c - 16,
        500 * (a - c),
        200 * (c - u((0.0193339 * e + 0.119192 * r + 0.9503041 * i) / m)),
        t.opacity
      );
    }
    function i(t, n, e, i) {
      return 1 === arguments.length ? r(t) : new o(t, n, e, null == i ? 1 : i);
    }
    function o(t, n, e, r) {
      (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
    }
    function u(t) {
      return t > x ? Math.pow(t, 1 / 3) : t / O + y;
    }
    function a(t) {
      return t > _ ? t * t * t : O * (t - y);
    }
    function c(t) {
      return (
        255 *
        (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
      );
    }
    function s(t) {
      return (t /= 255) <= 0.04045
        ? t / 12.92
        : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    function f(t) {
      if (t instanceof h) return new h(t.h, t.c, t.l, t.opacity);
      t instanceof o || (t = r(t));
      var n = Math.atan2(t.b, t.a) * v.b;
      return new h(
        n < 0 ? n + 360 : n,
        Math.sqrt(t.a * t.a + t.b * t.b),
        t.l,
        t.opacity
      );
    }
    function l(t, n, e, r) {
      return 1 === arguments.length ? f(t) : new h(t, n, e, null == r ? 1 : r);
    }
    function h(t, n, e, r) {
      (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
    }
    (n.a = i), (n.b = l);
    var d = e(92),
      p = e(91),
      v = e(157),
      g = 0.95047,
      b = 1,
      m = 1.08883,
      y = 4 / 29,
      _ = 6 / 29,
      O = 3 * _ * _,
      x = _ * _ * _;
    Object(d.a)(
      o,
      i,
      Object(d.b)(p.a, {
        brighter: function (t) {
          return new o(
            this.l + 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        darker: function (t) {
          return new o(
            this.l - 18 * (null == t ? 1 : t),
            this.a,
            this.b,
            this.opacity
          );
        },
        rgb: function () {
          var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
          return (
            (t = b * a(t)),
            (n = g * a(n)),
            (e = m * a(e)),
            new p.b(
              c(3.2404542 * n - 1.5371385 * t - 0.4985314 * e),
              c(-0.969266 * n + 1.8760108 * t + 0.041556 * e),
              c(0.0556434 * n - 0.2040259 * t + 1.0572252 * e),
              this.opacity
            )
          );
        },
      })
    ),
      Object(d.a)(
        h,
        l,
        Object(d.b)(p.a, {
          brighter: function (t) {
            return new h(
              this.h,
              this.c,
              this.l + 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          darker: function (t) {
            return new h(
              this.h,
              this.c,
              this.l - 18 * (null == t ? 1 : t),
              this.opacity
            );
          },
          rgb: function () {
            return r(this).rgb();
          },
        })
      );
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      if (t instanceof o) return new o(t.h, t.s, t.l, t.opacity);
      t instanceof a.b || (t = Object(a.h)(t));
      var n = t.r / 255,
        e = t.g / 255,
        r = t.b / 255,
        i = (g * r + p * n - v * e) / (g + p - v),
        u = r - i,
        s = (d * (e - i) - l * u) / h,
        f = Math.sqrt(s * s + u * u) / (d * i * (1 - i)),
        b = f ? Math.atan2(s, u) * c.b - 120 : NaN;
      return new o(b < 0 ? b + 360 : b, f, i, t.opacity);
    }
    function i(t, n, e, i) {
      return 1 === arguments.length ? r(t) : new o(t, n, e, null == i ? 1 : i);
    }
    function o(t, n, e, r) {
      (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
    }
    n.a = i;
    var u = e(92),
      a = e(91),
      c = e(157),
      s = -0.14861,
      f = 1.78277,
      l = -0.29227,
      h = -0.90649,
      d = 1.97294,
      p = d * h,
      v = d * f,
      g = f * l - h * s;
    Object(u.a)(
      o,
      i,
      Object(u.b)(a.a, {
        brighter: function (t) {
          return (
            (t = null == t ? a.c : Math.pow(a.c, t)),
            new o(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? a.d : Math.pow(a.d, t)),
            new o(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = isNaN(this.h) ? 0 : (this.h + 120) * c.a,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            i = Math.sin(t);
          return new a.b(
            255 * (n + e * (s * r + f * i)),
            255 * (n + e * (l * r + h * i)),
            255 * (n + e * (d * r)),
            this.opacity
          );
        },
      })
    );
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return (
        (t = +t),
        (n -= t),
        function (e) {
          return Math.round(t + n * e);
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      function o(t) {
        return t.length ? t.pop() + " " : "";
      }
      function u(t, r, o, u, a, c) {
        if (t !== o || r !== u) {
          var s = a.push("translate(", null, n, null, e);
          c.push(
            { i: s - 4, x: Object(i.a)(t, o) },
            { i: s - 2, x: Object(i.a)(r, u) }
          );
        } else (o || u) && a.push("translate(" + o + n + u + e);
      }
      function a(t, n, e, u) {
        t !== n
          ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
            u.push({
              i: e.push(o(e) + "rotate(", null, r) - 2,
              x: Object(i.a)(t, n),
            }))
          : n && e.push(o(e) + "rotate(" + n + r);
      }
      function c(t, n, e, u) {
        t !== n
          ? u.push({
              i: e.push(o(e) + "skewX(", null, r) - 2,
              x: Object(i.a)(t, n),
            })
          : n && e.push(o(e) + "skewX(" + n + r);
      }
      function s(t, n, e, r, u, a) {
        if (t !== e || n !== r) {
          var c = u.push(o(u) + "scale(", null, ",", null, ")");
          a.push(
            { i: c - 4, x: Object(i.a)(t, e) },
            { i: c - 2, x: Object(i.a)(n, r) }
          );
        } else
          (1 === e && 1 === r) || u.push(o(u) + "scale(" + e + "," + r + ")");
      }
      return function (n, e) {
        var r = [],
          i = [];
        return (
          (n = t(n)),
          (e = t(e)),
          u(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
          a(n.rotate, e.rotate, r, i),
          c(n.skewX, e.skewX, r, i),
          s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
          (n = e = null),
          function (t) {
            for (var n, e = -1, o = i.length; ++e < o; )
              r[(n = i[e]).i] = n.x(t);
            return r.join("");
          }
        );
      };
    }
    e.d(n, "a", function () {
      return u;
    }),
      e.d(n, "b", function () {
        return a;
      });
    var i = e(63),
      o = e(305),
      u = r(o.a, "px, ", "px)", "deg)"),
      a = r(o.b, ", ", ")", ")");
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return "none" === t
        ? s.b
        : (o ||
            ((o = document.createElement("DIV")),
            (u = document.documentElement),
            (a = document.defaultView)),
          (o.style.transform = t),
          (t = a
            .getComputedStyle(u.appendChild(o), null)
            .getPropertyValue("transform")),
          u.removeChild(o),
          (t = t.slice(7, -1).split(",")),
          Object(s.a)(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
    }
    function i(t) {
      return null == t
        ? s.b
        : (c ||
            (c = document.createElementNS("http://www.w3.org/2000/svg", "g")),
          c.setAttribute("transform", t),
          (t = c.transform.baseVal.consolidate())
            ? ((t = t.matrix), Object(s.a)(t.a, t.b, t.c, t.d, t.e, t.f))
            : s.b);
    }
    (n.a = r), (n.b = i);
    var o,
      u,
      a,
      c,
      s = e(306);
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return i;
    });
    var r = 180 / Math.PI,
      i = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1,
      };
    n.a = function (t, n, e, i, o, u) {
      var a, c, s;
      return (
        (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
        (s = t * e + n * i) && ((e -= t * s), (i -= n * s)),
        (c = Math.sqrt(e * e + i * i)) && ((e /= c), (i /= c), (s /= c)),
        t * i < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
        {
          translateX: o,
          translateY: u,
          rotate: Math.atan2(n, t) * r,
          skewX: Math.atan(s) * r,
          scaleX: a,
          scaleY: c,
        }
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return ((t = Math.exp(t)) + 1 / t) / 2;
    }
    function i(t) {
      return ((t = Math.exp(t)) - 1 / t) / 2;
    }
    function o(t) {
      return ((t = Math.exp(2 * t)) - 1) / (t + 1);
    }
    var u = Math.SQRT2;
    n.a = function (t, n) {
      var e,
        a,
        c = t[0],
        s = t[1],
        f = t[2],
        l = n[0],
        h = n[1],
        d = n[2],
        p = l - c,
        v = h - s,
        g = p * p + v * v;
      if (g < 1e-12)
        (a = Math.log(d / f) / u),
          (e = function (t) {
            return [c + t * p, s + t * v, f * Math.exp(u * t * a)];
          });
      else {
        var b = Math.sqrt(g),
          m = (d * d - f * f + 4 * g) / (2 * f * 2 * b),
          y = (d * d - f * f - 4 * g) / (2 * d * 2 * b),
          _ = Math.log(Math.sqrt(m * m + 1) - m),
          O = Math.log(Math.sqrt(y * y + 1) - y);
        (a = (O - _) / u),
          (e = function (t) {
            var n = t * a,
              e = r(_),
              l = (f / (2 * b)) * (e * o(u * n + _) - i(_));
            return [c + l * p, s + l * v, (f * e) / r(u * n + _)];
          });
      }
      return (e.duration = 1e3 * a), e;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        var r = t((n = Object(i.d)(n)).h, (e = Object(i.d)(e)).h),
          u = Object(o.a)(n.s, e.s),
          a = Object(o.a)(n.l, e.l),
          c = Object(o.a)(n.opacity, e.opacity);
        return function (t) {
          return (
            (n.h = r(t)), (n.s = u(t)), (n.l = a(t)), (n.opacity = c(t)), n + ""
          );
        };
      };
    }
    e.d(n, "b", function () {
      return u;
    });
    var i = e(13),
      o = e(41);
    n.a = r(o.c);
    var u = r(o.a);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = Object(o.a)((t = Object(i.e)(t)).l, (n = Object(i.e)(n)).l),
        r = Object(o.a)(t.a, n.a),
        u = Object(o.a)(t.b, n.b),
        a = Object(o.a)(t.opacity, n.opacity);
      return function (n) {
        return (
          (t.l = e(n)), (t.a = r(n)), (t.b = u(n)), (t.opacity = a(n)), t + ""
        );
      };
    }
    n.a = r;
    var i = e(13),
      o = e(41);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        var r = t((n = Object(i.c)(n)).h, (e = Object(i.c)(e)).h),
          u = Object(o.a)(n.c, e.c),
          a = Object(o.a)(n.l, e.l),
          c = Object(o.a)(n.opacity, e.opacity);
        return function (t) {
          return (
            (n.h = r(t)), (n.c = u(t)), (n.l = a(t)), (n.opacity = c(t)), n + ""
          );
        };
      };
    }
    e.d(n, "b", function () {
      return u;
    });
    var i = e(13),
      o = e(41);
    n.a = r(o.c);
    var u = r(o.a);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return (function n(e) {
        function r(n, r) {
          var u = t((n = Object(i.b)(n)).h, (r = Object(i.b)(r)).h),
            a = Object(o.a)(n.s, r.s),
            c = Object(o.a)(n.l, r.l),
            s = Object(o.a)(n.opacity, r.opacity);
          return function (t) {
            return (
              (n.h = u(t)),
              (n.s = a(t)),
              (n.l = c(Math.pow(t, e))),
              (n.opacity = s(t)),
              n + ""
            );
          };
        }
        return (e = +e), (r.gamma = n), r;
      })(1);
    }
    e.d(n, "a", function () {
      return u;
    });
    var i = e(13),
      o = e(41);
    n.b = r(o.c);
    var u = r(o.a);
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
      return e;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(3),
      i = e(314),
      o = e(317);
    (r.m.prototype.interrupt = i.a), (r.m.prototype.transition = o.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(165);
    n.a = function (t) {
      return this.each(function () {
        Object(r.a)(this, t);
      });
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(95);
    n.a = function (t, n, e) {
      var i = new r.a();
      return (
        (n = null == n ? 0 : +n),
        i.restart(
          function (e) {
            i.stop(), t(e + n);
          },
          n,
          e
        ),
        i
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(95);
    n.a = function (t, n, e) {
      var i = new r.a(),
        o = n;
      return null == n
        ? (i.restart(t, n, e), i)
        : ((n = +n),
          (e = null == e ? Object(r.b)() : +e),
          i.restart(
            function r(u) {
              (u += o), i.restart(r, (o += n), e), t(u);
            },
            n,
            e
          ),
          i);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]); )
        if (!(t = t.parentNode)) return (c.time = Object(a.b)()), c;
      return e;
    }
    var i = e(20),
      o = e(12),
      u = e(167),
      a = e(64),
      c = { time: null, delay: 0, duration: 250, ease: u.o };
    n.a = function (t) {
      var n, e;
      t instanceof i.a
        ? ((n = t._id), (t = t._name))
        : ((n = Object(i.c)()),
          ((e = c).time = Object(a.b)()),
          (t = null == t ? null : t + ""));
      for (var u = this._groups, s = u.length, f = 0; f < s; ++f)
        for (var l, h = u[f], d = h.length, p = 0; p < d; ++p)
          (l = h[p]) && Object(o.e)(l, t, n, p, h, e || r(l, n));
      return new i.a(u, this._parents, t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        this.removeAttribute(t);
      };
    }
    function i(t) {
      return function () {
        this.removeAttributeNS(t.space, t.local);
      };
    }
    function o(t, n, e) {
      var r, i;
      return function () {
        var o = this.getAttribute(t);
        return o === e ? null : o === r ? i : (i = n((r = o), e));
      };
    }
    function u(t, n, e) {
      var r, i;
      return function () {
        var o = this.getAttributeNS(t.space, t.local);
        return o === e ? null : o === r ? i : (i = n((r = o), e));
      };
    }
    function a(t, n, e) {
      var r, i, o;
      return function () {
        var u,
          a = e(this);
        return null == a
          ? void this.removeAttribute(t)
          : ((u = this.getAttribute(t)),
            u === a
              ? null
              : u === r && a === i
              ? o
              : (o = n((r = u), (i = a))));
      };
    }
    function c(t, n, e) {
      var r, i, o;
      return function () {
        var u,
          a = e(this);
        return null == a
          ? void this.removeAttributeNS(t.space, t.local)
          : ((u = this.getAttributeNS(t.space, t.local)),
            u === a
              ? null
              : u === r && a === i
              ? o
              : (o = n((r = u), (i = a))));
      };
    }
    var s = e(11),
      f = e(3),
      l = e(65),
      h = e(166);
    n.a = function (t, n) {
      var e = Object(f.i)(t),
        d = "transform" === e ? s.u : h.a;
      return this.attrTween(
        t,
        "function" == typeof n
          ? (e.local ? c : a)(e, d, Object(l.b)(this, "attr." + t, n))
          : null == n
          ? (e.local ? i : r)(e)
          : (e.local ? u : o)(e, d, n + "")
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      function e() {
        var e = this,
          r = n.apply(e, arguments);
        return (
          r &&
          function (n) {
            e.setAttributeNS(t.space, t.local, r(n));
          }
        );
      }
      return (e._value = n), e;
    }
    function i(t, n) {
      function e() {
        var e = this,
          r = n.apply(e, arguments);
        return (
          r &&
          function (n) {
            e.setAttribute(t, r(n));
          }
        );
      }
      return (e._value = n), e;
    }
    var o = e(3);
    n.a = function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var u = Object(o.i)(t);
      return this.tween(e, (u.local ? r : i)(u, n));
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return function () {
        Object(o.g)(this, t).delay = +n.apply(this, arguments);
      };
    }
    function i(t, n) {
      return (
        (n = +n),
        function () {
          Object(o.g)(this, t).delay = n;
        }
      );
    }
    var o = e(12);
    n.a = function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? r : i)(n, t))
        : Object(o.f)(this.node(), n).delay;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return function () {
        Object(o.h)(this, t).duration = +n.apply(this, arguments);
      };
    }
    function i(t, n) {
      return (
        (n = +n),
        function () {
          Object(o.h)(this, t).duration = n;
        }
      );
    }
    var o = e(12);
    n.a = function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? r : i)(n, t))
        : Object(o.f)(this.node(), n).duration;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      if ("function" != typeof n) throw new Error();
      return function () {
        Object(i.h)(this, t).ease = n;
      };
    }
    var i = e(12);
    n.a = function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(r(n, t))
        : Object(i.f)(this.node(), n).ease;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(3),
      i = e(20);
    n.a = function (t) {
      "function" != typeof t && (t = Object(r.g)(t));
      for (
        var n = this._groups, e = n.length, o = new Array(e), u = 0;
        u < e;
        ++u
      )
        for (var a, c = n[u], s = c.length, f = (o[u] = []), l = 0; l < s; ++l)
          (a = c[l]) && t.call(a, a.__data__, l, c) && f.push(a);
      return new i.a(o, this._parents, this._name, this._id);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(20);
    n.a = function (t) {
      if (t._id !== this._id) throw new Error();
      for (
        var n = this._groups,
          e = t._groups,
          i = n.length,
          o = e.length,
          u = Math.min(i, o),
          a = new Array(i),
          c = 0;
        c < u;
        ++c
      )
        for (
          var s,
            f = n[c],
            l = e[c],
            h = f.length,
            d = (a[c] = new Array(h)),
            p = 0;
          p < h;
          ++p
        )
          (s = f[p] || l[p]) && (d[p] = s);
      for (; c < i; ++c) a[c] = n[c];
      return new r.a(a, this._parents, this._name, this._id);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return (t + "")
        .trim()
        .split(/^|\s+/)
        .every(function (t) {
          var n = t.indexOf(".");
          return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
        });
    }
    function i(t, n, e) {
      var i,
        u,
        a = r(n) ? o.g : o.h;
      return function () {
        var r = a(this, t),
          o = r.on;
        o !== i && (u = (i = o).copy()).on(n, e), (r.on = u);
      };
    }
    var o = e(12);
    n.a = function (t, n) {
      var e = this._id;
      return arguments.length < 2
        ? Object(o.f)(this.node(), e).on.on(t)
        : this.each(i(e, t, n));
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        var n = this.parentNode;
        for (var e in this.__transition) if (+e !== t) return;
        n && n.removeChild(this);
      };
    }
    n.a = function () {
      return this.on("end.remove", r(this._id));
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(3),
      i = e(20),
      o = e(12);
    n.a = function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = Object(r.n)(t));
      for (
        var u = this._groups, a = u.length, c = new Array(a), s = 0;
        s < a;
        ++s
      )
        for (
          var f, l, h = u[s], d = h.length, p = (c[s] = new Array(d)), v = 0;
          v < d;
          ++v
        )
          (f = h[v]) &&
            (l = t.call(f, f.__data__, v, h)) &&
            ("__data__" in f && (l.__data__ = f.__data__),
            (p[v] = l),
            Object(o.e)(p[v], n, e, v, p, Object(o.f)(f, e)));
      return new i.a(c, this._parents, n, e);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(3),
      i = e(20),
      o = e(12);
    n.a = function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = Object(r.o)(t));
      for (
        var u = this._groups, a = u.length, c = [], s = [], f = 0;
        f < a;
        ++f
      )
        for (var l, h = u[f], d = h.length, p = 0; p < d; ++p)
          if ((l = h[p])) {
            for (
              var v,
                g = t.call(l, l.__data__, p, h),
                b = Object(o.f)(l, e),
                m = 0,
                y = g.length;
              m < y;
              ++m
            )
              (v = g[m]) && Object(o.e)(v, n, e, m, g, b);
            c.push(g), s.push(l);
          }
      return new i.a(c, s, n, e);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(3),
      i = r.m.prototype.constructor;
    n.a = function () {
      return new i(this._groups, this._parents);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e, r, i;
      return function () {
        var o = Object(c.p)(this, t),
          u = (this.style.removeProperty(t), Object(c.p)(this, t));
        return o === u
          ? null
          : o === e && u === r
          ? i
          : (i = n((e = o), (r = u)));
      };
    }
    function i(t) {
      return function () {
        this.style.removeProperty(t);
      };
    }
    function o(t, n, e) {
      var r, i;
      return function () {
        var o = Object(c.p)(this, t);
        return o === e ? null : o === r ? i : (i = n((r = o), e));
      };
    }
    function u(t, n, e) {
      var r, i, o;
      return function () {
        var u = Object(c.p)(this, t),
          a = e(this);
        return (
          null == a &&
            (this.style.removeProperty(t), (a = Object(c.p)(this, t))),
          u === a ? null : u === r && a === i ? o : (o = n((r = u), (i = a)))
        );
      };
    }
    var a = e(11),
      c = e(3),
      s = e(65),
      f = e(166);
    n.a = function (t, n, e) {
      var c = "transform" == (t += "") ? a.t : f.a;
      return null == n
        ? this.styleTween(t, r(t, c)).on("end.style." + t, i(t))
        : this.styleTween(
            t,
            "function" == typeof n
              ? u(t, c, Object(s.b)(this, "style." + t, n))
              : o(t, c, n + ""),
            e
          );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      function r() {
        var r = this,
          i = n.apply(r, arguments);
        return (
          i &&
          function (n) {
            r.style.setProperty(t, i(n), e);
          }
        );
      }
      return (r._value = n), r;
    }
    n.a = function (t, n, e) {
      var i = "style." + (t += "");
      if (arguments.length < 2) return (i = this.tween(i)) && i._value;
      if (null == n) return this.tween(i, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(i, r(t, n, null == e ? "" : e));
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function () {
        this.textContent = t;
      };
    }
    function i(t) {
      return function () {
        var n = t(this);
        this.textContent = null == n ? "" : n;
      };
    }
    var o = e(65);
    n.a = function (t) {
      return this.tween(
        "text",
        "function" == typeof t
          ? i(Object(o.b)(this, "text", t))
          : r(null == t ? "" : t + "")
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(20),
      i = e(12);
    n.a = function () {
      for (
        var t = this._name,
          n = this._id,
          e = Object(r.c)(),
          o = this._groups,
          u = o.length,
          a = 0;
        a < u;
        ++a
      )
        for (var c, s = o[a], f = s.length, l = 0; l < f; ++l)
          if ((c = s[l])) {
            var h = Object(i.f)(c, n);
            Object(i.e)(c, t, e, l, s, {
              time: h.time + h.delay + h.duration,
              delay: 0,
              duration: h.duration,
              ease: h.ease,
            });
          }
      return new r.a(o, this._parents, t, e);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return +t;
    }
    n.a = r;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t * t;
    }
    function i(t) {
      return t * (2 - t);
    }
    function o(t) {
      return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
    }
    (n.a = r), (n.c = i), (n.b = o);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t * t * t;
    }
    function i(t) {
      return --t * t * t + 1;
    }
    function o(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    (n.a = r), (n.c = i), (n.b = o);
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    }),
      e.d(n, "c", function () {
        return i;
      }),
      e.d(n, "b", function () {
        return o;
      });
    var r = (function t(n) {
        function e(t) {
          return Math.pow(t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      i = (function t(n) {
        function e(t) {
          return 1 - Math.pow(1 - t, n);
        }
        return (n = +n), (e.exponent = t), e;
      })(3),
      o = (function t(n) {
        function e(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
        }
        return (n = +n), (e.exponent = t), e;
      })(3);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return 1 - Math.cos(t * a);
    }
    function i(t) {
      return Math.sin(t * a);
    }
    function o(t) {
      return (1 - Math.cos(u * t)) / 2;
    }
    (n.a = r), (n.c = i), (n.b = o);
    var u = Math.PI,
      a = u / 2;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Math.pow(2, 10 * t - 10);
    }
    function i(t) {
      return 1 - Math.pow(2, -10 * t);
    }
    function o(t) {
      return (
        ((t *= 2) <= 1
          ? Math.pow(2, 10 * t - 10)
          : 2 - Math.pow(2, 10 - 10 * t)) / 2
      );
    }
    (n.a = r), (n.c = i), (n.b = o);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return 1 - Math.sqrt(1 - t * t);
    }
    function i(t) {
      return Math.sqrt(1 - --t * t);
    }
    function o(t) {
      return (
        ((t *= 2) <= 1
          ? 1 - Math.sqrt(1 - t * t)
          : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
      );
    }
    (n.a = r), (n.c = i), (n.b = o);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return 1 - i(1 - t);
    }
    function i(t) {
      return (t = +t) < u
        ? v * t * t
        : t < c
        ? v * (t -= a) * t + s
        : t < l
        ? v * (t -= f) * t + h
        : v * (t -= d) * t + p;
    }
    function o(t) {
      return ((t *= 2) <= 1 ? 1 - i(1 - t) : i(t - 1) + 1) / 2;
    }
    (n.a = r), (n.c = i), (n.b = o);
    var u = 4 / 11,
      a = 6 / 11,
      c = 8 / 11,
      s = 0.75,
      f = 9 / 11,
      l = 10 / 11,
      h = 0.9375,
      d = 21 / 22,
      p = 63 / 64,
      v = 1 / u / u;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    }),
      e.d(n, "c", function () {
        return i;
      }),
      e.d(n, "b", function () {
        return o;
      });
    var r = (function t(n) {
        function e(t) {
          return t * t * ((n + 1) * t - n);
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      i = (function t(n) {
        function e(t) {
          return --t * t * ((n + 1) * t + n) + 1;
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158),
      o = (function t(n) {
        function e(t) {
          return (
            ((t *= 2) < 1
              ? t * t * ((n + 1) * t - n)
              : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
          );
        }
        return (n = +n), (e.overshoot = t), e;
      })(1.70158);
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return i;
    }),
      e.d(n, "c", function () {
        return o;
      }),
      e.d(n, "b", function () {
        return u;
      });
    var r = 2 * Math.PI,
      i = (function t(n, e) {
        function i(t) {
          return n * Math.pow(2, 10 * --t) * Math.sin((o - t) / e);
        }
        var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);
        return (
          (i.amplitude = function (n) {
            return t(n, e * r);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      o = (function t(n, e) {
        function i(t) {
          return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + o) / e);
        }
        var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);
        return (
          (i.amplitude = function (n) {
            return t(n, e * r);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3),
      u = (function t(n, e) {
        function i(t) {
          return (
            ((t = 2 * t - 1) < 0
              ? n * Math.pow(2, 10 * t) * Math.sin((o - t) / e)
              : 2 - n * Math.pow(2, -10 * t) * Math.sin((o + t) / e)) / 2
          );
        }
        var o = Math.asin(1 / (n = Math.max(1, n))) * (e /= r);
        return (
          (i.amplitude = function (n) {
            return t(n, e * r);
          }),
          (i.period = function (e) {
            return t(n, e);
          }),
          i
        );
      })(1, 0.3);
  },
  function (t, n, e) {
    "use strict";
    var r = e(20),
      i = e(12),
      o = [null];
    n.a = function (t, n) {
      var e,
        u,
        a = t.__transition;
      if (a) {
        n = null == n ? null : n + "";
        for (u in a)
          if ((e = a[u]).state > i.c && e.name === n)
            return new r.a([[t]], o, n, +u);
      }
      return null;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e) {
      (this.target = t), (this.type = n), (this.selection = e);
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      i.e.stopImmediatePropagation();
    }
    n.b = r;
    var i = e(3);
    n.a = function () {
      i.e.preventDefault(), i.e.stopImmediatePropagation();
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(349);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(350);
    e.d(n, "b", function () {
      return i.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return function (n, e) {
        return t(
          n.source.value + n.target.value,
          e.source.value + e.target.value
        );
      };
    }
    var i = e(8),
      o = e(168);
    n.a = function () {
      function t(t) {
        var r,
          c,
          s,
          f,
          l,
          h,
          d = t.length,
          p = [],
          v = Object(i.s)(d),
          g = [],
          b = [],
          m = (b.groups = new Array(d)),
          y = new Array(d * d);
        for (r = 0, l = -1; ++l < d; ) {
          for (c = 0, h = -1; ++h < d; ) c += t[l][h];
          p.push(c), g.push(Object(i.s)(d)), (r += c);
        }
        for (
          e &&
            v.sort(function (t, n) {
              return e(p[t], p[n]);
            }),
            u &&
              g.forEach(function (n, e) {
                n.sort(function (n, r) {
                  return u(t[e][n], t[e][r]);
                });
              }),
            r = Object(o.c)(0, o.e - n * d) / r,
            f = r ? n : o.e / d,
            c = 0,
            l = -1;
          ++l < d;

        ) {
          for (s = c, h = -1; ++h < d; ) {
            var _ = v[l],
              O = g[_][h],
              x = t[_][O],
              w = c,
              j = (c += x * r);
            y[O * d + _] = {
              index: _,
              subindex: O,
              startAngle: w,
              endAngle: j,
              value: x,
            };
          }
          (m[_] = { index: _, startAngle: s, endAngle: c, value: p[_] }),
            (c += f);
        }
        for (l = -1; ++l < d; )
          for (h = l - 1; ++h < d; ) {
            var T = y[h * d + l],
              E = y[l * d + h];
            (T.value || E.value) &&
              b.push(
                T.value < E.value
                  ? { source: E, target: T }
                  : { source: T, target: E }
              );
          }
        return a ? b.sort(a) : b;
      }
      var n = 0,
        e = null,
        u = null,
        a = null;
      return (
        (t.padAngle = function (e) {
          return arguments.length ? ((n = Object(o.c)(0, e)), t) : n;
        }),
        (t.sortGroups = function (n) {
          return arguments.length ? ((e = n), t) : e;
        }),
        (t.sortSubgroups = function (n) {
          return arguments.length ? ((u = n), t) : u;
        }),
        (t.sortChords = function (n) {
          return arguments.length
            ? (null == n ? (a = null) : ((a = r(n))._ = n), t)
            : a && a._;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.source;
    }
    function i(t) {
      return t.target;
    }
    function o(t) {
      return t.radius;
    }
    function u(t) {
      return t.startAngle;
    }
    function a(t) {
      return t.endAngle;
    }
    var c = e(351),
      s = e(352),
      f = e(168),
      l = e(23);
    n.a = function () {
      function t() {
        var t,
          r = c.a.call(arguments),
          i = n.apply(this, r),
          o = e.apply(this, r),
          u = +h.apply(this, ((r[0] = i), r)),
          a = d.apply(this, r) - f.b,
          s = p.apply(this, r) - f.b,
          g = u * Object(f.a)(a),
          b = u * Object(f.d)(a),
          m = +h.apply(this, ((r[0] = o), r)),
          y = d.apply(this, r) - f.b,
          _ = p.apply(this, r) - f.b;
        if (
          (v || (v = t = Object(l.a)()),
          v.moveTo(g, b),
          v.arc(0, 0, u, a, s),
          (a === y && s === _) ||
            (v.quadraticCurveTo(0, 0, m * Object(f.a)(y), m * Object(f.d)(y)),
            v.arc(0, 0, m, y, _)),
          v.quadraticCurveTo(0, 0, g, b),
          v.closePath(),
          t)
        )
          return (v = null), t + "" || null;
      }
      var n = r,
        e = i,
        h = o,
        d = u,
        p = a,
        v = null;
      return (
        (t.radius = function (n) {
          return arguments.length
            ? ((h = "function" == typeof n ? n : Object(s.a)(+n)), t)
            : h;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((d = "function" == typeof n ? n : Object(s.a)(+n)), t)
            : d;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((p = "function" == typeof n ? n : Object(s.a)(+n)), t)
            : p;
        }),
        (t.source = function (e) {
          return arguments.length ? ((n = e), t) : n;
        }),
        (t.target = function (n) {
          return arguments.length ? ((e = n), t) : e;
        }),
        (t.context = function (n) {
          return arguments.length ? ((v = null == n ? null : n), t) : v;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    });
    var r = Array.prototype.slice;
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function i() {
      return new r();
    }
    var o = Math.PI,
      u = 2 * o,
      a = u - 1e-6;
    (r.prototype = i.prototype = {
      constructor: r,
      moveTo: function (t, n) {
        this._ +=
          "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
      },
      closePath: function () {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
      },
      lineTo: function (t, n) {
        this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
      },
      quadraticCurveTo: function (t, n, e, r) {
        this._ +=
          "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
      },
      bezierCurveTo: function (t, n, e, r, i, o) {
        this._ +=
          "C" +
          +t +
          "," +
          +n +
          "," +
          +e +
          "," +
          +r +
          "," +
          (this._x1 = +i) +
          "," +
          (this._y1 = +o);
      },
      arcTo: function (t, n, e, r, i) {
        (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
        var u = this._x1,
          a = this._y1,
          c = e - t,
          s = r - n,
          f = u - t,
          l = a - n,
          h = f * f + l * l;
        if (i < 0) throw new Error("negative radius: " + i);
        if (null === this._x1)
          this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
        else if (h > 1e-6)
          if (Math.abs(l * c - s * f) > 1e-6 && i) {
            var d = e - u,
              p = r - a,
              v = c * c + s * s,
              g = d * d + p * p,
              b = Math.sqrt(v),
              m = Math.sqrt(h),
              y = i * Math.tan((o - Math.acos((v + h - g) / (2 * b * m))) / 2),
              _ = y / m,
              O = y / b;
            Math.abs(_ - 1) > 1e-6 &&
              (this._ += "L" + (t + _ * f) + "," + (n + _ * l)),
              (this._ +=
                "A" +
                i +
                "," +
                i +
                ",0,0," +
                +(l * d > f * p) +
                "," +
                (this._x1 = t + O * c) +
                "," +
                (this._y1 = n + O * s));
          } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
        else;
      },
      arc: function (t, n, e, r, i, c) {
        (t = +t), (n = +n), (e = +e);
        var s = e * Math.cos(r),
          f = e * Math.sin(r),
          l = t + s,
          h = n + f,
          d = 1 ^ c,
          p = c ? r - i : i - r;
        if (e < 0) throw new Error("negative radius: " + e);
        null === this._x1
          ? (this._ += "M" + l + "," + h)
          : (Math.abs(this._x1 - l) > 1e-6 || Math.abs(this._y1 - h) > 1e-6) &&
            (this._ += "L" + l + "," + h),
          e &&
            (p < 0 && (p = (p % u) + u),
            p > a
              ? (this._ +=
                  "A" +
                  e +
                  "," +
                  e +
                  ",0,1," +
                  d +
                  "," +
                  (t - s) +
                  "," +
                  (n - f) +
                  "A" +
                  e +
                  "," +
                  e +
                  ",0,1," +
                  d +
                  "," +
                  (this._x1 = l) +
                  "," +
                  (this._y1 = h))
              : p > 1e-6 &&
                (this._ +=
                  "A" +
                  e +
                  "," +
                  e +
                  ",0," +
                  +(p >= o) +
                  "," +
                  d +
                  "," +
                  (this._x1 = t + e * Math.cos(i)) +
                  "," +
                  (this._y1 = n + e * Math.sin(i))));
      },
      rect: function (t, n, e, r) {
        this._ +=
          "M" +
          (this._x0 = this._x1 = +t) +
          "," +
          (this._y0 = this._y1 = +n) +
          "h" +
          +e +
          "v" +
          +r +
          "h" +
          -e +
          "Z";
      },
      toString: function () {
        return this._;
      },
    }),
      (n.a = i);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return {};
    }
    function i(t, n, e) {
      t[n] = e;
    }
    function o() {
      return Object(a.a)();
    }
    function u(t, n, e) {
      t.set(n, e);
    }
    var a = e(96);
    n.a = function () {
      function t(n, r, i, o) {
        if (r >= f.length) return null != e && n.sort(e), null != c ? c(n) : n;
        for (
          var u,
            s,
            l,
            h = -1,
            d = n.length,
            p = f[r++],
            v = Object(a.a)(),
            g = i();
          ++h < d;

        )
          (l = v.get((u = p((s = n[h])) + ""))) ? l.push(s) : v.set(u, [s]);
        return (
          v.each(function (n, e) {
            o(g, e, t(n, r, i, o));
          }),
          g
        );
      }
      function n(t, e) {
        if (++e > f.length) return t;
        var r,
          i = l[e - 1];
        return (
          null != c && e >= f.length
            ? (r = t.entries())
            : ((r = []),
              t.each(function (t, i) {
                r.push({ key: i, values: n(t, e) });
              })),
          null != i
            ? r.sort(function (t, n) {
                return i(t.key, n.key);
              })
            : r
        );
      }
      var e,
        c,
        s,
        f = [],
        l = [];
      return (s = {
        object: function (n) {
          return t(n, 0, r, i);
        },
        map: function (n) {
          return t(n, 0, o, u);
        },
        entries: function (e) {
          return n(t(e, 0, o, u), 0);
        },
        key: function (t) {
          return f.push(t), s;
        },
        sortKeys: function (t) {
          return (l[f.length - 1] = t), s;
        },
        sortValues: function (t) {
          return (e = t), s;
        },
        rollup: function (t) {
          return (c = t), s;
        },
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {}
    function i(t, n) {
      var e = new r();
      if (t instanceof r)
        t.each(function (t) {
          e.add(t);
        });
      else if (t) {
        var i = -1,
          o = t.length;
        if (null == n) for (; ++i < o; ) e.add(t[i]);
        else for (; ++i < o; ) e.add(n(t[i], i, t));
      }
      return e;
    }
    var o = e(96),
      u = o.a.prototype;
    (r.prototype = i.prototype = {
      constructor: r,
      has: u.has,
      add: function (t) {
        return (t += ""), (this[o.b + t] = t), this;
      },
      remove: u.remove,
      clear: u.clear,
      values: u.keys,
      size: u.size,
      empty: u.empty,
      each: u.each,
    }),
      (n.a = i);
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      var n = [];
      for (var e in t) n.push(e);
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      var n = [];
      for (var e in t) n.push(t[e]);
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      var n = [];
      for (var e in t) n.push({ key: e, value: t[e] });
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "c", function () {
      return o;
    }),
      e.d(n, "d", function () {
        return u;
      }),
      e.d(n, "a", function () {
        return a;
      }),
      e.d(n, "b", function () {
        return c;
      });
    var r = e(98),
      i = Object(r.a)(","),
      o = i.parse,
      u = i.parseRows,
      a = i.format,
      c = i.formatRows;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "c", function () {
      return o;
    }),
      e.d(n, "d", function () {
        return u;
      }),
      e.d(n, "a", function () {
        return a;
      }),
      e.d(n, "b", function () {
        return c;
      });
    var r = e(98),
      i = Object(r.a)("\t"),
      o = i.parse,
      u = i.parseRows,
      a = i.format,
      c = i.formatRows;
  },
  function (t, n, e) {
    "use strict";
    var r = e(362);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(363);
    e.d(n, "b", function () {
      return i.a;
    });
    var o = e(377);
    e.d(n, "c", function () {
      return o.a;
    });
    var u = e(378);
    e.d(n, "d", function () {
      return u.a;
    });
    var a = e(379);
    e.d(n, "e", function () {
      return a.a;
    });
    var c = e(169);
    e.d(n, "f", function () {
      return c.a;
    });
    var s = e(380);
    e.d(n, "g", function () {
      return s.a;
    });
    var f = e(381);
    e.d(n, "h", function () {
      return f.a;
    });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      function e() {
        var e,
          i,
          o = r.length,
          u = 0,
          a = 0;
        for (e = 0; e < o; ++e) (i = r[e]), (u += i.x), (a += i.y);
        for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e)
          (i = r[e]), (i.x -= u), (i.y -= a);
      }
      var r;
      return (
        null == t && (t = 0),
        null == n && (n = 0),
        (e.initialize = function (t) {
          r = t;
        }),
        (e.x = function (n) {
          return arguments.length ? ((t = +n), e) : t;
        }),
        (e.y = function (t) {
          return arguments.length ? ((n = +t), e) : n;
        }),
        e
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.x + t.vx;
    }
    function i(t) {
      return t.y + t.vy;
    }
    var o = e(29),
      u = e(99),
      a = e(100);
    n.a = function (t) {
      function n() {
        function t(t, n, e, r, i) {
          var o = t.data,
            a = t.r,
            s = v + a;
          {
            if (!o) return n > d + s || r < d - s || e > p + s || i < p - s;
            if (o.index > c.index) {
              var f = d - o.x - o.vx,
                h = p - o.y - o.vy,
                b = f * f + h * h;
              b < s * s &&
                (0 === f && ((f = Object(u.a)()), (b += f * f)),
                0 === h && ((h = Object(u.a)()), (b += h * h)),
                (b = ((s - (b = Math.sqrt(b))) / b) * l),
                (c.vx += (f *= b) * (s = (a *= a) / (g + a))),
                (c.vy += (h *= b) * s),
                (o.vx -= f * (s = 1 - s)),
                (o.vy -= h * s));
            }
          }
        }
        for (var n, o, c, d, p, v, g, b = s.length, m = 0; m < h; ++m)
          for (o = Object(a.a)(s, r, i).visitAfter(e), n = 0; n < b; ++n)
            (c = s[n]),
              (v = f[c.index]),
              (g = v * v),
              (d = c.x + c.vx),
              (p = c.y + c.vy),
              o.visit(t);
      }
      function e(t) {
        if (t.data) return (t.r = f[t.data.index]);
        for (var n = (t.r = 0); n < 4; ++n)
          t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
      function c() {
        if (s) {
          var n,
            e,
            r = s.length;
          for (f = new Array(r), n = 0; n < r; ++n)
            (e = s[n]), (f[e.index] = +t(e, n, s));
        }
      }
      var s,
        f,
        l = 1,
        h = 1;
      return (
        "function" != typeof t && (t = Object(o.a)(null == t ? 1 : +t)),
        (n.initialize = function (t) {
          (s = t), c();
        }),
        (n.iterations = function (t) {
          return arguments.length ? ((h = +t), n) : h;
        }),
        (n.strength = function (t) {
          return arguments.length ? ((l = +t), n) : l;
        }),
        (n.radius = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : Object(o.a)(+e)), c(), n)
            : t;
        }),
        n
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = new i(
        null == n ? g.b : n,
        null == e ? b.b : e,
        NaN,
        NaN,
        NaN,
        NaN
      );
      return null == t ? r : r.addAll(t);
    }
    function i(t, n, e, r, i, o) {
      (this._x = t),
        (this._y = n),
        (this._x0 = e),
        (this._y0 = r),
        (this._x1 = i),
        (this._y1 = o),
        (this._root = void 0);
    }
    function o(t) {
      for (var n = { data: t.data }, e = n; (t = t.next); )
        e = e.next = { data: t.data };
      return n;
    }
    n.a = r;
    var u = e(365),
      a = e(366),
      c = e(367),
      s = e(368),
      f = e(369),
      l = e(370),
      h = e(371),
      d = e(372),
      p = e(373),
      v = e(374),
      g = e(375),
      b = e(376),
      m = (r.prototype = i.prototype);
    (m.copy = function () {
      var t,
        n,
        e = new i(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;
      if (!r) return e;
      if (!r.length) return (e._root = o(r)), e;
      for (
        t = [{ source: r, target: (e._root = new Array(4)) }];
        (r = t.pop());

      )
        for (var u = 0; u < 4; ++u)
          (n = r.source[u]) &&
            (n.length
              ? t.push({ source: n, target: (r.target[u] = new Array(4)) })
              : (r.target[u] = o(n)));
      return e;
    }),
      (m.add = u.b),
      (m.addAll = u.a),
      (m.cover = a.a),
      (m.data = c.a),
      (m.extent = s.a),
      (m.find = f.a),
      (m.remove = l.a),
      (m.removeAll = l.b),
      (m.root = h.a),
      (m.size = d.a),
      (m.visit = p.a),
      (m.visitAfter = v.a),
      (m.x = g.a),
      (m.y = b.a);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      if (isNaN(n) || isNaN(e)) return t;
      var i,
        o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        d = t._root,
        p = { data: r },
        v = t._x0,
        g = t._y0,
        b = t._x1,
        m = t._y1;
      if (!d) return (t._root = p), t;
      for (; d.length; )
        if (
          ((s = n >= (o = (v + b) / 2)) ? (v = o) : (b = o),
          (f = e >= (u = (g + m) / 2)) ? (g = u) : (m = u),
          (i = d),
          !(d = d[(l = (f << 1) | s)]))
        )
          return (i[l] = p), t;
      if (
        ((a = +t._x.call(null, d.data)),
        (c = +t._y.call(null, d.data)),
        n === a && e === c)
      )
        return (p.next = d), i ? (i[l] = p) : (t._root = p), t;
      do {
        (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
          (s = n >= (o = (v + b) / 2)) ? (v = o) : (b = o),
          (f = e >= (u = (g + m) / 2)) ? (g = u) : (m = u);
      } while ((l = (f << 1) | s) == (h = ((c >= u) << 1) | (a >= o)));
      return (i[h] = d), (i[l] = p), t;
    }
    function i(t) {
      var n,
        e,
        i,
        o,
        u = t.length,
        a = new Array(u),
        c = new Array(u),
        s = 1 / 0,
        f = 1 / 0,
        l = -1 / 0,
        h = -1 / 0;
      for (e = 0; e < u; ++e)
        isNaN((i = +this._x.call(null, (n = t[e])))) ||
          isNaN((o = +this._y.call(null, n))) ||
          ((a[e] = i),
          (c[e] = o),
          i < s && (s = i),
          i > l && (l = i),
          o < f && (f = o),
          o > h && (h = o));
      for (
        l < s && ((s = this._x0), (l = this._x1)),
          h < f && ((f = this._y0), (h = this._y1)),
          this.cover(s, f).cover(l, h),
          e = 0;
        e < u;
        ++e
      )
        r(this, a[e], c[e], t[e]);
      return this;
    }
    (n.a = i),
      (n.b = function (t) {
        var n = +this._x.call(null, t),
          e = +this._y.call(null, t);
        return r(this.cover(n, e), n, e, t);
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      if (isNaN((t = +t)) || isNaN((n = +n))) return this;
      var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;
      if (isNaN(e))
        (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
      else {
        if (!(e > t || t > i || r > n || n > o)) return this;
        var u,
          a,
          c = i - e,
          s = this._root;
        switch ((a = ((n < (r + o) / 2) << 1) | (t < (e + i) / 2))) {
          case 0:
            do {
              (u = new Array(4)), (u[a] = s), (s = u);
            } while (((c *= 2), (i = e + c), (o = r + c), t > i || n > o));
            break;
          case 1:
            do {
              (u = new Array(4)), (u[a] = s), (s = u);
            } while (((c *= 2), (e = i - c), (o = r + c), e > t || n > o));
            break;
          case 2:
            do {
              (u = new Array(4)), (u[a] = s), (s = u);
            } while (((c *= 2), (i = e + c), (r = o - c), t > i || r > n));
            break;
          case 3:
            do {
              (u = new Array(4)), (u[a] = s), (s = u);
            } while (((c *= 2), (e = i - c), (r = o - c), e > t || r > n));
        }
        this._root && this._root.length && (this._root = s);
      }
      return (
        (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = [];
      return (
        this.visit(function (n) {
          if (!n.length)
            do {
              t.push(n.data);
            } while ((n = n.next));
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return arguments.length
        ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
        : isNaN(this._x0)
        ? void 0
        : [
            [this._x0, this._y0],
            [this._x1, this._y1],
          ];
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(101);
    n.a = function (t, n, e) {
      var i,
        o,
        u,
        a,
        c,
        s,
        f,
        l = this._x0,
        h = this._y0,
        d = this._x1,
        p = this._y1,
        v = [],
        g = this._root;
      for (
        g && v.push(new r.a(g, l, h, d, p)),
          null == e
            ? (e = 1 / 0)
            : ((l = t - e), (h = n - e), (d = t + e), (p = n + e), (e *= e));
        (s = v.pop());

      )
        if (
          !(
            !(g = s.node) ||
            (o = s.x0) > d ||
            (u = s.y0) > p ||
            (a = s.x1) < l ||
            (c = s.y1) < h
          )
        )
          if (g.length) {
            var b = (o + a) / 2,
              m = (u + c) / 2;
            v.push(
              new r.a(g[3], b, m, a, c),
              new r.a(g[2], o, m, b, c),
              new r.a(g[1], b, u, a, m),
              new r.a(g[0], o, u, b, m)
            ),
              (f = ((n >= m) << 1) | (t >= b)) &&
                ((s = v[v.length - 1]),
                (v[v.length - 1] = v[v.length - 1 - f]),
                (v[v.length - 1 - f] = s));
          } else {
            var y = t - +this._x.call(null, g.data),
              _ = n - +this._y.call(null, g.data),
              O = y * y + _ * _;
            if (O < e) {
              var x = Math.sqrt((e = O));
              (l = t - x), (h = n - x), (d = t + x), (p = n + x), (i = g.data);
            }
          }
      return i;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
      return this;
    }
    (n.b = r),
      (n.a = function (t) {
        if (
          isNaN((o = +this._x.call(null, t))) ||
          isNaN((u = +this._y.call(null, t)))
        )
          return this;
        var n,
          e,
          r,
          i,
          o,
          u,
          a,
          c,
          s,
          f,
          l,
          h,
          d = this._root,
          p = this._x0,
          v = this._y0,
          g = this._x1,
          b = this._y1;
        if (!d) return this;
        if (d.length)
          for (;;) {
            if (
              ((s = o >= (a = (p + g) / 2)) ? (p = a) : (g = a),
              (f = u >= (c = (v + b) / 2)) ? (v = c) : (b = c),
              (n = d),
              !(d = d[(l = (f << 1) | s)]))
            )
              return this;
            if (!d.length) break;
            (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
              ((e = n), (h = l));
          }
        for (; d.data !== t; ) if (((r = d), !(d = d.next))) return this;
        return (
          (i = d.next) && delete d.next,
          r
            ? (i ? (r.next = i) : delete r.next, this)
            : n
            ? (i ? (n[l] = i) : delete n[l],
              (d = n[0] || n[1] || n[2] || n[3]) &&
                d === (n[3] || n[2] || n[1] || n[0]) &&
                !d.length &&
                (e ? (e[h] = d) : (this._root = d)),
              this)
            : ((this._root = i), this)
        );
      });
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      return this._root;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = 0;
      return (
        this.visit(function (n) {
          if (!n.length)
            do {
              ++t;
            } while ((n = n.next));
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(101);
    n.a = function (t) {
      var n,
        e,
        i,
        o,
        u,
        a,
        c = [],
        s = this._root;
      for (
        s && c.push(new r.a(s, this._x0, this._y0, this._x1, this._y1));
        (n = c.pop());

      )
        if (
          !t((s = n.node), (i = n.x0), (o = n.y0), (u = n.x1), (a = n.y1)) &&
          s.length
        ) {
          var f = (i + u) / 2,
            l = (o + a) / 2;
          (e = s[3]) && c.push(new r.a(e, f, l, u, a)),
            (e = s[2]) && c.push(new r.a(e, i, l, f, a)),
            (e = s[1]) && c.push(new r.a(e, f, o, u, l)),
            (e = s[0]) && c.push(new r.a(e, i, o, f, l));
        }
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(101);
    n.a = function (t) {
      var n,
        e = [],
        i = [];
      for (
        this._root &&
        e.push(new r.a(this._root, this._x0, this._y0, this._x1, this._y1));
        (n = e.pop());

      ) {
        var o = n.node;
        if (o.length) {
          var u,
            a = n.x0,
            c = n.y0,
            s = n.x1,
            f = n.y1,
            l = (a + s) / 2,
            h = (c + f) / 2;
          (u = o[0]) && e.push(new r.a(u, a, c, l, h)),
            (u = o[1]) && e.push(new r.a(u, l, c, s, h)),
            (u = o[2]) && e.push(new r.a(u, a, h, l, f)),
            (u = o[3]) && e.push(new r.a(u, l, h, s, f));
        }
        i.push(n);
      }
      for (; (n = i.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t[0];
    }
    (n.b = r),
      (n.a = function (t) {
        return arguments.length ? ((this._x = t), this) : this._x;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t[1];
    }
    (n.b = r),
      (n.a = function (t) {
        return arguments.length ? ((this._y = t), this) : this._y;
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.index;
    }
    function i(t, n) {
      var e = t.get(n);
      if (!e) throw new Error("missing: " + n);
      return e;
    }
    var o = e(29),
      u = e(99),
      a = e(42);
    n.a = function (t) {
      function n(t) {
        return 1 / Math.min(p[t.source.index], p[t.target.index]);
      }
      function e(n) {
        for (var e = 0, r = t.length; e < y; ++e)
          for (var i, o, a, c, s, f, d, p = 0; p < r; ++p)
            (i = t[p]),
              (o = i.source),
              (a = i.target),
              (c = a.x + a.vx - o.x - o.vx || Object(u.a)()),
              (s = a.y + a.vy - o.y - o.vy || Object(u.a)()),
              (f = Math.sqrt(c * c + s * s)),
              (f = ((f - h[p]) / f) * n * l[p]),
              (c *= f),
              (s *= f),
              (a.vx -= c * (d = v[p])),
              (a.vy -= s * d),
              (o.vx += c * (d = 1 - d)),
              (o.vy += s * d);
      }
      function c() {
        if (d) {
          var n,
            e,
            r = d.length,
            o = t.length,
            u = Object(a.c)(d, g);
          for (n = 0, p = new Array(r); n < o; ++n)
            (e = t[n]),
              (e.index = n),
              "object" != typeof e.source && (e.source = i(u, e.source)),
              "object" != typeof e.target && (e.target = i(u, e.target)),
              (p[e.source.index] = (p[e.source.index] || 0) + 1),
              (p[e.target.index] = (p[e.target.index] || 0) + 1);
          for (n = 0, v = new Array(o); n < o; ++n)
            (e = t[n]),
              (v[n] =
                p[e.source.index] / (p[e.source.index] + p[e.target.index]));
          (l = new Array(o)), s(), (h = new Array(o)), f();
        }
      }
      function s() {
        if (d) for (var n = 0, e = t.length; n < e; ++n) l[n] = +b(t[n], n, t);
      }
      function f() {
        if (d) for (var n = 0, e = t.length; n < e; ++n) h[n] = +m(t[n], n, t);
      }
      var l,
        h,
        d,
        p,
        v,
        g = r,
        b = n,
        m = Object(o.a)(30),
        y = 1;
      return (
        null == t && (t = []),
        (e.initialize = function (t) {
          (d = t), c();
        }),
        (e.links = function (n) {
          return arguments.length ? ((t = n), c(), e) : t;
        }),
        (e.id = function (t) {
          return arguments.length ? ((g = t), e) : g;
        }),
        (e.iterations = function (t) {
          return arguments.length ? ((y = +t), e) : y;
        }),
        (e.strength = function (t) {
          return arguments.length
            ? ((b = "function" == typeof t ? t : Object(o.a)(+t)), s(), e)
            : b;
        }),
        (e.distance = function (t) {
          return arguments.length
            ? ((m = "function" == typeof t ? t : Object(o.a)(+t)), f(), e)
            : m;
        }),
        e
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(29),
      i = e(99),
      o = e(100),
      u = e(169);
    n.a = function () {
      function t(t) {
        var n,
          r = c.length,
          i = Object(o.a)(c, u.b, u.c).visitAfter(e);
        for (f = t, n = 0; n < r; ++n) (s = c[n]), i.visit(a);
      }
      function n() {
        if (c) {
          var t,
            n,
            e = c.length;
          for (l = new Array(e), t = 0; t < e; ++t)
            (n = c[t]), (l[n.index] = +h(n, t, c));
        }
      }
      function e(t) {
        var n,
          e,
          r,
          i,
          o,
          u = 0,
          a = 0;
        if (t.length) {
          for (r = i = o = 0; o < 4; ++o)
            (n = t[o]) &&
              (e = Math.abs(n.value)) &&
              ((u += n.value), (a += e), (r += e * n.x), (i += e * n.y));
          (t.x = r / a), (t.y = i / a);
        } else {
          (n = t), (n.x = n.data.x), (n.y = n.data.y);
          do {
            u += l[n.data.index];
          } while ((n = n.next));
        }
        t.value = u;
      }
      function a(t, n, e, r) {
        if (!t.value) return !0;
        var o = t.x - s.x,
          u = t.y - s.y,
          a = r - n,
          c = o * o + u * u;
        if ((a * a) / v < c)
          return (
            c < p &&
              (0 === o && ((o = Object(i.a)()), (c += o * o)),
              0 === u && ((u = Object(i.a)()), (c += u * u)),
              c < d && (c = Math.sqrt(d * c)),
              (s.vx += (o * t.value * f) / c),
              (s.vy += (u * t.value * f) / c)),
            !0
          );
        if (!(t.length || c >= p)) {
          (t.data !== s || t.next) &&
            (0 === o && ((o = Object(i.a)()), (c += o * o)),
            0 === u && ((u = Object(i.a)()), (c += u * u)),
            c < d && (c = Math.sqrt(d * c)));
          do {
            t.data !== s &&
              ((a = (l[t.data.index] * f) / c),
              (s.vx += o * a),
              (s.vy += u * a));
          } while ((t = t.next));
        }
      }
      var c,
        s,
        f,
        l,
        h = Object(r.a)(-30),
        d = 1,
        p = 1 / 0,
        v = 0.81;
      return (
        (t.initialize = function (t) {
          (c = t), n();
        }),
        (t.strength = function (e) {
          return arguments.length
            ? ((h = "function" == typeof e ? e : Object(r.a)(+e)), n(), t)
            : h;
        }),
        (t.distanceMin = function (n) {
          return arguments.length ? ((d = n * n), t) : Math.sqrt(d);
        }),
        (t.distanceMax = function (n) {
          return arguments.length ? ((p = n * n), t) : Math.sqrt(p);
        }),
        (t.theta = function (n) {
          return arguments.length ? ((v = n * n), t) : Math.sqrt(v);
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(29);
    n.a = function (t, n, e) {
      function i(t) {
        for (var r = 0, i = u.length; r < i; ++r) {
          var o = u[r],
            s = o.x - n || 1e-6,
            f = o.y - e || 1e-6,
            l = Math.sqrt(s * s + f * f),
            h = ((c[r] - l) * a[r] * t) / l;
          (o.vx += s * h), (o.vy += f * h);
        }
      }
      function o() {
        if (u) {
          var n,
            e = u.length;
          for (a = new Array(e), c = new Array(e), n = 0; n < e; ++n)
            (c[n] = +t(u[n], n, u)), (a[n] = isNaN(c[n]) ? 0 : +s(u[n], n, u));
        }
      }
      var u,
        a,
        c,
        s = Object(r.a)(0.1);
      return (
        "function" != typeof t && (t = Object(r.a)(+t)),
        null == n && (n = 0),
        null == e && (e = 0),
        (i.initialize = function (t) {
          (u = t), o();
        }),
        (i.strength = function (t) {
          return arguments.length
            ? ((s = "function" == typeof t ? t : Object(r.a)(+t)), o(), i)
            : s;
        }),
        (i.radius = function (n) {
          return arguments.length
            ? ((t = "function" == typeof n ? n : Object(r.a)(+n)), o(), i)
            : t;
        }),
        (i.x = function (t) {
          return arguments.length ? ((n = +t), i) : n;
        }),
        (i.y = function (t) {
          return arguments.length ? ((e = +t), i) : e;
        }),
        i
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(29);
    n.a = function (t) {
      function n(t) {
        for (var n, e = 0, r = i.length; e < r; ++e)
          (n = i[e]), (n.vx += (u[e] - n.x) * o[e] * t);
      }
      function e() {
        if (i) {
          var n,
            e = i.length;
          for (o = new Array(e), u = new Array(e), n = 0; n < e; ++n)
            o[n] = isNaN((u[n] = +t(i[n], n, i))) ? 0 : +a(i[n], n, i);
        }
      }
      var i,
        o,
        u,
        a = Object(r.a)(0.1);
      return (
        "function" != typeof t && (t = Object(r.a)(null == t ? 0 : +t)),
        (n.initialize = function (t) {
          (i = t), e();
        }),
        (n.strength = function (t) {
          return arguments.length
            ? ((a = "function" == typeof t ? t : Object(r.a)(+t)), e(), n)
            : a;
        }),
        (n.x = function (i) {
          return arguments.length
            ? ((t = "function" == typeof i ? i : Object(r.a)(+i)), e(), n)
            : t;
        }),
        n
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(29);
    n.a = function (t) {
      function n(t) {
        for (var n, e = 0, r = i.length; e < r; ++e)
          (n = i[e]), (n.vy += (u[e] - n.y) * o[e] * t);
      }
      function e() {
        if (i) {
          var n,
            e = i.length;
          for (o = new Array(e), u = new Array(e), n = 0; n < e; ++n)
            o[n] = isNaN((u[n] = +t(i[n], n, i))) ? 0 : +a(i[n], n, i);
        }
      }
      var i,
        o,
        u,
        a = Object(r.a)(0.1);
      return (
        "function" != typeof t && (t = Object(r.a)(null == t ? 0 : +t)),
        (n.initialize = function (t) {
          (i = t), e();
        }),
        (n.strength = function (t) {
          return arguments.length
            ? ((a = "function" == typeof t ? t : Object(r.a)(+t)), e(), n)
            : a;
        }),
        (n.y = function (i) {
          return arguments.length
            ? ((t = "function" == typeof i ? i : Object(r.a)(+i)), e(), n)
            : t;
        }),
        n
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return (i = Object(a.a)(t)), (o = i.format), (u = i.formatPrefix), i;
    }
    e.d(n, "b", function () {
      return o;
    }),
      e.d(n, "c", function () {
        return u;
      }),
      (n.a = r);
    var i,
      o,
      u,
      a = e(170);
    r({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""] });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return function (e, r) {
        for (
          var i = e.length, o = [], u = 0, a = t[0], c = 0;
          i > 0 &&
          a > 0 &&
          (c + a + 1 > r && (a = Math.max(1, r - c)),
          o.push(e.substring((i -= a), i + a)),
          !((c += a + 1) > r));

        )
          a = t[(u = (u + 1) % t.length)];
        return o.reverse().join(n);
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function (n) {
        return n.replace(/[0-9]/g, function (n) {
          return t[+n];
        });
      };
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      t = t.toPrecision(n);
      t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i)
        switch (t[i]) {
          case ".":
            o = e = i;
            break;
          case "0":
            0 === o && (o = i), (e = i);
            break;
          case "e":
            break t;
          default:
            o > 0 && (o = 0);
        }
      return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(103);
    n.a = function (t, n) {
      var e = Object(r.a)(t, n);
      if (!e) return t + "";
      var i = e[0],
        o = e[1];
      return o < 0
        ? "0." + new Array(-o).join("0") + i
        : i.length > o + 1
        ? i.slice(0, o + 1) + "." + i.slice(o + 1)
        : i + new Array(o - i.length + 2).join("0");
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(66);
    n.a = function (t) {
      return Math.max(0, -Object(r.a)(Math.abs(t)));
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(66);
    n.a = function (t, n) {
      return Math.max(
        0,
        3 * Math.max(-8, Math.min(8, Math.floor(Object(r.a)(n) / 3))) -
          Object(r.a)(Math.abs(t))
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(66);
    n.a = function (t, n) {
      return (
        (t = Math.abs(t)),
        (n = Math.abs(n) - t),
        Math.max(0, Object(r.a)(n) - Object(r.a)(t)) + 1
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(174);
    e.d(n, "c", function () {
      return r.c;
    });
    var i = e(392);
    e.d(n, "h", function () {
      return i.a;
    });
    var o = e(393);
    e.d(n, "i", function () {
      return o.a;
    });
    var u = e(175);
    e.d(n, "j", function () {
      return u.b;
    });
    var a = e(177);
    e.d(n, "k", function () {
      return a.a;
    });
    var c = e(183);
    e.d(n, "l", function () {
      return c.a;
    });
    var s = e(395);
    e.d(n, "m", function () {
      return s.a;
    });
    var f = e(68);
    e.d(n, "n", function () {
      return f.a;
    });
    var l = e(397);
    e.d(n, "u", function () {
      return l.a;
    });
    var h = e(184);
    e.d(n, "v", function () {
      return h.a;
    });
    var d = e(398);
    e.d(n, "A", function () {
      return d.a;
    }),
      e.d(n, "B", function () {
        return d.b;
      });
    var p = e(399);
    e.d(n, "D", function () {
      return p.a;
    });
    var v = e(185);
    e.d(n, "E", function () {
      return v.a;
    });
    var g = e(400);
    e.d(n, "L", function () {
      return g.a;
    });
    var b = e(187);
    e.d(n, "a", function () {
      return b.a;
    });
    var m = e(408);
    e.d(n, "b", function () {
      return m.a;
    });
    var y = e(409);
    e.d(n, "d", function () {
      return y.b;
    }),
      e.d(n, "e", function () {
        return y.a;
      });
    var _ = e(410);
    e.d(n, "f", function () {
      return _.b;
    }),
      e.d(n, "g", function () {
        return _.a;
      });
    var O = e(411);
    e.d(n, "o", function () {
      return O.b;
    }),
      e.d(n, "p", function () {
        return O.a;
      });
    var x = e(105);
    e.d(n, "q", function () {
      return x.b;
    }),
      e.d(n, "r", function () {
        return x.a;
      });
    var w = e(412);
    e.d(n, "s", function () {
      return w.b;
    }),
      e.d(n, "t", function () {
        return w.a;
      });
    var j = e(188);
    e.d(n, "w", function () {
      return j.a;
    }),
      e.d(n, "x", function () {
        return j.b;
      });
    var T = e(413);
    e.d(n, "y", function () {
      return T.a;
    }),
      e.d(n, "z", function () {
        return T.b;
      });
    var E = e(414);
    e.d(n, "C", function () {
      return E.a;
    });
    var C = e(14);
    e.d(n, "M", function () {
      return C.a;
    }),
      e.d(n, "N", function () {
        return C.b;
      });
    var A = e(108);
    e.d(n, "F", function () {
      return A.a;
    }),
      e.d(n, "G", function () {
        return A.c;
      });
    var S = e(415);
    e.d(n, "H", function () {
      return S.a;
    }),
      e.d(n, "I", function () {
        return S.b;
      });
    var M = e(416);
    e.d(n, "J", function () {
      return M.a;
    }),
      e.d(n, "K", function () {
        return M.b;
      });
    var N = e(417);
    e.d(n, "P", function () {
      return N.a;
    }),
      e.d(n, "Q", function () {
        return N.b;
      });
    var D = e(418);
    e.d(n, "T", function () {
      return D.a;
    }),
      e.d(n, "U", function () {
        return D.b;
      });
    var k = e(67);
    e.d(n, "O", function () {
      return k.a;
    });
    var I = e(24);
    e.d(n, "R", function () {
      return I.a;
    });
    var L = e(69);
    e.d(n, "S", function () {
      return L.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      O.push((x = [(d = t), (v = t)])), n < p && (p = n), n > g && (g = n);
    }
    function i(t, n) {
      var e = Object(T.a)([t * E.r, n * E.r]);
      if (_) {
        var r = Object(T.c)(_, e),
          i = [r[1], -r[0], 0],
          o = Object(T.c)(i, r);
        Object(T.e)(o), (o = Object(T.g)(o));
        var u,
          a = t - b,
          c = a > 0 ? 1 : -1,
          s = o[0] * E.h * c,
          l = Object(E.a)(a) > 180;
        l ^ (c * b < s && s < c * t)
          ? (u = o[1] * E.h) > g && (g = u)
          : ((s = ((s + 360) % 360) - 180),
            l ^ (c * b < s && s < c * t)
              ? (u = -o[1] * E.h) < p && (p = u)
              : (n < p && (p = n), n > g && (g = n))),
          l
            ? t < b
              ? f(d, t) > f(d, v) && (v = t)
              : f(t, v) > f(d, v) && (d = t)
            : v >= d
            ? (t < d && (d = t), t > v && (v = t))
            : t > b
            ? f(d, t) > f(d, v) && (v = t)
            : f(t, v) > f(d, v) && (d = t);
      } else O.push((x = [(d = t), (v = t)]));
      n < p && (p = n), n > g && (g = n), (_ = e), (b = t);
    }
    function o() {
      S.point = i;
    }
    function u() {
      (x[0] = d), (x[1] = v), (S.point = r), (_ = null);
    }
    function a(t, n) {
      if (_) {
        var e = t - b;
        A.add(Object(E.a)(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
      } else (m = t), (y = n);
      j.b.point(t, n), i(t, n);
    }
    function c() {
      j.b.lineStart();
    }
    function s() {
      a(m, y),
        j.b.lineEnd(),
        Object(E.a)(A) > E.i && (d = -(v = 180)),
        (x[0] = d),
        (x[1] = v),
        (_ = null);
    }
    function f(t, n) {
      return (n -= t) < 0 ? n + 360 : n;
    }
    function l(t, n) {
      return t[0] - n[0];
    }
    function h(t, n) {
      return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
    }
    var d,
      p,
      v,
      g,
      b,
      m,
      y,
      _,
      O,
      x,
      w = e(30),
      j = e(174),
      T = e(43),
      E = e(1),
      C = e(24),
      A = Object(w.a)(),
      S = {
        point: r,
        lineStart: o,
        lineEnd: u,
        polygonStart: function () {
          (S.point = a),
            (S.lineStart = c),
            (S.lineEnd = s),
            A.reset(),
            j.b.polygonStart();
        },
        polygonEnd: function () {
          j.b.polygonEnd(),
            (S.point = r),
            (S.lineStart = o),
            (S.lineEnd = u),
            j.a < 0
              ? ((d = -(v = 180)), (p = -(g = 90)))
              : A > E.i
              ? (g = 90)
              : A < -E.i && (p = -90),
            (x[0] = d),
            (x[1] = v);
        },
      };
    n.a = function (t) {
      var n, e, r, i, o, u, a;
      if (
        ((g = v = -(d = p = 1 / 0)),
        (O = []),
        Object(C.a)(t, S),
        (e = O.length))
      ) {
        for (O.sort(l), n = 1, r = O[0], o = [r]; n < e; ++n)
          (i = O[n]),
            h(r, i[0]) || h(r, i[1])
              ? (f(r[0], i[1]) > f(r[0], r[1]) && (r[1] = i[1]),
                f(i[0], r[1]) > f(r[0], r[1]) && (r[0] = i[0]))
              : o.push((r = i));
        for (u = -1 / 0, e = o.length - 1, n = 0, r = o[e]; n <= e; r = i, ++n)
          (i = o[n]),
            (a = f(r[1], i[0])) > u && ((u = a), (d = i[0]), (v = r[1]));
      }
      return (
        (O = x = null),
        d === 1 / 0 || p === 1 / 0
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [d, p],
              [v, g],
            ]
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (t *= S.r), (n *= S.r);
      var e = Object(S.g)(n);
      i(e * Object(S.g)(t), e * Object(S.t)(t), Object(S.t)(n));
    }
    function i(t, n, e) {
      ++d, (v += (t - v) / d), (g += (n - g) / d), (b += (e - b) / d);
    }
    function o() {
      D.point = u;
    }
    function u(t, n) {
      (t *= S.r), (n *= S.r);
      var e = Object(S.g)(n);
      (E = e * Object(S.g)(t)),
        (C = e * Object(S.t)(t)),
        (A = Object(S.t)(n)),
        (D.point = a),
        i(E, C, A);
    }
    function a(t, n) {
      (t *= S.r), (n *= S.r);
      var e = Object(S.g)(n),
        r = e * Object(S.g)(t),
        o = e * Object(S.t)(t),
        u = Object(S.t)(n),
        a = Object(S.e)(
          Object(S.u)(
            (a = C * u - A * o) * a +
              (a = A * r - E * u) * a +
              (a = E * o - C * r) * a
          ),
          E * r + C * o + A * u
        );
      (p += a),
        (m += a * (E + (E = r))),
        (y += a * (C + (C = o))),
        (_ += a * (A + (A = u))),
        i(E, C, A);
    }
    function c() {
      D.point = r;
    }
    function s() {
      D.point = l;
    }
    function f() {
      h(j, T), (D.point = r);
    }
    function l(t, n) {
      (j = t), (T = n), (t *= S.r), (n *= S.r), (D.point = h);
      var e = Object(S.g)(n);
      (E = e * Object(S.g)(t)),
        (C = e * Object(S.t)(t)),
        (A = Object(S.t)(n)),
        i(E, C, A);
    }
    function h(t, n) {
      (t *= S.r), (n *= S.r);
      var e = Object(S.g)(n),
        r = e * Object(S.g)(t),
        o = e * Object(S.t)(t),
        u = Object(S.t)(n),
        a = C * u - A * o,
        c = A * r - E * u,
        s = E * o - C * r,
        f = Object(S.u)(a * a + c * c + s * s),
        l = Object(S.c)(f),
        h = f && -l / f;
      (O += h * a),
        (x += h * c),
        (w += h * s),
        (p += l),
        (m += l * (E + (E = r))),
        (y += l * (C + (C = o))),
        (_ += l * (A + (A = u))),
        i(E, C, A);
    }
    var d,
      p,
      v,
      g,
      b,
      m,
      y,
      _,
      O,
      x,
      w,
      j,
      T,
      E,
      C,
      A,
      S = e(1),
      M = e(21),
      N = e(24),
      D = {
        sphere: M.a,
        point: r,
        lineStart: o,
        lineEnd: c,
        polygonStart: function () {
          (D.lineStart = s), (D.lineEnd = f);
        },
        polygonEnd: function () {
          (D.lineStart = o), (D.lineEnd = c);
        },
      };
    n.a = function (t) {
      (d = p = v = g = b = m = y = _ = O = x = w = 0), Object(N.a)(t, D);
      var n = O,
        e = x,
        r = w,
        i = n * n + e * e + r * r;
      return i < S.j &&
        ((n = m),
        (e = y),
        (r = _),
        p < S.i && ((n = v), (e = g), (r = b)),
        (i = n * n + e * e + r * r) < S.j)
        ? [NaN, NaN]
        : [Object(S.e)(e, n) * S.h, Object(S.c)(r / Object(S.u)(i)) * S.h];
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(68);
    n.a = function () {
      var t,
        n,
        e,
        i = 0,
        o = 0,
        u = 960,
        a = 500;
      return (e = {
        stream: function (e) {
          return t && n === e ? t : (t = Object(r.a)(i, o, u, a)((n = e)));
        },
        extent: function (r) {
          return arguments.length
            ? ((i = +r[0][0]),
              (o = +r[0][1]),
              (u = +r[1][0]),
              (a = +r[1][1]),
              (t = n = null),
              e)
            : [
                [i, o],
                [u, a],
              ];
        },
      });
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e, r, i, o) {
      var u,
        a = t[0],
        c = t[1],
        s = n[0],
        f = n[1],
        l = 0,
        h = 1,
        d = s - a,
        p = f - c;
      if (((u = e - a), d || !(u > 0))) {
        if (((u /= d), d < 0)) {
          if (u < l) return;
          u < h && (h = u);
        } else if (d > 0) {
          if (u > h) return;
          u > l && (l = u);
        }
        if (((u = i - a), d || !(u < 0))) {
          if (((u /= d), d < 0)) {
            if (u > h) return;
            u > l && (l = u);
          } else if (d > 0) {
            if (u < l) return;
            u < h && (h = u);
          }
          if (((u = r - c), p || !(u > 0))) {
            if (((u /= p), p < 0)) {
              if (u < l) return;
              u < h && (h = u);
            } else if (p > 0) {
              if (u > h) return;
              u > l && (l = u);
            }
            if (((u = o - c), p || !(u < 0))) {
              if (((u /= p), p < 0)) {
                if (u > h) return;
                u > l && (l = u);
              } else if (p > 0) {
                if (u < l) return;
                u < h && (h = u);
              }
              return (
                l > 0 && ((t[0] = a + l * d), (t[1] = c + l * p)),
                h < 1 && ((n[0] = a + h * d), (n[1] = c + h * p)),
                !0
              );
            }
          }
        }
      }
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return !(!t || !d.hasOwnProperty(t.type)) && d[t.type](t, n);
    }
    function i(t, n) {
      return 0 === Object(f.a)(t, n);
    }
    function o(t, n) {
      var e = Object(f.a)(t[0], t[1]);
      return Object(f.a)(t[0], n) + Object(f.a)(n, t[1]) <= e + l.i;
    }
    function u(t, n) {
      return !!Object(s.a)(t.map(a), c(n));
    }
    function a(t) {
      return (t = t.map(c)), t.pop(), t;
    }
    function c(t) {
      return [t[0] * l.r, t[1] * l.r];
    }
    var s = e(182),
      f = e(184),
      l = e(1),
      h = {
        Feature: function (t, n) {
          return r(t.geometry, n);
        },
        FeatureCollection: function (t, n) {
          for (var e = t.features, i = -1, o = e.length; ++i < o; )
            if (r(e[i].geometry, n)) return !0;
          return !1;
        },
      },
      d = {
        Sphere: function () {
          return !0;
        },
        Point: function (t, n) {
          return i(t.coordinates, n);
        },
        MultiPoint: function (t, n) {
          for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
            if (i(e[r], n)) return !0;
          return !1;
        },
        LineString: function (t, n) {
          return o(t.coordinates, n);
        },
        MultiLineString: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
            if (o(e[r], n)) return !0;
          return !1;
        },
        Polygon: function (t, n) {
          return u(t.coordinates, n);
        },
        MultiPolygon: function (t, n) {
          for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
            if (u(e[r], n)) return !0;
          return !1;
        },
        GeometryCollection: function (t, n) {
          for (var e = t.geometries, i = -1, o = e.length; ++i < o; )
            if (r(e[i], n)) return !0;
          return !1;
        },
      };
    n.a = function (t, n) {
      return (t && h.hasOwnProperty(t.type) ? h[t.type] : r)(t, n);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      var r = Object(a.s)(t, n - c.i, e).concat(n);
      return function (t) {
        return r.map(function (n) {
          return [t, n];
        });
      };
    }
    function i(t, n, e) {
      var r = Object(a.s)(t, n - c.i, e).concat(n);
      return function (t) {
        return r.map(function (n) {
          return [n, t];
        });
      };
    }
    function o() {
      function t() {
        return { type: "MultiLineString", coordinates: n() };
      }
      function n() {
        return Object(a.s)(Object(c.f)(s / _) * _, u, _)
          .map(g)
          .concat(Object(a.s)(Object(c.f)(d / O) * O, h, O).map(b))
          .concat(
            Object(a.s)(Object(c.f)(o / m) * m, e, m)
              .filter(function (t) {
                return Object(c.a)(t % _) > c.i;
              })
              .map(p)
          )
          .concat(
            Object(a.s)(Object(c.f)(l / y) * y, f, y)
              .filter(function (t) {
                return Object(c.a)(t % O) > c.i;
              })
              .map(v)
          );
      }
      var e,
        o,
        u,
        s,
        f,
        l,
        h,
        d,
        p,
        v,
        g,
        b,
        m = 10,
        y = m,
        _ = 90,
        O = 360,
        x = 2.5;
      return (
        (t.lines = function () {
          return n().map(function (t) {
            return { type: "LineString", coordinates: t };
          });
        }),
        (t.outline = function () {
          return {
            type: "Polygon",
            coordinates: [
              g(s).concat(
                b(h).slice(1),
                g(u).reverse().slice(1),
                b(d).reverse().slice(1)
              ),
            ],
          };
        }),
        (t.extent = function (n) {
          return arguments.length
            ? t.extentMajor(n).extentMinor(n)
            : t.extentMinor();
        }),
        (t.extentMajor = function (n) {
          return arguments.length
            ? ((s = +n[0][0]),
              (u = +n[1][0]),
              (d = +n[0][1]),
              (h = +n[1][1]),
              s > u && ((n = s), (s = u), (u = n)),
              d > h && ((n = d), (d = h), (h = n)),
              t.precision(x))
            : [
                [s, d],
                [u, h],
              ];
        }),
        (t.extentMinor = function (n) {
          return arguments.length
            ? ((o = +n[0][0]),
              (e = +n[1][0]),
              (l = +n[0][1]),
              (f = +n[1][1]),
              o > e && ((n = o), (o = e), (e = n)),
              l > f && ((n = l), (l = f), (f = n)),
              t.precision(x))
            : [
                [o, l],
                [e, f],
              ];
        }),
        (t.step = function (n) {
          return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor();
        }),
        (t.stepMajor = function (n) {
          return arguments.length ? ((_ = +n[0]), (O = +n[1]), t) : [_, O];
        }),
        (t.stepMinor = function (n) {
          return arguments.length ? ((m = +n[0]), (y = +n[1]), t) : [m, y];
        }),
        (t.precision = function (n) {
          return arguments.length
            ? ((x = +n),
              (p = r(l, f, 90)),
              (v = i(o, e, x)),
              (g = r(d, h, 90)),
              (b = i(s, u, x)),
              t)
            : x;
        }),
        t
          .extentMajor([
            [-180, -90 + c.i],
            [180, 90 - c.i],
          ])
          .extentMinor([
            [-180, -80 - c.i],
            [180, 80 + c.i],
          ])
      );
    }
    function u() {
      return o()();
    }
    (n.a = o), (n.b = u);
    var a = e(8),
      c = e(1);
  },
  function (t, n, e) {
    "use strict";
    var r = e(1);
    n.a = function (t, n) {
      var e = t[0] * r.r,
        i = t[1] * r.r,
        o = n[0] * r.r,
        u = n[1] * r.r,
        a = Object(r.g)(i),
        c = Object(r.t)(i),
        s = Object(r.g)(u),
        f = Object(r.t)(u),
        l = a * Object(r.g)(e),
        h = a * Object(r.t)(e),
        d = s * Object(r.g)(o),
        p = s * Object(r.t)(o),
        v =
          2 *
          Object(r.c)(
            Object(r.u)(Object(r.m)(u - i) + a * s * Object(r.m)(o - e))
          ),
        g = Object(r.t)(v),
        b = v
          ? function (t) {
              var n = Object(r.t)((t *= v)) / g,
                e = Object(r.t)(v - t) / g,
                i = e * l + n * d,
                o = e * h + n * p,
                u = e * c + n * f;
              return [
                Object(r.e)(o, i) * r.h,
                Object(r.e)(u, Object(r.u)(i * i + o * o)) * r.h,
              ];
            }
          : function () {
              return [e * r.h, i * r.h];
            };
      return (b.distance = v), b;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(104),
      i = e(24),
      o = e(401),
      u = e(186),
      a = e(402),
      c = e(403),
      s = e(404),
      f = e(405);
    n.a = function (t, n) {
      function e(t) {
        return (
          t &&
            ("function" == typeof d && h.pointRadius(+d.apply(this, arguments)),
            Object(i.a)(t, l(h))),
          h.result()
        );
      }
      var l,
        h,
        d = 4.5;
      return (
        (e.area = function (t) {
          return Object(i.a)(t, l(o.a)), o.a.result();
        }),
        (e.measure = function (t) {
          return Object(i.a)(t, l(s.a)), s.a.result();
        }),
        (e.bounds = function (t) {
          return Object(i.a)(t, l(u.a)), u.a.result();
        }),
        (e.centroid = function (t) {
          return Object(i.a)(t, l(a.a)), a.a.result();
        }),
        (e.projection = function (n) {
          return arguments.length
            ? ((l = null == n ? ((t = null), r.a) : (t = n).stream), e)
            : t;
        }),
        (e.context = function (t) {
          return arguments.length
            ? ((h = null == t ? ((n = null), new f.a()) : new c.a((n = t))),
              "function" != typeof d && h.pointRadius(d),
              e)
            : n;
        }),
        (e.pointRadius = function (t) {
          return arguments.length
            ? ((d = "function" == typeof t ? t : (h.pointRadius(+t), +t)), e)
            : d;
        }),
        e.projection(t).context(n)
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r() {
      g.point = i;
    }
    function i(t, n) {
      (g.point = o), (a = s = t), (c = f = n);
    }
    function o(t, n) {
      v.add(f * t - s * n), (s = t), (f = n);
    }
    function u() {
      o(a, c);
    }
    var a,
      c,
      s,
      f,
      l = e(30),
      h = e(1),
      d = e(21),
      p = Object(l.a)(),
      v = Object(l.a)(),
      g = {
        point: d.a,
        lineStart: d.a,
        lineEnd: d.a,
        polygonStart: function () {
          (g.lineStart = r), (g.lineEnd = u);
        },
        polygonEnd: function () {
          (g.lineStart = g.lineEnd = g.point = d.a),
            p.add(Object(h.a)(v)),
            v.reset();
        },
        result: function () {
          var t = p / 2;
          return p.reset(), t;
        },
      };
    n.a = g;
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (b += t), (m += n), ++y;
    }
    function i() {
      E.point = o;
    }
    function o(t, n) {
      (E.point = u), r((p = t), (v = n));
    }
    function u(t, n) {
      var e = t - p,
        i = n - v,
        o = Object(g.u)(e * e + i * i);
      (_ += (o * (p + t)) / 2),
        (O += (o * (v + n)) / 2),
        (x += o),
        r((p = t), (v = n));
    }
    function a() {
      E.point = r;
    }
    function c() {
      E.point = f;
    }
    function s() {
      l(h, d);
    }
    function f(t, n) {
      (E.point = l), r((h = p = t), (d = v = n));
    }
    function l(t, n) {
      var e = t - p,
        i = n - v,
        o = Object(g.u)(e * e + i * i);
      (_ += (o * (p + t)) / 2),
        (O += (o * (v + n)) / 2),
        (x += o),
        (o = v * t - p * n),
        (w += o * (p + t)),
        (j += o * (v + n)),
        (T += 3 * o),
        r((p = t), (v = n));
    }
    var h,
      d,
      p,
      v,
      g = e(1),
      b = 0,
      m = 0,
      y = 0,
      _ = 0,
      O = 0,
      x = 0,
      w = 0,
      j = 0,
      T = 0,
      E = {
        point: r,
        lineStart: i,
        lineEnd: a,
        polygonStart: function () {
          (E.lineStart = c), (E.lineEnd = s);
        },
        polygonEnd: function () {
          (E.point = r), (E.lineStart = i), (E.lineEnd = a);
        },
        result: function () {
          var t = T
            ? [w / T, j / T]
            : x
            ? [_ / x, O / x]
            : y
            ? [b / y, m / y]
            : [NaN, NaN];
          return (b = m = y = _ = O = x = w = j = T = 0), t;
        },
      };
    n.a = E;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    n.a = r;
    var i = e(1),
      o = e(21);
    r.prototype = {
      _radius: 4.5,
      pointRadius: function (t) {
        return (this._radius = t), this;
      },
      polygonStart: function () {
        this._line = 0;
      },
      polygonEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        0 === this._line && this._context.closePath(), (this._point = NaN);
      },
      point: function (t, n) {
        switch (this._point) {
          case 0:
            this._context.moveTo(t, n), (this._point = 1);
            break;
          case 1:
            this._context.lineTo(t, n);
            break;
          default:
            this._context.moveTo(t + this._radius, n),
              this._context.arc(t, n, this._radius, 0, i.w);
        }
      },
      result: o.a,
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (p.point = i), (u = c = t), (a = s = n);
    }
    function i(t, n) {
      (c -= t), (s -= n), d.add(Object(l.u)(c * c + s * s)), (c = t), (s = n);
    }
    var o,
      u,
      a,
      c,
      s,
      f = e(30),
      l = e(1),
      h = e(21),
      d = Object(f.a)(),
      p = {
        point: h.a,
        lineStart: function () {
          p.point = r;
        },
        lineEnd: function () {
          o && i(u, a), (p.point = h.a);
        },
        polygonStart: function () {
          o = !0;
        },
        polygonEnd: function () {
          o = null;
        },
        result: function () {
          var t = +d;
          return d.reset(), t;
        },
      };
    n.a = p;
  },
  function (t, n, e) {
    "use strict";
    function r() {
      this._string = [];
    }
    function i(t) {
      return (
        "m0," +
        t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        -2 * t +
        "a" +
        t +
        "," +
        t +
        " 0 1,1 0," +
        2 * t +
        "z"
      );
    }
    (n.a = r),
      (r.prototype = {
        _radius: 4.5,
        _circle: i(4.5),
        pointRadius: function (t) {
          return (
            (t = +t) !== this._radius &&
              ((this._radius = t), (this._circle = null)),
            this
          );
        },
        polygonStart: function () {
          this._line = 0;
        },
        polygonEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          0 === this._line && this._string.push("Z"), (this._point = NaN);
        },
        point: function (t, n) {
          switch (this._point) {
            case 0:
              this._string.push("M", t, ",", n), (this._point = 1);
              break;
            case 1:
              this._string.push("L", t, ",", n);
              break;
            default:
              null == this._circle && (this._circle = i(this._radius)),
                this._string.push("M", t, ",", n, this._circle);
          }
        },
        result: function () {
          if (this._string.length) {
            var t = this._string.join("");
            return (this._string = []), t;
          }
          return null;
        },
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Object(a.b)({
        point: function (n, e) {
          (n = t(n, e)), this.stream.point(n[0], n[1]);
        },
      });
    }
    function i(t, n) {
      function e(r, i, o, a, c, f, l, h, d, p, v, g, b, m) {
        var y = l - r,
          _ = h - i,
          O = y * y + _ * _;
        if (O > 4 * n && b--) {
          var x = a + p,
            w = c + v,
            j = f + g,
            T = Object(u.u)(x * x + w * w + j * j),
            E = Object(u.c)((j /= T)),
            C =
              Object(u.a)(Object(u.a)(j) - 1) < u.i || Object(u.a)(o - d) < u.i
                ? (o + d) / 2
                : Object(u.e)(w, x),
            A = t(C, E),
            S = A[0],
            M = A[1],
            N = S - r,
            D = M - i,
            k = _ * N - y * D;
          ((k * k) / O > n ||
            Object(u.a)((y * N + _ * D) / O - 0.5) > 0.3 ||
            a * p + c * v + f * g < s) &&
            (e(r, i, o, a, c, f, S, M, C, (x /= T), (w /= T), j, b, m),
            m.point(S, M),
            e(S, M, C, x, w, j, l, h, d, p, v, g, b, m));
        }
      }
      return function (n) {
        function r(e, r) {
          (e = t(e, r)), n.point(e[0], e[1]);
        }
        function i() {
          (y = NaN), (j.point = u), n.lineStart();
        }
        function u(r, i) {
          var u = Object(o.a)([r, i]),
            a = t(r, i);
          e(
            y,
            _,
            m,
            O,
            x,
            w,
            (y = a[0]),
            (_ = a[1]),
            (m = r),
            (O = u[0]),
            (x = u[1]),
            (w = u[2]),
            c,
            n
          ),
            n.point(y, _);
        }
        function a() {
          (j.point = r), n.lineEnd();
        }
        function s() {
          i(), (j.point = f), (j.lineEnd = l);
        }
        function f(t, n) {
          u((h = t), n),
            (d = y),
            (p = _),
            (v = O),
            (g = x),
            (b = w),
            (j.point = u);
        }
        function l() {
          e(y, _, m, O, x, w, d, p, h, v, g, b, c, n), (j.lineEnd = a), a();
        }
        var h,
          d,
          p,
          v,
          g,
          b,
          m,
          y,
          _,
          O,
          x,
          w,
          j = {
            point: r,
            lineStart: i,
            lineEnd: a,
            polygonStart: function () {
              n.polygonStart(), (j.lineStart = s);
            },
            polygonEnd: function () {
              n.polygonEnd(), (j.lineStart = i);
            },
          };
        return j;
      };
    }
    var o = e(43),
      u = e(1),
      a = e(69),
      c = 16,
      s = Object(u.g)(30 * u.r);
    n.a = function (t, n) {
      return +n ? i(t, n) : r(t);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      function n(t, n) {
        return [t * e, Object(i.t)(n) / e];
      }
      var e = Object(i.g)(t);
      return (
        (n.invert = function (t, n) {
          return [t / e, Object(i.c)(n * e)];
        }),
        n
      );
    }
    n.a = r;
    var i = e(1);
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = t.length;
      return {
        point: function (e, r) {
          for (var i = -1; ++i < n; ) t[i].point(e, r);
        },
        sphere: function () {
          for (var e = -1; ++e < n; ) t[e].sphere();
        },
        lineStart: function () {
          for (var e = -1; ++e < n; ) t[e].lineStart();
        },
        lineEnd: function () {
          for (var e = -1; ++e < n; ) t[e].lineEnd();
        },
        polygonStart: function () {
          for (var e = -1; ++e < n; ) t[e].polygonStart();
        },
        polygonEnd: function () {
          for (var e = -1; ++e < n; ) t[e].polygonEnd();
        },
      };
    }
    var i = e(1),
      o = e(187),
      u = e(105),
      a = e(107);
    n.a = function () {
      function t(t) {
        var n = t[0],
          e = t[1];
        return (
          (h = null),
          s.point(n, e),
          h || (f.point(n, e), h) || (l.point(n, e), h)
        );
      }
      function n() {
        return (e = c = null), t;
      }
      var e,
        c,
        s,
        f,
        l,
        h,
        d = Object(o.a)(),
        p = Object(u.b)()
          .rotate([154, 0])
          .center([-2, 58.5])
          .parallels([55, 65]),
        v = Object(u.b)()
          .rotate([157, 0])
          .center([-3, 19.9])
          .parallels([8, 18]),
        g = {
          point: function (t, n) {
            h = [t, n];
          },
        };
      return (
        (t.invert = function (t) {
          var n = d.scale(),
            e = d.translate(),
            r = (t[0] - e[0]) / n,
            i = (t[1] - e[1]) / n;
          return (i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
            ? p
            : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
            ? v
            : d
          ).invert(t);
        }),
        (t.stream = function (t) {
          return e && c === t
            ? e
            : (e = r([d.stream((c = t)), p.stream(t), v.stream(t)]));
        }),
        (t.precision = function (t) {
          return arguments.length
            ? (d.precision(t), p.precision(t), v.precision(t), n())
            : d.precision();
        }),
        (t.scale = function (n) {
          return arguments.length
            ? (d.scale(n),
              p.scale(0.35 * n),
              v.scale(n),
              t.translate(d.translate()))
            : d.scale();
        }),
        (t.translate = function (t) {
          if (!arguments.length) return d.translate();
          var e = d.scale(),
            r = +t[0],
            o = +t[1];
          return (
            (s = d
              .translate(t)
              .clipExtent([
                [r - 0.455 * e, o - 0.238 * e],
                [r + 0.455 * e, o + 0.238 * e],
              ])
              .stream(g)),
            (f = p
              .translate([r - 0.307 * e, o + 0.201 * e])
              .clipExtent([
                [r - 0.425 * e + i.i, o + 0.12 * e + i.i],
                [r - 0.214 * e - i.i, o + 0.234 * e - i.i],
              ])
              .stream(g)),
            (l = v
              .translate([r - 0.205 * e, o + 0.212 * e])
              .clipExtent([
                [r - 0.214 * e + i.i, o + 0.166 * e + i.i],
                [r - 0.115 * e - i.i, o + 0.234 * e - i.i],
              ])
              .stream(g)),
            n()
          );
        }),
        (t.fitExtent = function (n, e) {
          return Object(a.a)(t, n, e);
        }),
        (t.fitSize = function (n, e) {
          return Object(a.c)(t, n, e);
        }),
        (t.fitWidth = function (n, e) {
          return Object(a.d)(t, n, e);
        }),
        (t.fitHeight = function (n, e) {
          return Object(a.b)(t, n, e);
        }),
        t.scale(1070)
      );
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return u;
    });
    var r = e(1),
      i = e(44),
      o = e(14),
      u = Object(i.b)(function (t) {
        return Object(r.u)(2 / (1 + t));
      });
    (u.invert = Object(i.a)(function (t) {
      return 2 * Object(r.c)(t / 2);
    })),
      (n.b = function () {
        return Object(o.a)(u).scale(124.75).clipAngle(179.999);
      });
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return u;
    });
    var r = e(1),
      i = e(44),
      o = e(14),
      u = Object(i.b)(function (t) {
        return (t = Object(r.b)(t)) && t / Object(r.t)(t);
      });
    (u.invert = Object(i.a)(function (t) {
      return t;
    })),
      (n.b = function () {
        return Object(o.a)(u).scale(79.4188).clipAngle(179.999);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Object(o.v)((o.l + t) / 2);
    }
    function i(t, n) {
      function e(t, n) {
        c > 0
          ? n < -o.l + o.i && (n = -o.l + o.i)
          : n > o.l - o.i && (n = o.l - o.i);
        var e = c / Object(o.p)(r(n), u);
        return [e * Object(o.t)(u * t), c - e * Object(o.g)(u * t)];
      }
      var i = Object(o.g)(t),
        u =
          t === n
            ? Object(o.t)(t)
            : Object(o.n)(i / Object(o.g)(n)) / Object(o.n)(r(n) / r(t)),
        c = (i * Object(o.p)(r(t), u)) / u;
      return u
        ? ((e.invert = function (t, n) {
            var e = c - n,
              r = Object(o.s)(u) * Object(o.u)(t * t + e * e);
            return [
              (Object(o.e)(t, Object(o.a)(e)) / u) * Object(o.s)(e),
              2 * Object(o.d)(Object(o.p)(c / r, 1 / u)) - o.l,
            ];
          }),
          e)
        : a.c;
    }
    n.a = i;
    var o = e(1),
      u = e(106),
      a = e(108);
    n.b = function () {
      return Object(u.a)(i).scale(109.5).parallels([30, 30]);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      function e(t, n) {
        var e = a - n,
          r = o * t;
        return [e * Object(i.t)(r), a - e * Object(i.g)(r)];
      }
      var r = Object(i.g)(t),
        o = t === n ? Object(i.t)(t) : (r - Object(i.g)(n)) / (n - t),
        a = r / o + t;
      return Object(i.a)(o) < i.i
        ? u.b
        : ((e.invert = function (t, n) {
            var e = a - n;
            return [
              (Object(i.e)(t, Object(i.a)(e)) / o) * Object(i.s)(e),
              a - Object(i.s)(o) * Object(i.u)(t * t + e * e),
            ];
          }),
          e);
    }
    n.a = r;
    var i = e(1),
      o = e(106),
      u = e(188);
    n.b = function () {
      return Object(o.a)(r).scale(131.154).center([0, 13.9389]);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = Object(i.g)(n),
        r = Object(i.g)(t) * e;
      return [(e * Object(i.t)(t)) / r, Object(i.t)(n) / r];
    }
    n.b = r;
    var i = e(1),
      o = e(44),
      u = e(14);
    (r.invert = Object(o.a)(i.d)),
      (n.a = function () {
        return Object(u.a)(r).scale(144.049).clipAngle(60);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e, r) {
      return 1 === t && 1 === n && 0 === e && 0 === r
        ? o.a
        : Object(u.b)({
            point: function (i, o) {
              this.stream.point(i * t + e, o * n + r);
            },
          });
    }
    var i = e(68),
      o = e(104),
      u = e(69),
      a = e(107);
    n.a = function () {
      function t() {
        return (c = s = null), f;
      }
      var n,
        e,
        u,
        c,
        s,
        f,
        l = 1,
        h = 0,
        d = 0,
        p = 1,
        v = 1,
        g = o.a,
        b = null,
        m = o.a;
      return (f = {
        stream: function (t) {
          return c && s === t ? c : (c = g(m((s = t))));
        },
        postclip: function (r) {
          return arguments.length ? ((m = r), (b = n = e = u = null), t()) : m;
        },
        clipExtent: function (r) {
          return arguments.length
            ? ((m =
                null == r
                  ? ((b = n = e = u = null), o.a)
                  : Object(i.a)(
                      (b = +r[0][0]),
                      (n = +r[0][1]),
                      (e = +r[1][0]),
                      (u = +r[1][1])
                    )),
              t())
            : null == b
            ? null
            : [
                [b, n],
                [e, u],
              ];
        },
        scale: function (n) {
          return arguments.length
            ? ((g = r((l = +n) * p, l * v, h, d)), t())
            : l;
        },
        translate: function (n) {
          return arguments.length
            ? ((g = r(l * p, l * v, (h = +n[0]), (d = +n[1]))), t())
            : [h, d];
        },
        reflectX: function (n) {
          return arguments.length
            ? ((g = r(l * (p = n ? -1 : 1), l * v, h, d)), t())
            : p < 0;
        },
        reflectY: function (n) {
          return arguments.length
            ? ((g = r(l * p, l * (v = n ? -1 : 1), h, d)), t())
            : v < 0;
        },
        fitExtent: function (t, n) {
          return Object(a.a)(f, t, n);
        },
        fitSize: function (t, n) {
          return Object(a.c)(f, t, n);
        },
        fitWidth: function (t, n) {
          return Object(a.d)(f, t, n);
        },
        fitHeight: function (t, n) {
          return Object(a.b)(f, t, n);
        },
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = n * n,
        r = e * e;
      return [
        t *
          (0.8707 -
            0.131979 * e +
            r * (r * (0.003971 * e - 0.001529 * r) - 0.013791)),
        n *
          (1.007226 +
            e * (0.015085 + r * (0.028874 * e - 0.044475 - 0.005916 * r))),
      ];
    }
    n.b = r;
    var i = e(14),
      o = e(1);
    (r.invert = function (t, n) {
      var e,
        r = n,
        i = 25;
      do {
        var u = r * r,
          a = u * u;
        r -= e =
          (r *
            (1.007226 +
              u * (0.015085 + a * (0.028874 * u - 0.044475 - 0.005916 * a))) -
            n) /
          (1.007226 +
            u * (0.045255 + a * (0.259866 * u - 0.311325 - 0.005916 * 11 * a)));
      } while (Object(o.a)(e) > o.i && --i > 0);
      return [
        t /
          (0.8707 +
            (u = r * r) *
              (u * (u * u * u * (0.003971 - 0.001529 * u) - 0.013791) -
                0.131979)),
        r,
      ];
    }),
      (n.a = function () {
        return Object(i.a)(r).scale(175.295);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [Object(i.g)(n) * Object(i.t)(t), Object(i.t)(n)];
    }
    n.b = r;
    var i = e(1),
      o = e(44),
      u = e(14);
    (r.invert = Object(o.a)(i.c)),
      (n.a = function () {
        return Object(u.a)(r)
          .scale(249.5)
          .clipAngle(90 + i.i);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      var e = Object(i.g)(n),
        r = 1 + Object(i.g)(t) * e;
      return [(e * Object(i.t)(t)) / r, Object(i.t)(n) / r];
    }
    n.b = r;
    var i = e(1),
      o = e(44),
      u = e(14);
    (r.invert = Object(o.a)(function (t) {
      return 2 * Object(i.d)(t);
    })),
      (n.a = function () {
        return Object(u.a)(r).scale(250).clipAngle(142);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return [Object(i.n)(Object(i.v)((i.l + n) / 2)), -t];
    }
    n.b = r;
    var i = e(1),
      o = e(108);
    (r.invert = function (t, n) {
      return [-n, 2 * Object(i.d)(Object(i.k)(t)) - i.l];
    }),
      (n.a = function () {
        var t = Object(o.b)(r),
          n = t.center,
          e = t.rotate;
        return (
          (t.center = function (t) {
            return arguments.length
              ? n([-t[1], t[0]])
              : ((t = n()), [t[1], -t[0]]);
          }),
          (t.rotate = function (t) {
            return arguments.length
              ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
              : ((t = e()), [t[0], t[1], t[2] - 90]);
          }),
          e([0, 0, 90]).scale(159.155)
        );
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(420);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(109);
    e.d(n, "b", function () {
      return i.c;
    });
    var o = e(432);
    e.d(n, "c", function () {
      return o.a;
    });
    var u = e(189);
    e.d(n, "e", function () {
      return u.a;
    });
    var a = e(190);
    e.d(n, "d", function () {
      return a.a;
    });
    var c = e(434);
    e.d(n, "f", function () {
      return c.a;
    });
    var s = e(435);
    e.d(n, "g", function () {
      return s.a;
    });
    var f = e(436);
    e.d(n, "h", function () {
      return f.a;
    });
    var l = e(437);
    e.d(n, "i", function () {
      return l.a;
    });
    var h = e(438);
    e.d(n, "j", function () {
      return h.a;
    });
    var d = e(45);
    e.d(n, "k", function () {
      return d.a;
    });
    var p = e(70);
    e.d(n, "m", function () {
      return p.a;
    });
    var v = e(439);
    e.d(n, "n", function () {
      return v.a;
    });
    var g = e(111);
    e.d(n, "o", function () {
      return g.a;
    });
    var b = e(440);
    e.d(n, "l", function () {
      return b.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function i(t) {
      return t.reduce(o, 0) / t.length;
    }
    function o(t, n) {
      return t + n.x;
    }
    function u(t) {
      return 1 + t.reduce(a, 0);
    }
    function a(t, n) {
      return Math.max(t, n.y);
    }
    function c(t) {
      for (var n; (n = t.children); ) t = n[0];
      return t;
    }
    function s(t) {
      for (var n; (n = t.children); ) t = n[n.length - 1];
      return t;
    }
    n.a = function () {
      function t(t) {
        var r,
          f = 0;
        t.eachAfter(function (t) {
          var e = t.children;
          e
            ? ((t.x = i(e)), (t.y = u(e)))
            : ((t.x = r ? (f += n(t, r)) : 0), (t.y = 0), (r = t));
        });
        var l = c(t),
          h = s(t),
          d = l.x - n(l, h) / 2,
          p = h.x + n(h, l) / 2;
        return t.eachAfter(
          a
            ? function (n) {
                (n.x = (n.x - t.x) * e), (n.y = (t.y - n.y) * o);
              }
            : function (n) {
                (n.x = ((n.x - d) / (p - d)) * e),
                  (n.y = (1 - (t.y ? n.y / t.y : 1)) * o);
              }
        );
      }
      var n = r,
        e = 1,
        o = 1,
        a = !1;
      return (
        (t.separation = function (e) {
          return arguments.length ? ((n = e), t) : n;
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((a = !1), (e = +n[0]), (o = +n[1]), t)
            : a
            ? null
            : [e, o];
        }),
        (t.nodeSize = function (n) {
          return arguments.length
            ? ((a = !0), (e = +n[0]), (o = +n[1]), t)
            : a
            ? [e, o]
            : null;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = 0,
        e = t.children,
        r = e && e.length;
      if (r) for (; --r >= 0; ) n += e[r].value;
      else n = 1;
      t.value = n;
    }
    n.a = function () {
      return this.eachAfter(r);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      var n,
        e,
        r,
        i,
        o = this,
        u = [o];
      do {
        for (n = u.reverse(), u = []; (o = n.pop()); )
          if ((t(o), (e = o.children)))
            for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
      } while (u.length);
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n, e, r = this, i = [r]; (r = i.pop()); )
        if ((t(r), (n = r.children)))
          for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n, e, r, i = this, o = [i], u = []; (i = o.pop()); )
        if ((u.push(i), (n = i.children)))
          for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
      for (; (i = u.pop()); ) t(i);
      return this;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return this.eachAfter(function (n) {
        for (
          var e = +t(n.data) || 0, r = n.children, i = r && r.length;
          --i >= 0;

        )
          e += r[i].value;
        n.value = e;
      });
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      if (t === n) return t;
      var e = t.ancestors(),
        r = n.ancestors(),
        i = null;
      for (t = e.pop(), n = r.pop(); t === n; )
        (i = t), (t = e.pop()), (n = r.pop());
      return i;
    }
    n.a = function (t) {
      for (var n = this, e = r(n, t), i = [n]; n !== e; )
        (n = n.parent), i.push(n);
      for (var o = i.length; t !== e; ) i.splice(o, 0, t), (t = t.parent);
      return i;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
      return n;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = [];
      return (
        this.each(function (n) {
          t.push(n);
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = [];
      return (
        this.eachBefore(function (n) {
          n.children || t.push(n);
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function () {
      var t = this,
        n = [];
      return (
        t.each(function (e) {
          e !== t && n.push({ source: e.parent, target: e });
        }),
        n
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Math.sqrt(t.value);
    }
    function i(t) {
      return function (n) {
        n.children || (n.r = Math.max(0, +t(n) || 0));
      };
    }
    function o(t, n) {
      return function (e) {
        if ((r = e.children)) {
          var r,
            i,
            o,
            u = r.length,
            c = t(e) * n || 0;
          if (c) for (i = 0; i < u; ++i) r[i].r += c;
          if (((o = Object(a.b)(r)), c)) for (i = 0; i < u; ++i) r[i].r -= c;
          e.r = o + c;
        }
      };
    }
    function u(t) {
      return function (n) {
        var e = n.parent;
        (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
      };
    }
    var a = e(189),
      c = e(110),
      s = e(191);
    n.a = function () {
      function t(t) {
        return (
          (t.x = e / 2),
          (t.y = a / 2),
          n
            ? t.eachBefore(i(n)).eachAfter(o(f, 0.5)).eachBefore(u(1))
            : t
                .eachBefore(i(r))
                .eachAfter(o(s.a, 1))
                .eachAfter(o(f, t.r / Math.min(e, a)))
                .eachBefore(u(Math.min(e, a) / (2 * t.r))),
          t
        );
      }
      var n = null,
        e = 1,
        a = 1,
        f = s.a;
      return (
        (t.radius = function (e) {
          return arguments.length ? ((n = Object(c.a)(e)), t) : n;
        }),
        (t.size = function (n) {
          return arguments.length ? ((e = +n[0]), (a = +n[1]), t) : [e, a];
        }),
        (t.padding = function (n) {
          return arguments.length
            ? ((f = "function" == typeof n ? n : Object(s.b)(+n)), t)
            : f;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      for (var n, e, r = t.length; r; )
        (e = (Math.random() * r--) | 0), (n = t[r]), (t[r] = t[e]), (t[e] = n);
      return t;
    }
    e.d(n, "b", function () {
      return i;
    }),
      (n.a = r);
    var i = Array.prototype.slice;
  },
  function (t, n, e) {
    "use strict";
    var r = e(192),
      i = e(45);
    n.a = function () {
      function t(t) {
        var i = t.height + 1;
        return (
          (t.x0 = t.y0 = u),
          (t.x1 = e),
          (t.y1 = o / i),
          t.eachBefore(n(o, i)),
          a && t.eachBefore(r.a),
          t
        );
      }
      function n(t, n) {
        return function (e) {
          e.children &&
            Object(i.a)(
              e,
              e.x0,
              (t * (e.depth + 1)) / n,
              e.x1,
              (t * (e.depth + 2)) / n
            );
          var r = e.x0,
            o = e.y0,
            a = e.x1 - u,
            c = e.y1 - u;
          a < r && (r = a = (r + a) / 2),
            c < o && (o = c = (o + c) / 2),
            (e.x0 = r),
            (e.y0 = o),
            (e.x1 = a),
            (e.y1 = c);
        };
      }
      var e = 1,
        o = 1,
        u = 0,
        a = !1;
      return (
        (t.round = function (n) {
          return arguments.length ? ((a = !!n), t) : a;
        }),
        (t.size = function (n) {
          return arguments.length ? ((e = +n[0]), (o = +n[1]), t) : [e, o];
        }),
        (t.padding = function (n) {
          return arguments.length ? ((u = +n), t) : u;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.id;
    }
    function i(t) {
      return t.parentId;
    }
    var o = e(110),
      u = e(109),
      a = "$",
      c = { depth: -1 },
      s = {};
    n.a = function () {
      function t(t) {
        var r,
          i,
          o,
          f,
          l,
          h,
          d,
          p = t.length,
          v = new Array(p),
          g = {};
        for (i = 0; i < p; ++i)
          (r = t[i]),
            (l = v[i] = new u.a(r)),
            null != (h = n(r, i, t)) &&
              (h += "") &&
              ((d = a + (l.id = h)), (g[d] = d in g ? s : l));
        for (i = 0; i < p; ++i)
          if (((l = v[i]), null != (h = e(t[i], i, t)) && (h += ""))) {
            if (!(f = g[a + h])) throw new Error("missing: " + h);
            if (f === s) throw new Error("ambiguous: " + h);
            f.children ? f.children.push(l) : (f.children = [l]),
              (l.parent = f);
          } else {
            if (o) throw new Error("multiple roots");
            o = l;
          }
        if (!o) throw new Error("no root");
        if (
          ((o.parent = c),
          o
            .eachBefore(function (t) {
              (t.depth = t.parent.depth + 1), --p;
            })
            .eachBefore(u.b),
          (o.parent = null),
          p > 0)
        )
          throw new Error("cycle");
        return o;
      }
      var n = r,
        e = i;
      return (
        (t.id = function (e) {
          return arguments.length ? ((n = Object(o.b)(e)), t) : n;
        }),
        (t.parentId = function (n) {
          return arguments.length ? ((e = Object(o.b)(n)), t) : e;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t.parent === n.parent ? 1 : 2;
    }
    function i(t) {
      var n = t.children;
      return n ? n[0] : t.t;
    }
    function o(t) {
      var n = t.children;
      return n ? n[n.length - 1] : t.t;
    }
    function u(t, n, e) {
      var r = e / (n.i - t.i);
      (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
    }
    function a(t) {
      for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0; )
        (n = i[o]), (n.z += e), (n.m += e), (e += n.s + (r += n.c));
    }
    function c(t, n, e) {
      return t.a.parent === n.parent ? t.a : e;
    }
    function s(t, n) {
      (this._ = t),
        (this.parent = null),
        (this.children = null),
        (this.A = null),
        (this.a = this),
        (this.z = 0),
        (this.m = 0),
        (this.c = 0),
        (this.s = 0),
        (this.t = null),
        (this.i = n);
    }
    function f(t) {
      for (var n, e, r, i, o, u = new s(t, 0), a = [u]; (n = a.pop()); )
        if ((r = n._.children))
          for (n.children = new Array((o = r.length)), i = o - 1; i >= 0; --i)
            a.push((e = n.children[i] = new s(r[i], i))), (e.parent = n);
      return ((u.parent = new s(null, 0)).children = [u]), u;
    }
    var l = e(109);
    (s.prototype = Object.create(l.a.prototype)),
      (n.a = function () {
        function t(t) {
          var r = f(t);
          if ((r.eachAfter(n), (r.parent.m = -r.z), r.eachBefore(e), v))
            t.eachBefore(l);
          else {
            var i = t,
              o = t,
              u = t;
            t.eachBefore(function (t) {
              t.x < i.x && (i = t),
                t.x > o.x && (o = t),
                t.depth > u.depth && (u = t);
            });
            var a = i === o ? 1 : h(i, o) / 2,
              c = a - i.x,
              s = d / (o.x + a + c),
              g = p / (u.depth || 1);
            t.eachBefore(function (t) {
              (t.x = (t.x + c) * s), (t.y = t.depth * g);
            });
          }
          return t;
        }
        function n(t) {
          var n = t.children,
            e = t.parent.children,
            r = t.i ? e[t.i - 1] : null;
          if (n) {
            a(t);
            var i = (n[0].z + n[n.length - 1].z) / 2;
            r ? ((t.z = r.z + h(t._, r._)), (t.m = t.z - i)) : (t.z = i);
          } else r && (t.z = r.z + h(t._, r._));
          t.parent.A = s(t, r, t.parent.A || e[0]);
        }
        function e(t) {
          (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
        }
        function s(t, n, e) {
          if (n) {
            for (
              var r,
                a = t,
                s = t,
                f = n,
                l = a.parent.children[0],
                d = a.m,
                p = s.m,
                v = f.m,
                g = l.m;
              (f = o(f)), (a = i(a)), f && a;

            )
              (l = i(l)),
                (s = o(s)),
                (s.a = t),
                (r = f.z + v - a.z - d + h(f._, a._)),
                r > 0 && (u(c(f, t, e), t, r), (d += r), (p += r)),
                (v += f.m),
                (d += a.m),
                (g += l.m),
                (p += s.m);
            f && !o(s) && ((s.t = f), (s.m += v - p)),
              a && !i(l) && ((l.t = a), (l.m += d - g), (e = t));
          }
          return e;
        }
        function l(t) {
          (t.x *= d), (t.y = t.depth * p);
        }
        var h = r,
          d = 1,
          p = 1,
          v = null;
        return (
          (t.separation = function (n) {
            return arguments.length ? ((h = n), t) : h;
          }),
          (t.size = function (n) {
            return arguments.length
              ? ((v = !1), (d = +n[0]), (p = +n[1]), t)
              : v
              ? null
              : [d, p];
          }),
          (t.nodeSize = function (n) {
            return arguments.length
              ? ((v = !0), (d = +n[0]), (p = +n[1]), t)
              : v
              ? [d, p]
              : null;
          }),
          t
        );
      });
  },
  function (t, n, e) {
    "use strict";
    var r = e(192),
      i = e(111),
      o = e(110),
      u = e(191);
    n.a = function () {
      function t(t) {
        return (
          (t.x0 = t.y0 = 0),
          (t.x1 = c),
          (t.y1 = s),
          t.eachBefore(n),
          (f = [0]),
          a && t.eachBefore(r.a),
          t
        );
      }
      function n(t) {
        var n = f[t.depth],
          r = t.x0 + n,
          i = t.y0 + n,
          o = t.x1 - n,
          u = t.y1 - n;
        o < r && (r = o = (r + o) / 2),
          u < i && (i = u = (i + u) / 2),
          (t.x0 = r),
          (t.y0 = i),
          (t.x1 = o),
          (t.y1 = u),
          t.children &&
            ((n = f[t.depth + 1] = l(t) / 2),
            (r += v(t) - n),
            (i += h(t) - n),
            (o -= d(t) - n),
            (u -= p(t) - n),
            o < r && (r = o = (r + o) / 2),
            u < i && (i = u = (i + u) / 2),
            e(t, r, i, o, u));
      }
      var e = i.a,
        a = !1,
        c = 1,
        s = 1,
        f = [0],
        l = u.a,
        h = u.a,
        d = u.a,
        p = u.a,
        v = u.a;
      return (
        (t.round = function (n) {
          return arguments.length ? ((a = !!n), t) : a;
        }),
        (t.size = function (n) {
          return arguments.length ? ((c = +n[0]), (s = +n[1]), t) : [c, s];
        }),
        (t.tile = function (n) {
          return arguments.length ? ((e = Object(o.b)(n)), t) : e;
        }),
        (t.padding = function (n) {
          return arguments.length
            ? t.paddingInner(n).paddingOuter(n)
            : t.paddingInner();
        }),
        (t.paddingInner = function (n) {
          return arguments.length
            ? ((l = "function" == typeof n ? n : Object(u.b)(+n)), t)
            : l;
        }),
        (t.paddingOuter = function (n) {
          return arguments.length
            ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n)
            : t.paddingTop();
        }),
        (t.paddingTop = function (n) {
          return arguments.length
            ? ((h = "function" == typeof n ? n : Object(u.b)(+n)), t)
            : h;
        }),
        (t.paddingRight = function (n) {
          return arguments.length
            ? ((d = "function" == typeof n ? n : Object(u.b)(+n)), t)
            : d;
        }),
        (t.paddingBottom = function (n) {
          return arguments.length
            ? ((p = "function" == typeof n ? n : Object(u.b)(+n)), t)
            : p;
        }),
        (t.paddingLeft = function (n) {
          return arguments.length
            ? ((v = "function" == typeof n ? n : Object(u.b)(+n)), t)
            : v;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e, r, i) {
      function o(t, n, e, r, i, u, a) {
        if (t >= n - 1) {
          var s = c[t];
          return (s.x0 = r), (s.y0 = i), (s.x1 = u), (s.y1 = a), void 0;
        }
        for (var l = f[t], h = e / 2 + l, d = t + 1, p = n - 1; d < p; ) {
          var v = (d + p) >>> 1;
          f[v] < h ? (d = v + 1) : (p = v);
        }
        h - f[d - 1] < f[d] - h && t + 1 < d && --d;
        var g = f[d] - l,
          b = e - g;
        if (u - r > a - i) {
          var m = (r * b + u * g) / e;
          o(t, d, g, r, i, m, a), o(d, n, b, m, i, u, a);
        } else {
          var y = (i * b + a * g) / e;
          o(t, d, g, r, i, u, y), o(d, n, b, r, y, u, a);
        }
      }
      var u,
        a,
        c = t.children,
        s = c.length,
        f = new Array(s + 1);
      for (f[0] = a = u = 0; u < s; ++u) f[u + 1] = a += c[u].value;
      o(0, s, t.value, n, e, r, i);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(45),
      i = e(70);
    n.a = function (t, n, e, o, u) {
      (1 & t.depth ? i.a : r.a)(t, n, e, o, u);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(45),
      i = e(70),
      o = e(111);
    n.a = (function t(n) {
      function e(t, e, u, a, c) {
        if ((s = t._squarify) && s.ratio === n)
          for (
            var s, f, l, h, d, p = -1, v = s.length, g = t.value;
            ++p < v;

          ) {
            for (
              f = s[p], l = f.children, h = f.value = 0, d = l.length;
              h < d;
              ++h
            )
              f.value += l[h].value;
            f.dice
              ? Object(r.a)(f, e, u, a, (u += ((c - u) * f.value) / g))
              : Object(i.a)(f, e, u, (e += ((a - e) * f.value) / g), c),
              (g -= f.value);
          }
        else (t._squarify = s = Object(o.c)(n, t, e, u, a, c)), (s.ratio = n);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })(o.b);
  },
  function (t, n, e) {
    "use strict";
    var r = e(442);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(443);
    e.d(n, "b", function () {
      return i.a;
    });
    var o = e(444);
    e.d(n, "d", function () {
      return o.a;
    });
    var u = e(446);
    e.d(n, "c", function () {
      return u.a;
    });
    var a = e(447);
    e.d(n, "e", function () {
      return a.a;
    });
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
        (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
      return o / 2;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (
        var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0;
        ++r < i;

      )
        (n = a),
          (a = t[r]),
          (c += e = n[0] * a[1] - a[0] * n[1]),
          (o += (n[0] + a[0]) * e),
          (u += (n[1] + a[1]) * e);
      return (c *= 3), [o / c, u / c];
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t[0] - n[0] || t[1] - n[1];
    }
    function i(t) {
      for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
        for (; r > 1 && Object(o.a)(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; ) --r;
        e[r++] = i;
      }
      return e.slice(0, r);
    }
    var o = e(445);
    n.a = function (t) {
      if ((e = t.length) < 3) return null;
      var n,
        e,
        o = new Array(e),
        u = new Array(e);
      for (n = 0; n < e; ++n) o[n] = [+t[n][0], +t[n][1], n];
      for (o.sort(r), n = 0; n < e; ++n) u[n] = [o[n][0], -o[n][1]];
      var a = i(o),
        c = i(u),
        s = c[0] === a[0],
        f = c[c.length - 1] === a[a.length - 1],
        l = [];
      for (n = a.length - 1; n >= 0; --n) l.push(t[o[a[n]][2]]);
      for (n = +s; n < c.length - f; ++n) l.push(t[o[c[n]][2]]);
      return l;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n, e) {
      return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      for (
        var e,
          r,
          i = t.length,
          o = t[i - 1],
          u = n[0],
          a = n[1],
          c = o[0],
          s = o[1],
          f = !1,
          l = 0;
        l < i;
        ++l
      )
        (o = t[l]),
          (e = o[0]),
          (r = o[1]),
          r > a != s > a && u < ((c - e) * (a - r)) / (s - r) + e && (f = !f),
          (c = e),
          (s = r);
      return f;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      for (
        var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0;
        ++r < i;

      )
        (n = u),
          (e = a),
          (o = t[r]),
          (u = o[0]),
          (a = o[1]),
          (n -= u),
          (e -= a),
          (c += Math.sqrt(n * n + e * e));
      return c;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(449);
    e.d(n, "a", function () {
      return r.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      (this._size = t),
        (this._call = this._error = null),
        (this._tasks = []),
        (this._data = []),
        (this._waiting = this._active = this._ended = this._start = 0);
    }
    function i(t) {
      if (!t._start)
        try {
          o(t);
        } catch (n) {
          if (t._tasks[t._ended + t._active - 1]) a(t, n);
          else if (!t._data) throw n;
        }
    }
    function o(t) {
      for (; (t._start = t._waiting && t._active < t._size); ) {
        var n = t._ended + t._active,
          e = t._tasks[n],
          r = e.length - 1,
          i = e[r];
        (e[r] = u(t, n)),
          --t._waiting,
          ++t._active,
          (e = i.apply(null, e)),
          t._tasks[n] && (t._tasks[n] = e || l);
      }
    }
    function u(t, n) {
      return function (e, r) {
        t._tasks[n] &&
          (--t._active,
          ++t._ended,
          (t._tasks[n] = null),
          null == t._error &&
            (null != e
              ? a(t, e)
              : ((t._data[n] = r), t._waiting ? i(t) : c(t))));
      };
    }
    function a(t, n) {
      var e,
        r = t._tasks.length;
      for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0; )
        if ((e = t._tasks[r]) && ((t._tasks[r] = null), e.abort))
          try {
            e.abort();
          } catch (n) {}
      (t._active = NaN), c(t);
    }
    function c(t) {
      if (!t._active && t._call) {
        var n = t._data;
        (t._data = void 0), t._call(t._error, n);
      }
    }
    function s(t) {
      if (null == t) t = 1 / 0;
      else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
      return new r(t);
    }
    n.a = s;
    var f = e(450),
      l = {};
    r.prototype = s.prototype = {
      constructor: r,
      defer: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("defer after await");
        if (null != this._error) return this;
        var n = f.a.call(arguments, 1);
        return n.push(t), ++this._waiting, this._tasks.push(n), i(this), this;
      },
      abort: function () {
        return null == this._error && a(this, new Error("abort")), this;
      },
      await: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("multiple await");
        return (
          (this._call = function (n, e) {
            t.apply(null, [n].concat(e));
          }),
          c(this),
          this
        );
      },
      awaitAll: function (t) {
        if ("function" != typeof t) throw new Error("invalid callback");
        if (this._call) throw new Error("multiple await");
        return (this._call = t), c(this), this;
      },
    };
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return r;
    });
    var r = [].slice;
  },
  function (t, n, e) {
    "use strict";
    var r = e(452);
    e.d(n, "f", function () {
      return r.a;
    });
    var i = e(193);
    e.d(n, "e", function () {
      return i.a;
    });
    var o = e(453);
    e.d(n, "d", function () {
      return o.a;
    });
    var u = e(454);
    e.d(n, "a", function () {
      return u.a;
    });
    var a = e(194);
    e.d(n, "c", function () {
      return a.a;
    });
    var c = e(455);
    e.d(n, "b", function () {
      return c.a;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(31);
    n.a = (function t(n) {
      function e(t, e) {
        return (
          (t = null == t ? 0 : +t),
          (e = null == e ? 1 : +e),
          1 === arguments.length ? ((e = t), (t = 0)) : (e -= t),
          function () {
            return n() * e + t;
          }
        );
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(31),
      i = e(193);
    n.a = (function t(n) {
      function e() {
        var t = i.a.source(n).apply(this, arguments);
        return function () {
          return Math.exp(t());
        };
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(31),
      i = e(194);
    n.a = (function t(n) {
      function e(t) {
        var e = i.a.source(n)(t);
        return function () {
          return e() / t;
        };
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(31);
    n.a = (function t(n) {
      function e(t) {
        return function () {
          return -Math.log(1 - n()) / t;
        };
      }
      return (e.source = t), e;
    })(r.a);
  },
  function (t, n, e) {
    "use strict";
    var r = e(112);
    e.d(n, "d", function () {
      return r.a;
    });
    var i = e(457);
    e.d(n, "b", function () {
      return i.a;
    });
    var o = e(458);
    e.d(n, "c", function () {
      return o.a;
    });
    var u = e(459);
    e.d(n, "e", function () {
      return u.a;
    });
    var a = e(460);
    e.d(n, "g", function () {
      return a.a;
    });
    var c = e(461);
    e.d(n, "a", function () {
      return c.a;
    });
    var s = e(462);
    e.d(n, "f", function () {
      return s.a;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(71);
    n.a = Object(r.a)("text/html", function (t) {
      return document.createRange().createContextualFragment(t.responseText);
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(71);
    n.a = Object(r.a)("application/json", function (t) {
      return JSON.parse(t.responseText);
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(71);
    n.a = Object(r.a)("text/plain", function (t) {
      return t.responseText;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(71);
    n.a = Object(r.a)("application/xml", function (t) {
      var n = t.responseXML;
      if (!n) throw new Error("parse error");
      return n;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(97),
      i = e(195);
    n.a = Object(i.a)("text/csv", r.c);
  },
  function (t, n, e) {
    "use strict";
    var r = e(97),
      i = e(195);
    n.a = Object(i.a)("text/tab-separated-values", r.h);
  },
  function (t, n, e) {
    "use strict";
    var r = e(464);
    e.d(n, "i", function () {
      return r.a;
    }),
      e.d(n, "o", function () {
        return r.b;
      });
    var i = e(465);
    e.d(n, "j", function () {
      return i.a;
    });
    var o = e(46);
    e.d(n, "l", function () {
      return o.a;
    });
    var u = e(467);
    e.d(n, "m", function () {
      return u.a;
    });
    var a = e(196);
    e.d(n, "n", function () {
      return a.a;
    }),
      e.d(n, "k", function () {
        return a.b;
      });
    var c = e(468);
    e.d(n, "p", function () {
      return c.a;
    }),
      e.d(n, "t", function () {
        return c.b;
      });
    var s = e(469);
    e.d(n, "q", function () {
      return s.a;
    });
    var f = e(470);
    e.d(n, "r", function () {
      return f.a;
    });
    var l = e(471);
    e.d(n, "u", function () {
      return l.a;
    });
    var h = e(199);
    e.d(n, "v", function () {
      return h.b;
    });
    var d = e(487);
    e.d(n, "w", function () {
      return d.a;
    });
    var p = e(488);
    e.d(n, "x", function () {
      return p.a;
    });
    var v = e(489);
    e.d(n, "z", function () {
      return v.a;
    });
    var g = e(490);
    e.d(n, "A", function () {
      return g.a;
    });
    var b = e(491);
    e.d(n, "y", function () {
      return b.a;
    });
    var m = e(492);
    e.d(n, "b", function () {
      return m.a;
    });
    var y = e(493);
    e.d(n, "f", function () {
      return y.b;
    }),
      e.d(n, "h", function () {
        return y.c;
      }),
      e.d(n, "a", function () {
        return y.a;
      });
    var _ = e(494);
    e.d(n, "g", function () {
      return _.a;
    }),
      e.d(n, "d", function () {
        return _.c;
      }),
      e.d(n, "c", function () {
        return _.b;
      }),
      e.d(n, "e", function () {
        return _.d;
      });
    var O = e(495);
    e.d(n, "s", function () {
      return O.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r() {
      function t() {
        var t = o().length,
          r = s[1] < s[0],
          i = s[r - 0],
          a = s[1 - r];
        (n = (a - i) / Math.max(1, t - l + 2 * h)),
          f && (n = Math.floor(n)),
          (i += (a - i - n * (t - l)) * d),
          (e = n * (1 - l)),
          f && ((i = Math.round(i)), (e = Math.round(e)));
        var p = Object(u.s)(t).map(function (t) {
          return i + n * t;
        });
        return c(r ? p.reverse() : p);
      }
      var n,
        e,
        i = Object(a.a)().unknown(void 0),
        o = i.domain,
        c = i.range,
        s = [0, 1],
        f = !1,
        l = 0,
        h = 0,
        d = 0.5;
      return (
        delete i.unknown,
        (i.domain = function (n) {
          return arguments.length ? (o(n), t()) : o();
        }),
        (i.range = function (n) {
          return arguments.length ? ((s = [+n[0], +n[1]]), t()) : s.slice();
        }),
        (i.rangeRound = function (n) {
          return (s = [+n[0], +n[1]]), (f = !0), t();
        }),
        (i.bandwidth = function () {
          return e;
        }),
        (i.step = function () {
          return n;
        }),
        (i.round = function (n) {
          return arguments.length ? ((f = !!n), t()) : f;
        }),
        (i.padding = function (n) {
          return arguments.length
            ? ((l = h = Math.max(0, Math.min(1, n))), t())
            : l;
        }),
        (i.paddingInner = function (n) {
          return arguments.length
            ? ((l = Math.max(0, Math.min(1, n))), t())
            : l;
        }),
        (i.paddingOuter = function (n) {
          return arguments.length
            ? ((h = Math.max(0, Math.min(1, n))), t())
            : h;
        }),
        (i.align = function (n) {
          return arguments.length
            ? ((d = Math.max(0, Math.min(1, n))), t())
            : d;
        }),
        (i.copy = function () {
          return r()
            .domain(o())
            .range(s)
            .round(f)
            .paddingInner(l)
            .paddingOuter(h)
            .align(d);
        }),
        t()
      );
    }
    function i(t) {
      var n = t.copy;
      return (
        (t.padding = t.paddingOuter),
        delete t.paddingInner,
        delete t.paddingOuter,
        (t.copy = function () {
          return i(n());
        }),
        t
      );
    }
    function o() {
      return i(r().paddingInner(1));
    }
    (n.a = r), (n.b = o);
    var u = e(8),
      a = e(196);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      function t(t) {
        return +t;
      }
      var n = [0, 1];
      return (
        (t.invert = t),
        (t.domain = t.range = function (e) {
          return arguments.length ? ((n = i.a.call(e, u.a)), t) : n.slice();
        }),
        (t.copy = function () {
          return r().domain(n);
        }),
        Object(o.b)(t)
      );
    }
    n.a = r;
    var i = e(25),
      o = e(46),
      u = e(197);
  },
  function (t, n, e) {
    "use strict";
    var r = e(8),
      i = e(102);
    n.a = function (t, n, e) {
      var o,
        u = t[0],
        a = t[t.length - 1],
        c = Object(r.A)(u, a, null == n ? 10 : n);
      switch (((e = Object(i.e)(null == e ? ",f" : e)), e.type)) {
        case "s":
          var s = Math.max(Math.abs(u), Math.abs(a));
          return (
            null != e.precision ||
              isNaN((o = Object(i.g)(c, s))) ||
              (e.precision = o),
            Object(i.d)(e, s)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != e.precision ||
            isNaN((o = Object(i.h)(c, Math.max(Math.abs(u), Math.abs(a))))) ||
            (e.precision = o - ("e" === e.type));
          break;
        case "f":
        case "%":
          null != e.precision ||
            isNaN((o = Object(i.f)(c))) ||
            (e.precision = o - 2 * ("%" === e.type));
      }
      return Object(i.a)(e);
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return (n = Math.log(n / t))
        ? function (e) {
            return Math.log(e / t) / n;
          }
        : Object(h.a)(n);
    }
    function i(t, n) {
      return t < 0
        ? function (e) {
            return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
          }
        : function (e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e);
          };
    }
    function o(t) {
      return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
    }
    function u(t) {
      return 10 === t
        ? o
        : t === Math.E
        ? Math.exp
        : function (n) {
            return Math.pow(t, n);
          };
    }
    function a(t) {
      return t === Math.E
        ? Math.log
        : (10 === t && Math.log10) ||
            (2 === t && Math.log2) ||
            ((t = Math.log(t)),
            function (n) {
              return Math.log(n) / t;
            });
    }
    function c(t) {
      return function (n) {
        return -t(-n);
      };
    }
    function s() {
      function t() {
        return (
          (h = a(o)), (v = u(o)), e()[0] < 0 && ((h = c(h)), (v = c(v))), n
        );
      }
      var n = Object(p.b)(r, i).domain([1, 10]),
        e = n.domain,
        o = 10,
        h = a(10),
        v = u(10);
      return (
        (n.base = function (n) {
          return arguments.length ? ((o = +n), t()) : o;
        }),
        (n.domain = function (n) {
          return arguments.length ? (e(n), t()) : e();
        }),
        (n.ticks = function (t) {
          var n,
            r = e(),
            i = r[0],
            u = r[r.length - 1];
          (n = u < i) && ((l = i), (i = u), (u = l));
          var a,
            c,
            s,
            l = h(i),
            d = h(u),
            p = null == t ? 10 : +t,
            g = [];
          if (!(o % 1) && d - l < p) {
            if (((l = Math.round(l) - 1), (d = Math.round(d) + 1), i > 0)) {
              for (; l < d; ++l)
                for (c = 1, a = v(l); c < o; ++c)
                  if (!((s = a * c) < i)) {
                    if (s > u) break;
                    g.push(s);
                  }
            } else
              for (; l < d; ++l)
                for (c = o - 1, a = v(l); c >= 1; --c)
                  if (!((s = a * c) < i)) {
                    if (s > u) break;
                    g.push(s);
                  }
          } else g = Object(f.B)(l, d, Math.min(d - l, p)).map(v);
          return n ? g.reverse() : g;
        }),
        (n.tickFormat = function (t, e) {
          if (
            (null == e && (e = 10 === o ? ".0e" : ","),
            "function" != typeof e && (e = Object(l.a)(e)),
            t === 1 / 0)
          )
            return e;
          null == t && (t = 10);
          var r = Math.max(1, (o * t) / n.ticks().length);
          return function (t) {
            var n = t / v(Math.round(h(t)));
            return n * o < o - 0.5 && (n *= o), n <= r ? e(t) : "";
          };
        }),
        (n.nice = function () {
          return e(
            Object(d.a)(e(), {
              floor: function (t) {
                return v(Math.floor(h(t)));
              },
              ceil: function (t) {
                return v(Math.ceil(h(t)));
              },
            })
          );
        }),
        (n.copy = function () {
          return Object(p.a)(n, s().base(o));
        }),
        n
      );
    }
    n.a = s;
    var f = e(8),
      l = e(102),
      h = e(113),
      d = e(198),
      p = e(72);
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
    }
    function i() {
      function t(t, n) {
        return (n = r(n, e) - (t = r(t, e)))
          ? function (i) {
              return (r(i, e) - t) / n;
            }
          : Object(u.a)(n);
      }
      function n(t, n) {
        return (
          (n = r(n, e) - (t = r(t, e))),
          function (i) {
            return r(t + n * i, 1 / e);
          }
        );
      }
      var e = 1,
        o = Object(c.b)(t, n),
        s = o.domain;
      return (
        (o.exponent = function (t) {
          return arguments.length ? ((e = +t), s(s())) : e;
        }),
        (o.copy = function () {
          return Object(c.a)(o, i().exponent(e));
        }),
        Object(a.b)(o)
      );
    }
    function o() {
      return i().exponent(0.5);
    }
    (n.a = i), (n.b = o);
    var u = e(113),
      a = e(46),
      c = e(72);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      function t() {
        var t = 0,
          r = Math.max(1, u.length);
        for (a = new Array(r - 1); ++t < r; ) a[t - 1] = Object(i.r)(e, t / r);
        return n;
      }
      function n(t) {
        if (!isNaN((t = +t))) return u[Object(i.b)(a, t)];
      }
      var e = [],
        u = [],
        a = [];
      return (
        (n.invertExtent = function (t) {
          var n = u.indexOf(t);
          return n < 0
            ? [NaN, NaN]
            : [n > 0 ? a[n - 1] : e[0], n < a.length ? a[n] : e[e.length - 1]];
        }),
        (n.domain = function (n) {
          if (!arguments.length) return e.slice();
          e = [];
          for (var r, o = 0, u = n.length; o < u; ++o)
            null == (r = n[o]) || isNaN((r = +r)) || e.push(r);
          return e.sort(i.a), t();
        }),
        (n.range = function (n) {
          return arguments.length ? ((u = o.b.call(n)), t()) : u.slice();
        }),
        (n.quantiles = function () {
          return a.slice();
        }),
        (n.copy = function () {
          return r().domain(e).range(u);
        }),
        n
      );
    }
    n.a = r;
    var i = e(8),
      o = e(25);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      function t(t) {
        if (t <= t) return f[Object(i.b)(s, t, 0, c)];
      }
      function n() {
        var n = -1;
        for (s = new Array(c); ++n < c; )
          s[n] = ((n + 1) * a - (n - c) * e) / (c + 1);
        return t;
      }
      var e = 0,
        a = 1,
        c = 1,
        s = [0.5],
        f = [0, 1];
      return (
        (t.domain = function (t) {
          return arguments.length ? ((e = +t[0]), (a = +t[1]), n()) : [e, a];
        }),
        (t.range = function (t) {
          return arguments.length
            ? ((c = (f = o.b.call(t)).length - 1), n())
            : f.slice();
        }),
        (t.invertExtent = function (t) {
          var n = f.indexOf(t);
          return n < 0
            ? [NaN, NaN]
            : n < 1
            ? [e, s[0]]
            : n >= c
            ? [s[c - 1], a]
            : [s[n - 1], s[n]];
        }),
        (t.copy = function () {
          return r().domain([e, a]).range(f);
        }),
        Object(u.b)(t)
      );
    }
    n.a = r;
    var i = e(8),
      o = e(25),
      u = e(46);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      function t(t) {
        if (t <= t) return e[Object(i.b)(n, t, 0, u)];
      }
      var n = [0.5],
        e = [0, 1],
        u = 1;
      return (
        (t.domain = function (r) {
          return arguments.length
            ? ((n = o.b.call(r)), (u = Math.min(n.length, e.length - 1)), t)
            : n.slice();
        }),
        (t.range = function (r) {
          return arguments.length
            ? ((e = o.b.call(r)), (u = Math.min(n.length, e.length - 1)), t)
            : e.slice();
        }),
        (t.invertExtent = function (t) {
          var r = e.indexOf(t);
          return [n[r - 1], n[r]];
        }),
        (t.copy = function () {
          return r().domain(n).range(e);
        }),
        t
      );
    }
    n.a = r;
    var i = e(8),
      o = e(25);
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return o;
    });
    var r = e(5),
      i = Object(r.a)(
        function () {},
        function (t, n) {
          t.setTime(+t + n);
        },
        function (t, n) {
          return n - t;
        }
      );
    (i.every = function (t) {
      return (
        (t = Math.floor(t)),
        isFinite(t) && t > 0
          ? t > 1
            ? Object(r.a)(
                function (n) {
                  n.setTime(Math.floor(n / t) * t);
                },
                function (n, e) {
                  n.setTime(+n + e * t);
                },
                function (n, e) {
                  return (e - n) / t;
                }
              )
            : i
          : null
      );
    }),
      (n.a = i);
    var o = i.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setTime(Math.floor(t / i.d) * i.d);
        },
        function (t, n) {
          t.setTime(+t + n * i.d);
        },
        function (t, n) {
          return (n - t) / i.d;
        },
        function (t) {
          return t.getUTCSeconds();
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setTime(Math.floor(t / i.c) * i.c);
        },
        function (t, n) {
          t.setTime(+t + n * i.c);
        },
        function (t, n) {
          return (n - t) / i.c;
        },
        function (t) {
          return t.getMinutes();
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          var n = (t.getTimezoneOffset() * i.c) % i.b;
          n < 0 && (n += i.b), t.setTime(Math.floor((+t - n) / i.b) * i.b + n);
        },
        function (t, n) {
          t.setTime(+t + n * i.b);
        },
        function (t, n) {
          return (n - t) / i.b;
        },
        function (t) {
          return t.getHours();
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "a", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setDate(t.getDate() + n);
        },
        function (t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * i.c) /
            i.a
          );
        },
        function (t) {
          return t.getDate() - 1;
        }
      );
    n.b = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Object(i.a)(
        function (n) {
          n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
            n.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setDate(t.getDate() + 7 * n);
        },
        function (t, n) {
          return (
            (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * o.c) /
            o.e
          );
        }
      );
    }
    e.d(n, "g", function () {
      return u;
    }),
      e.d(n, "c", function () {
        return a;
      }),
      e.d(n, "k", function () {
        return c;
      }),
      e.d(n, "m", function () {
        return s;
      }),
      e.d(n, "i", function () {
        return f;
      }),
      e.d(n, "a", function () {
        return l;
      }),
      e.d(n, "e", function () {
        return h;
      }),
      e.d(n, "h", function () {
        return d;
      }),
      e.d(n, "d", function () {
        return p;
      }),
      e.d(n, "l", function () {
        return v;
      }),
      e.d(n, "n", function () {
        return g;
      }),
      e.d(n, "j", function () {
        return b;
      }),
      e.d(n, "b", function () {
        return m;
      }),
      e.d(n, "f", function () {
        return y;
      });
    var i = e(5),
      o = e(18),
      u = r(0),
      a = r(1),
      c = r(2),
      s = r(3),
      f = r(4),
      l = r(5),
      h = r(6),
      d = u.range,
      p = a.range,
      v = c.range,
      g = s.range,
      b = f.range,
      m = l.range,
      y = h.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return o;
    });
    var r = e(5),
      i = Object(r.a)(
        function (t) {
          t.setDate(1), t.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setMonth(t.getMonth() + n);
        },
        function (t, n) {
          return (
            n.getMonth() -
            t.getMonth() +
            12 * (n.getFullYear() - t.getFullYear())
          );
        },
        function (t) {
          return t.getMonth();
        }
      );
    n.a = i;
    var o = i.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return o;
    });
    var r = e(5),
      i = Object(r.a)(
        function (t) {
          t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setFullYear(t.getFullYear() + n);
        },
        function (t, n) {
          return n.getFullYear() - t.getFullYear();
        },
        function (t) {
          return t.getFullYear();
        }
      );
    (i.every = function (t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? Object(r.a)(
            function (n) {
              n.setFullYear(Math.floor(n.getFullYear() / t) * t),
                n.setMonth(0, 1),
                n.setHours(0, 0, 0, 0);
            },
            function (n, e) {
              n.setFullYear(n.getFullYear() + e * t);
            }
          )
        : null;
    }),
      (n.a = i);
    var o = i.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setUTCSeconds(0, 0);
        },
        function (t, n) {
          t.setTime(+t + n * i.c);
        },
        function (t, n) {
          return (n - t) / i.c;
        },
        function (t) {
          return t.getUTCMinutes();
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setUTCMinutes(0, 0, 0);
        },
        function (t, n) {
          t.setTime(+t + n * i.b);
        },
        function (t, n) {
          return (n - t) / i.b;
        },
        function (t) {
          return t.getUTCHours();
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return u;
    });
    var r = e(5),
      i = e(18),
      o = Object(r.a)(
        function (t) {
          t.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCDate(t.getUTCDate() + n);
        },
        function (t, n) {
          return (n - t) / i.a;
        },
        function (t) {
          return t.getUTCDate() - 1;
        }
      );
    n.a = o;
    var u = o.range;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return Object(i.a)(
        function (n) {
          n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
            n.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCDate(t.getUTCDate() + 7 * n);
        },
        function (t, n) {
          return (n - t) / o.e;
        }
      );
    }
    e.d(n, "g", function () {
      return u;
    }),
      e.d(n, "c", function () {
        return a;
      }),
      e.d(n, "k", function () {
        return c;
      }),
      e.d(n, "m", function () {
        return s;
      }),
      e.d(n, "i", function () {
        return f;
      }),
      e.d(n, "a", function () {
        return l;
      }),
      e.d(n, "e", function () {
        return h;
      }),
      e.d(n, "h", function () {
        return d;
      }),
      e.d(n, "d", function () {
        return p;
      }),
      e.d(n, "l", function () {
        return v;
      }),
      e.d(n, "n", function () {
        return g;
      }),
      e.d(n, "j", function () {
        return b;
      }),
      e.d(n, "b", function () {
        return m;
      }),
      e.d(n, "f", function () {
        return y;
      });
    var i = e(5),
      o = e(18),
      u = r(0),
      a = r(1),
      c = r(2),
      s = r(3),
      f = r(4),
      l = r(5),
      h = r(6),
      d = u.range,
      p = a.range,
      v = c.range,
      g = s.range,
      b = f.range,
      m = l.range,
      y = h.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return o;
    });
    var r = e(5),
      i = Object(r.a)(
        function (t) {
          t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCMonth(t.getUTCMonth() + n);
        },
        function (t, n) {
          return (
            n.getUTCMonth() -
            t.getUTCMonth() +
            12 * (n.getUTCFullYear() - t.getUTCFullYear())
          );
        },
        function (t) {
          return t.getUTCMonth();
        }
      );
    n.a = i;
    var o = i.range;
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return o;
    });
    var r = e(5),
      i = Object(r.a)(
        function (t) {
          t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
        },
        function (t, n) {
          t.setUTCFullYear(t.getUTCFullYear() + n);
        },
        function (t, n) {
          return n.getUTCFullYear() - t.getUTCFullYear();
        },
        function (t) {
          return t.getUTCFullYear();
        }
      );
    (i.every = function (t) {
      return isFinite((t = Math.floor(t))) && t > 0
        ? Object(r.a)(
            function (n) {
              n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
                n.setUTCMonth(0, 1),
                n.setUTCHours(0, 0, 0, 0);
            },
            function (n, e) {
              n.setUTCFullYear(n.getUTCFullYear() + e * t);
            }
          )
        : null;
    }),
      (n.a = i);
    var o = i.range;
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = new Date(t);
      return isNaN(n) ? null : n;
    }
    var i = e(201),
      o = e(115),
      u = +new Date("2000-01-01T00:00:00.000Z") ? r : Object(o.e)(i.b);
    n.a = u;
  },
  function (t, n, e) {
    "use strict";
    var r = e(199),
      i = e(114),
      o = e(73);
    n.a = function () {
      return Object(r.a)(o._7, o.R, o._5, o.F, o.J, o.N, o.V, o.L, i.g).domain([
        Date.UTC(2e3, 0, 1),
        Date.UTC(2e3, 0, 2),
      ]);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(47);
    n.a = Object(r.a)(
      "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
    );
  },
  function (t, n, e) {
    "use strict";
    var r = e(47);
    n.a = Object(r.a)(
      "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
    );
  },
  function (t, n, e) {
    "use strict";
    var r = e(47);
    n.a = Object(r.a)(
      "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
    );
  },
  function (t, n, e) {
    "use strict";
    var r = e(47);
    n.a = Object(r.a)(
      "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
    );
  },
  function (t, n, e) {
    "use strict";
    var r = e(13),
      i = e(11);
    n.a = Object(i.f)(Object(r.b)(300, 0.5, 0), Object(r.b)(-240, 0.5, 1));
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "c", function () {
      return o;
    }),
      e.d(n, "a", function () {
        return u;
      });
    var r = e(13),
      i = e(11),
      o = Object(i.f)(Object(r.b)(-100, 0.75, 0.35), Object(r.b)(80, 1.5, 0.8)),
      u = Object(i.f)(Object(r.b)(260, 0.75, 0.35), Object(r.b)(80, 1.5, 0.8)),
      a = Object(r.b)();
    n.b = function (t) {
      (t < 0 || t > 1) && (t -= Math.floor(t));
      var n = Math.abs(t - 0.5);
      return (
        (a.h = 360 * t - 100),
        (a.s = 1.5 - 1.5 * n),
        (a.l = 0.8 - 0.9 * n),
        a + ""
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      var n = t.length;
      return function (e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }
    e.d(n, "c", function () {
      return o;
    }),
      e.d(n, "b", function () {
        return u;
      }),
      e.d(n, "d", function () {
        return a;
      });
    var i = e(47);
    n.a = r(
      Object(i.a)(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    );
    var o = r(
        Object(i.a)(
          "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
        )
      ),
      u = r(
        Object(i.a)(
          "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
        )
      ),
      a = r(
        Object(i.a)(
          "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
        )
      );
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      function n(n) {
        var r = (n - e) / (o - e);
        return t(u ? Math.max(0, Math.min(1, r)) : r);
      }
      var e = 0,
        o = 1,
        u = !1;
      return (
        (n.domain = function (t) {
          return arguments.length ? ((e = +t[0]), (o = +t[1]), n) : [e, o];
        }),
        (n.clamp = function (t) {
          return arguments.length ? ((u = !!t), n) : u;
        }),
        (n.interpolator = function (e) {
          return arguments.length ? ((t = e), n) : t;
        }),
        (n.copy = function () {
          return r(t).domain([e, o]).clamp(u);
        }),
        Object(i.b)(n)
      );
    }
    n.a = r;
    var i = e(46);
  },
  function (t, n, e) {
    "use strict";
    var r = e(497);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(202);
    e.d(n, "b", function () {
      return i.a;
    });
    var o = e(116);
    e.d(n, "v", function () {
      return o.a;
    });
    var u = e(498);
    e.d(n, "A", function () {
      return u.a;
    });
    var a = e(501);
    e.d(n, "c", function () {
      return a.a;
    }),
      e.d(n, "C", function () {
        return a.a;
      });
    var c = e(204);
    e.d(n, "w", function () {
      return c.a;
    }),
      e.d(n, "D", function () {
        return c.a;
      });
    var s = e(205);
    e.d(n, "B", function () {
      return s.a;
    });
    var f = e(502);
    e.d(n, "x", function () {
      return f.a;
    }),
      e.d(n, "z", function () {
        return f.c;
      }),
      e.d(n, "y", function () {
        return f.b;
      });
    var l = e(503);
    e.d(n, "P", function () {
      return l.a;
    }),
      e.d(n, "X", function () {
        return l.b;
      });
    var h = e(207);
    e.d(n, "Q", function () {
      return h.a;
    });
    var d = e(208);
    e.d(n, "R", function () {
      return d.a;
    });
    var p = e(209);
    e.d(n, "S", function () {
      return p.a;
    });
    var v = e(211);
    e.d(n, "T", function () {
      return v.a;
    });
    var g = e(210);
    e.d(n, "U", function () {
      return g.a;
    });
    var b = e(212);
    e.d(n, "V", function () {
      return b.a;
    });
    var m = e(213);
    e.d(n, "W", function () {
      return m.a;
    });
    var y = e(504);
    e.d(n, "e", function () {
      return y.a;
    });
    var _ = e(505);
    e.d(n, "f", function () {
      return _.a;
    });
    var O = e(76);
    e.d(n, "d", function () {
      return O.b;
    });
    var x = e(506);
    e.d(n, "g", function () {
      return x.a;
    });
    var w = e(214);
    e.d(n, "i", function () {
      return w.b;
    });
    var j = e(215);
    e.d(n, "j", function () {
      return j.b;
    });
    var T = e(77);
    e.d(n, "h", function () {
      return T.b;
    });
    var E = e(507);
    e.d(n, "l", function () {
      return E.a;
    });
    var C = e(508);
    e.d(n, "m", function () {
      return C.a;
    });
    var A = e(118);
    e.d(n, "k", function () {
      return A.a;
    });
    var S = e(509);
    e.d(n, "o", function () {
      return S.a;
    });
    var M = e(74);
    e.d(n, "n", function () {
      return M.a;
    });
    var N = e(510);
    e.d(n, "p", function () {
      return N.a;
    }),
      e.d(n, "q", function () {
        return N.b;
      });
    var D = e(511);
    e.d(n, "r", function () {
      return D.a;
    });
    var k = e(512);
    e.d(n, "s", function () {
      return k.a;
    }),
      e.d(n, "t", function () {
        return k.b;
      }),
      e.d(n, "u", function () {
        return k.c;
      });
    var I = e(513);
    e.d(n, "E", function () {
      return I.a;
    });
    var L = e(514);
    e.d(n, "G", function () {
      return L.a;
    });
    var P = e(515);
    e.d(n, "F", function () {
      return P.a;
    });
    var R = e(49);
    e.d(n, "H", function () {
      return R.a;
    });
    var H = e(516);
    e.d(n, "I", function () {
      return H.a;
    });
    var F = e(517);
    e.d(n, "J", function () {
      return F.a;
    });
    var q = e(119);
    e.d(n, "K", function () {
      return q.a;
    });
    var U = e(518);
    e.d(n, "L", function () {
      return U.a;
    });
    var W = e(519);
    e.d(n, "M", function () {
      return W.a;
    });
    var B = e(50);
    e.d(n, "N", function () {
      return B.a;
    });
    var z = e(520);
    e.d(n, "O", function () {
      return z.a;
    });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.innerRadius;
    }
    function i(t) {
      return t.outerRadius;
    }
    function o(t) {
      return t.startAngle;
    }
    function u(t) {
      return t.endAngle;
    }
    function a(t) {
      return t && t.padAngle;
    }
    function c(t, n, e, r, i, o, u, a) {
      var c = e - t,
        s = r - n,
        f = u - i,
        l = a - o,
        h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
      return [t + h * c, n + h * s];
    }
    function s(t, n, e, r, i, o, u) {
      var a = t - e,
        c = n - r,
        s = (u ? o : -o) / Object(h.l)(a * a + c * c),
        f = s * c,
        l = -s * a,
        d = t + f,
        p = n + l,
        v = e + f,
        g = r + l,
        b = (d + v) / 2,
        m = (p + g) / 2,
        y = v - d,
        _ = g - p,
        O = y * y + _ * _,
        x = i - o,
        w = d * g - v * p,
        j = (_ < 0 ? -1 : 1) * Object(h.l)(Object(h.h)(0, x * x * O - w * w)),
        T = (w * _ - y * j) / O,
        E = (-w * y - _ * j) / O,
        C = (w * _ + y * j) / O,
        A = (-w * y + _ * j) / O,
        S = T - b,
        M = E - m,
        N = C - b,
        D = A - m;
      return (
        S * S + M * M > N * N + D * D && ((T = C), (E = A)),
        {
          cx: T,
          cy: E,
          x01: -f,
          y01: -l,
          x11: T * (i / x - 1),
          y11: E * (i / x - 1),
        }
      );
    }
    var f = e(23),
      l = e(26),
      h = e(48);
    n.a = function () {
      function t() {
        var t,
          r,
          i = +n.apply(this, arguments),
          o = +e.apply(this, arguments),
          u = v.apply(this, arguments) - h.g,
          a = g.apply(this, arguments) - h.g,
          l = Object(h.a)(a - u),
          y = a > u;
        if (
          (m || (m = t = Object(f.a)()),
          o < i && ((r = o), (o = i), (i = r)),
          o > h.f)
        )
          if (l > h.m - h.f)
            m.moveTo(o * Object(h.e)(u), o * Object(h.k)(u)),
              m.arc(0, 0, o, u, a, !y),
              i > h.f &&
                (m.moveTo(i * Object(h.e)(a), i * Object(h.k)(a)),
                m.arc(0, 0, i, a, u, y));
          else {
            var _,
              O,
              x = u,
              w = a,
              j = u,
              T = a,
              E = l,
              C = l,
              A = b.apply(this, arguments) / 2,
              S =
                A > h.f &&
                (p ? +p.apply(this, arguments) : Object(h.l)(i * i + o * o)),
              M = Object(h.i)(
                Object(h.a)(o - i) / 2,
                +d.apply(this, arguments)
              ),
              N = M,
              D = M;
            if (S > h.f) {
              var k = Object(h.c)((S / i) * Object(h.k)(A)),
                I = Object(h.c)((S / o) * Object(h.k)(A));
              (E -= 2 * k) > h.f
                ? ((k *= y ? 1 : -1), (j += k), (T -= k))
                : ((E = 0), (j = T = (u + a) / 2)),
                (C -= 2 * I) > h.f
                  ? ((I *= y ? 1 : -1), (x += I), (w -= I))
                  : ((C = 0), (x = w = (u + a) / 2));
            }
            var L = o * Object(h.e)(x),
              P = o * Object(h.k)(x),
              R = i * Object(h.e)(T),
              H = i * Object(h.k)(T);
            if (M > h.f) {
              var F = o * Object(h.e)(w),
                q = o * Object(h.k)(w),
                U = i * Object(h.e)(j),
                W = i * Object(h.k)(j);
              if (l < h.j) {
                var B = E > h.f ? c(L, P, U, W, F, q, R, H) : [R, H],
                  z = L - B[0],
                  V = P - B[1],
                  Y = F - B[0],
                  G = q - B[1],
                  X =
                    1 /
                    Object(h.k)(
                      Object(h.b)(
                        (z * Y + V * G) /
                          (Object(h.l)(z * z + V * V) *
                            Object(h.l)(Y * Y + G * G))
                      ) / 2
                    ),
                  K = Object(h.l)(B[0] * B[0] + B[1] * B[1]);
                (N = Object(h.i)(M, (i - K) / (X - 1))),
                  (D = Object(h.i)(M, (o - K) / (X + 1)));
              }
            }
            C > h.f
              ? D > h.f
                ? ((_ = s(U, W, L, P, o, D, y)),
                  (O = s(F, q, R, H, o, D, y)),
                  m.moveTo(_.cx + _.x01, _.cy + _.y01),
                  D < M
                    ? m.arc(
                        _.cx,
                        _.cy,
                        D,
                        Object(h.d)(_.y01, _.x01),
                        Object(h.d)(O.y01, O.x01),
                        !y
                      )
                    : (m.arc(
                        _.cx,
                        _.cy,
                        D,
                        Object(h.d)(_.y01, _.x01),
                        Object(h.d)(_.y11, _.x11),
                        !y
                      ),
                      m.arc(
                        0,
                        0,
                        o,
                        Object(h.d)(_.cy + _.y11, _.cx + _.x11),
                        Object(h.d)(O.cy + O.y11, O.cx + O.x11),
                        !y
                      ),
                      m.arc(
                        O.cx,
                        O.cy,
                        D,
                        Object(h.d)(O.y11, O.x11),
                        Object(h.d)(O.y01, O.x01),
                        !y
                      )))
                : (m.moveTo(L, P), m.arc(0, 0, o, x, w, !y))
              : m.moveTo(L, P),
              i > h.f && E > h.f
                ? N > h.f
                  ? ((_ = s(R, H, F, q, i, -N, y)),
                    (O = s(L, P, U, W, i, -N, y)),
                    m.lineTo(_.cx + _.x01, _.cy + _.y01),
                    N < M
                      ? m.arc(
                          _.cx,
                          _.cy,
                          N,
                          Object(h.d)(_.y01, _.x01),
                          Object(h.d)(O.y01, O.x01),
                          !y
                        )
                      : (m.arc(
                          _.cx,
                          _.cy,
                          N,
                          Object(h.d)(_.y01, _.x01),
                          Object(h.d)(_.y11, _.x11),
                          !y
                        ),
                        m.arc(
                          0,
                          0,
                          i,
                          Object(h.d)(_.cy + _.y11, _.cx + _.x11),
                          Object(h.d)(O.cy + O.y11, O.cx + O.x11),
                          y
                        ),
                        m.arc(
                          O.cx,
                          O.cy,
                          N,
                          Object(h.d)(O.y11, O.x11),
                          Object(h.d)(O.y01, O.x01),
                          !y
                        )))
                  : m.arc(0, 0, i, T, j, y)
                : m.lineTo(R, H);
          }
        else m.moveTo(0, 0);
        if ((m.closePath(), t)) return (m = null), t + "" || null;
      }
      var n = r,
        e = i,
        d = Object(l.a)(0),
        p = null,
        v = o,
        g = u,
        b = a,
        m = null;
      return (
        (t.centroid = function () {
          var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
            r =
              (+v.apply(this, arguments) + +g.apply(this, arguments)) / 2 -
              h.j / 2;
          return [Object(h.e)(r) * t, Object(h.k)(r) * t];
        }),
        (t.innerRadius = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(l.a)(+e)), t)
            : n;
        }),
        (t.outerRadius = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : e;
        }),
        (t.cornerRadius = function (n) {
          return arguments.length
            ? ((d = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : d;
        }),
        (t.padRadius = function (n) {
          return arguments.length
            ? ((p =
                null == n
                  ? null
                  : "function" == typeof n
                  ? n
                  : Object(l.a)(+n)),
              t)
            : p;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((v = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : v;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((g = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : g;
        }),
        (t.padAngle = function (n) {
          return arguments.length
            ? ((b = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : b;
        }),
        (t.context = function (n) {
          return arguments.length ? ((m = null == n ? null : n), t) : m;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(26),
      i = e(499),
      o = e(500),
      u = e(48);
    n.a = function () {
      function t(t) {
        var r,
          i,
          o,
          l,
          h,
          d = t.length,
          p = 0,
          v = new Array(d),
          g = new Array(d),
          b = +c.apply(this, arguments),
          m = Math.min(u.m, Math.max(-u.m, s.apply(this, arguments) - b)),
          y = Math.min(Math.abs(m) / d, f.apply(this, arguments)),
          _ = y * (m < 0 ? -1 : 1);
        for (r = 0; r < d; ++r)
          (h = g[(v[r] = r)] = +n(t[r], r, t)) > 0 && (p += h);
        for (
          null != e
            ? v.sort(function (t, n) {
                return e(g[t], g[n]);
              })
            : null != a &&
              v.sort(function (n, e) {
                return a(t[n], t[e]);
              }),
            r = 0,
            o = p ? (m - d * _) / p : 0;
          r < d;
          ++r, b = l
        )
          (i = v[r]),
            (h = g[i]),
            (l = b + (h > 0 ? h * o : 0) + _),
            (g[i] = {
              data: t[i],
              index: r,
              value: h,
              startAngle: b,
              endAngle: l,
              padAngle: y,
            });
        return g;
      }
      var n = o.a,
        e = i.a,
        a = null,
        c = Object(r.a)(0),
        s = Object(r.a)(u.m),
        f = Object(r.a)(0);
      return (
        (t.value = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(r.a)(+e)), t)
            : n;
        }),
        (t.sortValues = function (n) {
          return arguments.length ? ((e = n), (a = null), t) : e;
        }),
        (t.sort = function (n) {
          return arguments.length ? ((a = n), (e = null), t) : a;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((c = "function" == typeof n ? n : Object(r.a)(+n)), t)
            : c;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : Object(r.a)(+n)), t)
            : s;
        }),
        (t.padAngle = function (n) {
          return arguments.length
            ? ((f = "function" == typeof n ? n : Object(r.a)(+n)), t)
            : f;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return t;
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(203),
      i = e(202),
      o = e(204);
    n.a = function () {
      var t = Object(i.a)().curve(r.a),
        n = t.curve,
        e = t.lineX0,
        u = t.lineX1,
        a = t.lineY0,
        c = t.lineY1;
      return (
        (t.angle = t.x),
        delete t.x,
        (t.startAngle = t.x0),
        delete t.x0,
        (t.endAngle = t.x1),
        delete t.x1,
        (t.radius = t.y),
        delete t.y,
        (t.innerRadius = t.y0),
        delete t.y0,
        (t.outerRadius = t.y1),
        delete t.y1,
        (t.lineStartAngle = function () {
          return Object(o.b)(e());
        }),
        delete t.lineX0,
        (t.lineEndAngle = function () {
          return Object(o.b)(u());
        }),
        delete t.lineX1,
        (t.lineInnerRadius = function () {
          return Object(o.b)(a());
        }),
        delete t.lineY0,
        (t.lineOuterRadius = function () {
          return Object(o.b)(c());
        }),
        delete t.lineY1,
        (t.curve = function (t) {
          return arguments.length ? n(Object(r.b)(t)) : n()._curve;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t.source;
    }
    function i(t) {
      return t.target;
    }
    function o(t) {
      function n() {
        var n,
          r = d.a.call(arguments),
          i = e.apply(this, r),
          s = o.apply(this, r);
        if (
          (c || (c = n = Object(h.a)()),
          t(
            c,
            +u.apply(this, ((r[0] = i), r)),
            +a.apply(this, r),
            +u.apply(this, ((r[0] = s), r)),
            +a.apply(this, r)
          ),
          n)
        )
          return (c = null), n + "" || null;
      }
      var e = r,
        o = i,
        u = v.a,
        a = v.b,
        c = null;
      return (
        (n.source = function (t) {
          return arguments.length ? ((e = t), n) : e;
        }),
        (n.target = function (t) {
          return arguments.length ? ((o = t), n) : o;
        }),
        (n.x = function (t) {
          return arguments.length
            ? ((u = "function" == typeof t ? t : Object(p.a)(+t)), n)
            : u;
        }),
        (n.y = function (t) {
          return arguments.length
            ? ((a = "function" == typeof t ? t : Object(p.a)(+t)), n)
            : a;
        }),
        (n.context = function (t) {
          return arguments.length ? ((c = null == t ? null : t), n) : c;
        }),
        n
      );
    }
    function u(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo((n = (n + r) / 2), e, n, i, r, i);
    }
    function a(t, n, e, r, i) {
      t.moveTo(n, e), t.bezierCurveTo(n, (e = (e + i) / 2), r, e, r, i);
    }
    function c(t, n, e, r, i) {
      var o = Object(g.a)(n, e),
        u = Object(g.a)(n, (e = (e + i) / 2)),
        a = Object(g.a)(r, e),
        c = Object(g.a)(r, i);
      t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1]);
    }
    function s() {
      return o(u);
    }
    function f() {
      return o(a);
    }
    function l() {
      var t = o(c);
      return (t.angle = t.x), delete t.x, (t.radius = t.y), delete t.y, t;
    }
    (n.a = s), (n.c = f), (n.b = l);
    var h = e(23),
      d = e(206),
      p = e(26),
      v = e(117),
      g = e(205);
  },
  function (t, n, e) {
    "use strict";
    e.d(n, "b", function () {
      return h;
    });
    var r = e(23),
      i = e(207),
      o = e(208),
      u = e(209),
      a = e(210),
      c = e(211),
      s = e(212),
      f = e(213),
      l = e(26),
      h = [i.a, o.a, u.a, c.a, a.a, s.a, f.a];
    n.a = function () {
      function t() {
        var t;
        if (
          (o || (o = t = Object(r.a)()),
          n.apply(this, arguments).draw(o, +e.apply(this, arguments)),
          t)
        )
          return (o = null), t + "" || null;
      }
      var n = Object(l.a)(i.a),
        e = Object(l.a)(64),
        o = null;
      return (
        (t.type = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(l.a)(e)), t)
            : n;
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(l.a)(+n)), t)
            : e;
        }),
        (t.context = function (n) {
          return arguments.length ? ((o = null == n ? null : n), t) : o;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    var i = e(75),
      o = e(76);
    (r.prototype = {
      areaStart: i.a,
      areaEnd: i.a,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x2, this._y2), this._context.closePath();
            break;
          case 2:
            this._context.moveTo(
              (this._x2 + 2 * this._x3) / 3,
              (this._y2 + 2 * this._y3) / 3
            ),
              this._context.lineTo(
                (this._x3 + 2 * this._x2) / 3,
                (this._y3 + 2 * this._y2) / 3
              ),
              this._context.closePath();
            break;
          case 3:
            this.point(this._x2, this._y2),
              this.point(this._x3, this._y3),
              this.point(this._x4, this._y4);
        }
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x2 = t), (this._y2 = n);
            break;
          case 1:
            (this._point = 2), (this._x3 = t), (this._y3 = n);
            break;
          case 2:
            (this._point = 3),
              (this._x4 = t),
              (this._y4 = n),
              this._context.moveTo(
                (this._x0 + 4 * this._x1 + t) / 6,
                (this._y0 + 4 * this._y1 + n) / 6
              );
            break;
          default:
            Object(o.c)(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    }),
      (n.a = function (t) {
        return new r(t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    var i = e(76);
    (r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
            var e = (this._x0 + 4 * this._x1 + t) / 6,
              r = (this._y0 + 4 * this._y1 + n) / 6;
            this._line
              ? this._context.lineTo(e, r)
              : this._context.moveTo(e, r);
            break;
          case 3:
            this._point = 4;
          default:
            Object(i.c)(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n);
      },
    }),
      (n.a = function (t) {
        return new r(t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._basis = new i.a(t)), (this._beta = n);
    }
    var i = e(76);
    (r.prototype = {
      lineStart: function () {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1;
            ++c <= e;

          )
            (r = c / e),
              this._basis.point(
                this._beta * t[c] + (1 - this._beta) * (i + r * u),
                this._beta * n[c] + (1 - this._beta) * (o + r * a)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    }),
      (n.a = (function t(n) {
        function e(t) {
          return 1 === n ? new i.a(t) : new r(t, n);
        }
        return (
          (e.beta = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.85));
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._context = t), (this._alpha = n);
    }
    var i = e(214),
      o = e(75),
      u = e(118);
    (r.prototype = {
      areaStart: o.a,
      areaEnd: o.a,
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            Object(u.b)(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
      (n.a = (function t(n) {
        function e(t) {
          return n ? new r(t, n) : new i.a(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5));
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._context = t), (this._alpha = n);
    }
    var i = e(215),
      o = e(118);
    (r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Object(o.b)(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
      (n.a = (function t(n) {
        function e(t) {
          return n ? new r(t, n) : new i.a(t, 0);
        }
        return (
          (e.alpha = function (n) {
            return t(+n);
          }),
          e
        );
      })(0.5));
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    var i = e(75);
    (r.prototype = {
      areaStart: i.a,
      areaEnd: i.a,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (t, n) {
        (t = +t),
          (n = +n),
          this._point
            ? this._context.lineTo(t, n)
            : ((this._point = 1), this._context.moveTo(t, n));
      },
    }),
      (n.a = function (t) {
        return new r(t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t < 0 ? -1 : 1;
    }
    function i(t, n, e) {
      var i = t._x1 - t._x0,
        o = n - t._x1,
        u = (t._y1 - t._y0) / (i || (o < 0 && -0)),
        a = (e - t._y1) / (o || (i < 0 && -0)),
        c = (u * o + a * i) / (i + o);
      return (
        (r(u) + r(a)) * Math.min(Math.abs(u), Math.abs(a), 0.5 * Math.abs(c)) ||
        0
      );
    }
    function o(t, n) {
      var e = t._x1 - t._x0;
      return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
    }
    function u(t, n, e) {
      var r = t._x0,
        i = t._y0,
        o = t._x1,
        u = t._y1,
        a = (o - r) / 3;
      t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
    }
    function a(t) {
      this._context = t;
    }
    function c(t) {
      this._context = new s(t);
    }
    function s(t) {
      this._context = t;
    }
    function f(t) {
      return new a(t);
    }
    function l(t) {
      return new c(t);
    }
    (n.a = f),
      (n.b = l),
      (a.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 2:
              this._context.lineTo(this._x1, this._y1);
              break;
            case 3:
              u(this, this._t0, o(this, this._t0));
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, n) {
          var e = NaN;
          if (((t = +t), (n = +n), t !== this._x1 || n !== this._y1)) {
            switch (this._point) {
              case 0:
                (this._point = 1),
                  this._line
                    ? this._context.lineTo(t, n)
                    : this._context.moveTo(t, n);
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                (this._point = 3), u(this, o(this, (e = i(this, t, n))), e);
                break;
              default:
                u(this, this._t0, (e = i(this, t, n)));
            }
            (this._x0 = this._x1),
              (this._x1 = t),
              (this._y0 = this._y1),
              (this._y1 = n),
              (this._t0 = e);
          }
        },
      }),
      ((c.prototype = Object.create(a.prototype)).point = function (t, n) {
        a.prototype.point.call(this, n, t);
      }),
      (s.prototype = {
        moveTo: function (t, n) {
          this._context.moveTo(n, t);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (t, n) {
          this._context.lineTo(n, t);
        },
        bezierCurveTo: function (t, n, e, r, i, o) {
          this._context.bezierCurveTo(n, t, r, e, o, i);
        },
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      this._context = t;
    }
    function i(t) {
      var n,
        e,
        r = t.length - 1,
        i = new Array(r),
        o = new Array(r),
        u = new Array(r);
      for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
        (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
      for (
        i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1;
        n < r;
        ++n
      )
        (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
      for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
        i[n] = (u[n] - i[n + 1]) / o[n];
      for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
        o[n] = 2 * t[n + 1] - i[n + 1];
      return [i, o];
    }
    (r.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x = []), (this._y = []);
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length;
        if (e)
          if (
            (this._line
              ? this._context.lineTo(t[0], n[0])
              : this._context.moveTo(t[0], n[0]),
            2 === e)
          )
            this._context.lineTo(t[1], n[1]);
          else
            for (var r = i(t), o = i(n), u = 0, a = 1; a < e; ++u, ++a)
              this._context.bezierCurveTo(
                r[0][u],
                o[0][u],
                r[1][u],
                o[1][u],
                t[a],
                n[a]
              );
        (this._line || (0 !== this._line && 1 === e)) &&
          this._context.closePath(),
          (this._line = 1 - this._line),
          (this._x = this._y = null);
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    }),
      (n.a = function (t) {
        return new r(t);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      (this._context = t), (this._t = n);
    }
    function i(t) {
      return new r(t, 0);
    }
    function o(t) {
      return new r(t, 1);
    }
    (n.c = i),
      (n.b = o),
      (r.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (t, n) {
          switch (((t = +t), (n = +n), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, n), this._context.lineTo(t, n);
              else {
                var e = this._x * (1 - this._t) + t * this._t;
                this._context.lineTo(e, this._y), this._context.lineTo(e, n);
              }
          }
          (this._x = t), (this._y = n);
        },
      }),
      (n.a = function (t) {
        return new r(t, 0.5);
      });
  },
  function (t, n, e) {
    "use strict";
    function r(t, n) {
      return t[n];
    }
    var i = e(206),
      o = e(26),
      u = e(49),
      a = e(50);
    n.a = function () {
      function t(t) {
        var r,
          i,
          o = n.apply(this, arguments),
          u = t.length,
          a = o.length,
          f = new Array(a);
        for (r = 0; r < a; ++r) {
          for (var l, h = o[r], d = (f[r] = new Array(u)), p = 0; p < u; ++p)
            (d[p] = l = [0, +s(t[p], h, p, t)]), (l.data = t[p]);
          d.key = h;
        }
        for (r = 0, i = e(f); r < a; ++r) f[i[r]].index = r;
        return c(f, i), f;
      }
      var n = Object(o.a)([]),
        e = a.a,
        c = u.a,
        s = r;
      return (
        (t.keys = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(o.a)(i.a.call(e))), t)
            : n;
        }),
        (t.value = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : Object(o.a)(+n)), t)
            : s;
        }),
        (t.order = function (n) {
          return arguments.length
            ? ((e =
                null == n
                  ? a.a
                  : "function" == typeof n
                  ? n
                  : Object(o.a)(i.a.call(n))),
              t)
            : e;
        }),
        (t.offset = function (n) {
          return arguments.length ? ((c = null == n ? u.a : n), t) : c;
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(49);
    n.a = function (t, n) {
      if ((i = t.length) > 0) {
        for (var e, i, o, u = 0, a = t[0].length; u < a; ++u) {
          for (o = e = 0; e < i; ++e) o += t[e][u][1] || 0;
          if (o) for (e = 0; e < i; ++e) t[e][u][1] /= o;
        }
        Object(r.a)(t, n);
      }
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t, n) {
      if ((a = t.length) > 1)
        for (var e, r, i, o, u, a, c = 0, s = t[n[0]].length; c < s; ++c)
          for (o = u = 0, e = 0; e < a; ++e)
            (i = (r = t[n[e]][c])[1] - r[0]) >= 0
              ? ((r[0] = o), (r[1] = o += i))
              : i < 0
              ? ((r[1] = u), (r[0] = u += i))
              : (r[0] = o);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(49);
    n.a = function (t, n) {
      if ((e = t.length) > 0) {
        for (var e, i = 0, o = t[n[0]], u = o.length; i < u; ++i) {
          for (var a = 0, c = 0; a < e; ++a) c += t[a][i][1] || 0;
          o[i][1] += o[i][0] = -c / 2;
        }
        Object(r.a)(t, n);
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(49);
    n.a = function (t, n) {
      if ((o = t.length) > 0 && (i = (e = t[n[0]]).length) > 0) {
        for (var e, i, o, u = 0, a = 1; a < i; ++a) {
          for (var c = 0, s = 0, f = 0; c < o; ++c) {
            for (
              var l = t[n[c]],
                h = l[a][1] || 0,
                d = l[a - 1][1] || 0,
                p = (h - d) / 2,
                v = 0;
              v < c;
              ++v
            ) {
              var g = t[n[v]];
              p += (g[a][1] || 0) - (g[a - 1][1] || 0);
            }
            (s += h), (f += p * h);
          }
          (e[a - 1][1] += e[a - 1][0] = u), s && (u -= f / s);
        }
        (e[a - 1][1] += e[a - 1][0] = u), Object(r.a)(t, n);
      }
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(119);
    n.a = function (t) {
      return Object(r.a)(t).reverse();
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(50),
      i = e(119);
    n.a = function (t) {
      var n,
        e,
        o = t.length,
        u = t.map(i.b),
        a = Object(r.a)(t).sort(function (t, n) {
          return u[n] - u[t];
        }),
        c = 0,
        s = 0,
        f = [],
        l = [];
      for (n = 0; n < o; ++n)
        (e = a[n]), c < s ? ((c += u[e]), f.push(e)) : ((s += u[e]), l.push(e));
      return l.reverse().concat(f);
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(50);
    n.a = function (t) {
      return Object(r.a)(t).reverse();
    };
  },
  function (t, n, e) {
    "use strict";
    var r = e(522);
    e.d(n, "a", function () {
      return r.a;
    });
  },
  function (t, n, e) {
    "use strict";
    var r = e(523),
      i = e(524),
      o = e(51);
    n.a = function () {
      function t(t) {
        return new o.d(
          t.map(function (r, i) {
            var u = [
              Math.round(n(r, i, t) / o.f) * o.f,
              Math.round(e(r, i, t) / o.f) * o.f,
            ];
            return (u.index = i), (u.data = r), u;
          }),
          u
        );
      }
      var n = i.a,
        e = i.b,
        u = null;
      return (
        (t.polygons = function (n) {
          return t(n).polygons();
        }),
        (t.links = function (n) {
          return t(n).links();
        }),
        (t.triangles = function (n) {
          return t(n).triangles();
        }),
        (t.x = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Object(r.a)(+e)), t)
            : n;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Object(r.a)(+n)), t)
            : e;
        }),
        (t.extent = function (n) {
          return arguments.length
            ? ((u =
                null == n
                  ? null
                  : [
                      [+n[0][0], +n[0][1]],
                      [+n[1][0], +n[1][1]],
                    ]),
              t)
            : u && [
                [u[0][0], u[0][1]],
                [u[1][0], u[1][1]],
              ];
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((u =
                null == n
                  ? null
                  : [
                      [0, 0],
                      [+n[0], +n[1]],
                    ]),
              t)
            : u && [u[1][0] - u[0][0], u[1][1] - u[0][1]];
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t) {
      return t[0];
    }
    function i(t) {
      return t[1];
    }
    (n.a = r), (n.b = i);
  },
  function (t, n, e) {
    "use strict";
    function r() {
      Object(f.a)(this), (this.edge = this.site = this.circle = null);
    }
    function i(t) {
      var n = v.pop() || new r();
      return (n.site = t), n;
    }
    function o(t) {
      Object(h.b)(t), p.a.remove(t), v.push(t), Object(f.a)(t);
    }
    function u(t) {
      var n = t.circle,
        e = n.x,
        r = n.cy,
        i = [e, r],
        u = t.P,
        a = t.N,
        c = [t];
      o(t);
      for (
        var s = u;
        s.circle &&
        Math.abs(e - s.circle.x) < p.f &&
        Math.abs(r - s.circle.cy) < p.f;

      )
        (u = s.P), c.unshift(s), o(s), (s = u);
      c.unshift(s), Object(h.b)(s);
      for (
        var f = a;
        f.circle &&
        Math.abs(e - f.circle.x) < p.f &&
        Math.abs(r - f.circle.cy) < p.f;

      )
        (a = f.N), c.push(f), o(f), (f = a);
      c.push(f), Object(h.b)(f);
      var l,
        v = c.length;
      for (l = 1; l < v; ++l)
        (f = c[l]), (s = c[l - 1]), Object(d.d)(f.edge, s.site, f.site, i);
      (s = c[0]),
        (f = c[v - 1]),
        (f.edge = Object(d.c)(s.site, f.site, null, i)),
        Object(h.a)(s),
        Object(h.a)(f);
    }
    function a(t) {
      for (var n, e, r, o, u = t[0], a = t[1], f = p.a._; f; )
        if ((r = c(f, a) - u) > p.f) f = f.L;
        else {
          if (!((o = u - s(f, a)) > p.f)) {
            r > -p.f
              ? ((n = f.P), (e = f))
              : o > -p.f
              ? ((n = f), (e = f.N))
              : (n = e = f);
            break;
          }
          if (!f.R) {
            n = f;
            break;
          }
          f = f.R;
        }
      Object(l.c)(t);
      var v = i(t);
      if ((p.a.insert(n, v), n || e)) {
        if (n === e)
          return (
            Object(h.b)(n),
            (e = i(n.site)),
            p.a.insert(v, e),
            (v.edge = e.edge = Object(d.c)(n.site, v.site)),
            Object(h.a)(n),
            void Object(h.a)(e)
          );
        if (!e) return void (v.edge = Object(d.c)(n.site, v.site));
        Object(h.b)(n), Object(h.b)(e);
        var g = n.site,
          b = g[0],
          m = g[1],
          y = t[0] - b,
          _ = t[1] - m,
          O = e.site,
          x = O[0] - b,
          w = O[1] - m,
          j = 2 * (y * w - _ * x),
          T = y * y + _ * _,
          E = x * x + w * w,
          C = [(w * T - _ * E) / j + b, (y * E - x * T) / j + m];
        Object(d.d)(e.edge, g, O, C),
          (v.edge = Object(d.c)(g, t, null, C)),
          (e.edge = Object(d.c)(t, O, null, C)),
          Object(h.a)(n),
          Object(h.a)(e);
      }
    }
    function c(t, n) {
      var e = t.site,
        r = e[0],
        i = e[1],
        o = i - n;
      if (!o) return r;
      var u = t.P;
      if (!u) return -1 / 0;
      e = u.site;
      var a = e[0],
        c = e[1],
        s = c - n;
      if (!s) return a;
      var f = a - r,
        l = 1 / o - 1 / s,
        h = f / s;
      return l
        ? (-h +
            Math.sqrt(
              h * h - 2 * l * ((f * f) / (-2 * s) - c + s / 2 + i - o / 2)
            )) /
            l +
            r
        : (r + a) / 2;
    }
    function s(t, n) {
      var e = t.N;
      if (e) return c(e, n);
      var r = t.site;
      return r[1] === n ? r[0] : 1 / 0;
    }
    (n.b = u), (n.a = a);
    var f = e(120),
      l = e(216),
      h = e(217),
      d = e(121),
      p = e(51),
      v = [];
  },
  function (t, n, e) {
    "use strict";
    var r = e(527);
    e.d(n, "a", function () {
      return r.a;
    });
    var i = e(218);
    e.d(n, "c", function () {
      return i.b;
    }),
      e.d(n, "b", function () {
        return i.c;
      });
  },
  function (t, n, e) {
    "use strict";
    function r() {
      return !h.e.button;
    }
    function i() {
      var t,
        n,
        e = this;
      return (
        e instanceof SVGElement
          ? ((e = e.ownerSVGElement || e),
            (t = e.width.baseVal.value),
            (n = e.height.baseVal.value))
          : ((t = e.clientWidth), (n = e.clientHeight)),
        [
          [0, 0],
          [t, n],
        ]
      );
    }
    function o() {
      return this.__zoom || g.c;
    }
    function u() {
      return (-h.e.deltaY * (h.e.deltaMode ? 120 : 1)) / 500;
    }
    function a() {
      return "ontouchstart" in this;
    }
    function c(t, n, e) {
      var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        u = t.invertY(n[1][1]) - e[1][1];
      return t.translate(
        i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
        u > o ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u)
      );
    }
    var s = e(22),
      f = e(83),
      l = e(11),
      h = e(3),
      d = e(94),
      p = e(528),
      v = e(529),
      g = e(218),
      b = e(530);
    n.a = function () {
      function t(t) {
        t.property("__zoom", o)
          .on("wheel.zoom", x)
          .on("mousedown.zoom", w)
          .on("dblclick.zoom", j)
          .filter(I)
          .on("touchstart.zoom", T)
          .on("touchmove.zoom", E)
          .on("touchend.zoom touchcancel.zoom", C)
          .style("touch-action", "none")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function n(t, n) {
        return (
          (n = Math.max(L[0], Math.min(L[1], n))),
          n === t.k ? t : new g.a(n, t.x, t.y)
        );
      }
      function e(t, n, e) {
        var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;
        return r === t.x && i === t.y ? t : new g.a(t.k, r, i);
      }
      function m(t) {
        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
      }
      function y(t, n, e) {
        t.on("start.zoom", function () {
          _(this, arguments).start();
        })
          .on("interrupt.zoom end.zoom", function () {
            _(this, arguments).end();
          })
          .tween("zoom", function () {
            var t = this,
              r = arguments,
              i = _(t, r),
              o = N.apply(t, r),
              u = e || m(o),
              a = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]),
              c = t.__zoom,
              s = "function" == typeof n ? n.apply(t, r) : n,
              f = H(c.invert(u).concat(a / c.k), s.invert(u).concat(a / s.k));
            return function (t) {
              if (1 === t) t = s;
              else {
                var n = f(t),
                  e = a / n[2];
                t = new g.a(e, u[0] - n[0] * e, u[1] - n[1] * e);
              }
              i.zoom(null, t);
            };
          });
      }
      function _(t, n) {
        for (var e, r = 0, i = F.length; r < i; ++r)
          if ((e = F[r]).that === t) return e;
        return new O(t, n);
      }
      function O(t, n) {
        (this.that = t),
          (this.args = n),
          (this.index = -1),
          (this.active = 0),
          (this.extent = N.apply(t, n));
      }
      function x() {
        function t() {
          (r.wheel = null), r.end();
        }
        if (M.apply(this, arguments)) {
          var r = _(this, arguments),
            i = this.__zoom,
            o = Math.max(
              L[0],
              Math.min(L[1], i.k * Math.pow(2, k.apply(this, arguments)))
            ),
            u = Object(h.h)(this);
          if (r.wheel)
            (r.mouse[0][0] === u[0] && r.mouse[0][1] === u[1]) ||
              (r.mouse[1] = i.invert((r.mouse[0] = u))),
              clearTimeout(r.wheel);
          else {
            if (i.k === o) return;
            (r.mouse = [u, i.invert(u)]), Object(d.b)(this), r.start();
          }
          Object(b.a)(),
            (r.wheel = setTimeout(t, W)),
            r.zoom("mouse", D(e(n(i, o), r.mouse[0], r.mouse[1]), r.extent, P));
        }
      }
      function w() {
        function t() {
          if ((Object(b.a)(), !r.moved)) {
            var t = h.e.clientX - u,
              n = h.e.clientY - a;
            r.moved = t * t + n * n > B;
          }
          r.zoom(
            "mouse",
            D(
              e(r.that.__zoom, (r.mouse[0] = Object(h.h)(r.that)), r.mouse[1]),
              r.extent,
              P
            )
          );
        }
        function n() {
          i.on("mousemove.zoom mouseup.zoom", null),
            Object(f.c)(h.e.view, r.moved),
            Object(b.a)(),
            r.end();
        }
        if (!S && M.apply(this, arguments)) {
          var r = _(this, arguments),
            i = Object(h.k)(h.e.view)
              .on("mousemove.zoom", t, !0)
              .on("mouseup.zoom", n, !0),
            o = Object(h.h)(this),
            u = h.e.clientX,
            a = h.e.clientY;
          Object(f.b)(h.e.view),
            Object(b.b)(),
            (r.mouse = [o, this.__zoom.invert(o)]),
            Object(d.b)(this),
            r.start();
        }
      }
      function j() {
        if (M.apply(this, arguments)) {
          var r = this.__zoom,
            i = Object(h.h)(this),
            o = r.invert(i),
            u = r.k * (h.e.shiftKey ? 0.5 : 2),
            a = D(e(n(r, u), i, o), N.apply(this, arguments), P);
          Object(b.a)(),
            R > 0
              ? Object(h.k)(this).transition().duration(R).call(y, a, i)
              : Object(h.k)(this).call(t.transform, a);
        }
      }
      function T() {
        if (M.apply(this, arguments)) {
          var t,
            n,
            e,
            r,
            i = _(this, arguments),
            o = h.e.changedTouches,
            u = o.length;
          for (Object(b.b)(), n = 0; n < u; ++n)
            (e = o[n]),
              (r = Object(h.q)(this, o, e.identifier)),
              (r = [r, this.__zoom.invert(r), e.identifier]),
              i.touch0
                ? i.touch1 || (i.touch1 = r)
                : ((i.touch0 = r), (t = !0));
          if (A && ((A = clearTimeout(A)), !i.touch1))
            return (
              i.end(),
              void (
                (r = Object(h.k)(this).on("dblclick.zoom")) &&
                r.apply(this, arguments)
              )
            );
          t &&
            ((A = setTimeout(function () {
              A = null;
            }, U)),
            Object(d.b)(this),
            i.start());
        }
      }
      function E() {
        var t,
          r,
          i,
          o,
          u = _(this, arguments),
          a = h.e.changedTouches,
          c = a.length;
        for (Object(b.a)(), A && (A = clearTimeout(A)), t = 0; t < c; ++t)
          (r = a[t]),
            (i = Object(h.q)(this, a, r.identifier)),
            u.touch0 && u.touch0[2] === r.identifier
              ? (u.touch0[0] = i)
              : u.touch1 && u.touch1[2] === r.identifier && (u.touch1[0] = i);
        if (((r = u.that.__zoom), u.touch1)) {
          var s = u.touch0[0],
            f = u.touch0[1],
            l = u.touch1[0],
            d = u.touch1[1],
            p = (p = l[0] - s[0]) * p + (p = l[1] - s[1]) * p,
            v = (v = d[0] - f[0]) * v + (v = d[1] - f[1]) * v;
          (r = n(r, Math.sqrt(p / v))),
            (i = [(s[0] + l[0]) / 2, (s[1] + l[1]) / 2]),
            (o = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]);
        } else {
          if (!u.touch0) return;
          (i = u.touch0[0]), (o = u.touch0[1]);
        }
        u.zoom("touch", D(e(r, i, o), u.extent, P));
      }
      function C() {
        var t,
          n,
          e = _(this, arguments),
          r = h.e.changedTouches,
          i = r.length;
        for (
          Object(b.b)(),
            S && clearTimeout(S),
            S = setTimeout(function () {
              S = null;
            }, U),
            t = 0;
          t < i;
          ++t
        )
          (n = r[t]),
            e.touch0 && e.touch0[2] === n.identifier
              ? delete e.touch0
              : e.touch1 && e.touch1[2] === n.identifier && delete e.touch1;
        e.touch1 && !e.touch0 && ((e.touch0 = e.touch1), delete e.touch1),
          e.touch0 ? (e.touch0[1] = this.__zoom.invert(e.touch0[0])) : e.end();
      }
      var A,
        S,
        M = r,
        N = i,
        D = c,
        k = u,
        I = a,
        L = [0, 1 / 0],
        P = [
          [-1 / 0, -1 / 0],
          [1 / 0, 1 / 0],
        ],
        R = 250,
        H = l.v,
        F = [],
        q = Object(s.a)("start", "zoom", "end"),
        U = 500,
        W = 150,
        B = 0;
      return (
        (t.transform = function (t, n) {
          var e = t.selection ? t.selection() : t;
          e.property("__zoom", o),
            t !== e
              ? y(t, n)
              : e.interrupt().each(function () {
                  _(this, arguments)
                    .start()
                    .zoom(
                      null,
                      "function" == typeof n ? n.apply(this, arguments) : n
                    )
                    .end();
                });
        }),
        (t.scaleBy = function (n, e) {
          t.scaleTo(n, function () {
            return (
              this.__zoom.k *
              ("function" == typeof e ? e.apply(this, arguments) : e)
            );
          });
        }),
        (t.scaleTo = function (r, i) {
          t.transform(r, function () {
            var t = N.apply(this, arguments),
              r = this.__zoom,
              o = m(t),
              u = r.invert(o),
              a = "function" == typeof i ? i.apply(this, arguments) : i;
            return D(e(n(r, a), o, u), t, P);
          });
        }),
        (t.translateBy = function (n, e, r) {
          t.transform(n, function () {
            return D(
              this.__zoom.translate(
                "function" == typeof e ? e.apply(this, arguments) : e,
                "function" == typeof r ? r.apply(this, arguments) : r
              ),
              N.apply(this, arguments),
              P
            );
          });
        }),
        (t.translateTo = function (n, e, r) {
          t.transform(n, function () {
            var t = N.apply(this, arguments),
              n = this.__zoom,
              i = m(t);
            return D(
              g.c
                .translate(i[0], i[1])
                .scale(n.k)
                .translate(
                  "function" == typeof e ? -e.apply(this, arguments) : -e,
                  "function" == typeof r ? -r.apply(this, arguments) : -r
                ),
              t,
              P
            );
          });
        }),
        (O.prototype = {
          start: function () {
            return (
              1 == ++this.active &&
                ((this.index = F.push(this) - 1), this.emit("start")),
              this
            );
          },
          zoom: function (t, n) {
            return (
              this.mouse &&
                "mouse" !== t &&
                (this.mouse[1] = n.invert(this.mouse[0])),
              this.touch0 &&
                "touch" !== t &&
                (this.touch0[1] = n.invert(this.touch0[0])),
              this.touch1 &&
                "touch" !== t &&
                (this.touch1[1] = n.invert(this.touch1[0])),
              (this.that.__zoom = n),
              this.emit("zoom"),
              this
            );
          },
          end: function () {
            return (
              0 == --this.active &&
                (F.splice(this.index, 1), (this.index = -1), this.emit("end")),
              this
            );
          },
          emit: function (n) {
            Object(h.d)(new v.a(t, n, this.that.__zoom), q.apply, q, [
              n,
              this.that,
              this.args,
            ]);
          },
        }),
        (t.wheelDelta = function (n) {
          return arguments.length
            ? ((k = "function" == typeof n ? n : Object(p.a)(+n)), t)
            : k;
        }),
        (t.filter = function (n) {
          return arguments.length
            ? ((M = "function" == typeof n ? n : Object(p.a)(!!n)), t)
            : M;
        }),
        (t.touchable = function (n) {
          return arguments.length
            ? ((I = "function" == typeof n ? n : Object(p.a)(!!n)), t)
            : I;
        }),
        (t.extent = function (n) {
          return arguments.length
            ? ((N =
                "function" == typeof n
                  ? n
                  : Object(p.a)([
                      [+n[0][0], +n[0][1]],
                      [+n[1][0], +n[1][1]],
                    ])),
              t)
            : N;
        }),
        (t.scaleExtent = function (n) {
          return arguments.length
            ? ((L[0] = +n[0]), (L[1] = +n[1]), t)
            : [L[0], L[1]];
        }),
        (t.translateExtent = function (n) {
          return arguments.length
            ? ((P[0][0] = +n[0][0]),
              (P[1][0] = +n[1][0]),
              (P[0][1] = +n[0][1]),
              (P[1][1] = +n[1][1]),
              t)
            : [
                [P[0][0], P[0][1]],
                [P[1][0], P[1][1]],
              ];
        }),
        (t.constrain = function (n) {
          return arguments.length ? ((D = n), t) : D;
        }),
        (t.duration = function (n) {
          return arguments.length ? ((R = +n), t) : R;
        }),
        (t.interpolate = function (n) {
          return arguments.length ? ((H = n), t) : H;
        }),
        (t.on = function () {
          var n = q.on.apply(q, arguments);
          return n === q ? t : n;
        }),
        (t.clickDistance = function (n) {
          return arguments.length ? ((B = (n = +n) * n), t) : Math.sqrt(B);
        }),
        t
      );
    };
  },
  function (t, n, e) {
    "use strict";
    n.a = function (t) {
      return function () {
        return t;
      };
    };
  },
  function (t, n, e) {
    "use strict";
    function r(t, n, e) {
      (this.target = t), (this.type = n), (this.transform = e);
    }
    n.a = r;
  },
  function (t, n, e) {
    "use strict";
    function r() {
      i.e.stopImmediatePropagation();
    }
    n.b = r;
    var i = e(3);
    n.a = function () {
      i.e.preventDefault(), i.e.stopImmediatePropagation();
    };
  },
  function (t, n, e) {
    /*!
     * Bootstrap v4.1.1 (https://getbootstrap.com/)
     * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    !(function (t, r) {
      r(n, e(35), e(532));
    })(0, function (t, n, e) {
      "use strict";
      function r(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, n, e) {
        return n && r(t.prototype, n), e && r(t, e), t;
      }
      function o(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function u(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })
            )),
            r.forEach(function (n) {
              o(t, n, e[n]);
            });
        }
        return t;
      }
      function a(t, n) {
        (t.prototype = Object.create(n.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = n);
      }
      (n = n && n.hasOwnProperty("default") ? n.default : n),
        (e = e && e.hasOwnProperty("default") ? e.default : e);
      var c = (function (t) {
          function n(t) {
            return {}.toString
              .call(t)
              .match(/\s([a-z]+)/i)[1]
              .toLowerCase();
          }
          function e() {
            return {
              bindType: i,
              delegateType: i,
              handle: function (n) {
                if (t(n.target).is(this))
                  return n.handleObj.handler.apply(this, arguments);
              },
            };
          }
          function r(n) {
            var e = this,
              r = !1;
            return (
              t(this).one(o.TRANSITION_END, function () {
                r = !0;
              }),
              setTimeout(function () {
                r || o.triggerTransitionEnd(e);
              }, n),
              this
            );
          }
          var i = "transitionend",
            o = {
              TRANSITION_END: "bsTransitionEnd",
              getUID: function (t) {
                do {
                  t += ~~(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
              },
              getSelectorFromElement: function (n) {
                var e = n.getAttribute("data-target");
                (e && "#" !== e) || (e = n.getAttribute("href") || "");
                try {
                  return t(document).find(e).length > 0 ? e : null;
                } catch (t) {
                  return null;
                }
              },
              getTransitionDurationFromElement: function (n) {
                if (!n) return 0;
                var e = t(n).css("transition-duration");
                return parseFloat(e)
                  ? ((e = e.split(",")[0]), 1e3 * parseFloat(e))
                  : 0;
              },
              reflow: function (t) {
                return t.offsetHeight;
              },
              triggerTransitionEnd: function (n) {
                t(n).trigger(i);
              },
              supportsTransitionEnd: function () {
                return Boolean(i);
              },
              isElement: function (t) {
                return (t[0] || t).nodeType;
              },
              typeCheckConfig: function (t, e, r) {
                for (var i in r)
                  if (Object.prototype.hasOwnProperty.call(r, i)) {
                    var u = r[i],
                      a = e[i],
                      c = a && o.isElement(a) ? "element" : n(a);
                    if (!new RegExp(u).test(c))
                      throw new Error(
                        t.toUpperCase() +
                          ': Option "' +
                          i +
                          '" provided type "' +
                          c +
                          '" but expected type "' +
                          u +
                          '".'
                      );
                  }
              },
            };
          return (
            (function () {
              (t.fn.emulateTransitionEnd = r),
                (t.event.special[o.TRANSITION_END] = e());
            })(),
            o
          );
        })(n),
        s = (function (t) {
          var n = "alert",
            e = t.fn[n],
            r = { DISMISS: '[data-dismiss="alert"]' },
            o = {
              CLOSE: "close.bs.alert",
              CLOSED: "closed.bs.alert",
              CLICK_DATA_API: "click.bs.alert.data-api",
            },
            u = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            a = (function () {
              function n(t) {
                this._element = t;
              }
              var e = n.prototype;
              return (
                (e.close = function (t) {
                  var n = this._element;
                  t && (n = this._getRootElement(t)),
                    this._triggerCloseEvent(n).isDefaultPrevented() ||
                      this._removeElement(n);
                }),
                (e.dispose = function () {
                  t.removeData(this._element, "bs.alert"),
                    (this._element = null);
                }),
                (e._getRootElement = function (n) {
                  var e = c.getSelectorFromElement(n),
                    r = !1;
                  return (
                    e && (r = t(e)[0]),
                    r || (r = t(n).closest("." + u.ALERT)[0]),
                    r
                  );
                }),
                (e._triggerCloseEvent = function (n) {
                  var e = t.Event(o.CLOSE);
                  return t(n).trigger(e), e;
                }),
                (e._removeElement = function (n) {
                  var e = this;
                  if ((t(n).removeClass(u.SHOW), !t(n).hasClass(u.FADE)))
                    return void this._destroyElement(n);
                  var r = c.getTransitionDurationFromElement(n);
                  t(n)
                    .one(c.TRANSITION_END, function (t) {
                      return e._destroyElement(n, t);
                    })
                    .emulateTransitionEnd(r);
                }),
                (e._destroyElement = function (n) {
                  t(n).detach().trigger(o.CLOSED).remove();
                }),
                (n._jQueryInterface = function (e) {
                  return this.each(function () {
                    var r = t(this),
                      i = r.data("bs.alert");
                    i || ((i = new n(this)), r.data("bs.alert", i)),
                      "close" === e && i[e](this);
                  });
                }),
                (n._handleDismiss = function (t) {
                  return function (n) {
                    n && n.preventDefault(), t.close(this);
                  };
                }),
                i(n, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                ]),
                n
              );
            })();
          return (
            t(document).on(
              o.CLICK_DATA_API,
              r.DISMISS,
              a._handleDismiss(new a())
            ),
            (t.fn[n] = a._jQueryInterface),
            (t.fn[n].Constructor = a),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = e), a._jQueryInterface;
            }),
            a
          );
        })(n),
        f = (function (t) {
          var n = "button",
            e = t.fn[n],
            r = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            o = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: "input",
              ACTIVE: ".active",
              BUTTON: ".btn",
            },
            u = {
              CLICK_DATA_API: "click.bs.button.data-api",
              FOCUS_BLUR_DATA_API:
                "focus.bs.button.data-api blur.bs.button.data-api",
            },
            a = (function () {
              function n(t) {
                this._element = t;
              }
              var e = n.prototype;
              return (
                (e.toggle = function () {
                  var n = !0,
                    e = !0,
                    i = t(this._element).closest(o.DATA_TOGGLE)[0];
                  if (i) {
                    var u = t(this._element).find(o.INPUT)[0];
                    if (u) {
                      if ("radio" === u.type)
                        if (u.checked && t(this._element).hasClass(r.ACTIVE))
                          n = !1;
                        else {
                          var a = t(i).find(o.ACTIVE)[0];
                          a && t(a).removeClass(r.ACTIVE);
                        }
                      if (n) {
                        if (
                          u.hasAttribute("disabled") ||
                          i.hasAttribute("disabled") ||
                          u.classList.contains("disabled") ||
                          i.classList.contains("disabled")
                        )
                          return;
                        (u.checked = !t(this._element).hasClass(r.ACTIVE)),
                          t(u).trigger("change");
                      }
                      u.focus(), (e = !1);
                    }
                  }
                  e &&
                    this._element.setAttribute(
                      "aria-pressed",
                      !t(this._element).hasClass(r.ACTIVE)
                    ),
                    n && t(this._element).toggleClass(r.ACTIVE);
                }),
                (e.dispose = function () {
                  t.removeData(this._element, "bs.button"),
                    (this._element = null);
                }),
                (n._jQueryInterface = function (e) {
                  return this.each(function () {
                    var r = t(this).data("bs.button");
                    r || ((r = new n(this)), t(this).data("bs.button", r)),
                      "toggle" === e && r[e]();
                  });
                }),
                i(n, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                ]),
                n
              );
            })();
          return (
            t(document)
              .on(u.CLICK_DATA_API, o.DATA_TOGGLE_CARROT, function (n) {
                n.preventDefault();
                var e = n.target;
                t(e).hasClass(r.BUTTON) || (e = t(e).closest(o.BUTTON)),
                  a._jQueryInterface.call(t(e), "toggle");
              })
              .on(u.FOCUS_BLUR_DATA_API, o.DATA_TOGGLE_CARROT, function (n) {
                var e = t(n.target).closest(o.BUTTON)[0];
                t(e).toggleClass(r.FOCUS, /^focus(in)?$/.test(n.type));
              }),
            (t.fn[n] = a._jQueryInterface),
            (t.fn[n].Constructor = a),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = e), a._jQueryInterface;
            }),
            a
          );
        })(n),
        l = (function (t) {
          var n = "carousel",
            e = "bs.carousel",
            r = "." + e,
            o = t.fn[n],
            a = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
            },
            s = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
            },
            f = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            l = {
              SLIDE: "slide" + r,
              SLID: "slid" + r,
              KEYDOWN: "keydown" + r,
              MOUSEENTER: "mouseenter" + r,
              MOUSELEAVE: "mouseleave" + r,
              TOUCHEND: "touchend" + r,
              LOAD_DATA_API: "load.bs.carousel.data-api",
              CLICK_DATA_API: "click.bs.carousel.data-api",
            },
            h = {
              CAROUSEL: "carousel",
              ACTIVE: "active",
              SLIDE: "slide",
              RIGHT: "carousel-item-right",
              LEFT: "carousel-item-left",
              NEXT: "carousel-item-next",
              PREV: "carousel-item-prev",
              ITEM: "carousel-item",
            },
            d = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
            },
            p = (function () {
              function o(n, e) {
                (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(e)),
                  (this._element = t(n)[0]),
                  (this._indicatorsElement = t(this._element).find(
                    d.INDICATORS
                  )[0]),
                  this._addEventListeners();
              }
              var p = o.prototype;
              return (
                (p.next = function () {
                  this._isSliding || this._slide(f.NEXT);
                }),
                (p.nextWhenVisible = function () {
                  !document.hidden &&
                    t(this._element).is(":visible") &&
                    "hidden" !== t(this._element).css("visibility") &&
                    this.next();
                }),
                (p.prev = function () {
                  this._isSliding || this._slide(f.PREV);
                }),
                (p.pause = function (n) {
                  n || (this._isPaused = !0),
                    t(this._element).find(d.NEXT_PREV)[0] &&
                      (c.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (p.cycle = function (t) {
                  t || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (p.to = function (n) {
                  var e = this;
                  this._activeElement = t(this._element).find(d.ACTIVE_ITEM)[0];
                  var r = this._getItemIndex(this._activeElement);
                  if (!(n > this._items.length - 1 || n < 0)) {
                    if (this._isSliding)
                      return void t(this._element).one(l.SLID, function () {
                        return e.to(n);
                      });
                    if (r === n) return this.pause(), void this.cycle();
                    var i = n > r ? f.NEXT : f.PREV;
                    this._slide(i, this._items[n]);
                  }
                }),
                (p.dispose = function () {
                  t(this._element).off(r),
                    t.removeData(this._element, e),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (p._getConfig = function (t) {
                  return (t = u({}, a, t)), c.typeCheckConfig(n, t, s), t;
                }),
                (p._addEventListeners = function () {
                  var n = this;
                  this._config.keyboard &&
                    t(this._element).on(l.KEYDOWN, function (t) {
                      return n._keydown(t);
                    }),
                    "hover" === this._config.pause &&
                      (t(this._element)
                        .on(l.MOUSEENTER, function (t) {
                          return n.pause(t);
                        })
                        .on(l.MOUSELEAVE, function (t) {
                          return n.cycle(t);
                        }),
                      "ontouchstart" in document.documentElement &&
                        t(this._element).on(l.TOUCHEND, function () {
                          n.pause(),
                            n.touchTimeout && clearTimeout(n.touchTimeout),
                            (n.touchTimeout = setTimeout(function (t) {
                              return n.cycle(t);
                            }, 500 + n._config.interval));
                        }));
                }),
                (p._keydown = function (t) {
                  if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                      case 37:
                        t.preventDefault(), this.prev();
                        break;
                      case 39:
                        t.preventDefault(), this.next();
                    }
                }),
                (p._getItemIndex = function (n) {
                  return (
                    (this._items = t.makeArray(t(n).parent().find(d.ITEM))),
                    this._items.indexOf(n)
                  );
                }),
                (p._getItemByDirection = function (t, n) {
                  var e = t === f.NEXT,
                    r = t === f.PREV,
                    i = this._getItemIndex(n),
                    o = this._items.length - 1;
                  if (((r && 0 === i) || (e && i === o)) && !this._config.wrap)
                    return n;
                  var u = t === f.PREV ? -1 : 1,
                    a = (i + u) % this._items.length;
                  return -1 === a
                    ? this._items[this._items.length - 1]
                    : this._items[a];
                }),
                (p._triggerSlideEvent = function (n, e) {
                  var r = this._getItemIndex(n),
                    i = this._getItemIndex(
                      t(this._element).find(d.ACTIVE_ITEM)[0]
                    ),
                    o = t.Event(l.SLIDE, {
                      relatedTarget: n,
                      direction: e,
                      from: i,
                      to: r,
                    });
                  return t(this._element).trigger(o), o;
                }),
                (p._setActiveIndicatorElement = function (n) {
                  if (this._indicatorsElement) {
                    t(this._indicatorsElement)
                      .find(d.ACTIVE)
                      .removeClass(h.ACTIVE);
                    var e = this._indicatorsElement.children[
                      this._getItemIndex(n)
                    ];
                    e && t(e).addClass(h.ACTIVE);
                  }
                }),
                (p._slide = function (n, e) {
                  var r,
                    i,
                    o,
                    u = this,
                    a = t(this._element).find(d.ACTIVE_ITEM)[0],
                    s = this._getItemIndex(a),
                    p = e || (a && this._getItemByDirection(n, a)),
                    v = this._getItemIndex(p),
                    g = Boolean(this._interval);
                  if (
                    (n === f.NEXT
                      ? ((r = h.LEFT), (i = h.NEXT), (o = f.LEFT))
                      : ((r = h.RIGHT), (i = h.PREV), (o = f.RIGHT)),
                    p && t(p).hasClass(h.ACTIVE))
                  )
                    return void (this._isSliding = !1);
                  if (
                    !this._triggerSlideEvent(p, o).isDefaultPrevented() &&
                    a &&
                    p
                  ) {
                    (this._isSliding = !0),
                      g && this.pause(),
                      this._setActiveIndicatorElement(p);
                    var b = t.Event(l.SLID, {
                      relatedTarget: p,
                      direction: o,
                      from: s,
                      to: v,
                    });
                    if (t(this._element).hasClass(h.SLIDE)) {
                      t(p).addClass(i),
                        c.reflow(p),
                        t(a).addClass(r),
                        t(p).addClass(r);
                      var m = c.getTransitionDurationFromElement(a);
                      t(a)
                        .one(c.TRANSITION_END, function () {
                          t(p)
                            .removeClass(r + " " + i)
                            .addClass(h.ACTIVE),
                            t(a).removeClass(h.ACTIVE + " " + i + " " + r),
                            (u._isSliding = !1),
                            setTimeout(function () {
                              return t(u._element).trigger(b);
                            }, 0);
                        })
                        .emulateTransitionEnd(m);
                    } else
                      t(a).removeClass(h.ACTIVE),
                        t(p).addClass(h.ACTIVE),
                        (this._isSliding = !1),
                        t(this._element).trigger(b);
                    g && this.cycle();
                  }
                }),
                (o._jQueryInterface = function (n) {
                  return this.each(function () {
                    var r = t(this).data(e),
                      i = u({}, a, t(this).data());
                    "object" == typeof n && (i = u({}, i, n));
                    var c = "string" == typeof n ? n : i.slide;
                    if (
                      (r || ((r = new o(this, i)), t(this).data(e, r)),
                      "number" == typeof n)
                    )
                      r.to(n);
                    else if ("string" == typeof c) {
                      if (void 0 === r[c])
                        throw new TypeError('No method named "' + c + '"');
                      r[c]();
                    } else i.interval && (r.pause(), r.cycle());
                  });
                }),
                (o._dataApiClickHandler = function (n) {
                  var r = c.getSelectorFromElement(this);
                  if (r) {
                    var i = t(r)[0];
                    if (i && t(i).hasClass(h.CAROUSEL)) {
                      var a = u({}, t(i).data(), t(this).data()),
                        s = this.getAttribute("data-slide-to");
                      s && (a.interval = !1),
                        o._jQueryInterface.call(t(i), a),
                        s && t(i).data(e).to(s),
                        n.preventDefault();
                    }
                  }
                }),
                i(o, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return a;
                    },
                  },
                ]),
                o
              );
            })();
          return (
            t(document).on(
              l.CLICK_DATA_API,
              d.DATA_SLIDE,
              p._dataApiClickHandler
            ),
            t(window).on(l.LOAD_DATA_API, function () {
              t(d.DATA_RIDE).each(function () {
                var n = t(this);
                p._jQueryInterface.call(n, n.data());
              });
            }),
            (t.fn[n] = p._jQueryInterface),
            (t.fn[n].Constructor = p),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = o), p._jQueryInterface;
            }),
            p
          );
        })(n),
        h = (function (t) {
          var n = "collapse",
            e = "bs.collapse",
            r = t.fn[n],
            o = { toggle: !0, parent: "" },
            a = { toggle: "boolean", parent: "(string|element)" },
            s = {
              SHOW: "show.bs.collapse",
              SHOWN: "shown.bs.collapse",
              HIDE: "hide.bs.collapse",
              HIDDEN: "hidden.bs.collapse",
              CLICK_DATA_API: "click.bs.collapse.data-api",
            },
            f = {
              SHOW: "show",
              COLLAPSE: "collapse",
              COLLAPSING: "collapsing",
              COLLAPSED: "collapsed",
            },
            l = { WIDTH: "width", HEIGHT: "height" },
            h = {
              ACTIVES: ".show, .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]',
            },
            d = (function () {
              function r(n, e) {
                (this._isTransitioning = !1),
                  (this._element = n),
                  (this._config = this._getConfig(e)),
                  (this._triggerArray = t.makeArray(
                    t(
                      '[data-toggle="collapse"][href="#' +
                        n.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        n.id +
                        '"]'
                    )
                  ));
                for (var r = t(h.DATA_TOGGLE), i = 0; i < r.length; i++) {
                  var o = r[i],
                    u = c.getSelectorFromElement(o);
                  null !== u &&
                    t(u).filter(n).length > 0 &&
                    ((this._selector = u), this._triggerArray.push(o));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              var d = r.prototype;
              return (
                (d.toggle = function () {
                  t(this._element).hasClass(f.SHOW) ? this.hide() : this.show();
                }),
                (d.show = function () {
                  var n = this;
                  if (
                    !this._isTransitioning &&
                    !t(this._element).hasClass(f.SHOW)
                  ) {
                    var i, o;
                    if (
                      (this._parent &&
                        ((i = t.makeArray(
                          t(this._parent)
                            .find(h.ACTIVES)
                            .filter(
                              '[data-parent="' + this._config.parent + '"]'
                            )
                        )),
                        0 === i.length && (i = null)),
                      !(
                        i &&
                        (o = t(i).not(this._selector).data(e)) &&
                        o._isTransitioning
                      ))
                    ) {
                      var u = t.Event(s.SHOW);
                      if (
                        (t(this._element).trigger(u), !u.isDefaultPrevented())
                      ) {
                        i &&
                          (r._jQueryInterface.call(
                            t(i).not(this._selector),
                            "hide"
                          ),
                          o || t(i).data(e, null));
                        var a = this._getDimension();
                        t(this._element)
                          .removeClass(f.COLLAPSE)
                          .addClass(f.COLLAPSING),
                          (this._element.style[a] = 0),
                          this._triggerArray.length > 0 &&
                            t(this._triggerArray)
                              .removeClass(f.COLLAPSED)
                              .attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                        var l = function () {
                            t(n._element)
                              .removeClass(f.COLLAPSING)
                              .addClass(f.COLLAPSE)
                              .addClass(f.SHOW),
                              (n._element.style[a] = ""),
                              n.setTransitioning(!1),
                              t(n._element).trigger(s.SHOWN);
                          },
                          d = a[0].toUpperCase() + a.slice(1),
                          p = "scroll" + d,
                          v = c.getTransitionDurationFromElement(this._element);
                        t(this._element)
                          .one(c.TRANSITION_END, l)
                          .emulateTransitionEnd(v),
                          (this._element.style[a] = this._element[p] + "px");
                      }
                    }
                  }
                }),
                (d.hide = function () {
                  var n = this;
                  if (
                    !this._isTransitioning &&
                    t(this._element).hasClass(f.SHOW)
                  ) {
                    var e = t.Event(s.HIDE);
                    if (
                      (t(this._element).trigger(e), !e.isDefaultPrevented())
                    ) {
                      var r = this._getDimension();
                      if (
                        ((this._element.style[r] =
                          this._element.getBoundingClientRect()[r] + "px"),
                        c.reflow(this._element),
                        t(this._element)
                          .addClass(f.COLLAPSING)
                          .removeClass(f.COLLAPSE)
                          .removeClass(f.SHOW),
                        this._triggerArray.length > 0)
                      )
                        for (var i = 0; i < this._triggerArray.length; i++) {
                          var o = this._triggerArray[i],
                            u = c.getSelectorFromElement(o);
                          if (null !== u) {
                            var a = t(u);
                            a.hasClass(f.SHOW) ||
                              t(o)
                                .addClass(f.COLLAPSED)
                                .attr("aria-expanded", !1);
                          }
                        }
                      this.setTransitioning(!0);
                      var l = function () {
                        n.setTransitioning(!1),
                          t(n._element)
                            .removeClass(f.COLLAPSING)
                            .addClass(f.COLLAPSE)
                            .trigger(s.HIDDEN);
                      };
                      this._element.style[r] = "";
                      var h = c.getTransitionDurationFromElement(this._element);
                      t(this._element)
                        .one(c.TRANSITION_END, l)
                        .emulateTransitionEnd(h);
                    }
                  }
                }),
                (d.setTransitioning = function (t) {
                  this._isTransitioning = t;
                }),
                (d.dispose = function () {
                  t.removeData(this._element, e),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (d._getConfig = function (t) {
                  return (
                    (t = u({}, o, t)),
                    (t.toggle = Boolean(t.toggle)),
                    c.typeCheckConfig(n, t, a),
                    t
                  );
                }),
                (d._getDimension = function () {
                  return t(this._element).hasClass(l.WIDTH)
                    ? l.WIDTH
                    : l.HEIGHT;
                }),
                (d._getParent = function () {
                  var n = this,
                    e = null;
                  c.isElement(this._config.parent)
                    ? ((e = this._config.parent),
                      void 0 !== this._config.parent.jquery &&
                        (e = this._config.parent[0]))
                    : (e = t(this._config.parent)[0]);
                  var i =
                    '[data-toggle="collapse"][data-parent="' +
                    this._config.parent +
                    '"]';
                  return (
                    t(e)
                      .find(i)
                      .each(function (t, e) {
                        n._addAriaAndCollapsedClass(
                          r._getTargetFromElement(e),
                          [e]
                        );
                      }),
                    e
                  );
                }),
                (d._addAriaAndCollapsedClass = function (n, e) {
                  if (n) {
                    var r = t(n).hasClass(f.SHOW);
                    e.length > 0 &&
                      t(e)
                        .toggleClass(f.COLLAPSED, !r)
                        .attr("aria-expanded", r);
                  }
                }),
                (r._getTargetFromElement = function (n) {
                  var e = c.getSelectorFromElement(n);
                  return e ? t(e)[0] : null;
                }),
                (r._jQueryInterface = function (n) {
                  return this.each(function () {
                    var i = t(this),
                      a = i.data(e),
                      c = u(
                        {},
                        o,
                        i.data(),
                        "object" == typeof n && n ? n : {}
                      );
                    if (
                      (!a && c.toggle && /show|hide/.test(n) && (c.toggle = !1),
                      a || ((a = new r(this, c)), i.data(e, a)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === a[n])
                        throw new TypeError('No method named "' + n + '"');
                      a[n]();
                    }
                  });
                }),
                i(r, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return o;
                    },
                  },
                ]),
                r
              );
            })();
          return (
            t(document).on(s.CLICK_DATA_API, h.DATA_TOGGLE, function (n) {
              "A" === n.currentTarget.tagName && n.preventDefault();
              var r = t(this),
                i = c.getSelectorFromElement(this);
              t(i).each(function () {
                var n = t(this),
                  i = n.data(e),
                  o = i ? "toggle" : r.data();
                d._jQueryInterface.call(n, o);
              });
            }),
            (t.fn[n] = d._jQueryInterface),
            (t.fn[n].Constructor = d),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = r), d._jQueryInterface;
            }),
            d
          );
        })(n),
        d = (function (t) {
          var n = "dropdown",
            r = "bs.dropdown",
            o = "." + r,
            a = t.fn[n],
            s = new RegExp("38|40|27"),
            f = {
              HIDE: "hide" + o,
              HIDDEN: "hidden" + o,
              SHOW: "show" + o,
              SHOWN: "shown" + o,
              CLICK: "click" + o,
              CLICK_DATA_API: "click.bs.dropdown.data-api",
              KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
              KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
            },
            l = {
              DISABLED: "disabled",
              SHOW: "show",
              DROPUP: "dropup",
              DROPRIGHT: "dropright",
              DROPLEFT: "dropleft",
              MENURIGHT: "dropdown-menu-right",
              MENULEFT: "dropdown-menu-left",
              POSITION_STATIC: "position-static",
            },
            h = {
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: ".dropdown form",
              MENU: ".dropdown-menu",
              NAVBAR_NAV: ".navbar-nav",
              VISIBLE_ITEMS:
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            },
            d = {
              TOP: "top-start",
              TOPEND: "top-end",
              BOTTOM: "bottom-start",
              BOTTOMEND: "bottom-end",
              RIGHT: "right-start",
              RIGHTEND: "right-end",
              LEFT: "left-start",
              LEFTEND: "left-end",
            },
            p = {
              offset: 0,
              flip: !0,
              boundary: "scrollParent",
              reference: "toggle",
              display: "dynamic",
            },
            v = {
              offset: "(number|string|function)",
              flip: "boolean",
              boundary: "(string|element)",
              reference: "(string|element)",
              display: "string",
            },
            g = (function () {
              function a(t, n) {
                (this._element = t),
                  (this._popper = null),
                  (this._config = this._getConfig(n)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              var g = a.prototype;
              return (
                (g.toggle = function () {
                  if (
                    !this._element.disabled &&
                    !t(this._element).hasClass(l.DISABLED)
                  ) {
                    var n = a._getParentFromElement(this._element),
                      r = t(this._menu).hasClass(l.SHOW);
                    if ((a._clearMenus(), !r)) {
                      var i = { relatedTarget: this._element },
                        o = t.Event(f.SHOW, i);
                      if ((t(n).trigger(o), !o.isDefaultPrevented())) {
                        if (!this._inNavbar) {
                          if (void 0 === e)
                            throw new TypeError(
                              "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                            );
                          var u = this._element;
                          "parent" === this._config.reference
                            ? (u = n)
                            : c.isElement(this._config.reference) &&
                              ((u = this._config.reference),
                              void 0 !== this._config.reference.jquery &&
                                (u = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary &&
                              t(n).addClass(l.POSITION_STATIC),
                            (this._popper = new e(
                              u,
                              this._menu,
                              this._getPopperConfig()
                            ));
                        }
                        "ontouchstart" in document.documentElement &&
                          0 === t(n).closest(h.NAVBAR_NAV).length &&
                          t(document.body)
                            .children()
                            .on("mouseover", null, t.noop),
                          this._element.focus(),
                          this._element.setAttribute("aria-expanded", !0),
                          t(this._menu).toggleClass(l.SHOW),
                          t(n).toggleClass(l.SHOW).trigger(t.Event(f.SHOWN, i));
                      }
                    }
                  }
                }),
                (g.dispose = function () {
                  t.removeData(this._element, r),
                    t(this._element).off(o),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper &&
                      (this._popper.destroy(), (this._popper = null));
                }),
                (g.update = function () {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (g._addEventListeners = function () {
                  var n = this;
                  t(this._element).on(f.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), n.toggle();
                  });
                }),
                (g._getConfig = function (e) {
                  return (
                    (e = u(
                      {},
                      this.constructor.Default,
                      t(this._element).data(),
                      e
                    )),
                    c.typeCheckConfig(n, e, this.constructor.DefaultType),
                    e
                  );
                }),
                (g._getMenuElement = function () {
                  if (!this._menu) {
                    var n = a._getParentFromElement(this._element);
                    this._menu = t(n).find(h.MENU)[0];
                  }
                  return this._menu;
                }),
                (g._getPlacement = function () {
                  var n = t(this._element).parent(),
                    e = d.BOTTOM;
                  return (
                    n.hasClass(l.DROPUP)
                      ? ((e = d.TOP),
                        t(this._menu).hasClass(l.MENURIGHT) && (e = d.TOPEND))
                      : n.hasClass(l.DROPRIGHT)
                      ? (e = d.RIGHT)
                      : n.hasClass(l.DROPLEFT)
                      ? (e = d.LEFT)
                      : t(this._menu).hasClass(l.MENURIGHT) &&
                        (e = d.BOTTOMEND),
                    e
                  );
                }),
                (g._detectNavbar = function () {
                  return t(this._element).closest(".navbar").length > 0;
                }),
                (g._getPopperConfig = function () {
                  var t = this,
                    n = {};
                  "function" == typeof this._config.offset
                    ? (n.fn = function (n) {
                        return (
                          (n.offsets = u(
                            {},
                            n.offsets,
                            t._config.offset(n.offsets) || {}
                          )),
                          n
                        );
                      })
                    : (n.offset = this._config.offset);
                  var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: n,
                      flip: { enabled: this._config.flip },
                      preventOverflow: {
                        boundariesElement: this._config.boundary,
                      },
                    },
                  };
                  return (
                    "static" === this._config.display &&
                      (e.modifiers.applyStyle = { enabled: !1 }),
                    e
                  );
                }),
                (a._jQueryInterface = function (n) {
                  return this.each(function () {
                    var e = t(this).data(r),
                      i = "object" == typeof n ? n : null;
                    if (
                      (e || ((e = new a(this, i)), t(this).data(r, e)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                      e[n]();
                    }
                  });
                }),
                (a._clearMenus = function (n) {
                  if (
                    !n ||
                    (3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                  )
                    for (
                      var e = t.makeArray(t(h.DATA_TOGGLE)), i = 0;
                      i < e.length;
                      i++
                    ) {
                      var o = a._getParentFromElement(e[i]),
                        u = t(e[i]).data(r),
                        c = { relatedTarget: e[i] };
                      if (u) {
                        var s = u._menu;
                        if (
                          t(o).hasClass(l.SHOW) &&
                          !(
                            n &&
                            (("click" === n.type &&
                              /input|textarea/i.test(n.target.tagName)) ||
                              ("keyup" === n.type && 9 === n.which)) &&
                            t.contains(o, n.target)
                          )
                        ) {
                          var d = t.Event(f.HIDE, c);
                          t(o).trigger(d),
                            d.isDefaultPrevented() ||
                              ("ontouchstart" in document.documentElement &&
                                t(document.body)
                                  .children()
                                  .off("mouseover", null, t.noop),
                              e[i].setAttribute("aria-expanded", "false"),
                              t(s).removeClass(l.SHOW),
                              t(o)
                                .removeClass(l.SHOW)
                                .trigger(t.Event(f.HIDDEN, c)));
                        }
                      }
                    }
                }),
                (a._getParentFromElement = function (n) {
                  var e,
                    r = c.getSelectorFromElement(n);
                  return r && (e = t(r)[0]), e || n.parentNode;
                }),
                (a._dataApiKeydownHandler = function (n) {
                  if (
                    (/input|textarea/i.test(n.target.tagName)
                      ? !(
                          32 === n.which ||
                          (27 !== n.which &&
                            ((40 !== n.which && 38 !== n.which) ||
                              t(n.target).closest(h.MENU).length))
                        )
                      : s.test(n.which)) &&
                    (n.preventDefault(),
                    n.stopPropagation(),
                    !this.disabled && !t(this).hasClass(l.DISABLED))
                  ) {
                    var e = a._getParentFromElement(this),
                      r = t(e).hasClass(l.SHOW);
                    if (
                      (!r && (27 !== n.which || 32 !== n.which)) ||
                      (r && (27 === n.which || 32 === n.which))
                    ) {
                      if (27 === n.which) {
                        var i = t(e).find(h.DATA_TOGGLE)[0];
                        t(i).trigger("focus");
                      }
                      return void t(this).trigger("click");
                    }
                    var o = t(e).find(h.VISIBLE_ITEMS).get();
                    if (0 !== o.length) {
                      var u = o.indexOf(n.target);
                      38 === n.which && u > 0 && u--,
                        40 === n.which && u < o.length - 1 && u++,
                        u < 0 && (u = 0),
                        o[u].focus();
                    }
                  }
                }),
                i(a, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return p;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return v;
                    },
                  },
                ]),
                a
              );
            })();
          return (
            t(document)
              .on(f.KEYDOWN_DATA_API, h.DATA_TOGGLE, g._dataApiKeydownHandler)
              .on(f.KEYDOWN_DATA_API, h.MENU, g._dataApiKeydownHandler)
              .on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, g._clearMenus)
              .on(f.CLICK_DATA_API, h.DATA_TOGGLE, function (n) {
                n.preventDefault(),
                  n.stopPropagation(),
                  g._jQueryInterface.call(t(this), "toggle");
              })
              .on(f.CLICK_DATA_API, h.FORM_CHILD, function (t) {
                t.stopPropagation();
              }),
            (t.fn[n] = g._jQueryInterface),
            (t.fn[n].Constructor = g),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = a), g._jQueryInterface;
            }),
            g
          );
        })(n),
        p = (function (t) {
          var n = "modal",
            e = ".bs.modal",
            r = t.fn[n],
            o = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            a = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean",
            },
            s = {
              HIDE: "hide.bs.modal",
              HIDDEN: "hidden.bs.modal",
              SHOW: "show.bs.modal",
              SHOWN: "shown.bs.modal",
              FOCUSIN: "focusin.bs.modal",
              RESIZE: "resize.bs.modal",
              CLICK_DISMISS: "click.dismiss.bs.modal",
              KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
              MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
              MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
              CLICK_DATA_API: "click.bs.modal.data-api",
            },
            f = {
              SCROLLBAR_MEASURER: "modal-scrollbar-measure",
              BACKDROP: "modal-backdrop",
              OPEN: "modal-open",
              FADE: "fade",
              SHOW: "show",
            },
            l = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              STICKY_CONTENT: ".sticky-top",
              NAVBAR_TOGGLER: ".navbar-toggler",
            },
            h = (function () {
              function r(n, e) {
                (this._config = this._getConfig(e)),
                  (this._element = n),
                  (this._dialog = t(n).find(l.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._scrollbarWidth = 0);
              }
              var h = r.prototype;
              return (
                (h.toggle = function (t) {
                  return this._isShown ? this.hide() : this.show(t);
                }),
                (h.show = function (n) {
                  var e = this;
                  if (!this._isTransitioning && !this._isShown) {
                    t(this._element).hasClass(f.FADE) &&
                      (this._isTransitioning = !0);
                    var r = t.Event(s.SHOW, { relatedTarget: n });
                    t(this._element).trigger(r),
                      this._isShown ||
                        r.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        this._adjustDialog(),
                        t(document.body).addClass(f.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(this._element).on(
                          s.CLICK_DISMISS,
                          l.DATA_DISMISS,
                          function (t) {
                            return e.hide(t);
                          }
                        ),
                        t(this._dialog).on(s.MOUSEDOWN_DISMISS, function () {
                          t(e._element).one(s.MOUSEUP_DISMISS, function (n) {
                            t(n.target).is(e._element) &&
                              (e._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function () {
                          return e._showElement(n);
                        }));
                  }
                }),
                (h.hide = function (n) {
                  var e = this;
                  if (
                    (n && n.preventDefault(),
                    !this._isTransitioning && this._isShown)
                  ) {
                    var r = t.Event(s.HIDE);
                    if (
                      (t(this._element).trigger(r),
                      this._isShown && !r.isDefaultPrevented())
                    ) {
                      this._isShown = !1;
                      var i = t(this._element).hasClass(f.FADE);
                      if (
                        (i && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(s.FOCUSIN),
                        t(this._element).removeClass(f.SHOW),
                        t(this._element).off(s.CLICK_DISMISS),
                        t(this._dialog).off(s.MOUSEDOWN_DISMISS),
                        i)
                      ) {
                        var o = c.getTransitionDurationFromElement(
                          this._element
                        );
                        t(this._element)
                          .one(c.TRANSITION_END, function (t) {
                            return e._hideModal(t);
                          })
                          .emulateTransitionEnd(o);
                      } else this._hideModal();
                    }
                  }
                }),
                (h.dispose = function () {
                  t.removeData(this._element, "bs.modal"),
                    t(window, document, this._element, this._backdrop).off(e),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (h.handleUpdate = function () {
                  this._adjustDialog();
                }),
                (h._getConfig = function (t) {
                  return (t = u({}, o, t)), c.typeCheckConfig(n, t, a), t;
                }),
                (h._showElement = function (n) {
                  var e = this,
                    r = t(this._element).hasClass(f.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    r && c.reflow(this._element),
                    t(this._element).addClass(f.SHOW),
                    this._config.focus && this._enforceFocus();
                  var i = t.Event(s.SHOWN, { relatedTarget: n }),
                    o = function () {
                      e._config.focus && e._element.focus(),
                        (e._isTransitioning = !1),
                        t(e._element).trigger(i);
                    };
                  if (r) {
                    var u = c.getTransitionDurationFromElement(this._element);
                    t(this._dialog)
                      .one(c.TRANSITION_END, o)
                      .emulateTransitionEnd(u);
                  } else o();
                }),
                (h._enforceFocus = function () {
                  var n = this;
                  t(document)
                    .off(s.FOCUSIN)
                    .on(s.FOCUSIN, function (e) {
                      document !== e.target &&
                        n._element !== e.target &&
                        0 === t(n._element).has(e.target).length &&
                        n._element.focus();
                    });
                }),
                (h._setEscapeEvent = function () {
                  var n = this;
                  this._isShown && this._config.keyboard
                    ? t(this._element).on(s.KEYDOWN_DISMISS, function (t) {
                        27 === t.which && (t.preventDefault(), n.hide());
                      })
                    : this._isShown || t(this._element).off(s.KEYDOWN_DISMISS);
                }),
                (h._setResizeEvent = function () {
                  var n = this;
                  this._isShown
                    ? t(window).on(s.RESIZE, function (t) {
                        return n.handleUpdate(t);
                      })
                    : t(window).off(s.RESIZE);
                }),
                (h._hideModal = function () {
                  var n = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function () {
                      t(document.body).removeClass(f.OPEN),
                        n._resetAdjustments(),
                        n._resetScrollbar(),
                        t(n._element).trigger(s.HIDDEN);
                    });
                }),
                (h._removeBackdrop = function () {
                  this._backdrop &&
                    (t(this._backdrop).remove(), (this._backdrop = null));
                }),
                (h._showBackdrop = function (n) {
                  var e = this,
                    r = t(this._element).hasClass(f.FADE) ? f.FADE : "";
                  if (this._isShown && this._config.backdrop) {
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = f.BACKDROP),
                      r && t(this._backdrop).addClass(r),
                      t(this._backdrop).appendTo(document.body),
                      t(this._element).on(s.CLICK_DISMISS, function (t) {
                        if (e._ignoreBackdropClick)
                          return void (e._ignoreBackdropClick = !1);
                        t.target === t.currentTarget &&
                          ("static" === e._config.backdrop
                            ? e._element.focus()
                            : e.hide());
                      }),
                      r && c.reflow(this._backdrop),
                      t(this._backdrop).addClass(f.SHOW),
                      !n)
                    )
                      return;
                    if (!r) return void n();
                    var i = c.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop)
                      .one(c.TRANSITION_END, n)
                      .emulateTransitionEnd(i);
                  } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(f.SHOW);
                    var o = function () {
                      e._removeBackdrop(), n && n();
                    };
                    if (t(this._element).hasClass(f.FADE)) {
                      var u = c.getTransitionDurationFromElement(
                        this._backdrop
                      );
                      t(this._backdrop)
                        .one(c.TRANSITION_END, o)
                        .emulateTransitionEnd(u);
                    } else o();
                  } else n && n();
                }),
                (h._adjustDialog = function () {
                  var t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    t &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + "px"),
                    this._isBodyOverflowing &&
                      !t &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + "px");
                }),
                (h._resetAdjustments = function () {
                  (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (h._checkScrollbar = function () {
                  var t = document.body.getBoundingClientRect();
                  (this._isBodyOverflowing =
                    t.left + t.right < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (h._setScrollbar = function () {
                  var n = this;
                  if (this._isBodyOverflowing) {
                    t(l.FIXED_CONTENT).each(function (e, r) {
                      var i = t(r)[0].style.paddingRight,
                        o = t(r).css("padding-right");
                      t(r)
                        .data("padding-right", i)
                        .css(
                          "padding-right",
                          parseFloat(o) + n._scrollbarWidth + "px"
                        );
                    }),
                      t(l.STICKY_CONTENT).each(function (e, r) {
                        var i = t(r)[0].style.marginRight,
                          o = t(r).css("margin-right");
                        t(r)
                          .data("margin-right", i)
                          .css(
                            "margin-right",
                            parseFloat(o) - n._scrollbarWidth + "px"
                          );
                      }),
                      t(l.NAVBAR_TOGGLER).each(function (e, r) {
                        var i = t(r)[0].style.marginRight,
                          o = t(r).css("margin-right");
                        t(r)
                          .data("margin-right", i)
                          .css(
                            "margin-right",
                            parseFloat(o) + n._scrollbarWidth + "px"
                          );
                      });
                    var e = document.body.style.paddingRight,
                      r = t(document.body).css("padding-right");
                    t(document.body)
                      .data("padding-right", e)
                      .css(
                        "padding-right",
                        parseFloat(r) + this._scrollbarWidth + "px"
                      );
                  }
                }),
                (h._resetScrollbar = function () {
                  t(l.FIXED_CONTENT).each(function (n, e) {
                    var r = t(e).data("padding-right");
                    void 0 !== r &&
                      t(e).css("padding-right", r).removeData("padding-right");
                  }),
                    t(l.STICKY_CONTENT + ", " + l.NAVBAR_TOGGLER).each(
                      function (n, e) {
                        var r = t(e).data("margin-right");
                        void 0 !== r &&
                          t(e)
                            .css("margin-right", r)
                            .removeData("margin-right");
                      }
                    );
                  var n = t(document.body).data("padding-right");
                  void 0 !== n &&
                    t(document.body)
                      .css("padding-right", n)
                      .removeData("padding-right");
                }),
                (h._getScrollbarWidth = function () {
                  var t = document.createElement("div");
                  (t.className = f.SCROLLBAR_MEASURER),
                    document.body.appendChild(t);
                  var n = t.getBoundingClientRect().width - t.clientWidth;
                  return document.body.removeChild(t), n;
                }),
                (r._jQueryInterface = function (n, e) {
                  return this.each(function () {
                    var i = t(this).data("bs.modal"),
                      a = u(
                        {},
                        o,
                        t(this).data(),
                        "object" == typeof n && n ? n : {}
                      );
                    if (
                      (i || ((i = new r(this, a)), t(this).data("bs.modal", i)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === i[n])
                        throw new TypeError('No method named "' + n + '"');
                      i[n](e);
                    } else a.show && i.show(e);
                  });
                }),
                i(r, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return o;
                    },
                  },
                ]),
                r
              );
            })();
          return (
            t(document).on(s.CLICK_DATA_API, l.DATA_TOGGLE, function (n) {
              var e,
                r = this,
                i = c.getSelectorFromElement(this);
              i && (e = t(i)[0]);
              var o = t(e).data("bs.modal")
                ? "toggle"
                : u({}, t(e).data(), t(this).data());
              ("A" !== this.tagName && "AREA" !== this.tagName) ||
                n.preventDefault();
              var a = t(e).one(s.SHOW, function (n) {
                n.isDefaultPrevented() ||
                  a.one(s.HIDDEN, function () {
                    t(r).is(":visible") && r.focus();
                  });
              });
              h._jQueryInterface.call(t(e), o, this);
            }),
            (t.fn[n] = h._jQueryInterface),
            (t.fn[n].Constructor = h),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = r), h._jQueryInterface;
            }),
            h
          );
        })(n),
        v = (function (t) {
          var n = "tooltip",
            r = ".bs.tooltip",
            o = t.fn[n],
            a = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            s = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
              boundary: "(string|element)",
            },
            f = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left",
            },
            l = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
              boundary: "scrollParent",
            },
            h = { SHOW: "show", OUT: "out" },
            d = {
              HIDE: "hide" + r,
              HIDDEN: "hidden" + r,
              SHOW: "show" + r,
              SHOWN: "shown" + r,
              INSERTED: "inserted" + r,
              CLICK: "click" + r,
              FOCUSIN: "focusin" + r,
              FOCUSOUT: "focusout" + r,
              MOUSEENTER: "mouseenter" + r,
              MOUSELEAVE: "mouseleave" + r,
            },
            p = { FADE: "fade", SHOW: "show" },
            v = {
              TOOLTIP: ".tooltip",
              TOOLTIP_INNER: ".tooltip-inner",
              ARROW: ".arrow",
            },
            g = {
              HOVER: "hover",
              FOCUS: "focus",
              CLICK: "click",
              MANUAL: "manual",
            },
            b = (function () {
              function o(t, n) {
                if (void 0 === e)
                  throw new TypeError(
                    "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                  );
                (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = t),
                  (this.config = this._getConfig(n)),
                  (this.tip = null),
                  this._setListeners();
              }
              var b = o.prototype;
              return (
                (b.enable = function () {
                  this._isEnabled = !0;
                }),
                (b.disable = function () {
                  this._isEnabled = !1;
                }),
                (b.toggleEnabled = function () {
                  this._isEnabled = !this._isEnabled;
                }),
                (b.toggle = function (n) {
                  if (this._isEnabled)
                    if (n) {
                      var e = this.constructor.DATA_KEY,
                        r = t(n.currentTarget).data(e);
                      r ||
                        ((r = new this.constructor(
                          n.currentTarget,
                          this._getDelegateConfig()
                        )),
                        t(n.currentTarget).data(e, r)),
                        (r._activeTrigger.click = !r._activeTrigger.click),
                        r._isWithActiveTrigger()
                          ? r._enter(null, r)
                          : r._leave(null, r);
                    } else {
                      if (t(this.getTipElement()).hasClass(p.SHOW))
                        return void this._leave(null, this);
                      this._enter(null, this);
                    }
                }),
                (b.dispose = function () {
                  clearTimeout(this._timeout),
                    t.removeData(this.element, this.constructor.DATA_KEY),
                    t(this.element).off(this.constructor.EVENT_KEY),
                    t(this.element).closest(".modal").off("hide.bs.modal"),
                    this.tip && t(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (b.show = function () {
                  var n = this;
                  if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                  var r = t.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(r);
                    var i = t.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (r.isDefaultPrevented() || !i) return;
                    var o = this.getTipElement(),
                      u = c.getUID(this.constructor.NAME);
                    o.setAttribute("id", u),
                      this.element.setAttribute("aria-describedby", u),
                      this.setContent(),
                      this.config.animation && t(o).addClass(p.FADE);
                    var a =
                        "function" == typeof this.config.placement
                          ? this.config.placement.call(this, o, this.element)
                          : this.config.placement,
                      s = this._getAttachment(a);
                    this.addAttachmentClass(s);
                    var f =
                      !1 === this.config.container
                        ? document.body
                        : t(this.config.container);
                    t(o).data(this.constructor.DATA_KEY, this),
                      t.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip
                      ) || t(o).appendTo(f),
                      t(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new e(this.element, o, {
                        placement: s,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: v.ARROW },
                          preventOverflow: {
                            boundariesElement: this.config.boundary,
                          },
                        },
                        onCreate: function (t) {
                          t.originalPlacement !== t.placement &&
                            n._handlePopperPlacementChange(t);
                        },
                        onUpdate: function (t) {
                          n._handlePopperPlacementChange(t);
                        },
                      })),
                      t(o).addClass(p.SHOW),
                      "ontouchstart" in document.documentElement &&
                        t(document.body)
                          .children()
                          .on("mouseover", null, t.noop);
                    var l = function () {
                      n.config.animation && n._fixTransition();
                      var e = n._hoverState;
                      (n._hoverState = null),
                        t(n.element).trigger(n.constructor.Event.SHOWN),
                        e === h.OUT && n._leave(null, n);
                    };
                    if (t(this.tip).hasClass(p.FADE)) {
                      var d = c.getTransitionDurationFromElement(this.tip);
                      t(this.tip)
                        .one(c.TRANSITION_END, l)
                        .emulateTransitionEnd(d);
                    } else l();
                  }
                }),
                (b.hide = function (n) {
                  var e = this,
                    r = this.getTipElement(),
                    i = t.Event(this.constructor.Event.HIDE),
                    o = function () {
                      e._hoverState !== h.SHOW &&
                        r.parentNode &&
                        r.parentNode.removeChild(r),
                        e._cleanTipClass(),
                        e.element.removeAttribute("aria-describedby"),
                        t(e.element).trigger(e.constructor.Event.HIDDEN),
                        null !== e._popper && e._popper.destroy(),
                        n && n();
                    };
                  if ((t(this.element).trigger(i), !i.isDefaultPrevented())) {
                    if (
                      (t(r).removeClass(p.SHOW),
                      "ontouchstart" in document.documentElement &&
                        t(document.body)
                          .children()
                          .off("mouseover", null, t.noop),
                      (this._activeTrigger[g.CLICK] = !1),
                      (this._activeTrigger[g.FOCUS] = !1),
                      (this._activeTrigger[g.HOVER] = !1),
                      t(this.tip).hasClass(p.FADE))
                    ) {
                      var u = c.getTransitionDurationFromElement(r);
                      t(r).one(c.TRANSITION_END, o).emulateTransitionEnd(u);
                    } else o();
                    this._hoverState = "";
                  }
                }),
                (b.update = function () {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (b.isWithContent = function () {
                  return Boolean(this.getTitle());
                }),
                (b.addAttachmentClass = function (n) {
                  t(this.getTipElement()).addClass("bs-tooltip-" + n);
                }),
                (b.getTipElement = function () {
                  return (
                    (this.tip = this.tip || t(this.config.template)[0]),
                    this.tip
                  );
                }),
                (b.setContent = function () {
                  var n = t(this.getTipElement());
                  this.setElementContent(
                    n.find(v.TOOLTIP_INNER),
                    this.getTitle()
                  ),
                    n.removeClass(p.FADE + " " + p.SHOW);
                }),
                (b.setElementContent = function (n, e) {
                  var r = this.config.html;
                  "object" == typeof e && (e.nodeType || e.jquery)
                    ? r
                      ? t(e).parent().is(n) || n.empty().append(e)
                      : n.text(t(e).text())
                    : n[r ? "html" : "text"](e);
                }),
                (b.getTitle = function () {
                  var t = this.element.getAttribute("data-original-title");
                  return (
                    t ||
                      (t =
                        "function" == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    t
                  );
                }),
                (b._getAttachment = function (t) {
                  return f[t.toUpperCase()];
                }),
                (b._setListeners = function () {
                  var n = this;
                  this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e)
                      t(n.element).on(
                        n.constructor.Event.CLICK,
                        n.config.selector,
                        function (t) {
                          return n.toggle(t);
                        }
                      );
                    else if (e !== g.MANUAL) {
                      var r =
                          e === g.HOVER
                            ? n.constructor.Event.MOUSEENTER
                            : n.constructor.Event.FOCUSIN,
                        i =
                          e === g.HOVER
                            ? n.constructor.Event.MOUSELEAVE
                            : n.constructor.Event.FOCUSOUT;
                      t(n.element)
                        .on(r, n.config.selector, function (t) {
                          return n._enter(t);
                        })
                        .on(i, n.config.selector, function (t) {
                          return n._leave(t);
                        });
                    }
                    t(n.element)
                      .closest(".modal")
                      .on("hide.bs.modal", function () {
                        return n.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = u({}, this.config, {
                          trigger: "manual",
                          selector: "",
                        }))
                      : this._fixTitle();
                }),
                (b._fixTitle = function () {
                  var t = typeof this.element.getAttribute(
                    "data-original-title"
                  );
                  (this.element.getAttribute("title") || "string" !== t) &&
                    (this.element.setAttribute(
                      "data-original-title",
                      this.element.getAttribute("title") || ""
                    ),
                    this.element.setAttribute("title", ""));
                }),
                (b._enter = function (n, e) {
                  var r = this.constructor.DATA_KEY;
                  return (
                    (e = e || t(n.currentTarget).data(r)),
                    e ||
                      ((e = new this.constructor(
                        n.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(n.currentTarget).data(r, e)),
                    n &&
                      (e._activeTrigger[
                        "focusin" === n.type ? g.FOCUS : g.HOVER
                      ] = !0),
                    t(e.getTipElement()).hasClass(p.SHOW) ||
                    e._hoverState === h.SHOW
                      ? void (e._hoverState = h.SHOW)
                      : (clearTimeout(e._timeout),
                        (e._hoverState = h.SHOW),
                        e.config.delay && e.config.delay.show
                          ? void (e._timeout = setTimeout(function () {
                              e._hoverState === h.SHOW && e.show();
                            }, e.config.delay.show))
                          : void e.show())
                  );
                }),
                (b._leave = function (n, e) {
                  var r = this.constructor.DATA_KEY;
                  if (
                    ((e = e || t(n.currentTarget).data(r)),
                    e ||
                      ((e = new this.constructor(
                        n.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(n.currentTarget).data(r, e)),
                    n &&
                      (e._activeTrigger[
                        "focusout" === n.type ? g.FOCUS : g.HOVER
                      ] = !1),
                    !e._isWithActiveTrigger())
                  ) {
                    if (
                      (clearTimeout(e._timeout),
                      (e._hoverState = h.OUT),
                      !e.config.delay || !e.config.delay.hide)
                    )
                      return void e.hide();
                    e._timeout = setTimeout(function () {
                      e._hoverState === h.OUT && e.hide();
                    }, e.config.delay.hide);
                  }
                }),
                (b._isWithActiveTrigger = function () {
                  for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                  return !1;
                }),
                (b._getConfig = function (e) {
                  return (
                    (e = u(
                      {},
                      this.constructor.Default,
                      t(this.element).data(),
                      "object" == typeof e && e ? e : {}
                    )),
                    "number" == typeof e.delay &&
                      (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title &&
                      (e.title = e.title.toString()),
                    "number" == typeof e.content &&
                      (e.content = e.content.toString()),
                    c.typeCheckConfig(n, e, this.constructor.DefaultType),
                    e
                  );
                }),
                (b._getDelegateConfig = function () {
                  var t = {};
                  if (this.config)
                    for (var n in this.config)
                      this.constructor.Default[n] !== this.config[n] &&
                        (t[n] = this.config[n]);
                  return t;
                }),
                (b._cleanTipClass = function () {
                  var n = t(this.getTipElement()),
                    e = n.attr("class").match(a);
                  null !== e && e.length > 0 && n.removeClass(e.join(""));
                }),
                (b._handlePopperPlacementChange = function (t) {
                  this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(t.placement));
                }),
                (b._fixTransition = function () {
                  var n = this.getTipElement(),
                    e = this.config.animation;
                  null === n.getAttribute("x-placement") &&
                    (t(n).removeClass(p.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = e));
                }),
                (o._jQueryInterface = function (n) {
                  return this.each(function () {
                    var e = t(this).data("bs.tooltip"),
                      r = "object" == typeof n && n;
                    if (
                      (e || !/dispose|hide/.test(n)) &&
                      (e ||
                        ((e = new o(this, r)), t(this).data("bs.tooltip", e)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                      e[n]();
                    }
                  });
                }),
                i(o, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return l;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return n;
                    },
                  },
                  {
                    key: "DATA_KEY",
                    get: function () {
                      return "bs.tooltip";
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return d;
                    },
                  },
                  {
                    key: "EVENT_KEY",
                    get: function () {
                      return r;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return s;
                    },
                  },
                ]),
                o
              );
            })();
          return (
            (t.fn[n] = b._jQueryInterface),
            (t.fn[n].Constructor = b),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = o), b._jQueryInterface;
            }),
            b
          );
        })(n),
        g = (function (t) {
          var n = "popover",
            e = ".bs.popover",
            r = t.fn[n],
            o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            c = u({}, v.Default, {
              placement: "right",
              trigger: "click",
              content: "",
              template:
                '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            }),
            s = u({}, v.DefaultType, { content: "(string|element|function)" }),
            f = { FADE: "fade", SHOW: "show" },
            l = { TITLE: ".popover-header", CONTENT: ".popover-body" },
            h = {
              HIDE: "hide" + e,
              HIDDEN: "hidden" + e,
              SHOW: "show" + e,
              SHOWN: "shown" + e,
              INSERTED: "inserted" + e,
              CLICK: "click" + e,
              FOCUSIN: "focusin" + e,
              FOCUSOUT: "focusout" + e,
              MOUSEENTER: "mouseenter" + e,
              MOUSELEAVE: "mouseleave" + e,
            },
            d = (function (r) {
              function u() {
                return r.apply(this, arguments) || this;
              }
              a(u, r);
              var d = u.prototype;
              return (
                (d.isWithContent = function () {
                  return this.getTitle() || this._getContent();
                }),
                (d.addAttachmentClass = function (n) {
                  t(this.getTipElement()).addClass("bs-popover-" + n);
                }),
                (d.getTipElement = function () {
                  return (
                    (this.tip = this.tip || t(this.config.template)[0]),
                    this.tip
                  );
                }),
                (d.setContent = function () {
                  var n = t(this.getTipElement());
                  this.setElementContent(n.find(l.TITLE), this.getTitle());
                  var e = this._getContent();
                  "function" == typeof e && (e = e.call(this.element)),
                    this.setElementContent(n.find(l.CONTENT), e),
                    n.removeClass(f.FADE + " " + f.SHOW);
                }),
                (d._getContent = function () {
                  return (
                    this.element.getAttribute("data-content") ||
                    this.config.content
                  );
                }),
                (d._cleanTipClass = function () {
                  var n = t(this.getTipElement()),
                    e = n.attr("class").match(o);
                  null !== e && e.length > 0 && n.removeClass(e.join(""));
                }),
                (u._jQueryInterface = function (n) {
                  return this.each(function () {
                    var e = t(this).data("bs.popover"),
                      r = "object" == typeof n ? n : null;
                    if (
                      (e || !/destroy|hide/.test(n)) &&
                      (e ||
                        ((e = new u(this, r)), t(this).data("bs.popover", e)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === e[n])
                        throw new TypeError('No method named "' + n + '"');
                      e[n]();
                    }
                  });
                }),
                i(u, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return c;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return n;
                    },
                  },
                  {
                    key: "DATA_KEY",
                    get: function () {
                      return "bs.popover";
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return h;
                    },
                  },
                  {
                    key: "EVENT_KEY",
                    get: function () {
                      return e;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return s;
                    },
                  },
                ]),
                u
              );
            })(v);
          return (
            (t.fn[n] = d._jQueryInterface),
            (t.fn[n].Constructor = d),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = r), d._jQueryInterface;
            }),
            d
          );
        })(n),
        b = (function (t) {
          var n = "scrollspy",
            e = t.fn[n],
            r = { offset: 10, method: "auto", target: "" },
            o = {
              offset: "number",
              method: "string",
              target: "(string|element)",
            },
            a = {
              ACTIVATE: "activate.bs.scrollspy",
              SCROLL: "scroll.bs.scrollspy",
              LOAD_DATA_API: "load.bs.scrollspy.data-api",
            },
            s = {
              DROPDOWN_ITEM: "dropdown-item",
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
            },
            f = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              NAV_ITEMS: ".nav-item",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
            },
            l = { OFFSET: "offset", POSITION: "position" },
            h = (function () {
              function e(n, e) {
                var r = this;
                (this._element = n),
                  (this._scrollElement = "BODY" === n.tagName ? window : n),
                  (this._config = this._getConfig(e)),
                  (this._selector =
                    this._config.target +
                    " " +
                    f.NAV_LINKS +
                    "," +
                    this._config.target +
                    " " +
                    f.LIST_ITEMS +
                    "," +
                    this._config.target +
                    " " +
                    f.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  t(this._scrollElement).on(a.SCROLL, function (t) {
                    return r._process(t);
                  }),
                  this.refresh(),
                  this._process();
              }
              var h = e.prototype;
              return (
                (h.refresh = function () {
                  var n = this,
                    e =
                      this._scrollElement === this._scrollElement.window
                        ? l.OFFSET
                        : l.POSITION,
                    r =
                      "auto" === this._config.method ? e : this._config.method,
                    i = r === l.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    t
                      .makeArray(t(this._selector))
                      .map(function (n) {
                        var e,
                          o = c.getSelectorFromElement(n);
                        if ((o && (e = t(o)[0]), e)) {
                          var u = e.getBoundingClientRect();
                          if (u.width || u.height)
                            return [t(e)[r]().top + i, o];
                        }
                        return null;
                      })
                      .filter(function (t) {
                        return t;
                      })
                      .sort(function (t, n) {
                        return t[0] - n[0];
                      })
                      .forEach(function (t) {
                        n._offsets.push(t[0]), n._targets.push(t[1]);
                      });
                }),
                (h.dispose = function () {
                  t.removeData(this._element, "bs.scrollspy"),
                    t(this._scrollElement).off(".bs.scrollspy"),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (h._getConfig = function (e) {
                  if (
                    ((e = u({}, r, "object" == typeof e && e ? e : {})),
                    "string" != typeof e.target)
                  ) {
                    var i = t(e.target).attr("id");
                    i || ((i = c.getUID(n)), t(e.target).attr("id", i)),
                      (e.target = "#" + i);
                  }
                  return c.typeCheckConfig(n, e, o), e;
                }),
                (h._getScrollTop = function () {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (h._getScrollHeight = function () {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (h._getOffsetHeight = function () {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (h._process = function () {
                  var t = this._getScrollTop() + this._config.offset,
                    n = this._getScrollHeight(),
                    e = this._config.offset + n - this._getOffsetHeight();
                  if ((this._scrollHeight !== n && this.refresh(), t >= e)) {
                    var r = this._targets[this._targets.length - 1];
                    return void (this._activeTarget !== r && this._activate(r));
                  }
                  if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                  )
                    return (this._activeTarget = null), void this._clear();
                  for (var i = this._offsets.length; i--; ) {
                    this._activeTarget !== this._targets[i] &&
                      t >= this._offsets[i] &&
                      (void 0 === this._offsets[i + 1] ||
                        t < this._offsets[i + 1]) &&
                      this._activate(this._targets[i]);
                  }
                }),
                (h._activate = function (n) {
                  (this._activeTarget = n), this._clear();
                  var e = this._selector.split(",");
                  e = e.map(function (t) {
                    return (
                      t +
                      '[data-target="' +
                      n +
                      '"],' +
                      t +
                      '[href="' +
                      n +
                      '"]'
                    );
                  });
                  var r = t(e.join(","));
                  r.hasClass(s.DROPDOWN_ITEM)
                    ? (r
                        .closest(f.DROPDOWN)
                        .find(f.DROPDOWN_TOGGLE)
                        .addClass(s.ACTIVE),
                      r.addClass(s.ACTIVE))
                    : (r.addClass(s.ACTIVE),
                      r
                        .parents(f.NAV_LIST_GROUP)
                        .prev(f.NAV_LINKS + ", " + f.LIST_ITEMS)
                        .addClass(s.ACTIVE),
                      r
                        .parents(f.NAV_LIST_GROUP)
                        .prev(f.NAV_ITEMS)
                        .children(f.NAV_LINKS)
                        .addClass(s.ACTIVE)),
                    t(this._scrollElement).trigger(a.ACTIVATE, {
                      relatedTarget: n,
                    });
                }),
                (h._clear = function () {
                  t(this._selector).filter(f.ACTIVE).removeClass(s.ACTIVE);
                }),
                (e._jQueryInterface = function (n) {
                  return this.each(function () {
                    var r = t(this).data("bs.scrollspy"),
                      i = "object" == typeof n && n;
                    if (
                      (r ||
                        ((r = new e(this, i)), t(this).data("bs.scrollspy", r)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === r[n])
                        throw new TypeError('No method named "' + n + '"');
                      r[n]();
                    }
                  });
                }),
                i(e, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return r;
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(window).on(a.LOAD_DATA_API, function () {
              for (var n = t.makeArray(t(f.DATA_SPY)), e = n.length; e--; ) {
                var r = t(n[e]);
                h._jQueryInterface.call(r, r.data());
              }
            }),
            (t.fn[n] = h._jQueryInterface),
            (t.fn[n].Constructor = h),
            (t.fn[n].noConflict = function () {
              return (t.fn[n] = e), h._jQueryInterface;
            }),
            h
          );
        })(n),
        m = (function (t) {
          var n = t.fn.tab,
            e = {
              HIDE: "hide.bs.tab",
              HIDDEN: "hidden.bs.tab",
              SHOW: "show.bs.tab",
              SHOWN: "shown.bs.tab",
              CLICK_DATA_API: "click.bs.tab.data-api",
            },
            r = {
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
              DISABLED: "disabled",
              FADE: "fade",
              SHOW: "show",
            },
            o = {
              DROPDOWN: ".dropdown",
              NAV_LIST_GROUP: ".nav, .list-group",
              ACTIVE: ".active",
              ACTIVE_UL: "> li > .active",
              DATA_TOGGLE:
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              DROPDOWN_TOGGLE: ".dropdown-toggle",
              DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
            },
            u = (function () {
              function n(t) {
                this._element = t;
              }
              var u = n.prototype;
              return (
                (u.show = function () {
                  var n = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        t(this._element).hasClass(r.ACTIVE)) ||
                      t(this._element).hasClass(r.DISABLED)
                    )
                  ) {
                    var i,
                      u,
                      a = t(this._element).closest(o.NAV_LIST_GROUP)[0],
                      s = c.getSelectorFromElement(this._element);
                    if (a) {
                      var f = "UL" === a.nodeName ? o.ACTIVE_UL : o.ACTIVE;
                      (u = t.makeArray(t(a).find(f))), (u = u[u.length - 1]);
                    }
                    var l = t.Event(e.HIDE, { relatedTarget: this._element }),
                      h = t.Event(e.SHOW, { relatedTarget: u });
                    if (
                      (u && t(u).trigger(l),
                      t(this._element).trigger(h),
                      !h.isDefaultPrevented() && !l.isDefaultPrevented())
                    ) {
                      s && (i = t(s)[0]), this._activate(this._element, a);
                      var d = function () {
                        var r = t.Event(e.HIDDEN, {
                            relatedTarget: n._element,
                          }),
                          i = t.Event(e.SHOWN, { relatedTarget: u });
                        t(u).trigger(r), t(n._element).trigger(i);
                      };
                      i ? this._activate(i, i.parentNode, d) : d();
                    }
                  }
                }),
                (u.dispose = function () {
                  t.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (u._activate = function (n, e, i) {
                  var u,
                    a = this;
                  u =
                    "UL" === e.nodeName
                      ? t(e).find(o.ACTIVE_UL)
                      : t(e).children(o.ACTIVE);
                  var s = u[0],
                    f = i && s && t(s).hasClass(r.FADE),
                    l = function () {
                      return a._transitionComplete(n, s, i);
                    };
                  if (s && f) {
                    var h = c.getTransitionDurationFromElement(s);
                    t(s).one(c.TRANSITION_END, l).emulateTransitionEnd(h);
                  } else l();
                }),
                (u._transitionComplete = function (n, e, i) {
                  if (e) {
                    t(e).removeClass(r.SHOW + " " + r.ACTIVE);
                    var u = t(e.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];
                    u && t(u).removeClass(r.ACTIVE),
                      "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !1);
                  }
                  if (
                    (t(n).addClass(r.ACTIVE),
                    "tab" === n.getAttribute("role") &&
                      n.setAttribute("aria-selected", !0),
                    c.reflow(n),
                    t(n).addClass(r.SHOW),
                    n.parentNode && t(n.parentNode).hasClass(r.DROPDOWN_MENU))
                  ) {
                    var a = t(n).closest(o.DROPDOWN)[0];
                    a && t(a).find(o.DROPDOWN_TOGGLE).addClass(r.ACTIVE),
                      n.setAttribute("aria-expanded", !0);
                  }
                  i && i();
                }),
                (n._jQueryInterface = function (e) {
                  return this.each(function () {
                    var r = t(this),
                      i = r.data("bs.tab");
                    if (
                      (i || ((i = new n(this)), r.data("bs.tab", i)),
                      "string" == typeof e)
                    ) {
                      if (void 0 === i[e])
                        throw new TypeError('No method named "' + e + '"');
                      i[e]();
                    }
                  });
                }),
                i(n, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.1.1";
                    },
                  },
                ]),
                n
              );
            })();
          return (
            t(document).on(e.CLICK_DATA_API, o.DATA_TOGGLE, function (n) {
              n.preventDefault(), u._jQueryInterface.call(t(this), "show");
            }),
            (t.fn.tab = u._jQueryInterface),
            (t.fn.tab.Constructor = u),
            (t.fn.tab.noConflict = function () {
              return (t.fn.tab = n), u._jQueryInterface;
            }),
            u
          );
        })(n);
      !(function (t) {
        if (void 0 === t)
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var n = t.fn.jquery.split(" ")[0].split(".");
        if (
          (n[0] < 2 && n[1] < 9) ||
          (1 === n[0] && 9 === n[1] && n[2] < 1) ||
          n[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      })(n),
        (t.Util = c),
        (t.Alert = s),
        (t.Button = f),
        (t.Carousel = l),
        (t.Collapse = h),
        (t.Dropdown = d),
        (t.Modal = p),
        (t.Popover = g),
        (t.Scrollspy = b),
        (t.Tab = m),
        (t.Tooltip = v),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  },
  function (t, n, e) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      function (t) {
        function e(t) {
          var n = !1;
          return function () {
            n ||
              ((n = !0),
              window.Promise.resolve().then(function () {
                (n = !1), t();
              }));
          };
        }
        function r(t) {
          var n = !1;
          return function () {
            n ||
              ((n = !0),
              setTimeout(function () {
                (n = !1), t();
              }, lt));
          };
        }
        function i(t) {
          var n = {};
          return t && "[object Function]" === n.toString.call(t);
        }
        function o(t, n) {
          if (1 !== t.nodeType) return [];
          var e = getComputedStyle(t, null);
          return n ? e[n] : e;
        }
        function u(t) {
          return "HTML" === t.nodeName ? t : t.parentNode || t.host;
        }
        function a(t) {
          if (!t) return document.body;
          switch (t.nodeName) {
            case "HTML":
            case "BODY":
              return t.ownerDocument.body;
            case "#document":
              return t.body;
          }
          var n = o(t),
            e = n.overflow,
            r = n.overflowX;
          return /(auto|scroll|overlay)/.test(e + n.overflowY + r)
            ? t
            : a(u(t));
        }
        function c(t) {
          return 11 === t ? vt : 10 === t ? gt : vt || gt;
        }
        function s(t) {
          if (!t) return document.documentElement;
          for (
            var n = c(10) ? document.body : null, e = t.offsetParent;
            e === n && t.nextElementSibling;

          )
            e = (t = t.nextElementSibling).offsetParent;
          var r = e && e.nodeName;
          return r && "BODY" !== r && "HTML" !== r
            ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) &&
              "static" === o(e, "position")
              ? s(e)
              : e
            : t
            ? t.ownerDocument.documentElement
            : document.documentElement;
        }
        function f(t) {
          var n = t.nodeName;
          return "BODY" !== n && ("HTML" === n || s(t.firstElementChild) === t);
        }
        function l(t) {
          return null !== t.parentNode ? l(t.parentNode) : t;
        }
        function h(t, n) {
          if (!(t && t.nodeType && n && n.nodeType))
            return document.documentElement;
          var e =
              t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = e ? t : n,
            i = e ? n : t,
            o = document.createRange();
          o.setStart(r, 0), o.setEnd(i, 0);
          var u = o.commonAncestorContainer;
          if ((t !== u && n !== u) || r.contains(i)) return f(u) ? u : s(u);
          var a = l(t);
          return a.host ? h(a.host, n) : h(t, l(n).host);
        }
        function d(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "top",
            e = "top" === n ? "scrollTop" : "scrollLeft",
            r = t.nodeName;
          if ("BODY" === r || "HTML" === r) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e];
          }
          return t[e];
        }
        function p(t, n) {
          var e =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = d(n, "top"),
            i = d(n, "left"),
            o = e ? -1 : 1;
          return (
            (t.top += r * o),
            (t.bottom += r * o),
            (t.left += i * o),
            (t.right += i * o),
            t
          );
        }
        function v(t, n) {
          var e = "x" === n ? "Left" : "Top",
            r = "Left" === e ? "Right" : "Bottom";
          return (
            parseFloat(t["border" + e + "Width"], 10) +
            parseFloat(t["border" + r + "Width"], 10)
          );
        }
        function g(t, n, e, r) {
          return Math.max(
            n["offset" + t],
            n["scroll" + t],
            e["client" + t],
            e["offset" + t],
            e["scroll" + t],
            c(10)
              ? e["offset" + t] +
                  r["margin" + ("Height" === t ? "Top" : "Left")] +
                  r["margin" + ("Height" === t ? "Bottom" : "Right")]
              : 0
          );
        }
        function b() {
          var t = document.body,
            n = document.documentElement,
            e = c(10) && getComputedStyle(n);
          return { height: g("Height", t, n, e), width: g("Width", t, n, e) };
        }
        function m(t) {
          return _t({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height,
          });
        }
        function y(t) {
          var n = {};
          try {
            if (c(10)) {
              n = t.getBoundingClientRect();
              var e = d(t, "top"),
                r = d(t, "left");
              (n.top += e), (n.left += r), (n.bottom += e), (n.right += r);
            } else n = t.getBoundingClientRect();
          } catch (t) {}
          var i = {
              left: n.left,
              top: n.top,
              width: n.right - n.left,
              height: n.bottom - n.top,
            },
            u = "HTML" === t.nodeName ? b() : {},
            a = u.width || t.clientWidth || i.right - i.left,
            s = u.height || t.clientHeight || i.bottom - i.top,
            f = t.offsetWidth - a,
            l = t.offsetHeight - s;
          if (f || l) {
            var h = o(t);
            (f -= v(h, "x")), (l -= v(h, "y")), (i.width -= f), (i.height -= l);
          }
          return m(i);
        }
        function _(t, n) {
          var e =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = c(10),
            i = "HTML" === n.nodeName,
            u = y(t),
            s = y(n),
            f = a(t),
            l = o(n),
            h = parseFloat(l.borderTopWidth, 10),
            d = parseFloat(l.borderLeftWidth, 10);
          e &&
            "HTML" === n.nodeName &&
            ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
          var v = m({
            top: u.top - s.top - h,
            left: u.left - s.left - d,
            width: u.width,
            height: u.height,
          });
          if (((v.marginTop = 0), (v.marginLeft = 0), !r && i)) {
            var g = parseFloat(l.marginTop, 10),
              b = parseFloat(l.marginLeft, 10);
            (v.top -= h - g),
              (v.bottom -= h - g),
              (v.left -= d - b),
              (v.right -= d - b),
              (v.marginTop = g),
              (v.marginLeft = b);
          }
          return (
            (r && !e ? n.contains(f) : n === f && "BODY" !== f.nodeName) &&
              (v = p(v, n)),
            v
          );
        }
        function O(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = t.ownerDocument.documentElement,
            r = _(t, e),
            i = Math.max(e.clientWidth, window.innerWidth || 0),
            o = Math.max(e.clientHeight, window.innerHeight || 0),
            u = n ? 0 : d(e),
            a = n ? 0 : d(e, "left");
          return m({
            top: u - r.top + r.marginTop,
            left: a - r.left + r.marginLeft,
            width: i,
            height: o,
          });
        }
        function x(t) {
          var n = t.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === o(t, "position") || x(u(t)))
          );
        }
        function w(t) {
          if (!t || !t.parentElement || c()) return document.documentElement;
          for (var n = t.parentElement; n && "none" === o(n, "transform"); )
            n = n.parentElement;
          return n || document.documentElement;
        }
        function j(t, n, e, r) {
          var i =
              arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            o = { top: 0, left: 0 },
            c = i ? w(t) : h(t, n);
          if ("viewport" === r) o = O(c, i);
          else {
            var s = void 0;
            "scrollParent" === r
              ? ((s = a(u(n))),
                "BODY" === s.nodeName && (s = t.ownerDocument.documentElement))
              : (s = "window" === r ? t.ownerDocument.documentElement : r);
            var f = _(s, c, i);
            if ("HTML" !== s.nodeName || x(c)) o = f;
            else {
              var l = b(),
                d = l.height,
                p = l.width;
              (o.top += f.top - f.marginTop),
                (o.bottom = d + f.top),
                (o.left += f.left - f.marginLeft),
                (o.right = p + f.left);
            }
          }
          return (
            (o.left += e), (o.top += e), (o.right -= e), (o.bottom -= e), o
          );
        }
        function T(t) {
          return t.width * t.height;
        }
        function E(t, n, e, r, i) {
          var o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          if (-1 === t.indexOf("auto")) return t;
          var u = j(e, r, o, i),
            a = {
              top: { width: u.width, height: n.top - u.top },
              right: { width: u.right - n.right, height: u.height },
              bottom: { width: u.width, height: u.bottom - n.bottom },
              left: { width: n.left - u.left, height: u.height },
            },
            c = Object.keys(a)
              .map(function (t) {
                return _t({ key: t }, a[t], { area: T(a[t]) });
              })
              .sort(function (t, n) {
                return n.area - t.area;
              }),
            s = c.filter(function (t) {
              var n = t.width,
                r = t.height;
              return n >= e.clientWidth && r >= e.clientHeight;
            }),
            f = s.length > 0 ? s[0].key : c[0].key,
            l = t.split("-")[1];
          return f + (l ? "-" + l : "");
        }
        function C(t, n, e) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return _(e, r ? w(n) : h(n, e), r);
        }
        function A(t) {
          var n = getComputedStyle(t),
            e = parseFloat(n.marginTop) + parseFloat(n.marginBottom),
            r = parseFloat(n.marginLeft) + parseFloat(n.marginRight);
          return { width: t.offsetWidth + r, height: t.offsetHeight + e };
        }
        function S(t) {
          var n = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom",
          };
          return t.replace(/left|right|bottom|top/g, function (t) {
            return n[t];
          });
        }
        function M(t, n, e) {
          e = e.split("-")[0];
          var r = A(t),
            i = { width: r.width, height: r.height },
            o = -1 !== ["right", "left"].indexOf(e),
            u = o ? "top" : "left",
            a = o ? "left" : "top",
            c = o ? "height" : "width",
            s = o ? "width" : "height";
          return (
            (i[u] = n[u] + n[c] / 2 - r[c] / 2),
            (i[a] = e === a ? n[a] - r[s] : n[S(a)]),
            i
          );
        }
        function N(t, n) {
          return Array.prototype.find ? t.find(n) : t.filter(n)[0];
        }
        function D(t, n, e) {
          if (Array.prototype.findIndex)
            return t.findIndex(function (t) {
              return t[n] === e;
            });
          var r = N(t, function (t) {
            return t[n] === e;
          });
          return t.indexOf(r);
        }
        function k(t, n, e) {
          return (
            (void 0 === e ? t : t.slice(0, D(t, "name", e))).forEach(function (
              t
            ) {
              t.function &&
                console.warn(
                  "`modifier.function` is deprecated, use `modifier.fn`!"
                );
              var e = t.function || t.fn;
              t.enabled &&
                i(e) &&
                ((n.offsets.popper = m(n.offsets.popper)),
                (n.offsets.reference = m(n.offsets.reference)),
                (n = e(n, t)));
            }),
            n
          );
        }
        function I() {
          if (!this.state.isDestroyed) {
            var t = {
              instance: this,
              styles: {},
              arrowStyles: {},
              attributes: {},
              flipped: !1,
              offsets: {},
            };
            (t.offsets.reference = C(
              this.state,
              this.popper,
              this.reference,
              this.options.positionFixed
            )),
              (t.placement = E(
                this.options.placement,
                t.offsets.reference,
                this.popper,
                this.reference,
                this.options.modifiers.flip.boundariesElement,
                this.options.modifiers.flip.padding
              )),
              (t.originalPlacement = t.placement),
              (t.positionFixed = this.options.positionFixed),
              (t.offsets.popper = M(
                this.popper,
                t.offsets.reference,
                t.placement
              )),
              (t.offsets.popper.position = this.options.positionFixed
                ? "fixed"
                : "absolute"),
              (t = k(this.modifiers, t)),
              this.state.isCreated
                ? this.options.onUpdate(t)
                : ((this.state.isCreated = !0), this.options.onCreate(t));
          }
        }
        function L(t, n) {
          return t.some(function (t) {
            var e = t.name;
            return t.enabled && e === n;
          });
        }
        function P(t) {
          for (
            var n = [!1, "ms", "Webkit", "Moz", "O"],
              e = t.charAt(0).toUpperCase() + t.slice(1),
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r],
              o = i ? "" + i + e : t;
            if (void 0 !== document.body.style[o]) return o;
          }
          return null;
        }
        function R() {
          return (
            (this.state.isDestroyed = !0),
            L(this.modifiers, "applyStyle") &&
              (this.popper.removeAttribute("x-placement"),
              (this.popper.style.position = ""),
              (this.popper.style.top = ""),
              (this.popper.style.left = ""),
              (this.popper.style.right = ""),
              (this.popper.style.bottom = ""),
              (this.popper.style.willChange = ""),
              (this.popper.style[P("transform")] = "")),
            this.disableEventListeners(),
            this.options.removeOnDestroy &&
              this.popper.parentNode.removeChild(this.popper),
            this
          );
        }
        function H(t) {
          var n = t.ownerDocument;
          return n ? n.defaultView : window;
        }
        function F(t, n, e, r) {
          var i = "BODY" === t.nodeName,
            o = i ? t.ownerDocument.defaultView : t;
          o.addEventListener(n, e, { passive: !0 }),
            i || F(a(o.parentNode), n, e, r),
            r.push(o);
        }
        function q(t, n, e, r) {
          (e.updateBound = r),
            H(t).addEventListener("resize", e.updateBound, { passive: !0 });
          var i = a(t);
          return (
            F(i, "scroll", e.updateBound, e.scrollParents),
            (e.scrollElement = i),
            (e.eventsEnabled = !0),
            e
          );
        }
        function U() {
          this.state.eventsEnabled ||
            (this.state = q(
              this.reference,
              this.options,
              this.state,
              this.scheduleUpdate
            ));
        }
        function W(t, n) {
          return (
            H(t).removeEventListener("resize", n.updateBound),
            n.scrollParents.forEach(function (t) {
              t.removeEventListener("scroll", n.updateBound);
            }),
            (n.updateBound = null),
            (n.scrollParents = []),
            (n.scrollElement = null),
            (n.eventsEnabled = !1),
            n
          );
        }
        function B() {
          this.state.eventsEnabled &&
            (cancelAnimationFrame(this.scheduleUpdate),
            (this.state = W(this.reference, this.state)));
        }
        function z(t) {
          return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
        }
        function V(t, n) {
          Object.keys(n).forEach(function (e) {
            var r = "";
            -1 !==
              ["width", "height", "top", "right", "bottom", "left"].indexOf(
                e
              ) &&
              z(n[e]) &&
              (r = "px"),
              (t.style[e] = n[e] + r);
          });
        }
        function Y(t, n) {
          Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          });
        }
        function G(t) {
          return (
            V(t.instance.popper, t.styles),
            Y(t.instance.popper, t.attributes),
            t.arrowElement &&
              Object.keys(t.arrowStyles).length &&
              V(t.arrowElement, t.arrowStyles),
            t
          );
        }
        function X(t, n, e, r, i) {
          var o = C(i, n, t, e.positionFixed),
            u = E(
              e.placement,
              o,
              n,
              t,
              e.modifiers.flip.boundariesElement,
              e.modifiers.flip.padding
            );
          return (
            n.setAttribute("x-placement", u),
            V(n, { position: e.positionFixed ? "fixed" : "absolute" }),
            e
          );
        }
        function K(t, n) {
          var e = n.x,
            r = n.y,
            i = t.offsets.popper,
            o = N(t.instance.modifiers, function (t) {
              return "applyStyle" === t.name;
            }).gpuAcceleration;
          void 0 !== o &&
            console.warn(
              "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
            );
          var u = void 0 !== o ? o : n.gpuAcceleration,
            a = s(t.instance.popper),
            c = y(a),
            f = { position: i.position },
            l = {
              left: Math.floor(i.left),
              top: Math.round(i.top),
              bottom: Math.round(i.bottom),
              right: Math.floor(i.right),
            },
            h = "bottom" === e ? "top" : "bottom",
            d = "right" === r ? "left" : "right",
            p = P("transform"),
            v = void 0,
            g = void 0;
          if (
            ((g = "bottom" === h ? -c.height + l.bottom : l.top),
            (v = "right" === d ? -c.width + l.right : l.left),
            u && p)
          )
            (f[p] = "translate3d(" + v + "px, " + g + "px, 0)"),
              (f[h] = 0),
              (f[d] = 0),
              (f.willChange = "transform");
          else {
            var b = "bottom" === h ? -1 : 1,
              m = "right" === d ? -1 : 1;
            (f[h] = g * b), (f[d] = v * m), (f.willChange = h + ", " + d);
          }
          var _ = { "x-placement": t.placement };
          return (
            (t.attributes = _t({}, _, t.attributes)),
            (t.styles = _t({}, f, t.styles)),
            (t.arrowStyles = _t({}, t.offsets.arrow, t.arrowStyles)),
            t
          );
        }
        function Q(t, n, e) {
          var r = N(t, function (t) {
              return t.name === n;
            }),
            i =
              !!r &&
              t.some(function (t) {
                return t.name === e && t.enabled && t.order < r.order;
              });
          if (!i) {
            var o = "`" + n + "`",
              u = "`" + e + "`";
            console.warn(
              u +
                " modifier is required by " +
                o +
                " modifier in order to work, be sure to include it before " +
                o +
                "!"
            );
          }
          return i;
        }
        function $(t, n) {
          var e;
          if (!Q(t.instance.modifiers, "arrow", "keepTogether")) return t;
          var r = n.element;
          if ("string" == typeof r) {
            if (!(r = t.instance.popper.querySelector(r))) return t;
          } else if (!t.instance.popper.contains(r))
            return (
              console.warn(
                "WARNING: `arrow.element` must be child of its popper element!"
              ),
              t
            );
          var i = t.placement.split("-")[0],
            u = t.offsets,
            a = u.popper,
            c = u.reference,
            s = -1 !== ["left", "right"].indexOf(i),
            f = s ? "height" : "width",
            l = s ? "Top" : "Left",
            h = l.toLowerCase(),
            d = s ? "left" : "top",
            p = s ? "bottom" : "right",
            v = A(r)[f];
          c[p] - v < a[h] && (t.offsets.popper[h] -= a[h] - (c[p] - v)),
            c[h] + v > a[p] && (t.offsets.popper[h] += c[h] + v - a[p]),
            (t.offsets.popper = m(t.offsets.popper));
          var g = c[h] + c[f] / 2 - v / 2,
            b = o(t.instance.popper),
            y = parseFloat(b["margin" + l], 10),
            _ = parseFloat(b["border" + l + "Width"], 10),
            O = g - t.offsets.popper[h] - y - _;
          return (
            (O = Math.max(Math.min(a[f] - v, O), 0)),
            (t.arrowElement = r),
            (t.offsets.arrow =
              ((e = {}), yt(e, h, Math.round(O)), yt(e, d, ""), e)),
            t
          );
        }
        function J(t) {
          return "end" === t ? "start" : "start" === t ? "end" : t;
        }
        function Z(t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            e = xt.indexOf(t),
            r = xt.slice(e + 1).concat(xt.slice(0, e));
          return n ? r.reverse() : r;
        }
        function tt(t, n) {
          if (L(t.instance.modifiers, "inner")) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          var e = j(
              t.instance.popper,
              t.instance.reference,
              n.padding,
              n.boundariesElement,
              t.positionFixed
            ),
            r = t.placement.split("-")[0],
            i = S(r),
            o = t.placement.split("-")[1] || "",
            u = [];
          switch (n.behavior) {
            case wt.FLIP:
              u = [r, i];
              break;
            case wt.CLOCKWISE:
              u = Z(r);
              break;
            case wt.COUNTERCLOCKWISE:
              u = Z(r, !0);
              break;
            default:
              u = n.behavior;
          }
          return (
            u.forEach(function (a, c) {
              if (r !== a || u.length === c + 1) return t;
              (r = t.placement.split("-")[0]), (i = S(r));
              var s = t.offsets.popper,
                f = t.offsets.reference,
                l = Math.floor,
                h =
                  ("left" === r && l(s.right) > l(f.left)) ||
                  ("right" === r && l(s.left) < l(f.right)) ||
                  ("top" === r && l(s.bottom) > l(f.top)) ||
                  ("bottom" === r && l(s.top) < l(f.bottom)),
                d = l(s.left) < l(e.left),
                p = l(s.right) > l(e.right),
                v = l(s.top) < l(e.top),
                g = l(s.bottom) > l(e.bottom),
                b =
                  ("left" === r && d) ||
                  ("right" === r && p) ||
                  ("top" === r && v) ||
                  ("bottom" === r && g),
                m = -1 !== ["top", "bottom"].indexOf(r),
                y =
                  !!n.flipVariations &&
                  ((m && "start" === o && d) ||
                    (m && "end" === o && p) ||
                    (!m && "start" === o && v) ||
                    (!m && "end" === o && g));
              (h || b || y) &&
                ((t.flipped = !0),
                (h || b) && (r = u[c + 1]),
                y && (o = J(o)),
                (t.placement = r + (o ? "-" + o : "")),
                (t.offsets.popper = _t(
                  {},
                  t.offsets.popper,
                  M(t.instance.popper, t.offsets.reference, t.placement)
                )),
                (t = k(t.instance.modifiers, t, "flip")));
            }),
            t
          );
        }
        function nt(t) {
          var n = t.offsets,
            e = n.popper,
            r = n.reference,
            i = t.placement.split("-")[0],
            o = Math.floor,
            u = -1 !== ["top", "bottom"].indexOf(i),
            a = u ? "right" : "bottom",
            c = u ? "left" : "top",
            s = u ? "width" : "height";
          return (
            e[a] < o(r[c]) && (t.offsets.popper[c] = o(r[c]) - e[s]),
            e[c] > o(r[a]) && (t.offsets.popper[c] = o(r[a])),
            t
          );
        }
        function et(t, n, e, r) {
          var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            o = +i[1],
            u = i[2];
          if (!o) return t;
          if (0 === u.indexOf("%")) {
            var a = void 0;
            switch (u) {
              case "%p":
                a = e;
                break;
              case "%":
              case "%r":
              default:
                a = r;
            }
            return (m(a)[n] / 100) * o;
          }
          if ("vh" === u || "vw" === u) {
            return (
              (("vh" === u
                ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )
                : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  )) /
                100) *
              o
            );
          }
          return o;
        }
        function rt(t, n, e, r) {
          var i = [0, 0],
            o = -1 !== ["right", "left"].indexOf(r),
            u = t.split(/(\+|\-)/).map(function (t) {
              return t.trim();
            }),
            a = u.indexOf(
              N(u, function (t) {
                return -1 !== t.search(/,|\s/);
              })
            );
          u[a] &&
            -1 === u[a].indexOf(",") &&
            console.warn(
              "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
            );
          var c = /\s*,\s*|\s+/,
            s =
              -1 !== a
                ? [
                    u.slice(0, a).concat([u[a].split(c)[0]]),
                    [u[a].split(c)[1]].concat(u.slice(a + 1)),
                  ]
                : [u];
          return (
            (s = s.map(function (t, r) {
              var i = (1 === r ? !o : o) ? "height" : "width",
                u = !1;
              return t
                .reduce(function (t, n) {
                  return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(n)
                    ? ((t[t.length - 1] = n), (u = !0), t)
                    : u
                    ? ((t[t.length - 1] += n), (u = !1), t)
                    : t.concat(n);
                }, [])
                .map(function (t) {
                  return et(t, i, n, e);
                });
            })),
            s.forEach(function (t, n) {
              t.forEach(function (e, r) {
                z(e) && (i[n] += e * ("-" === t[r - 1] ? -1 : 1));
              });
            }),
            i
          );
        }
        function it(t, n) {
          var e = n.offset,
            r = t.placement,
            i = t.offsets,
            o = i.popper,
            u = i.reference,
            a = r.split("-")[0],
            c = void 0;
          return (
            (c = z(+e) ? [+e, 0] : rt(e, o, u, a)),
            "left" === a
              ? ((o.top += c[0]), (o.left -= c[1]))
              : "right" === a
              ? ((o.top += c[0]), (o.left += c[1]))
              : "top" === a
              ? ((o.left += c[0]), (o.top -= c[1]))
              : "bottom" === a && ((o.left += c[0]), (o.top += c[1])),
            (t.popper = o),
            t
          );
        }
        function ot(t, n) {
          var e = n.boundariesElement || s(t.instance.popper);
          t.instance.reference === e && (e = s(e));
          var r = P("transform"),
            i = t.instance.popper.style,
            o = i.top,
            u = i.left,
            a = i[r];
          (i.top = ""), (i.left = ""), (i[r] = "");
          var c = j(
            t.instance.popper,
            t.instance.reference,
            n.padding,
            e,
            t.positionFixed
          );
          (i.top = o), (i.left = u), (i[r] = a), (n.boundaries = c);
          var f = n.priority,
            l = t.offsets.popper,
            h = {
              primary: function (t) {
                var e = l[t];
                return (
                  l[t] < c[t] &&
                    !n.escapeWithReference &&
                    (e = Math.max(l[t], c[t])),
                  yt({}, t, e)
                );
              },
              secondary: function (t) {
                var e = "right" === t ? "left" : "top",
                  r = l[e];
                return (
                  l[t] > c[t] &&
                    !n.escapeWithReference &&
                    (r = Math.min(
                      l[e],
                      c[t] - ("right" === t ? l.width : l.height)
                    )),
                  yt({}, e, r)
                );
              },
            };
          return (
            f.forEach(function (t) {
              var n =
                -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
              l = _t({}, l, h[n](t));
            }),
            (t.offsets.popper = l),
            t
          );
        }
        function ut(t) {
          var n = t.placement,
            e = n.split("-")[0],
            r = n.split("-")[1];
          if (r) {
            var i = t.offsets,
              o = i.reference,
              u = i.popper,
              a = -1 !== ["bottom", "top"].indexOf(e),
              c = a ? "left" : "top",
              s = a ? "width" : "height",
              f = {
                start: yt({}, c, o[c]),
                end: yt({}, c, o[c] + o[s] - u[s]),
              };
            t.offsets.popper = _t({}, u, f[r]);
          }
          return t;
        }
        function at(t) {
          if (!Q(t.instance.modifiers, "hide", "preventOverflow")) return t;
          var n = t.offsets.reference,
            e = N(t.instance.modifiers, function (t) {
              return "preventOverflow" === t.name;
            }).boundaries;
          if (
            n.bottom < e.top ||
            n.left > e.right ||
            n.top > e.bottom ||
            n.right < e.left
          ) {
            if (!0 === t.hide) return t;
            (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
          } else {
            if (!1 === t.hide) return t;
            (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
          }
          return t;
        }
        function ct(t) {
          var n = t.placement,
            e = n.split("-")[0],
            r = t.offsets,
            i = r.popper,
            o = r.reference,
            u = -1 !== ["left", "right"].indexOf(e),
            a = -1 === ["top", "left"].indexOf(e);
          return (
            (i[u ? "left" : "top"] =
              o[e] - (a ? i[u ? "width" : "height"] : 0)),
            (t.placement = S(n)),
            (t.offsets.popper = m(i)),
            t
          );
        }
        for (
          var st =
              "undefined" != typeof window && "undefined" != typeof document,
            ft = ["Edge", "Trident", "Firefox"],
            lt = 0,
            ht = 0;
          ht < ft.length;
          ht += 1
        )
          if (st && navigator.userAgent.indexOf(ft[ht]) >= 0) {
            lt = 1;
            break;
          }
        var dt = st && window.Promise,
          pt = dt ? e : r,
          vt = st && !(!window.MSInputMethodContext || !document.documentMode),
          gt = st && /MSIE 10/.test(navigator.userAgent),
          bt = function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          },
          mt = (function () {
            function t(t, n) {
              for (var e = 0; e < n.length; e++) {
                var r = n[e];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(t, r.key, r);
              }
            }
            return function (n, e, r) {
              return e && t(n.prototype, e), r && t(n, r), n;
            };
          })(),
          yt = function (t, n, e) {
            return (
              n in t
                ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = e),
              t
            );
          },
          _t =
            Object.assign ||
            function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var e = arguments[n];
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }
              return t;
            },
          Ot = [
            "auto-start",
            "auto",
            "auto-end",
            "top-start",
            "top",
            "top-end",
            "right-start",
            "right",
            "right-end",
            "bottom-end",
            "bottom",
            "bottom-start",
            "left-end",
            "left",
            "left-start",
          ],
          xt = Ot.slice(3),
          wt = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise",
          },
          jt = {
            shift: { order: 100, enabled: !0, fn: ut },
            offset: { order: 200, enabled: !0, fn: it, offset: 0 },
            preventOverflow: {
              order: 300,
              enabled: !0,
              fn: ot,
              priority: ["left", "right", "top", "bottom"],
              padding: 5,
              boundariesElement: "scrollParent",
            },
            keepTogether: { order: 400, enabled: !0, fn: nt },
            arrow: { order: 500, enabled: !0, fn: $, element: "[x-arrow]" },
            flip: {
              order: 600,
              enabled: !0,
              fn: tt,
              behavior: "flip",
              padding: 5,
              boundariesElement: "viewport",
            },
            inner: { order: 700, enabled: !1, fn: ct },
            hide: { order: 800, enabled: !0, fn: at },
            computeStyle: {
              order: 850,
              enabled: !0,
              fn: K,
              gpuAcceleration: !0,
              x: "bottom",
              y: "right",
            },
            applyStyle: {
              order: 900,
              enabled: !0,
              fn: G,
              onLoad: X,
              gpuAcceleration: void 0,
            },
          },
          Tt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: jt,
          },
          Et = (function () {
            function t(n, e) {
              var r = this,
                o =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
              bt(this, t),
                (this.scheduleUpdate = function () {
                  return requestAnimationFrame(r.update);
                }),
                (this.update = pt(this.update.bind(this))),
                (this.options = _t({}, t.Defaults, o)),
                (this.state = {
                  isDestroyed: !1,
                  isCreated: !1,
                  scrollParents: [],
                }),
                (this.reference = n && n.jquery ? n[0] : n),
                (this.popper = e && e.jquery ? e[0] : e),
                (this.options.modifiers = {}),
                Object.keys(_t({}, t.Defaults.modifiers, o.modifiers)).forEach(
                  function (n) {
                    r.options.modifiers[n] = _t(
                      {},
                      t.Defaults.modifiers[n] || {},
                      o.modifiers ? o.modifiers[n] : {}
                    );
                  }
                ),
                (this.modifiers = Object.keys(this.options.modifiers)
                  .map(function (t) {
                    return _t({ name: t }, r.options.modifiers[t]);
                  })
                  .sort(function (t, n) {
                    return t.order - n.order;
                  })),
                this.modifiers.forEach(function (t) {
                  t.enabled &&
                    i(t.onLoad) &&
                    t.onLoad(r.reference, r.popper, r.options, t, r.state);
                }),
                this.update();
              var u = this.options.eventsEnabled;
              u && this.enableEventListeners(), (this.state.eventsEnabled = u);
            }
            return (
              mt(t, [
                {
                  key: "update",
                  value: function () {
                    return I.call(this);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    return R.call(this);
                  },
                },
                {
                  key: "enableEventListeners",
                  value: function () {
                    return U.call(this);
                  },
                },
                {
                  key: "disableEventListeners",
                  value: function () {
                    return B.call(this);
                  },
                },
              ]),
              t
            );
          })();
        (Et.Utils = ("undefined" != typeof window ? window : t).PopperUtils),
          (Et.placements = Ot),
          (Et.Defaults = Tt),
          (n.default = Et);
      }.call(n, e(219));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, n, e) {
    e(35), e(239), e(223), (t.exports = e(531));
  },
]);
