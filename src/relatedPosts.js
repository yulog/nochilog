var randomRelatedIndex, startRelated;
! function(a, b, c) {
    var d = {
        callBack: function() {}
    };
    for (var e in relatedSettings) d[e] = "undefined" == relatedSettings[e] ? d[e] : relatedSettings[e];
    var f = function(a) {
            var d = b.createElement("script");
            d.type = "text/javascript", d.src = a, c.appendChild(d)
        },
        g = function(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a
        },
        h = function(a) {
            var c, d, b = a.length;
            if (0 === b) return !1;
            for (; --b;) c = Math.floor(Math.random() * (b + 1)), d = a[b], a[b] = a[c], a[c] = d;
            return a
        },
        i = "object" == typeof labelArray && labelArray.length > 0 ? "/-/" + h(labelArray)[0] : "",
        j = function(a) {
            var b = a.feed.openSearch$totalResults.$t - d.relatedPosts,
                c = g(1, b > 0 ? b : 1);
            f(d.blogURL.replace(/\/$/, "") + "/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&start-index=" + c + "&max-results=" + d.relatedPosts + "&callback=startRelated")
        },
        k = function(a) {
            var l, m, n, o, p, q, b = document.getElementById("related-posts-widget"),
                c = h(a.feed.entry),
                e = d.relatedStyle,
                f = d.relatedHeading + '<ul class="related-posts-' + e + '">',
                g = d.openNewTab ? ' target="_blank"' : "",
                i = d.centerText ? "text-align:center;" : "",
                j = d.roundThumbs ? "-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;" : "",
                k = '<span style="display:block;clear:both;"></span>',
                cURL = d.currentURL;
            if (b) {
                for (var r = 0; r < d.relatedPosts && r != c.length; r++) {
                    n = c[r].title.$t, 
                    o = "auto" !== d.titleLength && d.titleLength < n.length ? n.substring(0, d.titleLength) + "&hellip;" : n, 
                    p = "media$thumbnail" in c[r] && d.thumbnailSize !== !1 ? c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/" + d.thumbnailSize) : d.defaultThumb, 
                    prw = "media$thumbnail" in c[r] && d.thumbnailSize !== !1 ? '<source srcset="' + c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/" + d.thumbnailSize + "-rw") + ', ' + c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/" + d.thumbnailSize2x + "-rw") + ' 2x">' : '', 
                    p2x = "media$thumbnail" in c[r] && d.thumbnailSize2x !== !1 ? ' srcset="' + c[r].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/" + d.thumbnailSize2x) + ' 2x"' : '', 
                    l = h(c[r].published.$t);
                    for (var s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], u = l.split("-")[2].substring(0, 2), v = l.split("-")[1], w = l.split("-")[0], x = 0; x < s.length; x++)
                        if (parseInt(v) == s[x]) {
                            v = t[x];
                            break
                        }
                    postdate = v + " " + u + " " + w, q = "summary" in c[r] && d.snippetLength > 0 ? c[r].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, d.snippetLength) + "&hellip;" : "";
                    for (var y = 0, z = c[r].link.length; y < z; y++) m = "alternate" == c[r].link[y].rel ? c[r].link[y].href : "#";
                    var parser = new URL(m);
                    m = "https://" + parser.host + parser.pathname;
                    if (cURL != m) {
                    1 == e ? f += '<li><a href="' + m + '" ' + g + ">" + o + "</a></li>" : 2 == e ? f += '<li><a href="' + m + '" ' + g + '><div class="related-title">' + o + '</div></a><div class="related-snippets">' + q + "</div></li>" : 3 == e ? f += '<li class="related-post-item" style="' + i + '"><a href="' + m + '" ' + g + '><picture>' + prw + '<img alt="" class="related-thumb-large" src="' + p + '"' + p2x + ' style="' + j + '"></picture><div class="related-title">' + o + '</div><div class="related-snippets">' + q + "</div></a></li>" : 4 == e ? f += '<li class="related-post-item" style="' + i + '"><a href="' + m + '" ' + g + '><img alt="" class="related-thumb-large" src="' + p + '" style="' + j + '"><div class="related-title">' + o + '</div></a><div class="related-date">' + postdate + "</div></li>" : 5 == e ? f += '<li class="related-post-item" style="' + i + '"><a href="' + m + '" ' + g + '><img alt="" class="related-thumb-large" src="' + p + '" style="' + j + '"><div class="related-title">' + o + "</div></a></li>" : 6 == e ? f += '<li class="related-post-item"><a href="' + m + '" ' + g + '><img alt="" class="related-thumb-large" src="' + p + '" style="' + j + '"><div class="related-wrapper" style="' + j + '"><div class="related-wrapper-inner"><div class="related-title">' + o + "</div></div></div></a></li>" : 7 == e ? f += '<li class="related-post-item"><a href="' + m + '" ' + g + '><img alt="" class="related-thumb-large" src="' + p + '" style="' + j + '"></a></li>' : 8 == e ? f += '<li class="related-post-item"><a class="related-post-item-wrapper" href="' + m + '" ' + g + '><img alt="" class="related-thumb" src="' + p + '" style="' + j + '"><div class="related-title">' + o + '</div></a><div class="related-date">' + postdate + "</div></li>" : 9 == e && (f += '<li><a href="' + m + '" ' + g + '><img alt="" class="related-thumb" src="' + p + '" style="' + j + '"><div class="related-title">' + o + '</div></a><div class="related-snippets">' + q + "</div></li>")
                    } else if (1 == c.length) {
                        f +='<li>関連記事はありません</li>'
                    }
                }
                b.innerHTML = f += "</ul>" + k, d.callBack()
            }
        };
    randomRelatedIndex = j, startRelated = k, f(d.blogURL.replace(/\/$/, "") + "/feeds/posts/summary" + i + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
}(window, document, document.getElementsByTagName("head")[0]);