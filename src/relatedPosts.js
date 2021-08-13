let randomRelatedIndex, startRelated;
!((_, b, c) => {
    let d = {
        callBack: () => { }
    };
    for (let e in relatedSettings) d[e] = "undefined" == relatedSettings[e] ? d[e] : relatedSettings[e];
    const f = (a) => {
        let d = b.createElement("script");
        d.type = "text/javascript", d.src = a, c.appendChild(d)
    },
        g = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        h = ([...a]) => {
            let b = a.length;
            if (0 === b) return !1;
            for (let i = b - 1; i >= 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            // a.slice().reverse().forEach((_, i) => {
            //     const j = Math.floor(Math.random() * (i + 1));
            //     [a[i], a[j]] = [a[j], a[i]];
            // });
            return a
        },
        i = "object" == typeof labelArray && labelArray.length > 0 ? `/-/${h(labelArray)[0]}` : "",
        j = (a) => {
            let b = a.feed.openSearch$totalResults.$t - d.relatedPosts,
                c = g(1, b > 0 ? b : 1);
            f(`${d.blogURL.replace(/\/$/, "")}/feeds/posts/summary${i}?alt=json-in-script&orderby=updated&start-index=${c}&max-results=${d.relatedPosts}&callback=startRelated`)
        },
        k = (a) => {
            let m, n, o, p, q, prw, p2x, b = document.getElementById("related-posts-widget"),
                c = h(a.feed.entry),
                e = d.relatedStyle,
                src = `${d.relatedHeading}<ul class="related-posts-${e}">`,
                g = d.openNewTab ? ' target="_blank"' : "",
                i = d.centerText ? "text-align:center;" : "",
                j = d.roundThumbs ? "-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;" : "",
                k = '<span style="display:block;clear:both;"></span>',
                cURL = d.currentURL;
            if (b) {
                for (let r = 0; r < d.relatedPosts && r != c.length; r++) {
                    n = c[r].title.$t,
                        o = "auto" !== d.titleLength && d.titleLength < n.length ? `${n.substring(0, d.titleLength)}&hellip;` : n,
                        p = "media$thumbnail" in c[r] && d.thumbnailSize !== !1 ? c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, `/${d.thumbnailSize}`) : d.defaultThumb,
                        prw = "media$thumbnail" in c[r] && d.thumbnailSize !== !1 ? `<source srcset="${c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, `/${d.thumbnailSize}-rw`)}, ${c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, `/${d.thumbnailSize2x}-rw`)} 2x">` : '',
                        p2x = "media$thumbnail" in c[r] && d.thumbnailSize2x !== !1 ? ` srcset="${c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, `/${d.thumbnailSize2x}`)} 2x"` : '';
                    let postdate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(c[r].published.$t));
                    q = "summary" in c[r] && d.snippetLength > 0 ? `${c[r].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.snippetLength)}&hellip;` : "";
                    m = c[r].link.some(l => l.rel == "alternate") ? c[r].link.find(l => l.rel == "alternate").href : "#";
                    let parser = new URL(m);
                    m = `https://${parser.host}${parser.pathname}`;
                    if (cURL != m) {
                        1 == e ? src += `<li><a href="${m}" ${g}>${o}</a></li>` : 2 == e ? src += `<li><a href="${m}" ${g}><div class="related-title">${o}</div></a><div class="related-snippets">${q}</div></li>` : 3 == e ? src += `<li class="related-post-item" style="${i}"><a href="${m}" ${g}><picture>${prw}<img alt="" class="related-thumb-large" src="${p}"${p2x} style="${j}"></picture><div class="related-title">${o}</div><div class="related-snippets">${q}</div></a></li>` : 4 == e ? src += `<li class="related-post-item" style="${i}"><a href="${m}" ${g}><img alt="" class="related-thumb-large" src="${p}" style="${j}"><div class="related-title">${o}</div></a><div class="related-date">${postdate}</div></li>` : 5 == e ? src += `<li class="related-post-item" style="${i}"><a href="${m}" ${g}><img alt="" class="related-thumb-large" src="${p}" style="${j}"><div class="related-title">${o}</div></a></li>` : 6 == e ? src += `<li class="related-post-item"><a href="${m}" ${g}><img alt="" class="related-thumb-large" src="${p}" style="${j}"><div class="related-wrapper" style="${j}"><div class="related-wrapper-inner"><div class="related-title">${o}</div></div></div></a></li>` : 7 == e ? src += `<li class="related-post-item"><a href="${m}" ${g}><img alt="" class="related-thumb-large" src="${p}" style="${j}"></a></li>` : 8 == e ? src += `<li class="related-post-item"><a class="related-post-item-wrapper" href="${m}" ${g}><img alt="" class="related-thumb" src="${p}" style="${j}"><div class="related-title">${o}</div></a><div class="related-date">${postdate}</div></li>` : 9 == e && (src += `<li><a href="${m}" ${g}><img alt="" class="related-thumb" src="${p}" style="${j}"><div class="related-title">${o}</div></a><div class="related-snippets">${q}</div></li>`)
                    } else if (1 == c.length) {
                        src += d.relatedNotfound
                    }
                }
                b.innerHTML = src += `</ul>${k}`, d.callBack()
            }
        };
    randomRelatedIndex = j, startRelated = k, f(`${d.blogURL.replace(/\/$/, "")}/feeds/posts/summary${i}?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex`)
})(window, document, document.getElementsByTagName("head")[0]);