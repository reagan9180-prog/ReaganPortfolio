import {n as e, r as t, t as n} from "./index-D-o_B9zZ.js";
var r = t(e())
  , i = n()
  , a = [{
    id: `about`,
    label: `About`
}, {
    id: `academics`,
    label: `Academics`
}, {
    id: `skills`,
    label: `Skills`
}, {
    id: `projects`,
    label: `Projects`
}, {
    id: `experience`,
    label: `Experience`
}, {
    id: `goals`,
    label: `Goals`
}, {
    id: `contact`,
    label: `Contact`
}];
function o({children: e, delay: t=0, className: n=``}) {
    let a = (0,
    r.useRef)(null)
      , [o,s] = (0,
    r.useState)(!1);
    return (0,
    r.useEffect)( () => {
        let e = a.current;
        if (!e)
            return;
        let t = new IntersectionObserver(e => {
            e.forEach(e => {
                e.isIntersecting && (s(!0),
                t.unobserve(e.target))
            }
            )
        }
        ,{
            threshold: .12,
            rootMargin: `0px 0px -8% 0px`
        });
        return t.observe(e),
        () => t.disconnect()
    }
    , []),
    (0,
    i.jsx)(`div`, {
        ref: a,
        style: {
            transitionDelay: `${t}ms`
        },
        className: `reveal ${o ? `reveal-in` : ``} ${n}`,
        children: e
    })
}
function s() {
    return (0,
    i.jsxs)(`div`, {
        className: `relative min-h-screen text-foreground`,
        children: [(0,
        i.jsx)(c, {}), (0,
        i.jsxs)(`main`, {
            className: `relative`,
            children: [(0,
            i.jsx)(l, {}), (0,
            i.jsx)(d, {}), (0,
            i.jsx)(f, {}), (0,
            i.jsx)(p, {}), (0,
            i.jsx)(h, {}), (0,
            i.jsx)(g, {}), (0,
            i.jsx)(_, {}), (0,
            i.jsx)(v, {})]
        }), (0,
        i.jsx)(b, {})]
    })
}
function c() {
    let[e,t] = (0,
    r.useState)(!1);
    (0,
    r.useEffect)( () => {
        t(document.documentElement.classList.contains(`dark`))
    }
    , []);
    let n = () => {
        let e = !document.documentElement.classList.contains(`dark`);
        document.documentElement.classList.toggle(`dark`, e),
        window.localStorage.setItem(`theme`, e ? `dark` : `light`),
        t(e)
    }
      , [o,s] = (0,
    r.useState)(!1)
      , [c,l] = (0,
    r.useState)(!1);
    return (0,
    r.useEffect)( () => {
        let e = () => s(window.scrollY > 8);
        return e(),
        window.addEventListener(`scroll`, e, {
            passive: !0
        }),
        () => window.removeEventListener(`scroll`, e)
    }
    , []),
    (0,
    i.jsxs)(`header`, {
        className: `sticky top-0 z-40 border-b backdrop-blur transition-colors ${o ? `border-rule bg-background/85` : `border-transparent bg-background/60`}`,
        children: [(0,
        i.jsxs)(`div`, {
            className: `mx-auto flex max-w-6xl items-center justify-between px-6 py-4`,
            children: [(0,
            i.jsxs)(`a`, {
                href: `#top`,
                className: `flex items-center gap-2 font-mono text-sm font-medium`,
                children: [(0,
                i.jsxs)(`span`, {
                    className: `relative inline-flex h-2.5 w-2.5`,
                    children: [(0,
                    i.jsx)(`span`, {
                        className: `absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-accent`
                    }), (0,
                    i.jsx)(`span`, {
                        className: `relative inline-flex h-2.5 w-2.5 rounded-full bg-accent`
                    })]
                }), (0,
                i.jsxs)(`span`, {
                    children: [`portfolio`, (0,
                    i.jsx)(`span`, {
                        className: `text-muted-foreground`,
                        children: `.ie`
                    })]
                })]
            }), (0,
            i.jsx)(`nav`, {
                className: `hidden items-center gap-7 md:flex`,
                children: a.map(e => (0,
                i.jsx)(`a`, {
                    href: `#${e.id}`,
                    className: `text-sm text-muted-foreground transition-colors hover:text-foreground`,
                    children: e.label
                }, e.id))
            }), (0,
            i.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0,
                i.jsx)(`button`, {
                    onClick: n,
                    "aria-label": `Toggle theme`,
                    className: `rounded-sm border border-border p-2 text-muted-foreground transition hover:text-foreground`,
                    children: e ? (0,
                    i.jsx)(S, {}) : (0,
                    i.jsx)(C, {})
                }), (0,
                i.jsx)(`button`, {
                    onClick: () => l(e => !e),
                    "aria-label": `Toggle menu`,
                    className: `rounded-sm border border-border p-2 md:hidden`,
                    children: (0,
                    i.jsx)(w, {})
                })]
            })]
        }), c && (0,
        i.jsx)(`div`, {
            className: `border-t border-rule bg-background md:hidden`,
            children: (0,
            i.jsx)(`nav`, {
                className: `mx-auto flex max-w-6xl flex-col px-6 py-3`,
                children: a.map(e => (0,
                i.jsx)(`a`, {
                    href: `#${e.id}`,
                    onClick: () => l(!1),
                    className: `py-2 text-sm text-muted-foreground hover:text-foreground`,
                    children: e.label
                }, e.id))
            })
        })]
    })
}
function l() {
    return (0,
    i.jsxs)(`section`, {
        id: `top`,
        className: `relative overflow-hidden border-b border-rule`,
        children: [(0,
        i.jsx)(`div`, {
            className: `absolute inset-0 grid-bg opacity-60`,
            "aria-hidden": !0
        }), (0,
        i.jsxs)(`div`, {
            className: `relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28`,
            children: [(0,
            i.jsx)(`p`, {
                className: `eyebrow caret animate-fade-up`,
                children: `TUM Applicant · Information Engineering · Class of 2027`
            }), (0,
            i.jsxs)(`h1`, {
                className: `mt-5 max-w-4xl font-serif text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl animate-fade-up`,
                children: [(0,
                i.jsx)(`span`, {
                    className: `glitch`,
                    "data-text": `Aspiring Information`,
                    children: `Aspiring Information`
                }), (0,
                i.jsx)(`br`, {}), (0,
                i.jsx)(`span`, {
                    className: `text-sheen text-glow`,
                    children: `Engineer.`
                })]
            }), (0,
            i.jsx)(`p`, {
                className: `mt-6 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-up`,
                children: `A Grade 12 student from Indonesia building software, learning systems, and preparing to study Information Engineering at the Technical University of Munich. Focused on the intersection of code, data, and real-world problem solving.`
            }), (0,
            i.jsxs)(`div`, {
                className: `mt-9 flex flex-wrap items-center gap-3 animate-fade-up`,
                children: [(0,
                i.jsxs)(`a`, {
                    href: `#projects`,
                    className: `inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90`,
                    children: [`View Projects `, (0,
                    i.jsx)(x, {})]
                }), (0,
                i.jsx)(`a`, {
                    href: `#contact`,
                    className: `inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium transition hover:bg-surface`,
                    children: `Contact`
                })]
            }), (0,
            i.jsxs)(`div`, {
                className: `mt-16 border-t border-rule pt-8`,
                children: [(0,
                i.jsx)(`div`, {
                    className: `mb-4 h-px w-full data-stream opacity-70`,
                    "aria-hidden": !0
                }), (0,
                i.jsx)(`dl`, {
                    className: `grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4`,
                    children: [{
                        k: `Location`,
                        v: `Jakarta, ID`
                    }, {
                        k: `Target`,
                        v: `TUM Munich`
                    }, {
                        k: `Field`,
                        v: `Info. Eng.`
                    }, {
                        k: `Languages`,
                        v: `EN · DE A1`
                    }].map(e => (0,
                    i.jsxs)(`div`, {
                        className: `corner-brackets px-2 py-1`,
                        children: [(0,
                        i.jsx)(`dt`, {
                            className: `eyebrow`,
                            children: e.k
                        }), (0,
                        i.jsx)(`dd`, {
                            className: `mt-1 font-mono text-sm flicker`,
                            children: e.v
                        })]
                    }, e.k))
                })]
            })]
        })]
    })
}
function u({num: e, eyebrow: t, title: n}) {
    return (0,
    i.jsx)(o, {
        children: (0,
        i.jsxs)(`div`, {
            className: `mb-12 flex items-end justify-between border-b border-rule pb-4 hud-frame`,
            children: [(0,
            i.jsxs)(`div`, {
                children: [(0,
                i.jsx)(`p`, {
                    className: `eyebrow`,
                    children: t
                }), (0,
                i.jsx)(`h2`, {
                    className: `mt-2 font-serif text-3xl md:text-4xl glitch`,
                    "data-text": n,
                    children: n
                })]
            }), (0,
            i.jsxs)(`span`, {
                className: `font-mono text-xs text-muted-foreground`,
                children: [`§ `, e]
            })]
        })
    })
}
function d() {
    return (0,
    i.jsx)(`section`, {
        id: `about`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `01`,
                eyebrow: `About`,
                title: `About me`
            }), (0,
            i.jsxs)(`div`, {
                className: `grid gap-10 md:grid-cols-12`,
                children: [(0,
                i.jsxs)(`div`, {
                    className: `md:col-span-7 space-y-5 text-base leading-relaxed text-foreground/90`,
                    children: [(0,
                    i.jsxs)(`p`, {
                        children: [`I'm a Grade 12 student from Indonesia preparing to study`, ` `, (0,
                        i.jsx)(`strong`, {
                            className: `font-semibold`,
                            children: `Information Engineering`
                        }), ` at the Technical University of Munich. My interest sits at the boundary between software and the physical systems it controls — how data moves, how processes connect, and how small pieces of code translate into real-world outcomes.`]
                    }), (0,
                    i.jsxs)(`p`, {
                        children: [`Most of what I know I taught myself, starting with Python in school and expanding into web development through projects. I'm drawn to`, ` `, (0,
                        i.jsx)(`strong`, {
                            className: `font-semibold`,
                            children: `software systems, data structures, and applied problem solving`
                        }), ` — the kind of work that requires both rigor and creativity.`]
                    }), (0,
                    i.jsx)(`p`, {
                        children: `Outside coursework, I co-founded a small custom clothing business with friends. I built the website, the order intake flow, and the email automation around it. The technical part was modest; the lesson was not — I learned what it means to ship something real that other people depend on.`
                    })]
                }), (0,
                i.jsx)(`aside`, {
                    className: `md:col-span-5`,
                    children: (0,
                    i.jsxs)(`div`, {
                        className: `rounded-sm border border-rule bg-surface p-6`,
                        children: [(0,
                        i.jsx)(`p`, {
                            className: `eyebrow`,
                            children: `At a glance`
                        }), (0,
                        i.jsx)(`ul`, {
                            className: `mt-4 space-y-3 text-sm`,
                            children: [[`Status`, `Grade 12 student, applying 2026`], [`Focus`, `Software systems & data`], [`Building`, `Custom clothing platform`], [`Learning`, `German (A1), algorithms`], [`Reading`, `Designing Data-Intensive Apps`]].map( ([e,t]) => (0,
                            i.jsxs)(`li`, {
                                className: `flex items-baseline justify-between gap-4 border-b border-rule/60 pb-2 last:border-0 last:pb-0`,
                                children: [(0,
                                i.jsx)(`span`, {
                                    className: `eyebrow`,
                                    children: e
                                }), (0,
                                i.jsx)(`span`, {
                                    className: `text-right font-mono text-xs text-foreground`,
                                    children: t
                                })]
                            }, e))
                        })]
                    })
                })]
            })]
        })
    })
}
function f() {
    return (0,
    i.jsx)(`section`, {
        id: `academics`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `02`,
                eyebrow: `Education`,
                title: `Academic background`
            }), (0,
            i.jsxs)(`div`, {
                className: `grid gap-10 md:grid-cols-12`,
                children: [(0,
                i.jsx)(`div`, {
                    className: `md:col-span-7`,
                    children: (0,
                    i.jsxs)(`div`, {
                        className: `rounded-sm border border-rule`,
                        children: [(0,
                        i.jsxs)(`div`, {
                            className: `flex items-baseline justify-between border-b border-rule p-5`,
                            children: [(0,
                            i.jsxs)(`div`, {
                                children: [(0,
                                i.jsx)(`p`, {
                                    className: `font-mono text-xs text-muted-foreground`,
                                    children: `Senior High School`
                                }), (0,
                                i.jsx)(`h3`, {
                                    className: `mt-1 font-serif text-xl`,
                                    children: `Grade 12 · International Stream`
                                }), (0,
                                i.jsx)(`p`, {
                                    className: `mt-1 text-sm text-muted-foreground`,
                                    children: `Jakarta, Indonesia`
                                })]
                            }), (0,
                            i.jsx)(`span`, {
                                className: `font-mono text-xs text-muted-foreground`,
                                children: `2023 — 2026`
                            })]
                        }), (0,
                        i.jsxs)(`div`, {
                            className: `p-5`,
                            children: [(0,
                            i.jsx)(`p`, {
                                className: `eyebrow mb-3`,
                                children: `Core subjects`
                            }), (0,
                            i.jsx)(`ul`, {
                                className: `grid grid-cols-2 gap-2 sm:grid-cols-4`,
                                children: [`Mathematics`, `Physics`, `Programming (Elective)`, `English`].map(e => (0,
                                i.jsx)(`li`, {
                                    className: `rounded-sm border border-rule bg-surface px-3 py-2 text-center font-mono text-xs`,
                                    children: e
                                }, e))
                            })]
                        })]
                    })
                }), (0,
                i.jsxs)(`div`, {
                    className: `md:col-span-5`,
                    children: [(0,
                    i.jsx)(`p`, {
                        className: `eyebrow mb-4`,
                        children: `Languages`
                    }), (0,
                    i.jsx)(`ul`, {
                        className: `space-y-5`,
                        children: [{
                            lang: `Indonesian`,
                            level: `Native`,
                            pct: 100
                        }, {
                            lang: `English`,
                            level: `Intermediate`,
                            pct: 88
                        }, {
                            lang: `German`,
                            level: `A1 — In progress`,
                            pct: 22
                        }].map(e => (0,
                        i.jsxs)(`li`, {
                            children: [(0,
                            i.jsxs)(`div`, {
                                className: `flex items-baseline justify-between`,
                                children: [(0,
                                i.jsx)(`span`, {
                                    className: `text-sm font-medium`,
                                    children: e.lang
                                }), (0,
                                i.jsx)(`span`, {
                                    className: `font-mono text-xs text-muted-foreground`,
                                    children: e.level
                                })]
                            }), (0,
                            i.jsx)(`div`, {
                                className: `mt-2 h-1 w-full overflow-hidden rounded-full bg-surface`,
                                children: (0,
                                i.jsx)(`div`, {
                                    className: `h-full bg-foreground`,
                                    style: {
                                        width: `${e.pct}%`
                                    }
                                })
                            })]
                        }, e.lang))
                    })]
                })]
            })]
        })
    })
}
function p() {
    return (0,
    i.jsx)(`section`, {
        id: `skills`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `03`,
                eyebrow: `Toolkit`,
                title: `Skills`
            }), (0,
            i.jsx)(`div`, {
                className: `grid gap-px overflow-hidden rounded-sm border border-rule bg-rule sm:grid-cols-3`,
                children: [{
                    label: `Programming`,
                    items: [`Python`, `HTML`, `CSS`, `JavaScript`]
                }, {
                    label: `Tools`,
                    items: [`Git & GitHub`, `VS Code`, `Linux CLI`, `Figma`]
                }, {
                    label: `Concepts`,
                    items: [`Algorithms`, `OOP`, `System thinking`, `Problem solving`]
                }].map( (e, t) => (0,
                i.jsx)(o, {
                    delay: t * 120,
                    children: (0,
                    i.jsxs)(`div`, {
                        className: `bg-background p-6 transition duration-500 hover:bg-surface`,
                        children: [(0,
                        i.jsx)(`p`, {
                            className: `eyebrow`,
                            children: e.label
                        }), (0,
                        i.jsx)(`ul`, {
                            className: `mt-4 space-y-2`,
                            children: e.items.map(e => (0,
                            i.jsxs)(`li`, {
                                className: `flex items-center gap-2 text-sm`,
                                children: [(0,
                                i.jsx)(`span`, {
                                    className: `font-mono text-xs text-accent`,
                                    children: `›`
                                }), e]
                            }, e))
                        })]
                    })
                }, e.label))
            })]
        })
    })
}
var m = [{
    title: `Custom Clothing Business Website`,
    summary: `Online storefront with custom order intake and automated email confirmations for a clothing brand I co-founded.`,
    tech: [`HTML`, `CSS`, `JavaScript`, `EmailJS`],
    learned: `Translating a real business workflow into a structured order system; handling user input, validation, and async email delivery.`,
    status: `Live`
}, {
    title: `Python Utility Suite`,
    summary: `A bundle of small command-line tools — calculator, unit converter, and number guessing game — built to practice control flow and modular design.`,
    tech: [`Python`, `argparse`],
    learned: `Writing readable functions, separating logic from I/O, and packaging multiple scripts under one entry point.`,
    status: `Complete`
}, {
    title: `Student Management System`,
    summary: `OOP project modeling students, courses, and grades with persistent JSON storage and a simple CLI interface.`,
    tech: [`Python`, `OOP`, `JSON`],
    learned: `Designing classes around real-world entities, using inheritance carefully, and serializing state to disk.`,
    status: `Complete`
}, {
    title: `Arduino Environment Monitor`,
    summary: `Planned IoT project: read temperature and humidity from sensors and stream data to a small dashboard.`,
    tech: [`Arduino`, `C++`, `MQTT`],
    learned: `Bridging embedded hardware with network protocols — the kind of full-stack systems work Information Engineering centers on.`,
    status: `Planned`
}];
function h() {
    return (0,
    i.jsx)(`section`, {
        id: `projects`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `04`,
                eyebrow: `Selected work`,
                title: `Projects`
            }), (0,
            i.jsx)(`div`, {
                className: `grid gap-6 md:grid-cols-2`,
                children: m.map( (e, t) => (0,
                i.jsx)(o, {
                    delay: t * 110,
                    children: (0,
                    i.jsxs)(`article`, {
                        className: `group flex flex-col overflow-hidden rounded-sm border border-rule bg-background transition duration-500 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--color-accent)_35%,transparent)]`,
                        children: [(0,
                        i.jsxs)(`div`, {
                            className: `relative aspect-[16/9] overflow-hidden border-b border-rule bg-surface grid-bg`,
                            children: [(0,
                            i.jsx)(`div`, {
                                className: `absolute inset-0 flex items-center justify-center`,
                                children: (0,
                                i.jsxs)(`div`, {
                                    className: `rounded-sm border border-rule bg-background/80 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur`,
                                    children: [`PROJECT_`, String(t + 1).padStart(2, `0`), `.PNG`]
                                })
                            }), (0,
                            i.jsx)(`span`, {
                                className: `absolute right-3 top-3 rounded-sm border border-rule bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground`,
                                children: e.status
                            })]
                        }), (0,
                        i.jsxs)(`div`, {
                            className: `flex flex-1 flex-col p-6`,
                            children: [(0,
                            i.jsx)(`h3`, {
                                className: `font-serif text-xl`,
                                children: e.title
                            }), (0,
                            i.jsx)(`p`, {
                                className: `mt-2 text-sm text-muted-foreground`,
                                children: e.summary
                            }), (0,
                            i.jsx)(`div`, {
                                className: `mt-4 flex flex-wrap gap-1.5`,
                                children: e.tech.map(e => (0,
                                i.jsx)(`span`, {
                                    className: `rounded-sm border border-rule px-2 py-0.5 font-mono text-[11px] text-foreground/80`,
                                    children: e
                                }, e))
                            }), (0,
                            i.jsxs)(`div`, {
                                className: `mt-5 border-t border-rule pt-4`,
                                children: [(0,
                                i.jsx)(`p`, {
                                    className: `eyebrow`,
                                    children: `What I learned`
                                }), (0,
                                i.jsx)(`p`, {
                                    className: `mt-2 text-sm text-foreground/90`,
                                    children: e.learned
                                })]
                            })]
                        })]
                    })
                }, e.title))
            })]
        })
    })
}
function g() {
    return (0,
    i.jsx)(`section`, {
        id: `experience`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `05`,
                eyebrow: `Activities`,
                title: `Experience`
            }), (0,
            i.jsx)(`ol`, {
                className: `relative space-y-10 border-l border-rule pl-8`,
                children: [{
                    role: `Co-founder & Developer`,
                    org: `Custom clothing startup`,
                    time: `2024 — Present`,
                    body: `Co-founded a small custom clothing brand with friends. Built and maintain the website, order intake flow, and email automation. Handle the technical operations end-to-end.`
                }, {
                    role: `Computer Science Club`,
                    org: `School activities`,
                    time: `2023 — Present`,
                    body: `Member of the school computing group. Participate in coding challenges and mentor younger students taking their first Python steps.`
                }, {
                    role: `Community Volunteer`,
                    org: `Local outreach`,
                    time: `2024`,
                    body: `Volunteered with a community program supporting local youth, helping organize sessions and basic digital literacy workshops.`
                }].map( (e, t) => (0,
                i.jsx)(o, {
                    delay: t * 120,
                    children: (0,
                    i.jsxs)(`li`, {
                        className: `relative`,
                        children: [(0,
                        i.jsx)(`span`, {
                            className: `absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border border-rule bg-background`
                        }), (0,
                        i.jsxs)(`div`, {
                            className: `flex flex-wrap items-baseline justify-between gap-2`,
                            children: [(0,
                            i.jsx)(`h3`, {
                                className: `font-serif text-xl`,
                                children: e.role
                            }), (0,
                            i.jsx)(`span`, {
                                className: `font-mono text-xs text-muted-foreground`,
                                children: e.time
                            })]
                        }), (0,
                        i.jsx)(`p`, {
                            className: `mt-1 text-sm text-muted-foreground`,
                            children: e.org
                        }), (0,
                        i.jsx)(`p`, {
                            className: `mt-3 max-w-2xl text-sm text-foreground/90`,
                            children: e.body
                        })]
                    })
                }, e.role))
            })]
        })
    })
}
function _() {
    return (0,
    i.jsx)(`section`, {
        id: `goals`,
        className: `section-pad border-b border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `06`,
                eyebrow: `Trajectory`,
                title: `Future goals`
            }), (0,
            i.jsx)(`div`, {
                className: `grid gap-px overflow-hidden rounded-sm border border-rule bg-rule md:grid-cols-3`,
                children: [{
                    n: `01`,
                    t: `Study at TUM`,
                    d: `Pursue a Bachelor's in Information Engineering at the Technical University of Munich starting 2026.`
                }, {
                    n: `02`,
                    t: `Build systems expertise`,
                    d: `Develop deep knowledge in software architecture, data engineering, and intelligent systems.`
                }, {
                    n: `03`,
                    t: `Apply it`,
                    d: `Contribute to engineering solutions that solve real problems — in industry, research, or my own ventures.`
                }].map( (e, t) => (0,
                i.jsx)(o, {
                    delay: t * 140,
                    children: (0,
                    i.jsxs)(`div`, {
                        className: `bg-background p-7 transition duration-500 hover:bg-surface`,
                        children: [(0,
                        i.jsx)(`p`, {
                            className: `font-mono text-xs text-accent`,
                            children: e.n
                        }), (0,
                        i.jsx)(`h3`, {
                            className: `mt-3 font-serif text-xl`,
                            children: e.t
                        }), (0,
                        i.jsx)(`p`, {
                            className: `mt-3 text-sm text-muted-foreground`,
                            children: e.d
                        })]
                    })
                }, e.n))
            })]
        })
    })
}
function v() {
    let[e,t] = (0,
    r.useState)(!1);
    return (0,
    i.jsx)(`section`, {
        id: `contact`,
        className: `section-pad`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-6`,
            children: [(0,
            i.jsx)(u, {
                num: `07`,
                eyebrow: `Get in touch`,
                title: `Contact`
            }), (0,
            i.jsxs)(`div`, {
                className: `grid gap-10 md:grid-cols-12`,
                children: [(0,
                i.jsxs)(`div`, {
                    className: `md:col-span-5 space-y-6`,
                    children: [(0,
                    i.jsx)(`p`, {
                        className: `text-base leading-relaxed text-foreground/90`,
                        children: `For admissions, scholarship, mentorship, or project collaboration — I'd be glad to hear from you.`
                    }), (0,
                    i.jsxs)(`ul`, {
                        className: `space-y-3 text-sm`,
                        children: [(0,
                        i.jsxs)(`li`, {
                            className: `flex items-center gap-3`,
                            children: [(0,
                            i.jsx)(`span`, {
                                className: `eyebrow w-20`,
                                children: `Email`
                            }), (0,
                            i.jsx)(`a`, {
                                href: `mailto:hello@example.com`,
                                className: `font-mono text-foreground hover:text-accent`,
                                children: `hello@example.com`
                            })]
                        }), (0,
                        i.jsxs)(`li`, {
                            className: `flex items-center gap-3`,
                            children: [(0,
                            i.jsx)(`span`, {
                                className: `eyebrow w-20`,
                                children: `GitHub`
                            }), (0,
                            i.jsx)(`a`, {
                                href: `https://github.com`,
                                target: `_blank`,
                                rel: `noreferrer`,
                                className: `font-mono text-foreground hover:text-accent`,
                                children: `github.com/username`
                            })]
                        }), (0,
                        i.jsxs)(`li`, {
                            className: `flex items-center gap-3`,
                            children: [(0,
                            i.jsx)(`span`, {
                                className: `eyebrow w-20`,
                                children: `Location`
                            }), (0,
                            i.jsx)(`span`, {
                                className: `font-mono text-foreground`,
                                children: `Jakarta, Indonesia`
                            })]
                        })]
                    })]
                }), (0,
                i.jsxs)(`form`, {
                    onSubmit: e => {
                        e.preventDefault();
                        let n = new FormData(e.currentTarget)
                          , r = encodeURIComponent(`Portfolio contact — ${n.get(`name`)}`)
                          , i = encodeURIComponent(`${n.get(`message`)}\n\n— ${n.get(`name`)} (${n.get(`email`)})`);
                        window.location.href = `mailto:hello@example.com?subject=${r}&body=${i}`,
                        t(!0)
                    }
                    ,
                    className: `md:col-span-7 space-y-4 rounded-sm border border-rule bg-surface p-6`,
                    children: [(0,
                    i.jsxs)(`div`, {
                        className: `grid gap-4 sm:grid-cols-2`,
                        children: [(0,
                        i.jsx)(y, {
                            name: `name`,
                            label: `Name`,
                            required: !0
                        }), (0,
                        i.jsx)(y, {
                            name: `email`,
                            label: `Email`,
                            type: `email`,
                            required: !0
                        })]
                    }), (0,
                    i.jsx)(y, {
                        name: `message`,
                        label: `Message`,
                        textarea: !0,
                        required: !0
                    }), (0,
                    i.jsxs)(`div`, {
                        className: `flex items-center justify-between pt-2`,
                        children: [(0,
                        i.jsx)(`p`, {
                            className: `font-mono text-[11px] text-muted-foreground`,
                            children: e ? `Opening your email client…` : `Sends via your email client`
                        }), (0,
                        i.jsxs)(`button`, {
                            type: `submit`,
                            className: `inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90`,
                            children: [`Send message `, (0,
                            i.jsx)(x, {})]
                        })]
                    })]
                })]
            })]
        })
    })
}
function y({name: e, label: t, type: n=`text`, textarea: r, required: a}) {
    let o = `mt-1 w-full rounded-sm border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-foreground/50 focus:ring-2 focus:ring-ring/20`;
    return (0,
    i.jsxs)(`label`, {
        className: `block`,
        children: [(0,
        i.jsx)(`span`, {
            className: `eyebrow`,
            children: t
        }), r ? (0,
        i.jsx)(`textarea`, {
            name: e,
            required: a,
            rows: 5,
            className: o
        }) : (0,
        i.jsx)(`input`, {
            name: e,
            type: n,
            required: a,
            className: o
        })]
    })
}
function b() {
    return (0,
    i.jsx)(`footer`, {
        className: `border-t border-rule`,
        children: (0,
        i.jsxs)(`div`, {
            className: `mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center`,
            children: [(0,
            i.jsxs)(`p`, {
                className: `font-mono`,
                children: [`© `, new Date().getFullYear(), ` · Portfolio · Jakarta → München`]
            }), (0,
            i.jsx)(`p`, {
                className: `font-mono`,
                children: `Built with React · TanStack · Tailwind`
            })]
        })
    })
}
function x() {
    return (0,
    i.jsx)(`svg`, {
        width: `14`,
        height: `14`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: (0,
        i.jsx)(`path`, {
            d: `M5 12h14M13 5l7 7-7 7`
        })
    })
}
function S() {
    return (0,
    i.jsxs)(`svg`, {
        width: `16`,
        height: `16`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: [(0,
        i.jsx)(`circle`, {
            cx: `12`,
            cy: `12`,
            r: `4`
        }), (0,
        i.jsx)(`path`, {
            d: `M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41`
        })]
    })
}
function C() {
    return (0,
    i.jsx)(`svg`, {
        width: `16`,
        height: `16`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
        children: (0,
        i.jsx)(`path`, {
            d: `M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z`
        })
    })
}
function w() {
    return (0,
    i.jsx)(`svg`, {
        width: `16`,
        height: `16`,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: `2`,
        strokeLinecap: `round`,
        children: (0,
        i.jsx)(`path`, {
            d: `M4 6h16M4 12h16M4 18h16`
        })
    })
}
export {s as component};
