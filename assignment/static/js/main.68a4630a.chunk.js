(this.webpackJsonpfirsttask = this.webpackJsonpfirsttask || []).push([
  [0],
  {
    19: function (e, t, a) {
      e.exports = {
        topicTitle: "styles_topicTitle__3HgHX",
        topicSummary: "styles_topicSummary__2O2KR",
        moreLink: "styles_moreLink__26TTW",
        articleItem: "styles_articleItem__1ApFG",
        removeLink: "styles_removeLink__3wCiG",
        articleAnimation: "styles_articleAnimation__3dxml",
      };
    },
    37: function (e, t, a) {
      e.exports = {
        submitBtn: "styles_submitBtn__1UdyM",
        addTopicContainer: "styles_addTopicContainer__2pTJP",
        submitBtnContainer: "styles_submitBtnContainer__2vdXN",
      };
    },
    49: function (e, t, a) {
      e.exports = a.p + "static/media/headerback.35f976af.jpg";
    },
    60: function (e, t, a) {
      e.exports = a(75);
    },
    65: function (e, t, a) {},
    7: function (e, t, a) {
      e.exports = {
        headerContainer: "styles_headerContainer__2Z_S4",
        headerBackImg: "styles_headerBackImg__3jdJf",
        headerContentContainer: "styles_headerContentContainer__1PyHQ",
        headerTextContainer: "styles_headerTextContainer__3cM8H",
        overlay: "styles_overlay__1Dwex",
        topicBtn: "styles_topicBtn__2XFYo",
        headerNavbar: "styles_headerNavbar__2pXf3",
        navBrand: "styles_navBrand__2FmzA",
        navItems: "styles_navItems__12hAJ",
        navBarToggle: "styles_navBarToggle__hoH01",
        headerText: "styles_headerText__oJCkn",
      };
    },
    74: function (e, t, a) {},
    75: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        l = a(10),
        c = a.n(l),
        o = (a(65), a(20)),
        i = a(21),
        s = a(25),
        m = a(24),
        u = a(7),
        d = a.n(u),
        E = a(49),
        p = a.n(E),
        v = a(83),
        h = a(82),
        _ = a(39),
        f = function (e) {
          return r.a.createElement(
            "div",
            { className: d.a.headerContentContainer },
            r.a.createElement(
              "div",
              { className: d.a.headerTextContainer },
              r.a.createElement("div", { className: d.a.overlay }),
              r.a.createElement(
                "article",
                { className: d.a.headerText },
                "WE PROVIDE A ",
                r.a.createElement("b", null, " SUSTAINABLE SOLUTIONS "),
                " ",
                r.a.createElement("br", null),
                " FROM STARTUPS TO CORPORTATES.",
                r.a.createElement("br", null),
                " GUARANTEENING A PRIVATE CAR LIKE EXPERIENCE WITH",
                r.a.createElement("br", null),
                r.a.createElement("b", null, " AFFORDABLE COST")
              )
            )
          );
        },
        b = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  return r.a.createElement(
                    "div",
                    { className: d.a.headerContainer },
                    r.a.createElement("img", {
                      src: p.a,
                      className: d.a.headerBackImg,
                    }),
                    r.a.createElement(
                      "div",
                      { className: d.a.headerNavbar },
                      r.a.createElement(
                        v.a,
                        { expand: "lg" },
                        r.a.createElement(
                          v.a.Brand,
                          { href: "#home", className: d.a.navBrand },
                          "LOGO"
                        ),
                        r.a.createElement(v.a.Toggle, {
                          className: d.a.navBarToggle,
                          "aria-controls": "basic-navbar-nav",
                        }),
                        r.a.createElement(
                          v.a.Collapse,
                          { id: "basic-navbar-nav" },
                          r.a.createElement(
                            h.a,
                            { className: d.a.navItems },
                            r.a.createElement(
                              h.a.Link,
                              { href: "#home" },
                              "Home"
                            ),
                            r.a.createElement(
                              h.a.Link,
                              { href: "#link" },
                              "Buseet Business Transportation"
                            ),
                            r.a.createElement(
                              h.a.Link,
                              { href: "#link" },
                              "News and Updates"
                            ),
                            r.a.createElement(
                              h.a.Link,
                              { href: "#link" },
                              "About"
                            ),
                            r.a.createElement(
                              h.a.Link,
                              { href: "#link" },
                              "Connect"
                            )
                          )
                        )
                      )
                    ),
                    r.a.createElement(f, null)
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        y = a(35),
        T = a(77),
        C = a(81),
        g = a(78),
        k = a(54),
        O = a(79),
        N = a(37),
        x = a.n(N),
        A = function (e) {
          return { topics: e && e.TopicsReducer ? e.TopicsReducer.topics : [] };
        },
        S = function (e) {
          return {
            addTopic: function (t) {
              return e({ type: "ADD_TOPIC", topic: t });
            },
            removeTopic: function (t) {
              return e({ type: "REMOVE_TOPIC", index: t });
            },
          };
        },
        B = a(23),
        R = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).UpdateState = function (e, t) {
                n.setState(Object(y.a)({}, e, t));
              }),
              (n.AddNewTopic = function () {
                n.props.addTopic(n.state);
              }),
              (n.resetControl = function () {
                n.setState({ title: "", summary: "", link: "" });
              }),
              (n.state = { title: "", summary: "", link: "" }),
              n
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    T.a,
                    { className: x.a.addTopicContainer },
                    r.a.createElement(
                      C.a,
                      {
                        onSubmit: function (t) {
                          e.AddNewTopic(), t.preventDefault();
                        },
                      },
                      r.a.createElement(
                        g.a,
                        null,
                        r.a.createElement(
                          k.a,
                          { xs: 12, md: 4 },
                          r.a.createElement(
                            C.a.Group,
                            null,
                            r.a.createElement(
                              T.a,
                              null,
                              r.a.createElement(
                                g.a,
                                null,
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 2 },
                                  r.a.createElement(C.a.Label, null, "Title")
                                ),
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 9 },
                                  r.a.createElement(C.a.Control, {
                                    required: !0,
                                    type: "text",
                                    placeholder: "Article Title",
                                    onChange: function (t) {
                                      return e.UpdateState(
                                        "title",
                                        t.target.value
                                      );
                                    },
                                    value: this.state.title || "",
                                  })
                                )
                              )
                            )
                          ),
                          r.a.createElement(
                            C.a.Group,
                            null,
                            r.a.createElement(
                              T.a,
                              null,
                              r.a.createElement(
                                g.a,
                                null,
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 2 },
                                  r.a.createElement(C.a.Label, null, "Link")
                                ),
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 9 },
                                  r.a.createElement(C.a.Control, {
                                    required: !0,
                                    type: "text",
                                    placeholder: "Article Link",
                                    onChange: function (t) {
                                      return e.UpdateState(
                                        "link",
                                        t.target.value
                                      );
                                    },
                                    value: this.state.link || "",
                                  })
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          k.a,
                          { xs: 12, md: 5 },
                          r.a.createElement(
                            C.a.Group,
                            null,
                            r.a.createElement(
                              T.a,
                              null,
                              r.a.createElement(
                                g.a,
                                null,
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 3 },
                                  r.a.createElement(C.a.Label, null, "Summary")
                                ),
                                r.a.createElement(
                                  k.a,
                                  { xs: 12, md: 9 },
                                  r.a.createElement(C.a.Control, {
                                    required: !0,
                                    as: "textarea",
                                    rows: "3",
                                    placeholder: "Article Summary",
                                    onChange: function (t) {
                                      return e.UpdateState(
                                        "summary",
                                        t.target.value
                                      );
                                    },
                                    value: this.state.summary || "",
                                  })
                                )
                              )
                            )
                          )
                        ),
                        r.a.createElement(
                          k.a,
                          { xs: 12, md: 3, className: x.a.submitBtnContainer },
                          r.a.createElement(
                            O.a,
                            {
                              variant: "success",
                              className: x.a.submitBtn,
                              type: "submit",
                            },
                            "ADD"
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        j = Object(B.b)(A, S)(R),
        I = a(22),
        D = a(58),
        L = a(28),
        w = Object(I.b)({
          TopicsReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { topics: [] },
              t = arguments.length > 1 ? arguments[1] : void 0;
            return "ADD_TOPIC" === t.type
              ? Object(L.a)(
                  Object(L.a)({}, e),
                  {},
                  { topics: [t.topic].concat(Object(D.a)(e.topics)) }
                )
              : "REMOVE_TOPIC" === t.type
              ? Object(L.a)(
                  Object(L.a)({}, e),
                  {},
                  {
                    topics: e.topics.reduce(function (e, a, n) {
                      return n !== t.index && e.push(a), e;
                    }, []),
                  }
                )
              : e;
          },
        }),
        P = Object(I.c)(w),
        U = a(80),
        G = a(19),
        H = a.n(G),
        F = a(42),
        M = (function (e) {
          Object(s.a)(a, e);
          var t = Object(m.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).toggleRemoveDialog = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : -1;
                n.setState({ selectedIndex: e }),
                  n.setState({
                    isRemoveDialogShown: !n.state.isRemoveDialogShown,
                  });
              }),
              (n.removeTopic = function () {
                n.props.removeTopic(n.state.selectedIndex),
                  n.toggleRemoveDialog();
              }),
              (n.state = { isRemoveDialogShown: !1 }),
              n
            );
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return r.a.createElement(
                    T.a,
                    { className: H.a.topicsContainer },
                    r.a.createElement(
                      g.a,
                      null,
                      this.props.topics.map(function (t, a) {
                        return r.a.createElement(
                          k.a,
                          { xs: 12, md: 4, className: H.a.articleItem },
                          r.a.createElement(
                            "a",
                            {
                              className: H.a.removeLink,
                              onClick: function (t) {
                                e.toggleRemoveDialog(a), t.preventDefault();
                              },
                              href: "#",
                            },
                            r.a.createElement(_.a, { icon: F.a })
                          ),
                          r.a.createElement(
                            "article",
                            null,
                            r.a.createElement(
                              "h3",
                              { className: H.a.topicTitle },
                              t.title.toUpperCase()
                            ),
                            r.a.createElement(
                              "div",
                              { className: H.a.topicSummary },
                              t.summary
                            )
                          ),
                          r.a.createElement(
                            "div",
                            { className: H.a.moreLink },
                            r.a.createElement(
                              "a",
                              { href: t.link, target: "_blank" },
                              "Read More"
                            )
                          )
                        );
                      })
                    ),
                    r.a.createElement(
                      U.a,
                      { show: this.state.isRemoveDialogShown || !1 },
                      r.a.createElement(
                        U.a.Header,
                        null,
                        r.a.createElement(
                          U.a.Title,
                          null,
                          "Delete Confirmation"
                        )
                      ),
                      r.a.createElement(
                        U.a.Body,
                        null,
                        "Are you sure you want to delete ? "
                      ),
                      r.a.createElement(
                        U.a.Footer,
                        null,
                        r.a.createElement(
                          O.a,
                          {
                            variant: "secondary",
                            onClick: function () {
                              return e.removeTopic();
                            },
                          },
                          "Yes Delete"
                        ),
                        r.a.createElement(
                          O.a,
                          {
                            variant: "secondary",
                            onClick: function () {
                              return e.toggleRemoveDialog();
                            },
                          },
                          "Cancel"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.a.Component),
        J = Object(B.b)(A, S)(M);
      a(74);
      var W = function () {
        return r.a.createElement(
          B.a,
          { store: P },
          r.a.createElement(
            "div",
            { className: "App" },
            r.a.createElement("header", null, r.a.createElement(b, null)),
            r.a.createElement(j, null),
            r.a.createElement(J, null)
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      c.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(W, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[60, 1, 2]],
]);
//# sourceMappingURL=main.68a4630a.chunk.js.map
